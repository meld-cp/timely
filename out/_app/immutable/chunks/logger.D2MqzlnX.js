/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ke(t,e,n){return(e=Qe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yt(Object(n),!0).forEach(function(a){Ke(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function qe(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qe(t){var e=qe(t,"string");return typeof e=="symbol"?e:e+""}const Ut=()=>{};let It={},me={},ge=null,pe={mark:Ut,measure:Ut};try{typeof window<"u"&&(It=window),typeof document<"u"&&(me=document),typeof MutationObserver<"u"&&(ge=MutationObserver),typeof performance<"u"&&(pe=performance)}catch{}const{userAgent:Wt=""}=It.navigator||{},N=It,p=me,Ht=ge,q=pe;N.document;const O=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",he=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/");var Je=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ze=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,be={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},tn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ye=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",nt="duotone",en="sharp",nn="sharp-duotone",ve=[h,nt,en,nn],an={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},rn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},on=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),sn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ln=["fak","fa-kit","fakd","fa-kit-duotone"],Gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fn=["kit"],cn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},un=["fak","fakd"],dn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],gn=["fak","fa-kit","fakd","fa-kit-duotone"],pn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},bn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},yn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...mn,...yn],vn=["solid","regular","light","thin","duotone","brands"],xe=[1,2,3,4,5,6,7,8,9,10],xn=xe.concat([11,12,13,14,15,16,17,18,19,20]),An=[...Object.keys(bn),...vn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY].concat(xe.map(t=>"".concat(t,"x"))).concat(xn.map(t=>"w-".concat(t))),kn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const S="___FONT_AWESOME___",pt=16,Ae="fa",ke="svg-inline--fa",L="data-fa-i2svg",ht="data-fa-pseudo-element",wn="data-fa-pseudo-element-pending",Nt="data-prefix",Tt="data-icon",Vt="fontawesome-i2svg",Pn="async",Sn=["HTML","HEAD","STYLE","SCRIPT"],we=(()=>{try{return!0}catch{return!1}})();function $(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Pe=s({},be);Pe[h]=s(s(s(s({},{"fa-duotone":"duotone"}),be[h]),Gt.kit),Gt["kit-duotone"]);const En=$(Pe),bt=s({},sn);bt[h]=s(s(s(s({},{duotone:"fad"}),bt[h]),Xt.kit),Xt["kit-duotone"]);const Bt=$(bt),yt=s({},mt);yt[h]=s(s({},yt[h]),dn.kit);const Ft=$(yt),vt=s({},hn);vt[h]=s(s({},vt[h]),cn.kit);$(vt);const On=Je,Se="fa-layers-text",Cn=Ze,In=s({},an);$(In);const Nn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt=tn,Tn=[...fn,...An],G=N.FontAwesomeConfig||{};function Fn(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _n(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=_n(Fn(n));r!=null&&(G[a]=r)});const Ee={styleDefault:"solid",familyDefault:h,cssPrefix:Ae,replacementClass:ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G.familyPrefix&&(G.cssPrefix=G.familyPrefix);const U=s(s({},Ee),G);U.autoReplaceSvg||(U.observeMutations=!1);const f={};Object.keys(Ee).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){U[t]=e,X.forEach(n=>n(f))},get:function(){return U[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,X.forEach(e=>e(f))},get:function(){return U.cssPrefix}});N.FontAwesomeConfig=f;const X=[];function Mn(t){return X.push(t),()=>{X.splice(X.indexOf(t),1)}}const I=pt,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ln(t){if(!t||!O)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return p.head.insertBefore(e,a),t}const Dn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V(){let t=12,e="";for(;t-- >0;)e+=Dn[Math.random()*62|0];return e}function W(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _t(t){return t.classList?W(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Oe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Oe(t[n]),'" '),"").trim()}function at(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Mt(t){return t.size!==k.size||t.x!==k.x||t.y!==k.y||t.rotate!==k.rotate||t.flipX||t.flipY}function zn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:c}}function jn(t){let{transform:e,width:n=pt,height:a=pt,startCentered:r=!1}=t,i="";return r&&he?i+="translate(".concat(e.x/I-n/2,"em, ").concat(e.y/I-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/I,"em), calc(-50% + ").concat(e.y/I,"em)) "):i+="translate(".concat(e.x/I,"em, ").concat(e.y/I,"em) "),i+="scale(".concat(e.size/I*(e.flipX?-1:1),", ").concat(e.size/I*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Yn=`:root, :host {
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
}`;function Ce(){const t=Ae,e=ke,n=f.cssPrefix,a=f.replacementClass;let r=Yn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let $t=!1;function ft(){f.autoAddCss&&!$t&&(Ln(Ce()),$t=!0)}var Un={mixout(){return{dom:{css:Ce,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}};const E=N||{};E[S]||(E[S]={});E[S].styles||(E[S].styles={});E[S].hooks||(E[S].hooks={});E[S].shims||(E[S].shims=[]);var w=E[S];const Ie=[],Ne=function(){p.removeEventListener("DOMContentLoaded",Ne),tt=1,Ie.map(t=>t())};let tt=!1;O&&(tt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),tt||p.addEventListener("DOMContentLoaded",Ne));function Wn(t){O&&(tt?setTimeout(t,0):Ie.push(t))}function K(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Oe(t):"<".concat(e," ").concat(Rn(n),">").concat(a.map(K).join(""),"</").concat(e,">")}function Kt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ct=function(e,n,a,r){var i=Object.keys(e),o=i.length,l=n,u,c,d;for(a===void 0?(u=1,d=e[i[0]]):(u=0,d=a);u<o;u++)c=i[u],d=l(d,e[c],c,e);return d};function Hn(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function xt(t){const e=Hn(t);return e.length===1?e[0].toString(16):null}function Gn(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function qt(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function At(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=qt(e);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,qt(e)):w.styles[t]=s(s({},w.styles[t]||{}),r),t==="fas"&&At("fa",e)}const{styles:B,shims:Xn}=w,Te=Object.keys(Ft),Vn=Te.reduce((t,e)=>(t[e]=Object.keys(Ft[e]),t),{});let Lt=null,Fe={},_e={},Me={},Le={},De={};function Bn(t){return~Tn.indexOf(t)}function $n(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Bn(r)?r:null}const Re=()=>{const t=a=>ct(B,(r,i,o)=>(r[o]=ct(i,a,{}),r),{});Fe=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),_e=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),De=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const e="far"in B||f.autoFetchSvg,n=ct(Xn,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Me=n.names,Le=n.unicodes,Lt=rt(f.styleDefault,{family:f.familyDefault})};Mn(t=>{Lt=rt(t.styleDefault,{family:f.familyDefault})});Re();function Dt(t,e){return(Fe[t]||{})[e]}function Kn(t,e){return(_e[t]||{})[e]}function M(t,e){return(De[t]||{})[e]}function ze(t){return Me[t]||{prefix:null,iconName:null}}function qn(t){const e=Le[t],n=Dt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function T(){return Lt}const je=()=>({prefix:null,iconName:null,rest:[]});function Qn(t){let e=h;const n=Te.reduce((a,r)=>(a[r]="".concat(f.cssPrefix,"-").concat(r),a),{});return ve.forEach(a=>{(t.includes(n[a])||t.some(r=>Vn[a].includes(r)))&&(e=a)}),e}function rt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=En[n][t];if(n===nt&&!t)return"fad";const r=Bt[n][t]||Bt[n][a],i=t in w.styles?t:null;return r||i||null}function Jn(t){let e=[],n=null;return t.forEach(a=>{const r=$n(f.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Qt(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function it(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=gt.concat(gn),i=Qt(t.filter(g=>r.includes(g))),o=Qt(t.filter(g=>!gt.includes(g))),l=i.filter(g=>(a=g,!ye.includes(g))),[u=null]=l,c=Qn(i),d=s(s({},Jn(o)),{},{prefix:rt(u,{family:c})});return s(s(s({},d),na({values:t,family:c,styles:B,config:f,canonical:d,givenPrefix:a})),Zn(n,a,d))}function Zn(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?ze(r):{},o=M(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!B.far&&B.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ta=ve.filter(t=>t!==h||t!==nt),ea=Object.keys(mt).filter(t=>t!==h).map(t=>Object.keys(mt[t])).flat();function na(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,l=n===nt,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||c||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ta.includes(n)&&(Object.keys(i).find(m=>ea.includes(m))||o.autoFetchSvg)){const m=on.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=M(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=T()||"fas"),a}class aa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=s(s({},this.definitions[i]||{}),r[i]),At(i,r[i]);const o=Ft[h][i];o&&At(o,r[i]),Re()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],u=l[2];e[i]||(e[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][o]=l}),e}}let Jt=[],j={};const Y={},ra=Object.keys(Y);function ia(t,e){let{mixoutsTo:n}=e;return Jt=t,j={},Object.keys(Y).forEach(a=>{ra.indexOf(a)===-1&&delete Y[a]}),Jt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{j[o]||(j[o]=[]),j[o].push(i[o])})}a.provides&&a.provides(Y)}),n}function kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(j[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function D(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(j[t]||[]).forEach(i=>{i.apply(null,n)})}function F(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||T();if(e)return e=M(n,e)||e,Kt(Ye.definitions,n,e)||Kt(w.styles,n,e)}const Ye=new aa,oa=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,D("noAuto")},sa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(D("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Wn(()=>{fa({autoReplaceSvgRoot:e}),D("watch",t)})}},la={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:M(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=rt(t[0]);return{prefix:n,iconName:M(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(On))){const e=it(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||T(),iconName:M(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=T();return{prefix:e,iconName:M(e,t)||t}}}},v={noAuto:oa,config:f,dom:sa,parse:la,library:Ye,findIconDefinition:wt,toHtml:K},fa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&O&&f.autoReplaceSvg&&v.dom.i2svg({node:e})};function ot(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>K(n))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ca(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Mt(o)&&n.found&&!a.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};r.style=at(s(s({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ua(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},r),{},{id:o}),children:a}]}]}function Rt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:g=!1}=t,{width:m,height:b}=n.found?n:e,C=un.includes(a),_=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(z=>d.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(d.classes).join(" ");let x={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const P=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};g&&(x.attributes[L]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||V())},children:[l]}),delete x.attributes.title);const y=s(s({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:s(s({},P),d.styles)}),{children:A,attributes:R}=n.found&&e.found?F("generateAbstractMask",y)||{children:[],attributes:{}}:F("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=A,y.attributes=R,o?ua(y):ca(y)}function Zt(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[L]="");const c=s({},o.styles);Mt(r)&&(c.transform=jn({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const d=at(c);d.length>0&&(u.style=d);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function da(t){const{content:e,title:n,extra:a}=t,r=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=at(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ut}=w;function Pt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ma={found:!1,width:512,height:512};function ga(t,e){!we&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function St(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=T()),new Promise((a,r)=>{if(n==="fa"){const i=ze(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&ut[e]&&ut[e][t]){const i=ut[e][t];return a(Pt(i))}ga(t,e),a(s(s({},ma),{},{icon:f.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}const te=()=>{},Et=f.measurePerformance&&q&&q.mark&&q.measure?q:{mark:te,measure:te},H='FA "6.7.2"',pa=t=>(Et.mark("".concat(H," ").concat(t," begins")),()=>Ue(t)),Ue=t=>{Et.mark("".concat(H," ").concat(t," ends")),Et.measure("".concat(H," ").concat(t),"".concat(H," ").concat(t," begins"),"".concat(H," ").concat(t," ends"))};var zt={begin:pa,end:Ue};const J=()=>{};function ee(t){return typeof(t.getAttribute?t.getAttribute(L):null)=="string"}function ha(t){const e=t.getAttribute?t.getAttribute(Nt):null,n=t.getAttribute?t.getAttribute(Tt):null;return e&&n}function ba(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function ya(){return f.autoReplaceSvg===!0?Z.replace:Z[f.autoReplaceSvg]||Z.replace}function va(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function xa(t){return p.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?va:xa}=e;if(typeof t=="string")return p.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(We(i,{ceFn:n}))}),a}function Aa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Z={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(L)===null&&f.keepOriginalSource){let n=p.createComment(Aa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_t(e).indexOf(f.replacementClass))return Z.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===f.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>K(i)).join(`
`);e.setAttribute(L,""),e.innerHTML=r}};function ne(t){t()}function He(t,e){const n=typeof e=="function"?e:J;if(t.length===0)n();else{let a=ne;f.mutateApproach===Pn&&(a=N.requestAnimationFrame||ne),a(()=>{const r=ya(),i=zt.begin("mutate");t.map(r),i(),n()})}}let jt=!1;function Ge(){jt=!0}function Ot(){jt=!1}let et=null;function ae(t){if(!Ht||!f.observeMutations)return;const{treeCallback:e=J,nodeCallback:n=J,pseudoElementsCallback:a=J,observeMutationsRoot:r=p}=t;et=new Ht(i=>{if(jt)return;const o=T();W(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ee(l.addedNodes[0])&&(f.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&f.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ee(l.target)&&~Nn.indexOf(l.attributeName))if(l.attributeName==="class"&&ha(l.target)){const{prefix:u,iconName:c}=it(_t(l.target));l.target.setAttribute(Nt,u||o),c&&l.target.setAttribute(Tt,c)}else ba(l.target)&&n(l.target)})}),O&&et.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ka(){et&&et.disconnect()}function wa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Pa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=it(_t(t));return r.prefix||(r.prefix=T()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Kn(r.prefix,t.innerText)||Dt(r.prefix,xt(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Sa(t){const e=W(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||V()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ea(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Pa(t),i=Sa(t),o=kt("parseNodeAttributes",{},t);let l=e.styleParser?wa(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},o)}const{styles:Oa}=w;function Xe(t){const e=f.autoReplaceSvg==="nest"?re(t,{styleParser:!1}):re(t);return~e.extra.classes.indexOf(Se)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}function Ca(){return[...ln,...gt]}function ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();const n=p.documentElement.classList,a=d=>n.add("".concat(Vt,"-").concat(d)),r=d=>n.remove("".concat(Vt,"-").concat(d)),i=f.autoFetchSvg?Ca():ye.concat(Object.keys(Oa));i.includes("fa")||i.push("fa");const o=[".".concat(Se,":not([").concat(L,"])")].concat(i.map(d=>".".concat(d,":not([").concat(L,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=W(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=zt.begin("onTree"),c=l.reduce((d,g)=>{try{const m=Xe(g);m&&d.push(m)}catch(m){we||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,g)=>{Promise.all(c).then(m=>{He(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),g(m)})})}function Ia(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xe(t).then(n=>{n&&He([n],e)})}function Na(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:wt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:wt(r||{})),t(a,s(s({},n),{},{mask:r}))}}const Ta=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=k,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:g,iconName:m,icon:b}=t;return ot(s({type:"icon"},t),()=>(D("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(l||V()):(c["aria-hidden"]="true",c.focusable="false")),Rt({icons:{main:Pt(b),mask:r?Pt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:s(s({},k),n),symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var Fa={mixout(){return{icon:Na(Ta)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ie,t.nodeCallback=Ia,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:a=()=>{}}=e;return ie(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:g}=n;return new Promise((m,b)=>{Promise.all([St(a,o),c.iconName?St(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[_,x]=C;m([e,Rt({icons:{main:_,mask:x},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:r,titleId:i,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const l=at(o);l.length>0&&(a.style=l);let u;return Mt(i)&&(u=F("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},_a={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ot({type:"layer"},()=>{D("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ma={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ot({type:"counter",content:t},()=>(D("beforeDOMElementCreation",{content:t,params:e}),da({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},La={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=k,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return ot({type:"text",content:t},()=>(D("beforeDOMElementCreation",{content:t,params:e}),Zt({content:t,transform:s(s({},k),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,l=null;if(he){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Zt({content:e.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const Da=new RegExp('"',"ug"),oe=[1105920,1112319],se=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),rn),kn),pn),Ct=Object.keys(se).reduce((t,e)=>(t[e.toLowerCase()]=se[e],t),{}),Ra=Object.keys(Ct).reduce((t,e)=>{const n=Ct[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function za(t){const e=t.replace(Da,""),n=Gn(e,0),a=n>=oe[0]&&n<=oe[1],r=e.length===2?e[0]===e[1]:!1;return{value:xt(r?e[0]:e),isSecondary:a||r}}function ja(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ct[n]||{})[r]||Ra[n]}function le(t,e){const n="".concat(wn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=W(t.children).filter(m=>m.getAttribute(ht)===e)[0],l=N.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(Cn),d=l.getPropertyValue("font-weight"),g=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&g!=="none"&&g!==""){const m=l.getPropertyValue("content");let b=ja(u,d);const{value:C,isSecondary:_}=za(m),x=c[0].startsWith("FontAwesome");let P=Dt(b,C),y=P;if(x){const A=qn(C);A.iconName&&A.prefix&&(P=A.iconName,b=A.prefix)}if(P&&!_&&(!o||o.getAttribute(Nt)!==b||o.getAttribute(Tt)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const A=Ea(),{extra:R}=A;R.attributes[ht]=e,St(P,b).then(z=>{const Be=Rt(s(s({},A),{},{icons:{main:z,mask:je()},prefix:b,iconName:y,extra:R,watchable:!0})),st=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(st,t.firstChild):t.appendChild(st),st.outerHTML=Be.map($e=>K($e)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ya(t){return Promise.all([le(t,"::before"),le(t,"::after")])}function Ua(t){return t.parentNode!==document.head&&!~Sn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fe(t){if(O)return new Promise((e,n)=>{const a=W(t.querySelectorAll("*")).filter(Ua).map(Ya),r=zt.begin("searchPseudoElements");Ge(),Promise.all(a).then(()=>{r(),Ot(),e()}).catch(()=>{r(),Ot(),n()})})}var Wa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;f.searchPseudoElements&&fe(n)}}};let ce=!1;var Ha={mixout(){return{dom:{unwatch(){Ge(),ce=!0}}}},hooks(){return{bootstrap(){ae(kt("mutationObserverCallbacks",{}))},noAuto(){ka()},watch(t){const{observeMutationsRoot:e}=t;ce?Ot():ae(kt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ue=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ga={mixout(){return{parse:{transform:t=>ue(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ue(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:g};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}};const dt={x:0,y:0,width:"100%",height:"100%"};function de(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Xa(t){return t.tag==="g"?t.children:[t]}var Va={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?it(n.split(" ").map(r=>r.trim())):je();return a.prefix||(a.prefix=T()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:l}=e;const{width:u,icon:c}=r,{width:d,icon:g}=i,m=zn({transform:l,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:s(s({},dt),{},{fill:"white"})},C=c.children?{children:c.children.map(de)}:{},_={tag:"g",attributes:s({},m.inner),children:[de(s({tag:c.tag,attributes:s(s({},c.attributes),m.path)},C))]},x={tag:"g",attributes:s({},m.outer),children:[_]},P="mask-".concat(o||V()),y="clip-".concat(o||V()),A={tag:"mask",attributes:s(s({},dt),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Xa(g)},A]};return n.push(R,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(P,")")},dt)}),{children:n,attributes:a}}}},Ba={provides(t){let e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=s(s({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$a={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ka=[Un,Fa,_a,Ma,La,Wa,Ha,Ga,Va,Ba,$a];ia(Ka,{mixoutsTo:v});v.noAuto;v.config;v.library;v.dom;const qa=v.parse;v.findIconDefinition;v.toHtml;const Qa=v.icon;v.layer;v.text;v.counter;let Ve=!1;try{Ve=!0}catch{}function Ja(...t){!Ve&&console&&typeof console.error=="function"&&console.error(...t)}export{Qa as i,Ja as l,qa as p};
