import{S as e,i as a,s as t,e as n,x as s,b as r,g as o,y as l,d as i,j as c,l as u,k as d,B as f,n as h,a as m,f as p,Y as v,F as y,K as g,o as $,L as E,t as x,D as b,_ as D,c as w,h as I,m as _,u as A,O as P,r as O,q as C,v as N,p as T,a2 as V,a0 as R,$ as S,W as L,X as k,H as B}from"./client.e5f1b3f4.js";import{s as F,a as j,f as z,B as M}from"./Banner.a926c161.js";import"./_common-styles.9c34c28b.js";import{C as U,M as Y}from"./Modal.9ef4f521.js";function H(e){let a,t,m;return{c(){a=n("div"),t=n("div"),m=s(e[0]),this.h()},l(n){a=r(n,"DIV",{class:!0});var s=o(a);t=r(s,"DIV",{});var c=o(t);m=l(c,e[0]),c.forEach(i),s.forEach(i),this.h()},h(){c(a,"class","popup svelte-1eosodn")},m(e,n){u(e,a,n),d(a,t),d(t,m)},p(e,[a]){1&a&&f(m,e[0])},i:h,o:h,d(e){e&&i(a)}}}function W(e,a,t){let{message:n}=a;return e.$$set=e=>{"message"in e&&t(0,n=e.message)},[n]}class q extends e{constructor(e){super(),a(this,e,W,H,t,{message:0})}}function G(e){let a,t,s,l;return t=new U({props:{rating:null}}),{c(){a=n("div"),w(t.$$.fragment)},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),n.forEach(i)},m(e,n){u(e,a,n),_(t,a,null),l=!0},p:h,i(e){l||(x(t.$$.fragment,e),A((()=>{s||(s=P(a,j,{x:-500,y:50,duration:300},!0)),s.run(1)})),l=!0)},o(e){$(t.$$.fragment,e),s||(s=P(a,j,{x:-500,y:50,duration:300},!1)),s.run(0),l=!1},d(e){e&&i(a),O(t),e&&s&&s.end()}}}function K(e){let a,t,s,l;return t=new U({props:{rating:e[3],clickableCategories:!e[9]&&"player"===e[10]}}),t.$on("select",e[16]),{c(){a=n("div"),w(t.$$.fragment)},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),n.forEach(i)},m(e,n){u(e,a,n),_(t,a,null),l=!0},p(e,a){const n={};8&a&&(n.rating=e[3]),1536&a&&(n.clickableCategories=!e[9]&&"player"===e[10]),t.$set(n)},i(e){l||(x(t.$$.fragment,e),A((()=>{s||(s=P(a,j,{x:-500,y:50,duration:300},!0)),s.run(1)})),l=!0)},o(e){$(t.$$.fragment,e),s||(s=P(a,j,{x:-500,y:50,duration:300},!1)),s.run(0),l=!1},d(e){e&&i(a),O(t),e&&s&&s.end()}}}function Q(e){let a;return{c(){a=n("div"),this.h()},l(e){a=r(e,"DIV",{class:!0}),o(a).forEach(i),this.h()},h(){c(a,"class","card-placeholder")},m(e,t){u(e,a,t)},p:h,i:h,o:h,d(e){e&&i(a)}}}function X(e){let a,t,s,l;return t=new U({props:{rating:null}}),{c(){a=n("div"),w(t.$$.fragment)},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),n.forEach(i)},m(e,n){u(e,a,n),_(t,a,null),l=!0},p:h,i(e){l||(x(t.$$.fragment,e),A((()=>{s||(s=P(a,j,{x:500,y:-50,duration:600},!0)),s.run(1)})),l=!0)},o(e){$(t.$$.fragment,e),s||(s=P(a,j,{x:500,y:-50,duration:600},!1)),s.run(0),l=!1},d(e){e&&i(a),O(t),e&&s&&s.end()}}}function J(e){let a,t,s,l;return t=new U({props:{rating:e[4],clickableCategories:!1}}),{c(){a=n("div"),w(t.$$.fragment)},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),n.forEach(i)},m(e,n){u(e,a,n),_(t,a,null),l=!0},p(e,a){const n={};16&a&&(n.rating=e[4]),t.$set(n)},i(e){l||(x(t.$$.fragment,e),A((()=>{s||(s=P(a,j,{x:500,y:-50,duration:600},!0)),s.run(1)})),l=!0)},o(e){$(t.$$.fragment,e),s||(s=P(a,j,{x:500,y:-50,duration:600},!1)),s.run(0),l=!1},d(e){e&&i(a),O(t),e&&s&&s.end()}}}function Z(e){let a;return{c(){a=n("div"),this.h()},l(e){a=r(e,"DIV",{class:!0}),o(a).forEach(i),this.h()},h(){c(a,"class","card-placeholder")},m(e,t){u(e,a,t)},p:h,i:h,o:h,d(e){e&&i(a)}}}function ee(e){let a,t,h,b,D,w,I,_,A,P,O,C,N,T,V,R,S,L,k,B,F,j,z,M,U,Y,H,W;const q=[Q,K,G],ee=[];function ae(e,a){return e[7]?0:e[3]?1:2}B=ae(e),F=ee[B]=q[B](e);const te=[Z,J,X],ne=[];function se(e,a){return e[8]?0:e[4]?1:2}return M=se(e),U=ne[M]=te[M](e),{c(){a=n("game-board"),t=n("button"),h=s("Exit"),b=m(),D=n("div"),w=n("div"),I=s("Please use landscape mode for the best game experience!"),_=m(),A=n("play-area"),P=n("div"),O=s(e[0]),C=m(),N=s(e[5]),T=m(),V=n("div"),R=s("Dunstan the Fun Sponge: "),S=s(e[6]),L=m(),k=n("card-area"),F.c(),j=m(),z=n("card-area"),U.c(),this.h()},l(n){a=r(n,"GAME-BOARD",{class:!0});var s=o(a);t=r(s,"BUTTON",{class:!0});var c=o(t);h=l(c,"Exit"),c.forEach(i),b=p(s),D=r(s,"DIV",{class:!0});var u=o(D);w=r(u,"DIV",{class:!0});var d=o(w);I=l(d,"Please use landscape mode for the best game experience!"),d.forEach(i),u.forEach(i),_=p(s),A=r(s,"PLAY-AREA",{class:!0});var f=o(A);P=r(f,"DIV",{class:!0});var m=o(P);O=l(m,e[0]),C=p(m),N=l(m,e[5]),m.forEach(i),T=p(f),V=r(f,"DIV",{class:!0});var v=o(V);R=l(v,"Dunstan the Fun Sponge: "),S=l(v,e[6]),v.forEach(i),L=p(f),k=r(f,"CARD-AREA",{});var y=o(k);F.l(y),y.forEach(i),j=p(f),z=r(f,"CARD-AREA",{});var g=o(z);U.l(g),g.forEach(i),f.forEach(i),s.forEach(i),this.h()},h(){c(t,"class","exit svelte-3zb7ld"),c(w,"class","svelte-3zb7ld"),c(D,"class","orientation-warning svelte-3zb7ld"),c(P,"class","score svelte-3zb7ld"),c(V,"class","score svelte-3zb7ld"),v(A,"class","svelte-3zb7ld"),v(a,"class","svelte-3zb7ld")},m(n,s){u(n,a,s),d(a,t),d(t,h),d(a,b),d(a,D),d(D,w),d(w,I),d(a,_),d(a,A),d(A,P),d(P,O),d(P,C),d(P,N),d(A,T),d(A,V),d(V,R),d(V,S),d(A,L),d(A,k),ee[B].m(k,null),d(A,j),d(A,z),ne[M].m(z,null),Y=!0,H||(W=y(t,"click",e[15]),H=!0)},p(e,[a]){(!Y||1&a)&&f(O,e[0]),(!Y||32&a)&&f(N,e[5]),(!Y||64&a)&&f(S,e[6]);let t=B;B=ae(e),B===t?ee[B].p(e,a):(g(),$(ee[t],1,1,(()=>{ee[t]=null})),E(),F=ee[B],F?F.p(e,a):(F=ee[B]=q[B](e),F.c()),x(F,1),F.m(k,null));let n=M;M=se(e),M===n?ne[M].p(e,a):(g(),$(ne[n],1,1,(()=>{ne[n]=null})),E(),U=ne[M],U?U.p(e,a):(U=ne[M]=te[M](e),U.c()),x(U,1),U.m(z,null))},i(e){Y||(x(F),x(U),Y=!0)},o(e){$(F),$(U),Y=!1},d(e){e&&i(a),ee[B].d(),ne[M].d(),H=!1,W()}}}function ae(e,a,t){var n=this&&this.__awaiter||function(e,a,t,n){return new(t||(t=Promise))((function(s,r){function o(e){try{i(n.next(e))}catch(e){r(e)}}function l(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var a;e.done?s(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,l)}i((n=n.apply(e,a||[])).next())}))};let{scores:s}=a,{playerName:r}=a,{difficulty:o="hard"}=a,l=!1;const i=b(),c=D("simple-modal"),u=e=>new Promise((a=>setTimeout(a,e)));let d,f,h,m,p,v,y,g,$=null,E=null;const x={styleBg:{background:"none",top:"1em",left:0},styleWindow:{background:"rgba(0,0,0,0.8)",width:"fit-content"},styleContent:{},transitionWindow:F,styleCloseButton:{display:"none",cursor:"pointer",borderRadius:"30%",boxShadow:"0 0 0 1px #00000033"}},w=()=>{const e=(e=>{const a=[...e];for(let e=a.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a})(s);d=e.splice(e.length/2),f=e,t(5,h=d.length),t(6,m=f.length),t(10,g="player"),t(7,p=!1),t(8,v=!1),t(9,y=!1)},I=({message:e,closeAfter:a=1e3})=>n(void 0,void 0,void 0,(function*(){if(l)return;const s=!y;t(9,y=!0);const r=()=>{c.close()};"undefined"!=typeof document&&document.addEventListener("keypress",r);const o=new Promise((a=>{t(2,c.isOpen=!0,c),c.open(q,{message:e},x,{onClose:()=>n(void 0,void 0,void 0,(function*(){t(2,c.isOpen=!1,c),a()}))})}));yield Promise.race([o,u(a)]),c.isClosed||c.close(),t(2,c.isOpen=!1,c),"undefined"!=typeof document&&document.removeEventListener("keypress",r),s&&t(9,y=!1)})),_=e=>n(void 0,void 0,void 0,(function*(){"computer"===e?(t(8,v=!0),yield u(1e3),t(4,E=f.shift()),t(8,v=!1)):(t(7,p=!0),yield u(1e3),t(3,$=d.shift()),t(7,p=!1))})),A=e=>n(void 0,void 0,void 0,(function*(){t(9,y=!0);const a=e.category;yield _("player"===g?"computer":"player"),yield u(1e3);return $[a]>=E[a]?(d.push(E),d.push($),t(10,g="player"),yield I({message:"YOU WIN!!",closeAfter:3e3})):(f.push(E),f.push($),t(10,g="computer"),yield I({message:"YOU LOSE!!",closeAfter:3e3})),t(5,h=d.length),t(6,m=f.length),yield n(void 0,void 0,void 0,(function*(){0===h?(yield I({message:"You have no cards left — Dunstan the Fun Sponge has won the game!!",closeAfter:3e3}),w()):0===m&&(yield I({message:"Dunstan the Fun Sponge has no cards left — you have won the game!!",closeAfter:3e3}),w())})),P()})),P=()=>n(void 0,void 0,void 0,(function*(){if(t(9,y=!0),(E||$)&&(t(8,v=!0),t(7,p=!0),yield u(1e3),t(8,v=!1),t(7,p=!1)),"computer"===g?t(3,$=null):t(4,E=null),yield _(g),yield u(1e3),yield I({message:"computer"===g?"It's Dunstan the Fun Sponges's turn…":"It's your turn. Pick a category…",closeAfter:2e3}),"player"===g)t(9,y=!1);else{const e=(()=>{const e=["battleyness","scandal","subjectivity","longevity","dynasty"];if("hard"===o)return e.sort(((e,a)=>E[e]>E[a]?-1:E[e]<E[a]?1:0))[0];if("easy"===o)return e[Math.floor(Math.random()*(e.length-1))]})();yield I({message:`Dunstan choses ${e}…`,closeAfter:1e3}),A({player:"computer",category:e})}}));w(),P();return e.$$set=e=>{"scores"in e&&t(13,s=e.scores),"playerName"in e&&t(0,r=e.playerName),"difficulty"in e&&t(14,o=e.difficulty)},[r,l,c,$,E,h,m,p,v,y,g,i,A,s,o,()=>{c.close(),t(1,l=!0),i("close")},e=>A({player:"player",category:e.detail})]}class te extends e{constructor(e){super(),a(this,e,ae,ee,t,{scores:13,playerName:0,difficulty:14})}}function ne(e){let a,t,s,l,c;return t=new te({props:{scores:e[0],playerName:e[3],difficulty:e[2]}}),t.$on("close",e[8]),{c(){a=n("div"),w(t.$$.fragment)},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),n.forEach(i)},m(e,n){u(e,a,n),_(t,a,null),c=!0},p(e,a){const n={};1&a&&(n.scores=e[0]),8&a&&(n.playerName=e[3]),4&a&&(n.difficulty=e[2]),t.$set(n)},i(e){c||(x(t.$$.fragment,e),A((()=>{l&&l.end(1),s||(s=N(a,z,{delay:300,duration:200})),s.start()})),c=!0)},o(e){$(t.$$.fragment,e),s&&s.invalidate(),l=T(a,z,{duration:200}),c=!1},d(e){e&&i(a),O(t),e&&l&&l.end()}}}function se(e){let a,t,f,h,v,g,E,b,D,P,C,V,F,j,U,Y,H,W,q,G,K,Q,X,J,Z,ee,ae,te,ne,se,re,oe,le,ie,ce,ue,de,fe,he,me,pe,ve;return t=new M({props:{title:"Rexplorer the Game",imagePath:"king-and-queen-playing-chess.jpg",imageAlt:"King and Queen playing chess"}}),{c(){a=n("div"),w(t.$$.fragment),f=m(),h=n("p"),v=s("In the Rexplorer game you will pit your wits against Dunstan the Fun\n          Sponge!"),g=m(),E=n("p"),b=s("Choose your name and card category to play the game."),D=m(),P=n("form"),C=n("label"),V=s("Player name"),F=m(),j=n("input"),U=m(),Y=n("label"),H=s("Card category"),W=m(),q=n("select"),G=n("option"),K=s("English monarchs"),Q=n("option"),X=s("English consorts"),J=n("option"),Z=s("English royal teams"),ee=m(),ae=n("label"),te=s("Difficulty"),ne=m(),se=n("select"),re=n("option"),oe=s("Easy"),le=n("option"),ie=s("Hard"),ce=m(),ue=n("button"),de=s("Play the game!"),this.h()},l(e){a=r(e,"DIV",{});var n=o(a);I(t.$$.fragment,n),f=p(n),h=r(n,"P",{});var s=o(h);v=l(s,"In the Rexplorer game you will pit your wits against Dunstan the Fun\n          Sponge!"),s.forEach(i),g=p(n),E=r(n,"P",{});var c=o(E);b=l(c,"Choose your name and card category to play the game."),c.forEach(i),D=p(n),P=r(n,"FORM",{class:!0});var u=o(P);C=r(u,"LABEL",{for:!0});var d=o(C);V=l(d,"Player name"),d.forEach(i),F=p(u),j=r(u,"INPUT",{type:!0}),U=p(u),Y=r(u,"LABEL",{for:!0});var m=o(Y);H=l(m,"Card category"),m.forEach(i),W=p(u),q=r(u,"SELECT",{id:!0});var y=o(q);G=r(y,"OPTION",{value:!0});var $=o(G);K=l($,"English monarchs"),$.forEach(i),Q=r(y,"OPTION",{value:!0});var x=o(Q);X=l(x,"English consorts"),x.forEach(i),J=r(y,"OPTION",{value:!0});var w=o(J);Z=l(w,"English royal teams"),w.forEach(i),y.forEach(i),ee=p(u),ae=r(u,"LABEL",{for:!0});var _=o(ae);te=l(_,"Difficulty"),_.forEach(i),ne=p(u),se=r(u,"SELECT",{id:!0});var A=o(se);re=r(A,"OPTION",{value:!0});var O=o(re);oe=l(O,"Easy"),O.forEach(i),le=r(A,"OPTION",{value:!0});var N=o(le);ie=l(N,"Hard"),N.forEach(i),A.forEach(i),ce=p(u),ue=r(u,"BUTTON",{type:!0});var T=o(ue);de=l(T,"Play the game!"),T.forEach(i),u.forEach(i),n.forEach(i),this.h()},h(){c(C,"for","name"),c(j,"type","text"),c(Y,"for","rating-type"),G.__value="monarchs",G.value=G.__value,Q.__value="consorts",Q.value=Q.__value,J.__value="teams",J.value=J.__value,c(q,"id","rating-type"),void 0===e[1]&&A((()=>e[6].call(q))),c(ae,"for","difficulty"),re.__value="easy",re.value=re.__value,le.__value="hard",le.value=le.__value,c(se,"id","difficulty"),void 0===e[2]&&A((()=>e[7].call(se))),c(ue,"type","sumbit"),c(P,"class","svelte-1jlkzna")},m(n,s){u(n,a,s),_(t,a,null),d(a,f),d(a,h),d(h,v),d(a,g),d(a,E),d(E,b),d(a,D),d(a,P),d(P,C),d(C,V),d(P,F),d(P,j),R(j,e[3]),d(P,U),d(P,Y),d(Y,H),d(P,W),d(P,q),d(q,G),d(G,K),d(q,Q),d(Q,X),d(q,J),d(J,Z),S(q,e[1]),d(P,ee),d(P,ae),d(ae,te),d(P,ne),d(P,se),d(se,re),d(re,oe),d(se,le),d(le,ie),S(se,e[2]),d(P,ce),d(P,ue),d(ue,de),me=!0,pe||(ve=[y(j,"input",e[5]),y(q,"change",e[6]),y(se,"change",e[7]),y(P,"submit",L(k(e[4])))],pe=!0)},p(e,a){8&a&&j.value!==e[3]&&R(j,e[3]),2&a&&S(q,e[1]),4&a&&S(se,e[2])},i(e){me||(x(t.$$.fragment,e),A((()=>{he&&he.end(1),fe||(fe=N(a,z,{delay:300,duration:200})),fe.start()})),me=!0)},o(e){$(t.$$.fragment,e),fe&&fe.invalidate(),he=T(a,z,{duration:200}),me=!1},d(e){e&&i(a),O(t),e&&he&&he.end(),pe=!1,B(ve)}}}function re(e){let a,t,s,l,c,d;const f=[se,ne],h=[];function m(e,a){return 0===e[0].length?0:1}return t=m(e),s=h[t]=f[t](e),{c(){a=n("div"),s.c()},l(e){a=r(e,"DIV",{});var t=o(a);s.l(t),t.forEach(i)},m(e,n){u(e,a,n),h[t].m(a,null),d=!0},p(e,n){let r=t;t=m(e),t===r?h[t].p(e,n):(g(),$(h[r],1,1,(()=>{h[r]=null})),E(),s=h[t],s?s.p(e,n):(s=h[t]=f[t](e),s.c()),x(s,1),s.m(a,null))},i(e){d||(x(s),A((()=>{c&&c.end(1),l||(l=N(a,z,{delay:300,duration:200})),l.start()})),d=!0)},o(e){$(s),l&&l.invalidate(),c=T(a,z,{duration:200}),d=!1},d(e){e&&i(a),h[t].d(),e&&c&&c.end()}}}function oe(e){let a,t,s,o;return s=new Y({props:{$$slots:{default:[re]},$$scope:{ctx:e}}}),{c(){a=n("meta"),t=m(),w(s.$$.fragment),this.h()},l(e){const n=C('[data-svelte="svelte-zc3qf3"]',document.head);a=r(n,"META",{name:!0,content:!0}),n.forEach(i),t=p(e),I(s.$$.fragment,e),this.h()},h(){document.title="Rexplorer game",c(a,"name","Description"),c(a,"content","A card game based on the ratings from the Rex Factor podcast")},m(e,n){d(document.head,a),u(e,t,n),_(s,e,n),o=!0},p(e,[a]){const t={};1039&a&&(t.$$scope={dirty:a,ctx:e}),s.$set(t)},i(e){o||(x(s.$$.fragment,e),o=!0)},o(e){$(s.$$.fragment,e),o=!1},d(e){i(a),e&&i(t),O(s,e)}}}function le(e,a,t){var n=this&&this.__awaiter||function(e,a,t,n){return new(t||(t=Promise))((function(s,r){function o(e){try{i(n.next(e))}catch(e){r(e)}}function l(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var a;e.done?s(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,l)}i((n=n.apply(e,a||[])).next())}))};let s=[],r="monarchs",o="easy",l="Player";return[s,r,o,l,()=>n(void 0,void 0,void 0,(function*(){console.log("FETCHING SCORES....");const e=yield fetch(`data/${r}.json`),a=yield e.json();200===e.status?t(0,s=a.scores):this.error(e.status,e.statusText)})),function(){l=this.value,t(3,l)},function(){r=V(this),t(1,r)},function(){o=V(this),t(2,o)},()=>t(0,s=[])]}export default class extends e{constructor(e){super(),a(this,e,le,oe,t,{})}}
