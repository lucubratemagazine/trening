// ---------------------------------------------------------
//  SERVICE WORKER FOR TRENINGSAPP
// ---------------------------------------------------------

const CACHE_NAME = "treningsapp-v1";

// Filer som skal caches
const FILES_TO_CACHE = [
  "./",
  "./treningsapp.html",
  "./historikk.html",
  "./style.css",
  "./app.js",
  "./data_weeks.js",
  "./data_exercises.js",
  "./messages.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// ---------------------------------------------------------
// INSTALL — cache alle filer
// ---------------------------------------------------------
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ---------------------------------------------------------
// ACTIVATE — slett gammel cache
// ---------------------------------------------------------
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ---------------------------------------------------------
// FETCH — bruk cache først, deretter nett
// ---------------------------------------------------------
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Returner cache hvis tilgjengelig
      if (response) return response;

      // Hvis ikke, hent fra nett
      return fetch(event.request).catch(() =>
        // Offline fallback for HTML
        caches.match("./treningsapp.html")
      );
    })
  );
});
