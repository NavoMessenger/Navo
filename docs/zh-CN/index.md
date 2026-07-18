---
layout: home
title: Navo
nav_exclude: true
permalink: /zh-CN/
lang: zh
description: 独立的 Android / Windows / macOS Telegram 客户端。Messaging that keeps life moving.
---

<section class="home-hero">
  <div class="home-hero__atmosphere" aria-hidden="true"></div>
  <div class="home-hero__content">
    <h1 class="home-hero__brand">Navo</h1>
    <p class="home-hero__slogan">Messaging that keeps life moving.</p>
    <p class="home-hero__lead">独立、非官方的 Android / Windows / macOS 即时通讯客户端。使用现有 Telegram 账号登录，在熟悉的网络上体验更轻量的客户端。</p>
    <div class="home-hero__cta">
      <a class="home-btn home-btn--primary" href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener">Google Play</a>
      <a class="home-btn home-btn--secondary" href="{{ '/zh-CN/download.html' | relative_url }}">下载</a>
      <a class="home-btn home-btn--ghost" href="https://github.com/NavoMessenger/Navo" rel="noopener">GitHub</a>
    </div>
  </div>
  <div class="home-hero__visual">
    <img
      src="{{ '/images/banner.png' | relative_url }}"
      alt="Navo 手机端聊天列表界面 — Fast、Secure、Connected、Simple"
      width="1440"
      height="720"
      decoding="async"
      fetchpriority="high"
    >
  </div>
</section>

<section class="home-section home-features" id="features">
  <div class="home-section__inner">
    <header class="home-section__header home-reveal">
      <h2>让对话持续向前</h2>
      <p>在你已使用的 Telegram 网络上，提供更轻量的日常沟通体验。</p>
    </header>
    <div class="home-features__grid">
      <article class="home-feature home-reveal">
        <h3>Fast</h3>
        <p>实时聊天列表与会话，贴纸、语音、图片与文件，少干扰、快到达。</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Secure</h3>
        <p>关键词屏蔽等注重隐私的控制，开源可审计。</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Connected</h3>
        <p>联系人、资料、Stories 风格动态，以及投票、清单与位置分享。</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Simple</h3>
        <p>一对一语音与视频通话，浅色 / 深色主题与可自定义应用图标。</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section home-platforms" id="download">
  <div class="home-section__inner">
    <header class="home-section__header home-reveal">
      <h2>获取 Navo</h2>
      <p>已支持 Android、Windows 与 macOS，iOS 即将推出。</p>
    </header>
    <ul class="home-platforms__list home-reveal">
      <li>
        <span class="home-platforms__name">Android</span>
        <span class="home-platforms__actions">
          <a class="home-btn home-btn--primary home-btn--sm" href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener">Google Play</a>
          <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="android" rel="noopener">APK</a>
        </span>
      </li>
      <li>
        <span class="home-platforms__name">Windows</span>
        <span class="home-platforms__actions">
          <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="windows" rel="noopener">安装包</a>
        </span>
      </li>
      <li>
        <span class="home-platforms__name">macOS</span>
        <span class="home-platforms__actions">
          <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="macos" rel="noopener">DMG</a>
        </span>
      </li>
      <li>
        <span class="home-platforms__name">iOS</span>
        <span class="home-platforms__status">即将推出</span>
      </li>
    </ul>
    <p class="home-platforms__more home-reveal">
      <a href="{{ '/zh-CN/download.html' | relative_url }}">完整安装说明 →</a>
    </p>
  </div>
</section>

<section class="home-section home-trust" id="open-source">
  <div class="home-section__inner home-reveal">
    <h2>开源</h2>
    <p>Navo 开源，便于你检查它如何通过 TDLib 连接 Telegram，并审计与隐私相关的行为。</p>
    <p class="home-trust__links">
      <a href="https://github.com/NavoMessenger/Navo" rel="noopener">在 GitHub 查看源码</a>
      <a href="{{ '/build.html' | relative_url }}">从源码构建</a>
    </p>
    <p class="home-trust__disclaimer">Navo <strong>与 Telegram 无隶属、背书或关联关系</strong>。请自行承担风险，并遵守 Telegram 服务条款。</p>
  </div>
</section>
