import{a as D,t as T}from"../chunks/D1Xbq9Mo.js";import{p as j,W as b,s as n,f as N,a as E,o,N as s,c as u,r as f}from"../chunks/CRiTDDG9.js";import{d as I,r as g}from"../chunks/Bt7N_XmN.js";import{b as w,a as W}from"../chunks/CJ053N4G.js";import{p as k}from"../chunks/dGNHEYVr.js";import{b as q}from"../chunks/D2WjRmon.js";import{B as z,R as A}from"../chunks/C6JpNrHn.js";function C(m,i){i.downloadBackupFile()}async function G(m,i,c){var a;const t=(a=o(i))==null?void 0:a.item(0);t&&s(c,k(await t.text()))}var H=T('<h2>Backup & Restore</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Backup</button></article></section> <section><article><input name="restore-file" type="file" accept=".timely-backup"> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button></article></section>',1);function U(m,i){j(i,!0);const c=new z;let t=b(k(c.encodeDataToBackup())),a=b(void 0),r=b(void 0),l;function y(){try{if(!o(r))throw Error("No data to restore, select a file first");new A().restoreFromBase64(o(r)),s(r,void 0),l&&(l.value=""),s(t,k(c.encodeDataToBackup())),alert("Restored successfully!")}catch(e){alert(e)}}var x=H(),d=n(N(x),2),h=u(d),v=u(h);g(v);var S=n(v,2);S.__click=[C,c],f(h),f(d);var B=n(d,2),R=u(B),p=u(R);p.__change=[G,a,r],q(p,e=>l=e,()=>l);var _=n(p,2);g(_);var F=n(_,2);F.__click=y,f(R),f(B),w(v,()=>o(t),e=>s(t,e)),W(p,()=>o(a),e=>s(a,e)),w(_,()=>o(r),e=>s(r,e)),D(m,x),E()}I(["click","change"]);export{U as component};