import{a as P,t as U}from"../chunks/JxQl07LI.js";import{p as pe,c as o,r,s as i,t as X,a as ge,i as ue,l,j as re,f as ve,k as E}from"../chunks/DfIxbQgk.js";import{d as me,s as B,r as oe}from"../chunks/gBOFVro4.js";import{i as be}from"../chunks/DnjCBcqO.js";import{e as fe,i as he}from"../chunks/DeDL2Fnw.js";import{r as T,a as L,I as de,T as ye,e as Te,F as Re,f as Ae}from"../chunks/dcS8n3kW.js";import{b,c as ke}from"../chunks/CRbFqH2L.js";import{p as S}from"../chunks/EhVYkYad.js";import{o as De}from"../chunks/-ALy92Mv.js";import{p as xe}from"../chunks/D2G8EsGX.js";import{F as se}from"../chunks/C1UJn8Ae.js";import{I as Se,f as Fe}from"../chunks/keHazJcN.js";function Ne(y,c){y.preventDefault(),c.onRemoveLine()}var Me=U('<tr class="c-line svelte-fbae20"><td class="svelte-fbae20"><input name="line-num" type="number" min="1" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-desc" type="text" spellcheck="true" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-qty" type="number" step="0.25" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-units" type="text" class="svelte-fbae20"></td><td class="svelte-fbae20"><input name="line-unit-cost" type="number" class="svelte-fbae20"></td><td style="text-align: right;" class="svelte-fbae20"> </td><td class="svelte-fbae20"><a href="##"><!></a></td></tr>');function Pe(y,c){pe(c,!0);let n=xe(c,"vm",7);var d=Me(),h=o(d),g=o(h);T(g),g.__change=function(...v){var f;(f=c.onChange)==null||f.apply(this,v)},r(h);var m=i(h),R=o(m);T(R),R.__change=function(...v){var f;(f=c.onChange)==null||f.apply(this,v)},r(m);var k=i(m),x=o(k);T(x),x.__change=function(...v){var f;(f=c.onChange)==null||f.apply(this,v)},r(k);var A=i(k),I=o(A);T(I),I.__change=function(...v){var f;(f=c.onChange)==null||f.apply(this,v)},r(A);var w=i(A),F=o(w);T(F),F.__change=function(...v){var f;(f=c.onChange)==null||f.apply(this,v)},r(w);var _=i(w),H=o(_,!0);r(_);var C=i(_),N=o(C);N.__click=[Ne,c];var V=o(N);Se(V,{icon:Fe}),r(N),r(C),r(d),X(v=>B(H,v),[()=>se.currency(n().total,c.currencyCode)]),b(g,()=>n().number,v=>n().number=v),b(R,()=>n().description,v=>n().description=v),b(x,()=>n().quantity,v=>n().quantity=v),b(I,()=>n().units,v=>n().units=v),b(F,()=>n().unitCost,v=>n().unitCost=v),P(y,d),ge()}me(["change","click"]);var Ue=U('<article id="working-invoice-container" class="svelte-1afk9pg"><header>Working Invoice</header> <fieldset class="row svelte-1afk9pg"><input name="inv-num" type="text" title="Invoice Number" placeholder="Invoice Number" class="svelte-1afk9pg"> <input name="inv-date" type="date" title="Invoice Date" class="svelte-1afk9pg"> <input name="inv-order" type="text" title="Order #" placeholder="Order #" class="svelte-1afk9pg"> <div style="flex: 99 1 auto"></div></fieldset> <label>Header Lines <textarea name="inv-header" title="Header lines for the invoice" spellcheck="true" placeholder="Header lines for the invoice"></textarea></label> <label>Issue to <textarea name="inv-issue-to" title="Address of the company or person being issued to" spellcheck="true" placeholder="Who will receive the invoice?"></textarea></label> <section><button class="svelte-1afk9pg">Add Line</button> <button class="secondary svelte-1afk9pg">Sort Lines</button></section> <table id="working-inv-lines" class="striped svelte-1afk9pg"><thead><tr><th class="svelte-1afk9pg">Line No.</th><th style="width: 100%;" class="svelte-1afk9pg">Description</th><th class="svelte-1afk9pg">Quantity</th><th class="svelte-1afk9pg">Units</th><th class="svelte-1afk9pg">Unit Cost</th><th class="svelte-1afk9pg">Total</th><th class="svelte-1afk9pg"></th></tr></thead><tbody></tbody><tfoot><tr><th colspan="3" rowspan="3" style="vertical-align: top;" class="svelte-1afk9pg"></th><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">Subtotal:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">GST:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr><tr><th colspan="2" style="text-align: right;" class="svelte-1afk9pg">Grand Total:</th><th style="text-align: right;" class="svelte-1afk9pg"> </th></tr></tfoot></table> <label>Footnote <textarea name="inv-footnote" spellcheck="true" placeholder="Optional Footnote"></textarea></label> <footer style="display: flex; justify-content: space-between;"><button class="secondary svelte-1afk9pg">Preview</button> <button class="svelte-1afk9pg">Build</button> <button class="secondary svelte-1afk9pg">Reset</button></footer></article>');function He(y,c){pe(c,!0);let n=xe(c,"vm",7);var d=Ue(),h=i(o(d),2),g=o(h);T(g),g.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)};var m=i(g,2);T(m),m.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)};var R=i(m,2);T(R),R.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)},ue(2),r(h);var k=i(h,2),x=i(o(k));oe(x),x.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)},r(k);var A=i(k,2),I=i(o(A));oe(I),I.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)},r(A);var w=i(A,2),F=o(w);F.__click=function(...t){var a;(a=c.onAddLine)==null||a.apply(this,t)};var _=i(F,2);_.__click=function(...t){var a;(a=c.onSortLines)==null||a.apply(this,t)},r(w);var H=i(w,2),C=i(o(H));fe(C,21,()=>n().lines,he,(t,a)=>{Pe(t,{get currencyCode(){return n().currencyCode},get vm(){return l(a)},onRemoveLine:()=>c.onRemoveLine(l(a)),get onChange(){return c.onChange}})}),r(C);var N=i(C),V=o(N),v=i(o(V),2),f=o(v,!0);r(v),r(V);var Q=i(V),Z=i(o(Q)),Y=o(Z,!0);r(Z),r(Q);var z=i(Q),O=i(o(z)),$=o(O,!0);r(O),r(z),r(N),r(H);var q=i(H,2),W=i(o(q));oe(W),W.__change=function(...t){var a;(a=c.onChange)==null||a.apply(this,t)},r(q);var ee=i(q,2),te=o(ee);te.__click=function(...t){var a;(a=c.onPreviewInvoice)==null||a.apply(this,t)};var ae=i(te,2);ae.__click=function(...t){var a;(a=c.onBuildInvoice)==null||a.apply(this,t)};var ne=i(ae,2);ne.__click=function(...t){var a;(a=c.onResetInvoice)==null||a.apply(this,t)},r(ee),r(d),X((t,a,ie)=>{B(f,t),B(Y,a),B($,ie)},[()=>se.currency(n().subtotal,n().currencyCode),()=>se.currency(n().taxTotal,n().currencyCode),()=>se.currency(n().grandTotal,n().currencyCode)]),b(g,()=>n().number,t=>n().number=t),b(m,()=>n().date,t=>n().date=t),b(R,()=>n().orderRef,t=>n().orderRef=t),b(x,()=>n().headerLinesAsText,t=>n().headerLinesAsText=t),b(I,()=>n().issueToAsText,t=>n().issueToAsText=t),b(W,()=>n().footnoteAsText,t=>n().footnoteAsText=t),P(y,d),ge()}me(["change","click"]);var Ve=U('<label><input id="untagged-select-all" type="checkbox"> Select All</label> <hr>',1),We=U('<div class="c-task-line svelte-1fy7v30"><label><input name="task-line" type="checkbox"> </label></div>'),Ee=U("<!> <!>",1),Be=U("<p><i>All time has been accounted for.</i></p>"),Oe=(y,c)=>c(),qe=(y,c,n)=>{y.preventDefault(),c(l(n).id)},je=U('<article> <a href="##">View</a></article>'),Ge=U('<h2>Invoice Builder</h2> <div id="container"><section id="row1" class="svelte-1fy7v30"><!> <div class="c-col-2 svelte-1fy7v30"><article class="time-list svelte-1fy7v30"><header>Uninvoiced Time</header> <!></article> <article class="scratch-pad svelte-1fy7v30"><header>Scratch Pad</header> <textarea name="scratch-pad" class="svelte-1fy7v30"></textarea></article></div></section> <section id="row2"><article><details><summary> </summary> <!></details></article></section></div>',1);function it(y,c){pe(c,!0);const n="draft";let d=re(S(R())),h=re(S([])),g=re(""),m=re(S([]));De(()=>{E(g,S(L.settingsController.getScratchPad("page-invoice-builder"))),E(h,S(I())),E(m,S(k()))});function R(){var e=L.invRepo.get(n);return e?new de(e):x()}function k(){return L.invRepo.getAll().filter(e=>e.id!=n).map(e=>new de(e)).sort((e,s)=>{const p=new Date(e.date).valueOf(),u=new Date(s.date).valueOf();if(p>u)return-1;if(p<u)return 1;const j=s.number,M=e.number;return M>j?-1:M<j||e.id>s.id?1:e.id<s.id?-1:0})}function x(){const e=L.settingsController.read(),s=new de;return s.id=n,s.headerLinesAsText=e.defaultInvoiceHeader??"",s.currencyCode=e.defaultInvoiceCurrencyCode,s.number=`${e.nextInvoiceNumber}`,s.footnoteAsText=e.defaultInvoiceFooter??"",s}function A(){L.settingsController.setScratchPad("page-invoice-builder",l(g))}function I(){return L.taskRepo.getAll().filter(e=>e.invoiceRefId.length==0&&e.state==ye.Stopped).map(e=>new Te(e))}function w(e){const s=new Ae;return s.extRefId=e.id,s.description=`${e.date} - ${e.name}`,s.units="hr",s.quantity=e.affectiveDurationHours,s.unitCost=200,s}function F(){_(),C(l(d).id,{wattermark:"DRAFT"})}function _(){L.invRepo.set(l(d).id,l(d).getModel())}function H(){const e=l(d).getModel();e.id=crypto.randomUUID(),L.invRepo.set(e.id,e);const s=e.lines.map(u=>u.extRefId).filter(u=>u&&u.length>0),p=l(h).filter(u=>s.includes(u.id));for(const u of p)u.invoiceRefId=e.id,u.state=ye.Archived,L.taskRepo.set(u.id,u.getModel());L.settingsController.incrementNextInvoiceNumber(),E(m,S(k())),E(h,S(I())),Z(),C(e.id)}function C(e,s){let p=`/view-invoice/${e}`;s!=null&&s.wattermark&&(p+=`/${s.wattermark}`),window.open(p,`inv-${e}`)}function N(){if(l(h).length==0)return!1;for(const e of l(h))if(!l(d).containsExtRefId(e.id))return!1;return!0}function V(e){for(const s of l(h))e?l(d).addLine(w(s)):l(d).removeLineWithExtRefId(s.id)}function v(){l(d).addLine(),_()}function f(e){l(d).removeLineWithId(e.id),_()}function Q(){l(d).sortAndRenumberLines(),_()}function Z(){E(d,S(x())),_()}var Y=Ge(),z=i(ve(Y),2),O=o(z),$=o(O);He($,{get vm(){return l(d)},onChange:_,onAddLine:v,onRemoveLine:f,onSortLines:Q,onBuildInvoice:H,onPreviewInvoice:F,onResetInvoice:Z});var q=i($,2),W=o(q),ee=i(o(W),2);{var te=e=>{var s=Ee(),p=ve(s);{var u=M=>{var D=Ve(),G=ve(D),J=o(G);T(J),ue(),r(G),ue(2),ke(J,()=>N(),K=>V(K)),P(M,D)};be(p,M=>{l(h).length>1&&M(u)})}var j=i(p,2);fe(j,17,()=>l(h),he,(M,D)=>{var G=We(),J=o(G),K=o(J);T(K);var Ce=i(K);r(J),r(G),X((ce,Le)=>B(Ce,` ${ce??""} (${Le??""} hrs) - ${l(D).name??""}`),[()=>Re.toLocalDatefromString(l(D).date,"en-NZ"),()=>l(D).affectiveDurationHours.toFixed(2)]),ke(K,()=>l(d).containsExtRefId(l(D).id),ce=>{ce?l(d).addLine(w(l(D))):l(d).removeLineWithExtRefId(l(D).id)}),P(M,G)}),P(e,s)},ae=e=>{var s=Be();P(e,s)};be(ee,e=>{l(h).length!=0?e(te):e(ae,!1)})}r(W);var ne=i(W,2),t=i(o(ne),2);oe(t),t.__input=[Oe,A],r(ne),r(q),r(O);var a=i(O,2),ie=o(a),_e=o(ie),le=o(_e),Ie=o(le);r(le);var we=i(le,2);fe(we,17,()=>l(m),he,(e,s)=>{var p=je(),u=o(p),j=i(u);j.__click=[qe,C,s],r(p),X(()=>B(u,`${l(s).number??""} `)),P(e,p)}),r(_e),r(ie),r(a),r(z),X(()=>B(Ie,`Closed Invoices (${l(m).length??""})`)),b(t,()=>l(g),e=>E(g,e)),P(y,Y),ge()}me(["input","click"]);export{it as component};