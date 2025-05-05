import{a as _,t as g}from"../chunks/JxQl07LI.js";import{p as V,f as q,t as M,a as z,k as h,j as T,i as A,s as r,c as e,r as a,l}from"../chunks/DfIxbQgk.js";import{d as E,h as F,s as C}from"../chunks/gBOFVro4.js";import{e as G,i as H}from"../chunks/DeDL2Fnw.js";import{s as J}from"../chunks/DzJdtt-h.js";import{a as j,s as R}from"../chunks/pG2aVCQS.js";import{s as K}from"../chunks/PwPRnE0L.js";import{b as O}from"../chunks/fg7KLnab.js";function P(m,t){var o;(o=l(t))==null||o.attributes.removeNamedItem("open")}async function Q(m,t){h(t,!0);try{await j.backupData("auto")}finally{h(t,!1)}}var U=g(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
			scrollbar-width: auto;
		}

		::-webkit-scrollbar {
			width: 0.80rem;
		}
		::-webkit-scrollbar-thumb {
			background: var(--pico-form-element-active-border-color);
		}
		
		::-webkit-scrollbar-track {
			background: var(--pico-form-element-border-color);
			/* background: var(--pico-form-element-selected-background-color); */
		}</style>`,1),W=g("<li><a> </a></li>"),X=g('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-adc366" href="/">[Timely]</a></strong></li></ul> <ul><li><button class="outline">Backup Data</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div> <footer class="footer svelte-adc366"><hr class="svelte-adc366"> <section class="svelte-adc366"> </section></footer>',1);function sa(m,t){V(t,!0);const o=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Data",url:"/admin/data/"},{label:"Roadmap",url:"/admin/roadmap/"}];let d=T(void 0),u=T(!1);var y=X();F(s=>{var n=U();A(4),_(s,n)});var p=q(y),w=r(e(p),2),v=e(w),b=e(v);b.__click=[Q,u],a(v);var x=r(v,2),f=e(x),D=r(e(f),2);G(D,21,()=>o,H,(s,n)=>{var k=W(),c=e(k);c.__click=[P,d];var S=e(c,!0);a(c),a(k),M(()=>{R(c,"href",l(n).url),C(S,l(n).label)}),_(s,k)}),a(D),a(f),O(f,s=>h(d,s),()=>l(d)),a(x),a(w),a(p);var i=r(p,2);K(i,"padding-bottom","10rem");var L=e(i);J(L,()=>t.children),a(i);var B=r(i,2),I=r(e(B),2),N=e(I);a(I),a(B),M(()=>{R(b,"aria-busy",l(u)),b.disabled=l(u),C(N,`Data Version: ${j.dataModifiedTimestamp??""}`)}),_(m,y),z()}E(["click"]);export{sa as component};
