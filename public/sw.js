// Service Worker for Performance Optimization
// This service worker caches critical resources for instant loading

const CACHE_NAME = 'diy-frontend-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/images/performance-banner.webp',
  '/images/take-action.webp',
  '/images/we-are-back.webp',
  '/images/robotic-arms-along-assembly-line-in-modern-factory.webp',
  '/images/logo.png',
  '/font/Lato/Lato-Regular.ttf',
  '/font/Lato/Lato-Bold.ttf'
];

// Static assets to cache
const STATIC_ASSETS = [
  '/images/',
  '/font/',
  '/video/',
  '/static/',
  '/css/',
  '/js/'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('Service Worker: Critical resources cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache critical resources', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(url.pathname)) {
    // Static assets - cache first, then network
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(url.pathname)) {
    // API requests - network first, then cache
    event.respondWith(handleAPIRequest(request));
  } else {
    // HTML pages - cache first, then network
    event.respondWith(handleHTMLRequest(request));
  }
});

// Check if request is for static asset
function isStaticAsset(pathname) {
  return STATIC_ASSETS.some(asset => pathname.startsWith(asset)) ||
         pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|ttf|woff|woff2)$/);
}

// Check if request is for API
function isAPIRequest(pathname) {
  return pathname.startsWith('/api/') || 
         pathname.includes('googleapis.com') ||
         pathname.includes('analytics');
}

// Handle static asset requests
async function handleStaticAsset(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    // Cache the response for future use
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Failed to handle static asset', error);
    return new Response('Offline', { status: 503 });
  }
}

// Handle API requests
async function handleAPIRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // If network fails, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    console.error('Service Worker: API request failed', error);
    return new Response('Offline', { status: 503 });
  }
}

// Handle HTML requests
async function handleHTMLRequest(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    // Cache HTML responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Failed to handle HTML request', error);
    return new Response('Offline', { status: 503 });
  }
}

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Perform background tasks
    console.log('Service Worker: Performing background sync');
    
    // Example: sync offline data
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Get offline data (placeholder)
async function getOfflineData() {
  // Implementation for getting offline data
  return [];
}

// Sync offline data (placeholder)
async function syncOfflineData(data) {
  // Implementation for syncing offline data
  console.log('Service Worker: Syncing offline data', data);
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/images/logo.png',
    badge: '/images/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/images/logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('DIY Frontend', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => 
            caches.open(cacheName).then(cache => cache.keys())
          )
        );
      }).then(cacheArrays => {
        const totalSize = cacheArrays.reduce((total, cacheArray) => 
          total + cacheArray.length, 0
        );
        event.ports[0].postMessage({ cacheSize: totalSize });
      })
    );
  }
});

console.log('Service Worker: Loaded successfully'); 