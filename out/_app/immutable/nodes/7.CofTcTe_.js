import{a as P,t as U}from"../chunks/C6I-1lhn.js";import{p as me,c as s,r,s as i,t as K,a as ge,ab as fe,o,ac as ie,f as de,a7 as W}from"../chunks/C1YrOOk_.js";import{s as E}from"../chunks/hnnBCjZc.js";import{i as ye}from"../chunks/C3MGylT0.js";import{e as he,i as pe}from"../chunks/D1umluFs.js";import{r as C}from"../chunks/BwTxTwW6.js";import{d as _e,r as se}from"../chunks/lOenb5ZA.js";import{b as _,c as xe}from"../chunks/6U0v1yO8.js";import{p as D}from"../chunks/BR_3dH_1.js";import{o as Re}from"../chunks/BrNznxSd.js";import{p as Ie}from"../chunks/DHNG16Ra.js";import{F as le}from"../chunks/C1UJn8Ae.js";import{I as Ae,f as De}from"../chunks/WuI6RMP2.js";import{I as ue,T as Se,a as Ne,b as Fe}from"../chunks/DpGbcKUU.js";import{i as re,s as oe,t as ke,F as Pe}from"../chunks/CAlEHurm.js";function Ue(y,l){y.preventDefault(),l.onRemoveLine()}var He=U('<tr class="c-line svelte-fbae20"><td class="svelte-fbae20"><input name="line-num" type="number" min="1" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-desc" type="text" spellcheck="true" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-qty" type="number" step="0.25" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-units" type="text" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-unit-cost" type="number" class="svelte-fbae20"></td><td style="text-align: right;" class="svelte-fbae20"> </td><td class="svelte-fbae20"><a href="##"><!></a></td></tr>');function Me(y,l){me(l,!0);let n=Ie(l,"vm",7);var d=He(),h=s(d),p=s(h);C(p),p.__change=function(...v){var u;(u=l.onChange)==null||u.apply(this,v)},r(h);var m=i(h),T=s(m);C(T),T.__change=function(...v){var u;(u=l.onChange)==null||u.apply(this,v)},r(m);var x=i(m),k=s(x);C(k),k.__change=function(...v){var u;(u=l.onChange)==null||u.apply(this,v)},r(x);var R=i(x),I=s(R);C(I),I.__change=function(...v){var u;(u=l.onChange)==null||u.apply(this,v)},r(R);var w=i(R),S=s(w);C(S),S.__change=function(...v){var u;(u=l.onChange)==null||u.apply(this,v)},r(w);var g=i(w),H=s(g,!0);r(g);var L=i(g),N=s(L);N.__click=[Ue,l];var M=s(N);Ae(M,{icon:De}),r(N),r(L),r(d),K(v=>E(H,v),[()=>le.currency(n().total,l.currencyCode)]),_(p,()=>n().number,v=>n().number=v),_(T,()=>n().description,v=>n().description=v),_(k,()=>n().quantity,v=>n().quantity=v),_(I,()=>n().units,v=>n().units=v),_(S,()=>n().unitCost,v=>n().unitCost=v),P(y,d),ge()}_e(["change","click"]);var Ve=U('<article id="working-invoice-container" class="svelte-1afk9pg"><header>Working Invoice</header> <fieldset class="row svelte-1afk9pg"><input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" class="svelte-1afk9pg"> <input name="inv-date" type="date" title="Invoice Date" class="svelte-1afk9pg"> <input name="inv-order" type="text" title="Order #" placeholder="Order #" class="svelte-1afk9pg"> <div style="flex: 99 1 auto"></div></fieldset> <label>Header Lines <textarea name="inv-header" title="Header lines for the invoice" spellcheck="true" placeholder="Header lines for the invoice"></textarea></label> <label>Issue to <textarea name="inv-issue-to" title="Address of the company or person being issued to" spellcheck="true" placeholder="Who will receive the invoice?"></textarea></label> <section><button class="svelte-1afk9pg">Add Line</button> <button class="secondary svelte-1afk9pg">Sort Lines</button></section> <table id="working-inv-lines" class="striped svelte-1afk9pg"><thead><tr><th class="svelte-1afk9pg">Line No.</th><th style="width: 100%;" class="svelte-1afk9pg">Description</th><th class="svelte-1afk9pg">Quantity</th><th class="svelte-1afk9pg">Units</th><th class="svelte-1afk9pg">Unit Cost</th><th class="svelte-1afk9pg">Total</th><th class="svelte-1afk9pg"></th></tr></thead><tbody></tbody><tfoot><tr><th colspan="3" rowspan="3" style="vertical-align: top;" class="svelte-1afk9pg"></th><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">Subtotal:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">GST:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">Grand Total:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr></tfoot></table> <label>Footnote <textarea name="inv-footnote" spellcheck="true" placeholder="Optional Footnote"></textarea></label> <footer style="display: flex; justify-content: space-between;"><button class="secondary svelte-1afk9pg">Preview</button> <button class="svelte-1afk9pg">Build</button> <button class="secondary svelte-1afk9pg">Reset</button></footer></article>');function We(y,l){me(l,!0);let n=Ie(l,"vm",7);var d=Ve(),h=i(s(d),2),p=s(h);C(p),p.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)};var m=i(p,2);C(m),m.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)};var T=i(m,2);C(T),T.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)},fe(2),r(h);var x=i(h,2),k=i(s(x));se(k),k.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)},r(x);var R=i(x,2),I=i(s(R));se(I),I.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)},r(R);var w=i(R,2),S=s(w);S.__click=function(...t){var a;(a=l.onAddLine)==null||a.apply(this,t)};var g=i(S,2);g.__click=function(...t){var a;(a=l.onSortLines)==null||a.apply(this,t)},r(w);var H=i(w,2),L=i(s(H));he(L,21,()=>n().lines,pe,(t,a)=>{Me(t,{get currencyCode(){return n().currencyCode},get vm(){return o(a)},onRemoveLine:()=>l.onRemoveLine(o(a)),get onChange(){return l.onChange}})}),r(L);var N=i(L),M=s(N),v=i(s(M),2),u=s(v,!0);r(v),r(M);var j=i(M),Q=i(s(j)),X=s(Q,!0);r(Q),r(j);var Z=i(j),B=i(s(Z)),Y=s(B,!0);r(B),r(Z),r(N),r(H);var O=i(H,2),V=i(s(O));se(V),V.__change=function(...t){var a;(a=l.onChange)==null||a.apply(this,t)},r(O);var $=i(O,2),ee=s($);ee.__click=function(...t){var a;(a=l.onPreviewInvoice)==null||a.apply(this,t)};var te=i(ee,2);te.__click=function(...t){var a;(a=l.onBuildInvoice)==null||a.apply(this,t)};var ae=i(te,2);ae.__click=function(...t){var a;(a=l.onResetInvoice)==null||a.apply(this,t)},r($),r(d),K((t,a,ne)=>{E(u,t),E(X,a),E(Y,ne)},[()=>le.currency(n().subtotal,n().currencyCode),()=>le.currency(n().taxTotal,n().currencyCode),()=>le.currency(n().grandTotal,n().currencyCode)]),_(p,()=>n().number,t=>n().number=t),_(m,()=>n().date,t=>n().date=t),_(T,()=>n().orderRef,t=>n().orderRef=t),_(k,()=>n().headerLinesAsText,t=>n().headerLinesAsText=t),_(I,()=>n().issueToAsText,t=>n().issueToAsText=t),_(V,()=>n().footnoteAsText,t=>n().footnoteAsText=t),P(y,d),ge()}_e(["change","click"]);var Ee=U('<label><input id="untagged-select-all" type="checkbox"> Select All</label> <hr>',1),Be=U('<div class="c-task-line svelte-1fy7v30"><label><input name="task-line" type="checkbox"> </label></div>'),Oe=U("<!> <!>",1),qe=U("<p><i>All time has been accounted for.</i></p>"),Ge=(y,l)=>l(),je=(y,l,n)=>{y.preventDefault(),l(o(n).id)},Qe=U('<article> <a href="##">View</a></article>'),Ze=U('<h2>Invoice Builder</h2> <div id="container"><section id="row1" class="svelte-1fy7v30"><!> <div class="c-col-2 svelte-1fy7v30"><article class="time-list svelte-1fy7v30"><header>Uninvoiced Time</header> <!></article> <article class="scratch-pad svelte-1fy7v30"><header>Scratch Pad</header> <textarea name="scratch-pad" class="svelte-1fy7v30"></textarea></article></div></section> <section id="row2"><article><details><summary> </summary> <!></details></article></section></div>',1);function ct(y,l){me(l,!0);const n="draft";let d=ie(D(T())),h=ie(D([])),p=ie(""),m=ie(D([]));Re(()=>{W(p,D(oe.getScratchPad("page-invoice-builder"))),W(h,D(I())),W(m,D(x()))});function T(){var e=re.get(n);return e?new ue(e):k()}function x(){return re.getAll().filter(e=>e.id!=n).map(e=>new ue(e)).sort((e,c)=>{const b=new Date(e.date).valueOf(),f=new Date(c.date).valueOf();if(b>f)return-1;if(b<f)return 1;const q=c.number,F=e.number;return F>q?-1:F<q||e.id>c.id?1:e.id<c.id?-1:0})}function k(){const e=oe.read(),c=new ue;return c.id=n,c.headerLinesAsText=e.defaultInvoiceHeader??"",c.currencyCode=e.defaultInvoiceCurrencyCode,c.number=`${e.nextInvoiceNumber}`,c.footnoteAsText=e.defaultInvoiceFooter??"",c}function R(){oe.setScratchPad("page-invoice-builder",o(p))}function I(){return ke.getAll().filter(e=>e.invoiceRefId.length==0&&e.state==Se.Stopped).map(e=>new Ne(e))}function w(e){const c=new Fe;return c.extRefId=e.id,c.description=`${e.date} - ${e.name}`,c.units="hr",c.quantity=e.affectiveDurationHours,c.unitCost=200,c}function S(){g(),L(o(d).id)}function g(){re.set(o(d).id,o(d).getModel())}function H(){const e=o(d).getModel();e.id=crypto.randomUUID(),re.set(e.id,e);const c=o(d).lines.map(f=>f.extRefId).filter(f=>f&&f.length>0),b=o(h).filter(f=>c.includes(f.id));for(const f of b)f.invoiceRefId=o(d).id,ke.set(f.id,f.getModel());oe.incrementNextInvoiceNumber(),W(m,D(x())),W(h,D(I())),Q(),L(e.id)}function L(e){window.open(`/view-invoice/${e}`,`inv-${e}`)}function N(){if(o(h).length==0)return!1;for(const e of o(h))if(!o(d).containsExtRefId(e.id))return!1;return!0}function M(e){for(const c of o(h))e?o(d).addLine(w(c)):o(d).removeLineWithExtRefId(c.id)}function v(){o(d).addLine(),g()}function u(e){o(d).removeLineWithId(e.id),g()}function j(){o(d).sortAndRenumberLines(),g()}function Q(){W(d,D(k())),g()}var X=Ze(),Z=i(de(X),2),B=s(Z),Y=s(B);We(Y,{get vm(){return o(d)},onChange:g,onAddLine:v,onRemoveLine:u,onSortLines:j,onBuildInvoice:H,onPreviewInvoice:S,onResetInvoice:Q});var O=i(Y,2),V=s(O),$=i(s(V),2);{var ee=e=>{var c=Oe(),b=de(c);{var f=F=>{var A=Ee(),G=de(A),z=s(G);C(z),fe(),r(G),fe(2),xe(z,()=>N(),J=>M(J)),P(F,A)};ye(b,F=>{o(h).length>1&&F(f)})}var q=i(b,2);he(q,17,()=>o(h),pe,(F,A)=>{var G=Be(),z=s(G),J=s(z);C(J);var Ce=i(J);r(z),r(G),K((ve,Te)=>E(Ce,` ${ve??""} (${Te??""} hrs) - ${o(A).name??""}`),[()=>Pe.toLocalDatefromString(o(A).date,"en-NZ"),()=>o(A).affectiveDurationHours.toFixed(2)]),xe(J,()=>o(d).containsExtRefId(o(A).id),ve=>{ve?o(d).addLine(w(o(A))):o(d).removeLineWithExtRefId(o(A).id)}),P(F,G)}),P(e,c)},te=e=>{var c=qe();P(e,c)};ye($,e=>{o(h).length!=0?e(ee):e(te,!1)})}r(V);var ae=i(V,2),t=i(s(ae),2);se(t),t.__input=[Ge,R],r(ae),r(O),r(B);var a=i(B,2),ne=s(a),be=s(ne),ce=s(be),we=s(ce);r(ce);var Le=i(ce,2);he(Le,17,()=>o(m),pe,(e,c)=>{var b=Qe(),f=s(b),q=i(f);q.__click=[je,L,c],r(b),K(()=>E(f,`${o(c).number??""} `)),P(e,b)}),r(be),r(ne),r(a),r(Z),K(()=>E(we,`Closed Invoices (${o(m).length??""})`)),_(t,()=>o(p),e=>W(p,e)),P(y,X),ge()}_e(["input","click"]);export{ct as component};