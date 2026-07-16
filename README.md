<p align="center">
  <img src="docs/images/banner.png" alt="Navo" width="720" />
</p>

# Navo

**English** | [简体中文](README.zh-CN.md)

Independent, unofficial messenger for Android. Sign in with your existing Telegram account — built with **Flutter** on **[TDLib](https://core.telegram.org/tdlib)**.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=im.navo.app)
[![Website](https://img.shields.io/badge/Website-navo.im-2D7FF9)](https://www.navo.im)
[![CI](https://github.com/NavoMessenger/Navo/actions/workflows/master-apk.yml/badge.svg)](https://github.com/NavoMessenger/Navo/actions)

> **Disclaimer** — Navo is an **independent, unofficial** project. It is **not affiliated with, endorsed by, or connected to Telegram**. "Telegram" is a trademark of its respective owner. Use at your own risk and in accordance with Telegram's [Terms of Service](https://telegram.org/tos) and [API Terms](https://core.telegram.org/api/terms).

## Download

| Platform | Status |
|----------|--------|
| **Android** | Available on [Google Play](https://play.google.com/store/apps/details?id=im.navo.app) |
| **iOS** | Not on the App Store yet — [build from source](docs/BUILD.md) |
| **macOS / Windows** | Build from source — see [docs/BUILD.md](docs/BUILD.md) |

- Website: <https://www.navo.im>
- Privacy Policy: <https://www.navo.im/privacy.html>
- Terms of Service: <https://www.navo.im/terms.html>

## Features

Sign in with your existing Telegram account to message friends and groups in a clean, focused interface. Stay on the Telegram network you already use — with a lighter client experience.

- Chat list and conversations with live updates
- Stickers and animated stickers (`.tgs` / `.webm`)
- Voice notes, photos, files, and media
- Polls, checklists, and location sharing
- Contacts, profiles, and Stories-style moments
- One-to-one voice and video calls
- Light and dark themes, plus customizable app icons
- Privacy-minded controls such as keyword blocking and reporting tools

## Screenshots

<!-- Add 3–6 screenshots under docs/images/screenshots/ and uncomment:
<p align="center">
  <img src="docs/images/screenshots/chat.png" width="180" alt="Chat" />
  <img src="docs/images/screenshots/list.png" width="180" alt="Chat list" />
  <img src="docs/images/screenshots/settings.png" width="180" alt="Settings" />
</p>
-->

*Screenshots coming soon.*

## Why open source

Navo is open source so you can inspect how it talks to Telegram via TDLib, audit privacy-related behavior, and build trust beyond a store listing alone. The repository contains original, independently written code — no proprietary assets from third-party apps.

## Building from source

Need to compile for Android, iOS, macOS, or Windows? See the full guide:

**[docs/BUILD.md](docs/BUILD.md)** — prerequisites, Telegram API credentials, native TDLib build, signing, and CI.

## Architecture (brief)

- **Flutter** UI (`lib/`), state via `provider` + `ChangeNotifier`
- **TDLib** via Dart FFI (`lib/tdlib/`); native `libtdjson` is built from source per platform (not committed)
- Adaptive light / dark theming; Cupertino / custom UI components

## License & credits

TDLib is © Telegram, used under its own license. This repository contains only original, independently written code; it ships no third-party app's proprietary assets or trademarks.

---

Navo is **not affiliated with, endorsed by, or connected to Telegram**. "Telegram" is a trademark of its respective owner. Navo is an unofficial client. Use of Telegram's network is subject to Telegram's Terms of Service. You are responsible for complying with applicable laws and Telegram's rules.

[Privacy Policy](https://www.navo.im/privacy.html) · [Terms of Service](https://www.navo.im/terms.html) · [Website](https://www.navo.im)
