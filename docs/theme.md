---
layout: theme
title: Open theme in Navo
permalink: /theme/
nav_exclude: true
description: Preview and apply a shared Navo appearance theme.
---

<header class="theme-open__header"><a href="{{ '/' | relative_url }}">Navo</a></header>
<main class="theme-open__main">
  <div class="theme-open__card">
    <h1 data-i18n="title">Shared theme</h1>
    <p class="theme-open__lead" id="lead" data-i18n="lead">
      Opening this appearance pack in the Navo app so you can preview and apply it.
    </p>
    <p class="theme-open__status" id="status" role="status" data-i18n-default="preparing">Preparing…</p>
    <div class="theme-open__actions">
      <button class="theme-open__btn theme-open__btn--primary" id="openBtn" type="button" disabled data-i18n="open">Open in Navo</button>
      <a class="theme-open__btn theme-open__btn--secondary" href="{{ '/download.html' | relative_url }}" data-i18n="getNavo">Get Navo</a>
    </div>
    <div class="theme-open__downloads">
      <h2 data-i18n="downloads">Downloads</h2>
      <ul>
        <li>
          <a href="https://play.google.com/store/apps/details?id=im.navo.app" rel="noopener" data-i18n="android">Android</a>
          <span data-i18n="androidHint"> · Google Play</span>
        </li>
        <li>
          <a href="{{ '/download.html' | relative_url }}" rel="noopener" data-i18n="desktop">Windows &amp; macOS</a>
          <span data-i18n="desktopHint"> · installers</span>
        </li>
        <li>
          <a href="https://github.com/NavoMessenger/Navo" rel="noopener">GitHub</a>
          <span data-i18n="githubHint"> · source</span>
        </li>
      </ul>
    </div>
  </div>
</main>
<footer class="theme-open__footer">
  <span data-i18n="disclaimer">Navo is not affiliated with Telegram.</span>
  · <a href="{{ '/privacy.html' | relative_url }}" data-i18n="privacy">Privacy</a>
  · <a href="{{ '/terms.html' | relative_url }}" data-i18n="terms">Terms</a>
</footer>
