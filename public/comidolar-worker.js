const CACHE_NAME = "offline-cache-v1";
const IMAGES_CACHE = "images-cache-v1";
const CSS_CACHE = "css-cache-v1";

const OFFLINE_PAGES = {
  "/": "/offline/index.html",
  "/calculadora": "/offline/calculadora.html",
  "/whatsapp": "/offline/whatsapp.html",
  "/blog": "/offline/blog.html",
  "/donaciones": "/offline/donaciones.html",
  "/privacidad": "/offline/privacidad.html",
  "/terminos": "/offline/terminos.html",
};

const CACHED_IMAGES = [
  "/assets/img/wide-c.webp",
  "/assets/img/genadev-v-nobg-1.webp",
  "/assets/img/mundiallogo.webp",
  "/assets/img/favicon.webp",
  "/assets/img/bp.webp",
  "/assets/img/bn.webp",
  "/assets/img/bc.webp",
  "/assets/img/bs.webp",
  "/assets/img/mp.webp",
  "/assets/img/nx.webp",
];

const CACHED_CSS = ["/offline/offline.css"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(Object.values(OFFLINE_PAGES));
      }),
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.addAll(CACHED_IMAGES);
      }),
      caches.open(CSS_CACHE).then((cache) => {
        return cache.addAll(CACHED_CSS);
      }),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (event.request.destination === "image") {
    event.respondWith(
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  if (event.request.destination === "style") {
    event.respondWith(
      caches.open(CSS_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(OFFLINE_PAGES[url.pathname] || "/offline/index.html");
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (
            cache !== CACHE_NAME &&
            cache !== IMAGES_CACHE &&
            cache !== CSS_CACHE
          ) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
