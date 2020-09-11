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
  '/static/js/2.52e357d6.chunk.js',
  '/static/js/main.d64f3549.chunk.js',
  '/static/css/main.2f90883e.chunk.css',
  '/static/media/bg.80e19d92.jpg',
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
