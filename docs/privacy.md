---
layout: default
title: Privacy
permalink: /privacy.html
nav_order: 4
---

# Navo Privacy Policy

**Last updated:** 12 September 2026

[简体中文](zh-CN/privacy.html)

Navo is an independent, unofficial Telegram client. It is not affiliated with or endorsed by Telegram Messenger Inc. or its affiliates.

This policy explains how Navo processes information on your device, through Telegram, through services operated for Navo, and through other providers. Features and providers may vary by platform, build, region, and your choices.

## 1. Contact Navo

The Navo team is responsible for the Navo-specific processing described in this policy.

Privacy enquiries and requests: **support@navo.im**

Website: **[https://www.navo.im](https://www.navo.im)**

Telegram and the other providers listed below process information under their own terms and privacy policies. They may act as independent controllers or as service providers, depending on the feature.

## 2. Telegram accounts, chats, and on-device data

Navo connects directly to Telegram through TDLib using Telegram API credentials.

- Your phone number, login codes, profile, contacts synced with Telegram, chats, messages, calls, media, and related account data are processed by Telegram to provide its service. See [Telegram's Privacy Policy](https://telegram.org/privacy).
- TDLib databases, downloads, caches, settings, and drafts are normally stored in the app's private storage on your device.
- Navo does not operate a general relay for ordinary Telegram messages and does not routinely send ordinary chat contents to a Navo backend.

There are specific exceptions chosen or triggered by a feature: account-session backups, optional AI features, location address lookup, content submitted to the resource or advertising services, reports, analytics, and diagnostics. They are described below.

## 3. Account-session backup

Account-session backup is **enabled by default** on supported Android, iOS, macOS, and Windows builds. Its purpose is to help recover an account already authorized on your device.

### What a backup contains

A backup may contain:

- a Telegram/TDLib session credential capable of restoring access to the account;
- the local account and slot identifiers;
- the Telegram user ID, display name, and phone number;
- backup format and creation time.

It does not include the TDLib message database, downloaded media, cache, or application logs. The session credential is sensitive and should be protected like a login credential.

### Where it is stored

| Platform | Storage |
|---|---|
| Android | The app's encrypted secure storage on the device. Android application backup is disabled for this data. |
| iOS | Navo first attempts to save the item in a synchronizable Apple Keychain entry. If iCloud Keychain is enabled, Apple may synchronize it to your other signed-in devices. If synchronizable storage is unavailable, Navo falls back to a local Keychain entry. |
| macOS | Apple Keychain on the Mac; if that operation is unavailable, the app may use a local application file as a best-effort fallback. |
| Windows | A file under the user's local application data, encrypted with Windows Data Protection API (DPAPI) and bound to that Windows user/device context. |

Navo does not upload these backup records to a Navo server. Apple may process a synchronizable iOS Keychain item under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

### Your controls and deletion

Open **Settings → Privacy & Security → Account Backup** to review and delete individual backups. Turning account backup off deletes the backups currently known to Navo and prevents new backups while it remains off.

Deleting a backup is **not the same as terminating a Telegram login session**. To revoke a session, use Telegram's logged-in/active devices controls or log that session out. Uninstalling Navo may not remove an Apple Keychain item, an iCloud-synchronized copy, or every platform-created local file. Use the in-app backup controls before uninstalling when you want the backups removed.

Backups have no fixed automatic expiry in the current implementation. They remain until replaced, deleted by you, removed when backup is disabled, or cleared by the relevant operating-system storage service.

## 4. Location and maps

When you select a location or open location details—including a location shared by somebody else—Navo may send the latitude and longitude, rounded to approximately six decimal places, to the OpenStreetMap Foundation's **Nominatim** service to convert coordinates into a readable address. Nominatim may also receive ordinary network information such as your IP address, request time, user agent, and device/browser or operating-system information. See the [OpenStreetMap Foundation Privacy Policy](https://osmfoundation.org/wiki/Privacy_Policy).

On supported non-iOS platforms, map tiles may also be loaded from OpenStreetMap. iOS may use Apple Maps to render the map, but the Nominatim address request can still occur.

If you choose to send or live-share a location in a chat, the location is also transmitted through Telegram. Background/continuous location permission, where requested, is used for an active live-location feature rather than ordinary map viewing. Denying location prevents current/live-location features but does not prevent you from viewing a manually supplied location.

## 5. Navo-operated resources, advertisements, and reporting services

Some optional discovery, owner, advertising, safety, and support features communicate with services used by Navo. These services are currently hosted using Supabase. Data may include:

| Function | Information processed | Purpose and visibility |
|---|---|---|
| Device registration and service security | A generated device/client identifier and secret, device fingerprint, platform, app version, IP-derived/network information, first-seen and last-seen times, status, and security/audit records | Authenticate the client, protect the service, prevent abuse, and troubleshoot access. Not intended for public display. |
| Resource Plaza submissions and owner binding | Telegram user ID, username/display name, Telegram chat ID, title, username, category, description, invite link, ownership/login information, review status and moderator notes | Review, publish, attribute, and manage submitted resources. Approved listing details and invite links are public. |
| Resource activity | Resource IDs, open/view/join/install events, device/client identifiers, timestamps, and related request metadata | Operate rankings, measure use, limit abuse, and improve the directory. |
| Owner-created advertisements | Owner Telegram user ID, target chat ID, title, text, media, call-to-action label and URL, placement, status, and report count | Create, review, deliver, and manage advertisements. Approved creative, links, and media may be public to Navo users. |
| Reports | Creative/resource identifiers, reporter or device identifier, selected reason, free-text report content, and timestamps | Review abuse, hide or remove content, and maintain safety records. The reported owner may learn the nature of a report, but Navo does not intentionally publish the reporter's identifier. |
| Support communications | Your email or Telegram details and whatever text, attachments, logs, or account identifiers you choose to provide | Respond to the request, investigate a problem, and protect the service. |

Advertising media may be uploaded to a publicly retrievable Supabase storage URL so it can be displayed. Deleting an advertisement record may not by itself remove every previously uploaded or cached media object. Contact **support@navo.im** to request removal of associated files or other backend records when an in-app delete control is unavailable.

Supabase and its infrastructure providers may process these records outside your country. The particular primary database region is selected in Navo's Supabase project configuration and may change with deployment. See [Supabase's Privacy Policy](https://supabase.com/privacy) and [region documentation](https://supabase.com/docs/guides/platform/regions).

## 6. Advertising

The advertisements you see are not all provided by the same party.

### Google advertisements

When enabled for a particular Android or iOS build/region, Google AdMob may display:

- native advertisements in eligible public channel conversations;
- banners in eligible high-traffic bot chats, which can be private bot conversations;
- interstitial advertisements around eligible long-video playback or media albums.

Google's Mobile Ads SDK, consent tools, and advertising partners may process IP address, device and app information, advertising or app-instance identifiers, consent choices, approximate location inferred from network information, and advertisement impressions/interactions for delivery, frequency control, fraud prevention, personalization where permitted, and measurement. See [Google's Privacy Policy](https://policies.google.com/privacy), [advertising information](https://policies.google.com/technologies/ads), and [partner-site data explanation](https://policies.google.com/technologies/partner-sites).

On iOS, Navo requests App Tracking Transparency permission before accessing data for cross-app tracking where required. Refusing tracking does not remove all advertisements; it restricts access to the advertising identifier and personalized tracking. Regional consent choices are presented through Google's consent tools where required. You can also manage advertising choices in the device's privacy/advertising settings.

### Telegram official sponsored content

Telegram may provide official sponsored messages or monetization information through its service in supported contexts. Where such content is displayed, Telegram controls the relevant Telegram-side processing under its own policy. It is separate from Google advertisements and owner-created Navo advertisements.

### Owner-created Navo advertisements

Eligible channel, group, or bot chats may contain advertisements created by resource owners for banner, feed, interstitial, or bottom placements. Their content, links, and uploaded media are stored by the Navo services described in Section 5. These are not Google or Telegram advertisements. Opening a link or sending pre-filled text is your choice and may reveal information to the destination or chat recipient.

Some builds or regions disable one or more advertising systems. This does not change the disclosures for builds where they are enabled.

## 7. Analytics and diagnostics

Availability depends on build configuration. These services are not described as "anonymous": pseudonymous identifiers and technical information can still be personal data.

| Provider | Information and purpose |
|---|---|
| Firebase Analytics | May receive an app-instance identifier, app-open and screen/navigation events, selected feature events, app display/version/build and source revision, device/app information, approximate location derived by the provider, and interaction statistics. Navo uses it to understand reliability, adoption, and feature use. See [Firebase Privacy and Security](https://firebase.google.com/support/privacy) and [Google's Privacy Policy](https://policies.google.com/privacy). |
| Sentry | May receive errors, crashes, stack traces, hang or memory-growth diagnostics, breadcrumbs, app version/build/channel, runtime, operating-system, and device information needed to diagnose faults. Navo configures `sendDefaultPii` as false and Dart transaction tracing sampling as zero, but those settings do not mean that an error event contains no personal or identifying technical information. See [Sentry's Privacy Policy](https://sentry.io/privacy/). |

SDK retention is controlled by the applicable Navo project settings and provider terms. Navo does not promise a universal fixed retention period for these records.

## 8. Optional AI features

Smart summaries, briefings, reply suggestions, and similar AI features are disabled by default. When you enable and invoke one, Navo may send the recent or selected message excerpts, chat context/title, requested range, and your instruction to the AI endpoint configured in the app. The default compatible endpoint may be operated by **Ollama**; you can configure another provider, in which case that provider's terms and privacy policy apply.

This transmission is separate from ordinary Telegram message delivery. Do not use an AI feature for content you do not want the configured provider to process. Ollama states different practices for locally run and cloud-hosted models; see [Ollama's Privacy Policy](https://ollama.com/privacy). A custom endpoint may retain or train on inputs according to its own policy.

Navo may keep short-lived summary results and usage counters locally on the device to improve responsiveness and enforce feature limits. Disabling the feature stops new AI requests; clearing Navo's application data removes ordinary local AI settings/cache on that device.

## 9. Permissions and your choices

Navo asks the operating system for a permission only where the installed platform and a related feature require it. Not every permission appears on every platform.

| Permission | When and why it is used | Effect of refusing |
|---|---|---|
| Camera | Capture media, video calls, and scan a Telegram login QR code | Those capture/call/scan actions are unavailable; existing chats still work. |
| Microphone | Voice messages and voice/video calls | Audio recording or call microphone is unavailable. |
| Photos/media library | Select and save images, videos, and other media | Library import/save is limited; files available through another picker may still work. |
| Location while using the app | Select current location, nearby/map functions, and start location sharing | Current-location features are unavailable; manual map viewing may remain available. |
| Background/continuous location | Continue a live-location session you deliberately started | Live updates stop or work only while Navo is foregrounded. |
| Notifications | Message, call, and service alerts | Navo will not show the denied notification types. |
| Calendar | Add an event you choose from a message or feature | Navo cannot create that calendar event. |
| Reminders | Add a reminder you choose | Navo cannot create that reminder. |
| Screen recording (macOS) | Share or capture your screen during a supported call | Screen sharing/capture is unavailable. |
| Tracking/advertising identifier (iOS) | Cross-app advertisement measurement or personalization where enabled and allowed | Tracking is restricted; non-personalized/contextual ads may still appear. |

You can withdraw a permission at any time in your operating system's settings. Previously sent information is not automatically deleted by withdrawing permission; use the deletion controls described in this policy as well.

Navo accesses Telegram contacts through your Telegram account. It does not require the operating system's address-book permission for that Telegram contact list.

## 10. Other network services

- If you select an optional Google Font in Appearance settings, the font may be downloaded from Google. Google receives ordinary request and network information. Default system fonts do not require this download.
- Desktop and sideload builds may contact Navo's hosted update feed to check the current version. The host receives ordinary request information such as IP address and user agent.
- Push notifications may involve Telegram and the platform push provider (Apple Push Notification service or Google's Firebase Cloud Messaging). A platform push token is registered as needed for delivery; the providers process it under their policies.
- The Navo website and release files may be hosted on GitHub Pages/GitHub. GitHub may receive ordinary web request information. See [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## 11. Retention and deletion

Retention depends on the type of information:

- **Telegram data:** retained and deleted by Telegram under its policy and your Telegram settings. Deleting Navo or a Navo backup does not delete your Telegram account.
- **Local application data:** remains until removed by an in-app control, cleared through operating-system settings, or deleted with the application, subject to the Keychain/secure-storage exceptions in Section 3.
- **Session backups:** no fixed automatic expiry; see Section 3 for deletion controls.
- **Navo backend records:** retained while a listing, owner relationship, advertisement, report, or security record is active or as needed to operate, moderate, secure, and document the service. Use available owner controls or contact us for deletion. There is no single fixed retention period for all categories.
- **Public content and media:** may remain available until removed. Copies can remain temporarily in caches, and third parties may have copied public material.
- **Analytics and diagnostics:** retained according to Navo's current provider/project configuration and the providers' applicable terms.
- **Support records:** retained as needed to answer the request, document the response, prevent abuse, and meet legal obligations.

We may preserve limited information where reasonably necessary for fraud/security, disputes, legal claims, accounting, or a binding legal obligation, and may retain de-identified or aggregated information that no longer identifies you.

To delete the Telegram account itself, use **Settings → Privacy & Security → Delete Telegram Account** in Navo if available, or Telegram's official app/site. To delete Navo-specific backend information, email **support@navo.im** with enough information for us to locate and verify the record. Do not email login codes or session credentials.

## 12. International processing

Navo uses providers with infrastructure in multiple countries. Information sent to Telegram, Supabase, Google, Apple, Sentry, OpenStreetMap, Ollama, GitHub, or a provider you configure may be processed outside your country. The applicable provider safeguards and privacy policy govern that processing. Exact locations can vary with the selected project region, routing, redundancy, and the provider's subprocessors.

## 13. Your privacy rights

Depending on your location, you may have rights to request access, correction, deletion, portability, restriction or objection, and to withdraw consent. You may also have the right to complain to a privacy regulator. These rights can be subject to identity verification and legal exceptions.

For Telegram-held data, use Telegram's controls or contact Telegram. For Navo-specific backend, advertising, report, or support data, contact **support@navo.im**. Include the relevant Telegram user ID, resource/advertisement identifier, or other non-secret detail needed to find the record. Never send a login code or session credential.

## 14. Children

Navo is not directed to children under 13 or below the minimum age required to use Telegram or consent to data processing in their jurisdiction. If you believe a child has provided Navo-specific personal information contrary to applicable law, contact us.

## 15. Security

Navo uses operating-system storage protections and HTTPS for the network services described above where supported. No storage or transmission method is completely secure. Keep your device locked, protect Telegram's two-step verification, review active sessions, and treat session backups and exported logs as sensitive.

## 16. Changes

We may update this policy as features, providers, or legal requirements change. We will update the date above and, where required, provide an additional notice or request consent before materially different processing begins.

[Terms of Service](terms.html) · [Home]({{ site.baseurl }}/)
