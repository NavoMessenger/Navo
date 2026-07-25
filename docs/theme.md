---
layout: theme
title: Theme
permalink: /theme/
nav_exclude: true
description: Preview a shared Navo theme and download the app to import it.
---

<section class="theme-hero">
  <div class="theme-hero__inner">
    <header class="theme-hero__intro">
      <p class="theme-hero__brand">Navo</p>
      <h1 class="theme-hero__title" data-i18n="title">Theme preview</h1>
      <p class="theme-hero__lead" data-i18n="lead">Open in Navo to apply this theme, or download the app first.</p>
      <p class="theme-status" id="theme-status" hidden></p>
      <div class="theme-open" id="theme-open" hidden>
        <button type="button" class="home-btn home-btn--primary" id="theme-open-btn" data-i18n="openInNavo">Open in Navo</button>
        <p class="theme-open__hint" data-i18n="openHint">Requires Navo installed. If nothing happens, download below.</p>
      </div>
    </header>

    <div class="theme-stage">
      <div class="theme-phone" id="theme-phone" data-mode="light" style="--theme-brand: #2d7ff9;">
        <div class="theme-phone__bezel">
          <div class="theme-phone__screen">
            <div class="theme-chat__bar">
              <span class="theme-chat__back" aria-hidden="true"></span>
              <div class="theme-chat__peer">
                <span class="theme-chat__avatar" aria-hidden="true"></span>
                <span class="theme-chat__name" data-i18n="chatName">Alex</span>
              </div>
            </div>
            <div class="theme-chat__wallpaper" id="theme-wallpaper" data-wallpaper="aurora"></div>
            <div class="theme-chat__messages">
              <div class="theme-bubble theme-bubble--in" data-i18n="bubbleIn">Hey — check out this theme</div>
              <div class="theme-bubble theme-bubble--out" data-i18n="bubbleOut">Looks great on Navo</div>
              <div class="theme-bubble theme-bubble--in" data-i18n="bubbleIn2">Brand color and wallpaper included</div>
            </div>
            <div class="theme-chat__composer">
              <span class="theme-chat__input" data-i18n="composerPlaceholder">Message</span>
              <span class="theme-chat__send" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="theme-aside">
        <div class="theme-pack" id="theme-pack">
          <div class="theme-pack__color">
            <span class="theme-swatch theme-swatch--lg" id="theme-swatch"></span>
            <span data-i18n="labelColorShort">Color</span>
            <code id="theme-color-hex">#2D7FF9</code>
          </div>
          <div class="theme-pack__wall" id="theme-pack-wall">
            <div class="theme-pack__wall-img" id="theme-pack-wall-img" data-wallpaper="aurora"></div>
          </div>
          <ul class="theme-pack__fonts" id="theme-pack-fonts">
            <li><span data-i18n="labelFont">Font</span>: <strong id="theme-font-main">—</strong></li>
            <li><span data-i18n="labelCjk">CJK</span>: <strong id="theme-font-cjk">—</strong></li>
            <li><span data-i18n="labelMono">Mono</span>: <strong id="theme-font-mono">—</strong></li>
          </ul>
          <p class="theme-pack__note" data-i18n="packNote">Preview below — open Navo to apply color, wallpaper, fonts, and more.</p>
        </div>

        <dl class="theme-summary" id="theme-summary">
          <div class="theme-summary__row">
            <dt data-i18n="labelAppearance">Appearance</dt>
            <dd id="theme-sum-appearance">—</dd>
          </div>
          <div class="theme-summary__row">
            <dt data-i18n="labelWallpaper">Wallpaper</dt>
            <dd id="theme-sum-wallpaper">—</dd>
          </div>
          <div class="theme-summary__row">
            <dt data-i18n="labelGlass">Glass quality</dt>
            <dd id="theme-sum-glass">—</dd>
          </div>
          <div class="theme-summary__row">
            <dt data-i18n="labelExtras">Extras</dt>
            <dd id="theme-sum-extras">—</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="theme-download">
      <h2 class="theme-download__title" data-i18n="downloadTitle">Get Navo</h2>
      <p class="theme-download__lead" data-i18n="downloadLead">Available on Android, Windows, and macOS.</p>
      <div class="theme-download__cta">
        <a class="home-btn home-btn--primary" href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener">Google Play</a>
        <a class="home-btn home-btn--secondary" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="android" rel="noopener">Android APK</a>
        <a class="home-btn home-btn--secondary" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="windows" rel="noopener">Windows</a>
        <a class="home-btn home-btn--secondary" href="https://github.com/NavoMessenger/Navo/releases/latest" data-release-platform="macos" rel="noopener">macOS</a>
      </div>
      <p class="theme-download__more">
        <a href="{{ '/download.html' | relative_url }}" data-i18n="downloadGuide">Full install guide →</a>
      </p>
    </div>
  </div>
</section>
