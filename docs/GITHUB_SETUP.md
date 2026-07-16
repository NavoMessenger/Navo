---
layout: default
title: GitHub setup
nav_exclude: true
search_exclude: true
---

# GitHub repository setup (admin)

The authoring account may only have **push** access. An org **admin** (or maintain) should apply the following once on [NavoMessenger/Navo](https://github.com/NavoMessenger/Navo).

## About

| Field | Value |
|-------|--------|
| Description | `Independent Telegram client for Android, Windows & macOS. Flutter + TDLib. iOS coming soon.` |
| Website | `https://www.navo.im` (after Pages + DNS: `https://navo.im`) |

## Topics

```
flutter telegram tdlib android windows macos messenger chat cross-platform open-source
```

## Social preview

Upload a **1280×640** image under Settings → General → Social preview (optional: reuse `docs/images/banner.png`).

## Pages

1. Settings → **Pages**
2. Build and deployment → Source: **Deploy from a branch**
3. Branch: **main** · Folder: **/docs**
4. Save
5. After the first deploy, open `https://navomessenger.github.io/NavoMessenger/`
6. Custom domain: `navo.im` · Enforce HTTPS (see [DNS.md](DNS.md))

`docs/CNAME` already contains `navo.im`.

## Verify after first Release

When the first [Release](https://github.com/NavoMessenger/Navo/releases) is published, confirm asset names match the examples in [download.md](download.md):

- `Navo-{version}-android-universal.apk`
- `Navo-{version}-windows-x64-setup.exe`
- `Navo-{version}-macos-universal.dmg`

Update download.md if CI uses different names.
