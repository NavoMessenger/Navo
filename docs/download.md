---
layout: default
title: Download
permalink: /download.html
nav_order: 2
---

# Download & Install

Prebuilt packages are published on **[GitHub Releases](https://github.com/NavoMessenger/Navo/releases/latest)**. Asset names may vary by version — always use the files listed on the latest Release page.

**Latest release:** [https://github.com/NavoMessenger/Navo/releases/latest](https://github.com/NavoMessenger/Navo/releases/latest)

## Android

### Recommended: Google Play

Install from [Google Play](https://play.google.com/store/apps/details?id=im.navo.app) for automatic updates.

### Alternative: Release APK

1. Open [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest).
2. Download the Android APK (typical name: `Navo-{version}-android-universal.apk`).
3. On your device, allow installation from unknown sources if prompted, then open the APK.

**Requirements:** Android 7.0 (API 24) or newer (exact minimum may change; check the Release notes).

## Windows

1. Open [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest).
2. Download the Windows installer (typical name: `Navo-{version}-windows-x64-setup.exe`).
3. Run the installer. If **Windows SmartScreen** appears, choose *More info* → *Run anyway* (the build is not yet widely attested).
4. Launch Navo from the Start menu.

**Requirements:** Windows 10 or 11, 64-bit.

## macOS

1. Open [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest).
2. Download the macOS package (typical name: `Navo-{version}-macos-universal.dmg`).
3. Open the DMG and drag Navo to Applications.
4. On first launch, if macOS says the app **cannot be verified**:
   - Open **System Settings → Privacy & Security**
   - Find the blocked app notice and click **Open Anyway**
   - Or: right-click the app → **Open** → confirm

**Requirements:** macOS 12 or newer. Prefer the universal build when available (Apple Silicon and Intel).

## iOS (coming soon)

iOS is **not** on the App Store yet. An Apple Developer account is in progress.

- No public TestFlight or sideload package for end users
- After launch, distribution will be via the App Store
- Star [NavoMessenger/Navo](https://github.com/NavoMessenger/Navo) or watch [Releases](https://github.com/NavoMessenger/Navo/releases) for updates

Developers who need to compile for iOS (Apple Developer Program required): see [Build from source](build.html#ios).

## Verify downloads (optional)

If a Release provides checksums (for example `SHA256SUMS` or hashes in the release body):

```bash
# macOS / Linux
shasum -a 256 Navo-*-android-universal.apk

# Windows (PowerShell)
Get-FileHash .\Navo-*-windows-x64-setup.exe -Algorithm SHA256
```

Compare the output with the value published on the Release page.

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Installer blocked (Windows) | SmartScreen → More info → Run anyway |
| “App can’t be opened” (macOS) | Privacy & Security → Open Anyway |
| APK install blocked (Android) | Allow install from that browser/file manager |
| Login or TDLib errors | Check network; open an [Issue](https://github.com/NavoMessenger/Navo/issues) with logs if possible |
| Wrong architecture | Download the asset matching your OS/CPU from the latest Release |

Still stuck? [Open an Issue](https://github.com/NavoMessenger/Navo/issues).

[简体中文](zh-CN/download.html) · [Build from source](build.html) · [Home]({{ site.baseurl }}/)
