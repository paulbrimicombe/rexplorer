import{G as n,_ as t,a as e,b as r,c as a,i as s,d as o,S as c,s as i,e as u,f,g as l,q as m,h as d,j as p,k as h,m as $,n as v,o as g,p as x,r as y,E as R,u as w,v as j,x as k,l as E,y as b,z as D,w as M}from"./client.fdca4ad7.js";import{B as S,f as q}from"./Banner.67a0c334.js";import"./_common-styles.9c34c28b.js";import{M as P,R as z}from"./Modal.02675770.js";function A(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=e(n);if(t){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function B(n){var t,e,r,a,s,o,c;return e=new S({props:{title:"English Royal Teams",imagePath:"king-and-queen.jpg",imageAlt:"King and queen playing chess",imageSize:64}}),a=new z({props:{scores:n[0],linkedRatingName:"individual scores",linkSymbol:""}}),{c:function(){t=u("div"),l(e.$$.fragment),r=f(),l(a.$$.fragment)},l:function(n){t=d(n,"DIV",{});var s=E(t);$(e.$$.fragment,s),r=h(s),$(a.$$.fragment,s),s.forEach(p)},m:function(n,s){x(n,t,s),y(e,t,null),g(t,r),y(a,t,null),c=!0},p:function(n,t){var e={};1&t&&(e.scores=n[0]),a.$set(e)},i:function(n){c||(w(e.$$.fragment,n),w(a.$$.fragment,n),b((function(){o&&o.end(1),s||(s=D(t,q,{delay:300,duration:200})),s.start()})),c=!0)},o:function(n){j(e.$$.fragment,n),j(a.$$.fragment,n),s&&s.invalidate(),o=M(t,q,{duration:200}),c=!1},d:function(n){n&&p(t),k(e),k(a),n&&o&&o.end()}}}function T(n){var t,e,r,a;return r=new P({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),{c:function(){t=u("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(n){var a=m('[data-svelte="svelte-wjiebm"]',document.head);t=d(a,"META",{name:!0,content:!0}),a.forEach(p),e=h(n),$(r.$$.fragment,n),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",v(t,"name","Description"),v(t,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(n,s){g(document.head,t),x(n,e,s),y(r,n,s),a=!0},p:function(n,t){var e=R(t,1)[0],a={};3&e&&(a.$$scope={dirty:e,ctx:n}),r.$set(a)},i:function(n){a||(w(r.$$.fragment,n),a=!0)},o:function(n){j(r.$$.fragment,n),a=!1},d:function(n){p(t),n&&p(e),k(r,n)}}}var _=function(n,t,e,r){return new(e||(e=Promise))((function(a,s){function o(n){try{i(r.next(n))}catch(n){s(n)}}function c(n){try{i(r.throw(n))}catch(n){s(n)}}function i(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(o,c)}i((r=r.apply(n,t||[])).next())}))};function C(){return _(this,void 0,void 0,n.mark((function t(){var e,r;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.fetch("data/teams.json");case 2:return e=n.sent,n.next=5,e.json();case 5:if(r=n.sent,200!==e.status){n.next=11;break}return((null==r?void 0:r.scores)||[]).forEach((function(n){n.linkedRatings=n.linkedRatings||[]})),n.abrupt("return",r);case 11:this.error(e.status,r.message);case 12:case"end":return n.stop()}}),t,this)})))}function F(n,t,e){var r=t.scores,a=void 0===r?[]:r;return n.$$set=function(n){"scores"in n&&e(0,a=n.scores)},[a]}var G=function(n){t(r,c);var e=A(r);function r(n){var t;return a(this,r),t=e.call(this),s(o(t),n,F,T,i,{scores:0}),t}return r}();export default G;export{C as preload};
