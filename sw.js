const CACHE_NAME = 'shuls-game-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/images/favicon/icon.png',
  '/images/personajes/shuls/shuls-1.png',
  '/images/personajes/shuls/shuls-2.png',
  '/images/personajes/shuls/shuls-3.png',
  '/images/personajes/shuls/shuls-4.png',
  '/images/personajes/alcalde/vidal-1.png',
  '/images/personajes/alcalde/vidal-2.png',
  '/images/personajes/alcalde/vidal-3.png',
  '/images/personajes/alcalde/vidal-4.png',
  '/images/personajes/pierna/pierna-oro-1.png',
  '/images/personajes/pierna/pierna-oro-2.png',
  '/images/personajes/pierna/pierna-oro-3.png',
  '/images/personajes/pierna/pierna-oro-4.png',
  '/images/personajes/koba/koba-1.png',
  '/images/personajes/koba/koba-2.png',
  '/images/personajes/koba/koba-3.png',
  '/images/personajes/koba/koba-4.png',
  '/images/personajes/yuliana/yuliana-1.png',
  '/images/personajes/yuliana/yuliana-2.png',
  '/images/personajes/yuliana/yuliana-3.png',
  '/images/personajes/yuliana/yuliana-4.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devolver desde cache si existe
        if (response) {
          return response;
        }
        
        // Si no está en cache, hacer la petición a la red
        return fetch(event.request)
          .then((response) => {
            // Verificar que la respuesta sea válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta para poder usarla
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
      .catch(() => {
        // Si falla la red, devolver una página offline básica
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Mensajes del Service Worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
