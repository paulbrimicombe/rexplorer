import{S as t,i as s,s as e,a as l,e as n,t as a,b as r,c as o,f as c,g as i,d as h,h as u,l as d,k as f,A as g,B as v,n as y,C as $,D as p,E as m,F as E,G as w,H as R,I as b,x as B,y as O,J as k,j as x,K as C,L as A,M as j,u as N,v as S,w as L,z as T,N as P,O as W,o as I,P as D,Q as _,R as z,T as U,U as F,V as K,W as H,X as M,Y as G,Z as V,_ as Z,$ as Y,a0 as q,a1 as J}from"./client.f0066450.js";import{f as Q}from"./index.6d89bde2.js";function X(t,s,e){const l=t.slice();return l[1]=s[e],l}function tt(t,s,e){const l=t.slice();return l[1]=s[e],l[5]=e,l}function st(t){let s,e;return{c(){s=n("img"),this.h()},l(t){s=o(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e="crown.svg")&&u(s,"src","crown.svg"),u(s,"alt","Rex Factor winner"),u(s,"class","svelte-1cd4l95")},m(t,e){d(t,s,e)},d(t){t&&h(s)}}}function et(t){let s,e,v,y,$,p,m=t[1]+"",E=t[0].rexFactor[t[5]]&&st();return{c(){E&&E.c(),s=l(),e=n("span"),v=a(m),y=l(),$=n("span"),p=a("& "),this.h()},l(t){E&&E.l(t),s=r(t),e=o(t,"SPAN",{class:!0});var l=c(e);v=i(l,m),l.forEach(h),y=r(t),$=o(t,"SPAN",{class:!0});var n=c($);p=i(n,"& "),n.forEach(h),this.h()},h(){u(e,"class","svelte-1cd4l95"),u($,"class","svelte-1cd4l95")},m(t,l){E&&E.m(t,l),d(t,s,l),d(t,e,l),f(e,v),d(t,y,l),d(t,$,l),f($,p)},p(t,e){t[0].rexFactor[t[5]]?E||(E=st(),E.c(),E.m(s.parentNode,s)):E&&(E.d(1),E=null),1&e&&m!==(m=t[1]+"")&&g(v,m)},d(t){E&&E.d(t),t&&h(s),t&&h(e),t&&h(y),t&&h($)}}}function lt(t){let s;return{c(){s=n("portrait"),this.h()},l(t){s=o(t,"PORTRAIT",{style:!0,class:!0}),c(s).forEach(h),this.h()},h(){v(s,"background-image","url('portraits/"+t[1]+".jpg')"),u(s,"class","svelte-1cd4l95")},m(t,e){d(t,s,e)},p(t,e){1&e&&v(s,"background-image","url('portraits/"+t[1]+".jpg')")},d(t){t&&h(s)}}}function nt(t){let s,e,v,p,m,E,w,R,b,B,O,k,x,C,A,j,N,S,L,T,P,W,I,D,_,z,U,F,K,H,M,G,V,Z,Y,q,J,Q,st,nt=t[0].total+"",at=t[0].battleyness+"",rt=t[0].scandal+"",ot=t[0].subjectivity+"",ct=t[0].longevity+"",it=t[0].dynasty+"",ht=t[0].name,ut=[];for(let s=0;s<ht.length;s+=1)ut[s]=et(tt(t,ht,s));let dt=t[0].name,ft=[];for(let s=0;s<dt.length;s+=1)ft[s]=lt(X(t,dt,s));return{c(){s=n("card"),e=n("name"),v=n("span");for(let t=0;t<ut.length;t+=1)ut[t].c();p=l(),m=n("content");for(let t=0;t<ft.length;t+=1)ft[t].c();E=l(),w=n("total"),R=a(nt),b=l(),B=n("scores"),O=n("score"),k=n("bar"),x=a(" Battleyness\n          "),C=a(at),j=l(),N=n("score"),S=n("bar"),L=a(" Scandal\n          "),T=a(rt),W=l(),I=n("score"),D=n("bar"),_=a(" Subjectivity\n          "),z=a(ot),F=l(),K=n("score"),H=n("bar"),M=a(" Longevity\n          "),G=a(ct),Z=l(),Y=n("score"),q=n("bar"),J=a(" Dynasty\n          "),Q=a(it),this.h()},l(t){s=o(t,"CARD",{class:!0});var l=c(s);e=o(l,"NAME",{class:!0});var n=c(e);v=o(n,"SPAN",{class:!0});var a=c(v);for(let t=0;t<ut.length;t+=1)ut[t].l(a);a.forEach(h),n.forEach(h),p=r(l),m=o(l,"CONTENT",{class:!0});var u=c(m);for(let t=0;t<ft.length;t+=1)ft[t].l(u);E=r(u),w=o(u,"TOTAL",{class:!0});var d=c(w);R=i(d,nt),d.forEach(h),b=r(u),B=o(u,"SCORES",{class:!0});var f=c(B);O=o(f,"SCORE",{class:!0});var g=c(O);k=o(g,"BAR",{style:!0,class:!0});var y=c(k);x=i(y," Battleyness\n          "),C=i(y,at),y.forEach(h),g.forEach(h),j=r(f),N=o(f,"SCORE",{class:!0});var $=c(N);S=o($,"BAR",{style:!0,class:!0});var A=c(S);L=i(A," Scandal\n          "),T=i(A,rt),A.forEach(h),$.forEach(h),W=r(f),I=o(f,"SCORE",{class:!0});var P=c(I);D=o(P,"BAR",{style:!0,class:!0});var U=c(D);_=i(U," Subjectivity\n          "),z=i(U,ot),U.forEach(h),P.forEach(h),F=r(f),K=o(f,"SCORE",{class:!0});var V=c(K);H=o(V,"BAR",{style:!0,class:!0});var X=c(H);M=i(X," Longevity\n          "),G=i(X,ct),X.forEach(h),V.forEach(h),Z=r(f),Y=o(f,"SCORE",{class:!0});var tt=c(Y);q=o(tt,"BAR",{style:!0,class:!0});var st=c(q);J=i(st," Dynasty\n          "),Q=i(st,it),st.forEach(h),tt.forEach(h),f.forEach(h),u.forEach(h),l.forEach(h),this.h()},h(){u(v,"class","svelte-1cd4l95"),u(e,"class","svelte-1cd4l95"),u(w,"class","svelte-1cd4l95"),u(k,"style",A=`width: ${100*t[0].battleyness/20}%`),u(k,"class","battleyness svelte-1cd4l95"),u(O,"class","svelte-1cd4l95"),u(S,"style",P=`width: ${100*t[0].scandal/20}%`),u(S,"class","scandal svelte-1cd4l95"),u(N,"class","svelte-1cd4l95"),u(D,"style",U=`width: ${100*t[0].subjectivity/20}%`),u(D,"class","subjectivity svelte-1cd4l95"),u(I,"class","svelte-1cd4l95"),u(H,"style",V=`width: ${100*t[0].longevity/20}%`),u(H,"class","longevity svelte-1cd4l95"),u(K,"class","svelte-1cd4l95"),u(q,"style",st=`width: ${100*t[0].dynasty/20}%`),u(q,"class","dynasty svelte-1cd4l95"),u(Y,"class","svelte-1cd4l95"),u(B,"class","svelte-1cd4l95"),u(m,"class","svelte-1cd4l95"),u(s,"class","svelte-1cd4l95")},m(t,l){d(t,s,l),f(s,e),f(e,v);for(let t=0;t<ut.length;t+=1)ut[t].m(v,null);f(s,p),f(s,m);for(let t=0;t<ft.length;t+=1)ft[t].m(m,null);f(m,E),f(m,w),f(w,R),f(m,b),f(m,B),f(B,O),f(O,k),f(k,x),f(k,C),f(B,j),f(B,N),f(N,S),f(S,L),f(S,T),f(B,W),f(B,I),f(I,D),f(D,_),f(D,z),f(B,F),f(B,K),f(K,H),f(H,M),f(H,G),f(B,Z),f(B,Y),f(Y,q),f(q,J),f(q,Q)},p(t,[s]){if(1&s){let e;for(ht=t[0].name,e=0;e<ht.length;e+=1){const l=tt(t,ht,e);ut[e]?ut[e].p(l,s):(ut[e]=et(l),ut[e].c(),ut[e].m(v,null))}for(;e<ut.length;e+=1)ut[e].d(1);ut.length=ht.length}if(1&s){let e;for(dt=t[0].name,e=0;e<dt.length;e+=1){const l=X(t,dt,e);ft[e]?ft[e].p(l,s):(ft[e]=lt(l),ft[e].c(),ft[e].m(m,E))}for(;e<ft.length;e+=1)ft[e].d(1);ft.length=dt.length}1&s&&nt!==(nt=t[0].total+"")&&g(R,nt),1&s&&at!==(at=t[0].battleyness+"")&&g(C,at),1&s&&A!==(A=`width: ${100*t[0].battleyness/20}%`)&&u(k,"style",A),1&s&&rt!==(rt=t[0].scandal+"")&&g(T,rt),1&s&&P!==(P=`width: ${100*t[0].scandal/20}%`)&&u(S,"style",P),1&s&&ot!==(ot=t[0].subjectivity+"")&&g(z,ot),1&s&&U!==(U=`width: ${100*t[0].subjectivity/20}%`)&&u(D,"style",U),1&s&&ct!==(ct=t[0].longevity+"")&&g(G,ct),1&s&&V!==(V=`width: ${100*t[0].longevity/20}%`)&&u(H,"style",V),1&s&&it!==(it=t[0].dynasty+"")&&g(Q,it),1&s&&st!==(st=`width: ${100*t[0].dynasty/20}%`)&&u(q,"style",st)},i:y,o:y,d(t){t&&h(s),$(ut,t),$(ft,t)}}}function at(t,s,e){let{rating:l}=s;return t.$$set=t=>{"rating"in t&&e(0,l=t.rating)},[l]}class rt extends t{constructor(t){super(),s(this,t,at,nt,e,{rating:0})}}function ot(t,s,e){const l=t.slice();return l[5]=s[e],l[7]=e,l}function ct(t){let s,e,l;return{c(){s=n("badge"),e=n("img"),this.h()},l(t){s=o(t,"BADGE",{class:!0});var l=c(s);e=o(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),this.h()},h(){e.src!==(l="crown.svg")&&u(e,"src","crown.svg"),u(e,"alt","Rex Factor winner"),u(e,"class","svelte-19js6rg"),u(s,"class","svelte-19js6rg")},m(t,l){d(t,s,l),f(s,e)},d(t){t&&h(s)}}}function it(t){let s,e;return{c(){s=n("span"),e=a("& "),this.h()},l(t){s=o(t,"SPAN",{class:!0});var l=c(s);e=i(l,"& "),l.forEach(h),this.h()},h(){u(s,"class","svelte-19js6rg")},m(t,l){d(t,s,l),f(s,e)},d(t){t&&h(s)}}}function ht(t){let s,e,v,y,$,m=t[5]+"",E=t[0].rexFactor[t[7]]&&ct(),w=t[7]!==t[0].name.length-1&&it();return{c(){s=n("span"),e=a(m),v=l(),E&&E.c(),y=l(),w&&w.c(),$=p(),this.h()},l(t){s=o(t,"SPAN",{class:!0});var l=c(s);e=i(l,m),v=r(l),E&&E.l(l),l.forEach(h),y=r(t),w&&w.l(t),$=p(),this.h()},h(){u(s,"class","svelte-19js6rg")},m(t,l){d(t,s,l),f(s,e),f(s,v),E&&E.m(s,null),d(t,y,l),w&&w.m(t,l),d(t,$,l)},p(t,l){1&l&&m!==(m=t[5]+"")&&g(e,m),t[0].rexFactor[t[7]]?E||(E=ct(),E.c(),E.m(s,null)):E&&(E.d(1),E=null),t[7]!==t[0].name.length-1?w||(w=it(),w.c(),w.m($.parentNode,$)):w&&(w.d(1),w=null)},d(t){t&&h(s),E&&E.d(),t&&h(y),w&&w.d(t),t&&h($)}}}function ut(t){let s,e,v,y,p,k,x,C,A,j=t[0].total+"",N=t[0].name,S=[];for(let s=0;s<N.length;s+=1)S[s]=ht(ot(t,N,s));const L=t[3].default,T=m(L,t,t[2],null);return{c(){s=n("button"),e=n("total"),v=a(j),y=l(),p=n("name");for(let t=0;t<S.length;t+=1)S[t].c();k=l(),T&&T.c(),this.h()},l(t){s=o(t,"BUTTON",{tabindex:!0,class:!0});var l=c(s);e=o(l,"TOTAL",{class:!0});var n=c(e);v=i(n,j),n.forEach(h),y=r(l),p=o(l,"NAME",{class:!0});var a=c(p);for(let t=0;t<S.length;t+=1)S[t].l(a);a.forEach(h),k=r(l),T&&T.l(l),l.forEach(h),this.h()},h(){u(e,"class","svelte-19js6rg"),u(p,"class","svelte-19js6rg"),u(s,"tabindex","0"),u(s,"class","svelte-19js6rg")},m(l,n){d(l,s,n),f(s,e),f(e,v),f(s,y),f(s,p);for(let t=0;t<S.length;t+=1)S[t].m(p,null);f(s,k),T&&T.m(s,null),x=!0,C||(A=E(s,"click",w(R(t[4]))),C=!0)},p(t,[s]){if((!x||1&s)&&j!==(j=t[0].total+"")&&g(v,j),1&s){let e;for(N=t[0].name,e=0;e<N.length;e+=1){const l=ot(t,N,e);S[e]?S[e].p(l,s):(S[e]=ht(l),S[e].c(),S[e].m(p,null))}for(;e<S.length;e+=1)S[e].d(1);S.length=N.length}T&&T.p&&4&s&&b(T,L,t,t[2],s,null,null)},i(t){x||(B(T,t),x=!0)},o(t){O(T,t),x=!1},d(t){t&&h(s),$(S,t),T&&T.d(t),C=!1,A()}}}function dt(t,s,e){let{$$slots:l={},$$scope:n}=s;const a=k();let{rating:r}=s;return t.$$set=t=>{"rating"in t&&e(0,r=t.rating),"$$scope"in t&&e(2,n=t.$$scope)},[r,a,n,l,()=>a("select",r)]}class ft extends t{constructor(t){super(),s(this,t,dt,ut,e,{rating:0})}}function gt(t){let s,e,g,v,$,p,m,E,w,R,b,B,O,k,C,A,j,N,S,L,T,P,W,I,D;return{c(){s=n("breakdown"),e=n("breakdown-row"),g=n("bar"),v=a(" "),p=l(),m=n("breakdown-row"),E=n("bar"),w=a(" "),b=l(),B=n("breakdown-row"),O=n("bar"),k=a(" "),A=l(),j=n("breakdown-row"),N=n("bar"),S=a(" "),T=l(),P=n("breakdown-row"),W=n("bar"),I=a(" "),this.h()},l(t){s=o(t,"BREAKDOWN",{class:!0});var l=c(s);e=o(l,"BREAKDOWN-ROW",{class:!0});var n=c(e);g=o(n,"BAR",{style:!0,class:!0});var a=c(g);v=i(a," "),a.forEach(h),n.forEach(h),p=r(l),m=o(l,"BREAKDOWN-ROW",{class:!0});var u=c(m);E=o(u,"BAR",{style:!0,class:!0});var d=c(E);w=i(d," "),d.forEach(h),u.forEach(h),b=r(l),B=o(l,"BREAKDOWN-ROW",{class:!0});var f=c(B);O=o(f,"BAR",{style:!0,class:!0});var y=c(O);k=i(y," "),y.forEach(h),f.forEach(h),A=r(l),j=o(l,"BREAKDOWN-ROW",{class:!0});var $=c(j);N=o($,"BAR",{style:!0,class:!0});var R=c(N);S=i(R," "),R.forEach(h),$.forEach(h),T=r(l),P=o(l,"BREAKDOWN-ROW",{class:!0});var x=c(P);W=o(x,"BAR",{style:!0,class:!0});var C=c(W);I=i(C," "),C.forEach(h),x.forEach(h),l.forEach(h),this.h()},h(){u(g,"style",$=`width: ${t[1]?100*t[0].battleyness/20:0}%`),u(g,"class","battleyness svelte-1h770x7"),x(e,"class","svelte-1h770x7"),u(E,"style",R=`width: ${t[1]?100*t[0].scandal/20:0}%`),u(E,"class","scandal svelte-1h770x7"),x(m,"class","svelte-1h770x7"),u(O,"style",C=`width: ${t[1]?100*t[0].subjectivity/20:0}%`),u(O,"class","subjectivity svelte-1h770x7"),x(B,"class","svelte-1h770x7"),u(N,"style",L=`width: ${t[1]?100*t[0].longevity/20:0}%`),u(N,"class","longevity svelte-1h770x7"),x(j,"class","svelte-1h770x7"),u(W,"style",D=`width: ${t[1]?100*t[0].dynasty/20:0}%`),u(W,"class","dynasty svelte-1h770x7"),x(P,"class","svelte-1h770x7"),u(s,"class","svelte-1h770x7")},m(t,l){d(t,s,l),f(s,e),f(e,g),f(g,v),f(s,p),f(s,m),f(m,E),f(E,w),f(s,b),f(s,B),f(B,O),f(O,k),f(s,A),f(s,j),f(j,N),f(N,S),f(s,T),f(s,P),f(P,W),f(W,I)},p(t,[s]){3&s&&$!==($=`width: ${t[1]?100*t[0].battleyness/20:0}%`)&&u(g,"style",$),3&s&&R!==(R=`width: ${t[1]?100*t[0].scandal/20:0}%`)&&u(E,"style",R),3&s&&C!==(C=`width: ${t[1]?100*t[0].subjectivity/20:0}%`)&&u(O,"style",C),3&s&&L!==(L=`width: ${t[1]?100*t[0].longevity/20:0}%`)&&u(N,"style",L),3&s&&D!==(D=`width: ${t[1]?100*t[0].dynasty/20:0}%`)&&u(W,"style",D)},i:y,o:y,d(t){t&&h(s)}}}function vt(t,s,e){let{rating:l}=s,n=!1;return C((()=>{n||setTimeout((()=>{e(1,n=!0)}),100)})),t.$$set=t=>{"rating"in t&&e(0,l=t.rating)},[l,n]}class yt extends t{constructor(t){super(),s(this,t,vt,gt,e,{rating:0})}}function $t(t){let s,e,l,r,v,$,p,m=t[0][t[1]]+"";return{c(){s=n("highlight-bar"),e=n("bar-background"),l=n("bar"),r=a(" "),v=a(m),this.h()},l(t){s=o(t,"HIGHLIGHT-BAR",{class:!0});var n=c(s);e=o(n,"BAR-BACKGROUND",{class:!0});var a=c(e);l=o(a,"BAR",{style:!0,class:!0});var u=c(l);r=i(u," "),v=i(u,m),u.forEach(h),a.forEach(h),n.forEach(h),this.h()},h(){u(l,"style",$=`width: ${t[3]?100*t[0][t[1]]/t[2]:0}%;`),u(l,"class",p=A(t[1])+" svelte-h6msbg"),x(e,"class","svelte-h6msbg"),x(s,"class","svelte-h6msbg")},m(t,n){d(t,s,n),f(s,e),f(e,l),f(l,r),f(l,v)},p(t,[s]){3&s&&m!==(m=t[0][t[1]]+"")&&g(v,m),15&s&&$!==($=`width: ${t[3]?100*t[0][t[1]]/t[2]:0}%;`)&&u(l,"style",$),2&s&&p!==(p=A(t[1])+" svelte-h6msbg")&&u(l,"class",p)},i:y,o:y,d(t){t&&h(s)}}}function pt(t,s,e){let l,{rating:n}=s,{scoreHighlight:a}=s;j((()=>{e(2,l="total"===a?100:20)}));let r=!1;return C((()=>{r||setTimeout((()=>{e(3,r=!0)}),100)})),t.$$set=t=>{"rating"in t&&e(0,n=t.rating),"scoreHighlight"in t&&e(1,a=t.scoreHighlight)},[n,a,l,r]}class mt extends t{constructor(t){super(),s(this,t,pt,$t,e,{rating:0,scoreHighlight:1})}}function Et(t,s,e){const l=t.slice();return l[20]=s[e],l}function wt(t,s,e){const l=t.slice();return l[23]=s[e],l}function Rt(t){let s,e,l;return e=new mt({props:{rating:t[20],scoreHighlight:t[3]}}),{c(){s=n("score-summary"),N(e.$$.fragment)},l(t){s=o(t,"SCORE-SUMMARY",{});var l=c(s);S(e.$$.fragment,l),l.forEach(h)},m(t,n){d(t,s,n),L(e,s,null),l=!0},p(t,s){const l={};4&s&&(l.rating=t[20]),8&s&&(l.scoreHighlight=t[3]),e.$set(l)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){t&&h(s),T(e)}}}function bt(t){let s,e,a,i,u;a=new yt({props:{rating:t[20]}});let g=t[4]&&Rt(t);return{c(){s=n("ruler-score-details"),e=n("ruler-bars"),N(a.$$.fragment),i=l(),g&&g.c(),this.h()},l(t){s=o(t,"RULER-SCORE-DETAILS",{class:!0});var l=c(s);e=o(l,"RULER-BARS",{style:!0,class:!0});var n=c(e);S(a.$$.fragment,n),n.forEach(h),i=r(l),g&&g.l(l),l.forEach(h),this.h()},h(){v(e,"--display",t[4]?"none":"flex"),x(e,"class","svelte-ho8jzd"),x(s,"class","svelte-ho8jzd")},m(t,l){d(t,s,l),f(s,e),L(a,e,null),f(s,i),g&&g.m(s,null),u=!0},p(t,l){const n={};4&l&&(n.rating=t[20]),a.$set(n),(!u||16&l)&&v(e,"--display",t[4]?"none":"flex"),t[4]?g?(g.p(t,l),16&l&&B(g,1)):(g=Rt(t),g.c(),B(g,1),g.m(s,null)):g&&(P(),O(g,1,1,(()=>{g=null})),W())},i(t){u||(B(a.$$.fragment,t),B(g),u=!0)},o(t){O(a.$$.fragment,t),O(g),u=!1},d(t){t&&h(s),T(a),g&&g.d()}}}function Bt(t){let s,e,l=t[20].linkedRatings,n=[];for(let s=0;s<l.length;s+=1)n[s]=kt(wt(t,l,s));const a=t=>O(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=p()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);s=p()},m(t,l){for(let s=0;s<n.length;s+=1)n[s].m(t,l);d(t,s,l),e=!0},p(t,e){if(262&e){let r;for(l=t[20].linkedRatings,r=0;r<l.length;r+=1){const a=wt(t,l,r);n[r]?(n[r].p(a,e),B(n[r],1)):(n[r]=kt(a),n[r].c(),B(n[r],1),n[r].m(s.parentNode,s))}for(P(),r=l.length;r<n.length;r+=1)a(r);W()}},i(t){if(!e){for(let t=0;t<l.length;t+=1)B(n[t]);e=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)O(n[t]);e=!1},d(t){$(n,t),t&&h(s)}}}function Ot(t){let s,e,l;return e=new yt({props:{rating:t[23]}}),{c(){s=n("ruler-bars"),N(e.$$.fragment),this.h()},l(t){s=o(t,"RULER-BARS",{style:!0,class:!0});var l=c(s);S(e.$$.fragment,l),l.forEach(h),this.h()},h(){v(s,"flex","2"),x(s,"class","svelte-ho8jzd")},m(t,n){d(t,s,n),L(e,s,null),l=!0},p(t,s){const l={};4&s&&(l.rating=t[23]),e.$set(l)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){t&&h(s),T(e)}}}function kt(t){let s,e,v,y,$,p,m,E,w;return m=new ft({props:{rating:t[23],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),m.$on("select",(function(){return t[15](t[23])})),{c(){s=n("linked-ruler"),e=n("linked-to"),v=n("span"),y=a(t[1]),$=l(),p=n("ruler-title"),N(m.$$.fragment),E=l(),this.h()},l(l){s=o(l,"LINKED-RULER",{class:!0});var n=c(s);e=o(n,"LINKED-TO",{class:!0});var a=c(e);v=o(a,"SPAN",{class:!0});var u=c(v);y=i(u,t[1]),u.forEach(h),$=r(a),p=o(a,"RULER-TITLE",{class:!0});var d=c(p);S(m.$$.fragment,d),d.forEach(h),a.forEach(h),E=r(n),n.forEach(h),this.h()},h(){u(v,"class","svelte-ho8jzd"),x(p,"class","svelte-ho8jzd"),x(e,"class","svelte-ho8jzd"),x(s,"class","svelte-ho8jzd")},m(t,l){d(t,s,l),f(s,e),f(e,v),f(v,y),f(e,$),f(e,p),L(m,p,null),f(s,E),w=!0},p(s,e){t=s,(!w||2&e)&&g(y,t[1]);const l={};4&e&&(l.rating=t[23]),67108868&e&&(l.$$scope={dirty:e,ctx:t}),m.$set(l)},i(t){w||(B(m.$$.fragment,t),w=!0)},o(t){O(m.$$.fragment,t),w=!1},d(t){t&&h(s),T(m)}}}function xt(t){let s,e;return{c(){s=n("linked-ruler"),e=n("div"),this.h()},l(t){s=o(t,"LINKED-RULER",{class:!0});var l=c(s);e=o(l,"DIV",{style:!0,class:!0}),c(e).forEach(h),l.forEach(h),this.h()},h(){v(e,"grid-row-end","span "+(t[20].linkedRatings.length||1)),u(e,"class","svelte-ho8jzd"),x(s,"class","svelte-ho8jzd")},m(t,l){d(t,s,l),f(s,e)},p(t,s){4&s&&v(e,"grid-row-end","span "+(t[20].linkedRatings.length||1))},d(t){t&&h(s)}}}function Ct(t){let s,e,a,i,g,v,y,$;a=new ft({props:{rating:t[20],$$slots:{default:[bt]},$$scope:{ctx:t}}}),a.$on("select",(function(){return t[14](t[20])}));let p=t[5]&&0!==t[20].linkedRatings.length&&Bt(t),m=(!t[5]||0===t[20].linkedRatings.length)&&xt(t);return{c(){s=n("ruler"),e=n("ruler-title"),N(a.$$.fragment),g=l(),p&&p.c(),v=l(),m&&m.c(),y=l(),this.h()},l(t){s=o(t,"RULER",{class:!0});var l=c(s);e=o(l,"RULER-TITLE",{style:!0,class:!0});var n=c(e);S(a.$$.fragment,n),n.forEach(h),g=r(l),p&&p.l(l),v=r(l),m&&m.l(l),y=r(l),l.forEach(h),this.h()},h(){x(e,"style",i=`\n        --row-span: ${t[20].linkedRatings.length};\n        --col-span: ${t[5]?1:2};`),x(e,"class","svelte-ho8jzd"),u(s,"class","svelte-ho8jzd")},m(t,l){d(t,s,l),f(s,e),L(a,e,null),f(s,g),p&&p.m(s,null),f(s,v),m&&m.m(s,null),f(s,y),$=!0},p(l,n){t=l;const r={};4&n&&(r.rating=t[20]),67108892&n&&(r.$$scope={dirty:n,ctx:t}),a.$set(r),(!$||36&n&&i!==(i=`\n        --row-span: ${t[20].linkedRatings.length};\n        --col-span: ${t[5]?1:2};`))&&x(e,"style",i),t[5]&&0!==t[20].linkedRatings.length?p?(p.p(t,n),36&n&&B(p,1)):(p=Bt(t),p.c(),B(p,1),p.m(s,v)):p&&(P(),O(p,1,1,(()=>{p=null})),W()),t[5]&&0!==t[20].linkedRatings.length?m&&(m.d(1),m=null):m?m.p(t,n):(m=xt(t),m.c(),m.m(s,y))},i(t){$||(B(a.$$.fragment,t),B(p),$=!0)},o(t){O(a.$$.fragment,t),O(p),$=!1},d(t){t&&h(s),T(a),p&&p.d(),m&&m.d()}}}function At(t){let s,e,v,y,p,m,w,b,k,x,C,A,j,N,S,L,T,U,F,K,H,M,G,V,Z,Y,q,J,Q,X,tt,st,et,lt,nt,at,rt,ot,ct,it=t[2],ht=[];for(let s=0;s<it.length;s+=1)ht[s]=Ct(Et(t,it,s));const ut=t=>O(ht[t],1,1,(()=>{ht[t]=null}));return{c(){s=n("form"),e=n("field"),v=n("label"),y=a("Sort"),p=l(),m=n("select"),w=n("option"),b=a("Chronological"),k=n("option"),x=a("Total score"),C=n("option"),A=a("Battleyness"),j=n("option"),N=a("Scandal"),S=n("option"),L=a("Subjectivity"),T=n("option"),U=a("Longevity"),F=n("option"),K=a("Dynasty"),H=l(),M=n("field"),G=n("label"),V=a("Show\n      "),Z=a(t[0]),Y=a("?\n      "),q=n("input"),J=l(),Q=n("field"),X=n("label"),tt=a("Filter by name"),st=l(),et=n("input"),lt=l(),nt=n("rulers");for(let t=0;t<ht.length;t+=1)ht[t].c();this.h()},l(l){s=o(l,"FORM",{class:!0});var n=c(s);e=o(n,"FIELD",{class:!0});var a=c(e);v=o(a,"LABEL",{for:!0});var u=c(v);y=i(u,"Sort"),u.forEach(h),p=r(a),m=o(a,"SELECT",{id:!0});var d=c(m);w=o(d,"OPTION",{value:!0});var f=c(w);b=i(f,"Chronological"),f.forEach(h),k=o(d,"OPTION",{value:!0});var g=c(k);x=i(g,"Total score"),g.forEach(h),C=o(d,"OPTION",{value:!0});var $=c(C);A=i($,"Battleyness"),$.forEach(h),j=o(d,"OPTION",{value:!0});var E=c(j);N=i(E,"Scandal"),E.forEach(h),S=o(d,"OPTION",{value:!0});var R=c(S);L=i(R,"Subjectivity"),R.forEach(h),T=o(d,"OPTION",{value:!0});var B=c(T);U=i(B,"Longevity"),B.forEach(h),F=o(d,"OPTION",{value:!0});var O=c(F);K=i(O,"Dynasty"),O.forEach(h),d.forEach(h),a.forEach(h),H=r(n),M=o(n,"FIELD",{class:!0});var P=c(M);G=o(P,"LABEL",{for:!0});var W=c(G);V=i(W,"Show\n      "),Z=i(W,t[0]),Y=i(W,"?\n      "),q=o(W,"INPUT",{type:!0,id:!0}),W.forEach(h),P.forEach(h),J=r(n),Q=o(n,"FIELD",{class:!0});var I=c(Q);X=o(I,"LABEL",{for:!0});var D=c(X);tt=i(D,"Filter by name"),D.forEach(h),st=r(I),et=o(I,"INPUT",{type:!0,id:!0,class:!0}),I.forEach(h),n.forEach(h),lt=r(l),nt=o(l,"RULERS",{style:!0,class:!0});var _=c(nt);for(let t=0;t<ht.length;t+=1)ht[t].l(_);_.forEach(h),this.h()},h(){u(v,"for","sort-field"),w.__value="index",w.value=w.__value,k.__value="total",k.value=k.__value,C.__value="battleyness",C.value=C.__value,j.__value="scandal",j.value=j.__value,S.__value="subjectivity",S.value=S.__value,T.__value="longevity",T.value=T.__value,F.__value="dynasty",F.value=F.__value,u(m,"id","sort-field"),void 0===t[3]&&I((()=>t[11].call(m))),u(e,"class","svelte-ho8jzd"),u(q,"type","checkbox"),u(q,"id","show-linked-ratings"),u(G,"for","show-linked-ratings"),u(M,"class","svelte-ho8jzd"),u(X,"for","name-filter"),u(et,"type","text"),u(et,"id","name-filter"),u(et,"class","svelte-ho8jzd"),u(Q,"class","svelte-ho8jzd"),u(s,"class","svelte-ho8jzd"),u(nt,"style",at="grid-template-columns: 1fr auto"),u(nt,"class","svelte-ho8jzd")},m(l,n){d(l,s,n),f(s,e),f(e,v),f(v,y),f(e,p),f(e,m),f(m,w),f(w,b),f(m,k),f(k,x),f(m,C),f(C,A),f(m,j),f(j,N),f(m,S),f(S,L),f(m,T),f(T,U),f(m,F),f(F,K),D(m,t[3]),f(s,H),f(s,M),f(M,G),f(G,V),f(G,Z),f(G,Y),f(G,q),q.checked=t[5],f(s,J),f(s,Q),f(Q,X),f(X,tt),f(Q,st),f(Q,et),_(et,t[6]),d(l,lt,n),d(l,nt,n);for(let t=0;t<ht.length;t+=1)ht[t].m(nt,null);t[16](nt),rt=!0,ot||(ct=[E(m,"change",t[11]),E(q,"change",t[12]),E(et,"input",t[13]),E(et,"select",R(t[10]))],ot=!0)},p(t,[s]){if(8&s&&D(m,t[3]),(!rt||1&s)&&g(Z,t[0]),32&s&&(q.checked=t[5]),64&s&&et.value!==t[6]&&_(et,t[6]),318&s){let e;for(it=t[2],e=0;e<it.length;e+=1){const l=Et(t,it,e);ht[e]?(ht[e].p(l,s),B(ht[e],1)):(ht[e]=Ct(l),ht[e].c(),B(ht[e],1),ht[e].m(nt,null))}for(P(),e=it.length;e<ht.length;e+=1)ut(e);W()}},i(t){if(!rt){for(let t=0;t<it.length;t+=1)B(ht[t]);rt=!0}},o(t){ht=ht.filter(Boolean);for(let t=0;t<ht.length;t+=1)O(ht[t]);rt=!1},d(e){e&&h(s),e&&h(lt),e&&h(nt),$(ht,e),t[16](null),ot=!1,z(ct)}}}function jt(t,s,e){let{scores:l=[]}=s,{linkedRatingName:n="linked ratings"}=s,{linkSymbol:a="⚭"}=s,r=l,o=null,c=!1,i=!1,h=null,u=null;const d=U("simple-modal");j((()=>{e(4,c=o&&"index"!==o&&"total"!==o),e(2,r=l),g(),v()}));const f=t=>{d.open(rt,{rating:t},{styleWindow:{width:"fit-content",background:"rgba(0,0,0,0)"},styleContent:{padding:0}})},g=()=>{if(!h)return void e(2,r=l||[]);const t=h.toLocaleLowerCase();e(2,r=l.filter((s=>s.name.join(" ").toLocaleLowerCase().includes(t))))},v=()=>{o&&e(2,r=r.sort(((t,s)=>t[o]===s[o]?0:"index"===o?t[o]>s[o]?1:-1:t[o]>s[o]?-1:1)))};return t.$$set=t=>{"scores"in t&&e(9,l=t.scores),"linkedRatingName"in t&&e(0,n=t.linkedRatingName),"linkSymbol"in t&&e(1,a=t.linkSymbol)},[n,a,r,o,c,i,h,u,f,l,function(s){F(t,s)},function(){o=K(this),e(3,o)},function(){i=this.checked,e(5,i)},function(){h=this.value,e(6,h)},t=>f(t),t=>f(t),function(t){H[t?"unshift":"push"]((()=>{u=t,e(7,u)}))}]}class Nt extends t{constructor(t){super(),s(this,t,jt,At,e,{scores:9,linkedRatingName:0,linkSymbol:1})}}function St(t){let s,e,a,i,g,v,y,$,p,m,w,R=t[0].closeButton&&Lt(t);const b=[t[2]];var k=t[1];function x(t){let s={};for(let t=0;t<b.length;t+=1)s=Y(s,b[t]);return{props:s}}return k&&(v=new k(x())),{c(){s=n("div"),e=n("div"),a=n("div"),R&&R.c(),i=l(),g=n("div"),v&&N(v.$$.fragment),this.h()},l(t){s=o(t,"DIV",{class:!0,style:!0});var l=c(s);e=o(l,"DIV",{class:!0});var n=c(e);a=o(n,"DIV",{class:!0,role:!0,"aria-modal":!0,style:!0});var u=c(a);R&&R.l(u),i=r(u),g=o(u,"DIV",{class:!0,style:!0});var d=c(g);v&&S(v.$$.fragment,d),d.forEach(h),u.forEach(h),n.forEach(h),l.forEach(h),this.h()},h(){u(g,"class","content svelte-fnsfcv"),u(g,"style",t[12]),u(a,"class","window svelte-fnsfcv"),u(a,"role","dialog"),u(a,"aria-modal","true"),u(a,"style",t[11]),u(e,"class","window-wrap svelte-fnsfcv"),u(s,"class","bg svelte-fnsfcv"),u(s,"style",t[10])},m(l,n){d(l,s,n),f(s,e),f(e,a),R&&R.m(a,null),f(a,i),f(a,g),v&&L(v,g,null),t[35](a),t[36](e),t[37](s),p=!0,m||(w=[E(a,"introstart",(function(){M(t[6])&&t[6].apply(this,arguments)})),E(a,"outrostart",(function(){M(t[7])&&t[7].apply(this,arguments)})),E(a,"introend",(function(){M(t[8])&&t[8].apply(this,arguments)})),E(a,"outroend",(function(){M(t[9])&&t[9].apply(this,arguments)})),E(s,"click",t[19])],m=!0)},p(e,l){(t=e)[0].closeButton?R?(R.p(t,l),1&l[0]&&B(R,1)):(R=Lt(t),R.c(),B(R,1),R.m(a,i)):R&&(P(),O(R,1,1,(()=>{R=null})),W());const n=4&l[0]?G(b,[V(t[2])]):{};if(k!==(k=t[1])){if(v){P();const t=v;O(t.$$.fragment,1,0,(()=>{T(t,1)})),W()}k?(v=new k(x()),N(v.$$.fragment),B(v.$$.fragment,1),L(v,g,null)):v=null}else k&&v.$set(n);(!p||4096&l[0])&&u(g,"style",t[12]),(!p||2048&l[0])&&u(a,"style",t[11]),(!p||1024&l[0])&&u(s,"style",t[10])},i(e){p||(B(R),v&&B(v.$$.fragment,e),I((()=>{y||(y=Z(a,t[15],t[0].transitionWindowProps,!0)),y.run(1)})),I((()=>{$||($=Z(s,t[14],t[0].transitionBgProps,!0)),$.run(1)})),p=!0)},o(e){O(R),v&&O(v.$$.fragment,e),y||(y=Z(a,t[15],t[0].transitionWindowProps,!1)),y.run(0),$||($=Z(s,t[14],t[0].transitionBgProps,!1)),$.run(0),p=!1},d(e){e&&h(s),R&&R.d(),v&&T(v),t[35](null),e&&y&&y.end(),t[36](null),t[37](null),e&&$&&$.end(),m=!1,z(w)}}}function Lt(t){let s,e,l,n,a;const r=[Pt,Tt],o=[];function c(t,e){return 1&e[0]&&(s=!!t[16](t[0].closeButton)),s?0:1}return e=c(t,[-1]),l=o[e]=r[e](t),{c(){l.c(),n=p()},l(t){l.l(t),n=p()},m(t,s){o[e].m(t,s),d(t,n,s),a=!0},p(t,s){let a=e;e=c(t,s),e===a?o[e].p(t,s):(P(),O(o[a],1,1,(()=>{o[a]=null})),W(),l=o[e],l?l.p(t,s):(l=o[e]=r[e](t),l.c()),B(l,1),l.m(n.parentNode,n))},i(t){a||(B(l),a=!0)},o(t){O(l),a=!1},d(t){o[e].d(t),t&&h(n)}}}function Tt(t){let s,e,l;return{c(){s=n("button"),this.h()},l(t){s=o(t,"BUTTON",{class:!0,style:!0}),c(s).forEach(h),this.h()},h(){u(s,"class","close svelte-fnsfcv"),u(s,"style",t[13])},m(n,a){d(n,s,a),e||(l=E(s,"click",t[17]),e=!0)},p(t,e){8192&e[0]&&u(s,"style",t[13])},i:y,o:y,d(t){t&&h(s),e=!1,l()}}}function Pt(t){let s,e,l;var n=t[0].closeButton;function a(t){return{props:{onClose:t[17]}}}return n&&(s=new n(a(t))),{c(){s&&N(s.$$.fragment),e=p()},l(t){s&&S(s.$$.fragment,t),e=p()},m(t,n){s&&L(s,t,n),d(t,e,n),l=!0},p(t,l){if(n!==(n=t[0].closeButton)){if(s){P();const t=s;O(t.$$.fragment,1,0,(()=>{T(t,1)})),W()}n?(s=new n(a(t)),N(s.$$.fragment),B(s.$$.fragment,1),L(s,e.parentNode,e)):s=null}},i(t){l||(s&&B(s.$$.fragment,t),l=!0)},o(t){s&&O(s.$$.fragment,t),l=!1},d(t){t&&h(e),s&&T(s,t)}}}function Wt(t){let s,e,n,a,o=t[1]&&St(t);const c=t[34].default,i=m(c,t,t[33],null);return{c(){o&&o.c(),s=l(),i&&i.c()},l(t){o&&o.l(t),s=r(t),i&&i.l(t)},m(l,r){o&&o.m(l,r),d(l,s,r),i&&i.m(l,r),e=!0,n||(a=E(window,"keydown",t[18]),n=!0)},p(t,e){t[1]?o?(o.p(t,e),2&e[0]&&B(o,1)):(o=St(t),o.c(),B(o,1),o.m(s.parentNode,s)):o&&(P(),O(o,1,1,(()=>{o=null})),W()),i&&i.p&&4&e[1]&&b(i,c,t,t[33],e,null,null)},i(t){e||(B(o),B(i,t),e=!0)},o(t){O(o),O(i,t),e=!1},d(t){o&&o.d(t),t&&h(s),i&&i.d(t),n=!1,a()}}}function It(t,s,e){let{$$slots:l={},$$scope:n}=s;const a=q,r=J;let{key:o="simple-modal"}=s,{closeButton:c=!0}=s,{closeOnEsc:i=!0}=s,{closeOnOuterClick:h=!0}=s,{styleBg:u={top:0,left:0}}=s,{styleWindow:d={}}=s,{styleContent:f={}}=s,{styleCloseButton:g={}}=s,{setContext:v=a}=s,{transitionBg:y=Q}=s,{transitionBgProps:$={duration:250}}=s,{transitionWindow:p=y}=s,{transitionWindowProps:m=$}=s;const E={closeButton:c,closeOnEsc:i,closeOnOuterClick:h,styleBg:u,styleWindow:d,styleContent:f,styleCloseButton:g,transitionBg:y,transitionBgProps:$,transitionWindow:p,transitionWindowProps:m};let w,R,b,B={...E},O=null,k=null;const x=t=>Object.keys(t).reduce(((s,e)=>`${s}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(e)}: ${t[e]}`),""),C=()=>{};let A=C,j=C,N=C,S=C;const L=(t={})=>{e(7,j=t.onClose||j),e(9,S=t.onClosed||S),e(1,O=null),e(2,k=null)};let T,P,W,I,D,_;return v(o,{open:(t,s={},l={},n={})=>{e(1,O=t),e(2,k=s),e(0,B={...E,...l}),e(6,A=n.onOpen||C),e(7,j=n.onClose||C),e(8,N=n.onOpened||C),e(9,S=n.onClosed||C)},close:L}),t.$$set=t=>{"key"in t&&e(20,o=t.key),"closeButton"in t&&e(21,c=t.closeButton),"closeOnEsc"in t&&e(22,i=t.closeOnEsc),"closeOnOuterClick"in t&&e(23,h=t.closeOnOuterClick),"styleBg"in t&&e(24,u=t.styleBg),"styleWindow"in t&&e(25,d=t.styleWindow),"styleContent"in t&&e(26,f=t.styleContent),"styleCloseButton"in t&&e(27,g=t.styleCloseButton),"setContext"in t&&e(28,v=t.setContext),"transitionBg"in t&&e(29,y=t.transitionBg),"transitionBgProps"in t&&e(30,$=t.transitionBgProps),"transitionWindow"in t&&e(31,p=t.transitionWindow),"transitionWindowProps"in t&&e(32,m=t.transitionWindowProps),"$$scope"in t&&e(33,n=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty[0]&&e(10,T=x(B.styleBg)),1&t.$$.dirty[0]&&e(11,P=x(B.styleWindow)),1&t.$$.dirty[0]&&e(12,W=x(B.styleContent)),1&t.$$.dirty[0]&&e(13,I=x(B.styleCloseButton)),1&t.$$.dirty[0]&&e(14,D=B.transitionBg),1&t.$$.dirty[0]&&e(15,_=B.transitionWindow)},[B,O,k,w,R,b,A,j,N,S,T,P,W,I,D,_,t=>r&&r.isPrototypeOf&&r.isPrototypeOf(t),L,t=>{if(B.closeOnEsc&&O&&"Escape"===t.key&&(t.preventDefault(),L()),O&&"Tab"===t.key){const s=b.querySelectorAll("*"),e=Array.from(s).filter((t=>t.tabIndex>=0));let l=e.indexOf(document.activeElement);-1===l&&t.shiftKey&&(l=0),l+=e.length+(t.shiftKey?-1:1),l%=e.length,e[l].focus(),t.preventDefault()}},t=>{!B.closeOnOuterClick||t.target!==w&&t.target!==R||(t.preventDefault(),L())},o,c,i,h,u,d,f,g,v,y,$,p,m,n,l,function(t){H[t?"unshift":"push"]((()=>{b=t,e(5,b)}))},function(t){H[t?"unshift":"push"]((()=>{R=t,e(4,R)}))},function(t){H[t?"unshift":"push"]((()=>{w=t,e(3,w)}))}]}class Dt extends t{constructor(t){super(),s(this,t,It,Wt,e,{key:20,closeButton:21,closeOnEsc:22,closeOnOuterClick:23,styleBg:24,styleWindow:25,styleContent:26,styleCloseButton:27,setContext:28,transitionBg:29,transitionBgProps:30,transitionWindow:31,transitionWindowProps:32},[-1,-1])}}export{Dt as M,Nt as R};
