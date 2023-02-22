(self.webpackChunkyu_doc=self.webpackChunkyu_doc||[]).push([[969],{71100:function(M,W,g){"use strict";var I=g(14570),S=g(62435),k=g(67915);function h(t,e){return w(t)||O(t,e)||v(t,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(t,e){if(t){if(typeof t=="string")return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,f,m;try{for(n=n.call(t);!(i=(f=n.next()).done)&&(r.push(f.value),!(e&&r.length===e));i=!0);}catch(d){o=!0,m=d}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw m}}return r}}function w(t){if(Array.isArray(t))return t}var j={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,r=[];return Object.entries(e.properties||{}).forEach(function(i){var o,f=h(i,2),m=f[0],d=f[1];r.push("".concat(m).concat((o=e.required)!==null&&o!==void 0&&o.includes(m)?"":"?",": ").concat(d.type==="object"?"object":n.toString(d)))}),r.length?"{ ".concat(r.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,r=e.signature;return"".concat(r.isAsync?"async ":"","(").concat(r.arguments.map(function(i){return"".concat(i.key,": ").concat(n.toString(i))}).join(", "),") => ").concat(this.toString(r.returnType))},dom:function(e){return"<".concat(e.$$__body.id," />")},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(r){return n.getValidClassName(r)||n.toString(r)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},C=function(e){var n=useState(function(){return j.toString(e)}),r=h(n,2),i=r[0],o=r[1];return useEffect(function(){o(j.toString(e))},[e]),React.createElement("code",null,i)},B=function(e){var n,r=useRouteMeta(),i=r.frontmatter,o=useAtomAssets(),f=o.components,m=e.id||i.atomId,d=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var a=f==null?void 0:f[m];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,d.formatMessage({id:"api.component.name"})),React.createElement("th",null,d.formatMessage({id:"api.component.description"})),React.createElement("th",null,d.formatMessage({id:"api.component.type"})),React.createElement("th",null,d.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,a&&(n=a.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(a.propsConfig.properties).map(function(u){var c,y=h(u,2),l=y[0],_=y[1];return React.createElement("tr",{key:l},React.createElement("td",null,l),React.createElement("td",null,_.description||"--"),React.createElement("td",null,React.createElement(C,_)),React.createElement("td",null,React.createElement("code",null,(c=a.propsConfig.required)!==null&&c!==void 0&&c.includes(l)?d.formatMessage({id:"api.component.required"}):JSON.stringify(_.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(f?"not.found":"unavailable")},{id:m}))))))},$=null},35532:function(M,W,g){"use strict";var I=g(62435);function S(){return S=Object.assign?Object.assign.bind():function(E){for(var v=1;v<arguments.length;v++){var b=arguments[v];for(var O in b)Object.prototype.hasOwnProperty.call(b,O)&&(E[O]=b[O])}return E},S.apply(this,arguments)}var k=function(v){return React.createElement("span",S({className:"dumi-default-badge"},v))},h=null},67915:function(M,W,g){"use strict";var I=g(93096),S=g(62435),k=null;function h(t,e){return w(t)||O(t,e)||v(t,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(t,e){if(t){if(typeof t=="string")return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,f,m;try{for(n=n.call(t);!(i=(f=n.next()).done)&&(r.push(f.value),!(e&&r.length===e));i=!0);}catch(d){o=!0,m=d}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw m}}return r}}function w(t){if(Array.isArray(t))return t}function j(t,e){if(t==null)return{};var n=C(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function C(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var B=function(e){var n=e.children,r=j(e,k),i=useRef(null),o=useState(!1),f=h(o,2),m=f[0],d=f[1],a=useState(!1),u=h(a,2),c=u[0],y=u[1];return useEffect(function(){var l=i.current;if(l){var _=throttle(function(){d(l.scrollLeft>0),y(l.scrollLeft<l.scrollWidth-l.offsetWidth)},100);return _(),l.addEventListener("scroll",_),window.addEventListener("resize",_),function(){l.removeEventListener("scroll",_),window.removeEventListener("resize",_)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:i,"data-left-folded":m||void 0,"data-right-folded":c||void 0},React.createElement("table",r,n)))},$=null},93096:function(M,W,g){var I="Expected a function",S=NaN,k="[object Symbol]",h=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,O=parseInt,w=typeof g.g=="object"&&g.g&&g.g.Object===Object&&g.g,j=typeof self=="object"&&self&&self.Object===Object&&self,C=w||j||Function("return this")(),B=Object.prototype,$=B.toString,t=Math.max,e=Math.min,n=function(){return C.Date.now()};function r(a,u,c){var y,l,_,R,p,T,x=0,V=!1,P=!1,D=!0;if(typeof a!="function")throw new TypeError(I);u=d(u)||0,o(c)&&(V=!!c.leading,P="maxWait"in c,_=P?t(d(c.maxWait)||0,u):_,D="trailing"in c?!!c.trailing:D);function F(s){var A=y,L=l;return y=l=void 0,x=s,R=a.apply(L,A),R}function J(s){return x=s,p=setTimeout(N,u),V?F(s):R}function X(s){var A=s-T,L=s-x,z=u-A;return P?e(z,_-L):z}function H(s){var A=s-T,L=s-x;return T===void 0||A>=u||A<0||P&&L>=_}function N(){var s=n();if(H(s))return K(s);p=setTimeout(N,X(s))}function K(s){return p=void 0,D&&y?F(s):(y=l=void 0,R)}function G(){p!==void 0&&clearTimeout(p),x=0,y=T=l=p=void 0}function Q(){return p===void 0?R:K(n())}function U(){var s=n(),A=H(s);if(y=arguments,l=this,T=s,A){if(p===void 0)return J(T);if(P)return p=setTimeout(N,u),F(T)}return p===void 0&&(p=setTimeout(N,u)),R}return U.cancel=G,U.flush=Q,U}function i(a,u,c){var y=!0,l=!0;if(typeof a!="function")throw new TypeError(I);return o(c)&&(y="leading"in c?!!c.leading:y,l="trailing"in c?!!c.trailing:l),r(a,u,{leading:y,maxWait:u,trailing:l})}function o(a){var u=typeof a;return!!a&&(u=="object"||u=="function")}function f(a){return!!a&&typeof a=="object"}function m(a){return typeof a=="symbol"||f(a)&&$.call(a)==k}function d(a){if(typeof a=="number")return a;if(m(a))return S;if(o(a)){var u=typeof a.valueOf=="function"?a.valueOf():a;a=o(u)?u+"":u}if(typeof a!="string")return a===0?a:+a;a=a.replace(h,"");var c=v.test(a);return c||b.test(a)?O(a.slice(2),c?2:8):E.test(a)?S:+a}M.exports=i}}]);
