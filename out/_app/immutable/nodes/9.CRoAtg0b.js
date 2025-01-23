import{c as Tt,a as _,d as It,t as u}from"../chunks/disclose-version.wL0fmYXF.js";import{p as Dt,f as b,a as Rt,a2 as St,x as r,a7 as Ft,c as e,r as t,s as a,n as p,t as d}from"../chunks/runtime.lwdHLtGF.js";import{s as l}from"../chunks/render.Mf5EPkW3.js";import{i as tt}from"../chunks/if.DxBn1DTk.js";import{I as Gt,e as f,i as x}from"../chunks/ViewModels.svelte.DWitS8JO.js";import{s as Lt}from"../chunks/attributes.BuGpwIYL.js";import{p as et}from"../chunks/proxy.E1uy1Vwt.js";import{o as Mt}from"../chunks/index-client.CgE72aKC.js";import{p as rt}from"../chunks/index.j0m0CYdA.js";import{F as y}from"../chunks/FormatNumber.CF8cNsMY.js";import{s as Ut,i as kt}from"../chunks/Singletons.BXFbSXWe.js";var qt=u(" <br>",1),At=u("<div> </div>"),Ht=u(" <br>",1),Nt=u('<tr><th class="tar svelte-10778mc">Order #:</th><td class="svelte-10778mc"> </td></tr>'),Ot=u('<tr><td class="tal svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td><td class="tac svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td></tr>'),Pt=u(" <br>",1),Qt=u('<div id="c-inv" class="svelte-10778mc"><section id="c-header" class="row svelte-10778mc"><div id="c-logo" class="svelte-10778mc"><img alt="" class="svelte-10778mc"></div> <div id="c-address" class="svelte-10778mc"></div> <section id="c-title" class="col svelte-10778mc"><header class="svelte-10778mc">Tax Invoice</header> <!></section></section> <section id="c-inv-detail" class="row svelte-10778mc"><section id="c-issue-to"><header class="svelte-10778mc">Invoice To:</header> <div></div></section> <section><table class="svelte-10778mc"><tbody><tr><th class="tar svelte-10778mc">Date:</th><td class="svelte-10778mc"> </td></tr><tr><th class="tar svelte-10778mc">Invoice #:</th><td class="svelte-10778mc"> </td></tr><!></tbody></table></section></section> <section id="c-lines" class="row svelte-10778mc"><table class="svelte-10778mc"><thead class="svelte-10778mc"><tr><th class="tal svelte-10778mc">Description</th><th class="tar svelte-10778mc" style="width: 2cm;">Quantity</th><th class="tac svelte-10778mc" style="width: 2cm;">Unit</th><th class="tar svelte-10778mc" style="width: 2cm;">Unit Price</th><th class="tar svelte-10778mc" style="width: 2cm; white-space: nowrap;"> </th></tr></thead><tbody></tbody><tfoot class="svelte-10778mc"><tr><th class="tar svelte-10778mc" colspan="4">Subtotal:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">GST:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">Grand Total:</th><th class="tar svelte-10778mc"> </th></tr></tfoot></table></section> <section id="footer" class="row svelte-10778mc"></section></div>');function $t(at,st){Dt(st,!0);const h=Ut.read();let ct=et(h.logoData),o=Ft(null);Mt(()=>{const n=rt.params.id;if(n){const m=kt.get(n);m&&St(o,et(new Gt(m)))}});var A=Tt(),ot=b(A);{var vt=n=>{var m=Qt(),g=e(m),w=e(g),it=e(w);t(w);var C=a(w,2);f(C,21,()=>{var s;return(s=h.address??"")==null?void 0:s.split(`
`)},x,(s,v)=>{p();var c=qt(),i=b(c,!0);p(),d(()=>l(i,r(v))),_(s,c)}),t(C);var H=a(C,2),dt=a(e(H),2);f(dt,17,()=>{var s;return(s=h.invoiceHeader??"")==null?void 0:s.split(`
`)},x,(s,v)=>{var c=At(),i=e(c,!0);t(c),d(()=>l(i,r(v))),_(s,c)}),t(H),t(g);var T=a(g,2),I=e(T),N=a(e(I),2);f(N,21,()=>r(o).issueToLines,x,(s,v)=>{p();var c=Ht(),i=b(c,!0);p(),d(()=>l(i,r(v))),_(s,c)}),t(N),t(I);var O=a(I,2),P=e(O),Q=e(P),D=e(Q),V=a(e(D)),nt=e(V,!0);t(V),t(D);var R=a(D),j=a(e(R)),mt=e(j,!0);t(j),t(R);var _t=a(R);{var ht=s=>{var v=Nt(),c=a(e(v)),i=e(c,!0);t(c),t(v),d(()=>l(i,r(o).orderRef)),_(s,v)};tt(_t,s=>{r(o).orderRef.length>0&&s(ht)})}t(Q),t(P),t(O),t(T);var S=a(T,2),z=e(S),F=e(z),B=e(F),E=a(e(B),4),ut=e(E);t(E),t(B),t(F);var G=a(F);f(G,21,()=>r(o).lines,x,(s,v)=>{var c=Ot(),i=e(c),yt=e(i,!0);t(i);var U=a(i),bt=e(U,!0);t(U);var k=a(U),gt=e(k,!0);t(k);var q=a(k),wt=e(q,!0);d(()=>l(wt,y.currency(r(v).unitCost,r(o).currencyCode,h.localeCode))),t(q);var $=a(q),Ct=e($,!0);d(()=>l(Ct,y.currency(r(v).total,r(o).currencyCode,h.localeCode))),t($),t(c),d(()=>{l(yt,r(v).description),l(bt,r(v).quantity),l(gt,r(v).units)}),_(s,c)}),t(G);var J=a(G),L=e(J),K=a(e(L)),pt=e(K,!0);d(()=>l(pt,y.currency(r(o).subtotal,r(o).currencyCode,h.localeCode))),t(K),t(L);var M=a(L),W=a(e(M)),ft=e(W,!0);d(()=>l(ft,y.currency(r(o).taxTotal,r(o).currencyCode,h.localeCode))),t(W),t(M);var X=a(M),Y=a(e(X)),xt=e(Y,!0);d(()=>l(xt,y.currency(r(o).grandTotal,r(o).currencyCode,h.localeCode))),t(Y),t(X),t(J),t(z),t(S);var Z=a(S,2);f(Z,21,()=>r(o).footerLines,x,(s,v)=>{p();var c=Pt(),i=b(c,!0);p(),d(()=>l(i,r(v))),_(s,c)}),t(Z),t(m),d(()=>{Lt(it,"src",ct),l(nt,r(o).date),l(mt,r(o).number),l(ut,`Amount (${r(o).currencyCode??""})`)}),_(n,m)},lt=n=>{var m=It();d(()=>l(m,`Invoice with id '${rt.params.id??""}' not found`)),_(n,m)};tt(ot,n=>{r(o)?n(vt):n(lt,!1)})}_(at,A),Rt()}export{$t as component};
