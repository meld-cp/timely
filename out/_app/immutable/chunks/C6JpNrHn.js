class r{encodeDataToBackup(){return btoa(JSON.stringify(localStorage))}downloadBackupFile(){const a=this.encodeDataToBackup(),t=new Blob([a],{type:"text/plain"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`${new Date().valueOf()}.timely-backup`,e.click(),URL.revokeObjectURL(e.href)}}class s{restoreFromBase64(a){const t=atob(a),e=JSON.parse(t);localStorage.clear();for(const o in e)e.hasOwnProperty(o)&&localStorage.setItem(o,e[o])}async restoreFromFile(a){const t=await a.text();this.restoreFromBase64(t)}}export{r as B,s as R};
