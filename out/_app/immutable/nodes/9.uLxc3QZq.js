import{c as Dt,a as m,b as Rt,t as u}from"../chunks/CRRl4Swk.js";import{p as St,f as y,a as Ft,a7 as Gt,w as r,ac as Lt,c as e,r as t,s as a,ab as p,t as h}from"../chunks/UCO5opLl.js";import{s as l}from"../chunks/vBULxvE1.js";import{i as tt}from"../chunks/CnmQIJM7.js";import{e as f,i as x}from"../chunks/CAfQcJAG.js";import{s as Mt}from"../chunks/DG_sXqrW.js";import{p as et}from"../chunks/CQhzKiTL.js";import{o as Ut}from"../chunks/5U-_lmsG.js";import{p as rt}from"../chunks/BcqBC4na.js";import{F as b}from"../chunks/CF8cNsMY.js";import{I as kt}from"../chunks/Bjp3u8Cb.js";import{s as qt,i as At}from"../chunks/BXFbSXWe.js";var Ht=u(" <br>",1),Nt=u("<div> </div>"),Ot=u(" <br>",1),Pt=u('<tr><th class="tar svelte-10778mc">Order #:</th><td class="svelte-10778mc"> </td></tr>'),Qt=u('<tr><td class="tal svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td><td class="tac svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td><td class="tar svelte-10778mc"> </td></tr>'),Vt=u(" <br>",1),jt=u('<div id="c-inv" class="svelte-10778mc"><section id="c-header" class="row svelte-10778mc"><div id="c-logo" class="svelte-10778mc"><img alt="" class="svelte-10778mc"></div> <div id="c-address" class="svelte-10778mc"></div> <section id="c-title" class="col svelte-10778mc"><header class="svelte-10778mc">Tax Invoice</header> <!></section></section> <section id="c-inv-detail" class="row svelte-10778mc"><section id="c-issue-to"><header class="svelte-10778mc">Invoice To:</header> <div></div></section> <section><table class="svelte-10778mc"><tbody><tr><th class="tar svelte-10778mc">Date:</th><td class="svelte-10778mc"> </td></tr><tr><th class="tar svelte-10778mc">Invoice #:</th><td class="svelte-10778mc"> </td></tr><!></tbody></table></section></section> <section id="c-lines" class="row svelte-10778mc"><table class="svelte-10778mc"><thead class="svelte-10778mc"><tr><th class="tal svelte-10778mc">Description</th><th class="tar svelte-10778mc" style="width: 2cm;">Quantity</th><th class="tac svelte-10778mc" style="width: 2cm;">Unit</th><th class="tar svelte-10778mc" style="width: 2cm;">Unit Price</th><th class="tar svelte-10778mc" style="width: 2cm; white-space: nowrap;"> </th></tr></thead><tbody></tbody><tfoot class="svelte-10778mc"><tr><th class="tar svelte-10778mc" colspan="4">Subtotal:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">GST:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">Grand Total:</th><th class="tar svelte-10778mc"> </th></tr></tfoot></table></section> <section id="footer" class="row svelte-10778mc"></section></div>');function re(at,st){St(st,!0);const _=qt.read();let ct=et(_.logoData),v=Lt(null);Ut(()=>{const d=rt.params.id;if(d){const n=At.get(d);n&&Gt(v,et(new kt(n)))}});var A=Dt(),ot=y(A);{var vt=d=>{var n=jt(),g=e(n),w=e(g),it=e(w);t(w);var C=a(w,2);f(C,21,()=>{var s;return(s=_.address??"")==null?void 0:s.split(`
`)},x,(s,o)=>{p();var c=Ht(),i=y(c,!0);p(),h(()=>l(i,r(o))),m(s,c)}),t(C);var H=a(C,2),dt=a(e(H),2);f(dt,17,()=>{var s;return(s=_.invoiceHeader??"")==null?void 0:s.split(`
`)},x,(s,o)=>{var c=Nt(),i=e(c,!0);t(c),h(()=>l(i,r(o))),m(s,c)}),t(H),t(g);var T=a(g,2),I=e(T),N=a(e(I),2);f(N,21,()=>r(v).issueToLines,x,(s,o)=>{p();var c=Ot(),i=y(c,!0);p(),h(()=>l(i,r(o))),m(s,c)}),t(N),t(I);var O=a(I,2),P=e(O),Q=e(P),D=e(Q),V=a(e(D)),nt=e(V,!0);t(V),t(D);var R=a(D),j=a(e(R)),mt=e(j,!0);t(j),t(R);var _t=a(R);{var ht=s=>{var o=Pt(),c=a(e(o)),i=e(c,!0);t(c),t(o),h(()=>l(i,r(v).orderRef)),m(s,o)};tt(_t,s=>{r(v).orderRef.length>0&&s(ht)})}t(Q),t(P),t(O),t(T);var S=a(T,2),z=e(S),F=e(z),B=e(F),E=a(e(B),4),ut=e(E);t(E),t(B),t(F);var G=a(F);f(G,21,()=>r(v).lines,x,(s,o)=>{var c=Qt(),i=e(c),bt=e(i,!0);t(i);var U=a(i),yt=e(U,!0);t(U);var k=a(U),gt=e(k,!0);t(k);var q=a(k),wt=e(q,!0);t(q);var $=a(q),Ct=e($,!0);t($),t(c),h((Tt,It)=>{l(bt,r(o).description),l(yt,r(o).quantity),l(gt,r(o).units),l(wt,Tt),l(Ct,It)},[()=>b.currency(r(o).unitCost,r(v).currencyCode,_.localeCode),()=>b.currency(r(o).total,r(v).currencyCode,_.localeCode)]),m(s,c)}),t(G);var J=a(G),L=e(J),K=a(e(L)),pt=e(K,!0);t(K),t(L);var M=a(L),W=a(e(M)),ft=e(W,!0);t(W),t(M);var X=a(M),Y=a(e(X)),xt=e(Y,!0);t(Y),t(X),t(J),t(z),t(S);var Z=a(S,2);f(Z,21,()=>r(v).footerLines,x,(s,o)=>{p();var c=Vt(),i=y(c,!0);p(),h(()=>l(i,r(o))),m(s,c)}),t(Z),t(n),h((s,o,c)=>{Mt(it,"src",ct),l(nt,r(v).date),l(mt,r(v).number),l(ut,`Amount (${r(v).currencyCode??""})`),l(pt,s),l(ft,o),l(xt,c)},[()=>b.currency(r(v).subtotal,r(v).currencyCode,_.localeCode),()=>b.currency(r(v).taxTotal,r(v).currencyCode,_.localeCode),()=>b.currency(r(v).grandTotal,r(v).currencyCode,_.localeCode)]),m(d,n)},lt=d=>{var n=Rt();h(()=>l(n,`Invoice with id '${rt.params.id??""}' not found`)),m(d,n)};tt(ot,d=>{r(v)?d(vt):d(lt,!1)})}m(at,A),Ft()}export{re as component};
