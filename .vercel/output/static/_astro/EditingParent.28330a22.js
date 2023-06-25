import{r as b,R as E}from"./index.f824fa59.js";import{F as V,i as gt,d as ht,p as w,f as vt,j as yt,k as Ue}from"./index.bb83cae9.js";import{j as s}from"./jsx-runtime.0209ad28.js";function bt({typeName:e,occasionBool:t,occasionName:r,downloadJsonFiles:n,selectNewOccasion:a}){const o=b.useRef(null),[c,f]=b.useState(!1),h=v=>{f(v)},l=async v=>{v.preventDefault(),t&&await fetch("http://localhost:8001/add_occasion",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e.toLowerCase(),occasion:o.current?.value})}).then(x=>x.json()).then(x=>{x.status>=400?console.log("Error adding new occasion"):(console.log(x),a(x.occasion_name,x.occasion_key),console.log("Successfully added new occasion"),n(),h(!1))})};return b.useEffect(()=>{c&&o.current&&o.current.focus()},[c]),s.jsxs("div",{children:[c&&s.jsx("div",{children:s.jsxs("form",{onSubmit:l,children:[s.jsx("input",{className:"border mb-1 mr-2 border-gray-500 bg-transparent text-lg",ref:o,type:"text",placeholder:`New ${t?"Occaison":"Photo"}`}),s.jsx("button",{type:"submit",children:s.jsx(V,{icon:gt,className:"text-md mr-2 cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"})}),s.jsx(V,{icon:ht,onClick:()=>h(!1),className:"text-md cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"})]})}),s.jsx("div",{onClick:()=>h(!0),className:"mb-1 mr-4 flex cursor-pointer flex-row items-center justify-between text-lg hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:"+ Add New "})]})}function X(e,t,r,n){function a(o){return o instanceof r?o:new r(function(c){c(o)})}return new(r||(r=Promise))(function(o,c){function f(v){try{l(n.next(v))}catch(x){c(x)}}function h(v){try{l(n.throw(v))}catch(x){c(x)}}function l(v){v.done?o(v.value):a(v.value).then(f,h)}l((n=n.apply(e,t||[])).next())})}function Q(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,c;return c={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function f(l){return function(v){return h([l,v])}}function h(l){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(r=0)),r;)try{if(n=1,a&&(o=l[0]&2?a.return:l[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;switch(a=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,a=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(v){l=[6,v],a=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function He(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),a,o=[],c;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(f){c={error:f}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(c)throw c.error}}return o}function We(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var xt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function re(e,t){var r=wt(e);if(typeof r.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function wt(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var n=t.split(".").pop().toLowerCase(),a=xt.get(n);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var jt=[".DS_Store","Thumbs.db"];function Dt(e){return X(this,void 0,void 0,function(){return Q(this,function(t){return de(e)&&At(e.dataTransfer)?[2,St(e.dataTransfer,e.type)]:Ot(e)?[2,Et(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,kt(e)]:[2,[]]})})}function At(e){return de(e)}function Ot(e){return de(e)&&de(e.target)}function de(e){return typeof e=="object"&&e!==null}function Et(e){return Ee(e.target.files).map(function(t){return re(t)})}function kt(e){return X(this,void 0,void 0,function(){var t;return Q(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(n){return re(n)})]}})})}function St(e,t){return X(this,void 0,void 0,function(){var r,n;return Q(this,function(a){switch(a.label){case 0:return e.items?(r=Ee(e.items).filter(function(o){return o.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(Ft))]):[3,2];case 1:return n=a.sent(),[2,Be(tt(n))];case 2:return[2,Be(Ee(e.files).map(function(o){return re(o)}))]}})})}function Be(e){return e.filter(function(t){return jt.indexOf(t.name)===-1})}function Ee(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ft(e){if(typeof e.webkitGetAsEntry!="function")return Ge(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?rt(t):Ge(e)}function tt(e){return e.reduce(function(t,r){return We(We([],He(t),!1),He(Array.isArray(r)?tt(r):[r]),!1)},[])}function Ge(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=re(t);return Promise.resolve(r)}function Ct(e){return X(this,void 0,void 0,function(){return Q(this,function(t){return[2,e.isDirectory?rt(e):_t(e)]})})}function rt(e){var t=e.createReader();return new Promise(function(r,n){var a=[];function o(){var c=this;t.readEntries(function(f){return X(c,void 0,void 0,function(){var h,l,v;return Q(this,function(x){switch(x.label){case 0:if(f.length)return[3,5];x.label=1;case 1:return x.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return h=x.sent(),r(h),[3,4];case 3:return l=x.sent(),n(l),[3,4];case 4:return[3,6];case 5:v=Promise.all(f.map(Ct)),a.push(v),o(),x.label=6;case 6:return[2]}})})},function(f){n(f)})}o()})}function _t(e){return X(this,void 0,void 0,function(){return Q(this,function(t){return[2,new Promise(function(r,n){e.file(function(a){var o=re(a,e.fullPath);r(o)},function(a){n(a)})})]})})}var Pt=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return r.some(function(c){var f=c.trim().toLowerCase();return f.charAt(0)==="."?n.toLowerCase().endsWith(f):f.endsWith("/*")?o===f.replace(/\/.*$/,""):a===f})}return!0};function Ye(e){return Lt(e)||Nt(e)||ot(e)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e){if(Array.isArray(e))return ke(e)}function qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Je(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qe(Object(r),!0).forEach(function(n){nt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){return Mt(e)||It(e,t)||ot(e,t)||Rt()}function Rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(e,t){if(e){if(typeof e=="string")return ke(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function It(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,c,f;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(h){o=!0,f=h}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw f}}return n}}function Mt(e){if(Array.isArray(e))return e}var zt="file-invalid-type",$t="file-too-large",Kt="file-too-small",Ut="too-many-files",Ht=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:zt,message:"File type must be ".concat(r)}},Ve=function(t){return{code:$t,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},Xe=function(t){return{code:Kt,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},Wt={code:Ut,message:"Too many files"};function at(e,t){var r=e.type==="application/x-moz-file"||Pt(e,t);return[r,r?null:Ht(t)]}function it(e,t,r){if(K(e.size))if(K(t)&&K(r)){if(e.size>r)return[!1,Ve(r)];if(e.size<t)return[!1,Xe(t)]}else{if(K(t)&&e.size<t)return[!1,Xe(t)];if(K(r)&&e.size>r)return[!1,Ve(r)]}return[!0,null]}function K(e){return e!=null}function Bt(e){var t=e.files,r=e.accept,n=e.minSize,a=e.maxSize,o=e.multiple,c=e.maxFiles,f=e.validator;return!o&&t.length>1||o&&c>=1&&t.length>c?!1:t.every(function(h){var l=at(h,r),v=te(l,1),x=v[0],R=it(h,n,a),C=te(R,1),S=C[0],_=f?f(h):null;return x&&S&&!_})}function me(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function pe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Qe(e){e.preventDefault()}function Gt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Yt(e){return e.indexOf("Edge/")!==-1}function qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Gt(e)||Yt(e)}function T(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){for(var a=arguments.length,o=new Array(a>1?a-1:0),c=1;c<a;c++)o[c-1]=arguments[c];return t.some(function(f){return!me(n)&&f&&f.apply(void 0,[n].concat(o)),me(n)})}}function Jt(){return"showOpenFilePicker"in window}function Vt(e){if(K(e)){var t=Object.entries(e).filter(function(r){var n=te(r,2),a=n[0],o=n[1],c=!0;return st(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(ct))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(r,n){var a=te(n,2),o=a[0],c=a[1];return Je(Je({},r),{},nt({},o,c))},{});return[{description:"Files",accept:t}]}return e}function Xt(e){if(K(e))return Object.entries(e).reduce(function(t,r){var n=te(r,2),a=n[0],o=n[1];return[].concat(Ye(t),[a],Ye(o))},[]).filter(function(t){return st(t)||ct(t)}).join(",")}function Qt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Zt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function st(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ct(e){return/^.*\.[\w]+$/.test(e)}var er=["children"],tr=["open"],rr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nr=["refKey","onChange","onClick"];function or(e){return sr(e)||ir(e)||lt(e)||ar()}function ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sr(e){if(Array.isArray(e))return Se(e)}function Oe(e,t){return ur(e)||lr(e,t)||lt(e,t)||cr()}function cr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e,t){if(e){if(typeof e=="string")return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(e,t)}}function Se(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function lr(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,c,f;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(h){o=!0,f=h}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw f}}return n}}function ur(e){if(Array.isArray(e))return e}function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ze(Object(r),!0).forEach(function(n){Fe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(e,t){if(e==null)return{};var r=fr(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function fr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var _e=b.forwardRef(function(e,t){var r=e.children,n=ge(e,er),a=Pe(n),o=a.open,c=ge(a,tr);return b.useImperativeHandle(t,function(){return{open:o}},[o]),E.createElement(b.Fragment,null,r(j(j({},c),{},{open:o})))});_e.displayName="Dropzone";var ut={disabled:!1,getFilesFromEvent:Dt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};_e.defaultProps=ut;_e.propTypes={children:w.func,accept:w.objectOf(w.arrayOf(w.string)),multiple:w.bool,preventDropOnDocument:w.bool,noClick:w.bool,noKeyboard:w.bool,noDrag:w.bool,noDragEventsBubbling:w.bool,minSize:w.number,maxSize:w.number,maxFiles:w.number,disabled:w.bool,getFilesFromEvent:w.func,onFileDialogCancel:w.func,onFileDialogOpen:w.func,useFsAccessApi:w.bool,autoFocus:w.bool,onDragEnter:w.func,onDragLeave:w.func,onDragOver:w.func,onDrop:w.func,onDropAccepted:w.func,onDropRejected:w.func,onError:w.func,validator:w.func};var Ce={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Pe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=j(j({},ut),e),r=t.accept,n=t.disabled,a=t.getFilesFromEvent,o=t.maxSize,c=t.minSize,f=t.multiple,h=t.maxFiles,l=t.onDragEnter,v=t.onDragLeave,x=t.onDragOver,R=t.onDrop,C=t.onDropAccepted,S=t.onDropRejected,_=t.onFileDialogCancel,Z=t.onFileDialogOpen,ne=t.useFsAccessApi,oe=t.autoFocus,U=t.preventDropOnDocument,ae=t.noClick,H=t.noKeyboard,I=t.noDrag,N=t.noDragEventsBubbling,W=t.onError,M=t.validator,L=b.useMemo(function(){return Xt(r)},[r]),ie=b.useMemo(function(){return Vt(r)},[r]),B=b.useMemo(function(){return typeof Z=="function"?Z:et},[Z]),z=b.useMemo(function(){return typeof _=="function"?_:et},[_]),A=b.useRef(null),k=b.useRef(null),he=b.useReducer(pr,Ce),p=Oe(he,2),g=p[0],d=p[1],u=g.isFocused,y=g.isFileDialogActive,P=b.useRef(typeof window<"u"&&window.isSecureContext&&ne&&Jt()),Te=function(){!P.current&&y&&setTimeout(function(){if(k.current){var m=k.current.files;m.length||(d({type:"closeDialog"}),z())}},300)};b.useEffect(function(){return window.addEventListener("focus",Te,!1),function(){window.removeEventListener("focus",Te,!1)}},[k,y,z,P]);var G=b.useRef([]),Ne=function(m){A.current&&A.current.contains(m.target)||(m.preventDefault(),G.current=[])};b.useEffect(function(){return U&&(document.addEventListener("dragover",Qe,!1),document.addEventListener("drop",Ne,!1)),function(){U&&(document.removeEventListener("dragover",Qe),document.removeEventListener("drop",Ne))}},[A,U]),b.useEffect(function(){return!n&&oe&&A.current&&A.current.focus(),function(){}},[A,oe,n]);var $=b.useCallback(function(i){W?W(i):console.error(i)},[W]),Le=b.useCallback(function(i){i.preventDefault(),i.persist(),ue(i),G.current=[].concat(or(G.current),[i.target]),pe(i)&&Promise.resolve(a(i)).then(function(m){if(!(me(i)&&!N)){var D=m.length,O=D>0&&Bt({files:m,accept:L,minSize:c,maxSize:o,multiple:f,maxFiles:h,validator:M}),F=D>0&&!O;d({isDragAccept:O,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),l&&l(i)}}).catch(function(m){return $(m)})},[a,l,$,N,L,c,o,f,h,M]),Re=b.useCallback(function(i){i.preventDefault(),i.persist(),ue(i);var m=pe(i);if(m&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return m&&x&&x(i),!1},[x,N]),Ie=b.useCallback(function(i){i.preventDefault(),i.persist(),ue(i);var m=G.current.filter(function(O){return A.current&&A.current.contains(O)}),D=m.indexOf(i.target);D!==-1&&m.splice(D,1),G.current=m,!(m.length>0)&&(d({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),pe(i)&&v&&v(i))},[A,v,N]),se=b.useCallback(function(i,m){var D=[],O=[];i.forEach(function(F){var ee=at(F,L),J=Oe(ee,2),ye=J[0],be=J[1],xe=it(F,c,o),fe=Oe(xe,2),we=fe[0],je=fe[1],De=M?M(F):null;if(ye&&we&&!De)D.push(F);else{var Ae=[be,je];De&&(Ae=Ae.concat(De)),O.push({file:F,errors:Ae.filter(function(mt){return mt})})}}),(!f&&D.length>1||f&&h>=1&&D.length>h)&&(D.forEach(function(F){O.push({file:F,errors:[Wt]})}),D.splice(0)),d({acceptedFiles:D,fileRejections:O,type:"setFiles"}),R&&R(D,O,m),O.length>0&&S&&S(O,m),D.length>0&&C&&C(D,m)},[d,f,L,c,o,h,R,C,S,M]),ce=b.useCallback(function(i){i.preventDefault(),i.persist(),ue(i),G.current=[],pe(i)&&Promise.resolve(a(i)).then(function(m){me(i)&&!N||se(m,i)}).catch(function(m){return $(m)}),d({type:"reset"})},[a,se,$,N]),Y=b.useCallback(function(){if(P.current){d({type:"openDialog"}),B();var i={multiple:f,types:ie};window.showOpenFilePicker(i).then(function(m){return a(m)}).then(function(m){se(m,null),d({type:"closeDialog"})}).catch(function(m){Qt(m)?(z(m),d({type:"closeDialog"})):Zt(m)?(P.current=!1,k.current?(k.current.value=null,k.current.click()):$(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):$(m)});return}k.current&&(d({type:"openDialog"}),B(),k.current.value=null,k.current.click())},[d,B,z,ne,se,$,ie,f]),Me=b.useCallback(function(i){!A.current||!A.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),Y())},[A,Y]),ze=b.useCallback(function(){d({type:"focus"})},[]),$e=b.useCallback(function(){d({type:"blur"})},[]),Ke=b.useCallback(function(){ae||(qt()?setTimeout(Y,0):Y())},[ae,Y]),q=function(m){return n?null:m},ve=function(m){return H?null:q(m)},le=function(m){return I?null:q(m)},ue=function(m){N&&m.stopPropagation()},ft=b.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=i.refKey,D=m===void 0?"ref":m,O=i.role,F=i.onKeyDown,ee=i.onFocus,J=i.onBlur,ye=i.onClick,be=i.onDragEnter,xe=i.onDragOver,fe=i.onDragLeave,we=i.onDrop,je=ge(i,rr);return j(j(Fe({onKeyDown:ve(T(F,Me)),onFocus:ve(T(ee,ze)),onBlur:ve(T(J,$e)),onClick:q(T(ye,Ke)),onDragEnter:le(T(be,Le)),onDragOver:le(T(xe,Re)),onDragLeave:le(T(fe,Ie)),onDrop:le(T(we,ce)),role:typeof O=="string"&&O!==""?O:"presentation"},D,A),!n&&!H?{tabIndex:0}:{}),je)}},[A,Me,ze,$e,Ke,Le,Re,Ie,ce,H,I,n]),pt=b.useCallback(function(i){i.stopPropagation()},[]),dt=b.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=i.refKey,D=m===void 0?"ref":m,O=i.onChange,F=i.onClick,ee=ge(i,nr),J=Fe({accept:L,multiple:f,type:"file",style:{display:"none"},onChange:q(T(O,ce)),onClick:q(T(F,pt)),tabIndex:-1},D,k);return j(j({},J),ee)}},[k,r,f,ce,n]);return j(j({},g),{},{isFocused:u&&!n,getRootProps:ft,getInputProps:dt,rootRef:A,inputRef:k,open:q(Y)})}function pr(e,t){switch(t.type){case"focus":return j(j({},e),{},{isFocused:!0});case"blur":return j(j({},e),{},{isFocused:!1});case"openDialog":return j(j({},Ce),{},{isFileDialogActive:!0});case"closeDialog":return j(j({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return j(j({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return j(j({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return j({},Ce);default:return e}}function et(){}function dr({photosList:e,handlePhotoSelect:t,displayAcceptedFiles:r}){const{getRootProps:n,getInputProps:a,isDragActive:o}=Pe({noClick:!0,accept:{"image/*":[]},onDropAccepted:c=>{r(c.map(f=>Object.assign(f,{preview:URL.createObjectURL(f)})))}});return s.jsxs("div",{...n(),className:`relative ${o&&""}`,children:[s.jsx("input",{...a()}),s.jsx("div",{className:`${o&&"invisible"}`,children:e.map((c,f)=>{var h=Object.keys(c)[0],l=c[h],v=c.selected;return s.jsx("div",{className:`${v&&"text-sea-foam-green dark:text-dark-grayish-red"} mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`,onClick:()=>{t(h,l)},children:s.jsx("div",{className:"mr-4 text-lg",children:h})},f)})}),o&&s.jsx("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center",children:"Drop Here To Upload Photos"})]})}function mr({handleUploadModule:e,listAcceptedFiles:t,selectedOccasionKey:r,selectedOccasionName:n,addingMorePhotosToListAcceptedFiles:a}){const o=l=>{l.stopPropagation()};E.useEffect(()=>{console.log(r),console.log(n)},[r,n]);const{getRootProps:c,getInputProps:f,isDragActive:h}=Pe({noClick:!0,accept:{"image/*":[]},onDropAccepted:l=>{console.log(l),a(l.map(v=>Object.assign(v,{preview:URL.createObjectURL(v)})))}});return s.jsxs("div",{className:"m-auto h-5/6 w-5/6 overflow-y-auto rounded bg-white p-6 dark:bg-gray-200",onClick:o,...c(),children:[s.jsx("input",{...f()}),h&&s.jsx("div",{className:"text-center text-3xl ",children:"Drop Here To Upload Photos"}),!h&&s.jsxs("div",{children:[s.jsxs("div",{className:"mb-2 flex flex-row justify-between",children:[s.jsx("div",{className:"text-xl",children:`Uploading to ${n}`}),s.jsx(V,{className:"cursor-pointer text-3xl hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red",icon:vt,onClick:()=>e(!1)})]}),s.jsx("div",{className:"flex flex-col",children:t.map((l,v)=>s.jsx("div",{className:"my-4",children:s.jsx("div",{children:s.jsx("img",{src:l.preview,onLoad:()=>{URL.revokeObjectURL(l.preview)},className:"w-80 object-scale-down"})})},l.name))})]})]})}function yr(){const[e,t]=E.useState({type:"",occasion:"",photo:"",details:!1}),[r,n]=E.useState({type:"",occasion:"",photo:"",details:!1}),[a,o]=E.useState({}),[c,f]=E.useState(!1),[h,l]=E.useState([{name:"Concert",selected:!1},{name:"Street & Landscape",selected:!1}]),[v,x]=E.useState([]),[R,C]=E.useState([]),[S,_]=E.useState({}),[Z,ne]=E.useState(null),[oe,U]=E.useState([]),[ae,H]=E.useState(!1),I=["concert","streetlandscape"];E.useEffect(()=>{ne(r.type)},[r.type]);const N=p=>{U(p),H(!0)},W=p=>{H(p)},M=p=>{U(g=>{const d=[],u=[];return p.forEach(y=>{g.some(P=>P.name===y.name)?u.push(y):d.push(y)}),u.forEach(y=>console.log(y.name)),[...g,...d]})},L=async()=>{await fetch("http://localhost:8001/get_index_and_key_json",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(p=>p.json()).then(p=>{o(p.data)}).catch(p=>console.log(p))},ie=(p,g)=>{t(d=>{const u={...d};return u.occasion=g,u.photo="",u.details=!1,u}),n(d=>{const u={...d};return u.occasion=p,u.photo="",u.details=!1,u}),console.log("occasion selected")};E.useEffect(()=>{(async()=>{(async()=>{await fetch("http://localhost:8001/get_index_and_key_json",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(d=>d.json()).then(d=>{o(d.data)}).catch(d=>console.log(d))})().then(()=>{f(!0)})})()},[]),E.useEffect(()=>{e.type&&B(I.indexOf(e.type)),e.occasion&&r.occasion&&z(e.occasion,r.occasion)},[a]);const B=async p=>{p!==e.type&&(t(d=>{const u={...d};return u.type=I[p],u.occasion="",u.photo="",u.details=!1,u}),n(d=>{const u={...d};return u.type=h[p].name,u.occasion="",u.photo="",u.details=!1,u}),x([]),C([]),_({})),l(d=>{const u=[...d];for(let y of u)y.name===u[p].name?y.selected=!0:y.selected=!1;return u});let g=[];for(let d in a[I[p]].index)g.push({[d]:a[I[p]].index[d],selected:!1});x(g)},z=(p,g)=>{p!==e.occasion&&(t(u=>{const y={...u};return y.occasion=p,y.photo="",y.details=!1,y}),n(u=>{const y={...u};return y.occasion=g,y.photo="",y.details=!1,y}),C([]),_({})),x(u=>{const y=[...u];for(let P of y)p===Object.keys(P)[0]?P.selected=!0:P.selected=!1;return y});let d=[];for(let u of a[e.type].keys[p])u.selected=!1,d.push(u);C(d)},A=(p,g)=>{p!==e.photo&&(t(d=>{const u={...d};return u.photo=p,u.details=!1,u}),n(d=>{const u={...d};return u.photo=p,u.details=!1,u}),_({})),C(d=>{const u=[...d];for(let y of u)p===Object.keys(y)[0]?y.selected=!0:y.selected=!1;return u}),t(d=>{const u={...d};return u.details=!0,u}),_({caption:g.caption,date:g.date,url:g.url,webp_url:g.webp_url,artist:g.artist,venue:g.venue})},k=()=>{t(p=>{const g={...p};return g.occasion="",g.photo="",g.details=!1,g}),n(p=>{const g={...p};return g.occasion="",g.photo="",g.details=!1,g}),x([]),C([]),_({})},he=()=>{t(p=>{const g={...p};return g.photo="",g.details=!1,g}),n(p=>{const g={...p};return g.photo="",g.details=!1,g}),C([]),_({})};return c?s.jsxs("div",{className:"overflow-x-auto",children:[s.jsxs("div",{className:"flex h-8 w-max flex-row items-center overflow-x-auto",children:[s.jsx(V,{onClick:L,icon:yt,className:"mr-2 cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red"}),r.type&&s.jsxs("div",{className:"flex w-auto flex-row",children:[s.jsx("div",{onClick:k,className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:`${r.type}`}),s.jsx("div",{className:"px-2",children:"/"})]}),r.occasion&&s.jsxs("div",{className:"flex flex-row ",children:[s.jsx("div",{onClick:he,className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:`${r.occasion}`}),s.jsx("div",{className:"px-2",children:"/"})]}),s.jsx("div",{className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:r.photo})]}),s.jsxs("div",{className:"mt-2 flex flex-row ",children:[s.jsx("div",{className:"flex flex-col items-stretch",children:h.map((p,g)=>s.jsxs("div",{className:`${p.selected&&"text-sea-foam-green dark:text-dark-grayish-red"} mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`,onClick:()=>B(g),children:[s.jsx("div",{className:"mr-4 text-lg",children:p.name}),s.jsx("div",{className:"w-4",children:s.jsx(V,{icon:Ue,className:`${!p.selected&&"hidden"} text-sm`})})]},g))}),s.jsxs("div",{className:"ml-4 flex flex-col items-stretch",children:[v.map((p,g)=>{var d=Object.keys(p)[0],u=p[d],y=p[Object.keys(p)[1]];return s.jsxs("div",{className:`${y&&"text-sea-foam-green dark:text-dark-grayish-red"} mb-1 flex cursor-pointer flex-row items-center justify-between hover:text-sea-foam-green dark:hover:text-dark-grayish-red`,onClick:()=>{z(d,u)},children:[s.jsx("div",{className:"mr-4 text-lg",children:u}),s.jsx("div",{className:"w-4",children:s.jsx(V,{icon:Ue,className:`${!y&&"hidden"} text-sm`})})]},g)}),v.length>0&&r.type===Z&&s.jsx(bt,{typeName:r.type,occasionBool:!0,downloadJsonFiles:L,selectNewOccasion:ie})]}),s.jsx("div",{className:"ml-4 flex flex-col items-stretch",id:"photo-list",children:s.jsx(dr,{photosList:R,handlePhotoSelect:A,displayAcceptedFiles:N})}),s.jsxs("div",{className:`${!e.details&&"hidden"} ml-4`,children:[s.jsx("div",{className:"w-80",children:s.jsx("img",{src:S.webp_url,alt:S.caption,className:"h-full w-full"})}),s.jsxs("div",{children:["Caption: ",S.caption]}),s.jsxs("div",{children:["Date: ",S.date]}),e.type==="concert"?s.jsxs("div",{children:[s.jsxs("div",{children:["Artist: ",S.artist]}),s.jsxs("div",{children:["Venue: ",S.venue]})]}):s.jsxs("div",{children:["Place: ",S.venue]})]})]}),ae&&s.jsx("div",{onClick:()=>W(!1),className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black dark:text-black",children:s.jsx(mr,{handleUploadModule:W,listAcceptedFiles:oe,selectedOccasionKey:e.occasion,selectedOccasionName:r.occasion,addingMorePhotosToListAcceptedFiles:M})})]}):s.jsx("div",{className:"mt-4",children:"Loading..."})}export{yr as default};