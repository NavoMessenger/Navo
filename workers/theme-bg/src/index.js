/**
 * Navo theme wallpaper preview proxy.
 *
 * GET /bg?name=<tdBackgroundName>
 *   → image wallpapers: 302 to CDN
 *   → pattern / fill: 200 image/svg+xml (generated from data-colors)
 *
 * GET /bg?name=<tdBackgroundName>&format=json
 *   → { type, name, url?, colors? }
 *
 * GET /health → { "ok": true }
 */

const CACHE_TTL_SECONDS = 86400; // 24h
const CACHE_VERSION = "v2";
const NAME_RE = /^[A-Za-z0-9_-]{8,128}$/;
const TG_LOGO_RE = /telegram\.org\/img\//i;
const ALLOWED_ORIGINS = new Set([
  "https://www.navo.im",
  "https://navo.im",
  "http://localhost:4000",
  "http://127.0.0.1:4000",
  "https://navo-theme-bg.duckey93.workers.dev",
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : "https://www.navo.im";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Accept, Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(data, status, extraHeaders) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

function normalizeHex(c) {
  const s = String(c || "").trim().replace(/^#/, "");
  if (!/^[a-fA-F0-9]{6}$/.test(s)) return null;
  return `#${s.toLowerCase()}`;
}

function extractBackground(html) {
  // Pattern / multi-color fill: <canvas … data-colors="aabbcc,ddeeff,…">
  const colorsMatch = html.match(
    /id=["']tgme_background["'][^>]*data-colors=["']([^"']+)["']/i,
  ) || html.match(/data-colors=["']([^"']+)["'][^>]*id=["']tgme_background["']/i);

  if (colorsMatch) {
    const colors = colorsMatch[1]
      .split(",")
      .map(normalizeHex)
      .filter(Boolean);
    if (colors.length >= 1) {
      return { type: "pattern", colors, name: null, url: null };
    }
  }

  // Image wallpaper: inline background:url(...)
  const styleUrl = html.match(
    /class=["']tgme_background["'][^>]*style=["'][^"']*background:url\(['"]([^'"]+)['"]\)/i,
  );
  if (styleUrl && /^https:\/\//i.test(styleUrl[1])) {
    return { type: "image", url: styleUrl[1], colors: null };
  }

  // Fallback og:image (skip Telegram logo used for pattern pages)
  let m = html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (!m) m = html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  if (m && /^https:\/\//i.test(m[1]) && !TG_LOGO_RE.test(m[1])) {
    return { type: "image", url: m[1], colors: null };
  }

  return null;
}

/** Approximate Telegram TWallpaper blob field as a static SVG preview. */
function buildPatternSvg(colors) {
  const hex = colors.length ? colors : ["#88b884"];
  const w = 800;
  const h = 1200;
  const positions = [
    [0.8, 0.1],
    [0.6, 0.2],
    [0.35, 0.25],
    [0.25, 0.6],
    [0.2, 0.9],
    [0.4, 0.8],
    [0.65, 0.75],
    [0.75, 0.4],
  ];
  const r = Math.min(w, h) * 0.42;
  const blobs = positions
    .map((p, i) => {
      const c = hex[i % hex.length];
      return `<circle cx="${(p[0] * w).toFixed(1)}" cy="${(p[1] * h).toFixed(1)}" r="${r.toFixed(1)}" fill="${c}"/>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <filter id="b" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="70"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="${hex[0]}"/>
  <g filter="url(#b)" opacity="0.92">${blobs}</g>
</svg>`;
}

function parseName(url) {
  const fromQuery = url.searchParams.get("name");
  if (fromQuery) return fromQuery.trim();

  const parts = url.pathname.split("/").filter(Boolean);
  // /bg/<name> or /v2/bg/<name>
  if (parts.length >= 2 && parts[parts.length - 2] === "bg") {
    return decodeURIComponent(parts[parts.length - 1]);
  }
  if (parts.length === 1 && parts[0] !== "bg" && parts[0] !== "health" && parts[0] !== "v2") {
    return decodeURIComponent(parts[0]);
  }
  return "";
}

async function resolveBackground(name, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(
    `https://navo-theme-bg.cache/${CACHE_VERSION}/bg/${name}`,
  );

  const cached = await cache.match(cacheKey);
  if (cached) {
    const data = await cached.json();
    if (data && data.type) return data;
  }

  const tgUrl = `https://t.me/bg/${encodeURIComponent(name)}`;
  const tgRes = await fetch(tgUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; NavoThemePreview/1.0; +https://www.navo.im)",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
    cf: {
      cacheTtl: 3600,
      cacheEverything: true,
    },
  });

  if (!tgRes.ok) {
    throw new Error(`t.me status ${tgRes.status}`);
  }

  const html = await tgRes.text();
  const parsed = extractBackground(html);
  if (!parsed) {
    throw new Error("background not found");
  }

  const payload = {
    ...parsed,
    name,
    resolvedAt: Date.now(),
  };

  const cacheRes = new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
    },
  });
  ctx.waitUntil(cache.put(cacheKey, cacheRes.clone()));

  return payload;
}

export default {
  async fetch(request, env, ctx) {
    const cors = corsHeaders(request);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return json({ error: "method_not_allowed" }, 405, cors);
    }

    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ ok: true }, 200, cors);
    }

    if (url.pathname === "/" && !url.searchParams.has("name")) {
      return json(
        {
          service: "navo-theme-bg",
          usage: "GET /v2/bg?name=<tdBackgroundName> [&format=json]",
          types: ["image", "pattern"],
        },
        200,
        cors,
      );
    }

    // Accept /bg and /v2/bg (v2 avoids stale CDN entries from older image-only responses).
    if (
      url.pathname !== "/bg" &&
      url.pathname !== "/v2/bg" &&
      !url.pathname.startsWith("/bg/") &&
      !url.pathname.startsWith("/v2/bg/") &&
      !url.searchParams.has("name")
    ) {
      return json({ error: "not_found" }, 404, cors);
    }

    const name = parseName(url);
    if (!name || !NAME_RE.test(name)) {
      return json(
        { error: "invalid_name", hint: "Pass ?name= Telegram background id" },
        400,
        cors,
      );
    }

    try {
      const bg = await resolveBackground(name, ctx);
      const wantJson =
        url.searchParams.get("format") === "json" ||
        (request.headers.get("Accept") || "").includes("application/json");

      if (wantJson) {
        return json(bg, 200, {
          ...cors,
          "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
        });
      }

      if (bg.type === "image" && bg.url) {
        return new Response(null, {
          status: 302,
          headers: {
            ...cors,
            Location: bg.url,
            "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
          },
        });
      }

      if (bg.type === "pattern" && bg.colors) {
        const svg = buildPatternSvg(bg.colors);
        return new Response(svg, {
          status: 200,
          headers: {
            ...cors,
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
          },
        });
      }

      return json({ error: "unsupported_type", background: bg }, 502, cors);
    } catch (err) {
      const message = err && err.message ? err.message : "resolve_failed";
      return json({ error: "resolve_failed", message }, 502, cors);
    }
  },
};
