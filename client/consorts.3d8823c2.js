import{S as s,i as t,s as n,e,a as o,u as a,q as r,c,d as i,b as l,v as h,h as f,k as m,l as u,w as d,x as $,y as g,z as p,t as v,f as x,g as w,o as y,p as E,m as j}from"./client.57a014b5.js";import{f as R}from"./index.f76a7dd2.js";import"./_common-styles.9c34c28b.js";import{M,R as b}from"./Modal.0a3e5191.js";function k(s){let t,n,r,M,k,C,D,I,q,z;return D=new b({props:{scores:s[0],linkedRatingName:"monarchs"}}),{c(){t=e("div"),n=e("h1"),r=e("img"),k=v("\n      English Consorts"),C=o(),a(D.$$.fragment),this.h()},l(s){t=c(s,"DIV",{});var e=x(t);n=c(e,"H1",{class:!0});var o=x(n);r=c(o,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),k=w(o,"\n      English Consorts"),o.forEach(i),C=l(e),h(D.$$.fragment,e),e.forEach(i),this.h()},h(){f(r,"width","64"),f(r,"height","64"),r.src!==(M="english-consort-crown.jpg")&&f(r,"src","english-consort-crown.jpg"),f(r,"alt","English consort crown"),f(r,"class","svelte-1o8e9um"),f(n,"class","consorts svelte-1o8e9um")},m(s,e){u(s,t,e),m(t,n),m(n,r),m(n,k),m(t,C),d(D,t,null),z=!0},p(s,t){const n={};1&t&&(n.scores=s[0]),D.$set(n)},i(s){z||($(D.$$.fragment,s),y((()=>{q&&q.end(1),I||(I=E(t,R,{delay:300,duration:200})),I.start()})),z=!0)},o(s){g(D.$$.fragment,s),I&&I.invalidate(),q=j(t,R,{duration:200}),z=!1},d(s){s&&i(t),p(D),s&&q&&q.end()}}}function C(s){let t,n,v,x;return v=new M({props:{$$slots:{default:[k]},$$scope:{ctx:s}}}),{c(){t=e("meta"),n=o(),a(v.$$.fragment),this.h()},l(s){const e=r('[data-svelte="svelte-mm2tia"]',document.head);t=c(e,"META",{name:!0,content:!0}),e.forEach(i),n=l(s),h(v.$$.fragment,s),this.h()},h(){document.title="Rexplorer monarchs",f(t,"name","Description"),f(t,"content","Rexplorer for exploring Rex Factor scores for English Consorts")},m(s,e){m(document.head,t),u(s,n,e),d(v,s,e),x=!0},p(s,[t]){const n={};3&t&&(n.$$scope={dirty:t,ctx:s}),v.$set(n)},i(s){x||($(v.$$.fragment,s),x=!0)},o(s){g(v.$$.fragment,s),x=!1},d(s){i(t),s&&i(n),p(v,s)}}}var D=function(s,t,n,e){return new(n||(n=Promise))((function(o,a){function r(s){try{i(e.next(s))}catch(s){a(s)}}function c(s){try{i(e.throw(s))}catch(s){a(s)}}function i(s){var t;s.done?o(s.value):(t=s.value,t instanceof n?t:new n((function(s){s(t)}))).then(r,c)}i((e=e.apply(s,t||[])).next())}))};function I(){return D(this,void 0,void 0,(function*(){const s=yield this.fetch("data/consorts.json"),t=yield s.json();if(200===s.status)return((null==t?void 0:t.scores)||[]).forEach((s=>{s.linkedRatings=s.monarchs||[]})),t;this.error(s.status,s.statusMessage)}))}function q(s,t,n){let{scores:e=[]}=t;return s.$$set=s=>{"scores"in s&&n(0,e=s.scores)},[e]}export default class extends s{constructor(s){super(),t(this,s,q,C,n,{scores:0})}}export{I as preload};