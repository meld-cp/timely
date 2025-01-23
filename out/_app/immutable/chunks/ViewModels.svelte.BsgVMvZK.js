var Z=o=>{throw TypeError(o)};var J=(o,t,s)=>t.has(o)||Z("Cannot "+s);var e=(o,t,s)=>(J(o,t,"read from private field"),s?s.call(o):t.get(o)),n=(o,t,s)=>t.has(o)?Z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,s);import{d as a,g as r,b as u,B as f}from"./runtime.CMfmp5FK.js";import{p as i}from"./proxy.RwLPPeI8.js";import{t as K}from"./Singletons.BXFbSXWe.js";var d=(o=>(o[o.Running=0]="Running",o[o.Paused=1]="Paused",o[o.Stopped=2]="Stopped",o[o.Archived=3]="Archived",o))(d||{});class z{static padLeft(t,s,h){const c=h-t.length;for(let P=0;P<c;P++)t=s[0]+t;return t}}class Y{static toInputDateValue(t){var s=t.getDate(),h=t.getMonth()+1,c=t.getFullYear();return`${c}-${z.padLeft(h.toString(),"0",2)}-${z.padLeft(s.toString(),"0",2)}`}static toLocalDatefromString(t,s){const h=new Date(t);return Y.toLocalDate(h,s)}static toLocalDate(t,s){return new Intl.DateTimeFormat(s,{}).format(t)}}var l,g,p,R,m,D,v,I,L;class tt{constructor(t){n(this,l,a(i(crypto.randomUUID())));n(this,g,a(i(d.Stopped)));n(this,p,a(i(Y.toInputDateValue(new Date))));n(this,R,a(""));n(this,m,a(0));n(this,D,a(0));n(this,v,a());n(this,I,a(""));n(this,L,a(i([])));t&&this.applyModel(t)}get id(){return r(e(this,l))}set id(t){u(e(this,l),i(t))}get state(){return r(e(this,g))}set state(t){u(e(this,g),i(t))}get date(){return r(e(this,p))}set date(t){u(e(this,p),i(t))}get name(){return r(e(this,R))}set name(t){u(e(this,R),i(t))}get duration(){return r(e(this,m))}set duration(t){u(e(this,m),i(t))}get affectiveDurationHours(){return r(e(this,D))}set affectiveDurationHours(t){u(e(this,D),i(t))}get timeRunStarted(){return r(e(this,v))}set timeRunStarted(t){u(e(this,v),i(t))}get invoiceRefId(){return r(e(this,I))}set invoiceRefId(t){u(e(this,I),i(t))}get tags(){return r(e(this,L))}set tags(t){u(e(this,L),i(t))}get tagsAsText(){return this.tags.join(" ")}set tagsAsText(t){this.tags=t.trim().split(" ")}getModel(t){return{id:t??this.id,state:this.state,date:this.date,name:this.name,duration:this.duration,affectiveDurationHours:this.affectiveDurationHours,timeRunStarted:this.timeRunStarted,invoiceRefId:this.invoiceRefId,tags:this.tags}}applyModel(t){this.id=t.id,this.state=t.state,this.date=t.date,this.name=t.name,this.duration=t.duration,this.affectiveDurationHours=t.affectiveDurationHours,this.timeRunStarted=t.timeRunStarted,this.invoiceRefId=t.invoiceRefId,this.tags=t.tags}save(){K.set(this.id,this.getModel())}pause(){this.state==d.Running&&(this.state=d.Paused,this.timeRunStarted=void 0)}start(){this.state=d.Running,this.timeRunStarted=Date.now()}stop(){this.state=d.Stopped,this.timeRunStarted=void 0}incrementDuration(t){if(this.state==d.Running){const s=this.timeRunStarted??Date.now(),h=t*60*1e3,c=s-h;this.timeRunStarted=c,this.recalculateDurationFromRunningSession()}else this.setDuration(this.duration+t*60)}recalculateDurationFromRunningSession(){if(this.state!=d.Running)return;const t=this.timeRunStarted??Date.now(),s=(Date.now()-t)/1e3;this.setDuration(s)}setDuration(t){this.duration=Math.ceil(t),this.affectiveDurationHours=this.calculateAffectiveHours(this.duration,15)}calculateAffectiveHours(t,s){let h=t/60;return Math.ceil(h/s)*s/60}}l=new WeakMap,g=new WeakMap,p=new WeakMap,R=new WeakMap,m=new WeakMap,D=new WeakMap,v=new WeakMap,I=new WeakMap,L=new WeakMap;var y,x,T,S,b,M,C,w,$,E,B;class et{constructor(t){n(this,y,a(i(crypto.randomUUID().toString())));n(this,x,a("NZD"));n(this,T,a(""));n(this,S,a(i(Y.toInputDateValue(new Date))));n(this,b,a(""));n(this,M,a(i([])));n(this,C,a(i([])));n(this,w,a(i([])));n(this,$,f(()=>this.lines.reduce((t,s)=>t+s.total,0)));n(this,E,f(()=>this.lines.reduce((t,s)=>t+s.tax,0)));n(this,B,f(()=>this.subtotal+this.taxTotal));t&&this.applyModel(t)}get id(){return r(e(this,y))}set id(t){u(e(this,y),i(t))}get currencyCode(){return r(e(this,x))}set currencyCode(t){u(e(this,x),i(t))}get number(){return r(e(this,T))}set number(t){u(e(this,T),i(t))}get date(){return r(e(this,S))}set date(t){u(e(this,S),i(t))}get orderRef(){return r(e(this,b))}set orderRef(t){u(e(this,b),i(t))}get issueToLines(){return r(e(this,M))}set issueToLines(t){u(e(this,M),i(t))}get footerLines(){return r(e(this,C))}set footerLines(t){u(e(this,C),i(t))}get lines(){return r(e(this,w))}set lines(t){u(e(this,w),i(t))}get subtotal(){return r(e(this,$))}get taxTotal(){return r(e(this,E))}get grandTotal(){return r(e(this,B))}getModel(){return{id:this.id,currencyCode:this.currencyCode,number:this.number,date:this.date,orderRef:this.orderRef,issueToLines:this.issueToLines,lines:this.lines.map(t=>t.getModel()),footerLines:this.footerLines}}applyModel(t){this.id=t.id,this.currencyCode=t.currencyCode,this.number=t.number,this.date=t.date,this.orderRef=t.orderRef,this.issueToLines=t.issueToLines,this.lines=t.lines.map(s=>new G(s)),this.footerLines=t.footerLines}get issueToAsText(){return this.issueToLines.join(`
`)}set issueToAsText(t){this.issueToLines=t.split(`
`)}get footnoteAsText(){return this.footerLines.join(`
`)}set footnoteAsText(t){this.footerLines=t.split(`
`)}containsExtRefId(t){return this.lines.some(h=>h.extRefId===t)}removeLineWithExtRefId(t){this.lines=this.lines.filter(s=>s.extRefId!=t)}addLine(t){const s=t??new G;return this.lines.push(s),s.id}sortLines(){}}y=new WeakMap,x=new WeakMap,T=new WeakMap,S=new WeakMap,b=new WeakMap,M=new WeakMap,C=new WeakMap,w=new WeakMap,$=new WeakMap,E=new WeakMap,B=new WeakMap;var H,A,q,F,U,V,j,N,W;class G{constructor(t){n(this,H,a(i(crypto.randomUUID().toString())));n(this,A,a());n(this,q,a(0));n(this,F,a(""));n(this,U,a(""));n(this,V,a(0));n(this,j,a(0));n(this,N,f(()=>0));n(this,W,f(()=>this.quantity*this.unitCost));t&&this.applyModel(t)}get id(){return r(e(this,H))}set id(t){u(e(this,H),i(t))}get extRefId(){return r(e(this,A))}set extRefId(t){u(e(this,A),i(t))}get number(){return r(e(this,q))}set number(t){u(e(this,q),i(t))}get description(){return r(e(this,F))}set description(t){u(e(this,F),i(t))}get units(){return r(e(this,U))}set units(t){u(e(this,U),i(t))}get quantity(){return r(e(this,V))}set quantity(t){u(e(this,V),i(t))}get unitCost(){return r(e(this,j))}set unitCost(t){u(e(this,j),i(t))}get tax(){return r(e(this,N))}get total(){return r(e(this,W))}getModel(){return{id:this.id,extRefId:this.extRefId,number:this.number,description:this.description,units:this.units,quantity:this.quantity,unitCost:this.unitCost}}applyModel(t){this.id=t.id,this.extRefId=t.extRefId,this.number=t.number,this.description=t.description,this.units=t.units,this.quantity=t.quantity,this.unitCost=t.unitCost}}H=new WeakMap,A=new WeakMap,q=new WeakMap,F=new WeakMap,U=new WeakMap,V=new WeakMap,j=new WeakMap,N=new WeakMap,W=new WeakMap;export{Y as F,et as I,d as T,tt as a,G as b};