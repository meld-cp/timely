import{a as P,t as V}from"../chunks/JxQl07LI.js";import{p as X,j as f,s as c,f as Y,t as W,a as Z,l as a,k as r,c as m,r as _,y as H}from"../chunks/DfIxbQgk.js";import{d as $,r as N,s as tt}from"../chunks/gBOFVro4.js";import{i as at}from"../chunks/DnjCBcqO.js";import{a as A,c as et,b as rt,L as ot,s as O}from"../chunks/pG2aVCQS.js";import{s as S}from"../chunks/PwPRnE0L.js";import{b as U,a as it}from"../chunks/CRbFqH2L.js";import{p as b}from"../chunks/EhVYkYad.js";import{b as st}from"../chunks/fg7KLnab.js";function nt(v,o,e){o.downloadAsFile(a(e))}async function lt(v,o,e){var i;const s=(i=a(o))==null?void 0:i.item(0);s&&r(e,b(await s.text()))}async function ct(v,o,e,s,i){r(o,!0);try{if(!e)return;const n=s.decodeFromJson(a(i));if(!n){alert("Data to backup is invalid");return}const l=await e.getData();if(l){if(l.modified==n.modified){alert("Cloud data is same as app data, skipping backup");return}if(l.modified>n.modified){alert("Cloud data is newer than app data, skipping backup");return}}await e.backup(n)}finally{r(o,!1)}}async function dt(v,o,e,s,i,n,l){r(o,!0);try{if(!e)return;const k=await e.getData();if(!k)throw Error("Invalid data to restore");r(s,null),k.modified<i.modified&&r(s,"Warning: Current app data is newer than cloud data"),r(n,b(l.encode(k)))}finally{r(o,!1)}}var ut=V("<p> </p>"),pt=V('<h2>Backup</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Local Backup</button> <button>Cloud Backup</button></article></section> <h2>Restore</h2> <section><article><div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;"><input name="restore-file" type="file" accept=".timely-backup"> or <button style="flex-shrink: 0;">Read From Cloud</button></div> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button> <!></article></section>',1);function xt(v,o){X(o,!0);let e=b(A.getAppData());const s=A.settingsController.read();let i=b(et.build(s.cloudSyncHost,s.cloudSyncUserId,rt)),n=f(null),l=f(!1),k=H(()=>i&&!a(l)),x=f(!1),q=H(()=>i&&!a(x));const u=new ot;let y=f(b(u.encode(e))),w=f(void 0),d=f(void 0),g;async function z(){try{if(!a(d))throw Error("No data to restore, select a file first");const t=u.decodeFromJson(a(d));if(!t)throw Error("Invalid data to restore");await A.restoreAppData(t),r(d,void 0),g&&(g.value=""),r(y,b(u.encode(t))),alert("Restored successfully!")}catch(t){alert(t)}}var I=pt(),D=c(Y(I),2),E=m(D),R=m(E);N(R);var L=c(R,2);L.__click=[nt,u,y];var B=c(L,2);B.__click=[ct,l,i,u,y],_(E),_(D);var j=c(D,4),J=m(j),C=m(J),p=m(C);p.__change=[lt,w,d],S(p,"flex-shrink","1"),S(p,"margin-bottom","0"),st(p,t=>g=t,()=>g);var T=c(p,2);T.__click=[dt,x,i,n,e,d,u],_(C);var F=c(C,2);N(F);var K=c(F,2);K.__click=z;var G=c(K,2);{var M=t=>{var h=ut();S(h,"color","red");var Q=m(h,!0);_(h),W(()=>tt(Q,a(n))),P(t,h)};at(G,t=>{a(n)&&t(M)})}_(J),_(j),W(()=>{B.disabled=!a(k),O(B,"aria-busy",a(l)),T.disabled=!a(q),O(T,"aria-busy",a(x))}),U(R,()=>a(y),t=>r(y,t)),it(p,()=>a(w),t=>r(w,t)),U(F,()=>a(d),t=>r(d,t)),P(v,I),Z()}$(["click","change"]);export{xt as component};
