import{a as D,t as A}from"../chunks/CRRl4Swk.js";import{p as C,ac as d,s as l,f as E,a as N,w as r,a7 as a,c as f,r as m}from"../chunks/UCO5opLl.js";import{d as V,r as R}from"../chunks/BKxiCNa-.js";import{r as q}from"../chunks/DG_sXqrW.js";import{b as x,a as z}from"../chunks/D5xpou81.js";import{p as h}from"../chunks/CQhzKiTL.js";import{B as G,R as H}from"../chunks/CDe3Ld-t.js";function I(u,t,s,p,i,c){try{if(!r(t))throw Error("No data to restore, select a file first");s.restoreFromBase64(r(t)),alert("Restored successfully!"),a(t,void 0),a(p,void 0),a(i,h(c.encodeDataToBackup()))}catch(o){alert(o)}}var J=(u,t)=>t.downloadBackupFile(),K=(u,t)=>t(),L=A('<h2>Backup & Restore</h2> <section><article><textarea name="backup-text" class="svelte-1iwmjr1"></textarea> <button>Backup</button></article></section> <section><article><input name="restore-file" type="file" accept=".timely-backup"> <textarea name="restore-text" class="svelte-1iwmjr1"></textarea> <button>Restore</button></article></section>',1);function Y(u,t){C(t,!0);const s=new G,p=new H;let i=d(h(s.encodeDataToBackup())),c=d(void 0),o=d(void 0),_=d(void 0);async function S(){var F;const e=(F=r(c))==null?void 0:F.item(0);e&&a(o,h(await p.getFileTextContents(e)))}var g=L(),v=l(E(g),2),B=f(v),k=f(B);R(k);var T=l(k,2);T.__click=[J,s],m(B),m(v);var w=l(v,2),y=f(w),n=f(y);q(n),n.__change=[K,S];var b=l(n,2);R(b);var j=l(b,2);j.__click=[I,o,p,_,i,s],m(y),m(w),x(k,()=>r(i),e=>a(i,e)),x(n,()=>r(_),e=>a(_,e)),z(n,()=>r(c),e=>a(c,e)),x(b,()=>r(o),e=>a(o,e)),D(u,g),N()}V(["click","change"]);export{Y as component};
