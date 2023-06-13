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
  const e$5 = e => n => {
    if (typeof n === "function") {
      return ((e, n) => {
        customElements.define(e, n);
        return n;
      })(e, n);
    } else {
      return ((e, n) => {
        const { kind: t, elements: s } = n;
        return {
          kind: t,
          elements: s,
          finisher(n) {
            customElements.define(e, n);
          }
        };
      })(e, n);
    }
  };

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
  var t$1;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$2+s.slice(v)+n$1+w):s+n$1+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$1?e$1.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$1)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

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
  const styles$a = i$2 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
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
  MdElevation.styles = [styles$a];
  MdElevation = __decorate([
      e$5('md-elevation')
  ], MdElevation);

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
   * Events that the focus ring listens to.
   */
  const EVENTS$1 = ['focusin', 'focusout', 'pointerdown'];
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
          for (const event of EVENTS$1) {
              prev?.removeEventListener(event, this);
              next?.addEventListener(event, this);
          }
      }
  }
  __decorate([
      n$5({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
      n$5({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$9 = i$2 `:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
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
  MdFocusRing.styles = [styles$9];
  MdFocusRing = __decorate([
      e$5('md-focus-ring')
  ], MdFocusRing);

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
  const EASING = {
      STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
      STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
      STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
      EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
      EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
      EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
  };

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
  const EVENTS = [
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
          return x `<div class="surface ${o(classes)}"></div>`;
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
          for (const event of EVENTS) {
              prev?.removeEventListener(event, this);
              next?.addEventListener(event, this);
          }
      }
  }
  __decorate([
      n$5({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
      i$3('.surface')
  ], Ripple.prototype, "mdRoot", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$8 = i$2 `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
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
  MdRipple.styles = [styles$8];
  MdRipple = __decorate([
      e$5('md-ripple')
  ], MdRipple);

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
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a;
  /**
   * A chip component.
   */
  class Chip extends s {
      constructor() {
          super(...arguments);
          this.disabled = false;
          this.label = '';
      }
      /**
       * Whether or not the primary ripple is disabled (defaults to `disabled`).
       * Some chip actions such as links cannot be disabled.
       */
      get rippleDisabled() {
          return this.disabled;
      }
      render() {
          return x `
      <div class="container ${o(this.getContainerClasses())}">
        ${this.renderOutline()}
        <md-focus-ring for=${this.primaryId}></md-focus-ring>
        <md-ripple for=${this.primaryId}
          ?disabled=${this.rippleDisabled}></md-ripple>
        ${this.renderPrimaryAction()}
        ${this.renderTrailingAction?.() || A}
      </div>
    `;
      }
      getContainerClasses() {
          return {
              disabled: this.disabled,
          };
      }
      renderContent() {
          return x `
      <span class="leading icon">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `;
      }
      renderOutline() {
          return x `<span class="outline"></span>`;
      }
      renderLeadingIcon() {
          return x `<slot name="icon"></slot>`;
      }
  }
  _a = Chip;
  (() => {
      requestUpdateOnAriaChange(_a);
  })();
  __decorate([
      n$5({ type: Boolean })
  ], Chip.prototype, "disabled", void 0);
  __decorate([
      n$5()
  ], Chip.prototype, "label", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * An assist chip component.
   */
  class AssistChip extends Chip {
      constructor() {
          super(...arguments);
          this.elevated = false;
          this.href = '';
          this.target = '';
      }
      get primaryId() {
          return this.href ? 'link' : 'button';
      }
      get rippleDisabled() {
          // Link chips cannot be disabled
          return !this.href && this.disabled;
      }
      getContainerClasses() {
          return {
              ...super.getContainerClasses(),
              // Link chips cannot be disabled
              disabled: !this.href && this.disabled,
              elevated: this.elevated,
          };
      }
      renderPrimaryAction() {
          const { ariaLabel } = this;
          if (this.href) {
              return x `
        <a class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          target=${this.target || A}
        >${this.renderContent()}</a>
      `;
          }
          return x `
      <button class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        type="button"
      >${this.renderContent()}</button>
    `;
      }
      renderOutline() {
          if (this.elevated) {
              return x `<md-elevation></md-elevation>`;
          }
          return super.renderOutline();
      }
  }
  __decorate([
      n$5({ type: Boolean })
  ], AssistChip.prototype, "elevated", void 0);
  __decorate([
      n$5()
  ], AssistChip.prototype, "href", void 0);
  __decorate([
      n$5()
  ], AssistChip.prototype, "target", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$7 = i$2 `:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_container-shape: var(--md-assist-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-type: var(--md-assist-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-assist-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-assist-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-assist-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-assist-chip-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=assist-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$6 = i$2 `.elevated{--md-elevation-level:var(--_elevated-container-elevation);--md-elevation-shadow-color:var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level:var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level:var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level:var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level:var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}/*# sourceMappingURL=elevated-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$5 = i$2 `:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;gap:8px;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:8px;padding-inline-end:16px}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:focus .outline{border-color:var(--_focus-outline-color)}.disabled .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font:var(--_label-text-type);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:hover .label{color:var(--_hover-label-text-color)}:focus .label{color:var(--_focus-label-text-color)}:active .label{color:var(--_pressed-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}:hover .leading.icon{color:var(--_hover-leading-icon-color)}:focus .leading.icon{color:var(--_focus-leading-icon-color)}:active .leading.icon{color:var(--_pressed-leading-icon-color)}.disabled .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}/*# sourceMappingURL=shared-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/243982145): add docs
   *
   * @final
   * @suppress {visibility}
   */
  let MdAssistChip = class MdAssistChip extends AssistChip {
  };
  MdAssistChip.styles = [styles$5, styles$6, styles$7];
  MdAssistChip = __decorate([
      e$5('md-assist-chip')
  ], MdAssistChip);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /** @protected */
  function renderRemoveButton({ disabled }) {
      return x `
    <button class="trailing action"
      ?disabled=${disabled ?? false}
      @click=${handleRemoveClick}
    >
      <md-focus-ring></md-focus-ring>
      <md-ripple></md-ripple>
      <svg class="trailing icon" viewBox="0 96 960 960">
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
      <span class="touch"></span>
    </button>
  `;
  }
  function handleRemoveClick(event) {
      if (this.disabled) {
          return;
      }
      event.stopPropagation();
      const preventDefault = !this.dispatchEvent(new Event('remove'));
      if (preventDefault) {
          return;
      }
      this.remove();
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A filter chip component.
   */
  class FilterChip extends Chip {
      get primaryId() {
          return 'option';
      }
      constructor() {
          super();
          this.elevated = false;
          this.removable = false;
          this.selected = false;
          this.addEventListener('click', () => {
              if (this.disabled) {
                  return;
              }
              this.selected = !this.selected;
          });
      }
      updated(changedProperties) {
          if (changedProperties.has('selected') &&
              changedProperties.get('selected') !== undefined) {
              // Dispatch when `selected` changes, except for the first update.
              this.dispatchEvent(new Event('change', { bubbles: true }));
          }
      }
      getContainerClasses() {
          return {
              ...super.getContainerClasses(),
              elevated: this.elevated,
              selected: this.selected,
          };
      }
      renderPrimaryAction() {
          const { ariaLabel } = this;
          return x `
      <button class="primary action"
        id="option"
        aria-label=${ariaLabel || A}
        aria-selected=${this.selected}
        ?disabled=${this.disabled || A}
        role="option"
      >${this.renderContent()}</button>
    `;
      }
      renderLeadingIcon() {
          if (!this.selected) {
              return super.renderLeadingIcon();
          }
          return b `
      <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
      </svg>
    `;
      }
      renderTrailingAction() {
          if (this.removable) {
              return renderRemoveButton({ disabled: this.disabled });
          }
          return A;
      }
      renderOutline() {
          if (this.elevated) {
              return x `<md-elevation></md-elevation>`;
          }
          return super.renderOutline();
      }
  }
  __decorate([
      n$5({ type: Boolean })
  ], FilterChip.prototype, "elevated", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], FilterChip.prototype, "removable", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], FilterChip.prototype, "selected", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$4 = i$2 `:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_container-shape: var(--md-filter-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-type: var(--md-filter-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-filter-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filter-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filter-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filter-chip-container-shape-end-start, var(--_container-shape) )}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}/*# sourceMappingURL=filter-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$3 = i$2 `.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected::before{background:var(--_selected-container-color)}.selected .outline{border-width:var(--_selected-outline-width)}.selected.disabled::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}.selected .label{color:var(--_selected-label-text-color)}.selected:hover .label{color:var(--_selected-hover-label-text-color)}.selected:focus .label{color:var(--_selected-focus-label-text-color)}.selected:active .label{color:var(--_selected-pressed-label-text-color)}.selected .leading.icon{color:var(--_selected-leading-icon-color)}.selected:hover .leading.icon{color:var(--_selected-hover-leading-icon-color)}.selected:focus .leading.icon{color:var(--_selected-focus-leading-icon-color)}.selected:active .leading.icon{color:var(--_selected-pressed-leading-icon-color)}/*# sourceMappingURL=selectable-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$2 = i$2 `.trailing.action{display:flex;padding:0 8px;--md-focus-ring-shape-start-start: var(--_container-shape-start-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-outward-offset: -2px}.trailing.action md-ripple{border-radius:50%;height:calc(1.3333333333*var(--_icon-size));inset:50% 0 0 50%;transform:translateX(-50%) translateY(-50%);width:calc(1.3333333333*var(--_icon-size))}:has(.trailing.action) .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:hover .trailing.icon{color:var(--_hover-trailing-icon-color)}:focus .trailing.icon{color:var(--_focus-trailing-icon-color)}:active .trailing.icon{color:var(--_pressed-trailing-icon-color)}.disabled .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}.selected .trailing.icon{color:var(--_selected-trailing-icon-color)}.selected:hover .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}.selected:focus .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}.selected:active .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}/*# sourceMappingURL=trailing-icon-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/243982145): add docs
   *
   * @final
   * @suppress {visibility}
   */
  let MdFilterChip = class MdFilterChip extends FilterChip {
  };
  MdFilterChip.styles = [
      styles$5, styles$6, styles$2, styles$3, styles$4
  ];
  MdFilterChip = __decorate([
      e$5('md-filter-chip')
  ], MdFilterChip);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * An input chip component.
   */
  class InputChip extends Chip {
      constructor() {
          super(...arguments);
          this.avatar = false;
          this.href = '';
          this.target = '';
          this.removeOnly = false;
          this.selected = false;
      }
      get primaryId() {
          if (this.href) {
              return 'link';
          }
          if (this.removeOnly) {
              return '';
          }
          return 'button';
      }
      get rippleDisabled() {
          // Link chips cannot be disabled
          return !this.href && this.disabled;
      }
      getContainerClasses() {
          return {
              ...super.getContainerClasses(),
              avatar: this.avatar,
              // Link chips cannot be disabled
              disabled: !this.href && this.disabled,
              selected: this.selected,
          };
      }
      renderPrimaryAction() {
          const { ariaLabel } = this;
          if (this.href) {
              return x `
        <a class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          target=${this.target || A}
        >${this.renderContent()}</a>
      `;
          }
          if (this.removeOnly) {
              return x `
        <span class="primary action" aria-label=${ariaLabel || A}>
          ${this.renderContent()}
        </span>
      `;
          }
          return x `
      <button class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        type="button"
      >${this.renderContent()}</button>
    `;
      }
      renderTrailingAction() {
          return renderRemoveButton({ disabled: this.disabled });
      }
  }
  __decorate([
      n$5({ type: Boolean })
  ], InputChip.prototype, "avatar", void 0);
  __decorate([
      n$5()
  ], InputChip.prototype, "href", void 0);
  __decorate([
      n$5()
  ], InputChip.prototype, "target", void 0);
  __decorate([
      n$5({ type: Boolean, attribute: 'remove-only' })
  ], InputChip.prototype, "removeOnly", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], InputChip.prototype, "selected", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$1 = i$2 `:host{--_container-height: var(--md-input-chip-container-height, 32px);--_container-shape: var(--md-input-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-type: var(--md-input-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, 9999px);--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--_container-shape) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}/*# sourceMappingURL=input-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/243982145): add docs
   *
   * @final
   * @suppress {visibility}
   */
  let MdInputChip = class MdInputChip extends InputChip {
  };
  MdInputChip.styles = [styles$5, styles$2, styles$3, styles$1];
  MdInputChip = __decorate([
      e$5('md-input-chip')
  ], MdInputChip);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A suggestion chip component.
   */
  class SuggestionChip extends AssistChip {
  }
  // Note: assist and suggestion chips are functionally identical with different
  // tokens.

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles = i$2 `:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_container-shape: var(--md-suggestion-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-type: var(--md-suggestion-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var( --md-suggestion-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-suggestion-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-suggestion-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-suggestion-chip-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=suggestion-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/243982145): add docs
   *
   * @final
   * @suppress {visibility}
   */
  let MdSuggestionChip = class MdSuggestionChip extends SuggestionChip {
  };
  MdSuggestionChip.styles = [styles$5, styles$6, styles];
  MdSuggestionChip = __decorate([
      e$5('md-suggestion-chip')
  ], MdSuggestionChip);

})();
