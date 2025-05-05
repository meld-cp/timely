import{a as v,t as f}from"../chunks/CYLZ2iXy.js";import{p as C,f as D,t as x,a as R,i as j,s as r,c as a,r as e,l as c,k as L,j as N}from"../chunks/DADXHUXo.js";import{h as S,s as I}from"../chunks/Dx6yMqZD.js";import{e as V,i as q}from"../chunks/DqwSvHIX.js";import{s as z}from"../chunks/ZqIfNnpz.js";import{s as A,a as E}from"../chunks/Pm2PPD19.js";import{d as F}from"../chunks/F2U1FVqC.js";import{b as G}from"../chunks/48vPxV_Q.js";function H(b,l){var s;(s=c(l))==null||s.attributes.removeNamedItem("open")}var J=f(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),K=f("<li><a> </a></li>"),O=f('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-adc366" href="/">[Timely]</a></strong></li></ul> <ul><li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div> <footer class="footer svelte-adc366"><hr class="svelte-adc366"> <section class="svelte-adc366"> </section></footer>',1);function ee(b,l){C(l,!0);const s=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Data",url:"/admin/data/"},{label:"Roadmap",url:"/admin/roadmap/"}];let n=N(void 0);var h=O();S(t=>{var o=J();j(4),v(t,o)});var m=D(h),k=r(a(m),2),g=a(k),d=a(g),_=r(a(d),2);V(_,21,()=>s,q,(t,o)=>{var p=K(),i=a(p);i.__click=[H,n];var B=a(i,!0);e(i),e(p),x(()=>{A(i,"href",c(o).url),I(B,c(o).label)}),v(t,p)}),e(_),e(d),G(d,t=>L(n,t),()=>c(n)),e(g),e(k),e(m);var u=r(m,2),M=a(u);z(M,()=>l.children),e(u);var y=r(u,2),w=r(a(y),2),T=a(w);e(w),e(y),x(()=>I(T,`Data Version: ${E.dataModifiedTimestamp??""}`)),v(b,h),R()}F(["click"]);export{ee as component};
