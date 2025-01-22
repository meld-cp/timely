var gt=Object.defineProperty;var ct=a=>{throw TypeError(a)};var pt=(a,t,e)=>t in a?gt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var O=(a,t,e)=>pt(a,typeof t!="symbol"?t+"":t,e),Tt=(a,t,e)=>t.has(a)||ct("Cannot "+e);var H=(a,t,e)=>(Tt(a,t,"read from private field"),e?e.call(a):t.get(a)),V=(a,t,e)=>t.has(a)?ct("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);import{a as R,t as M,c as nt}from"../chunks/disclose-version.090F9Z5W.js";import{E as yt,aM as bt,aN as St,am as wt,l as xt,V as lt,aO as At,at as Rt,e as W,aP as Ct,aq as ut,$ as vt,ar as Dt,p as et,c as v,s as b,t as B,r as d,a as at,q as D,w as z,f as tt,n as _t,R as U,ad as K}from"../chunks/runtime.Zs8r3Oqx.js";import{a as Ft,s as P}from"../chunks/render.CTDoikuL.js";import{p as L}from"../chunks/proxy.RlL82DbB.js";import{o as Pt,a as Mt}from"../chunks/index-client.DuqHwBsT.js";import{T as g,e as It,a as rt,F as Et}from"../chunks/ViewModels.svelte.CFd1dAF6.js";import{a as dt,r as Z,t as it}from"../chunks/Singletons.BCH7qXIm.js";import{d as ht,e as Ht}from"../chunks/events.DJoDsz3Y.js";import{b as $}from"../chunks/input.DTKRrwQR.js";import{p as Lt}from"../chunks/props.BAByPRWC.js";import{i as q}from"../chunks/if.Dc9nQdRi.js";function Nt(a,t,e){if(e){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}const Bt=()=>performance.now(),N={tick:a=>requestAnimationFrame(a),now:()=>Bt(),tasks:new Set};function mt(){const a=N.now();N.tasks.forEach(t=>{t.c(a)||(N.tasks.delete(t),t.f())}),N.tasks.size!==0&&N.tick(mt)}function Ot(a){let t;return N.tasks.size===0&&N.tick(mt),{promise:new Promise(e=>{N.tasks.add(t={c:a,f:e})}),abort(){N.tasks.delete(t)}}}function X(a,t){a.dispatchEvent(new CustomEvent(t))}function qt(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function ft(a){const t={},e=a.split(";");for(const s of e){const[c,u]=s.split(":");if(!c||u===void 0)break;const r=qt(c.trim());t[r]=u.trim()}return t}const Ut=a=>a;function Vt(a,t,e,s){var c=(a&Ct)!==0,u="both",r,p=t.inert,S=t.style.overflow,o,l;function A(){var y=Dt,_=lt;ut(null),vt(null);try{return r??(r=e()(t,(s==null?void 0:s())??{},{direction:u}))}finally{ut(y),vt(_)}}var f={is_global:c,in(){t.inert=p,X(t,"introstart"),o=ot(t,A(),l,1,()=>{X(t,"introend"),o==null||o.abort(),o=r=void 0,t.style.overflow=S})},out(y){t.inert=!0,X(t,"outrostart"),l=ot(t,A(),o,0,()=>{X(t,"outroend"),y==null||y()})},stop:()=>{o==null||o.abort(),l==null||l.abort()}},k=lt;if((k.transitions??(k.transitions=[])).push(f),Ft){var h=c;if(!h){for(var i=k.parent;i&&i.f&yt;)for(;(i=i.parent)&&!(i.f&bt););h=!i||(i.f&St)!==0}h&&wt(()=>{xt(()=>f.in())})}}function ot(a,t,e,s,c){var u=s===1;if(At(t)){var r,p=!1;return Rt(()=>{if(!p){var y=t({direction:u?"in":"out"});r=ot(a,y,e,s,c)}}),{abort:()=>{p=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(e==null||e.deactivate(),!(t!=null&&t.duration))return c(),{abort:W,deactivate:W,reset:W,t:()=>s};const{delay:S=0,css:o,tick:l,easing:A=Ut}=t;var f=[];if(u&&e===void 0&&(l&&l(0,1),o)){var k=ft(o(0,1));f.push(k,k)}var h=()=>1-s,i=a.animate(f,{duration:S});return i.onfinish=()=>{var y=(e==null?void 0:e.t())??1-s;e==null||e.abort();var _=s-y,F=t.duration*Math.abs(_),E=[];if(F>0){var T=!1;if(o)for(var m=Math.ceil(F/16.666666666666668),w=0;w<=m;w+=1){var n=y+_*A(w/m),C=ft(o(n,1-n));E.push(C),T||(T=C.overflow==="hidden")}T&&(a.style.overflow="hidden"),h=()=>{var x=i.currentTime;return y+_*A(x/F)},l&&Ot(()=>{if(i.playState!=="running")return!1;var x=h();return l(x,1-x),!0})}i=a.animate(E,{duration:F,fill:"forwards"}),i.onfinish=()=>{h=()=>s,l==null||l(s,1-s),c()}},{abort:()=>{i&&(i.cancel(),i.effect=null,i.onfinish=W)},deactivate:()=>{c=W},reset:()=>{s===0&&(l==null||l(1,0))},t:()=>h()}}var Wt=(a,t)=>t.onIncreaseDuration(!0,a.ctrlKey),zt=(a,t)=>t.onIncreaseDuration(!1,a.ctrlKey),Kt=M('<div class="c-buttons svelte-ovc67l"><button class="outline svelte-ovc67l" title="Add Time">+</button> <button class="outline svelte-ovc67l" title="Remove Time">-</button></div>'),jt=(a,t)=>t.onAction1Click(),Gt=M('<button class="outline svelte-ovc67l"> </button>'),Jt=M('<div class="icon"> </div>'),Qt=(a,t)=>t.onAction2Click(),Xt=M('<button class="outline secondary svelte-ovc67l"> </button>'),Yt=M('<div class="icon"> </div>'),Zt=M('<div class="c-buttons svelte-ovc67l"><!> <!></div>'),$t=M('<div class="c-main svelte-ovc67l"><!> <div class="affective svelte-ovc67l"> </div> <div class="counter svelte-ovc67l" style="text-align: right; line-height: 1.4em; font-family: monospace;"> </div> <!></div>');function te(a,t){et(t,!0);let e=z(()=>{const f=Math.floor(Math.abs(t.durationSeconds)/60/60),k=Math.floor(Math.abs(t.durationSeconds/60)),h=Math.abs(k%60),i=Math.abs(t.durationSeconds%60),y=[f.toFixed(0)+"h",h.toFixed(0)+"m",i.toFixed(0)+"s"];return(t.durationSeconds<0?"-":"")+y.join(" ")});var s=$t(),c=v(s);{var u=f=>{var k=Kt(),h=v(k);h.__click=[Wt,t];var i=b(h,2);i.__click=[zt,t],d(k),R(f,k)};q(c,f=>{t.onIncreaseDuration&&f(u)})}var r=b(c,2),p=v(r,!0);B(()=>{var f;return P(p,(f=t.affectiveDurationHours)==null?void 0:f.toFixed(2))}),d(r);var S=b(r,2),o=v(S,!0);d(S);var l=b(S,2);{var A=f=>{var k=Zt(),h=v(k);{var i=T=>{var m=Gt();m.__click=[jt,t];var w=v(m,!0);d(m),B(()=>{dt(m,"title",t.action1Hint),P(w,t.icon1)}),R(T,m)},y=T=>{var m=nt(),w=tt(m);{var n=C=>{var x=Jt(),st=v(x,!0);d(x),B(()=>P(st,t.icon1)),R(C,x)};q(w,C=>{t.icon1&&C(n)},!0)}R(T,m)};q(h,T=>{t.onAction1Click?T(i):T(y,!1)})}var _=b(h,2);{var F=T=>{var m=Xt();m.__click=[Qt,t];var w=v(m,!0);d(m),B(()=>{dt(m,"title",t.action2Hint),P(w,t.icon2)}),R(T,m)},E=T=>{var m=nt(),w=tt(m);{var n=C=>{var x=Yt(),st=v(x,!0);d(x),B(()=>P(st,t.icon2)),R(C,x)};q(w,C=>{t.icon2&&C(n)},!0)}R(T,m)};q(_,T=>{t.onAction2Click?T(F):T(E,!1)})}d(k),R(f,k)};q(l,f=>{(t.icon1||t.onAction1Click||t.icon2||t.onAction2Click)&&f(A)})}d(s),B(()=>P(o,D(e))),R(a,s),at()}ht(["click"]);class I{}O(I,"TaskPause","⏸️"),O(I,"TaskResume","▶️"),O(I,"TaskStop","⏹️"),O(I,"TaskDuplicateAndStart","⏫");function kt(a,t,e){t.taskController.saveTask(e())}var ee=(a,t,e)=>{var s;return(s=t.taskController)==null?void 0:s.saveTask(e())},ae=(a,t,e)=>t.taskController.deleteTask(e()),se=M('<article class="c-task svelte-lgeeca"><div class="c-task-fields svelte-lgeeca"><input class="date svelte-lgeeca" name="task-date" type="date" title="Date"> <input class="name svelte-lgeeca" name="task-name" type="text" title="Description"> <div class="c-task-fields-row-2 svelte-lgeeca"><details class="svelte-lgeeca"><summary class="svelte-lgeeca">Other</summary> <span style="flex: content;" class="inv" title="Invoice"> </span> <div style="display: flex; flex-direction: row; gap:1rem; flex-wrap: wrap;"><input style="flex: 10;" class="tags svelte-lgeeca" name="task-tags" type="text" title="Tags"> <button style="flex: content;" class="svelte-lgeeca">Delete</button></div></details> <div style="flex: 2;"></div></div></div> <div class="c-task-duration svelte-lgeeca"><!></div></article>');function re(a,t){et(t,!0);let e=Lt(t,"vm",7);const s={icon:n=>{switch(n.state){case g.Running:return I.TaskPause;case g.Paused:return I.TaskResume;case g.Stopped:return I.TaskDuplicateAndStart}},hint:n=>{switch(n.state){case g.Running:return"Pause";case g.Paused:return"Resume";case g.Stopped:return"Start a new copy"}},execute:n=>{switch(n.state){case g.Running:t.taskController.pauseTask(n);break;case g.Paused:t.taskController.startTask(n);break;case g.Stopped:t.taskController.duplicateAndStartTask(n);break}}},c={icon:n=>{switch(n.state){case g.Running:return I.TaskStop;case g.Paused:return I.TaskStop;case g.Stopped:return I.TaskResume}},hint:n=>{switch(n.state){case g.Running:return"Stop";case g.Paused:return"Stop";case g.Stopped:return"Start"}},execute:n=>{switch(n.state){case g.Running:t.taskController.stopTask(n);break;case g.Paused:t.taskController.stopTask(n);break;case g.Stopped:t.taskController.startTask(n);break}}};function u(n,C){let x=C?1:15;t.taskController.increaseDuration(e(),n?x:-x)}var r=se(),p=v(r),S=v(p);Z(S),S.__input=[kt,t,e];var o=b(S,2);Z(o),o.__input=[kt,t,e];var l=b(o,2),A=v(l),f=b(v(A),2),k=v(f);d(f);var h=b(f,2),i=v(h);Z(i),i.__input=[ee,t,e];var y=b(i,2);y.__click=[ae,t,e],d(h),d(A),_t(2),d(l),d(p);var _=b(p,2),F=v(_),E=z(()=>s.icon(e())),T=z(()=>s.hint(e())),m=z(()=>c.icon(e())),w=z(()=>c.hint(e()));te(F,{get durationSeconds(){return e().duration},get affectiveDurationHours(){return e().affectiveDurationHours},onIncreaseDuration:u,get icon1(){return D(E)},onAction1Click:()=>s.execute(e()),get action1Hint(){return D(T)},get icon2(){return D(m)},onAction2Click:()=>c.execute(e()),get action2Hint(){return D(w)}}),d(_),d(r),B(()=>{Nt(r,"s-running",e().state==g.Running),P(k,`Attached to Invoice Id: ${e().invoiceRefId??""}`)}),$(S,()=>e().date,n=>e().date=n),$(o,()=>e().name,n=>e().name=n),$(i,()=>e().tagsAsText,n=>e().tagsAsText=n),R(a,r),at()}ht(["input","click"]);function ie(a){const t=a-1;return t*t*t+1}function ne(a,{delay:t=0,duration:e=400,easing:s=ie,axis:c="y"}={}){const u=getComputedStyle(a),r=+u.opacity,p=c==="y"?"height":"width",S=parseFloat(u[p]),o=c==="y"?["top","bottom"]:["left","right"],l=o.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),A=parseFloat(u[`padding${l[0]}`]),f=parseFloat(u[`padding${l[1]}`]),k=parseFloat(u[`margin${l[0]}`]),h=parseFloat(u[`margin${l[1]}`]),i=parseFloat(u[`border${l[0]}Width`]),y=parseFloat(u[`border${l[1]}Width`]);return{delay:t,duration:e,easing:s,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*r};${p}: ${_*S}px;padding-${o[0]}: ${_*A}px;padding-${o[1]}: ${_*f}px;margin-${o[0]}: ${_*k}px;margin-${o[1]}: ${_*h}px;border-${o[0]}-width: ${_*i}px;border-${o[1]}-width: ${_*y}px;min-${p}: 0`}}var oe=M("<div><!></div>");function Y(a,t){var e=nt(),s=tt(e);It(s,19,()=>t.tasks,c=>c.id,(c,u)=>{var r=oe(),p=v(r);re(p,{get vm(){return D(u)},get taskController(){return t.taskController}}),d(r),Vt(3,r,()=>ne,()=>({duration:200})),R(c,r)}),R(a,e)}var ce=M('<form><fieldset role="group" class="svelte-1ps283u"><input id="taskname" type="text" placeholder="Whatcha doin?" autocorrect="on" autocomplete="on"> <input type="submit" value="Start" class="svelte-1ps283u"></fieldset></form>');function le(a,t){et(t,!0);let e=K("");function s(p){p.preventDefault(),t.onStartTask(D(e)),U(e,"")}var c=ce(),u=v(c),r=v(u);Z(r),_t(2),d(u),d(c),Ht("submit",c,s),$(r,()=>D(e),p=>U(e,p)),R(a,c),at()}var j,G,J,Q;class ue{constructor(){V(this,j,K(L([])));V(this,G,K(L([])));V(this,J,K(L([])));V(this,Q,K(L([])));O(this,"intervalId")}get tasksRunning(){return D(H(this,j))}set tasksRunning(t){U(H(this,j),L(t))}get tasksPaused(){return D(H(this,G))}set tasksPaused(t){U(H(this,G),L(t))}get tasksStopped(){return D(H(this,J))}set tasksStopped(t){U(H(this,J),L(t))}get tasksArchived(){return D(H(this,Q))}set tasksArchived(t){U(H(this,Q),L(t))}start(){this.stop(),this.refresh();for(const t of this.tasksRunning)console.log("recalculateDurationFromRunningSession:before",t.getModel()),t.recalculateDurationFromRunningSession(),console.log("recalculateDurationFromRunningSession:after",t.getModel());this.intervalId=setInterval(()=>this.incrementRunningTaskDuration(),1e3)}stop(){this.intervalId&&clearInterval(this.intervalId)}refresh(){const t=it.getAll().map(e=>new rt(e));this.tasksRunning=this.fetchTasksByState(t,[g.Running]),this.tasksPaused=this.fetchTasksByState(t,[g.Paused]),this.tasksStopped=this.fetchTasksByState(t,[g.Stopped]),this.tasksArchived=this.fetchTasksByState(t,[g.Archived])}fetchTasksByState(t,e){return t.filter(s=>e.includes(s.state))}startNewTask(t){const e=new rt;e.name=t,this.startTask(e)}saveTask(t){it.set(t.id,t.getModel())}pauseAll(){this.refresh();for(const t of this.tasksRunning)t.pause(),this.saveTask(t);this.refresh()}incrementRunningTaskDuration(){for(const t of this.tasksRunning)t.setDuration(t.duration+1),this.saveTask(t)}pauseTask(t){t.pause(),this.saveTask(t),this.refresh()}startTask(t){this.pauseAll(),t.start(),this.saveTask(t),this.refresh()}stopTask(t){t.stop(),this.saveTask(t),this.refresh()}duplicateAndStartTask(t){const e=new rt(t.getModel(crypto.randomUUID()));e.setDuration(0),e.date=Et.toInputDateValue(new Date),e.invoiceRefId="",this.startTask(e)}increaseDuration(t,e){t.incrementDuration(e),this.saveTask(t)}deleteTask(t){it.remove(t.id),this.refresh()}}j=new WeakMap,G=new WeakMap,J=new WeakMap,Q=new WeakMap;var ve=M("<h1>Time Log</h1> <!> <section><summary> </summary> <!></section> <section><summary> </summary> <!></section> <section><details><summary> </summary> <!></details></section> <section><details><summary> </summary> <!></details></section>",1);function we(a,t){et(t,!0);let e=L(new ue);Pt(()=>{e.start()}),Mt(()=>{e.stop()});var s=ve(),c=b(tt(s),2);le(c,{onStartTask:n=>e.startNewTask(n)});var u=b(c,2),r=v(u),p=v(r);d(r);var S=b(r,2);Y(S,{get taskController(){return e},get tasks(){return e.tasksRunning}}),d(u);var o=b(u,2),l=v(o),A=v(l);d(l);var f=b(l,2);Y(f,{get taskController(){return e},get tasks(){return e.tasksPaused}}),d(o);var k=b(o,2),h=v(k),i=v(h),y=v(i);d(i);var _=b(i,2);Y(_,{get taskController(){return e},get tasks(){return e.tasksStopped}}),d(h),d(k);var F=b(k,2),E=v(F),T=v(E),m=v(T);d(T);var w=b(T,2);Y(w,{get taskController(){return e},get tasks(){return e.tasksArchived}}),d(E),d(F),B(()=>{P(p,`In Progress (${e.tasksRunning.length??""})`),P(A,`Paused (${e.tasksPaused.length??""})`),P(y,`Stopped (${e.tasksStopped.length??""})`),P(m,`Archived (${e.tasksArchived.length??""})`)}),R(a,s),at()}export{we as component};