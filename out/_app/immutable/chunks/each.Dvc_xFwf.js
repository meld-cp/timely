import{M as ae,e as re,N as U,k as C,I as D,F as ne,g as F,H as ie,G,J as b,l as H,O as M,K as W,h as Z,L as le,P as $,q as fe,Q as J,R as L,T as K,V as O,W as te,X as se,Y as ue,j as ve,Z as _e,_ as de,$ as ce,a0 as oe,a1 as he,a2 as Ee,a3 as P,a4 as pe,a5 as Te,a6 as Ae}from"./runtime.CMfmp5FK.js";function Ce(f,e){return e}function Ie(f,e,r,u){for(var v=[],_=e.length,t=0;t<_;t++)te(e[t].e,v,!0);var p=_>0&&v.length===0&&r!==null;if(p){var c=r.parentNode;se(c),c.append(r),u.clear(),x(f,e[0].prev,e[_-1].next)}ue(v,()=>{for(var A=0;A<_;A++){var d=e[A];p||(u.delete(d.k),x(f,d.prev,d.next)),ve(d.e,!p)}})}function Ne(f,e,r,u,v,_=null){var t=f,p={flags:e,items:new Map,first:null},c=(e&U)!==0;if(c){var A=f;t=C?D(_e(A)):A.appendChild(ae())}C&&ne();var d=null,I=!1,m=de(()=>{var a=r();return pe(a)?a:a==null?[]:$(a)});re(()=>{var a=F(m),i=a.length;if(I&&i===0)return;I=i===0;let s=!1;if(C){var N=t.data===ie;N!==(i===0)&&(t=G(),D(t),b(!1),s=!0)}if(C){for(var o=null,h,E=0;E<i;E++){if(H.nodeType===8&&H.data===ce){t=H,s=!0,b(!1);break}var T=a[E],n=u(T,E);h=z(H,p,o,null,T,n,E,v,e),p.items.set(n,h),o=h}i>0&&D(G())}if(!C){var l=oe;ge(a,p,t,v,e,(l.f&M)!==0,u)}_!==null&&(i===0?d?W(d):d=Z(()=>_(t)):d!==null&&le(d,()=>{d=null})),s&&b(!0),F(m)}),C&&(t=H)}function ge(f,e,r,u,v,_,t,p){var q,V,Y,X;var c=(v&he)!==0,A=(v&(L|O))!==0,d=f.length,I=e.items,m=e.first,a=m,i,s=null,N,o=[],h=[],E,T,n,l;if(c)for(l=0;l<d;l+=1)E=f[l],T=t(E,l),n=I.get(T),n!==void 0&&((q=n.a)==null||q.measure(),(N??(N=new Set)).add(n));for(l=0;l<d;l+=1){if(E=f[l],T=t(E,l),n=I.get(T),n===void 0){var j=a?a.e.nodes_start:r;s=z(j,e,s,s===null?e.first:s.next,E,T,l,u,v),I.set(T,s),o=[],h=[],a=s.next;continue}if(A&&xe(n,E,l,v),n.e.f&M&&(W(n.e),c&&((V=n.a)==null||V.unfix(),(N??(N=new Set)).delete(n))),n!==a){if(i!==void 0&&i.has(n)){if(o.length<h.length){var R=h[0],g;s=R.prev;var y=o[0],S=o[o.length-1];for(g=0;g<o.length;g+=1)Q(o[g],R,r);for(g=0;g<h.length;g+=1)i.delete(h[g]);x(e,y.prev,S.next),x(e,s,y),x(e,S,R),a=R,s=S,l-=1,o=[],h=[]}else i.delete(n),Q(n,a,r),x(e,n.prev,n.next),x(e,n,s===null?e.first:s.next),x(e,s,n),s=n;continue}for(o=[],h=[];a!==null&&a.k!==T;)(_||!(a.e.f&M))&&(i??(i=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}o.push(n),s=n,a=n.next}if(a!==null||i!==void 0){for(var w=i===void 0?[]:$(i);a!==null;)(_||!(a.e.f&M))&&w.push(a),a=a.next;var k=w.length;if(k>0){var ee=v&U&&d===0?r:null;if(c){for(l=0;l<k;l+=1)(Y=w[l].a)==null||Y.measure();for(l=0;l<k;l+=1)(X=w[l].a)==null||X.fix()}Ie(e,w,ee,I)}}c&&fe(()=>{var B;if(N!==void 0)for(n of N)(B=n.a)==null||B.apply()}),J.first=e.first&&e.first.e,J.last=s&&s.e}function xe(f,e,r,u){u&L&&K(f.v,e),u&O?K(f.i,r):f.i=r}function z(f,e,r,u,v,_,t,p,c,A){var d=(c&L)!==0,I=(c&Te)===0,m=d?I?Ee(v):P(v):v,a=c&O?P(t):t,i={i:a,v:m,k:_,a:null,e:null,prev:r,next:u};try{return i.e=Z(()=>p(f,m,a),C),i.e.prev=r&&r.e,i.e.next=u&&u.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),u!==null&&(u.prev=i,u.e.prev=i.e),i}finally{}}function Q(f,e,r){for(var u=f.next?f.next.e.nodes_start:r,v=e?e.e.nodes_start:r,_=f.e.nodes_start;_!==u;){var t=Ae(_);v.before(_),_=t}}function x(f,e,r){e===null?f.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{Ne as e,Ce as i};