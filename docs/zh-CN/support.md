---
layout: home
title: 支持
nav_exclude: true
permalink: /zh-CN/support.html
lang: zh
description: 获取 Navo 在 Android、iOS、Windows 与 macOS 上的安装、登录和使用帮助。
---

<section class="support-hero">
  <div class="support-hero__glow" aria-hidden="true"></div>
  <div class="support-shell">
    <a class="support-back" href="{{ '/zh-CN/' | relative_url }}" aria-label="返回 Navo 中文首页"><span aria-hidden="true">←</span> 返回首页</a>
    <p class="support-eyebrow">支持</p>
    <h1>Navo 支持</h1>
    <p class="support-lead">安装、登录或使用 Navo 时遇到问题？请先完成以下快速检查。如果问题仍然存在，请提交支持请求，并附上我们排查所需的信息。</p>
  </div>
</section>

<section class="support-content">
  <div class="support-shell">
    <div class="support-card support-card--checklist">
      <div class="support-card__heading">
        <span class="support-card__icon" aria-hidden="true">✓</span>
        <div>
          <p class="support-card__kicker">先从这里开始</p>
          <h2>常见解决方法</h2>
        </div>
      </div>
      <ul class="support-checklist">
        <li><strong>应用无法启动或频繁闪退：</strong>完全退出 Navo，重新启动设备，然后从官方下载页安装最新版本。</li>
        <li><strong>无法登录：</strong>检查网络连接，暂时关闭 VPN 或代理，将设备日期与时间设为自动，然后重试。</li>
        <li><strong>消息或媒体无法加载：</strong>确认 Telegram 在同一网络下可用；如条件允许，请切换网络并重新打开相应会话。</li>
        <li><strong>收不到通知：</strong>先在系统设置中允许 Navo 通知，再检查 Navo 内相应会话的静音及通知设置。</li>
      </ul>
      <a class="support-inline-link" href="{{ '/zh-CN/download.html' | relative_url }}">下载最新版 Navo <span aria-hidden="true">→</span></a>
    </div>

    <div class="support-grid">
      <article class="support-card">
        <div class="support-card__heading">
          <span class="support-card__icon support-card__icon--shield" aria-hidden="true">!</span>
          <div>
            <p class="support-card__kicker">保护账号安全</p>
            <h2>请勿提交敏感信息</h2>
          </div>
        </div>
        <p>请勿在公开 Issue 或支持邮件中提供 Telegram 手机号、密码、登录验证码、会话字符串、API 密钥、私聊内容或账号备份文件。</p>
        <p class="support-card__note">Navo 支持人员绝不会向您索要登录验证码或密码。</p>
      </article>

      <article class="support-card">
        <div class="support-card__heading">
          <span class="support-card__icon support-card__icon--info" aria-hidden="true">i</span>
          <div>
            <p class="support-card__kicker">帮助我们定位问题</p>
            <h2>建议附上的信息</h2>
          </div>
        </div>
        <ul class="support-details-list">
          <li>Navo 版本号及安装来源</li>
          <li>设备型号与操作系统版本</li>
          <li>可准确复现问题的操作步骤</li>
          <li>预期结果与实际结果</li>
        </ul>
      </article>
    </div>

    <section class="support-contact" aria-labelledby="support-contact-title">
      <div>
        <p class="support-card__kicker">仍需帮助？</p>
        <h2 id="support-contact-title">提交支持请求</h2>
        <p>可稳定复现的问题或功能建议，请优先使用 GitHub Issues。其他不包含账号凭据的私密问题，可以发送邮件联系 Navo 团队。</p>
      </div>
      <div class="support-contact__actions">
        <a class="home-btn home-btn--primary" href="https://github.com/NavoMessenger/Navo/issues/new" rel="noopener">提交 GitHub Issue</a>
        <a class="home-btn home-btn--secondary" href="mailto:support@navo.im">邮件联系支持</a>
      </div>
    </section>
  </div>
</section>
