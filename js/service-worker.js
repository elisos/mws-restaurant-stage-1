self.addEventListener('fetch', event =>
    console.log(event.request);
);

var staticCacheName = 'restaurant-reviews-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        '/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/register.js',
        '/css/styles.css',
        '/imgs/*',
        '/data/restaurants.json',
        '/restaurant.html',
        '/index.html'
      ]);
    }).catch(error => {
        console.log("Caches open failed:" + error);
    });
  );
});


//self.addEventListener('fetch', event => {
//   var requestUrl = new URL(event.request.url);
//
//  if (requestUrl.origin === location.origin) {
//    if (requestUrl.pathname === '/') {
//      event.respondWith(caches.match('/skeleton'));
//      return;
//    }
//  }
//        
//  event.respondWith(
//    caches.match(event.request).then(function(response) {
//      return response || fetch(event.request);
//    })
//  );
//});

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});