var cacheToDo = 'toDoList-v1';

const assets = [
  "/",
  "/icon-512x512.png",
  "/icon-192x192.png",
  "/manifest.webmanifest",
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
  "../src/components/card/style.css"
]


self.addEventListener('install', function (event) {

  event.waitUntil(

    caches.open(cacheToDo).then(function (cache) {

      return cache.addAll(assets);

    })

  )

});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cacheToDo) !== 0;
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