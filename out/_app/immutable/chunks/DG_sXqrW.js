import{h,aD as j,aa as C,aE as E,aF as I}from"./UCO5opLl.js";import{c as V,e as B,f as D,d as M,g as q,n as z,j as F}from"./BKxiCNa-.js";function N(s){var r,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(r=0;r<o;r++)s[r]&&(t=N(s[r]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function G(){for(var s,r,t=0,i="",o=arguments.length;t<o;t++)(s=arguments[t])&&(r=N(s))&&(i&&(i+=" "),i+=r);return i}function K(s){return typeof s=="object"?G(s):s??""}function H(s){if(h){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;n(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var o=s.checked;n(s,"checked",null),s.checked=o}}};s.__on_r=t,j(t),V()}}function P(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function n(s,r,t,i){var o=s.__attributes??(s.__attributes={});h&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[E]=t),t==null?s.removeAttribute(r):typeof t!="string"&&$(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function J(s,r,t,i,o=!1,v=!1,R=!1){var l=r||{},y=s.tagName==="OPTION";for(var p in r)p in t||(t[p]=null);t.class&&(t.class=K(t.class));var w=$(s),L=s.__attributes??(s.__attributes={});for(const f in t){let a=t[f];if(y&&f==="value"&&a==null){s.value=s.__value="",l[f]=a;continue}var g=l[f];if(a!==g){l[f]=a;var A=f[0]+f[1];if(A!=="$$"){if(A==="on"){const u={},_="$$"+f;let c=f.slice(2);var d=F(c);if(B(c)&&(c=c.slice(0,-7),u.capture=!0),!d&&g){if(a!=null)continue;s.removeEventListener(c,l[_],u),l[_]=null}if(a!=null)if(d)s[`__${c}`]=a,M([c]);else{let O=function(T){l[f].call(this,T)};l[_]=D(c,s,O,u)}else d&&(s[`__${c}`]=void 0)}else if(f==="style"&&a!=null)s.style.cssText=a+"";else if(f==="autofocus")q(s,!!a);else if(f==="__value"||f==="value"&&a!=null)s.value=s[f]=s.__value=a;else if(f==="selected"&&y)P(s,a);else{var e=f;o||(e=z(e));var k=e==="defaultValue"||e==="defaultChecked";if(a==null&&!v&&!k)if(L[f]=null,e==="value"||e==="checked"){let u=s;if(e==="value"){let _=u.defaultValue;u.removeAttribute(e),u.defaultValue=_}else{let _=u.defaultChecked;u.removeAttribute(e),u.defaultChecked=_}}else s.removeAttribute(f);else k||w.includes(e)&&(v||typeof a!="string")?s[e]=a:typeof a!="function"&&(h&&(e==="src"||e==="href"||e==="srcset")||n(s,e,a))}f==="style"&&"__styles"in s&&(s.__styles={})}}}return l}var b=new Map;function $(s){var r=b.get(s.nodeName);if(r)return r;b.set(s.nodeName,r=[]);for(var t,i=s,o=Element.prototype;o!==i;){t=I(i);for(var v in t)t[v].set&&r.push(v);i=C(i)}return r}export{P as a,J as b,H as r,n as s};
