var Tt=Object.defineProperty;var lt=a=>{throw TypeError(a)};var pt=(a,t,e)=>t in a?Tt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var O=(a,t,e)=>pt(a,typeof t!="symbol"?t+"":t,e),yt=(a,t,e)=>t.has(a)||lt("Cannot "+e);var w=(a,t,e)=>(yt(a,t,"read from private field"),e?e.call(a):t.get(a)),E=(a,t,e)=>t.has(a)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);import{a as m,t as T,c as ct}from"../chunks/D-9eU7Ls.js";import{p as tt,c as i,s as v,r as n,t as N,l as k,a as et,y as L,f as J,i as dt,k as F,j as W}from"../chunks/D_6JOOz4.js";import{d as kt,s as B,j as bt}from"../chunks/BSibExFq.js";import{p as z}from"../chunks/Du6CA1sz.js";import{o as ft,a as mt}from"../chunks/DkiAmYuj.js";import{e as ht,i as xt}from"../chunks/BkIRmUsw.js";import{t as St,s as Dt}from"../chunks/CQ3U4dWC.js";import{i as U}from"../chunks/DC2ULrIC.js";import{s as ut,r as nt}from"../chunks/B47jlKa9.js";import{b as it}from"../chunks/C78wupHh.js";import{p as Rt}from"../chunks/CSUKJKgE.js";import{I as K,a as At,b as Ct,c as Pt,d as wt,e as zt,g as It}from"../chunks/DNn_mebg.js";import{T as c,a as rt,d as ot,U as Mt,F as Ut}from"../chunks/D-OxX8Le.js";function jt(a,t,e){if(e){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}var Lt=(a,t)=>t.onIncreaseDuration(!0,a.ctrlKey),qt=(a,t)=>t.onIncreaseDuration(!1,a.ctrlKey),Ht=T('<button class="outline svelte-1ifz5q4" title="Add Time"><!></button> <button class="outline svelte-1ifz5q4" title="Remove Time"><!></button>',1),Vt=T('<div class="c-buttons svelte-1ifz5q4"><!></div>'),Ft=(a,t)=>t.onAction1Click(),Bt=T('<button class="outline svelte-1ifz5q4"><!></button>'),Nt=T('<div class="icon"><!></div>'),Ot=(a,t)=>t.onAction2Click(),Et=T('<button class="outline secondary svelte-1ifz5q4"><!></button>'),Kt=T('<div class="icon secondary"><!></div>'),Wt=T('<div class="c-buttons svelte-1ifz5q4"><!> <!></div>'),Gt=T('<div class="c-main svelte-1ifz5q4"><!> <div class="affective svelte-1ifz5q4"> </div> <div class="counter svelte-1ifz5q4"> </div> <!></div>');function Jt(a,t){tt(t,!0);let e=L(()=>{const r=Math.floor(Math.abs(t.durationSeconds)/60/60),h=Math.floor(Math.abs(t.durationSeconds/60)),D=Math.abs(h%60),A=Math.abs(t.durationSeconds%60),g=[r.toFixed(0)+"h",D.toFixed(0)+"m",A.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+g.join(" ")});var u=Gt(),d=i(u);{var p=r=>{var h=Vt(),D=i(h);{var A=g=>{var C=Ht(),M=J(C);M.__click=[Lt,t];var q=i(M);K(q,{icon:At}),n(M);var l=v(M,2);l.__click=[qt,t];var o=i(l);K(o,{icon:Ct}),n(l),m(g,C)};U(D,g=>{t.onIncreaseDuration&&g(A)})}n(h),m(r,h)};U(d,r=>{t.onIncreaseDuration&&r(p)})}var f=v(d,2),y=i(f,!0);n(f);var x=v(f,2),_=i(x,!0);n(x);var S=v(x,2);{var I=r=>{var h=Wt(),D=i(h);{var A=l=>{var o=Bt();o.__click=[Ft,t];var R=i(o);K(R,{get icon(){return t.icon1}}),n(o),N(()=>ut(o,"title",t.action1Hint)),m(l,o)},g=l=>{var o=ct(),R=J(o);{var V=P=>{var b=Nt(),G=i(b);K(G,{get icon(){return t.icon1}}),n(b),m(P,b)};U(R,P=>{t.icon1&&P(V)},!0)}m(l,o)};U(D,l=>{t.onAction1Click&&t.icon1?l(A):l(g,!1)})}var C=v(D,2);{var M=l=>{var o=Et();o.__click=[Ot,t];var R=i(o);K(R,{get icon(){return t.icon2}}),n(o),N(()=>ut(o,"title",t.action2Hint)),m(l,o)},q=l=>{var o=ct(),R=J(o);{var V=P=>{var b=Kt(),G=i(b);K(G,{get icon(){return t.icon2}}),n(b),m(P,b)};U(R,P=>{t.icon2&&P(V)},!0)}m(l,o)};U(C,l=>{t.onAction2Click&&t.icon2?l(M):l(q,!1)})}n(h),m(r,h)};U(S,r=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&r(I)})}n(u),N(r=>{B(y,r),B(_,k(e))},[()=>{var r;return(r=t.affectiveDurationHours)==null?void 0:r.toFixed(2)}]),m(a,u),et()}kt(["click"]);class j{}O(j,"TaskPause",Pt),O(j,"TaskResume",wt),O(j,"TaskStop",zt),O(j,"TaskDuplicateAndStart",It);function vt(a,t,e){t.taskController.saveTask(e())}var Qt=T('<span style="flex: content;" class="inv" title="Invoice"> </span>'),Xt=(a,t,e)=>{var u;return(u=t.taskController)==null?void 0:u.saveTask(e())},Yt=(a,t,e)=>t.taskController.deleteTask(e()),Zt=T('<button style="flex: content;" class="svelte-1jzxame">Delete</button>'),$t=T('<article class="c-task svelte-1jzxame"><div class="c-task-fields svelte-1jzxame"><input class="date svelte-1jzxame" name="task-date" type="date" title="Date"> <input class="name svelte-1jzxame" name="task-name" type="text" title="Description" placeholder="Description"> <div class="c-task-fields-row-2 svelte-1jzxame"><details class="svelte-1jzxame"><summary class="svelte-1jzxame">Other</summary> <!> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-1jzxame" name="task-tags" type="text" placeholder="Tags" title="Tags"> <!></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-1jzxame"><!></div></article>');function te(a,t){tt(t,!0);let e=Rt(t,"vm",7);const u=e().state=="Archived",d={icon:s=>{switch(s.state){case c.Running:return j.TaskPause;case c.Paused:return j.TaskResume;case c.Stopped:return j.TaskDuplicateAndStart}},hint:s=>{switch(s.state){case c.Running:return"Pause";case c.Paused:return"Resume";case c.Stopped:return"Start a new copy"}},execute:s=>{switch(s.state){case c.Running:t.taskController.pauseTask(s);break;case c.Paused:t.taskController.startTask(s);break;case c.Stopped:t.taskController.duplicateAndStartTask(s);break}}},p={icon:s=>{switch(s.state){case c.Running:return j.TaskStop;case c.Paused:return j.TaskStop;case c.Stopped:return j.TaskResume}},hint:s=>{switch(s.state){case c.Running:return"Stop";case c.Paused:return"Stop";case c.Stopped:return"Start"}},execute:s=>{switch(s.state){case c.Running:t.taskController.stopTask(s);break;case c.Paused:t.taskController.stopTask(s);break;case c.Stopped:t.taskController.startTask(s);break}}};function f(s,H){let at=H?1:15;t.taskController.increaseDuration(e(),s?at:-at)}var y=$t(),x=i(y),_=i(x);nt(_),_.__input=[vt,t,e],_.readOnly=u;var S=v(_,2);nt(S),S.__input=[vt,t,e],S.readOnly=u;var I=v(S,2),r=i(I),h=v(i(r),2);{var D=s=>{var H=Qt(),at=i(H);n(H),N(()=>B(at,`Attached to Invoice Id: ${e().invoiceRefId??""}`)),m(s,H)};U(h,s=>{e().invoiceRefId.length>0&&s(D)})}var A=v(h,2),g=i(A);nt(g),g.__input=[Xt,t,e],g.readOnly=u;var C=v(g,2);{var M=s=>{var H=Zt();H.__click=[Yt,t,e],m(s,H)};U(C,s=>{u||s(M)})}n(A),n(r),dt(2),n(I),n(x);var q=v(x,2),l=i(q);const o=L(()=>d.icon(e()));var R=L(()=>k(o));const V=L(()=>d.hint(e()));var P=L(()=>k(V));const b=L(()=>p.icon(e()));var G=L(()=>k(b));const _t=L(()=>p.hint(e()));var gt=L(()=>k(_t));Jt(l,{get durationSeconds(){return e().duration},get affectiveDurationHours(){return e().affectiveDurationHours},onIncreaseDuration:u?void 0:f,get icon1(){return k(R)},onAction1Click:()=>d.execute(e()),get action1Hint(){return k(P)},get icon2(){return k(G)},onAction2Click:()=>p.execute(e()),get action2Hint(){return k(gt)}}),n(q),n(y),N(()=>jt(y,"s-running",e().state==c.Running)),it(_,()=>e().date,s=>e().date=s),it(S,()=>e().name,s=>e().name=s),it(g,()=>e().tagsAsText,s=>e().tagsAsText=s),m(a,y),et()}kt(["input","click"]);var ee=T("<div><!></div>");function st(a,t){var e=ct(),u=J(e);ht(u,19,()=>t.tasks,d=>d.id,(d,p)=>{var f=ee(),y=i(f);te(y,{get vm(){return k(p)},get taskController(){return t.taskController}}),n(f),St(3,f,()=>Dt,()=>({duration:200})),m(d,f)}),m(a,e)}var ae=T("<option></option>"),se=T('<datalist id="list-task-names"></datalist>'),ne=T('<form><fieldset role="group" class="svelte-1ps283u"><input name="task-name" type="text" placeholder="Whatcha doin?" spellcheck="true" list="list-task-names"> <!> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function ie(a,t){tt(t,!0);let e=W("");function u(_){_.preventDefault(),t.onStartTask(k(e)),F(e,"")}var d=ne(),p=i(d),f=i(p);nt(f);var y=v(f,2);{var x=_=>{var S=se();ht(S,21,()=>t.previousTasksList,xt,(I,r)=>{var h=ae(),D={};N(()=>{D!==(D=k(r))&&(h.value=(h.__value=k(r))==null?"":k(r))}),m(I,h)}),n(S),m(_,S)};U(y,_=>{t.previousTasksList&&_(x)})}dt(2),n(p),n(d),bt("submit",d,u),it(f,()=>k(e),_=>F(e,_)),m(a,d),et()}var Q,X,Y,Z,$;class re{constructor(){E(this,Q,W(z([])));E(this,X,W(z([])));E(this,Y,W(z([])));E(this,Z,W(z([])));E(this,$,W(z([])));O(this,"intervalId")}get previouslyUsedTasks(){return k(w(this,Q))}set previouslyUsedTasks(t){F(w(this,Q),z(t))}get tasksRunning(){return k(w(this,X))}set tasksRunning(t){F(w(this,X),z(t))}get tasksPaused(){return k(w(this,Y))}set tasksPaused(t){F(w(this,Y),z(t))}get tasksStopped(){return k(w(this,Z))}set tasksStopped(t){F(w(this,Z),z(t))}get tasksArchived(){return k(w(this,$))}set tasksArchived(t){F(w(this,$),z(t))}start(){this.stop(),this.refreshAndCatchUpRunningTaskDurations(),this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refreshAndCatchUpRunningTaskDurations(){console.debug("refreshAndCatchUpRunningTaskDurations"),this.refresh();for(const t of this.tasksRunning)t.recalculateDurationFromRunningSession()}refresh(){const t=rt.taskRepo.getAll().map(e=>new ot(e));this.previouslyUsedTasks=this.buildPreviouslyUsedTasks(t,20),this.tasksRunning=this.fetchTasksByState(t,[c.Running]),this.tasksPaused=this.fetchTasksByState(t,[c.Paused]),this.tasksStopped=this.fetchTasksByState(t,[c.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[c.Archived])}buildPreviouslyUsedTasks(t,e=20){const d=Mt.sortByProperties(t,["date:desc","name:asc"]).slice(0,e).map(f=>f.name);return[...new Set(d)]}fetchTasksByState(t,e){return t.filter(u=>e.includes(u.state))}startNewTask(t){const e=new ot;e.name=t,this.startTask(e)}saveTask(t){rt.taskRepo.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const e=new ot(t.getModel(crypto.randomUUID()));e.setDuration(0),e.date=Ut.toInputDateValue(new Date),e.invoiceRefId="",this.startTask(e)}increaseDuration(t,e){t.incrementDuration(e),this.saveTask(t)}deleteTask(t){rt.taskRepo.remove(t.id),this.refresh()}}Q=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakMap;function oe(a,t){tt(t,!0),ft(()=>{document.addEventListener("visibilitychange",e)}),mt(()=>{document.removeEventListener("visibilitychange",e)});function e(){t.onPageVisibilityChanged(document.visibilityState==="visible")}et()}var ce=T("<!> <h2>Time Log</h2> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function xe(a,t){tt(t,!0);let e=z(new re);ft(()=>{e.start()}),mt(()=>{e.stop()});function u(b){console.debug("onPageVisibilityChanged",b),b&&e.refreshAndCatchUpRunningTaskDurations()}var d=ce(),p=J(d);oe(p,{onPageVisibilityChanged:u});var f=v(p,4);ie(f,{onStartTask:b=>e.startNewTask(b),get previousTasksList(){return e.previouslyUsedTasks}});var y=v(f,2),x=i(y),_=i(x);n(x);var S=v(x,2);st(S,{get taskController(){return e},get tasks(){return e.tasksRunning}}),n(y);var I=v(y,2),r=i(I),h=i(r);n(r);var D=v(r,2);st(D,{get taskController(){return e},get tasks(){return e.tasksPaused}}),n(I);var A=v(I,2),g=i(A),C=i(g),M=i(C);n(C);var q=v(C,2);st(q,{get taskController(){return e},get tasks(){return e.tasksStopped}}),n(g),n(A);var l=v(A,2),o=i(l),R=i(o),V=i(R);n(R);var P=v(R,2);st(P,{get taskController(){return e},get tasks(){return e.tasksArchived}}),n(o),n(l),N(()=>{B(_,`In Progress (${e.tasksRunning.length??""})`),B(h,`Paused (${e.tasksPaused.length??""})`),B(M,`Stopped (${e.tasksStopped.length??""})`),B(V,`Archived (${e.tasksArchived.length??""})`)}),m(a,d),et()}export{xe as component};
