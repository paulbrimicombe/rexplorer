import{H as n,_ as t,a as e,b as r,c as a,i as s,d as i,S as o,s as c,e as u,f,g as l,q as d,h as m,j as h,k as g,n as p,o as v,p as $,r as R,u as F,F as w,w as k,x,z as y,I as j,l as L,A as b,B as E,y as D}from"./client.d23da9c1.js";import{f as I}from"./Banner.2546515c.js";import"./_common-styles.9c34c28b.js";import{M}from"./Modal.c80c7284.js";import{g as S,R as q,s as A}from"./RatingsPage.58df2c70.js";function P(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=e(n);if(t){var i=e(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return r(this,a)}}function B(n){var t,e,r,a,s;return(e=new q({props:{ratingName:"English royal teams",linkedRatingName:"individual scores",ratingImageSrc:"king-and-queen.jpg",ratingImageAlt:"King and queen playing chess",linkSymbol:"",scores:n[3],sortField:n[0],showLinkedRatings:n[1],nameFilter:n[2]}})).$on("change",n[4]),{c:function(){t=u("div"),l(e.$$.fragment)},l:function(n){t=m(n,"DIV",{});var r=L(t);p(e.$$.fragment,r),r.forEach(h)},m:function(n,r){R(n,t,r),F(e,t,null),s=!0},p:function(n,t){var r={};8&t&&(r.scores=n[3]),1&t&&(r.sortField=n[0]),2&t&&(r.showLinkedRatings=n[1]),4&t&&(r.nameFilter=n[2]),e.$set(r)},i:function(n){s||(k(e.$$.fragment,n),b((function(){a&&a.end(1),r||(r=E(t,I,{delay:300,duration:200})),r.start()})),s=!0)},o:function(n){x(e.$$.fragment,n),r&&r.invalidate(),a=D(t,I,{duration:200}),s=!1},d:function(n){n&&h(t),y(e),n&&a&&a.end()}}}function N(n){var t,e,r,a;return r=new M({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(n){var a=d('[data-svelte="svelte-wjiebm"]',document.head);t=m(a,"META",{name:!0,content:!0}),a.forEach(h),e=g(n),p(r.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",v(t,"name","Description"),v(t,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(n,s){$(document.head,t),R(n,e,s),F(r,n,s),a=!0},p:function(n,t){var e=w(t,1)[0],a={};79&e&&(a.$$scope={dirty:e,ctx:n}),r.$set(a)},i:function(n){a||(k(r.$$.fragment,n),a=!0)},o:function(n){x(r.$$.fragment,n),a=!1},d:function(n){h(t),n&&h(e),y(r,n)}}}var _=function(n,t,e,r){return new(e||(e=Promise))((function(a,s){function i(n){try{c(r.next(n))}catch(n){s(n)}}function o(n){try{c(r.throw(n))}catch(n){s(n)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,o)}c((r=r.apply(n,t||[])).next())}))};function z(){return _(this,void 0,void 0,n.mark((function t(){var e,r;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/teams.json");case 2:return e=n.sent,n.next=5,e.json();case 5:if(r=n.sent,200!==e.status){n.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(n){n.linkedRatings=n.linkedRatings||[]})),n.abrupt("return",r);case 11:this.error(e.status,r.message);case 12:case"end":return n.stop()}}),t,this)})))}function C(n,t,e){var r=S(),a=t.scores,s=void 0===a?[]:a,i=t.sortField,o=void 0===i?r.sortField:i,c=t.showLinkedRatings,u=void 0===c?r.showLinkedRatings:c,f=t.nameFilter,l=void 0===f?r.nameFilter:f;j((function(){return A({sortField:o,showLinkedRatings:u,nameFilter:l})}));return n.$$set=function(n){"scores"in n&&e(3,s=n.scores),"sortField"in n&&e(0,o=n.sortField),"showLinkedRatings"in n&&e(1,u=n.showLinkedRatings),"nameFilter"in n&&e(2,l=n.nameFilter)},[o,u,l,s,function(n){e(0,o=n.detail.sortField),e(1,u=n.detail.showLinkedRatings),e(2,l=n.detail.nameFilter)}]}var H=function(n){t(r,o);var e=P(r);function r(n){var t;return a(this,r),t=e.call(this),s(i(t),n,C,N,c,{scores:3,sortField:0,showLinkedRatings:1,nameFilter:2}),t}return r}();export default H;export{z as preload};
