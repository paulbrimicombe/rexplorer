import{G as t}from"./client.adbe0234.js";function o(t){var o=t-1;return o*o*o+1}function a(o,a){var n=a.delay,i=void 0===n?0:n,r=a.duration,e=void 0===r?400:r,d=a.easing,c=void 0===d?t:d,p=+getComputedStyle(o).opacity;return{delay:i,duration:e,easing:c,css:function(t){return"opacity: ".concat(t*p)}}}function n(t,a){var n=a.delay,i=void 0===n?0:n,r=a.duration,e=void 0===r?400:r,d=a.easing,c=void 0===d?o:d,p=a.x,s=void 0===p?0:p,u=a.y,g=void 0===u?0:u,l=a.opacity,m=void 0===l?0:l,v=getComputedStyle(t),y=+v.opacity,f="none"===v.transform?"":v.transform,x=y*(1-m);return{delay:i,duration:e,easing:c,css:function(t,o){return"\n\t\t\ttransform: ".concat(f," translate(").concat((1-t)*s,"px, ").concat((1-t)*g,"px);\n\t\t\topacity: ").concat(y-x*o)}}}function i(t,a){var n=a.delay,i=void 0===n?0:n,r=a.duration,e=void 0===r?400:r,d=a.easing,c=void 0===d?o:d,p=getComputedStyle(t),s=+p.opacity,u=parseFloat(p.height),g=parseFloat(p.paddingTop),l=parseFloat(p.paddingBottom),m=parseFloat(p.marginTop),v=parseFloat(p.marginBottom),y=parseFloat(p.borderTopWidth),f=parseFloat(p.borderBottomWidth);return{delay:i,duration:e,easing:c,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*s,";")+"height: ".concat(t*u,"px;")+"padding-top: ".concat(t*g,"px;")+"padding-bottom: ".concat(t*l,"px;")+"margin-top: ".concat(t*m,"px;")+"margin-bottom: ".concat(t*v,"px;")+"border-top-width: ".concat(t*y,"px;")+"border-bottom-width: ".concat(t*f,"px;")}}}export{n as a,a as f,i as s};
