import{S as t,i as s,s as e,e as l,b as n,g as a,d as o,n as c,p as i,F as r,a as u,t as d,f,j as y,l as g,m as h,A as p,D as v,C as $,G as w,H as m,I as b,J as B,K as C,q as k,L as E,M as O,r as P,N as T,O as W,P as A,v as N,Q as j,c as R,o as D,w as x,R as S,T as I,U,V,W as L,X as F,k as M,Y as K,Z,_ as q}from"./client.5154fea7.js";import{f as G}from"./Banner.15efa137.js";import"./_common-styles.9c34c28b.js";function _(t,s,e){const l=t.slice();return l[9]=s[e],l}function z(t,s,e){const l=t.slice();return l[9]=s[e],l[13]=e,l}function H(t){let s,e,i,r,p,$,C,k,E,O,P,T,W,A,N,j,R,D,x,S,I,U,V,L,F,M,K,Z,q,G,H,J,Q,tt,st,et,lt,nt,at,ot,ct,it,rt,ut,dt,ft,yt,gt=t[0].total+"",ht=t[0].battleyness+"",pt=t[0].scandal+"",vt=t[0].subjectivity+"",$t=t[0].longevity+"",wt=t[0].dynasty+"",mt=t[0].name,bt=[];for(let s=0;s<mt.length;s+=1)bt[s]=X(z(t,mt,s));let Bt=t[0].name,Ct=[];for(let s=0;s<Bt.length;s+=1)Ct[s]=Y(_(t,Bt,s));return{c(){s=l("card"),e=l("name"),i=l("span");for(let t=0;t<bt.length;t+=1)bt[t].c();r=u(),p=l("content"),$=l("portraits");for(let t=0;t<Ct.length;t+=1)Ct[t].c();C=u(),k=l("total"),E=d(gt),O=u(),P=l("scores"),T=l("button"),W=l("bar"),A=d(" Battleyness\n              "),N=d(ht),D=u(),x=l("button"),S=l("bar"),I=d(" Scandal\n              "),U=d(pt),F=u(),M=l("button"),K=l("bar"),Z=d(" Subjectivity\n              "),q=d(vt),J=u(),Q=l("button"),tt=l("bar"),st=d(" Longevity\n              "),et=d($t),at=u(),ot=l("button"),ct=l("bar"),it=d(" Dynasty\n              "),rt=d(wt),this.h()},l(t){s=n(t,"CARD",{class:!0});var l=a(s);e=n(l,"NAME",{class:!0});var c=a(e);i=n(c,"SPAN",{class:!0});var u=a(i);for(let t=0;t<bt.length;t+=1)bt[t].l(u);u.forEach(o),c.forEach(o),r=f(l),p=n(l,"CONTENT",{class:!0});var d=a(p);$=n(d,"PORTRAITS",{class:!0});var g=a($);for(let t=0;t<Ct.length;t+=1)Ct[t].l(g);g.forEach(o),C=f(d),k=n(d,"TOTAL",{class:!0});var h=a(k);E=y(h,gt),h.forEach(o),O=f(d),P=n(d,"SCORES",{class:!0});var v=a(P);T=n(v,"BUTTON",{class:!0});var w=a(T);W=n(w,"BAR",{style:!0,class:!0});var m=a(W);A=y(m," Battleyness\n              "),N=y(m,ht),m.forEach(o),w.forEach(o),D=f(v),x=n(v,"BUTTON",{class:!0});var b=a(x);S=n(b,"BAR",{style:!0,class:!0});var B=a(S);I=y(B," Scandal\n              "),U=y(B,pt),B.forEach(o),b.forEach(o),F=f(v),M=n(v,"BUTTON",{class:!0});var j=a(M);K=n(j,"BAR",{style:!0,class:!0});var R=a(K);Z=y(R," Subjectivity\n              "),q=y(R,vt),R.forEach(o),j.forEach(o),J=f(v),Q=n(v,"BUTTON",{class:!0});var V=a(Q);tt=n(V,"BAR",{style:!0,class:!0});var L=a(tt);st=y(L," Longevity\n              "),et=y(L,$t),L.forEach(o),V.forEach(o),at=f(v),ot=n(v,"BUTTON",{class:!0});var G=a(ot);ct=n(G,"BAR",{style:!0,class:!0});var _=a(ct);it=y(_," Dynasty\n              "),rt=y(_,wt),_.forEach(o),G.forEach(o),v.forEach(o),d.forEach(o),l.forEach(o),this.h()},h(){g(i,"class","svelte-1guws8l"),g(e,"class","svelte-1guws8l"),g($,"class","svelte-1guws8l"),g(k,"class","svelte-1guws8l"),g(W,"style",j=`width: ${100*t[0].battleyness/20}%`),g(W,"class","battleyness svelte-1guws8l"),T.disabled=R=!t[1],g(T,"class","svelte-1guws8l"),w(T,"clickableCategories",t[1]),g(S,"style",V=`width: ${100*t[0].scandal/20}%`),g(S,"class","scandal svelte-1guws8l"),x.disabled=L=!t[1],g(x,"class","svelte-1guws8l"),w(x,"clickableCategories",t[1]),g(K,"style",G=`width: ${100*t[0].subjectivity/20}%`),g(K,"class","subjectivity svelte-1guws8l"),M.disabled=H=!t[1],g(M,"class","svelte-1guws8l"),w(M,"clickableCategories",t[1]),g(tt,"style",lt=`width: ${100*t[0].longevity/20}%`),g(tt,"class","longevity svelte-1guws8l"),Q.disabled=nt=!t[1],g(Q,"class","svelte-1guws8l"),w(Q,"clickableCategories",t[1]),g(ct,"style",ut=`width: ${100*t[0].dynasty/20}%`),g(ct,"class","dynasty svelte-1guws8l"),ot.disabled=dt=!t[1],g(ot,"class","svelte-1guws8l"),w(ot,"clickableCategories",t[1]),g(P,"class","svelte-1guws8l"),g(p,"class","svelte-1guws8l"),g(s,"class","svelte-1guws8l")},m(l,n){c(l,s,n),h(s,e),h(e,i);for(let t=0;t<bt.length;t+=1)bt[t]&&bt[t].m(i,null);h(s,r),h(s,p),h(p,$);for(let t=0;t<Ct.length;t+=1)Ct[t]&&Ct[t].m($,null);h(p,C),h(p,k),h(k,E),h(p,O),h(p,P),h(P,T),h(T,W),h(W,A),h(W,N),h(P,D),h(P,x),h(x,S),h(S,I),h(S,U),h(P,F),h(P,M),h(M,K),h(K,Z),h(K,q),h(P,J),h(P,Q),h(Q,tt),h(tt,st),h(tt,et),h(P,at),h(P,ot),h(ot,ct),h(ct,it),h(ct,rt),ft||(yt=[m(T,"click",t[3]),m(x,"click",t[4]),m(M,"click",t[5]),m(Q,"click",t[6]),m(ot,"click",t[7])],ft=!0)},p(t,s){if(1&s){let e;for(mt=t[0].name,e=0;e<mt.length;e+=1){const l=z(t,mt,e);bt[e]?bt[e].p(l,s):(bt[e]=X(l),bt[e].c(),bt[e].m(i,null))}for(;e<bt.length;e+=1)bt[e].d(1);bt.length=mt.length}if(1&s){let e;for(Bt=t[0].name,e=0;e<Bt.length;e+=1){const l=_(t,Bt,e);Ct[e]?Ct[e].p(l,s):(Ct[e]=Y(l),Ct[e].c(),Ct[e].m($,null))}for(;e<Ct.length;e+=1)Ct[e].d(1);Ct.length=Bt.length}1&s&&gt!==(gt=t[0].total+"")&&v(E,gt),1&s&&ht!==(ht=t[0].battleyness+"")&&v(N,ht),1&s&&j!==(j=`width: ${100*t[0].battleyness/20}%`)&&g(W,"style",j),2&s&&R!==(R=!t[1])&&(T.disabled=R),2&s&&w(T,"clickableCategories",t[1]),1&s&&pt!==(pt=t[0].scandal+"")&&v(U,pt),1&s&&V!==(V=`width: ${100*t[0].scandal/20}%`)&&g(S,"style",V),2&s&&L!==(L=!t[1])&&(x.disabled=L),2&s&&w(x,"clickableCategories",t[1]),1&s&&vt!==(vt=t[0].subjectivity+"")&&v(q,vt),1&s&&G!==(G=`width: ${100*t[0].subjectivity/20}%`)&&g(K,"style",G),2&s&&H!==(H=!t[1])&&(M.disabled=H),2&s&&w(M,"clickableCategories",t[1]),1&s&&$t!==($t=t[0].longevity+"")&&v(et,$t),1&s&&lt!==(lt=`width: ${100*t[0].longevity/20}%`)&&g(tt,"style",lt),2&s&&nt!==(nt=!t[1])&&(Q.disabled=nt),2&s&&w(Q,"clickableCategories",t[1]),1&s&&wt!==(wt=t[0].dynasty+"")&&v(rt,wt),1&s&&ut!==(ut=`width: ${100*t[0].dynasty/20}%`)&&g(ct,"style",ut),2&s&&dt!==(dt=!t[1])&&(ot.disabled=dt),2&s&&w(ot,"clickableCategories",t[1])},d(t){t&&o(s),b(bt,t),b(Ct,t),ft=!1,B(yt)}}}function J(t){let s;return{c(){s=l("card"),this.h()},l(t){s=n(t,"CARD",{class:!0}),a(s).forEach(o),this.h()},h(){g(s,"class","card-back svelte-1guws8l")},m(t,e){c(t,s,e)},p:i,d(t){t&&o(s)}}}function Q(t){let s,e;return{c(){s=l("img"),this.h()},l(t){s=n(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){p(s.src,e="crown.svg")||g(s,"src","crown.svg"),g(s,"alt","Rex Factor winner"),g(s,"class","svelte-1guws8l")},m(t,e){c(t,s,e)},d(t){t&&o(s)}}}function X(t){let s,e,i,r,p,$,w=t[9]+"",m=t[0].rexFactor[t[13]]&&Q();return{c(){m&&m.c(),s=u(),e=l("span"),i=d(w),r=u(),p=l("span"),$=d("& "),this.h()},l(t){m&&m.l(t),s=f(t),e=n(t,"SPAN",{class:!0});var l=a(e);i=y(l,w),l.forEach(o),r=f(t),p=n(t,"SPAN",{class:!0});var c=a(p);$=y(c,"& "),c.forEach(o),this.h()},h(){g(e,"class","svelte-1guws8l"),g(p,"class","svelte-1guws8l")},m(t,l){m&&m.m(t,l),c(t,s,l),c(t,e,l),h(e,i),c(t,r,l),c(t,p,l),h(p,$)},p(t,e){t[0].rexFactor[t[13]]?m||(m=Q(),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null),1&e&&w!==(w=t[9]+"")&&v(i,w)},d(t){m&&m.d(t),t&&o(s),t&&o(e),t&&o(r),t&&o(p)}}}function Y(t){let s;return{c(){s=l("portrait"),this.h()},l(t){s=n(t,"PORTRAIT",{style:!0,class:!0}),a(s).forEach(o),this.h()},h(){$(s,"background-image","url('portraits/"+t[9].replace("/","").replace("  "," ")+".jpg')"),g(s,"class","svelte-1guws8l")},m(t,e){c(t,s,e)},p(t,e){1&e&&$(s,"background-image","url('portraits/"+t[9].replace("/","").replace("  "," ")+".jpg')")},d(t){t&&o(s)}}}function tt(t){let s;function e(t,s){return t[0]?H:J}let r=e(t),u=r(t);return{c(){s=l("div"),u.c()},l(t){s=n(t,"DIV",{});var e=a(s);u.l(e),e.forEach(o)},m(t,e){c(t,s,e),u.m(s,null)},p(t,[l]){r===(r=e(t))&&u?u.p(t,l):(u.d(1),u=r(t),u&&(u.c(),u.m(s,null)))},i:i,o:i,d(t){t&&o(s),u.d()}}}function st(t,s,e){const l=r();let{rating:n}=s,{clickableCategories:a=!1}=s;const o=t=>{l("select",t)};return t.$$set=t=>{"rating"in t&&e(0,n=t.rating),"clickableCategories"in t&&e(1,a=t.clickableCategories)},[n,a,o,()=>o("battleyness"),()=>o("scandal"),()=>o("subjectivity"),()=>o("longevity"),()=>o("dynasty")]}class et extends t{constructor(t){super(),s(this,t,st,tt,e,{rating:0,clickableCategories:1})}}function lt(t){let s,e,i,r,d,y,p,v,$,w,b,E=t[0].closeButton&&nt(t);const I=[t[2]];var U=t[1];function V(t){let s={};for(let t=0;t<I.length;t+=1)s=F(s,I[t]);return{props:s}}return U&&(y=j(U,V())),{c(){s=l("div"),e=l("div"),i=l("div"),E&&E.c(),r=u(),d=l("div"),y&&R(y.$$.fragment),this.h()},l(t){s=n(t,"DIV",{class:!0,style:!0});var l=a(s);e=n(l,"DIV",{class:!0});var c=a(e);i=n(c,"DIV",{class:!0,role:!0,"aria-modal":!0,style:!0});var u=a(i);E&&E.l(u),r=f(u),d=n(u,"DIV",{class:!0,style:!0});var g=a(d);y&&M(y.$$.fragment,g),g.forEach(o),u.forEach(o),c.forEach(o),l.forEach(o),this.h()},h(){g(d,"class","content svelte-fnsfcv"),g(d,"style",t[13]),g(i,"class","window svelte-fnsfcv"),g(i,"role","dialog"),g(i,"aria-modal","true"),g(i,"style",t[14]),g(e,"class","window-wrap svelte-fnsfcv"),g(s,"class","bg svelte-fnsfcv"),g(s,"style",t[15])},m(l,n){c(l,s,n),h(s,e),h(e,i),E&&E.m(i,null),h(i,r),h(i,d),y&&D(y,d,null),t[35](i),t[36](e),t[37](s),$=!0,w||(b=[m(i,"introstart",(function(){C(t[6])&&t[6].apply(this,arguments)})),m(i,"outrostart",(function(){C(t[7])&&t[7].apply(this,arguments)})),m(i,"introend",(function(){C(t[8])&&t[8].apply(this,arguments)})),m(i,"outroend",(function(){C(t[9])&&t[9].apply(this,arguments)})),m(s,"click",t[19]),m(s,"keypress",t[19])],w=!0)},p(e,l){(t=e)[0].closeButton?E?(E.p(t,l),1&l[0]&&k(E,1)):(E=nt(t),E.c(),k(E,1),E.m(i,r)):E&&(O(),P(E,1,1,(()=>{E=null})),T());const n=4&l[0]?W(I,[A(t[2])]):{};if(2&l[0]&&U!==(U=t[1])){if(y){O();const t=y;P(t.$$.fragment,1,0,(()=>{N(t,1)})),T()}U?(y=j(U,V()),R(y.$$.fragment),k(y.$$.fragment,1),D(y,d,null)):y=null}else U&&y.$set(n);(!$||8192&l[0])&&g(d,"style",t[13]),(!$||16384&l[0])&&g(i,"style",t[14]),(!$||32768&l[0])&&g(s,"style",t[15])},i(e){$||(k(E),y&&k(y.$$.fragment,e),x((()=>{$&&(p||(p=S(i,t[10],t[0].transitionWindowProps,!0)),p.run(1))})),x((()=>{$&&(v||(v=S(s,t[11],t[0].transitionBgProps,!0)),v.run(1))})),$=!0)},o(e){P(E),y&&P(y.$$.fragment,e),p||(p=S(i,t[10],t[0].transitionWindowProps,!1)),p.run(0),v||(v=S(s,t[11],t[0].transitionBgProps,!1)),v.run(0),$=!1},d(e){e&&o(s),E&&E.d(),y&&N(y),t[35](null),e&&p&&p.end(),t[36](null),t[37](null),e&&v&&v.end(),w=!1,B(b)}}}function nt(t){let s,e,l,n,a;const i=[ot,at],r=[];function u(t,e){return 1&e[0]&&(s=null),null==s&&(s=!!t[16](t[0].closeButton)),s?0:1}return e=u(t,[-1,-1]),l=r[e]=i[e](t),{c(){l.c(),n=E()},l(t){l.l(t),n=E()},m(t,s){r[e].m(t,s),c(t,n,s),a=!0},p(t,s){let a=e;e=u(t,s),e===a?r[e].p(t,s):(O(),P(r[a],1,1,(()=>{r[a]=null})),T(),l=r[e],l?l.p(t,s):(l=r[e]=i[e](t),l.c()),k(l,1),l.m(n.parentNode,n))},i(t){a||(k(l),a=!0)},o(t){P(l),a=!1},d(t){r[e].d(t),t&&o(n)}}}function at(t){let s,e,r;return{c(){s=l("button"),this.h()},l(t){s=n(t,"BUTTON",{class:!0,style:!0}),a(s).forEach(o),this.h()},h(){g(s,"class","close svelte-fnsfcv"),g(s,"style",t[12])},m(l,n){c(l,s,n),e||(r=m(s,"click",t[17]),e=!0)},p(t,e){4096&e[0]&&g(s,"style",t[12])},i:i,o:i,d(t){t&&o(s),e=!1,r()}}}function ot(t){let s,e,l;var n=t[0].closeButton;function a(t){return{props:{onClose:t[17]}}}return n&&(s=j(n,a(t))),{c(){s&&R(s.$$.fragment),e=E()},l(t){s&&M(s.$$.fragment,t),e=E()},m(t,n){s&&D(s,t,n),c(t,e,n),l=!0},p(t,l){if(1&l[0]&&n!==(n=t[0].closeButton)){if(s){O();const t=s;P(t.$$.fragment,1,0,(()=>{N(t,1)})),T()}n?(s=j(n,a(t)),R(s.$$.fragment),k(s.$$.fragment,1),D(s,e.parentNode,e)):s=null}},i(t){l||(s&&k(s.$$.fragment,t),l=!0)},o(t){s&&P(s.$$.fragment,t),l=!1},d(t){t&&o(e),s&&N(s,t)}}}function ct(t){let s,e,l,n,a=t[1]&&lt(t);const i=t[34].default,r=I(i,t,t[33],null);return{c(){a&&a.c(),s=u(),r&&r.c()},l(t){a&&a.l(t),s=f(t),r&&r.l(t)},m(o,i){a&&a.m(o,i),c(o,s,i),r&&r.m(o,i),e=!0,l||(n=m(window,"keydown",t[18]),l=!0)},p(t,l){t[1]?a?(a.p(t,l),2&l[0]&&k(a,1)):(a=lt(t),a.c(),k(a,1),a.m(s.parentNode,s)):a&&(O(),P(a,1,1,(()=>{a=null})),T()),r&&r.p&&(!e||4&l[1])&&U(r,i,t,t[33],e?L(i,t[33],l,null):V(t[33]),null)},i(t){e||(k(a),k(r,t),e=!0)},o(t){P(a),P(r,t),e=!1},d(t){a&&a.d(t),t&&o(s),r&&r.d(t),l=!1,n()}}}function it(t,s,e){let l,n,a,o,c,i,{$$slots:r={},$$scope:u}=s;const d=Z,f=q;let{key:y="simple-modal"}=s,{closeButton:g=!0}=s,{closeOnEsc:h=!0}=s,{closeOnOuterClick:p=!0}=s,{styleBg:v={top:0,left:0}}=s,{styleWindow:$={}}=s,{styleContent:w={}}=s,{styleCloseButton:m={}}=s,{setContext:b=d}=s,{transitionBg:B=G}=s,{transitionBgProps:C={duration:250}}=s,{transitionWindow:k=B}=s,{transitionWindowProps:E=C}=s;const O={closeButton:g,closeOnEsc:h,closeOnOuterClick:p,styleBg:v,styleWindow:$,styleContent:w,styleCloseButton:m,transitionBg:B,transitionBgProps:C,transitionWindow:k,transitionWindowProps:E};let P,T,W,A={...O},N=null,j=null;const R=t=>Object.keys(t).reduce(((s,e)=>`${s}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(e)}: ${t[e]}`),""),D=()=>{};let x=D,S=D,I=D,U=D;const V=(t={})=>{e(7,S=t.onClose||S),e(9,U=t.onClosed||U),e(1,N=null),e(2,j=null)};return b(y,{open:(t,s={},l={},n={})=>{e(1,N=t),e(2,j=s),e(0,A={...O,...l}),e(6,x=n.onOpen||D),e(7,S=n.onClose||D),e(8,I=n.onOpened||D),e(9,U=n.onClosed||D)},close:V}),t.$$set=t=>{"key"in t&&e(20,y=t.key),"closeButton"in t&&e(21,g=t.closeButton),"closeOnEsc"in t&&e(22,h=t.closeOnEsc),"closeOnOuterClick"in t&&e(23,p=t.closeOnOuterClick),"styleBg"in t&&e(24,v=t.styleBg),"styleWindow"in t&&e(25,$=t.styleWindow),"styleContent"in t&&e(26,w=t.styleContent),"styleCloseButton"in t&&e(27,m=t.styleCloseButton),"setContext"in t&&e(28,b=t.setContext),"transitionBg"in t&&e(29,B=t.transitionBg),"transitionBgProps"in t&&e(30,C=t.transitionBgProps),"transitionWindow"in t&&e(31,k=t.transitionWindow),"transitionWindowProps"in t&&e(32,E=t.transitionWindowProps),"$$scope"in t&&e(33,u=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty[0]&&e(15,l=R(A.styleBg)),1&t.$$.dirty[0]&&e(14,n=R(A.styleWindow)),1&t.$$.dirty[0]&&e(13,a=R(A.styleContent)),1&t.$$.dirty[0]&&e(12,o=R(A.styleCloseButton)),1&t.$$.dirty[0]&&e(11,c=A.transitionBg),1&t.$$.dirty[0]&&e(10,i=A.transitionWindow)},[A,N,j,P,T,W,x,S,I,U,i,c,o,a,n,l,t=>f&&f.isPrototypeOf&&f.isPrototypeOf(t),V,t=>{if(A.closeOnEsc&&N&&"Escape"===t.key&&(t.preventDefault(),V()),N&&"Tab"===t.key){const s=W.querySelectorAll("*"),e=Array.from(s).filter((t=>t.tabIndex>=0));let l=e.indexOf(document.activeElement);-1===l&&t.shiftKey&&(l=0),l+=e.length+(t.shiftKey?-1:1),l%=e.length,e[l].focus(),t.preventDefault()}},t=>{!A.closeOnOuterClick||t.target!==P&&t.target!==T||(t.preventDefault(),V())},y,g,h,p,v,$,w,m,b,B,C,k,E,u,r,function(t){K[t?"unshift":"push"]((()=>{W=t,e(5,W)}))},function(t){K[t?"unshift":"push"]((()=>{T=t,e(4,T)}))},function(t){K[t?"unshift":"push"]((()=>{P=t,e(3,P)}))}]}class rt extends t{constructor(t){super(),s(this,t,it,ct,e,{key:20,closeButton:21,closeOnEsc:22,closeOnOuterClick:23,styleBg:24,styleWindow:25,styleContent:26,styleCloseButton:27,setContext:28,transitionBg:29,transitionBgProps:30,transitionWindow:31,transitionWindowProps:32},null,[-1,-1])}}export{et as C,rt as M};
