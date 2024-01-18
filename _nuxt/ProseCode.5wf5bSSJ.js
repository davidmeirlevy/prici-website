import{r as g,an as z,ao as D,ap as F,L as A,H as I,aa as G,am as H,o as J,d as T,x as K,b as h,c as k,e as M,g as $,w as Q,W as E,T as U,n as O,a4 as X,p as Y,i as Z,l as L,t as ee,f as te,a3 as ne}from"./entry.NAH1qKoM.js";function W(e){return D()?(F(e),!0):!1}function C(e){return typeof e=="function"?e():A(e)}const b=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,ae=e=>oe.call(e)==="[object Object]",S=()=>{},se=ie();function ie(){var e,t;return b&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function re(e){let t;function a(){return t||(t=e()),t}return a.reset=async()=>{const n=t;t=void 0,n&&await n},a}function ce(e,t,a={}){const{immediate:n=!0}=a,i=g(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,l()}function d(...p){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},C(t))}return n&&(i.value=!0,b&&d()),W(c),{isPending:z(i),start:d,stop:c}}function w(e){var t;const a=C(e);return(t=a==null?void 0:a.$el)!=null?t:a}const N=b?window:void 0,R=b?window.navigator:void 0;function _(...e){let t,a,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,i]=e,t=N):[t,a,n,i]=e,!t)return S;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,s,r)=>(u.addEventListener(f,s,r),()=>u.removeEventListener(f,s,r)),d=G(()=>[w(t),C(i)],([u,f])=>{if(l(),!u)return;const s=ae(f)?{...f}:f;o.push(...a.flatMap(r=>n.map(m=>c(u,r,m,s))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return W(p),p}let P=!1;function ue(e,t,a={}){const{window:n=N,ignore:i=[],capture:o=!0,detectIframe:l=!1}=a;if(!n)return S;se&&!P&&(P=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",S)),n.document.documentElement.addEventListener("click",S));let c=!0;const d=s=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(m=>m===s.target||s.composedPath().includes(m));{const m=w(r);return m&&(s.target===m||s.composedPath().includes(m))}}),u=[_(n,"click",s=>{const r=w(e);if(!(!r||r===s.target||s.composedPath().includes(r))){if(s.detail===0&&(c=!d(s)),!c){c=!0;return}t(s)}},{passive:!0,capture:o}),_(n,"pointerdown",s=>{const r=w(e);c=!d(s)&&!!(r&&!s.composedPath().includes(r))},{passive:!0}),l&&_(n,"blur",s=>{setTimeout(()=>{var r;const m=w(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>u.forEach(s=>s())}function le(){const e=g(!1);return H()&&J(()=>{e.value=!0}),e}function j(e){const t=le();return I(()=>(t.value,!!e()))}function B(e,t={}){const{controls:a=!1,navigator:n=R}=t,i=j(()=>n&&"permissions"in n);let o;const l=typeof e=="string"?{name:e}:e,c=g(),d=()=>{o&&(c.value=o.state)},p=re(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(l),_(o,"change",d),d()}catch{c.value="prompt"}return o}});return p(),a?{state:c,isSupported:i,query:p}:c}function de(e={}){const{navigator:t=R,read:a=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,l=j(()=>t&&"clipboard"in t),c=B("clipboard-read"),d=B("clipboard-write"),p=I(()=>l.value||o),u=g(""),f=g(!1),s=ce(()=>f.value=!1,i);function r(){l.value&&c.value!=="denied"?t.clipboard.readText().then(v=>{u.value=v}):u.value=q()}p.value&&a&&_(["copy","cut"],r);async function m(v=C(n)){p.value&&v!=null&&(l.value&&d.value!=="denied"?await t.clipboard.writeText(v):V(v),u.value=v,f.value=!0,s.start())}function V(v){const y=document.createElement("textarea");y.value=v??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function q(){var v,y,x;return(x=(y=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:y.toString())!=null?x:""}return{isSupported:p,text:u,copied:f,copy:m}}const pe=e=>(Y("data-v-e65c93ed"),e=e(),Z(),e),fe=pe(()=>M("span",{class:"sr-only"},"Copy to clipboard",-1)),me={class:"icon-wrapper"},ve=T({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,a=g(),{copy:n}=de();ue(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=K(),o=g("init"),l=c=>{n(t.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(c,d)=>{const p=X;return h(),k("button",{ref_key:"copyButtonRef",ref:a,class:O([(e.show||o.value==="copied")&&"show"]),onClick:l},[fe,M("span",me,[$(U,{name:"fade"},{default:Q(()=>{var u,f;return[o.value==="copied"?(h(),E(p,{key:0,name:(u=A(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),E(p,{key:1,name:(f=A(i).copyButton)==null?void 0:f.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),ye=L(ve,[["__scopeId","data-v-e65c93ed"]]),ge={key:0,class:"filename"},we=T({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=g(!1);return(a,n)=>{const i=ye;return h(),k("div",{class:O([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(h(),k("span",ge,ee(e.filename),1)):te("",!0),ne(a.$slots,"default",{},void 0,!0),$(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),_e=L(we,[["__scopeId","data-v-7f6526a9"]]);export{_e as default};
