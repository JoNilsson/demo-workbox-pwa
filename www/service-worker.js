importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

workbox.skipWaiting()
workbox.clientsClaim()

// cache name

workbox.core.setCacheNameDetails({
  prefix: 'cache',
  precache: 'precache',
  runtime: 'runtime'
})

// runtime cache
// cache the styles

workbox.routing.registerRoute(
  new RegExp('\.css$'),
  workbox.strategies.cacheFirst({
    cacheName: 'cache-Style',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days max cache time
        maxEntries: 20, // 20 max cache request
        purgeOnQuotaError: true
      })
    ]
  })
)

// cache the images

workbox.routing.registerRoute(
  new RegExp('\.(jpg|jpeg|png|svg|webp)$'),
  workbox.strategies.cacheFirst({
    cacheName: 'cache-Images',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true
      })
    ]
  })
)

// cash the json objects

workbox.routing.registerRoute(
  new RegExp('https://newsapi.org/v2/top-headlines'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache-Json',
    cacheExpiration: {
      maxAgeSeconds: 60 * 30 // cache JSON for 30 min
    }
  })
)

workbox.precaching.precacheAndRoute([
  {
    "url": "components/loader.css",
    "revision": "93899d9053b17d836ecad563970fcd79"
  },
  {
    "url": "components/loader.js",
    "revision": "91dc91ff38b6c8a3fa5bc604f4ef1448"
  },
  {
    "url": "components/monaca-cordova-loader/cordova-loader.js",
    "revision": "f95edd85998fa97a31cd7c36b8c9e911"
  },
  {
    "url": "components/monaca-core-utils/monaca-core-utils.js",
    "revision": "5135d67955a47fd60ef18617f0de38fd"
  },
  {
    "url": "css/style.css",
    "revision": "8e45f17820a540e2577d4178e1ea0eb3"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "ddea8e8f08c72df957dd316cc0047e7a"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "6692393dee77f144d2f067b11e4b193b"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "158800fcdace48cb7eae1e30647bdd59"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "50a856f78fda258c16fe542d64ee31bd"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e509bc6b48254db144d89cc7c416c2b7"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0d3abb5d4af1e2a971174512d875e1c9"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "6e699bf136d07d035bfc9f955cec8867"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "dd774fbe8bfc87d1c863354d038cc3cc"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "5db422a0bcdb66053f26f76f78ab430e"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a437d699aa3c6fb6ffcf5f22c7b99272"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "c105d7ff72c50db2a7316aca6a6e6564"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "b50a5ec5a4bbecf6b646556fedd8eba1"
  },
  {
    "url": "index.html",
    "revision": "693f6b69bc295f25282549c2596775a9"
  },
  {
    "url": "script/main.js",
    "revision": "29ebec35e3c6d572a2beb453a7bed775"
  }
])
