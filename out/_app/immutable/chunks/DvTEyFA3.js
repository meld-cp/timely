class n{static padLeft(t,a,e){const r=e-t.length;for(let o=0;o<r;o++)t=a[0]+t;return t}}class l{static toInputDateValue(t){var a=t.getDate(),e=t.getMonth()+1,r=t.getFullYear();return`${r}-${n.padLeft(e.toString(),"0",2)}-${n.padLeft(a.toString(),"0",2)}`}static toLocalDatefromString(t,a){const e=new Date(t);return l.toLocalDate(e,a)}static toLocalDate(t,a){return new Intl.DateTimeFormat(a,{}).format(t)}}export{l as F};
