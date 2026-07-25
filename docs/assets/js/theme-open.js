/**
 * Theme open bridge: navo://theme?d=<payload>
 * Matches App ThemePack.tryParseLink + shared landing invoke flow.
 */
(function () {
  var LANG_KEY = "navo_theme_lang";

  var STRINGS = {
    en: {
      title: "Shared theme",
      lead: "Opening this appearance pack in the Navo app so you can preview and apply it.",
      leadEmpty: "No theme data was found in this link.",
      preparing: "Preparing…",
      launching: "Launching Navo…",
      trying: "Trying to open Navo…",
      missing:
        "This page needs a theme payload in the URL (#… or ?d=…). Open a shared theme link from Navo.",
      fallback:
        "If Navo did not open, install it below, then tap “Open in Navo”.",
      open: "Open in Navo",
      getNavo: "Get Navo",
      downloads: "Downloads",
      android: "Android",
      androidHint: " · Google Play",
      desktop: "Windows & macOS",
      desktopHint: " · installers",
      githubHint: " · source",
      disclaimer: "Navo is not affiliated with Telegram.",
      privacy: "Privacy",
      terms: "Terms",
    },
    zh: {
      title: "共享主题",
      lead: "正在用 Navo 打开此外观包，以便预览并应用。",
      leadEmpty: "此链接中没有主题数据。",
      preparing: "准备中…",
      launching: "正在打开 Navo…",
      trying: "正在尝试打开 Navo…",
      missing: "链接中缺少主题数据（#… 或 ?d=…）。请从 Navo 分享的主题链接打开。",
      fallback: "若未打开 Navo，请先安装，再点「在 Navo 中打开」。",
      open: "在 Navo 中打开",
      getNavo: "获取 Navo",
      downloads: "下载",
      android: "Android",
      androidHint: " · Google Play",
      desktop: "Windows 与 macOS",
      desktopHint: " · 安装包",
      githubHint: " · 源码",
      disclaimer: "Navo 与 Telegram 无隶属关系。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  };

  function detectLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === "zh" || stored === "en") return stored;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function t(lang, key) {
    return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
  }

  function applyI18n(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(lang, key);
    });
  }

  var statusEl = document.getElementById("status");
  var openBtn = document.getElementById("openBtn");
  var leadEl = document.getElementById("lead");
  var lang = detectLang();

  function setStatus(text, kind) {
    if (!statusEl) return;
    statusEl.textContent = text;
    if (kind) statusEl.setAttribute("data-kind", kind);
    else statusEl.removeAttribute("data-kind");
  }

  function payloadFromLocation() {
    var hash = (location.hash || "").replace(/^#/, "");
    if (hash) {
      try {
        return decodeURIComponent(hash);
      } catch (_) {
        return hash;
      }
    }
    try {
      var params = new URLSearchParams(location.search);
      var d = params.get("d");
      return d ? d.trim() : "";
    } catch (_) {
      return "";
    }
  }

  applyI18n(lang);

  var payload = payloadFromLocation();
  if (!payload) {
    setStatus(t(lang, "missing"), "error");
    if (leadEl) leadEl.textContent = t(lang, "leadEmpty");
    return;
  }

  // App: navo://theme?d=<base64url>  (ThemePack.tryParseLink)
  var deepLink = "navo://theme?d=" + encodeURIComponent(payload);

  if (openBtn) {
    openBtn.disabled = false;
    openBtn.addEventListener("click", function () {
      setStatus(t(lang, "launching"));
      location.href = deepLink;
    });
  }

  setStatus(t(lang, "trying"));
  var attempted = false;
  function tryOpen() {
    if (attempted) return;
    attempted = true;
    location.href = deepLink;
    window.setTimeout(function () {
      setStatus(t(lang, "fallback"), "ok");
    }, 1200);
  }
  tryOpen();
})();
