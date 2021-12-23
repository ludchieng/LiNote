const STATIC_CACHE = 'site-static-v1';
const DYN_CACHE = 'site-dynamic-v1';
const assets = [
  '/',
  '/global.css',
  '/build/bundle.css',
  '/build/bundle.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE && key !== DYN_CACHE)
        .map(key => caches.delete(key))
      );
    })
  );
});