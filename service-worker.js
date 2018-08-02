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
        './img/map-screenshot.jpg',
        './data/restaurants.json',
        './restaurant.html',
        './index.html',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        'https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.js',
        'restaurant.html?id=1',
        'restaurant.html?id=2',
        'restaurant.html?id=3',
        'restaurant.html?id=4',
        'restaurant.html?id=5',
        'restaurant.html?id=6',
        'restaurant.html?id=7',
        'restaurant.html?id=8',
        'restaurant.html?id=9',
        'restaurant.html?id=10'
      ]);
    })
      .catch(error => {
        console.log("Caches open failed:" + error);
    })
  ); 
});

self.addEventListener('fetch', event => {
    event.respondWith(
        console.log('the service worker is serving');
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
