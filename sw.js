// Offline režim: uloží web a fotky do telefonu. Verze se mění s obsahem.
const CACHE = "poznavacka-51855efa";
const ASSETS = ["./", "index.html", "data/sets.js", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "img/covers/letnicky-3.jpg", "img/letnicky-1/01.jpg", "img/letnicky-1/02.jpg", "img/letnicky-1/03.jpg", "img/letnicky-1/04.jpg", "img/letnicky-1/05.jpg", "img/letnicky-1/06.jpg", "img/letnicky-1/07.jpg", "img/letnicky-1/08.jpg", "img/letnicky-1/09.jpg", "img/letnicky-1/10.jpg", "img/letnicky-1/11.jpg", "img/letnicky-1/12.jpg", "img/letnicky-1/13.jpg", "img/letnicky-1/14.jpg", "img/letnicky-1/15.jpg", "img/letnicky-1/16.jpg", "img/letnicky-1/17.jpg", "img/letnicky-1/18.jpg", "img/letnicky-1/19.jpg", "img/letnicky-1/20.jpg", "img/letnicky-1/21.jpg", "img/letnicky-1/22.jpg", "img/letnicky-1/23.jpg", "img/letnicky-1/24.jpg", "img/letnicky-1/25.jpg", "img/letnicky-1/26.jpg", "img/letnicky-1/27.jpg", "img/letnicky-1/28.jpg", "img/letnicky-1/29.jpg", "img/letnicky-1/30.jpg", "img/letnicky-1/31.jpg", "img/letnicky-1/32.jpg", "img/letnicky-2/01.jpg", "img/letnicky-2/02.jpg", "img/letnicky-2/03.jpg", "img/letnicky-2/04.jpg", "img/letnicky-2/05.jpg", "img/letnicky-2/06.jpg", "img/letnicky-2/07.jpg", "img/letnicky-2/08.jpg", "img/letnicky-2/09.jpg", "img/letnicky-2/10.jpg", "img/letnicky-2/11.jpg", "img/letnicky-2/12.jpg", "img/letnicky-2/13.jpg", "img/letnicky-2/14.jpg", "img/letnicky-2/15.jpg", "img/letnicky-2/16.jpg", "img/letnicky-2/17.jpg", "img/letnicky-2/18.jpg", "img/letnicky-2/19.jpg", "img/letnicky-2/20.jpg", "img/letnicky-2/21.jpg", "img/letnicky-2/22.jpg", "img/letnicky-2/23.jpg", "img/letnicky-2/24.jpg", "img/letnicky-2/25.jpg", "img/letnicky-2/26.jpg", "img/letnicky-2/27.jpg", "img/letnicky-2/28.jpg", "img/letnicky-2/29.jpg", "img/letnicky-2/30.jpg", "img/letnicky-2/31.jpg", "img/letnicky-2/32.jpg", "img/letnicky-2/33.jpg", "img/letnicky-2/34.jpg", "img/letnicky-2/35.jpg", "img/letnicky-2/36.jpg", "img/letnicky-2/37.jpg", "img/letnicky-3/01.jpg", "img/letnicky-3/02.jpg", "img/letnicky-3/03.jpg", "img/letnicky-3/04.jpg", "img/letnicky-3/05.jpg", "img/letnicky-3/06.jpg", "img/letnicky-3/07.jpg"];
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
