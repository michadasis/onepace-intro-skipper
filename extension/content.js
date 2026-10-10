// One Pace Intro Skipper — content script for pixeldrain.
// Intro ranges are stored per arc, with optional per-episode overrides:
// { arcs: { "Romance Dawn": { start, end } },
//   episodes: { "Romance Dawn 01": { none: true }, "Romance Dawn 05": { start, end } },
//   autoSkip: bool }

(() => {
  "use strict";

  const api = typeof browser !== "undefined" ? browser : chrome;
  const store = api.storage.local;

  const DEFAULTS = { arcs: {}, episodes: {}, autoSkip: false };
  let settings = { ...DEFAULTS };
  let scope = "arc"; // which level the menu edits: "arc" or "episode"
  let video = null;
  let overlay = null;
  let skipBtn = null;
  let menu = null;
  let arcLabel = null;
  let autoSkippedFor = null; // file name we already auto-skipped, so seeking back into the intro is allowed

  // ---------- helpers ----------

  function fmt(sec) {
    if (sec == null || isNaN(sec)) return "--:--";
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60);
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  // Current file name. On /u/ pages the title is "<file> ~ pixeldrain",
  // on /l/ album pages it is "<file> ~ <album> ~ pixeldrain".
  function currentFileName() {
    return document.title.split(" ~ ")[0].trim();
  }

  // "[One Pace][2] Romance Dawn 02 [480p][En Sub][164BA736].mp4" -> "Romance Dawn 02"
  // (resolution/hash are dropped so 480p and 1080p share the same settings)
  function episodeFromFileName(name) {
    let n = name.replace(/\.[a-z0-9]{2,4}$/i, "");
    n = n.replace(/^\s*\[One Pace\]\s*(\[[^\]]*\]\s*)?/i, "");
    n = n.replace(/\[[^\]]*\]/g, "").replace(/\s+/g, " ").trim();
    return n || null;
  }

  // "Romance Dawn 02" -> "Romance Dawn", "Arlong Park 05 Extended" -> "Arlong Park"
  function arcFromEpisode(ep) {
    return ep.replace(/\s+\d+(\s*-\s*\d+)?(\s+[A-Za-z]+)*$/, "").trim() || ep;
  }

  function isOnePace(name) {
    return /\[One Pace\]/i.test(name);
  }

  function currentEpisode() {
    const name = currentFileName();
    return isOnePace(name) ? episodeFromFileName(name) : null;
  }

  function currentArc() {
    const ep = currentEpisode();
    return ep ? arcFromEpisode(ep) : null;
  }

  // Key + storage bucket the menu is currently editing.
  function scopeTarget() {
    return scope === "episode"
      ? { bucket: settings.episodes, key: currentEpisode() }
      : { bucket: settings.arcs, key: currentArc() };
  }

  function save() {
    store.set(settings);
  }

  // ---------- UI ----------

  function buildOverlay() {
    overlay = document.createElement("div");
    overlay.className = "ops-overlay";

    skipBtn = document.createElement("button");
    skipBtn.type = "button";
    skipBtn.className = "ops-skip";
    skipBtn.textContent = "Skip Intro ⏭";
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      skip();
    });

    const gear = document.createElement("button");
    gear.type = "button";
    gear.className = "ops-gear";
    gear.title = "Intro settings";
    gear.setAttribute("aria-label", "Intro settings");
    // Built with DOM APIs (no innerHTML) so it also passes Firefox add-on review.
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d",
      "M19.14 12.94a7.07 7.07 0 0 0 .06-.94 7.07 7.07 0 0 0-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61" +
      "l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54A.48.48 0 0 0 13.92 2" +
      "h-3.84a.48.48 0 0 0-.48.41l-.36 2.54a7.37 7.37 0 0 0-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.72 8.47" +
      "a.48.48 0 0 0 .12.61l2.03 1.58a7.4 7.4 0 0 0 0 1.88l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32" +
      "c.12.22.37.29.59.22l2.39-.96c.5.38 1.04.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84" +
      "c.24 0 .44-.17.47-.41l.36-2.54a7.37 7.37 0 0 0 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32" +
      "a.49.49 0 0 0-.12-.61zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z");
    svg.appendChild(path);
    gear.appendChild(svg);
    gear.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.hidden = !menu.hidden;
      if (!menu.hidden) refreshMenu();
    });

    menu = document.createElement("div");
    menu.className = "ops-menu";
    menu.hidden = true;
    menu.addEventListener("click", (e) => e.stopPropagation());

    arcLabel = document.createElement("div");
    arcLabel.className = "ops-arc";

    const mkItem = (label, fn) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "ops-item";
      b.dataset.label = label;
      b.addEventListener("click", () => {
        fn();
        refreshMenu();
        update();
      });
      return b;
    };

    const scopeRow = document.createElement("div");
    scopeRow.className = "ops-scope";
    for (const [value, text] of [["arc", "Whole arc"], ["episode", "This episode only"]]) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.scope = value;
      b.textContent = text;
      b.addEventListener("click", () => {
        scope = value;
        refreshMenu();
      });
      scopeRow.appendChild(b);
    }

    menu.append(
      arcLabel,
      scopeRow,
      mkItem("Set intro START to now", () => setPoint("start")),
      mkItem("Set intro END to now", () => setPoint("end")),
      mkItem("This episode has NO intro", () => {
        const ep = currentEpisode();
        if (ep) {
          settings.episodes[ep] = { none: true };
          save();
        }
      }),
      mkItem("Clear (use arc / nothing)", () => {
        const { bucket, key } = scopeTarget();
        if (key) {
          delete bucket[key];
          save();
        }
      })
    );

    // Gear + menu sit in the top-right corner, the Skip button in the bottom-right.
    const settings = document.createElement("div");
    settings.className = "ops-settings";
    settings.append(gear, menu);
    overlay.append(settings, skipBtn);
  }

  function describe(r) {
    if (!r) return "not set";
    if (r.none) return "no intro";
    return `${fmt(r.start)} → ${fmt(r.end)}`;
  }

  function refreshMenu() {
    const ep = currentEpisode();
    const arc = currentArc();
    if (!ep) {
      arcLabel.textContent = "Not a One Pace file";
    } else {
      const builtin = BUILTIN.episodes[ep] || BUILTIN.arcs[arc];
      arcLabel.textContent =
        `${arc} (arc): ${describe(settings.arcs[arc])}\n` +
        `${ep} (episode): ${describe(settings.episodes[ep])}\n` +
        `Built-in: ${describe(builtin)}`;
    }
    for (const b of menu.querySelectorAll(".ops-scope button")) {
      b.classList.toggle("ops-active", b.dataset.scope === scope);
    }
    const now = video ? fmt(video.currentTime) : "--:--";
    for (const b of menu.querySelectorAll(".ops-item")) {
      b.textContent = b.dataset.label.replace("now", `now (${now})`);
      b.disabled = !ep;
    }
  }

  function setPoint(which) {
    const { bucket, key } = scopeTarget();
    if (!key || !video) return;
    const t = Math.round(video.currentTime * 10) / 10;
    const prev = bucket[key];
    const r = prev && !prev.none ? prev : { start: 0, end: null };
    r[which] = t;
    if (which === "end" && (r.start == null || r.start >= t)) r.start = 0;
    if (which === "start" && r.end != null && r.end <= t) r.end = null;
    bucket[key] = r;
    save();
  }

  // Built-in timestamps measured from the actual files (defaults.js).
  const BUILTIN = (typeof OPS_DEFAULTS !== "undefined" && OPS_DEFAULTS) || { arcs: {}, episodes: {} };

  // Priority: your episode setting > your arc setting > built-in episode > built-in arc.
  function activeRange() {
    const ep = currentEpisode();
    if (!ep) return null;
    const arc = arcFromEpisode(ep);
    const r =
      settings.episodes[ep] || settings.arcs[arc] ||
      BUILTIN.episodes[ep] || BUILTIN.arcs[arc];
    if (!r || r.none || r.end == null) return null;
    return r;
  }

  function inIntro() {
    const r = activeRange();
    if (!r || !video) return false;
    const t = video.currentTime;
    return t >= (r.start || 0) && t < r.end - 0.5;
  }

  function skip() {
    const r = activeRange();
    if (r && video) video.currentTime = r.end;
  }

  function update() {
    if (!overlay) return;
    overlay.style.display = currentEpisode() ? "" : "none";
    const show = inIntro();
    skipBtn.classList.toggle("ops-visible", show);

    if (show && settings.autoSkip && !video.paused) {
      const file = currentFileName();
      if (autoSkippedFor !== file) {
        autoSkippedFor = file;
        skip();
      }
    }
    if (!menu.hidden) refreshMenu();
  }

  // ---------- attaching to the player ----------

  function hostFor(v) {
    const fs = document.fullscreenElement;
    if (fs && fs !== v && fs.contains(v)) return fs;
    return v.parentElement;
  }

  function placeOverlay() {
    if (!video || !overlay) return;
    const host = hostFor(video);
    if (!host) return;
    if (overlay.parentElement !== host) {
      if (getComputedStyle(host).position === "static") host.style.position = "relative";
      host.appendChild(overlay);
    }
  }

  function attach(v) {
    if (video === v) return;
    if (video) {
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("seeked", update);
      video.removeEventListener("loadedmetadata", update);
    }
    video = v;
    if (!overlay) buildOverlay();
    video.addEventListener("timeupdate", update);
    video.addEventListener("seeked", update);
    video.addEventListener("loadedmetadata", update);
    placeOverlay();
    update();
  }

  function scan() {
    const v = document.querySelector("video");
    if (v && v !== video) attach(v);
    else if (v) placeOverlay();
  }

  // ---------- init ----------

  store.get(DEFAULTS, (data) => {
    settings = data;
    scan();
  });

  api.storage.onChanged.addListener((changes, area) => {
    if (area !== "local") return;
    if (changes.arcs) settings.arcs = changes.arcs.newValue || {};
    if (changes.episodes) settings.episodes = changes.episodes.newValue || {};
    if (changes.autoSkip) settings.autoSkip = !!changes.autoSkip.newValue;
    update();
  });

  // pixeldrain is a single-page app: the <video> is swapped when you change
  // episode inside an album, so keep watching the DOM and the title.
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  new MutationObserver(() => {
    autoSkippedFor = null;
    update();
  }).observe(document.querySelector("title") || document.head, { childList: true, subtree: true, characterData: true });
  document.addEventListener("fullscreenchange", placeOverlay);

  // Close the menu when clicking elsewhere.
  document.addEventListener("click", () => {
    if (menu) menu.hidden = true;
  });

  // "S" skips the intro while the button is visible.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "s" && e.key !== "S") return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    if (inIntro()) {
      e.preventDefault();
      skip();
    }
  });
})();
