import{aa as O,g as f,b as M,u as g,ad as U,ae as y,af as T,ag as G,ah as $,S as C,ai as F,aj as z,B as D,_ as H,ak as Q,al as N,am as V,Q as L,an as Z,ao as J,a2 as W,ap as X,aq as k,a3 as ee,ar as B,as as d}from"./runtime.CMfmp5FK.js";import{p as re}from"./proxy.RwLPPeI8.js";let P=!1;function ne(e){var r=P;try{return P=!1,[e(),P]}finally{P=r}}const se={get(e,r){if(!e.exclude.includes(r))return f(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=ie({get[r](){return e.props[r]}},r,N)),e.special[r](n),B(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),B(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function le(e,r){return new Proxy({props:e,exclude:r,special:{},version:ee(0)},se)}const ae={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let i=e.props[s];d(i)&&(i=i());const u=O(i,r);if(u&&u.set)return u.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=O(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===C||r===F)return!1;for(let n of e.props)if(d(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){d(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function fe(...e){return new Proxy({props:e},ae)}function q(e){for(var r=L,n=L;r!==null&&!(r.f&(U|y));)r=r.parent;try{return T(r),e()}finally{T(n)}}function ie(e,r,n,s){var A;var i=(n&Z)!==0,u=!G||(n&$)!==0,b=(n&J)!==0,Y=(n&X)!==0,R=!1,o;b?[o,R]=ne(()=>e[r]):o=e[r];var j=C in e||F in e,c=b&&(((A=O(e,r))==null?void 0:A.set)??(j&&r in e&&(a=>e[r]=a)))||void 0,t=s,S=!0,w=!1,I=()=>(w=!0,S&&(S=!1,Y?t=g(s):t=s),t);o===void 0&&s!==void 0&&(c&&u&&z(),o=I(),c&&c(o));var l;if(u)l=()=>{var a=e[r];return a===void 0?I():(S=!0,w=!1,a)};else{var x=q(()=>(i?D:H)(()=>e[r]));x.f|=Q,l=()=>{var a=f(x);return a!==void 0&&(t=void 0),a===void 0?t:a}}if(!(n&N))return l;if(c){var K=e.$$legacy;return function(a,_){return arguments.length>0?((!u||!_||K||R)&&c(_?l():a),a):l()}}var v=!1,m=!1,h=W(o),p=q(()=>D(()=>{var a=l(),_=f(h);return v?(v=!1,m=!0,_):(m=!1,h.v=a)}));return i||(p.equals=V),function(a,_){if(k!==null&&(v=m,l(),f(h)),arguments.length>0){const E=_?f(p):u&&b?re(a):a;return p.equals(E)||(v=!0,M(h,E),w&&t!==void 0&&(t=E),g(()=>f(p))),a}return f(p)}}export{le as l,ie as p,fe as s};