<p align="center">
  <img src="docs/images/banner.png" alt="Navo" width="720" />
</p>

# Navo

[English](README2.md) | **简体中文**

独立、非官方的 Android 即时通讯客户端。使用现有 Telegram 账号登录 — 基于 **Flutter** 与 **[TDLib](https://core.telegram.org/tdlib)** 构建。

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=im.navo.app)
[![Website](https://img.shields.io/badge/Website-navo.im-2D7FF9)](https://www.navo.im)
[![CI](https://github.com/NavoMessenger/Navo/actions/workflows/master-apk.yml/badge.svg)](https://github.com/NavoMessenger/Navo/actions)

> **免责声明** — Navo 是一个**独立、非官方**项目，**与 Telegram 无隶属、背书或关联关系**。"Telegram" 为其各自所有者的商标。请自行承担风险，并遵守 Telegram 的[服务条款](https://telegram.org/tos)与 [API 条款](https://core.telegram.org/api/terms)。

## 下载

| 平台 | 状态 |
|------|------|
| **Android** | 已上架 [Google Play](https://play.google.com/store/apps/details?id=im.navo.app) |
| **iOS** | 暂未上架 App Store — [从源码构建](docs/BUILD.md) |
| **macOS / Windows** | 从源码构建 — 见 [docs/BUILD.md](docs/BUILD.md) |

- 官网：<https://www.navo.im>
- 隐私政策：<https://www.navo.im/privacy.html>
- 服务条款：<https://www.navo.im/terms.html>

## 功能

使用现有 Telegram 账号登录，在简洁、专注的界面中与好友和群组聊天。继续使用你已熟悉的 Telegram 网络 — 体验更轻量的客户端。

- 聊天列表与实时会话更新
- 贴纸与动态贴纸（`.tgs` / `.webm`）
- 语音消息、图片、文件与媒体
- 投票、清单与位置分享
- 联系人、个人资料与 Stories 风格动态
- 一对一语音与视频通话
- 浅色 / 深色主题，以及可自定义应用图标
- 注重隐私的功能，如关键词屏蔽与举报工具

## 截图

<!-- 将 3–6 张截图放到 docs/images/screenshots/ 后取消注释：
<p align="center">
  <img src="docs/images/screenshots/chat.png" width="180" alt="聊天" />
  <img src="docs/images/screenshots/list.png" width="180" alt="聊天列表" />
  <img src="docs/images/screenshots/settings.png" width="180" alt="设置" />
</p>
-->

*截图即将补充。*

## 为什么开源

Navo 开源，便于你检查它如何通过 TDLib 连接 Telegram、审计与隐私相关的行为，并在商店页面之外建立信任。本仓库仅包含原创、独立编写的代码 — 不含第三方应用的专有资源。

## 从源码构建

需要为 Android、iOS、macOS 或 Windows 编译？请参阅完整指南：

**[docs/BUILD.md](docs/BUILD.md)** — 环境依赖、Telegram API 凭证、原生 TDLib 构建、签名与 CI。

## 架构（简要）

- **Flutter** UI（`lib/`），状态管理使用 `provider` + `ChangeNotifier`
- **TDLib** 通过 Dart FFI（`lib/tdlib/`）；各平台的原生 `libtdjson` **从源码编译**（不提交到仓库）
- 自适应浅色 / 深色主题；Cupertino / 自定义 UI 组件

## 许可与致谢

TDLib © Telegram，按其自身许可使用。本仓库仅包含原创、独立编写的代码；不包含任何第三方应用的专有资源或商标。

---

Navo **与 Telegram 无隶属、背书或关联关系**。"Telegram" 为其各自所有者的商标。Navo 是非官方客户端。使用 Telegram 网络须遵守 Telegram 服务条款。你有责任遵守适用法律与 Telegram 规则。

[隐私政策](https://www.navo.im/privacy.html) · [服务条款](https://www.navo.im/terms.html) · [官网](https://www.navo.im)
