class c{static async convertFileToDataURL(t){return new Promise((r,n)=>{const e=new FileReader;e.onloadend=()=>{const o=e.result;return r(o)},e.onerror=n,e.readAsDataURL(t)})}static downloadAsFile(t,r){const n=new Blob([t],{type:"text/plain"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=r,e.click(),URL.revokeObjectURL(e.href)}}export{c as U};
