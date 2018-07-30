var staticCacheName = 'restaurant-reviews-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        './',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './js/register.js',
        './css/styles.css',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './img/1-med-min.jpg',
        './img/2-med-min.jpg',
        './img/3-med-min.jpg',
        './img/4-med-min.jpg',
        './img/5-med-min.jpg',
        './img/6-med-min.jpg',
        './img/7-med-min.jpg',
        './img/8-med-min.jpg',
        './img/9-med-min.jpg',
        './img/10-med-min.jpg',
        './img/nav-small.jpg',
        './data/restaurants.json',
        './restaurant.html',
        './index.html'
      ]);
    }).catch(error => {
        console.log("Caches open failed:" + error);
    })
  ); 
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if(response) {
                return response;
            }
            return fetch(event.request);
        }).catch(error => {
            console.log("Cache retrieval failed:" + error);
        })
    );
})

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

//self.addEventListener('message', function(event) {
//  if (event.data.action === 'skipWaiting') {
//    self.skipWaiting();
//  }
//});