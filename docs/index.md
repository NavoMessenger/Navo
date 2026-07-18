---
layout: home
title: Navo
nav_exclude: true
permalink: /
lang: en
description: Independent Telegram client for Android, Windows & macOS. Messaging that keeps life moving.
---

<section class="home-hero">
  <div class="home-hero__atmosphere" aria-hidden="true"></div>
  <div class="home-hero__content">
    <h1 class="home-hero__brand">Navo</h1>
    <p class="home-hero__slogan">Messaging that keeps life moving.</p>
    <p class="home-hero__lead">Independent, unofficial messenger for Android, Windows, and macOS. Sign in with your existing Telegram account.</p>
    <div class="home-hero__cta">
      <a class="home-btn home-btn--primary" href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener">Google Play</a>
      <a class="home-btn home-btn--secondary" href="{{ '/download.html' | relative_url }}">Download</a>
      <a class="home-btn home-btn--ghost" href="https://github.com/NavoMessenger/Navo" rel="noopener">GitHub</a>
    </div>
  </div>
  <div class="home-hero__visual">
    <img
      src="{{ '/images/banner.png' | relative_url }}"
      alt="Navo messaging app on a phone — chat list with Fast, Secure, Connected, Simple"
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
      <h2>Built to keep conversations moving</h2>
      <p>A lighter client on the Telegram network you already use — with the everyday tools you need.</p>
    </header>
    <div class="home-features__grid">
      <article class="home-feature home-reveal">
        <h3>Fast</h3>
        <p>Live chat list and conversations, stickers, voice notes, photos, and files without the clutter.</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Secure</h3>
        <p>Privacy-minded controls such as keyword blocking, plus open source you can inspect.</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Connected</h3>
        <p>Contacts, profiles, Stories-style moments, polls, checklists, and location sharing.</p>
      </article>
      <article class="home-feature home-reveal">
        <h3>Simple</h3>
        <p>One-to-one voice and video calls, light and dark themes, and customizable app icons.</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section home-platforms" id="download">
  <div class="home-section__inner">
    <header class="home-section__header home-reveal">
      <h2>Get Navo</h2>
      <p>Available on Android, Windows, and macOS. iOS is on the way.</p>
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
          <a class="home-btn home-btn--secondary home-btn--sm" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="windows" rel="noopener">Installer</a>
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
        <span class="home-platforms__status">Coming soon</span>
      </li>
    </ul>
    <p class="home-platforms__more home-reveal">
      <a href="{{ '/download.html' | relative_url }}">Full install guide →</a>
    </p>
  </div>
</section>

<section class="home-section home-trust" id="open-source">
  <div class="home-section__inner home-reveal">
    <h2>Open source</h2>
    <p>Navo is open source so you can see how it talks to Telegram via TDLib and audit privacy-related behavior.</p>
    <p class="home-trust__links">
      <a href="https://github.com/NavoMessenger/Navo" rel="noopener">View source on GitHub</a>
      <a href="{{ '/build.html' | relative_url }}">Build from source</a>
    </p>
    <p class="home-trust__disclaimer">Navo is <strong>not affiliated with, endorsed by, or connected to Telegram</strong>. Use at your own risk and follow Telegram’s Terms of Service.</p>
  </div>
</section>
