import{S as s,i as t,s as n,a as e,m as o,q as r,d as a,c,o as i,k as l,p as h,r as f,u,v as $,e as m,t as d,b as g,f as p,g as v,h as w,l as x}from"./client.f37c509b.js";import"./_common-styles.9c34c28b.js";import{M as y,R as b}from"./Modal.90b75c55.js";function E(s){let t,n,r,y,E,j,M;return j=new b({props:{scores:s[0],linkedRatingName:"monarchs"}}),{c(){t=m("h1"),n=m("img"),y=d("\n    English Consorts"),E=e(),o(j.$$.fragment),this.h()},l(s){t=g(s,"H1",{class:!0});var e=p(t);n=g(e,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),y=v(e,"\n    English Consorts"),e.forEach(a),E=c(s),i(j.$$.fragment,s),this.h()},h(){w(n,"width","64"),w(n,"height","64"),n.src!==(r="english-consort-crown.webp")&&w(n,"src","english-consort-crown.webp"),w(n,"alt","English consort crown"),w(n,"class","svelte-srnqf4"),w(t,"class","consorts svelte-srnqf4")},m(s,e){l(s,t,e),x(t,n),x(t,y),l(s,E,e),h(j,s,e),M=!0},p(s,t){const n={};1&t&&(n.scores=s[0]),j.$set(n)},i(s){M||(f(j.$$.fragment,s),M=!0)},o(s){u(j.$$.fragment,s),M=!1},d(s){s&&a(t),s&&a(E),$(j,s)}}}function j(s){let t,n,m;return n=new y({props:{$$slots:{default:[E]},$$scope:{ctx:s}}}),{c(){t=e(),o(n.$$.fragment),this.h()},l(s){r('[data-svelte="svelte-ofgtr0"]',document.head).forEach(a),t=c(s),i(n.$$.fragment,s),this.h()},h(){document.title="Rexplorer"},m(s,e){l(s,t,e),h(n,s,e),m=!0},p(s,[t]){const e={};3&t&&(e.$$scope={dirty:t,ctx:s}),n.$set(e)},i(s){m||(f(n.$$.fragment,s),m=!0)},o(s){u(n.$$.fragment,s),m=!1},d(s){s&&a(t),$(n,s)}}}var M=function(s,t,n,e){return new(n||(n=Promise))((function(o,r){function a(s){try{i(e.next(s))}catch(s){r(s)}}function c(s){try{i(e.throw(s))}catch(s){r(s)}}function i(s){var t;s.done?o(s.value):(t=s.value,t instanceof n?t:new n((function(s){s(t)}))).then(a,c)}i((e=e.apply(s,t||[])).next())}))};function R(){return M(this,void 0,void 0,(function*(){const s=yield this.fetch("data/consorts.json"),t=yield s.json();if(200===s.status)return((null==t?void 0:t.scores)||[]).forEach((s=>{s.linkedRatings=s.monarchs||[]})),t;this.error(s.status,s.statusMessage)}))}function k(s,t,n){let{scores:e=[]}=t;return s.$$set=s=>{"scores"in s&&n(0,e=s.scores)},[e]}export default class extends s{constructor(s){super(),t(this,s,k,j,n,{scores:0})}}export{R as preload};