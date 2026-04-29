const CACHE_NAME = 'fasoconcours-v2';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/tester.html',
  '/css/style.css',
  '/js/app.js',
  '/js/quiz-data.js',
  '/js/quiz-data-monde.js',
  '/js/quiz-data-divers.js',
  '/assets/logofasoconcours.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
        return Promise.resolve();
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // mise en cache des réponses valides
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // fallback: si la requête est une navigation, renvoyer index.html
        if (event.request.mode === 'navigate') return caches.match('/index.html');
      });
    })
  );
});
