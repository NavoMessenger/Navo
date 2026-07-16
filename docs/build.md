---
layout: default
title: Build
permalink: /build.html
nav_order: 3
---

# Building from source

**End users should use [prebuilt Releases](https://github.com/NavoMessenger/Navo/releases/latest).** This guide is for developers and contributors.

Source of truth: **[NavoMessenger/Navo](https://github.com/NavoMessenger/Navo)**.

## Prerequisites

- [Flutter](https://docs.flutter.dev/get-started/install) stable (match the version in the main repo’s `pubspec.yaml` / CI)
- Platform toolchains:
  - **Android:** Android SDK, NDK as required by the project
  - **Windows:** Visual Studio with Desktop development C++
  - **macOS / iOS:** Xcode + CocoaPods
- Telegram API credentials from [my.telegram.org](https://my.telegram.org) (`api_id`, `api_hash`)
- Git, CMake / platform build tools for TDLib native libraries

Exact dependency pins and env vars live in the main repository — follow its README and CI workflows when they differ from this summary.

## Clone & setup

```bash
git clone https://github.com/NavoMessenger/Navo.git
cd Navo
flutter pub get
```

Configure `api_id` / `api_hash` as documented in the main repo (typically via local config or dart-define; **do not commit secrets**).

## Build: Android

```bash
flutter build apk
# or
flutter build appbundle
```

Outputs are under `build/app/outputs/`. For signed store builds, use your keystore and the project’s signing config.

## Build: Windows

```bash
flutter build windows
```

Requires a Windows machine with the Flutter desktop toolchain. Packaging into an installer (`.exe` / `.msi`) is handled by the project’s release scripts or CI when available.

## Build: macOS

```bash
flutter build macos
```

Optional: code-sign with an Apple Developer ID for distribution outside the App Store. Unsigned builds work for local use; first-run Gatekeeper prompts are expected.

## Build: iOS {#ios}

> **For developers only.** Ordinary users should wait for the App Store listing. An Apple Developer Program membership is required to run on devices and to ship to the App Store.

1. Join the [Apple Developer Program](https://developer.apple.com/programs/).
2. Open the iOS project in Xcode and configure signing (team, bundle id).
3. Build:

```bash
flutter build ios
```

Then archive / distribute via Xcode as usual. The public App Store release is in preparation; this path is not a substitute for end-user distribution.

## TDLib native libraries

Navo talks to Telegram through **TDLib** (`libtdjson`) via Dart FFI. Native libraries are **built from source per platform** and are not committed to the repository.

Follow the main repo’s scripts or CI jobs (for example the Android APK workflow) to compile TDLib for your target. Rebuild TDLib when upgrading TDLib versions.

## CI

Automated builds run on GitHub Actions in the main repo, including:

- [master-apk.yml](https://github.com/NavoMessenger/Navo/actions/workflows/master-apk.yml)

Use CI logs as the reference for exact Flutter versions, NDK, and TDLib steps.

## Related

- [Download & install](download.html) — prebuilt packages for users
- [Navo on GitHub](https://github.com/NavoMessenger/Navo)
