var cacheName = 'walkPWA-step-6-2';
var filesToCache = [
  '/intro',
  '/assets/styles/leaflet-1.3.1.css',
  '/assets/styles/mapbox-gl-js-0.44.1.css',
  '/inline.bundle.js',
  '/polyfills.bundle.js',
  '/styles.bundle.js',
  '/vendor.bundle.js',
  '/main.bundle.js',
  '/assets/images/ic_keyboard_backspace_white_24px.svg',
  '/assets/images/logo.png',
  '/assets/images/triangle-arrow-right-list.svg',
  '/assets/images/challenge.svg',
  '/assets/images/hex-2.svg',
  '/assets/images/hex-2-inactive.svg',
  '/assets/images/hex-3.svg',
  '/assets/images/hex-3-inactive.svg',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
});
