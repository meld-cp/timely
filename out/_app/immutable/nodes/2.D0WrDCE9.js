import{a as b,t as f}from"../chunks/dYIOUtEc.js";import{p as M,f as S,a as R,i as T,s as o,c as a,r as e,t as q,q as c,O as C,W as F}from"../chunks/5rrx3yqk.js";import{h as L,s as N}from"../chunks/BLSxdP-L.js";import{e as O,i as W,s as j}from"../chunks/B3BOKYqz.js";import{s as z}from"../chunks/Bi-oG3hq.js";import{d as A}from"../chunks/DJXYkiHh.js";import{b as D}from"../chunks/BPBTmVtq.js";import{B as E}from"../chunks/DKHCRQlA.js";function G(n,r){var l;(l=c(r))==null||l.attributes.removeNamedItem("open")}var H=f(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),J=(n,r)=>r.downloadBackupFile(),K=f("<li><a> </a></li>"),P=f('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-frdco2" href="/">[Timley]</a></strong></li></ul> <ul><li><button class="outline">Backup</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div>',1);function ae(n,r){M(r,!0);const l=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Roadmap",url:"/admin/roadmap/"}];let m=F(void 0);const w=new E;var k=P();L(t=>{var s=H();T(4),b(t,s)});var u=S(k),_=o(a(u),2),d=a(_),B=a(d);B.__click=[J,w],e(d);var h=o(d,2),p=a(h),g=o(a(p),2);O(g,21,()=>l,W,(t,s)=>{var v=K(),i=a(v);i.__click=[G,m];var I=a(i,!0);e(i),e(v),q(()=>{j(i,"href",c(s).url),N(I,c(s).label)}),b(t,v)}),e(g),e(p),D(p,t=>C(m,t),()=>c(m)),e(h),e(_),e(u);var y=o(u,2),x=a(y);z(x,()=>r.children),e(y),b(n,k),R()}A(["click"]);export{ae as component};
