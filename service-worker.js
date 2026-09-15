// Service worker minimal — cukup untuk memenuhi syarat PWA installable.
// Tidak melakukan caching agresif, jadi app tetap selalu ambil data terbaru
// dari Apps Script (penting untuk data stok gudang yang harus real-time).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
