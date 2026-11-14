# Plánovaná vylepšení – poznávačka letniček

Pracovní větev: `vylepseni`. Na webu (bocrew.com) běží jen `main`, takže změny tady se neprojeví, dokud je nesloučíme do `main`.

## Fotky
- [x] Č. 11 Dahlia hortensis (jiřinka) – oříznout úzký proužek sousední fotky na okraji
- [x] Č. 29 Tagetes patula (aksamitník rozkladitý) – oříznout proužek sousední fotky vpravo
- [x] Č. 24 Matthiola incana (fiala šedivá) – dole pod malou fotkou zbytek dalšího obrázku, oříznout; zvážit i prázdné bílé místo vlevo nahoře
- [x] Projít všechny karty s vloženými detailními fotkami (11, 12, 13, 16, 19, 20, 21, 22, 24, 27) a sjednotit ořez

## Obsah
- [x] Letničky č. 2 – přidat druhou sadu z PDF, přepínač sad 1 / 2
- [ ] Patička s autorstvím materiálů (po souhlasu autorky)

## Nápady
- [x] Ikona a fullscreen pro iPhone (Přidat na plochu)
- [ ] (sem doplňovat další postřehy z používání)

## Verze pro celou školu (ČZA Mělník)
- [ ] Nejdřív souhlas autorky materiálů, pak oslovit vedení školy
- [x] Úvodní stránka s výběrem oblastí a sad, např.:
  - Letničky → sada 1, sada 2, sada 3…
  - (další oblasti podle materiálů učitelů: trvalky, dřeviny, pokojové rostliny…)
- [x] Struktura souborů po sadách: `img/letnicky-1/`, `img/letnicky-2/` … + data sad mimo index.html (např. `data/letnicky-1.json`)
- [x] Režim „mix“ – procvičit náhodně napříč vybranými sadami (příprava na test)
- [ ] Patička s autorstvím materiálů a kontaktem
- [ ] Rozvrhnout oblasti a sady
- [x] Návrh úvodní stránky: oblasti pod sebou, uvnitř dlaždice se sadami (neexistující sady čárkovaně „připravuje se“), tlačítka „Procvičit sadu“ a „Mix – před testem“, patička s autorstvím
- [x] Ukazatel pokroku u každé sady (např. 75 % = 24 z 32 správně) – ukládat jen v prohlížeči studenta (localStorage), bez registrace
  - zatím zobrazeno: nejlepší výsledek + poslední pokus (k ověření se studenty)

## Hotovo ve větvi vylepseni (k otestování)
- Fotky skládané jen z vlastních obrázků rostliny (bez proužků sousedních fotek)
- Letničky č. 2 (37 druhů) a č. 3 – náhradní (7 druhů)
- Data v `data/sets.js`, fotky v `img/letnicky-1..3/`
- Počítadlo GoatCounter se načte jen na bocrew.com (testy se nepočítají)
- Ikona na plochu, ořez kolem výřezu displeje (safe area), offline režim (service worker `sw.js`), menší fotky (~60 kB)
- Po změně fotek/dat/index.html spustit `python3 tools/build-sw.py` (aktualizuje offline cache)
