import{h as q,ag as S,am as T,A as b,ap as f,Z as l,aq as w,P as E,ar as B,as as O,T as W}from"./CRiTDDG9.js";function z(t,r){if(r){const a=document.body;t.autofocus=!0,b(()=>{document.activeElement===a&&t.focus()})}}function C(t){q&&S(t)!==null&&T(t)}let y=!1;function A(){y||(y=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var r;if(!t.defaultPrevented)for(const a of t.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function L(t){var r=w,a=E;f(null),l(null);try{return t()}finally{f(r),l(a)}}function F(t,r,a,i=a){t.addEventListener(r,()=>L(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),A()}const D=new Set,M=new Set;function N(t,r,a,i){function n(e){if(i.capture||Z.call(r,e),!e.cancelBubble)return L(()=>a.call(this,e))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?b(()=>{r.addEventListener(t,n,i)}):r.addEventListener(t,n,i),n}function G(t,r,a,i,n){var e={capture:i,passive:n},o=N(t,r,a,e);(r===document.body||r===window||r===document)&&B(()=>{r.removeEventListener(t,o,e)})}function H(t){for(var r=0;r<t.length;r++)D.add(t[r]);for(var a of M)a(t)}function Z(t){var g;var r=this,a=r.ownerDocument,i=t.type,n=((g=t.composedPath)==null?void 0:g.call(t))||[],e=n[0]||t.target,o=0,v=t.__root;if(v){var _=n.indexOf(v);if(_!==-1&&(r===document||r===window)){t.__root=r;return}var h=n.indexOf(r);if(h===-1)return;_<=h&&(o=_)}if(e=n[o]||t.target,e!==r){O(t,"currentTarget",{configurable:!0,get(){return e||a}});var m=w,x=E;f(null),l(null);try{for(var s,p=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+i];if(c!==void 0&&!e.disabled)if(W(c)){var[P,...k]=c;P.apply(e,[t,...k])}else c.call(e,t)}catch(u){s?p.push(u):s=u}if(t.cancelBubble||d===r||d===null)break;e=d}if(s){for(let u of p)queueMicrotask(()=>{throw u});throw s}}finally{t.__root=r,delete t.currentTarget,f(m),l(x)}}}export{D as a,M as b,A as c,H as d,N as e,z as f,G as g,Z as h,F as l,C as r};