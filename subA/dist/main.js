(()=>{"use strict";var e,r,t={462:(e,r,t)=>{t(865),t(704)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,o.c=n,o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="sub_a:",o.l=(t,n,a,u)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+a){i=p;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)}},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var u=o.S[t],i="sub_a",f=(e,r,t,n)=>{var o=u[e]=u[e]||{},a=o[r];(!a||!a.loaded&&(!n!=!a.eager?n:i>a.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(f("react-dom","17.0.2",(()=>o.e(935).then((()=>()=>o(935))))),f("react","17.0.2",(()=>o.e(935).then((()=>()=>o(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),o.p="/mfe-app2/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(i=e[a]))[0]?"-":(o>0?".":"")+(o=2,i);return n}var u=[];for(a=1;a<e.length;a++){var i=e[a];u.push(0===i?"not("+f()+")":1===i?"("+f()+" || "+f()+")":2===i?u.pop()+" "+u.pop():r(i))}return f();function f(){return u.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var u=0,i=1,f=!0;;i++,u++){var l,s,p=i<r.length?(typeof r[i])[0]:"";if(u>=n.length||"o"==(s=(typeof(l=n[u]))[0]))return!f||("u"==p?i>o&&!a:""==p!=a);if("u"==s){if(!f||"u"!=p)return!1}else if(f)if(p==s)if(i<=o){if(l!=r[i])return!1}else{if(a?l>r[i]:l<r[i])return!1;l!=r[i]&&(f=!1)}else if("s"!=p&&"n"!=p){if(a||i<=o)return!1;f=!1,i--}else{if(i<=o||s<p!=a)return!1;f=!1}else"s"!=p&&"n"!=p&&(f=!1,i--)}}var d=[],h=d.pop.bind(d);for(u=1;u<r.length;u++){var c=r[u];d.push(1==c?h()|h():2==c?h()&h():c?t(c,n):!h())}return!!h()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var u=t[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}})(r,t)?t:r),0)},a=(e,o,a,i)=>{var f=n(e,a);return t(i,f)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,a,f,i)),u(e[a][f])},u=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,n,a){var u=o.I(r);return u&&u.then?u.then(e.bind(e,r,o.S[r],t,n,a)):e(r,o.S[r],t,n,a)})(((e,r,t,n,u)=>r&&o.o(r,t)?a(r,0,t,n):u())),f={},l={264:()=>i("default","react",[4,17,0,2],(()=>o.e(935).then((()=>()=>o(294))))),865:()=>i("default","react",[1,17,0,1],(()=>o.e(935).then((()=>()=>o(294))))),704:()=>i("default","react-dom",[1,17,0,1],(()=>o.e(935).then((()=>()=>o(935)))))};[865,704].forEach((e=>{o.m[e]=r=>{f[e]=0,delete o.c[e];var t=l[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var s={935:[264]};o.f.consumes=(e,r)=>{o.o(s,e)&&s[e].forEach((e=>{if(o.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete f[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var a=l[e]();a.then?r.push(f[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=a);var u=o.p+o.u(r),i=new Error;o.l(u,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[u,i,f]=t,l=0;if(u.some((r=>0!==e[r]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);f&&f(o)}for(r&&r(t);l<u.length;l++)a=u[l],o.o(e,a)&&e[a]&&e[a][0](),e[u[l]]=0},t=self.webpackChunksub_a=self.webpackChunksub_a||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o(462)})();