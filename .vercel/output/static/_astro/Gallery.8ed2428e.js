import{R as le,r as _,a as ba}from"./index.f824fa59.js";/* empty css                       */import{j as g}from"./jsx-runtime.0209ad28.js";function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?va(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function Ro(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ya(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lo(e,t,n){return t&&ya(e.prototype,t),n&&ya(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fr(e,t){return zo(e)||Do(e,t)||ki(e,t)||Ho()}function Gt(e){return Mo(e)||Fo(e)||ki(e)||Uo()}function Mo(e){if(Array.isArray(e))return br(e)}function zo(e){if(Array.isArray(e))return e}function Fo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Do(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ki(e,t){if(e){if(typeof e=="string")return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ho(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xa=function(){},Dr={},wi={},Si=null,Oi={mark:xa,measure:xa};try{typeof window<"u"&&(Dr=window),typeof document<"u"&&(wi=document),typeof MutationObserver<"u"&&(Si=MutationObserver),typeof performance<"u"&&(Oi=performance)}catch{}var Bo=Dr.navigator||{},ka=Bo.userAgent,wa=ka===void 0?"":ka,We=Dr,V=wi,Sa=Si,sn=Oi;We.document;var Fe=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Ci=~wa.indexOf("MSIE")||~wa.indexOf("Trident/"),ln,cn,un,fn,dn,Re="___FONT_AWESOME___",vr=16,Ai="fa",Pi="svg-inline--fa",Qe="data-fa-i2svg",yr="data-fa-pseudo-element",Wo="data-fa-pseudo-element-pending",Ur="data-prefix",Hr="data-icon",Oa="fontawesome-i2svg",Yo="async",Vo=["HTML","HEAD","STYLE","SCRIPT"],Ti=function(){try{return!0}catch{return!1}}(),Y="classic",J="sharp",Br=[Y,J];function Xt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var Ft=Xt((ln={},ne(ln,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(ln,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),ln)),Dt=Xt((cn={},ne(cn,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(cn,J,{solid:"fass",regular:"fasr"}),cn)),Ut=Xt((un={},ne(un,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(un,J,{fass:"fa-solid",fasr:"fa-regular"}),un)),Ko=Xt((fn={},ne(fn,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(fn,J,{"fa-solid":"fass","fa-regular":"fasr"}),fn)),Go=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ei="fa-layers-text",Xo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qo=Xt((dn={},ne(dn,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(dn,J,{900:"fass",400:"fasr"}),dn)),ji=[1,2,3,4,5,6,7,8,9,10],Zo=ji.concat([11,12,13,14,15,16,17,18,19,20]),Jo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ze={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ht=new Set;Object.keys(Dt[Y]).map(Ht.add.bind(Ht));Object.keys(Dt[J]).map(Ht.add.bind(Ht));var Qo=[].concat(Br,Gt(Ht),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ze.GROUP,Ze.SWAP_OPACITY,Ze.PRIMARY,Ze.SECONDARY]).concat(ji.map(function(e){return"".concat(e,"x")})).concat(Zo.map(function(e){return"w-".concat(e)})),Nt=We.FontAwesomeConfig||{};function es(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ts(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var ns=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ns.forEach(function(e){var t=Fr(e,2),n=t[0],r=t[1],a=ts(es(n));a!=null&&(Nt[r]=a)})}var _i={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ai,replacementClass:Pi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Nt.familyPrefix&&(Nt.cssPrefix=Nt.familyPrefix);var wt=C(C({},_i),Nt);wt.autoReplaceSvg||(wt.observeMutations=!1);var A={};Object.keys(_i).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){wt[e]=n,Rt.forEach(function(r){return r(A)})},get:function(){return wt[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){wt.cssPrefix=t,Rt.forEach(function(n){return n(A)})},get:function(){return wt.cssPrefix}});We.FontAwesomeConfig=A;var Rt=[];function rs(e){return Rt.push(e),function(){Rt.splice(Rt.indexOf(e),1)}}var De=vr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function as(e){if(!(!e||!Fe)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var is="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Bt(){for(var e=12,t="";e-- >0;)t+=is[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wr(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ii(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function os(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ii(e[n]),'" ')},"").trim()}function In(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Yr(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function ss(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function ls(e){var t=e.transform,n=e.width,r=n===void 0?vr:n,a=e.height,i=a===void 0?vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ci?l+="translate(".concat(t.x/De-r/2,"em, ").concat(t.y/De-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/De,"em), calc(-50% + ").concat(t.y/De,"em)) "):l+="translate(".concat(t.x/De,"em, ").concat(t.y/De,"em) "),l+="scale(".concat(t.size/De*(t.flipX?-1:1),", ").concat(t.size/De*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var cs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $i(){var e=Ai,t=Pi,n=A.cssPrefix,r=A.replacementClass,a=cs;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ca=!1;function sr(){A.autoAddCss&&!Ca&&(as($i()),Ca=!0)}var us={mixout:function(){return{dom:{css:$i,insertCss:sr}}},hooks:function(){return{beforeDOMElementCreation:function(){sr()},beforeI2svg:function(){sr()}}}},Le=We||{};Le[Re]||(Le[Re]={});Le[Re].styles||(Le[Re].styles={});Le[Re].hooks||(Le[Re].hooks={});Le[Re].shims||(Le[Re].shims=[]);var ke=Le[Re],Ni=[],fs=function e(){V.removeEventListener("DOMContentLoaded",e),Pn=1,Ni.map(function(t){return t()})},Pn=!1;Fe&&(Pn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Pn||V.addEventListener("DOMContentLoaded",fs));function ds(e){Fe&&(Pn?setTimeout(e,0):Ni.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ii(e):"<".concat(t," ").concat(os(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Aa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ms=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ms(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function ps(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function xr(e){var t=ps(e);return t.length===1?t[0].toString(16):null}function hs(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function kr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pa(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,Pa(t)):ke.styles[e]=C(C({},ke.styles[e]||{}),i),e==="fas"&&kr("fa",t)}var mn,pn,hn,ht=ke.styles,gs=ke.shims,bs=(mn={},ne(mn,Y,Object.values(Ut[Y])),ne(mn,J,Object.values(Ut[J])),mn),Vr=null,Ri={},Li={},Mi={},zi={},Fi={},vs=(pn={},ne(pn,Y,Object.keys(Ft[Y])),ne(pn,J,Object.keys(Ft[J])),pn);function ys(e){return~Qo.indexOf(e)}function xs(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ys(a)?a:null}var Di=function(){var t=function(i){return lr(ht,function(o,s,l){return o[l]=lr(s,i,{}),o},{})};Ri=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Li=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fi=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ht||A.autoFetchSvg,r=lr(gs,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Mi=r.names,zi=r.unicodes,Vr=$n(A.styleDefault,{family:A.familyDefault})};rs(function(e){Vr=$n(e.styleDefault,{family:A.familyDefault})});Di();function Kr(e,t){return(Ri[e]||{})[t]}function ks(e,t){return(Li[e]||{})[t]}function Je(e,t){return(Fi[e]||{})[t]}function Ui(e){return Mi[e]||{prefix:null,iconName:null}}function ws(e){var t=zi[e],n=Kr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ye(){return Vr}var Gr=function(){return{prefix:null,iconName:null,rest:[]}};function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,a=Ft[r][e],i=Dt[r][e]||Dt[r][a],o=e in ke.styles?e:null;return i||o||null}var Ta=(hn={},ne(hn,Y,Object.keys(Ut[Y])),ne(hn,J,Object.keys(Ut[J])),hn);function Nn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,Y,"".concat(A.cssPrefix,"-").concat(Y)),ne(t,J,"".concat(A.cssPrefix,"-").concat(J)),t),o=null,s=Y;(e.includes(i[Y])||e.some(function(f){return Ta[Y].includes(f)}))&&(s=Y),(e.includes(i[J])||e.some(function(f){return Ta[J].includes(f)}))&&(s=J);var l=e.reduce(function(f,c){var u=xs(A.cssPrefix,c);if(ht[c]?(c=bs[s].includes(c)?Ko[s][c]:c,o=c,f.prefix=c):vs[s].indexOf(c)>-1?(o=c,f.prefix=$n(c,{family:s})):u?f.iconName=u:c!==A.replacementClass&&c!==i[Y]&&c!==i[J]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var d=o==="fa"?Ui(f.iconName):{},p=Je(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||p||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!ht.far&&ht.fas&&!A.autoFetchSvg&&(f.prefix="fas")}return f},Gr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(ht.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=Je(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ye()||"fas"),l}var Ss=function(){function e(){Ro(this,e),this.definitions={}}return Lo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),kr(s,o[s]);var l=Ut[Y][s];l&&kr(l,o[s]),Di()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][l]=f}),n}}]),e}(),Ea=[],gt={},yt={},Os=Object.keys(yt);function Cs(e,t){var n=t.mixoutsTo;return Ea=e,gt={},Object.keys(yt).forEach(function(r){Os.indexOf(r)===-1&&delete yt[r]}),Ea.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),An(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Me(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Sr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ye();if(t)return t=Je(n,t)||t,Aa(Hi.definitions,n,t)||Aa(ke.styles,n,t)}var Hi=new Ss,As=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,et("noAuto")},Ps={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fe?(et("beforeI2svg",t),Me("pseudoElements2svg",t),Me("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,ds(function(){Es({autoReplaceSvgRoot:n}),et("watch",t)})}},Ts={icon:function(t){if(t===null)return null;if(An(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Je(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$n(t[0]);return{prefix:r,iconName:Je(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Go))){var a=Nn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ye(),iconName:Je(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ye();return{prefix:i,iconName:Je(i,t)||t}}}},be={noAuto:As,config:A,dom:Ps,parse:Ts,library:Hi,findIconDefinition:Sr,toHtml:qt},Es=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(ke.styles).length>0||A.autoFetchSvg)&&Fe&&A.autoReplaceSvg&&be.dom.i2svg({node:r})};function Rn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Fe){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function js(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Yr(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=In(C(C({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function _s(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Xr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,u=e.extra,d=e.watchable,p=d===void 0?!1:d,h=r.found?r:n,m=h.width,v=h.height,O=a==="fak",x=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(y){return u.classes.indexOf(y)===-1}).filter(function(y){return y!==""||!!y}).concat(u.classes).join(" "),S={children:[],attributes:C(C({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)})},T=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};p&&(S.attributes[Qe]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(c||Bt())},children:[l]}),delete S.attributes.title);var P=C(C({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:C(C({},T),u.styles)}),I=r.found&&n.found?Me("generateAbstractMask",P)||{children:[],attributes:{}}:Me("generateAbstractIcon",P)||{children:[],attributes:{}},b=I.children,F=I.attributes;return P.children=b,P.attributes=F,s?_s(P):js(P)}function ja(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Qe]="");var c=C({},o.styles);Yr(a)&&(c.transform=ls({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=In(c);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Is(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=In(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cr=ke.styles;function Or(e){var t=e[0],n=e[1],r=e.slice(4),a=Fr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Ze.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Ze.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var $s={found:!1,width:512,height:512};function Ns(e,t){!Ti&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cr(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=Ye()),new Promise(function(r,a){if(Me("missingIconAbstract"),n==="fa"){var i=Ui(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&cr[t]&&cr[t][e]){var o=cr[t][e];return r(Or(o))}Ns(e,t),r(C(C({},$s),{},{icon:A.showMissingIcons&&e?Me("missingIconAbstract")||{}:{}}))})}var _a=function(){},Ar=A.measurePerformance&&sn&&sn.mark&&sn.measure?sn:{mark:_a,measure:_a},$t='FA "6.3.0"',Rs=function(t){return Ar.mark("".concat($t," ").concat(t," begins")),function(){return Bi(t)}},Bi=function(t){Ar.mark("".concat($t," ").concat(t," ends")),Ar.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},qr={begin:Rs,end:Bi},xn=function(){};function Ia(e){var t=e.getAttribute?e.getAttribute(Qe):null;return typeof t=="string"}function Ls(e){var t=e.getAttribute?e.getAttribute(Ur):null,n=e.getAttribute?e.getAttribute(Hr):null;return t&&n}function Ms(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function zs(){if(A.autoReplaceSvg===!0)return kn.replace;var e=kn[A.autoReplaceSvg];return e||kn.replace}function Fs(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Ds(e){return V.createElement(e)}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Fs:Ds:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wi(o,{ceFn:r}))}),a}function Us(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wi(a),n)}),n.getAttribute(Qe)===null&&A.keepOriginalSource){var r=V.createComment(Us(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Wr(n).indexOf(A.replacementClass))return kn.replace(t);var a=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===A.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(Qe,""),n.innerHTML=o}};function $a(e){e()}function Yi(e,t){var n=typeof t=="function"?t:xn;if(e.length===0)n();else{var r=$a;A.mutateApproach===Yo&&(r=We.requestAnimationFrame||$a),r(function(){var a=zs(),i=qr.begin("mutate");e.map(a),i(),n()})}}var Zr=!1;function Vi(){Zr=!0}function Pr(){Zr=!1}var Tn=null;function Na(e){if(Sa&&A.observeMutations){var t=e.treeCallback,n=t===void 0?xn:t,r=e.nodeCallback,a=r===void 0?xn:r,i=e.pseudoElementsCallback,o=i===void 0?xn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;Tn=new Sa(function(f){if(!Zr){var c=Ye();Ct(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Ia(u.addedNodes[0])&&(A.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&A.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Ia(u.target)&&~Jo.indexOf(u.attributeName))if(u.attributeName==="class"&&Ls(u.target)){var d=Nn(Wr(u.target)),p=d.prefix,h=d.iconName;u.target.setAttribute(Ur,p||c),h&&u.target.setAttribute(Hr,h)}else Ms(u.target)&&a(u.target)})}}),Fe&&Tn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hs(){Tn&&Tn.disconnect()}function Bs(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ws(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nn(Wr(e));return a.prefix||(a.prefix=Ye()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ks(a.prefix,e.innerText)||Kr(a.prefix,xr(e.innerText))),!a.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ys(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Bt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Vs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ws(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ys(e),s=wr("parseNodeAttributes",{},e),l=t.styleParser?Bs(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ks=ke.styles;function Ki(e){var t=A.autoReplaceSvg==="nest"?Ra(e,{styleParser:!1}):Ra(e);return~t.extra.classes.indexOf(Ei)?Me("generateLayersText",e,t):Me("generateSvgReplacementMutation",e,t)}var Ve=new Set;Br.map(function(e){Ve.add("fa-".concat(e))});Object.keys(Ft[Y]).map(Ve.add.bind(Ve));Object.keys(Ft[J]).map(Ve.add.bind(Ve));Ve=Gt(Ve);function La(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fe)return Promise.resolve();var n=V.documentElement.classList,r=function(u){return n.add("".concat(Oa,"-").concat(u))},a=function(u){return n.remove("".concat(Oa,"-").concat(u))},i=A.autoFetchSvg?Ve:Br.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ks));i.includes("fa")||i.push("fa");var o=[".".concat(Ei,":not([").concat(Qe,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Qe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=qr.begin("onTree"),f=s.reduce(function(c,u){try{var d=Ki(u);d&&c.push(d)}catch(p){Ti||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(d){Yi(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),u(d)})})}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ki(e).then(function(n){n&&Yi([n],t)})}function Xs(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Sr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Sr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var qs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,u=n.title,d=u===void 0?null:u,p=n.titleId,h=p===void 0?null:p,m=n.classes,v=m===void 0?[]:m,O=n.attributes,x=O===void 0?{}:O,S=n.styles,T=S===void 0?{}:S;if(t){var P=t.prefix,I=t.iconName,b=t.icon;return Rn(C({type:"icon"},t),function(){return et("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(d?x["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(h||Bt()):(x["aria-hidden"]="true",x.focusable="false")),Xr({icons:{main:Or(b),mask:l?Or(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:I,transform:C(C({},je),a),symbol:o,title:d,maskId:c,titleId:h,extra:{attributes:x,styles:T,classes:v}})})}},Zs={mixout:function(){return{icon:Xs(qs)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=La,n.nodeCallback=Gs,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return La(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,u=r.maskId,d=r.extra;return new Promise(function(p,h){Promise.all([Cr(a,s),c.iconName?Cr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var v=Fr(m,2),O=v[0],x=v[1];p([n,Xr({icons:{main:O,mask:x},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=In(s);l.length>0&&(a.style=l);var f;return Yr(o)&&(f=Me("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Js={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rn({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(Gt(i)).join(" ")},children:o}]})}}}},Qs={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,u=c===void 0?{}:c;return Rn({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),Is({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(Gt(s))}})})}}}},el={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,u=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return Rn({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),ja({content:n,transform:C(C({},je),i),title:s,extra:{attributes:u,styles:p,classes:["".concat(A.cssPrefix,"-layers-text")].concat(Gt(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ci){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return A.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ja({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},tl=new RegExp('"',"ug"),Ma=[1105920,1112319];function nl(e){var t=e.replace(tl,""),n=hs(t,0),r=n>=Ma[0]&&n<=Ma[1],a=t.length===2?t[0]===t[1]:!1;return{value:xr(a?t[0]:t),isSecondary:r||a}}function za(e,t){var n="".concat(Wo).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(b){return b.getAttribute(yr)===t})[0],s=We.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Xo),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?J:Y,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Dt[d][l[2].toLowerCase()]:qo[d][f],h=nl(u),m=h.value,v=h.isSecondary,O=l[0].startsWith("FontAwesome"),x=Kr(p,m),S=x;if(O){var T=ws(m);T.iconName&&T.prefix&&(x=T.iconName,p=T.prefix)}if(x&&!v&&(!o||o.getAttribute(Ur)!==p||o.getAttribute(Hr)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var P=Vs(),I=P.extra;I.attributes[yr]=t,Cr(x,p).then(function(b){var F=Xr(C(C({},P),{},{icons:{main:b,mask:Gr()},prefix:p,iconName:S,extra:I,watchable:!0})),y=V.createElement("svg");t==="::before"?e.insertBefore(y,e.firstChild):e.appendChild(y),y.outerHTML=F.map(function(E){return qt(E)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function rl(e){return Promise.all([za(e,"::before"),za(e,"::after")])}function al(e){return e.parentNode!==document.head&&!~Vo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Fa(e){if(Fe)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(al).map(rl),a=qr.begin("searchPseudoElements");Vi(),Promise.all(r).then(function(){a(),Pr(),t()}).catch(function(){a(),Pr(),n()})})}var il={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;A.searchPseudoElements&&Fa(a)}}},Da=!1,ol={mixout:function(){return{dom:{unwatch:function(){Vi(),Da=!0}}}},hooks:function(){return{bootstrap:function(){Na(wr("mutationObserverCallbacks",{}))},noAuto:function(){Hs()},watch:function(n){var r=n.observeMutationsRoot;Da?Pr():Na(wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ua=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},sl={mixout:function(){return{parse:{transform:function(n){return Ua(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ua(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:d};return{tag:"g",attributes:C({},p.outer),children:[{tag:"g",attributes:C({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),p.path)}]}]}}}},ur={x:0,y:0,width:"100%",height:"100%"};function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ll(e){return e.tag==="g"?e.children:[e]}var cl={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nn(a.split(" ").map(function(o){return o.trim()})):Gr();return i.prefix||(i.prefix=Ye()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,u=o.width,d=o.icon,p=ss({transform:l,containerWidth:u,iconWidth:f}),h={tag:"rect",attributes:C(C({},ur),{},{fill:"white"})},m=c.children?{children:c.children.map(Ha)}:{},v={tag:"g",attributes:C({},p.inner),children:[Ha(C({tag:c.tag,attributes:C(C({},c.attributes),p.path)},m))]},O={tag:"g",attributes:C({},p.outer),children:[v]},x="mask-".concat(s||Bt()),S="clip-".concat(s||Bt()),T={tag:"mask",attributes:C(C({},ur),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,O]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:ll(d)},T]};return r.push(P,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(x,")")},ur)}),{children:r,attributes:a}}}},ul={provides:function(t){var n=!1;We.matchMedia&&(n=We.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fl={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},dl=[us,Zs,Js,Qs,el,il,ol,sl,cl,ul,fl];Cs(dl,{mixoutsTo:be});be.noAuto;be.config;be.library;be.dom;var Tr=be.parse;be.findIconDefinition;be.toHtml;var ml=be.icon;be.layer;be.text;be.counter;var N={},pl={get exports(){return N},set exports(e){N=e}},hl="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gl=hl,bl=gl;function Gi(){}function Xi(){}Xi.resetWarningCache=Gi;var vl=function(){function e(r,a,i,o,s,l){if(l!==bl){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xi,resetWarningCache:Gi};return n.PropTypes=n,n};pl.exports=vl();function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function En(e){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(e)}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yl(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xl(e,t){if(e==null)return{};var n=yl(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Er(e){return kl(e)||wl(e)||Sl(e)||Ol()}function kl(e){if(Array.isArray(e))return jr(e)}function wl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sl(e,t){if(e){if(typeof e=="string")return jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(e,t)}}function jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ol(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cl(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,u=e.pulse,d=e.fixedWidth,p=e.inverse,h=e.border,m=e.listItem,v=e.flip,O=e.size,x=e.rotation,S=e.pull,T=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":d,"fa-inverse":p,"fa-border":h,"fa-li":m,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},bt(t,"fa-".concat(O),typeof O<"u"&&O!==null),bt(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),bt(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),bt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(P){return T[P]?P:null}).filter(function(P){return P})}function Al(e){return e=e-0,e===e}function qi(e){return Al(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Pl=["style"];function Tl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function El(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Tl(a)]=i:t[a]=i,t},{})}function Zi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Zi(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=El(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[qi(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=xl(n,Pl);return a.attrs.style=He(He({},a.attrs.style),o),e.apply(void 0,[t.tag,He(He({},a.attrs),s)].concat(Er(r)))}var Ji=!1;try{Ji=!0}catch{}function jl(){if(!Ji&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wa(e){if(e&&En(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Tr.icon)return Tr.icon(e);if(e===null)return null;if(e&&En(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bt({},e,t):{}}var me=le.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=Wa(n),c=fr("classes",[].concat(Er(Cl(e)),Er(i.split(" ")))),u=fr("transform",typeof e.transform=="string"?Tr.transform(e.transform):e.transform),d=fr("mask",Wa(r)),p=ml(f,He(He(He(He({},c),u),d),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!p)return jl("Could not find icon",f),null;var h=p.abstract,m={ref:t};return Object.keys(e).forEach(function(v){me.defaultProps.hasOwnProperty(v)||(m[v]=e[v])}),_l(h[0],m)});me.displayName="FontAwesomeIcon";me.propTypes={beat:N.bool,border:N.bool,beatFade:N.bool,bounce:N.bool,className:N.string,fade:N.bool,flash:N.bool,mask:N.oneOfType([N.object,N.array,N.string]),maskId:N.string,fixedWidth:N.bool,inverse:N.bool,flip:N.oneOf([!0,!1,"horizontal","vertical","both"]),icon:N.oneOfType([N.object,N.array,N.string]),listItem:N.bool,pull:N.oneOf(["right","left"]),pulse:N.bool,rotation:N.oneOf([0,90,180,270]),shake:N.bool,size:N.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:N.bool,spinPulse:N.bool,spinReverse:N.bool,symbol:N.oneOfType([N.bool,N.string]),title:N.string,titleId:N.string,transform:N.oneOfType([N.string,N.object]),swapOpacity:N.bool};me.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var _l=Zi.bind(null,le.createElement),Il={prefix:"fas",iconName:"face-smile-beam",icon:[512,512,[128522,"smile-beam"],"f5b8","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},$l=Il,Nl={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ya={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Rl={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Ll={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Qi={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ml={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},zl=Ml;function Fl({isDownloading:e}){return g.jsxs("div",{children:[e===""&&g.jsx("div",{}),e==="downloading"&&g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx("span",{children:"Downloading"}),g.jsx("span",{className:"animate-fastPulse",children:"."}),g.jsx("span",{className:"animate-fastPulse",children:"."}),g.jsx("span",{className:"animate-fastPulse",children:"."})]}),e==="completed"&&g.jsx("div",{className:"animate-fade-out",children:"Download completed"})]})}const Dl="Left",Ul="Right",Hl="Up",Bl="Down",vt={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},_r={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Va="mousemove",Ka="mouseup",Wl="touchend",Yl="touchmove",Vl="touchstart";function Kl(e,t,n,r){return e>t?n>0?Ul:Dl:r>0?Bl:Hl}function Ga(e,t){if(t===0)return e;const n=Math.PI/180*t,r=e[0]*Math.cos(n)+e[1]*Math.sin(n),a=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[r,a]}function Gl(e,t){const n=c=>{const u="touches"in c;u&&c.touches.length>1||e((d,p)=>{p.trackMouse&&!u&&(document.addEventListener(Va,r),document.addEventListener(Ka,o));const{clientX:h,clientY:m}=u?c.touches[0]:c,v=Ga([h,m],p.rotationAngle);return p.onTouchStartOrOnMouseDown&&p.onTouchStartOrOnMouseDown({event:c}),Object.assign(Object.assign(Object.assign({},d),_r),{initial:v.slice(),xy:v,start:c.timeStamp||0})})},r=c=>{e((u,d)=>{const p="touches"in c;if(p&&c.touches.length>1)return u;if(c.timeStamp-u.start>d.swipeDuration)return u.swiping?Object.assign(Object.assign({},u),{swiping:!1}):u;const{clientX:h,clientY:m}=p?c.touches[0]:c,[v,O]=Ga([h,m],d.rotationAngle),x=v-u.xy[0],S=O-u.xy[1],T=Math.abs(x),P=Math.abs(S),I=(c.timeStamp||0)-u.start,b=Math.sqrt(T*T+P*P)/(I||1),F=[x/(I||1),S/(I||1)],y=Kl(T,P,x,S),E=typeof d.delta=="number"?d.delta:d.delta[y.toLowerCase()]||vt.delta;if(T<E&&P<E&&!u.swiping)return u;const z={absX:T,absY:P,deltaX:x,deltaY:S,dir:y,event:c,first:u.first,initial:u.initial,velocity:b,vxvy:F};z.first&&d.onSwipeStart&&d.onSwipeStart(z),d.onSwiping&&d.onSwiping(z);let $=!1;return(d.onSwiping||d.onSwiped||d[`onSwiped${y}`])&&($=!0),$&&d.preventScrollOnSwipe&&d.trackTouch&&c.cancelable&&c.preventDefault(),Object.assign(Object.assign({},u),{first:!1,eventData:z,swiping:!0})})},a=c=>{e((u,d)=>{let p;if(u.swiping&&u.eventData){if(c.timeStamp-u.start<d.swipeDuration){p=Object.assign(Object.assign({},u.eventData),{event:c}),d.onSwiped&&d.onSwiped(p);const h=d[`onSwiped${p.dir}`];h&&h(p)}}else d.onTap&&d.onTap({event:c});return d.onTouchEndOrOnMouseUp&&d.onTouchEndOrOnMouseUp({event:c}),Object.assign(Object.assign(Object.assign({},u),_r),{eventData:p})})},i=()=>{document.removeEventListener(Va,r),document.removeEventListener(Ka,o)},o=c=>{i(),a(c)},s=(c,u)=>{let d=()=>{};if(c&&c.addEventListener){const p=Object.assign(Object.assign({},vt.touchEventOptions),u.touchEventOptions),h=[[Vl,n,p],[Yl,r,Object.assign(Object.assign({},p),u.preventScrollOnSwipe?{passive:!1}:{})],[Wl,a,p]];h.forEach(([m,v,O])=>c.addEventListener(m,v,O)),d=()=>h.forEach(([m,v])=>c.removeEventListener(m,v))}return d},f={ref:c=>{c!==null&&e((u,d)=>{if(u.el===c)return u;const p={};return u.el&&u.el!==c&&u.cleanUpTouch&&(u.cleanUpTouch(),p.cleanUpTouch=void 0),d.trackTouch&&c&&(p.cleanUpTouch=s(c,d)),Object.assign(Object.assign(Object.assign({},u),{el:c}),p)})}};return t.trackMouse&&(f.onMouseDown=n),[f,s]}function Xl(e,t,n,r){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})}function ql(e){const{trackMouse:t}=e,n=_.useRef(Object.assign({},_r)),r=_.useRef(Object.assign({},vt)),a=_.useRef(Object.assign({},r.current));a.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},vt),e);let i;for(i in vt)r.current[i]===void 0&&(r.current[i]=vt[i]);const[o,s]=_.useMemo(()=>Gl(l=>n.current=l(n.current,r.current),{trackMouse:t}),[t]);return n.current=Xl(n.current,r.current,a.current,s),o}function Zl({title:e,resizeValue:t,occasion:n}){const[r,a]=_.useState(""),[i,o]=_.useState(!1),[s,l]=_.useState(-1),[f,c]=le.useState(""),u=b=>{b==="Left"?O():b==="Right"&&v()},d=ql({onSwipedLeft:()=>u("Left"),onSwipedRight:()=>u("Right"),delta:10,trackMouse:!0}),p=async(b,F)=>{a(b),l(F)},h=()=>{o(!i)},m=async(b,F)=>{await p(b,F),h()},v=()=>{if(s>0){const b=s-1,F=n[b],y=F[Object.keys(F)[0]];a(y.webp_url),l(b)}},O=()=>{if(s<n.length-1){const b=s+1,F=n[b],y=F[Object.keys(F)[0]];a(y.webp_url),l(b)}},x=b=>{c(b)},S=async b=>{b.preventDefault(),x("downloading");const F=n[s],y=F[Object.keys(F)[0]];try{const E=await fetch(y.url);if(!E.ok)throw new Error("Failed to fetch the image");const z=await E.blob(),$=URL.createObjectURL(z),W=document.createElement("a");W.href=$,W.download=Object.keys(F)[0],document.body.appendChild(W),W.click(),document.body.removeChild(W),setTimeout(()=>{URL.revokeObjectURL($),x("completed")},100),setTimeout(()=>{x("")},7500)}catch(E){console.error("Error downloading the image:",E)}},T=b=>{(b.target===b.currentTarget||b.target===document.querySelector(".fullscreen-image"))&&h()},P=b=>{b.stopPropagation()},I=b=>{b.key==="Escape"&&i&&h()};return le.useEffect(()=>(window.addEventListener("keydown",I),()=>{window.removeEventListener("keydown",I)}),[i]),g.jsxs("div",{children:[g.jsx("div",{className:"flex flex-wrap justify-center mt-6 ",children:n.map((b,F)=>{var y=b[Object.keys(b)[0]];return g.jsx("img",{src:y.webp_url,className:"m-4 transition-all ease-in-out object-scale-down hover:opacity-25 cursor-pointer",style:{height:"auto",width:`${t}%`},alt:b[Object.keys(b)[0]],onClick:()=>{m(y.webp_url,F)}},F)})}),g.jsx("div",{className:"fixed bottom-0 left-0 m-4 text-white z-50",children:g.jsx(Fl,{isDownloading:f})}),i&&g.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75",children:g.jsxs("div",{className:"relative w-screen h-screen",children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center border ",onClick:T,...d,children:g.jsx("img",{src:r,alt:"Fullscreen",className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fullscreen-image",style:{maxWidth:"100%",maxHeight:"100%"},onClick:P,draggable:!1})}),g.jsx("button",{className:"absolute top-0 right-0 m-4 text-gray-800 focus:outline-none",onClick:h,children:g.jsx(me,{icon:zl,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),s===0?g.jsx("div",{}):g.jsx("button",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none",onClick:v,children:g.jsx(me,{icon:Ll,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),s===n.length-1?g.jsx("div",{}):g.jsx("button",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none",onClick:O,children:g.jsx(me,{icon:Rl,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),g.jsx("a",{href:r,download:!0,onClick:S,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-gray-800 absolute bottom-0 right-0 m-4 focus:outline-none flex items-center",children:g.jsx(me,{icon:Qi,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),g.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white p-4",children:`${n[s][Object.keys(n[s])[0]].caption}, ${n[s][Object.keys(n[s])[0]].date}`})]})})]})}function ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function eo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=eo(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Be(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=eo(e))&&(r&&(r+=" "),r+=t);return r}function pt(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function to(e){if(!pt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=to(e[n])}),t}function Ne(e,t,n={clone:!0}){const r=n.clone?k({},e):e;return pt(e)&&pt(t)&&Object.keys(t).forEach(a=>{a!=="__proto__"&&(pt(t[a])&&a in e&&pt(e[a])?r[a]=Ne(e[a],t[a],n):n.clone?r[a]=pt(t[a])?to(t[a]):t[a]:r[a]=t[a])}),r}function St(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function he(e){if(typeof e!="string")throw new Error(St(7));return e.charAt(0).toUpperCase()+e.slice(1)}function wn(e){return e&&e.ownerDocument||document}function Jl(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Ql=typeof window<"u"?_.useLayoutEffect:_.useEffect,no=Ql;function ec({controlled:e,default:t,name:n,state:r="value"}){const{current:a}=_.useRef(e!==void 0),[i,o]=_.useState(t),s=a?e:i,l=_.useCallback(f=>{a||o(f)},[]);return[s,l]}function dr(e){const t=_.useRef(e);return no(()=>{t.current=e}),_.useCallback((...n)=>(0,t.current)(...n),[])}function Ir(...e){return _.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Jl(n,t)})},e)}let Ln=!0,$r=!1,Xa;const tc={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function nc(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&tc[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function rc(e){e.metaKey||e.altKey||e.ctrlKey||(Ln=!0)}function mr(){Ln=!1}function ac(){this.visibilityState==="hidden"&&$r&&(Ln=!0)}function ic(e){e.addEventListener("keydown",rc,!0),e.addEventListener("mousedown",mr,!0),e.addEventListener("pointerdown",mr,!0),e.addEventListener("touchstart",mr,!0),e.addEventListener("visibilitychange",ac,!0)}function oc(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ln||nc(t)}function sc(){const e=_.useCallback(a=>{a!=null&&ic(a.ownerDocument)},[]),t=_.useRef(!1);function n(){return t.current?($r=!0,window.clearTimeout(Xa),Xa=window.setTimeout(()=>{$r=!1},100),t.current=!1,!0):!1}function r(a){return oc(a)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}const lc={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},cc=lc;function ro(e,t){const n=k({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=k({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const a=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=a:!a||!Object.keys(a)?n[r]=i:(n[r]=k({},i),Object.keys(a).forEach(o=>{n[r][o]=ro(a[o],i[o])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function uc(e,t,n){const r={};return Object.keys(e).forEach(a=>{r[a]=e[a].reduce((i,o)=>(o&&(i.push(t(o)),n&&n[o]&&i.push(n[o])),i),[]).join(" ")}),r}const qa=e=>e,fc=()=>{let e=qa;return{configure(t){e=t},generate(t){return e(t)},reset(){e=qa}}},dc=fc(),mc=dc,pc={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function ao(e,t,n="Mui"){const r=pc[t];return r?`${n}-${r}`:`${mc.generate(e)}-${t}`}function hc(e,t,n="Mui"){const r={};return t.forEach(a=>{r[a]=ao(e,a,n)}),r}function Lt(e){return typeof e=="string"}function gc(e,t,n){return e===void 0||Lt(e)?t:k({},t,{ownerState:k({},t.ownerState,n)})}function bc(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function vc(e,t){return typeof e=="function"?e(t):e}function Za(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function yc(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:a,className:i}=e;if(!t){const p=Be(a?.className,r?.className,i,n?.className),h=k({},n?.style,a?.style,r?.style),m=k({},n,a,r);return p.length>0&&(m.className=p),Object.keys(h).length>0&&(m.style=h),{props:m,internalRef:void 0}}const o=bc(k({},a,r)),s=Za(r),l=Za(a),f=t(o),c=Be(f?.className,n?.className,i,a?.className,r?.className),u=k({},f?.style,n?.style,a?.style,r?.style),d=k({},f,n,l,s);return c.length>0&&(d.className=c),Object.keys(u).length>0&&(d.style=u),{props:d,internalRef:f.ref}}const xc=["elementType","externalSlotProps","ownerState"];function Ue(e){var t;const{elementType:n,externalSlotProps:r,ownerState:a}=e,i=ve(e,xc),o=vc(r,a),{props:s,internalRef:l}=yc(k({},i,{externalSlotProps:o})),f=Ir(l,o?.ref,(t=e.additionalProps)==null?void 0:t.ref);return gc(n,k({},s,{ref:f}),a)}const kc=2;function io(e,t){return e-t}function Tt(e,t,n){return e==null?t:Math.min(Math.max(t,e),n)}function Ja(e,t){var n;const{index:r}=(n=e.reduce((a,i,o)=>{const s=Math.abs(t-i);return a===null||s<a.distance||s===a.distance?{distance:s,index:o}:a},null))!=null?n:{};return r}function gn(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const a=n.changedTouches[r];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Qa(e,t,n){return(e-t)*100/(n-t)}function wc(e,t,n){return(n-t)*e+t}function Sc(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Oc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Sc(t)))}function ei({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(io)}function bn({sliderRef:e,activeIndex:t,setActive:n}){var r,a;const i=wn(e.current);if(!((r=e.current)!=null&&r.contains(i.activeElement))||Number(i==null||(a=i.activeElement)==null?void 0:a.getAttribute("data-index"))!==t){var o;(o=e.current)==null||o.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}const Cc={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Ac=e=>e;let vn;function pr(){return vn===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?vn=CSS.supports("touch-action","none"):vn=!0),vn}function Pc(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:a=!1,isRtl:i=!1,marks:o=!1,max:s=100,min:l=0,name:f,onChange:c,onChangeCommitted:u,orientation:d="horizontal",ref:p,scale:h=Ac,step:m=1,tabIndex:v,value:O}=e,x=_.useRef(),[S,T]=_.useState(-1),[P,I]=_.useState(-1),[b,F]=_.useState(!1),y=_.useRef(0),[E,z]=ec({controlled:O,default:n??l,name:"Slider"}),$=c&&((w,j,R)=>{const M=w.nativeEvent||w,ae=new M.constructor(M.type,M);Object.defineProperty(ae,"target",{writable:!0,value:{value:j,name:f}}),c(ae,j,R)}),W=Array.isArray(E);let L=W?E.slice().sort(io):[E];L=L.map(w=>Tt(w,l,s));const Ie=o===!0&&m!==null?[...Array(Math.floor((s-l)/m)+1)].map((w,j)=>({value:l+m*j})):o||[],Se=Ie.map(w=>w.value),{isFocusVisibleRef:en,onBlur:Oe,onFocus:Ce,ref:Kn}=sc(),[tn,rt]=_.useState(-1),ce=_.useRef(),nn=Ir(Kn,ce),rn=Ir(p,nn),an=w=>j=>{var R;const M=Number(j.currentTarget.getAttribute("data-index"));Ce(j),en.current===!0&&rt(M),I(M),w==null||(R=w.onFocus)==null||R.call(w,j)},Gn=w=>j=>{var R;Oe(j),en.current===!1&&rt(-1),I(-1),w==null||(R=w.onBlur)==null||R.call(w,j)};no(()=>{if(r&&ce.current.contains(document.activeElement)){var w;(w=document.activeElement)==null||w.blur()}},[r]),r&&S!==-1&&T(-1),r&&tn!==-1&&rt(-1);const at=w=>j=>{var R;(R=w.onChange)==null||R.call(w,j);const M=Number(j.currentTarget.getAttribute("data-index")),ae=L[M],de=Se.indexOf(ae);let X=j.target.valueAsNumber;if(Ie&&m==null&&(X=X<ae?Se[de-1]:Se[de+1]),X=Tt(X,l,s),Ie&&m==null){const ue=Se.indexOf(L[M]);X=X<L[M]?Se[ue-1]:Se[ue+1]}if(W){a&&(X=Tt(X,L[M-1]||-1/0,L[M+1]||1/0));const ue=X;X=ei({values:L,newValue:X,index:M});let U=M;a||(U=X.indexOf(ue)),bn({sliderRef:ce,activeIndex:U})}z(X),rt(M),$&&$(j,X,M),u&&u(j,X)},Ke=_.useRef();let it=d;i&&d==="horizontal"&&(it+="-reverse");const ot=({finger:w,move:j=!1})=>{const{current:R}=ce,{width:M,height:ae,bottom:de,left:X}=R.getBoundingClientRect();let ue;it.indexOf("vertical")===0?ue=(de-w.y)/ae:ue=(w.x-X)/M,it.indexOf("-reverse")!==-1&&(ue=1-ue);let U;if(U=wc(ue,l,s),m)U=Oc(U,m,l);else{const Pt=Ja(Se,U);U=Se[Pt]}U=Tt(U,l,s);let Ae=0;if(W){j?Ae=Ke.current:Ae=Ja(L,U),a&&(U=Tt(U,L[Ae-1]||-1/0,L[Ae+1]||1/0));const Pt=U;U=ei({values:L,newValue:U,index:Ae}),a&&j||(Ae=U.indexOf(Pt),Ke.current=Ae)}return{newValue:U,activeIndex:Ae}},Ge=dr(w=>{const j=gn(w,x);if(!j)return;if(y.current+=1,w.type==="mousemove"&&w.buttons===0){ye(w);return}const{newValue:R,activeIndex:M}=ot({finger:j,move:!0});bn({sliderRef:ce,activeIndex:M,setActive:T}),z(R),!b&&y.current>kc&&F(!0),$&&R!==E&&$(w,R,M)}),ye=dr(w=>{const j=gn(w,x);if(F(!1),!j)return;const{newValue:R}=ot({finger:j,move:!0});T(-1),w.type==="touchend"&&I(-1),u&&u(w,R),x.current=void 0,G()}),Q=dr(w=>{if(r)return;pr()||w.preventDefault();const j=w.changedTouches[0];j!=null&&(x.current=j.identifier);const R=gn(w,x);if(R!==!1){const{newValue:ae,activeIndex:de}=ot({finger:R});bn({sliderRef:ce,activeIndex:de,setActive:T}),z(ae),$&&$(w,ae,de)}y.current=0;const M=wn(ce.current);M.addEventListener("touchmove",Ge),M.addEventListener("touchend",ye)}),G=_.useCallback(()=>{const w=wn(ce.current);w.removeEventListener("mousemove",Ge),w.removeEventListener("mouseup",ye),w.removeEventListener("touchmove",Ge),w.removeEventListener("touchend",ye)},[ye,Ge]);_.useEffect(()=>{const{current:w}=ce;return w.addEventListener("touchstart",Q,{passive:pr()}),()=>{w.removeEventListener("touchstart",Q,{passive:pr()}),G()}},[G,Q]),_.useEffect(()=>{r&&G()},[r,G]);const st=w=>j=>{var R;if((R=w.onMouseDown)==null||R.call(w,j),r||j.defaultPrevented||j.button!==0)return;j.preventDefault();const M=gn(j,x);if(M!==!1){const{newValue:de,activeIndex:X}=ot({finger:M});bn({sliderRef:ce,activeIndex:X,setActive:T}),z(de),$&&$(j,de,X)}y.current=0;const ae=wn(ce.current);ae.addEventListener("mousemove",Ge),ae.addEventListener("mouseup",ye)},Xe=Qa(W?L[0]:l,l,s),qe=Qa(L[L.length-1],l,s)-Xe,Xn=(w={})=>{const j={onMouseDown:st(w||{})},R=k({},w,j);return k({ref:rn},R)},se=w=>j=>{var R;(R=w.onMouseOver)==null||R.call(w,j);const M=Number(j.currentTarget.getAttribute("data-index"));I(M)},lt=w=>j=>{var R;(R=w.onMouseLeave)==null||R.call(w,j),I(-1)};return{active:S,axis:it,axisProps:Cc,dragging:b,focusedThumbIndex:tn,getHiddenInputProps:(w={})=>{var j;const R={onChange:at(w||{}),onFocus:an(w||{}),onBlur:Gn(w||{})},M=k({},w,R);return k({tabIndex:v,"aria-labelledby":t,"aria-orientation":d,"aria-valuemax":h(s),"aria-valuemin":h(l),name:f,type:"range",min:e.min,max:e.max,step:(j=e.step)!=null?j:void 0,disabled:r},M,{style:k({},cc,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Xn,getThumbProps:(w={})=>{const j={onMouseOver:se(w||{}),onMouseLeave:lt(w||{})};return k({},w,j)},marks:Ie,open:P,range:W,trackLeap:qe,trackOffset:Xe,values:L}}function oo(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Tc=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ec=oo(function(e){return Tc.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function jc(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _c(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ic=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_c(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=jc(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),oe="-ms-",jn="-moz-",D="-webkit-",so="comm",Jr="rule",Qr="decl",$c="@import",lo="@keyframes",Nc=Math.abs,Mn=String.fromCharCode,Rc=Object.assign;function Lc(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function co(e){return e.trim()}function Mc(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Nr(e,t){return e.indexOf(t)}function ie(e,t){return e.charCodeAt(t)|0}function Wt(e,t,n){return e.slice(t,n)}function Pe(e){return e.length}function ea(e){return e.length}function yn(e,t){return t.push(e),e}function zc(e,t){return e.map(t).join("")}var zn=1,Ot=1,uo=0,fe=0,te=0,At="";function Fn(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:zn,column:Ot,length:o,return:""}}function Et(e,t){return Rc(Fn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fc(){return te}function Dc(){return te=fe>0?ie(At,--fe):0,Ot--,te===10&&(Ot=1,zn--),te}function ge(){return te=fe<uo?ie(At,fe++):0,Ot++,te===10&&(Ot=1,zn++),te}function _e(){return ie(At,fe)}function Sn(){return fe}function Zt(e,t){return Wt(At,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fo(e){return zn=Ot=1,uo=Pe(At=e),fe=0,[]}function mo(e){return At="",e}function On(e){return co(Zt(fe-1,Rr(e===91?e+2:e===40?e+1:e)))}function Uc(e){for(;(te=_e())&&te<33;)ge();return Yt(e)>2||Yt(te)>3?"":" "}function Hc(e,t){for(;--t&&ge()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Zt(e,Sn()+(t<6&&_e()==32&&ge()==32))}function Rr(e){for(;ge();)switch(te){case e:return fe;case 34:case 39:e!==34&&e!==39&&Rr(te);break;case 40:e===41&&Rr(e);break;case 92:ge();break}return fe}function Bc(e,t){for(;ge()&&e+te!==47+10;)if(e+te===42+42&&_e()===47)break;return"/*"+Zt(t,fe-1)+"*"+Mn(e===47?e:ge())}function Wc(e){for(;!Yt(_e());)ge();return Zt(e,fe)}function Yc(e){return mo(Cn("",null,null,null,[""],e=fo(e),0,[0],e))}function Cn(e,t,n,r,a,i,o,s,l){for(var f=0,c=0,u=o,d=0,p=0,h=0,m=1,v=1,O=1,x=0,S="",T=a,P=i,I=r,b=S;v;)switch(h=x,x=ge()){case 40:if(h!=108&&ie(b,u-1)==58){Nr(b+=H(On(x),"&","&\f"),"&\f")!=-1&&(O=-1);break}case 34:case 39:case 91:b+=On(x);break;case 9:case 10:case 13:case 32:b+=Uc(h);break;case 92:b+=Hc(Sn()-1,7);continue;case 47:switch(_e()){case 42:case 47:yn(Vc(Bc(ge(),Sn()),t,n),l);break;default:b+="/"}break;case 123*m:s[f++]=Pe(b)*O;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+c:p>0&&Pe(b)-u&&yn(p>32?ni(b+";",r,n,u-1):ni(H(b," ","")+";",r,n,u-2),l);break;case 59:b+=";";default:if(yn(I=ti(b,t,n,f,c,a,s,S,T=[],P=[],u),i),x===123)if(c===0)Cn(b,t,I,I,T,i,u,s,P);else switch(d===99&&ie(b,3)===110?100:d){case 100:case 109:case 115:Cn(e,I,I,r&&yn(ti(e,I,I,0,0,a,s,S,a,T=[],u),P),a,P,u,s,r?T:P);break;default:Cn(b,I,I,I,[""],P,0,s,P)}}f=c=p=0,m=O=1,S=b="",u=o;break;case 58:u=1+Pe(b),p=h;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&Dc()==125)continue}switch(b+=Mn(x),x*m){case 38:O=c>0?1:(b+="\f",-1);break;case 44:s[f++]=(Pe(b)-1)*O,O=1;break;case 64:_e()===45&&(b+=On(ge())),d=_e(),c=u=Pe(S=b+=Wc(Sn())),x++;break;case 45:h===45&&Pe(b)==2&&(m=0)}}return i}function ti(e,t,n,r,a,i,o,s,l,f,c){for(var u=a-1,d=a===0?i:[""],p=ea(d),h=0,m=0,v=0;h<r;++h)for(var O=0,x=Wt(e,u+1,u=Nc(m=o[h])),S=e;O<p;++O)(S=co(m>0?d[O]+" "+x:H(x,/&\f/g,d[O])))&&(l[v++]=S);return Fn(e,t,n,a===0?Jr:s,l,f,c)}function Vc(e,t,n){return Fn(e,t,n,so,Mn(Fc()),Wt(e,2,-2),0)}function ni(e,t,n,r){return Fn(e,t,n,Qr,Wt(e,0,r),Wt(e,r+1,-1),r)}function xt(e,t){for(var n="",r=ea(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Kc(e,t,n,r){switch(e.type){case $c:case Qr:return e.return=e.return||e.value;case so:return"";case lo:return e.return=e.value+"{"+xt(e.children,r)+"}";case Jr:e.value=e.props.join(",")}return Pe(n=xt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gc(e){var t=ea(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Xc(e){return function(t){t.root||(t=t.return)&&e(t)}}var qc=function(t,n,r){for(var a=0,i=0;a=i,i=_e(),a===38&&i===12&&(n[r]=1),!Yt(i);)ge();return Zt(t,fe)},Zc=function(t,n){var r=-1,a=44;do switch(Yt(a)){case 0:a===38&&_e()===12&&(n[r]=1),t[r]+=qc(fe-1,n,r);break;case 2:t[r]+=On(a);break;case 4:if(a===44){t[++r]=_e()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Mn(a)}while(a=ge());return t},Jc=function(t,n){return mo(Zc(fo(t),n))},ri=new WeakMap,Qc=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ri.get(r))&&!a){ri.set(t,!0);for(var i=[],o=Jc(n,i),s=r.props,l=0,f=0;l<o.length;l++)for(var c=0;c<s.length;c++,f++)t.props[f]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},eu=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function po(e,t){switch(Lc(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+jn+e+oe+e+e;case 6828:case 4268:return D+e+oe+e+e;case 6165:return D+e+oe+"flex-"+e+e;case 5187:return D+e+H(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return D+e+oe+"flex-item-"+H(e,/flex-|-self/,"")+e;case 4675:return D+e+oe+"flex-line-pack"+H(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+oe+H(e,"shrink","negative")+e;case 5292:return D+e+oe+H(e,"basis","preferred-size")+e;case 6060:return D+"box-"+H(e,"-grow","")+D+e+oe+H(e,"grow","positive")+e;case 4554:return D+H(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+jn+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nr(e,"stretch")?po(H(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ie(e,t+1)!==115)break;case 6444:switch(ie(e,Pe(e)-3-(~Nr(e,"!important")&&10))){case 107:return H(e,":",":"+D)+e;case 101:return H(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(ie(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+oe+"$2box$3")+e}break;case 5936:switch(ie(e,t+11)){case 114:return D+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+oe+e+e}return e}var tu=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Qr:t.return=po(t.value,t.length);break;case lo:return xt([Et(t,{value:H(t.value,"@","@"+D)})],a);case Jr:if(t.length)return zc(t.props,function(i){switch(Mc(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xt([Et(t,{props:[H(i,/:(read-\w+)/,":"+jn+"$1")]})],a);case"::placeholder":return xt([Et(t,{props:[H(i,/:(plac\w+)/,":"+D+"input-$1")]}),Et(t,{props:[H(i,/:(plac\w+)/,":"+jn+"$1")]}),Et(t,{props:[H(i,/:(plac\w+)/,oe+"input-$1")]})],a)}return""})}},nu=[tu],ru=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var v=m.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var a=t.stylisPlugins||nu,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var v=m.getAttribute("data-emotion").split(" "),O=1;O<v.length;O++)i[v[O]]=!0;s.push(m)});var l,f=[Qc,eu];{var c,u=[Kc,Xc(function(m){c.insert(m)})],d=Gc(f.concat(a,u)),p=function(v){return xt(Yc(v),d)};l=function(v,O,x,S){c=x,p(v?v+"{"+O.styles+"}":O.styles),S&&(h.inserted[O.name]=!0)}}var h={key:n,sheet:new Ic({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return h.sheet.hydrate(s),h},au=!0;function iu(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var ho=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||au===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},ou=function(t,n,r){ho(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function su(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var lu={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cu=/[A-Z]|^ms/g,uu=/_EMO_([^_]+?)_([^]*?)_EMO_/g,go=function(t){return t.charCodeAt(1)===45},ai=function(t){return t!=null&&typeof t!="boolean"},hr=oo(function(e){return go(e)?e:e.replace(cu,"-$&").toLowerCase()}),ii=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(uu,function(r,a,i){return Te={name:a,styles:i,next:Te},a})}return lu[t]!==1&&!go(t)&&typeof n=="number"&&n!==0?n+"px":n};function Vt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Te={name:n.name,styles:n.styles,next:Te},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Te={name:r.name,styles:r.styles,next:Te},r=r.next;var a=n.styles+";";return a}return fu(e,t,n)}case"function":{if(e!==void 0){var i=Te,o=n(e);return Te=i,Vt(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function fu(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Vt(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":ai(o)&&(r+=hr(i)+":"+ii(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)ai(o[s])&&(r+=hr(i)+":"+ii(i,o[s])+";");else{var l=Vt(e,t,o);switch(i){case"animation":case"animationName":{r+=hr(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var oi=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Te,du=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Te=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Vt(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Vt(r,n,t[s]),a&&(i+=o[s]);oi.lastIndex=0;for(var l="",f;(f=oi.exec(i))!==null;)l+="-"+f[1];var c=su(i)+l;return{name:c,styles:i,next:Te}},mu=function(t){return t()},pu=ba["useInsertionEffect"]?ba["useInsertionEffect"]:!1,hu=pu||mu,bo=_.createContext(typeof HTMLElement<"u"?ru({key:"css"}):null);bo.Provider;var gu=function(t){return _.forwardRef(function(n,r){var a=_.useContext(bo);return t(n,a,r)})},bu=_.createContext({}),vu=Ec,yu=function(t){return t!=="theme"},si=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?vu:yu},li=function(t,n,r){var a;if(n){var i=n.shouldForwardProp;a=t.__emotion_forwardProp&&i?function(o){return t.__emotion_forwardProp(o)&&i(o)}:i}return typeof a!="function"&&r&&(a=t.__emotion_forwardProp),a},xu=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return ho(n,r,a),hu(function(){return ou(n,r,a)}),null},ku=function e(t,n){var r=t.__emotion_real===t,a=r&&t.__emotion_base||t,i,o;n!==void 0&&(i=n.label,o=n.target);var s=li(t,n,r),l=s||si(a),f=!l("as");return function(){var c=arguments,u=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&u.push("label:"+i+";"),c[0]==null||c[0].raw===void 0)u.push.apply(u,c);else{u.push(c[0][0]);for(var d=c.length,p=1;p<d;p++)u.push(c[p],c[0][p])}var h=gu(function(m,v,O){var x=f&&m.as||a,S="",T=[],P=m;if(m.theme==null){P={};for(var I in m)P[I]=m[I];P.theme=_.useContext(bu)}typeof m.className=="string"?S=iu(v.registered,T,m.className):m.className!=null&&(S=m.className+" ");var b=du(u.concat(T),v.registered,P);S+=v.key+"-"+b.name,o!==void 0&&(S+=" "+o);var F=f&&s===void 0?si(x):l,y={};for(var E in m)f&&E==="as"||F(E)&&(y[E]=m[E]);return y.className=S,y.ref=O,_.createElement(_.Fragment,null,_.createElement(xu,{cache:v,serialized:b,isStringTag:typeof x=="string"}),_.createElement(x,y))});return h.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=a,h.__emotion_styles=u,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+o}}),h.withComponent=function(m,v){return e(m,k({},n,v,{shouldForwardProp:li(h,v,!0)})).apply(void 0,u)},h}},wu=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Lr=ku.bind();wu.forEach(function(e){Lr[e]=Lr(e)});const Su=Lr;/**
 * @mui/styled-engine v5.11.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ou(e,t){return Su(e,t)}const Cu=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function Mt(e,t){return t?Ne(e,t,{clone:!1}):e}const ta={xs:0,sm:600,md:900,lg:1200,xl:1536},ci={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ta[e]}px)`};function ze(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||ci;return t.reduce((o,s,l)=>(o[i.up(i.keys[l])]=n(t[l]),o),{})}if(typeof t=="object"){const i=r.breakpoints||ci;return Object.keys(t).reduce((o,s)=>{if(Object.keys(i.values||ta).indexOf(s)!==-1){const l=i.up(s);o[l]=n(t[s],s)}else{const l=s;o[l]=t[l]}return o},{})}return n(t)}function Au(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,a)=>{const i=e.up(a);return r[i]={},r},{}))||{}}function Pu(e,t){return e.reduce((n,r)=>{const a=n[r];return(!a||Object.keys(a).length===0)&&delete n[r],n},t)}function Dn(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((a,i)=>a&&a[i]?a[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,a)=>r&&r[a]!=null?r[a]:null,e)}function _n(e,t,n,r=n){let a;return typeof e=="function"?a=e(n):Array.isArray(e)?a=e[n]||r:a=Dn(e,n)||r,t&&(a=t(a,r,e)),a}function B(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:a}=e,i=o=>{if(o[t]==null)return null;const s=o[t],l=o.theme,f=Dn(l,r)||{};return ze(o,s,u=>{let d=_n(f,a,u);return u===d&&typeof u=="string"&&(d=_n(f,a,`${t}${u==="default"?"":he(u)}`,u)),n===!1?d:{[n]:d}})};return i.propTypes={},i.filterProps=[t],i}function Un(...e){const t=e.reduce((r,a)=>(a.filterProps.forEach(i=>{r[i]=a}),r),{}),n=r=>Object.keys(r).reduce((a,i)=>t[i]?Mt(a,t[i](r)):a,{});return n.propTypes={},n.filterProps=e.reduce((r,a)=>r.concat(a.filterProps),[]),n}function Tu(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const Eu={m:"margin",p:"padding"},ju={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},ui={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},_u=Tu(e=>{if(e.length>2)if(ui[e])e=ui[e];else return[e];const[t,n]=e.split(""),r=Eu[t],a=ju[n]||"";return Array.isArray(a)?a.map(i=>r+i):[r+a]}),na=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ra=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...na,...ra];function Jt(e,t,n,r){var a;const i=(a=Dn(e,t,!1))!=null?a:n;return typeof i=="number"?o=>typeof o=="string"?o:i*o:Array.isArray(i)?o=>typeof o=="string"?o:i[o]:typeof i=="function"?i:()=>{}}function vo(e){return Jt(e,"spacing",8)}function Qt(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Iu(e,t){return n=>e.reduce((r,a)=>(r[a]=Qt(t,n),r),{})}function $u(e,t,n,r){if(t.indexOf(n)===-1)return null;const a=_u(n),i=Iu(a,r),o=e[n];return ze(e,o,i)}function yo(e,t){const n=vo(e.theme);return Object.keys(e).map(r=>$u(e,t,r,n)).reduce(Mt,{})}function q(e){return yo(e,na)}q.propTypes={};q.filterProps=na;function Z(e){return yo(e,ra)}Z.propTypes={};Z.filterProps=ra;function Ee(e){return typeof e!="number"?e:`${e}px solid`}const Nu=B({prop:"border",themeKey:"borders",transform:Ee}),Ru=B({prop:"borderTop",themeKey:"borders",transform:Ee}),Lu=B({prop:"borderRight",themeKey:"borders",transform:Ee}),Mu=B({prop:"borderBottom",themeKey:"borders",transform:Ee}),zu=B({prop:"borderLeft",themeKey:"borders",transform:Ee}),Fu=B({prop:"borderColor",themeKey:"palette"}),Du=B({prop:"borderTopColor",themeKey:"palette"}),Uu=B({prop:"borderRightColor",themeKey:"palette"}),Hu=B({prop:"borderBottomColor",themeKey:"palette"}),Bu=B({prop:"borderLeftColor",themeKey:"palette"}),Hn=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Jt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Qt(t,r)});return ze(e,e.borderRadius,n)}return null};Hn.propTypes={};Hn.filterProps=["borderRadius"];Un(Nu,Ru,Lu,Mu,zu,Fu,Du,Uu,Hu,Bu,Hn);const Bn=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Jt(e.theme,"spacing",8),n=r=>({gap:Qt(t,r)});return ze(e,e.gap,n)}return null};Bn.propTypes={};Bn.filterProps=["gap"];const Wn=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Jt(e.theme,"spacing",8),n=r=>({columnGap:Qt(t,r)});return ze(e,e.columnGap,n)}return null};Wn.propTypes={};Wn.filterProps=["columnGap"];const Yn=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Jt(e.theme,"spacing",8),n=r=>({rowGap:Qt(t,r)});return ze(e,e.rowGap,n)}return null};Yn.propTypes={};Yn.filterProps=["rowGap"];const Wu=B({prop:"gridColumn"}),Yu=B({prop:"gridRow"}),Vu=B({prop:"gridAutoFlow"}),Ku=B({prop:"gridAutoColumns"}),Gu=B({prop:"gridAutoRows"}),Xu=B({prop:"gridTemplateColumns"}),qu=B({prop:"gridTemplateRows"}),Zu=B({prop:"gridTemplateAreas"}),Ju=B({prop:"gridArea"});Un(Bn,Wn,Yn,Wu,Yu,Vu,Ku,Gu,Xu,qu,Zu,Ju);function kt(e,t){return t==="grey"?t:e}const Qu=B({prop:"color",themeKey:"palette",transform:kt}),ef=B({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:kt}),tf=B({prop:"backgroundColor",themeKey:"palette",transform:kt});Un(Qu,ef,tf);function pe(e){return e<=1&&e!==0?`${e*100}%`:e}const nf=B({prop:"width",transform:pe}),aa=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,a,i;return{maxWidth:((r=e.theme)==null||(a=r.breakpoints)==null||(i=a.values)==null?void 0:i[n])||ta[n]||pe(n)}};return ze(e,e.maxWidth,t)}return null};aa.filterProps=["maxWidth"];const rf=B({prop:"minWidth",transform:pe}),af=B({prop:"height",transform:pe}),of=B({prop:"maxHeight",transform:pe}),sf=B({prop:"minHeight",transform:pe});B({prop:"size",cssProperty:"width",transform:pe});B({prop:"size",cssProperty:"height",transform:pe});const lf=B({prop:"boxSizing"});Un(nf,aa,rf,af,of,sf,lf);const cf={border:{themeKey:"borders",transform:Ee},borderTop:{themeKey:"borders",transform:Ee},borderRight:{themeKey:"borders",transform:Ee},borderBottom:{themeKey:"borders",transform:Ee},borderLeft:{themeKey:"borders",transform:Ee},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Hn},color:{themeKey:"palette",transform:kt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:kt},backgroundColor:{themeKey:"palette",transform:kt},p:{style:Z},pt:{style:Z},pr:{style:Z},pb:{style:Z},pl:{style:Z},px:{style:Z},py:{style:Z},padding:{style:Z},paddingTop:{style:Z},paddingRight:{style:Z},paddingBottom:{style:Z},paddingLeft:{style:Z},paddingX:{style:Z},paddingY:{style:Z},paddingInline:{style:Z},paddingInlineStart:{style:Z},paddingInlineEnd:{style:Z},paddingBlock:{style:Z},paddingBlockStart:{style:Z},paddingBlockEnd:{style:Z},m:{style:q},mt:{style:q},mr:{style:q},mb:{style:q},ml:{style:q},mx:{style:q},my:{style:q},margin:{style:q},marginTop:{style:q},marginRight:{style:q},marginBottom:{style:q},marginLeft:{style:q},marginX:{style:q},marginY:{style:q},marginInline:{style:q},marginInlineStart:{style:q},marginInlineEnd:{style:q},marginBlock:{style:q},marginBlockStart:{style:q},marginBlockEnd:{style:q},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Bn},rowGap:{style:Yn},columnGap:{style:Wn},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:pe},maxWidth:{style:aa},minWidth:{transform:pe},height:{transform:pe},maxHeight:{transform:pe},minHeight:{transform:pe},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},ia=cf;function uf(...e){const t=e.reduce((r,a)=>r.concat(Object.keys(a)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function ff(e,t){return typeof e=="function"?e(t):e}function df(){function e(n,r,a,i){const o={[n]:r,theme:a},s=i[n];if(!s)return{[n]:r};const{cssProperty:l=n,themeKey:f,transform:c,style:u}=s;if(r==null)return null;const d=Dn(a,f)||{};return u?u(o):ze(o,r,h=>{let m=_n(d,c,h);return h===m&&typeof h=="string"&&(m=_n(d,c,`${n}${h==="default"?"":he(h)}`,h)),l===!1?m:{[l]:m}})}function t(n){var r;const{sx:a,theme:i={}}=n||{};if(!a)return null;const o=(r=i.unstable_sxConfig)!=null?r:ia;function s(l){let f=l;if(typeof l=="function")f=l(i);else if(typeof l!="object")return l;if(!f)return null;const c=Au(i.breakpoints),u=Object.keys(c);let d=c;return Object.keys(f).forEach(p=>{const h=ff(f[p],i);if(h!=null)if(typeof h=="object")if(o[p])d=Mt(d,e(p,h,i,o));else{const m=ze({theme:i},h,v=>({[p]:v}));uf(m,h)?d[p]=t({sx:h,theme:i}):d=Mt(d,m)}else d=Mt(d,e(p,h,i,o))}),Pu(u,d)}return Array.isArray(a)?a.map(s):s(a)}return t}const xo=df();xo.filterProps=["sx"];const oa=xo,mf=["values","unit","step"],pf=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>k({},n,{[r.key]:r.val}),{})};function hf(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,a=ve(e,mf),i=pf(t),o=Object.keys(i);function s(d){return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof t[d]=="number"?t[d]:d)-r/100}${n})`}function f(d,p){const h=o.indexOf(p);return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n}) and (max-width:${(h!==-1&&typeof t[o[h]]=="number"?t[o[h]]:p)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?f(d,o[o.indexOf(d)+1]):s(d)}function u(d){const p=o.indexOf(d);return p===0?s(o[1]):p===o.length-1?l(o[p]):f(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return k({keys:o,values:i,up:s,down:l,between:f,only:c,not:u,unit:n},a)}const gf={borderRadius:4},bf=gf;function vf(e=8){if(e.mui)return e;const t=vo({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const o=t(i);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const yf=["breakpoints","palette","spacing","shape"];function sa(e={},...t){const{breakpoints:n={},palette:r={},spacing:a,shape:i={}}=e,o=ve(e,yf),s=hf(n),l=vf(a);let f=Ne({breakpoints:s,direction:"ltr",components:{},palette:k({mode:"light"},r),spacing:l,shape:k({},bf,i)},o);return f=t.reduce((c,u)=>Ne(c,u),f),f.unstable_sxConfig=k({},ia,o?.unstable_sxConfig),f.unstable_sx=function(u){return oa({sx:u,theme:this})},f}const xf=_.createContext(null),kf=xf;function wf(){return _.useContext(kf)}function Sf(e){return Object.keys(e).length===0}function Of(e=null){const t=wf();return!t||Sf(t)?e:t}const Cf=sa();function ko(e=Cf){return Of(e)}const Af=["variant"];function fi(e){return e.length===0}function wo(e){const{variant:t}=e,n=ve(e,Af);let r=t||"";return Object.keys(n).sort().forEach(a=>{a==="color"?r+=fi(r)?e[a]:he(e[a]):r+=`${fi(r)?a:he(a)}${he(e[a].toString())}`}),r}const Pf=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],Tf=["theme"],Ef=["theme"];function jt(e){return Object.keys(e).length===0}function jf(e){return typeof e=="string"&&e.charCodeAt(0)>96}const _f=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,If=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(a=>{const i=wo(a.props);r[i]=a.style}),r},$f=(e,t,n,r)=>{var a,i;const{ownerState:o={}}=e,s=[],l=n==null||(a=n.components)==null||(i=a[r])==null?void 0:i.variants;return l&&l.forEach(f=>{let c=!0;Object.keys(f.props).forEach(u=>{o[u]!==f.props[u]&&e[u]!==f.props[u]&&(c=!1)}),c&&s.push(t[wo(f.props)])}),s};function zt(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Nf=sa();function Rf(e={}){const{defaultTheme:t=Nf,rootShouldForwardProp:n=zt,slotShouldForwardProp:r=zt}=e,a=i=>{const o=jt(i.theme)?t:i.theme;return oa(k({},i,{theme:o}))};return a.__mui_systemSx=!0,(i,o={})=>{Cu(i,S=>S.filter(T=>!(T!=null&&T.__mui_systemSx)));const{name:s,slot:l,skipVariantsResolver:f,skipSx:c,overridesResolver:u}=o,d=ve(o,Pf),p=f!==void 0?f:l&&l!=="Root"||!1,h=c||!1;let m,v=zt;l==="Root"?v=n:l?v=r:jf(i)&&(v=void 0);const O=Ou(i,k({shouldForwardProp:v,label:m},d)),x=(S,...T)=>{const P=T?T.map(y=>typeof y=="function"&&y.__emotion_real!==y?E=>{let{theme:z}=E,$=ve(E,Tf);return y(k({theme:jt(z)?t:z},$))}:y):[];let I=S;s&&u&&P.push(y=>{const E=jt(y.theme)?t:y.theme,z=_f(s,E);if(z){const $={};return Object.entries(z).forEach(([W,L])=>{$[W]=typeof L=="function"?L(k({},y,{theme:E})):L}),u(y,$)}return null}),s&&!p&&P.push(y=>{const E=jt(y.theme)?t:y.theme;return $f(y,If(s,E),E,s)}),h||P.push(a);const b=P.length-T.length;if(Array.isArray(S)&&b>0){const y=new Array(b).fill("");I=[...S,...y],I.raw=[...S.raw,...y]}else typeof S=="function"&&S.__emotion_real!==S&&(I=y=>{let{theme:E}=y,z=ve(y,Ef);return S(k({theme:jt(E)?t:E},z))});return O(I,...P)};return O.withConfig&&(x.withConfig=O.withConfig),x}}function Lf(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:ro(t.components[n].defaultProps,r)}function Mf({props:e,name:t,defaultTheme:n}){const r=ko(n);return Lf({theme:r,name:t,props:e})}function la(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function zf(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,a)=>a<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function tt(e){if(e.type)return e;if(e.charAt(0)==="#")return tt(zf(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(St(9,e));let r=e.substring(t+1,e.length-1),a;if(n==="color"){if(r=r.split(" "),a=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(St(10,a))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:a}}function Vn(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((a,i)=>i<3?parseInt(a,10):a):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function Ff(e){e=tt(e);const{values:t}=e,n=t[0],r=t[1]/100,a=t[2]/100,i=r*Math.min(a,1-a),o=(f,c=(f+n/30)%12)=>a-i*Math.max(Math.min(c-3,9-c,1),-1);let s="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type==="hsla"&&(s+="a",l.push(t[3])),Vn({type:s,values:l})}function di(e){e=tt(e);let t=e.type==="hsl"||e.type==="hsla"?tt(Ff(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Df(e,t){const n=di(e),r=di(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function mi(e,t){return e=tt(e),t=la(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Vn(e)}function So(e,t){if(e=tt(e),t=la(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Vn(e)}function Oo(e,t){if(e=tt(e),t=la(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Vn(e)}function Uf(e,t){return k({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Hf={black:"#000",white:"#fff"},Kt=Hf,Bf={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Wf=Bf,Yf={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},ct=Yf,Vf={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ut=Vf,Kf={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},_t=Kf,Gf={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ft=Gf,Xf={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},dt=Xf,qf={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},mt=qf,Zf=["mode","contrastThreshold","tonalOffset"],pi={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Kt.white,default:Kt.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},gr={text:{primary:Kt.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Kt.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function hi(e,t,n,r){const a=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Oo(e.main,a):t==="dark"&&(e.dark=So(e.main,i)))}function Jf(e="light"){return e==="dark"?{main:ft[200],light:ft[50],dark:ft[400]}:{main:ft[700],light:ft[400],dark:ft[800]}}function Qf(e="light"){return e==="dark"?{main:ct[200],light:ct[50],dark:ct[400]}:{main:ct[500],light:ct[300],dark:ct[700]}}function ed(e="light"){return e==="dark"?{main:ut[500],light:ut[300],dark:ut[700]}:{main:ut[700],light:ut[400],dark:ut[800]}}function td(e="light"){return e==="dark"?{main:dt[400],light:dt[300],dark:dt[700]}:{main:dt[700],light:dt[500],dark:dt[900]}}function nd(e="light"){return e==="dark"?{main:mt[400],light:mt[300],dark:mt[700]}:{main:mt[800],light:mt[500],dark:mt[900]}}function rd(e="light"){return e==="dark"?{main:_t[400],light:_t[300],dark:_t[700]}:{main:"#ed6c02",light:_t[500],dark:_t[900]}}function ad(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,a=ve(e,Zf),i=e.primary||Jf(t),o=e.secondary||Qf(t),s=e.error||ed(t),l=e.info||td(t),f=e.success||nd(t),c=e.warning||rd(t);function u(m){return Df(m,gr.text.primary)>=n?gr.text.primary:pi.text.primary}const d=({color:m,name:v,mainShade:O=500,lightShade:x=300,darkShade:S=700})=>{if(m=k({},m),!m.main&&m[O]&&(m.main=m[O]),!m.hasOwnProperty("main"))throw new Error(St(11,v?` (${v})`:"",O));if(typeof m.main!="string")throw new Error(St(12,v?` (${v})`:"",JSON.stringify(m.main)));return hi(m,"light",x,r),hi(m,"dark",S,r),m.contrastText||(m.contrastText=u(m.main)),m},p={dark:gr,light:pi};return Ne(k({common:k({},Kt),mode:t,primary:d({color:i,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:s,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:f,name:"success"}),grey:Wf,contrastThreshold:n,getContrastText:u,augmentColor:d,tonalOffset:r},p[t]),a)}const id=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function od(e){return Math.round(e*1e5)/1e5}const gi={textTransform:"uppercase"},bi='"Roboto", "Helvetica", "Arial", sans-serif';function sd(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=bi,fontSize:a=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:f=16,allVariants:c,pxToRem:u}=n,d=ve(n,id),p=a/14,h=u||(O=>`${O/f*p}rem`),m=(O,x,S,T,P)=>k({fontFamily:r,fontWeight:O,fontSize:h(x),lineHeight:S},r===bi?{letterSpacing:`${od(T/x)}em`}:{},P,c),v={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(s,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(s,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(s,14,1.75,.4,gi),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,gi)};return Ne(k({htmlFontSize:f,pxToRem:h,fontFamily:r,fontSize:a,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:l},v),d,{clone:!1})}const ld=.2,cd=.14,ud=.12;function K(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ld})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cd})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ud})`].join(",")}const fd=["none",K(0,2,1,-1,0,1,1,0,0,1,3,0),K(0,3,1,-2,0,2,2,0,0,1,5,0),K(0,3,3,-2,0,3,4,0,0,1,8,0),K(0,2,4,-1,0,4,5,0,0,1,10,0),K(0,3,5,-1,0,5,8,0,0,1,14,0),K(0,3,5,-1,0,6,10,0,0,1,18,0),K(0,4,5,-2,0,7,10,1,0,2,16,1),K(0,5,5,-3,0,8,10,1,0,3,14,2),K(0,5,6,-3,0,9,12,1,0,3,16,2),K(0,6,6,-3,0,10,14,1,0,4,18,3),K(0,6,7,-4,0,11,15,1,0,4,20,3),K(0,7,8,-4,0,12,17,2,0,5,22,4),K(0,7,8,-4,0,13,19,2,0,5,24,4),K(0,7,9,-4,0,14,21,2,0,5,26,4),K(0,8,9,-5,0,15,22,2,0,6,28,5),K(0,8,10,-5,0,16,24,2,0,6,30,5),K(0,8,11,-5,0,17,26,2,0,6,32,5),K(0,9,11,-5,0,18,28,2,0,7,34,6),K(0,9,12,-6,0,19,29,2,0,7,36,6),K(0,10,13,-6,0,20,31,3,0,8,38,7),K(0,10,13,-6,0,21,33,3,0,8,40,7),K(0,10,14,-6,0,22,35,3,0,8,42,7),K(0,11,14,-7,0,23,36,3,0,9,44,8),K(0,11,15,-7,0,24,38,3,0,9,46,8)],dd=fd,md=["duration","easing","delay"],pd={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},hd={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function vi(e){return`${Math.round(e)}ms`}function gd(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function bd(e){const t=k({},pd,e.easing),n=k({},hd,e.duration);return k({getAutoHeightDuration:gd,create:(a=["all"],i={})=>{const{duration:o=n.standard,easing:s=t.easeInOut,delay:l=0}=i;return ve(i,md),(Array.isArray(a)?a:[a]).map(f=>`${f} ${typeof o=="string"?o:vi(o)} ${s} ${typeof l=="string"?l:vi(l)}`).join(",")}},e,{easing:t,duration:n})}const vd={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},yd=vd,xd=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function kd(e={},...t){const{mixins:n={},palette:r={},transitions:a={},typography:i={}}=e,o=ve(e,xd);if(e.vars)throw new Error(St(18));const s=ad(r),l=sa(e);let f=Ne(l,{mixins:Uf(l.breakpoints,n),palette:s,shadows:dd.slice(),typography:sd(s,i),transitions:bd(a),zIndex:k({},yd)});return f=Ne(f,o),f=t.reduce((c,u)=>Ne(c,u),f),f.unstable_sxConfig=k({},ia,o?.unstable_sxConfig),f.unstable_sx=function(u){return oa({sx:u,theme:this})},f}const wd=kd(),ca=wd;function Sd({props:e,name:t}){return Mf({props:e,name:t,defaultTheme:ca})}const Od=e=>zt(e)&&e!=="classes",Co=zt,Cd=Rf({defaultTheme:ca,rootShouldForwardProp:Od}),nt=Cd;function Ad(){return ko(ca)}const Pd=e=>!e||!Lt(e),Td=Pd;function Ed(e){return ao("MuiSlider",e)}const jd=hc("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),we=jd,_d=e=>{const{open:t}=e;return{offset:Be(t&&we.valueLabelOpen),circle:we.valueLabelCircle,label:we.valueLabelLabel}};function Id(e){const{children:t,className:n,value:r}=e,a=_d(e);return t?_.cloneElement(t,{className:Be(t.props.className)},g.jsxs(_.Fragment,{children:[t.props.children,g.jsx("span",{className:Be(a.offset,n),"aria-hidden":!0,children:g.jsx("span",{className:a.circle,children:g.jsx("span",{className:a.label,children:r})})})]})):null}const $d=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],yi=(e,t,n)=>(e-t)*100/(n-t);function xi(e){return e}const Nd=nt("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${he(n.color)}`],n.size!=="medium"&&t[`size${he(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>k({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&k({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&k({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${we.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${we.dragging}`]:{[`& .${we.thumb}, & .${we.track}`]:{transition:"none"}}})),Rd=nt("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>k({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),Ld=nt("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?Oo(e.palette[t.color].main,.62):So(e.palette[t.color].main,.5);return k({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),Md=nt("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${he(n.color)}`],n.size!=="medium"&&t[`thumbSize${he(n.size)}`]]}})(({theme:e,ownerState:t})=>k({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":k({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${we.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:mi(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${we.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:mi(e.palette[t.color].main,.16)}`},[`&.${we.disabled}`]:{"&:hover":{boxShadow:"none"}}})),zd=nt(Id,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>k({[`&.${we.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Fd=nt("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Co(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>k({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Dd=nt("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Co(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>k({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),Ud=e=>{const{disabled:t,dragging:n,marked:r,orientation:a,track:i,classes:o,color:s,size:l}=e,f={root:["root",t&&"disabled",n&&"dragging",r&&"marked",a==="vertical"&&"vertical",i==="inverted"&&"trackInverted",i===!1&&"trackFalse",s&&`color${he(s)}`,l&&`size${he(l)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",l&&`thumbSize${he(l)}`,s&&`thumbColor${he(s)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return uc(f,Ed,o)},Hd=({children:e})=>e,Bd=_.forwardRef(function(t,n){var r,a,i,o,s,l,f,c,u,d,p,h,m,v,O,x,S,T,P,I,b,F,y,E;const z=Sd({props:t,name:"MuiSlider"}),W=Ad().direction==="rtl",{"aria-label":L,"aria-valuetext":Ie,"aria-labelledby":Se,component:en="span",components:Oe={},componentsProps:Ce={},color:Kn="primary",classes:tn,className:rt,disableSwap:ce=!1,disabled:nn=!1,getAriaLabel:rn,getAriaValueText:an,marks:Gn=!1,max:at=100,min:Ke=0,orientation:it="horizontal",size:ot="medium",step:Ge=1,scale:ye=xi,slotProps:Q,slots:G,track:st="normal",valueLabelDisplay:Xe="off",valueLabelFormat:qe=xi}=z,Xn=ve(z,$d),se=k({},z,{isRtl:W,max:at,min:Ke,classes:tn,disabled:nn,disableSwap:ce,orientation:it,marks:Gn,color:Kn,size:ot,step:Ge,scale:ye,track:st,valueLabelDisplay:Xe,valueLabelFormat:qe}),{axisProps:lt,getRootProps:ua,getHiddenInputProps:fa,getThumbProps:w,open:j,active:R,axis:M,focusedThumbIndex:ae,range:de,dragging:X,marks:ue,values:U,trackOffset:Ae,trackLeap:Pt}=Pc(k({},se,{ref:n}));se.marked=ue.length>0&&ue.some(ee=>ee.label),se.dragging=X,se.focusedThumbIndex=ae;const xe=Ud(se),qn=(r=(a=G?.root)!=null?a:Oe.Root)!=null?r:Nd,da=(i=(o=G?.rail)!=null?o:Oe.Rail)!=null?i:Rd,ma=(s=(l=G?.track)!=null?l:Oe.Track)!=null?s:Ld,pa=(f=(c=G?.thumb)!=null?c:Oe.Thumb)!=null?f:Md,ha=(u=(d=G?.valueLabel)!=null?d:Oe.ValueLabel)!=null?u:zd,Zn=(p=(h=G?.mark)!=null?h:Oe.Mark)!=null?p:Fd,Jn=(m=(v=G?.markLabel)!=null?v:Oe.MarkLabel)!=null?m:Dd,ga=(O=(x=G?.input)!=null?x:Oe.Input)!=null?O:"input",Qn=(S=Q?.root)!=null?S:Ce.root,Ao=(T=Q?.rail)!=null?T:Ce.rail,er=(P=Q?.track)!=null?P:Ce.track,tr=(I=Q?.thumb)!=null?I:Ce.thumb,nr=(b=Q?.valueLabel)!=null?b:Ce.valueLabel,Po=(F=Q?.mark)!=null?F:Ce.mark,To=(y=Q?.markLabel)!=null?y:Ce.markLabel,Eo=(E=Q?.input)!=null?E:Ce.input,jo=Ue({elementType:qn,getSlotProps:ua,externalSlotProps:Qn,externalForwardedProps:Xn,additionalProps:k({},Td(qn)&&{as:en}),ownerState:k({},se,Qn?.ownerState),className:[xe.root,rt]}),_o=Ue({elementType:da,externalSlotProps:Ao,ownerState:se,className:xe.rail}),Io=Ue({elementType:ma,externalSlotProps:er,additionalProps:{style:k({},lt[M].offset(Ae),lt[M].leap(Pt))},ownerState:k({},se,er?.ownerState),className:xe.track}),rr=Ue({elementType:pa,getSlotProps:w,externalSlotProps:tr,ownerState:k({},se,tr?.ownerState)}),$o=Ue({elementType:ha,externalSlotProps:nr,ownerState:k({},se,nr?.ownerState),className:xe.valueLabel}),ar=Ue({elementType:Zn,externalSlotProps:Po,ownerState:se,className:xe.mark}),ir=Ue({elementType:Jn,externalSlotProps:To,ownerState:se}),No=Ue({elementType:ga,getSlotProps:fa,externalSlotProps:Eo,ownerState:se});return g.jsxs(qn,k({},jo,{children:[g.jsx(da,k({},_o)),g.jsx(ma,k({},Io)),ue.filter(ee=>ee.value>=Ke&&ee.value<=at).map((ee,re)=>{const or=yi(ee.value,Ke,at),on=lt[M].offset(or);let $e;return st===!1?$e=U.indexOf(ee.value)!==-1:$e=st==="normal"&&(de?ee.value>=U[0]&&ee.value<=U[U.length-1]:ee.value<=U[0])||st==="inverted"&&(de?ee.value<=U[0]||ee.value>=U[U.length-1]:ee.value>=U[0]),g.jsxs(_.Fragment,{children:[g.jsx(Zn,k({"data-index":re},ar,!Lt(Zn)&&{markActive:$e},{style:k({},on,ar.style),className:Be(ar.className,$e&&xe.markActive)})),ee.label!=null?g.jsx(Jn,k({"aria-hidden":!0,"data-index":re},ir,!Lt(Jn)&&{markLabelActive:$e},{style:k({},on,ir.style),className:Be(xe.markLabel,ir.className,$e&&xe.markLabelActive),children:ee.label})):null]},re)}),U.map((ee,re)=>{const or=yi(ee,Ke,at),on=lt[M].offset(or),$e=Xe==="off"?Hd:ha;return g.jsx(_.Fragment,{children:g.jsx($e,k({},!Lt($e)&&{valueLabelFormat:qe,valueLabelDisplay:Xe,value:typeof qe=="function"?qe(ye(ee),re):qe,index:re,open:j===re||R===re||Xe==="on",disabled:nn},$o,{children:g.jsx(pa,k({"data-index":re,"data-focusvisible":ae===re},rr,{className:Be(xe.thumb,rr.className,R===re&&xe.active,ae===re&&xe.focusVisible),style:k({},on,{pointerEvents:ce&&R!==re?"none":void 0},rr.style),children:g.jsx(ga,k({"data-index":re,"aria-label":rn?rn(re):L,"aria-valuenow":ye(ee),"aria-labelledby":Se,"aria-valuetext":an?an(ye(ee),re):Ie,value:U[re]},No))}))}))},re)})]}))}),Wd=Bd;function Yd(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Mr=_,It=Yd(Mr);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zr=function(){return zr=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zr.apply(this,arguments)};function Vd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Kd(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Gd=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;Kd(Gd);function Xd(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var qd=function(e){var t=e.top,n=t===void 0?20:t,r=e.className,a=r===void 0?"":r,i=e.color,o=i===void 0?"black":i,s=e.smooth,l=s===void 0?!1:s,f=e.component,c=f===void 0?"":f,u=e.viewBox,d=u===void 0?"0 0 256 256":u,p=e.svgPath,h=p===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":p,m=e.width,v=m===void 0?"28":m,O=e.height,x=O===void 0?"28":O,S=Vd(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),T=Mr.useState(!1),P=T[0],I=T[1];return Mr.useEffect(function(){var b=function(){I(document.documentElement.scrollTop>=n)};return b(),document.addEventListener("scroll",b),function(){return document.removeEventListener("scroll",b)}},[n]),It.createElement(It.Fragment,null,P&&It.createElement("button",zr({className:"scroll-to-top "+a,onClick:function(){return Xd(l)},"aria-label":"Scroll to top"},S),c||It.createElement("svg",{width:v,height:x,fill:o,viewBox:d},It.createElement("path",{d:h}))))},Zd=qd;function tm({darkMode:e,title:t}){const[n,r]=le.useState(40),[a,i]=le.useState(!1),[o,s]=le.useState([]),[l,f]=le.useState([]),[c,u]=le.useState(!0);le.useState([]),le.useState([]),le.useState({});const[d,p]=le.useState(!0),[h,m]=le.useState([]),[v,O]=le.useState([]),x="https://caesar-chin-photography.s3.amazonaws.com";_.useEffect(()=>{fetch(`${x}/concert/index.json`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(y=>y.json()).then(y=>{let E=0;for(let z in y)fetch(`${x}/concert/${z}/keys.json`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then($=>$.json()).then($=>{E+=1;var W={[z]:{name:y[z],images_list:$}};E>=3?s(L=>[...L,W]):f(L=>[...L,W]),m(L=>[...L,W]),setTimeout(()=>{p(!1)},1e3)}).catch($=>console.error($))}).catch(y=>console.error(y))},[]),_.useEffect(()=>{window.innerWidth<770&&r(100)},[]),_.useEffect(()=>{O(o.map(()=>!1))},[o]);const S=async(y,E)=>{O(W=>{const L=[...W];return L[E]=!0,L});const z=`${x}/concert/${y}/${y}.zip`,$=document.createElement("a");$.href=z,$.download=`${y}.zip`,$.style.display="none",document.body.appendChild($),$.click(),document.body.removeChild($),setTimeout(()=>{O(W=>{const L=[...W];return L[E]=!1,L})},2e3)},T=()=>{console.log(l),console.log(o);for(let y=0;y<Math.min(3,l.length);y++)s(E=>[...E,l[y]]),f(E=>E.slice(1))},P=(y,E)=>{r(E)},I=()=>{i(!a)},b=()=>{r(30)},F=()=>{r(100)};return g.jsxs("div",{className:"h-full",children:[g.jsx(Zd,{className:"dark:bg-dark-grayish-red bg-sea-foam-green flex flex-row justify-center items-center shadow-none rounded-full"}),t==="streetlandscape"?g.jsxs("div",{className:"text-4xl whitespace-pre uppercase tracking-widest flex justify-center mb-12",children:[g.jsx("div",{children:"Street"}),g.jsx("div",{children:" & "}),g.jsx("div",{children:"Landscape"})]}):g.jsx("div",{className:"text-5xl uppercase tracking-widest flex justify-center mb-12",children:"Concert"}),g.jsxs("div",{className:"flex flex-row justify-between ",children:[g.jsx("button",{className:"cursor-pointer",onClick:I,children:g.jsx(me,{icon:Nl,className:`dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-3xl ${a&&"dark:!text-dark-grayish-red !text-sea-foam-green"}`})}),g.jsxs("div",{className:"flex flex-row justify-between items-center",children:[g.jsx(me,{icon:Ya,onClick:b,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-lg"}),g.jsx(Wd,{style:{width:"10rem",marginLeft:"1rem",marginRight:"1rem"},value:n,onChange:P,"aria-label":"resize",min:30,max:100,className:"dark:!text-dark-grayish-red !text-sea-foam-green"}),g.jsx(me,{icon:Ya,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-3xl",onClick:F})]})]}),g.jsx("div",{id:"expanded-menu",style:{transition:"all 0.5s ease-in-out",height:0},className:a?"transition-all duration-500 ease-in-out mt-4 h-32 w-full bg-white border-[2px] border-black border-solid rounded dark:border-[0px]":void 0,children:a?g.jsx("div",{className:"text-black",children:"This website is still in construction"}):g.jsx("div",{})}),g.jsxs("div",{children:[g.jsx("div",{className:`flex flex-col items-center justify-center mt-24 transition-opacity duration-1500 animate-pulse 
            ${d?"opacity-100 block":"opacity-0 hidden"}
            `,children:g.jsx("div",{className:"flex items-center justify-center space-x-2 animate-pulse",children:g.jsx("div",{className:"inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid dark:border-dark-grayish-red border-black border-r-transparent dark:border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:g.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})}),g.jsx("div",{children:o.map((y,E)=>{var z=y[Object.keys(y)[0]].name,$=[];let W=z.split(",");if(W.length>2){const Ie=z.indexOf(",",z.indexOf(",")+1);$=[z.slice(0,Ie),z.slice(Ie+1).trim()]}else W.length===2&&W[1].charAt(0)===" "&&($[0]=W[0],$[1]=W[1].trim());var L=y[Object.keys(y)[0]].images_list;return g.jsxs("div",{className:`${d?"opacity-0":"opacity-100"} transition-opacity duration-1000`,children:[g.jsxs("div",{className:"mt-8 flex flex-row w-auto justify-between items-center",children:[g.jsx("div",{className:"flex flex-row w-auto whitespace-pre items-center ml-4",children:g.jsxs("div",{className:"flex flex-row max-md:flex-col ",children:[g.jsx("div",{className:"uppercase text-lg",children:$[0]}),g.jsx("div",{className:"uppercase text-lg max-md:hidden",children:", "}),g.jsx("div",{className:"uppercase text-lg",children:$[1]})]})}),g.jsx("div",{className:"ml-4 flex flex-row w-full items-center before:flex-auto before:border-half before:content-[''] border-white before:mr-4 ",children:g.jsx("div",{className:"relative ",children:v[E]?g.jsxs("div",{className:"cursor-pointer flex flex-row items-center  transition-opacity duration-500 transition-visibility visible opacity-100 ease-in-out opacity-100 ease-in-out",children:[g.jsx("div",{className:"mr-2 max-md:hidden text-md",children:"THANK YOU"}),g.jsx(me,{icon:$l,className:"text-md max-md:text-2xl"})]}):g.jsxs("div",{className:"cursor-pointer flex flex-row items-center  transition-opacity duration-500 transition-visibility visible opacity-100 ease-in-out",onClick:()=>S(Object.keys(y)[0],E),children:[g.jsx("div",{className:"mr-2 max-md:hidden text-md",children:"DOWNLOAD COLLECTION"}),g.jsx(me,{icon:Qi,className:"text-md max-md:text-2xl"})]})})})]}),g.jsx("div",{className:d?"hidden":"block",children:g.jsx(Zl,{title:t,resizeValue:n,occasion:L})})]},E)})})]}),g.jsx("div",{children:d?g.jsx("div",{}):l.length>0&&c?g.jsx("div",{className:"mt-8 mb-12 text-center border-t-half border-white",children:g.jsx("div",{className:"text-2xl mt-4 dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer",onClick:T,children:"LOAD MORE"})}):g.jsx("div",{className:"mt-8 mb-12 text-center border-t-half border-white",children:g.jsx("div",{className:"text-2xl mt-4",children:"You've reached the end!"})})})]})}export{tm as default};
