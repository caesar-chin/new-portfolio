import{R as fe,r as $,a as ha}from"./index.f824fa59.js";import{j as g}from"./jsx-runtime.0209ad28.js";function ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ga(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function _o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ba(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Io(e,t,n){return t&&ba(e.prototype,t),n&&ba(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mr(e,t){return No(e)||Lo(e,t)||gi(e,t)||Mo()}function Kt(e){return $o(e)||Ro(e)||gi(e)||jo()}function $o(e){if(Array.isArray(e))return gr(e)}function No(e){if(Array.isArray(e))return e}function Ro(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lo(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function gi(e,t){if(e){if(typeof e=="string")return gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(e,t)}}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var va=function(){},zr={},bi={},vi=null,yi={mark:va,measure:va};try{typeof window<"u"&&(zr=window),typeof document<"u"&&(bi=document),typeof MutationObserver<"u"&&(vi=MutationObserver),typeof performance<"u"&&(yi=performance)}catch{}var zo=zr.navigator||{},ya=zo.userAgent,xa=ya===void 0?"":ya,Ye=zr,Y=bi,ka=vi,on=yi;Ye.document;var Fe=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",xi=~xa.indexOf("MSIE")||~xa.indexOf("Trident/"),sn,ln,cn,fn,un,Le="___FONT_AWESOME___",br=16,ki="fa",wi="svg-inline--fa",Qe="data-fa-i2svg",vr="data-fa-pseudo-element",Fo="data-fa-pseudo-element-pending",Fr="data-prefix",Dr="data-icon",wa="fontawesome-i2svg",Do="async",Bo=["HTML","HEAD","STYLE","SCRIPT"],Si=function(){try{return!0}catch{return!1}}(),W="classic",J="sharp",Br=[W,J];function Gt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var zt=Gt((sn={},ne(sn,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(sn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),sn)),Ft=Gt((ln={},ne(ln,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(ln,J,{solid:"fass",regular:"fasr"}),ln)),Dt=Gt((cn={},ne(cn,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(cn,J,{fass:"fa-solid",fasr:"fa-regular"}),cn)),Ho=Gt((fn={},ne(fn,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(fn,J,{"fa-solid":"fass","fa-regular":"fasr"}),fn)),Wo=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ci="fa-layers-text",Yo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Uo=Gt((un={},ne(un,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(un,J,{900:"fass",400:"fasr"}),un)),Ai=[1,2,3,4,5,6,7,8,9,10],Vo=Ai.concat([11,12,13,14,15,16,17,18,19,20]),Ko=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ze={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bt=new Set;Object.keys(Ft[W]).map(Bt.add.bind(Bt));Object.keys(Ft[J]).map(Bt.add.bind(Bt));var Go=[].concat(Br,Kt(Bt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ze.GROUP,Ze.SWAP_OPACITY,Ze.PRIMARY,Ze.SECONDARY]).concat(Ai.map(function(e){return"".concat(e,"x")})).concat(Vo.map(function(e){return"w-".concat(e)})),Nt=Ye.FontAwesomeConfig||{};function Xo(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var Zo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zo.forEach(function(e){var t=Mr(e,2),n=t[0],r=t[1],a=qo(Xo(n));a!=null&&(Nt[r]=a)})}var Oi={styleDefault:"solid",familyDefault:"classic",cssPrefix:ki,replacementClass:wi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Nt.familyPrefix&&(Nt.cssPrefix=Nt.familyPrefix);var kt=S(S({},Oi),Nt);kt.autoReplaceSvg||(kt.observeMutations=!1);var P={};Object.keys(Oi).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){kt[e]=n,Rt.forEach(function(r){return r(P)})},get:function(){return kt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){kt.cssPrefix=t,Rt.forEach(function(n){return n(P)})},get:function(){return kt.cssPrefix}});Ye.FontAwesomeConfig=P;var Rt=[];function Jo(e){return Rt.push(e),function(){Rt.splice(Rt.indexOf(e),1)}}var De=br,_e={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qo(e){if(!(!e||!Fe)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Y.head.insertBefore(t,r),e}}var es="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ht(){for(var e=12,t="";e-- >0;)t+=es[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Hr(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ts(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Pi(e[n]),'" ')},"").trim()}function In(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Wr(e){return e.size!==_e.size||e.x!==_e.x||e.y!==_e.y||e.rotate!==_e.rotate||e.flipX||e.flipY}function ns(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function rs(e){var t=e.transform,n=e.width,r=n===void 0?br:n,a=e.height,i=a===void 0?br:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xi?l+="translate(".concat(t.x/De-r/2,"em, ").concat(t.y/De-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/De,"em), calc(-50% + ").concat(t.y/De,"em)) "):l+="translate(".concat(t.x/De,"em, ").concat(t.y/De,"em) "),l+="scale(".concat(t.size/De*(t.flipX?-1:1),", ").concat(t.size/De*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var as=`:root, :host {
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
}`;function Ti(){var e=ki,t=wi,n=P.cssPrefix,r=P.replacementClass,a=as;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Sa=!1;function or(){P.autoAddCss&&!Sa&&(Qo(Ti()),Sa=!0)}var is={mixout:function(){return{dom:{css:Ti,insertCss:or}}},hooks:function(){return{beforeDOMElementCreation:function(){or()},beforeI2svg:function(){or()}}}},je=Ye||{};je[Le]||(je[Le]={});je[Le].styles||(je[Le].styles={});je[Le].hooks||(je[Le].hooks={});je[Le].shims||(je[Le].shims=[]);var ke=je[Le],Ei=[],os=function e(){Y.removeEventListener("DOMContentLoaded",e),On=1,Ei.map(function(t){return t()})},On=!1;Fe&&(On=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),On||Y.addEventListener("DOMContentLoaded",os));function ss(e){Fe&&(On?setTimeout(e,0):Ei.push(e))}function Xt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Pi(e):"<".concat(t," ").concat(ts(r),">").concat(i.map(Xt).join(""),"</").concat(t,">")}function Ca(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ls=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},sr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ls(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function cs(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function yr(e){var t=cs(e);return t.length===1?t[0].toString(16):null}function fs(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Aa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Aa(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,Aa(t)):ke.styles[e]=S(S({},ke.styles[e]||{}),i),e==="fas"&&xr("fa",t)}var dn,mn,pn,ht=ke.styles,us=ke.shims,ds=(dn={},ne(dn,W,Object.values(Dt[W])),ne(dn,J,Object.values(Dt[J])),dn),Yr=null,_i={},Ii={},$i={},Ni={},Ri={},ms=(mn={},ne(mn,W,Object.keys(zt[W])),ne(mn,J,Object.keys(zt[J])),mn);function ps(e){return~Go.indexOf(e)}function hs(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ps(a)?a:null}var Li=function(){var t=function(i){return sr(ht,function(o,s,l){return o[l]=sr(s,i,{}),o},{})};_i=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ii=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ri=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ht||P.autoFetchSvg,r=sr(us,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});$i=r.names,Ni=r.unicodes,Yr=$n(P.styleDefault,{family:P.familyDefault})};Jo(function(e){Yr=$n(e.styleDefault,{family:P.familyDefault})});Li();function Ur(e,t){return(_i[e]||{})[t]}function gs(e,t){return(Ii[e]||{})[t]}function Je(e,t){return(Ri[e]||{})[t]}function ji(e){return $i[e]||{prefix:null,iconName:null}}function bs(e){var t=Ni[e],n=Ur("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ue(){return Yr}var Vr=function(){return{prefix:null,iconName:null,rest:[]}};function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,a=zt[r][e],i=Ft[r][e]||Ft[r][a],o=e in ke.styles?e:null;return i||o||null}var Oa=(pn={},ne(pn,W,Object.keys(Dt[W])),ne(pn,J,Object.keys(Dt[J])),pn);function Nn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,W,"".concat(P.cssPrefix,"-").concat(W)),ne(t,J,"".concat(P.cssPrefix,"-").concat(J)),t),o=null,s=W;(e.includes(i[W])||e.some(function(c){return Oa[W].includes(c)}))&&(s=W),(e.includes(i[J])||e.some(function(c){return Oa[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,f){var u=hs(P.cssPrefix,f);if(ht[f]?(f=ds[s].includes(f)?Ho[s][f]:f,o=f,c.prefix=f):ms[s].indexOf(f)>-1?(o=f,c.prefix=$n(f,{family:s})):u?c.iconName=u:f!==P.replacementClass&&f!==i[W]&&f!==i[J]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var d=o==="fa"?ji(c.iconName):{},h=Je(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||h||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!ht.far&&ht.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Vr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(ht.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=Je(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ue()||"fas"),l}var vs=function(){function e(){_o(this,e),this.definitions={}}return Io(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),xr(s,o[s]);var l=Dt[W][s];l&&xr(l,o[s]),Li()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),Pa=[],gt={},vt={},ys=Object.keys(vt);function xs(e,t){var n=t.mixoutsTo;return Pa=e,gt={},Object.keys(vt).forEach(function(r){ys.indexOf(r)===-1&&delete vt[r]}),Pa.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),An(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(vt)}),n}function kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Me(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vt[e]?vt[e].apply(null,t):void 0}function wr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ue();if(t)return t=Je(n,t)||t,Ca(Mi.definitions,n,t)||Ca(ke.styles,n,t)}var Mi=new vs,ks=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,et("noAuto")},ws={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fe?(et("beforeI2svg",t),Me("pseudoElements2svg",t),Me("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,ss(function(){Cs({autoReplaceSvgRoot:n}),et("watch",t)})}},Ss={icon:function(t){if(t===null)return null;if(An(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Je(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$n(t[0]);return{prefix:r,iconName:Je(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Wo))){var a=Nn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ue(),iconName:Je(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ue();return{prefix:i,iconName:Je(i,t)||t}}}},be={noAuto:ks,config:P,dom:ws,parse:Ss,library:Mi,findIconDefinition:wr,toHtml:Xt},Cs=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&Fe&&P.autoReplaceSvg&&be.dom.i2svg({node:r})};function Rn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Fe){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function As(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Wr(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=In(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Os(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function Kr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,d=e.watchable,h=d===void 0?!1:d,p=r.found?r:n,m=p.width,v=p.height,O=a==="fak",x=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(w){return u.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(u.classes).join(" "),A={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)})},I=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};h&&(A.attributes[Qe]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Ht())},children:[l]}),delete A.attributes.title);var T=S(S({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S(S({},I),u.styles)}),C=r.found&&n.found?Me("generateAbstractMask",T)||{children:[],attributes:{}}:Me("generateAbstractIcon",T)||{children:[],attributes:{}},k=C.children,U=C.attributes;return T.children=k,T.attributes=U,s?Os(T):As(T)}function Ta(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Qe]="");var f=S({},o.styles);Wr(a)&&(f.transform=rs({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=In(f);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Ps(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=In(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var lr=ke.styles;function Sr(e){var t=e[0],n=e[1],r=e.slice(4),a=Mr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ze.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Ze.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ts={found:!1,width:512,height:512};function Es(e,t){!Si&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ue()),new Promise(function(r,a){if(Me("missingIconAbstract"),n==="fa"){var i=ji(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&lr[t]&&lr[t][e]){var o=lr[t][e];return r(Sr(o))}Es(e,t),r(S(S({},Ts),{},{icon:P.showMissingIcons&&e?Me("missingIconAbstract")||{}:{}}))})}var Ea=function(){},Ar=P.measurePerformance&&on&&on.mark&&on.measure?on:{mark:Ea,measure:Ea},$t='FA "6.3.0"',_s=function(t){return Ar.mark("".concat($t," ").concat(t," begins")),function(){return zi(t)}},zi=function(t){Ar.mark("".concat($t," ").concat(t," ends")),Ar.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},Gr={begin:_s,end:zi},yn=function(){};function _a(e){var t=e.getAttribute?e.getAttribute(Qe):null;return typeof t=="string"}function Is(e){var t=e.getAttribute?e.getAttribute(Fr):null,n=e.getAttribute?e.getAttribute(Dr):null;return t&&n}function $s(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ns(){if(P.autoReplaceSvg===!0)return xn.replace;var e=xn[P.autoReplaceSvg];return e||xn.replace}function Rs(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Ls(e){return Y.createElement(e)}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rs:Ls:n;if(typeof e=="string")return Y.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Fi(o,{ceFn:r}))}),a}function js(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Fi(a),n)}),n.getAttribute(Qe)===null&&P.keepOriginalSource){var r=Y.createComment(js(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Hr(n).indexOf(P.replacementClass))return xn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Xt(s)}).join(`
`);n.setAttribute(Qe,""),n.innerHTML=o}};function Ia(e){e()}function Di(e,t){var n=typeof t=="function"?t:yn;if(e.length===0)n();else{var r=Ia;P.mutateApproach===Do&&(r=Ye.requestAnimationFrame||Ia),r(function(){var a=Ns(),i=Gr.begin("mutate");e.map(a),i(),n()})}}var Xr=!1;function Bi(){Xr=!0}function Or(){Xr=!1}var Pn=null;function $a(e){if(ka&&P.observeMutations){var t=e.treeCallback,n=t===void 0?yn:t,r=e.nodeCallback,a=r===void 0?yn:r,i=e.pseudoElementsCallback,o=i===void 0?yn:i,s=e.observeMutationsRoot,l=s===void 0?Y:s;Pn=new ka(function(c){if(!Xr){var f=Ue();Ct(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!_a(u.addedNodes[0])&&(P.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&P.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&_a(u.target)&&~Ko.indexOf(u.attributeName))if(u.attributeName==="class"&&Is(u.target)){var d=Nn(Hr(u.target)),h=d.prefix,p=d.iconName;u.target.setAttribute(Fr,h||f),p&&u.target.setAttribute(Dr,p)}else $s(u.target)&&a(u.target)})}}),Fe&&Pn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ms(){Pn&&Pn.disconnect()}function zs(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fs(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nn(Hr(e));return a.prefix||(a.prefix=Ue()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=gs(a.prefix,e.innerText)||Ur(a.prefix,yr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ds(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Ht()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_e,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fs(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ds(e),s=kr("parseNodeAttributes",{},e),l=t.styleParser?zs(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:_e,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Hs=ke.styles;function Hi(e){var t=P.autoReplaceSvg==="nest"?Na(e,{styleParser:!1}):Na(e);return~t.extra.classes.indexOf(Ci)?Me("generateLayersText",e,t):Me("generateSvgReplacementMutation",e,t)}var Ve=new Set;Br.map(function(e){Ve.add("fa-".concat(e))});Object.keys(zt[W]).map(Ve.add.bind(Ve));Object.keys(zt[J]).map(Ve.add.bind(Ve));Ve=Kt(Ve);function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fe)return Promise.resolve();var n=Y.documentElement.classList,r=function(u){return n.add("".concat(wa,"-").concat(u))},a=function(u){return n.remove("".concat(wa,"-").concat(u))},i=P.autoFetchSvg?Ve:Br.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Hs));i.includes("fa")||i.push("fa");var o=[".".concat(Ci,":not([").concat(Qe,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Qe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Gr.begin("onTree"),c=s.reduce(function(f,u){try{var d=Hi(u);d&&f.push(d)}catch(h){Si||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(d){Di(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(d){l(),u(d)})})}function Ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hi(e).then(function(n){n&&Di([n],t)})}function Ys(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wr(a||{})),e(r,S(S({},n),{},{mask:a}))}}var Us=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?_e:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,d=u===void 0?null:u,h=n.titleId,p=h===void 0?null:h,m=n.classes,v=m===void 0?[]:m,O=n.attributes,x=O===void 0?{}:O,A=n.styles,I=A===void 0?{}:A;if(t){var T=t.prefix,C=t.iconName,k=t.icon;return Rn(S({type:"icon"},t),function(){return et("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(d?x["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(p||Ht()):(x["aria-hidden"]="true",x.focusable="false")),Kr({icons:{main:Sr(k),mask:l?Sr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:C,transform:S(S({},_e),a),symbol:o,title:d,maskId:f,titleId:p,extra:{attributes:x,styles:I,classes:v}})})}},Vs={mixout:function(){return{icon:Ys(Us)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ra,n.nodeCallback=Ws,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Y:r,i=n.callback,o=i===void 0?function(){}:i;return Ra(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,d=r.extra;return new Promise(function(h,p){Promise.all([Cr(a,s),f.iconName?Cr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var v=Mr(m,2),O=v[0],x=v[1];h([n,Kr({icons:{main:O,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=In(s);l.length>0&&(a.style=l);var c;return Wr(o)&&(c=Me("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ks={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rn({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Kt(i)).join(" ")},children:o}]})}}}},Gs={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return Rn({type:"counter",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),Ps({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Kt(s))}})})}}}},Xs={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?_e:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,d=r.styles,h=d===void 0?{}:d;return Rn({type:"text",content:n},function(){return et("beforeDOMElementCreation",{content:n,params:r}),Ta({content:n,transform:S(S({},_e),i),title:s,extra:{attributes:u,styles:h,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Kt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xi){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ta({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},qs=new RegExp('"',"ug"),La=[1105920,1112319];function Zs(e){var t=e.replace(qs,""),n=fs(t,0),r=n>=La[0]&&n<=La[1],a=t.length===2?t[0]===t[1]:!1;return{value:yr(a?t[0]:t),isSecondary:r||a}}function ja(e,t){var n="".concat(Fo).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(k){return k.getAttribute(vr)===t})[0],s=Ye.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yo),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?J:W,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ft[d][l[2].toLowerCase()]:Uo[d][c],p=Zs(u),m=p.value,v=p.isSecondary,O=l[0].startsWith("FontAwesome"),x=Ur(h,m),A=x;if(O){var I=bs(m);I.iconName&&I.prefix&&(x=I.iconName,h=I.prefix)}if(x&&!v&&(!o||o.getAttribute(Fr)!==h||o.getAttribute(Dr)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var T=Bs(),C=T.extra;C.attributes[vr]=t,Cr(x,h).then(function(k){var U=Kr(S(S({},T),{},{icons:{main:k,mask:Vr()},prefix:h,iconName:A,extra:C,watchable:!0})),w=Y.createElement("svg");t==="::before"?e.insertBefore(w,e.firstChild):e.appendChild(w),w.outerHTML=U.map(function(_){return Xt(_)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Js(e){return Promise.all([ja(e,"::before"),ja(e,"::after")])}function Qs(e){return e.parentNode!==document.head&&!~Bo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ma(e){if(Fe)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(Qs).map(Js),a=Gr.begin("searchPseudoElements");Bi(),Promise.all(r).then(function(){a(),Or(),t()}).catch(function(){a(),Or(),n()})})}var el={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ma,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Y:r;P.searchPseudoElements&&Ma(a)}}},za=!1,tl={mixout:function(){return{dom:{unwatch:function(){Bi(),za=!0}}}},hooks:function(){return{bootstrap:function(){$a(kr("mutationObserverCallbacks",{}))},noAuto:function(){Ms()},watch:function(n){var r=n.observeMutationsRoot;za?Or():$a(kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},nl={mixout:function(){return{parse:{transform:function(n){return Fa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Fa(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:u,path:d};return{tag:"g",attributes:S({},h.outer),children:[{tag:"g",attributes:S({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),h.path)}]}]}}}},cr={x:0,y:0,width:"100%",height:"100%"};function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function rl(e){return e.tag==="g"?e.children:[e]}var al={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nn(a.split(" ").map(function(o){return o.trim()})):Vr();return i.prefix||(i.prefix=Ue()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,d=o.icon,h=ns({transform:l,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:S(S({},cr),{},{fill:"white"})},m=f.children?{children:f.children.map(Da)}:{},v={tag:"g",attributes:S({},h.inner),children:[Da(S({tag:f.tag,attributes:S(S({},f.attributes),h.path)},m))]},O={tag:"g",attributes:S({},h.outer),children:[v]},x="mask-".concat(s||Ht()),A="clip-".concat(s||Ht()),I={tag:"mask",attributes:S(S({},cr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,O]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:rl(d)},I]};return r.push(T,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},cr)}),{children:r,attributes:a}}}},il={provides:function(t){var n=!1;Ye.matchMedia&&(n=Ye.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ol={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},sl=[is,Vs,Ks,Gs,Xs,el,tl,nl,al,il,ol];xs(sl,{mixoutsTo:be});be.noAuto;be.config;be.library;be.dom;var Pr=be.parse;be.findIconDefinition;be.toHtml;var ll=be.icon;be.layer;be.text;be.counter;var N={},cl={get exports(){return N},set exports(e){N=e}},fl="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ul=fl,dl=ul;function Wi(){}function Yi(){}Yi.resetWarningCache=Wi;var ml=function(){function e(r,a,i,o,s,l){if(l!==dl){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Yi,resetWarningCache:Wi};return n.PropTypes=n,n};cl.exports=ml();function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pl(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hl(e,t){if(e==null)return{};var n=pl(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tr(e){return gl(e)||bl(e)||vl(e)||yl()}function gl(e){if(Array.isArray(e))return Er(e)}function bl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vl(e,t){if(e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xl(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,d=e.fixedWidth,h=e.inverse,p=e.border,m=e.listItem,v=e.flip,O=e.size,x=e.rotation,A=e.pull,I=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":h,"fa-border":p,"fa-li":m,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},bt(t,"fa-".concat(O),typeof O<"u"&&O!==null),bt(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),bt(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),bt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(T){return I[T]?T:null}).filter(function(T){return T})}function kl(e){return e=e-0,e===e}function Ui(e){return kl(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var wl=["style"];function Sl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Cl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ui(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Sl(a)]=i:t[a]=i,t},{})}function Vi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Vi(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Cl(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Ui(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=hl(n,wl);return a.attrs.style=He(He({},a.attrs.style),o),e.apply(void 0,[t.tag,He(He({},a.attrs),s)].concat(Tr(r)))}var Ki=!1;try{Ki=!0}catch{}function Al(){if(!Ki&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ha(e){if(e&&Tn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pr.icon)return Pr.icon(e);if(e===null)return null;if(e&&Tn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bt({},e,t):{}}var me=fe.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,c=Ha(n),f=fr("classes",[].concat(Tr(xl(e)),Tr(i.split(" ")))),u=fr("transform",typeof e.transform=="string"?Pr.transform(e.transform):e.transform),d=fr("mask",Ha(r)),h=ll(c,He(He(He(He({},f),u),d),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!h)return Al("Could not find icon",c),null;var p=h.abstract,m={ref:t};return Object.keys(e).forEach(function(v){me.defaultProps.hasOwnProperty(v)||(m[v]=e[v])}),Ol(p[0],m)});me.displayName="FontAwesomeIcon";me.propTypes={beat:N.bool,border:N.bool,beatFade:N.bool,bounce:N.bool,className:N.string,fade:N.bool,flash:N.bool,mask:N.oneOfType([N.object,N.array,N.string]),maskId:N.string,fixedWidth:N.bool,inverse:N.bool,flip:N.oneOf([!0,!1,"horizontal","vertical","both"]),icon:N.oneOfType([N.object,N.array,N.string]),listItem:N.bool,pull:N.oneOf(["right","left"]),pulse:N.bool,rotation:N.oneOf([0,90,180,270]),shake:N.bool,size:N.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:N.bool,spinPulse:N.bool,spinReverse:N.bool,symbol:N.oneOfType([N.bool,N.string]),title:N.string,titleId:N.string,transform:N.oneOfType([N.string,N.object]),swapOpacity:N.bool};me.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ol=Vi.bind(null,fe.createElement),Pl={prefix:"fas",iconName:"face-smile-beam",icon:[512,512,[128522,"smile-beam"],"f5b8","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},Tl=Pl,El={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Wa={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},_l={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Il={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Gi={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},$l={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Nl=$l;function Rl({title:e,resizeValue:t,occasion:n}){const[r,a]=$.useState(""),[i,o]=$.useState(""),[s,l]=$.useState(""),[c,f]=$.useState(!1),[u,d]=$.useState(-1),h=async(C,k)=>{a(C),d(k)},p=()=>{f(!c)},m=async(C,k)=>{await h(C,k),p()},v=()=>{if(u>0){const C=u-1,k=n[C],U=k[Object.keys(k)[0]];a(U.webp_url),d(C)}},O=()=>{if(u<n.length-1){const C=u+1,k=n[C],U=k[Object.keys(k)[0]];a(U.webp_url),d(C)}},x=async C=>{C.preventDefault();try{const k=await fetch(i);if(!k.ok)throw new Error("Failed to fetch the image");const U=await k.blob(),w=URL.createObjectURL(U),_=document.createElement("a");_.href=w,_.download=s,document.body.appendChild(_),_.click(),document.body.removeChild(_),setTimeout(()=>URL.revokeObjectURL(w),100)}catch(k){console.error("Error downloading the image:",k)}},A=C=>{C.target===C.currentTarget&&p()},I=C=>{C.stopPropagation()},T=C=>{C.key==="Escape"&&c&&p()};return fe.useEffect(()=>(window.addEventListener("keydown",T),()=>{window.removeEventListener("keydown",T)}),[c]),g.jsxs("div",{children:[g.jsx("div",{className:"flex flex-wrap justify-center mt-6 ",children:n.map((C,k)=>{var U=C[Object.keys(C)[0]];return g.jsx("img",{src:U.webp_url,className:"m-4 transition-all ease-in-out object-scale-down hover:opacity-25 cursor-pointer",style:{height:"auto",width:`${t}%`},alt:C[Object.keys(C)[0]],onClick:()=>{l(Object.keys(C)[0]),o(U.url),m(U.webp_url,k)}},k)})}),c&&g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75",onClick:A,children:g.jsxs("div",{className:"relative w-screen h-screen",onClick:I,children:[g.jsx("div",{className:"absolute inset-0 flex items-center justify-center border",children:g.jsx("img",{src:r,alt:"Fullscreen",className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",style:{maxWidth:"100%",maxHeight:"100%"}})}),g.jsx("button",{className:"absolute top-0 right-0 m-4 text-gray-800 focus:outline-none",onClick:p,children:g.jsx(me,{icon:Nl,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),u===0?g.jsx("div",{}):g.jsx("button",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none",onClick:v,children:g.jsx(me,{icon:Il,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),u===n.length-1?g.jsx("div",{}):g.jsx("button",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 focus:outline-none",onClick:O,children:g.jsx(me,{icon:_l,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})}),g.jsx("a",{href:r,download:!0,onClick:x,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-gray-800 absolute bottom-0 right-0 m-4 focus:outline-none flex items-center",children:g.jsx(me,{icon:Gi,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-2xl text-white "})})]})})]})}function ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function Xi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Xi(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function We(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Xi(e))&&(r&&(r+=" "),r+=t);return r}function pt(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function qi(e){if(!pt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=qi(e[n])}),t}function Re(e,t,n={clone:!0}){const r=n.clone?b({},e):e;return pt(e)&&pt(t)&&Object.keys(t).forEach(a=>{a!=="__proto__"&&(pt(t[a])&&a in e&&pt(e[a])?r[a]=Re(e[a],t[a],n):n.clone?r[a]=pt(t[a])?qi(t[a]):t[a]:r[a]=t[a])}),r}function wt(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function he(e){if(typeof e!="string")throw new Error(wt(7));return e.charAt(0).toUpperCase()+e.slice(1)}function kn(e){return e&&e.ownerDocument||document}function Ll(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const jl=typeof window<"u"?$.useLayoutEffect:$.useEffect,Zi=jl;function Ml({controlled:e,default:t,name:n,state:r="value"}){const{current:a}=$.useRef(e!==void 0),[i,o]=$.useState(t),s=a?e:i,l=$.useCallback(c=>{a||o(c)},[]);return[s,l]}function ur(e){const t=$.useRef(e);return Zi(()=>{t.current=e}),$.useCallback((...n)=>(0,t.current)(...n),[])}function _r(...e){return $.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ll(n,t)})},e)}let Ln=!0,Ir=!1,Ya;const zl={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Fl(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&zl[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Dl(e){e.metaKey||e.altKey||e.ctrlKey||(Ln=!0)}function dr(){Ln=!1}function Bl(){this.visibilityState==="hidden"&&Ir&&(Ln=!0)}function Hl(e){e.addEventListener("keydown",Dl,!0),e.addEventListener("mousedown",dr,!0),e.addEventListener("pointerdown",dr,!0),e.addEventListener("touchstart",dr,!0),e.addEventListener("visibilitychange",Bl,!0)}function Wl(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ln||Fl(t)}function Yl(){const e=$.useCallback(a=>{a!=null&&Hl(a.ownerDocument)},[]),t=$.useRef(!1);function n(){return t.current?(Ir=!0,window.clearTimeout(Ya),Ya=window.setTimeout(()=>{Ir=!1},100),t.current=!1,!0):!1}function r(a){return Wl(a)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}const Ul={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Vl=Ul;function Ji(e,t){const n=b({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=b({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const a=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=a:!a||!Object.keys(a)?n[r]=i:(n[r]=b({},i),Object.keys(a).forEach(o=>{n[r][o]=Ji(a[o],i[o])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Kl(e,t,n){const r={};return Object.keys(e).forEach(a=>{r[a]=e[a].reduce((i,o)=>(o&&(i.push(t(o)),n&&n[o]&&i.push(n[o])),i),[]).join(" ")}),r}const Ua=e=>e,Gl=()=>{let e=Ua;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Ua}}},Xl=Gl(),ql=Xl,Zl={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Qi(e,t,n="Mui"){const r=Zl[t];return r?`${n}-${r}`:`${ql.generate(e)}-${t}`}function Jl(e,t,n="Mui"){const r={};return t.forEach(a=>{r[a]=Qi(e,a,n)}),r}function Lt(e){return typeof e=="string"}function Ql(e,t,n){return e===void 0||Lt(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function ec(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function tc(e,t){return typeof e=="function"?e(t):e}function Va(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function nc(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:a,className:i}=e;if(!t){const h=We(a?.className,r?.className,i,n?.className),p=b({},n?.style,a?.style,r?.style),m=b({},n,a,r);return h.length>0&&(m.className=h),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:void 0}}const o=ec(b({},a,r)),s=Va(r),l=Va(a),c=t(o),f=We(c?.className,n?.className,i,a?.className,r?.className),u=b({},c?.style,n?.style,a?.style,r?.style),d=b({},c,n,l,s);return f.length>0&&(d.className=f),Object.keys(u).length>0&&(d.style=u),{props:d,internalRef:c.ref}}const rc=["elementType","externalSlotProps","ownerState"];function Be(e){var t;const{elementType:n,externalSlotProps:r,ownerState:a}=e,i=ve(e,rc),o=tc(r,a),{props:s,internalRef:l}=nc(b({},i,{externalSlotProps:o})),c=_r(l,o?.ref,(t=e.additionalProps)==null?void 0:t.ref);return Ql(n,b({},s,{ref:c}),a)}const ac=2;function eo(e,t){return e-t}function Pt(e,t,n){return e==null?t:Math.min(Math.max(t,e),n)}function Ka(e,t){var n;const{index:r}=(n=e.reduce((a,i,o)=>{const s=Math.abs(t-i);return a===null||s<a.distance||s===a.distance?{distance:s,index:o}:a},null))!=null?n:{};return r}function hn(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const a=n.changedTouches[r];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ga(e,t,n){return(e-t)*100/(n-t)}function ic(e,t,n){return(n-t)*e+t}function oc(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function sc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(oc(t)))}function Xa({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(eo)}function gn({sliderRef:e,activeIndex:t,setActive:n}){var r,a;const i=kn(e.current);if(!((r=e.current)!=null&&r.contains(i.activeElement))||Number(i==null||(a=i.activeElement)==null?void 0:a.getAttribute("data-index"))!==t){var o;(o=e.current)==null||o.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}const lc={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},cc=e=>e;let bn;function mr(){return bn===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?bn=CSS.supports("touch-action","none"):bn=!0),bn}function fc(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:a=!1,isRtl:i=!1,marks:o=!1,max:s=100,min:l=0,name:c,onChange:f,onChangeCommitted:u,orientation:d="horizontal",ref:h,scale:p=cc,step:m=1,tabIndex:v,value:O}=e,x=$.useRef(),[A,I]=$.useState(-1),[T,C]=$.useState(-1),[k,U]=$.useState(!1),w=$.useRef(0),[_,H]=Ml({controlled:O,default:n??l,name:"Slider"}),M=f&&((y,E,R)=>{const j=y.nativeEvent||y,ae=new j.constructor(j.type,j);Object.defineProperty(ae,"target",{writable:!0,value:{value:E,name:c}}),f(ae,E,R)}),K=Array.isArray(_);let L=K?_.slice().sort(eo):[_];L=L.map(y=>Pt(y,l,s));const $e=o===!0&&m!==null?[...Array(Math.floor((s-l)/m)+1)].map((y,E)=>({value:l+m*E})):o||[],Se=$e.map(y=>y.value),{isFocusVisibleRef:Qt,onBlur:Ce,onFocus:Ae,ref:Vn}=Yl(),[en,rt]=$.useState(-1),le=$.useRef(),tn=_r(Vn,le),nn=_r(h,tn),rn=y=>E=>{var R;const j=Number(E.currentTarget.getAttribute("data-index"));Ae(E),Qt.current===!0&&rt(j),C(j),y==null||(R=y.onFocus)==null||R.call(y,E)},Kn=y=>E=>{var R;Ce(E),Qt.current===!1&&rt(-1),C(-1),y==null||(R=y.onBlur)==null||R.call(y,E)};Zi(()=>{if(r&&le.current.contains(document.activeElement)){var y;(y=document.activeElement)==null||y.blur()}},[r]),r&&A!==-1&&I(-1),r&&en!==-1&&rt(-1);const at=y=>E=>{var R;(R=y.onChange)==null||R.call(y,E);const j=Number(E.currentTarget.getAttribute("data-index")),ae=L[j],de=Se.indexOf(ae);let X=E.target.valueAsNumber;if($e&&m==null&&(X=X<ae?Se[de-1]:Se[de+1]),X=Pt(X,l,s),$e&&m==null){const ce=Se.indexOf(L[j]);X=X<L[j]?Se[ce-1]:Se[ce+1]}if(K){a&&(X=Pt(X,L[j-1]||-1/0,L[j+1]||1/0));const ce=X;X=Xa({values:L,newValue:X,index:j});let F=j;a||(F=X.indexOf(ce)),gn({sliderRef:le,activeIndex:F})}H(X),rt(j),M&&M(E,X,j),u&&u(E,X)},Ke=$.useRef();let it=d;i&&d==="horizontal"&&(it+="-reverse");const ot=({finger:y,move:E=!1})=>{const{current:R}=le,{width:j,height:ae,bottom:de,left:X}=R.getBoundingClientRect();let ce;it.indexOf("vertical")===0?ce=(de-y.y)/ae:ce=(y.x-X)/j,it.indexOf("-reverse")!==-1&&(ce=1-ce);let F;if(F=ic(ce,l,s),m)F=sc(F,m,l);else{const Ot=Ka(Se,F);F=Se[Ot]}F=Pt(F,l,s);let Oe=0;if(K){E?Oe=Ke.current:Oe=Ka(L,F),a&&(F=Pt(F,L[Oe-1]||-1/0,L[Oe+1]||1/0));const Ot=F;F=Xa({values:L,newValue:F,index:Oe}),a&&E||(Oe=F.indexOf(Ot),Ke.current=Oe)}return{newValue:F,activeIndex:Oe}},Ge=ur(y=>{const E=hn(y,x);if(!E)return;if(w.current+=1,y.type==="mousemove"&&y.buttons===0){ye(y);return}const{newValue:R,activeIndex:j}=ot({finger:E,move:!0});gn({sliderRef:le,activeIndex:j,setActive:I}),H(R),!k&&w.current>ac&&U(!0),M&&R!==_&&M(y,R,j)}),ye=ur(y=>{const E=hn(y,x);if(U(!1),!E)return;const{newValue:R}=ot({finger:E,move:!0});I(-1),y.type==="touchend"&&C(-1),u&&u(y,R),x.current=void 0,G()}),Q=ur(y=>{if(r)return;mr()||y.preventDefault();const E=y.changedTouches[0];E!=null&&(x.current=E.identifier);const R=hn(y,x);if(R!==!1){const{newValue:ae,activeIndex:de}=ot({finger:R});gn({sliderRef:le,activeIndex:de,setActive:I}),H(ae),M&&M(y,ae,de)}w.current=0;const j=kn(le.current);j.addEventListener("touchmove",Ge),j.addEventListener("touchend",ye)}),G=$.useCallback(()=>{const y=kn(le.current);y.removeEventListener("mousemove",Ge),y.removeEventListener("mouseup",ye),y.removeEventListener("touchmove",Ge),y.removeEventListener("touchend",ye)},[ye,Ge]);$.useEffect(()=>{const{current:y}=le;return y.addEventListener("touchstart",Q,{passive:mr()}),()=>{y.removeEventListener("touchstart",Q,{passive:mr()}),G()}},[G,Q]),$.useEffect(()=>{r&&G()},[r,G]);const st=y=>E=>{var R;if((R=y.onMouseDown)==null||R.call(y,E),r||E.defaultPrevented||E.button!==0)return;E.preventDefault();const j=hn(E,x);if(j!==!1){const{newValue:de,activeIndex:X}=ot({finger:j});gn({sliderRef:le,activeIndex:X,setActive:I}),H(de),M&&M(E,de,X)}w.current=0;const ae=kn(le.current);ae.addEventListener("mousemove",Ge),ae.addEventListener("mouseup",ye)},Xe=Ga(K?L[0]:l,l,s),qe=Ga(L[L.length-1],l,s)-Xe,Gn=(y={})=>{const E={onMouseDown:st(y||{})},R=b({},y,E);return b({ref:nn},R)},se=y=>E=>{var R;(R=y.onMouseOver)==null||R.call(y,E);const j=Number(E.currentTarget.getAttribute("data-index"));C(j)},lt=y=>E=>{var R;(R=y.onMouseLeave)==null||R.call(y,E),C(-1)};return{active:A,axis:it,axisProps:lc,dragging:k,focusedThumbIndex:en,getHiddenInputProps:(y={})=>{var E;const R={onChange:at(y||{}),onFocus:rn(y||{}),onBlur:Kn(y||{})},j=b({},y,R);return b({tabIndex:v,"aria-labelledby":t,"aria-orientation":d,"aria-valuemax":p(s),"aria-valuemin":p(l),name:c,type:"range",min:e.min,max:e.max,step:(E=e.step)!=null?E:void 0,disabled:r},j,{style:b({},Vl,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Gn,getThumbProps:(y={})=>{const E={onMouseOver:se(y||{}),onMouseLeave:lt(y||{})};return b({},y,E)},marks:$e,open:T,range:K,trackLeap:qe,trackOffset:Xe,values:L}}function to(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var uc=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dc=to(function(e){return uc.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function mc(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function pc(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hc=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pc(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=mc(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),oe="-ms-",En="-moz-",z="-webkit-",no="comm",qr="rule",Zr="decl",gc="@import",ro="@keyframes",bc=Math.abs,jn=String.fromCharCode,vc=Object.assign;function yc(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function ao(e){return e.trim()}function xc(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function $r(e,t){return e.indexOf(t)}function ie(e,t){return e.charCodeAt(t)|0}function Wt(e,t,n){return e.slice(t,n)}function Pe(e){return e.length}function Jr(e){return e.length}function vn(e,t){return t.push(e),e}function kc(e,t){return e.map(t).join("")}var Mn=1,St=1,io=0,ue=0,te=0,At="";function zn(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Mn,column:St,length:o,return:""}}function Tt(e,t){return vc(zn("",null,null,"",null,null,0),e,{length:-e.length},t)}function wc(){return te}function Sc(){return te=ue>0?ie(At,--ue):0,St--,te===10&&(St=1,Mn--),te}function ge(){return te=ue<io?ie(At,ue++):0,St++,te===10&&(St=1,Mn++),te}function Ie(){return ie(At,ue)}function wn(){return ue}function qt(e,t){return Wt(At,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oo(e){return Mn=St=1,io=Pe(At=e),ue=0,[]}function so(e){return At="",e}function Sn(e){return ao(qt(ue-1,Nr(e===91?e+2:e===40?e+1:e)))}function Cc(e){for(;(te=Ie())&&te<33;)ge();return Yt(e)>2||Yt(te)>3?"":" "}function Ac(e,t){for(;--t&&ge()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return qt(e,wn()+(t<6&&Ie()==32&&ge()==32))}function Nr(e){for(;ge();)switch(te){case e:return ue;case 34:case 39:e!==34&&e!==39&&Nr(te);break;case 40:e===41&&Nr(e);break;case 92:ge();break}return ue}function Oc(e,t){for(;ge()&&e+te!==47+10;)if(e+te===42+42&&Ie()===47)break;return"/*"+qt(t,ue-1)+"*"+jn(e===47?e:ge())}function Pc(e){for(;!Yt(Ie());)ge();return qt(e,ue)}function Tc(e){return so(Cn("",null,null,null,[""],e=oo(e),0,[0],e))}function Cn(e,t,n,r,a,i,o,s,l){for(var c=0,f=0,u=o,d=0,h=0,p=0,m=1,v=1,O=1,x=0,A="",I=a,T=i,C=r,k=A;v;)switch(p=x,x=ge()){case 40:if(p!=108&&ie(k,u-1)==58){$r(k+=D(Sn(x),"&","&\f"),"&\f")!=-1&&(O=-1);break}case 34:case 39:case 91:k+=Sn(x);break;case 9:case 10:case 13:case 32:k+=Cc(p);break;case 92:k+=Ac(wn()-1,7);continue;case 47:switch(Ie()){case 42:case 47:vn(Ec(Oc(ge(),wn()),t,n),l);break;default:k+="/"}break;case 123*m:s[c++]=Pe(k)*O;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+f:h>0&&Pe(k)-u&&vn(h>32?Za(k+";",r,n,u-1):Za(D(k," ","")+";",r,n,u-2),l);break;case 59:k+=";";default:if(vn(C=qa(k,t,n,c,f,a,s,A,I=[],T=[],u),i),x===123)if(f===0)Cn(k,t,C,C,I,i,u,s,T);else switch(d===99&&ie(k,3)===110?100:d){case 100:case 109:case 115:Cn(e,C,C,r&&vn(qa(e,C,C,0,0,a,s,A,a,I=[],u),T),a,T,u,s,r?I:T);break;default:Cn(k,C,C,C,[""],T,0,s,T)}}c=f=h=0,m=O=1,A=k="",u=o;break;case 58:u=1+Pe(k),h=p;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&Sc()==125)continue}switch(k+=jn(x),x*m){case 38:O=f>0?1:(k+="\f",-1);break;case 44:s[c++]=(Pe(k)-1)*O,O=1;break;case 64:Ie()===45&&(k+=Sn(ge())),d=Ie(),f=u=Pe(A=k+=Pc(wn())),x++;break;case 45:p===45&&Pe(k)==2&&(m=0)}}return i}function qa(e,t,n,r,a,i,o,s,l,c,f){for(var u=a-1,d=a===0?i:[""],h=Jr(d),p=0,m=0,v=0;p<r;++p)for(var O=0,x=Wt(e,u+1,u=bc(m=o[p])),A=e;O<h;++O)(A=ao(m>0?d[O]+" "+x:D(x,/&\f/g,d[O])))&&(l[v++]=A);return zn(e,t,n,a===0?qr:s,l,c,f)}function Ec(e,t,n){return zn(e,t,n,no,jn(wc()),Wt(e,2,-2),0)}function Za(e,t,n,r){return zn(e,t,n,Zr,Wt(e,0,r),Wt(e,r+1,-1),r)}function yt(e,t){for(var n="",r=Jr(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function _c(e,t,n,r){switch(e.type){case gc:case Zr:return e.return=e.return||e.value;case no:return"";case ro:return e.return=e.value+"{"+yt(e.children,r)+"}";case qr:e.value=e.props.join(",")}return Pe(n=yt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ic(e){var t=Jr(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function $c(e){return function(t){t.root||(t=t.return)&&e(t)}}var Nc=function(t,n,r){for(var a=0,i=0;a=i,i=Ie(),a===38&&i===12&&(n[r]=1),!Yt(i);)ge();return qt(t,ue)},Rc=function(t,n){var r=-1,a=44;do switch(Yt(a)){case 0:a===38&&Ie()===12&&(n[r]=1),t[r]+=Nc(ue-1,n,r);break;case 2:t[r]+=Sn(a);break;case 4:if(a===44){t[++r]=Ie()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=jn(a)}while(a=ge());return t},Lc=function(t,n){return so(Rc(oo(t),n))},Ja=new WeakMap,jc=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ja.get(r))&&!a){Ja.set(t,!0);for(var i=[],o=Lc(n,i),s=r.props,l=0,c=0;l<o.length;l++)for(var f=0;f<s.length;f++,c++)t.props[c]=i[l]?o[l].replace(/&\f/g,s[f]):s[f]+" "+o[l]}}},Mc=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function lo(e,t){switch(yc(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+En+e+oe+e+e;case 6828:case 4268:return z+e+oe+e+e;case 6165:return z+e+oe+"flex-"+e+e;case 5187:return z+e+D(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return z+e+oe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return z+e+oe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return z+e+oe+D(e,"shrink","negative")+e;case 5292:return z+e+oe+D(e,"basis","preferred-size")+e;case 6060:return z+"box-"+D(e,"-grow","")+z+e+oe+D(e,"grow","positive")+e;case 4554:return z+D(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+En+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$r(e,"stretch")?lo(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ie(e,t+1)!==115)break;case 6444:switch(ie(e,Pe(e)-3-(~$r(e,"!important")&&10))){case 107:return D(e,":",":"+z)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(ie(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+oe+"$2box$3")+e}break;case 5936:switch(ie(e,t+11)){case 114:return z+e+oe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+oe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+oe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return z+e+oe+e+e}return e}var zc=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Zr:t.return=lo(t.value,t.length);break;case ro:return yt([Tt(t,{value:D(t.value,"@","@"+z)})],a);case qr:if(t.length)return kc(t.props,function(i){switch(xc(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yt([Tt(t,{props:[D(i,/:(read-\w+)/,":"+En+"$1")]})],a);case"::placeholder":return yt([Tt(t,{props:[D(i,/:(plac\w+)/,":"+z+"input-$1")]}),Tt(t,{props:[D(i,/:(plac\w+)/,":"+En+"$1")]}),Tt(t,{props:[D(i,/:(plac\w+)/,oe+"input-$1")]})],a)}return""})}},Fc=[zc],Dc=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var v=m.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var a=t.stylisPlugins||Fc,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var v=m.getAttribute("data-emotion").split(" "),O=1;O<v.length;O++)i[v[O]]=!0;s.push(m)});var l,c=[jc,Mc];{var f,u=[_c,$c(function(m){f.insert(m)})],d=Ic(c.concat(a,u)),h=function(v){return yt(Tc(v),d)};l=function(v,O,x,A){f=x,h(v?v+"{"+O.styles+"}":O.styles),A&&(p.inserted[O.name]=!0)}}var p={key:n,sheet:new hc({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return p.sheet.hydrate(s),p},Bc=!0;function Hc(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var co=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Bc===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Wc=function(t,n,r){co(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Yc(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Uc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vc=/[A-Z]|^ms/g,Kc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fo=function(t){return t.charCodeAt(1)===45},Qa=function(t){return t!=null&&typeof t!="boolean"},pr=to(function(e){return fo(e)?e:e.replace(Vc,"-$&").toLowerCase()}),ei=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Kc,function(r,a,i){return Te={name:a,styles:i,next:Te},a})}return Uc[t]!==1&&!fo(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ut(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Te={name:n.name,styles:n.styles,next:Te},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Te={name:r.name,styles:r.styles,next:Te},r=r.next;var a=n.styles+";";return a}return Gc(e,t,n)}case"function":{if(e!==void 0){var i=Te,o=n(e);return Te=i,Ut(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Gc(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Ut(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Qa(o)&&(r+=pr(i)+":"+ei(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Qa(o[s])&&(r+=pr(i)+":"+ei(i,o[s])+";");else{var l=Ut(e,t,o);switch(i){case"animation":case"animationName":{r+=pr(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var ti=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Te,Xc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Te=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Ut(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Ut(r,n,t[s]),a&&(i+=o[s]);ti.lastIndex=0;for(var l="",c;(c=ti.exec(i))!==null;)l+="-"+c[1];var f=Yc(i)+l;return{name:f,styles:i,next:Te}},qc=function(t){return t()},Zc=ha["useInsertionEffect"]?ha["useInsertionEffect"]:!1,Jc=Zc||qc,uo=$.createContext(typeof HTMLElement<"u"?Dc({key:"css"}):null);uo.Provider;var Qc=function(t){return $.forwardRef(function(n,r){var a=$.useContext(uo);return t(n,a,r)})},ef=$.createContext({}),tf=dc,nf=function(t){return t!=="theme"},ni=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?tf:nf},ri=function(t,n,r){var a;if(n){var i=n.shouldForwardProp;a=t.__emotion_forwardProp&&i?function(o){return t.__emotion_forwardProp(o)&&i(o)}:i}return typeof a!="function"&&r&&(a=t.__emotion_forwardProp),a},rf=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return co(n,r,a),Jc(function(){return Wc(n,r,a)}),null},af=function e(t,n){var r=t.__emotion_real===t,a=r&&t.__emotion_base||t,i,o;n!==void 0&&(i=n.label,o=n.target);var s=ri(t,n,r),l=s||ni(a),c=!l("as");return function(){var f=arguments,u=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&u.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)u.push.apply(u,f);else{u.push(f[0][0]);for(var d=f.length,h=1;h<d;h++)u.push(f[h],f[0][h])}var p=Qc(function(m,v,O){var x=c&&m.as||a,A="",I=[],T=m;if(m.theme==null){T={};for(var C in m)T[C]=m[C];T.theme=$.useContext(ef)}typeof m.className=="string"?A=Hc(v.registered,I,m.className):m.className!=null&&(A=m.className+" ");var k=Xc(u.concat(I),v.registered,T);A+=v.key+"-"+k.name,o!==void 0&&(A+=" "+o);var U=c&&s===void 0?ni(x):l,w={};for(var _ in m)c&&_==="as"||U(_)&&(w[_]=m[_]);return w.className=A,w.ref=O,$.createElement($.Fragment,null,$.createElement(rf,{cache:v,serialized:k,isStringTag:typeof x=="string"}),$.createElement(x,w))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=u,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(m,v){return e(m,b({},n,v,{shouldForwardProp:ri(p,v,!0)})).apply(void 0,u)},p}},of=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Rr=af.bind();of.forEach(function(e){Rr[e]=Rr(e)});const sf=Rr;/**
 * @mui/styled-engine v5.11.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function lf(e,t){return sf(e,t)}const cf=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function jt(e,t){return t?Re(e,t,{clone:!1}):e}const Qr={xs:0,sm:600,md:900,lg:1200,xl:1536},ai={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Qr[e]}px)`};function ze(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||ai;return t.reduce((o,s,l)=>(o[i.up(i.keys[l])]=n(t[l]),o),{})}if(typeof t=="object"){const i=r.breakpoints||ai;return Object.keys(t).reduce((o,s)=>{if(Object.keys(i.values||Qr).indexOf(s)!==-1){const l=i.up(s);o[l]=n(t[s],s)}else{const l=s;o[l]=t[l]}return o},{})}return n(t)}function ff(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,a)=>{const i=e.up(a);return r[i]={},r},{}))||{}}function uf(e,t){return e.reduce((n,r)=>{const a=n[r];return(!a||Object.keys(a).length===0)&&delete n[r],n},t)}function Fn(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((a,i)=>a&&a[i]?a[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,a)=>r&&r[a]!=null?r[a]:null,e)}function _n(e,t,n,r=n){let a;return typeof e=="function"?a=e(n):Array.isArray(e)?a=e[n]||r:a=Fn(e,n)||r,t&&(a=t(a,r,e)),a}function B(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:a}=e,i=o=>{if(o[t]==null)return null;const s=o[t],l=o.theme,c=Fn(l,r)||{};return ze(o,s,u=>{let d=_n(c,a,u);return u===d&&typeof u=="string"&&(d=_n(c,a,`${t}${u==="default"?"":he(u)}`,u)),n===!1?d:{[n]:d}})};return i.propTypes={},i.filterProps=[t],i}function Dn(...e){const t=e.reduce((r,a)=>(a.filterProps.forEach(i=>{r[i]=a}),r),{}),n=r=>Object.keys(r).reduce((a,i)=>t[i]?jt(a,t[i](r)):a,{});return n.propTypes={},n.filterProps=e.reduce((r,a)=>r.concat(a.filterProps),[]),n}function df(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const mf={m:"margin",p:"padding"},pf={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},ii={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},hf=df(e=>{if(e.length>2)if(ii[e])e=ii[e];else return[e];const[t,n]=e.split(""),r=mf[t],a=pf[n]||"";return Array.isArray(a)?a.map(i=>r+i):[r+a]}),ea=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ta=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ea,...ta];function Zt(e,t,n,r){var a;const i=(a=Fn(e,t,!1))!=null?a:n;return typeof i=="number"?o=>typeof o=="string"?o:i*o:Array.isArray(i)?o=>typeof o=="string"?o:i[o]:typeof i=="function"?i:()=>{}}function mo(e){return Zt(e,"spacing",8)}function Jt(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function gf(e,t){return n=>e.reduce((r,a)=>(r[a]=Jt(t,n),r),{})}function bf(e,t,n,r){if(t.indexOf(n)===-1)return null;const a=hf(n),i=gf(a,r),o=e[n];return ze(e,o,i)}function po(e,t){const n=mo(e.theme);return Object.keys(e).map(r=>bf(e,t,r,n)).reduce(jt,{})}function q(e){return po(e,ea)}q.propTypes={};q.filterProps=ea;function Z(e){return po(e,ta)}Z.propTypes={};Z.filterProps=ta;function Ee(e){return typeof e!="number"?e:`${e}px solid`}const vf=B({prop:"border",themeKey:"borders",transform:Ee}),yf=B({prop:"borderTop",themeKey:"borders",transform:Ee}),xf=B({prop:"borderRight",themeKey:"borders",transform:Ee}),kf=B({prop:"borderBottom",themeKey:"borders",transform:Ee}),wf=B({prop:"borderLeft",themeKey:"borders",transform:Ee}),Sf=B({prop:"borderColor",themeKey:"palette"}),Cf=B({prop:"borderTopColor",themeKey:"palette"}),Af=B({prop:"borderRightColor",themeKey:"palette"}),Of=B({prop:"borderBottomColor",themeKey:"palette"}),Pf=B({prop:"borderLeftColor",themeKey:"palette"}),Bn=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Zt(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Jt(t,r)});return ze(e,e.borderRadius,n)}return null};Bn.propTypes={};Bn.filterProps=["borderRadius"];Dn(vf,yf,xf,kf,wf,Sf,Cf,Af,Of,Pf,Bn);const Hn=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Zt(e.theme,"spacing",8),n=r=>({gap:Jt(t,r)});return ze(e,e.gap,n)}return null};Hn.propTypes={};Hn.filterProps=["gap"];const Wn=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Zt(e.theme,"spacing",8),n=r=>({columnGap:Jt(t,r)});return ze(e,e.columnGap,n)}return null};Wn.propTypes={};Wn.filterProps=["columnGap"];const Yn=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Zt(e.theme,"spacing",8),n=r=>({rowGap:Jt(t,r)});return ze(e,e.rowGap,n)}return null};Yn.propTypes={};Yn.filterProps=["rowGap"];const Tf=B({prop:"gridColumn"}),Ef=B({prop:"gridRow"}),_f=B({prop:"gridAutoFlow"}),If=B({prop:"gridAutoColumns"}),$f=B({prop:"gridAutoRows"}),Nf=B({prop:"gridTemplateColumns"}),Rf=B({prop:"gridTemplateRows"}),Lf=B({prop:"gridTemplateAreas"}),jf=B({prop:"gridArea"});Dn(Hn,Wn,Yn,Tf,Ef,_f,If,$f,Nf,Rf,Lf,jf);function xt(e,t){return t==="grey"?t:e}const Mf=B({prop:"color",themeKey:"palette",transform:xt}),zf=B({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:xt}),Ff=B({prop:"backgroundColor",themeKey:"palette",transform:xt});Dn(Mf,zf,Ff);function pe(e){return e<=1&&e!==0?`${e*100}%`:e}const Df=B({prop:"width",transform:pe}),na=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,a,i;return{maxWidth:((r=e.theme)==null||(a=r.breakpoints)==null||(i=a.values)==null?void 0:i[n])||Qr[n]||pe(n)}};return ze(e,e.maxWidth,t)}return null};na.filterProps=["maxWidth"];const Bf=B({prop:"minWidth",transform:pe}),Hf=B({prop:"height",transform:pe}),Wf=B({prop:"maxHeight",transform:pe}),Yf=B({prop:"minHeight",transform:pe});B({prop:"size",cssProperty:"width",transform:pe});B({prop:"size",cssProperty:"height",transform:pe});const Uf=B({prop:"boxSizing"});Dn(Df,na,Bf,Hf,Wf,Yf,Uf);const Vf={border:{themeKey:"borders",transform:Ee},borderTop:{themeKey:"borders",transform:Ee},borderRight:{themeKey:"borders",transform:Ee},borderBottom:{themeKey:"borders",transform:Ee},borderLeft:{themeKey:"borders",transform:Ee},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Bn},color:{themeKey:"palette",transform:xt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:xt},backgroundColor:{themeKey:"palette",transform:xt},p:{style:Z},pt:{style:Z},pr:{style:Z},pb:{style:Z},pl:{style:Z},px:{style:Z},py:{style:Z},padding:{style:Z},paddingTop:{style:Z},paddingRight:{style:Z},paddingBottom:{style:Z},paddingLeft:{style:Z},paddingX:{style:Z},paddingY:{style:Z},paddingInline:{style:Z},paddingInlineStart:{style:Z},paddingInlineEnd:{style:Z},paddingBlock:{style:Z},paddingBlockStart:{style:Z},paddingBlockEnd:{style:Z},m:{style:q},mt:{style:q},mr:{style:q},mb:{style:q},ml:{style:q},mx:{style:q},my:{style:q},margin:{style:q},marginTop:{style:q},marginRight:{style:q},marginBottom:{style:q},marginLeft:{style:q},marginX:{style:q},marginY:{style:q},marginInline:{style:q},marginInlineStart:{style:q},marginInlineEnd:{style:q},marginBlock:{style:q},marginBlockStart:{style:q},marginBlockEnd:{style:q},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Hn},rowGap:{style:Yn},columnGap:{style:Wn},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:pe},maxWidth:{style:na},minWidth:{transform:pe},height:{transform:pe},maxHeight:{transform:pe},minHeight:{transform:pe},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},ra=Vf;function Kf(...e){const t=e.reduce((r,a)=>r.concat(Object.keys(a)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Gf(e,t){return typeof e=="function"?e(t):e}function Xf(){function e(n,r,a,i){const o={[n]:r,theme:a},s=i[n];if(!s)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:f,style:u}=s;if(r==null)return null;const d=Fn(a,c)||{};return u?u(o):ze(o,r,p=>{let m=_n(d,f,p);return p===m&&typeof p=="string"&&(m=_n(d,f,`${n}${p==="default"?"":he(p)}`,p)),l===!1?m:{[l]:m}})}function t(n){var r;const{sx:a,theme:i={}}=n||{};if(!a)return null;const o=(r=i.unstable_sxConfig)!=null?r:ra;function s(l){let c=l;if(typeof l=="function")c=l(i);else if(typeof l!="object")return l;if(!c)return null;const f=ff(i.breakpoints),u=Object.keys(f);let d=f;return Object.keys(c).forEach(h=>{const p=Gf(c[h],i);if(p!=null)if(typeof p=="object")if(o[h])d=jt(d,e(h,p,i,o));else{const m=ze({theme:i},p,v=>({[h]:v}));Kf(m,p)?d[h]=t({sx:p,theme:i}):d=jt(d,m)}else d=jt(d,e(h,p,i,o))}),uf(u,d)}return Array.isArray(a)?a.map(s):s(a)}return t}const ho=Xf();ho.filterProps=["sx"];const aa=ho,qf=["values","unit","step"],Zf=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>b({},n,{[r.key]:r.val}),{})};function Jf(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,a=ve(e,qf),i=Zf(t),o=Object.keys(i);function s(d){return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof t[d]=="number"?t[d]:d)-r/100}${n})`}function c(d,h){const p=o.indexOf(h);return`@media (min-width:${typeof t[d]=="number"?t[d]:d}${n}) and (max-width:${(p!==-1&&typeof t[o[p]]=="number"?t[o[p]]:h)-r/100}${n})`}function f(d){return o.indexOf(d)+1<o.length?c(d,o[o.indexOf(d)+1]):s(d)}function u(d){const h=o.indexOf(d);return h===0?s(o[1]):h===o.length-1?l(o[h]):c(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return b({keys:o,values:i,up:s,down:l,between:c,only:f,not:u,unit:n},a)}const Qf={borderRadius:4},eu=Qf;function tu(e=8){if(e.mui)return e;const t=mo({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const o=t(i);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const nu=["breakpoints","palette","spacing","shape"];function ia(e={},...t){const{breakpoints:n={},palette:r={},spacing:a,shape:i={}}=e,o=ve(e,nu),s=Jf(n),l=tu(a);let c=Re({breakpoints:s,direction:"ltr",components:{},palette:b({mode:"light"},r),spacing:l,shape:b({},eu,i)},o);return c=t.reduce((f,u)=>Re(f,u),c),c.unstable_sxConfig=b({},ra,o?.unstable_sxConfig),c.unstable_sx=function(u){return aa({sx:u,theme:this})},c}const ru=$.createContext(null),au=ru;function iu(){return $.useContext(au)}function ou(e){return Object.keys(e).length===0}function su(e=null){const t=iu();return!t||ou(t)?e:t}const lu=ia();function go(e=lu){return su(e)}const cu=["variant"];function oi(e){return e.length===0}function bo(e){const{variant:t}=e,n=ve(e,cu);let r=t||"";return Object.keys(n).sort().forEach(a=>{a==="color"?r+=oi(r)?e[a]:he(e[a]):r+=`${oi(r)?a:he(a)}${he(e[a].toString())}`}),r}const fu=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],uu=["theme"],du=["theme"];function Et(e){return Object.keys(e).length===0}function mu(e){return typeof e=="string"&&e.charCodeAt(0)>96}const pu=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,hu=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(a=>{const i=bo(a.props);r[i]=a.style}),r},gu=(e,t,n,r)=>{var a,i;const{ownerState:o={}}=e,s=[],l=n==null||(a=n.components)==null||(i=a[r])==null?void 0:i.variants;return l&&l.forEach(c=>{let f=!0;Object.keys(c.props).forEach(u=>{o[u]!==c.props[u]&&e[u]!==c.props[u]&&(f=!1)}),f&&s.push(t[bo(c.props)])}),s};function Mt(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const bu=ia();function vu(e={}){const{defaultTheme:t=bu,rootShouldForwardProp:n=Mt,slotShouldForwardProp:r=Mt}=e,a=i=>{const o=Et(i.theme)?t:i.theme;return aa(b({},i,{theme:o}))};return a.__mui_systemSx=!0,(i,o={})=>{cf(i,A=>A.filter(I=>!(I!=null&&I.__mui_systemSx)));const{name:s,slot:l,skipVariantsResolver:c,skipSx:f,overridesResolver:u}=o,d=ve(o,fu),h=c!==void 0?c:l&&l!=="Root"||!1,p=f||!1;let m,v=Mt;l==="Root"?v=n:l?v=r:mu(i)&&(v=void 0);const O=lf(i,b({shouldForwardProp:v,label:m},d)),x=(A,...I)=>{const T=I?I.map(w=>typeof w=="function"&&w.__emotion_real!==w?_=>{let{theme:H}=_,M=ve(_,uu);return w(b({theme:Et(H)?t:H},M))}:w):[];let C=A;s&&u&&T.push(w=>{const _=Et(w.theme)?t:w.theme,H=pu(s,_);if(H){const M={};return Object.entries(H).forEach(([K,L])=>{M[K]=typeof L=="function"?L(b({},w,{theme:_})):L}),u(w,M)}return null}),s&&!h&&T.push(w=>{const _=Et(w.theme)?t:w.theme;return gu(w,hu(s,_),_,s)}),p||T.push(a);const k=T.length-I.length;if(Array.isArray(A)&&k>0){const w=new Array(k).fill("");C=[...A,...w],C.raw=[...A.raw,...w]}else typeof A=="function"&&A.__emotion_real!==A&&(C=w=>{let{theme:_}=w,H=ve(w,du);return A(b({theme:Et(_)?t:_},H))});return O(C,...T)};return O.withConfig&&(x.withConfig=O.withConfig),x}}function yu(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Ji(t.components[n].defaultProps,r)}function xu({props:e,name:t,defaultTheme:n}){const r=go(n);return yu({theme:r,name:t,props:e})}function oa(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function ku(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,a)=>a<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function tt(e){if(e.type)return e;if(e.charAt(0)==="#")return tt(ku(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(wt(9,e));let r=e.substring(t+1,e.length-1),a;if(n==="color"){if(r=r.split(" "),a=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(wt(10,a))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:a}}function Un(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((a,i)=>i<3?parseInt(a,10):a):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function wu(e){e=tt(e);const{values:t}=e,n=t[0],r=t[1]/100,a=t[2]/100,i=r*Math.min(a,1-a),o=(c,f=(c+n/30)%12)=>a-i*Math.max(Math.min(f-3,9-f,1),-1);let s="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type==="hsla"&&(s+="a",l.push(t[3])),Un({type:s,values:l})}function si(e){e=tt(e);let t=e.type==="hsl"||e.type==="hsla"?tt(wu(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Su(e,t){const n=si(e),r=si(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function li(e,t){return e=tt(e),t=oa(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Un(e)}function vo(e,t){if(e=tt(e),t=oa(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Un(e)}function yo(e,t){if(e=tt(e),t=oa(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Un(e)}function Cu(e,t){return b({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Au={black:"#000",white:"#fff"},Vt=Au,Ou={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Pu=Ou,Tu={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},ct=Tu,Eu={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ft=Eu,_u={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},_t=_u,Iu={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ut=Iu,$u={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},dt=$u,Nu={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},mt=Nu,Ru=["mode","contrastThreshold","tonalOffset"],ci={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Vt.white,default:Vt.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},hr={text:{primary:Vt.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Vt.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function fi(e,t,n,r){const a=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=yo(e.main,a):t==="dark"&&(e.dark=vo(e.main,i)))}function Lu(e="light"){return e==="dark"?{main:ut[200],light:ut[50],dark:ut[400]}:{main:ut[700],light:ut[400],dark:ut[800]}}function ju(e="light"){return e==="dark"?{main:ct[200],light:ct[50],dark:ct[400]}:{main:ct[500],light:ct[300],dark:ct[700]}}function Mu(e="light"){return e==="dark"?{main:ft[500],light:ft[300],dark:ft[700]}:{main:ft[700],light:ft[400],dark:ft[800]}}function zu(e="light"){return e==="dark"?{main:dt[400],light:dt[300],dark:dt[700]}:{main:dt[700],light:dt[500],dark:dt[900]}}function Fu(e="light"){return e==="dark"?{main:mt[400],light:mt[300],dark:mt[700]}:{main:mt[800],light:mt[500],dark:mt[900]}}function Du(e="light"){return e==="dark"?{main:_t[400],light:_t[300],dark:_t[700]}:{main:"#ed6c02",light:_t[500],dark:_t[900]}}function Bu(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,a=ve(e,Ru),i=e.primary||Lu(t),o=e.secondary||ju(t),s=e.error||Mu(t),l=e.info||zu(t),c=e.success||Fu(t),f=e.warning||Du(t);function u(m){return Su(m,hr.text.primary)>=n?hr.text.primary:ci.text.primary}const d=({color:m,name:v,mainShade:O=500,lightShade:x=300,darkShade:A=700})=>{if(m=b({},m),!m.main&&m[O]&&(m.main=m[O]),!m.hasOwnProperty("main"))throw new Error(wt(11,v?` (${v})`:"",O));if(typeof m.main!="string")throw new Error(wt(12,v?` (${v})`:"",JSON.stringify(m.main)));return fi(m,"light",x,r),fi(m,"dark",A,r),m.contrastText||(m.contrastText=u(m.main)),m},h={dark:hr,light:ci};return Re(b({common:b({},Vt),mode:t,primary:d({color:i,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:s,name:"error"}),warning:d({color:f,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:Pu,contrastThreshold:n,getContrastText:u,augmentColor:d,tonalOffset:r},h[t]),a)}const Hu=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Wu(e){return Math.round(e*1e5)/1e5}const ui={textTransform:"uppercase"},di='"Roboto", "Helvetica", "Arial", sans-serif';function Yu(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=di,fontSize:a=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:f,pxToRem:u}=n,d=ve(n,Hu),h=a/14,p=u||(O=>`${O/c*h}rem`),m=(O,x,A,I,T)=>b({fontFamily:r,fontWeight:O,fontSize:p(x),lineHeight:A},r===di?{letterSpacing:`${Wu(I/x)}em`}:{},T,f),v={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(s,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(s,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(s,14,1.75,.4,ui),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,ui)};return Re(b({htmlFontSize:c,pxToRem:p,fontFamily:r,fontSize:a,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:l},v),d,{clone:!1})}const Uu=.2,Vu=.14,Ku=.12;function V(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Uu})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vu})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ku})`].join(",")}const Gu=["none",V(0,2,1,-1,0,1,1,0,0,1,3,0),V(0,3,1,-2,0,2,2,0,0,1,5,0),V(0,3,3,-2,0,3,4,0,0,1,8,0),V(0,2,4,-1,0,4,5,0,0,1,10,0),V(0,3,5,-1,0,5,8,0,0,1,14,0),V(0,3,5,-1,0,6,10,0,0,1,18,0),V(0,4,5,-2,0,7,10,1,0,2,16,1),V(0,5,5,-3,0,8,10,1,0,3,14,2),V(0,5,6,-3,0,9,12,1,0,3,16,2),V(0,6,6,-3,0,10,14,1,0,4,18,3),V(0,6,7,-4,0,11,15,1,0,4,20,3),V(0,7,8,-4,0,12,17,2,0,5,22,4),V(0,7,8,-4,0,13,19,2,0,5,24,4),V(0,7,9,-4,0,14,21,2,0,5,26,4),V(0,8,9,-5,0,15,22,2,0,6,28,5),V(0,8,10,-5,0,16,24,2,0,6,30,5),V(0,8,11,-5,0,17,26,2,0,6,32,5),V(0,9,11,-5,0,18,28,2,0,7,34,6),V(0,9,12,-6,0,19,29,2,0,7,36,6),V(0,10,13,-6,0,20,31,3,0,8,38,7),V(0,10,13,-6,0,21,33,3,0,8,40,7),V(0,10,14,-6,0,22,35,3,0,8,42,7),V(0,11,14,-7,0,23,36,3,0,9,44,8),V(0,11,15,-7,0,24,38,3,0,9,46,8)],Xu=Gu,qu=["duration","easing","delay"],Zu={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Ju={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function mi(e){return`${Math.round(e)}ms`}function Qu(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function ed(e){const t=b({},Zu,e.easing),n=b({},Ju,e.duration);return b({getAutoHeightDuration:Qu,create:(a=["all"],i={})=>{const{duration:o=n.standard,easing:s=t.easeInOut,delay:l=0}=i;return ve(i,qu),(Array.isArray(a)?a:[a]).map(c=>`${c} ${typeof o=="string"?o:mi(o)} ${s} ${typeof l=="string"?l:mi(l)}`).join(",")}},e,{easing:t,duration:n})}const td={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},nd=td,rd=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function ad(e={},...t){const{mixins:n={},palette:r={},transitions:a={},typography:i={}}=e,o=ve(e,rd);if(e.vars)throw new Error(wt(18));const s=Bu(r),l=ia(e);let c=Re(l,{mixins:Cu(l.breakpoints,n),palette:s,shadows:Xu.slice(),typography:Yu(s,i),transitions:ed(a),zIndex:b({},nd)});return c=Re(c,o),c=t.reduce((f,u)=>Re(f,u),c),c.unstable_sxConfig=b({},ra,o?.unstable_sxConfig),c.unstable_sx=function(u){return aa({sx:u,theme:this})},c}const id=ad(),sa=id;function od({props:e,name:t}){return xu({props:e,name:t,defaultTheme:sa})}const sd=e=>Mt(e)&&e!=="classes",xo=Mt,ld=vu({defaultTheme:sa,rootShouldForwardProp:sd}),nt=ld;function cd(){return go(sa)}const fd=e=>!e||!Lt(e),ud=fd;function dd(e){return Qi("MuiSlider",e)}const md=Jl("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),we=md,pd=e=>{const{open:t}=e;return{offset:We(t&&we.valueLabelOpen),circle:we.valueLabelCircle,label:we.valueLabelLabel}};function hd(e){const{children:t,className:n,value:r}=e,a=pd(e);return t?$.cloneElement(t,{className:We(t.props.className)},g.jsxs($.Fragment,{children:[t.props.children,g.jsx("span",{className:We(a.offset,n),"aria-hidden":!0,children:g.jsx("span",{className:a.circle,children:g.jsx("span",{className:a.label,children:r})})})]})):null}const gd=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],pi=(e,t,n)=>(e-t)*100/(n-t);function hi(e){return e}const bd=nt("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${he(n.color)}`],n.size!=="medium"&&t[`size${he(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>b({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&b({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&b({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${we.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${we.dragging}`]:{[`& .${we.thumb}, & .${we.track}`]:{transition:"none"}}})),vd=nt("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>b({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),yd=nt("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?yo(e.palette[t.color].main,.62):vo(e.palette[t.color].main,.5);return b({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),xd=nt("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${he(n.color)}`],n.size!=="medium"&&t[`thumbSize${he(n.size)}`]]}})(({theme:e,ownerState:t})=>b({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":b({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${we.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:li(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${we.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:li(e.palette[t.color].main,.16)}`},[`&.${we.disabled}`]:{"&:hover":{boxShadow:"none"}}})),kd=nt(hd,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>b({[`&.${we.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),wd=nt("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>xo(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>b({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Sd=nt("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>xo(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>b({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),Cd=e=>{const{disabled:t,dragging:n,marked:r,orientation:a,track:i,classes:o,color:s,size:l}=e,c={root:["root",t&&"disabled",n&&"dragging",r&&"marked",a==="vertical"&&"vertical",i==="inverted"&&"trackInverted",i===!1&&"trackFalse",s&&`color${he(s)}`,l&&`size${he(l)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",l&&`thumbSize${he(l)}`,s&&`thumbColor${he(s)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Kl(c,dd,o)},Ad=({children:e})=>e,Od=$.forwardRef(function(t,n){var r,a,i,o,s,l,c,f,u,d,h,p,m,v,O,x,A,I,T,C,k,U,w,_;const H=od({props:t,name:"MuiSlider"}),K=cd().direction==="rtl",{"aria-label":L,"aria-valuetext":$e,"aria-labelledby":Se,component:Qt="span",components:Ce={},componentsProps:Ae={},color:Vn="primary",classes:en,className:rt,disableSwap:le=!1,disabled:tn=!1,getAriaLabel:nn,getAriaValueText:rn,marks:Kn=!1,max:at=100,min:Ke=0,orientation:it="horizontal",size:ot="medium",step:Ge=1,scale:ye=hi,slotProps:Q,slots:G,track:st="normal",valueLabelDisplay:Xe="off",valueLabelFormat:qe=hi}=H,Gn=ve(H,gd),se=b({},H,{isRtl:K,max:at,min:Ke,classes:en,disabled:tn,disableSwap:le,orientation:it,marks:Kn,color:Vn,size:ot,step:Ge,scale:ye,track:st,valueLabelDisplay:Xe,valueLabelFormat:qe}),{axisProps:lt,getRootProps:la,getHiddenInputProps:ca,getThumbProps:y,open:E,active:R,axis:j,focusedThumbIndex:ae,range:de,dragging:X,marks:ce,values:F,trackOffset:Oe,trackLeap:Ot}=fc(b({},se,{ref:n}));se.marked=ce.length>0&&ce.some(ee=>ee.label),se.dragging=X,se.focusedThumbIndex=ae;const xe=Cd(se),Xn=(r=(a=G?.root)!=null?a:Ce.Root)!=null?r:bd,fa=(i=(o=G?.rail)!=null?o:Ce.Rail)!=null?i:vd,ua=(s=(l=G?.track)!=null?l:Ce.Track)!=null?s:yd,da=(c=(f=G?.thumb)!=null?f:Ce.Thumb)!=null?c:xd,ma=(u=(d=G?.valueLabel)!=null?d:Ce.ValueLabel)!=null?u:kd,qn=(h=(p=G?.mark)!=null?p:Ce.Mark)!=null?h:wd,Zn=(m=(v=G?.markLabel)!=null?v:Ce.MarkLabel)!=null?m:Sd,pa=(O=(x=G?.input)!=null?x:Ce.Input)!=null?O:"input",Jn=(A=Q?.root)!=null?A:Ae.root,ko=(I=Q?.rail)!=null?I:Ae.rail,Qn=(T=Q?.track)!=null?T:Ae.track,er=(C=Q?.thumb)!=null?C:Ae.thumb,tr=(k=Q?.valueLabel)!=null?k:Ae.valueLabel,wo=(U=Q?.mark)!=null?U:Ae.mark,So=(w=Q?.markLabel)!=null?w:Ae.markLabel,Co=(_=Q?.input)!=null?_:Ae.input,Ao=Be({elementType:Xn,getSlotProps:la,externalSlotProps:Jn,externalForwardedProps:Gn,additionalProps:b({},ud(Xn)&&{as:Qt}),ownerState:b({},se,Jn?.ownerState),className:[xe.root,rt]}),Oo=Be({elementType:fa,externalSlotProps:ko,ownerState:se,className:xe.rail}),Po=Be({elementType:ua,externalSlotProps:Qn,additionalProps:{style:b({},lt[j].offset(Oe),lt[j].leap(Ot))},ownerState:b({},se,Qn?.ownerState),className:xe.track}),nr=Be({elementType:da,getSlotProps:y,externalSlotProps:er,ownerState:b({},se,er?.ownerState)}),To=Be({elementType:ma,externalSlotProps:tr,ownerState:b({},se,tr?.ownerState),className:xe.valueLabel}),rr=Be({elementType:qn,externalSlotProps:wo,ownerState:se,className:xe.mark}),ar=Be({elementType:Zn,externalSlotProps:So,ownerState:se}),Eo=Be({elementType:pa,getSlotProps:ca,externalSlotProps:Co,ownerState:se});return g.jsxs(Xn,b({},Ao,{children:[g.jsx(fa,b({},Oo)),g.jsx(ua,b({},Po)),ce.filter(ee=>ee.value>=Ke&&ee.value<=at).map((ee,re)=>{const ir=pi(ee.value,Ke,at),an=lt[j].offset(ir);let Ne;return st===!1?Ne=F.indexOf(ee.value)!==-1:Ne=st==="normal"&&(de?ee.value>=F[0]&&ee.value<=F[F.length-1]:ee.value<=F[0])||st==="inverted"&&(de?ee.value<=F[0]||ee.value>=F[F.length-1]:ee.value>=F[0]),g.jsxs($.Fragment,{children:[g.jsx(qn,b({"data-index":re},rr,!Lt(qn)&&{markActive:Ne},{style:b({},an,rr.style),className:We(rr.className,Ne&&xe.markActive)})),ee.label!=null?g.jsx(Zn,b({"aria-hidden":!0,"data-index":re},ar,!Lt(Zn)&&{markLabelActive:Ne},{style:b({},an,ar.style),className:We(xe.markLabel,ar.className,Ne&&xe.markLabelActive),children:ee.label})):null]},re)}),F.map((ee,re)=>{const ir=pi(ee,Ke,at),an=lt[j].offset(ir),Ne=Xe==="off"?Ad:ma;return g.jsx($.Fragment,{children:g.jsx(Ne,b({},!Lt(Ne)&&{valueLabelFormat:qe,valueLabelDisplay:Xe,value:typeof qe=="function"?qe(ye(ee),re):qe,index:re,open:E===re||R===re||Xe==="on",disabled:tn},To,{children:g.jsx(da,b({"data-index":re,"data-focusvisible":ae===re},nr,{className:We(xe.thumb,nr.className,R===re&&xe.active,ae===re&&xe.focusVisible),style:b({},an,{pointerEvents:le&&R!==re?"none":void 0},nr.style),children:g.jsx(pa,b({"data-index":re,"aria-label":nn?nn(re):L,"aria-valuenow":ye(ee),"aria-labelledby":Se,"aria-valuetext":rn?rn(ye(ee),re):$e,value:F[re]},Eo))}))}))},re)})]}))}),Pd=Od;function Td(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Lr=$,It=Td(Lr);/*! *****************************************************************************
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
***************************************************************************** */var jr=function(){return jr=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jr.apply(this,arguments)};function Ed(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function _d(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Id=`.scroll-to-top {
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
`;_d(Id);function $d(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var Nd=function(e){var t=e.top,n=t===void 0?20:t,r=e.className,a=r===void 0?"":r,i=e.color,o=i===void 0?"black":i,s=e.smooth,l=s===void 0?!1:s,c=e.component,f=c===void 0?"":c,u=e.viewBox,d=u===void 0?"0 0 256 256":u,h=e.svgPath,p=h===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":h,m=e.width,v=m===void 0?"28":m,O=e.height,x=O===void 0?"28":O,A=Ed(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),I=Lr.useState(!1),T=I[0],C=I[1];return Lr.useEffect(function(){var k=function(){C(document.documentElement.scrollTop>=n)};return k(),document.addEventListener("scroll",k),function(){return document.removeEventListener("scroll",k)}},[n]),It.createElement(It.Fragment,null,T&&It.createElement("button",jr({className:"scroll-to-top "+a,onClick:function(){return $d(l)},"aria-label":"Scroll to top"},A),f||It.createElement("svg",{width:v,height:x,fill:o,viewBox:d},It.createElement("path",{d:p}))))},Rd=Nd;function Md({darkMode:e,title:t}){const[n,r]=fe.useState(40),[a,i]=fe.useState(!1),[o,s]=fe.useState([]),[l,c]=fe.useState([]),[f,u]=fe.useState(!0);fe.useState([]),fe.useState([]),fe.useState({});const[d,h]=fe.useState(!0),[p,m]=fe.useState([]),[v,O]=fe.useState([]),x="https://caesar-chin-photography.s3.amazonaws.com";$.useEffect(()=>{fetch(`${x}/concert/index.json`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(w=>w.json()).then(w=>{let _=0;for(let H in w)fetch(`${x}/concert/${H}/keys.json`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(M=>M.json()).then(M=>{_+=1;var K={[H]:{name:w[H],images_list:M}};_>=3?s(L=>[...L,K]):c(L=>[...L,K]),m(L=>[...L,K]),setTimeout(()=>{h(!1)},1e3)}).catch(M=>console.error(M))}).catch(w=>console.error(w))},[]),$.useEffect(()=>{window.innerWidth<770&&r(100)},[]),$.useEffect(()=>{O(o.map(()=>!1))},[o]);const A=async(w,_)=>{O(K=>{const L=[...K];return L[_]=!0,L});const H=`${x}/concert/${w}/${w}.zip`,M=document.createElement("a");M.href=H,M.download=`${w}.zip`,M.style.display="none",document.body.appendChild(M),M.click(),document.body.removeChild(M),setTimeout(()=>{O(K=>{const L=[...K];return L[_]=!1,L})},2e3)},I=()=>{console.log(l),console.log(o);for(let w=0;w<Math.min(3,l.length);w++)s(_=>[..._,l[w]]),c(_=>_.slice(1))},T=(w,_)=>{r(_)},C=()=>{i(!a)},k=()=>{r(30)},U=()=>{r(100)};return g.jsxs("div",{className:"h-full",children:[g.jsx(Rd,{className:"dark:bg-dark-grayish-red bg-sea-foam-green flex flex-row justify-center items-center shadow-none rounded-full"}),t==="streetlandscape"?g.jsxs("div",{className:"text-4xl whitespace-pre uppercase tracking-widest flex justify-center mb-12",children:[g.jsx("div",{children:"Street"}),g.jsx("div",{children:" & "}),g.jsx("div",{children:"Landscape"})]}):g.jsx("div",{className:"text-5xl uppercase tracking-widest flex justify-center mb-12",children:"Concert"}),g.jsxs("div",{className:"flex flex-row justify-between ",children:[g.jsx("button",{className:"cursor-pointer",onClick:C,children:g.jsx(me,{icon:El,className:`dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green text-3xl ${a&&"dark:!text-dark-grayish-red !text-sea-foam-green"}`})}),g.jsxs("div",{className:"flex flex-row justify-between items-center",children:[g.jsx(me,{icon:Wa,onClick:k,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-lg"}),g.jsx(Pd,{style:{width:"10rem",marginLeft:"1rem",marginRight:"1rem"},value:n,onChange:T,"aria-label":"resize",min:30,max:100,className:"dark:!text-dark-grayish-red !text-sea-foam-green"}),g.jsx(me,{icon:Wa,className:"dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer text-3xl",onClick:U})]})]}),g.jsx("div",{id:"expanded-menu",style:{transition:"all 0.5s ease-in-out",height:0},className:a?"transition-all duration-500 ease-in-out mt-4 h-32 w-full bg-white border-[2px] border-black border-solid rounded dark:border-[0px]":void 0,children:a?g.jsx("div",{className:"text-black",children:"This website is still in construction"}):g.jsx("div",{})}),g.jsxs("div",{children:[g.jsx("div",{className:`flex flex-col items-center justify-center mt-24 transition-opacity duration-1500 animate-pulse 
            ${d?"opacity-100 block":"opacity-0 hidden"}
            `,children:g.jsx("div",{className:"flex items-center justify-center space-x-2 animate-pulse",children:g.jsx("div",{className:"inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid dark:border-dark-grayish-red border-black border-r-transparent dark:border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:g.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})}),g.jsx("div",{children:o.map((w,_)=>{var H=w[Object.keys(w)[0]].name,M=[];let K=H.split(",");if(K.length>2){const $e=H.indexOf(",",H.indexOf(",")+1);M=[H.slice(0,$e),H.slice($e+1).trim()]}else K.length===2&&K[1].charAt(0)===" "&&(M[0]=K[0],M[1]=K[1].trim());var L=w[Object.keys(w)[0]].images_list;return g.jsxs("div",{className:`${d?"opacity-0":"opacity-100"} transition-opacity duration-1000`,children:[g.jsxs("div",{className:"mt-8 flex flex-row w-auto justify-between items-center",children:[g.jsx("div",{className:"flex flex-row w-auto whitespace-pre items-center ml-4",children:g.jsxs("div",{className:"flex flex-row max-md:flex-col ",children:[g.jsx("div",{className:"uppercase text-lg",children:M[0]}),g.jsx("div",{className:"uppercase text-lg max-md:hidden",children:", "}),g.jsx("div",{className:"uppercase text-lg",children:M[1]})]})}),g.jsx("div",{className:"ml-4 flex flex-row w-full items-center before:flex-auto before:border-half before:content-[''] border-white before:mr-4 ",children:g.jsx("div",{className:"relative ",children:v[_]?g.jsxs("div",{className:"cursor-pointer flex flex-row items-center  transition-opacity duration-500 transition-visibility visible opacity-100 ease-in-out opacity-100 ease-in-out",children:[g.jsx("div",{className:"mr-2 max-md:hidden text-md",children:"THANK YOU"}),g.jsx(me,{icon:Tl,className:"text-md max-md:text-2xl"})]}):g.jsxs("div",{className:"cursor-pointer flex flex-row items-center  transition-opacity duration-500 transition-visibility visible opacity-100 ease-in-out",onClick:()=>A(Object.keys(w)[0],_),children:[g.jsx("div",{className:"mr-2 max-md:hidden text-md",children:"DOWNLOAD COLLECTION"}),g.jsx(me,{icon:Gi,className:"text-md max-md:text-2xl"})]})})})]}),g.jsx("div",{className:d?"hidden":"block",children:g.jsx(Rl,{title:t,resizeValue:n,occasion:L})})]},_)})})]}),g.jsx("div",{children:d?g.jsx("div",{}):l.length>0&&f?g.jsx("div",{className:"mt-8 mb-12 text-center border-t-half border-white",children:g.jsx("div",{className:"text-2xl mt-4 dark:hover:!text-dark-grayish-red hover:!text-sea-foam-green cursor-pointer",onClick:I,children:"LOAD MORE"})}):g.jsx("div",{className:"mt-8 mb-12 text-center border-t-half border-white",children:g.jsx("div",{className:"text-2xl mt-4",children:"You've reached the end!"})})})]})}export{Md as default};
