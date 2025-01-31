var Vt=Object.defineProperty;var At=s=>{throw TypeError(s)};var jt=(s,t,e)=>t in s?Vt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>jt(s,typeof t!="symbol"?t+"":t,e),$t=(s,t,e)=>t.has(s)||At("Cannot "+e);var i=(s,t,e)=>($t(s,t,"read from private field"),e?e.call(s):t.get(s)),o=(s,t,e)=>t.has(s)?At("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);import{h as _t,aN as Jt,ac as qt,aO as Wt,aP as Gt,j as c,l as u,k as d,y as _}from"./DfIxbQgk.js";import{c as Yt,i as zt,f as Qt,d as Xt,g as Zt,n as te,j as ee}from"./gBOFVro4.js";import{p as a}from"./EhVYkYad.js";function xt(s){var t,e,n="";if(typeof s=="string"||typeof s=="number")n+=s;else if(typeof s=="object")if(Array.isArray(s)){var r=s.length;for(t=0;t<r;t++)s[t]&&(e=xt(s[t]))&&(n&&(n+=" "),n+=e)}else for(e in s)s[e]&&(n&&(n+=" "),n+=e);return n}function se(){for(var s,t,e=0,n="",r=arguments.length;e<r;e++)(s=arguments[e])&&(t=xt(s))&&(n&&(n+=" "),n+=t);return n}function ie(s){return typeof s=="object"?se(s):s??""}function Se(s){if(_t){var t=!1,e=()=>{if(!t){if(t=!0,s.hasAttribute("value")){var n=s.value;Tt(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var r=s.checked;Tt(s,"checked",null),s.checked=r}}};s.__on_r=e,Jt(e),Yt()}}function ne(s,t){t?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function Tt(s,t,e,n){var r=s.__attributes??(s.__attributes={});_t&&(r[t]=s.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&s.nodeName==="LINK")||r[t]!==(r[t]=e)&&(t==="style"&&"__styles"in s&&(s.__styles={}),t==="loading"&&(s[Wt]=e),e==null?s.removeAttribute(t):typeof e!="string"&&Kt(s).includes(t)?s[t]=e:s.setAttribute(t,e))}function me(s,t,e,n,r=!1,l=!1,D=!1){var v=t||{},C=s.tagName==="OPTION";for(var y in t)y in e||(e[y]=null);e.class&&(e.class=ie(e.class));var Pt=Kt(s),Ht=s.__attributes??(s.__attributes={});for(const h in e){let g=e[h];if(C&&h==="value"&&g==null){s.value=s.__value="",v[h]=g;continue}var wt=v[h];if(g!==wt){v[h]=g;var Rt=h[0]+h[1];if(Rt!=="$$"){if(Rt==="on"){const S={},T="$$"+h;let m=h.slice(2);var mt=ee(m);if(zt(m)&&(m=m.slice(0,-7),S.capture=!0),!mt&&wt){if(g!=null)continue;s.removeEventListener(m,v[T],S),v[T]=null}if(g!=null)if(mt)s[`__${m}`]=g,Xt([m]);else{let Bt=function(Ft){v[h].call(this,Ft)};v[T]=Qt(m,s,Bt,S)}else mt&&(s[`__${m}`]=void 0)}else if(h==="style"&&g!=null)s.style.cssText=g+"";else if(h==="autofocus")Zt(s,!!g);else if(h==="__value"||h==="value"&&g!=null)s.value=s[h]=s.__value=g;else if(h==="selected"&&C)ne(s,g);else{var p=h;r||(p=te(p));var Lt=p==="defaultValue"||p==="defaultChecked";if(g==null&&!l&&!Lt)if(Ht[h]=null,p==="value"||p==="checked"){let S=s;if(p==="value"){let T=S.defaultValue;S.removeAttribute(p),S.defaultValue=T}else{let T=S.defaultChecked;S.removeAttribute(p),S.defaultChecked=T}}else s.removeAttribute(h);else Lt||Pt.includes(p)&&(l||typeof g!="string")?s[p]=g:typeof g!="function"&&(_t&&(p==="src"||p==="href"||p==="srcset")||Tt(s,p,g))}h==="style"&&"__styles"in s&&(s.__styles={})}}}return v}var kt=new Map;function Kt(s){var t=kt.get(s.nodeName);if(t)return t;kt.set(s.nodeName,t=[]);for(var e,n=s,r=Element.prototype;r!==n;){e=Gt(n);for(var l in e)e[l].set&&t.push(l);n=qt(n)}return t}const re="tasks",ae="invoices",oe="settings",ue="fdfa7987-22fb-4458-896b-d04b30f9ba38";var R,L,A,k,U,N,E,M,O,x,K;class w{constructor(t){o(this,R,c());o(this,L,c(a(navigator.language)));o(this,A,c());o(this,k,c());o(this,U,c(a({})));o(this,N,c(1e3));o(this,E,c());o(this,M,c("USD"));o(this,O,c());o(this,x,c());o(this,K,c());t&&this.applyModel(t)}get label(){return u(i(this,R))}set label(t){d(i(this,R),a(t))}get localeCode(){return u(i(this,L))}set localeCode(t){d(i(this,L),a(t))}get address(){return u(i(this,A))}set address(t){d(i(this,A),a(t))}get logoData(){return u(i(this,k))}set logoData(t){d(i(this,k),a(t))}get scratchPads(){return u(i(this,U))}set scratchPads(t){d(i(this,U),a(t))}get nextInvoiceNumber(){return u(i(this,N))}set nextInvoiceNumber(t){d(i(this,N),a(t))}get defaultInvoiceHeader(){return u(i(this,E))}set defaultInvoiceHeader(t){d(i(this,E),a(t))}get defaultInvoiceCurrencyCode(){return u(i(this,M))}set defaultInvoiceCurrencyCode(t){d(i(this,M),a(t))}get defaultInvoiceFooter(){return u(i(this,O))}set defaultInvoiceFooter(t){d(i(this,O),a(t))}get cloudSyncHost(){return u(i(this,x))}set cloudSyncHost(t){d(i(this,x),a(t))}get cloudSyncUserId(){return u(i(this,K))}set cloudSyncUserId(t){d(i(this,K),a(t))}applyModel(t){this.label=t.label,this.localeCode=t.localeCode??navigator.language,this.address=t.address??"",this.logoData=t.logoData,this.scratchPads=t.scratchPads??{},this.nextInvoiceNumber=t.nextInvoiceNumber??1e3,this.defaultInvoiceHeader=t.defaultInvoiceHeader,this.defaultInvoiceCurrencyCode=t.defaultInvoiceCurrencyCode??"USD",this.defaultInvoiceFooter=t.defaultInvoiceFooter,this.cloudSyncHost=t.cloudSyncHost,this.cloudSyncUserId=t.cloudSyncUserId}getModel(){return{label:this.label,localeCode:this.localeCode,address:this.address,logoData:this.logoData,scratchPads:this.scratchPads,nextInvoiceNumber:this.nextInvoiceNumber,defaultInvoiceHeader:this.defaultInvoiceHeader,defaultInvoiceCurrencyCode:this.defaultInvoiceCurrencyCode,defaultInvoiceFooter:this.defaultInvoiceFooter,cloudSyncHost:this.cloudSyncHost,cloudSyncUserId:this.cloudSyncUserId}}}R=new WeakMap,L=new WeakMap,A=new WeakMap,k=new WeakMap,U=new WeakMap,N=new WeakMap,E=new WeakMap,M=new WeakMap,O=new WeakMap,x=new WeakMap,K=new WeakMap;class Ut{static padLeft(t,e,n){const r=n-t.length;for(let l=0;l<r;l++)t=e[0]+t;return t}}class St{static toInputDateValue(t){var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return`${r}-${Ut.padLeft(n.toString(),"0",2)}-${Ut.padLeft(e.toString(),"0",2)}`}static toLocalDatefromString(t,e){const n=new Date(t);return St.toLocalDate(n,e)}static toLocalDate(t,e){return new Intl.DateTimeFormat(e,{}).format(t)}}var P,H,B,F,V,j,$,ft,gt;class Nt{constructor(t){o(this,P,c(a(crypto.randomUUID().toString())));o(this,H,c());o(this,B,c(0));o(this,F,c(""));o(this,V,c(""));o(this,j,c(0));o(this,$,c(0));o(this,ft,_(()=>0));o(this,gt,_(()=>this.quantity*this.unitCost));t&&this.applyModel(t)}get id(){return u(i(this,P))}set id(t){d(i(this,P),a(t))}get extRefId(){return u(i(this,H))}set extRefId(t){d(i(this,H),a(t))}get number(){return u(i(this,B))}set number(t){d(i(this,B),a(t))}get description(){return u(i(this,F))}set description(t){d(i(this,F),a(t))}get units(){return u(i(this,V))}set units(t){d(i(this,V),a(t))}get quantity(){return u(i(this,j))}set quantity(t){d(i(this,j),a(t))}get unitCost(){return u(i(this,$))}set unitCost(t){d(i(this,$),a(t))}get tax(){return u(i(this,ft))}get total(){return u(i(this,gt))}get isDescriptionOnlyLine(){return this.quantity==0}getModel(){return{id:this.id,extRefId:this.extRefId,number:this.number,description:this.description,units:this.units,quantity:this.quantity,unitCost:this.unitCost}}applyModel(t){this.id=t.id,this.extRefId=t.extRefId,this.number=t.number,this.description=t.description,this.units=t.units,this.quantity=t.quantity,this.unitCost=t.unitCost}}P=new WeakMap,H=new WeakMap,B=new WeakMap,F=new WeakMap,V=new WeakMap,j=new WeakMap,$=new WeakMap,ft=new WeakMap,gt=new WeakMap;var J,q,W,G,Y,z,Q,X,Z,tt,pt,It,vt;class ce{constructor(t){o(this,J,c(a(crypto.randomUUID().toString())));o(this,q,c("USD"));o(this,W,c(""));o(this,G,c(a(St.toInputDateValue(new Date))));o(this,Y,c(""));o(this,z,c(a([])));o(this,Q,c(a([])));o(this,X,c(a([])));o(this,Z,c(10));o(this,tt,c(a([])));o(this,pt,_(()=>this.lines.reduce((t,e)=>t+e.total,0)));o(this,It,_(()=>this.lines.reduce((t,e)=>t+e.tax,0)));o(this,vt,_(()=>this.subtotal+this.taxTotal));t&&this.applyModel(t)}get id(){return u(i(this,J))}set id(t){d(i(this,J),a(t))}get currencyCode(){return u(i(this,q))}set currencyCode(t){d(i(this,q),a(t))}get number(){return u(i(this,W))}set number(t){d(i(this,W),a(t))}get date(){return u(i(this,G))}set date(t){d(i(this,G),a(t))}get orderRef(){return u(i(this,Y))}set orderRef(t){d(i(this,Y),a(t))}get headerLines(){return u(i(this,z))}set headerLines(t){d(i(this,z),a(t))}get issueToLines(){return u(i(this,Q))}set issueToLines(t){d(i(this,Q),a(t))}get footerLines(){return u(i(this,X))}set footerLines(t){d(i(this,X),a(t))}get nextLineNumber(){return u(i(this,Z))}set nextLineNumber(t){d(i(this,Z),a(t))}get lines(){return u(i(this,tt))}set lines(t){d(i(this,tt),a(t))}get subtotal(){return u(i(this,pt))}get taxTotal(){return u(i(this,It))}get grandTotal(){return u(i(this,vt))}getModel(){return{id:this.id,currencyCode:this.currencyCode,number:this.number,date:this.date,orderRef:this.orderRef,headerLines:this.headerLines,issueToLines:this.issueToLines,lines:this.lines.map(t=>t.getModel()),footerLines:this.footerLines}}applyModel(t){this.id=t.id,this.currencyCode=t.currencyCode,this.number=t.number,this.date=t.date,this.orderRef=t.orderRef,this.headerLines=t.headerLines??[],this.issueToLines=t.issueToLines,this.lines=t.lines.map(e=>new Nt(e)),this.footerLines=t.footerLines??[]}get headerLinesAsText(){return this.headerLines.join(`
`)}set headerLinesAsText(t){this.headerLines=t.split(`
`)}get issueToAsText(){return this.issueToLines.join(`
`)}set issueToAsText(t){this.issueToLines=t.split(`
`)}get footnoteAsText(){return this.footerLines.join(`
`)}set footnoteAsText(t){this.footerLines=t.split(`
`)}containsExtRefId(t){return this.lines.some(n=>n.extRefId===t)}removeLineWithId(t){this.lines=this.lines.filter(e=>e.id!=t)}removeLineWithExtRefId(t){this.lines=this.lines.filter(e=>e.extRefId!=t)}addLine(t){const e=t??new Nt;return e.number=this.nextLineNumber,this.nextLineNumber+=10,this.lines.push(e),e.id}sortAndRenumberLines(){this.lines.sort((t,e)=>t.number-e.number),this.renumberLines()}renumberLines(){let t=10;for(let e=0;e<this.lines.length;e++){const n=this.lines[e];n.number=t,t+=10}this.nextLineNumber=t}}J=new WeakMap,q=new WeakMap,W=new WeakMap,G=new WeakMap,Y=new WeakMap,z=new WeakMap,Q=new WeakMap,X=new WeakMap,Z=new WeakMap,tt=new WeakMap,pt=new WeakMap,It=new WeakMap,vt=new WeakMap;var b=(s=>(s.Running="Running",s.Paused="Paused",s.Stopped="Stopped",s.Archived="Archived",s))(b||{}),et,st,it,nt,rt,at,ot,ut,ct;class de{constructor(t){o(this,et,c(a(crypto.randomUUID())));o(this,st,c(a(b.Stopped)));o(this,it,c(a(St.toInputDateValue(new Date))));o(this,nt,c(""));o(this,rt,c(0));o(this,at,c(0));o(this,ot,c());o(this,ut,c(""));o(this,ct,c(a([])));t&&this.applyModel(t)}get id(){return u(i(this,et))}set id(t){d(i(this,et),a(t))}get state(){return u(i(this,st))}set state(t){d(i(this,st),a(t))}get date(){return u(i(this,it))}set date(t){d(i(this,it),a(t))}get name(){return u(i(this,nt))}set name(t){d(i(this,nt),a(t))}get duration(){return u(i(this,rt))}set duration(t){d(i(this,rt),a(t))}get affectiveDurationHours(){return u(i(this,at))}set affectiveDurationHours(t){d(i(this,at),a(t))}get timeRunStarted(){return u(i(this,ot))}set timeRunStarted(t){d(i(this,ot),a(t))}get invoiceRefId(){return u(i(this,ut))}set invoiceRefId(t){d(i(this,ut),a(t))}get tags(){return u(i(this,ct))}set tags(t){d(i(this,ct),a(t))}get tagsAsText(){return this.tags.join(" ")}set tagsAsText(t){this.tags=t.trim().split(" ")}getModel(t){return{id:t??this.id,state:this.state,date:this.date,name:this.name,duration:this.duration,affectiveDurationHours:this.affectiveDurationHours,timeRunStarted:this.timeRunStarted,invoiceRefId:this.invoiceRefId,tags:this.tags}}applyModel(t){this.id=t.id,this.state=t.state,this.date=t.date,this.name=t.name,this.duration=t.duration,this.affectiveDurationHours=t.affectiveDurationHours,this.timeRunStarted=t.timeRunStarted,this.invoiceRefId=t.invoiceRefId,this.tags=t.tags}save(){ge.taskRepo.set(this.id,this.getModel())}pause(){this.state==b.Running&&(this.state=b.Paused,this.timeRunStarted=void 0)}start(){this.state=b.Running,this.timeRunStarted=Date.now()}stop(){this.state=b.Stopped,this.timeRunStarted=void 0}incrementDuration(t){if(this.state==b.Running){const e=this.timeRunStarted??Date.now(),n=t*60*1e3,r=e-n;this.timeRunStarted=r,this.recalculateDurationFromRunningSession()}else this.setDuration(this.duration+t*60)}recalculateDurationFromRunningSession(){if(this.state!=b.Running)return;const t=this.timeRunStarted??Date.now(),e=(Date.now()-t)/1e3;this.setDuration(e)}setDuration(t){this.duration=Math.ceil(t),this.affectiveDurationHours=this.calculateAffectiveHours(this.duration,15)}calculateAffectiveHours(t,e){let n=t/60;return Math.ceil(n/e)*e/60}}et=new WeakMap,st=new WeakMap,it=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,ut=new WeakMap,ct=new WeakMap;class bt{constructor(t,e){this.bucket=t,this.options=e,this.bucket=t}encode(t){return JSON.stringify(t)}dencode(t){return JSON.parse(t)}buildBucketKey(t){return[this.bucket,t].join("$")}matchesBucketItemKey(t){return t.startsWith(this.bucket+"$")}setChangedTimestamp(){var t;((t=this.options)==null?void 0:t.onModifiedCallback)!=null&&this.options.onModifiedCallback()}set(t,e){const n=this.buildBucketKey(t),r=this.encode(e);localStorage.setItem(n,r),this.setChangedTimestamp()}get(t){const e=this.buildBucketKey(t);return this.getWithKey(e)}getWithKey(t){const e=localStorage.getItem(t);return e===null?null:this.dencode(e)}getAll(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);if(n==null)return t;if(!this.matchesBucketItemKey(n))continue;const r=this.getWithKey(n);r&&t.push(r)}return t}remove(t){const e=this.buildBucketKey(t);localStorage.removeItem(e),this.setChangedTimestamp()}removeAll(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);if(n==null)break;this.matchesBucketItemKey(n)&&t.push(n)}if(t.length!=0){for(const e of t)localStorage.removeItem(e);this.setChangedTimestamp()}}}const yt=class yt{constructor(t){this.repo=t}read(){const t=this.repo.get("");return t?new w(t):new w(yt.defaultSettings)}write(t){this.repo.set("",t.getModel())}};I(yt,"defaultSettings",{localeCode:"en-US",nextInvoiceNumber:1e3,defaultInvoiceCurrencyCode:"USD",scratchPads:{}});let Dt=yt;class Et{constructor(t,e,n){I(this,"remoteUrl");I(this,"userAndAppPathSegments");const r=URL.parse(t);if(!r)throw new Error(`Invalid remote URL: ${t}`);this.userAndAppPathSegments=[e,n],this.remoteUrl=r}buildFullRemoteUrl(t){const e=new URL(this.remoteUrl);return e.pathname=t.join("/"),e}buildListUrl(t){return this.buildFullRemoteUrl([...this.userAndAppPathSegments,t])}buildItemUrl(t,e){return this.buildFullRemoteUrl([...this.userAndAppPathSegments,t,e])}async getItemList(t){const e=this.buildListUrl(t);return await(await fetch(e)).json()}async getItem(t,e){const n=this.buildItemUrl(t,e);return await(await fetch(n)).text()}async setItem(t,e,n){const r=this.buildItemUrl(t,e);await fetch(r,{method:"POST",body:n})}async delItem(t,e){const n=this.buildItemUrl(t,e);await fetch(n,{method:"DELETE"})}}const Mt="default",Ot="dataTimestamp",ht="ids",f=class f{constructor(t,e,n){this.host=t,this.userId=e,this.appId=n}static build(t,e,n){return t!=null&&(t.startsWith("https://")||t.startsWith("http://"))&&e!=null&&e.length>0&&n!=null&&n.length>0?new f(t,e,n):null}async backup(t){const e=new Et(this.host,this.userId,this.appId);await e.setItem(f.BUCKET_ID_META,Ot,JSON.stringify(t.modified)),await e.setItem(f.BUCKET_ID_SETTINGS,Mt,JSON.stringify(t.settings));const n=t.tasks.map(l=>l.id);await e.setItem(f.BUCKET_ID_TASKS,ht,JSON.stringify(n));for(const l of t.tasks)await e.setItem(f.BUCKET_ID_TASKS,l.id,JSON.stringify(l));const r=t.invoices.map(l=>l.id);await e.setItem(f.BUCKET_ID_INVOICES,ht,JSON.stringify(r));for(const l of t.invoices)await e.setItem(f.BUCKET_ID_INVOICES,l.id,JSON.stringify(l))}async getStoredValueOrDefault(t,e,n,r){try{const l=await t.getItem(e,n);if(l==null)return r;const D=JSON.parse(l);return D??r}catch{return r}}async getStoredValueOrThrow(t,e,n){try{const r=await t.getItem(e,n),l=JSON.parse(r);if(l==null)throw new Error(`Object is undefined after parsing and casting. JSON: ${r}`);return l}catch(r){throw new Error(`Unable to get stored value for key ${n} in bucket ${e}. ${r}`)}}async getData(){const t=new Et(this.host,this.userId,this.appId),e=await this.getStoredValueOrDefault(t,f.BUCKET_ID_META,Ot,0);if(e==0)return null;let n=await this.getStoredValueOrDefault(t,f.BUCKET_ID_SETTINGS,Mt,new w().getModel());const r=await this.getStoredValueOrDefault(t,f.BUCKET_ID_TASKS,ht,[]),l=[];for await(const C of r)try{const y=await this.getStoredValueOrThrow(t,f.BUCKET_ID_TASKS,C);l.push(y)}catch(y){console.error(y)}const D=await this.getStoredValueOrDefault(t,f.BUCKET_ID_INVOICES,ht,[]),v=[];for await(const C of D)try{const y=await this.getStoredValueOrThrow(t,f.BUCKET_ID_INVOICES,C);v.push(y)}catch(y){console.error(y)}return{modified:e,settings:n,tasks:l,invoices:v}}};I(f,"BUCKET_ID_META","meta"),I(f,"BUCKET_ID_SETTINGS","settings"),I(f,"BUCKET_ID_TASKS","tasks"),I(f,"BUCKET_ID_INVOICES","invoices");let Ct=f;class le{static async convertFileToDataURL(t){return new Promise((e,n)=>{const r=new FileReader;r.onloadend=()=>{const l=r.result;return e(l)},r.onerror=n,r.readAsDataURL(t)})}static downloadAsFile(t,e){const n=new Blob([t],{type:"text/plain"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=e,r.click(),URL.revokeObjectURL(r.href)}}class he{async backup(t){const e=this.encode(t);this.downloadAsFile(e)}downloadAsFile(t){const e=`${new Date().valueOf()}.timely-backup`;le.downloadAsFile(t,e)}encode(t){return JSON.stringify(t,null,2)}decodeFromJson(t){return JSON.parse(t)}}var dt,lt;class fe{constructor(){I(this,"settingsRepo");I(this,"taskRepo");I(this,"invRepo");I(this,"settingsController");o(this,dt,c(0));o(this,lt,c(a(new w)));const t={onModifiedCallback:()=>this.setChangedTimestamp()};this.settingsRepo=new bt(oe,t),this.taskRepo=new bt(re,t),this.invRepo=new bt(ae,t),this.settingsController=new Dt(this.settingsRepo),this.settings=this.settingsController.read(),this.dataModifiedTimestamp=this.readDataModifiedTimestamp()??0}get dataModifiedTimestamp(){return u(i(this,dt))}set dataModifiedTimestamp(t){d(i(this,dt),a(t))}get settings(){return u(i(this,lt))}set settings(t){d(i(this,lt),a(t))}saveSettings(){this.settingsController.write(this.settings)}getScratchPad(t){return this.settings.scratchPads[t]??""}setScratchPad(t,e){this.settings.scratchPads[t]=e,this.saveSettings()}incrementNextInvoiceNumber(){this.settings.nextInvoiceNumber++,this.saveSettings()}async getTasks(){return this.taskRepo.getAll().map(t=>new de(t))}async getInvoices(){return this.invRepo.getAll().map(t=>new ce(t))}getAppData(){return{modified:this.readDataModifiedTimestamp()??0,settings:this.settingsController.read().getModel(),tasks:this.taskRepo.getAll(),invoices:this.invRepo.getAll()}}setChangedTimestamp(t){this.dataModifiedTimestamp=t??new Date().valueOf(),localStorage.setItem("_modified",this.dataModifiedTimestamp.toString())}readDataModifiedTimestamp(){const t=localStorage.getItem("_modified");if(t===null)return null;const e=parseInt(t);return isNaN(e)?null:(this.dataModifiedTimestamp=e,e)}async backupData(t){const e=this.getAppData(),n=this.settingsController.read(),r=Ct.build(n.cloudSyncHost,n.cloudSyncUserId,ue);if((t==="auto"||t==="cloud")&&r!=null){const l=await r.getData();if(l&&l.modified>=e.modified){await this.backupData("local");return}await r.backup(e),alert("Backup to cloud successful")}else t==="local"&&await new he().backup(e)}async restoreAppData(t){localStorage.clear(),this.setChangedTimestamp(t.modified),this.settingsController.write(new w(t.settings));for(const e of t.tasks)this.taskRepo.set(e.id,e);for(const e of t.invoices)this.invRepo.set(e.id,e)}}dt=new WeakMap,lt=new WeakMap;const ge=new fe;export{St as F,ce as I,Et as K,he as L,b as T,le as U,ge as a,ue as b,Ct as c,ne as d,de as e,Nt as f,me as g,Se as r,Tt as s};
