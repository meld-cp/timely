import{c as Gt,a as d,b as Mt,t as h}from"../chunks/D1Xbq9Mo.js";import{p as Nt,f as b,a as Ot,N as Ut,o as r,W as Vt,c as e,r as t,s as a,V as x,t as _}from"../chunks/CRiTDDG9.js";import{s as l}from"../chunks/D_tVMzu6.js";import{i as A}from"../chunks/CcJ9c5Jw.js";import{e as g,i as w,s as kt}from"../chunks/CMmp8lOf.js";import{p as st}from"../chunks/dGNHEYVr.js";import{o as qt}from"../chunks/DTmORs4h.js";import{p as ct}from"../chunks/Bpme45td.js";import{F as C}from"../chunks/C1UJn8Ae.js";import{I as At}from"../chunks/Ckn_wZO7.js";import{s as Ht,i as Pt}from"../chunks/gGzjA1K5.js";var Qt=h(" <br>",1),Wt=h("<div> </div>"),jt=h(" <br>",1),zt=h('<tr><th class="tar svelte-10778mc">Order #:</th><td class="svelte-10778mc"> </td></tr>'),Bt=h('<td class="tal svelte-10778mc" colspan="5"> </td>'),Et=h('<td class="tal svelte-10778mc"> </td> <td class="tar svelte-10778mc"> </td> <td class="tac svelte-10778mc"> </td> <td class="tar svelte-10778mc"> </td> <td class="tar svelte-10778mc"> </td>',1),Jt=h("<tr><!></tr>"),Kt=h(" <br>",1),Xt=h('<div id="c-inv" class="svelte-10778mc"><section id="c-header" class="row svelte-10778mc"><div id="c-logo" class="svelte-10778mc"><img alt="" class="svelte-10778mc"></div> <div id="c-address" class="svelte-10778mc"></div> <section id="c-title" class="col svelte-10778mc"><header class="svelte-10778mc">Tax Invoice</header> <!></section></section> <section id="c-inv-detail" class="row svelte-10778mc"><section id="c-issue-to"><header class="svelte-10778mc">Invoice To:</header> <div></div></section> <section><table class="svelte-10778mc"><tbody><tr><th class="tar svelte-10778mc">Date:</th><td class="svelte-10778mc"> </td></tr><tr><th class="tar svelte-10778mc">Invoice #:</th><td class="svelte-10778mc"> </td></tr><!></tbody></table></section></section> <section id="c-lines" class="row svelte-10778mc"><table class="svelte-10778mc"><thead class="svelte-10778mc"><tr><th class="tal svelte-10778mc">Description</th><th class="tar svelte-10778mc" style="width: 2cm;">Quantity</th><th class="tac svelte-10778mc" style="width: 2cm;">Unit</th><th class="tar svelte-10778mc" style="width: 2cm;">Unit Price</th><th class="tar svelte-10778mc" style="width: 2cm; white-space: nowrap;"> </th></tr></thead><tbody></tbody><tfoot class="svelte-10778mc"><tr><th class="tar svelte-10778mc" colspan="4">Subtotal:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">GST:</th><th class="tar svelte-10778mc"> </th></tr><tr><th class="tar svelte-10778mc" colspan="4">Grand Total:</th><th class="tar svelte-10778mc"> </th></tr></tfoot></table></section> <section id="footer" class="row svelte-10778mc"></section></div>');function le(ot,vt){Nt(vt,!0);const u=Ht.read();let lt=st(u.logoData),v=Vt(null);qt(()=>{const n=ct.params.id;if(n){let m=Pt.get(n);m&&Ut(v,st(new At(m)))}});var H=Gt(),it=b(H);{var dt=n=>{var m=Xt(),T=e(m),I=e(T),mt=e(I);t(I);var D=a(I,2);g(D,21,()=>{var s;return(s=u.address??"")==null?void 0:s.split(`
`)},w,(s,c)=>{x();var o=Qt(),i=b(o,!0);x(),_(()=>l(i,r(c))),d(s,o)}),t(D);var P=a(D,2),_t=a(e(P),2);g(_t,17,()=>{var s;return(s=u.invoiceHeader??"")==null?void 0:s.split(`
`)},w,(s,c)=>{var o=Wt(),i=e(o,!0);t(o),_(()=>l(i,r(c))),d(s,o)}),t(P),t(T);var L=a(T,2),R=e(L),Q=a(e(R),2);g(Q,21,()=>r(v).issueToLines,w,(s,c)=>{x();var o=jt(),i=b(o,!0);x(),_(()=>l(i,r(c))),d(s,o)}),t(Q),t(R);var W=a(R,2),j=e(W),z=e(j),S=e(z),B=a(e(S)),ht=e(B,!0);t(B),t(S);var F=a(S),E=a(e(F)),ut=e(E,!0);t(E),t(F);var pt=a(F);{var ft=s=>{var c=zt(),o=a(e(c)),i=e(o,!0);t(o),t(c),_(()=>l(i,r(v).orderRef)),d(s,c)};A(pt,s=>{r(v).orderRef.length>0&&s(ft)})}t(z),t(j),t(W),t(L);var G=a(L,2),J=e(G),M=e(J),K=e(M),X=a(e(K),4),xt=e(X);t(X),t(K),t(M);var N=a(M);g(N,21,()=>r(v).lines,w,(s,c)=>{var o=Jt(),i=e(o);{var wt=p=>{var f=Bt(),y=e(f,!0);t(f),_(()=>l(y,r(c).description)),d(p,f)},Ct=p=>{var f=Et(),y=b(f),Tt=e(y,!0);t(y);var V=a(y,2),It=e(V,!0);t(V);var k=a(V,2),Dt=e(k,!0);t(k);var q=a(k,2),Lt=e(q,!0);t(q);var at=a(q,2),Rt=e(at,!0);t(at),_((St,Ft)=>{l(Tt,r(c).description),l(It,r(c).quantity),l(Dt,r(c).units),l(Lt,St),l(Rt,Ft)},[()=>C.currency(r(c).unitCost,r(v).currencyCode,u.localeCode),()=>C.currency(r(c).total,r(v).currencyCode,u.localeCode)]),d(p,f)};A(i,p=>{r(c).isDescriptionOnlyLine?p(wt):p(Ct,!1)})}t(o),d(s,o)}),t(N);var Y=a(N),O=e(Y),Z=a(e(O)),yt=e(Z,!0);t(Z),t(O);var U=a(O),$=a(e(U)),bt=e($,!0);t($),t(U);var tt=a(U),et=a(e(tt)),gt=e(et,!0);t(et),t(tt),t(Y),t(J),t(G);var rt=a(G,2);g(rt,21,()=>r(v).footerLines,w,(s,c)=>{x();var o=Kt(),i=b(o,!0);x(),_(()=>l(i,r(c))),d(s,o)}),t(rt),t(m),_((s,c,o)=>{kt(mt,"src",lt),l(ht,r(v).date),l(ut,r(v).number),l(xt,`Amount (${r(v).currencyCode??""})`),l(yt,s),l(bt,c),l(gt,o)},[()=>C.currency(r(v).subtotal,r(v).currencyCode,u.localeCode),()=>C.currency(r(v).taxTotal,r(v).currencyCode,u.localeCode),()=>C.currency(r(v).grandTotal,r(v).currencyCode,u.localeCode)]),d(n,m)},nt=n=>{var m=Mt();_(()=>l(m,`Invoice with id '${ct.params.id??""}' not found`)),d(n,m)};A(it,n=>{r(v)?n(dt):n(nt,!1)})}d(ot,H),Ot()}export{le as component};
