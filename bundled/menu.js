(function () {
  'use strict';

  /******************************************************************************
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
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */


  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$7= e => n => {if (typeof n === "function") {return ((e, n) => {if (!customElements.get(e)){customElements.define(e, n);}return n;})(e, n);} else {return ((e, n) => {const { kind: t, elements: s } = n;return {kind: t,elements: s,finisher(n) {if (!customElements.get(e)){customElements.define(e, n);}}};})(e, n);}};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$5=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$6=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$6(n){return (t,o)=>void 0!==o?e$6(n,t,o):i$5(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$3(t){return n$6({...t,state:!0})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$6=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$5(e){return o$6({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i$4(i,n){return o$6({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$5;const e$4=null!=(null===(n$5=window.HTMLSlotElement)||void 0===n$5?void 0:n$5.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$3(n){const{slot:l,selector:t}=null!=n?n:{};return o$6({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$4(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=window,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$2.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$2=window,s$1=i$2.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$2=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$2,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$3+s.slice(v)+n$2+w):s+n$2+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$2)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$2),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$2),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$2,t+1));)v.push({type:7,index:r}),t+=n$2.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$2.litHtmlVersions)&&void 0!==t$1?t$1:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o$2;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.3.3");

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$9 = i$3 `@media(forced-colors: active){:host{--md-list-item-list-item-disabled-label-text-color: GrayText;--md-list-item-list-item-disabled-label-text-opacity: 1;--md-list-item-list-item-disabled-leading-icon-color: GrayText;--md-list-item-list-item-disabled-leading-icon-opacity: 1;--md-list-item-list-item-disabled-trailing-icon-color: GrayText;--md-list-item-list-item-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$8 = i$3 `:host{--_list-item-container-color: var(--md-list-item-list-item-container-color, var(--md-sys-color-surface, #fef7ff));--_list-item-container-shape: var(--md-list-item-list-item-container-shape, 0px);--_list-item-disabled-label-text-color: var(--md-list-item-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-label-text-opacity: var(--md-list-item-list-item-disabled-label-text-opacity, 0.3);--_list-item-disabled-leading-icon-color: var(--md-list-item-list-item-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-leading-icon-opacity: var(--md-list-item-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-item-list-item-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-trailing-icon-opacity: var(--md-list-item-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-list-item-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-leading-icon-icon-color: var(--md-list-item-list-item-focus-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-focus-trailing-icon-icon-color: var(--md-list-item-list-item-focus-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-label-text-color: var(--md-list-item-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-leading-icon-icon-color: var(--md-list-item-list-item-hover-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-state-layer-color: var(--md-list-item-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-state-layer-opacity: var(--md-list-item-list-item-hover-state-layer-opacity, 0.08);--_list-item-hover-trailing-icon-icon-color: var(--md-list-item-list-item-hover-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-label-text-color: var(--md-list-item-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-label-text-line-height: var(--md-list-item-list-item-label-text-line-height, 1.5rem);--_list-item-label-text-type: var(--md-list-item-list-item-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-large-leading-video-height: var(--md-list-item-list-item-large-leading-video-height, 69px);--_list-item-leading-avatar-label-color: var(--md-list-item-list-item-leading-avatar-label-color, var(--md-sys-color-on-primary-container, #21005d));--_list-item-leading-avatar-label-type: var(--md-list-item-list-item-leading-avatar-label-type, var(--md-sys-typescale-title-medium, 500 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-leading-avatar-color: var(--md-list-item-list-item-leading-avatar-color, var(--md-sys-color-primary-container, #eaddff));--_list-item-leading-avatar-shape: var(--md-list-item-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-item-list-item-leading-avatar-size, 40px);--_list-item-leading-icon-color: var(--md-list-item-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-leading-icon-size: var(--md-list-item-list-item-leading-icon-size, 18px);--_list-item-leading-image-height: var(--md-list-item-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-item-list-item-leading-image-shape, 0px);--_list-item-leading-image-width: var(--md-list-item-list-item-leading-image-width, 56px);--_list-item-leading-video-shape: var(--md-list-item-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-item-list-item-leading-video-width, 100px);--_list-item-one-line-container-height: var(--md-list-item-list-item-one-line-container-height, 56px);--_list-item-pressed-label-text-color: var(--md-list-item-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-leading-icon-icon-color: var(--md-list-item-list-item-pressed-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-pressed-state-layer-color: var(--md-list-item-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-state-layer-opacity: var(--md-list-item-list-item-pressed-state-layer-opacity, 0.12);--_list-item-pressed-trailing-icon-icon-color: var(--md-list-item-list-item-pressed-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-small-leading-video-height: var(--md-list-item-list-item-small-leading-video-height, 56px);--_list-item-supporting-text-color: var(--md-list-item-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-supporting-text-type: var(--md-list-item-list-item-supporting-text-type, var(--md-sys-typescale-body-medium, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_list-item-three-line-container-height: var(--md-list-item-list-item-three-line-container-height, 88px);--_list-item-trailing-icon-color: var(--md-list-item-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-icon-size: var(--md-list-item-list-item-trailing-icon-size, 24px);--_list-item-trailing-supporting-text-color: var(--md-list-item-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-supporting-text-line-height: var(--md-list-item-list-item-trailing-supporting-text-line-height, 1rem);--_list-item-trailing-supporting-text-type: var(--md-list-item-list-item-trailing-supporting-text-type, var(--md-sys-typescale-label-small, 500 0.688rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_list-item-two-line-container-height: var(--md-list-item-list-item-two-line-container-height, 72px);--_list-item-leading-element-leading-space: var(--md-list-item-list-item-leading-element-leading-space, 16px);--_list-item-leading-space: var(--md-list-item-list-item-leading-space, 16px);--_list-item-leading-video-leading-space: var(--md-list-item-list-item-leading-video-leading-space, 0px);--_list-item-trailing-element-headline-trailing-element-space: var(--md-list-item-list-item-trailing-element-headline-trailing-element-space, 16px);--_list-item-trailing-space: var(--md-list-item-list-item-trailing-space, 16px)}:host{color:unset;--md-focus-ring-shape: 8px;--md-ripple-hover-color: var(--_list-item-hover-state-layer-color);--md-ripple-hover-opacity: var(--_list-item-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_list-item-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_list-item-pressed-state-layer-opacity)}.list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;text-decoration:none;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape);-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled):not(.noninteractive){cursor:pointer}.list-item.disabled{pointer-events:none}.content-wrapper{display:flex;width:100%;border-radius:inherit}md-ripple{border-radius:inherit}.with-one-line{min-height:var(--_list-item-one-line-container-height)}.with-two-line{min-height:var(--_list-item-two-line-container-height)}.with-three-line{min-height:var(--_list-item-three-line-container-height)}.start{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 auto;z-index:1}.with-three-line .start{justify-content:start}slot[name=start]::slotted([data-variant=icon]),slot[name=start]::slotted([data-variant=image]),slot[name=start]::slotted([data-variant=avatar]){margin-inline-start:var(--_list-item-leading-element-leading-space)}.body{display:inline-flex;justify-content:center;flex-direction:column;box-sizing:border-box;flex:1 0 0;padding-inline-start:var(--_list-item-leading-space);padding-inline-end:var(--_list-item-trailing-space);z-index:1}.end{display:inline-flex;flex-direction:column;justify-content:center;flex:0 0 auto;z-index:1}.with-three-line .end{justify-content:start}slot[name=end]::slotted(*),.trailing-supporting-text{margin-inline-end:var(--_list-item-trailing-element-headline-trailing-element-space)}.label-text{display:flex;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;color:var(--_list-item-label-text-color);font:var(--_list-item-label-text-type)}:hover .label-text{color:var(--_list-item-hover-label-text-color)}:focus .label-text{color:var(--_list-item-focus-label-text-color)}:active .label-text{color:var(--_list-item-pressed-label-text-color)}.disabled .label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text{text-overflow:ellipsis;white-space:normal;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font:var(--_list-item-supporting-text-type);-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.disabled .supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text--multi-line{-webkit-line-clamp:2}.trailing-supporting-text{padding-inline-start:16px;font:var(--_list-item-trailing-supporting-text-type)}.list-item:not(.disabled) .trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.disabled .trailing-supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.with-three-line .trailing-supporting-text{padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-supporting-text-line-height))/2)}.focus-ring{z-index:1}::slotted([data-variant=image]){display:inline-flex;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape);padding-block:calc((var(--_list-item-two-line-container-height) - var(--_list-item-leading-image-height))/2)}.with-three-line ::slotted([data-variant=image]){padding-block:0}slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-leading-icon-color);--md-icon-size:var(--_list-item-leading-icon-size)}.with-three-line slot[name=start]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-leading-icon-size))/2)}slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-trailing-icon-color);--md-icon-size:var(--_list-item-trailing-icon-size)}.with-three-line slot[name=end]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-icon-size))/2)}:hover slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-leading-icon-icon-color)}:hover slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-trailing-icon-icon-color)}:focus slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-leading-icon-icon-color)}:focus slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-trailing-icon-icon-color)}:active slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-leading-icon-icon-color)}:active slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-trailing-icon-icon-color)}.disabled slot[name=start]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-leading-icon-opacity);--md-icon-color:var(--_list-item-disabled-leading-icon-color)}.disabled slot[name=end]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-trailing-icon-opacity);--md-icon-color:var(--_list-item-disabled-trailing-icon-color)}::slotted([data-variant=avatar]){display:inline-flex;justify-content:center;align-items:center;background-color:var(--_list-item-leading-avatar-color);height:var(--_list-item-leading-avatar-size);width:var(--_list-item-leading-avatar-size);border-radius:var(--_list-item-leading-avatar-shape);color:var(--_list-item-leading-avatar-label-color);font:var(--_list-item-leading-avatar-label-type)}::slotted([data-variant=video]),::slotted([data-variant=video-large]){display:inline-flex;object-fit:cover;height:var(--_list-item-small-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape);margin-inline-start:var(--_list-item-leading-video-leading-space);padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-small-leading-video-height))/2)}.with-three-line ::slotted([data-variant=video]),.with-three-line ::slotted([data-variant=video-large]){padding-block:0}::slotted([data-variant=video-large]){padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-large-leading-video-height))/2);height:var(--_list-item-large-leading-video-height)}/*# sourceMappingURL=list-item-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$7 = i$3 `@media(forced-colors: active){.list-item{position:relative}:host([selected]) .list-item:not(:has(.focus-ring[visible]))::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$6 = i$3 `:host{--_list-item-selected-container-color: var(--md-menu-item-list-item-selected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_list-item-container-color: var(--md-menu-item-list-item-container-color, var(--md-sys-color-surface-container, #f3edf7));--md-list-item-list-item-container-color: var(--_list-item-container-color)}:host([selected]) .list-item{background-color:var(--_list-item-selected-container-color)}.list-item:has(.submenu:hover){--md-ripple-hover-opacity: 0}/*# sourceMappingURL=menu-item-styles.css.map */
`;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$1=e(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A key to retrieve an `Attachable` element's `AttachableController` from a
   * global `MutationObserver`.
   */
  const ATTACHABLE_CONTROLLER = Symbol('attachableController');
  let FOR_ATTRIBUTE_OBSERVER;
  {
      /**
       * A global `MutationObserver` that reacts to `for` attribute changes on
       * `Attachable` elements. If the `for` attribute changes, the controller will
       * re-attach to the new referenced element.
       */
      FOR_ATTRIBUTE_OBSERVER = new MutationObserver(records => {
          for (const record of records) {
              // When a control's `for` attribute changes, inform its
              // `AttachableController` to update to a new control.
              record.target[ATTACHABLE_CONTROLLER]
                  ?.hostConnected();
          }
      });
  }
  /**
   * A controller that provides an implementation for `Attachable` elements.
   *
   * @example
   * ```ts
   * class MyElement extends LitElement implements Attachable {
   *   get control() { return this.attachableController.control; }
   *
   *   private readonly attachableController = new AttachableController(
   *     this,
   *     (previousControl, newControl) => {
   *       previousControl?.removeEventListener('click', this.handleClick);
   *       newControl?.addEventListener('click', this.handleClick);
   *     }
   *   );
   *
   *   // Implement remaining `Attachable` properties/methods that call the
   *   // controller's properties/methods.
   * }
   * ```
   */
  class AttachableController {
      get htmlFor() {
          return this.host.getAttribute('for');
      }
      set htmlFor(htmlFor) {
          if (htmlFor === null) {
              this.host.removeAttribute('for');
          }
          else {
              this.host.setAttribute('for', htmlFor);
          }
      }
      get control() {
          if (this.host.hasAttribute('for')) {
              if (!this.htmlFor || !this.host.isConnected) {
                  return null;
              }
              return this.host.getRootNode()
                  .querySelector(`#${this.htmlFor}`);
          }
          return this.currentControl || this.host.parentElement;
      }
      /**
       * Creates a new controller for an `Attachable` element.
       *
       * @param host The `Attachable` element.
       * @param onControlChange A callback with two parameters for the previous and
       *     next control. An `Attachable` element may perform setup or teardown
       *     logic whenever the control changes.
       */
      constructor(host, onControlChange) {
          this.host = host;
          this.onControlChange = onControlChange;
          this.currentControl = null;
          host.addController(this);
          host[ATTACHABLE_CONTROLLER] = this;
          FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
      }
      attach(control) {
          if (control === this.currentControl) {
              return;
          }
          this.setCurrentControl(control);
          // When imperatively attaching, remove the `for` attribute so
          // that the attached control is used instead of a referenced one.
          this.host.removeAttribute('for');
      }
      detach() {
          this.setCurrentControl(null);
          // When imperatively detaching, add an empty `for=""` attribute. This will
          // ensure the control is `null` rather than the `parentElement`.
          this.host.setAttribute('for', '');
      }
      /** @private */
      hostConnected() {
          this.setCurrentControl(this.control);
      }
      /** @private */
      hostDisconnected() {
          this.setCurrentControl(null);
      }
      setCurrentControl(control) {
          this.onControlChange(this.currentControl, control);
          this.currentControl = control;
      }
  }

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Easing functions to use for web animations.
   *
   * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
   *
   * TODO(b/241113345): replace with tokens
   */
  const EASING = {
      STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
      STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
      STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
      EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
      EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
      EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
  };
  /**
   * Creates an `AnimationSignal` that can be used to cancel a previous task.
   *
   * @example
   * class MyClass {
   *   private labelAnimationSignal = createAnimationSignal();
   *
   *   private async animateLabel() {
   *     // Start of the task. Previous tasks will be canceled.
   *     const signal = this.labelAnimationSignal.start();
   *
   *     // Do async work...
   *     if (signal.aborted) {
   *       // Use AbortSignal to check if a request was made to abort after some
   *       // asynchronous work.
   *       return;
   *     }
   *
   *     const animation = this.animate(...);
   *     // Add event listeners to be notified when the task should be canceled.
   *     signal.addEventListener('abort', () => {
   *       animation.cancel();
   *     });
   *
   *     animation.addEventListener('finish', () => {
   *       // Tell the signal that the current task is finished.
   *       this.labelAnimationSignal.finish();
   *     });
   *   }
   * }
   *
   * @return An `AnimationSignal`.
   */
  function createAnimationSignal() {
      // The current animation's AbortController
      let animationAbortController = null;
      return {
          start() {
              // Tell the previous animation to cancel.
              animationAbortController?.abort();
              // Set up a new AbortController for the current animation.
              animationAbortController = new AbortController();
              // Provide the AbortSignal so that the caller can check aborted status
              // and add listeners.
              return animationAbortController.signal;
          },
          finish() {
              animationAbortController = null;
          },
      };
  }

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const PRESS_GROW_MS = 450;
  const MINIMUM_PRESS_MS = 225;
  const INITIAL_ORIGIN_SCALE = 0.2;
  const PADDING = 10;
  const SOFT_EDGE_MINIMUM_SIZE = 75;
  const SOFT_EDGE_CONTAINER_RATIO = 0.35;
  const PRESS_PSEUDO = '::after';
  const ANIMATION_FILL = 'forwards';
  /**
   * Interaction states for the ripple.
   *
   * On Touch:
   *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
   *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
   *
   * On Mouse or Pen:
   *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
   */
  var State;
  (function (State) {
      /**
       * Initial state of the control, no touch in progress.
       *
       * Transitions:
       *   - on touch down: transition to `TOUCH_DELAY`.
       *   - on mouse down: transition to `WAITING_FOR_CLICK`.
       */
      State[State["INACTIVE"] = 0] = "INACTIVE";
      /**
       * Touch down has been received, waiting to determine if it's a swipe or
       * scroll.
       *
       * Transitions:
       *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
       *   - on cancel: transition to `INACTIVE`.
       *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
       */
      State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
      /**
       * A touch has been deemed to be a press
       *
       * Transitions:
       *  - on up: transition to `WAITING_FOR_CLICK`.
       */
      State[State["HOLDING"] = 2] = "HOLDING";
      /**
       * The user touch has finished, transition into rest state.
       *
       * Transitions:
       *   - on click end press; transition to `INACTIVE`.
       */
      State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
  })(State || (State = {}));
  /**
   * Events that the ripple listens to.
   */
  const EVENTS$1 = [
      'click', 'contextmenu', 'pointercancel', 'pointerdown', 'pointerenter',
      'pointerleave', 'pointerup'
  ];
  /**
   * Delay reacting to touch so that we do not show the ripple for a swipe or
   * scroll interaction.
   */
  const TOUCH_DELAY_MS = 150;
  /**
   * A ripple component.
   */
  class Ripple extends s {
      constructor() {
          super(...arguments);
          /**
           * Disables the ripple.
           */
          this.disabled = false;
          this.hovered = false;
          this.pressed = false;
          this.rippleSize = '';
          this.rippleScale = '';
          this.initialSize = 0;
          this.state = State.INACTIVE;
          this.checkBoundsAfterContextMenu = false;
          this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
      }
      get htmlFor() {
          return this.attachableController.htmlFor;
      }
      set htmlFor(htmlFor) {
          this.attachableController.htmlFor = htmlFor;
      }
      get control() {
          return this.attachableController.control;
      }
      attach(control) {
          this.attachableController.attach(control);
      }
      detach() {
          this.attachableController.detach();
      }
      render() {
          const classes = {
              'hovered': this.hovered,
              'pressed': this.pressed,
          };
          return x `<div class="surface ${o$1(classes)}"></div>`;
      }
      update(changedProps) {
          if (changedProps.has('disabled') && this.disabled) {
              this.hovered = false;
              this.pressed = false;
          }
          super.update(changedProps);
      }
      /**
       * TODO(b/269799771): make private
       * @private only public for slider
       */
      handlePointerenter(event) {
          if (!this.shouldReactToEvent(event)) {
              return;
          }
          this.hovered = true;
      }
      /**
       * TODO(b/269799771): make private
       * @private only public for slider
       */
      handlePointerleave(event) {
          if (!this.shouldReactToEvent(event)) {
              return;
          }
          this.hovered = false;
          // release a held mouse or pen press that moves outside the element
          if (this.state !== State.INACTIVE) {
              this.endPressAnimation();
          }
      }
      handlePointerup(event) {
          if (!this.shouldReactToEvent(event)) {
              return;
          }
          if (this.state === State.HOLDING) {
              this.state = State.WAITING_FOR_CLICK;
              return;
          }
          if (this.state === State.TOUCH_DELAY) {
              this.state = State.WAITING_FOR_CLICK;
              this.startPressAnimation(this.rippleStartEvent);
              return;
          }
      }
      async handlePointerdown(event) {
          if (!this.shouldReactToEvent(event)) {
              return;
          }
          this.rippleStartEvent = event;
          if (!this.isTouch(event)) {
              this.state = State.WAITING_FOR_CLICK;
              this.startPressAnimation(event);
              return;
          }
          // after a longpress contextmenu event, an extra `pointerdown` can be
          // dispatched to the pressed element. Check that the down is within
          // bounds of the element in this case.
          if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
              return;
          }
          this.checkBoundsAfterContextMenu = false;
          // Wait for a hold after touch delay
          this.state = State.TOUCH_DELAY;
          await new Promise(resolve => {
              setTimeout(resolve, TOUCH_DELAY_MS);
          });
          if (this.state !== State.TOUCH_DELAY) {
              return;
          }
          this.state = State.HOLDING;
          this.startPressAnimation(event);
      }
      handleClick() {
          // Click is a MouseEvent in Firefox and Safari, so we cannot use
          // `shouldReactToEvent`
          if (this.disabled) {
              return;
          }
          if (this.state === State.WAITING_FOR_CLICK) {
              this.endPressAnimation();
              return;
          }
          if (this.state === State.INACTIVE) {
              // keyboard synthesized click event
              this.startPressAnimation();
              this.endPressAnimation();
          }
      }
      handlePointercancel(event) {
          if (!this.shouldReactToEvent(event)) {
              return;
          }
          this.endPressAnimation();
      }
      handleContextmenu() {
          if (this.disabled) {
              return;
          }
          this.checkBoundsAfterContextMenu = true;
          this.endPressAnimation();
      }
      determineRippleSize() {
          const { height, width } = this.getBoundingClientRect();
          const maxDim = Math.max(height, width);
          const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
          const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
          const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
          const maxRadius = hypotenuse + PADDING;
          this.initialSize = initialSize;
          this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
          this.rippleSize = `${initialSize}px`;
      }
      getNormalizedPointerEventCoords(pointerEvent) {
          const { scrollX, scrollY } = window;
          const { left, top } = this.getBoundingClientRect();
          const documentX = scrollX + left;
          const documentY = scrollY + top;
          const { pageX, pageY } = pointerEvent;
          return { x: pageX - documentX, y: pageY - documentY };
      }
      getTranslationCoordinates(positionEvent) {
          const { height, width } = this.getBoundingClientRect();
          // end in the center
          const endPoint = {
              x: (width - this.initialSize) / 2,
              y: (height - this.initialSize) / 2,
          };
          let startPoint;
          if (positionEvent instanceof PointerEvent) {
              startPoint = this.getNormalizedPointerEventCoords(positionEvent);
          }
          else {
              startPoint = {
                  x: width / 2,
                  y: height / 2,
              };
          }
          // center around start point
          startPoint = {
              x: startPoint.x - (this.initialSize / 2),
              y: startPoint.y - (this.initialSize / 2),
          };
          return { startPoint, endPoint };
      }
      startPressAnimation(positionEvent) {
          if (!this.mdRoot) {
              return;
          }
          this.pressed = true;
          this.growAnimation?.cancel();
          this.determineRippleSize();
          const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
          const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
          const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
          this.growAnimation = this.mdRoot.animate({
              top: [0, 0],
              left: [0, 0],
              height: [this.rippleSize, this.rippleSize],
              width: [this.rippleSize, this.rippleSize],
              transform: [
                  `translate(${translateStart}) scale(1)`,
                  `translate(${translateEnd}) scale(${this.rippleScale})`
              ],
          }, {
              pseudoElement: PRESS_PSEUDO,
              duration: PRESS_GROW_MS,
              easing: EASING.STANDARD,
              fill: ANIMATION_FILL
          });
      }
      async endPressAnimation() {
          this.state = State.INACTIVE;
          const animation = this.growAnimation;
          const pressAnimationPlayState = animation?.currentTime ?? Infinity;
          if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
              this.pressed = false;
              return;
          }
          await new Promise(resolve => {
              setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
          });
          if (this.growAnimation !== animation) {
              // A new press animation was started. The old animation was canceled and
              // should not finish the pressed state.
              return;
          }
          this.pressed = false;
      }
      /**
       * Returns `true` if
       *  - the ripple element is enabled
       *  - the pointer is primary for the input type
       *  - the pointer is the pointer that started the interaction, or will start
       * the interaction
       *  - the pointer is a touch, or the pointer state has the primary button
       * held, or the pointer is hovering
       */
      shouldReactToEvent(event) {
          if (this.disabled || !event.isPrimary) {
              return false;
          }
          if (this.rippleStartEvent &&
              this.rippleStartEvent.pointerId !== event.pointerId) {
              return false;
          }
          if (event.type === 'pointerenter' || event.type === 'pointerleave') {
              return !this.isTouch(event);
          }
          const isPrimaryButton = event.buttons === 1;
          return this.isTouch(event) || isPrimaryButton;
      }
      /**
       * Check if the event is within the bounds of the element.
       *
       * This is only needed for the "stuck" contextmenu longpress on Chrome.
       */
      inBounds({ x, y }) {
          const { top, left, bottom, right } = this.getBoundingClientRect();
          return x >= left && x <= right && y >= top && y <= bottom;
      }
      isTouch({ pointerType }) {
          return pointerType === 'touch';
      }
      /** @private */
      async handleEvent(event) {
          switch (event.type) {
              case 'click':
                  this.handleClick();
                  break;
              case 'contextmenu':
                  this.handleContextmenu();
                  break;
              case 'pointercancel':
                  this.handlePointercancel(event);
                  break;
              case 'pointerdown':
                  await this.handlePointerdown(event);
                  break;
              case 'pointerenter':
                  this.handlePointerenter(event);
                  break;
              case 'pointerleave':
                  this.handlePointerleave(event);
                  break;
              case 'pointerup':
                  this.handlePointerup(event);
                  break;
          }
      }
      onControlChange(prev, next) {
          for (const event of EVENTS$1) {
              prev?.removeEventListener(event, this);
              next?.addEventListener(event, this);
          }
      }
  }
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
      i$4('.surface')
  ], Ripple.prototype, "mdRoot", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$5 = i$3 `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Ripples, also known as state layers, are visual indicators used to
   * communicate the status of a component or interactive element.
   *
   * @description A state layer is a semi-transparent covering on an element that
   * indicates its state. State layers provide a systematic approach to
   * visualizing states by using opacity. A layer can be applied to an entire
   * element or in a circular shape and only one state layer can be applied at a
   * given time.
   *
   * @final
   * @suppress {visibility}
   */
  let MdRipple = class MdRipple extends Ripple {
  };
  MdRipple.styles = [styles$5];
  MdRipple = __decorate([
      e$7('md-ripple')
  ], MdRipple);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Events that the focus ring listens to.
   */
  const EVENTS = ['focusin', 'focusout', 'pointerdown'];
  /**
   * A focus ring component.
   */
  class FocusRing extends s {
      constructor() {
          super(...arguments);
          /**
           * Makes the focus ring visible.
           */
          this.visible = false;
          /**
           * Makes the focus ring animate inwards instead of outwards.
           */
          this.inward = false;
          this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
      }
      get htmlFor() {
          return this.attachableController.htmlFor;
      }
      set htmlFor(htmlFor) {
          this.attachableController.htmlFor = htmlFor;
      }
      get control() {
          return this.attachableController.control;
      }
      attach(control) {
          this.attachableController.attach(control);
      }
      detach() {
          this.attachableController.detach();
      }
      /** @private */
      handleEvent(event) {
          if (event[HANDLED_BY_FOCUS_RING]) {
              // This ensures the focus ring does not activate when multiple focus rings
              // are used within a single component.
              return;
          }
          switch (event.type) {
              default:
                  return;
              case 'focusin':
                  this.visible = this.control?.matches(':focus-visible') ?? false;
                  break;
              case 'focusout':
              case 'pointerdown':
                  this.visible = false;
                  break;
          }
          event[HANDLED_BY_FOCUS_RING] = true;
      }
      onControlChange(prev, next) {
          for (const event of EVENTS) {
              prev?.removeEventListener(event, this);
              next?.addEventListener(event, this);
          }
      }
  }
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$4 = i$3 `:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/267336424): add docs
   *
   * @final
   * @suppress {visibility}
   */
  let MdFocusRing = class MdFocusRing extends FocusRing {
  };
  MdFocusRing.styles = [styles$4];
  MdFocusRing = __decorate([
      e$7('md-focus-ring')
  ], MdFocusRing);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Accessibility Object Model reflective aria properties.
   */
  const ARIA_PROPERTIES = [
      'ariaAtomic',
      'ariaAutoComplete',
      'ariaBusy',
      'ariaChecked',
      'ariaColCount',
      'ariaColIndex',
      'ariaColSpan',
      'ariaCurrent',
      'ariaDisabled',
      'ariaExpanded',
      'ariaHasPopup',
      'ariaHidden',
      'ariaInvalid',
      'ariaKeyShortcuts',
      'ariaLabel',
      'ariaLevel',
      'ariaLive',
      'ariaModal',
      'ariaMultiLine',
      'ariaMultiSelectable',
      'ariaOrientation',
      'ariaPlaceholder',
      'ariaPosInSet',
      'ariaPressed',
      'ariaReadOnly',
      'ariaRequired',
      'ariaRoleDescription',
      'ariaRowCount',
      'ariaRowIndex',
      'ariaRowSpan',
      'ariaSelected',
      'ariaSetSize',
      'ariaSort',
      'ariaValueMax',
      'ariaValueMin',
      'ariaValueNow',
      'ariaValueText',
  ];
  /**
   * Accessibility Object Model aria attributes.
   */
  ARIA_PROPERTIES.map(ariaPropertyToAttribute);
  /**
   * Converts an AOM aria property into its corresponding attribute.
   *
   * @example
   * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
   *
   * @param property The aria property.
   * @return The aria attribute.
   */
  function ariaPropertyToAttribute(property) {
      return property
          .replace('aria', 'aria-')
          // IDREF attributes also include an "Element" or "Elements" suffix
          .replace(/Elements?/g, '')
          .toLowerCase();
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Sets up a `ReactiveElement` constructor to enable updates when delegating
   * aria attributes. Elements may bind `this.aria*` properties to `aria-*`
   * attributes in their render functions.
   *
   * This function will:
   * - Call `requestUpdate()` when an aria attribute changes.
   * - Add `role="presentation"` to the host.
   *
   * NOTE: The following features are not currently supported:
   * - Delegating IDREF attributes (ex: `aria-labelledby`, `aria-controls`)
   * - Delegating the `role` attribute
   *
   * @example
   * class XButton extends LitElement {
   *   static {
   *     requestUpdateOnAriaChange(this);
   *   }
   *
   *   protected override render() {
   *     return html`
   *       <button aria-label=${this.ariaLabel || nothing}>
   *         <slot></slot>
   *       </button>
   *     `;
   *   }
   * }
   *
   * @param ctor The `ReactiveElement` constructor to patch.
   */
  function requestUpdateOnAriaChange(ctor) {
      for (const ariaProperty of ARIA_PROPERTIES) {
          ctor.createProperty(ariaProperty, {
              attribute: ariaPropertyToAttribute(ariaProperty),
              reflect: true,
          });
      }
      ctor.addInitializer(element => {
          const controller = {
              hostConnected() {
                  element.setAttribute('role', 'presentation');
              }
          };
          element.addController(controller);
      });
  }

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$2;
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class ListItemEl extends s {
      constructor() {
          super(...arguments);
          /**
           * The primary, headline text of the list item.
           */
          this.headline = '';
          /**
           * The one-line supporting text below the headline. Set
           * `multiLineSupportingText` to `true` to support multiple lines in the
           * supporting text.
           */
          this.supportingText = '';
          /**
           * Modifies `supportingText` to support multiple lines.
           */
          this.multiLineSupportingText = false;
          /**
           * The supporting text placed at the end of the item. Overridden by elements
           * slotted into the `end` slot.
           */
          this.trailingSupportingText = '';
          /**
           * Disables the item and makes it non-selectable and non-interactive.
           */
          this.disabled = false;
          /**
           * The tabindex of the underlying item.
           *
           * __NOTE:__ this is overridden by the keyboard behavior of `md-list` and by
           * setting `selected`.
           */
          this.itemTabIndex = -1;
          /**
           * Whether or not the element is actively being interacted with by md-list.
           * When active, tabindex is set to 0, and in some list item variants (like
           * md-list-item), focuses the underlying item.
           */
          this.active = false;
          /**
           * Sets the role of the list item. Set to '' to clear the role.
           */
          this.type = 'listitem';
          /**
           * READONLY. Sets the `md-list-item` attribute on the element.
           */
          this.isListItem = true;
          /**
           * Only meant to be overridden by subclassing and not by the user. This is
           * so that we have control over focus on specific variants such as disabling
           * focus on <md-autocomplete-item> but enabling it for <md-menu-item>.
           */
          this.focusOnActivation = true;
          this.isFirstUpdate = true;
      }
      willUpdate(changed) {
          if (changed.has('active') && !this.disabled) {
              if (this.active) {
                  this.itemTabIndex = 0;
              }
              else if (!this.isFirstUpdate) {
                  // Do not reset anything if it's the first render because user could
                  // have set `itemTabIndex` manually.
                  this.itemTabIndex = -1;
              }
          }
      }
      render() {
          return this.renderListItem(x `
      <div class="content-wrapper">
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
      </div>
    `);
      }
      /**
       * Renders the root list item.
       *
       * @param content the child content of the list item.
       */
      renderListItem(content) {
          return x `
      <li
        id="item"
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        role=${this.type === 'none' ? A : this.type}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        class="list-item ${o$1(this.getRenderClasses())}"
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${content}</li>
    `;
      }
      /**
       * Handles rendering of the ripple element.
       */
      renderRipple() {
          return x `<md-ripple for="item" ?disabled=${this.disabled}></md-ripple>`;
      }
      /**
       * Handles rendering of the focus ring.
       */
      renderFocusRing() {
          return x `<md-focus-ring class="focus-ring" for="item" inward></md-focus-ring>`;
      }
      /**
       * Classes applied to the list item root.
       */
      getRenderClasses() {
          return {
              'with-one-line': this.supportingText === '',
              'with-two-line': this.supportingText !== '' && !this.multiLineSupportingText,
              'with-three-line': this.supportingText !== '' && this.multiLineSupportingText,
              'disabled': this.disabled
          };
      }
      /**
       * The content rendered at the start of the list item.
       */
      renderStart() {
          return x `<div class="start"><slot name="start"></slot></div>`;
      }
      /**
       * Handles rendering the headline and supporting text.
       */
      renderBody() {
          const supportingText = this.supportingText !== '' ? this.renderSupportingText() : '';
          return x `<div class="body"
      ><span class="label-text">${this.headline}</span>${supportingText}</div>`;
      }
      /**
       * Renders the one-line supporting text.
       */
      renderSupportingText() {
          return x `<span
        class="supporting-text ${o$1(this.getSupportingTextClasses())}"
      >${this.supportingText}</span>`;
      }
      /**
       * Gets the classes for the supporting text node
       */
      getSupportingTextClasses() {
          return { 'supporting-text--multi-line': this.multiLineSupportingText };
      }
      /**
       * The content rendered at the end of the list item.
       */
      renderEnd() {
          const supportingText = this.trailingSupportingText !== '' ?
              this.renderTrailingSupportingText() :
              '';
          return x `<div class="end"
      ><slot name="end">${supportingText}</slot></div>`;
      }
      /**
       * Renders the supporting text at the end of the list item.
       */
      renderTrailingSupportingText() {
          return x `<span class="trailing-supporting-text"
      >${this.trailingSupportingText}</span>`;
      }
      updated(changed) {
          super.updated(changed);
          // will focus the list item root if it is selected but not on the first
          // update or else it may cause the page to jump on first load.
          if (changed.has('active') && !this.isFirstUpdate && this.active &&
              this.focusOnActivation) {
              this.focus();
          }
          this.isFirstUpdate = false;
      }
      focus() {
          this.listItemRoot?.focus?.();
      }
  }
  _a$2 = ListItemEl;
  (() => {
      requestUpdateOnAriaChange(_a$2);
  })();
  __decorate([
      n$6()
  ], ListItemEl.prototype, "headline", void 0);
  __decorate([
      n$6({ attribute: 'supporting-text' })
  ], ListItemEl.prototype, "supportingText", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'multi-line-supporting-text' })
  ], ListItemEl.prototype, "multiLineSupportingText", void 0);
  __decorate([
      n$6({ attribute: 'trailing-supporting-text' })
  ], ListItemEl.prototype, "trailingSupportingText", void 0);
  __decorate([
      n$6({ type: Boolean })
  ], ListItemEl.prototype, "disabled", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'item-tabindex' })
  ], ListItemEl.prototype, "itemTabIndex", void 0);
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], ListItemEl.prototype, "active", void 0);
  __decorate([
      n$6()
  ], ListItemEl.prototype, "type", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'md-list-item', reflect: true })
  ], ListItemEl.prototype, "isListItem", void 0);
  __decorate([
      i$4('.list-item')
  ], ListItemEl.prototype, "listItemRoot", void 0);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class ListItemLink extends ListItemEl {
      constructor() {
          super(...arguments);
          this.type = 'none';
      }
      renderListItem(content) {
          return x `
      <a
        id="item"
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        role=${this.type === 'none' ? A : this.type}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        class="list-item ${o$1(this.getRenderClasses())}"
        href=${this.href}
        target=${this.target || A}
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${content}</a>
    `;
      }
  }
  __decorate([
      n$6()
  ], ListItemLink.prototype, "href", void 0);
  __decorate([
      n$6()
  ], ListItemLink.prototype, "target", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The event that closes any parent menus. It is recommended to subclass and
   * dispatch this event rather than creating your own `close-menu` event.
   */
  class CloseMenuEvent extends Event {
      constructor(initiator, reason) {
          super('close-menu', { bubbles: true, composed: true });
          this.initiator = initiator;
          this.reason = reason;
          this.itemPath = [initiator];
      }
  }
  /**
   * The event that signals to the menu that it should stay open on the focusout
   * event.
   */
  class StayOpenOnFocusoutEvent extends Event {
      constructor() {
          super('stay-open-on-focusout', { bubbles: true, composed: true });
      }
  }
  /**
   * The event that signals to the menu that it should close open on the focusout
   * event.
   */
  class CloseOnFocusoutEvent extends Event {
      constructor() {
          super('close-on-focusout', { bubbles: true, composed: true });
      }
  }
  /**
   * The default close menu event used by md-menu. To create your own `close-menu`
   * event, you should subclass the `CloseMenuEvent` instead.
   */
  // tslint:disable-next-line
  const DefaultCloseMenuEvent = (CloseMenuEvent);
  /**
   * The event that requests the parent md-menu to deactivate all other items.
   */
  class DeactivateItemsEvent extends Event {
      constructor() {
          super('deactivate-items', { bubbles: true, composed: true });
      }
  }
  /**
   * Requests the typeahead functionality of containing menu be deactivated.
   */
  class DeactivateTypeaheadEvent extends Event {
      constructor() {
          super('deactivate-typeahead', { bubbles: true, composed: true });
      }
  }
  /**
   * Requests the typeahead functionality of containing menu be activated.
   */
  class ActivateTypeaheadEvent extends Event {
      constructor() {
          super('activate-typeahead', { bubbles: true, composed: true });
      }
  }
  /**
   * Keys that are used to navigate menus.
   */
  const NAVIGABLE_KEY = {
      UP: 'ArrowUp',
      DOWN: 'ArrowDown',
      RIGHT: 'ArrowRight',
      LEFT: 'ArrowLeft',
  };
  /**
   * Keys that are used for selection in menus.
   */
  const SELECTION_KEY = {
      SPACE: 'Space',
      ENTER: 'Enter',
  };
  /**
   * Default close `Reason` kind values.
   */
  const CLOSE_REASON = {
      CLICK_SELECTION: 'CLICK_SELECTION',
      KEYDOWN: 'KEYDOWN',
  };
  /**
   * Keys that can close menus.
   */
  const KEYDOWN_CLOSE_KEYS = {
      ESCAPE: 'Escape',
      SPACE: SELECTION_KEY.SPACE,
      ENTER: SELECTION_KEY.ENTER,
  };
  /**
   * Determines whether the given key code is a key code that should close the
   * menu.
   *
   * @param code The KeyboardEvent code to check.
   * @return Whether or not the key code is in the predetermined list to close the
   * menu.
   */
  function isClosableKey(code) {
      return Object.values(KEYDOWN_CLOSE_KEYS).some(value => (value === code));
  }
  /**
   * Determines whether a target element is contained inside another element's
   * composed tree.
   *
   * @param target The potential contained element.
   * @param container The potential containing element of the target.
   * @returns Whether the target element is contained inside the container's
   * composed subtree
   */
  function isElementInSubtree(target, container) {
      // Dispatch a composed, bubbling event to check its path to see if the
      // newly-focused element is contained in container's subtree
      const focusEv = new Event('md-contains', { bubbles: true, composed: true });
      let composedPath = [];
      const listener = (ev) => {
          composedPath = ev.composedPath();
      };
      container.addEventListener('md-contains', listener);
      target.dispatchEvent(focusEv);
      container.removeEventListener('md-contains', listener);
      const isContained = composedPath.length > 0;
      return isContained;
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @fires close-menu {CloseMenuEvent}
   */
  class MenuItemLink extends ListItemLink {
      constructor() {
          super(...arguments);
          /**
           * READONLY: self-identifies as a menu item and sets its identifying attribute
           */
          this.isMenuItem = true;
          /**
           * Keeps the menu open if clicked or keyboard selected.
           */
          this.keepOpen = false;
          this.keepOpenOnClick = false;
      }
      onClick() {
          if (this.keepOpen || this.keepOpenOnClick)
              return;
          this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.CLICK_SELECTION }));
      }
      onKeydown(e) {
          if (this.keepOpen)
              return;
          const keyCode = e.code;
          // Do not preventDefault on enter or else it will prevent from opening links
          if (!e.defaultPrevented && isClosableKey(keyCode) &&
              keyCode !== SELECTION_KEY.ENTER) {
              e.preventDefault();
              this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.KEYDOWN, key: keyCode }));
          }
      }
  }
  __decorate([
      n$6({ type: Boolean, attribute: 'md-menu-item', reflect: true })
  ], MenuItemLink.prototype, "isMenuItem", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'keep-open' })
  ], MenuItemLink.prototype, "keepOpen", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Menus display a list of choices on a temporary surface.
   *
   * @description
   * Menu items are the selectable choices within the menu. Menu items must
   * implement the `MenuItem` interface and also have the `md-menu-item`
   * attribute. Additionally menu items are list items so they must also have the
   * `md-list-item` attribute.
   *
   * Menu items can control a menu by selectively firing the `close-menu` and
   * `deselect-items` events.
   *
   * This is a linkable variant.
   *
   * @final
   * @suppress {visibility}
   */
  let MdMenuItemLink = class MdMenuItemLink extends MenuItemLink {
  };
  MdMenuItemLink.styles = [styles$8, styles$6, styles$9, styles$7];
  MdMenuItemLink = __decorate([
      e$7('md-menu-item-link')
  ], MdMenuItemLink);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @fires close-menu {CloseMenuEvent}
   */
  class MenuItemEl extends ListItemEl {
      constructor() {
          super(...arguments);
          /**
           * READONLY: self-identifies as a menu item and sets its identifying attribute
           */
          this.isMenuItem = true;
          /**
           * Keeps the menu open if clicked or keyboard selected.
           */
          this.keepOpen = false;
          /**
           * Used for overriding e.g. sub-menu-item.
           */
          this.keepOpenOnClick = false;
          this.type = 'menuitem';
      }
      onClick() {
          if (this.keepOpen || this.keepOpenOnClick)
              return;
          this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.CLICK_SELECTION }));
      }
      onKeydown(e) {
          if (this.keepOpen)
              return;
          const keyCode = e.code;
          if (!e.defaultPrevented && isClosableKey(keyCode)) {
              e.preventDefault();
              this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.KEYDOWN, key: keyCode }));
          }
      }
  }
  __decorate([
      n$6({ type: Boolean, attribute: 'md-menu-item', reflect: true })
  ], MenuItemEl.prototype, "isMenuItem", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'keep-open' })
  ], MenuItemEl.prototype, "keepOpen", void 0);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Menus display a list of choices on a temporary surface.
   *
   * @description
   * Menu items are the selectable choices within the menu. Menu items must
   * implement the `MenuItem` interface and also have the `md-menu-item`
   * attribute. Additionally menu items are list items so they must also have the
   * `md-list-item` attribute.
   *
   * Menu items can control a menu by selectively firing the `close-menu` and
   * `deselect-items` events.
   *
   * @final
   * @suppress {visibility}
   */
  let MdMenuItem = class MdMenuItem extends MenuItemEl {
  };
  MdMenuItem.styles = [styles$8, styles$6, styles$9, styles$7];
  MdMenuItem = __decorate([
      e$7('md-menu-item')
  ], MdMenuItem);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$3 = i$3 `@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$1;
  const NAVIGABLE_KEYS = {
      ArrowDown: 'ArrowDown',
      ArrowUp: 'ArrowUp',
      Home: 'Home',
      End: 'End',
  };
  const navigableKeySet = new Set(Object.values(NAVIGABLE_KEYS));
  function isNavigableKey(key) {
      return navigableKeySet.has(key);
  }
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class List extends s {
      constructor() {
          super(...arguments);
          this.type = 'list';
          /**
           * The tabindex of the underlying list.
           */
          this.listTabIndex = 0;
      }
      render() {
          return this.renderList();
      }
      /**
       * Renders the main list element.
       */
      renderList() {
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `
    <ul class="md3-list"
        aria-label=${ariaLabel || A}
        tabindex=${this.listTabIndex}
        role=${this.type || A}
        @keydown=${this.handleKeydown}
        >
      ${this.renderContent()}
    </ul>
  `;
      }
      /**
       * The content to be slotted into the list.
       */
      renderContent() {
          return x `<span><slot @click=${(e) => {
            e.stopPropagation();
        }}></slot></span>`;
      }
      /**
       * Handles keyboard navigation in the list.
       *
       * @param event {KeyboardEvent} The keyboard event that triggers this handler.
       */
      handleKeydown(event) {
          const key = event.key;
          if (!isNavigableKey(key)) {
              return;
          }
          // do not use this.items directly so we don't re-query the DOM unnecessarily
          const items = this.items;
          if (!items.length) {
              return;
          }
          const activeItemRecord = List.getActiveItem(items);
          if (activeItemRecord) {
              activeItemRecord.item.active = false;
          }
          event.preventDefault();
          switch (key) {
              // Activate the next item
              case NAVIGABLE_KEYS.ArrowDown:
                  this.activateNextItemInternal(items, activeItemRecord);
                  break;
              // Activate the previous item
              case NAVIGABLE_KEYS.ArrowUp:
                  this.activatePreviousItemInternal(items, activeItemRecord);
                  break;
              // Activate the first item
              case NAVIGABLE_KEYS.Home:
                  List.activateFirstItem(items);
                  break;
              // Activate the last item
              case NAVIGABLE_KEYS.End:
                  List.activateLastItem(items);
                  break;
          }
      }
      activateNextItemInternal(items, activeItemRecord) {
          if (activeItemRecord) {
              const next = List.getNextItem(items, activeItemRecord.index);
              if (next)
                  next.active = true;
              return next;
          }
          else {
              return List.activateFirstItem(items);
          }
      }
      activatePreviousItemInternal(items, activeItemRecord) {
          if (activeItemRecord) {
              const prev = List.getPrevItem(items, activeItemRecord.index);
              if (prev)
                  prev.active = true;
              return prev;
          }
          else {
              return List.activateLastItem(items);
          }
      }
      /**
       * Activates the next item in the list. If at the end of the list, the first
       * item will be activated.
       *
       * @return The activated list item or `null` if there are no items.
       */
      activateNextItem() {
          const items = this.items;
          const activeItemRecord = List.getActiveItem(items);
          if (activeItemRecord) {
              activeItemRecord.item.active = false;
          }
          return this.activateNextItemInternal(items, activeItemRecord);
      }
      /**
       * Activates the previous item in the list. If at the start of the list, the
       * last item will be activated.
       *
       * @return The activated list item or `null` if there are no items.
       */
      activatePreviousItem() {
          const items = this.items;
          const activeItemRecord = List.getActiveItem(items);
          if (activeItemRecord) {
              activeItemRecord.item.active = false;
          }
          return this.activatePreviousItemInternal(items, activeItemRecord);
      }
      /**
       * Activates the first non-disabled item of a given array of items.
       *
       * @param items {Array<ListItem>} The items from which to activate the
       * first item.
       * @nocollapse
       */
      static activateFirstItem(items) {
          // NOTE: These selector functions are static and not on the instance such
          // that multiple operations can be chained and we do not have to re-query
          // the DOM
          const firstItem = List.getFirstActivatableItem(items);
          if (firstItem) {
              firstItem.active = true;
          }
          return firstItem;
      }
      /**
       * Activates the last non-disabled item of a given array of items.
       *
       * @param items {Array<ListItem>} The items from which to activate the
       * last item.
       * @nocollapse
       */
      static activateLastItem(items) {
          const lastItem = List.getLastActivatableItem(items);
          if (lastItem) {
              lastItem.active = true;
          }
          return lastItem;
      }
      /**
       * Deactivates the currently active item of a given array of items.
       *
       * @param items {Array<ListItem>} The items from which to deactivate the
       * active item.
       * @return A record of the deleselcted activated item including the item and
       * the index of the item or `null` if none are deactivated.
       * @nocollapse
       */
      static deactivateActiveItem(items) {
          const activeItem = List.getActiveItem(items);
          if (activeItem) {
              activeItem.item.active = false;
          }
          return activeItem;
      }
      focus() {
          this.listRoot?.focus();
      }
      /**
       * Retrieves the first activated item of a given array of items.
       *
       * @param items {Array<ListItem>} The items to search.
       * @return A record of the first activated item including the item and the
       * index of the item or `null` if none are activated.
       * @nocollapse
       */
      static getActiveItem(items) {
          for (let i = 0; i < items.length; i++) {
              const item = items[i];
              if (item.active) {
                  return {
                      item,
                      index: i,
                  };
              }
          }
          return null;
      }
      /**
       * Retrieves the first non-disabled item of a given array of items. This
       * the first item that is not disabled.
       *
       * @param items {Array<ListItem>} The items to search.
       * @return The first activatable item or `null` if none are activatable.
       * @nocollapse
       */
      static getFirstActivatableItem(items) {
          for (const item of items) {
              if (!item.disabled) {
                  return item;
              }
          }
          return null;
      }
      /**
       * Retrieves the last non-disabled item of a given array of items.
       *
       * @param items {Array<ListItem>} The items to search.
       * @return The last activatable item or `null` if none are activatable.
       * @nocollapse
       */
      static getLastActivatableItem(items) {
          for (let i = items.length - 1; i >= 0; i--) {
              const item = items[i];
              if (!item.disabled) {
                  return item;
              }
          }
          return null;
      }
      /**
       * Retrieves the next non-disabled item of a given array of items.
       *
       * @param items {Array<ListItem>} The items to search.
       * @param index {{index: number}} The index to search from.
       * @return The next activatable item or `null` if none are activatable.
       */
      static getNextItem(items, index) {
          for (let i = 1; i < items.length; i++) {
              const nextIndex = (i + index) % items.length;
              const item = items[nextIndex];
              if (!item.disabled) {
                  return item;
              }
          }
          return items[index] ? items[index] : null;
      }
      /**
       * Retrieves the previous non-disabled item of a given array of items.
       *
       * @param items {Array<ListItem>} The items to search.
       * @param index {{index: number}} The index to search from.
       * @return The previous activatable item or `null` if none are activatable.
       */
      static getPrevItem(items, index) {
          for (let i = 1; i < items.length; i++) {
              const prevIndex = (index - i + items.length) % items.length;
              const item = items[prevIndex];
              if (!item.disabled) {
                  return item;
              }
          }
          return items[index] ? items[index] : null;
      }
  }
  _a$1 = List;
  (() => {
      requestUpdateOnAriaChange(_a$1);
  })();
  /** @nocollapse */
  List.shadowRootOptions = { mode: 'open', delegatesFocus: true };
  __decorate([
      n$6()
  ], List.prototype, "type", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'list-tabindex' })
  ], List.prototype, "listTabIndex", void 0);
  __decorate([
      i$4('.md3-list')
  ], List.prototype, "listRoot", void 0);
  __decorate([
      l$3({ flatten: true, selector: '[md-list-item]' })
  ], List.prototype, "items", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$2 = i$3 `:host{--_container-color: var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset}.md3-list{background-color:var(--_container-color);border-radius:inherit;display:block;list-style-type:none;margin:0;min-width:inherit;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Lists are continuous, vertical indexes of text or images.
   *
   * @description
   * Lists consist of one or more list items, and can contain actions represented
   * by icons and text. List items come in three sizes: one-line, two-line, and
   * three-line.
   *
   * __Takeaways:__
   *
   * - Lists should be sorted in logical ways that make content easy to scan, such
   *   as alphabetical, numerical, chronological, or by user preference.
   * - Lists present content in a way that makes it easy to identify a specific
   *   item in a collection and act on it.
   * - Lists should present icons, text, and actions in a consistent format.
   *
   * @final
   * @suppress {visibility}
   */
  let MdList = class MdList extends List {
  };
  MdList.styles = [styles$2];
  MdList = __decorate([
      e$7('md-list')
  ], MdList);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A component for elevation.
   */
  class Elevation extends s {
      render() {
          return x `<span class="shadow"></span>`;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$1 = i$3 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The `<md-elevation>` custom element with default styles.
   *
   * Elevation is the relative distance between two surfaces along the z-axis.
   */
  let MdElevation = class MdElevation extends Elevation {
  };
  MdElevation.styles = [styles$1];
  MdElevation = __decorate([
      e$7('md-elevation')
  ], MdElevation);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i="important",n=" !"+i,o=e(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(n);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Given a surface, an anchor, corners, and some options, this surface will
   * calculate the position of a surface to align the two given corners and keep
   * the surface inside the window viewport. It also provides a StyleInfo map that
   * can be applied to the surface to handle visiblility and position.
   */
  class SurfacePositionController {
      /**
       * @param host The host to connect the controller to.
       * @param getProperties A function that returns the properties for the
       * controller.
       */
      constructor(host, getProperties) {
          this.host = host;
          this.getProperties = getProperties;
          // The current styles to apply to the surface.
          this.surfaceStylesInternal = {
              'display': 'none',
          };
          // Previous values stored for change detection. Open change detection is
          // calculated separately so initialize it here.
          this.lastValues = { isOpen: false };
          this.host.addController(this);
      }
      /**
       * The StyleInfo map to apply to the surface via Lit's stylemap
       */
      get surfaceStyles() {
          return this.surfaceStylesInternal;
      }
      /**
       * Calculates the surface's new position required so that the surface's
       * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
       * surface inside the window viewport. This positioning also respects RTL by
       * checking `getComputedStyle()` on the surface element.
       */
      async position() {
          const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, isTopLayer: topLayerRaw, xOffset, yOffset, } = this.getProperties();
          const anchorCorner = anchorCornerRaw.toUpperCase().trim();
          const surfaceCorner = surfaceCornerRaw.toUpperCase().trim();
          if (!surfaceEl || !anchorEl) {
              return;
          }
          // Paint the surface transparently so that we can get the position and the
          // rect info of the surface.
          this.surfaceStylesInternal = {
              'display': 'block',
              'opacity': '0',
          };
          // Wait for it to be visible.
          this.host.requestUpdate();
          await this.host.updateComplete;
          const surfaceRect = surfaceEl.getSurfacePositionClientRect ?
              surfaceEl.getSurfacePositionClientRect() :
              surfaceEl.getBoundingClientRect();
          const anchorRect = anchorEl.getSurfacePositionClientRect ?
              anchorEl.getSurfacePositionClientRect() :
              anchorEl.getBoundingClientRect();
          const [surfaceBlock, surfaceInline] = surfaceCorner.split('_');
          const [anchorBlock, anchorInline] = anchorCorner.split('_');
          // We use number booleans to multiply values rather than `if` / ternary
          // statements because it _heavily_ cuts down on nesting and readability
          const isTopLayer = topLayerRaw ? 1 : 0;
          // LTR depends on the direction of the SURFACE not the anchor.
          const isLTR = getComputedStyle(surfaceEl).direction === 'ltr' ? 1 : 0;
          const isRTL = isLTR ? 0 : 1;
          const isSurfaceInlineStart = surfaceInline === 'START' ? 1 : 0;
          const isSurfaceInlineEnd = surfaceInline === 'END' ? 1 : 0;
          const isSurfaceBlockStart = surfaceBlock === 'START' ? 1 : 0;
          const isSurfaceBlockEnd = surfaceBlock === 'END' ? 1 : 0;
          const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
          const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
          /*
           * A diagram that helps describe some of the variables used in the following
           * calculations.
           *
           * ┌───── inline/blockTopLayerOffset
           * │       │
           * │     ┌─▼───┐                  Window
           * │    ┌┼─────┴────────────────────────┐
           * │    ││                              │
           * └──► ││  ┌──inline/blockAnchorOffset │
           *      ││  │     │                     │
           *      └┤  │  ┌──▼───┐                 │
           *       │  │ ┌┼──────┤                 │
           *       │  └─►│Anchor│                 │
           *       │    └┴──────┘                 │
           *       │                              │
           *       │     ┌────────────────────────┼────┐
           *       │     │ Surface                │    │
           *       │     │                        │    │
           *       │     │                        │    │
           *       │     │                        │    │
           *       │     │                        │    │
           *       │     │                        │    │
           *       └─────┼────────────────────────┘    ├┐
           *             │ inline/blockOOBCorrection   ││
           *             │                         │   ││
           *             │                         ├──►││
           *             │                         │   ││
           *             └────────────────────────┐▼───┼┘
           *                                      └────┘
           */
          // Whether or not to apply the width of the anchor
          const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
          // The inline position of the anchor relative to window in LTR
          const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left +
              isSurfaceInlineEnd * (window.innerWidth - anchorRect.right);
          // The inline position of the anchor relative to window in RTL
          const inlineTopLayerOffsetRTL = isSurfaceInlineStart * (window.innerWidth - anchorRect.right) +
              isSurfaceInlineEnd * anchorRect.left;
          // The inline position of the anchor relative to window
          const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
          // If the surface's inline would be out of bounds of the window, move it
          // back in
          const inlineOutOfBoundsCorrection = Math.min(0, window.innerWidth - inlineTopLayerOffset - inlineAnchorOffset -
              surfaceRect.width);
          // The inline logical value of the surface
          const inline = isTopLayer * inlineTopLayerOffset + inlineAnchorOffset +
              inlineOutOfBoundsCorrection;
          // Whether or not to apply the height of the anchor
          const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
          // The absolute block position of the anchor relative to window
          const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top +
              isSurfaceBlockEnd * (window.innerHeight - anchorRect.bottom);
          // If the surface's block would be out of bounds of the window, move it back
          // in
          const blockOutOfBoundsCorrection = Math.min(0, window.innerHeight - blockTopLayerOffset - blockAnchorOffset -
              surfaceRect.height);
          // The block logical value of the surface
          const block = isTopLayer * blockTopLayerOffset + blockAnchorOffset +
              blockOutOfBoundsCorrection;
          const surfaceBlockProperty = surfaceBlock === 'START' ? 'inset-block-start' : 'inset-block-end';
          const surfaceInlineProperty = surfaceInline === 'START' ? 'inset-inline-start' : 'inset-inline-end';
          this.surfaceStylesInternal = {
              'display': 'block',
              'opacity': '1',
              [surfaceBlockProperty]: `${block}px`,
              [surfaceInlineProperty]: `${inline}px`,
          };
          this.host.requestUpdate();
      }
      hostUpdate() {
          this.onUpdate();
      }
      hostUpdated() {
          this.onUpdate();
      }
      /**
       * Checks whether the properties passed into the controller have changed since
       * the last positioning. If so, it will reposition if the surface is open or
       * close it if the surface should close.
       */
      async onUpdate() {
          const props = this.getProperties();
          let hasChanged = false;
          for (const [key, value] of Object.entries(props)) {
              // tslint:disable-next-line
              hasChanged = hasChanged || (value !== this.lastValues[key]);
              if (hasChanged)
                  break;
          }
          const openChanged = this.lastValues.isOpen !== props.isOpen;
          const hasAnchor = !!props.anchorEl;
          const hasSurface = !!props.surfaceEl;
          if (hasChanged && hasAnchor && hasSurface) {
              // Only update isOpen, because if it's closed, we do not want to waste
              // time on a useless reposition calculation. So save the other "dirty"
              // values until next time it opens.
              this.lastValues.isOpen = props.isOpen;
              if (props.isOpen) {
                  // We are going to do a reposition, so save the prop values for future
                  // dirty checking.
                  this.lastValues = props;
                  await this.position();
                  props.onOpen();
              }
              else if (openChanged) {
                  await props.beforeClose();
                  this.close();
                  props.onClose();
              }
          }
      }
      /**
       * Hides the surface.
       */
      close() {
          this.surfaceStylesInternal = {
              'display': 'none',
          };
          this.host.requestUpdate();
      }
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Indicies to access the TypeaheadRecord tuple type.
   */
  const TYPEAHEAD_RECORD = {
      INDEX: 0,
      ITEM: 1,
      TEXT: 2,
  };
  /**
   * This controller listens to `keydown` events and searches the header text of
   * an array of `MenuItem`s with the corresponding entered keys within the buffer
   * time and activates the item.
   *
   * @example
   * ```ts
   * const typeaheadController = new TypeaheadController(() => ({
   *   typeaheadBufferTime: 50,
   *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
   * }));
   * html`
   *   <div
   *       @keydown=${typeaheadController.onKeydown}
   *       tabindex="0"
   *       class="activeItemText">
   *     <!-- focusable element that will receive keydown events -->
   *     Apple
   *   </div>
   *   <div>
   *     <md-menu-item active header="Apple"></md-menu-item>
   *     <md-menu-item header="Apricot"></md-menu-item>
   *     <md-menu-item header="Banana"></md-menu-item>
   *     <md-menu-item header="Olive"></md-menu-item>
   *     <md-menu-item header="Orange"></md-menu-item>
   *   </div>
   * `;
   * ```
   */
  class TypeaheadController {
      /**
       * @param getProperties A function that returns the options of the typeahead
       * controller:
       *
       * {
       *   getItems: A function that returns an array of menu items to be searched.
       *   typeaheadBufferTime: The maximum time between each keystroke to keep the
       *       current type buffer alive.
       * }
       */
      constructor(getProperties) {
          this.getProperties = getProperties;
          /**
           * Array of tuples that helps with indexing.
           */
          this.typeaheadRecords = [];
          /**
           * Currently-typed text since last buffer timeout
           */
          this.typaheadBuffer = '';
          /**
           * The timeout id from the current buffer's setTimeout
           */
          this.cancelTypeaheadTimeout = 0;
          /**
           * If we are currently "typing"
           */
          this.isTypingAhead = false;
          /**
           * The record of the last active item.
           */
          this.lastActiveRecord = null;
          /**
           * Apply this listener to the element that will receive `keydown` events that
           * should trigger this controller.
           *
           * @param e The native browser `KeyboardEvent` from the `keydown` event.
           */
          this.onKeydown = (e) => {
              if (this.isTypingAhead) {
                  this.typeahead(e);
              }
              else {
                  this.beginTypeahead(e);
              }
          };
          /**
           * Ends the current typeahead and clears the buffer.
           */
          this.endTypeahead = () => {
              this.isTypingAhead = false;
              this.typaheadBuffer = '';
              this.typeaheadRecords = [];
          };
      }
      get items() {
          return this.getProperties().getItems();
      }
      get active() {
          return this.getProperties().active;
      }
      /**
       * Sets up typingahead
       */
      beginTypeahead(e) {
          if (!this.active) {
              return;
          }
          // We don't want to typeahead if the _beginning_ of the typeahead is a menu
          // navigation, or a selection. We will handle "Space" only if it's in the
          // middle of a typeahead
          if (e.code === 'Space' || e.code === 'Enter' ||
              e.code.startsWith('Arrow') || e.code === 'Escape') {
              return;
          }
          this.isTypingAhead = true;
          // Generates the record array data structure which is the index, the element
          // and a normalized header.
          this.typeaheadRecords = this.items.map((el, index) => [index, el, el.headline.trim().toLowerCase()]);
          this.lastActiveRecord =
              this.typeaheadRecords.find(record => record[TYPEAHEAD_RECORD.ITEM].active) ??
                  null;
          if (this.lastActiveRecord) {
              this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
          }
          this.typeahead(e);
      }
      /**
       * Performs the typeahead. Based on the normalized items and the current text
       * buffer, finds the _next_ item with matching text and activates it.
       *
       * @example
       *
       * items: Apple, Banana, Olive, Orange, Cucumber
       * buffer: ''
       * user types: o
       *
       * activates Olive
       *
       * @example
       *
       * items: Apple, Banana, Olive (active), Orange, Cucumber
       * buffer: 'o'
       * user types: l
       *
       * activates Olive
       *
       * @example
       *
       * items: Apple, Banana, Olive (active), Orange, Cucumber
       * buffer: ''
       * user types: o
       *
       * activates Orange
       *
       * @example
       *
       * items: Apple, Banana, Olive, Orange (active), Cucumber
       * buffer: ''
       * user types: o
       *
       * activates Olive
       */
      typeahead(e) {
          clearTimeout(this.cancelTypeaheadTimeout);
          // Stop typingahead if one of the navigation or selection keys (except for
          // Space) are pressed
          if (e.code === 'Enter' || e.code.startsWith('Arrow') ||
              e.code === 'Escape') {
              this.endTypeahead();
              if (this.lastActiveRecord) {
                  this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
              }
              return;
          }
          // If Space is pressed, prevent it from selecting and closing the menu
          if (e.code === 'Space') {
              e.stopPropagation();
              e.preventDefault();
          }
          // Start up a new keystroke buffer timeout
          this.cancelTypeaheadTimeout =
              setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
          this.typaheadBuffer += e.key.toLowerCase();
          const lastActiveIndex = this.lastActiveRecord ?
              this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX] :
              -1;
          const numRecords = this.typeaheadRecords.length;
          /**
           * Sorting function that will resort the items starting with the given index
           *
           * @example
           *
           * this.typeaheadRecords =
           * 0: [0, <reference>, 'apple']
           * 1: [1, <reference>, 'apricot']
           * 2: [2, <reference>, 'banana']
           * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
           * 4: [4, <reference>, 'orange']
           * 5: [5, <reference>, 'strawberry']
           *
           * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
           *                                       - rebaseIndexOnActive(b)) ===
           * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
           * 1: [4, <reference>, 'orange']
           * 2: [5, <reference>, 'strawberry']
           * 3: [0, <reference>, 'apple']
           * 4: [1, <reference>, 'apricot']
           * 5: [2, <reference>, 'banana']
           */
          const rebaseIndexOnActive = (record) => {
              return (record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
                  numRecords;
          };
          // records filtered and sorted / rebased around the last active index
          const matchingRecords = this.typeaheadRecords
              .filter(record => !record[TYPEAHEAD_RECORD.ITEM].disabled &&
              record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer))
              .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b));
          // Just leave if there's nothing that matches. Native select will just
          // choose the first thing that starts with the next letter in the alphabet
          // but that's out of scope and hard to localize
          if (matchingRecords.length === 0) {
              clearTimeout(this.cancelTypeaheadTimeout);
              if (this.lastActiveRecord) {
                  this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
              }
              this.endTypeahead();
              return;
          }
          const isNewQuery = this.typaheadBuffer.length === 1;
          let nextRecord;
          // This is likely the case that someone is trying to "tab" through different
          // entries that start with the same letter
          if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
              nextRecord = matchingRecords[1] ?? matchingRecords[0];
          }
          else {
              nextRecord = matchingRecords[0];
          }
          if (this.lastActiveRecord) {
              this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
          }
          this.lastActiveRecord = nextRecord;
          nextRecord[TYPEAHEAD_RECORD.ITEM].active = true;
          return;
      }
  }

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a;
  /**
   * The default value for the typeahead buffer time in Milliseconds.
   */
  const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
  /**
   * Gets the currently focused element on the page.
   *
   * @param activeDoc The document or shadowroot from which to start the search.
   *    Defaults to `window.document`
   * @return Returns the currently deeply focused element or `null` if none.
   */
  function getFocusedElement(activeDoc = document) {
      const activeEl = activeDoc.activeElement;
      if (!activeEl) {
          return null;
      }
      if (activeEl.shadowRoot) {
          return getFocusedElement(activeEl.shadowRoot) ?? activeEl;
      }
      return activeEl;
  }
  /**
   * @fires opening Fired before the opening animation begins
   * @fires opened Fired once the menu is open, after any animations
   * @fires closing Fired before the closing animation begins
   * @fires closed Fired once the menu is closed, after any animations
   */
  class Menu extends s {
      constructor() {
          super(...arguments);
          /**
           * The element in which the menu should align to.
           */
          this.anchor = null;
          /**
           * Makes the element use `position:fixed` instead of `position:absolute`. In
           * most cases, the menu should position itself above most other
           * `position:absolute` or `position:fixed` elements when placed inside of
           * them. e.g. using a menu inside of an `md-dialog`.
           *
           * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
           * the window instead.
           */
          this.fixed = false;
          /**
           * Skips the opening and closing animations.
           */
          this.quick = false;
          /**
           * Displays overflow content like a submenu.
           *
           * __NOTE__: This may cause adverse effects if you set
           * `md-menu {max-height:...}`
           * and have items overflowing items in the "y" direction.
           */
          this.hasOverflow = false;
          /**
           * Opens the menu and makes it visible. Alternative to the `.show()` and
           * `.close()` methods
           */
          this.open = false;
          /**
           * Offsets the menu's inline alignment from the anchor by the given number in
           * pixels. This value is direction aware and will follow the LTR / RTL
           * direction.
           *
           * e.g. LTR: positive -> right, negative -> left
           *      RTL: positive -> left, negative -> right
           */
          this.xOffset = 0;
          /**
           * Offsets the menu's block alignment from the anchor by the given number in
           * pixels.
           *
           * e.g. positive -> down, negative -> up
           */
          this.yOffset = 0;
          /**
           * The tabindex of the underlying list element.
           */
          this.listTabIndex = 0;
          /**
           * The role of the underlying list element.
           */
          this.type = 'menu';
          /**
           * The max time between the keystrokes of the typeahead menu behavior before
           * it clears the typeahead buffer.
           */
          this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
          /**
           * The corner of the anchor which to align the menu in the standard logical
           * property style of <block>_<inline>.
           */
          this.anchorCorner = 'END_START';
          /**
           * The corner of the menu which to align the anchor in the standard logical
           * property style of <block>_<inline>.
           */
          this.menuCorner = 'START_START';
          /**
           * Keeps the user clicks outside the menu.
           *
           * NOTE: clicking outside may still cause focusout to close the menu so see
           * `stayOpenOnFocusout`.
           */
          this.stayOpenOnOutsideClick = false;
          /**
           * Keeps the menu open when focus leaves the menu's composed subtree.
           *
           * NOTE: Focusout behavior will stop propagation of the focusout event. Set
           * this property to true to opt-out of menu's focuout handling altogether.
           */
          this.stayOpenOnFocusout = false;
          /**
           * After closing, does not restore focus to the last focused element before
           * the menu was opened.
           */
          this.skipRestoreFocus = false;
          /**
           * The element that should be focused by default once opened.
           */
          this.defaultFocus = 'LIST_ROOT';
          this.typeaheadActive = true;
          this.openCloseAnimationSignal = createAnimationSignal();
          /**
           * The element that was focused before the menu opened.
           */
          this.lastFocusedElement = null;
          /**
           * Handles typeahead navigation through the menu.
           */
          this.typeaheadController = new TypeaheadController(() => {
              return {
                  getItems: () => this.items,
                  typeaheadBufferTime: this.typeaheadDelay,
                  active: this.typeaheadActive
              };
          });
          /**
           * Handles positioning the surface and aligning it to the anchor.
           */
          this.menuPositionController = new SurfacePositionController(this, () => {
              return {
                  anchorCorner: this.anchorCorner,
                  surfaceCorner: this.menuCorner,
                  surfaceEl: this.surfaceEl,
                  anchorEl: this.anchor,
                  isTopLayer: this.fixed,
                  isOpen: this.open,
                  xOffset: this.xOffset,
                  yOffset: this.yOffset,
                  onOpen: this.onOpened,
                  beforeClose: this.beforeClose,
                  onClose: this.onClosed,
              };
          });
          /**
           * Saves the last focused element focuses the new element based on
           * `defaultFocus`, and animates open.
           */
          this.onOpened = () => {
              this.lastFocusedElement = getFocusedElement();
              if (!this.listElement)
                  return;
              const items = this.listElement.items;
              const activeItemRecord = List.getActiveItem(items);
              if (activeItemRecord && this.defaultFocus !== 'NONE') {
                  activeItemRecord.item.active = false;
              }
              switch (this.defaultFocus) {
                  case 'FIRST_ITEM':
                      const first = List.getFirstActivatableItem(items);
                      if (first) {
                          first.active = true;
                      }
                      break;
                  case 'LAST_ITEM':
                      const last = List.getLastActivatableItem(items);
                      if (last) {
                          last.active = true;
                      }
                      break;
                  case 'LIST_ROOT':
                      this.listElement?.focus();
                      break;
                  default:
                  case 'NONE':
                      // Do nothing.
                      break;
              }
              if (this.quick) {
                  this.dispatchEvent(new Event('opening'));
                  this.dispatchEvent(new Event('opened'));
              }
              else {
                  this.animateOpen();
              }
          };
          /**
           * Animates closed.
           */
          this.beforeClose = async () => {
              this.open = false;
              if (!this.skipRestoreFocus) {
                  this.lastFocusedElement?.focus?.();
              }
              if (!this.quick) {
                  await this.animateClose();
              }
          };
          /**
           * Focuses the last focused element.
           */
          this.onClosed = () => {
              if (this.quick) {
                  this.dispatchEvent(new Event('closing'));
                  this.dispatchEvent(new Event('closed'));
              }
          };
          this.onWindowClick = (e) => {
              if (!this.stayOpenOnOutsideClick && !e.composedPath().includes(this)) {
                  this.open = false;
              }
          };
      }
      /**
       * Whether the menu is animating upwards or downwards when opening. This is
       * helpful for calculating some animation calculations.
       */
      get openDirection() {
          const menuCornerBlock = this.menuCorner.split('_')[0];
          return menuCornerBlock === 'START' ? 'DOWN' : 'UP';
      }
      /**
       * The menu items associated with this menu. The items must be `MenuItem`s and
       * have both the `md-menu-item` and `md-list-item` attributes.
       */
      get items() {
          const listElement = this.listElement;
          if (listElement) {
              return listElement.items.filter(el => el.hasAttribute('md-menu-item'));
          }
          return [];
      }
      render() {
          return this.renderSurface();
      }
      /**
       * Renders the positionable surface element and its contents.
       */
      renderSurface() {
          // TODO(b/274140618): elevation should be an underlay, not an overlay that
          // tints content
          return x `
       <div
          class="menu ${o$1(this.getSurfaceClasses())}"
          style=${o(this.menuPositionController.surfaceStyles)}
          @focusout=${this.handleFocusout}>
        ${this.renderElevation()}
        ${this.renderList()}
        ${this.renderFocusRing()}
       </div>
     `;
      }
      /**
       * Renders the List element and its items
       */
      renderList() {
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `
      <md-list
          id="list"
          aria-label=${ariaLabel || A}
          type=${this.type}
          listTabIndex=${this.listTabIndex}
          @keydown=${this.handleListKeydown}>
        ${this.renderMenuItems()}
      </md-list>`;
      }
      /**
       * Renders the menu items' slot
       */
      renderMenuItems() {
          return x `<slot
        @close-menu=${this.onCloseMenu}
        @deactivate-items=${this.onDeactivateItems}
        @deactivate-typeahead=${this.handleDeactivateTypeahead}
        @activate-typeahead=${this.handleActivateTypeahead}
        @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
        @close-on-focusout=${this.handleCloseOnFocusout}></slot>`;
      }
      /**
       * Renders the elevation component.
       */
      renderElevation() {
          return x `<md-elevation></md-elevation>`;
      }
      /**
       * Renders the focus ring component.
       */
      renderFocusRing() {
          return x `<md-focus-ring for="list"></md-focus-ring>`;
      }
      getSurfaceClasses() {
          return {
              open: this.open,
              fixed: this.fixed,
              'has-overflow': this.hasOverflow,
          };
      }
      async handleFocusout(e) {
          if (this.stayOpenOnFocusout) {
              return;
          }
          // Stop propagation to prevent nested menus from interfering with each other
          e.stopPropagation();
          if (e.relatedTarget) {
              // Don't close the menu if we are switching focus between menu,
              // md-menu-item, and md-list
              if (isElementInSubtree(e.relatedTarget, this)) {
                  return;
              }
          }
          const oldRestoreFocus = this.skipRestoreFocus;
          // allow focus to continue to the next focused object rather than returning
          this.skipRestoreFocus = true;
          this.close();
          // await for close
          await this.updateComplete;
          // return to previous behavior
          this.skipRestoreFocus = oldRestoreFocus;
      }
      // Capture so that we can grab the event before it reaches the list item
      // istelf. Specifically useful for the case where typeahead encounters a space
      // and we don't want the menu item to close the menu.
      handleListKeydown(e) {
          if (e.target === this.listElement && !e.defaultPrevented &&
              isClosableKey(e.code)) {
              e.preventDefault();
              this.close();
          }
          this.typeaheadController.onKeydown(e);
      }
      /**
       * Performs the opening animation:
       *
       * https://direct.googleplex.com/#/spec/295000003+271060003
       */
      animateOpen() {
          const surfaceEl = this.surfaceEl;
          const slotEl = this.slotEl;
          if (!surfaceEl || !slotEl)
              return;
          const openDirection = this.openDirection;
          this.dispatchEvent(new Event('opening'));
          // needs to be imperative because we don't want to mix animation and Lit
          // render timing
          surfaceEl.classList.toggle('animating', true);
          const signal = this.openCloseAnimationSignal.start();
          const height = surfaceEl.offsetHeight;
          const openingUpwards = openDirection === 'UP';
          const children = this.items;
          const FULL_DURATION = 500;
          const SURFACE_OPACITY_DURATION = 50;
          const ITEM_OPACITY_DURATION = 250;
          // We want to fit every child fade-in animation within the full duration of
          // the animation.
          const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
          const surfaceHeightAnimation = surfaceEl.animate([{ height: '0px' }, { height: `${height}px` }], {
              duration: FULL_DURATION,
              easing: EASING.EMPHASIZED,
          });
          // When we are opening upwards, we want to make sure the last item is always
          // in view, so we need to translate it upwards the opposite direction of the
          // height animation
          const upPositionCorrectionAnimation = slotEl.animate([
              { transform: openingUpwards ? `translateY(-${height}px)` : '' },
              { transform: '' }
          ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
          const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
          const childrenAnimations = [];
          for (let i = 0; i < children.length; i++) {
              // If we are animating upwards, then reverse the children list.
              const directionalIndex = openingUpwards ? children.length - 1 - i : i;
              const child = children[directionalIndex];
              const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
                  duration: ITEM_OPACITY_DURATION,
                  delay: DELAY_BETWEEN_ITEMS * i,
              });
              // Make them all initially hidden and then clean up at the end of each
              // animation.
              child.classList.toggle('hidden', true);
              animation.addEventListener('finish', () => {
                  child.classList.toggle('hidden', false);
              });
              childrenAnimations.push([child, animation]);
          }
          signal.addEventListener('abort', () => {
              surfaceHeightAnimation.cancel();
              upPositionCorrectionAnimation.cancel();
              surfaceOpacityAnimation.cancel();
              childrenAnimations.forEach(([child, animation]) => {
                  child.classList.toggle('hidden', false);
                  animation.cancel();
              });
          });
          surfaceHeightAnimation.addEventListener('finish', () => {
              surfaceEl.classList.toggle('animating', false);
              this.openCloseAnimationSignal.finish();
              this.dispatchEvent(new Event('opened'));
          });
      }
      /**
       * Performs the closing animation:
       *
       * https://direct.googleplex.com/#/spec/295000003+271060003
       */
      animateClose() {
          let resolve;
          let reject;
          // This promise blocks the surface position controller from setting
          // display: none on the surface which will interfere with this animation.
          const animationEnded = new Promise((res, rej) => {
              resolve = res;
              reject = rej;
          });
          const surfaceEl = this.surfaceEl;
          const slotEl = this.slotEl;
          if (!surfaceEl || !slotEl) {
              reject();
              return animationEnded;
          }
          const openDirection = this.openDirection;
          const closingDownwards = openDirection === 'UP';
          this.dispatchEvent(new Event('closing'));
          // needs to be imperative because we don't want to mix animation and Lit
          // render timing
          surfaceEl.classList.toggle('animating', true);
          const signal = this.openCloseAnimationSignal.start();
          const height = surfaceEl.offsetHeight;
          const children = this.items;
          const FULL_DURATION = 150;
          const SURFACE_OPACITY_DURATION = 50;
          // The surface fades away at the very end
          const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
          const ITEM_OPACITY_DURATION = 50;
          const ITEM_OPACITY_INITIAL_DELAY = 50;
          const END_HEIGHT_PERCENTAGE = .35;
          // We want to fit every child fade-out animation within the full duration of
          // the animation.
          const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
              children.length;
          // The mock has the animation shrink to 35%
          const surfaceHeightAnimation = surfaceEl.animate([
              { height: `${height}px` },
              { height: `${height * END_HEIGHT_PERCENTAGE}px` }
          ], {
              duration: FULL_DURATION,
              easing: EASING.EMPHASIZED_ACCELERATE,
          });
          // When we are closing downwards, we want to make sure the last item is
          // always in view, so we need to translate it upwards the opposite direction
          // of the height animation
          const downPositionCorrectionAnimation = slotEl.animate([
              { transform: '' }, {
                  transform: closingDownwards ?
                      `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)` :
                      ''
              }
          ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
          const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
          const childrenAnimations = [];
          for (let i = 0; i < children.length; i++) {
              // If the animation is closing upwards, then reverse the list of
              // children so that we animate in the opposite direction.
              const directionalIndex = closingDownwards ? i : children.length - 1 - i;
              const child = children[directionalIndex];
              const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
                  duration: ITEM_OPACITY_DURATION,
                  delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i,
              });
              // Make sure the items stay hidden at the end of each child animation.
              // We clean this up at the end of the overall animation.
              animation.addEventListener('finish', () => {
                  child.classList.toggle('hidden', true);
              });
              childrenAnimations.push([child, animation]);
          }
          signal.addEventListener('abort', () => {
              surfaceHeightAnimation.cancel();
              downPositionCorrectionAnimation.cancel();
              surfaceOpacityAnimation.cancel();
              childrenAnimations.forEach(([child, animation]) => {
                  animation.cancel();
                  child.classList.toggle('hidden', false);
              });
              reject();
          });
          surfaceHeightAnimation.addEventListener('finish', () => {
              surfaceEl.classList.toggle('animating', false);
              childrenAnimations.forEach(([child]) => {
                  child.classList.toggle('hidden', false);
              });
              this.openCloseAnimationSignal.finish();
              this.dispatchEvent(new Event('closed'));
              resolve(true);
          });
          return animationEnded;
      }
      connectedCallback() {
          super.connectedCallback();
          {
              window.addEventListener('click', this.onWindowClick, { capture: true });
          }
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          {
              window.removeEventListener('click', this.onWindowClick, { capture: true });
          }
      }
      onCloseMenu() {
          this.close();
      }
      onDeactivateItems(e) {
          e.stopPropagation();
          const items = this.items;
          for (const item of items) {
              item.active = false;
              item.selected = false;
          }
      }
      handleDeactivateTypeahead(e) {
          // stopPropagation so that this does not deactivate any typeaheads in menus
          // nested above it e.g. md-sub-menu-item
          e.stopPropagation();
          this.typeaheadActive = false;
      }
      handleActivateTypeahead(e) {
          // stopPropagation so that this does not activate any typeaheads in menus
          // nested above it e.g. md-sub-menu-item
          e.stopPropagation();
          this.typeaheadActive = true;
      }
      handleStayOpenOnFocusout(e) {
          e.stopPropagation();
          this.stayOpenOnFocusout = true;
      }
      handleCloseOnFocusout(e) {
          e.stopPropagation();
          this.stayOpenOnFocusout = false;
      }
      focus() {
          this.listElement?.focus();
      }
      close() {
          this.open = false;
          this.items.forEach(item => {
              item.close?.();
          });
      }
      show() {
          this.open = true;
      }
      /**
       * Activates the next item in the menu. If at the end of the menu, the first
       * item will be activated.
       *
       * @return The activated menu item or `null` if there are no items.
       */
      activateNextItem() {
          return this.listElement?.activateNextItem() ?? null;
      }
      /**
       * Activates the previous item in the menu. If at the start of the menu, the
       * last item will be activated.
       *
       * @return The activated menu item or `null` if there are no items.
       */
      activatePreviousItem() {
          return this.listElement?.activatePreviousItem() ?? null;
      }
  }
  _a = Menu;
  (() => {
      requestUpdateOnAriaChange(_a);
  })();
  __decorate([
      i$4('md-list')
  ], Menu.prototype, "listElement", void 0);
  __decorate([
      i$4('.menu')
  ], Menu.prototype, "surfaceEl", void 0);
  __decorate([
      i$4('slot')
  ], Menu.prototype, "slotEl", void 0);
  __decorate([
      n$6({ attribute: false })
  ], Menu.prototype, "anchor", void 0);
  __decorate([
      n$6({ type: Boolean })
  ], Menu.prototype, "fixed", void 0);
  __decorate([
      n$6({ type: Boolean })
  ], Menu.prototype, "quick", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'has-overflow' })
  ], Menu.prototype, "hasOverflow", void 0);
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], Menu.prototype, "open", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'x-offset' })
  ], Menu.prototype, "xOffset", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'y-offset' })
  ], Menu.prototype, "yOffset", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'list-tabindex' })
  ], Menu.prototype, "listTabIndex", void 0);
  __decorate([
      n$6()
  ], Menu.prototype, "type", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'typeahead-delay' })
  ], Menu.prototype, "typeaheadDelay", void 0);
  __decorate([
      n$6({ attribute: 'anchor-corner' })
  ], Menu.prototype, "anchorCorner", void 0);
  __decorate([
      n$6({ attribute: 'menu-corner' })
  ], Menu.prototype, "menuCorner", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'stay-open-on-outside-click' })
  ], Menu.prototype, "stayOpenOnOutsideClick", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'stay-open-on-focusout' })
  ], Menu.prototype, "stayOpenOnFocusout", void 0);
  __decorate([
      n$6({ type: Boolean, attribute: 'skip-restore-focus' })
  ], Menu.prototype, "skipRestoreFocus", void 0);
  __decorate([
      n$6({ attribute: 'default-focus' })
  ], Menu.prototype, "defaultFocus", void 0);
  __decorate([
      t$3()
  ], Menu.prototype, "typeaheadActive", void 0);
  __decorate([
      e$5({ capture: true })
  ], Menu.prototype, "handleListKeydown", null);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles = i$3 `:host{--_container-color: var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-menu-container-elevation, 2);--_container-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-menu-container-shape, 4px);--md-list-container-color: var(--_container-color);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-focus-ring-shape: var(--_container-shape);min-width:300px}.menu{border-radius:var(--_container-shape);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit}.menu.fixed{position:fixed}.menu md-list{height:inherit;max-height:inherit;display:block;overflow:auto;min-width:inherit;border-radius:inherit}.menu.has-overflow md-list{overflow:visible}.menu.animating md-list{pointer-events:none;overflow:hidden}.menu.animating ::slotted(.hidden){opacity:0}.menu slot{display:block;height:inherit;max-height:inherit}/*# sourceMappingURL=menu-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Menus display a list of choices on a temporary surface.
   *
   * @description
   * Menus appear when users interact with a button, action, or other control.
   *
   * They can be opened from a variety of elements, most commonly icon buttons,
   * buttons, and text fields.
   *
   * md-menu listens for the `close-menu` and `deselect-items` events.
   *
   * - `close-menu` closes the menu when dispatched from a child element.
   * - `deselect-items` deselects all of its immediate menu-item children.
   *
   * @example
   * ```html
   * <div style="position:relative;">
   *   <button
   *       class="anchor"
   *       ${ref(anchorRef)}
   *       @click=${() => this.menuRef.value.show()}>
   *     Click to open menu
   *   </button>
   *   <!--
   *     `has-overflow` is required when using a submenu which overflows the
   *     menu's contents
   *   -->
   *   <md-menu has-overflow ${ref(menuRef)} ${(el) => el.anchor =
   * anchorRef.value}> <md-menu-item header="This is a header"></md-menu-item>
   *     <md-sub-menu-item header="this is a submenu item">
   *       <md-menu slot="submenu">
   *         <md-menu-item
   *           header="This is an item inside a submenu"></md-menu-item>
   *       </md-menu>
   *     </md-sub-menu-item>
   *   </md-menu>
   * </div>
   * ```
   *
   * @final
   * @suppress {visibility}
   */
  let MdMenu = class MdMenu extends Menu {
  };
  MdMenu.styles = [styles, styles$3];
  MdMenu = __decorate([
      e$7('md-menu')
  ], MdMenu);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  function stopPropagation(e) {
      e.stopPropagation();
  }
  /**
   * @fires deactivate-items {DeactivateItemsEvent} Requests the parent menu to
   *     deselect other items when a submenu opens
   * @fires deactivate-typeahead {DeactivateItemsEvent} Requests the parent menu
   *     to deactivate the typeahead functionality when a submenu opens
   * @fires activate-typeahead {DeactivateItemsEvent} Requests the parent menu to
   *     activate the typeahead functionality when a submenu closes
   * @fires stay-open-on-focusout {StayOpenOnFocusoutEvent} Requests the parent
   *     menu to stay open when focusout event is fired or has a `null`
   *     `relatedTarget` when submenu is opened.
   * @fires close-on-focusout {CloseOnFocusoutEvent} Requests the parent
   *     menu to close when focusout event is fired or has a `null`
   *     `relatedTarget` When submenu is closed.
   */
  class SubMenuItem extends MenuItemEl {
      constructor() {
          super(...arguments);
          /**
           * The anchorCorner to set on the submenu.
           */
          this.anchorCorner = 'START_END';
          /**
           * The menuCorner to set on the submenu.
           */
          this.menuCorner = 'START_START';
          /**
           * The delay between pointerenter and submenu opening.
           */
          this.hoverOpenDelay = 400;
          /**
           * The delay between ponterleave and the submenu closing.
           */
          this.hoverCloseDelay = 400;
          /**
           * Sets the item in the selected visual state when a submenu is opened.
           */
          this.selected = false;
          this.keepOpenOnClick = true;
          this.previousOpenTimeout = 0;
          this.previousCloseTimeout = 0;
          /**
           * Starts the default 400ms countdown to open the submenu.
           */
          this.onPointerenter = () => {
              clearTimeout(this.previousOpenTimeout);
              clearTimeout(this.previousCloseTimeout);
              if (this.submenuEl?.open)
                  return;
              // Open synchronously if delay is 0. (screenshot tests infra
              // would never resolve otherwise)
              if (!this.hoverOpenDelay) {
                  this.show();
              }
              else {
                  this.previousOpenTimeout = setTimeout(() => {
                      this.show();
                  }, this.hoverOpenDelay);
              }
          };
          /**
           * Starts the default 400ms countdown to close the submenu.
           */
          this.onPointerleave = () => {
              clearTimeout(this.previousCloseTimeout);
              clearTimeout(this.previousOpenTimeout);
              // Close synchronously if delay is 0. (screenshot tests infra
              // would never resolve otherwise)
              if (!this.hoverCloseDelay) {
                  this.close();
              }
              else {
                  this.previousCloseTimeout = setTimeout(() => {
                      this.close();
                  }, this.hoverCloseDelay);
              }
          };
      }
      get submenuEl() {
          return this.menus[0];
      }
      onClick() {
          this.show();
      }
      /**
       * On item keydown handles opening the submenu.
       */
      onKeydown(e) {
          const shouldOpenSubmenu = this.isSubmenuOpenKey(e.code);
          if (e.code === SELECTION_KEY.SPACE) {
              // prevent space from scrolling. Only open the submenu.
              e.preventDefault();
          }
          if (!shouldOpenSubmenu) {
              super.onKeydown(e);
              return;
          }
          const submenu = this.submenuEl;
          if (!submenu)
              return;
          const submenuItems = submenu.items;
          const firstActivatableItem = List.getFirstActivatableItem(submenuItems);
          if (firstActivatableItem) {
              this.show(() => {
                  firstActivatableItem.active = true;
              });
              return;
          }
      }
      /**
       * Render the submenu at the end
       */
      renderEnd() {
          return x `${super.renderEnd()}${this.renderSubMenu()}`;
      }
      /**
       * Renders the slot for the submenu.
       */
      renderSubMenu() {
          return x `<span class="submenu"><slot
        name="submenu"
        @pointerdown=${stopPropagation}
        @click=${stopPropagation}
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
    ></slot></span>`;
      }
      onCloseSubmenu(e) {
          e.itemPath.push(this);
          // Restore focusout behavior
          this.dispatchEvent(new CloseOnFocusoutEvent());
          this.dispatchEvent(new ActivateTypeaheadEvent());
          // Escape should only close one menu not all of the menus unlike space or
          // click selection which should close all menus.
          if (e.reason.kind === CLOSE_REASON.KEYDOWN &&
              e.reason.key === KEYDOWN_CLOSE_KEYS.ESCAPE) {
              e.stopPropagation();
              this.active = true;
              this.selected = false;
              // It might already be active so manually focus
              this.listItemRoot?.focus();
              return;
          }
          this.active = false;
          this.selected = false;
      }
      async onSubMenuKeydown(e) {
          // Stop propagation so that we don't accidentally close every parent menu.
          // Additionally, we want to isolate things like the typeahead keydowns
          // from bubbling up to the parent menu and confounding things.
          e.stopPropagation();
          const shouldClose = this.isSubmenuCloseKey(e.code);
          if (!shouldClose)
              return;
          this.close(() => {
              List.deactivateActiveItem(this.submenuEl.items);
              this.listItemRoot?.focus();
              this.active = true;
          });
      }
      /**
       * Shows the submenu.
       *
       * @param onOpened A function to call after the menu is opened.
       */
      show(onOpened = () => { }) {
          const menu = this.submenuEl;
          if (!menu)
              return;
          menu.quick = true;
          // Submenus are in overflow when not fixed. Can remove once we have native
          // popup support
          menu.hasOverflow = true;
          menu.anchorCorner = this.anchorCorner;
          menu.menuCorner = this.menuCorner;
          menu.anchor = this;
          // We manually set focus with `active` on keyboard navigation. And we
          // want to focus the root on hover, so the user can pick up navigation with
          // keyboard after hover.
          menu.defaultFocus = 'LIST_ROOT';
          menu.skipRestoreFocus = true;
          menu.stayOpenOnOutsideClick = true;
          menu.stayOpenOnFocusout = true;
          // Menu could already be opened because of mouse interaction
          const menuAlreadyOpen = menu.open;
          // We want the parent to stay open in the case such that a middle submenu
          // has a submenuitem hovered which opens a third submenut. Then if you hover
          // on yet another middle menu-item (not submenuitem) then focusout Event's
          // relatedTarget will be `null` thus, causing all the menus to close
          this.dispatchEvent(new StayOpenOnFocusoutEvent());
          menu.show();
          // Deactivate other items. This can be the case if the user has tabbed
          // around the menu and then mouses over an md-sub-menu.
          this.dispatchEvent(new DeactivateItemsEvent());
          this.dispatchEvent(new DeactivateTypeaheadEvent());
          this.selected = true;
          // This is the case of mouse hovering when already opened via keyboard or
          // vice versa
          if (menuAlreadyOpen) {
              onOpened();
          }
          else {
              menu.addEventListener('opened', onOpened, { once: true });
          }
      }
      /**
       * Closes the submenu.
       *
       * @param onClosed A function to call after the menu is closed.
       */
      close(onClosed = () => { }) {
          const menu = this.submenuEl;
          if (!menu || !menu.open)
              return;
          this.dispatchEvent(new ActivateTypeaheadEvent());
          menu.quick = true;
          menu.close();
          // Restore focusout behavior.
          this.dispatchEvent(new CloseOnFocusoutEvent());
          this.active = false;
          this.selected = false;
          menu.addEventListener('closed', onClosed, { once: true });
      }
      /**
       * Determines whether the given KeyboardEvent code is one that should open
       * the submenu. This is RTL-aware. By default, left, right, space, or enter.
       *
       * @param code The native KeyboardEvent code.
       * @return Whether or not the key code should open the submenu.
       */
      isSubmenuOpenKey(code) {
          const isRtl = getComputedStyle(this).direction === 'rtl';
          const arrowEnterKey = isRtl ? NAVIGABLE_KEY.LEFT : NAVIGABLE_KEY.RIGHT;
          switch (code) {
              case arrowEnterKey:
              case SELECTION_KEY.SPACE:
              case SELECTION_KEY.ENTER:
                  return true;
              default:
                  return false;
          }
      }
      /**
       * Determines whether the given KeyboardEvent code is one that should close
       * the submenu. This is RTL-aware. By default right, left, or escape.
       *
       * @param code The native KeyboardEvent code.
       * @return Whether or not the key code should close the submenu.
       */
      isSubmenuCloseKey(code) {
          const isRtl = getComputedStyle(this).direction === 'rtl';
          const arrowEnterKey = isRtl ? NAVIGABLE_KEY.RIGHT : NAVIGABLE_KEY.LEFT;
          switch (code) {
              case arrowEnterKey:
              case KEYDOWN_CLOSE_KEYS.ESCAPE:
                  return true;
              default:
                  return false;
          }
      }
  }
  __decorate([
      n$6({ attribute: 'anchor-corner' })
  ], SubMenuItem.prototype, "anchorCorner", void 0);
  __decorate([
      n$6({ attribute: 'menu-corner' })
  ], SubMenuItem.prototype, "menuCorner", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'hover-open-delay' })
  ], SubMenuItem.prototype, "hoverOpenDelay", void 0);
  __decorate([
      n$6({ type: Number, attribute: 'hover-close-delay' })
  ], SubMenuItem.prototype, "hoverCloseDelay", void 0);
  __decorate([
      n$6({ type: Boolean, reflect: true })
  ], SubMenuItem.prototype, "selected", void 0);
  __decorate([
      l$3({ slot: 'submenu', flatten: true })
  ], SubMenuItem.prototype, "menus", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Menus display a list of choices on a temporary surface.
   *
   * @description
   * Menu items are the selectable choices within the menu. Menu items must
   * implement the `MenuItem` interface and also have the `md-menu-item`
   * attribute. Additionally menu items are list items so they must also have the
   * `md-list-item` attribute.
   *
   * Menu items can control a menu by selectively firing the `close-menu` and
   * `deselect-items` events.
   *
   * This menu item will open a sub-menu that is slotted in the `submenu` slot.
   * Additionally, the containing menu must either have `has-overflow` or `fixed`
   * set to `true` in order to display the containing menu properly.
   *
   * @example
   * ```html
   * <div style="position:relative;">
   *   <button
   *       class="anchor"
   *       ${ref(anchorRef)}
   *       @click=${() => this.menuRef.value.show()}>
   *     Click to open menu
   *   </button>
   *   <!--
   *     `has-overflow` is required when using a submenu which overflows the
   *     menu's contents
   *   -->
   *   <md-menu has-overflow ${ref(menuRef)} ${(el) => el.anchor =
   * anchorRef.value}> <md-menu-item header="This is a header"></md-menu-item>
   *     <md-sub-menu-item header="this is a submenu item">
   *       <md-menu slot="submenu">
   *         <md-menu-item
   *           header="This is an item inside a submenu"></md-menu-item>
   *       </md-menu>
   *     </md-sub-menu>
   *   </md-menu>
   * </div>
   * ```
   *
   * @final
   * @suppress {visibility}
   */
  let MdSubMenuItem = class MdSubMenuItem extends SubMenuItem {
  };
  MdSubMenuItem.styles = [styles$8, styles$6, styles$9, styles$7];
  MdSubMenuItem = __decorate([
      e$7('md-sub-menu-item')
  ], MdSubMenuItem);

})();
