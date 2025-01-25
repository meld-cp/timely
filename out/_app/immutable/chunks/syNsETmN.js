var H=Object.defineProperty;var b=s=>{throw TypeError(s)};var x=(s,e,t)=>e in s?H(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>x(s,typeof e!="symbol"?e+"":e,t),P=(s,e,t)=>e.has(s)||b("Cannot "+t);var o=(s,e,t)=>(P(s,e,"read from private field"),t?t.call(s):e.get(s)),n=(s,e,t)=>e.has(s)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);import{W as a,q as i,O as l}from"./5rrx3yqk.js";import{p as c}from"./BkxFj3vo.js";class N{constructor(e){m(this,"bucket");this.bucket=e}encode(e){return JSON.stringify(e)}dencode(e){return JSON.parse(e)}buildBucketKey(e){return[this.bucket,e].join("$")}matchesBucketKey(e){return e.startsWith(this.bucket+"$")}set(e,t){const r=this.buildBucketKey(e),k=this.encode(t);localStorage.setItem(r,k)}get(e,t){const r=this.buildBucketKey(e);return this.getWithKey(r)}getWithKey(e){const t=localStorage.getItem(e);return t===null?null:this.dencode(t)}getAll(){const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);if(r==null)return e;if(!this.matchesBucketKey(r))continue;const k=this.getWithKey(r);k&&e.push(k)}return e}remove(e){const t=this.buildBucketKey(e);localStorage.removeItem(t)}removeAll(){const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);if(r==null)break;this.matchesBucketKey(r)&&e.push(r)}for(const t of e)localStorage.removeItem(t)}}var d,u,h,g,y,I,f,v,S,C;class p{constructor(e){n(this,d,a(c(navigator.language)));n(this,u,a());n(this,h,a());n(this,g,a(1e3));n(this,y,a(c({})));n(this,I,a());n(this,f,a("USD"));n(this,v,a());n(this,S,a());n(this,C,a());e&&this.applyModel(e)}get localeCode(){return i(o(this,d))}set localeCode(e){l(o(this,d),c(e))}get address(){return i(o(this,u))}set address(e){l(o(this,u),c(e))}get logoData(){return i(o(this,h))}set logoData(e){l(o(this,h),c(e))}get nextInvoiceNumber(){return i(o(this,g))}set nextInvoiceNumber(e){l(o(this,g),c(e))}get scratchPads(){return i(o(this,y))}set scratchPads(e){l(o(this,y),c(e))}get defaultInvoiceHeader(){return i(o(this,I))}set defaultInvoiceHeader(e){l(o(this,I),c(e))}get defaultInvoiceCurrencyCode(){return i(o(this,f))}set defaultInvoiceCurrencyCode(e){l(o(this,f),c(e))}get defaultInvoiceFooter(){return i(o(this,v))}set defaultInvoiceFooter(e){l(o(this,v),c(e))}get cloudSyncHost(){return i(o(this,S))}set cloudSyncHost(e){l(o(this,S),c(e))}get cloudSyncUserId(){return i(o(this,C))}set cloudSyncUserId(e){l(o(this,C),c(e))}applyModel(e){this.localeCode=e.localeCode??navigator.language,this.address=e.address??"",this.logoData=e.logoData,this.nextInvoiceNumber=e.nextInvoiceNumber??1e3,this.defaultInvoiceHeader=e.defaultInvoiceHeader,this.defaultInvoiceCurrencyCode=e.defaultInvoiceCurrencyCode??"USD",this.defaultInvoiceFooter=e.defaultInvoiceFooter,this.scratchPads=e.scratchPads??{},this.cloudSyncHost=e.cloudSyncHost,this.cloudSyncUserId=e.cloudSyncUserId}getModel(){return{localeCode:this.localeCode,address:this.address,logoData:this.logoData,nextInvoiceNumber:this.nextInvoiceNumber,defaultInvoiceHeader:this.defaultInvoiceHeader,defaultInvoiceCurrencyCode:this.defaultInvoiceCurrencyCode,defaultInvoiceFooter:this.defaultInvoiceFooter,scratchPads:this.scratchPads,cloudSyncHost:this.cloudSyncHost,cloudSyncUserId:this.cloudSyncUserId}}}d=new WeakMap,u=new WeakMap,h=new WeakMap,g=new WeakMap,y=new WeakMap,I=new WeakMap,f=new WeakMap,v=new WeakMap,S=new WeakMap,C=new WeakMap;class D{constructor(){m(this,"defaultSettings",{localeCode:navigator.language,nextInvoiceNumber:1e3,defaultInvoiceCurrencyCode:"USD",scratchPads:{}})}modify(e){const t=this.read();e(t),this.write(t)}read(){const e=localStorage.getItem("settings");return e?new p(JSON.parse(e)||this.defaultSettings):new p(this.defaultSettings)}write(e){const t=JSON.stringify(e.getModel());localStorage.setItem("settings",t)}incrementNextInvoiceNumber(){this.modify(e=>{e.nextInvoiceNumber++})}getScratchPad(e){return this.read().scratchPads[e]??""}setScratchPad(e,t){this.modify(r=>{r.scratchPads[e]=t})}}const B=new N("tasks"),F=new N("invoices"),M=new D;export{F as i,M as s,B as t};
