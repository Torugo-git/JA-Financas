const CACHE_NAME = 'ja-financas-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // O Firebase já lida perfeitamente com os dados offline.
    // Este worker básico existe apenas para satisfazer os requisitos de instalação do PWA no celular.
});