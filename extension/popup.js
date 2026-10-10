const api = typeof browser !== "undefined" ? browser : chrome;
const store = api.storage.local;
const DEFAULTS = { arcs: {}, episodes: {}, autoSkip: false };

function fmt(sec) {
  if (sec == null || isNaN(sec)) return "";
  sec = Math.max(0, Math.round(sec));
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

// Accepts "1:35", "95", "1:35.5"; empty -> null; invalid -> undefined
function parse(str) {
  str = str.trim();
  if (!str) return null;
  const parts = str.split(":").map(Number);
  if (parts.some(isNaN)) return undefined;
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

// Renders one bucket ("arcs" or "episodes") into its table body.
function renderBucket(settings, bucketName) {
  const bucket = settings[bucketName];
  const tbody = document.getElementById(bucketName);
  tbody.textContent = "";
  const keys = Object.keys(bucket).sort();
  if (!keys.length) {
    const td = tbody.insertRow().insertCell();
    td.colSpan = 4;
    td.className = "empty";
    td.textContent = "None saved yet.";
    return;
  }
  for (const key of keys) {
    const r = bucket[key];
    const tr = tbody.insertRow();
    const name = tr.insertCell();
    name.className = "arc";
    name.textContent = key;
    name.title = key;

    if (r.none) {
      const td = tr.insertCell();
      td.colSpan = 2;
      td.textContent = "no intro";
    } else {
      for (const field of ["start", "end"]) {
        const input = document.createElement("input");
        input.className = "time";
        input.value = fmt(r[field]);
        input.addEventListener("change", () => {
          const v = parse(input.value);
          if (v === undefined) {
            input.value = fmt(r[field]);
            return;
          }
          r[field] = v;
          store.set({ [bucketName]: bucket });
        });
        tr.insertCell().appendChild(input);
      }
    }

    const del = document.createElement("button");
    del.textContent = "✕";
    del.title = "Remove";
    del.addEventListener("click", () => {
      delete bucket[key];
      store.set({ [bucketName]: bucket });
      renderBucket(settings, bucketName);
    });
    tr.insertCell().appendChild(del);
  }
}

store.get(DEFAULTS, (settings) => {
  document.getElementById("autoSkip").checked = !!settings.autoSkip;
  renderBucket(settings, "arcs");
  renderBucket(settings, "episodes");
  document.getElementById("autoSkip").addEventListener("change", (e) => {
    store.set({ autoSkip: e.target.checked });
  });
});
