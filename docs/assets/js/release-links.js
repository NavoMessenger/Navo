/**
 * Optional: enrich download buttons with latest Release asset URLs.
 * Static links to /releases/latest already work without this script.
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

  function pickAsset(assets, pattern) {
    for (var i = 0; i < assets.length; i++) {
      if (pattern.test(assets[i].name)) return assets[i];
    }
    return null;
  }

  function apply(release) {
    var assets = release.assets || [];
    var map = {
      android: pickAsset(assets, /android.*\.apk$/i),
      windows: pickAsset(assets, /windows.*\.(exe|msi)$/i),
      macos: pickAsset(assets, /macos.*\.(dmg|zip)$/i),
    };
    document.querySelectorAll("[data-release-platform]").forEach(function (el) {
      var platform = el.getAttribute("data-release-platform");
      var asset = map[platform];
      if (asset && asset.browser_download_url) {
        el.setAttribute("href", asset.browser_download_url);
      }
      if (el.hasAttribute("data-release-version") && release.tag_name) {
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
