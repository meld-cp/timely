import{a as j,t as z}from"../chunks/disclose-version.DXveyqe2.js";import"../chunks/legacy.C-k78Z4r.js";import{j as L,p as M,aq as B,s as r,f as E,t as H,a as G,x as t,c as u,ar as f,r as v,as as J}from"../chunks/runtime.BCBvpcPx.js";import{l as K,d as P,b as x}from"../chunks/events.CP66OBbH.js";import{s as k,r as Q,b as U,a as R}from"../chunks/Singletons.DGaFW2wU.js";import{b as m}from"../chunks/input.U28aF-C3.js";import{i as T}from"../chunks/proxy.DZNCdgJO.js";import{i as V}from"../chunks/lifecycle.CDdG5qd6.js";function A(a,l,e){if(a.multiple)return Y(a,l);for(var o of a.options){var n=b(o);if(T(n,l)){o.selected=!0;return}}(!e||l!==void 0)&&(a.selectedIndex=-1)}function W(a,l){L(()=>{var e=new MutationObserver(()=>{var o=a.__value;A(a,o)});return e.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{e.disconnect()}})}function X(a,l,e=l){var o=!0;K(a,"change",n=>{var s=n?"[selected]":":checked",_;if(a.multiple)_=[].map.call(a.querySelectorAll(s),b);else{var d=a.querySelector(s)??a.querySelector("option:not([disabled])");_=d&&b(d)}e(_)}),L(()=>{var n=l();if(A(a,n,o),o&&n===void 0){var s=a.querySelector(":checked");s!==null&&(n=b(s),e(n))}a.__value=n,o=!1}),W(a)}function Y(a,l){for(var e of a.options)e.selected=~l.indexOf(b(e))}function b(a){return"__value"in a?a.__value:a.value}function c(a,l){k.write(t(l))}var $=z('<h1>Settings</h1> <form><label>Locale <select name="locale"><option></option><option>New Zealand</option><option>US</option></select></label> <label>Address <textarea name="address" class="svelte-fggbt6"></textarea></label> <label>Invoice Header <textarea name="inv-header" class="svelte-fggbt6"></textarea></label> <label>Logo Data <div class="grid"><textarea name="logo-data" style="font-size: small; height: 10em;" class="svelte-fggbt6"></textarea> <img alt="" style="height: 6em;"></div></label> <label>Next Invoice Number <input name="next-inv-num" type="number" min="1"></label> <label>Default Invoice Footer <textarea name="default-inv-footnote" class="svelte-fggbt6"></textarea></label></form>',1);function se(a,l){M(l,!1);const e=B(k.read());V();var o=$(),n=r(E(o),2),s=u(n),_=r(u(s));H(()=>{t(e),J(()=>{})}),_.__change=[c,e];var d=u(_);d.value=((d.__value="")==null,"");var p=r(d);p.value=(p.__value="en-NZ")==null?"":"en-NZ";var h=r(p);h.value=(h.__value="en-US")==null?"":"en-US",v(_),v(s);var S=r(s,2),y=r(u(S));x(y),y.__input=[c,e],v(S);var I=r(S,2),N=r(u(I));x(N),N.__input=[c,e],v(I);var C=r(I,2),Z=r(u(C)),g=u(Z);x(g),g.__input=[c,e];var O=r(g,2);v(Z),v(C);var q=r(C,2),D=r(u(q));Q(D),D.__input=[c,e],v(q);var w=r(q,2),F=r(u(w));x(F),F.__input=[c,e],v(w),v(n),H(()=>{U(d,(t(e).localeCode??"")==""),U(p,t(e).localeCode=="en-NZ"),U(h,t(e).localeCode=="en-US"),R(O,"src",t(e).logoData)}),X(_,()=>t(e).localeCode,i=>f(e,t(e).localeCode=i)),m(y,()=>t(e).address,i=>f(e,t(e).address=i)),m(N,()=>t(e).invoiceHeader,i=>f(e,t(e).invoiceHeader=i)),m(g,()=>t(e).logoData,i=>f(e,t(e).logoData=i)),m(D,()=>t(e).nextInvoiceNumber,i=>f(e,t(e).nextInvoiceNumber=i)),m(F,()=>t(e).defaultInvoiceFooter,i=>f(e,t(e).defaultInvoiceFooter=i)),j(a,o),G()}P(["change","input"]);export{se as component};
