---
layout: default
title: DNS (ops)
nav_exclude: true
search_exclude: true
---

# Custom domain DNS for navo.im

This file is for maintainers. It is hidden from the site nav.

## GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/docs`
4. Custom domain: `navo.im`
5. Enable **Enforce HTTPS** after DNS verifies

Custom domain is active when:

1. `docs/CNAME` contains the primary host (currently `www.navo.im`; apex `navo.im` should redirect to it)
2. `_config.yml` has `url: "https://www.navo.im"` and **`baseurl: ""`** (never `/Navo` with a custom domain — that breaks CSS/images)
3. `aux_links` / footer paths are root-relative (`/download.html`, not `/Navo/...`)
4. DNS is configured as below and **Enforce HTTPS** is enabled in Pages settings

## DNS records

At your DNS host, point the apex (and optionally `www`) to GitHub Pages:

### Apex `navo.im` (A records)

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### Optional `www` (CNAME)

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `navomessenger.github.io` |

## After DNS

1. Wait for GitHub Pages to show domain as verified + HTTPS active.
2. Confirm `https://navo.im/`, `/download.html`, `/privacy.html`, `/terms.html`.
3. Align Play Store / About website URLs to `https://navo.im`.
4. Preview without custom domain: `https://navomessenger.github.io/NavoMessenger/` (may redirect once CNAME is active).

## Theme wallpaper API (`api.navo.im`)

The theme share page (`/theme`) loads Telegram cloud wallpapers via a **Cloudflare Worker** (`workers/theme-bg`), not through GitHub Pages.

### Why a separate host

`www` stays on GitHub Pages. The Worker needs a Cloudflare-proxied hostname so it can fetch `t.me/bg/…`, cache the `og:image` URL, and 302 to the CDN.

### Setup

1. Put the **`navo.im` zone on Cloudflare** (nameservers), or at least manage `api` there.
2. Keep marketing site records as above (`www` → `navomessenger.github.io`; apex A → GitHub if desired). **Do not** orange-cloud `www` if you want GitHub Pages to terminate TLS as today — grey-cloud CNAME to GitHub is fine; only `api` must be proxied by Cloudflare.
3. Deploy the Worker:

   ```bash
   cd workers/theme-bg
   npm install
   npx wrangler login
   npx wrangler deploy
   ```

4. Attach custom domain **`api.navo.im`** to Worker `navo-theme-bg` (Dashboard → Triggers → Custom Domains), or uncomment the `routes` entry in `workers/theme-bg/wrangler.jsonc` and redeploy.
5. Verify:

   ```bash
   curl -sI "https://api.navo.im/bg?name=IbEJCGueIFeNBAAAMWq_kDGNQ7I"
   # HTTP/2 302  +  Location: https://cdn….telesco.pe/…
   ```

Until `api.navo.im` is live, `/theme` falls back to public CORS proxies (slower).

See [`workers/theme-bg/README.md`](../workers/theme-bg/README.md).
