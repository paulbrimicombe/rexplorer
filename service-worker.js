!function(){"use strict";const t=1607026829412,r=`cache${t}`,a=`offline${t}`,o=["/client/client.c29bdbc7.js","/client/inject_styles.5607aec6.js","/client/index.33485d9c.js","/client/Banner.407d6307.js","/client/_common-styles.9c34c28b.js","/client/consorts.139a18dd.js","/client/Modal.6558e4de.js","/client/monarchs.49759e4e.js","/client/about.a43073b5.js","/client/teams.6283b747.js"].concat(["/service-worker-index.html","/apple-touch-logo.png","/confessor.jpg","/crown.svg","/english-consort-crown.jpg","/english-monarch-crown.jpg","/global.css","/king-and-queen.jpg","/logo-192.png","/logo-512.png","/manifest.json","/maskable_icon.png","/portraits/Adeliza of Louvain.jpg","/portraits/Alfred the Great.jpg","/portraits/Anne.jpg","/portraits/Athelstan.jpg","/portraits/Charles I.jpg","/portraits/Charles II.jpg","/portraits/Eadgifu of Kent.jpg","/portraits/Ealdgyth of Mercia.jpg","/portraits/Ealdgyth.jpg","/portraits/Ealhswith.jpg","/portraits/Edith of Wessex.jpg","/portraits/Edward I.jpg","/portraits/Edward II.jpg","/portraits/Edward III.jpg","/portraits/Edward IV.jpg","/portraits/Edward V.jpg","/portraits/Edward VI.jpg","/portraits/Edward VII.jpg","/portraits/Edward VIII.jpg","/portraits/Edward the Confessor.jpg","/portraits/Elizabeth I.jpg","/portraits/Elizabeth II.jpg","/portraits/Emma of Normandy.jpeg","/portraits/Emma of Normandy.jpg","/portraits/George I.jpg","/portraits/George II.jpg","/portraits/George III.jpg","/portraits/George IV.jpg","/portraits/George V.jpg","/portraits/George VI.jpg","/portraits/Harold II.jpg","/portraits/Harthacnut.jpg","/portraits/Henry I.jpg","/portraits/Henry II.jpg","/portraits/Henry III.jpg","/portraits/Henry IV.jpg","/portraits/Henry V.jpg","/portraits/Henry VI.jpg","/portraits/Henry VII.jpg","/portraits/Henry VIII.jpg","/portraits/James I.jpg","/portraits/James II.jpg","/portraits/John.jpg","/portraits/Mary I.jpg","/portraits/Matilda of Boulogne.jpg","/portraits/Matilda of Flanders.jpeg","/portraits/Matilda of Flanders.jpg","/portraits/Matilda of Scotland.jpg","/portraits/Oliver Cromwell.jpg","/portraits/Richard II.jpg","/portraits/Richard III.jpg","/portraits/Richard the Lionheart.jpg","/portraits/Sigrid the Haughty.jpg","/portraits/Stephen.jpg","/portraits/Victoria.jpg","/portraits/William III & Mary II.jpg","/portraits/William IV.jpg","/portraits/William Rufus.jpg","/portraits/William the Conqueror.jpg","/portraits/Ælfflæd.jpg","/portraits/Ælfgifu of Northampton.jpg","/portraits/Ælfgifu of Shaftesbury.jpg","/portraits/Ælfgifu of York.jpg","/portraits/Ælfgifu.jpg","/portraits/Ælfthryth.jpg","/portraits/Æthelflæd Eneda.jpg","/portraits/Æthelflæd of Damerham.jpg","/portraits/Æthelflæd, Lady of the Mercians.jpg","/uncial.woff2"]).concat(["/data/monarchs.json","/data/consorts.json","/data/teams.json"]).concat("/").map((t=>`/rexplorer${t}`)),s=new Set(o),p=self;async function e(t){const r=await caches.open(a);try{const a=await fetch(t);return(`${a.status}`.startsWith("2")||`${a.status}`.startsWith("3"))&&r.put(t,a.clone()),a}catch(a){const o=await r.match(t);if(o)return o;throw a}}p.oninstall=t=>{t.waitUntil(caches.open(r).then((async t=>{await t.addAll(o),await t.add("/rexplorer")})).then((()=>{p.skipWaiting()})))},p.onactivate=t=>{t.waitUntil(caches.keys().then((async t=>{for(const o of t)o!==r&&o!==a&&await caches.delete(o)})))},p.onfetch=t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const r=new URL(t.request.url),a=r.protocol.startsWith("http"),o=r.hostname===self.location.hostname&&r.port!==self.location.port,p=r.host===self.location.host&&s.has(r.pathname),i="only-if-cached"===t.request.cache&&!p;!a||o||i||t.respondWith((async()=>{const r=await caches.match(t.request);return r&&p?r:r?(e(t.request).catch((r=>console.log("Error updating offline cached item",t.request.url,r))),r):e(t.request)})())}}();
