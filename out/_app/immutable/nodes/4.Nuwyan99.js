import{a as D,t as T}from"../chunks/CQeaYElY.js";import{p as j,ac as b,s as n,f as E,a as I,o,a7 as s,c as u,r as f}from"../chunks/mCM1Q4f2.js";import{d as N,r as g}from"../chunks/MeqorYnI.js";import{b as w,a as q}from"../chunks/NsD9lZuA.js";import{p as k}from"../chunks/BTF6Oz8w.js";import{b as z}from"../chunks/CI6q0ESM.js";import{B as A,R as C}from"../chunks/IJbVE6sD.js";function G(m,i){i.downloadBackupFile()}async function H(m,i,c){var a;const t=(a=o(i))==null?void 0:a.item(0);t&&s(c,k(await t.text()))}var J=T('<h2>Backup & Restore</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Backup</button></article></section> <section><article><input name="restore-file" type="file" accept=".timely-backup"> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button></article></section>',1);function V(m,i){j(i,!0);const c=new A;let t=b(k(c.encodeDataToBackup())),a=b(void 0),r=b(void 0),l;function y(){try{if(!o(r))throw Error("No data to restore, select a file first");new C().restoreFromBase64(o(r)),s(r,void 0),l&&(l.value=""),s(t,k(c.encodeDataToBackup())),alert("Restored successfully!")}catch(e){alert(e)}}var x=J(),d=n(E(x),2),h=u(d),v=u(h);g(v);var S=n(v,2);S.__click=[G,c],f(h),f(d);var B=n(d,2),R=u(B),p=u(R);p.__change=[H,a,r],z(p,e=>l=e,()=>l);var _=n(p,2);g(_);var F=n(_,2);F.__click=y,f(R),f(B),w(v,()=>o(t),e=>s(t,e)),q(p,()=>o(a),e=>s(a,e)),w(_,()=>o(r),e=>s(r,e)),D(m,x),I()}N(["click","change"]);export{V as component};
