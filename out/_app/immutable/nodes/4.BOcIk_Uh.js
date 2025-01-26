import{a as U,t as V}from"../chunks/CYLZ2iXy.js";import{p as W,j as m,s as l,f as q,t as z,a as G,l as r,k as s,c as _,r as b,y as E}from"../chunks/DADXHUXo.js";import{d as M,r as L}from"../chunks/DrIKNhWD.js";import{a as B,c as Q,b as X,L as Y,s as j}from"../chunks/BYbhNCYi.js";import{s as K}from"../chunks/PwPRnE0L.js";import{b as P,a as Z}from"../chunks/BPWOsLyd.js";import{p as u}from"../chunks/Ie9j5a_F.js";import{b as $}from"../chunks/48vPxV_Q.js";function tt(p,o,t){o.downloadAsFile(r(t))}async function et(p,o,t){var e;const i=(e=r(o))==null?void 0:e.item(0);i&&s(t,u(await i.text()))}async function at(p,o,t,i){s(o,!0);try{if(!t)return;const e=await t.getData();if(e){if(e.modified==i.modified){alert("Cloud data is same as app data, skipping backup");return}if(e.modified>i.modified){alert("Cloud data is newer than app data, skipping backup");return}}await t.backup(i)}finally{s(o,!1)}}async function rt(p,o,t,i,e){s(o,!0);try{if(!t)return;const c=await t.getData();if(!c)throw Error("Invalid data to restore");s(i,u(e.encode(c)))}finally{s(o,!1)}}var ot=V('<h2>Backup</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Local Backup</button> <button>Cloud Backup</button></article></section> <h2>Restore</h2> <section><article><div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;"><input name="restore-file" type="file" accept=".timely-backup"> or <button style="flex-shrink: 0;">Read From Cloud</button></div> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button></article></section>',1);function ft(p,o){W(o,!0);let t=u(B.getAppData());const i=B.settingsController.read();let e=u(Q.build(i.cloudSyncHost,i.cloudSyncUserId,X)),c=m(!1),H=E(()=>e&&!r(c)),y=m(!1),J=E(()=>e&&!r(y));const f=new Y;let v=m(u(f.encode(t))),g=m(void 0),n=m(void 0),k;async function N(){try{if(!r(n))throw Error("No data to restore, select a file first");const a=f.decodeFromJson(r(n));if(!a)throw Error("Invalid data to restore");await B.restoreAppData(a),s(n,void 0),k&&(k.value=""),s(v,u(f.encode(a))),alert("Restored successfully!")}catch(a){alert(a)}}var F=ot(),h=l(q(F),2),S=_(h),x=_(S);L(x);var T=l(x,2);T.__click=[tt,f,v];var w=l(T,2);w.__click=[at,c,e,t],b(S),b(h);var A=l(h,4),I=_(A),R=_(I),d=_(R);d.__change=[et,g,n],K(d,"flex-shrink","1"),K(d,"margin-bottom","0"),$(d,a=>k=a,()=>k);var D=l(d,2);D.__click=[rt,y,e,n,f],b(R);var C=l(R,2);L(C);var O=l(C,2);O.__click=N,b(I),b(A),z(()=>{w.disabled=!r(H),j(w,"aria-busy",r(c)),D.disabled=!r(J),j(D,"aria-busy",r(y))}),P(x,()=>r(v),a=>s(v,a)),Z(d,()=>r(g),a=>s(g,a)),P(C,()=>r(n),a=>s(n,a)),U(p,F),G()}M(["click","change"]);export{ft as component};
