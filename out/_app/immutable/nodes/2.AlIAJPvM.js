import{a as b,t as f}from"../chunks/CBmAC5jC.js";import{p as M,f as S,a as N,V as R,s as i,c as a,r as e,t as T,o as c,N as C,W as F}from"../chunks/B3quWTxq.js";import{h as L,s as V}from"../chunks/D1LvbsoL.js";import{e as W,i as j,s as q}from"../chunks/DvSaprfN.js";import{s as z}from"../chunks/CcaUyb-y.js";import{d as A}from"../chunks/B8pIN4OL.js";import{b as D}from"../chunks/ECzNSlVg.js";import{B as E}from"../chunks/IJbVE6sD.js";function G(n,r){var l;(l=c(r))==null||l.attributes.removeNamedItem("open")}var H=f(`<link rel="stylesheet" href="/pico-main/css/pico.min.css"> <link rel="stylesheet" href="/pico-main/css/pico.colors.min.css"> <style>* {
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
		}</style>`,1),J=(n,r)=>r.downloadBackupFile(),K=f("<li><a> </a></li>"),O=f('<nav class="container"><ul><li><strong style="letter-spacing: 0.3rem;"><a class="app-name-link svelte-frdco2" href="/">[Timley]</a></strong></li></ul> <ul><li><button class="outline">Backup</button></li> <li><details class="dropdown"><summary style="width: 18ch;">Menu</summary> <ul></ul></details></li></ul></nav> <div class="container"><!></div>',1);function ae(n,r){M(r,!0);const l=[{label:"Time Log",url:"/timelog/"},{label:"Invoice Builder",url:"/invoices/"},{label:"Settings",url:"/admin/settings/"},{label:"Backup & Restore",url:"/admin/backup/"},{label:"Roadmap",url:"/admin/roadmap/"}];let m=F(void 0);const w=new E;var k=O();L(t=>{var s=H();R(4),b(t,s)});var u=S(k),_=i(a(u),2),d=a(_),B=a(d);B.__click=[J,w],e(d);var h=i(d,2),p=a(h),g=i(a(p),2);W(g,21,()=>l,j,(t,s)=>{var v=K(),o=a(v);o.__click=[G,m];var I=a(o,!0);e(o),e(v),T(()=>{q(o,"href",c(s).url),V(I,c(s).label)}),b(t,v)}),e(g),e(p),D(p,t=>C(m,t),()=>c(m)),e(h),e(_),e(u);var y=i(u,2),x=a(y);z(x,()=>r.children),e(y),b(n,k),N()}A(["click"]);export{ae as component};
