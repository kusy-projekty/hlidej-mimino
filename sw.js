// Stará adresa: tento service worker se sám odinstaluje, smaže staré cache a přesměruje na novou adresu.
const NEW='https://kusy-projekty.github.io/lubina-game/';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  const k=await caches.keys();await Promise.all(k.filter(n=>n.startsWith('mimino-')).map(n=>caches.delete(n)));
  await self.clients.claim();await self.registration.unregister();
  const cl=await self.clients.matchAll({type:'window'});cl.forEach(c=>{try{c.navigate(NEW)}catch(_){}});
})()));
