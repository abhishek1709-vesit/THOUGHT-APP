self.addEventListener("install", (event) => {
    event.waitUntill(
        caches.open('pwa-cache').then((cache) => {
            return caches.addAll([
                "/",
                "/index.html",
            ])
        })
    )
})

self.addEventListener("fetch", (event) => {

})