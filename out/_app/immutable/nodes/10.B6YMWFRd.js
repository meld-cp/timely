import{c as Gt,a as d,t as h,b as Mt}from"../chunks/BpGhemep.js";import{p as Ot,f as y,a as Ut,k as jt,t as g,as as qt,l as e,j as At,y as Nt,c as a,r as t,s as r,i as m}from"../chunks/Cxm-zCzI.js";import{h as Pt,s as n}from"../chunks/CmrWndqi.js";import{i as P}from"../chunks/B_It1CJP.js";import{e as x,i as w}from"../chunks/C2khijCw.js";import{s as Qt}from"../chunks/BqScZFTr.js";import{s as Vt}from"../chunks/PwPRnE0L.js";import{p as $t}from"../chunks/B1dRQCFu.js";import{o as zt}from"../chunks/B4JWGJ3_.js";import{p as st}from"../chunks/B1ZgEb_B.js";import{F as C}from"../chunks/C1UJn8Ae.js";import{a as ot,I as Bt}from"../chunks/AjwCxZEX.js";var Et=h('<meta name="viewport" content="width=device-width, initial-scale=1.0">'),Ht=h(" <br>",1),Jt=h(" <br>",1),Kt=h(" <br>",1),Wt=h('<tr><th class="tar svelte-n0g6at">Order #:</th><td class="svelte-n0g6at"> </td></tr>'),Xt=h('<td class="tal svelte-n0g6at" colspan="5"> </td>'),Yt=h('<td class="tal svelte-n0g6at"> </td> <td class="tar svelte-n0g6at"> </td> <td class="tac svelte-n0g6at"> </td> <td class="tar svelte-n0g6at"> </td> <td class="tar svelte-n0g6at"> </td>',1),Zt=h("<tr><!></tr>"),ta=h(" <br>",1),aa=h('<div id="c-inv" class="svelte-n0g6at"><section id="c-header" class="row svelte-n0g6at"><div id="c-logo" class="svelte-n0g6at"><img alt="" class="svelte-n0g6at"></div> <div id="c-address" class="svelte-n0g6at"></div> <section id="c-title" class="col svelte-n0g6at"><header class="svelte-n0g6at">Tax Invoice</header> <!></section></section> <section id="c-inv-detail" class="row svelte-n0g6at"><section id="c-issue-to"><header class="svelte-n0g6at">Invoice To:</header> <div></div></section> <section><table class="svelte-n0g6at"><tbody><tr><th class="tar svelte-n0g6at">Date:</th><td class="svelte-n0g6at"> </td></tr><tr><th class="tar svelte-n0g6at">Invoice #:</th><td class="svelte-n0g6at"> </td></tr><!></tbody></table></section></section> <section id="c-lines" class="row svelte-n0g6at"><table class="svelte-n0g6at"><thead class="svelte-n0g6at"><tr><th class="tal svelte-n0g6at">Description</th><th class="tar svelte-n0g6at" style="width: 2cm;">Quantity</th><th class="tac svelte-n0g6at" style="width: 2cm;">Unit</th><th class="tar svelte-n0g6at" style="width: 2cm;">Unit Price</th><th class="tar svelte-n0g6at" style="width: 2cm; white-space: nowrap;"> </th></tr></thead><tbody></tbody><tfoot class="svelte-n0g6at"><tr><th class="tar svelte-n0g6at" colspan="4">Subtotal:</th><th class="tar svelte-n0g6at"> </th></tr><tr><th class="tar svelte-n0g6at" colspan="4">GST:</th><th class="tar svelte-n0g6at"> </th></tr><tr><th class="tar svelte-n0g6at" colspan="4">Grand Total:</th><th class="tar svelte-n0g6at"> </th></tr></tfoot></table></section> <section id="footer" class="row svelte-n0g6at"></section></div>');function ha(vt,lt){Ot(lt,!0);const u=ot.settingsController.read();let nt=u.logoData,s=At(null),ct=Nt(()=>{var c,i;return`${(c=e(s))==null?void 0:c.issueToLines.at(0)} - Invoice ${(i=e(s))==null?void 0:i.number}`});zt(()=>{const c=st.params.id;if(c){let i=ot.invRepo.get(c);i&&jt(s,$t(new Bt(i)))}});var Q=Gt();Pt(c=>{var i=Et();g(()=>qt.title=e(ct)),d(c,i)});var it=y(Q);{var dt=c=>{var i=aa(),T=a(i),I=a(T),gt=a(I);Qt(gt,"src",nt),t(I);var L=r(I,2);x(L,21,()=>{var l;return(l=u.address??"")==null?void 0:l.split(`
`)},w,(l,o)=>{m();var v=Ht(),_=y(v,!0);m(),g(()=>n(_,e(o))),d(l,v)}),t(L);var V=r(L,2),ht=r(a(V),2);x(ht,17,()=>e(s).headerLines,w,(l,o)=>{m();var v=Jt(),_=y(v,!0);m(),g(()=>n(_,e(o))),d(l,v)}),t(V),t(T);var D=r(T,2),R=a(D),$=r(a(R),2);x($,21,()=>e(s).issueToLines,w,(l,o)=>{m();var v=Kt(),_=y(v,!0);m(),g(()=>n(_,e(o))),d(l,v)}),t($),t(R);var z=r(R,2),B=a(z),E=a(B),S=a(E),H=r(a(S)),mt=a(H,!0);t(H),t(S);var k=r(S),J=r(a(k)),ut=a(J,!0);t(J),t(k);var pt=r(k);{var ft=l=>{var o=Wt(),v=r(a(o)),_=a(v,!0);t(v),t(o),g(()=>n(_,e(s).orderRef)),d(l,o)};P(pt,l=>{e(s).orderRef.length>0&&l(ft)})}t(E),t(B),t(z),t(D);var F=r(D,2),K=a(F),G=a(K),W=a(G),X=r(a(W),4),yt=a(X);t(X),t(W),t(G);var M=r(G);x(M,21,()=>e(s).lines,w,(l,o)=>{var v=Zt(),_=a(v);{var Ct=p=>{var f=Xt(),b=a(f,!0);t(f),g(()=>n(b,e(o).description)),d(p,f)},Tt=p=>{var f=Yt(),b=y(f),It=a(b,!0);t(b);var q=r(b,2),Lt=a(q,!0);t(q);var A=r(q,2),Dt=a(A,!0);t(A);var N=r(A,2),Rt=a(N,!0);t(N);var rt=r(N,2),St=a(rt,!0);t(rt),g((kt,Ft)=>{n(It,e(o).description),n(Lt,e(o).quantity),n(Dt,e(o).units),n(Rt,kt),n(St,Ft)},[()=>C.currency(e(o).unitCost,e(s).currencyCode,u.localeCode),()=>C.currency(e(o).total,e(s).currencyCode,u.localeCode)]),d(p,f)};P(_,p=>{e(o).isDescriptionOnlyLine?p(Ct):p(Tt,!1)})}t(v),d(l,v)}),t(M);var Y=r(M),O=a(Y),Z=r(a(O)),bt=a(Z,!0);t(Z),t(O);var U=r(O),tt=r(a(U)),xt=a(tt,!0);t(tt),t(U);var at=r(U),et=r(a(at)),wt=a(et,!0);t(et),t(at),t(Y),t(K),t(F);var j=r(F,2);Vt(j,"font-weight","bold"),x(j,21,()=>e(s).footerLines,w,(l,o)=>{m();var v=ta(),_=y(v,!0);m(),g(()=>n(_,e(o))),d(l,v)}),t(j),t(i),g((l,o,v)=>{n(mt,e(s).date),n(ut,e(s).number),n(yt,`Amount (${e(s).currencyCode??""})`),n(bt,l),n(xt,o),n(wt,v)},[()=>C.currency(e(s).subtotal,e(s).currencyCode,u.localeCode),()=>C.currency(e(s).taxTotal,e(s).currencyCode,u.localeCode),()=>C.currency(e(s).grandTotal,e(s).currencyCode,u.localeCode)]),d(c,i)},_t=c=>{var i=Mt();g(()=>n(i,`Invoice with id '${st.params.id??""}' not found`)),d(c,i)};P(it,c=>{e(s)?c(dt):c(_t,!1)})}d(vt,Q),Ut()}export{ha as component};