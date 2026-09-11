---
layout: default
title: 下载
permalink: /zh-CN/download.html
nav_exclude: true
---

# 下载与安装

<div class="download-cta" markdown="0">
  <a class="home-btn home-btn--primary home-btn--sm" href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener">Google Play</a>
  <a class="home-btn home-btn--primary home-btn--sm" href="https://testflight.apple.com/join/mC3AXH8K" rel="noopener">TestFlight</a>
  <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="android" rel="noopener">Android APK</a>
  <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="windows" rel="noopener">Windows</a>
  <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="macos" rel="noopener">macOS</a>
</div>

预编译安装包发布在 **[GitHub Releases](https://github.com/NavoMessenger/Navo/releases/latest)**。具体文件名以最新 Release 页的 Assets 为准。

**最新版本：** <a href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-version>latest</a> · [Releases 页面](https://github.com/NavoMessenger/Navo/releases/latest)

## Android

### 推荐：Google Play

从 [Google Play](https://play.google.com/store/apps/details?id=im.navo.app) 安装，可自动更新。

### 备选：Release APK

1. 打开 [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest)。
2. 下载 Android APK（常见命名：`navo-{version}+{build}-arm64-v8a-release.apk`）。
3. 如系统提示，允许未知来源安装后打开 APK。

**系统要求：** Android 7.0（API 24）及以上（以 Release 说明为准）。

## Windows

1. 打开 [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest)。
2. 下载 Windows 安装包（若已发布，常见命名：`navo-{version}-windows-*.exe`）。
3. 运行安装程序。若出现 **Windows SmartScreen**，选择「更多信息」→「仍要运行」。
4. 从开始菜单启动 Navo。

**系统要求：** Windows 10 / 11，64 位。

## macOS

1. 打开 [Latest Release](https://github.com/NavoMessenger/Navo/releases/latest)。
2. 下载 macOS 安装包（常见命名：`navo-{version}+{build}-macos-adhoc.dmg`）。
3. 打开 DMG，将 Navo 拖入「应用程序」。
4. 首次打开若提示**无法验证开发者**：
   - 打开 **系统设置 → 隐私与安全性**
   - 找到拦截提示，点击 **仍要打开**
   - 或：右键应用 → **打开** → 确认

**系统要求：** macOS 12 及以上。优先选择 universal 构建（Apple Silicon 与 Intel）。

## iOS（TestFlight 公测）

iOS 目前通过 [TestFlight](https://testflight.apple.com/join/mC3AXH8K) 提供公开测试。

1. 从 App Store 安装 Apple 的 TestFlight 应用。
2. 打开 [Navo TestFlight 邀请](https://testflight.apple.com/join/mC3AXH8K)。
3. 点击「接受」，然后点击「安装」。邀请页会显示当前名额与设备兼容情况。

测试版会在 TestFlight 显示的期限后过期；有新版本时请及时更新。

开发者自行构建（需 Apple Developer Program）：见 [从源码构建]({{ site.baseurl }}/build.html#ios)。

## 校验下载（可选）

若 Release 提供校验和：

```bash
# macOS / Linux
shasum -a 256 Navo-*-android-universal.apk

# Windows (PowerShell)
Get-FileHash .\Navo-*-windows-x64-setup.exe -Algorithm SHA256
```

将结果与 Release 页公布的值对照。

## 常见问题

| 问题 | 处理 |
|------|------|
| Windows 安装被拦截 | SmartScreen → 更多信息 → 仍要运行 |
| macOS「无法打开」 | 隐私与安全性 → 仍要打开 |
| Android 无法安装 APK | 允许来自该浏览器/文件管理器的安装 |
| 登录或 TDLib 错误 | 检查网络；必要时到 [Issues](https://github.com/NavoMessenger/Navo/issues) 反馈 |

[English]({{ site.baseurl }}/download.html) · [首页]({{ site.baseurl }}/zh-CN/)
