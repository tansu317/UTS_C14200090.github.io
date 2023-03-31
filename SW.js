self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            'index.html',
            'styles.css',
            'app.js',
            'blog.html',
            'about.html',
            'contact.html',
            'portfolio-example01.html'
          ])
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('first-app')
        .then(function(cache) {
          return fetch(event.request)
            .then(function(res) {
              cache.put(event.request, res.clone());
              return res;
            });
        })
    );
  });
  
  
  
  
