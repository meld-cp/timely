const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.uwOlUts1.js","../chunks/disclose-version.ZjNFFspW.js","../chunks/runtime.CMfmp5FK.js","../chunks/snippet.2zQ1sw_U.js","../nodes/1.DL-euh0A.js","../chunks/legacy.DMhDkLsa.js","../chunks/render.BggfVEQa.js","../chunks/events.Ck8tAUNB.js","../chunks/lifecycle.CQgTHoCj.js","../chunks/index.WEQGCN4w.js","../chunks/entry.DlBOnyes.js","../chunks/index-client.DAFvqb0u.js","../nodes/2.COCaThLw.js","../chunks/each.Dvc_xFwf.js","../chunks/attributes.-KLHLZgj.js","../chunks/this.2ZpSUIgT.js","../chunks/BackupAndRestore.CDe3Ld-t.js","../chunks/logger.D2MqzlnX.js","../nodes/3.PFklLDQ2.js","../nodes/4.F-Q68AkY.js","../chunks/input.Cjk_fENK.js","../chunks/proxy.RwLPPeI8.js","../assets/4.BWMjEULo.css","../nodes/5.DZw_6r49.js","../assets/5.DrF0xWl3.css","../nodes/6.CT0IN7OI.js","../chunks/Singletons.BXFbSXWe.js","../assets/6.roXI0UFS.css","../nodes/7.C2WA188X.js","../chunks/if.BZPCAus2.js","../chunks/props.Bqb4XvXL.js","../chunks/FormatNumber.CF8cNsMY.js","../chunks/ViewModels.svelte.BsgVMvZK.js","../assets/7.C8gKQjj9.css","../nodes/8.DEfqV7Y5.js","../assets/8.DceeIo-d.css","../nodes/9._P5uRWzI.js","../assets/9.BGc3LWRK.css"])))=>i.map(i=>d[i]);
var Q=n=>{throw TypeError(n)};var X=(n,e,t)=>e.has(n)||Q("Cannot "+t);var i=(n,e,t)=>(X(n,e,"read from private field"),t?t.call(n):e.get(n)),Y=(n,e,t)=>e.has(n)?Q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),z=(n,e,t,s)=>(X(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);import{k as Z,F as ie,e as ce,E as ue,h as le,l as me,L as de,g as h,ai as fe,b as q,aL as _e,aI as he,a2 as ve,p as ge,v as Ee,w as ye,aM as Pe,f as O,s as be,a as Re,d as H,c as Le,r as Oe,t as we,B as V}from"../chunks/runtime.CMfmp5FK.js";import{a as Ae,m as ke,u as Te,s as xe}from"../chunks/render.BggfVEQa.js";import{a as y,t as ee,c as T,b as Ie}from"../chunks/disclose-version.ZjNFFspW.js";import{i as B}from"../chunks/if.BZPCAus2.js";import{p as De}from"../chunks/proxy.RwLPPeI8.js";import{b as p}from"../chunks/this.2ZpSUIgT.js";import{p as F}from"../chunks/props.Bqb4XvXL.js";import{o as Ve}from"../chunks/index-client.DAFvqb0u.js";function S(n,e,t){Z&&ie();var s=n,o,c;ce(()=>{o!==(o=e())&&(c&&(de(c),c=null),o&&(c=le(()=>t(s,o))))},ue),Z&&(s=me)}function pe(n){return class extends Se{constructor(e){super({component:n,...e})}}}var P,m;class Se{constructor(e){Y(this,P);Y(this,m);var c;var t=new Map,s=(a,r)=>{var u=ve(r);return t.set(a,u),u};const o=new Proxy({...e.props||{},$$events:{}},{get(a,r){return h(t.get(r)??s(r,Reflect.get(a,r)))},has(a,r){return r===fe?!0:(h(t.get(r)??s(r,Reflect.get(a,r))),Reflect.has(a,r))},set(a,r,u){return q(t.get(r)??s(r,u),u),Reflect.set(a,r,u)}});z(this,m,(e.hydrate?Ae:ke)(e.component,{target:e.target,anchor:e.anchor,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&_e(),z(this,P,o.$$events);for(const a of Object.keys(i(this,m)))a==="$set"||a==="$destroy"||a==="$on"||he(this,a,{get(){return i(this,m)[a]},set(r){i(this,m)[a]=r},enumerable:!0});i(this,m).$set=a=>{Object.assign(o,a)},i(this,m).$destroy=()=>{Te(i(this,m))}}$set(e){i(this,m).$set(e)}$on(e,t){i(this,P)[e]=i(this,P)[e]||[];const s=(...o)=>t.call(this,...o);return i(this,P)[e].push(s),()=>{i(this,P)[e]=i(this,P)[e].filter(o=>o!==s)}}$destroy(){i(this,m).$destroy()}}P=new WeakMap,m=new WeakMap;const Ce="modulepreload",je=function(n,e){return new URL(n,e).href},$={},g=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),u=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(t.map(d=>{if(d=je(d,s),d in $)return;$[d]=!0;const b=d.endsWith(".css"),C=b?'[rel="stylesheet"]':"";if(!!s)for(let R=a.length-1;R>=0;R--){const w=a[R];if(w.href===d&&(!b||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${C}`))return;const v=document.createElement("link");if(v.rel=b?"stylesheet":Ce,b||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),b)return new Promise((R,w)=>{v.addEventListener("load",R),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function c(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&c(r.reason);return e().catch(c)})},$e={};var Be=ee('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Fe=ee("<!> <!>",1);function qe(n,e){ge(e,!0);let t=F(e,"components",23,()=>[]),s=F(e,"data_0",3,null),o=F(e,"data_1",3,null),c=F(e,"data_2",3,null);Ee(()=>e.stores.page.set(e.page)),ye(()=>{e.stores,e.page,e.constructors,t(),e.form,s(),o(),c(),e.stores.page.notify()});let a=H(!1),r=H(!1),u=H(null);Ve(()=>{const l=e.stores.page.subscribe(()=>{h(a)&&(q(r,!0),Pe().then(()=>{q(u,De(document.title||"untitled page"))}))});return q(a,!0),l});const d=V(()=>e.constructors[2]);var b=Fe(),C=O(b);{var J=l=>{var E=T();const x=V(()=>e.constructors[0]);var I=O(E);S(I,()=>h(x),(L,A)=>{p(A(L,{get data(){return s()},get form(){return e.form},children:(f,Ne)=>{var K=T(),te=O(K);{var re=k=>{var D=T();const U=V(()=>e.constructors[1]);var G=O(D);S(G,()=>h(U),(N,W)=>{p(W(N,{get data(){return o()},get form(){return e.form},children:(_,We)=>{var M=T(),ae=O(M);S(ae,()=>h(d),(se,oe)=>{p(oe(se,{get data(){return c()},get form(){return e.form}}),j=>t()[2]=j,()=>{var j;return(j=t())==null?void 0:j[2]})}),y(_,M)},$$slots:{default:!0}}),_=>t()[1]=_,()=>{var _;return(_=t())==null?void 0:_[1]})}),y(k,D)},ne=k=>{var D=T();const U=V(()=>e.constructors[1]);var G=O(D);S(G,()=>h(U),(N,W)=>{p(W(N,{get data(){return o()},get form(){return e.form}}),_=>t()[1]=_,()=>{var _;return(_=t())==null?void 0:_[1]})}),y(k,D)};B(te,k=>{e.constructors[2]?k(re):k(ne,!1)})}y(f,K)},$$slots:{default:!0}}),f=>t()[0]=f,()=>{var f;return(f=t())==null?void 0:f[0]})}),y(l,E)},v=l=>{var E=T();const x=V(()=>e.constructors[0]);var I=O(E);S(I,()=>h(x),(L,A)=>{p(A(L,{get data(){return s()},get form(){return e.form}}),f=>t()[0]=f,()=>{var f;return(f=t())==null?void 0:f[0]})}),y(l,E)};B(C,l=>{e.constructors[1]?l(J):l(v,!1)})}var R=be(C,2);{var w=l=>{var E=Be(),x=Le(E);{var I=L=>{var A=Ie();we(()=>xe(A,h(u))),y(L,A)};B(x,L=>{h(r)&&L(I)})}Oe(E),y(l,E)};B(R,l=>{h(a)&&l(w)})}y(n,b),Re()}const et=pe(qe),tt=[()=>g(()=>import("../nodes/0.uwOlUts1.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>g(()=>import("../nodes/1.DL-euh0A.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]),import.meta.url),()=>g(()=>import("../nodes/2.COCaThLw.js"),__vite__mapDeps([12,1,2,6,7,13,3,14,15,10,11,16,5,17]),import.meta.url),()=>g(()=>import("../nodes/3.PFklLDQ2.js"),__vite__mapDeps([18,1,2,5]),import.meta.url),()=>g(()=>import("../nodes/4.F-Q68AkY.js"),__vite__mapDeps([19,1,2,7,14,20,21,16,22]),import.meta.url),()=>g(()=>import("../nodes/5.DZw_6r49.js"),__vite__mapDeps([23,1,2,5,24]),import.meta.url),()=>g(()=>import("../nodes/6.CT0IN7OI.js"),__vite__mapDeps([25,1,2,5,7,14,20,21,8,26,27]),import.meta.url),()=>g(()=>import("../nodes/7.C2WA188X.js"),__vite__mapDeps([28,1,2,6,7,29,13,14,20,21,11,30,31,32,26,33]),import.meta.url),()=>g(()=>import("../nodes/8.DEfqV7Y5.js"),__vite__mapDeps([34,1,2,6,7,21,11,13,29,14,20,30,5,8,17,15,32,26,35]),import.meta.url),()=>g(()=>import("../nodes/9._P5uRWzI.js"),__vite__mapDeps([36,1,2,6,7,29,13,14,21,11,9,10,31,32,26,37]),import.meta.url)],rt=[],nt={"/(main)":[3,[2]],"/(main)/admin/backup":[4,[2]],"/(main)/admin/roadmap":[5,[2]],"/(main)/admin/settings":[6,[2]],"/(main)/invoices":[7,[2]],"/(main)/timelog":[8,[2]],"/view-invoice/[id]":[9]},Ue={handleError:({error:n})=>{console.error(n)},reroute:()=>{},transport:{}},Ge=Object.fromEntries(Object.entries(Ue.transport).map(([n,e])=>[n,e.decode])),at=!1,st=(n,e)=>Ge[n](e);export{st as decode,Ge as decoders,nt as dictionary,at as hash,Ue as hooks,$e as matchers,tt as nodes,et as root,rt as server_loads};