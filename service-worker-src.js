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

workbox.precaching.precacheAndRoute([])
