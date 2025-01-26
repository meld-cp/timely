import{d as qt,e as vn,a as rt,n as xn,c as Ne,t as An}from"./BpGhemep.js";import{b as kn,h as Zt,F as Qt,d as wn,g as Jt,a6 as Pn,ax as Sn,aw as En,I as On,Z as $,e as Cn,p as zt,c as _e,r as Te,t as In,a as Rt,k as Nn,f as Fe,l as $t,aP as _n}from"./Cxm-zCzI.js";import{d as Tn}from"./BT678Ywi.js";import{i as Me}from"./B_It1CJP.js";import"./CujZ5IrK.js";import{i as Le}from"./D6V-GuE2.js";import{p as h,l as te,s as Fn}from"./B5s_ESqu.js";import{b as Mn}from"./BqScZFTr.js";import{b as Ln}from"./DsHWS3H0.js";function zn(t,e,n,a,r){var i=t,s="",o;kn(()=>{if(s===(s=e()??"")){Zt&&Qt();return}o!==void 0&&(Cn(o),o=void 0),s!==""&&(o=wn(()=>{if(Zt){Jt.data;for(var f=Qt(),c=f;f!==null&&(f.nodeType!==8||f.data!=="");)c=f,f=Pn(f);if(f===null)throw Sn(),En;qt(Jt,c),i=On(f);return}var d=s+"";d=`<svg>${d}</svg>`;var m=vn(d);for(m=$(m),qt($(m),m.lastChild);$(m);)i.before($(m))}))})}function Rn(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:i,flash:s,spin:o,spinPulse:f,spinReverse:c,pulse:d,fixedWidth:m,inverse:g,border:v,listItem:S,flip:k,size:b,rotation:x,pull:p}=t,A={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":d,"fa-fw":m,"fa-inverse":g,"fa-border":v,"fa-li":S,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both",[`fa-${b}`]:typeof b<"u"&&b!==null,[`fa-rotate-${x}`]:typeof x<"u"&&x!==null&&x!==0,[`fa-pull-${p}`]:typeof p<"u"&&p!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(A).map(w=>A[w]?w:null).filter(w=>w)}function Dn(t){return t=t-0,t===t}function jn(t){return Dn(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function Yn(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function ze(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(i=>ze(t,i)),r=Object.keys(e.attributes||{}).reduce((i,s)=>{const o=e.attributes[s];return s==="style"?i.attrs.style=Yn(o):s.indexOf("aria-")===0||s.indexOf("data-")===0?i.attrs[s.toLowerCase()]=o:i.attrs[jn(s)]=o,i},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Un(t,e,n){return(e=Hn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(n),!0).forEach(function(a){Un(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Wn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hn(t){var e=Wn(t,"string");return typeof e=="symbol"?e:e+""}const ne=()=>{};let Dt={},Re={},De=null,je={mark:ne,measure:ne};try{typeof window<"u"&&(Dt=window),typeof document<"u"&&(Re=document),typeof MutationObserver<"u"&&(De=MutationObserver),typeof performance<"u"&&(je=performance)}catch{}const{userAgent:ae=""}=Dt.navigator||{},M=Dt,y=Re,re=De,tt=je;M.document;const _=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Ye=~ae.indexOf("MSIE")||~ae.indexOf("Trident/");var Gn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Xn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ue={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},We=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P="classic",ot="duotone",Bn="sharp",Kn="sharp-duotone",He=[P,ot,Bn,Kn],qn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Zn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Qn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Jn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},$n=["fak","fa-kit","fakd","fa-kit-duotone"],ie={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ta=["kit"],ea={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},na=["fak","fakd"],aa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ra=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ia=["fak","fa-kit","fakd","fa-kit-duotone"],sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},oa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},la={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},vt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},fa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ra,...fa],ca=["solid","regular","light","thin","duotone","brands"],Ge=[1,2,3,4,5,6,7,8,9,10],ua=Ge.concat([11,12,13,14,15,16,17,18,19,20]),da=[...Object.keys(la),...ca,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Ge.map(t=>"".concat(t,"x"))).concat(ua.map(t=>"w-".concat(t))),ma={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const I="___FONT_AWESOME___",At=16,Xe="fa",Ve="svg-inline--fa",Y="data-fa-i2svg",kt="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",jt="data-prefix",Yt="data-icon",oe="fontawesome-i2svg",ha="async",pa=["HTML","HEAD","STYLE","SCRIPT"],Be=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[P]}})}const Ke=l({},Ue);Ke[P]=l(l(l(l({},{"fa-duotone":"duotone"}),Ue[P]),ie.kit),ie["kit-duotone"]);const ba=Q(Ke),wt=l({},Jn);wt[P]=l(l(l(l({},{duotone:"fad"}),wt[P]),se.kit),se["kit-duotone"]);const le=Q(wt),Pt=l({},vt);Pt[P]=l(l({},Pt[P]),aa.kit);const Ut=Q(Pt),St=l({},oa);St[P]=l(l({},St[P]),ea.kit);Q(St);const ya=Gn,qe="fa-layers-text",va=Xn,xa=l({},qn);Q(xa);const Aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt=Vn,ka=[...ta,...da],B=M.FontAwesomeConfig||{};function wa(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Pa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Pa(wa(n));r!=null&&(B[a]=r)});const Ze={styleDefault:"solid",familyDefault:P,cssPrefix:Xe,replacementClass:Ve,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B.familyPrefix&&(B.cssPrefix=B.familyPrefix);const G=l(l({},Ze),B);G.autoReplaceSvg||(G.observeMutations=!1);const u={};Object.keys(Ze).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){G[t]=e,K.forEach(n=>n(u))},get:function(){return G[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,K.forEach(e=>e(u))},get:function(){return G.cssPrefix}});M.FontAwesomeConfig=u;const K=[];function Sa(t){return K.push(t),()=>{K.splice(K.indexOf(t),1)}}const F=At,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ea(t){if(!t||!_)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const Oa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=Oa[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Qe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ca(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Qe(t[n]),'" '),"").trim()}function lt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ht(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function Ia(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Na(t){let{transform:e,width:n=At,height:a=At,startCentered:r=!1}=t,i="";return r&&Ye?i+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):i+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),i+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var _a=`:root, :host {
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
}`;function Je(){const t=Xe,e=Ve,n=u.cssPrefix,a=u.replacementClass;let r=_a;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let fe=!1;function gt(){u.autoAddCss&&!fe&&(Ea(Je()),fe=!0)}var Ta={mixout(){return{dom:{css:Je,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}};const N=M||{};N[I]||(N[I]={});N[I].styles||(N[I].styles={});N[I].hooks||(N[I].hooks={});N[I].shims||(N[I].shims=[]);var C=N[I];const $e=[],tn=function(){y.removeEventListener("DOMContentLoaded",tn),it=1,$e.map(t=>t())};let it=!1;_&&(it=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),it||y.addEventListener("DOMContentLoaded",tn));function Fa(t){_&&(it?setTimeout(t,0):$e.push(t))}function J(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Qe(t):"<".concat(e," ").concat(Ca(n),">").concat(a.map(J).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ht=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,f,c,d;for(a===void 0?(f=1,d=e[i[0]]):(f=0,d=a);f<s;f++)c=i[f],d=o(d,e[c],c,e);return d};function Ma(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Et(t){const e=Ma(t);return e.length===1?e[0].toString(16):null}function La(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ue(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ot(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ue(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,ue(e)):C.styles[t]=l(l({},C.styles[t]||{}),r),t==="fas"&&Ot("fa",e)}const{styles:Z,shims:za}=C,en=Object.keys(Ut),Ra=en.reduce((t,e)=>(t[e]=Object.keys(Ut[e]),t),{});let Gt=null,nn={},an={},rn={},sn={},on={};function Da(t){return~ka.indexOf(t)}function ja(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Da(r)?r:null}const ln=()=>{const t=a=>ht(Z,(r,i,s)=>(r[s]=ht(i,a,{}),r),{});nn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),an=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),on=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in Z||u.autoFetchSvg,n=ht(za,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});rn=n.names,sn=n.unicodes,Gt=ft(u.styleDefault,{family:u.familyDefault})};Sa(t=>{Gt=ft(t.styleDefault,{family:u.familyDefault})});ln();function Xt(t,e){return(nn[t]||{})[e]}function Ya(t,e){return(an[t]||{})[e]}function j(t,e){return(on[t]||{})[e]}function fn(t){return rn[t]||{prefix:null,iconName:null}}function Ua(t){const e=sn[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Gt}const cn=()=>({prefix:null,iconName:null,rest:[]});function Wa(t){let e=P;const n=en.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return He.forEach(a=>{(t.includes(n[a])||t.some(r=>Ra[a].includes(r)))&&(e=a)}),e}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=P}=e,a=ba[n][t];if(n===ot&&!t)return"fad";const r=le[n][t]||le[n][a],i=t in C.styles?t:null;return r||i||null}function Ha(t){let e=[],n=null;return t.forEach(a=>{const r=ja(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function de(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=xt.concat(ia),i=de(t.filter(m=>r.includes(m))),s=de(t.filter(m=>!xt.includes(m))),o=i.filter(m=>(a=m,!We.includes(m))),[f=null]=o,c=Wa(i),d=l(l({},Ha(s)),{},{prefix:ft(f,{family:c})});return l(l(l({},d),Ba({values:t,family:c,styles:Z,config:u,canonical:d,givenPrefix:a})),Ga(n,a,d))}function Ga(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?fn(r):{},s=j(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Z.far&&Z.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Xa=He.filter(t=>t!==P||t!==ot),Va=Object.keys(vt).filter(t=>t!==P).map(t=>Object.keys(vt[t])).flat();function Ba(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===ot,f=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||c||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Xa.includes(n)&&(Object.keys(i).find(g=>Va.includes(g))||s.autoFetchSvg)){const g=Qn.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=j(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=L()||"fas"),a}class Ka{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Ot(i,r[i]);const s=Ut[P][i];s&&Ot(s,r[i]),ln()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],f=o[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=o)}),e[i][s]=o}),e}}let me=[],W={};const H={},qa=Object.keys(H);function Za(t,e){let{mixoutsTo:n}=e;return me=t,W={},Object.keys(H).forEach(a=>{qa.indexOf(a)===-1&&delete H[a]}),me.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{W[s]||(W[s]=[]),W[s].push(i[s])})}a.provides&&a.provides(H)}),n}function Ct(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(W[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(W[t]||[]).forEach(i=>{i.apply(null,n)})}function z(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function It(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||L();if(e)return e=j(n,e)||e,ce(un.definitions,n,e)||ce(C.styles,n,e)}const un=new Ka,Qa=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,U("noAuto")},Ja={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(U("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Fa(()=>{tr({autoReplaceSvgRoot:e}),U("watch",t)})}},$a={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(ya))){const e=ct(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=L();return{prefix:e,iconName:j(e,t)||t}}}},E={noAuto:Qa,config:u,dom:Ja,parse:$a,library:un,findIconDefinition:It,toHtml:J},tr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(C.styles).length>0||u.autoFetchSvg)&&_&&u.autoReplaceSvg&&E.dom.i2svg({node:e})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>J(n))}}),Object.defineProperty(t,"node",{get:function(){if(!_)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function er(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Ht(s)&&n.found&&!a.found){const{width:o,height:f}=n,c={x:o/f/2,y:.5};r.style=lt(l(l({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function nr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function Vt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:f,titleId:c,extra:d,watchable:m=!1}=t,{width:g,height:v}=n.found?n:e,S=na.includes(a),k=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(T=>d.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(d.classes).join(" ");let b={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})};const x=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};m&&(b.attributes[Y]=""),o&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||q())},children:[o]}),delete b.attributes.title);const p=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:l(l({},x),d.styles)}),{children:A,attributes:w}=n.found&&e.found?z("generateAbstractMask",p)||{children:[],attributes:{}}:z("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=A,p.attributes=w,s?nr(p):er(p)}function ge(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,f=l(l(l({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[Y]="");const c=l({},s.styles);Ht(r)&&(c.transform=Na({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const d=lt(c);d.length>0&&(f.style=d);const m=[];return m.push({tag:"span",attributes:f,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function ar(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=lt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:pt}=C;function Nt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const rr={found:!1,width:512,height:512};function ir(t,e){!Be&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _t(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=L()),new Promise((a,r)=>{if(n==="fa"){const i=fn(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&pt[e]&&pt[e][t]){const i=pt[e][t];return a(Nt(i))}ir(t,e),a(l(l({},rr),{},{icon:u.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}const he=()=>{},Tt=u.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:he,measure:he},V='FA "6.7.2"',sr=t=>(Tt.mark("".concat(V," ").concat(t," begins")),()=>dn(t)),dn=t=>{Tt.mark("".concat(V," ").concat(t," ends")),Tt.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))};var Bt={begin:sr,end:dn};const nt=()=>{};function pe(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function or(t){const e=t.getAttribute?t.getAttribute(jt):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function lr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function fr(){return u.autoReplaceSvg===!0?at.replace:at[u.autoReplaceSvg]||at.replace}function cr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function ur(t){return y.createElement(t)}function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?cr:ur}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(mn(i,{ceFn:n}))}),a}function dr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const at={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(mn(n),e)}),e.getAttribute(Y)===null&&u.keepOriginalSource){let n=y.createComment(dr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wt(e).indexOf(u.replacementClass))return at.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===u.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>J(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=r}};function be(t){t()}function gn(t,e){const n=typeof e=="function"?e:nt;if(t.length===0)n();else{let a=be;u.mutateApproach===ha&&(a=M.requestAnimationFrame||be),a(()=>{const r=fr(),i=Bt.begin("mutate");t.map(r),i(),n()})}}let Kt=!1;function hn(){Kt=!0}function Ft(){Kt=!1}let st=null;function ye(t){if(!re||!u.observeMutations)return;const{treeCallback:e=nt,nodeCallback:n=nt,pseudoElementsCallback:a=nt,observeMutationsRoot:r=y}=t;st=new re(i=>{if(Kt)return;const s=L();X(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!pe(o.addedNodes[0])&&(u.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&u.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&pe(o.target)&&~Aa.indexOf(o.attributeName))if(o.attributeName==="class"&&or(o.target)){const{prefix:f,iconName:c}=ct(Wt(o.target));o.target.setAttribute(jt,f||s),c&&o.target.setAttribute(Yt,c)}else lr(o.target)&&n(o.target)})}),_&&st.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function mr(){st&&st.disconnect()}function gr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function hr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ct(Wt(t));return r.prefix||(r.prefix=L()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ya(r.prefix,t.innerText)||Xt(r.prefix,Et(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function pr(t){const e=X(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=hr(t),i=pr(t),s=Ct("parseNodeAttributes",{},t);let o=e.styleParser?gr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:yr}=C;function pn(t){const e=u.autoReplaceSvg==="nest"?ve(t,{styleParser:!1}):ve(t);return~e.extra.classes.indexOf(qe)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function vr(){return[...$n,...xt]}function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();const n=y.documentElement.classList,a=d=>n.add("".concat(oe,"-").concat(d)),r=d=>n.remove("".concat(oe,"-").concat(d)),i=u.autoFetchSvg?vr():We.concat(Object.keys(yr));i.includes("fa")||i.push("fa");const s=[".".concat(qe,":not([").concat(Y,"])")].concat(i.map(d=>".".concat(d,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=X(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Bt.begin("onTree"),c=o.reduce((d,m)=>{try{const g=pn(m);g&&d.push(g)}catch(g){Be||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise((d,m)=>{Promise.all(c).then(g=>{gn(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),d()})}).catch(g=>{f(),m(g)})})}function xr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&gn([n],e)})}function Ar(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:It(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:It(r||{})),t(a,l(l({},n),{},{mask:r}))}}const kr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=O,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:v}=t;return ut(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(s?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(o||q()):(c["aria-hidden"]="true",c.focusable="false")),Vt({icons:{main:Nt(v),mask:r?Nt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:l(l({},O),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:c,styles:d,classes:f}})))};var wr={mixout(){return{icon:Ar(kr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=xe,t.nodeCallback=xr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return xe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:f,mask:c,maskId:d,extra:m}=n;return new Promise((g,v)=>{Promise.all([_t(a,s),c.iconName?_t(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[k,b]=S;g([e,Vt({icons:{main:k,mask:b},prefix:s,iconName:a,transform:o,symbol:f,maskId:d,title:r,titleId:i,extra:m,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=lt(s);o.length>0&&(a.style=o);let f;return Ht(i)&&(f=z("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Pr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Sr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),ar({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},Er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=O,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),ge({content:t,transform:l(l({},O),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(Ye){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,o=c.height/f}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ge({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Or=new RegExp('"',"ug"),Ae=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Zn),ma),sa),Mt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),Cr=Object.keys(Mt).reduce((t,e)=>{const n=Mt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ir(t){const e=t.replace(Or,""),n=La(e,0),a=n>=Ae[0]&&n<=Ae[1],r=e.length===2?e[0]===e[1]:!1;return{value:Et(r?e[0]:e),isSecondary:a||r}}function Nr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Mt[n]||{})[r]||Cr[n]}function we(t,e){const n="".concat(ga).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=X(t.children).filter(g=>g.getAttribute(kt)===e)[0],o=M.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),c=f.match(va),d=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&m!=="none"&&m!==""){const g=o.getPropertyValue("content");let v=Nr(f,d);const{value:S,isSecondary:k}=Ir(g),b=c[0].startsWith("FontAwesome");let x=Xt(v,S),p=x;if(b){const A=Ua(S);A.iconName&&A.prefix&&(x=A.iconName,v=A.prefix)}if(x&&!k&&(!s||s.getAttribute(jt)!==v||s.getAttribute(Yt)!==p)){t.setAttribute(n,p),s&&t.removeChild(s);const A=br(),{extra:w}=A;w.attributes[kt]=e,_t(x,v).then(T=>{const R=Vt(l(l({},A),{},{icons:{main:T,mask:cn()},prefix:v,iconName:p,extra:w,watchable:!0})),D=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=R.map(dt=>J(dt)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function _r(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function Tr(t){return t.parentNode!==document.head&&!~pa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pe(t){if(_)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(Tr).map(_r),r=Bt.begin("searchPseudoElements");hn(),Promise.all(a).then(()=>{r(),Ft(),e()}).catch(()=>{r(),Ft(),n()})})}var Fr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Pe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;u.searchPseudoElements&&Pe(n)}}};let Se=!1;var Mr={mixout(){return{dom:{unwatch(){hn(),Se=!0}}}},hooks(){return{bootstrap(){ye(Ct("mutationObserverCallbacks",{}))},noAuto(){mr()},watch(t){const{observeMutationsRoot:e}=t;Se?Ft():ye(Ct("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ee=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Lr={mixout(){return{parse:{transform:t=>Ee(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ee(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(f," ").concat(c)},m={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zr(t){return t.tag==="g"?t.children:[t]}var Rr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ct(n.split(" ").map(r=>r.trim())):cn();return a.prefix||(a.prefix=L()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:f,icon:c}=r,{width:d,icon:m}=i,g=Ia({transform:o,containerWidth:d,iconWidth:f}),v={tag:"rect",attributes:l(l({},bt),{},{fill:"white"})},S=c.children?{children:c.children.map(Oe)}:{},k={tag:"g",attributes:l({},g.inner),children:[Oe(l({tag:c.tag,attributes:l(l({},c.attributes),g.path)},S))]},b={tag:"g",attributes:l({},g.outer),children:[k]},x="mask-".concat(s||q()),p="clip-".concat(s||q()),A={tag:"mask",attributes:l(l({},bt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:zr(m)},A]};return n.push(w,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(x,")")},bt)}),{children:n,attributes:a}}}},Dr={provides(t){let e=!1;M.matchMedia&&(e=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Yr=[Ta,wr,Pr,Sr,Er,Fr,Mr,Lr,Rr,Dr,jr];Za(Yr,{mixoutsTo:E});E.noAuto;E.config;E.library;E.dom;const Lt=E.parse;E.findIconDefinition;E.toHtml;const Ur=E.icon;E.layer;E.text;E.counter;let bn=!1;try{bn=!0}catch{}function Wr(...t){!bn&&console&&typeof console.error=="function"&&console.error(...t)}function Ce(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Lt.icon)return Lt.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var Hr=xn("<svg><!></svg>");function Gr(t,e){var k;zt(e,!1);let n=h(e,"tag",8),a=h(e,"props",8),r=h(e,"children",8),i=h(e,"style",8,null),s=h(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(b){return(b==null?void 0:b.reduce((x,p)=>x+(p.tag?f(p):p),""))||""}function f({tag:b,props:x,children:p}){const A=Object.keys(x).map(w=>`${w}="${x[w]}"`).join(" ");return`<${b} ${A}>${o(p)}</${b}>`}const c=o(r()),d=(k=a())!=null&&k.style?`${a().style}${i()||""}`:i(),m={...a(),style:d};Le();var g=Hr();let v;var S=_e(g);zn(S,()=>c),Te(g),Ln(g,b=>s(b),()=>s()),In(()=>v=Mn(g,v,{...m},void 0,!0)),rt(t,g),Rt()}function Ie(t,e){const n=te(e,["children","$$slots","$$events","$$legacy"]),a=te(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);zt(e,!1),h(e,"border",8,!1);let r=h(e,"mask",8,null),i=h(e,"maskId",8,null);h(e,"fixedWidth",8,!1),h(e,"inverse",8,!1),h(e,"flip",8,!1);let s=h(e,"icon",8,null);h(e,"listItem",8,!1),h(e,"pull",8,null),h(e,"pulse",8,!1),h(e,"rotation",8,null),h(e,"size",8,null),h(e,"spin",8,!1),h(e,"spinPulse",8,!1),h(e,"spinReverse",8,!1),h(e,"beat",8,!1),h(e,"fade",8,!1),h(e,"beatFade",8,!1),h(e,"bounce",8,!1),h(e,"shake",8,!1);let o=h(e,"symbol",8,!1),f=h(e,"title",8,""),c=h(e,"titleId",8,null),d=h(e,"transform",8,null);h(e,"swapOpacity",8,!1);let m=h(e,"ref",12,null),g=h(e,"style",8,null);const v=Ce(s()),S=yt("classes",[...Rn(n),...(n.class||"").split(" ")]),k=yt("transform",typeof d()=="string"?Lt.transform(d()):d()),b=yt("mask",Ce(r())),x=Ur(v,{...S,...k,...b,symbol:o(),title:f(),titleId:c(),maskId:i()});let p=_n(null);if(!x)Wr("Could not find icon",v);else{const{abstract:R}=x;Nn(p,ze((D,dt,yn)=>({tag:D,props:dt,children:yn}),R[0],a))}Le();var A=Ne(),w=Fe(A);{var T=R=>{Gr(R,Fn(()=>$t(p),{get style(){return g()},get ref(){return m()},set ref(D){m(D)},$$legacy:!0}))};Me(w,R=>{$t(p)&&R(T)})}rt(t,A),Rt()}function Xr(t,e){t.preventDefault(),e.onClick&&e.onClick()}var Vr=An('<a href=""><!></a>');function ni(t,e){zt(e,!0);var n=Ne(),a=Fe(n);{var r=s=>{var o=Vr();o.__click=[Xr,e];var f=_e(o);Ie(f,{get icon(){return e.icon}}),Te(o),rt(s,o)},i=s=>{Ie(s,{get icon(){return e.icon}})};Me(a,s=>{e.onClick?s(r):s(i,!1)})}rt(t,n),Rt()}Tn(["click"]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ai={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},ri={prefix:"fas",iconName:"eject",icon:[448,512,[9167],"f052","M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320L48 320c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z"]},ii={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},si={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},oi={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},li={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},fi={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};export{ni as I,fi as a,si as b,ai as c,li as d,oi as e,ii as f,ri as g};
