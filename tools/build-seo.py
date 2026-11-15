"""Doplní do index.html statický obsah pro vyhledávače (seznam rostlin) a vygeneruje sitemap.xml.
Spustit po změně dat:  python3 tools/build-seo.py && python3 tools/build-sw.py"""
import json, os, re, datetime, html
os.chdir(os.path.join(os.path.dirname(__file__), ".."))
src = open("data/sets.js", encoding="utf-8").read()
areas = json.loads(src.split("window.AREAS = ", 1)[1].rstrip().rstrip(";"))
total = sum(len(s["plants"]) for a in areas for s in a["sets"])
parts = ['<div class="seo">', '<h1>🌼 Poznávačka letniček – procvičování rostlin</h1>',
         f'<p>Procvičuj poznávačku podle fotek: {total} letniček s latinskými a českými názvy. Hry Pexeso, Tipovačka a Jako ve škole, Atlas rostlin a Generálka se známkou. Zdarma, v mobilu i offline.</p>']
for a in areas:
    for s in a["sets"]:
        parts.append(f'<h2>{html.escape(s["title"])} ({len(s["plants"])} druhů)</h2><ul>')
        parts += [f'<li><i>{html.escape(p["lat"])}</i> – {html.escape(p["cz"])}</li>' for p in s["plants"]]
        parts.append("</ul>")
parts.append("</div>")
idx = open("index.html", encoding="utf-8").read()
idx = re.sub(r"<!-- SEO:START.*?-->.*?<!-- SEO:END -->",
             "<!-- SEO:START (generuje tools/build-seo.py) -->\n" + "\n".join(parts) + "\n<!-- SEO:END -->", idx, flags=re.S)
open("index.html", "w", encoding="utf-8").write(idx)
today = datetime.date.today().isoformat()
open("sitemap.xml", "w", encoding="utf-8").write(f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bocrew.com/</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
''')
print("SEO:", total, "rostlin, sitemap", today)
