import{y as t,_ as n,a as e,b as s,c as a,i as r,d as o,S as c,s as i,e as u,f,z as l,q as h,g as m,h as d,j as p,A as v,m as $,o as g,p as y,B as x,C as R,D as w,E as k,F as E,t as b,k as j,l as D,v as M,w as q,u as S}from"./client.c9ec5f66.js";import{f as T}from"./index.38405796.js";import"./_common-styles.9c34c28b.js";import{M as A,R as C}from"./Modal.5429ceee.js";function F(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return s(this,a)}}function I(t){var n,e,s,a,r,o,c,i,h;return o=new C({props:{scores:t[0],linkedRatingName:"individual scores",linkSymbol:""}}),{c:function(){n=u("div"),e=u("h1"),s=u("img"),a=b("\n      English Royal Teams"),r=f(),l(o.$$.fragment),this.h()},l:function(t){n=m(t,"DIV",{});var c=j(n);e=m(c,"H1",{class:!0});var i=j(e);s=m(i,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),a=D(i,"\n      English Royal Teams"),i.forEach(d),r=p(c),v(o.$$.fragment,c),c.forEach(d),this.h()},h:function(){$(s,"width","64"),$(s,"height","64"),s.src!=="king-and-queen.webp"&&$(s,"src","king-and-queen.webp"),$(s,"alt","King and Queen playing chess"),$(s,"class","svelte-1o8e9um"),$(e,"class","teams svelte-1o8e9um")},m:function(t,c){y(t,n,c),g(n,e),g(e,s),g(e,a),g(n,r),x(o,n,null),h=!0},p:function(t,n){var e={};1&n&&(e.scores=t[0]),o.$set(e)},i:function(t){h||(w(o.$$.fragment,t),M((function(){i&&i.end(1),c||(c=q(n,T,{delay:300,duration:200})),c.start()})),h=!0)},o:function(t){k(o.$$.fragment,t),c&&c.invalidate(),i=S(n,T,{duration:200}),h=!1},d:function(t){t&&d(n),E(o),t&&i&&i.end()}}}function P(t){var n,e,s,a;return s=new A({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c:function(){n=u("meta"),e=f(),l(s.$$.fragment),this.h()},l:function(t){var a=h('[data-svelte="svelte-wjiebm"]',document.head);n=m(a,"META",{name:!0,content:!0}),a.forEach(d),e=p(t),v(s.$$.fragment,t),this.h()},h:function(){document.title="Rexplorer consort & monarch teams",$(n,"name","Description"),$(n,"content","Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams")},m:function(t,r){g(document.head,n),y(t,e,r),x(s,t,r),a=!0},p:function(t,n){var e=R(n,1)[0],a={};3&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i:function(t){a||(w(s.$$.fragment,t),a=!0)},o:function(t){k(s.$$.fragment,t),a=!1},d:function(t){d(n),t&&d(e),E(s,t)}}}var _=function(t,n,e,s){return new(e||(e=Promise))((function(a,r){function o(t){try{i(s.next(t))}catch(t){r(t)}}function c(t){try{i(s.throw(t))}catch(t){r(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}i((s=s.apply(t,n||[])).next())}))};function z(){return _(this,void 0,void 0,t.mark((function n(){var e,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("data/teams.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(s=t.sent,200!==e.status){t.next=11;break}return((null==s?void 0:s.scores)||[]).forEach((function(t){t.linkedRatings=t.linkedRatings||[]})),t.abrupt("return",s);case 11:this.error(e.status,s.message);case 12:case"end":return t.stop()}}),n,this)})))}function B(t,n,e){var s=n.scores,a=void 0===s?[]:s;return t.$$set=function(t){"scores"in t&&e(0,a=t.scores)},[a]}var G=function(t){n(s,c);var e=F(s);function s(t){var n;return a(this,s),n=e.call(this),r(o(n),t,B,P,i,{scores:0}),n}return s}();export default G;export{z as preload};
