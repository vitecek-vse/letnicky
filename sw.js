// Offline režim: uloží web a fotky do telefonu. Verze se mění s obsahem.
const CACHE = "poznavacka-18a862ea";
const ASSETS = ["./", "index.html", "data/sets.js", "manifest.webmanifest", "og.jpg", "favicon.ico", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/favicon-48.png", "icons/icon-192.png", "icons/icon-512.png", "img/covers/letnicky-3.webp", "img/covers/pexeso-tagetes.webp", "img/letnicky-1/01.webp", "img/letnicky-1/02.webp", "img/letnicky-1/03.webp", "img/letnicky-1/04.webp", "img/letnicky-1/05.webp", "img/letnicky-1/06.webp", "img/letnicky-1/07.webp", "img/letnicky-1/08.webp", "img/letnicky-1/09.webp", "img/letnicky-1/10.webp", "img/letnicky-1/11.webp", "img/letnicky-1/12.webp", "img/letnicky-1/13.webp", "img/letnicky-1/14.webp", "img/letnicky-1/15.webp", "img/letnicky-1/16.webp", "img/letnicky-1/17.webp", "img/letnicky-1/18.webp", "img/letnicky-1/19.webp", "img/letnicky-1/20.webp", "img/letnicky-1/21.webp", "img/letnicky-1/22.webp", "img/letnicky-1/23.webp", "img/letnicky-1/24.webp", "img/letnicky-1/25.webp", "img/letnicky-1/26.webp", "img/letnicky-1/27.webp", "img/letnicky-1/28.webp", "img/letnicky-1/29.webp", "img/letnicky-1/30.webp", "img/letnicky-1/31.webp", "img/letnicky-1/32.webp", "img/letnicky-2/01.webp", "img/letnicky-2/02.webp", "img/letnicky-2/03.webp", "img/letnicky-2/04.webp", "img/letnicky-2/05.webp", "img/letnicky-2/06.webp", "img/letnicky-2/07.webp", "img/letnicky-2/08.webp", "img/letnicky-2/09.webp", "img/letnicky-2/10.webp", "img/letnicky-2/11.webp", "img/letnicky-2/12.webp", "img/letnicky-2/13.webp", "img/letnicky-2/14.webp", "img/letnicky-2/15.webp", "img/letnicky-2/16.webp", "img/letnicky-2/17.webp", "img/letnicky-2/18.webp", "img/letnicky-2/19.webp", "img/letnicky-2/20.webp", "img/letnicky-2/21.webp", "img/letnicky-2/22.webp", "img/letnicky-2/23.webp", "img/letnicky-2/24.webp", "img/letnicky-2/25.webp", "img/letnicky-2/26.webp", "img/letnicky-2/27.webp", "img/letnicky-2/28.webp", "img/letnicky-2/29.webp", "img/letnicky-2/30.webp", "img/letnicky-2/31.webp", "img/letnicky-2/32.webp", "img/letnicky-2/33.webp", "img/letnicky-2/34.webp", "img/letnicky-2/35.webp", "img/letnicky-2/36.webp", "img/letnicky-2/37.webp", "img/letnicky-3/01.webp", "img/letnicky-3/02.webp", "img/letnicky-3/03.webp", "img/letnicky-3/04.webp", "img/letnicky-3/05.webp", "img/letnicky-3/06.webp", "img/letnicky-3/07.webp"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  if (url.pathname.match(/\.(jpg|png)$/)) {
    // fotky: nejdřív z telefonu
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  } else {
    // stránka a data: nejdřív z internetu (kvůli aktualizacím), offline z telefonu
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request, {ignoreSearch: true})));
  }
});
