<p align="center">
  <img src="docs/images/banner.png" alt="Navo" width="720" />
</p>

# Navo

**English** | [简体中文](README.zh-CN.md)

Independent, unofficial messenger for **Android, Windows, and macOS**. Sign in with your existing Telegram account — built with **Flutter** on **[TDLib](https://core.telegram.org/tdlib)**.

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=im.navo.app)
[![Latest Release](https://img.shields.io/github/v/release/NavoMessenger/Navo?label=Download)](https://github.com/NavoMessenger/Navo/releases/latest)
[![Website](https://img.shields.io/badge/Website-navo.im-2D7FF9)](https://www.navo.im)
[![CI](https://github.com/NavoMessenger/Navo/actions/workflows/master-apk.yml/badge.svg)](https://github.com/NavoMessenger/Navo/actions)

> **Disclaimer** — Navo is an **independent, unofficial** project. It is **not affiliated with, endorsed by, or connected to Telegram**. "Telegram" is a trademark of its respective owner. Use at your own risk and in accordance with Telegram's [Terms of Service](https://telegram.org/tos) and [API Terms](https://core.telegram.org/api/terms).

## Quick start

1. **Android** — Install from [Google Play](https://play.google.com/store/apps/details?id=im.navo.app), or grab the APK from [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest).
2. **Windows / macOS** — Download the installer from [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest).
3. **Details** — See [docs/download.md](docs/download.md) or the [website download page](https://www.navo.im/download.html).

## Download

| Platform | How to get it | Status |
|----------|---------------|--------|
| **Android** | [Google Play](https://play.google.com/store/apps/details?id=im.navo.app) · [Release APK](https://github.com/NavoMessenger/Navo/releases/latest) | Available |
| **Windows** | [GitHub Release](https://github.com/NavoMessenger/Navo/releases/latest) (`.exe` / `.msi`) | Available |
| **macOS** | [GitHub Release](https://github.com/NavoMessenger/Navo/releases/latest) (`.dmg` / `.zip`) | Available |
| **iOS** | App Store | **Coming soon** — Apple Developer account in progress |

iOS is not yet on the App Store. There is no public TestFlight or sideload build for end users. Star this repo or watch [Releases](https://github.com/NavoMessenger/Navo/releases) for updates. Developers who need an iOS build (Apple Developer Program required) can see [docs/build.md#ios](docs/build.md#ios).

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

## Roadmap

- **Android** — Available on Google Play
- **Windows / macOS** — Prebuilt packages via [GitHub Releases](https://github.com/NavoMessenger/Navo/releases/latest)
- **iOS** — Apple Developer account in progress; App Store listing coming soon
- Contributions welcome via Issues and Pull Requests

## Why open source

Navo is open source so you can inspect how it talks to Telegram via TDLib, audit privacy-related behavior, and build trust beyond a store listing alone. The repository contains original, independently written code — no proprietary assets from third-party apps.

## Building from source

**End users should prefer [GitHub Releases](https://github.com/NavoMessenger/Navo/releases/latest).** Building from source is for developers and contributors.

Need to compile for Android, Windows, or macOS? See the full guide:

**[docs/build.md](docs/build.md)** — prerequisites, Telegram API credentials, native TDLib build, signing, and CI.

iOS builds require an Apple Developer Program membership; the App Store version is in preparation. Ordinary users should wait for the App Store release.

## Architecture (brief)

- **Flutter** UI (`lib/`), state via `provider` + `ChangeNotifier`
- **TDLib** via Dart FFI (`lib/tdlib/`); native `libtdjson` is built from source per platform (not committed)
- Adaptive light / dark theming; Cupertino / custom UI components

## Community

If Navo is useful, please **[star the repo](https://github.com/NavoMessenger/Navo)** so others can find it. Feedback and bug reports are welcome in [Issues](https://github.com/NavoMessenger/Navo/issues).

## License & credits

TDLib is © Telegram, used under its own license. This repository contains only original, independently written code; it ships no third-party app's proprietary assets or trademarks.

---

Navo is **not affiliated with, endorsed by, or connected to Telegram**. "Telegram" is a trademark of its respective owner. Navo is an unofficial client. Use of Telegram's network is subject to Telegram's Terms of Service. You are responsible for complying with applicable laws and Telegram's rules.

[Privacy Policy](https://www.navo.im/privacy.html) · [Terms of Service](https://www.navo.im/terms.html) · [Website](https://www.navo.im)
