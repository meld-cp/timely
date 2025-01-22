import{a as S,t as A}from"../chunks/disclose-version.090F9Z5W.js";import{p as de,c as s,r as a,s as i,t as N,a as ue,n as oe,q as r,ad as z,f as re,R as T,aJ as ke,w as ie}from"../chunks/runtime.Zs8r3Oqx.js";import{s as D}from"../chunks/render.CTDoikuL.js";import{i as fe}from"../chunks/if.Dc9nQdRi.js";import{e as le,i as ve,I as ne,T as je,a as Te,b as Se,F as Ae}from"../chunks/ViewModels.svelte.CFd1dAF6.js";import{r as g,s as Y,i as me,t as pe}from"../chunks/Singletons.BCH7qXIm.js";import{d as _e,b as ce}from"../chunks/events.DJoDsz3Y.js";import{b as h,a as he}from"../chunks/input.DTKRrwQR.js";import{p as x}from"../chunks/proxy.RlL82DbB.js";import{o as Le}from"../chunks/index-client.DuqHwBsT.js";import{p as be}from"../chunks/props.BAByPRWC.js";import{F as ee}from"../chunks/FormatNumber.CF8cNsMY.js";var Re=A('<tr class="c-line svelte-fbae20"><td class="svelte-fbae20"><input name="line-num" type="number" min="1" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-desc" type="text" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-qty" type="number" step="0.25" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-units" type="text" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-unit-cost" type="number" class="svelte-fbae20"></td><td style="text-align: right;" class="svelte-fbae20"> </td></tr>');function Ce(m,l){de(l,!0);let e=be(l,"vm",7);var n=Re(),v=s(n),p=s(v);g(p),a(v);var f=i(v),w=s(f);g(w),a(f);var _=i(f),L=s(_);g(L),a(_);var b=i(_),k=s(b);g(k),a(b);var y=i(b),R=s(y);g(R),a(y);var C=i(y),P=s(C,!0);N(()=>D(P,ee.currency(e().total,l.currencyCode))),a(C),a(n),h(p,()=>e().number,d=>e().number=d),h(w,()=>e().description,d=>e().description=d),h(L,()=>e().quantity,d=>e().quantity=d),h(k,()=>e().units,d=>e().units=d),h(R,()=>e().unitCost,d=>e().unitCost=d),S(m,n),ue()}var Ne=(m,l)=>l().addLine(),De=(m,l)=>l().sortLines(),Fe=(m,l,e)=>l.onSaveInvoice(e()),Ee=A('<article id="working-invoice-container" class="svelte-sjo0dv"><header>Working Invoice</header> <fieldset class="row svelte-sjo0dv"><input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" class="svelte-sjo0dv"> <input name="inv-date" type="date" title="Invoice Date" class="svelte-sjo0dv"> <input name="inv-order" type="text" title="Order #" class="svelte-sjo0dv"> <div style="flex: 99 1 auto"></div></fieldset> <label>Issue to <textarea name="inv-issue-to" title="Address of the company or person being issued to"></textarea></label> <nav class="svelte-sjo0dv"><ul><li class="svelte-sjo0dv"><button class="svelte-sjo0dv">Add Line</button></li> <li class="svelte-sjo0dv"><button class="secondary svelte-sjo0dv">Sort Lines</button></li></ul></nav> <table id="working-inv-lines" class="striped svelte-sjo0dv"><thead><tr><th class="svelte-sjo0dv">Line No.</th><th style="width: 100%;" class="svelte-sjo0dv">Description</th><th class="svelte-sjo0dv">Quantity</th><th class="svelte-sjo0dv">Units</th><th class="svelte-sjo0dv">Unit Cost</th><th class="svelte-sjo0dv">Total</th></tr></thead><tbody></tbody><tfoot><tr><th colspan="3" rowspan="3" style="vertical-align: top;" class="svelte-sjo0dv"></th><th colspan="2" style="text-align: right;" class="svelte-sjo0dv">Subtotal:</th><th style="text-align: right;" class="svelte-sjo0dv"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-sjo0dv">GST:</th><th style="text-align: right;" class="svelte-sjo0dv"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-sjo0dv">Grand Total:</th><th style="text-align: right;" class="svelte-sjo0dv"> </th></tr></tfoot></table> <label>Footnote <textarea name="inv-footnote"></textarea></label> <footer><button class="svelte-sjo0dv">Save</button></footer></article>');function Me(m,l){de(l,!0);let e=be(l,"vm",15);var n=Ee(),v=i(s(n),2),p=s(v);g(p);var f=i(p,2);g(f);var w=i(f,2);g(w),oe(2),a(v);var _=i(v,2),L=i(s(_));ce(L),a(_);var b=i(_,2),k=s(b),y=s(k),R=s(y);R.__click=[Ne,e],a(y);var C=i(y,2),P=s(C);P.__click=[De,e],a(C),a(k),a(b);var d=i(b,2),F=i(s(d));le(F,21,()=>e().lines,ve,(u,t)=>{Ce(u,{get vm(){return r(t)},get currencyCode(){return e().currencyCode}})}),a(F);var E=i(F),M=s(E),H=i(s(M),2),$=s(H,!0);N(()=>D($,ee.currency(e().subtotal,e().currencyCode))),a(H),a(M);var B=i(M),K=i(s(B)),te=s(K,!0);N(()=>D(te,ee.currency(e().taxTotal,e().currencyCode))),a(K),a(B);var G=i(B),U=i(s(G)),X=s(U,!0);N(()=>D(X,ee.currency(e().grandTotal,e().currencyCode))),a(U),a(G),a(E),a(d);var V=i(d,2),J=i(s(V));ce(J),a(V);var W=i(V,2),ae=s(W);ae.__click=[Fe,l,e],a(W),a(n),h(p,()=>e().number,u=>e(e().number=u,!0)),h(f,()=>e().date,u=>e(e().date=u,!0)),h(w,()=>e().orderRef,u=>e(e().orderRef=u,!0)),h(L,()=>e().issueToAsText,u=>e(e().issueToAsText=u,!0)),h(J,()=>e().footnoteAsText,u=>e(e().footnoteAsText=u,!0)),S(m,n),ue()}_e(["click"]);var Ue=A('<label><input id="untagged-select-all" type="checkbox"> Select All</label> <hr>',1),Ve=A('<div class="c-task-line svelte-wr3s2a"><label><input name="task-line" type="checkbox"> </label></div>'),We=A("<!> <!>",1),qe=A("<p><i>All time has been account for.</i></p>"),Pe=(m,l)=>l(),He=(m,l,e)=>{m.preventDefault(),l(r(e).id)},$e=A('<article> <a href="##">View</a></article>'),Be=A('<h1>Invoice Builder</h1> <div id="container"><section id="row1" class="svelte-wr3s2a"><!> <div class="c-col-2 svelte-wr3s2a"><article class="time-list svelte-wr3s2a"><header>Uninvoiced Time</header> <!></article> <article class="scratch-pad svelte-wr3s2a"><header>Scratch Pad</header> <textarea name="scratch-pad" class="svelte-wr3s2a"></textarea></article></div></section> <section id="row2"><article><details><summary> </summary> <!></details></article></section></div>',1);function st(m,l){de(l,!0);let e=z(1),n=z(x(new ne)),v=z(x([])),p=z(""),f=z(x([]));Le(()=>{_(),T(p,x(Y.getScratchPad("page-invoice-builder"))),T(v,x(b())),T(f,x(w()))});function w(){return me.getAll().map(t=>new ne(t))}function _(){const t=Y.read();T(n,x(new ne)),r(n).number=`${t.nextInvoiceNumber}`,r(n).footnoteAsText=t.defaultInvoiceFooter??""}function L(){Y.setScratchPad("page-invoice-builder",r(p))}function b(){return pe.getAll().filter(t=>t.invoiceRefId.length==0&&t.state==je.Stopped).map(t=>new Te(t))}function k(t){const o=new Se;return o.number=ke(e),o.extRefId=t.id,o.description=`${t.date} - ${t.name}`,o.units="hr",o.quantity=t.affectiveDurationHours,o.unitCost=200,o}function y(t){me.set(t.id,t.getModel());const o=r(n).lines.map(c=>c.extRefId).filter(c=>c&&c.length>0),j=r(v).filter(c=>o.includes(c.id));for(const c of j)c.invoiceRefId=r(n).id,pe.set(c.id,c.getModel());Y.modify(c=>{c.nextInvoiceNumber++}),T(f,x(w())),T(v,x(b())),_(),R(t.id)}function R(t){window.open(`/invoice/${t}`,`inv-${t}`)}function C(){if(r(v).length==0)return!1;for(const t of r(v))if(!r(n).containsExtRefId(t.id))return!1;return!0}function P(t){for(const o of r(v))t?r(n).addLine(k(o)):r(n).removeLineWithExtRefId(o.id)}var d=Be(),F=i(re(d),2),E=s(F),M=s(E);Me(M,{onSaveInvoice:y,get vm(){return r(n)},set vm(t){T(n,x(t))}});var H=i(M,2),$=s(H),B=i(s($),2);{var K=t=>{var o=We(),j=re(o);{var c=O=>{var I=Ue(),q=re(I),Q=s(q);g(Q),oe(),a(q),oe(2),he(Q,()=>C(),Z=>P(Z)),S(O,I)};fe(j,O=>{r(v).length>1&&O(c)})}var se=i(j,2);le(se,17,()=>r(v),ve,(O,I)=>{var q=Ve(),Q=s(q),Z=s(Q);g(Z);const xe=ie(()=>Ae.toLocalDatefromString(r(I).date,"en-NZ")??""),ge=ie(()=>r(I).affectiveDurationHours.toFixed(2)??""),ye=ie(()=>r(I).name??"");var Ie=i(Z);N(()=>D(Ie,` ${r(xe)} (${r(ge)} hrs) - ${r(ye)}`)),a(Q),a(q),he(Z,()=>r(n).containsExtRefId(r(I).id),we=>{we?r(n).addLine(k(r(I))):r(n).removeLineWithExtRefId(r(I).id)}),S(O,q)}),S(t,o)},te=t=>{var o=qe();S(t,o)};fe(B,t=>{r(v).length!=0?t(K):t(te,!1)})}a($);var G=i($,2),U=i(s(G),2);ce(U),U.__input=[Pe,L],a(G),a(H),a(E);var X=i(E,2),V=s(X),J=s(V),W=s(J),ae=s(W);a(W);var u=i(W,2);le(u,17,()=>r(f),ve,(t,o)=>{var j=$e(),c=s(j),se=i(c);se.__click=[He,R,o],a(j),N(()=>D(c,`${r(o).number??""} `)),S(t,j)}),a(J),a(V),a(X),a(F),N(()=>D(ae,`Closed Invoices (${r(f).length??""})`)),h(U,()=>r(p),t=>T(p,t)),S(m,d),ue()}_e(["input","click"]);export{st as component};