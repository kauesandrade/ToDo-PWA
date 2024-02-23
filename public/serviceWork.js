var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {

  console.log("Service install");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        "/",
        "/icon-512x512.png",
        "/manifest.json",
        "../.eslintrc.cjs",
        "../index.html",
        "../package-lock.json",
        "../package.json",
        "../vite.config.js",
        "../src/App.css",
        "../src/App.jsx",
        "../src/index.css",
        "../src/main.jsx",
        "../src/components/card/index.jsx",
        "../src/components/card/style.css",
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {

  console.log("Service activate");

  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});