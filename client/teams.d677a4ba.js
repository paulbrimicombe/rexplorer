import{S as s,i as t,s as e,a as n,m as a,q as r,d as o,c as i,o as c,k as l,p as f,r as h,u,v as d,e as m,t as $,b as g,f as p,g as v,h as y,l as w}from"./client.f37c509b.js";import"./_common-styles.9c34c28b.js";import{M as x,R as b}from"./Modal.90b75c55.js";function k(s){let t,e,r,x,k,R,j;return R=new b({props:{scores:s[0],linkedRatingName:"individual scores",linkSymbol:""}}),{c(){t=m("h1"),e=m("img"),x=$("\n    English Royal Teams"),k=n(),a(R.$$.fragment),this.h()},l(s){t=g(s,"H1",{class:!0});var n=p(t);e=g(n,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),x=v(n,"\n    English Royal Teams"),n.forEach(o),k=i(s),c(R.$$.fragment,s),this.h()},h(){y(e,"width","64"),y(e,"height","64"),e.src!==(r="king-and-queen.webp")&&y(e,"src","king-and-queen.webp"),y(e,"alt","King and Queen playing chess"),y(e,"class","svelte-srnqf4"),y(t,"class","teams svelte-srnqf4")},m(s,n){l(s,t,n),w(t,e),w(t,x),l(s,k,n),f(R,s,n),j=!0},p(s,t){const e={};1&t&&(e.scores=s[0]),R.$set(e)},i(s){j||(h(R.$$.fragment,s),j=!0)},o(s){u(R.$$.fragment,s),j=!1},d(s){s&&o(t),s&&o(k),d(R,s)}}}function R(s){let t,e,m;return e=new x({props:{$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){t=n(),a(e.$$.fragment),this.h()},l(s){r('[data-svelte="svelte-ofgtr0"]',document.head).forEach(o),t=i(s),c(e.$$.fragment,s),this.h()},h(){document.title="Rexplorer"},m(s,n){l(s,t,n),f(e,s,n),m=!0},p(s,[t]){const n={};3&t&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){m||(h(e.$$.fragment,s),m=!0)},o(s){u(e.$$.fragment,s),m=!1},d(s){s&&o(t),d(e,s)}}}var j=function(s,t,e,n){return new(e||(e=Promise))((function(a,r){function o(s){try{c(n.next(s))}catch(s){r(s)}}function i(s){try{c(n.throw(s))}catch(s){r(s)}}function c(s){var t;s.done?a(s.value):(t=s.value,t instanceof e?t:new e((function(s){s(t)}))).then(o,i)}c((n=n.apply(s,t||[])).next())}))};function q(){return j(this,void 0,void 0,(function*(){const s=yield this.fetch("data/teams.json"),t=yield s.json();if(200===s.status)return((null==t?void 0:t.scores)||[]).forEach((s=>{s.linkedRatings=s.linkedRatings||[]})),t;this.error(s.status,t.message)}))}function E(s,t,e){let{scores:n=[]}=t;return s.$$set=s=>{"scores"in s&&e(0,n=s.scores)},[n]}export default class extends s{constructor(s){super(),t(this,s,E,R,e,{scores:0})}}export{q as preload};