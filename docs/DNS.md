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
