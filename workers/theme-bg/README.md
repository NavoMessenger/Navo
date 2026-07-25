# navo-theme-bg

Cloudflare Worker that resolves Telegram chat-background preview images for the Navo theme share page (`/theme`).

## Endpoint

```
GET https://api.navo.im/bg?name=<tdBackgroundName>
→ 302 Location: https://cdn*.telesco.pe/file/...

GET https://api.navo.im/bg?name=<tdBackgroundName>&format=json
→ { "url": "https://cdn…/file/…", "name": "…" }

GET https://api.navo.im/health
→ { "ok": true }
```

Resolved URLs are cached at the edge for 24 hours.

## Deploy

```bash
cd workers/theme-bg
npm install
npx wrangler login
npx wrangler deploy
```

After deploy, Wrangler prints a `*.workers.dev` URL. Current deploy:

`https://navo-theme-bg.duckey93.workers.dev`

The theme page already tries this host first, then `https://api.navo.im`.

## Custom domain `api.navo.im`

Requires the `navo.im` zone on Cloudflare (DNS can still keep `www` → GitHub Pages).

1. Cloudflare Dashboard → Workers → **navo-theme-bg** → **Triggers** → **Custom Domains** → add `api.navo.im`  
   **or** uncomment in `wrangler.jsonc`:

   ```jsonc
   "routes": [{ "pattern": "api.navo.im", "custom_domain": true }]
   ```

2. Ensure DNS for `api` is managed by Cloudflare (proxied). Leave `www` as CNAME to `navomessenger.github.io` if the marketing site stays on GitHub Pages.

3. Confirm:

   ```bash
   curl -sI "https://api.navo.im/bg?name=IbEJCGueIFeNBAAAMWq_kDGNQ7I"
   # expect 302 + Location: https://cdn…
   ```

## Local dev

```bash
npm run dev
# http://127.0.0.1:8787/bg?name=IbEJCGueIFeNBAAAMWq_kDGNQ7I
```
