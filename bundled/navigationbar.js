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
  const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$4=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$5(n){return (t,o)=>void 0!==o?e$4(n,t,o):i$2(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$4=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$4;const e$3=null!=(null===(n$4=window.HTMLSlotElement)||void 0===n$4?void 0:n$4.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$3(n){const{slot:l,selector:t}=null!=n?n:{};return o$4({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$3(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e?e.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.2");

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
  const styles$1 = i$1 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
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
  /**
   * Returns `true` if the given element is in a right-to-left direction.
   *
   * @param el Element to determine direction from
   * @param shouldCheck Optional. If `false`, return `false` without checking
   *     direction. Determining the direction of `el` is somewhat expensive, so
   *     this parameter can be used as a conditional guard. Defaults to `true`.
   */
  function isRtl(el, shouldCheck = true) {
      return shouldCheck &&
          getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl';
  }

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a;
  /**
   * TODO(b/265346501): add docs
   */
  class NavigationBar extends s {
      constructor() {
          super(...arguments);
          this.activeIndex = 0;
          this.hideInactiveLabels = false;
          this.tabs = [];
      }
      render() {
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `<div class="md3-navigation-bar"
            role="tablist"
            aria-label=${ariaLabel || A}
            @keydown="${this.handleKeydown}"
            @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
            @navigation-tab-rendered=${this.handleNavigationTabConnected}
          ><md-elevation></md-elevation
          ><div class="md3-navigation-bar__tabs-slot-container"
        ><slot></slot></div></div>`;
      }
      updated(changedProperties) {
          if (changedProperties.has('activeIndex')) {
              this.onActiveIndexChange(this.activeIndex);
              this.dispatchEvent(new CustomEvent('navigation-bar-activated', {
                  detail: { tab: this.tabs[this.activeIndex], activeIndex: this.activeIndex },
                  bubbles: true,
                  composed: true
              }));
          }
          if (changedProperties.has('hideInactiveLabels')) {
              this.onHideInactiveLabelsChange(this.hideInactiveLabels);
          }
          if (changedProperties.has('tabs')) {
              this.onHideInactiveLabelsChange(this.hideInactiveLabels);
              this.onActiveIndexChange(this.activeIndex);
          }
      }
      firstUpdated(changedProperties) {
          super.firstUpdated(changedProperties);
          this.layout();
      }
      layout() {
          if (!this.tabsElement)
              return;
          const navTabs = [];
          for (const node of this.tabsElement) {
              navTabs.push(node);
          }
          this.tabs = navTabs;
      }
      handleNavigationTabConnected(event) {
          const target = event.target;
          if (this.tabs.indexOf(target) === -1) {
              this.layout();
          }
      }
      handleNavigationTabInteraction(event) {
          this.activeIndex = this.tabs.indexOf(event.detail.state);
      }
      handleKeydown(event) {
          const key = event.key;
          const focusedTabIndex = this.tabs.findIndex((tab) => {
              return tab.matches(':focus-within');
          });
          const isRTL = isRtl(this);
          const maxIndex = this.tabs.length - 1;
          if (key === 'Enter' || key === ' ') {
              this.activeIndex = focusedTabIndex;
              return;
          }
          if (key === 'Home') {
              this.tabs[0].focus();
              return;
          }
          if (key === 'End') {
              this.tabs[maxIndex].focus();
              return;
          }
          const toNextTab = (key === 'ArrowRight' && !isRTL) || (key === 'ArrowLeft' && isRTL);
          if (toNextTab && focusedTabIndex === maxIndex) {
              this.tabs[0].focus();
              return;
          }
          if (toNextTab) {
              this.tabs[focusedTabIndex + 1].focus();
              return;
          }
          const toPreviousTab = (key === 'ArrowLeft' && !isRTL) || (key === 'ArrowRight' && isRTL);
          if (toPreviousTab && focusedTabIndex === 0) {
              this.tabs[maxIndex].focus();
              return;
          }
          if (toPreviousTab) {
              this.tabs[focusedTabIndex - 1].focus();
              return;
          }
      }
      onActiveIndexChange(value) {
          if (!this.tabs[value]) {
              throw new Error('NavigationBar: activeIndex is out of bounds.');
          }
          for (let i = 0; i < this.tabs.length; i++) {
              this.tabs[i].active = i === value;
          }
      }
      onHideInactiveLabelsChange(value) {
          for (const tab of this.tabs) {
              tab.hideInactiveLabel = value;
          }
      }
  }
  _a = NavigationBar;
  (() => {
      requestUpdateOnAriaChange(_a);
  })();
  __decorate([
      n$5({ type: Number })
  ], NavigationBar.prototype, "activeIndex", void 0);
  __decorate([
      n$5({ type: Boolean })
  ], NavigationBar.prototype, "hideInactiveLabels", void 0);
  __decorate([
      l$3({ flatten: true })
  ], NavigationBar.prototype, "tabsElement", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles = i$1 `:host{--_active-indicator-color: var(--md-navigation-bar-active-indicator-color, var(--md-sys-color-secondary-container, #e8def8));--_active-indicator-height: var(--md-navigation-bar-active-indicator-height, 32px);--_active-indicator-shape: var(--md-navigation-bar-active-indicator-shape, 9999px);--_active-indicator-width: var(--md-navigation-bar-active-indicator-width, 64px);--_active-focus-icon-color: var(--md-navigation-bar-active-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-focus-label-text-color: var(--md-navigation-bar-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-state-layer-color: var(--md-navigation-bar-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-navigation-bar-active-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-hover-label-text-color: var(--md-navigation-bar-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-navigation-bar-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-icon-color: var(--md-navigation-bar-active-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-label-text-color: var(--md-navigation-bar-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-label-text-weight: var(--md-navigation-bar-active-label-text-weight, 700);--_active-pressed-icon-color: var(--md-navigation-bar-active-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-pressed-label-text-color: var(--md-navigation-bar-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-navigation-bar-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-navigation-bar-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-navigation-bar-container-elevation, 2);--_container-height: var(--md-navigation-bar-container-height, 80px);--_container-shape: var(--md-navigation-bar-container-shape, 0px);--_focus-state-layer-opacity: var(--md-navigation-bar-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-navigation-bar-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-navigation-bar-icon-size, 24px);--_inactive-focus-icon-color: var(--md-navigation-bar-inactive-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-label-text-color: var(--md-navigation-bar-inactive-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-focus-state-layer-color: var(--md-navigation-bar-inactive-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-icon-color: var(--md-navigation-bar-inactive-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-label-text-color: var(--md-navigation-bar-inactive-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-hover-state-layer-color: var(--md-navigation-bar-inactive-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-icon-color: var(--md-navigation-bar-inactive-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-label-text-color: var(--md-navigation-bar-inactive-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-pressed-icon-color: var(--md-navigation-bar-inactive-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-label-text-color: var(--md-navigation-bar-inactive-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_inactive-pressed-state-layer-color: var(--md-navigation-bar-inactive-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-navigation-bar-label-text-font, var(--md-ref-typeface-plain, Roboto));--_label-text-line-height: var(--md-navigation-bar-label-text-line-height, 1rem);--_label-text-size: var(--md-navigation-bar-label-text-size, 0.75rem);--_label-text-tracking: var(--md-navigation-bar-label-text-tracking, 0.031rem);--_label-text-type: var(--md-navigation-bar-label-text-type, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_label-text-weight: var(--md-navigation-bar-label-text-weight, 500);--_pressed-state-layer-opacity: var(--md-navigation-bar-pressed-state-layer-opacity, 0.12);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);width:100%}.md3-navigation-bar{display:flex;position:relative;width:100%;background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-bar .md3-navigation-bar__tabs-slot-container{display:inherit;width:inherit}md-elevation{transition-duration:280ms;z-index:0}/*# sourceMappingURL=navigation-bar-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @final
   * @suppress {visibility}
   */
  let MdNavigationBar = class MdNavigationBar extends NavigationBar {
  };
  MdNavigationBar.styles = [styles];
  MdNavigationBar = __decorate([
      e$5('md-navigation-bar')
  ], MdNavigationBar);

})();
