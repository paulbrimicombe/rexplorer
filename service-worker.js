!function(){"use strict";const t=1607189146002,r=`cache${t}`,a=`offline${t}`,o=["/client/client.23a57bc1.js","/client/inject_styles.5607aec6.js","/client/index.d91b7114.js","/client/Banner.e270d466.js","/client/_common-styles.9c34c28b.js","/client/consorts.987324c6.js","/client/Modal.7d373481.js","/client/monarchs.dc407285.js","/client/about.a8c12565.js","/client/teams.8b171b58.js"].concat(["/service-worker-index.html","/apple-touch-logo.png","/confessor.jpg","/crown.svg","/english-consort-crown.jpg","/english-monarch-crown.jpg","/global.css","/king-and-queen.jpg","/logo-192.png","/logo-512.png","/manifest.json","/maskable_icon.png","/portraits/Adeliza of Louvain.jpg","/portraits/Aethelred the Unready.jpg","/portraits/Alfred the Great.jpg","/portraits/Anne.jpg","/portraits/Athelstan.jpg","/portraits/Charles I.jpg","/portraits/Charles II.jpg","/portraits/Cnut.jpg","/portraits/Eadgifu of Kent.jpg","/portraits/Eadred.jpg","/portraits/Eadwig.jpg","/portraits/Ealdgyth of Mercia.jpg","/portraits/Ealdgyth.jpg","/portraits/Ealhswith.jpg","/portraits/Edgar the Peaceable.jpg","/portraits/Edith of Wessex.jpg","/portraits/Edmund I.jpg","/portraits/Edmund Ironside.jpg","/portraits/Edward I.jpg","/portraits/Edward II.jpg","/portraits/Edward III.jpg","/portraits/Edward IV.jpg","/portraits/Edward V.jpg","/portraits/Edward VI.jpg","/portraits/Edward VII.jpg","/portraits/Edward VIII.jpg","/portraits/Edward the Confessor.jpg","/portraits/Edward the Elder.jpg","/portraits/Edward the Martyr.jpg","/portraits/Elizabeth I.jpg","/portraits/Elizabeth II.jpg","/portraits/Emma of Normandy.jpeg","/portraits/Emma of Normandy.jpg","/portraits/George I.jpg","/portraits/George II.jpg","/portraits/George III.jpg","/portraits/George IV.jpg","/portraits/George V.jpg","/portraits/George VI.jpg","/portraits/Harold I.jpg","/portraits/Harold II.jpg","/portraits/Harthacnut.jpg","/portraits/Henry I.jpg","/portraits/Henry II.jpg","/portraits/Henry III.jpg","/portraits/Henry IV.jpg","/portraits/Henry V.jpg","/portraits/Henry VI.jpg","/portraits/Henry VII.jpg","/portraits/Henry VIII.jpg","/portraits/James I.jpg","/portraits/James II.jpg","/portraits/John.jpg","/portraits/Mary I.jpg","/portraits/Matilda of Boulogne.jpg","/portraits/Matilda of Flanders.jpeg","/portraits/Matilda of Flanders.jpg","/portraits/Matilda of Scotland.jpg","/portraits/Oliver Cromwell.jpg","/portraits/Richard II.jpg","/portraits/Richard III.jpg","/portraits/Richard the Lionheart.jpg","/portraits/Sigrid the Haughty.jpg","/portraits/Stephen.jpg","/portraits/Sweyn Forkbeard.jpg","/portraits/Victoria.jpg","/portraits/William III & Mary II.jpg","/portraits/William IV.jpg","/portraits/William Rufus.jpg","/portraits/William the Conqueror.jpg","/portraits/Ælfflæd.jpg","/portraits/Ælfgifu of Northampton.jpg","/portraits/Ælfgifu of Shaftesbury.jpg","/portraits/Ælfgifu of York.jpg","/portraits/Ælfgifu.jpg","/portraits/Ælfthryth.jpg","/portraits/Æthelflæd Eneda.jpg","/portraits/Æthelflæd of Damerham.jpg","/portraits/Æthelflæd, Lady of the Mercians.jpg","/uncial.woff2"]).concat(["/data/monarchs.json","/data/consorts.json","/data/teams.json"]).concat("/").map((t=>`/rexplorer${t}`)),p=new Set(o),s=self;async function e(t){const r=await caches.open(a);try{const a=await fetch(t);return`${a.status}`.startsWith("2")&&r.put(t,a.clone()),a}catch(a){const o=await r.match(t);if(o)return o;throw a}}s.oninstall=t=>{t.waitUntil(caches.open(r).then((async t=>{await t.addAll(o),await t.add("/rexplorer")})).then((()=>{s.skipWaiting()})))},s.onactivate=t=>{t.waitUntil(caches.keys().then((async t=>{for(const o of t)o!==r&&o!==a&&await caches.delete(o)})))},s.onfetch=t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const r=new URL(t.request.url),a=r.protocol.startsWith("http"),o=r.hostname===self.location.hostname&&r.port!==self.location.port,s=r.host===self.location.host&&p.has(r.pathname),i="only-if-cached"===t.request.cache&&!s;!a||o||i||t.respondWith((async()=>{const r=await caches.match(t.request);return r&&s?r:r?r.url!==t.request.url?fetch(t.request):(e(t.request).catch((r=>console.log("Error updating offline cached item",t.request.url,r))),r):e(t.request)})())}}();
