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
    })
      .catch(error => {
        console.log("Caches open failed:" + error);
    })
  ); 
});

self.addEventListener('fetch', event => {
    event.respondWith(
//        console.log('the service worker is serving the asset');
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

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('restaurant-review-') &&
                        cacheName != staticCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});