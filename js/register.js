/* register the service worker*/
if (navigator.serviceWorker) {  navigator.serviceWorker.register('/js/service-worker.js')
    .then(reg => {console.log("Service worker registration successful:"+reg.scope);
    }).catch(error => {console.log("Registration failed:"+error);
    });
} 