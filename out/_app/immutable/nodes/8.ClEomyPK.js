var na=Object.defineProperty;var Ie=e=>{throw TypeError(e)};var aa=(e,t,n)=>t in e?na(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var st=(e,t,n)=>aa(e,typeof t!="symbol"?t+"":t,n),ra=(e,t,n)=>t.has(e)||Ie("Cannot "+n);var W=(e,t,n)=>(ra(e,t,"read from private field"),n?n.call(e):t.get(e)),gt=(e,t,n)=>t.has(e)?Ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{b as Oe,e as sa,a as M,n as ia,c as xt,t as z}from"../chunks/disclose-version.wL0fmYXF.js";import{b as oa,h as Ne,C as Fe,d as la,i as Me,N as ca,Q as fa,O as ua,F as da,L as It,g as ma,E as ga,aN as ha,aO as pa,j as va,u as ba,Y as Le,ap as ya,q as ka,e as ht,aP as xa,aw as Re,aa as De,ax as _a,p as ut,c as S,r as P,t as Q,a as dt,a2 as tt,f as ct,x as R,aq as Aa,s as N,z as pt,n as vn,a7 as vt}from"../chunks/runtime.lwdHLtGF.js";import{a as wa,s as et}from"../chunks/render.b5GiqjI_.js";import{p as H}from"../chunks/proxy.E1uy1Vwt.js";import{o as Sa,a as Pa}from"../chunks/index-client.CgE72aKC.js";import{T as I,e as Ta,a as qt,F as Ca}from"../chunks/ViewModels.svelte.DWitS8JO.js";import{i as G}from"../chunks/if.DxBn1DTk.js";import{b as Ea,s as ze,r as Lt}from"../chunks/attributes.B2nDsigi.js";import{d as bn,g as Ia}from"../chunks/events.BkSEa6sA.js";import{b as Rt}from"../chunks/input.CzHuGUdJ.js";import{p as w,l as je,s as Oa}from"../chunks/props.Cowejr5R.js";import"../chunks/legacy.CR4e7jiW.js";import{i as yn}from"../chunks/lifecycle.CY1K0UPp.js";import{b as Na}from"../chunks/this.DQOy2oYF.js";import{t as Vt}from"../chunks/Singletons.BXFbSXWe.js";function Fa(e,t,n,a,r){var s=e,i="",o;oa(()=>{if(i===(i=t()??"")){Ne&&Fe();return}o!==void 0&&(ma(o),o=void 0),i!==""&&(o=la(()=>{if(Ne){Me.data;for(var u=Fe(),l=u;u!==null&&(u.nodeType!==8||u.data!=="");)l=u,u=ca(u);if(u===null)throw fa(),ua;Oe(Me,l),s=da(u);return}var f=i+"";f=`<svg>${f}</svg>`;var g=sa(f);for(g=It(g),Oe(It(g),g.lastChild);It(g);)s.before(It(g))}))})}function Ma(e,t,n){if(n){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}const La=()=>performance.now(),B={tick:e=>requestAnimationFrame(e),now:()=>La(),tasks:new Set};function kn(){const e=B.now();B.tasks.forEach(t=>{t.c(e)||(B.tasks.delete(t),t.f())}),B.tasks.size!==0&&B.tick(kn)}function Ra(e){let t;return B.tasks.size===0&&B.tick(kn),{promise:new Promise(n=>{B.tasks.add(t={c:e,f:n})}),abort(){B.tasks.delete(t)}}}function Ot(e,t){e.dispatchEvent(new CustomEvent(t))}function Da(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Ye(e){const t={},n=e.split(";");for(const a of n){const[r,s]=a.split(":");if(!r||s===void 0)break;const i=Da(r.trim());t[i]=s.trim()}return t}const za=e=>e;function ja(e,t,n,a){var r=(e&xa)!==0,s="both",i,o=t.inert,u=t.style.overflow,l,f;function g(){var p=_a,v=Le;Re(null),De(null);try{return i??(i=n()(t,(a==null?void 0:a())??{},{direction:s}))}finally{Re(p),De(v)}}var d={is_global:r,in(){t.inert=o,Ot(t,"introstart"),l=ee(t,g(),f,1,()=>{Ot(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=u})},out(p){t.inert=!0,Ot(t,"outrostart"),f=ee(t,g(),l,0,()=>{Ot(t,"outroend"),p==null||p()})},stop:()=>{l==null||l.abort(),f==null||f.abort()}},b=Le;if((b.transitions??(b.transitions=[])).push(d),wa){var k=r;if(!k){for(var h=b.parent;h&&h.f&ga;)for(;(h=h.parent)&&!(h.f&ha););k=!h||(h.f&pa)!==0}k&&va(()=>{ba(()=>d.in())})}}function ee(e,t,n,a,r){var s=a===1;if(ya(t)){var i,o=!1;return ka(()=>{if(!o){var p=t({direction:s?"in":"out"});i=ee(e,p,n,a,r)}}),{abort:()=>{o=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return r(),{abort:ht,deactivate:ht,reset:ht,t:()=>a};const{delay:u=0,css:l,tick:f,easing:g=za}=t;var d=[];if(s&&n===void 0&&(f&&f(0,1),l)){var b=Ye(l(0,1));d.push(b,b)}var k=()=>1-a,h=e.animate(d,{duration:u});return h.onfinish=()=>{var p=(n==null?void 0:n.t())??1-a;n==null||n.abort();var v=a-p,x=t.duration*Math.abs(v),T=[];if(x>0){var _=!1;if(l)for(var A=Math.ceil(x/16.666666666666668),E=0;E<=A;E+=1){var y=p+v*g(E/A),O=Ye(l(y,1-y));T.push(O),_||(_=O.overflow==="hidden")}_&&(e.style.overflow="hidden"),k=()=>{var F=h.currentTime;return p+v*g(F/x)},f&&Ra(()=>{if(h.playState!=="running")return!1;var F=k();return f(F,1-F),!0})}h=e.animate(T,{duration:x,fill:"forwards"}),h.onfinish=()=>{k=()=>a,f==null||f(a,1-a),r()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=ht)},deactivate:()=>{r=ht},reset:()=>{a===0&&(f==null||f(1,0))},t:()=>k()}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ya={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},Ua={prefix:"fas",iconName:"eject",icon:[448,512,[9167],"f052","M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320L48 320c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z"]},Wa={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Ha={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},Ga={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ba={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Xa(e){const{beat:t,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:u,spinReverse:l,pulse:f,fixedWidth:g,inverse:d,border:b,listItem:k,flip:h,size:p,rotation:v,pull:x}=e,T={"fa-beat":t,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":g,"fa-inverse":d,"fa-border":b,"fa-li":k,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both",[`fa-${p}`]:typeof p<"u"&&p!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${x}`]:typeof x<"u"&&x!==null,"fa-swap-opacity":e.swapOpacity};return Object.keys(T).map(_=>T[_]?_:null).filter(_=>_)}function qa(e){return e=e-0,e===e}function Va(e){return qa(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function Ka(e){return typeof e=="string"?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+e[n]+";","")}function xn(e,t,n={}){if(typeof t=="string")return t;const a=(t.children||[]).map(s=>xn(e,s)),r=Object.keys(t.attributes||{}).reduce((s,i)=>{const o=t.attributes[i];return i==="style"?s.attrs.style=Ka(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[Va(i)]=o,s},{attrs:{}});return e(t.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Qa(e,t,n){return(t=Ja(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(n),!0).forEach(function(a){Qa(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Za(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ja(e){var t=Za(e,"string");return typeof t=="symbol"?t:t+""}const We=()=>{};let ye={},_n={},An=null,wn={mark:We,measure:We};try{typeof window<"u"&&(ye=window),typeof document<"u"&&(_n=document),typeof MutationObserver<"u"&&(An=MutationObserver),typeof performance<"u"&&(wn=performance)}catch{}const{userAgent:He=""}=ye.navigator||{},Z=ye,C=_n,Ge=An,Nt=wn;Z.document;const V=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Sn=~He.indexOf("MSIE")||~He.indexOf("Trident/");var $a=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Pn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],L="classic",Ut="duotone",nr="sharp",ar="sharp-duotone",Cn=[L,Ut,nr,ar],rr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},sr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ir=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),or={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},lr=["fak","fa-kit","fakd","fa-kit-duotone"],Be={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cr=["kit"],fr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ur=["fak","fakd"],dr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],gr=["fak","fa-kit","fakd","fa-kit-duotone"],hr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},vr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ne={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},br=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ae=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...mr,...br],yr=["solid","regular","light","thin","duotone","brands"],En=[1,2,3,4,5,6,7,8,9,10],kr=En.concat([11,12,13,14,15,16,17,18,19,20]),xr=[...Object.keys(vr),...yr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ft.GROUP,Ft.SWAP_OPACITY,Ft.PRIMARY,Ft.SECONDARY].concat(En.map(e=>"".concat(e,"x"))).concat(kr.map(e=>"w-".concat(e))),_r={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const X="___FONT_AWESOME___",re=16,In="fa",On="svg-inline--fa",at="data-fa-i2svg",se="data-fa-pseudo-element",Ar="data-fa-pseudo-element-pending",ke="data-prefix",xe="data-icon",qe="fontawesome-i2svg",wr="async",Sr=["HTML","HEAD","STYLE","SCRIPT"],Nn=(()=>{try{return!0}catch{return!1}})();function Ct(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[L]}})}const Fn=c({},Pn);Fn[L]=c(c(c(c({},{"fa-duotone":"duotone"}),Pn[L]),Be.kit),Be["kit-duotone"]);const Pr=Ct(Fn),ie=c({},or);ie[L]=c(c(c(c({},{duotone:"fad"}),ie[L]),Xe.kit),Xe["kit-duotone"]);const Ve=Ct(ie),oe=c({},ne);oe[L]=c(c({},oe[L]),dr.kit);const _e=Ct(oe),le=c({},pr);le[L]=c(c({},le[L]),fr.kit);Ct(le);const Tr=$a,Mn="fa-layers-text",Cr=tr,Er=c({},rr);Ct(Er);const Ir=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kt=er,Or=[...cr,...xr],yt=Z.FontAwesomeConfig||{};function Nr(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Fr(Nr(n));r!=null&&(yt[a]=r)});const Ln={styleDefault:"solid",familyDefault:L,cssPrefix:In,replacementClass:On,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yt.familyPrefix&&(yt.cssPrefix=yt.familyPrefix);const ft=c(c({},Ln),yt);ft.autoReplaceSvg||(ft.observeMutations=!1);const m={};Object.keys(Ln).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){ft[e]=t,kt.forEach(n=>n(m))},get:function(){return ft[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){ft.cssPrefix=e,kt.forEach(t=>t(m))},get:function(){return ft.cssPrefix}});Z.FontAwesomeConfig=m;const kt=[];function Mr(e){return kt.push(e),()=>{kt.splice(kt.indexOf(e),1)}}const K=re,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lr(e){if(!e||!V)return;const t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return C.head.insertBefore(t,a),e}const Rr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){let e=12,t="";for(;e-- >0;)t+=Rr[Math.random()*62|0];return t}function mt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ae(e){return e.classList?mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Rn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Rn(e[n]),'" '),"").trim()}function Wt(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function we(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function zr(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:l}}function jr(e){let{transform:t,width:n=re,height:a=re,startCentered:r=!1}=e,s="";return r&&Sn?s+="translate(".concat(t.x/K-n/2,"em, ").concat(t.y/K-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/K,"em), calc(-50% + ").concat(t.y/K,"em)) "):s+="translate(".concat(t.x/K,"em, ").concat(t.y/K,"em) "),s+="scale(".concat(t.size/K*(t.flipX?-1:1),", ").concat(t.size/K*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Yr=`:root, :host {
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
}`;function Dn(){const e=In,t=On,n=m.cssPrefix,a=m.replacementClass;let r=Yr;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ke=!1;function Qt(){m.autoAddCss&&!Ke&&(Lr(Dn()),Ke=!0)}var Ur={mixout(){return{dom:{css:Dn,insertCss:Qt}}},hooks(){return{beforeDOMElementCreation(){Qt()},beforeI2svg(){Qt()}}}};const q=Z||{};q[X]||(q[X]={});q[X].styles||(q[X].styles={});q[X].hooks||(q[X].hooks={});q[X].shims||(q[X].shims=[]);var U=q[X];const zn=[],jn=function(){C.removeEventListener("DOMContentLoaded",jn),jt=1,zn.map(e=>e())};let jt=!1;V&&(jt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),jt||C.addEventListener("DOMContentLoaded",jn));function Wr(e){V&&(jt?setTimeout(e,0):zn.push(e))}function Et(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Rn(e):"<".concat(t," ").concat(Dr(n),">").concat(a.map(Et).join(""),"</").concat(t,">")}function Qe(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zt=function(t,n,a,r){var s=Object.keys(t),i=s.length,o=n,u,l,f;for(a===void 0?(u=1,f=t[s[0]]):(u=0,f=a);u<i;u++)l=s[u],f=o(f,t[l],l,t);return f};function Hr(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ce(e){const t=Hr(e);return t.length===1?t[0].toString(16):null}function Gr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ze(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function fe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ze(t);typeof U.hooks.addPack=="function"&&!a?U.hooks.addPack(e,Ze(t)):U.styles[e]=c(c({},U.styles[e]||{}),r),e==="fas"&&fe("fa",t)}const{styles:At,shims:Br}=U,Yn=Object.keys(_e),Xr=Yn.reduce((e,t)=>(e[t]=Object.keys(_e[t]),e),{});let Se=null,Un={},Wn={},Hn={},Gn={},Bn={};function qr(e){return~Or.indexOf(e)}function Vr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!qr(r)?r:null}const Xn=()=>{const e=a=>Zt(At,(r,s,i)=>(r[i]=Zt(s,a,{}),r),{});Un=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Wn=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),Bn=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const t="far"in At||m.autoFetchSvg,n=Zt(Br,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Hn=n.names,Gn=n.unicodes,Se=Ht(m.styleDefault,{family:m.familyDefault})};Mr(e=>{Se=Ht(e.styleDefault,{family:m.familyDefault})});Xn();function Pe(e,t){return(Un[e]||{})[t]}function Kr(e,t){return(Wn[e]||{})[t]}function nt(e,t){return(Bn[e]||{})[t]}function qn(e){return Hn[e]||{prefix:null,iconName:null}}function Qr(e){const t=Gn[e],n=Pe("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Se}const Vn=()=>({prefix:null,iconName:null,rest:[]});function Zr(e){let t=L;const n=Yn.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return Cn.forEach(a=>{(e.includes(n[a])||e.some(r=>Xr[a].includes(r)))&&(t=a)}),t}function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=L}=t,a=Pr[n][e];if(n===Ut&&!e)return"fad";const r=Ve[n][e]||Ve[n][a],s=e in U.styles?e:null;return r||s||null}function Jr(e){let t=[],n=null;return e.forEach(a=>{const r=Vr(m.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function Je(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=ae.concat(gr),s=Je(e.filter(g=>r.includes(g))),i=Je(e.filter(g=>!ae.includes(g))),o=s.filter(g=>(a=g,!Tn.includes(g))),[u=null]=o,l=Zr(s),f=c(c({},Jr(i)),{},{prefix:Ht(u,{family:l})});return c(c(c({},f),ns({values:e,family:l,styles:At,config:m,canonical:f,givenPrefix:a})),$r(n,a,f))}function $r(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?qn(r):{},i=nt(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!At.far&&At.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ts=Cn.filter(e=>e!==L||e!==Ut),es=Object.keys(ne).filter(e=>e!==L).map(e=>Object.keys(ne[e])).flat();function ns(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,o=n===Ut,u=t.includes("fa-duotone")||t.includes("fad"),l=i.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||l||f)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ts.includes(n)&&(Object.keys(s).find(d=>es.includes(d))||i.autoFetchSvg)){const d=ir.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=nt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=J()||"fas"),a}class as{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),fe(s,r[s]);const i=_e[L][s];i&&fe(i,r[s]),Xn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],u=o[2];t[s]||(t[s]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(t[s][l]=o)}),t[s][i]=o}),t}}let $e=[],ot={};const lt={},rs=Object.keys(lt);function ss(e,t){let{mixoutsTo:n}=t;return $e=e,ot={},Object.keys(lt).forEach(a=>{rs.indexOf(a)===-1&&delete lt[a]}),$e.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{ot[i]||(ot[i]=[]),ot[i].push(s[i])})}a.provides&&a.provides(lt)}),n}function ue(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ot[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ot[e]||[]).forEach(s=>{s.apply(null,n)})}function $(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return lt[e]?lt[e].apply(null,t):void 0}function de(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||J();if(t)return t=nt(n,t)||t,Qe(Kn.definitions,n,t)||Qe(U.styles,n,t)}const Kn=new as,is=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,rt("noAuto")},os={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(rt("beforeI2svg",e),$("pseudoElements2svg",e),$("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Wr(()=>{cs({autoReplaceSvgRoot:t}),rt("watch",e)})}},ls={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ht(e[0]);return{prefix:n,iconName:nt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Tr))){const t=Gt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||J(),iconName:nt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=J();return{prefix:t,iconName:nt(t,e)||e}}}},D={noAuto:is,config:m,dom:os,parse:ls,library:Kn,findIconDefinition:de,toHtml:Et},cs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=C}=e;(Object.keys(U.styles).length>0||m.autoFetchSvg)&&V&&m.autoReplaceSvg&&D.dom.i2svg({node:t})};function Bt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Et(n))}}),Object.defineProperty(e,"node",{get:function(){if(!V)return;const n=C.createElement("div");return n.innerHTML=e.html,n.children}}),e}function fs(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(we(i)&&n.found&&!a.found){const{width:o,height:u}=n,l={x:o/u/2,y:.5};r.style=Wt(c(c({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function us(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Te(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:u,titleId:l,extra:f,watchable:g=!1}=e,{width:d,height:b}=n.found?n:t,k=ur.includes(a),h=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(A=>f.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(f.classes).join(" ");let p={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const v=k&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};g&&(p.attributes[at]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(l||_t())},children:[o]}),delete p.attributes.title);const x=c(c({},p),{},{prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:i,styles:c(c({},v),f.styles)}),{children:T,attributes:_}=n.found&&t.found?$("generateAbstractMask",x)||{children:[],attributes:{}}:$("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=T,x.attributes=_,i?us(x):fs(x)}function tn(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=e,u=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(u[at]="");const l=c({},i.styles);we(r)&&(l.transform=jr({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const f=Wt(l);f.length>0&&(u.style=f);const g=[];return g.push({tag:"span",attributes:u,children:[t]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function ds(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Wt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Jt}=U;function me(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ms={found:!1,width:512,height:512};function gs(e,t){!Nn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ge(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=J()),new Promise((a,r)=>{if(n==="fa"){const s=qn(e);e=s.iconName||e,t=s.prefix||t}if(e&&t&&Jt[t]&&Jt[t][e]){const s=Jt[t][e];return a(me(s))}gs(e,t),a(c(c({},ms),{},{icon:m.showMissingIcons&&e?$("missingIconAbstract")||{}:{}}))})}const en=()=>{},he=m.measurePerformance&&Nt&&Nt.mark&&Nt.measure?Nt:{mark:en,measure:en},bt='FA "6.7.2"',hs=e=>(he.mark("".concat(bt," ").concat(e," begins")),()=>Qn(e)),Qn=e=>{he.mark("".concat(bt," ").concat(e," ends")),he.measure("".concat(bt," ").concat(e),"".concat(bt," ").concat(e," begins"),"".concat(bt," ").concat(e," ends"))};var Ce={begin:hs,end:Qn};const Dt=()=>{};function nn(e){return typeof(e.getAttribute?e.getAttribute(at):null)=="string"}function ps(e){const t=e.getAttribute?e.getAttribute(ke):null,n=e.getAttribute?e.getAttribute(xe):null;return t&&n}function vs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function bs(){return m.autoReplaceSvg===!0?zt.replace:zt[m.autoReplaceSvg]||zt.replace}function ys(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function ks(e){return C.createElement(e)}function Zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ys:ks}=t;if(typeof e=="string")return C.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(Zn(s,{ceFn:n}))}),a}function xs(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const zt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Zn(n),t)}),t.getAttribute(at)===null&&m.keepOriginalSource){let n=C.createComment(xs(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ae(t).indexOf(m.replacementClass))return zt.replace(e);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===m.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Et(s)).join(`
`);t.setAttribute(at,""),t.innerHTML=r}};function an(e){e()}function Jn(e,t){const n=typeof t=="function"?t:Dt;if(e.length===0)n();else{let a=an;m.mutateApproach===wr&&(a=Z.requestAnimationFrame||an),a(()=>{const r=bs(),s=Ce.begin("mutate");e.map(r),s(),n()})}}let Ee=!1;function $n(){Ee=!0}function pe(){Ee=!1}let Yt=null;function rn(e){if(!Ge||!m.observeMutations)return;const{treeCallback:t=Dt,nodeCallback:n=Dt,pseudoElementsCallback:a=Dt,observeMutationsRoot:r=C}=e;Yt=new Ge(s=>{if(Ee)return;const i=J();mt(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!nn(o.addedNodes[0])&&(m.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&nn(o.target)&&~Ir.indexOf(o.attributeName))if(o.attributeName==="class"&&ps(o.target)){const{prefix:u,iconName:l}=Gt(Ae(o.target));o.target.setAttribute(ke,u||i),l&&o.target.setAttribute(xe,l)}else vs(o.target)&&n(o.target)})}),V&&Yt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _s(){Yt&&Yt.disconnect()}function As(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function ws(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Gt(Ae(e));return r.prefix||(r.prefix=J()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Kr(r.prefix,e.innerText)||Pe(r.prefix,ce(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ss(e){const t=mt(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||_t()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ps(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=ws(e),s=Ss(e),i=ue("parseNodeAttributes",{},e);let o=t.styleParser?As(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ts}=U;function ta(e){const t=m.autoReplaceSvg==="nest"?sn(e,{styleParser:!1}):sn(e);return~t.extra.classes.indexOf(Mn)?$("generateLayersText",e,t):$("generateSvgReplacementMutation",e,t)}function Cs(){return[...lr,...ae]}function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();const n=C.documentElement.classList,a=f=>n.add("".concat(qe,"-").concat(f)),r=f=>n.remove("".concat(qe,"-").concat(f)),s=m.autoFetchSvg?Cs():Tn.concat(Object.keys(Ts));s.includes("fa")||s.push("fa");const i=[".".concat(Mn,":not([").concat(at,"])")].concat(s.map(f=>".".concat(f,":not([").concat(at,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=mt(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Ce.begin("onTree"),l=o.reduce((f,g)=>{try{const d=ta(g);d&&f.push(d)}catch(d){Nn||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,g)=>{Promise.all(l).then(d=>{Jn(d,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),f()})}).catch(d=>{u(),g(d)})})}function Es(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ta(e).then(n=>{n&&Jn([n],t)})}function Is(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:de(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:de(r||{})),e(a,c(c({},n),{},{mask:r}))}}const Os=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:u=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:g,iconName:d,icon:b}=e;return Bt(c({type:"icon"},e),()=>(rt("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(i?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||_t()):(l["aria-hidden"]="true",l.focusable="false")),Te({icons:{main:me(b),mask:r?me(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:c(c({},Y),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:l,styles:f,classes:u}})))};var Ns={mixout(){return{icon:Is(Os)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=on,e.nodeCallback=Es,e}}},provides(e){e.i2svg=function(t){const{node:n=C,callback:a=()=>{}}=t;return on(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:u,mask:l,maskId:f,extra:g}=n;return new Promise((d,b)=>{Promise.all([ge(a,i),l.iconName?ge(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[h,p]=k;d([t,Te({icons:{main:h,mask:p},prefix:i,iconName:a,transform:o,symbol:u,maskId:f,title:r,titleId:s,extra:g,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const o=Wt(i);o.length>0&&(a.style=o);let u;return we(s)&&(u=$("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Fs={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Bt({type:"layer"},()=>{rt("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ms={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Bt({type:"counter",content:e},()=>(rt("beforeDOMElementCreation",{content:e,params:t}),ds({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Ls={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return Bt({type:"text",content:e},()=>(rt("beforeDOMElementCreation",{content:e,params:t}),tn({content:e,transform:c(c({},Y),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Sn){const u=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/u,o=l.height/u}return m.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,tn({content:t.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Rs=new RegExp('"',"ug"),ln=[1105920,1112319],cn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),sr),_r),hr),ve=Object.keys(cn).reduce((e,t)=>(e[t.toLowerCase()]=cn[t],e),{}),Ds=Object.keys(ve).reduce((e,t)=>{const n=ve[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function zs(e){const t=e.replace(Rs,""),n=Gr(t,0),a=n>=ln[0]&&n<=ln[1],r=t.length===2?t[0]===t[1]:!1;return{value:ce(r?t[0]:t),isSecondary:a||r}}function js(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(ve[n]||{})[r]||Ds[n]}function fn(e,t){const n="".concat(Ar).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=mt(e.children).filter(d=>d.getAttribute(se)===t)[0],o=Z.getComputedStyle(e,t),u=o.getPropertyValue("font-family"),l=u.match(Cr),f=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&g!=="none"&&g!==""){const d=o.getPropertyValue("content");let b=js(u,f);const{value:k,isSecondary:h}=zs(d),p=l[0].startsWith("FontAwesome");let v=Pe(b,k),x=v;if(p){const T=Qr(k);T.iconName&&T.prefix&&(v=T.iconName,b=T.prefix)}if(v&&!h&&(!i||i.getAttribute(ke)!==b||i.getAttribute(xe)!==x)){e.setAttribute(n,x),i&&e.removeChild(i);const T=Ps(),{extra:_}=T;_.attributes[se]=t,ge(v,b).then(A=>{const E=Te(c(c({},T),{},{icons:{main:A,mask:Vn()},prefix:b,iconName:x,extra:_,watchable:!0})),y=C.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(y,e.firstChild):e.appendChild(y),y.outerHTML=E.map(O=>Et(O)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ys(e){return Promise.all([fn(e,"::before"),fn(e,"::after")])}function Us(e){return e.parentNode!==document.head&&!~Sr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(se)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function un(e){if(V)return new Promise((t,n)=>{const a=mt(e.querySelectorAll("*")).filter(Us).map(Ys),r=Ce.begin("searchPseudoElements");$n(),Promise.all(a).then(()=>{r(),pe(),t()}).catch(()=>{r(),pe(),n()})})}var Ws={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=un,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=C}=t;m.searchPseudoElements&&un(n)}}};let dn=!1;var Hs={mixout(){return{dom:{unwatch(){$n(),dn=!0}}}},hooks(){return{bootstrap(){rn(ue("mutationObserverCallbacks",{}))},noAuto(){_s()},watch(e){const{observeMutationsRoot:t}=e;dn?pe():rn(ue("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const mn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Gs={mixout(){return{parse:{transform:e=>mn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=mn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(o," ").concat(u," ").concat(l)},g={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:f,path:g};return{tag:"g",attributes:c({},d.outer),children:[{tag:"g",attributes:c({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),d.path)}]}]}}}};const $t={x:0,y:0,width:"100%",height:"100%"};function gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bs(e){return e.tag==="g"?e.children:[e]}var Xs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Gt(n.split(" ").map(r=>r.trim())):Vn();return a.prefix||(a.prefix=J()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=t;const{width:u,icon:l}=r,{width:f,icon:g}=s,d=zr({transform:o,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:c(c({},$t),{},{fill:"white"})},k=l.children?{children:l.children.map(gn)}:{},h={tag:"g",attributes:c({},d.inner),children:[gn(c({tag:l.tag,attributes:c(c({},l.attributes),d.path)},k))]},p={tag:"g",attributes:c({},d.outer),children:[h]},v="mask-".concat(i||_t()),x="clip-".concat(i||_t()),T={tag:"mask",attributes:c(c({},$t),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,p]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Bs(g)},T]};return n.push(_,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},$t)}),{children:n,attributes:a}}}},qs={provides(e){let t=!1;Z.matchMedia&&(t=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Vs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Ks=[Ur,Ns,Fs,Ms,Ls,Ws,Hs,Gs,Xs,qs,Vs];ss(Ks,{mixoutsTo:D});D.noAuto;D.config;D.library;D.dom;const be=D.parse;D.findIconDefinition;D.toHtml;const Qs=D.icon;D.layer;D.text;D.counter;let ea=!1;try{ea=!0}catch{}function Zs(...e){!ea&&console&&typeof console.error=="function"&&console.error(...e)}function hn(e){if(e&&typeof e=="object"&&e.prefix&&e.iconName&&e.icon)return e;if(be.icon)return be.icon(e);if(e===null)return null;if(e&&typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function te(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var Js=ia("<svg><!></svg>");function $s(e,t){var h;ut(t,!1);let n=w(t,"tag",8),a=w(t,"props",8),r=w(t,"children",8),s=w(t,"style",8,null),i=w(t,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(p){return(p==null?void 0:p.reduce((v,x)=>v+(x.tag?u(x):x),""))||""}function u({tag:p,props:v,children:x}){const T=Object.keys(v).map(_=>`${_}="${v[_]}"`).join(" ");return`<${p} ${T}>${o(x)}</${p}>`}const l=o(r()),f=(h=a())!=null&&h.style?`${a().style}${s()||""}`:s(),g={...a(),style:f};yn();var d=Js();let b;var k=S(d);Fa(k,()=>l),P(d),Na(d,p=>i(p),()=>i()),Q(()=>b=Ea(d,b,{...g},void 0,!0)),M(e,d),dt()}function ti(e,t){const n=je(t,["children","$$slots","$$events","$$legacy"]),a=je(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);ut(t,!1),w(t,"border",8,!1);let r=w(t,"mask",8,null),s=w(t,"maskId",8,null);w(t,"fixedWidth",8,!1),w(t,"inverse",8,!1),w(t,"flip",8,!1);let i=w(t,"icon",8,null);w(t,"listItem",8,!1),w(t,"pull",8,null),w(t,"pulse",8,!1),w(t,"rotation",8,null),w(t,"size",8,null),w(t,"spin",8,!1),w(t,"spinPulse",8,!1),w(t,"spinReverse",8,!1),w(t,"beat",8,!1),w(t,"fade",8,!1),w(t,"beatFade",8,!1),w(t,"bounce",8,!1),w(t,"shake",8,!1);let o=w(t,"symbol",8,!1),u=w(t,"title",8,""),l=w(t,"titleId",8,null),f=w(t,"transform",8,null);w(t,"swapOpacity",8,!1);let g=w(t,"ref",12,null),d=w(t,"style",8,null);const b=hn(i()),k=te("classes",[...Xa(n),...(n.class||"").split(" ")]),h=te("transform",typeof f()=="string"?be.transform(f()):f()),p=te("mask",hn(r())),v=Qs(b,{...k,...h,...p,symbol:o(),title:u(),titleId:l(),maskId:s()});let x=Aa(null);if(!v)Zs("Could not find icon",b);else{const{abstract:E}=v;tt(x,xn((y,O,F)=>({tag:y,props:O,children:F}),E[0],a))}yn();var T=xt(),_=ct(T);{var A=E=>{$s(E,Oa(()=>R(x),{get style(){return d()},get ref(){return g()},set ref(y){g(y)},$$legacy:!0}))};G(_,E=>{R(x)&&E(A)})}M(e,T),dt()}function it(e,t){var n=xt(),a=ct(n);{var r=s=>{ti(s,{get icon(){return t.icon}})};G(a,s=>{t.icon&&s(r)})}M(e,n)}var ei=(e,t)=>t.onIncreaseDuration(!0,e.ctrlKey),ni=(e,t)=>t.onIncreaseDuration(!1,e.ctrlKey),ai=z('<div class="c-buttons svelte-1ifz5q4"><button class="outline svelte-1ifz5q4" title="Add Time"><!></button> <button class="outline svelte-1ifz5q4" title="Remove Time"><!></button></div>'),ri=(e,t)=>t.onAction1Click(),si=z('<button class="outline svelte-1ifz5q4"><!></button>'),ii=z('<div class="icon"><!></div>'),oi=(e,t)=>t.onAction2Click(),li=z('<button class="outline secondary svelte-1ifz5q4"><!></button>'),ci=z('<div class="icon secondary"><!></div>'),fi=z('<div class="c-buttons svelte-1ifz5q4"><!> <!></div>'),ui=z('<div class="c-main svelte-1ifz5q4"><!> <div class="affective svelte-1ifz5q4"> </div> <div class="counter svelte-1ifz5q4"> </div> <!></div>');function di(e,t){ut(t,!0);let n=pt(()=>{const d=Math.floor(Math.abs(t.durationSeconds)/60/60),b=Math.floor(Math.abs(t.durationSeconds/60)),k=Math.abs(b%60),h=Math.abs(t.durationSeconds%60),p=[d.toFixed(0)+"h",k.toFixed(0)+"m",h.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+p.join(" ")});var a=ui(),r=S(a);{var s=d=>{var b=ai(),k=S(b);k.__click=[ei,t];var h=S(k);it(h,{icon:Ba}),P(k);var p=N(k,2);p.__click=[ni,t];var v=S(p);it(v,{icon:Wa}),P(p),P(b),M(d,b)};G(r,d=>{t.onIncreaseDuration&&d(s)})}var i=N(r,2),o=S(i,!0);Q(()=>{var d;return et(o,(d=t.affectiveDurationHours)==null?void 0:d.toFixed(2))}),P(i);var u=N(i,2),l=S(u,!0);P(u);var f=N(u,2);{var g=d=>{var b=fi(),k=S(b);{var h=_=>{var A=si();A.__click=[ri,t];var E=S(A);it(E,{get icon(){return t.icon1}}),P(A),Q(()=>ze(A,"title",t.action1Hint)),M(_,A)},p=_=>{var A=xt(),E=ct(A);{var y=O=>{var F=ii(),Xt=S(F);it(Xt,{get icon(){return t.icon1}}),P(F),M(O,F)};G(E,O=>{t.icon1&&O(y)},!0)}M(_,A)};G(k,_=>{t.onAction1Click?_(h):_(p,!1)})}var v=N(k,2);{var x=_=>{var A=li();A.__click=[oi,t];var E=S(A);it(E,{get icon(){return t.icon2}}),P(A),Q(()=>ze(A,"title",t.action2Hint)),M(_,A)},T=_=>{var A=xt(),E=ct(A);{var y=O=>{var F=ci(),Xt=S(F);it(Xt,{get icon(){return t.icon2}}),P(F),M(O,F)};G(E,O=>{t.icon2&&O(y)},!0)}M(_,A)};G(v,_=>{t.onAction2Click?_(x):_(T,!1)})}P(b),M(d,b)};G(f,d=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&d(g)})}P(a),Q(()=>et(l,R(n))),M(e,a),dt()}bn(["click"]);class j{}st(j,"TaskPause",Ya),st(j,"TaskResume",Ga),st(j,"TaskStop",Ha),st(j,"TaskDuplicateAndStart",Ua);function pn(e,t,n){t.taskController.saveTask(n())}var mi=z('<span style="flex: content;" class="inv" title="Invoice"> </span>'),gi=(e,t,n)=>{var a;return(a=t.taskController)==null?void 0:a.saveTask(n())},hi=(e,t,n)=>t.taskController.deleteTask(n()),pi=z('<article class="c-task svelte-5ojuwg"><div class="c-task-fields svelte-5ojuwg"><input class="date svelte-5ojuwg" name="task-date" type="date" title="Date"> <input class="name svelte-5ojuwg" name="task-name" type="text" title="Description" placeholder="Description"> <div class="c-task-fields-row-2 svelte-5ojuwg"><details class="svelte-5ojuwg"><summary class="svelte-5ojuwg">Other</summary> <!> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-5ojuwg" name="task-tags" type="text" placeholder="Tags" title="Tags"> <button style="flex: content;" class="svelte-5ojuwg">Delete</button></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-5ojuwg"><!></div></article>');function vi(e,t){ut(t,!0);let n=w(t,"vm",7);const a={icon:y=>{switch(y.state){case I.Running:return j.TaskPause;case I.Paused:return j.TaskResume;case I.Stopped:return j.TaskDuplicateAndStart}},hint:y=>{switch(y.state){case I.Running:return"Pause";case I.Paused:return"Resume";case I.Stopped:return"Start a new copy"}},execute:y=>{switch(y.state){case I.Running:t.taskController.pauseTask(y);break;case I.Paused:t.taskController.startTask(y);break;case I.Stopped:t.taskController.duplicateAndStartTask(y);break}}},r={icon:y=>{switch(y.state){case I.Running:return j.TaskStop;case I.Paused:return j.TaskStop;case I.Stopped:return j.TaskResume}},hint:y=>{switch(y.state){case I.Running:return"Stop";case I.Paused:return"Stop";case I.Stopped:return"Start"}},execute:y=>{switch(y.state){case I.Running:t.taskController.stopTask(y);break;case I.Paused:t.taskController.stopTask(y);break;case I.Stopped:t.taskController.startTask(y);break}}};function s(y,O){let F=O?1:15;t.taskController.increaseDuration(n(),y?F:-F)}var i=pi(),o=S(i),u=S(o);Lt(u),u.__input=[pn,t,n];var l=N(u,2);Lt(l),l.__input=[pn,t,n];var f=N(l,2),g=S(f),d=N(S(g),2);{var b=y=>{var O=mi(),F=S(O);P(O),Q(()=>et(F,`Attached to Invoice Id: ${n().invoiceRefId??""}`)),M(y,O)};G(d,y=>{n().invoiceRefId.length>0&&y(b)})}var k=N(d,2),h=S(k);Lt(h),h.__input=[gi,t,n];var p=N(h,2);p.__click=[hi,t,n],P(k),P(g),vn(2),P(f),P(o);var v=N(o,2),x=S(v),T=pt(()=>a.icon(n())),_=pt(()=>a.hint(n())),A=pt(()=>r.icon(n())),E=pt(()=>r.hint(n()));di(x,{get durationSeconds(){return n().duration},get affectiveDurationHours(){return n().affectiveDurationHours},onIncreaseDuration:s,get icon1(){return R(T)},onAction1Click:()=>a.execute(n()),get action1Hint(){return R(_)},get icon2(){return R(A)},onAction2Click:()=>r.execute(n()),get action2Hint(){return R(E)}}),P(v),P(i),Q(()=>Ma(i,"s-running",n().state==I.Running)),Rt(u,()=>n().date,y=>n().date=y),Rt(l,()=>n().name,y=>n().name=y),Rt(h,()=>n().tagsAsText,y=>n().tagsAsText=y),M(e,i),dt()}bn(["input","click"]);function bi(e){const t=e-1;return t*t*t+1}function yi(e,{delay:t=0,duration:n=400,easing:a=bi,axis:r="y"}={}){const s=getComputedStyle(e),i=+s.opacity,o=r==="y"?"height":"width",u=parseFloat(s[o]),l=r==="y"?["top","bottom"]:["left","right"],f=l.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),g=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),b=parseFloat(s[`margin${f[0]}`]),k=parseFloat(s[`margin${f[1]}`]),h=parseFloat(s[`border${f[0]}Width`]),p=parseFloat(s[`border${f[1]}Width`]);return{delay:t,duration:n,easing:a,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*i};${o}: ${v*u}px;padding-${l[0]}: ${v*g}px;padding-${l[1]}: ${v*d}px;margin-${l[0]}: ${v*b}px;margin-${l[1]}: ${v*k}px;border-${l[0]}-width: ${v*h}px;border-${l[1]}-width: ${v*p}px;min-${o}: 0`}}var ki=z("<div><!></div>");function Mt(e,t){var n=xt(),a=ct(n);Ta(a,19,()=>t.tasks,r=>r.id,(r,s)=>{var i=ki(),o=S(i);vi(o,{get vm(){return R(s)},get taskController(){return t.taskController}}),P(i),ja(3,i,()=>yi,()=>({duration:200})),M(r,i)}),M(e,n)}var xi=z('<form><fieldset role="group" class="svelte-1ps283u"><input id="taskname" type="text" placeholder="Whatcha doin?" autocorrect="on" autocomplete="on"> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function _i(e,t){ut(t,!0);let n=vt("");function a(o){o.preventDefault(),t.onStartTask(R(n)),tt(n,"")}var r=xi(),s=S(r),i=S(s);Lt(i),vn(2),P(s),P(r),Ia("submit",r,a),Rt(i,()=>R(n),o=>tt(n,o)),M(e,r),dt()}var wt,St,Pt,Tt;class Ai{constructor(){gt(this,wt,vt(H([])));gt(this,St,vt(H([])));gt(this,Pt,vt(H([])));gt(this,Tt,vt(H([])));st(this,"intervalId")}get tasksRunning(){return R(W(this,wt))}set tasksRunning(t){tt(W(this,wt),H(t))}get tasksPaused(){return R(W(this,St))}set tasksPaused(t){tt(W(this,St),H(t))}get tasksStopped(){return R(W(this,Pt))}set tasksStopped(t){tt(W(this,Pt),H(t))}get tasksArchived(){return R(W(this,Tt))}set tasksArchived(t){tt(W(this,Tt),H(t))}start(){this.stop(),this.refresh();for(const t of this.tasksRunning)t.recalculateDurationFromRunningSession();this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refresh(){const t=Vt.getAll().map(n=>new qt(n));this.tasksRunning=this.fetchTasksByState(t,[I.Running]),this.tasksPaused=this.fetchTasksByState(t,[I.Paused]),this.tasksStopped=this.fetchTasksByState(t,[I.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[I.Archived])}fetchTasksByState(t,n){return t.filter(a=>n.includes(a.state))}startNewTask(t){const n=new qt;n.name=t,this.startTask(n)}saveTask(t){Vt.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const n=new qt(t.getModel(crypto.randomUUID()));n.setDuration(0),n.date=Ca.toInputDateValue(new Date),n.invoiceRefId="",this.startTask(n)}increaseDuration(t,n){t.incrementDuration(n),this.saveTask(t)}deleteTask(t){Vt.remove(t.id),this.refresh()}}wt=new WeakMap,St=new WeakMap,Pt=new WeakMap,Tt=new WeakMap;var wi=z("<h2>Time Log</h2> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function Ui(e,t){ut(t,!0);let n=H(new Ai);Sa(()=>{n.start()}),Pa(()=>{n.stop()});var a=wi(),r=N(ct(a),2);_i(r,{onStartTask:y=>n.startNewTask(y)});var s=N(r,2),i=S(s),o=S(i);P(i);var u=N(i,2);Mt(u,{get taskController(){return n},get tasks(){return n.tasksRunning}}),P(s);var l=N(s,2),f=S(l),g=S(f);P(f);var d=N(f,2);Mt(d,{get taskController(){return n},get tasks(){return n.tasksPaused}}),P(l);var b=N(l,2),k=S(b),h=S(k),p=S(h);P(h);var v=N(h,2);Mt(v,{get taskController(){return n},get tasks(){return n.tasksStopped}}),P(k),P(b);var x=N(b,2),T=S(x),_=S(T),A=S(_);P(_);var E=N(_,2);Mt(E,{get taskController(){return n},get tasks(){return n.tasksArchived}}),P(T),P(x),Q(()=>{et(o,`In Progress (${n.tasksRunning.length??""})`),et(g,`Paused (${n.tasksPaused.length??""})`),et(p,`Stopped (${n.tasksStopped.length??""})`),et(A,`Archived (${n.tasksArchived.length??""})`)}),M(e,a),dt()}export{Ui as component};
