var Bn=Array.isArray,sn=Array.prototype.indexOf,Un=Array.from,Vn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors,Gn=Object.prototype,Kn=Array.prototype,an=Object.getPrototypeOf;function $n(t){return typeof t=="function"}const Zn=()=>{};function zn(t){return t()}function At(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,B=8,ft=16,g=32,U=64,$=128,x=256,Z=512,d=1024,I=2048,F=4096,q=8192,L=16384,un=32768,It=65536,on=1<<17,fn=1<<19,kt=1<<20,yt=Symbol("$state"),Jn=Symbol("legacy props"),Qn=Symbol("");function Rt(t){return t===this.v}function _n(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function St(t){return!_n(t,this.v)}function cn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function pn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function hn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Xn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function tr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function nr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function En(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function rr(){nt=!0}const er=1,sr=2,lr=4,ar=8,ur=16,or=1,ir=2,fr=4,_r=8,cr=16,vr=4,pr=1,hr=2,yn="[",wn="[!",Tn="]",Dt={},dr=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return r}function Er(t){return Ot(_t(t))}function mn(t,n=!1){var e;const r=_t(t);return n||(r.equals=St),nt&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function yr(t,n=!1){return Ot(mn(t,n))}function Ot(t){return u!==null&&u.f&y&&(m===null?bn([t]):m.push(t)),t}function wr(t,n){return xt(t,ht(()=>en(t))),n}function xt(t,n){return u!==null&&rt()&&u.f&(y|ft)&&(m===null||!m.includes(t))&&En(),lt(t,n)}function lt(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Jt(),Nt(t,I),rt()&&f!==null&&f.f&d&&!(f.f&(g|U))&&(A===null?qn([t]):A.push(t))),n}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),s=r.length,l=0;l<s;l++){var a=r[l],o=a.f;o&I||!e&&a===f||(T(a,n),o&(d|x)&&(o&y?Nt(a,F):st(a)))}}function Ct(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function Tr(t){D=t}let p;function P(t){if(t===null)throw Ct(),Dt;return p=t}function mr(){return P(N(p))}function Ar(t){if(D){if(N(p)!==null)throw Ct(),Dt;p=t}}function gr(t=1){if(D){for(var n=t,r=p;n--;)r=N(r);p=r}}function Ir(){for(var t=0,n=p;;){if(n.nodeType===8){var r=n.data;if(r===Tn){if(t===0)return n;t-=1}else(r===yn||r===wn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var wt,bt,qt;function kr(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;bt=Et(n,"firstChild").get,qt=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function at(t){return bt.call(t)}function N(t){return qt.call(t)}function Rr(t,n){if(!D)return at(t);var r=at(p);if(r===null)r=p.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),P(e),e}return P(r),r}function Sr(t,n){if(!D){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}if(n&&(p==null?void 0:p.nodeType)!==3){var e=z();return p==null||p.before(e),P(e),e}return p}function Dr(t,n=1,r=!1){let e=D?p:t;for(var s;n--;)s=e,e=N(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=z();return e===null?s==null||s.after(a):e.before(a),P(a),a}return P(e),e}function Or(t){t.textContent=""}function An(t){var n=y|I;f===null?n|=x:f.f|=kt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:_,deps:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function xr(t){const n=An(t);return n.equals=St,n}function Pt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ct(e):O(e)}}}function gn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ft(t){var n,r=f;X(gn(t));try{Pt(t),n=Wt(t)}finally{X(r)}return n}function Lt(t){var n=Ft(t),r=(S||t.f&x)&&t.deps!==null?F:d;T(t,r),t.equals(n)||(t.v=n,t.wv=Jt())}function ct(t){Pt(t),j(t,0),T(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Mt(t){f===null&&u===null&&pn(),u!==null&&u.f&x&&vn(),vt&&cn()}function In(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var s=(t&U)!==0,l=f,a={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=C;try{Tt(!0),pt(a),a.f|=un}catch(v){throw O(a),v}finally{Tt(o)}}else n!==null&&st(a);var c=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|$))===0;if(!c&&!s&&e&&(l!==null&&In(a,l),u!==null&&u.f&y)){var h=u;(h.children??(h.children=[])).push(a)}return a}function Nr(t){const n=M(B,null,!1);return T(n,d),n.teardown=t,n}function Cr(t){Mt();var n=f!==null&&(f.f&g)!==0&&_!==null&&!_.m;if(n){var r=_;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Yt(t);return e}}function br(t){return Mt(),kn(t)}function qr(t){const n=M(U,t,!0);return(r={})=>new Promise(e=>{r.outro?Dn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Yt(t){return M(gt,t,!1)}function kn(t){return M(B,t,!0)}function Pr(t){return Rn(t)}function Rn(t,n=0){return M(B|ft|n,t,!0)}function Fr(t,n=!0){return M(B|g,t,!0,n)}function Ht(t){var n=t.teardown;if(n!==null){const r=vt,e=u;mt(!0),W(null);try{n.call(null)}finally{mt(r),W(e)}}}function jt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ct(n[r])}}function Bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function Sn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&fn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Bt(t,n&&!r),jt(t),j(t,0),T(t,L);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Ht(t);var o=t.parent;o!==null&&o.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dn(t,n){var r=[];Vt(t,r,!0),On(r,()=>{O(t),n&&n()})}function On(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Vt(t,n,r){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&It)!==0||(e.f&g)!==0;Vt(e,n,l?r:!1),e=s}}}function Lr(t){Gt(t,!0)}function Gt(t,n){if(t.f&q){t.f^=q,t.f&d||(t.f^=d),V(t)&&(T(t,I),st(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&It)!==0||(r.f&g)!==0;Gt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let J=!1,Q=!1,ut=[],ot=[];function Kt(){J=!1;const t=ut.slice();ut=[],At(t)}function $t(){Q=!1;const t=ot.slice();ot=[],At(t)}function Mr(t){J||(J=!0,queueMicrotask(Kt)),ut.push(t)}function Yr(t){Q||(Q=!0,xn($t)),ot.push(t)}function Nn(){J&&Kt(),Q&&$t()}const Zt=0,Cn=1;let G=!1,K=Zt,Y=!1,H=null,C=!1,vt=!1;function Tt(t){C=t}function mt(t){vt=t}let R=[],b=0;let u=null;function W(t){u=t}let f=null;function X(t){f=t}let m=null;function bn(t){m=t}let E=null,w=0,A=null;function qn(t){A=t}let zt=1,tt=0,S=!1,k=null,_=null;function Jt(){return++zt}function rt(){return!nt||_!==null&&_.l===null}function V(t){var h;var n=t.f;if(n&I)return!0;if(n&F){var r=t.deps,e=(n&x)!==0;if(r!==null){var s,l,a=(n&Z)!==0,o=e&&f!==null&&!S,c=r.length;if(a||o){for(s=0;s<c;s++)l=r[s],(a||!((h=l==null?void 0:l.reactions)!=null&&h.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=Z)}for(s=0;s<c;s++)if(l=r[s],V(l)&&Lt(l),l.wv>t.wv)return!0}(!e||f!==null&&!S)&&T(t,d)}return!1}function Pn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw G=!1,t}function Fn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(G){if(r===null&&(G=!1),Fn(n))throw t;return}r!==null&&(G=!0);{Pn(t,n);return}}function Qt(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?Qt(l,n,r+1):n===l&&(r===0?T(l,I):l.f&d&&T(l,F),st(l))}}function Wt(t){var dt;var n=E,r=w,e=A,s=u,l=S,a=m,o=_,c=t.f;E=null,w=0,A=null,u=c&(g|U)?null:t,S=!C&&(c&x)!==0,m=null,_=t.ctx,tt++;try{var h=(0,t.fn)(),v=t.deps;if(E!==null){var i;if(j(t,w),v!==null&&w>0)for(v.length=w+E.length,i=0;i<E.length;i++)v[w+i]=E[i];else t.deps=v=E;if(!S)for(i=w;i<v.length;i++)((dt=v[i]).reactions??(dt.reactions=[])).push(t)}else v!==null&&w<v.length&&(j(t,w),v.length=w);if(rt()&&A!==null&&!(t.f&(y|F|I)))for(i=0;i<A.length;i++)Qt(A[i],t);return s!==null&&tt++,h}finally{E=n,w=r,A=e,u=s,S=l,m=a,_=o}}function Ln(t,n){let r=n.reactions;if(r!==null){var e=sn.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(E===null||!E.includes(n))&&(T(n,F),n.f&(x|Z)||(n.f^=Z),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Ln(t,r[e])}function pt(t){var n=t.f;if(!(n&L)){T(t,d);var r=f,e=_;f=t;try{n&ft?Sn(t):Bt(t),jt(t),Ht(t);var s=Wt(t);t.teardown=typeof s=="function"?s:null,t.wv=zt;var l=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{f=r}}}function Xt(){if(b>1e3){b=0;try{hn()}catch(t){if(H!==null)et(t,H,null);else throw t}}b++}function tn(t){var n=t.length;if(n!==0){Xt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];nn(s,l),Mn(l)}}finally{C=r}}}function Mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|q)))try{V(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ut(e):e.fn=null))}catch(s){et(s,e,null,e.ctx)}}}function Yn(){if(Y=!1,b>1001)return;const t=R;R=[],tn(t),Y||(b=0,H=null)}function st(t){K===Zt&&(Y||(Y=!0,queueMicrotask(Yn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(U|g)){if(!(r&d))return;n.f^=d}}R.push(n)}function nn(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&d)!==0,o=r.next;if(!a&&!(s&q))if(s&B){if(l)r.f^=d;else try{V(r)&&pt(r)}catch(i){et(i,r,null,r.ctx)}var c=r.first;if(c!==null){r=c;continue}}else s&gt&&e.push(r);if(o===null){let i=r.parent;for(;i!==null;){if(t===i)break t;var h=i.next;if(h!==null){r=h;continue t}i=i.parent}}r=o}for(var v=0;v<e.length;v++)c=e[v],n.push(c),nn(c,n)}function rn(t){var n=K,r=R;try{Xt();const s=[];K=Cn,R=s,Y=!1,tn(r);var e=t==null?void 0:t();return Nn(),(R.length>0||s.length>0)&&rn(),b=0,H=null,e}finally{K=n,R=r}}async function Hr(){await Promise.resolve(),rn()}function en(t){var v;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Ft(t);return ct(t),e}if(k!==null&&k.add(t),u!==null){m!==null&&m.includes(t)&&dn();var s=u.deps;t.rv<tt&&(t.rv=tt,E===null&&s!==null&&s[w]===t?w++:E===null?E=[t]:E.push(t))}else if(r&&t.deps===null)for(var l=t,a=l.parent,o=l;a!==null;)if(a.f&y){var c=a;o=c,a=c.parent}else{var h=a;(v=h.deriveds)!=null&&v.includes(o)||(h.deriveds??(h.deriveds=[])).push(o);break}return r&&(l=t,V(l)&&Lt(l)),t.v}function Hn(t){var n=k;k=new Set;var r=k,e;try{if(ht(t),n!==null)for(e of k)n.add(e)}finally{k=n}return r}function jr(t){var n=Hn(()=>ht(t));for(var r of n)if(r.f&on)for(const e of r.deps||[])e.f&y||lt(e,e.v);else lt(r,r.v)}function ht(t){const n=u;try{return u=null,t()}finally{u=n}}const jn=-7169;function T(t,n){t.f=t.f&jn|n}function Br(t,n=1){var r=en(t),e=n===1?r++:r--;return xt(t,r),e}function Ur(t,n=!1,r){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(_.l={s:null,u:null,r1:[],r2:_t(!1)})}function Vr(t){const n=_;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];X(l.effect),W(l.reaction),Yt(l.fn)}}finally{X(r),W(e)}}_=n.p,n.m=!0}return{}}function Gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=an(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=ln(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Kn as $,rr as A,rt as B,mr as C,Ir as D,It as E,P as F,Tr as G,wn as H,Lr as I,Dn as J,kr as K,at as L,yn as M,N,Dt as O,Tn as P,Ct as Q,Wn as R,yt as S,Or as T,dr as U,Un as V,qr as W,z as X,f as Y,fn as Z,Gn as _,Vr as a,_t as a0,tr as a1,xt as a2,Et as a3,nr as a4,an as a5,Bn as a6,g as a7,U as a8,X as a9,q as aA,er as aB,lt as aC,sr as aD,Vt as aE,On as aF,ar as aG,ur as aH,Yr as aI,Qn as aJ,ln as aK,rn as aL,Hr as aM,ft as aN,un as aO,vr as aP,_n as aQ,nt as aa,ir as ab,Jn as ac,Xn as ad,xr as ae,on as af,fr as ag,St as ah,or as ai,_r as aj,mn as ak,cr as al,k as am,Br as an,$n as ao,Er as ap,yr as aq,wr as ar,jr as as,W as at,u as au,Nr as av,Vn as aw,pr as ax,hr as ay,lr as az,Rn as b,Rr as c,Fr as d,Zn as e,Sr as f,O as g,D as h,p as i,Yt as j,kn as k,br as l,Cr as m,gr as n,_ as o,Ur as p,Mr as q,Ar as r,Dr as s,Pr as t,ht as u,zn as v,At as w,en as x,Gr as y,An as z};