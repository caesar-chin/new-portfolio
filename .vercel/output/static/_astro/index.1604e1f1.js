import{R as jn}from"./index.f824fa59.js";function un(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?un(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):un(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function wt(t){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wt(t)}function he(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function mn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ye(t,n,e){return n&&mn(t.prototype,n),e&&mn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Qt(t,n){return xe(t)||Ae(t,n)||Dn(t,n)||Se()}function ft(t){return ke(t)||we(t)||Dn(t)||Oe()}function ke(t){if(Array.isArray(t))return Ft(t)}function xe(t){if(Array.isArray(t))return t}function we(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ae(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Dn(t,n){if(t){if(typeof t=="string")return Ft(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ft(t,n)}}function Ft(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dn=function(){},Jt={},Yn={},$n=null,Hn={mark:dn,measure:dn};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(Yn=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(Hn=performance)}catch{}var Pe=Jt.navigator||{},vn=Pe.userAgent,pn=vn===void 0?"":vn,D=Jt,h=Yn,bn=$n,ut=Hn;D.document;var z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Un=~pn.indexOf("MSIE")||~pn.indexOf("Trident/"),mt,dt,vt,pt,bt,_="___FONT_AWESOME___",jt=16,Wn="fa",Xn="svg-inline--fa",V="data-fa-i2svg",Dt="data-fa-pseudo-element",Ee="data-fa-pseudo-element-pending",Zt="data-prefix",tn="data-icon",gn="fontawesome-i2svg",Ce="async",Ie=["HTML","HEAD","STYLE","SCRIPT"],Vn=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",nn=[g,y];function lt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var at=lt((mt={},O(mt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(mt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),mt)),rt=lt((dt={},O(dt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(dt,y,{solid:"fass",regular:"fasr"}),dt)),it=lt((vt={},O(vt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(vt,y,{fass:"fa-solid",fasr:"fa-regular"}),vt)),Ne=lt((pt={},O(pt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(pt,y,{"fa-solid":"fass","fa-regular":"fasr"}),pt)),Te=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Gn="fa-layers-text",_e=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Le=lt((bt={},O(bt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(bt,y,{900:"fass",400:"fasr"}),bt)),Bn=[1,2,3,4,5,6,7,8,9,10],Me=Bn.concat([11,12,13,14,15,16,17,18,19,20]),ze=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[g]).map(ot.add.bind(ot));Object.keys(rt[y]).map(ot.add.bind(ot));var Re=[].concat(nn,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Bn.map(function(t){return"".concat(t,"x")})).concat(Me.map(function(t){return"w-".concat(t)})),nt=D.FontAwesomeConfig||{};function Fe(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function je(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var De=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];De.forEach(function(t){var n=Qt(t,2),e=n[0],a=n[1],r=je(Fe(e));r!=null&&(nt[a]=r)})}var qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wn,replacementClass:Xn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var J=u(u({},qn),nt);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(qn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){J[t]=e,et.forEach(function(a){return a(d)})},get:function(){return J[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){J.cssPrefix=n,et.forEach(function(e){return e(d)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=d;var et=[];function Ye(t){return et.push(t),function(){et.splice(et.indexOf(t),1)}}var F=jt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $e(t){if(!(!t||!z)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var He="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=He[Math.random()*62|0];return n}function Z(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function en(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ue(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Kn(t[e]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function an(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function We(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Xe(t){var n=t.transform,e=t.width,a=e===void 0?jt:e,r=t.height,i=r===void 0?jt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Un?f+="translate(".concat(n.x/F-a/2,"em, ").concat(n.y/F-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/F,"em), calc(-50% + ").concat(n.y/F,"em)) "):f+="translate(".concat(n.x/F,"em, ").concat(n.y/F,"em) "),f+="scale(".concat(n.size/F*(n.flipX?-1:1),", ").concat(n.size/F*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ve=`:root, :host {
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
}`;function Qn(){var t=Wn,n=Xn,e=d.cssPrefix,a=d.replacementClass,r=Ve;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var hn=!1;function _t(){d.autoAddCss&&!hn&&($e(Qn()),hn=!0)}var Ge={mixout:function(){return{dom:{css:Qn,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},L=D||{};L[_]||(L[_]={});L[_].styles||(L[_].styles={});L[_].hooks||(L[_].hooks={});L[_].shims||(L[_].shims=[]);var N=L[_],Jn=[],Be=function t(){h.removeEventListener("DOMContentLoaded",t),At=1,Jn.map(function(n){return n()})},At=!1;z&&(At=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),At||h.addEventListener("DOMContentLoaded",Be));function qe(t){z&&(At?setTimeout(t,0):Jn.push(t))}function ct(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Kn(t):"<".concat(n," ").concat(Ue(a),">").concat(i.map(ct).join(""),"</").concat(n,">")}function yn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ke=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Lt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Ke(e,r):e,f,l,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function Qe(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Yt(t){var n=Qe(t);return n.length===1?n[0].toString(16):null}function Je(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function kn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function $t(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=kn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,kn(n)):N.styles[t]=u(u({},N.styles[t]||{}),i),t==="fas"&&$t("fa",n)}var gt,ht,yt,B=N.styles,Ze=N.shims,ta=(gt={},O(gt,g,Object.values(it[g])),O(gt,y,Object.values(it[y])),gt),rn=null,Zn={},te={},ne={},ee={},ae={},na=(ht={},O(ht,g,Object.keys(at[g])),O(ht,y,Object.keys(at[y])),ht);function ea(t){return~Re.indexOf(t)}function aa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ea(r)?r:null}var re=function(){var n=function(i){return Lt(B,function(o,s,f){return o[f]=Lt(s,i,{}),o},{})};Zn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),te=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ae=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in B||d.autoFetchSvg,a=Lt(Ze,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ne=a.names,ee=a.unicodes,rn=Et(d.styleDefault,{family:d.familyDefault})};Ye(function(t){rn=Et(t.styleDefault,{family:d.familyDefault})});re();function on(t,n){return(Zn[t]||{})[n]}function ra(t,n){return(te[t]||{})[n]}function X(t,n){return(ae[t]||{})[n]}function ie(t){return ne[t]||{prefix:null,iconName:null}}function ia(t){var n=ee[t],e=on("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Y(){return rn}var sn=function(){return{prefix:null,iconName:null,rest:[]}};function Et(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=at[a][t],i=rt[a][t]||rt[a][r],o=t in N.styles?t:null;return i||o||null}var xn=(yt={},O(yt,g,Object.keys(it[g])),O(yt,y,Object.keys(it[y])),yt);function Ct(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,g,"".concat(d.cssPrefix,"-").concat(g)),O(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),o=null,s=g;(t.includes(i[g])||t.some(function(l){return xn[g].includes(l)}))&&(s=g),(t.includes(i[y])||t.some(function(l){return xn[y].includes(l)}))&&(s=y);var f=t.reduce(function(l,c){var m=aa(d.cssPrefix,c);if(B[c]?(c=ta[s].includes(c)?Ne[s][c]:c,o=c,l.prefix=c):na[s].indexOf(c)>-1?(o=c,l.prefix=Et(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[g]&&c!==i[y]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?ie(l.iconName):{},b=X(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||b||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!B.far&&B.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},sn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(B.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var oa=function(){function t(){he(this,t),this.definitions={}}return ye(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),$t(s,o[s]);var f=it[g][s];f&&$t(f,o[s]),re()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=l)}),e[s][f]=l}),e}}]),t}(),wn=[],q={},Q={},sa=Object.keys(Q);function fa(t,n){var e=n.mixoutsTo;return wn=t,q={},Object.keys(Q).forEach(function(a){sa.indexOf(a)===-1&&delete Q[a]}),wn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),wt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}a.provides&&a.provides(Q)}),e}function Ht(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function G(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=q[t]||[];r.forEach(function(i){i.apply(null,e)})}function M(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,n):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||Y();if(n)return n=X(e,n)||n,yn(oe.definitions,e,n)||yn(N.styles,e,n)}var oe=new oa,la=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},ca={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(G("beforeI2svg",n),M("pseudoElements2svg",n),M("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,qe(function(){ma({autoReplaceSvgRoot:e}),G("watch",n)})}},ua={icon:function(n){if(n===null)return null;if(wt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Et(n[0]);return{prefix:a,iconName:X(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Te))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=Y();return{prefix:i,iconName:X(i,n)||n}}}},I={noAuto:la,config:d,dom:ca,parse:ua,library:oe,findIconDefinition:Ut,toHtml:ct},ma=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function It(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ct(a)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function da(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(an(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=Pt(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function va(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function fn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,w=a.found?a:e,P=w.width,k=w.height,E=r==="fak",x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(R){return m.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(k)})},C=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/k*16*.0625,"em")}:{};b&&(A.attributes[V]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||st())},children:[f]}),delete A.attributes.title);var S=u(u({},A),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},C),m.styles)}),H=a.found&&e.found?M("generateAbstractMask",S)||{children:[],attributes:{}}:M("generateAbstractIcon",S)||{children:[],attributes:{}},U=H.children,Tt=H.attributes;return S.children=U,S.attributes=Tt,s?va(S):da(S)}function An(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[V]="");var c=u({},o.styles);an(r)&&(c.transform=Xe({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=Pt(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function pa(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Pt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Mt=N.styles;function Wt(t){var n=t[0],e=t[1],a=t.slice(4),r=Qt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var ba={found:!1,width:512,height:512};function ga(t,n){!Vn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Xt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=Y()),new Promise(function(a,r){if(M("missingIconAbstract"),e==="fa"){var i=ie(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return a(Wt(o))}ga(t,n),a(u(u({},ba),{},{icon:d.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var On=function(){},Vt=d.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:On,measure:On},tt='FA "6.3.0"',ha=function(n){return Vt.mark("".concat(tt," ").concat(n," begins")),function(){return se(n)}},se=function(n){Vt.mark("".concat(tt," ").concat(n," ends")),Vt.measure("".concat(tt," ").concat(n),"".concat(tt," ").concat(n," begins"),"".concat(tt," ").concat(n," ends"))},ln={begin:ha,end:se},kt=function(){};function Sn(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function ya(t){var n=t.getAttribute?t.getAttribute(Zt):null,e=t.getAttribute?t.getAttribute(tn):null;return n&&e}function ka(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function xa(){if(d.autoReplaceSvg===!0)return xt.replace;var t=xt[d.autoReplaceSvg];return t||xt.replace}function wa(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Aa(t){return h.createElement(t)}function fe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?wa:Aa:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(fe(o,{ceFn:a}))}),r}function Oa(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(fe(r),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){var a=h.createComment(Oa(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~en(e).indexOf(d.replacementClass))return xt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ct(s)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function Pn(t){t()}function le(t,n){var e=typeof n=="function"?n:kt;if(t.length===0)e();else{var a=Pn;d.mutateApproach===Ce&&(a=D.requestAnimationFrame||Pn),a(function(){var r=xa(),i=ln.begin("mutate");t.map(r),i(),e()})}}var cn=!1;function ce(){cn=!0}function Gt(){cn=!1}var Ot=null;function En(t){if(bn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?kt:n,a=t.nodeCallback,r=a===void 0?kt:a,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Ot=new bn(function(l){if(!cn){var c=Y();Z(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Sn(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Sn(m.target)&&~ze.indexOf(m.attributeName))if(m.attributeName==="class"&&ya(m.target)){var v=Ct(en(m.target)),b=v.prefix,w=v.iconName;m.target.setAttribute(Zt,b||c),w&&m.target.setAttribute(tn,w)}else ka(m.target)&&r(m.target)})}}),z&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sa(){Ot&&Ot.disconnect()}function Pa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ea(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ct(en(t));return r.prefix||(r.prefix=Y()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ra(r.prefix,t.innerText)||on(r.prefix,Yt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ca(t){var n=Z(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ia(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ea(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ca(t),s=Ht("parseNodeAttributes",{},t),f=n.styleParser?Pa(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Na=N.styles;function ue(t){var n=d.autoReplaceSvg==="nest"?Cn(t,{styleParser:!1}):Cn(t);return~n.extra.classes.indexOf(Gn)?M("generateLayersText",t,n):M("generateSvgReplacementMutation",t,n)}var $=new Set;nn.map(function(t){$.add("fa-".concat(t))});Object.keys(at[g]).map($.add.bind($));Object.keys(at[y]).map($.add.bind($));$=ft($);function In(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var e=h.documentElement.classList,a=function(m){return e.add("".concat(gn,"-").concat(m))},r=function(m){return e.remove("".concat(gn,"-").concat(m))},i=d.autoFetchSvg?$:nn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Na));i.includes("fa")||i.push("fa");var o=[".".concat(Gn,":not([").concat(V,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ln.begin("onTree"),l=s.reduce(function(c,m){try{var v=ue(m);v&&c.push(v)}catch(b){Vn||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){le(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function Ta(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ue(t).then(function(e){e&&le([e],n)})}function _a(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ut(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(a,u(u({},e),{},{mask:r}))}}var La=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?T:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,m=e.title,v=m===void 0?null:m,b=e.titleId,w=b===void 0?null:b,P=e.classes,k=P===void 0?[]:P,E=e.attributes,x=E===void 0?{}:E,A=e.styles,C=A===void 0?{}:A;if(n){var S=n.prefix,H=n.iconName,U=n.icon;return It(u({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||st()):(x["aria-hidden"]="true",x.focusable="false")),fn({icons:{main:Wt(U),mask:f?Wt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:u(u({},T),r),symbol:o,title:v,maskId:c,titleId:w,extra:{attributes:x,styles:C,classes:k}})})}},Ma={mixout:function(){return{icon:_a(La)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=In,e.nodeCallback=Ta,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return In(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(b,w){Promise.all([Xt(r,s),c.iconName?Xt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var k=Qt(P,2),E=k[0],x=k[1];b([e,fn({icons:{main:E,mask:x},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Pt(s);f.length>0&&(r.style=f);var l;return an(o)&&(l=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},za={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return It({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Ra={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return It({type:"counter",content:e},function(){return G("beforeDOMElementCreation",{content:e,params:a}),pa({content:e.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},Fa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?T:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,b=v===void 0?{}:v;return It({type:"text",content:e},function(){return G("beforeDOMElementCreation",{content:e,params:a}),An({content:e,transform:u(u({},T),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ft(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Un){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,An({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},ja=new RegExp('"',"ug"),Nn=[1105920,1112319];function Da(t){var n=t.replace(ja,""),e=Je(n,0),a=e>=Nn[0]&&e<=Nn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Yt(r?n[0]:n),isSecondary:a||r}}function Tn(t,n){var e="".concat(Ee).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=Z(t.children),o=i.filter(function(U){return U.getAttribute(Dt)===n})[0],s=D.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(_e),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[v][f[2].toLowerCase()]:Le[v][l],w=Da(m),P=w.value,k=w.isSecondary,E=f[0].startsWith("FontAwesome"),x=on(b,P),A=x;if(E){var C=ia(P);C.iconName&&C.prefix&&(x=C.iconName,b=C.prefix)}if(x&&!k&&(!o||o.getAttribute(Zt)!==b||o.getAttribute(tn)!==A)){t.setAttribute(e,A),o&&t.removeChild(o);var S=Ia(),H=S.extra;H.attributes[Dt]=n,Xt(x,b).then(function(U){var Tt=fn(u(u({},S),{},{icons:{main:U,mask:sn()},prefix:b,iconName:A,extra:H,watchable:!0})),R=h.createElement("svg");n==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=Tt.map(function(ge){return ct(ge)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ya(t){return Promise.all([Tn(t,"::before"),Tn(t,"::after")])}function $a(t){return t.parentNode!==document.head&&!~Ie.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Dt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _n(t){if(z)return new Promise(function(n,e){var a=Z(t.querySelectorAll("*")).filter($a).map(Ya),r=ln.begin("searchPseudoElements");ce(),Promise.all(a).then(function(){r(),Gt(),n()}).catch(function(){r(),Gt(),e()})})}var Ha={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=_n,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;d.searchPseudoElements&&_n(r)}}},Ln=!1,Ua={mixout:function(){return{dom:{unwatch:function(){ce(),Ln=!0}}}},hooks:function(){return{bootstrap:function(){En(Ht("mutationObserverCallbacks",{}))},noAuto:function(){Sa()},watch:function(e){var a=e.observeMutationsRoot;Ln?Gt():En(Ht("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Mn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Wa={mixout:function(){return{parse:{transform:function(e){return Mn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Mn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Xa(t){return t.tag==="g"?t.children:[t]}var Va={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):sn();return i.prefix||(i.prefix=Y()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,b=We({transform:f,containerWidth:m,iconWidth:l}),w={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},P=c.children?{children:c.children.map(zn)}:{},k={tag:"g",attributes:u({},b.inner),children:[zn(u({tag:c.tag,attributes:u(u({},c.attributes),b.path)},P))]},E={tag:"g",attributes:u({},b.outer),children:[k]},x="mask-".concat(s||st()),A="clip-".concat(s||st()),C={tag:"mask",attributes:u(u({},zt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Xa(v)},C]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},zt)}),{children:a,attributes:r}}}},Ga={provides:function(n){var e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ba={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},qa=[Ge,Ma,za,Ra,Fa,Ha,Ua,Wa,Va,Ga,Ba];fa(qa,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Bt=I.parse;I.findIconDefinition;I.toHtml;var Ka=I.icon;I.layer;I.text;I.counter;var p={},Qa={get exports(){return p},set exports(t){p=t}},Ja="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Za=Ja,tr=Za;function me(){}function de(){}de.resetWarningCache=me;var nr=function(){function t(a,r,i,o,s,f){if(f!==tr){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:de,resetWarningCache:me};return e.PropTypes=e,e};Qa.exports=nr();function Rn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Rn(Object(e),!0).forEach(function(a){K(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Rn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function St(t){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function K(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function er(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function ar(t,n){if(t==null)return{};var e=er(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function qt(t){return rr(t)||ir(t)||or(t)||sr()}function rr(t){if(Array.isArray(t))return Kt(t)}function ir(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function or(t,n){if(t){if(typeof t=="string")return Kt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kt(t,n)}}function Kt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,w=t.border,P=t.listItem,k=t.flip,E=t.size,x=t.rotation,A=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":w,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},K(n,"fa-".concat(E),typeof E<"u"&&E!==null),K(n,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),K(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),K(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function lr(t){return t=t-0,t===t}function ve(t){return lr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var cr=["style"];function ur(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=ve(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[ur(r)]=i:n[r]=i,n},{})}function pe(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return pe(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=mr(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[ve(l)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=ar(e,cr);return r.attrs.style=j(j({},r.attrs.style),o),t.apply(void 0,[n.tag,j(j({},r.attrs),s)].concat(qt(a)))}var be=!1;try{be=!0}catch{}function dr(){if(!be&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Fn(t){if(t&&St(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bt.icon)return Bt.icon(t);if(t===null)return null;if(t&&St(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Rt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?K({},t,n):{}}var Nt=jn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Fn(e),c=Rt("classes",[].concat(qt(fr(t)),qt(i.split(" ")))),m=Rt("transform",typeof t.transform=="string"?Bt.transform(t.transform):t.transform),v=Rt("mask",Fn(a)),b=Ka(l,j(j(j(j({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return dr("Could not find icon",l),null;var w=b.abstract,P={ref:n};return Object.keys(t).forEach(function(k){Nt.defaultProps.hasOwnProperty(k)||(P[k]=t[k])}),vr(w[0],P)});Nt.displayName="FontAwesomeIcon";Nt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};Nt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var vr=pe.bind(null,jn.createElement),pr={prefix:"fas",iconName:"face-smile-beam",icon:[512,512,[128522,"smile-beam"],"f5b8","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},yr=pr,kr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},xr={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},wr={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Ar={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Or={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Sr={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Pr={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Er={prefix:"fas",iconName:"greater-than",icon:[384,512,[62769],"3e","M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"]},br={prefix:"fas",iconName:"square-pen",icon:[448,512,["pen-square","pencil-square"],"f14b","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"]},Cr=br,gr={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Ir=gr,Nr={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Tr={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};export{Nt as F,Sr as a,Ar as b,Pr as c,Tr as d,kr as e,Ir as f,xr as g,yr as h,Nr as i,Er as j,wr as k,Or as l,Cr as m,p};
