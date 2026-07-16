---
layout: default
title: Privacy
permalink: /privacy.html
nav_order: 4
---

# Navo Privacy Policy

**Last updated:** 13 July 2026

Navo (“we”, “the app”) is an independent, unofficial Telegram client. It is not affiliated with, endorsed by, or connected to Telegram Messenger Inc. or Telegram FZ-LLC.

This policy explains what information Navo processes on your device and what is sent to third parties when you use the app.

## 1. Account and messages (Telegram / TDLib)

Navo connects to Telegram’s network through TDLib using API credentials registered at my.telegram.org.

- Your phone number, login codes, chats, media, contacts synced via Telegram, and related account data are processed by **Telegram’s servers** under Telegram’s own Terms of Service and Privacy Policy.
- Local TDLib databases and downloaded files are stored in the app’s private application storage on your device.
- We (the Navo developers) do **not** operate a message relay and do not receive the contents of your chats.

## 2. Permissions

Navo may request the following device permissions only when you use the related feature:

| Permission | Purpose |
|------------|---------|
| Camera | Photos/videos you choose to send; video calls; scanning Telegram login QR codes |
| Microphone | Voice messages; voice and video calls |
| Photos / media library | Sending images and videos you select |
| Location (when in use) | Sharing your current location in a chat when you choose to |
| Notifications | Message and call alerts |
| Tracking (iOS ATT, optional) | Only if ads are enabled and you allow tracking — used to deliver more relevant ads in channels |

You can deny permissions; related features will be unavailable.

## 3. Advertising

On Android and iOS global builds, Navo may show AdMob native ads in public **channels**. Ads are not shown in private chats.

- Google’s Mobile Ads SDK and User Messaging Platform (UMP) may process a device advertising identifier and consent status according to Google’s policies and your regional consent choices.
- On iOS, App Tracking Transparency permission is requested before tracking for ads.
- China / store builds compiled with ads disabled do not initialize AdMob.

## 4. Analytics and crash reporting

Depending on build configuration:

- **Firebase Analytics** may collect anonymized usage events (screen views, basic engagement).
- **Sentry** may collect crash reports and performance traces. Personally identifiable information is not intentionally attached (`send-default-pii` is disabled).

China channel builds can disable these SDKs at compile time.

## 5. Fonts and network

If you pick a Google Font in Appearance settings, the font file may be downloaded from Google’s servers at runtime. Default UI fonts do not require this.

## 6. Updates

Desktop and sideload builds may check a hosted Appcast feed (`www.navo.im`) for available updates. Store builds should prefer the respective app store’s update mechanism.

## 7. Account deletion

Your account is a **Telegram** account. To delete it, use **Settings → Privacy & Security → Delete Telegram Account** in Navo (opens Telegram’s official deletion flow), or delete the account in the official Telegram app / Telegram website.

Uninstalling Navo removes local TDLib data on that device; it does not delete your Telegram account.

## 8. Children

Navo is not directed at children under 13 (or the minimum age required in your jurisdiction). Do not use the app if you are under that age.

## 9. Contact

Privacy questions: **support@navo.im**  
Website: **https://www.navo.im**

## 10. Changes

We may update this policy. The “Last updated” date will change when we do. Continued use after an in-app consent prompt means you accept the updated policy.

[Terms of Service](terms.html) · [Home]({{ site.baseurl }}/)
