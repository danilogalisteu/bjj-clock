var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,zn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,Pt=Object.getPrototypeOf,Dt=Object.isExtensible;function Wn(t){return typeof t=="function"}const Xn=()=>{};function Jn(t){return t()}function Ct(t){for(var n=0;n<t.length;n++)t[n]()}const R=2,Ft=4,it=8,mt=16,O=32,j=64,et=128,A=256,rt=512,m=1024,P=2048,H=4096,L=8192,ot=16384,vn=32768,Mt=65536,Qn=1<<17,hn=1<<19,Lt=1<<20,dt=1<<21,K=Symbol("$state"),te=Symbol("legacy props"),ne=Symbol("");function qt(t){return t===this.v}function pn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Yt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function En(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ee(){throw new Error("https://svelte.dev/e/hydration_failed")}function re(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function le(){_t=!0}const ae=1,se=2,fe=16,ue=1,ie=2,oe=4,_e=8,ce=16,ve=1,he=2,An="[",xn="[!",Rn="]",jt={},E=Symbol(),pe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function Ot(t){d=t}function we(t,n=!1,e){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!n&&(d.l={s:null,u:null,r1:[],r2:Tt(!1)}),kn(()=>{r.d=!0})}function ye(t){const n=d;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),Y(l.reaction),$t(l.fn)}}finally{st(e),Y(r)}}d=n.p,n.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function M(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=Pt(t);if(e!==_n&&e!==cn)return t;var r=new Map,a=fn(t),l=S(0),_=v,c=u=>{var s=v;Y(_);var f;return f=u(),Y(s),f};return a&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var i=r.get(s);return i===void 0?(i=c(()=>S(f.value)),r.set(s,i)):k(i,c(()=>M(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>S(E)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&k(i,o)}k(f,E),It(l)}return!0},get(u,s,f){var I;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(I=G(u,s))!=null&&I.writable)&&(i=c(()=>S(M(o?u[s]:E))),r.set(s,i)),i!==void 0){var p=V(i);return p===E?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=V(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==E)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==E||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>S(i?M(u[s]):E)),r.set(s,f));var o=V(f);if(o===E)return!1}return i},set(u,s,f,i){var bt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var I=f;I<o.v;I+=1){var Q=r.get(I+"");Q!==void 0?k(Q,E):I in u&&(Q=c(()=>S(E)),r.set(I+"",Q))}o===void 0?(!p||(bt=G(u,s))!=null&&bt.writable)&&(o=c(()=>S(void 0)),k(o,c(()=>M(f))),r.set(s,o)):(p=o.v!==E,k(o,c(()=>M(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var Rt=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=Rt.v&&k(Rt,pt+1)}It(l)}return!0},ownKeys(u){V(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==E});for(var[f,i]of r)i.v!==E&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function It(t,n=1){k(t,t.v+n)}const $=new Map;function Tt(t,n){var e={f:0,v:t,reactions:null,equals:qt,rv:0,wv:0};return e}function S(t,n){const e=Tt(t);return nn(e),e}function Ee(t,n=!1){var r;const e=Tt(t);return n||(e.equals=Yt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(e),e}function k(t,n,e=!1){v!==null&&!x&&ct()&&(v.f&(R|mt))!==0&&!(y!=null&&y.includes(t))&&Tn();let r=e?M(n):n;return bn(t,r)}function bn(t,n){if(!t.equals(n)){var e=t.v;X?$.set(t,n):$.set(t,e),t.v=n,t.wv=rn(),Bt(t,P),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(O|j))===0&&(T===null?Yn([t]):T.push(t))}return n}function Bt(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&P)===0&&(!r&&_===h||(b(_,n),(c&(m|A))!==0&&((c&R)!==0?Bt(_,H):ht(_))))}}let q=!1;function ge(t){q=t}let D;function z(t){if(t===null)throw Ht(),jt;return D=t}function me(){return z(B(D))}function Te(t){if(q){if(B(D)!==null)throw Ht(),jt;D=t}}function Ae(){for(var t=0,n=D;;){if(n.nodeType===8){var e=n.data;if(e===Rn){if(t===0)return n;t-=1}else(e===An||e===xn)&&(t+=1)}var r=B(n);n.remove(),n=r}}var St,Dn,Ut,Vt;function xe(){if(St===void 0){St=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Ut=G(n,"firstChild").get,Vt=G(n,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Ut.call(t)}function B(t){return Vt.call(t)}function Re(t,n){if(!q)return yt(t);var e=yt(D);if(e===null)e=D.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),z(r),r}return z(e),e}function be(t,n){if(!q){var e=yt(t);return e instanceof Comment&&e.data===""?B(e):e}return D}function De(t,n=1,e=!1){let r=q?D:t;for(var a;n--;)a=r,r=B(r);if(!q)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),z(_),_}return z(r),r}function Oe(t){t.textContent=""}function At(t){var n=R|P,e=v!==null&&(v.f&R)!==0?v:null;return h===null||e!==null&&(e.f&A)!==0?n|=A:h.f|=Lt,{ctx:d,deps:null,effects:null,equals:qt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function Ie(t){const n=At(t);return nn(n),n}function Se(t){const n=At(t);return n.equals=Yt,n}function Gt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)F(n[e])}}function On(t){for(var n=t.parent;n!==null;){if((n.f&R)===0)return n;n=n.parent}return null}function In(t){var n,e=h;st(On(t));try{Gt(t),n=an(t)}finally{st(e)}return n}function Kt(t){var n=In(t),e=(N||(t.f&A)!==0)&&t.deps!==null?H:m;b(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function Zt(t){h===null&&v===null&&yn(),v!==null&&(v.f&A)!==0&&h===null&&wn(),X&&dn()}function Sn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function U(t,n,e,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{xt(l),l.f|=vn}catch(u){throw F(l),u}else n!==null&&ht(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Lt|et))===0;if(!_&&r&&(a!==null&&Sn(l,a),v!==null&&(v.f&R)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function kn(t){const n=U(it,null,!1);return b(n,m),n.teardown=t,n}function ke(t){Zt();var n=h!==null&&(h.f&O)!==0&&d!==null&&!d.m;if(n){var e=d;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=$t(t);return r}}function Ne(t){return Zt(),Nn(t)}function Pe(t){const n=U(j,t,!0);return(e={})=>new Promise(r=>{e.outro?Fn(n,()=>{F(n),r(void 0)}):(F(n),r(void 0))})}function $t(t){return U(Ft,t,!1)}function Nn(t){return U(it,t,!0)}function Ce(t,n=[],e=At){const r=n.map(e);return Pn(()=>t(...r.map(V)))}function Pn(t,n=0){return U(it|mt|n,t,!0)}function Fe(t,n=!0){return U(it|O,t,!0,n)}function zt(t){var n=t.teardown;if(n!==null){const e=X,r=v;Nt(!0),Y(null);try{n.call(null)}finally{Nt(e),Y(r)}}}function Wt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&j)!==0?e.parent=null:F(e,n),e=r}}function Cn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&O)===0&&F(n),n=e}}function F(t,n=!0){var e=!1;if((n||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:B(r);r.remove(),r=l}e=!0}Wt(t,n&&!e),ut(t,0),b(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();zt(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Fn(t,n){var e=[];Jt(t,e,!0),Mn(e,()=>{F(t),n&&n()})}function Mn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function Jt(t,n,e){if((t.f&L)===0){if(t.f^=L,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&O)!==0;Jt(r,n,l?e:!1),r=a}}}function Me(t){Qt(t,!0)}function Qt(t,n){if((t.f&L)!==0){t.f^=L,(t.f&m)===0&&(t.f^=m),J(t)&&(b(t,P),ht(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Mt)!==0||(e.f&O)!==0;Qt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let W=[],Et=[];function tn(){var t=W;W=[],Ct(t)}function Ln(){var t=Et;Et=[],Ct(t)}function Le(t){W.length===0&&queueMicrotask(tn),W.push(t)}function kt(){W.length>0&&tn(),Et.length>0&&Ln()}let nt=!1,lt=!1,at=null,C=!1,X=!1;function Nt(t){X=t}let Z=[];let v=null,x=!1;function Y(t){v=t}let h=null;function st(t){h=t}let y=null;function qn(t){y=t}function nn(t){v!==null&&v.f&dt&&(y===null?qn([t]):y.push(t))}let w=null,g=0,T=null;function Yn(t){T=t}let en=1,ft=0,N=!1;function rn(){return++en}function J(t){var i;var n=t.f;if((n&P)!==0)return!0;if((n&H)!==0){var e=t.deps,r=(n&A)!==0;if(e!==null){var a,l,_=(n&rt)!==0,c=r&&h!==null&&!N,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&A)===0&&(s.f^=A)}for(a=0;a<u;a++)if(l=e[a],J(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!N)&&b(t,m)}return!1}function jn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Hn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,n,e,r){if(nt){if(e===null&&(nt=!1),Hn(n))throw t;return}e!==null&&(nt=!0);{jn(t,n);return}}function ln(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];y!=null&&y.includes(t)||((l.f&R)!==0?ln(l,n,!1):n===l&&(e?b(l,P):(l.f&m)!==0&&b(l,H),ht(l)))}}function an(t){var p;var n=w,e=g,r=T,a=v,l=N,_=y,c=d,u=x,s=t.f;w=null,g=0,T=null,N=(s&A)!==0&&(x||!C||v===null),v=(s&(O|j))===0?t:null,y=null,Ot(t.ctx),x=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!N)for(o=g;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&g<i.length&&(ut(t,g),i.length=g);if(ct()&&T!==null&&!x&&i!==null&&(t.f&(R|H|P))===0)for(o=0;o<T.length;o++)ln(T[o],t);return a!==null&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),f}finally{w=n,g=e,T=r,v=a,N=l,y=_,Ot(c),x=u,t.f^=dt}}function Bn(t,n){let e=n.reactions;if(e!==null){var r=un.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&R)!==0&&(w===null||!w.includes(n))&&(b(n,H),(n.f&(A|rt))===0&&(n.f^=rt),Gt(n),ut(n,0))}function ut(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Bn(t,e[r])}function xt(t){var n=t.f;if((n&ot)===0){b(t,m);var e=h,r=d,a=C;h=t,C=!0;try{(n&mt)!==0?Cn(t):Wt(t),zt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,e,r||t.ctx)}finally{C=a,h=e}}}function Un(){try{En()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=C;try{var n=0;for(C=!0;Z.length>0;){n++>1e3&&Un();var e=Z,r=e.length;Z=[];for(var a=0;a<r;a++){var l=Gn(e[a]);Vn(l)}}}finally{lt=!1,C=t,at=null,$.clear()}}function Vn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|L))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var n=at=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(j|O))!==0){if((e&m)===0)return;n.f^=m}}Z.push(n)}function Gn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(O|j))!==0,l=a&&(r&m)!==0;if(!l&&(r&L)===0){if((r&Ft)!==0)n.push(e);else if(a)e.f^=m;else{var _=v;try{v=e,J(e)&&xt(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function Kn(t){var n;for(kt();Z.length>0;)lt=!0,sn(),kt();return n}async function qe(){await Promise.resolve(),Kn()}function V(t){var n=t.f,e=(n&R)!==0;if(v!==null&&!x){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!N||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&A)===0&&(a.f^=A)}return e&&(a=t,J(a)&&Kt(a)),X&&$.has(t)?$.get(t):t.v}function Ye(t){var n=x;try{return x=!0,t()}finally{x=n}}const Zn=-7169;function b(t,n){t.f=t.f&Zn|n}function je(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=Pt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=on(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{h as $,k as A,_e as B,te as C,ie as D,Mt as E,ue as F,Ee as G,An as H,Wn as I,ce as J,Ne as K,Qn as L,Ct as M,Jn as N,je as O,oe as P,we as Q,Ce as R,K as S,ye as T,E as U,Re as V,Te as W,De as X,Y,st as Z,v as _,Fe as a,Le as a0,zn as a1,fn as a2,xe as a3,yt as a4,B as a5,jt as a6,Rn as a7,Ht as a8,ee as a9,pn as aA,Oe as aa,$n as ab,Pe as ac,wt as ad,Dn as ae,ve as af,he as ag,$t as ah,Nn as ai,Kn as aj,S as ak,qe as al,Ie as am,L as an,bn as ao,Tt as ap,se as aq,Jt as ar,Mn as as,ae as at,fe as au,de as av,pe as aw,Pt as ax,ne as ay,on as az,Pn as b,D as c,F as d,le as e,d as f,Ye as g,q as h,be as i,me as j,xn as k,_t as l,ge as m,Xn as n,Me as o,Fn as p,G as q,Ae as r,z as s,re as t,ke as u,At as v,Se as w,V as x,Yt as y,M as z};
