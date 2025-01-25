import{a as b,t as f}from"../chunks/C6I-1lhn.js";import{p as M,f as S,a as R,ab as T,s as i,c as e,r as a,t as C,o as c,a7 as F,ac as L}from"../chunks/C1YrOOk_.js";import{h as N,s as j}from"../chunks/hnnBCjZc.js";import{e as q,i as z}from"../chunks/D1umluFs.js";import{s as A}from"../chunks/ZIhwuBaK.js";import{s as D}from"../chunks/BwTxTwW6.js";import{d as E}from"../chunks/lOenb5ZA.js";import{b as G}from"../chunks/PGmKSpyo.js";import{B as H}from"../chunks/C6JpNrHn.js";function J(n,r){var l;(l=c(r))==null||l.attributes.removeNamedItem("open")}var K=f(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),O=(n,r)=>r.downloadBackupFile(),P=f("<li><a> </a></li>"),Q=f('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-frdco2" href="/">[Timley]</a></strong></li></ul> <ul><li><button class="outline">Backup</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div>',1);function ra(n,r){M(r,!0);const l=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Roadmap",url:"/admin/roadmap/"}];let m=L(void 0);const w=new H;var k=Q();N(t=>{var o=K();T(4),b(t,o)});var u=S(k),_=i(e(u),2),d=e(_),B=e(d);B.__click=[O,w],a(d);var h=i(d,2),p=e(h),g=i(e(p),2);q(g,21,()=>l,z,(t,o)=>{var v=P(),s=e(v);s.__click=[J,m];var I=e(s,!0);a(s),a(v),C(()=>{D(s,"href",c(o).url),j(I,c(o).label)}),b(t,v)}),a(g),a(p),G(p,t=>F(m,t),()=>c(m)),a(h),a(_),a(u);var y=i(u,2),x=e(y);A(x,()=>r.children),a(y),b(n,k),R()}E(["click"]);export{ra as component};
