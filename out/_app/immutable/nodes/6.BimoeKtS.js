import{a as D,t as N}from"../chunks/CBmAC5jC.js";import{x as ie,p as me,s as t,f as pe,t as I,a as fe,c as l,r as n,o as d,v as re}from"../chunks/B3quWTxq.js";import{s as S}from"../chunks/D1LvbsoL.js";import{e as $,i as G,r as be,a as F,s as ge}from"../chunks/DvSaprfN.js";import{l as xe,d as ye,r as M}from"../chunks/B8pIN4OL.js";import{b as L}from"../chunks/fyUcucyq.js";import{i as he,p as Ce}from"../chunks/DwbFJCge.js";import{b as De}from"../chunks/ECzNSlVg.js";import{F as Ie}from"../chunks/DvTEyFA3.js";import{F as le}from"../chunks/C1UJn8Ae.js";import{s as ne}from"../chunks/Dk709sgr.js";function z(a,o,i,v){var e=a.__styles??(a.__styles={});e[o]!==i&&(e[o]=i,i==null?a.style.removeProperty(o):a.style.setProperty(o,i,""))}function se(a,o,i){if(a.multiple)return Fe(a,o);for(var v of a.options){var e=x(v);if(he(e,o)){v.selected=!0;return}}(!i||o!==void 0)&&(a.selectedIndex=-1)}function Se(a,o){ie(()=>{var i=new MutationObserver(()=>{var v=a.__value;se(a,v)});return i.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{i.disconnect()}})}function oe(a,o,i=o){var v=!0;xe(a,"change",e=>{var u=e?"[selected]":":checked",f;if(a.multiple)f=[].map.call(a.querySelectorAll(u),x);else{var y=a.querySelector(u)??a.querySelector("option:not([disabled])");f=y&&x(y)}i(f)}),ie(()=>{var e=o();if(se(a,e,v),v&&e===void 0){var u=a.querySelector(":checked");u!==null&&(e=x(u),i(e))}a.__value=e,v=!1}),Se(a)}function Fe(a,o){for(var i of a.options)i.selected=~o.indexOf(x(i))}function x(a){return"__value"in a?a.__value:a.value}class Le{static async convertFileToDataURL(o){return new Promise((i,v)=>{const e=new FileReader;e.onloadend=()=>{const u=e.result;return i(u)},e.onerror=v,e.readAsDataURL(o)})}}function p(a,o){o()}var Ne=N("<option> </option>"),Ee=N("<span> </span>"),Ue=N("<option> </option>"),we=N('<h2>Settings</h2> <section><article><details open><summary>General Settings</summary> <label>Locale <select name="locale"><option></option><!></select> <small>Examples: <!></small></label></details></article> <article><details open><summary>Invoice Settings</summary> <label>Default Currency <select name="currency"><option></option><!></select> <small>Example: <span> </span></small></label> <label>Your Address <textarea name="address" autocomplete="address-line1" class="svelte-fggbt6"></textarea></label> <label>Invoice Header Lines <textarea name="inv-header" class="svelte-fggbt6"></textarea></label> <label>Your Logo <div style="display: flex; align-items: center; gap: 1rem;"><img alt=""> <input name="inv-logo-file" type="file" accept=".png, .jpg, .jpeg, .svg"></div></label> <label>Next Invoice Number <input name="next-inv-num" type="number" min="1"></label> <label>Default Invoice Footer Lines <textarea name="default-inv-footnote" class="svelte-fggbt6"></textarea></label></details></article></section>',1);function Ge(a,o){me(o,!0);const i=[{code:"en-NZ",name:"English (New Zealand)"},{code:"en-US",name:"English (United States)"},{code:"de-DE",name:"Deutsch"}],v=[{code:"NZD",name:"New Zealand Dollar"},{code:"USD",name:"United States Dollar"},{code:"EUR",name:"Euro"}];let e=Ce(ne.read()),u,f=re(()=>[`Date: ${Ie.toLocalDate(new Date,e.localeCode)}`,`Numbers: ${le.decimalPlaces(123456.789,2,e.localeCode)}`]),y=re(()=>le.currency(123456.789,e.defaultInvoiceCurrencyCode,e.localeCode));function _(){ne.write(e)}async function ue(){if(u&&u.files&&u.files.length>0){const r=await Le.convertFileToDataURL(u.files[0]);e.logoData=r,_()}}var B=we(),J=t(pe(B),2),E=l(J),K=l(E),Q=t(l(K),2),b=t(l(Q));b.__change=[p,_];var h=l(b);h.value=((h.__value="")==null,"");var ve=t(h);$(ve,17,()=>i,G,(r,c)=>{var s=Ne(),m={},Y=l(s,!0);n(s),I(()=>{m!==(m=d(c).code)&&(s.value=(s.__value=d(c).code)==null?"":d(c).code),F(s,d(c).code==e.localeCode),S(Y,d(c).name)}),D(r,s)}),n(b);var V=t(b,2),ce=t(l(V));$(ce,17,()=>d(f),G,(r,c)=>{var s=Ee();z(s,"padding","0 0.5rem");var m=l(s,!0);n(s),I(()=>S(m,d(c))),D(r,s)}),n(V),n(Q),n(K),n(E);var W=t(E,2),X=l(W),U=t(l(X),2),g=t(l(U));g.__change=[p,_];var C=l(g);C.value=((C.__value="")==null,"");var de=t(C);$(de,17,()=>v,G,(r,c)=>{var s=Ue(),m={},Y=l(s,!0);n(s),I(()=>{m!==(m=d(c).code)&&(s.value=(s.__value=d(c).code)==null?"":d(c).code),F(s,d(c).code==e.defaultInvoiceCurrencyCode),S(Y,d(c).name)}),D(r,s)}),n(g);var k=t(g,2),w=t(l(k));z(w,"padding","0 0.5rem");var _e=l(w,!0);n(w),n(k),n(U);var q=t(U,2),R=t(l(q));M(R),R.__input=[p,_],n(q);var P=t(q,2),Z=t(l(P));M(Z),Z.__input=[p,_],n(P);var A=t(P,2),ee=t(l(A)),H=l(ee),ae=t(H,2);ae.__change=ue,De(ae,r=>u=r,()=>u),n(ee),n(A);var j=t(A,2),O=t(l(j));be(O),O.__input=[p,_],n(j);var te=t(j,2),T=t(l(te));M(T),T.__input=[p,_],n(te),n(X),n(W),n(J),I(()=>{F(h,e.localeCode==""),F(C,e.defaultInvoiceCurrencyCode==""),S(_e,d(y)),ge(H,"src",e.logoData),z(H,"height","6rem")}),oe(b,()=>e.localeCode,r=>e.localeCode=r),oe(g,()=>e.defaultInvoiceCurrencyCode,r=>e.defaultInvoiceCurrencyCode=r),L(R,()=>e.address,r=>e.address=r),L(Z,()=>e.invoiceHeader,r=>e.invoiceHeader=r),L(O,()=>e.nextInvoiceNumber,r=>e.nextInvoiceNumber=r),L(T,()=>e.defaultInvoiceFooter,r=>e.defaultInvoiceFooter=r),D(a,B),fe()}ye(["change","input"]);export{Ge as component};
