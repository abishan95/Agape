const CACHE_NAME = 'agape-purge-v999';

// Force installation and skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Purge EVERY old cache key stored on the phone
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Always fetch fresh network assets first
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});