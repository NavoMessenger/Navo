/**
 * Navo theme wallpaper preview proxy.
 *
 * GET /bg?name=<tdBackgroundName>
 *   → 302 to Telegram og:image (cached), for use as <img> / CSS background-image
 *
 * GET /bg?name=<tdBackgroundName>&format=json
 *   → { "url": "https://cdn…/file/…" }
 *
 * GET /health → { "ok": true }
 */

const CACHE_TTL_SECONDS = 86400; // 24h
const NAME_RE = /^[A-Za-z0-9_-]{8,128}$/;
const ALLOWED_ORIGINS = new Set([
  "https://www.navo.im",
  "https://navo.im",
  "http://localhost:4000",
  "http://127.0.0.1:4000",
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

function extractOgImage(html) {
  let m = html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (m) return m[1];
  m = html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  if (m) return m[1];
  m = html.match(/background:url\(['"]([^'"]+)['"]\)/i);
  if (m) return m[1];
  return null;
}

function parseName(url) {
  const fromQuery = url.searchParams.get("name");
  if (fromQuery) return fromQuery.trim();

  // /bg/<name> or /<name>
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length >= 2 && parts[0] === "bg") return parts[1];
  if (parts.length === 1 && parts[0] !== "bg" && parts[0] !== "health") {
    return parts[0];
  }
  return "";
}

async function resolveImageUrl(name, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(`https://navo-theme-bg.cache/bg/${name}`);

  const cached = await cache.match(cacheKey);
  if (cached) {
    const data = await cached.json();
    if (data && data.url) return data.url;
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
      // Cache Telegram HTML at CF edge briefly
      cacheTtl: 3600,
      cacheEverything: true,
    },
  });

  if (!tgRes.ok) {
    throw new Error(`t.me status ${tgRes.status}`);
  }

  const html = await tgRes.text();
  const imageUrl = extractOgImage(html);
  if (!imageUrl || !/^https:\/\//i.test(imageUrl)) {
    throw new Error("og:image not found");
  }

  const body = JSON.stringify({ url: imageUrl, name, resolvedAt: Date.now() });
  const cacheRes = new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
    },
  });
  ctx.waitUntil(cache.put(cacheKey, cacheRes.clone()));

  return imageUrl;
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

    if (url.pathname === "/health" || url.pathname === "/") {
      if (url.pathname === "/" && !url.searchParams.has("name")) {
        return json(
          {
            service: "navo-theme-bg",
            usage: "GET /bg?name=<tdBackgroundName>",
          },
          200,
          cors,
        );
      }
      if (url.pathname === "/health") {
        return json({ ok: true }, 200, cors);
      }
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
      const imageUrl = await resolveImageUrl(name, ctx);
      const wantJson =
        url.searchParams.get("format") === "json" ||
        (request.headers.get("Accept") || "").includes("application/json");

      if (wantJson) {
        return json(
          { url: imageUrl, name },
          200,
          {
            ...cors,
            "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
          },
        );
      }

      // Default: redirect so CSS/img can use this URL directly.
      return new Response(null, {
        status: 302,
        headers: {
          ...cors,
          Location: imageUrl,
          "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
        },
      });
    } catch (err) {
      const message = err && err.message ? err.message : "resolve_failed";
      return json({ error: "resolve_failed", message }, 502, cors);
    }
  },
};
