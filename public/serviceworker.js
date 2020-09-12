const CACHE_NAME = 'weather_app';

const localhosturlsToCache = [
  '/',
  'index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/1.chunk.js',
  '/static/js/bundle.js',
  '/static/media/bg.80e19d92.jpg',
  'images/logo.png',
];

const netlifyurlsToCache = [
  '/',
  'index.html',
  '/static/media/bg.80e19d92.jpg',
  "/static/css/main.ce4d5af7.chunk.css",
  "/static/js/2.f546e603.chunk.js ",
  "/static/js/main.16464a14.chunk.js ",
  'images/logo.png',
];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  const { origin } = event.target.location;
  if (origin.includes('localhost')) {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => cache.addAll(localhosturlsToCache)),
    );
  } else {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(netlifyurlsToCache)),
    );
  }
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
      }),
    );
  }
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});
