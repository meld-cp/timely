import{J as ae,b as re,K as Q,h as C,D as b,B as ne,o as z,H as ie,C as F,F as k,g as H,L as D,G as U,d as W,I as fe,M as Z,z as le,N as G,O as L,P as J,Q as O,R as te,T as se,V as ue,e as ve,W as _e,X as de,Y as oe,Z as ce,_ as he,$ as Ee,a0 as K,a1 as pe,a2 as Te,a3 as Ae}from"./C1YrOOk_.js";function Ce(l,e){return e}function Ie(l,e,r,u){for(var v=[],_=e.length,t=0;t<_;t++)te(e[t].e,v,!0);var p=_>0&&v.length===0&&r!==null;if(p){var o=r.parentNode;se(o),o.append(r),u.clear(),x(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var A=0;A<_;A++){var d=e[A];p||(u.delete(d.k),x(l,d.prev,d.next)),ve(d.e,!p)}})}function Ne(l,e,r,u,v,_=null){var t=l,p={flags:e,items:new Map,first:null},o=(e&Q)!==0;if(o){var A=l;t=C?b(_e(A)):A.appendChild(ae())}C&&ne();var d=null,I=!1,m=de(()=>{var a=r();return pe(a)?a:a==null?[]:Z(a)});re(()=>{var a=z(m),i=a.length;if(I&&i===0)return;I=i===0;let s=!1;if(C){var N=t.data===ie;N!==(i===0)&&(t=F(),b(t),k(!1),s=!0)}if(C){for(var c=null,h,E=0;E<i;E++){if(H.nodeType===8&&H.data===oe){t=H,s=!0,k(!1);break}var T=a[E],n=u(T,E);h=$(H,p,c,null,T,n,E,v,e),p.items.set(n,h),c=h}i>0&&b(F())}if(!C){var f=ce;ge(a,p,t,v,e,(f.f&D)!==0,u)}_!==null&&(i===0?d?U(d):d=W(()=>_(t)):d!==null&&fe(d,()=>{d=null})),s&&k(!0),z(m)}),C&&(t=H)}function ge(l,e,r,u,v,_,t,p){var V,Y,q,B;var o=(v&he)!==0,A=(v&(L|O))!==0,d=l.length,I=e.items,m=e.first,a=m,i,s=null,N,c=[],h=[],E,T,n,f;if(o)for(f=0;f<d;f+=1)E=l[f],T=t(E,f),n=I.get(T),n!==void 0&&((V=n.a)==null||V.measure(),(N??(N=new Set)).add(n));for(f=0;f<d;f+=1){if(E=l[f],T=t(E,f),n=I.get(T),n===void 0){var j=a?a.e.nodes_start:r;s=$(j,e,s,s===null?e.first:s.next,E,T,f,u,v),I.set(T,s),c=[],h=[],a=s.next;continue}if(A&&xe(n,E,f,v),n.e.f&D&&(U(n.e),o&&((Y=n.a)==null||Y.unfix(),(N??(N=new Set)).delete(n))),n!==a){if(i!==void 0&&i.has(n)){if(c.length<h.length){var R=h[0],g;s=R.prev;var y=c[0],M=c[c.length-1];for(g=0;g<c.length;g+=1)P(c[g],R,r);for(g=0;g<h.length;g+=1)i.delete(h[g]);x(e,y.prev,M.next),x(e,s,y),x(e,M,R),a=R,s=M,f-=1,c=[],h=[]}else i.delete(n),P(n,a,r),x(e,n.prev,n.next),x(e,n,s===null?e.first:s.next),x(e,s,n),s=n;continue}for(c=[],h=[];a!==null&&a.k!==T;)(_||!(a.e.f&D))&&(i??(i=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}c.push(n),s=n,a=n.next}if(a!==null||i!==void 0){for(var w=i===void 0?[]:Z(i);a!==null;)(_||!(a.e.f&D))&&w.push(a),a=a.next;var S=w.length;if(S>0){var ee=v&Q&&d===0?r:null;if(o){for(f=0;f<S;f+=1)(q=w[f].a)==null||q.measure();for(f=0;f<S;f+=1)(B=w[f].a)==null||B.fix()}Ie(e,w,ee,I)}}o&&le(()=>{var X;if(N!==void 0)for(n of N)(X=n.a)==null||X.apply()}),G.first=e.first&&e.first.e,G.last=s&&s.e}function xe(l,e,r,u){u&L&&J(l.v,e),u&O?J(l.i,r):l.i=r}function $(l,e,r,u,v,_,t,p,o,A){var d=(o&L)!==0,I=(o&Te)===0,m=d?I?Ee(v):K(v):v,a=o&O?K(t):t,i={i:a,v:m,k:_,a:null,e:null,prev:r,next:u};try{return i.e=W(()=>p(l,m,a),C),i.e.prev=r&&r.e,i.e.next=u&&u.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),u!==null&&(u.prev=i,u.e.prev=i.e),i}finally{}}function P(l,e,r){for(var u=l.next?l.next.e.nodes_start:r,v=e?e.e.nodes_start:r,_=l.e.nodes_start;_!==u;){var t=Ae(_);v.before(_),_=t}}function x(l,e,r){e===null?l.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{Ne as e,Ce as i};
