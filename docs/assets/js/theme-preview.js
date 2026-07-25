/**
 * Theme share preview: decode #base64 JSON, render chat mock + summary, i18n.
 */
(function () {
  var LANG_KEY = "navo_theme_lang";
  var DEFAULT_BRAND = "#2d7ff9";

  var STRINGS = {
    en: {
      title: "Theme preview",
      lead: "Install Navo, then open this link again to import the theme into the app.",
      navDownload: "Download",
      navPrivacy: "Privacy",
      navTerms: "Terms",
      langToggle: "中文",
      footerNote:
        "Navo is an independent, unofficial Telegram client — not affiliated with Telegram.",
      chatName: "Alex",
      bubbleIn: "Hey — check out this theme",
      bubbleOut: "Looks great on Navo",
      bubbleIn2: "Brand color and wallpaper included",
      composerPlaceholder: "Message",
      labelColor: "Brand color",
      labelAppearance: "Appearance",
      labelWallpaper: "Wallpaper",
      labelFont: "Font",
      labelGlass: "Glass quality",
      labelExtras: "Extras",
      downloadTitle: "Get Navo",
      downloadLead: "Available on Android, Windows, and macOS.",
      downloadGuide: "Full install guide →",
      statusInvalid: "This theme link is missing or invalid. You can still download Navo below.",
      statusOk: "Theme loaded — download Navo to apply it.",
      appearanceLight: "Light",
      appearanceDark: "Dark",
      appearanceSystem: "System",
      wallpaperBuiltin: "Built-in",
      wallpaperTd: "Telegram cloud background",
      wallpaperUnknown: "Custom",
      extrasNone: "None",
      extraMeta: "Message meta indicators",
      extraTags: "Member tags",
      extraCircular: "Circular group avatars",
      extraReduceTransparency: "Reduce transparency",
      dash: "—",
    },
    zh: {
      title: "主题预览",
      lead: "安装 Navo 后再次打开此链接，即可将主题导入应用。",
      navDownload: "下载",
      navPrivacy: "隐私政策",
      navTerms: "服务条款",
      langToggle: "English",
      footerNote: "Navo 是独立、非官方的 Telegram 客户端，与 Telegram 无隶属或背书关系。",
      chatName: "Alex",
      bubbleIn: "嘿，看看这个主题",
      bubbleOut: "在 Navo 里很好看",
      bubbleIn2: "包含品牌色和壁纸",
      composerPlaceholder: "消息",
      labelColor: "品牌色",
      labelAppearance: "外观",
      labelWallpaper: "壁纸",
      labelFont: "字体",
      labelGlass: "玻璃效果",
      labelExtras: "其它",
      downloadTitle: "下载 Navo",
      downloadLead: "支持 Android、Windows 与 macOS。",
      downloadGuide: "完整安装说明 →",
      statusInvalid: "主题链接缺失或无效。你仍可在下方下载 Navo。",
      statusOk: "主题已加载 — 下载 Navo 后即可应用。",
      appearanceLight: "浅色",
      appearanceDark: "深色",
      appearanceSystem: "跟随系统",
      wallpaperBuiltin: "内置",
      wallpaperTd: "Telegram 云端背景",
      wallpaperUnknown: "自定义",
      extrasNone: "无",
      extraMeta: "消息元信息标记",
      extraTags: "成员标签",
      extraCircular: "圆形群头像",
      extraReduceTransparency: "降低透明度",
      dash: "—",
    },
  };

  var WALLPAPER_IDS = {
    aurora: true,
    dusk: true,
    mist: true,
    gradient: true,
    default: true,
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
      if (!key) return;
      el.textContent = t(lang, key);
    });
  }

  function padBase64(s) {
    var pad = s.length % 4;
    if (pad === 0) return s;
    return s + "====".slice(0, 4 - pad);
  }

  function decodePayload(raw) {
    if (!raw) return null;
    try {
      var b64 = padBase64(raw.replace(/-/g, "+").replace(/_/g, "/"));
      var binary = atob(b64);
      var bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      var json;
      if (typeof TextDecoder !== "undefined") {
        json = new TextDecoder("utf-8").decode(bytes);
      } else {
        json = decodeURIComponent(escape(binary));
      }
      var data = JSON.parse(json);
      if (!data || typeof data !== "object") return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function argbToHex(n) {
    if (typeof n !== "number" || !isFinite(n)) return null;
    var u = n >>> 0;
    var r = (u >> 16) & 0xff;
    var g = (u >> 8) & 0xff;
    var b = u & 0xff;
    return (
      "#" +
      [r, g, b]
        .map(function (x) {
          return x.toString(16).padStart(2, "0");
        })
        .join("")
        .toUpperCase()
    );
  }

  function appearanceLabel(lang, mode) {
    if (mode === "dark") return t(lang, "appearanceDark");
    if (mode === "system") return t(lang, "appearanceSystem");
    if (mode === "light") return t(lang, "appearanceLight");
    return mode || t(lang, "dash");
  }

  function wallpaperLabel(lang, data) {
    var source = data.wallpaperSource || "";
    var id = data.chatWallpaperId || "";
    if (source === "tdBackground") {
      var name = data.tdBackgroundName ? " · " + data.tdBackgroundName.slice(0, 12) + "…" : "";
      return t(lang, "wallpaperTd") + (id ? " (" + id + ")" : "") + name;
    }
    if (id && WALLPAPER_IDS[id]) {
      return t(lang, "wallpaperBuiltin") + " · " + id;
    }
    if (id) return t(lang, "wallpaperUnknown") + " · " + id;
    return t(lang, "dash");
  }

  function wallpaperCssKey(data) {
    var id = (data.chatWallpaperId || "").toLowerCase();
    if (data.wallpaperSource === "tdBackground") return "td";
    if (WALLPAPER_IDS[id]) return id === "default" ? "aurora" : id;
    return "aurora";
  }

  function fontLabel(data) {
    var parts = [];
    if (data.fontChoice) parts.push(data.fontChoice);
    if (data.cjkFontChoice) parts.push(data.cjkFontChoice);
    if (data.monospaceFontChoice) parts.push(data.monospaceFontChoice);
    if (Array.isArray(data.fontFallbackChain) && data.fontFallbackChain.length) {
      parts.push(data.fontFallbackChain.join(", "));
    }
    return parts.length ? parts.join(" · ") : "—";
  }

  function extrasLabel(lang, data) {
    var bits = [];
    if (data.showMessageMetaIndicators) bits.push(t(lang, "extraMeta"));
    if (data.showMemberTags) bits.push(t(lang, "extraTags"));
    if (data.circularGroupAvatars) bits.push(t(lang, "extraCircular"));
    if (data.reduceTransparency) bits.push(t(lang, "extraReduceTransparency"));
    return bits.length ? bits.join(" · ") : t(lang, "extrasNone");
  }

  function setStatus(el, msg, ok) {
    if (!el) return;
    el.hidden = !msg;
    el.textContent = msg || "";
    el.classList.toggle("theme-status--ok", !!ok);
    el.classList.toggle("theme-status--err", !ok && !!msg);
  }

  function render(lang, data) {
    var phone = document.getElementById("theme-phone");
    var wallpaper = document.getElementById("theme-wallpaper");
    var status = document.getElementById("theme-status");
    var hexEl = document.getElementById("theme-color-hex");
    var swatch = document.getElementById("theme-swatch");

    var brand = DEFAULT_BRAND;
    var mode = "light";
    var valid = !!data;

    if (data) {
      var hex = argbToHex(data.brandColor);
      if (hex) brand = hex;
      if (data.appearanceMode === "dark" || data.appearanceMode === "light") {
        mode = data.appearanceMode;
      } else if (data.appearanceMode === "system") {
        mode =
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
      }
    }

    if (phone) {
      phone.style.setProperty("--theme-brand", brand);
      phone.setAttribute("data-mode", mode);
    }
    if (wallpaper) {
      wallpaper.setAttribute("data-wallpaper", data ? wallpaperCssKey(data) : "aurora");
    }
    if (hexEl) hexEl.textContent = brand;
    if (swatch) swatch.style.background = brand;

    var sumAppearance = document.getElementById("theme-sum-appearance");
    var sumWallpaper = document.getElementById("theme-sum-wallpaper");
    var sumFont = document.getElementById("theme-sum-font");
    var sumGlass = document.getElementById("theme-sum-glass");
    var sumExtras = document.getElementById("theme-sum-extras");

    if (valid) {
      if (sumAppearance) sumAppearance.textContent = appearanceLabel(lang, data.appearanceMode);
      if (sumWallpaper) sumWallpaper.textContent = wallpaperLabel(lang, data);
      if (sumFont) sumFont.textContent = fontLabel(data);
      if (sumGlass) sumGlass.textContent = data.glassQuality || t(lang, "dash");
      if (sumExtras) sumExtras.textContent = extrasLabel(lang, data);
      setStatus(status, t(lang, "statusOk"), true);
    } else {
      if (sumAppearance) sumAppearance.textContent = t(lang, "dash");
      if (sumWallpaper) sumWallpaper.textContent = t(lang, "dash");
      if (sumFont) sumFont.textContent = t(lang, "dash");
      if (sumGlass) sumGlass.textContent = t(lang, "dash");
      if (sumExtras) sumExtras.textContent = t(lang, "dash");
      setStatus(status, t(lang, "statusInvalid"), false);
    }
  }

  function boot() {
    var lang = detectLang();
    var raw = (location.hash || "").replace(/^#/, "");
    var data = decodePayload(raw);

    applyI18n(lang);
    render(lang, data);

    var toggle = document.getElementById("theme-lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        lang = lang === "zh" ? "en" : "zh";
        try {
          localStorage.setItem(LANG_KEY, lang);
        } catch (e) {}
        applyI18n(lang);
        render(lang, data);
      });
    }

    window.addEventListener("hashchange", function () {
      raw = (location.hash || "").replace(/^#/, "");
      data = decodePayload(raw);
      render(lang, data);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
