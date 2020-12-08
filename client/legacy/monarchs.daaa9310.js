import{G as n,_ as t,a as e,b as r,c as s,i as a,d as o,S as i,s as c,e as u,f,g as l,q as d,h as m,j as h,k as g,m as p,n as v,o as $,p as R,r as F,E as w,u as x,v as k,x as y,H as L,l as j,y as E,z as b,w as D}from"./client.2c142add.js";import{f as M}from"./Banner.f9451b32.js";import"./_common-styles.9c34c28b.js";import{M as I,g as S,R as A,s as N}from"./Modal.ce8fae44.js";function P(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,a=e(n);if(t){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function _(n){var t,e,r,s,a;return(e=new A({props:{ratingName:"English monarchs",linkedRatingName:"consorts",ratingImageSrc:"monarch.jpg",ratingImageAlt:"English monarch",scores:n[3],sortField:n[0],showLinkedRatings:n[1],nameFilter:n[2]}})).$on("change",n[4]),{c:function(){t=u("div"),l(e.$$.fragment)},l:function(n){t=m(n,"DIV",{});var r=j(t);p(e.$$.fragment,r),r.forEach(h)},m:function(n,r){R(n,t,r),F(e,t,null),a=!0},p:function(n,t){var r={};8&t&&(r.scores=n[3]),1&t&&(r.sortField=n[0]),2&t&&(r.showLinkedRatings=n[1]),4&t&&(r.nameFilter=n[2]),e.$set(r)},i:function(n){a||(x(e.$$.fragment,n),E((function(){s&&s.end(1),r||(r=b(t,M,{delay:300,duration:200})),r.start()})),a=!0)},o:function(n){k(e.$$.fragment,n),r&&r.invalidate(),s=D(t,M,{duration:200}),a=!1},d:function(n){n&&h(t),y(e),n&&s&&s.end()}}}function q(n){var t,e,r,s;return r=new I({props:{$$slots:{default:[_]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(n){var s=d('[data-svelte="svelte-yx9k2o"]',document.head);t=m(s,"META",{name:!0,content:!0}),s.forEach(h),e=g(n),p(r.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer monarchs",v(t,"name","Description"),v(t,"content","Rexplorer for exploring Rex Factor scores for English Monarchs")},m:function(n,a){$(document.head,t),R(n,e,a),F(r,n,a),s=!0},p:function(n,t){var e=w(t,1)[0],s={};79&e&&(s.$$scope={dirty:e,ctx:n}),r.$set(s)},i:function(n){s||(x(r.$$.fragment,n),s=!0)},o:function(n){k(r.$$.fragment,n),s=!1},d:function(n){h(t),n&&h(e),y(r,n)}}}var z=function(n,t,e,r){return new(e||(e=Promise))((function(s,a){function o(n){try{c(r.next(n))}catch(n){a(n)}}function i(n){try{c(r.throw(n))}catch(n){a(n)}}function c(n){var t;n.done?s(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(o,i)}c((r=r.apply(n,t||[])).next())}))};function B(){return z(this,void 0,void 0,n.mark((function t(){var e,r;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/monarchs.json");case 2:return e=n.sent,n.next=5,e.json();case 5:if(r=n.sent,200!==e.status){n.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(n){n.linkedRatings=n.consorts||[]})),n.abrupt("return",r);case 11:this.error(e.status,r.message);case 12:case"end":return n.stop()}}),t,this)})))}function G(n,t,e){var r=S(),s=t.scores,a=void 0===s?[]:s,o=t.sortField,i=void 0===o?r.sortField:o,c=t.showLinkedRatings,u=void 0===c?r.showLinkedRatings:c,f=t.nameFilter,l=void 0===f?r.nameFilter:f;L((function(){return N({sortField:i,showLinkedRatings:u,nameFilter:l})}));return n.$$set=function(n){"scores"in n&&e(3,a=n.scores),"sortField"in n&&e(0,i=n.sortField),"showLinkedRatings"in n&&e(1,u=n.showLinkedRatings),"nameFilter"in n&&e(2,l=n.nameFilter)},[i,u,l,a,function(n){e(0,i=n.detail.sortField),e(1,u=n.detail.showLinkedRatings),e(2,l=n.detail.nameFilter)}]}var H=function(n){t(r,i);var e=P(r);function r(n){var t;return s(this,r),t=e.call(this),a(o(t),n,G,q,c,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2}),t}return r}();export default H;export{B as preload};