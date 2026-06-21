// Simple runtime caching Service Worker
const CACHE_NAME = 'site-cache-v4';
const EXCLUDE_FROM_CACHE = [/\/admin\//, /\.map$/];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Skip non-GET and excluded requests
  if (req.method !== 'GET' || EXCLUDE_FROM_CACHE.some(r => r.test(req.url))) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => {
        try {
          const url = new URL(req.url);
          // Cache same-origin and CDN resources
          const isSameOrigin = url.origin === location.origin;
          const isCDN = /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.gstatic\.com|fonts\.googleapis\.com/.test(url.host);
          if ((isSameOrigin || isCDN) && networkRes && networkRes.status === 200 && networkRes.type !== 'opaque') {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, clone)).catch(()=>{});
          }
        } catch (e) {}
        return networkRes;
      }).catch(() => cached || Promise.reject('offline'));

      return cached || fetchPromise;
    })
  );
});
