import{y as t,S as a,i as e,s,e as i,a as o,t as l,b as n,g as r,f as c,h as p,d,k as g,z as m,A as h,m as u,l as y,B as f,o as v}from"./client.648b84ea.js";function b(t){const a=t-1;return a*a*a+1}function $(a,{delay:e=0,duration:s=400,easing:i=t}){const o=+getComputedStyle(a).opacity;return{delay:e,duration:s,easing:i,css:t=>"opacity: "+t*o}}function x(t,{delay:a=0,duration:e=400,easing:s=b,x:i=0,y:o=0,opacity:l=0}){const n=getComputedStyle(t),r=+n.opacity,c="none"===n.transform?"":n.transform,p=r*(1-l);return{delay:a,duration:e,easing:s,css:(t,a)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*i}px, ${(1-t)*o}px);\n\t\t\topacity: ${r-p*a}`}}function S(t,{delay:a=0,duration:e=400,easing:s=b}){const i=getComputedStyle(t),o=+i.opacity,l=parseFloat(i.height),n=parseFloat(i.paddingTop),r=parseFloat(i.paddingBottom),c=parseFloat(i.marginTop),p=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),g=parseFloat(i.borderBottomWidth);return{delay:a,duration:e,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*l}px;padding-top: ${t*n}px;padding-bottom: ${t*r}px;margin-top: ${t*c}px;margin-bottom: ${t*p}px;border-top-width: ${t*d}px;border-bottom-width: ${t*g}px;`}}function F(t){let a,e,s,b,$,x,S,F;return{c(){a=i("h1"),e=i("div"),s=i("img"),$=o(),x=i("p"),S=l(t[3]),this.h()},l(i){a=n(i,"H1",{style:!0,class:!0});var o=r(a);e=n(o,"DIV",{class:!0,style:!0});var l=r(e);s=n(l,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),$=c(l),x=n(l,"P",{class:!0});var g=r(x);S=p(g,t[3]),g.forEach(d),l.forEach(d),o.forEach(d),this.h()},h(){g(s,"width",t[0]),g(s,"height",t[0]),s.src!==(b=t[1])&&g(s,"src",b),g(s,"alt",t[2]),g(s,"class","svelte-e8ioqk"),g(x,"class","svelte-e8ioqk"),g(e,"class",F=m(t[4]?"hoverable":"")+" svelte-e8ioqk"),h(e,"grid-template-columns","left"===t[6]?"auto 1fr":"auto auto"),g(a,"style",t[5]),g(a,"class","svelte-e8ioqk")},m(t,i){u(t,a,i),y(a,e),y(e,s),y(e,$),y(e,x),y(x,S)},p(t,[i]){1&i&&g(s,"width",t[0]),1&i&&g(s,"height",t[0]),2&i&&s.src!==(b=t[1])&&g(s,"src",b),4&i&&g(s,"alt",t[2]),8&i&&f(S,t[3]),16&i&&F!==(F=m(t[4]?"hoverable":"")+" svelte-e8ioqk")&&g(e,"class",F),64&i&&h(e,"grid-template-columns","left"===t[6]?"auto 1fr":"auto auto"),32&i&&g(a,"style",t[5])},i:v,o:v,d(t){t&&d(a)}}}function k(t,a,e){let{imageSize:s=64}=a,{imagePath:i}=a,{imageAlt:o}=a,{title:l}=a,{hoverable:n=!1}=a,{style:r=""}=a,{alignment:c="centre"}=a;return t.$$set=t=>{"imageSize"in t&&e(0,s=t.imageSize),"imagePath"in t&&e(1,i=t.imagePath),"imageAlt"in t&&e(2,o=t.imageAlt),"title"in t&&e(3,l=t.title),"hoverable"in t&&e(4,n=t.hoverable),"style"in t&&e(5,r=t.style),"alignment"in t&&e(6,c=t.alignment)},[s,i,o,l,n,r,c]}class w extends a{constructor(t){super(),e(this,t,k,F,s,{imageSize:0,imagePath:1,imageAlt:2,title:3,hoverable:4,style:5,alignment:6})}}export{w as B,x as a,$ as f,S as s};