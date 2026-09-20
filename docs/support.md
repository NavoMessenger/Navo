---
layout: home
title: Support
nav_exclude: true
permalink: /support.html
lang: en
description: Get help with installing, signing in to, and using Navo on Android, iOS, Windows, and macOS.
---

<section class="support-hero">
  <div class="support-hero__glow" aria-hidden="true"></div>
  <div class="support-shell">
    <a class="support-back" href="{{ '/' | relative_url }}" aria-label="Back to the Navo home page"><span aria-hidden="true">←</span> Back to home</a>
    <p class="support-eyebrow">Support</p>
    <h1>Navo Support</h1>
    <p class="support-lead">Having trouble installing, signing in, or using Navo? Start with these quick checks. If the problem continues, send us a support request with the details we need to investigate.</p>
  </div>
</section>

<section class="support-content">
  <div class="support-shell">
    <div class="support-card support-card--checklist">
      <div class="support-card__heading">
        <span class="support-card__icon" aria-hidden="true">✓</span>
        <div>
          <p class="support-card__kicker">Start here</p>
          <h2>Common fixes</h2>
        </div>
      </div>
      <ul class="support-checklist">
        <li><strong>App will not start or keeps crashing:</strong> fully close Navo, restart your device, then install the latest version from the official download page.</li>
        <li><strong>Cannot sign in:</strong> check your internet connection, disable VPN or proxy temporarily, set your device date and time to automatic, and try again.</li>
        <li><strong>Messages or media are not loading:</strong> confirm Telegram works on the same network, switch networks if possible, and reopen the affected chat.</li>
        <li><strong>Notifications are missing:</strong> allow notifications in system settings, then review the chat's mute and notification settings inside Navo.</li>
      </ul>
      <a class="support-inline-link" href="{{ '/download.html' | relative_url }}">Download the latest Navo release <span aria-hidden="true">→</span></a>
    </div>

    <div class="support-grid">
      <article class="support-card">
        <div class="support-card__heading">
          <span class="support-card__icon support-card__icon--shield" aria-hidden="true">!</span>
          <div>
            <p class="support-card__kicker">Stay safe</p>
            <h2>Protect your account</h2>
          </div>
        </div>
        <p>Never include your Telegram phone number, password, login code, session string, API key, private messages, or account backup files in a public issue or support email.</p>
        <p class="support-card__note">Navo support will never ask for a login code or password.</p>
      </article>

      <article class="support-card">
        <div class="support-card__heading">
          <span class="support-card__icon support-card__icon--info" aria-hidden="true">i</span>
          <div>
            <p class="support-card__kicker">Help us investigate</p>
            <h2>What to include</h2>
          </div>
        </div>
        <ul class="support-details-list">
          <li>Navo version and install source</li>
          <li>Device model and operating-system version</li>
          <li>Exact steps to reproduce the problem</li>
          <li>What you expected and what happened instead</li>
        </ul>
      </article>
    </div>

    <section class="support-contact" aria-labelledby="support-contact-title">
      <div>
        <p class="support-card__kicker">Still need help?</p>
        <h2 id="support-contact-title">Send a support request</h2>
        <p>GitHub Issues is best for reproducible bugs and feature requests. For a private question that does not contain account credentials, email the Navo team.</p>
      </div>
      <div class="support-contact__actions">
        <a class="home-btn home-btn--primary" href="https://github.com/NavoMessenger/Navo/issues/new" rel="noopener">Open a GitHub issue</a>
        <a class="home-btn home-btn--secondary" href="mailto:support@navo.im">Email support</a>
      </div>
    </section>
  </div>
</section>
