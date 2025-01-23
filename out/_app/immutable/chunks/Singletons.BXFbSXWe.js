var c=Object.defineProperty;var a=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>a(r,typeof t!="symbol"?t+"":t,e);class o{constructor(t){i(this,"bucket");this.bucket=t}encode(t){return JSON.stringify(t)}dencode(t){return JSON.parse(t)}buildKey(t){return[this.bucket,t].join("$")}isBucketKey(t){return t.startsWith(this.bucket+"$")}set(t,e){const s=this.buildKey(t),n=this.encode(e);localStorage.setItem(s,n)}get(t){const e=this.buildKey(t);return this.getWithKey(e)}getWithKey(t){const e=localStorage.getItem(t);return e===null?null:this.dencode(e)}getAll(){const t=[];for(let e=0;e<localStorage.length;e++){const s=localStorage.key(e);if(s==null)return t;if(!this.isBucketKey(s))continue;const n=this.getWithKey(s);n&&t.push(n)}return t}remove(t){const e=this.buildKey(t);localStorage.removeItem(e)}}class l{constructor(){i(this,"defaultSettings",{nextInvoiceNumber:1e3,scratchPads:{}})}modify(t){const e=this.read();t(e),this.write(e)}read(){const t=localStorage.getItem("settings");return t?JSON.parse(t)||this.defaultSettings:this.defaultSettings}write(t){const e=JSON.stringify(t);console.log(e),localStorage.setItem("settings",e)}getScratchPad(t){const e=this.read();return e.scratchPads||(e.scratchPads={},this.write(e)),e.scratchPads[t]??""}setScratchPad(t,e){this.modify(s=>{s.scratchPads||(s.scratchPads={}),s.scratchPads[t]=e})}}const h=new o("tasks"),d=new o("invoices"),g=new l;export{d as i,g as s,h as t};