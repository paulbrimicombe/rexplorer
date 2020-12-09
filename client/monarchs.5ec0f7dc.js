import{S as t,i as e,s,e as n,a,c as o,q as r,b as i,d as c,f as l,h as d,j as m,k as h,l as f,m as g,t as u,o as $,r as p,C as F,g as R,u as w,v as k,p as v}from"./client.d0052abd.js";import{f as x}from"./Banner.f88cced0.js";import"./_common-styles.9c34c28b.js";import{M as y,g as L,R as j,s as E}from"./Modal.f5d433a5.js";function M(t){let e,s,a,r,l;return s=new j({props:{ratingName:"English monarchs",linkedRatingName:"consorts",ratingImageSrc:"monarch.jpg",ratingImageAlt:"English monarch",scores:t[3],sortField:t[0],showLinkedRatings:t[1],nameFilter:t[2]}}),s.$on("change",t[4]),{c(){e=n("div"),o(s.$$.fragment)},l(t){e=i(t,"DIV",{});var n=R(e);d(s.$$.fragment,n),n.forEach(c)},m(t,n){f(t,e,n),g(s,e,null),l=!0},p(t,e){const n={};8&e&&(n.scores=t[3]),1&e&&(n.sortField=t[0]),2&e&&(n.showLinkedRatings=t[1]),4&e&&(n.nameFilter=t[2]),s.$set(n)},i(t){l||(u(s.$$.fragment,t),w((()=>{r&&r.end(1),a||(a=k(e,x,{delay:300,duration:200})),a.start()})),l=!0)},o(t){$(s.$$.fragment,t),a&&a.invalidate(),r=v(e,x,{duration:200}),l=!1},d(t){t&&c(e),p(s),t&&r&&r.end()}}}function b(t){let e,s,F,R;return F=new y({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),{c(){e=n("meta"),s=a(),o(F.$$.fragment),this.h()},l(t){const n=r('[data-svelte="svelte-yx9k2o"]',document.head);e=i(n,"META",{name:!0,content:!0}),n.forEach(c),s=l(t),d(F.$$.fragment,t),this.h()},h(){document.title="Rexplorer monarchs",m(e,"name","Description"),m(e,"content","Rexplorer for exploring Rex Factor scores for English Monarchs")},m(t,n){h(document.head,e),f(t,s,n),g(F,t,n),R=!0},p(t,[e]){const s={};79&e&&(s.$$scope={dirty:e,ctx:t}),F.$set(s)},i(t){R||(u(F.$$.fragment,t),R=!0)},o(t){$(F.$$.fragment,t),R=!1},d(t){c(e),t&&c(s),p(F,t)}}}var I=function(t,e,s,n){return new(s||(s=Promise))((function(a,o){function r(t){try{c(n.next(t))}catch(t){o(t)}}function i(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,i)}c((n=n.apply(t,e||[])).next())}))};function A(){return I(this,void 0,void 0,(function*(){const t=yield this.fetch("data/monarchs.json"),e=yield t.json();if(200===t.status)return((null==e?void 0:e.scores)||[]).forEach((t=>{t.linkedRatings=t.consorts||[]})),e;this.error(t.status,e.message)}))}function D(t,e,s){const n=L();let{scores:a=[]}=e,{sortField:o=n.sortField}=e,{showLinkedRatings:r=n.showLinkedRatings}=e,{nameFilter:i=n.nameFilter}=e;F((()=>E({sortField:o,showLinkedRatings:r,nameFilter:i})));return t.$$set=t=>{"scores"in t&&s(3,a=t.scores),"sortField"in t&&s(0,o=t.sortField),"showLinkedRatings"in t&&s(1,r=t.showLinkedRatings),"nameFilter"in t&&s(2,i=t.nameFilter)},[o,r,i,a,t=>{s(0,o=t.detail.sortField),s(1,r=t.detail.showLinkedRatings),s(2,i=t.detail.nameFilter)}]}export default class extends t{constructor(t){super(),e(this,t,D,b,s,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2})}}export{A as preload};
