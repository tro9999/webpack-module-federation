var mfeApp2;(()=>{"use strict";var e,r,t={255:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n=t(865),o=t.n(n);const a=function(){return o().createElement("div",null,"Sending love from Sub A")}},70:(e,r,t)=>{var n={"./App":()=>Promise.resolve().then((()=>()=>t(255)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,o.c=n,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="sub_a:",o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var u,l;if(void 0!==a)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){u=d;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var p=(r,n)=>{u.onerror=u.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var i=o.S[t],u="sub_a",l=(e,r,t,n)=>{var o=i[e]=i[e]||{},a=o[r];(!a||!a.loaded&&(!n!=!a.eager?n:u>a.from))&&(o[r]={get:t,from:u,eager:!!n})},f=[];return"default"===t&&(l("react-dom","17.0.2",(()=>o.e(935).then((()=>()=>o(935))))),l("react","17.0.2",(()=>o.e(935).then((()=>()=>o(294)))))),e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),o.p="/mfe-app2/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():r(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,d=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(s=(typeof(f=n[i]))[0]))return!l||("u"==d?u>o&&!a:""==d!=a);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(u<=o){if(f!=r[u])return!1}else{if(a?f>r[u]:f<r[u])return!1;f!=r[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(a||u<=o)return!1;l=!1,u--}else{if(u<=o||s<d!=a)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<r.length;i++){var h=r[i];p.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},a=(e,o,a,u)=>{var l=n(e,a);return t(u,l)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,a,l,u)),i(e[a][l])},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,a){var i=o.I(r);return i&&i.then?i.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,i)=>r&&o.o(r,t)?a(r,0,t,n):i())),l={},f={264:()=>u("default","react",[4,17,0,2],(()=>o.e(935).then((()=>()=>o(294))))),865:()=>u("default","react",[1,17,0,1],(()=>o.e(935).then((()=>()=>o(294)))))};[865].forEach((e=>{o.m[e]=r=>{l[e]=0,delete o.c[e];var t=f[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var s={935:[264]};o.f.consumes=(e,r)=>{o.o(s,e)&&s[e].forEach((e=>{if(o.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete l[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var a=f[e]();a.then?r.push(l[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={58:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=a);var i=o.p+o.u(r),u=new Error;o.l(i,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[i,u,l]=t,f=0;if(i.some((r=>0!==e[r]))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);l&&l(o)}for(r&&r(t);f<i.length;f++)a=i[f],o.o(e,a)&&e[a]&&e[a][0](),e[i[f]]=0},t=self.webpackChunksub_a=self.webpackChunksub_a||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o(70);mfeApp2=a})();