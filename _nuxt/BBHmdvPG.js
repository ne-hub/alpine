import{ag as w,r as f,ah as C,ai as b,aj as O,a as m,a7 as B,k as M,ak as E,M as H,a9 as R}from"./DyuLLldy.js";const j=s=>s==="defer"||s===!1;function T(...s){var h;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,d,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=M(),_=d,v=()=>null,p=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??v,a.getCachedData=a.getCachedData??p,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??w.deep,a.dedupe=a.dedupe??"cancel";const u=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(h=e.payload._errors)[t]??(h[t]=null);const o=a.deep?f:C;e._asyncData[t]={data:o(a.getCachedData(t,e)??a.default()),pending:f(!u()),error:b(e.payload._errors,t),status:f("idle")}}const r={...e._asyncData[t]};r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(j(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((o._initial||e.isHydrating&&o._initial!==!1)&&u())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const l=new Promise((i,c)=>{try{i(_(e))}catch(P){c(P)}}).then(async i=>{if(l.cancelled)return e._asyncDataPromises[t];let c=i;a.transform&&(c=await a.transform(i)),a.pick&&(c=K(c,a.pick)),e.payload.data[t]=c,r.data.value=c,r.error.value=null,r.status.value="success"}).catch(i=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=E(i),r.data.value=H(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>z(e,t);const y=()=>r.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const o=R();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;o&&(O(()=>{i.forEach(c=>{c()}),i.splice(0,i.length)}),m(()=>i.splice(0,i.length)))}g&&e.isHydrating&&(r.error.value||u())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(y):a.immediate&&y(),a.watch&&B(a.watch,()=>r.refresh());const l=e.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});o&&m(l)}const D=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(D,r),D}function z(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function K(s,n){const t={};for(const d of n)t[d]=s[d];return t}export{T as u};
