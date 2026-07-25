/**
 * Theme share preview: decode #base64 JSON, render chat mock + summary,
 * fetch Telegram cloud wallpaper preview, open in Navo (intent / custom scheme).
 */
(function () {
  var LANG_KEY = "navo_theme_lang";
  var AUTO_OPEN_KEY = "navo_theme_auto_open";
  var DEFAULT_BRAND = "#2d7ff9";
  var PACKAGE = "im.navo.app";
  var PLAY_STORE = "https://play.google.com/store/apps/details?id=" + PACKAGE;

  var STRINGS = {
    en: {
      title: "Theme preview",
      lead: "Open in Navo to apply this theme, or download the app first.",
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
      labelColorShort: "Color",
      labelAppearance: "Appearance",
      labelWallpaper: "Wallpaper",
      labelFont: "Font",
      labelCjk: "CJK",
      labelMono: "Mono",
      labelGlass: "Glass quality",
      labelExtras: "Extras",
      packNote: "Preview below — open Navo to apply color, wallpaper, fonts, and more.",
      downloadTitle: "Get Navo",
      downloadLead: "Available on Android, Windows, and macOS.",
      downloadGuide: "Full install guide →",
      openInNavo: "Open in Navo",
      openHint: "Requires Navo installed. If nothing happens, download below.",
      statusInvalid: "This theme link is missing or invalid. You can still download Navo below.",
      statusOk: "Theme loaded — open Navo to apply it.",
      statusWallLoading: "Loading wallpaper preview…",
      statusWallFail: "Wallpaper preview unavailable (Telegram cloud). Colors and fonts still shown.",
      appearanceLight: "Light",
      appearanceDark: "Dark",
      appearanceSystem: "System",
      wallpaperBuiltin: "Built-in",
      wallpaperTd: "Telegram cloud background",
      wallpaperUnknown: "Custom",
      fontSystem: "System default",
      fontPingFang: "PingFang SC [CN]",
      fontMenlo: "Menlo",
      extrasNone: "None",
      extraMeta: "Message meta indicators",
      extraTags: "Member tags",
      extraCircular: "Circular group avatars",
      extraReduceTransparency: "Reduce transparency",
      dash: "—",
    },
    zh: {
      title: "主题预览",
      lead: "在 Navo 中打开以应用主题，或先下载安装应用。",
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
      labelColorShort: "颜色",
      labelAppearance: "外观",
      labelWallpaper: "壁纸",
      labelFont: "字体",
      labelCjk: "CJK",
      labelMono: "Mono",
      labelGlass: "玻璃效果",
      labelExtras: "其它",
      packNote: "预览效果如下，在 Navo 中打开后可更新外观（颜色、壁纸、字体、缩放等）。",
      downloadTitle: "下载 Navo",
      downloadLead: "支持 Android、Windows 与 macOS。",
      downloadGuide: "完整安装说明 →",
      openInNavo: "在 Navo 中打开",
      openHint: "需已安装 Navo。若无反应，请先下载安装。",
      statusInvalid: "主题链接缺失或无效。你仍可在下方下载 Navo。",
      statusOk: "主题已加载 — 在 Navo 中打开以应用。",
      statusWallLoading: "正在加载壁纸预览…",
      statusWallFail: "壁纸预览暂不可用（Telegram 云端），颜色与字体仍可查看。",
      appearanceLight: "浅色",
      appearanceDark: "深色",
      appearanceSystem: "跟随系统",
      wallpaperBuiltin: "内置",
      wallpaperTd: "Telegram 云端背景",
      wallpaperUnknown: "自定义",
      fontSystem: "系统默认",
      fontPingFang: "苹方简体 [CN]",
      fontMenlo: "Menlo",
      extrasNone: "无",
      extraMeta: "消息元信息标记",
      extraTags: "成员标签",
      extraCircular: "圆形群头像",
      extraReduceTransparency: "降低透明度",
      dash: "—",
    },
  };

  var FONT_LABELS = {
    system: "fontSystem",
    pingFang: "fontPingFang",
    pingfang: "fontPingFang",
    menlo: "fontMenlo",
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
      return t(lang, "wallpaperTd") + (id ? " · " + id : "");
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

  function prettyFont(lang, key) {
    if (!key) return t(lang, "dash");
    var mapKey = FONT_LABELS[key] || FONT_LABELS[String(key).toLowerCase()];
    if (mapKey) return t(lang, mapKey);
    return key;
  }

  function extrasLabel(lang, data) {
    var bits = [];
    if (data.showMessageMetaIndicators) bits.push(t(lang, "extraMeta"));
    if (data.showMemberTags) bits.push(t(lang, "extraTags"));
    if (data.circularGroupAvatars) bits.push(t(lang, "extraCircular"));
    if (data.reduceTransparency) bits.push(t(lang, "extraReduceTransparency"));
    return bits.length ? bits.join(" · ") : t(lang, "extrasNone");
  }

  function setStatus(el, msg, kind) {
    if (!el) return;
    el.hidden = !msg;
    el.textContent = msg || "";
    el.classList.remove("theme-status--ok", "theme-status--err", "theme-status--info");
    if (kind === "ok") el.classList.add("theme-status--ok");
    else if (kind === "err") el.classList.add("theme-status--err");
    else if (kind === "info") el.classList.add("theme-status--info");
  }

  function clearWallpaperImage(el) {
    if (!el) return;
    el.style.backgroundImage = "";
    el.classList.remove("has-photo");
  }

  function applyWallpaperImage(url) {
    var layers = [
      document.getElementById("theme-wallpaper"),
      document.getElementById("theme-pack-wall-img"),
    ];
    layers.forEach(function (el) {
      if (!el) return;
      el.style.backgroundImage = 'url("' + url.replace(/"/g, '\\"') + '")';
      el.classList.add("has-photo");
    });
  }

  function extractOgImage(html) {
    var m = html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i);
    if (m) return m[1];
    m = html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
    if (m) return m[1];
    m = html.match(/background:url\(['"]([^'"]+)['"]\)/i);
    if (m) return m[1];
    return null;
  }

  function proxyUrls(tgUrl) {
    var enc = encodeURIComponent(tgUrl);
    return [
      "https://api.allorigins.win/raw?url=" + enc,
      "https://proxy.cors.sh/" + tgUrl,
      "https://api.codetabs.com/v1/proxy?quest=" + enc,
    ];
  }

  function fetchText(url) {
    return fetch(url, {
      method: "GET",
      headers: { Accept: "text/html,*/*" },
      mode: "cors",
      credentials: "omit",
    }).then(function (res) {
      if (!res.ok) throw new Error("http " + res.status);
      return res.text();
    });
  }

  function loadTdWallpaper(name, lang, statusEl) {
    if (!name) return Promise.resolve(false);
    setStatus(statusEl, t(lang, "statusWallLoading"), "info");
    var tgUrl = "https://t.me/bg/" + encodeURIComponent(name);
    var proxies = proxyUrls(tgUrl);
    var i = 0;

    function next() {
      if (i >= proxies.length) {
        setStatus(statusEl, t(lang, "statusWallFail"), "err");
        return false;
      }
      var url = proxies[i++];
      return fetchText(url)
        .then(function (html) {
          var img = extractOgImage(html || "");
          if (!img) throw new Error("no og:image");
          applyWallpaperImage(img);
          setStatus(statusEl, t(lang, "statusOk"), "ok");
          return true;
        })
        .catch(function () {
          return next();
        });
    }

    return Promise.resolve().then(next);
  }

  function isAndroid() {
    return /Android/i.test(navigator.userAgent || "");
  }

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
  }

  /** Prefer URL-safe base64 in Intent path so `/` in payload does not split the URI. */
  function toBase64Url(s) {
    return String(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  /** Build deep-link candidates. Hash payload uses %23 so Intent URI still parses. */
  function openUrls(payload) {
    var hash = "#" + payload;
    var safe = toBase64Url(payload);
    var httpsUrl = "https://www.navo.im/theme" + hash;
    var intentUrl =
      "intent://www.navo.im/theme%23" +
      safe +
      "#Intent;scheme=https;package=" +
      PACKAGE +
      ";S.browser_fallback_url=" +
      encodeURIComponent(PLAY_STORE) +
      ";end";
    var customUrl = "navo://theme" + hash;
    return { httpsUrl: httpsUrl, intentUrl: intentUrl, customUrl: customUrl };
  }

  function tryOpenInNavo(payload, opts) {
    opts = opts || {};
    if (!payload) return;
    var urls = openUrls(payload);
    var fallbackMs = opts.fallbackMs || 1600;

    if (isAndroid()) {
      window.location.href = urls.intentUrl;
      return;
    }

    // iOS / desktop: try custom scheme, then same https URL (App Links / associated domains).
    var hidden = document.createElement("iframe");
    hidden.style.display = "none";
    hidden.src = urls.customUrl;
    document.body.appendChild(hidden);
    setTimeout(function () {
      try {
        document.body.removeChild(hidden);
      } catch (e) {}
    }, 800);

    var start = Date.now();
    setTimeout(function () {
      // If still visible, custom scheme likely failed — try https (for App Links).
      if (document.visibilityState === "visible" && Date.now() - start >= fallbackMs - 50) {
        if (opts.allowHttpsFallback !== false) {
          window.location.href = urls.httpsUrl;
        }
      }
    }, fallbackMs);
  }

  function render(lang, data, payload) {
    var phone = document.getElementById("theme-phone");
    var wallpaper = document.getElementById("theme-wallpaper");
    var packWall = document.getElementById("theme-pack-wall-img");
    var status = document.getElementById("theme-status");
    var hexEl = document.getElementById("theme-color-hex");
    var swatch = document.getElementById("theme-swatch");
    var openWrap = document.getElementById("theme-open");

    var brand = DEFAULT_BRAND;
    var mode = "light";
    var valid = !!data;

    clearWallpaperImage(wallpaper);
    clearWallpaperImage(packWall);

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
    var cssKey = data ? wallpaperCssKey(data) : "aurora";
    if (wallpaper) wallpaper.setAttribute("data-wallpaper", cssKey);
    if (packWall) packWall.setAttribute("data-wallpaper", cssKey);
    if (hexEl) hexEl.textContent = brand;
    if (swatch) swatch.style.background = brand;

    var sumAppearance = document.getElementById("theme-sum-appearance");
    var sumWallpaper = document.getElementById("theme-sum-wallpaper");
    var sumGlass = document.getElementById("theme-sum-glass");
    var sumExtras = document.getElementById("theme-sum-extras");
    var fontMain = document.getElementById("theme-font-main");
    var fontCjk = document.getElementById("theme-font-cjk");
    var fontMono = document.getElementById("theme-font-mono");

    if (openWrap) openWrap.hidden = !valid;

    if (valid) {
      if (sumAppearance) sumAppearance.textContent = appearanceLabel(lang, data.appearanceMode);
      if (sumWallpaper) sumWallpaper.textContent = wallpaperLabel(lang, data);
      if (sumGlass) sumGlass.textContent = data.glassQuality || t(lang, "dash");
      if (sumExtras) sumExtras.textContent = extrasLabel(lang, data);
      if (fontMain) fontMain.textContent = prettyFont(lang, data.fontChoice);
      if (fontCjk) fontCjk.textContent = prettyFont(lang, data.cjkFontChoice);
      if (fontMono) fontMono.textContent = prettyFont(lang, data.monospaceFontChoice);
      setStatus(status, t(lang, "statusOk"), "ok");

      if (data.wallpaperSource === "tdBackground" && data.tdBackgroundName) {
        loadTdWallpaper(data.tdBackgroundName, lang, status);
      }
    } else {
      if (sumAppearance) sumAppearance.textContent = t(lang, "dash");
      if (sumWallpaper) sumWallpaper.textContent = t(lang, "dash");
      if (sumGlass) sumGlass.textContent = t(lang, "dash");
      if (sumExtras) sumExtras.textContent = t(lang, "dash");
      if (fontMain) fontMain.textContent = t(lang, "dash");
      if (fontCjk) fontCjk.textContent = t(lang, "dash");
      if (fontMono) fontMono.textContent = t(lang, "dash");
      setStatus(status, t(lang, "statusInvalid"), "err");
    }
  }

  function shouldAutoOpen(payload) {
    if (!payload) return false;
    if (/[?&]noopen=1(?:&|$)/.test(location.search)) return false;
    try {
      if (sessionStorage.getItem(AUTO_OPEN_KEY) === payload) return false;
      sessionStorage.setItem(AUTO_OPEN_KEY, payload);
    } catch (e) {}
    // Auto-open on mobile when a valid theme is present.
    return isMobile();
  }

  function boot() {
    var lang = detectLang();
    var raw = (location.hash || "").replace(/^#/, "");
    var data = decodePayload(raw);

    applyI18n(lang);
    render(lang, data, raw);

    var toggle = document.getElementById("theme-lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        lang = lang === "zh" ? "en" : "zh";
        try {
          localStorage.setItem(LANG_KEY, lang);
        } catch (e) {}
        applyI18n(lang);
        render(lang, data, raw);
      });
    }

    var openBtn = document.getElementById("theme-open-btn");
    if (openBtn) {
      openBtn.addEventListener("click", function () {
        if (!raw || !data) return;
        tryOpenInNavo(raw, { allowHttpsFallback: true, fallbackMs: 1200 });
      });
    }

    window.addEventListener("hashchange", function () {
      raw = (location.hash || "").replace(/^#/, "");
      data = decodePayload(raw);
      render(lang, data, raw);
      if (shouldAutoOpen(raw) && data) {
        setTimeout(function () {
          tryOpenInNavo(raw, { allowHttpsFallback: false, fallbackMs: 1400 });
        }, 500);
      }
    });

    if (shouldAutoOpen(raw) && data) {
      setTimeout(function () {
        tryOpenInNavo(raw, { allowHttpsFallback: false, fallbackMs: 1400 });
      }, 600);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
