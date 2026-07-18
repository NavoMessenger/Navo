/**
 * Enrich download buttons with latest Release asset URLs.
 * Fallback href remains /releases/latest when no matching asset exists.
 *
 * Current CI naming examples (tag 2.0.0):
 *   navo-2.0.0+26071805-arm64-v8a-release.apk
 *   navo-2.0.0+26071805-macos-adhoc.dmg
 */
(function () {
  var REPO = "NavoMessenger/Navo";
  var KEY = "navo_latest_release";
  var TTL_MS = 60 * 60 * 1000;

  function cacheGet() {
    try {
      var raw = sessionStorage.getItem(KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (Date.now() - parsed.ts > TTL_MS) return null;
      return parsed.data;
    } catch (e) {
      return null;
    }
  }

  function cacheSet(data) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data: data }));
    } catch (e) {}
  }

  function pickAsset(assets, patterns) {
    var list = Array.isArray(patterns) ? patterns : [patterns];
    for (var p = 0; p < list.length; p++) {
      for (var i = 0; i < assets.length; i++) {
        if (list[p].test(assets[i].name)) return assets[i];
      }
    }
    return null;
  }

  function apply(release) {
    var assets = release.assets || [];
    var map = {
      // CI names often omit "android" (e.g. …-arm64-v8a-release.apk)
      android: pickAsset(assets, [
        /android.*\.apk$/i,
        /(?:arm64|armeabi|x86_64|universal).*\.apk$/i,
        /\.apk$/i,
      ]),
      windows: pickAsset(assets, [
        /windows.*\.(exe|msi)$/i,
        /\.(exe|msi)$/i,
      ]),
      macos: pickAsset(assets, [
        /macos.*\.(dmg|zip)$/i,
        /\.dmg$/i,
      ]),
    };

    document.querySelectorAll("[data-release-platform]").forEach(function (el) {
      var platform = el.getAttribute("data-release-platform");
      var asset = map[platform];
      if (asset && asset.browser_download_url) {
        el.setAttribute("href", asset.browser_download_url);
        el.setAttribute("download", asset.name);
        el.title = asset.name;
      }
    });

    document.querySelectorAll("[data-release-version]").forEach(function (el) {
      if (release.tag_name) {
        el.textContent = release.tag_name;
      }
    });
  }

  var cached = cacheGet();
  if (cached) {
    apply(cached);
    return;
  }

  fetch("https://api.github.com/repos/" + REPO + "/releases/latest")
    .then(function (r) {
      if (!r.ok) throw new Error("release fetch failed");
      return r.json();
    })
    .then(function (data) {
      cacheSet(data);
      apply(data);
    })
    .catch(function () {});
})();
