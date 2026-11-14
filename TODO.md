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
- Panel „O aplikaci“ (dole na stránce) s verzí – při každém vydání zvýšit `VERSION` a `VERSION_DATE` v index.html a spustit `python3 tools/build-sw.py`
  - 1.0 první verze (Letničky č. 1) · 1.1 výběr sad, Letničky č. 2 a 3 · 1.2 iPhone (ikona, offline), panel O aplikaci

## Verze 1.3 (ve větvi vylepseni)
- [x] Pořadí režimů: Bez psaní → Jen česky → Jen latinsky → Latinsky + česky; nový uživatel začíná „Bez psaní“
- [x] ~~Počet návštěv v „O aplikaci“~~ – zrušeno, statistiky se sledují jen interně v GoatCounteru

## Verze 1.4 (ve větvi vylepseni)
- [x] Chytré opakování: rostliny, které student neumí, se vracejí častěji (jednoduchý „Leitner“ systém), u sady „Umíš X z Y“
- [x] Režim „Test“: 20 náhodných karet bez nápověd a bez „Uznat jako správně“, na konci známka jako ve škole
- [x] Výběr ze 4 možností (pro začátečníky) – jednodušší než psaní
- [x] Zvětšení fotky klepnutím (detail květu/listu)
- [x] Nápověda „první písmeno“ před odhalením odpovědi
- [x] Seznam rostlin jako atlas (prohlížení s fotkami bez zkoušení)
- [x] Sdílení výsledku (např. „Sada 1: 30/32“) – zpráva do třídního chatu
- [x] Přístupnost: větší písmo, kontrast, ovládání klávesnicí
  - poznámky k 1.4: „umíš“ = aspoň 2× po sobě správně (s nápovědou se nepočítá); test = max. 20 karet, režim Bez psaní se v testu mění na Latinsky + česky, „skoro“ se uznává
  - známky: ≥90 % = 1, ≥75 % = 2, ≥50 % = 3, ≥30 % = 4, jinak 5 (případně upravit podle školy)

## Verze 1.5 (ve větvi vylepseni)
- [x] Vysvětlení vybraného režimu srozumitelně pro studenty (mění se podle zvoleného režimu)
- [x] Tlačítka s krátkým popisem; Atlas rostlin jako první, počty podle vybraných sad

## Verze 1.6 (ve větvi vylepseni)
- [x] Úvod ve 3 krocích (1 Vyber sadu · 2 Jak se chceš učit · 3 Start), kratší texty pro studenty
- [x] Po klepnutí na sadu se hned ukáže, co je vybráno a kolik je rostlin
