import{X as l,L as f,Y as v,ax as p,ay as h,h as u,i as s,F as E,C as g}from"./runtime.BCBvpcPx.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function w(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(u)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=f(o),i=o.lastChild;a(c,i)}else a(o,o);return o}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return a(s,null),s;if(!d){var o=m(n),c=f(o);d=f(c)}var i=d.cloneNode(!0);return a(i,i),i}}function x(r=""){if(!u){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),E(e)),a(e,e),e}function L(){if(u)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function M(r,t){if(u){v.nodes_end=s,g();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{M as a,a as b,L as c,x as d,m as e,N as n,w as t};
