# Read the chapter markers ("Opening", "Episode", ...) that newer One Pace releases embed.
# Only the file index is fetched (a few KB per file), one file at a time, politely.
#   python probe_chapters.py      -> tools/data/chapters.json
import json, os, re, subprocess, sys, time
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from analyze import key

DATA = os.path.join(HERE, "data")
files = json.load(open(os.path.join(DATA, "files.json")))
out_path = os.path.join(DATA, "chapters.json")
chapters = json.load(open(out_path)) if os.path.exists(out_path) else {}

titles = {f["list"]: f["listTitle"] for f in files}
eps, seen = [], set()
for f in files:
    if "[En Sub]" not in titles[f["list"]]: continue
    k = key(f["name"])
    if k not in seen:
        seen.add(k); eps.append((k, f["id"]))

DELAY = float(os.environ.get("DELAY", "3"))
for n, (k, fid) in enumerate(eps, 1):
    if k in chapters: continue
    for attempt in range(5):
        r = subprocess.run(["ffprobe", "-v", "error", "-show_chapters", "-of", "json",
                            f"https://pixeldrain.net/api/file/{fid}"], capture_output=True, text=True)
        if r.returncode == 0: break
        wait = 60 * (attempt + 1)
        print(f"  {k}: {r.stderr.strip().splitlines()[-1][:80]} — waiting {wait}s", flush=True)
        time.sleep(wait)
    else:
        print(f"[{n}/{len(eps)}] GAVE UP {k}", flush=True); continue
    chs = [{"title": c.get("tags", {}).get("title", ""), "start": round(float(c["start_time"]), 3),
            "end": round(float(c["end_time"]), 3)} for c in json.loads(r.stdout).get("chapters", [])]
    chapters[k] = chs
    json.dump(chapters, open(out_path, "w"), indent=1, ensure_ascii=False)
    print(f"[{n}/{len(eps)}] {k}: " + (", ".join(f"{c['title']} {c['start']}-{c['end']}" for c in chs) or "no chapters"), flush=True)
    time.sleep(DELAY)
print("DONE", flush=True)
