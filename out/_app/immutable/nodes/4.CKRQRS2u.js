import{a as W,t as V}from"../chunks/JxQl07LI.js";import{p as X,j as d,s as n,f as Y,t as H,a as Z,l as a,k as o,c as u,r as p,y as J}from"../chunks/DfIxbQgk.js";import{d as $,r as N,s as tt}from"../chunks/gBOFVro4.js";import{i as at}from"../chunks/DnjCBcqO.js";import{a as T,c as et,b as rt,L as ot,s as O}from"../chunks/dcS8n3kW.js";import{s as A}from"../chunks/PwPRnE0L.js";import{b as U,a as it}from"../chunks/CRbFqH2L.js";import{p as f}from"../chunks/EhVYkYad.js";import{b as st}from"../chunks/fg7KLnab.js";function nt(m,s,e){s.downloadAsFile(a(e))}async function lt(m,s,e){var r;const i=(r=a(s))==null?void 0:r.item(0);i&&o(e,f(await i.text()))}async function ct(m,s,e,i){o(s,!0);try{if(!e)return;const r=await e.getData();if(r){if(r.modified==i.modified){alert("Cloud data is same as app data, skipping backup");return}if(r.modified>i.modified){alert("Cloud data is newer than app data, skipping backup");return}}await e.backup(i)}finally{o(s,!1)}}async function dt(m,s,e,i,r,_,b){o(s,!0);try{if(!e)return;const v=await e.getData();if(!v)throw Error("Invalid data to restore");o(i,null),v.modified<r.modified&&o(i,"Warning: Current app data is newer than cloud data"),o(_,f(b.encode(v)))}finally{o(s,!1)}}var ut=V("<p> </p>"),pt=V('<h2>Backup</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Local Backup</button> <button>Cloud Backup</button></article></section> <h2>Restore</h2> <section><article><div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;"><input name="restore-file" type="file" accept=".timely-backup"> or <button style="flex-shrink: 0;">Read From Cloud</button></div> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button> <!></article></section>',1);function xt(m,s){X(s,!0);let e=f(T.getAppData());const i=T.settingsController.read();let r=f(et.build(i.cloudSyncHost,i.cloudSyncUserId,rt)),_=d(null),b=d(!1),v=J(()=>r&&!a(b)),x=d(!1),q=J(()=>r&&!a(x));const k=new ot;let y=d(f(k.encode(e))),w=d(void 0),l=d(void 0),g;async function z(){try{if(!a(l))throw Error("No data to restore, select a file first");const t=k.decodeFromJson(a(l));if(!t)throw Error("Invalid data to restore");await T.restoreAppData(t),o(l,void 0),g&&(g.value=""),o(y,f(k.encode(t))),alert("Restored successfully!")}catch(t){alert(t)}}var I=pt(),R=n(Y(I),2),E=u(R),C=u(E);N(C);var L=n(C,2);L.__click=[nt,k,y];var D=n(L,2);D.__click=[ct,b,r,e],p(E),p(R);var j=n(R,4),K=u(j),B=u(K),c=u(B);c.__change=[lt,w,l],A(c,"flex-shrink","1"),A(c,"margin-bottom","0"),st(c,t=>g=t,()=>g);var F=n(c,2);F.__click=[dt,x,r,_,e,l,k],p(B);var S=n(B,2);N(S);var P=n(S,2);P.__click=z;var G=n(P,2);{var M=t=>{var h=ut();A(h,"color","red");var Q=u(h,!0);p(h),H(()=>tt(Q,a(_))),W(t,h)};at(G,t=>{a(_)&&t(M)})}p(K),p(j),H(()=>{D.disabled=!a(v),O(D,"aria-busy",a(b)),F.disabled=!a(q),O(F,"aria-busy",a(x))}),U(C,()=>a(y),t=>o(y,t)),it(c,()=>a(w),t=>o(w,t)),U(S,()=>a(l),t=>o(l,t)),W(m,I),Z()}$(["click","change"]);export{xt as component};