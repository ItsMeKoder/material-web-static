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
  /* global Reflect, Promise */


  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$5 = e => n => {if (typeof n === "function") {return ((e, n) => {if (!customElements.get(e)){customElements.define(e, n);}return n;})(e, n);} else {return ((e, n) => {const { kind: t, elements: s } = n;return {kind: t,elements: s,finisher(n) {if (!customElements.get(e)){customElements.define(e, n);}}};})(e, n);}};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$4=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$5(n){return (t,o)=>void 0!==o?e$4(n,t,o):i$4(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$3(t){return n$5({...t,state:!0})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$5=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i$3(i,n){return o$5({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$4;null!=(null===(n$4=window.HTMLSlotElement)||void 0===n$4?void 0:n$4.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=window,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$4 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$3=e$2.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$2+s.slice(v)+n$1+w):s+n$1+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$1?e$1.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$1)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.2");

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
  const styles$1 = i$2 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
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
      e$5('md-elevation')
  ], MdElevation);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

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
  /**
   * Returns a function which can be used to throttle function calls
   * mapped to a key via a given function that should produce a promise that
   * determines the throttle amount (defaults to requestAnimationFrame).
   */
  function createThrottle() {
      const stack = new Set();
      return async (key = '', cb, timeout = async () => {
          await new Promise(requestAnimationFrame);
      }) => {
          if (!stack.has(key)) {
              stack.add(key);
              await timeout();
              if (stack.has(key)) {
                  stack.delete(key);
                  cb();
              }
          }
      };
  }
  /**
   * Parses an number in milliseconds from a css time value
   */
  function msFromTimeCSSValue(value) {
      const match = value.trim().match(/([\d.]+)(\s*s$)?/);
      const time = match?.[1];
      const seconds = match?.[2];
      return Number(time ?? 0) * (seconds ? 1000 : 1);
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // This is required for decorators.
  // tslint:disable:no-new-decorators
  /**
   * Default close action.
   */
  const CLOSE_ACTION = 'close';
  const OPENING_TRANSITION_PROP = '--_opening-transition-duration';
  const CLOSING_TRANSITION_PROP = '--_closing-transition-duration';
  /**
   * A dialog component.
   */
  class Dialog extends s {
      constructor() {
          super(...arguments);
          /**
           * Opens the dialog when set to `true` and closes it when set to `false`.
           */
          this.open = false;
          /**
           * Setting fullscreen displays the dialog fullscreen on small screens.
           * This can be customized via the `fullscreenBreakpoint` property.
           * When showing fullscreen, the header will take up less vertical space, and
           * the dialog will have a `showing-fullscreen`attribute, allowing content to
           * be styled in this state.
           *
           * Dialogs can be sized by setting:
           *
           * * --md-dialog-container-min-block-size
           * * --md-dialog-container-max-block-size
           * * --md-dialog-container-min-inline-size
           * * --md-dialog-container-max-inline-size
           *
           * These are typically configured via media queries and are independent of the
           * fullscreen setting.
           */
          this.fullscreen = false;
          /**
           * A media query string specifying the breakpoint at which the dialog
           * should be shown fullscreen. Note, this only applies when the `fullscreen`
           * property is set.
           *
           * By default, the dialog is shown fullscreen on screens less than 600px wide
           * or 400px tall.
           */
          this.fullscreenBreakpoint = '(max-width: 600px), (max-height: 400px)';
          /**
           * Hides the dialog footer, making any content slotted into the footer
           * inaccessible.
           */
          this.footerHidden = false;
          /**
           * Renders footer content in a vertically stacked alignment rather than the
           * normal horizontal alignment.
           */
          this.stacked = false;
          /**
           * When the dialog is closed it disptaches `closing` and `closed` events.
           * These events have an action property which has a default value of
           * the value of this property. Specific actions have explicit values but when
           * a value is not specified, the default is used. For example, clicking the
           * scrim, pressing escape, or clicking a button with an action attribute set
           * produce an explicit action.
           *
           * Defaults to `close`.
           */
          this.defaultAction = CLOSE_ACTION;
          /**
           * The name of an attribute which can be placed on any element slotted into
           * the dialog. If an element has an action attribute set, clicking it will
           * close the dialog and the `closing` and `closed` events dispatched will
           * have their action property set the value of this attribute on the
           * clicked element.The default valus is `dialogAction`. For example,
           *
           *   <md-dialog>
           *    Content
           *     <md-filled-button slot="footer"dialogAction="buy">
           *       Buy
           *     </md-filled-button>
           *   </md-dialog>
           */
          this.actionAttribute = 'dialogAction';
          /**
           * When the dialog is opened, it will focus the first element which has
           * an attribute name matching this property. The default value is
           * `dialogFocus`. For example:
           *
           *  <md-dialog>
           *    <md-filled-text-field
           *      label="Enter some text"
           *      dialogFocus
           *    >
           *    </md-filled-text-field>
           *  </md-dialog>
           */
          this.focusAttribute = 'dialogFocus';
          /**
           * Clicking on the scrim surrounding the dialog closes the dialog.
           * The `closing` and `closed` events this produces have an `action` property
           * which is the value of this property and defaults to `close`.
           */
          this.scrimClickAction = CLOSE_ACTION;
          /**
           * Pressing the `escape` key while the dialog is open closes the dialog.
           * The `closing` and `closed` events this produces have an `action` property
           * which is the value of this property and defaults to `close`.
           */
          this.escapeKeyAction = CLOSE_ACTION;
          /**
           * When opened, the dialog is displayed modeless or non-modal. This
           * allows users to interact with content outside the dialog without
           * closing the dialog and does not display the scrim around the dialog.
           */
          this.modeless = false;
          /**
           * Set to make the dialog position draggable.
           */
          this.draggable = false;
          this.throttle = createThrottle();
          /**
           * Private properties that reflect for styling manually in `updated`.
           */
          this.showingFullscreen = false;
          this.showingOpen = false;
          this.opening = false;
          this.closing = false;
          /**
           * Transition kind. Supported options include: grow, shrink, grow-down,
           * grow-up, grow-left, and grow-right.
           *
           * Defaults to grow-down.
           */
          this.transition = 'grow-down';
          this.dragging = false;
          this.dragMargin = 8;
          this.fullscreenQueryListener = undefined;
      }
      static setDocumentScrollingDisabled(disabled = false) {
          let { preventedScrollingCount, scrollbarTester } = Dialog;
          Dialog.preventedScrollingCount = preventedScrollingCount =
              Math.max(preventedScrollingCount + (Number(disabled) || -1), 0);
          const shouldPrevent = Boolean(preventedScrollingCount);
          const { style } = document.body;
          if (shouldPrevent && style.overflow === 'hidden') {
              return;
          }
          if (scrollbarTester === undefined) {
              Dialog.scrollbarTester = scrollbarTester = document.createElement('div');
              scrollbarTester.style.cssText =
                  `position: absolute; height: 0; width: 100%; visibility: hidden; pointer-events: none;`;
          }
          // Appends an element to see if its offsetWidth changes when overflow is
          // altered. If it does, then add end inline padding to restore the width to
          // avoid a visible layout shift.
          document.body.append(scrollbarTester);
          const { offsetWidth } = scrollbarTester;
          style.overflow = shouldPrevent ? 'hidden' : '';
          const scrollbarWidth = scrollbarTester.offsetWidth - offsetWidth;
          scrollbarTester.remove();
          style.paddingInlineEnd = shouldPrevent ? `${scrollbarWidth}px` : '';
      }
      /**
       * Opens and shows the dialog. This is equivalent to setting the `open`
       * property to true.
       */
      show() {
          this.open = true;
      }
      /**
       * Closes the dialog. This is equivalent to setting the `open`
       * property to false.
       */
      close(action = '') {
          this.currentAction = action;
          this.open = false;
      }
      /**
       * Opens and shows the dialog if it is closed; otherwise closes it.
       */
      toggleShow() {
          if (this.open) {
              this.close(this.currentAction);
          }
          else {
              this.show();
          }
      }
      getContentScrollInfo() {
          if (!this.hasUpdated || !this.contentElement) {
              return { isScrollable: false, isAtScrollTop: true, isAtScrollBottom: true };
          }
          const { scrollTop, scrollHeight, offsetHeight, clientHeight } = this.contentElement;
          return {
              isScrollable: scrollHeight > offsetHeight,
              isAtScrollTop: scrollTop === 0,
              isAtScrollBottom: Math.abs(Math.round(scrollHeight - scrollTop) - clientHeight) <= 2
          };
      }
      render() {
          const { isScrollable, isAtScrollTop, isAtScrollBottom } = this.getContentScrollInfo();
          return x `
    <dialog
      @close=${this.handleDialogDismiss}
      @cancel=${this.handleDialogDismiss}
      @click=${this.handleDialogClick}
      class="dialog ${o({
            'stacked': this.stacked,
            'scrollable': isScrollable,
            'scroll-divider-header': !isAtScrollTop,
            'scroll-divider-footer': !isAtScrollBottom,
            'footerHidden': this.footerHidden
        })}"
      aria-labelledby="header"
      aria-describedby="content"
    >
      <div class="container ${o({
            'dragging': this.dragging
        })}"
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handleDragEnd}
      >
        <md-elevation></md-elevation>
        <header class="header">
          <slot name="header">
            <slot name="headline-prefix"></slot>
            <slot name="headline"></slot>
            <slot name="headline-suffix"></slot>
          </slot>
        </header>
        <section class="content" @scroll=${this.handleContentScroll}>
          <slot></slot>
        </section>
        <footer class="footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </dialog>`;
      }
      willUpdate(changed) {
          if (changed.has('open')) {
              this.opening = this.open;
              // only closing if was opened previously...
              this.closing = !this.open && changed.get('open');
          }
          if (changed.has('fullscreen') || changed.has('fullscreenBreakpoint')) {
              this.updateFullscreen();
          }
      }
      firstUpdated() {
          // Update when content size changes to show/hide scroll dividers.
          new ResizeObserver(() => {
              if (this.showingOpen) {
                  this.requestUpdate();
              }
          }).observe(this.contentElement);
      }
      updated(changed) {
          if (changed.get('draggable') && !this.draggable) {
              this.style.removeProperty('--_container-drag-inline-start');
              this.style.removeProperty('--_container-drag-block-start');
          }
          // Reflect internal state to facilitate styling.
          this.reflectStateProp(changed, 'opening', this.opening);
          this.reflectStateProp(changed, 'closing', this.closing);
          this.reflectStateProp(changed, 'showingFullscreen', this.showingFullscreen, 'showing-fullscreen');
          this.reflectStateProp(changed, 'showingOpen', this.showingOpen, 'showing-open');
          if (!changed.has('open')) {
              return;
          }
          // prevent body scrolling early only when opening to avoid layout
          // shift when closing.
          if (!this.modeless && this.open) {
              Dialog.setDocumentScrollingDisabled(this.open);
          }
          if (this.open) {
              this.contentElement.scrollTop = 0;
              if (this.modeless) {
                  this.dialogElement.show();
              }
              else {
                  // Note, native focus handling fails when focused element is in an
                  // overflow: auto container.
                  this.dialogElement.showModal();
              }
          }
          // Avoids dispatching initial state.
          const shouldDispatchAction = changed.get('open') !== undefined;
          this.performTransition(shouldDispatchAction);
      }
      /**
       * Internal state is reflected here as attributes to effect styling. This
       * could be done via internal classes, but it's published on the host
       * to facilitate the (currently undocumented) possibility of customizing
       * styling of user content based on these states.
       * Note, in the future this could be done with `:state(...)` when browser
       * support improves.
       */
      reflectStateProp(changed, key, value, attribute) {
          attribute ?? (attribute = key);
          if (!changed.has(key)) {
              return;
          }
          if (value) {
              this.setAttribute(attribute, '');
          }
          else {
              this.removeAttribute(attribute);
          }
      }
      async performTransition(shouldDispatchAction) {
          // TODO: pause here only to avoid a double update warning.
          await this.updateComplete;
          this.showingOpen = this.open;
          if (shouldDispatchAction) {
              this.dispatchActionEvent(this.open ? 'opening' : 'closing');
          }
          // Compute desired transition duration.
          const duration = msFromTimeCSSValue(getComputedStyle(this).getPropertyValue(this.open ? OPENING_TRANSITION_PROP : CLOSING_TRANSITION_PROP));
          let promise = this.updateComplete;
          if (duration > 0) {
              promise = new Promise((r) => {
                  setTimeout(r, duration);
              });
          }
          await promise;
          this.opening = false;
          this.closing = false;
          if (!this.open && this.dialogElement?.open) {
              // Closing the dialog triggers an asynchronous `close` event.
              // It's important to wait for this event to fire since it changes the
              // state of `open` to false.
              // Without waiting, this element's `closed` event can be called before
              // the dialog's `close` event, which is problematic since the user
              // can set `open` in the `closed` event.
              // The timing of the event appears to vary via browser and does *not*
              // seem to resolve by "task" timing; therefore an explicit promise is
              // used.
              const closedPromise = new Promise(resolve => {
                  this.dialogClosedResolver = resolve;
              });
              this.dialogElement?.close(this.currentAction || this.defaultAction);
              await closedPromise;
              // enable scrolling late to avoid layout shift when closing
              if (!this.modeless) {
                  Dialog.setDocumentScrollingDisabled(this.open);
              }
          }
          // Focus initial element.
          if (this.open) {
              this.focus();
          }
          if (shouldDispatchAction) {
              this.dispatchActionEvent(this.open ? 'opened' : 'closed');
          }
          this.currentAction = undefined;
      }
      dispatchActionEvent(type) {
          const detail = { action: this.open ? 'none' : this.currentAction };
          this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true }));
      }
      updateFullscreen() {
          if (this.fullscreenQuery !== undefined) {
              this.fullscreenQuery.removeEventListener('change', this.fullscreenQueryListener);
              this.fullscreenQuery = this.fullscreenQueryListener = undefined;
          }
          if (!this.fullscreen) {
              this.showingFullscreen = false;
              return;
          }
          this.fullscreenQuery = window.matchMedia(this.fullscreenBreakpoint);
          this.fullscreenQuery.addEventListener('change', (this.fullscreenQueryListener = (event) => {
              this.showingFullscreen = event.matches;
          }));
          this.showingFullscreen = this.fullscreenQuery.matches;
      }
      // handles native close/cancel events and we just ensure
      // internal state is in sync.
      handleDialogDismiss(e) {
          if (e.type === 'cancel') {
              this.currentAction = this.escapeKeyAction;
              // Prevents the <dialog> element from closing when
              // `escapeKeyAction` is set to an empty string.
              // It also early returns and avoids <md-dialog> internal state
              // changes.
              if (this.escapeKeyAction === '') {
                  e.preventDefault();
                  return;
              }
          }
          this.dialogClosedResolver?.();
          this.dialogClosedResolver = undefined;
          this.open = false;
          this.opening = false;
          this.closing = false;
      }
      handleDialogClick(e) {
          if (!this.open) {
              return;
          }
          this.currentAction =
              e.target.getAttribute(this.actionAttribute) ??
                  (!this.modeless && this.containerElement &&
                      !e.composedPath().includes(this.containerElement) ?
                      this.scrimClickAction :
                      '');
          if (this.currentAction !== '') {
              this.close(this.currentAction);
          }
      }
      /* This allows the dividers to dynamically show based on scrolling. */
      handleContentScroll() {
          this.throttle('scroll', () => {
              this.requestUpdate();
          });
      }
      getFocusElement() {
          const selector = `[${this.focusAttribute}]`;
          const slotted = [this.footerSlot, this.contentSlot].flatMap(slot => slot.assignedElements({ flatten: true }));
          for (const el of slotted) {
              const focusEl = el.matches(selector) ? el : el.querySelector(selector);
              if (focusEl) {
                  return focusEl;
              }
          }
          return null;
      }
      focus() {
          this.getFocusElement()?.focus();
      }
      blur() {
          this.getFocusElement()?.blur();
      }
      canStartDrag(e) {
          if (this.draggable === false || e.defaultPrevented || !(e.buttons & 1) ||
              !this.headerElement || !e.composedPath().includes(this.headerElement)) {
              return false;
          }
          return true;
      }
      handlePointerMove(e) {
          if (!this.dragging && !this.canStartDrag(e) || !this.containerElement) {
              return;
          }
          const { top, left, height, width } = this.containerElement.getBoundingClientRect();
          if (!this.dragging) {
              this.containerElement.setPointerCapture(e.pointerId);
              this.dragging = true;
              const { x, y } = e;
              this.dragInfo = [x, y, top, left];
          }
          const [sx, sy, st, sl] = this.dragInfo ?? [0, 0, 0, 0];
          const dx = e.x - sx;
          const dy = e.y - sy;
          const ml = window.innerWidth - width - this.dragMargin;
          const mt = window.innerHeight - height - this.dragMargin;
          const l = Math.max(this.dragMargin, Math.min(ml, dx + sl));
          const t = Math.max(this.dragMargin, Math.min(mt, dy + st));
          this.style.setProperty('--_container-drag-inline-start', `${l}px`);
          this.style.setProperty('--_container-drag-block-start', `${t}px`);
      }
      handleDragEnd(e) {
          if (!this.dragging) {
              return;
          }
          this.containerElement?.releasePointerCapture(e.pointerId);
          this.dragging = false;
          this.dragInfo = undefined;
      }
  }
  Dialog.preventedScrollingCount = 0;
  __decorate([
      n$5({ type: Boolean })
  ], Dialog.prototype, "open", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], Dialog.prototype, "fullscreen", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "fullscreenBreakpoint", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], Dialog.prototype, "footerHidden", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], Dialog.prototype, "stacked", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "defaultAction", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "actionAttribute", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "focusAttribute", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "scrimClickAction", void 0);
  __decorate([
      n$5()
  ], Dialog.prototype, "escapeKeyAction", void 0);
  __decorate([
      n$5({ type: Boolean, reflect: true })
  ], Dialog.prototype, "modeless", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], Dialog.prototype, "draggable", void 0);
  __decorate([
      i$3('.dialog', true)
  ], Dialog.prototype, "dialogElement", void 0);
  __decorate([
      i$3('slot[name=footer]', true)
  ], Dialog.prototype, "footerSlot", void 0);
  __decorate([
      i$3('slot:not([name])', true)
  ], Dialog.prototype, "contentSlot", void 0);
  __decorate([
      i$3(`.content`, true)
  ], Dialog.prototype, "contentElement", void 0);
  __decorate([
      i$3(`.container`, true)
  ], Dialog.prototype, "containerElement", void 0);
  __decorate([
      i$3(`.header`, true)
  ], Dialog.prototype, "headerElement", void 0);
  __decorate([
      t$3()
  ], Dialog.prototype, "showingFullscreen", void 0);
  __decorate([
      t$3()
  ], Dialog.prototype, "showingOpen", void 0);
  __decorate([
      t$3()
  ], Dialog.prototype, "opening", void 0);
  __decorate([
      t$3()
  ], Dialog.prototype, "closing", void 0);
  __decorate([
      n$5({ reflect: true })
  ], Dialog.prototype, "transition", void 0);
  __decorate([
      t$3()
  ], Dialog.prototype, "dragging", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles = i$2 `:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-dialog-container-elevation, 3);--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_with-icon-icon-color: var(--md-dialog-with-icon-icon-color, var(--md-sys-color-secondary, #625b71));--_with-icon-icon-size: var(--md-dialog-with-icon-icon-size, 24px);--_container-max-inline-size: var(--md-dialog-container-max-inline-size, min(560px, 100% - 48px));--_container-min-inline-size: var(--md-dialog-container-min-inline-size, 280px);--_container-max-block-size: var(--md-dialog-container-max-block-size, min(560px, 100% - 48px));--_container-min-block-size: var(--md-dialog-container-min-block-size, 140px);--_container-inset-inline-start: var(--md-dialog-container-inset-inline-start, auto);--_container-inset-inline-end: var(--md-dialog-container-inset-inline-end, auto);--_container-inset-block-start: var(--md-dialog-container-inset-block-start, auto);--_container-inset-block-end: var(--md-dialog-container-inset-block-end, auto);--_opening-transition-duration: var(--md-dialog-opening-transition-duration, 400ms);--_opening-transition-easing: var(--md-dialog-opening-transition-easing, cubic-bezier(0.05, 0.7, 0.1, 1));--_closing-transition-duration: var(--md-dialog-closing-transition-duration, 200ms);--_closing-transition-easing: var(--md-dialog-closing-transition-easing, cubic-bezier(0.3, 0, 0.8, 0.15));--_scrim-color: var(--md-dialog-scrim-color, rgba(0, 0, 0, 0.32));--_container-block-padding: var(--md-dialog-container-block-padding, 24px);--_container-inline-padding: var(--md-dialog-container-inline-padding, 24px);--_header-spacing: var(--md-dialog-header-spacing, 16px);--_action-spacing: var(--md-dialog-action-spacing, 8px);--_content-block-start-spacing: var(--md-dialog-content-block-start-spacing, 16px);--_content-block-end-spacing: var(--md-dialog-content-block-end-spacing, 24px);--_with-divider-divider-height: var(--md-dialog-with-divider-divider-height, 1px);--_with-divider-divider-color: var(--md-dialog-with-divider-divider-color, var(--md-sys-color-outline, #79747e));--_fullscreen-header-block-size: var(--md-dialog-fullscreen-header-block-size, 56px);--_fullscreen-footer-block-size: var(--md-dialog-fullscreen-footer-block-size, 56px);--_fullscreen-container-block-padding: var(--md-dialog-fullscreen-container-block-padding, 8px);--_container-drag-inline-start: initial;--_container-drag-block-start: initial}@media(prefers-reduced-motion: reduce){:host{--_opening-transition-duration: 0;--_closing-transition-duration: 0}}.dialog{position:fixed;align-items:center;justify-content:center;box-sizing:border-box;inset:0;block-size:100dvh;inline-size:100dvw;max-block-size:100dvh;max-inline-size:100dvw;border:none;background:rgba(0,0,0,0);padding:0;margin:0;overflow:clip}.dialog:not(:modal){z-index:10000;pointer-events:none}.dialog[open]{display:flex}.dialog::backdrop{background:none}.dialog::before{content:"";position:absolute;z-index:-1;inset:0;block-size:100dvh;inline-size:100dvw;pointer-events:none}:host([modeless]) .dialog:before{display:none}.container{position:absolute;inset-inline-start:var(--_container-drag-inline-start, var(--_container-inset-inline-start));inset-inline-end:var(--_container-inset-inline-end);inset-block-start:var(--_container-drag-block-start, var(--_container-inset-block-start));inset-block-end:var(--_container-inset-block-end);background-color:var(--_container-color);border-radius:var(--_container-shape);display:flex;flex-direction:column;box-sizing:border-box;pointer-events:auto;min-block-size:var(--_container-min-block-size);max-block-size:var(--_container-max-block-size);min-inline-size:var(--_container-min-inline-size);max-inline-size:var(--_container-max-inline-size);padding-block-start:var(--_container-block-padding);padding-block-end:var(--_container-block-padding)}md-elevation{--md-elevation-level:var(--_container-elevation)}.container>*{box-sizing:border-box;padding-inline-start:var(--_container-inline-padding);padding-inline-end:var(--_container-inline-padding)}.header{display:flex;flex-direction:column;align-items:center;gap:var(--_header-spacing);-webkit-font-smoothing:antialiased;color:var(--_headline-color);font:var(--_headline-type)}.content{flex:1;overflow:auto;margin-block-start:var(--_content-block-start-spacing);margin-block-end:var(--_content-block-end-spacing);-webkit-font-smoothing:antialiased;color:var(--_supporting-text-color);font:var(--_supporting-text-type)}.footer{display:flex;position:relative;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;gap:var(--_action-spacing)}.footerHidden{--_content-block-end-spacing: 0px}.footerHidden .footer{display:none}.stacked .footer{flex-direction:column;align-items:flex-end}.scrollable .content{border-block-start:var(--_with-divider-divider-height) solid rgba(0,0,0,0);border-block-end:var(--_with-divider-divider-height) solid rgba(0,0,0,0)}.scroll-divider-header .content{border-block-start-color:var(--_with-divider-divider-color)}.scroll-divider-footer:not(.footerHidden) .content{border-block-end-color:var(--_with-divider-divider-color)}.dragging{user-select:none;cursor:move;touch-action:none}.container{will-change:transform,opacity;transition-property:transform;overflow:hidden}.container>*{transition-timing-function:inherit;transition-duration:inherit;transition-property:opacity,transform;will-change:transform,opacity;opacity:0}:host([transition][showing-open]) .container>*{opacity:1;transform:none}:host([transition][showing-open]) .container{opacity:1;transform:none}.dialog::before{transition:background-color linear;background-color:rgba(0,0,0,0)}:host([showing-open]) .dialog::before{background-color:var(--_scrim-color)}:host([opening]) .dialog::before{transition-duration:calc(var(--_opening-transition-duration)/2)}:host([closing]) .dialog::before{transition-duration:calc(var(--_closing-transition-duration)/2)}:host([opening]) .container{transition-duration:var(--_opening-transition-duration);transition-timing-function:var(--_opening-transition-easing)}:host([closing]) .container{transition-duration:var(--_closing-transition-duration);transition-timing-function:var(--_closing-transition-easing)}:host([trasition][closing]) .container>*{transform:none;opacity:0}:host([transition=grow-down]){--_opening-transform: scale(1, 0.1) translateY(-20%);--_closing-transform: scale(1, 0.9) translateY(-10%);--_origin: top;--_opening-content-transform: scale(1, 2);--_origin-footer: bottom}:host([transition=grow-up]){--_opening-transform: scale(1, 0.1) translateY(20%);--_closing-transform: scale(1, 0.9) translateY(10%);--_origin: bottom;--_opening-content-transform: scale(1, 2);--_origin-footer: bottom}:host([transition=grow-left]){--_opening-transform: scale(0.1, 1) translateX(20%);--_closing-transform: scale(0.9, 1) translateX(10%);--_origin: right;--_opening-content-transform: none;--_origin-footer: none}:host([transition=grow-right]){--_opening-transform: scale(0.1, 1) translateX(-20%);--_closing-transform: scale(0.9, 1) translateX(-10%);--_origin: left;--_opening-content-transform: none;--_origin-footer: none}:host([transition^=grow-]) .container{transform-origin:var(--_origin);transform:var(--_opening-transform)}:host([transition^=grow-]) .container>*{transform-origin:var(--_origin);transform:var(--_opening-content-transform)}:host([transition^=grow-]) .footer{transform-origin:var(--_origin-footer)}:host([transition^=grow-][closing]){transform:var(--_closing-transform)}:host([transition=shrink]) .container{transform:scale(1.2)}:host([transition=grow]) .container{transform:scale(0.8)}:host([transition=shrink][closing]) .container,:host([transition=grow][closing]) .container{transition-duration:0;transform:none}:host([showing-fullscreen]){--_container-max-block-size: none;--_container-max-inline-size: none}:host([showing-fullscreen]) .container{block-size:100dvh;inline-size:100dvw;border-radius:0px;padding-block-start:0;padding-block-end:0}:host([showing-fullscreen]) .header{justify-content:space-between;flex-direction:row;max-block-size:var(--_fullscreen-header-block-size);padding-block-start:var(--_fullscreen-container-block-padding);padding-inline:4px;--_header-spacing: 4px}:host([showing-fullscreen]) .content{margin-block-start:0;margin-block-end:0}:host([showing-fullscreen]) .footer{max-block-size:var(--_fullscreen-footer-block-size);padding-block-end:var(--_fullscreen-container-block-padding)}:host([showing-fullscreen]) .scroll-divider-footer .content{border-block-end-color:rgba(0,0,0,0)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.container{outline:windowtext solid 2px}}[name=headline-prefix]::slotted(*),[name=headline-suffix]::slotted(*){color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size)}[name=header]::slotted(*){flex:1;align-self:stretch;display:flex;align-items:center}:host([showing-fullscreen]) [name=headline]::slotted(*){flex:1}/*# sourceMappingURL=dialog-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Dialogs can require an action, communicate information, or help
   * users accomplish a task. There are two types of dialogs: basic and
   * full-screen.
   *
   * @description
   * A dialog is a modal window that appears in front of app content to provide
   * critical information or ask for a decision. Dialogs disable all app
   * functionality when they appear, and remain on screen until confirmed,
   * dismissed, or a required action has been taken.
   *
   * Dialogs are purposefully interruptive, so they should be used sparingly.
   * A less disruptive alternative is to use a menu, which provides options
   * without interrupting a user’s experience.
   *
   * On mobile devices only, complex dialogs should be displayed fullscreen.
   *
   * __Example usages:__
   * - Common use cases for basic dialogs include alerts, quick selection, and
   * confirmation.
   * - More complex dialogs may contain actions that require a series of tasks
   * to complete. One example is creating a calendar entry with the event title,
   * date, location, and time.
   */
  let MdDialog = class MdDialog extends Dialog {
  };
  MdDialog.styles = [styles];
  MdDialog = __decorate([
      e$5('md-dialog')
  ], MdDialog);

})();
