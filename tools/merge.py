# Combine official chapter markers (chapters.json) with audio-detected intros
# (audio_results.json) into ../extension/defaults.js. Chapters win when present.
#   python merge.py
import json, os, re, statistics
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data")
EXT_DIR = os.path.join(os.path.dirname(HERE), "extension")

def load(name):
    p = os.path.join(DATA, name)
    return json.load(open(p, encoding="utf-8")) if os.path.exists(p) else {}

chapters, audio = load("chapters.json"), load("audio_results.json")

def arc_of(ep):
    return re.sub(r"\s+\d+(\s*-\s*\d+)?(\s+[A-Za-z]+)*$", "", ep).strip() or ep

episodes, source = {}, Counter()
for k in sorted(set(chapters) | set(audio)):
    chs = chapters.get(k)
    op = [c for c in (chs or []) if re.match(r"(opening|intro|op\b)", c["title"], re.I)]
    if op:
        episodes[k] = {"start": round(op[0]["start"], 1), "end": round(op[0]["end"], 1)}
        source["chapters"] += 1
    elif chs:   # has chapters but no Opening chapter -> the release has no intro
        episodes[k] = {"none": True}
        source["chapters (no opening)"] += 1
    elif k in audio:
        r = audio[k]
        episodes[k] = {"none": True} if r.get("none") else {"start": r["start"], "end": r["end"]}
        source["audio"] += 1

by_arc = {}
for k, r in episodes.items():
    if not r.get("none"): by_arc.setdefault(arc_of(k), []).append(r)
arcs = {}
for arc, rs in by_arc.items():
    start = Counter(round(r["start"]) for r in rs).most_common(1)[0][0]
    same = [r for r in rs if abs(r["start"] - start) < 2] or rs
    arcs[arc] = {"start": start, "end": round(statistics.median(r["end"] for r in same), 1)}

out = ("// Built-in intro timestamps (seconds). Source: the official \"Opening\" chapter markers\n"
       "// in the One Pace files where present, otherwise audio fingerprinting (tools/).\n"
       "// Your own settings in the extension override these.\n"
       "var OPS_DEFAULTS = " + json.dumps({"arcs": arcs, "episodes": episodes}, indent=1, ensure_ascii=False) + ";\n")
open(os.path.join(EXT_DIR, "defaults.js"), "w", encoding="utf-8").write(out)
print(f"defaults.js: {len(episodes)} episodes ({dict(source)}), {len(arcs)} arcs")
missing = [k for k in chapters if k not in episodes]
print("No data (needs audio pass):", len(missing), missing[:40])
