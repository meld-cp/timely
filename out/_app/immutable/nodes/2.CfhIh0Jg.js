import{a as h,t as g}from"../chunks/JxQl07LI.js";import{p as V,f as q,t as M,a as z,k as _,j as T,i as A,s as r,c as e,r as a,l}from"../chunks/DfIxbQgk.js";import{d as E,h as F,s as C}from"../chunks/gBOFVro4.js";import{e as G,i as H}from"../chunks/DeDL2Fnw.js";import{s as J}from"../chunks/DzJdtt-h.js";import{a as j,s as R}from"../chunks/dcS8n3kW.js";import{b as K}from"../chunks/fg7KLnab.js";function O(c,t){var o;(o=l(t))==null||o.attributes.removeNamedItem("open")}async function P(c,t){_(t,!0);try{await j.backupData("auto")}finally{_(t,!1)}}var Q=g(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),U=g("<li><a> </a></li>"),W=g('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-adc366" href="/">[Timely]</a></strong></li></ul> <ul><li><button class="outline">Backup Data</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div> <footer class="footer svelte-adc366"><hr class="svelte-adc366"> <section class="svelte-adc366"> </section></footer>',1);function ra(c,t){V(t,!0);const o=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Data",url:"/admin/data/"},{label:"Roadmap",url:"/admin/roadmap/"}];let m=T(void 0),u=T(!1);var y=W();F(s=>{var i=Q();A(4),h(s,i)});var d=q(y),w=r(e(d),2),p=e(w),v=e(p);v.__click=[P,u],a(p);var x=r(p,2),b=e(x),D=r(e(b),2);G(D,21,()=>o,H,(s,i)=>{var k=U(),n=e(k);n.__click=[O,m];var S=e(n,!0);a(n),a(k),M(()=>{R(n,"href",l(i).url),C(S,l(i).label)}),h(s,k)}),a(D),a(b),K(b,s=>_(m,s),()=>l(m)),a(x),a(w),a(d);var f=r(d,2),L=e(f);J(L,()=>t.children),a(f);var B=r(f,2),I=r(e(B),2),N=e(I);a(I),a(B),M(()=>{R(v,"aria-busy",l(u)),v.disabled=l(u),C(N,`Data Version: ${j.dataModifiedTimestamp??""}`)}),h(c,y),z()}E(["click"]);export{ra as component};