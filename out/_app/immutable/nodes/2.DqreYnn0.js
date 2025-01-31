import{a as u,t as v}from"../chunks/JxQl07LI.js";import{p as F,f as G,t as w,a as H,k as D,j as N,i as J,s,c as e,r as a,l as n}from"../chunks/DfIxbQgk.js";import{d as K,h as O,s as x}from"../chunks/gBOFVro4.js";import{i as P}from"../chunks/DnjCBcqO.js";import{e as Q,i as U}from"../chunks/DeDL2Fnw.js";import{s as W}from"../chunks/DzJdtt-h.js";import{a as d,s as S}from"../chunks/BM9kE2zU.js";import{s as X}from"../chunks/PwPRnE0L.js";import{b as Y}from"../chunks/fg7KLnab.js";function Z(p,l){var c;(c=n(l))==null||c.attributes.removeNamedItem("open")}async function $(p,l){D(l,!0);try{await d.backupData("auto")}finally{D(l,!1)}}var aa=v(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),ea=v("<small><strong> </strong></small>"),ta=v("<li><a> </a></li>"),ra=v('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-adc366" href="/">[Timely]</a><br> <!></strong></li></ul> <ul><li><button class="outline">Backup Data</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div> <footer class="footer svelte-adc366"><hr class="svelte-adc366"> <section class="svelte-adc366"> </section></footer>',1);function va(p,l){F(l,!0);const c=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Data",url:"/admin/data/"},{label:"Roadmap",url:"/admin/roadmap/"}];let b=N(void 0),f=N(!1);var B=ra();O(t=>{var r=aa();J(4),u(t,r)});var _=G(B),g=e(_),I=e(g),M=e(I),V=s(e(M),3);{var q=t=>{var r=ea(),o=e(r),i=e(o,!0);a(o),a(r),w(()=>x(i,d.settings.label)),u(t,r)};P(V,t=>{d.settings.label&&t(q)})}a(M),a(I),a(g);var T=s(g,2),k=e(T),h=e(k);h.__click=[$,f],a(k);var C=s(k,2),y=e(C),R=s(e(y),2);Q(R,21,()=>c,U,(t,r)=>{var o=ta(),i=e(o);i.__click=[Z,b];var E=e(i,!0);a(i),a(o),w(()=>{S(i,"href",n(r).url),x(E,n(r).label)}),u(t,o)}),a(R),a(y),Y(y,t=>D(b,t),()=>n(b)),a(C),a(T),a(_);var m=s(_,2);X(m,"padding-bottom","10rem");var z=e(m);W(z,()=>l.children),a(m);var j=s(m,2),L=s(e(j),2),A=e(L);a(L),a(j),w(()=>{S(h,"aria-busy",n(f)),h.disabled=n(f),x(A,`Data Version: ${d.dataModifiedTimestamp??""}`)}),u(p,B),H()}K(["click"]);export{va as component};
