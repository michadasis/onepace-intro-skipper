# Full run: for every One Pace episode WITHOUT an official "Opening" chapter marker
# (run probe_chapters.py first), download the first 4 minutes of audio, find the intro
# by audio matching, then merge everything into ../extension/defaults.js (merge.py).
#   python probe_chapters.py && python run_all.py
import json, os, re, statistics, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
FILES = os.path.join(DATA, "files.json")
# Audio cache lives outside the extension folder so it never gets packaged.
CACHE = os.environ.get("CACHE", os.path.join(os.environ.get("TEMP", HERE), "onepace-intro-cache"))
os.makedirs(CACHE, exist_ok=True)
os.chdir(CACHE)
sys.path.insert(0, HERE)
from analyze import analyze, key, pick_episodes

SECONDS = 240
THREADS = int(os.environ.get("THREADS", "2"))
DELAY = float(os.environ.get("DELAY", "2"))
FULL = SECONDS * 8000 * 2 * 0.98
os.makedirs("audio", exist_ok=True)

# 1) Episode list: every album on onepace.net, one file per episode (see pick_episodes).
files = json.load(open(FILES))
eps = pick_episodes(files)
# Reuse audio already downloaded for another copy of the same episode.
cached = {}
for f in files:
    if os.path.exists(f"audio/{f['id']}.wav"): cached.setdefault(key(f["name"]), f["id"])
eps = [(k, cached.get(k, fid)) for k, fid in eps]
# Only episodes without an official "Opening" chapter need audio, plus up to 2 neighbours
# on each side so every one of them has something to be compared against.
chapters = json.load(open(os.path.join(DATA, "chapters.json"))) if os.path.exists(os.path.join(DATA, "chapters.json")) else {}
def has_opening(k): return any(c["title"].lower().startswith("opening") for c in chapters.get(k, []))
need = {i for i, (k, _) in enumerate(eps) if not has_opening(k)}
want = sorted({j for i in need for j in range(i - 2, i + 3) if 0 <= j < len(eps)})
todo = [eps[i] for i in want]
print(f"{len(eps)} unique episodes, {len(need)} without chapters, downloading audio for {len(todo)}", flush=True)

# 2) Download (slowly: pixeldrain answers 403 when hit too hard)
def fetch(item):
    k, fid = item
    wav = f"audio/{fid}.wav"
    if os.path.exists(wav) and os.path.getsize(wav) >= FULL: return k, "cached"
    r = None
    for attempt in range(4):
        r = subprocess.run(["ffmpeg", "-v", "error", "-y", "-reconnect", "1", "-reconnect_on_network_error", "1",
                            "-reconnect_delay_max", "10", "-t", str(SECONDS), "-i", f"https://pixeldrain.net/api/file/{fid}",
                            "-vn", "-ac", "1", "-ar", "8000", wav + ".tmp.wav"], capture_output=True, text=True)
        if r.returncode == 0 and os.path.getsize(wav + ".tmp.wav") >= FULL:
            os.replace(wav + ".tmp.wav", wav); time.sleep(DELAY); return k, "ok"
        if "403" in r.stderr or "Invalid data" in r.stderr or "End of file" in r.stderr:
            time.sleep(90 * (attempt + 1))      # rate limited: back off
    if r.returncode == 0 and os.path.exists(wav + ".tmp.wav") and os.path.getsize(wav + ".tmp.wav") > 100000:
        os.replace(wav + ".tmp.wav", wav); return k, "ok (short)"
    return k, "FAILED " + r.stderr.strip().splitlines()[-1][-120:]
done = 0
with ThreadPoolExecutor(THREADS) as ex:
    for k, st in ex.map(fetch, todo):
        done += 1
        print(f"[{done}/{len(todo)}] {st} {k}", flush=True)

# 3) Analyze every episode that has audio, then merge with the chapters.
have = [(k, fid) for k, fid in eps if os.path.exists(f"audio/{fid}.wav")]
print("Analyzing...", flush=True)
results = analyze(have, log=lambda s: print(s, flush=True))
json.dump(results, open(os.path.join(DATA, "audio_results.json"), "w"), indent=1)
flagged = [k for i, (k, _) in enumerate(eps) if i in need and (k not in results or results[k].get("none") or results[k].get("truncated"))]
subprocess.run([sys.executable, os.path.join(HERE, "merge.py")])
print("Check these by hand (no intro found / no audio / intro may run past 4 min):", ", ".join(flagged) or "none", flush=True)
print("FINISHED", flush=True)
