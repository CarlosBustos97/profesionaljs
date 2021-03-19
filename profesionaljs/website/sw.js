const VERSION = 'v1'

self.addEventListener('install', event =>{
    event.waitUntil(precache())
})

async function precache(){
    const cache = await caches.open(VERSION)
    /*return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPLay.js',  
        '/assets/plugins/Auto_pause.js',
        '/assets/index.css',
        '/assets/Rupatrupa-Luna Roja.mp4'
    ])*/
}


self.addEventListener('fetch', event =>{
    const request = event.request
    //Solo con oeticiones get
    if(request.method != "GET"){
        return;
    }
    //Buscar en cache
    event.respondWith(cacheResponse(request))

    //Actualizar cache
    event.waitUntil(updateCache(request))
})

async function cacheResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    //return cache.put(request, await fetch(request))
    const responsed = await fetch(request)
    return cache.put(request, responsed)
}