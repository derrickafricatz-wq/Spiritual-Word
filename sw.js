const CACHE_NAME = "spiritual-eyes-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./learn.pdf",
  "./https://i.imgur.com/Q2BEHtw.jpeg",
  "./https://i.imgur.com/Q2BEHtw.jpeg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
