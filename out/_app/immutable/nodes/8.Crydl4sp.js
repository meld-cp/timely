var sa=Object.defineProperty;var Fe=e=>{throw TypeError(e)};var ia=(e,t,n)=>t in e?sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>ia(e,typeof t!="symbol"?t+"":t,n),oa=(e,t,n)=>t.has(e)||Fe("Cannot "+n);var H=(e,t,n)=>(oa(e,t,"read from private field"),n?n.call(e):t.get(e)),bt=(e,t,n)=>t.has(e)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{d as Me,e as la,a as F,n as ca,c as wt,t as j}from"../chunks/CRRl4Swk.js";import{b as fa,h as Le,B as Re,d as ua,g as De,a3 as da,ax as ma,aw as ga,D as ha,W as Mt,e as pa,E as va,aN as ba,aO as ya,i as ka,u as xa,N as ze,as as _a,q as Aa,n as yt,aP as wa,aG as je,af as Ye,Z as Sa,p as mt,c as w,r as S,t as rt,a as gt,a7 as et,f as ut,w as M,aA as Pa,s as O,y as G,ab as kn,ac as kt}from"../chunks/UCO5opLl.js";import{b as Ta,s as nt}from"../chunks/vBULxvE1.js";import{p as B}from"../chunks/CQhzKiTL.js";import{o as Ca,a as Ea}from"../chunks/5U-_lmsG.js";import{e as Ia}from"../chunks/CAfQcJAG.js";import{i as X}from"../chunks/CnmQIJM7.js";import{b as Oa,s as Ue,r as jt}from"../chunks/DG_sXqrW.js";import{d as xn,k as Na}from"../chunks/BKxiCNa-.js";import{b as Yt}from"../chunks/D5xpou81.js";import{p as A,l as We,s as Fa}from"../chunks/Dh_rZ3BX.js";import"../chunks/CijJ9xER.js";import{i as _n}from"../chunks/tKYvEc2x.js";import{b as Ma}from"../chunks/DyGxP0AA.js";import{T as I,a as Zt,F as La}from"../chunks/Bjp3u8Cb.js";import{t as Qt}from"../chunks/BXFbSXWe.js";function Ra(e,t,n,a,r){var s=e,i="",o;fa(()=>{if(i===(i=t()??"")){Le&&Re();return}o!==void 0&&(pa(o),o=void 0),i!==""&&(o=ua(()=>{if(Le){De.data;for(var u=Re(),l=u;u!==null&&(u.nodeType!==8||u.data!=="");)l=u,u=da(u);if(u===null)throw ma(),ga;Me(De,l),s=ha(u);return}var f=i+"";f=`<svg>${f}</svg>`;var g=la(f);for(g=Mt(g),Me(Mt(g),g.lastChild);Mt(g);)s.before(Mt(g))}))})}function Da(e,t,n){if(n){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}const za=()=>performance.now(),V={tick:e=>requestAnimationFrame(e),now:()=>za(),tasks:new Set};function An(){const e=V.now();V.tasks.forEach(t=>{t.c(e)||(V.tasks.delete(t),t.f())}),V.tasks.size!==0&&V.tick(An)}function ja(e){let t;return V.tasks.size===0&&V.tick(An),{promise:new Promise(n=>{V.tasks.add(t={c:e,f:n})}),abort(){V.tasks.delete(t)}}}function Lt(e,t){e.dispatchEvent(new CustomEvent(t))}function Ya(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function He(e){const t={},n=e.split(";");for(const a of n){const[r,s]=a.split(":");if(!r||s===void 0)break;const i=Ya(r.trim());t[i]=s.trim()}return t}const Ua=e=>e;function Wa(e,t,n,a){var r=(e&wa)!==0,s="both",i,o=t.inert,u=t.style.overflow,l,f;function g(){var p=Sa,v=ze;je(null),Ye(null);try{return i??(i=n()(t,(a==null?void 0:a())??{},{direction:s}))}finally{je(p),Ye(v)}}var d={is_global:r,in(){t.inert=o,Lt(t,"introstart"),l=re(t,g(),f,1,()=>{Lt(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=u})},out(p){t.inert=!0,Lt(t,"outrostart"),f=re(t,g(),l,0,()=>{Lt(t,"outroend"),p==null||p()})},stop:()=>{l==null||l.abort(),f==null||f.abort()}},b=ze;if((b.transitions??(b.transitions=[])).push(d),Ta){var y=r;if(!y){for(var h=b.parent;h&&h.f&va;)for(;(h=h.parent)&&!(h.f&ba););y=!h||(h.f&ya)!==0}y&&ka(()=>{xa(()=>d.in())})}}function re(e,t,n,a,r){var s=a===1;if(_a(t)){var i,o=!1;return Aa(()=>{if(!o){var p=t({direction:s?"in":"out"});i=re(e,p,n,a,r)}}),{abort:()=>{o=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return r(),{abort:yt,deactivate:yt,reset:yt,t:()=>a};const{delay:u=0,css:l,tick:f,easing:g=Ua}=t;var d=[];if(s&&n===void 0&&(f&&f(0,1),l)){var b=He(l(0,1));d.push(b,b)}var y=()=>1-a,h=e.animate(d,{duration:u});return h.onfinish=()=>{var p=(n==null?void 0:n.t())??1-a;n==null||n.abort();var v=a-p,k=t.duration*Math.abs(v),P=[];if(k>0){var x=!1;if(l)for(var _=Math.ceil(k/16.666666666666668),E=0;E<=_;E+=1){var N=p+v*g(E/_),L=He(l(N,1-N));P.push(L),x||(x=L.overflow==="hidden")}x&&(e.style.overflow="hidden"),y=()=>{var R=h.currentTime;return p+v*g(R/k)},f&&ja(()=>{if(h.playState!=="running")return!1;var R=y();return f(R,1-R),!0})}h=e.animate(P,{duration:k,fill:"forwards"}),h.onfinish=()=>{y=()=>a,f==null||f(a,1-a),r()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=yt)},deactivate:()=>{r=yt},reset:()=>{a===0&&(f==null||f(1,0))},t:()=>y()}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ha={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},Ga={prefix:"fas",iconName:"eject",icon:[448,512,[9167],"f052","M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320L48 320c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z"]},Ba={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Xa={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},Va={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},qa={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Ka(e){const{beat:t,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:u,spinReverse:l,pulse:f,fixedWidth:g,inverse:d,border:b,listItem:y,flip:h,size:p,rotation:v,pull:k}=e,P={"fa-beat":t,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":g,"fa-inverse":d,"fa-border":b,"fa-li":y,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both",[`fa-${p}`]:typeof p<"u"&&p!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${k}`]:typeof k<"u"&&k!==null,"fa-swap-opacity":e.swapOpacity};return Object.keys(P).map(x=>P[x]?x:null).filter(x=>x)}function Za(e){return e=e-0,e===e}function Qa(e){return Za(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function Ja(e){return typeof e=="string"?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+e[n]+";","")}function wn(e,t,n={}){if(typeof t=="string")return t;const a=(t.children||[]).map(s=>wn(e,s)),r=Object.keys(t.attributes||{}).reduce((s,i)=>{const o=t.attributes[i];return i==="style"?s.attrs.style=Ja(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[Qa(i)]=o,s},{attrs:{}});return e(t.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function $a(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ge(Object(n),!0).forEach(function(a){$a(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function er(e){var t=tr(e,"string");return typeof t=="symbol"?t:t+""}const Be=()=>{};let _e={},Sn={},Pn=null,Tn={mark:Be,measure:Be};try{typeof window<"u"&&(_e=window),typeof document<"u"&&(Sn=document),typeof MutationObserver<"u"&&(Pn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}const{userAgent:Xe=""}=_e.navigator||{},J=_e,C=Sn,Ve=Pn,Rt=Tn;J.document;const Z=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Cn=~Xe.indexOf("MSIE")||~Xe.indexOf("Trident/");var nr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ar=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,En={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},rr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Bt="duotone",sr="sharp",ir="sharp-duotone",On=[D,Bt,sr,ir],or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},lr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),fr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ur=["fak","fa-kit","fakd","fa-kit-duotone"],qe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},dr=["kit"],mr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},gr=["fak","fakd"],hr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ke={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vr=["fak","fa-kit","fakd","fa-kit-duotone"],br={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},yr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},se={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},xr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ie=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...pr,...xr],_r=["solid","regular","light","thin","duotone","brands"],Nn=[1,2,3,4,5,6,7,8,9,10],Ar=Nn.concat([11,12,13,14,15,16,17,18,19,20]),wr=[...Object.keys(kr),..._r,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dt.GROUP,Dt.SWAP_OPACITY,Dt.PRIMARY,Dt.SECONDARY].concat(Nn.map(e=>"".concat(e,"x"))).concat(Ar.map(e=>"w-".concat(e))),Sr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const q="___FONT_AWESOME___",oe=16,Fn="fa",Mn="svg-inline--fa",st="data-fa-i2svg",le="data-fa-pseudo-element",Pr="data-fa-pseudo-element-pending",Ae="data-prefix",we="data-icon",Ze="fontawesome-i2svg",Tr="async",Cr=["HTML","HEAD","STYLE","SCRIPT"],Ln=(()=>{try{return!0}catch{return!1}})();function Ot(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[D]}})}const Rn=c({},En);Rn[D]=c(c(c(c({},{"fa-duotone":"duotone"}),En[D]),qe.kit),qe["kit-duotone"]);const Er=Ot(Rn),ce=c({},fr);ce[D]=c(c(c(c({},{duotone:"fad"}),ce[D]),Ke.kit),Ke["kit-duotone"]);const Qe=Ot(ce),fe=c({},se);fe[D]=c(c({},fe[D]),hr.kit);const Se=Ot(fe),ue=c({},yr);ue[D]=c(c({},ue[D]),mr.kit);Ot(ue);const Ir=nr,Dn="fa-layers-text",Or=ar,Nr=c({},or);Ot(Nr);const Fr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt=rr,Mr=[...dr,...wr],_t=J.FontAwesomeConfig||{};function Lr(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Rr(Lr(n));r!=null&&(_t[a]=r)});const zn={styleDefault:"solid",familyDefault:D,cssPrefix:Fn,replacementClass:Mn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const dt=c(c({},zn),_t);dt.autoReplaceSvg||(dt.observeMutations=!1);const m={};Object.keys(zn).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){dt[e]=t,At.forEach(n=>n(m))},get:function(){return dt[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){dt.cssPrefix=e,At.forEach(t=>t(m))},get:function(){return dt.cssPrefix}});J.FontAwesomeConfig=m;const At=[];function Dr(e){return At.push(e),()=>{At.splice(At.indexOf(e),1)}}const Q=oe,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zr(e){if(!e||!Z)return;const t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return C.head.insertBefore(t,a),e}const jr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){let e=12,t="";for(;e-- >0;)t+=jr[Math.random()*62|0];return t}function ht(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pe(e){return e.classList?ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(jn(e[n]),'" '),"").trim()}function Xt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Te(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Ur(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:l}}function Wr(e){let{transform:t,width:n=oe,height:a=oe,startCentered:r=!1}=e,s="";return r&&Cn?s+="translate(".concat(t.x/Q-n/2,"em, ").concat(t.y/Q-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/Q,"em), calc(-50% + ").concat(t.y/Q,"em)) "):s+="translate(".concat(t.x/Q,"em, ").concat(t.y/Q,"em) "),s+="scale(".concat(t.size/Q*(t.flipX?-1:1),", ").concat(t.size/Q*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Hr=`:root, :host {
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
}`;function Yn(){const e=Fn,t=Mn,n=m.cssPrefix,a=m.replacementClass;let r=Hr;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Je=!1;function $t(){m.autoAddCss&&!Je&&(zr(Yn()),Je=!0)}var Gr={mixout(){return{dom:{css:Yn,insertCss:$t}}},hooks(){return{beforeDOMElementCreation(){$t()},beforeI2svg(){$t()}}}};const K=J||{};K[q]||(K[q]={});K[q].styles||(K[q].styles={});K[q].hooks||(K[q].hooks={});K[q].shims||(K[q].shims=[]);var W=K[q];const Un=[],Wn=function(){C.removeEventListener("DOMContentLoaded",Wn),Ht=1,Un.map(e=>e())};let Ht=!1;Z&&(Ht=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ht||C.addEventListener("DOMContentLoaded",Wn));function Br(e){Z&&(Ht?setTimeout(e,0):Un.push(e))}function Nt(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?jn(e):"<".concat(t," ").concat(Yr(n),">").concat(a.map(Nt).join(""),"</").concat(t,">")}function $e(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var te=function(t,n,a,r){var s=Object.keys(t),i=s.length,o=n,u,l,f;for(a===void 0?(u=1,f=t[s[0]]):(u=0,f=a);u<i;u++)l=s[u],f=o(f,t[l],l,t);return f};function Xr(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function de(e){const t=Xr(e);return t.length===1?t[0].toString(16):null}function Vr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function tn(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function me(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=tn(t);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(e,tn(t)):W.styles[e]=c(c({},W.styles[e]||{}),r),e==="fas"&&me("fa",t)}const{styles:Pt,shims:qr}=W,Hn=Object.keys(Se),Kr=Hn.reduce((e,t)=>(e[t]=Object.keys(Se[t]),e),{});let Ce=null,Gn={},Bn={},Xn={},Vn={},qn={};function Zr(e){return~Mr.indexOf(e)}function Qr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Zr(r)?r:null}const Kn=()=>{const e=a=>te(Pt,(r,s,i)=>(r[i]=te(s,a,{}),r),{});Gn=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Bn=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),qn=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const t="far"in Pt||m.autoFetchSvg,n=te(qr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Xn=n.names,Vn=n.unicodes,Ce=Vt(m.styleDefault,{family:m.familyDefault})};Dr(e=>{Ce=Vt(e.styleDefault,{family:m.familyDefault})});Kn();function Ee(e,t){return(Gn[e]||{})[t]}function Jr(e,t){return(Bn[e]||{})[t]}function at(e,t){return(qn[e]||{})[t]}function Zn(e){return Xn[e]||{prefix:null,iconName:null}}function $r(e){const t=Vn[e],n=Ee("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return Ce}const Qn=()=>({prefix:null,iconName:null,rest:[]});function ts(e){let t=D;const n=Hn.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return On.forEach(a=>{(e.includes(n[a])||e.some(r=>Kr[a].includes(r)))&&(t=a)}),t}function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=t,a=Er[n][e];if(n===Bt&&!e)return"fad";const r=Qe[n][e]||Qe[n][a],s=e in W.styles?e:null;return r||s||null}function es(e){let t=[],n=null;return e.forEach(a=>{const r=Qr(m.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function en(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=ie.concat(vr),s=en(e.filter(g=>r.includes(g))),i=en(e.filter(g=>!ie.includes(g))),o=s.filter(g=>(a=g,!In.includes(g))),[u=null]=o,l=ts(s),f=c(c({},es(i)),{},{prefix:Vt(u,{family:l})});return c(c(c({},f),ss({values:e,family:l,styles:Pt,config:m,canonical:f,givenPrefix:a})),ns(n,a,f))}function ns(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?Zn(r):{},i=at(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!Pt.far&&Pt.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const as=On.filter(e=>e!==D||e!==Bt),rs=Object.keys(se).filter(e=>e!==D).map(e=>Object.keys(se[e])).flat();function ss(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,o=n===Bt,u=t.includes("fa-duotone")||t.includes("fad"),l=i.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||l||f)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&as.includes(n)&&(Object.keys(s).find(d=>rs.includes(d))||i.autoFetchSvg)){const d=cr.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=at(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=$()||"fas"),a}class is{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),me(s,r[s]);const i=Se[D][s];i&&me(i,r[s]),Kn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],u=o[2];t[s]||(t[s]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(t[s][l]=o)}),t[s][i]=o}),t}}let nn=[],ct={};const ft={},os=Object.keys(ft);function ls(e,t){let{mixoutsTo:n}=t;return nn=e,ct={},Object.keys(ft).forEach(a=>{os.indexOf(a)===-1&&delete ft[a]}),nn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{ct[i]||(ct[i]=[]),ct[i].push(s[i])})}a.provides&&a.provides(ft)}),n}function ge(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ct[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function it(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ct[e]||[]).forEach(s=>{s.apply(null,n)})}function tt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ft[e]?ft[e].apply(null,t):void 0}function he(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||$();if(t)return t=at(n,t)||t,$e(Jn.definitions,n,t)||$e(W.styles,n,t)}const Jn=new is,cs=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,it("noAuto")},fs={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(it("beforeI2svg",e),tt("pseudoElements2svg",e),tt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Br(()=>{ds({autoReplaceSvgRoot:t}),it("watch",e)})}},us={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:at(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Vt(e[0]);return{prefix:n,iconName:at(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Ir))){const t=qt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||$(),iconName:at(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=$();return{prefix:t,iconName:at(t,e)||e}}}},z={noAuto:cs,config:m,dom:fs,parse:us,library:Jn,findIconDefinition:he,toHtml:Nt},ds=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=C}=e;(Object.keys(W.styles).length>0||m.autoFetchSvg)&&Z&&m.autoReplaceSvg&&z.dom.i2svg({node:t})};function Kt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Nt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Z)return;const n=C.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ms(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(Te(i)&&n.found&&!a.found){const{width:o,height:u}=n,l={x:o/u/2,y:.5};r.style=Xt(c(c({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function gs(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Ie(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:u,titleId:l,extra:f,watchable:g=!1}=e,{width:d,height:b}=n.found?n:t,y=gr.includes(a),h=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(_=>f.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(f.classes).join(" ");let p={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const v=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};g&&(p.attributes[st]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(l||St())},children:[o]}),delete p.attributes.title);const k=c(c({},p),{},{prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:i,styles:c(c({},v),f.styles)}),{children:P,attributes:x}=n.found&&t.found?tt("generateAbstractMask",k)||{children:[],attributes:{}}:tt("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=P,k.attributes=x,i?gs(k):ms(k)}function an(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=e,u=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(u[st]="");const l=c({},i.styles);Te(r)&&(l.transform=Wr({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const f=Xt(l);f.length>0&&(u.style=f);const g=[];return g.push({tag:"span",attributes:u,children:[t]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function hs(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Xt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ee}=W;function pe(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ps={found:!1,width:512,height:512};function vs(e,t){!Ln&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ve(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=$()),new Promise((a,r)=>{if(n==="fa"){const s=Zn(e);e=s.iconName||e,t=s.prefix||t}if(e&&t&&ee[t]&&ee[t][e]){const s=ee[t][e];return a(pe(s))}vs(e,t),a(c(c({},ps),{},{icon:m.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}const rn=()=>{},be=m.measurePerformance&&Rt&&Rt.mark&&Rt.measure?Rt:{mark:rn,measure:rn},xt='FA "6.7.2"',bs=e=>(be.mark("".concat(xt," ").concat(e," begins")),()=>$n(e)),$n=e=>{be.mark("".concat(xt," ").concat(e," ends")),be.measure("".concat(xt," ").concat(e),"".concat(xt," ").concat(e," begins"),"".concat(xt," ").concat(e," ends"))};var Oe={begin:bs,end:$n};const Ut=()=>{};function sn(e){return typeof(e.getAttribute?e.getAttribute(st):null)=="string"}function ys(e){const t=e.getAttribute?e.getAttribute(Ae):null,n=e.getAttribute?e.getAttribute(we):null;return t&&n}function ks(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function xs(){return m.autoReplaceSvg===!0?Wt.replace:Wt[m.autoReplaceSvg]||Wt.replace}function _s(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function As(e){return C.createElement(e)}function ta(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?_s:As}=t;if(typeof e=="string")return C.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(ta(s,{ceFn:n}))}),a}function ws(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Wt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ta(n),t)}),t.getAttribute(st)===null&&m.keepOriginalSource){let n=C.createComment(ws(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Pe(t).indexOf(m.replacementClass))return Wt.replace(e);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===m.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Nt(s)).join(`
`);t.setAttribute(st,""),t.innerHTML=r}};function on(e){e()}function ea(e,t){const n=typeof t=="function"?t:Ut;if(e.length===0)n();else{let a=on;m.mutateApproach===Tr&&(a=J.requestAnimationFrame||on),a(()=>{const r=xs(),s=Oe.begin("mutate");e.map(r),s(),n()})}}let Ne=!1;function na(){Ne=!0}function ye(){Ne=!1}let Gt=null;function ln(e){if(!Ve||!m.observeMutations)return;const{treeCallback:t=Ut,nodeCallback:n=Ut,pseudoElementsCallback:a=Ut,observeMutationsRoot:r=C}=e;Gt=new Ve(s=>{if(Ne)return;const i=$();ht(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!sn(o.addedNodes[0])&&(m.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&sn(o.target)&&~Fr.indexOf(o.attributeName))if(o.attributeName==="class"&&ys(o.target)){const{prefix:u,iconName:l}=qt(Pe(o.target));o.target.setAttribute(Ae,u||i),l&&o.target.setAttribute(we,l)}else ks(o.target)&&n(o.target)})}),Z&&Gt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ss(){Gt&&Gt.disconnect()}function Ps(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Ts(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=qt(Pe(e));return r.prefix||(r.prefix=$()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Jr(r.prefix,e.innerText)||Ee(r.prefix,de(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Cs(e){const t=ht(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||St()):(t["aria-hidden"]="true",t.focusable="false")),t}function Es(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ts(e),s=Cs(e),i=ge("parseNodeAttributes",{},e);let o=t.styleParser?Ps(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Is}=W;function aa(e){const t=m.autoReplaceSvg==="nest"?cn(e,{styleParser:!1}):cn(e);return~t.extra.classes.indexOf(Dn)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}function Os(){return[...ur,...ie]}function fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();const n=C.documentElement.classList,a=f=>n.add("".concat(Ze,"-").concat(f)),r=f=>n.remove("".concat(Ze,"-").concat(f)),s=m.autoFetchSvg?Os():In.concat(Object.keys(Is));s.includes("fa")||s.push("fa");const i=[".".concat(Dn,":not([").concat(st,"])")].concat(s.map(f=>".".concat(f,":not([").concat(st,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=ht(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Oe.begin("onTree"),l=o.reduce((f,g)=>{try{const d=aa(g);d&&f.push(d)}catch(d){Ln||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,g)=>{Promise.all(l).then(d=>{ea(d,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),f()})}).catch(d=>{u(),g(d)})})}function Ns(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aa(e).then(n=>{n&&ea([n],t)})}function Fs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:he(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:he(r||{})),e(a,c(c({},n),{},{mask:r}))}}const Ms=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:u=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:g,iconName:d,icon:b}=e;return Kt(c({type:"icon"},e),()=>(it("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(i?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||St()):(l["aria-hidden"]="true",l.focusable="false")),Ie({icons:{main:pe(b),mask:r?pe(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:c(c({},U),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:l,styles:f,classes:u}})))};var Ls={mixout(){return{icon:Fs(Ms)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=fn,e.nodeCallback=Ns,e}}},provides(e){e.i2svg=function(t){const{node:n=C,callback:a=()=>{}}=t;return fn(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:u,mask:l,maskId:f,extra:g}=n;return new Promise((d,b)=>{Promise.all([ve(a,i),l.iconName?ve(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[h,p]=y;d([t,Ie({icons:{main:h,mask:p},prefix:i,iconName:a,transform:o,symbol:u,maskId:f,title:r,titleId:s,extra:g,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const o=Xt(i);o.length>0&&(a.style=o);let u;return Te(s)&&(u=tt("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Rs={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Kt({type:"layer"},()=>{it("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ds={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Kt({type:"counter",content:e},()=>(it("beforeDOMElementCreation",{content:e,params:t}),hs({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},zs={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return Kt({type:"text",content:e},()=>(it("beforeDOMElementCreation",{content:e,params:t}),an({content:e,transform:c(c({},U),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Cn){const u=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/u,o=l.height/u}return m.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,an({content:t.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const js=new RegExp('"',"ug"),un=[1105920,1112319],dn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),lr),Sr),br),ke=Object.keys(dn).reduce((e,t)=>(e[t.toLowerCase()]=dn[t],e),{}),Ys=Object.keys(ke).reduce((e,t)=>{const n=ke[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Us(e){const t=e.replace(js,""),n=Vr(t,0),a=n>=un[0]&&n<=un[1],r=t.length===2?t[0]===t[1]:!1;return{value:de(r?t[0]:t),isSecondary:a||r}}function Ws(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(ke[n]||{})[r]||Ys[n]}function mn(e,t){const n="".concat(Pr).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=ht(e.children).filter(d=>d.getAttribute(le)===t)[0],o=J.getComputedStyle(e,t),u=o.getPropertyValue("font-family"),l=u.match(Or),f=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&g!=="none"&&g!==""){const d=o.getPropertyValue("content");let b=Ws(u,f);const{value:y,isSecondary:h}=Us(d),p=l[0].startsWith("FontAwesome");let v=Ee(b,y),k=v;if(p){const P=$r(y);P.iconName&&P.prefix&&(v=P.iconName,b=P.prefix)}if(v&&!h&&(!i||i.getAttribute(Ae)!==b||i.getAttribute(we)!==k)){e.setAttribute(n,k),i&&e.removeChild(i);const P=Es(),{extra:x}=P;x.attributes[le]=t,ve(v,b).then(_=>{const E=Ie(c(c({},P),{},{icons:{main:_,mask:Qn()},prefix:b,iconName:k,extra:x,watchable:!0})),N=C.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=E.map(L=>Nt(L)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Hs(e){return Promise.all([mn(e,"::before"),mn(e,"::after")])}function Gs(e){return e.parentNode!==document.head&&!~Cr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(le)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gn(e){if(Z)return new Promise((t,n)=>{const a=ht(e.querySelectorAll("*")).filter(Gs).map(Hs),r=Oe.begin("searchPseudoElements");na(),Promise.all(a).then(()=>{r(),ye(),t()}).catch(()=>{r(),ye(),n()})})}var Bs={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=gn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=C}=t;m.searchPseudoElements&&gn(n)}}};let hn=!1;var Xs={mixout(){return{dom:{unwatch(){na(),hn=!0}}}},hooks(){return{bootstrap(){ln(ge("mutationObserverCallbacks",{}))},noAuto(){Ss()},watch(e){const{observeMutationsRoot:t}=e;hn?ye():ln(ge("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const pn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Vs={mixout(){return{parse:{transform:e=>pn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=pn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(o," ").concat(u," ").concat(l)},g={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:f,path:g};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const ne={x:0,y:0,width:"100%",height:"100%"};function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qs(e){return e.tag==="g"?e.children:[e]}var Ks={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?qt(n.split(" ").map(r=>r.trim())):Qn();return a.prefix||(a.prefix=$()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=t;const{width:u,icon:l}=r,{width:f,icon:g}=s,d=Ur({transform:o,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:c(c({},ne),{},{fill:"white"})},y=l.children?{children:l.children.map(vn)}:{},h={tag:"g",attributes:c({},d.inner),children:[vn(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},y))]},p={tag:"g",attributes:c({},d.outer),children:[h]},v="mask-".concat(i||St()),k="clip-".concat(i||St()),P={tag:"mask",attributes:c(c({},ne),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:qs(g)},P]};return n.push(x,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(v,")")},ne)}),{children:n,attributes:a}}}},Zs={provides(e){let t=!1;J.matchMedia&&(t=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Js=[Gr,Ls,Rs,Ds,zs,Bs,Xs,Vs,Ks,Zs,Qs];ls(Js,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;const xe=z.parse;z.findIconDefinition;z.toHtml;const $s=z.icon;z.layer;z.text;z.counter;let ra=!1;try{ra=!0}catch{}function ti(...e){!ra&&console&&typeof console.error=="function"&&console.error(...e)}function bn(e){if(e&&typeof e=="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xe.icon)return xe.icon(e);if(e===null)return null;if(e&&typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ae(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var ei=ca("<svg><!></svg>");function ni(e,t){var h;mt(t,!1);let n=A(t,"tag",8),a=A(t,"props",8),r=A(t,"children",8),s=A(t,"style",8,null),i=A(t,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(p){return(p==null?void 0:p.reduce((v,k)=>v+(k.tag?u(k):k),""))||""}function u({tag:p,props:v,children:k}){const P=Object.keys(v).map(x=>`${x}="${v[x]}"`).join(" ");return`<${p} ${P}>${o(k)}</${p}>`}const l=o(r()),f=(h=a())!=null&&h.style?`${a().style}${s()||""}`:s(),g={...a(),style:f};_n();var d=ei();let b;var y=w(d);Ra(y,()=>l),S(d),Ma(d,p=>i(p),()=>i()),rt(()=>b=Oa(d,b,{...g},void 0,!0)),F(e,d),gt()}function ai(e,t){const n=We(t,["children","$$slots","$$events","$$legacy"]),a=We(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);mt(t,!1),A(t,"border",8,!1);let r=A(t,"mask",8,null),s=A(t,"maskId",8,null);A(t,"fixedWidth",8,!1),A(t,"inverse",8,!1),A(t,"flip",8,!1);let i=A(t,"icon",8,null);A(t,"listItem",8,!1),A(t,"pull",8,null),A(t,"pulse",8,!1),A(t,"rotation",8,null),A(t,"size",8,null),A(t,"spin",8,!1),A(t,"spinPulse",8,!1),A(t,"spinReverse",8,!1),A(t,"beat",8,!1),A(t,"fade",8,!1),A(t,"beatFade",8,!1),A(t,"bounce",8,!1),A(t,"shake",8,!1);let o=A(t,"symbol",8,!1),u=A(t,"title",8,""),l=A(t,"titleId",8,null),f=A(t,"transform",8,null);A(t,"swapOpacity",8,!1);let g=A(t,"ref",12,null),d=A(t,"style",8,null);const b=bn(i()),y=ae("classes",[...Ka(n),...(n.class||"").split(" ")]),h=ae("transform",typeof f()=="string"?xe.transform(f()):f()),p=ae("mask",bn(r())),v=$s(b,{...y,...h,...p,symbol:o(),title:u(),titleId:l(),maskId:s()});let k=Pa(null);if(!v)ti("Could not find icon",b);else{const{abstract:E}=v;et(k,wn((N,L,R)=>({tag:N,props:L,children:R}),E[0],a))}_n();var P=wt(),x=ut(P);{var _=E=>{ni(E,Fa(()=>M(k),{get style(){return d()},get ref(){return g()},set ref(N){g(N)},$$legacy:!0}))};X(x,E=>{M(k)&&E(_)})}F(e,P),gt()}function lt(e,t){var n=wt(),a=ut(n);{var r=s=>{ai(s,{get icon(){return t.icon}})};X(a,s=>{t.icon&&s(r)})}F(e,n)}var ri=(e,t)=>t.onIncreaseDuration(!0,e.ctrlKey),si=(e,t)=>t.onIncreaseDuration(!1,e.ctrlKey),ii=j('<div class="c-buttons svelte-1ifz5q4"><button class="outline svelte-1ifz5q4" title="Add Time"><!></button> <button class="outline svelte-1ifz5q4" title="Remove Time"><!></button></div>'),oi=(e,t)=>t.onAction1Click(),li=j('<button class="outline svelte-1ifz5q4"><!></button>'),ci=j('<div class="icon"><!></div>'),fi=(e,t)=>t.onAction2Click(),ui=j('<button class="outline secondary svelte-1ifz5q4"><!></button>'),di=j('<div class="icon secondary"><!></div>'),mi=j('<div class="c-buttons svelte-1ifz5q4"><!> <!></div>'),gi=j('<div class="c-main svelte-1ifz5q4"><!> <div class="affective svelte-1ifz5q4"> </div> <div class="counter svelte-1ifz5q4"> </div> <!></div>');function hi(e,t){mt(t,!0);let n=G(()=>{const d=Math.floor(Math.abs(t.durationSeconds)/60/60),b=Math.floor(Math.abs(t.durationSeconds/60)),y=Math.abs(b%60),h=Math.abs(t.durationSeconds%60),p=[d.toFixed(0)+"h",y.toFixed(0)+"m",h.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+p.join(" ")});var a=gi(),r=w(a);{var s=d=>{var b=ii(),y=w(b);y.__click=[ri,t];var h=w(y);lt(h,{icon:qa}),S(y);var p=O(y,2);p.__click=[si,t];var v=w(p);lt(v,{icon:Ba}),S(p),S(b),F(d,b)};X(r,d=>{t.onIncreaseDuration&&d(s)})}var i=O(r,2),o=w(i,!0);S(i);var u=O(i,2),l=w(u,!0);S(u);var f=O(u,2);{var g=d=>{var b=mi(),y=w(b);{var h=x=>{var _=li();_.__click=[oi,t];var E=w(_);lt(E,{get icon(){return t.icon1}}),S(_),rt(()=>Ue(_,"title",t.action1Hint)),F(x,_)},p=x=>{var _=wt(),E=ut(_);{var N=L=>{var R=ci(),pt=w(R);lt(pt,{get icon(){return t.icon1}}),S(R),F(L,R)};X(E,L=>{t.icon1&&L(N)},!0)}F(x,_)};X(y,x=>{t.onAction1Click?x(h):x(p,!1)})}var v=O(y,2);{var k=x=>{var _=ui();_.__click=[fi,t];var E=w(_);lt(E,{get icon(){return t.icon2}}),S(_),rt(()=>Ue(_,"title",t.action2Hint)),F(x,_)},P=x=>{var _=wt(),E=ut(_);{var N=L=>{var R=di(),pt=w(R);lt(pt,{get icon(){return t.icon2}}),S(R),F(L,R)};X(E,L=>{t.icon2&&L(N)},!0)}F(x,_)};X(v,x=>{t.onAction2Click?x(k):x(P,!1)})}S(b),F(d,b)};X(f,d=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&d(g)})}S(a),rt(d=>{nt(o,d),nt(l,M(n))},[()=>{var d;return(d=t.affectiveDurationHours)==null?void 0:d.toFixed(2)}]),F(e,a),gt()}xn(["click"]);class Y{}ot(Y,"TaskPause",Ha),ot(Y,"TaskResume",Va),ot(Y,"TaskStop",Xa),ot(Y,"TaskDuplicateAndStart",Ga);function yn(e,t,n){t.taskController.saveTask(n())}var pi=j('<span style="flex: content;" class="inv" title="Invoice"> </span>'),vi=(e,t,n)=>{var a;return(a=t.taskController)==null?void 0:a.saveTask(n())},bi=(e,t,n)=>t.taskController.deleteTask(n()),yi=j('<article class="c-task svelte-1jzxame"><div class="c-task-fields svelte-1jzxame"><input class="date svelte-1jzxame" name="task-date" type="date" title="Date"> <input class="name svelte-1jzxame" name="task-name" type="text" title="Description" placeholder="Description"> <div class="c-task-fields-row-2 svelte-1jzxame"><details class="svelte-1jzxame"><summary class="svelte-1jzxame">Other</summary> <!> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-1jzxame" name="task-tags" type="text" placeholder="Tags" title="Tags"> <button style="flex: content;" class="svelte-1jzxame">Delete</button></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-1jzxame"><!></div></article>');function ki(e,t){mt(t,!0);let n=A(t,"vm",7);const a={icon:T=>{switch(T.state){case I.Running:return Y.TaskPause;case I.Paused:return Y.TaskResume;case I.Stopped:return Y.TaskDuplicateAndStart}},hint:T=>{switch(T.state){case I.Running:return"Pause";case I.Paused:return"Resume";case I.Stopped:return"Start a new copy"}},execute:T=>{switch(T.state){case I.Running:t.taskController.pauseTask(T);break;case I.Paused:t.taskController.startTask(T);break;case I.Stopped:t.taskController.duplicateAndStartTask(T);break}}},r={icon:T=>{switch(T.state){case I.Running:return Y.TaskStop;case I.Paused:return Y.TaskStop;case I.Stopped:return Y.TaskResume}},hint:T=>{switch(T.state){case I.Running:return"Stop";case I.Paused:return"Stop";case I.Stopped:return"Start"}},execute:T=>{switch(T.state){case I.Running:t.taskController.stopTask(T);break;case I.Paused:t.taskController.stopTask(T);break;case I.Stopped:t.taskController.startTask(T);break}}};function s(T,vt){let Ft=vt?1:15;t.taskController.increaseDuration(n(),T?Ft:-Ft)}var i=yi(),o=w(i),u=w(o);jt(u),u.__input=[yn,t,n];var l=O(u,2);jt(l),l.__input=[yn,t,n];var f=O(l,2),g=w(f),d=O(w(g),2);{var b=T=>{var vt=pi(),Ft=w(vt);S(vt),rt(()=>nt(Ft,`Attached to Invoice Id: ${n().invoiceRefId??""}`)),F(T,vt)};X(d,T=>{n().invoiceRefId.length>0&&T(b)})}var y=O(d,2),h=w(y);jt(h),h.__input=[vi,t,n];var p=O(h,2);p.__click=[bi,t,n],S(y),S(g),kn(2),S(f),S(o);var v=O(o,2),k=w(v);const P=G(()=>a.icon(n()));var x=G(()=>M(P));const _=G(()=>a.hint(n()));var E=G(()=>M(_));const N=G(()=>r.icon(n()));var L=G(()=>M(N));const R=G(()=>r.hint(n()));var pt=G(()=>M(R));hi(k,{get durationSeconds(){return n().duration},get affectiveDurationHours(){return n().affectiveDurationHours},onIncreaseDuration:s,get icon1(){return M(x)},onAction1Click:()=>a.execute(n()),get action1Hint(){return M(E)},get icon2(){return M(L)},onAction2Click:()=>r.execute(n()),get action2Hint(){return M(pt)}}),S(v),S(i),rt(()=>Da(i,"s-running",n().state==I.Running)),Yt(u,()=>n().date,T=>n().date=T),Yt(l,()=>n().name,T=>n().name=T),Yt(h,()=>n().tagsAsText,T=>n().tagsAsText=T),F(e,i),gt()}xn(["input","click"]);function xi(e){const t=e-1;return t*t*t+1}function _i(e,{delay:t=0,duration:n=400,easing:a=xi,axis:r="y"}={}){const s=getComputedStyle(e),i=+s.opacity,o=r==="y"?"height":"width",u=parseFloat(s[o]),l=r==="y"?["top","bottom"]:["left","right"],f=l.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),g=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),b=parseFloat(s[`margin${f[0]}`]),y=parseFloat(s[`margin${f[1]}`]),h=parseFloat(s[`border${f[0]}Width`]),p=parseFloat(s[`border${f[1]}Width`]);return{delay:t,duration:n,easing:a,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*i};${o}: ${v*u}px;padding-${l[0]}: ${v*g}px;padding-${l[1]}: ${v*d}px;margin-${l[0]}: ${v*b}px;margin-${l[1]}: ${v*y}px;border-${l[0]}-width: ${v*h}px;border-${l[1]}-width: ${v*p}px;min-${o}: 0`}}var Ai=j("<div><!></div>");function zt(e,t){var n=wt(),a=ut(n);Ia(a,19,()=>t.tasks,r=>r.id,(r,s)=>{var i=Ai(),o=w(i);ki(o,{get vm(){return M(s)},get taskController(){return t.taskController}}),S(i),Wa(3,i,()=>_i,()=>({duration:200})),F(r,i)}),F(e,n)}var wi=j('<form><fieldset role="group" class="svelte-1ps283u"><input id="taskname" type="text" placeholder="Whatcha doin?" autocorrect="on" autocomplete="on"> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function Si(e,t){mt(t,!0);let n=kt("");function a(o){o.preventDefault(),t.onStartTask(M(n)),et(n,"")}var r=wi(),s=w(r),i=w(s);jt(i),kn(2),S(s),S(r),Na("submit",r,a),Yt(i,()=>M(n),o=>et(n,o)),F(e,r),gt()}var Tt,Ct,Et,It;class Pi{constructor(){bt(this,Tt,kt(B([])));bt(this,Ct,kt(B([])));bt(this,Et,kt(B([])));bt(this,It,kt(B([])));ot(this,"intervalId")}get tasksRunning(){return M(H(this,Tt))}set tasksRunning(t){et(H(this,Tt),B(t))}get tasksPaused(){return M(H(this,Ct))}set tasksPaused(t){et(H(this,Ct),B(t))}get tasksStopped(){return M(H(this,Et))}set tasksStopped(t){et(H(this,Et),B(t))}get tasksArchived(){return M(H(this,It))}set tasksArchived(t){et(H(this,It),B(t))}start(){this.stop(),this.refresh();for(const t of this.tasksRunning)t.recalculateDurationFromRunningSession();this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refresh(){const t=Qt.getAll().map(n=>new Zt(n));this.tasksRunning=this.fetchTasksByState(t,[I.Running]),this.tasksPaused=this.fetchTasksByState(t,[I.Paused]),this.tasksStopped=this.fetchTasksByState(t,[I.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[I.Archived])}fetchTasksByState(t,n){return t.filter(a=>n.includes(a.state))}startNewTask(t){const n=new Zt;n.name=t,this.startTask(n)}saveTask(t){Qt.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const n=new Zt(t.getModel(crypto.randomUUID()));n.setDuration(0),n.date=La.toInputDateValue(new Date),n.invoiceRefId="",this.startTask(n)}increaseDuration(t,n){t.incrementDuration(n),this.saveTask(t)}deleteTask(t){Qt.remove(t.id),this.refresh()}}Tt=new WeakMap,Ct=new WeakMap,Et=new WeakMap,It=new WeakMap;var Ti=j("<h2>Time Log</h2> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function Bi(e,t){mt(t,!0);let n=B(new Pi);Ca(()=>{n.start()}),Ea(()=>{n.stop()});var a=Ti(),r=O(ut(a),2);Si(r,{onStartTask:N=>n.startNewTask(N)});var s=O(r,2),i=w(s),o=w(i);S(i);var u=O(i,2);zt(u,{get taskController(){return n},get tasks(){return n.tasksRunning}}),S(s);var l=O(s,2),f=w(l),g=w(f);S(f);var d=O(f,2);zt(d,{get taskController(){return n},get tasks(){return n.tasksPaused}}),S(l);var b=O(l,2),y=w(b),h=w(y),p=w(h);S(h);var v=O(h,2);zt(v,{get taskController(){return n},get tasks(){return n.tasksStopped}}),S(y),S(b);var k=O(b,2),P=w(k),x=w(P),_=w(x);S(x);var E=O(x,2);zt(E,{get taskController(){return n},get tasks(){return n.tasksArchived}}),S(P),S(k),rt(()=>{nt(o,`In Progress (${n.tasksRunning.length??""})`),nt(g,`Paused (${n.tasksPaused.length??""})`),nt(p,`Stopped (${n.tasksStopped.length??""})`),nt(_,`Archived (${n.tasksArchived.length??""})`)}),F(e,a),gt()}export{Bi as component};
