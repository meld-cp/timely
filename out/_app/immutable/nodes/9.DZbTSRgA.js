var ht=Object.defineProperty;var lt=a=>{throw TypeError(a)};var gt=(a,t,e)=>t in a?ht(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var V=(a,t,e)=>gt(a,typeof t!="symbol"?t+"":t,e),Tt=(a,t,e)=>t.has(a)||lt("Cannot "+e);var C=(a,t,e)=>(Tt(a,t,"read from private field"),e?e.call(a):t.get(a)),K=(a,t,e)=>t.has(a)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);import{a as f,t as g,c as ct}from"../chunks/CYLZ2iXy.js";import{p as nt,c as i,s as v,r as n,t as N,l as k,a as it,y as L,f as J,i as dt,k as B,j as W}from"../chunks/DADXHUXo.js";import{s as O}from"../chunks/B6FQDuwJ.js";import{p as w}from"../chunks/Ie9j5a_F.js";import{o as pt,a as yt}from"../chunks/UnYXnCVM.js";import{e as kt,i as xt}from"../chunks/DqwSvHIX.js";import{t as St,s as bt}from"../chunks/DQWldmw4.js";import{i as P}from"../chunks/D7YmwrGJ.js";import{s as ut,r as at,T as u,a as rt,e as ot,F as Rt}from"../chunks/BYbhNCYi.js";import{d as mt,e as Dt}from"../chunks/DrIKNhWD.js";import{b as st}from"../chunks/BPWOsLyd.js";import{p as At}from"../chunks/Dc-MrZnh.js";import{I as E,a as Ct,b as wt,c as Pt,d as zt,e as It,g as Mt}from"../chunks/0XVxcagg.js";function jt(a,t,e){if(e){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}var Ht=(a,t)=>t.onIncreaseDuration(!0,a.ctrlKey),Lt=(a,t)=>t.onIncreaseDuration(!1,a.ctrlKey),qt=g('<button class="outline svelte-1ifz5q4" title="Add Time"><!></button> <button class="outline svelte-1ifz5q4" title="Remove Time"><!></button>',1),Ft=g('<div class="c-buttons svelte-1ifz5q4"><!></div>'),Ut=(a,t)=>t.onAction1Click(),Bt=g('<button class="outline svelte-1ifz5q4"><!></button>'),Ot=g('<div class="icon"><!></div>'),Nt=(a,t)=>t.onAction2Click(),Vt=g('<button class="outline secondary svelte-1ifz5q4"><!></button>'),Kt=g('<div class="icon secondary"><!></div>'),Et=g('<div class="c-buttons svelte-1ifz5q4"><!> <!></div>'),Wt=g('<div class="c-main svelte-1ifz5q4"><!> <div class="affective svelte-1ifz5q4"> </div> <div class="counter svelte-1ifz5q4"> </div> <!></div>');function Gt(a,t){nt(t,!0);let e=L(()=>{const o=Math.floor(Math.abs(t.durationSeconds)/60/60),d=Math.floor(Math.abs(t.durationSeconds/60)),x=Math.abs(d%60),b=Math.abs(t.durationSeconds%60),p=[o.toFixed(0)+"h",x.toFixed(0)+"m",b.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+p.join(" ")});var r=Wt(),_=i(r);{var y=o=>{var d=Ft(),x=i(d);{var b=p=>{var I=qt(),D=J(I);D.__click=[Ht,t];var M=i(D);E(M,{icon:Ct}),n(D);var c=v(D,2);c.__click=[Lt,t];var l=i(c);E(l,{icon:wt}),n(c),f(p,I)};P(x,p=>{t.onIncreaseDuration&&p(b)})}n(d),f(o,d)};P(_,o=>{t.onIncreaseDuration&&o(y)})}var h=v(_,2),S=i(h,!0);n(h);var R=v(h,2),m=i(R,!0);n(R);var T=v(R,2);{var q=o=>{var d=Et(),x=i(d);{var b=c=>{var l=Bt();l.__click=[Ut,t];var A=i(l);E(A,{get icon(){return t.icon1}}),n(l),N(()=>ut(l,"title",t.action1Hint)),f(c,l)},p=c=>{var l=ct(),A=J(l);{var U=j=>{var H=Ot(),G=i(H);E(G,{get icon(){return t.icon1}}),n(H),f(j,H)};P(A,j=>{t.icon1&&j(U)},!0)}f(c,l)};P(x,c=>{t.onAction1Click&&t.icon1?c(b):c(p,!1)})}var I=v(x,2);{var D=c=>{var l=Vt();l.__click=[Nt,t];var A=i(l);E(A,{get icon(){return t.icon2}}),n(l),N(()=>ut(l,"title",t.action2Hint)),f(c,l)},M=c=>{var l=ct(),A=J(l);{var U=j=>{var H=Kt(),G=i(H);E(G,{get icon(){return t.icon2}}),n(H),f(j,H)};P(A,j=>{t.icon2&&j(U)},!0)}f(c,l)};P(I,c=>{t.onAction2Click&&t.icon2?c(D):c(M,!1)})}n(d),f(o,d)};P(T,o=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&o(q)})}n(r),N(o=>{O(S,o),O(m,k(e))},[()=>{var o;return(o=t.affectiveDurationHours)==null?void 0:o.toFixed(2)}]),f(a,r),it()}mt(["click"]);class z{}V(z,"TaskPause",Pt),V(z,"TaskResume",zt),V(z,"TaskStop",It),V(z,"TaskDuplicateAndStart",Mt);function vt(a,t,e){t.taskController.saveTask(e())}var Jt=g('<span style="flex: content;" class="inv" title="Invoice"> </span>'),Qt=(a,t,e)=>{var r;return(r=t.taskController)==null?void 0:r.saveTask(e())},Xt=(a,t,e)=>t.taskController.deleteTask(e()),Yt=g('<button style="flex: content;" class="svelte-1jzxame">Delete</button>'),Zt=g('<article class="c-task svelte-1jzxame"><div class="c-task-fields svelte-1jzxame"><input class="date svelte-1jzxame" name="task-date" type="date" title="Date"> <input class="name svelte-1jzxame" name="task-name" type="text" title="Description" placeholder="Description"> <div class="c-task-fields-row-2 svelte-1jzxame"><details class="svelte-1jzxame"><summary class="svelte-1jzxame">Other</summary> <!> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-1jzxame" name="task-tags" type="text" placeholder="Tags" title="Tags"> <!></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-1jzxame"><!></div></article>');function $t(a,t){nt(t,!0);let e=At(t,"vm",7);const r=e().state=="Archived",_={icon:s=>{switch(s.state){case u.Running:return z.TaskPause;case u.Paused:return z.TaskResume;case u.Stopped:return z.TaskDuplicateAndStart}},hint:s=>{switch(s.state){case u.Running:return"Pause";case u.Paused:return"Resume";case u.Stopped:return"Start a new copy"}},execute:s=>{switch(s.state){case u.Running:t.taskController.pauseTask(s);break;case u.Paused:t.taskController.startTask(s);break;case u.Stopped:t.taskController.duplicateAndStartTask(s);break}}},y={icon:s=>{switch(s.state){case u.Running:return z.TaskStop;case u.Paused:return z.TaskStop;case u.Stopped:return z.TaskResume}},hint:s=>{switch(s.state){case u.Running:return"Stop";case u.Paused:return"Stop";case u.Stopped:return"Start"}},execute:s=>{switch(s.state){case u.Running:t.taskController.stopTask(s);break;case u.Paused:t.taskController.stopTask(s);break;case u.Stopped:t.taskController.startTask(s);break}}};function h(s,F){let tt=F?1:15;t.taskController.increaseDuration(e(),s?tt:-tt)}var S=Zt(),R=i(S),m=i(R);at(m),m.__input=[vt,t,e],m.readOnly=r;var T=v(m,2);at(T),T.__input=[vt,t,e],T.readOnly=r;var q=v(T,2),o=i(q),d=v(i(o),2);{var x=s=>{var F=Jt(),tt=i(F);n(F),N(()=>O(tt,`Attached to Invoice Id: ${e().invoiceRefId??""}`)),f(s,F)};P(d,s=>{e().invoiceRefId.length>0&&s(x)})}var b=v(d,2),p=i(b);at(p),p.__input=[Qt,t,e],p.readOnly=r;var I=v(p,2);{var D=s=>{var F=Yt();F.__click=[Xt,t,e],f(s,F)};P(I,s=>{r||s(D)})}n(b),n(o),dt(2),n(q),n(R);var M=v(R,2),c=i(M);const l=L(()=>_.icon(e()));var A=L(()=>k(l));const U=L(()=>_.hint(e()));var j=L(()=>k(U));const H=L(()=>y.icon(e()));var G=L(()=>k(H));const ft=L(()=>y.hint(e()));var _t=L(()=>k(ft));Gt(c,{get durationSeconds(){return e().duration},get affectiveDurationHours(){return e().affectiveDurationHours},onIncreaseDuration:r?void 0:h,get icon1(){return k(A)},onAction1Click:()=>_.execute(e()),get action1Hint(){return k(j)},get icon2(){return k(G)},onAction2Click:()=>y.execute(e()),get action2Hint(){return k(_t)}}),n(M),n(S),N(()=>jt(S,"s-running",e().state==u.Running)),st(m,()=>e().date,s=>e().date=s),st(T,()=>e().name,s=>e().name=s),st(p,()=>e().tagsAsText,s=>e().tagsAsText=s),f(a,S),it()}mt(["input","click"]);var te=g("<div><!></div>");function et(a,t){var e=ct(),r=J(e);kt(r,19,()=>t.tasks,_=>_.id,(_,y)=>{var h=te(),S=i(h);$t(S,{get vm(){return k(y)},get taskController(){return t.taskController}}),n(h),St(3,h,()=>bt,()=>({duration:200})),f(_,h)}),f(a,e)}var ee=g("<option></option>"),ae=g('<datalist id="list-task-names"></datalist>'),se=g('<form><fieldset role="group" class="svelte-1ps283u"><input name="task-name" type="text" placeholder="Whatcha doin?" spellcheck="true" list="list-task-names"> <!> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function ne(a,t){nt(t,!0);let e=W("");function r(m){m.preventDefault(),t.onStartTask(k(e)),B(e,"")}var _=se(),y=i(_),h=i(y);at(h);var S=v(h,2);{var R=m=>{var T=ae();kt(T,21,()=>t.previousTasksList,xt,(q,o)=>{var d=ee(),x={};N(()=>{x!==(x=k(o).name)&&(d.value=(d.__value=k(o).name)==null?"":k(o).name)}),f(q,d)}),n(T),f(m,T)};P(S,m=>{t.previousTasksList&&m(R)})}dt(2),n(y),n(_),Dt("submit",_,r),st(h,()=>k(e),m=>B(e,m)),f(a,_),it()}var Q,X,Y,Z,$;class ie{constructor(){K(this,Q,W(w([])));K(this,X,W(w([])));K(this,Y,W(w([])));K(this,Z,W(w([])));K(this,$,W(w([])));V(this,"intervalId")}get previouslyUsedTasks(){return k(C(this,Q))}set previouslyUsedTasks(t){B(C(this,Q),w(t))}get tasksRunning(){return k(C(this,X))}set tasksRunning(t){B(C(this,X),w(t))}get tasksPaused(){return k(C(this,Y))}set tasksPaused(t){B(C(this,Y),w(t))}get tasksStopped(){return k(C(this,Z))}set tasksStopped(t){B(C(this,Z),w(t))}get tasksArchived(){return k(C(this,$))}set tasksArchived(t){B(C(this,$),w(t))}start(){this.stop(),this.refresh();for(const t of this.tasksRunning)t.recalculateDurationFromRunningSession();this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refresh(){const t=rt.taskRepo.getAll().map(e=>new ot(e));this.previouslyUsedTasks=t.sort((e,r)=>e.date>r.date?-1:1).slice(0,20),this.tasksRunning=this.fetchTasksByState(t,[u.Running]),this.tasksPaused=this.fetchTasksByState(t,[u.Paused]),this.tasksStopped=this.fetchTasksByState(t,[u.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[u.Archived])}fetchTasksByState(t,e){return t.filter(r=>e.includes(r.state))}startNewTask(t){const e=new ot;e.name=t,this.startTask(e)}saveTask(t){rt.taskRepo.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const e=new ot(t.getModel(crypto.randomUUID()));e.setDuration(0),e.date=Rt.toInputDateValue(new Date),e.invoiceRefId="",this.startTask(e)}increaseDuration(t,e){t.incrementDuration(e),this.saveTask(t)}deleteTask(t){rt.taskRepo.remove(t.id),this.refresh()}}Q=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakMap;var re=g("<h2>Time Log</h2> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function ye(a,t){nt(t,!0);let e=w(new ie);pt(()=>{e.start()}),yt(()=>{e.stop()});var r=re(),_=v(J(r),2);ne(_,{onStartTask:U=>e.startNewTask(U),get previousTasksList(){return e.previouslyUsedTasks}});var y=v(_,2),h=i(y),S=i(h);n(h);var R=v(h,2);et(R,{get taskController(){return e},get tasks(){return e.tasksRunning}}),n(y);var m=v(y,2),T=i(m),q=i(T);n(T);var o=v(T,2);et(o,{get taskController(){return e},get tasks(){return e.tasksPaused}}),n(m);var d=v(m,2),x=i(d),b=i(x),p=i(b);n(b);var I=v(b,2);et(I,{get taskController(){return e},get tasks(){return e.tasksStopped}}),n(x),n(d);var D=v(d,2),M=i(D),c=i(M),l=i(c);n(c);var A=v(c,2);et(A,{get taskController(){return e},get tasks(){return e.tasksArchived}}),n(M),n(D),N(()=>{O(S,`In Progress (${e.tasksRunning.length??""})`),O(q,`Paused (${e.tasksPaused.length??""})`),O(p,`Stopped (${e.tasksStopped.length??""})`),O(l,`Archived (${e.tasksArchived.length??""})`)}),f(a,r),it()}export{ye as component};
