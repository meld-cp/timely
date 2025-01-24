var oa=Object.defineProperty;var Me=e=>{throw TypeError(e)};var la=(e,t,n)=>t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>la(e,typeof t!="symbol"?t+"":t,n),ca=(e,t,n)=>t.has(e)||Me("Cannot "+n);var U=(e,t,n)=>(ca(e,t,"read from private field"),n?n.call(e):t.get(e)),lt=(e,t,n)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{d as Le,e as fa,a as F,n as ua,c as wt,t as z}from"../chunks/CBmAC5jC.js";import{b as da,h as Re,B as De,d as ma,g as ze,af as ga,ak as ha,ai as pa,D as va,ag as Lt,e as ba,E as ya,aJ as ka,aK as xa,x as _a,k as Aa,P as je,ab as wa,z as Sa,n as kt,aL as Pa,ap as Ue,Z as Ye,aq as Ta,p as ht,c as S,r as w,t as $,a as pt,N as Q,f as mt,o as O,aM as Ca,s as N,v as V,V as xn,W as ft}from"../chunks/B3quWTxq.js";import{c as Ea,s as at}from"../chunks/D1LvbsoL.js";import{p as Y}from"../chunks/DwbFJCge.js";import{o as Ia,a as Oa}from"../chunks/CgBeF7EA.js";import{b as Na,s as We,r as Ut,e as _n,i as Fa}from"../chunks/DvSaprfN.js";import{i as W}from"../chunks/Cl6SPXql.js";import{d as An,g as Ma}from"../chunks/B8pIN4OL.js";import{b as Yt}from"../chunks/fyUcucyq.js";import{p as A,l as He,s as La}from"../chunks/BsDv9xhu.js";import"../chunks/BzPVB4zW.js";import{i as wn}from"../chunks/D-fyjZ6G.js";import{b as Ra}from"../chunks/ECzNSlVg.js";import{T as I,a as Jt}from"../chunks/C7YH_Jd7.js";import{t as Qt}from"../chunks/Dk709sgr.js";import{F as Da}from"../chunks/DvTEyFA3.js";function za(e,t,n,a,r){var s=e,i="",o;da(()=>{if(i===(i=t()??"")){Re&&De();return}o!==void 0&&(ba(o),o=void 0),i!==""&&(o=ma(()=>{if(Re){ze.data;for(var u=De(),l=u;u!==null&&(u.nodeType!==8||u.data!=="");)l=u,u=ga(u);if(u===null)throw ha(),pa;Le(ze,l),s=va(u);return}var f=i+"";f=`<svg>${f}</svg>`;var m=fa(f);for(m=Lt(m),Le(Lt(m),m.lastChild);Lt(m);)s.before(Lt(m))}))})}function ja(e,t,n){if(n){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}const Ua=()=>performance.now(),X={tick:e=>requestAnimationFrame(e),now:()=>Ua(),tasks:new Set};function Sn(){const e=X.now();X.tasks.forEach(t=>{t.c(e)||(X.tasks.delete(t),t.f())}),X.tasks.size!==0&&X.tick(Sn)}function Ya(e){let t;return X.tasks.size===0&&X.tick(Sn),{promise:new Promise(n=>{X.tasks.add(t={c:e,f:n})}),abort(){X.tasks.delete(t)}}}function Rt(e,t){e.dispatchEvent(new CustomEvent(t))}function Wa(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Ge(e){const t={},n=e.split(";");for(const a of n){const[r,s]=a.split(":");if(!r||s===void 0)break;const i=Wa(r.trim());t[i]=s.trim()}return t}const Ha=e=>e;function Ga(e,t,n,a){var r=(e&Pa)!==0,s="both",i,o=t.inert,u=t.style.overflow,l,f;function m(){var v=Ta,b=je;Ue(null),Ye(null);try{return i??(i=n()(t,(a==null?void 0:a())??{},{direction:s}))}finally{Ue(v),Ye(b)}}var d={is_global:r,in(){t.inert=o,Rt(t,"introstart"),l=se(t,m(),f,1,()=>{Rt(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=u})},out(v){t.inert=!0,Rt(t,"outrostart"),f=se(t,m(),l,0,()=>{Rt(t,"outroend"),v==null||v()})},stop:()=>{l==null||l.abort(),f==null||f.abort()}},p=je;if((p.transitions??(p.transitions=[])).push(d),Ea){var y=r;if(!y){for(var h=p.parent;h&&h.f&ya;)for(;(h=h.parent)&&!(h.f&ka););y=!h||(h.f&xa)!==0}y&&_a(()=>{Aa(()=>d.in())})}}function se(e,t,n,a,r){var s=a===1;if(wa(t)){var i,o=!1;return Sa(()=>{if(!o){var v=t({direction:s?"in":"out"});i=se(e,v,n,a,r)}}),{abort:()=>{o=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return r(),{abort:kt,deactivate:kt,reset:kt,t:()=>a};const{delay:u=0,css:l,tick:f,easing:m=Ha}=t;var d=[];if(s&&n===void 0&&(f&&f(0,1),l)){var p=Ge(l(0,1));d.push(p,p)}var y=()=>1-a,h=e.animate(d,{duration:u});return h.onfinish=()=>{var v=(n==null?void 0:n.t())??1-a;n==null||n.abort();var b=a-v,k=t.duration*Math.abs(b),P=[];if(k>0){var x=!1;if(l)for(var _=Math.ceil(k/16.666666666666668),E=0;E<=_;E+=1){var M=v+b*m(E/_),L=Ge(l(M,1-M));P.push(L),x||(x=L.overflow==="hidden")}x&&(e.style.overflow="hidden"),y=()=>{var R=h.currentTime;return v+b*m(R/k)},f&&Ya(()=>{if(h.playState!=="running")return!1;var R=y();return f(R,1-R),!0})}h=e.animate(P,{duration:k,fill:"forwards"}),h.onfinish=()=>{y=()=>a,f==null||f(a,1-a),r()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=kt)},deactivate:()=>{r=kt},reset:()=>{a===0&&(f==null||f(1,0))},t:()=>y()}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ba={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},Va={prefix:"fas",iconName:"eject",icon:[448,512,[9167],"f052","M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320L48 320c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z"]},Xa={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},qa={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},Ka={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Za={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Ja(e){const{beat:t,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:u,spinReverse:l,pulse:f,fixedWidth:m,inverse:d,border:p,listItem:y,flip:h,size:v,rotation:b,pull:k}=e,P={"fa-beat":t,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":m,"fa-inverse":d,"fa-border":p,"fa-li":y,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both",[`fa-${v}`]:typeof v<"u"&&v!==null,[`fa-rotate-${b}`]:typeof b<"u"&&b!==null&&b!==0,[`fa-pull-${k}`]:typeof k<"u"&&k!==null,"fa-swap-opacity":e.swapOpacity};return Object.keys(P).map(x=>P[x]?x:null).filter(x=>x)}function Qa(e){return e=e-0,e===e}function $a(e){return Qa(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function tr(e){return typeof e=="string"?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+e[n]+";","")}function Pn(e,t,n={}){if(typeof t=="string")return t;const a=(t.children||[]).map(s=>Pn(e,s)),r=Object.keys(t.attributes||{}).reduce((s,i)=>{const o=t.attributes[i];return i==="style"?s.attrs.style=tr(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[$a(i)]=o,s},{attrs:{}});return e(t.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function er(e,t,n){return(t=ar(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(n),!0).forEach(function(a){er(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function nr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ar(e){var t=nr(e,"string");return typeof t=="symbol"?t:t+""}const Ve=()=>{};let Ae={},Tn={},Cn=null,En={mark:Ve,measure:Ve};try{typeof window<"u"&&(Ae=window),typeof document<"u"&&(Tn=document),typeof MutationObserver<"u"&&(Cn=MutationObserver),typeof performance<"u"&&(En=performance)}catch{}const{userAgent:Xe=""}=Ae.navigator||{},tt=Ae,C=Tn,qe=Cn,Dt=En;tt.document;const Z=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",In=~Xe.indexOf("MSIE")||~Xe.indexOf("Trident/");var rr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,On={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ir={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Vt="duotone",or="sharp",lr="sharp-duotone",Fn=[D,Vt,or,lr],cr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},fr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ur=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),dr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},mr=["fak","fa-kit","fakd","fa-kit-duotone"],Ke={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gr=["kit"],hr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pr=["fak","fakd"],vr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ze={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},zt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},br=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],yr=["fak","fa-kit","fakd","fa-kit-duotone"],kr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_r={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ie={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ar=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],oe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...br,...Ar],wr=["solid","regular","light","thin","duotone","brands"],Mn=[1,2,3,4,5,6,7,8,9,10],Sr=Mn.concat([11,12,13,14,15,16,17,18,19,20]),Pr=[...Object.keys(_r),...wr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zt.GROUP,zt.SWAP_OPACITY,zt.PRIMARY,zt.SECONDARY].concat(Mn.map(e=>"".concat(e,"x"))).concat(Sr.map(e=>"w-".concat(e))),Tr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const q="___FONT_AWESOME___",le=16,Ln="fa",Rn="svg-inline--fa",st="data-fa-i2svg",ce="data-fa-pseudo-element",Cr="data-fa-pseudo-element-pending",we="data-prefix",Se="data-icon",Je="fontawesome-i2svg",Er="async",Ir=["HTML","HEAD","STYLE","SCRIPT"],Dn=(()=>{try{return!0}catch{return!1}})();function Nt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[D]}})}const zn=c({},On);zn[D]=c(c(c(c({},{"fa-duotone":"duotone"}),On[D]),Ke.kit),Ke["kit-duotone"]);const Or=Nt(zn),fe=c({},dr);fe[D]=c(c(c(c({},{duotone:"fad"}),fe[D]),Ze.kit),Ze["kit-duotone"]);const Qe=Nt(fe),ue=c({},ie);ue[D]=c(c({},ue[D]),vr.kit);const Pe=Nt(ue),de=c({},xr);de[D]=c(c({},de[D]),hr.kit);Nt(de);const Nr=rr,jn="fa-layers-text",Fr=sr,Mr=c({},cr);Nt(Mr);const Lr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$t=ir,Rr=[...gr,...Pr],_t=tt.FontAwesomeConfig||{};function Dr(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function zr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=zr(Dr(n));r!=null&&(_t[a]=r)});const Un={styleDefault:"solid",familyDefault:D,cssPrefix:Ln,replacementClass:Rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const gt=c(c({},Un),_t);gt.autoReplaceSvg||(gt.observeMutations=!1);const g={};Object.keys(Un).forEach(e=>{Object.defineProperty(g,e,{enumerable:!0,set:function(t){gt[e]=t,At.forEach(n=>n(g))},get:function(){return gt[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){gt.cssPrefix=e,At.forEach(t=>t(g))},get:function(){return gt.cssPrefix}});tt.FontAwesomeConfig=g;const At=[];function jr(e){return At.push(e),()=>{At.splice(At.indexOf(e),1)}}const J=le,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ur(e){if(!e||!Z)return;const t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return C.head.insertBefore(t,a),e}const Yr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){let e=12,t="";for(;e-- >0;)t+=Yr[Math.random()*62|0];return t}function vt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Te(e){return e.classList?vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Yn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Yn(e[n]),'" '),"").trim()}function Xt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ce(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function Hr(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:l}}function Gr(e){let{transform:t,width:n=le,height:a=le,startCentered:r=!1}=e,s="";return r&&In?s+="translate(".concat(t.x/J-n/2,"em, ").concat(t.y/J-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/J,"em), calc(-50% + ").concat(t.y/J,"em)) "):s+="translate(".concat(t.x/J,"em, ").concat(t.y/J,"em) "),s+="scale(".concat(t.size/J*(t.flipX?-1:1),", ").concat(t.size/J*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Br=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Wn(){const e=Ln,t=Rn,n=g.cssPrefix,a=g.replacementClass;let r=Br;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let $e=!1;function te(){g.autoAddCss&&!$e&&(Ur(Wn()),$e=!0)}var Vr={mixout(){return{dom:{css:Wn,insertCss:te}}},hooks(){return{beforeDOMElementCreation(){te()},beforeI2svg(){te()}}}};const K=tt||{};K[q]||(K[q]={});K[q].styles||(K[q].styles={});K[q].hooks||(K[q].hooks={});K[q].shims||(K[q].shims=[]);var B=K[q];const Hn=[],Gn=function(){C.removeEventListener("DOMContentLoaded",Gn),Gt=1,Hn.map(e=>e())};let Gt=!1;Z&&(Gt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Gt||C.addEventListener("DOMContentLoaded",Gn));function Xr(e){Z&&(Gt?setTimeout(e,0):Hn.push(e))}function Ft(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Yn(e):"<".concat(t," ").concat(Wr(n),">").concat(a.map(Ft).join(""),"</").concat(t,">")}function tn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ee=function(t,n,a,r){var s=Object.keys(t),i=s.length,o=n,u,l,f;for(a===void 0?(u=1,f=t[s[0]]):(u=0,f=a);u<i;u++)l=s[u],f=o(f,t[l],l,t);return f};function qr(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function me(e){const t=qr(e);return t.length===1?t[0].toString(16):null}function Kr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function en(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function ge(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=en(t);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(e,en(t)):B.styles[e]=c(c({},B.styles[e]||{}),r),e==="fas"&&ge("fa",t)}const{styles:Pt,shims:Zr}=B,Bn=Object.keys(Pe),Jr=Bn.reduce((e,t)=>(e[t]=Object.keys(Pe[t]),e),{});let Ee=null,Vn={},Xn={},qn={},Kn={},Zn={};function Qr(e){return~Rr.indexOf(e)}function $r(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Qr(r)?r:null}const Jn=()=>{const e=a=>ee(Pt,(r,s,i)=>(r[i]=ee(s,a,{}),r),{});Vn=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Xn=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),Zn=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const t="far"in Pt||g.autoFetchSvg,n=ee(Zr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});qn=n.names,Kn=n.unicodes,Ee=qt(g.styleDefault,{family:g.familyDefault})};jr(e=>{Ee=qt(e.styleDefault,{family:g.familyDefault})});Jn();function Ie(e,t){return(Vn[e]||{})[t]}function ts(e,t){return(Xn[e]||{})[t]}function rt(e,t){return(Zn[e]||{})[t]}function Qn(e){return qn[e]||{prefix:null,iconName:null}}function es(e){const t=Kn[e],n=Ie("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return Ee}const $n=()=>({prefix:null,iconName:null,rest:[]});function ns(e){let t=D;const n=Bn.reduce((a,r)=>(a[r]="".concat(g.cssPrefix,"-").concat(r),a),{});return Fn.forEach(a=>{(e.includes(n[a])||e.some(r=>Jr[a].includes(r)))&&(t=a)}),t}function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=t,a=Or[n][e];if(n===Vt&&!e)return"fad";const r=Qe[n][e]||Qe[n][a],s=e in B.styles?e:null;return r||s||null}function as(e){let t=[],n=null;return e.forEach(a=>{const r=$r(g.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function nn(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=oe.concat(yr),s=nn(e.filter(m=>r.includes(m))),i=nn(e.filter(m=>!oe.includes(m))),o=s.filter(m=>(a=m,!Nn.includes(m))),[u=null]=o,l=ns(s),f=c(c({},as(i)),{},{prefix:qt(u,{family:l})});return c(c(c({},f),os({values:e,family:l,styles:Pt,config:g,canonical:f,givenPrefix:a})),rs(n,a,f))}function rs(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?Qn(r):{},i=rt(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!Pt.far&&Pt.fas&&!g.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ss=Fn.filter(e=>e!==D||e!==Vt),is=Object.keys(ie).filter(e=>e!==D).map(e=>Object.keys(ie[e])).flat();function os(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,o=n===Vt,u=t.includes("fa-duotone")||t.includes("fad"),l=i.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||l||f)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ss.includes(n)&&(Object.keys(s).find(d=>is.includes(d))||i.autoFetchSvg)){const d=ur.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=rt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=et()||"fas"),a}class ls{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),ge(s,r[s]);const i=Pe[D][s];i&&ge(i,r[s]),Jn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],u=o[2];t[s]||(t[s]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(t[s][l]=o)}),t[s][i]=o}),t}}let an=[],ut={};const dt={},cs=Object.keys(dt);function fs(e,t){let{mixoutsTo:n}=t;return an=e,ut={},Object.keys(dt).forEach(a=>{cs.indexOf(a)===-1&&delete dt[a]}),an.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{ut[i]||(ut[i]=[]),ut[i].push(s[i])})}a.provides&&a.provides(dt)}),n}function he(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ut[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function it(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ut[e]||[]).forEach(s=>{s.apply(null,n)})}function nt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return dt[e]?dt[e].apply(null,t):void 0}function pe(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||et();if(t)return t=rt(n,t)||t,tn(ta.definitions,n,t)||tn(B.styles,n,t)}const ta=new ls,us=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,it("noAuto")},ds={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(it("beforeI2svg",e),nt("pseudoElements2svg",e),nt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Xr(()=>{gs({autoReplaceSvgRoot:t}),it("watch",e)})}},ms={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:rt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=qt(e[0]);return{prefix:n,iconName:rt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(Nr))){const t=Kt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||et(),iconName:rt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=et();return{prefix:t,iconName:rt(t,e)||e}}}},j={noAuto:us,config:g,dom:ds,parse:ms,library:ta,findIconDefinition:pe,toHtml:Ft},gs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=C}=e;(Object.keys(B.styles).length>0||g.autoFetchSvg)&&Z&&g.autoReplaceSvg&&j.dom.i2svg({node:t})};function Zt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ft(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Z)return;const n=C.createElement("div");return n.innerHTML=e.html,n.children}}),e}function hs(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(Ce(i)&&n.found&&!a.found){const{width:o,height:u}=n,l={x:o/u/2,y:.5};r.style=Xt(c(c({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ps(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Oe(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:u,titleId:l,extra:f,watchable:m=!1}=e,{width:d,height:p}=n.found?n:t,y=pr.includes(a),h=[g.replacementClass,r?"".concat(g.cssPrefix,"-").concat(r):""].filter(_=>f.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(f.classes).join(" ");let v={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const b=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};m&&(v.attributes[st]=""),o&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||St())},children:[o]}),delete v.attributes.title);const k=c(c({},v),{},{prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:i,styles:c(c({},b),f.styles)}),{children:P,attributes:x}=n.found&&t.found?nt("generateAbstractMask",k)||{children:[],attributes:{}}:nt("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=P,k.attributes=x,i?ps(k):hs(k)}function rn(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=e,u=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(u[st]="");const l=c({},i.styles);Ce(r)&&(l.transform=Gr({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const f=Xt(l);f.length>0&&(u.style=f);const m=[];return m.push({tag:"span",attributes:u,children:[t]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function vs(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Xt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ne}=B;function ve(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const bs={found:!1,width:512,height:512};function ys(e,t){!Dn&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function be(e,t){let n=t;return t==="fa"&&g.styleDefault!==null&&(t=et()),new Promise((a,r)=>{if(n==="fa"){const s=Qn(e);e=s.iconName||e,t=s.prefix||t}if(e&&t&&ne[t]&&ne[t][e]){const s=ne[t][e];return a(ve(s))}ys(e,t),a(c(c({},bs),{},{icon:g.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}const sn=()=>{},ye=g.measurePerformance&&Dt&&Dt.mark&&Dt.measure?Dt:{mark:sn,measure:sn},xt='FA "6.7.2"',ks=e=>(ye.mark("".concat(xt," ").concat(e," begins")),()=>ea(e)),ea=e=>{ye.mark("".concat(xt," ").concat(e," ends")),ye.measure("".concat(xt," ").concat(e),"".concat(xt," ").concat(e," begins"),"".concat(xt," ").concat(e," ends"))};var Ne={begin:ks,end:ea};const Wt=()=>{};function on(e){return typeof(e.getAttribute?e.getAttribute(st):null)=="string"}function xs(e){const t=e.getAttribute?e.getAttribute(we):null,n=e.getAttribute?e.getAttribute(Se):null;return t&&n}function _s(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function As(){return g.autoReplaceSvg===!0?Ht.replace:Ht[g.autoReplaceSvg]||Ht.replace}function ws(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function Ss(e){return C.createElement(e)}function na(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ws:Ss}=t;if(typeof e=="string")return C.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(na(s,{ceFn:n}))}),a}function Ps(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ht={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(na(n),t)}),t.getAttribute(st)===null&&g.keepOriginalSource){let n=C.createComment(Ps(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Te(t).indexOf(g.replacementClass))return Ht.replace(e);const a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===g.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Ft(s)).join(`
`);t.setAttribute(st,""),t.innerHTML=r}};function ln(e){e()}function aa(e,t){const n=typeof t=="function"?t:Wt;if(e.length===0)n();else{let a=ln;g.mutateApproach===Er&&(a=tt.requestAnimationFrame||ln),a(()=>{const r=As(),s=Ne.begin("mutate");e.map(r),s(),n()})}}let Fe=!1;function ra(){Fe=!0}function ke(){Fe=!1}let Bt=null;function cn(e){if(!qe||!g.observeMutations)return;const{treeCallback:t=Wt,nodeCallback:n=Wt,pseudoElementsCallback:a=Wt,observeMutationsRoot:r=C}=e;Bt=new qe(s=>{if(Fe)return;const i=et();vt(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!on(o.addedNodes[0])&&(g.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&g.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&on(o.target)&&~Lr.indexOf(o.attributeName))if(o.attributeName==="class"&&xs(o.target)){const{prefix:u,iconName:l}=Kt(Te(o.target));o.target.setAttribute(we,u||i),l&&o.target.setAttribute(Se,l)}else _s(o.target)&&n(o.target)})}),Z&&Bt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ts(){Bt&&Bt.disconnect()}function Cs(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Es(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Kt(Te(e));return r.prefix||(r.prefix=et()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ts(r.prefix,e.innerText)||Ie(r.prefix,me(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Is(e){const t=vt(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||St()):(t["aria-hidden"]="true",t.focusable="false")),t}function Os(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Es(e),s=Is(e),i=he("parseNodeAttributes",{},e);let o=t.styleParser?Cs(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ns}=B;function sa(e){const t=g.autoReplaceSvg==="nest"?fn(e,{styleParser:!1}):fn(e);return~t.extra.classes.indexOf(jn)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function Fs(){return[...mr,...oe]}function un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();const n=C.documentElement.classList,a=f=>n.add("".concat(Je,"-").concat(f)),r=f=>n.remove("".concat(Je,"-").concat(f)),s=g.autoFetchSvg?Fs():Nn.concat(Object.keys(Ns));s.includes("fa")||s.push("fa");const i=[".".concat(jn,":not([").concat(st,"])")].concat(s.map(f=>".".concat(f,":not([").concat(st,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=vt(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Ne.begin("onTree"),l=o.reduce((f,m)=>{try{const d=sa(m);d&&f.push(d)}catch(d){Dn||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,m)=>{Promise.all(l).then(d=>{aa(d,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),f()})}).catch(d=>{u(),m(d)})})}function Ms(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sa(e).then(n=>{n&&aa([n],t)})}function Ls(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:pe(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:pe(r||{})),e(a,c(c({},n),{},{mask:r}))}}const Rs=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:u=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:m,iconName:d,icon:p}=e;return Zt(c({type:"icon"},e),()=>(it("beforeDOMElementCreation",{iconDefinition:e,params:t}),g.autoA11y&&(i?l["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(o||St()):(l["aria-hidden"]="true",l.focusable="false")),Oe({icons:{main:ve(p),mask:r?ve(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:d,transform:c(c({},G),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:l,styles:f,classes:u}})))};var Ds={mixout(){return{icon:Ls(Rs)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=un,e.nodeCallback=Ms,e}}},provides(e){e.i2svg=function(t){const{node:n=C,callback:a=()=>{}}=t;return un(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:u,mask:l,maskId:f,extra:m}=n;return new Promise((d,p)=>{Promise.all([be(a,i),l.iconName?be(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[h,v]=y;d([t,Oe({icons:{main:h,mask:v},prefix:i,iconName:a,transform:o,symbol:u,maskId:f,title:r,titleId:s,extra:m,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const o=Xt(i);o.length>0&&(a.style=o);let u;return Ce(s)&&(u=nt("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},zs={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Zt({type:"layer"},()=>{it("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},js={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Zt({type:"counter",content:e},()=>(it("beforeDOMElementCreation",{content:e,params:t}),vs({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(g.cssPrefix,"-layers-counter"),...a]}})))}}}},Us={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return Zt({type:"text",content:e},()=>(it("beforeDOMElementCreation",{content:e,params:t}),rn({content:e,transform:c(c({},G),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(g.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(In){const u=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/u,o=l.height/u}return g.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,rn({content:t.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Ys=new RegExp('"',"ug"),dn=[1105920,1112319],mn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),fr),Tr),kr),xe=Object.keys(mn).reduce((e,t)=>(e[t.toLowerCase()]=mn[t],e),{}),Ws=Object.keys(xe).reduce((e,t)=>{const n=xe[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Hs(e){const t=e.replace(Ys,""),n=Kr(t,0),a=n>=dn[0]&&n<=dn[1],r=t.length===2?t[0]===t[1]:!1;return{value:me(r?t[0]:t),isSecondary:a||r}}function Gs(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(xe[n]||{})[r]||Ws[n]}function gn(e,t){const n="".concat(Cr).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=vt(e.children).filter(d=>d.getAttribute(ce)===t)[0],o=tt.getComputedStyle(e,t),u=o.getPropertyValue("font-family"),l=u.match(Fr),f=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&m!=="none"&&m!==""){const d=o.getPropertyValue("content");let p=Gs(u,f);const{value:y,isSecondary:h}=Hs(d),v=l[0].startsWith("FontAwesome");let b=Ie(p,y),k=b;if(v){const P=es(y);P.iconName&&P.prefix&&(b=P.iconName,p=P.prefix)}if(b&&!h&&(!i||i.getAttribute(we)!==p||i.getAttribute(Se)!==k)){e.setAttribute(n,k),i&&e.removeChild(i);const P=Os(),{extra:x}=P;x.attributes[ce]=t,be(b,p).then(_=>{const E=Oe(c(c({},P),{},{icons:{main:_,mask:$n()},prefix:p,iconName:k,extra:x,watchable:!0})),M=C.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=E.map(L=>Ft(L)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Bs(e){return Promise.all([gn(e,"::before"),gn(e,"::after")])}function Vs(e){return e.parentNode!==document.head&&!~Ir.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ce)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hn(e){if(Z)return new Promise((t,n)=>{const a=vt(e.querySelectorAll("*")).filter(Vs).map(Bs),r=Ne.begin("searchPseudoElements");ra(),Promise.all(a).then(()=>{r(),ke(),t()}).catch(()=>{r(),ke(),n()})})}var Xs={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=hn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=C}=t;g.searchPseudoElements&&hn(n)}}};let pn=!1;var qs={mixout(){return{dom:{unwatch(){ra(),pn=!0}}}},hooks(){return{bootstrap(){cn(he("mutationObserverCallbacks",{}))},noAuto(){Ts()},watch(e){const{observeMutationsRoot:t}=e;pn?ke():cn(he("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const vn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Ks={mixout(){return{parse:{transform:e=>vn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=vn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(o," ").concat(u," ").concat(l)},m={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:f,path:m};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const ae={x:0,y:0,width:"100%",height:"100%"};function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zs(e){return e.tag==="g"?e.children:[e]}var Js={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Kt(n.split(" ").map(r=>r.trim())):$n();return a.prefix||(a.prefix=et()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=t;const{width:u,icon:l}=r,{width:f,icon:m}=s,d=Hr({transform:o,containerWidth:f,iconWidth:u}),p={tag:"rect",attributes:c(c({},ae),{},{fill:"white"})},y=l.children?{children:l.children.map(bn)}:{},h={tag:"g",attributes:c({},d.inner),children:[bn(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},y))]},v={tag:"g",attributes:c({},d.outer),children:[h]},b="mask-".concat(i||St()),k="clip-".concat(i||St()),P={tag:"mask",attributes:c(c({},ae),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Zs(m)},P]};return n.push(x,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(b,")")},ae)}),{children:n,attributes:a}}}},Qs={provides(e){let t=!1;tt.matchMedia&&(t=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$s={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},ti=[Vr,Ds,zs,js,Us,Xs,qs,Ks,Js,Qs,$s];fs(ti,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;const _e=j.parse;j.findIconDefinition;j.toHtml;const ei=j.icon;j.layer;j.text;j.counter;let ia=!1;try{ia=!0}catch{}function ni(...e){!ia&&console&&typeof console.error=="function"&&console.error(...e)}function yn(e){if(e&&typeof e=="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_e.icon)return _e.icon(e);if(e===null)return null;if(e&&typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function re(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var ai=ua("<svg><!></svg>");function ri(e,t){var h;ht(t,!1);let n=A(t,"tag",8),a=A(t,"props",8),r=A(t,"children",8),s=A(t,"style",8,null),i=A(t,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(v){return(v==null?void 0:v.reduce((b,k)=>b+(k.tag?u(k):k),""))||""}function u({tag:v,props:b,children:k}){const P=Object.keys(b).map(x=>`${x}="${b[x]}"`).join(" ");return`<${v} ${P}>${o(k)}</${v}>`}const l=o(r()),f=(h=a())!=null&&h.style?`${a().style}${s()||""}`:s(),m={...a(),style:f};wn();var d=ai();let p;var y=S(d);za(y,()=>l),w(d),Ra(d,v=>i(v),()=>i()),$(()=>p=Na(d,p,{...m},void 0,!0)),F(e,d),pt()}function si(e,t){const n=He(t,["children","$$slots","$$events","$$legacy"]),a=He(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);ht(t,!1),A(t,"border",8,!1);let r=A(t,"mask",8,null),s=A(t,"maskId",8,null);A(t,"fixedWidth",8,!1),A(t,"inverse",8,!1),A(t,"flip",8,!1);let i=A(t,"icon",8,null);A(t,"listItem",8,!1),A(t,"pull",8,null),A(t,"pulse",8,!1),A(t,"rotation",8,null),A(t,"size",8,null),A(t,"spin",8,!1),A(t,"spinPulse",8,!1),A(t,"spinReverse",8,!1),A(t,"beat",8,!1),A(t,"fade",8,!1),A(t,"beatFade",8,!1),A(t,"bounce",8,!1),A(t,"shake",8,!1);let o=A(t,"symbol",8,!1),u=A(t,"title",8,""),l=A(t,"titleId",8,null),f=A(t,"transform",8,null);A(t,"swapOpacity",8,!1);let m=A(t,"ref",12,null),d=A(t,"style",8,null);const p=yn(i()),y=re("classes",[...Ja(n),...(n.class||"").split(" ")]),h=re("transform",typeof f()=="string"?_e.transform(f()):f()),v=re("mask",yn(r())),b=ei(p,{...y,...h,...v,symbol:o(),title:u(),titleId:l(),maskId:s()});let k=Ca(null);if(!b)ni("Could not find icon",p);else{const{abstract:E}=b;Q(k,Pn((M,L,R)=>({tag:M,props:L,children:R}),E[0],a))}wn();var P=wt(),x=mt(P);{var _=E=>{ri(E,La(()=>O(k),{get style(){return d()},get ref(){return m()},set ref(M){m(M)},$$legacy:!0}))};W(x,E=>{O(k)&&E(_)})}F(e,P),pt()}function ct(e,t){var n=wt(),a=mt(n);{var r=s=>{si(s,{get icon(){return t.icon}})};W(a,s=>{t.icon&&s(r)})}F(e,n)}var ii=(e,t)=>t.onIncreaseDuration(!0,e.ctrlKey),oi=(e,t)=>t.onIncreaseDuration(!1,e.ctrlKey),li=z('<div class="c-buttons svelte-1ifz5q4"><button class="outline svelte-1ifz5q4" title="Add Time"><!></button> <button class="outline svelte-1ifz5q4" title="Remove Time"><!></button></div>'),ci=(e,t)=>t.onAction1Click(),fi=z('<button class="outline svelte-1ifz5q4"><!></button>'),ui=z('<div class="icon"><!></div>'),di=(e,t)=>t.onAction2Click(),mi=z('<button class="outline secondary svelte-1ifz5q4"><!></button>'),gi=z('<div class="icon secondary"><!></div>'),hi=z('<div class="c-buttons svelte-1ifz5q4"><!> <!></div>'),pi=z('<div class="c-main svelte-1ifz5q4"><!> <div class="affective svelte-1ifz5q4"> </div> <div class="counter svelte-1ifz5q4"> </div> <!></div>');function vi(e,t){ht(t,!0);let n=V(()=>{const d=Math.floor(Math.abs(t.durationSeconds)/60/60),p=Math.floor(Math.abs(t.durationSeconds/60)),y=Math.abs(p%60),h=Math.abs(t.durationSeconds%60),v=[d.toFixed(0)+"h",y.toFixed(0)+"m",h.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+v.join(" ")});var a=pi(),r=S(a);{var s=d=>{var p=li(),y=S(p);y.__click=[ii,t];var h=S(y);ct(h,{icon:Za}),w(y);var v=N(y,2);v.__click=[oi,t];var b=S(v);ct(b,{icon:Xa}),w(v),w(p),F(d,p)};W(r,d=>{t.onIncreaseDuration&&d(s)})}var i=N(r,2),o=S(i,!0);w(i);var u=N(i,2),l=S(u,!0);w(u);var f=N(u,2);{var m=d=>{var p=hi(),y=S(p);{var h=x=>{var _=fi();_.__click=[ci,t];var E=S(_);ct(E,{get icon(){return t.icon1}}),w(_),$(()=>We(_,"title",t.action1Hint)),F(x,_)},v=x=>{var _=wt(),E=mt(_);{var M=L=>{var R=ui(),bt=S(R);ct(bt,{get icon(){return t.icon1}}),w(R),F(L,R)};W(E,L=>{t.icon1&&L(M)},!0)}F(x,_)};W(y,x=>{t.onAction1Click?x(h):x(v,!1)})}var b=N(y,2);{var k=x=>{var _=mi();_.__click=[di,t];var E=S(_);ct(E,{get icon(){return t.icon2}}),w(_),$(()=>We(_,"title",t.action2Hint)),F(x,_)},P=x=>{var _=wt(),E=mt(_);{var M=L=>{var R=gi(),bt=S(R);ct(bt,{get icon(){return t.icon2}}),w(R),F(L,R)};W(E,L=>{t.icon2&&L(M)},!0)}F(x,_)};W(b,x=>{t.onAction2Click?x(k):x(P,!1)})}w(p),F(d,p)};W(f,d=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&d(m)})}w(a),$(d=>{at(o,d),at(l,O(n))},[()=>{var d;return(d=t.affectiveDurationHours)==null?void 0:d.toFixed(2)}]),F(e,a),pt()}An(["click"]);class H{}ot(H,"TaskPause",Ba),ot(H,"TaskResume",Ka),ot(H,"TaskStop",qa),ot(H,"TaskDuplicateAndStart",Va);function kn(e,t,n){t.taskController.saveTask(n())}var bi=z('<span style="flex: content;" class="inv" title="Invoice"> </span>'),yi=(e,t,n)=>{var a;return(a=t.taskController)==null?void 0:a.saveTask(n())},ki=(e,t,n)=>t.taskController.deleteTask(n()),xi=z('<article class="c-task svelte-1jzxame"><div class="c-task-fields svelte-1jzxame"><input class="date svelte-1jzxame" name="task-date" type="date" title="Date"> <input class="name svelte-1jzxame" name="task-name" type="text" title="Description" placeholder="Description"> <div class="c-task-fields-row-2 svelte-1jzxame"><details class="svelte-1jzxame"><summary class="svelte-1jzxame">Other</summary> <!> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-1jzxame" name="task-tags" type="text" placeholder="Tags" title="Tags"> <button style="flex: content;" class="svelte-1jzxame">Delete</button></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-1jzxame"><!></div></article>');function _i(e,t){ht(t,!0);let n=A(t,"vm",7);const a={icon:T=>{switch(T.state){case I.Running:return H.TaskPause;case I.Paused:return H.TaskResume;case I.Stopped:return H.TaskDuplicateAndStart}},hint:T=>{switch(T.state){case I.Running:return"Pause";case I.Paused:return"Resume";case I.Stopped:return"Start a new copy"}},execute:T=>{switch(T.state){case I.Running:t.taskController.pauseTask(T);break;case I.Paused:t.taskController.startTask(T);break;case I.Stopped:t.taskController.duplicateAndStartTask(T);break}}},r={icon:T=>{switch(T.state){case I.Running:return H.TaskStop;case I.Paused:return H.TaskStop;case I.Stopped:return H.TaskResume}},hint:T=>{switch(T.state){case I.Running:return"Stop";case I.Paused:return"Stop";case I.Stopped:return"Start"}},execute:T=>{switch(T.state){case I.Running:t.taskController.stopTask(T);break;case I.Paused:t.taskController.stopTask(T);break;case I.Stopped:t.taskController.startTask(T);break}}};function s(T,yt){let Mt=yt?1:15;t.taskController.increaseDuration(n(),T?Mt:-Mt)}var i=xi(),o=S(i),u=S(o);Ut(u),u.__input=[kn,t,n];var l=N(u,2);Ut(l),l.__input=[kn,t,n];var f=N(l,2),m=S(f),d=N(S(m),2);{var p=T=>{var yt=bi(),Mt=S(yt);w(yt),$(()=>at(Mt,`Attached to Invoice Id: ${n().invoiceRefId??""}`)),F(T,yt)};W(d,T=>{n().invoiceRefId.length>0&&T(p)})}var y=N(d,2),h=S(y);Ut(h),h.__input=[yi,t,n];var v=N(h,2);v.__click=[ki,t,n],w(y),w(m),xn(2),w(f),w(o);var b=N(o,2),k=S(b);const P=V(()=>a.icon(n()));var x=V(()=>O(P));const _=V(()=>a.hint(n()));var E=V(()=>O(_));const M=V(()=>r.icon(n()));var L=V(()=>O(M));const R=V(()=>r.hint(n()));var bt=V(()=>O(R));vi(k,{get durationSeconds(){return n().duration},get affectiveDurationHours(){return n().affectiveDurationHours},onIncreaseDuration:s,get icon1(){return O(x)},onAction1Click:()=>a.execute(n()),get action1Hint(){return O(E)},get icon2(){return O(L)},onAction2Click:()=>r.execute(n()),get action2Hint(){return O(bt)}}),w(b),w(i),$(()=>ja(i,"s-running",n().state==I.Running)),Yt(u,()=>n().date,T=>n().date=T),Yt(l,()=>n().name,T=>n().name=T),Yt(h,()=>n().tagsAsText,T=>n().tagsAsText=T),F(e,i),pt()}An(["input","click"]);function Ai(e){const t=e-1;return t*t*t+1}function wi(e,{delay:t=0,duration:n=400,easing:a=Ai,axis:r="y"}={}){const s=getComputedStyle(e),i=+s.opacity,o=r==="y"?"height":"width",u=parseFloat(s[o]),l=r==="y"?["top","bottom"]:["left","right"],f=l.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),m=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),p=parseFloat(s[`margin${f[0]}`]),y=parseFloat(s[`margin${f[1]}`]),h=parseFloat(s[`border${f[0]}Width`]),v=parseFloat(s[`border${f[1]}Width`]);return{delay:t,duration:n,easing:a,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*i};${o}: ${b*u}px;padding-${l[0]}: ${b*m}px;padding-${l[1]}: ${b*d}px;margin-${l[0]}: ${b*p}px;margin-${l[1]}: ${b*y}px;border-${l[0]}-width: ${b*h}px;border-${l[1]}-width: ${b*v}px;min-${o}: 0`}}var Si=z("<div><!></div>");function jt(e,t){var n=wt(),a=mt(n);_n(a,19,()=>t.tasks,r=>r.id,(r,s)=>{var i=Si(),o=S(i);_i(o,{get vm(){return O(s)},get taskController(){return t.taskController}}),w(i),Ga(3,i,()=>wi,()=>({duration:200})),F(r,i)}),F(e,n)}var Pi=z("<option></option>"),Ti=z('<datalist id="list-task-names"></datalist>'),Ci=z('<form><fieldset role="group" class="svelte-1ps283u"><input name="task-name" type="text" placeholder="Whatcha doin?" spellcheck="true" list="list-task-names"> <!> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function Ei(e,t){ht(t,!0);let n=ft("");function a(l){l.preventDefault(),t.onStartTask(O(n)),Q(n,"")}var r=Ci(),s=S(r),i=S(s);Ut(i);var o=N(i,2);{var u=l=>{var f=Ti();_n(f,21,()=>t.previousTasksList,Fa,(m,d)=>{var p=Pi(),y={};$(()=>{y!==(y=O(d).name)&&(p.value=(p.__value=O(d).name)==null?"":O(d).name)}),F(m,p)}),w(f),F(l,f)};W(o,l=>{t.previousTasksList&&l(u)})}xn(2),w(s),w(r),Ma("submit",r,a),Yt(i,()=>O(n),l=>Q(n,l)),F(e,r),pt()}var Tt,Ct,Et,It,Ot;class Ii{constructor(){lt(this,Tt,ft(Y([])));lt(this,Ct,ft(Y([])));lt(this,Et,ft(Y([])));lt(this,It,ft(Y([])));lt(this,Ot,ft(Y([])));ot(this,"intervalId")}get previouslyUsedTasks(){return O(U(this,Tt))}set previouslyUsedTasks(t){Q(U(this,Tt),Y(t))}get tasksRunning(){return O(U(this,Ct))}set tasksRunning(t){Q(U(this,Ct),Y(t))}get tasksPaused(){return O(U(this,Et))}set tasksPaused(t){Q(U(this,Et),Y(t))}get tasksStopped(){return O(U(this,It))}set tasksStopped(t){Q(U(this,It),Y(t))}get tasksArchived(){return O(U(this,Ot))}set tasksArchived(t){Q(U(this,Ot),Y(t))}start(){this.stop(),this.refresh();for(const t of this.tasksRunning)t.recalculateDurationFromRunningSession();this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refresh(){const t=Qt.getAll().map(n=>new Jt(n));this.previouslyUsedTasks=t.sort((n,a)=>n.date>a.date?-1:1).slice(0,20),this.tasksRunning=this.fetchTasksByState(t,[I.Running]),this.tasksPaused=this.fetchTasksByState(t,[I.Paused]),this.tasksStopped=this.fetchTasksByState(t,[I.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[I.Archived])}fetchTasksByState(t,n){return t.filter(a=>n.includes(a.state))}startNewTask(t){const n=new Jt;n.name=t,this.startTask(n)}saveTask(t){Qt.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const n=new Jt(t.getModel(crypto.randomUUID()));n.setDuration(0),n.date=Da.toInputDateValue(new Date),n.invoiceRefId="",this.startTask(n)}increaseDuration(t,n){t.incrementDuration(n),this.saveTask(t)}deleteTask(t){Qt.remove(t.id),this.refresh()}}Tt=new WeakMap,Ct=new WeakMap,Et=new WeakMap,It=new WeakMap,Ot=new WeakMap;var Oi=z("<h2>Time Log</h2> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function Ki(e,t){ht(t,!0);let n=Y(new Ii);Ia(()=>{n.start()}),Oa(()=>{n.stop()});var a=Oi(),r=N(mt(a),2);Ei(r,{onStartTask:M=>n.startNewTask(M),get previousTasksList(){return n.previouslyUsedTasks}});var s=N(r,2),i=S(s),o=S(i);w(i);var u=N(i,2);jt(u,{get taskController(){return n},get tasks(){return n.tasksRunning}}),w(s);var l=N(s,2),f=S(l),m=S(f);w(f);var d=N(f,2);jt(d,{get taskController(){return n},get tasks(){return n.tasksPaused}}),w(l);var p=N(l,2),y=S(p),h=S(y),v=S(h);w(h);var b=N(h,2);jt(b,{get taskController(){return n},get tasks(){return n.tasksStopped}}),w(y),w(p);var k=N(p,2),P=S(k),x=S(P),_=S(x);w(x);var E=N(x,2);jt(E,{get taskController(){return n},get tasks(){return n.tasksArchived}}),w(P),w(k),$(()=>{at(o,`In Progress (${n.tasksRunning.length??""})`),at(m,`Paused (${n.tasksPaused.length??""})`),at(v,`Stopped (${n.tasksStopped.length??""})`),at(_,`Archived (${n.tasksArchived.length??""})`)}),F(e,a),pt()}export{Ki as component};
