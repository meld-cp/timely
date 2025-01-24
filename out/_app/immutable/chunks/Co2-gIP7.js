var i=Object.defineProperty;var a=(o,t,e)=>t in o?i(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var r=(o,t,e)=>a(o,typeof t!="symbol"?t+"":t,e);class n{constructor(t){r(this,"bucket");this.bucket=t}encode(t){return JSON.stringify(t)}dencode(t){return JSON.parse(t)}buildBucketKey(t){return[this.bucket,t].join("$")}matchesBucketKey(t){return t.startsWith(this.bucket+"$")}set(t,e){const s=this.buildBucketKey(t),c=this.encode(e);localStorage.setItem(s,c)}get(t,e){const s=this.buildBucketKey(t);return this.getWithKey(s)}getWithKey(t){const e=localStorage.getItem(t);return e===null?null:this.dencode(e)}getAll(){const t=[];for(let e=0;e<localStorage.length;e++){const s=localStorage.key(e);if(s==null)return t;if(!this.matchesBucketKey(s))continue;const c=this.getWithKey(s);c&&t.push(c)}return t}remove(t){const e=this.buildBucketKey(t);localStorage.removeItem(e)}removeAll(){const t=[];for(let e=0;e<localStorage.length;e++){const s=localStorage.key(e);if(s==null)break;this.matchesBucketKey(s)&&t.push(s)}for(const e of t)localStorage.removeItem(e)}}class l{constructor(){r(this,"defaultSettings",{nextInvoiceNumber:1e3,scratchPads:{}})}modify(t){const e=this.read();t(e),this.write(e)}read(){const t=localStorage.getItem("settings");return t?JSON.parse(t)||this.defaultSettings:this.defaultSettings}write(t){const e=JSON.stringify(t);console.log(e),localStorage.setItem("settings",e)}getScratchPad(t){const e=this.read();return e.scratchPads||(e.scratchPads={},this.write(e)),e.scratchPads[t]??""}setScratchPad(t,e){this.modify(s=>{s.scratchPads||(s.scratchPads={}),s.scratchPads[t]=e})}}const h=new n("tasks"),g=new n("invoices"),d=new n("invoice-previews"),k=new l;export{g as a,d as i,k as s,h as t};
