# Find each episode's intro by matching chromaprint fingerprints against other episodes.
import json, subprocess, os, re, struct, sys, statistics
from collections import Counter, defaultdict
HOP = 0.1252                    # seconds per chromaprint item (algorithm 1), measured on a 240 s clip
MAX_BITS = 6                    # max differing bits for two items to "match"
MIN_LEN = 15                    # seconds; shorter shared bits are ignored
GAP = 3.5                       # seconds of non-matching tolerated inside a segment
MAX_INTRO = 170                 # seconds; longer shared segments are not an opening
os.makedirs("fp", exist_ok=True)

def key(name):
    n = re.sub(r"\.[a-z0-9]{2,4}$", "", name, flags=re.I)
    n = re.sub(r"^\s*\[One Pace\]\s*(\[[^\]]*\]\s*)?", "", n, flags=re.I)
    return re.sub(r"\s+", " ", re.sub(r"\[[^\]]*\]", "", n)).strip()

def fingerprint(fid):
    out = f"fp/{fid}.a1.raw"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", f"audio/{fid}.wav", "-f", "chromaprint",
                        "-fp_format", "raw", "-algorithm", "1", out], check=True)
    data = open(out, "rb").read()
    return list(struct.unpack(f"<{len(data)//4}I", data))

def segments_for_shift(a, b, shift):
    # positions i in a aligned with i+shift in b
    lo, hi = max(0, -shift), min(len(a), len(b) - shift)
    good = [bin(a[i] ^ b[i + shift]).count("1") <= MAX_BITS for i in range(lo, hi)]
    segs, start, last = [], None, None
    gap = int(GAP / HOP)
    for k, g in enumerate(good):
        if g:
            if start is None: start = k
            elif k - last > gap:
                segs.append((start, last)); start = k
            last = k
    if start is not None: segs.append((start, last))
    return [(s + lo, e + lo) for s, e in segs]

def compare(a, b):
    idx = defaultdict(list)
    for j, v in enumerate(b): idx[v].append(j)
    shifts = Counter()
    for i, v in enumerate(a):
        for j in idx.get(v, ()): shifts[j - i] += 1
    best = None
    for shift, cnt in shifts.most_common(8):
        if cnt < 5: break
        for s, e in segments_for_shift(a, b, shift):
            if (e - s) * HOP >= MIN_LEN and (best is None or e - s > best[1] - best[0]):
                best = (s, e, shift)
    if not best: return None
    s, e, shift = best
    # Longest real One Pace opening is ~151 s. A longer match means the two files share
    # actual episode content (duplicate upload, Extended cut), not just the opening.
    if (e - s) * HOP > MAX_INTRO: return None
    return (s * HOP, (e + 1) * HOP, (s + shift) * HOP, (e + 1 + shift) * HOP)


def agreed_end(ends, tol=1.5):
    """Latest end time that at least two comparisons agree on (within tol seconds).
    Episodes compared with a re-edited/shorter opening version break off early, so the
    median is too short; a single match running long is noise, so plain max is too long."""
    ends = sorted(ends, reverse=True)
    for i, e in enumerate(ends):
        if sum(1 for x in ends if abs(x - e) <= tol) >= 2:
            return e
        # Two long matches a few seconds apart: one ran on into the shared title-card
        # jingle. Take the earlier one, which is where the opening itself ends.
        if i + 1 < len(ends) and e - ends[i + 1] <= 12:
            return ends[i + 1]
    return statistics.median(ends)

def analyze(eps, k_near=6, log=print):
    """eps: ordered list of (key, file_id). Each episode is compared with up to
    k_near episodes before and after it (crosses arc borders, so one-episode arcs
    still get compared with something)."""
    fps = {fid: fingerprint(fid) for _, fid in eps}
    results = {}
    for i, (k, fid) in enumerate(eps):
        matches = []
        for j in range(max(0, i - k_near), min(len(eps), i + k_near + 1)):
            if j == i: continue
            k2, fid2 = eps[j]
            m = compare(fps[fid], fps[fid2])
            if m: matches.append((round(m[0], 1), round(m[1], 1), k2))
        dur = len(fps[fid]) * HOP
        if matches:
            # The intro is the segment most episodes agree on: cluster by start time.
            groups = defaultdict(list)
            for m in matches: groups[round(m[0] / 3)].append(m)
            best = max(groups.values(), key=len)
            res = {"start": round(statistics.median(m[0] for m in best), 1),
                   "end": round(agreed_end([m[1] for m in best]), 1), "n": len(best), "of": len(matches)}
            if res["end"] > dur - 3: res["truncated"] = True   # intro may run past the clip
        else:
            res = {"none": True}
        results[k] = res
        log(f"{k}: {res}")
    # Fallback for episodes with no match among their neighbours: compare against every
    # episode of the same arc (catches rare opening versions and Extended <-> normal pairs).
    arc_of = lambda k: re.sub(r"\s+\d+(\s*-\s*\d+)?(\s+[A-Za-z]+)*$", "", k).strip() or k
    for k, fid in eps:
        if not results[k].get("none"): continue
        matches = []
        for k2, fid2 in eps:
            if k2 != k and arc_of(k2) == arc_of(k):
                m = compare(fps[fid], fps[fid2])
                if m: matches.append((round(m[0], 1), round(m[1], 1), k2))
        if not matches: continue
        groups = defaultdict(list)
        for m in matches: groups[round(m[0] / 3)].append(m)
        best = max(groups.values(), key=len)
        res = {"start": round(statistics.median(m[0] for m in best), 1),
               "end": round(agreed_end([m[1] for m in best]), 1), "n": len(best), "of": len(matches), "arc_wide": True}
        if res["end"] > len(fps[fid]) * HOP - 3: res["truncated"] = True
        results[k] = res
        log(f"{k}: {res} (arc-wide)")
    return results


def pick_episodes(files):
    """One file per episode, in list order: prefer original-language (Sub > CC > Dub), then smallest file."""
    def rank(f):
        t = f["listTitle"]
        lang = 0 if "[En Sub]" in t else 1 if "[En CC]" in t else 3 if "[En Dub]" in t else 2
        return (lang, f["size"])
    best, order = {}, []
    for f in files:
        k = key(f["name"])
        if k not in best:
            order.append(k); best[k] = f
        elif rank(f) < rank(best[k]):
            best[k] = f
    # keep each album's episodes together and sorted so neighbours are the same arc
    lists = []
    for k in order:
        l = best[k]["list"]
        if l not in lists: lists.append(l)
    return [(k, best[k]["id"]) for l in lists for k in sorted(k for k in order if best[k]["list"] == l)]
