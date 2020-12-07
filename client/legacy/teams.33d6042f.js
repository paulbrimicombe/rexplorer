import{G as n,_ as t,a as e,b as r,c as s,i as a,d as i,S as o,s as c,e as u,f,g as l,q as d,h as m,j as h,k as g,m as p,n as v,o as $,p as R,r as w,E as y,u as F,v as k,x,H as b,l as j,y as L,z as E,w as q}from"./client.6b59d216.js";import{f as D}from"./Banner.9532effb.js";import"./_common-styles.9c34c28b.js";import{g as M,M as S,R as I,s as A}from"./Modal.b8d58022.js";function N(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,a=e(n);if(t){var i=e(this).constructor;s=Reflect.construct(a,arguments,i)}else s=a.apply(this,arguments);return r(this,s)}}function O(n){var t,e,r,s,a;return(e=new I({props:{ratingName:"English royal teams",linkedRatingName:"individual scores",ratingImageSrc:"king-and-queen.jpg",ratingImageAlt:"King and queen playing chess",linkSymbol:"",scores:n[3],sortField:n[0],showLinkedRatings:n[1],nameFilter:n[2]}})).$on("change",n[4]),{c:function(){t=u("div"),l(e.$$.fragment)},l:function(n){t=m(n,"DIV",{});var r=j(t);p(e.$$.fragment,r),r.forEach(h)},m:function(n,r){R(n,t,r),w(e,t,null),a=!0},p:function(n,t){var r={};8&t&&(r.scores=n[3]),1&t&&(r.sortField=n[0]),2&t&&(r.showLinkedRatings=n[1]),4&t&&(r.nameFilter=n[2]),e.$set(r)},i:function(n){a||(F(e.$$.fragment,n),L((function(){s&&s.end(1),r||(r=E(t,D,{delay:300,duration:200})),r.start()})),a=!0)},o:function(n){k(e.$$.fragment,n),r&&r.invalidate(),s=q(t,D,{duration:200}),a=!1},d:function(n){n&&h(t),x(e),n&&s&&s.end()}}}function P(n){var t,e,r,s;return r=new S({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(n){var s=d('[data-svelte="svelte-wjiebm"]',document.head);t=m(s,"META",{name:!0,content:!0}),s.forEach(h),e=g(n),p(r.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",v(t,"name","Description"),v(t,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(n,a){$(document.head,t),R(n,e,a),w(r,n,a),s=!0},p:function(n,t){var e=y(t,1)[0],s={};47&e&&(s.$$scope={dirty:e,ctx:n}),r.$set(s)},i:function(n){s||(F(r.$$.fragment,n),s=!0)},o:function(n){k(r.$$.fragment,n),s=!1},d:function(n){h(t),n&&h(e),x(r,n)}}}var _=function(n,t,e,r){return new(e||(e=Promise))((function(s,a){function i(n){try{c(r.next(n))}catch(n){a(n)}}function o(n){try{c(r.throw(n))}catch(n){a(n)}}function c(n){var t;n.done?s(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,o)}c((r=r.apply(n,t||[])).next())}))};function z(t){return _(this,void 0,void 0,n.mark((function e(){var r,s;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/teams.json");case 2:return r=n.sent,n.next=5,r.json();case 5:if(s=n.sent,200!==r.status){n.next=11;break}return((null==s?void 0:s.scores)||[]).forEach((function(n){n.linkedRatings=n.linkedRatings||[]})),n.abrupt("return",Object.assign(Object.assign({},M(t.query)),s));case 11:this.error(r.status,s.message);case 12:case"end":return n.stop()}}),e,this)})))}function B(n,t,e){var r=t.scores,s=void 0===r?[]:r,a=t.sortField,i=void 0===a?null:a,o=t.showLinkedRatings,c=void 0!==o&&o,u=t.nameFilter,f=void 0===u?null:u;b((function(){return A({sortField:i,showLinkedRatings:c,nameFilter:f})}));return n.$$set=function(n){"scores"in n&&e(3,s=n.scores),"sortField"in n&&e(0,i=n.sortField),"showLinkedRatings"in n&&e(1,c=n.showLinkedRatings),"nameFilter"in n&&e(2,f=n.nameFilter)},[i,c,f,s,function(n){console.log(n),e(0,i=n.detail.sortField),e(1,c=n.detail.showLinkedRatings),e(2,f=n.detail.nameFilter)}]}var C=function(n){t(r,o);var e=N(r);function r(n){var t;return s(this,r),t=e.call(this),a(i(t),n,B,P,c,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2}),t}return r}();export default C;export{z as preload};
