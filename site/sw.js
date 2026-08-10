// Snapple Facts — service worker
// CACHE_VERSION is replaced with the deploying commit SHA by
// .github/workflows/pages.yml so every deploy invalidates old caches.
const CACHE_VERSION = '__CACHE_VERSION__';
const CACHE_NAME = `snapple-facts-${CACHE_VERSION}`;
const SCOPE = '/snapple-facts/';

const APP_SHELL = [
  `${SCOPE}`,
  `${SCOPE}index.html`,
  `${SCOPE}css/styles.css`,
  `${SCOPE}js/app.js`,
  `${SCOPE}data/facts.json`,
  `${SCOPE}manifest.webmanifest`,
  `${SCOPE}assets/snapple-logo.png`,
  `${SCOPE}assets/icons/icon-192.png`,
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(`${SCOPE}index.html`)));
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
