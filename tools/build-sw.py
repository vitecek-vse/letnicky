"""Přegeneruje sw.js (seznam souborů pro offline režim a verzi cache).
Spustit po každé změně fotek, dat nebo index.html:  python3 tools/build-sw.py"""
import glob, hashlib, json, os, re
os.chdir(os.path.join(os.path.dirname(__file__), ".."))
assets = ["./", "index.html", "data/sets.js", "manifest.webmanifest"] + sorted(glob.glob("icons/*.png")) + sorted(glob.glob("img/*/*.jpg"))
h = hashlib.sha1()
for a in assets[1:]:
    h.update(open(a, "rb").read())
sw = open("sw.js", encoding="utf-8").read()
sw = re.sub(r'const CACHE = "poznavacka-[0-9a-f]+";', f'const CACHE = "poznavacka-{h.hexdigest()[:8]}";', sw)
sw = re.sub(r"const ASSETS = \[.*?\];", "const ASSETS = " + json.dumps(assets, ensure_ascii=False) + ";", sw, flags=re.S)
open("sw.js", "w", encoding="utf-8").write(sw)
print("sw.js:", h.hexdigest()[:8], len(assets), "souborů")
