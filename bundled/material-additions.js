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

  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
  };

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$9=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$6=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$8=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$7(n){return (t,o)=>void 0!==o?e$8(n,t,o):i$6(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$3(t){return n$7({...t,state:!0})}

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
   */function e$7(e){return o$6({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i$5(i,n){return o$6({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n$6;const e$6=null!=(null===(n$6=window.HTMLSlotElement)||void 0===n$6?void 0:n$6.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$5(n){const{slot:l,selector:t}=null!=n?n:{};return o$6({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$6(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=window,e$5=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$5=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$5),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$5)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$4;const e$4=window,r$1=e$4.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$4.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$2},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$4){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$1}),(null!==(s$4=e$4.reactiveElementVersions)&&void 0!==s$4?s$4:e$4.reactiveElementVersions=[]).push("1.6.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$1;const i$3=window,s$3=i$3.trustedTypes,e$3=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$3="?"+n$3,h=`<${l$3}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f$1:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f$1?s+h:v>=0?(l.push(e),s.slice(0,v)+o$3+s.slice(v)+n$3+w):s+n$3+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$3?e$3.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$3)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$3)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$3?s$3.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$3.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$3.litHtmlVersions)&&void 0!==t$1?t$1:i$3.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l$2,o$2;let s$2 = class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}};s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$2});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.3.2");

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$y = i$4 `.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);position:relative;box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card::after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}:host{display:inline-flex}:host(:not([clickable])){cursor:default}.mdc-card{width:inherit;height:inherit;padding:var(--md-card-padding, 0);margin:var(--md-card-margin, 0);flex:1;z-index:0}.mdc-card .mdc-card__ripple{z-index:0;--md-ripple-state-layer-shape: var(--_container-shape)}.mdc-card .mdc-card__primary-action{flex:1}.mdc-card .mdc-card__primary-action.mdc-card__primary-action--disabled{cursor:initial}.mdc-card .mdc-card__media{flex:1;background-color:inherit;border-radius:inherit}.mdc-card md-elevation{inset:0;position:absolute;z-index:-1}::slotted(img:first-child){border-top-left-radius:var(--_container-shape);border-top-right-radius:var(--_container-shape)}slot::slotted(.mdc-card__action){display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;align-items:initial;justify-content:center;user-select:none}slot::slotted(.mdc-card__action:focus){outline:none}slot[name=button]::slotted(.mdc-card__action--button){margin-left:0;margin-right:8px}[dir=rtl] slot[name=button]::slotted(.mdc-card__action--button),::slotted(.mdc-card__action--buttonslot[name=button][dir=rtl]){margin-left:8px;margin-right:0}slot[name=button]::slotted(.mdc-card__action--button:last-child){margin-left:0;margin-right:0}[dir=rtl] slot[name=button]::slotted(.mdc-card__action--button:last-child),::slotted(.mdc-card__action--button:last-childslot[name=button][dir=rtl]){margin-left:0;margin-right:0}.mdc-card__actions--full-bleed slot[name=button]::slotted(.mdc-card__action--button){justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed slot[name=button]::slotted(.mdc-card__action--button),.mdc-card__actions--full-bleed ::slotted(.mdc-card__action--buttonslot[name=button][dir=rtl]){text-align:right}slot[name=icon]::slotted(.mdc-card__action--icon){margin:-6px 0}/*# sourceMappingURL=shared.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$x = i$4 `:host{--_container-color: var(--md-card-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-card-container-elevation, 1);--_container-shadow-color: var(--md-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-card-container-shape, 12px);--_disabled-container-color: var(--md-card-disabled-container-color, var(--md-sys-color-surface, #fef7ff));--_disabled-container-elevation: var(--md-card-disabled-container-elevation, 1);--_disabled-container-opacity: var(--md-card-disabled-container-opacity, 0.38);--_dragged-container-elevation: var(--md-card-dragged-container-elevation, 4);--_dragged-state-layer-color: var(--md-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-card-focus-container-elevation, 1);--_focus-state-layer-color: var(--md-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-card-hover-container-elevation, 2);--_hover-state-layer-color: var(--md-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-card-icon-size, 24px);--_pressed-container-elevation: var(--md-card-pressed-container-elevation, 1);--_pressed-state-layer-color: var(--md-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-card-pressed-state-layer-opacity, 0.12)}.m3--elevated{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-card-container-color:var(--md-sys-color-surface-container-low, #f7f2fa);--md-card-container-elevation:1;--md-card-container-shadow-color:var(--md-sys-color-shadow, #000);--md-card-container-shape:12px;--md-card-disabled-container-color:var(--md-sys-color-surface, #fef7ff);--md-card-disabled-container-elevation:1;--md-card-disabled-container-opacity:0.38;--md-card-dragged-container-elevation:4;--md-card-dragged-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-dragged-state-layer-opacity:0.16;--md-card-focus-container-elevation:1;--md-card-focus-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-focus-state-layer-opacity:0.12;--md-card-hover-container-elevation:2;--md-card-hover-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-hover-state-layer-opacity:0.08;--md-card-icon-color:var(--md-sys-color-primary, #6750a4);--md-card-icon-size:24px;--md-card-pressed-container-elevation:1;--md-card-pressed-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-pressed-state-layer-opacity:0.12;border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}/*# sourceMappingURL=elevated-card.css.map */
`;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$1=e$2(class extends i$2{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

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
  class Ripple extends s$2 {
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
      n$7({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
      t$3()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
      i$5('.surface')
  ], Ripple.prototype, "mdRoot", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$w = i$4 `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
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
  MdRipple.styles = [styles$w];
  MdRipple = __decorate([
      e$9('md-ripple')
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
  class FocusRing extends s$2 {
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
      n$7({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$v = i$4 `:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
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
  MdFocusRing.styles = [styles$v];
  MdFocusRing = __decorate([
      e$9('md-focus-ring')
  ], MdFocusRing);

  class Card extends s$2 {
      constructor() {
          super(...arguments);
          /** Allows the card to be clickable with a ripple effect. */
          this.clickable = false;
      }
      render() {
          return x `
            <div class="${o$1(this.getRenderClasses())}">
                ${this.renderPrimaryAction()}
                ${this.renderActions()}
                <md-elevation shadow></md-elevation>
            </div>`;
      }
      getRenderClasses() {
          return {
              'mdc-card': true
          };
      }
      getPrimaryActionRenderClasses() {
          return {
              'mdc-card__primary-action': true,
              'mdc-card__primary-action--disabled': this.disabled
          };
      }
      stopActionPropagation(action) {
          const events = ['click', 'pointerdown', 'pointerup', 'pointercancel', 'pointerleave', 'pointerenter', 'contextmenu'];
          for (const event of events) {
              action.addEventListener(event, (e) => {
                  e.stopPropagation();
              });
          }
          action.addEventListener('focus', () => this.blur());
          action.addEventListener('blur', () => this.focus());
      }
      getRenderActionsClasses() {
          return {
              'mdc-card__actions': true,
          };
      }
      update(_changedProperties) {
          if (_changedProperties.has('clickable')) {
              this.disabled = !this.clickable;
          }
          super.update(_changedProperties);
      }
      renderPrimaryAction() {
          return x `
            <div id="primary-action"
                 class="${o$1(this.getPrimaryActionRenderClasses())}"
                 tabindex="0"
                 aria-label="${this.ariaLabel}">
                 ${this.renderRipple()}
                ${this.renderFocusRing()}
                <slot></slot>
            </div>`;
      }
      getRippleRenderClasses() {
          return {
              'mdc-card__ripple': true
          };
      }
      /** @soyTemplate */
      renderFocusRing() {
          return x `
            <md-focus-ring for="primary-action" inward></md-focus-ring>`;
      }
      onButtonSlotChanged() {
          for (const button of this.buttons) {
              button.classList.add('mdc-card__action');
              button.classList.add('mdc-card__action--button');
              this.stopActionPropagation(button);
          }
          this.requestUpdate();
      }
      onIconSlotChanged() {
          for (const icon of this.icons) {
              icon.classList.add('mdc-card__action');
              icon.classList.add('mdc-card__action--icon');
              this.stopActionPropagation(icon);
          }
          this.requestUpdate();
      }
      renderRipple() {
          return x `<md-ripple class="${o$1(this.getRippleRenderClasses())}" ?disabled=${this.disabled}></md-ripple>`;
      }
      wrapButtonSlot(buttonSlotTemplate) {
          if (this.buttons.length > 0) {
              return x `
                <div class="mdc-card__action-buttons">
                    ${buttonSlotTemplate}
                </div>`;
          }
          return buttonSlotTemplate;
      }
      wrapIconSlot(iconSlotTemplate) {
          if (this.icons.length > 0) {
              return x `
                <div class="mdc-card__action-icons">
                    ${iconSlotTemplate}
                </div>`;
          }
          return iconSlotTemplate;
      }
      renderActions() {
          const buttonSlotTemplate = x `<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
          const iconSlotTemplate = x `<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;
          if (this.icons.length > 0 || this.buttons.length > 0) {
              return x `
            <div class="${o$1(this.getRenderActionsClasses())}"
                ${this.renderRipple()}>
                ${this.wrapButtonSlot(buttonSlotTemplate)}
                ${this.wrapIconSlot(iconSlotTemplate)}
            </div>`;
          }
          return x `
          ${buttonSlotTemplate}
          ${iconSlotTemplate}
      `;
      }
  }
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], Card.prototype, "clickable", void 0);
  __decorate([
      l$5({ slot: 'button' })
  ], Card.prototype, "buttons", void 0);
  __decorate([
      l$5({ slot: 'icon' })
  ], Card.prototype, "icons", void 0);

  class ElevatedCard extends Card {
      getRenderClasses() {
          return {
              ...super.getRenderClasses(),
              'm3--elevated': true
          };
      }
  }

  let MdElevatedCard = class MdElevatedCard extends ElevatedCard {
  };
  MdElevatedCard.styles = [styles$y, styles$x];
  MdElevatedCard = __decorate([
      e$9('md-elevated-card')
  ], MdElevatedCard);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$u = i$4 `:host{--_container-color: var(--md-card-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-elevation: var(--md-card-container-elevation, 0);--_container-shadow-color: var(--md-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-card-container-shape, 12px);--_disabled-container-color: var(--md-card-disabled-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_disabled-container-elevation: var(--md-card-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-card-disabled-container-opacity, 0.38);--_dragged-container-elevation: var(--md-card-dragged-container-elevation, 3);--_dragged-state-layer-color: var(--md-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-card-focus-container-elevation, 0);--_focus-state-layer-color: var(--md-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-card-hover-container-elevation, 1);--_hover-state-layer-color: var(--md-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-card-icon-size, 24px);--_pressed-container-elevation: var(--md-card-pressed-container-elevation, 0);--_pressed-state-layer-color: var(--md-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-card-pressed-state-layer-opacity, 0.12)}.m3--filled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-card-container-color:var(--md-sys-color-surface-container-highest, #e6e0e9);--md-card-container-elevation:0;--md-card-container-shadow-color:var(--md-sys-color-shadow, #000);--md-card-container-shape:12px;--md-card-disabled-container-color:var(--md-sys-color-surface-variant, #e7e0ec);--md-card-disabled-container-elevation:0;--md-card-disabled-container-opacity:0.38;--md-card-dragged-container-elevation:3;--md-card-dragged-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-dragged-state-layer-opacity:0.16;--md-card-focus-container-elevation:0;--md-card-focus-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-focus-state-layer-opacity:0.12;--md-card-hover-container-elevation:1;--md-card-hover-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-hover-state-layer-opacity:0.08;--md-card-icon-color:var(--md-sys-color-primary, #6750a4);--md-card-icon-size:24px;--md-card-pressed-container-elevation:0;--md-card-pressed-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-pressed-state-layer-opacity:0.12;border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}/*# sourceMappingURL=filled-card.css.map */
`;

  class FilledCard extends Card {
      getRenderClasses() {
          return {
              ...super.getRenderClasses(),
              'm3--filled': true
          };
      }
  }

  let MdFilledCard = class MdFilledCard extends FilledCard {
  };
  MdFilledCard.styles = [styles$y, styles$u];
  MdFilledCard = __decorate([
      e$9('md-filled-card')
  ], MdFilledCard);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$t = i$4 `:host{--_container-color: var(--md-card-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-card-container-elevation, 0);--_container-shadow-color: var(--md-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-card-container-shape, 12px);--_disabled-container-elevation: var(--md-card-disabled-container-elevation, 0);--_disabled-outline-color: var(--md-card-disabled-outline-color, var(--md-sys-color-outline, #79747e));--_disabled-outline-opacity: var(--md-card-disabled-outline-opacity, 0.12);--_dragged-container-elevation: var(--md-card-dragged-container-elevation, 3);--_dragged-outline-color: var(--md-card-dragged-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_dragged-state-layer-color: var(--md-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-card-focus-container-elevation, 0);--_focus-outline-color: var(--md-card-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-color: var(--md-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-card-hover-container-elevation, 1);--_hover-outline-color: var(--md-card-hover-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_hover-state-layer-color: var(--md-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-card-icon-size, 24px);--_outline-color: var(--md-card-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_outline-width: var(--md-card-outline-width, 1px);--_pressed-container-elevation: var(--md-card-pressed-container-elevation, 0);--_pressed-outline-color: var(--md-card-pressed-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_pressed-state-layer-color: var(--md-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-card-pressed-state-layer-opacity, 0.12)}.m3--outlined{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-card-container-color:var(--md-sys-color-surface, #fef7ff);--md-card-container-elevation:0;--md-card-container-shadow-color:var(--md-sys-color-shadow, #000);--md-card-container-shape:12px;--md-card-disabled-container-elevation:0;--md-card-disabled-outline-color:var(--md-sys-color-outline, #79747e);--md-card-disabled-outline-opacity:0.12;--md-card-dragged-container-elevation:3;--md-card-dragged-outline-color:var(--md-sys-color-outline-variant, #cac4d0);--md-card-dragged-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-dragged-state-layer-opacity:0.16;--md-card-focus-container-elevation:0;--md-card-focus-outline-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-focus-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-focus-state-layer-opacity:0.12;--md-card-hover-container-elevation:1;--md-card-hover-outline-color:var(--md-sys-color-outline-variant, #cac4d0);--md-card-hover-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-hover-state-layer-opacity:0.08;--md-card-icon-color:var(--md-sys-color-primary, #6750a4);--md-card-icon-size:24px;--md-card-outline-color:var(--md-sys-color-outline-variant, #cac4d0);--md-card-outline-width:1px;--md-card-pressed-container-elevation:0;--md-card-pressed-outline-color:var(--md-sys-color-outline-variant, #cac4d0);--md-card-pressed-state-layer-color:var(--md-sys-color-on-surface, #1d1b20);--md-card-pressed-state-layer-opacity:0.12;border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}/*# sourceMappingURL=outlined-card.css.map */
`;

  class OutlinedCard extends Card {
      getRenderClasses() {
          return {
              ...super.getRenderClasses(),
              'm3--outlined': true
          };
      }
  }

  let MdOutlinedCard = class MdOutlinedCard extends OutlinedCard {
  };
  MdOutlinedCard.styles = [styles$y, styles$t];
  MdOutlinedCard = __decorate([
      e$9('md-outlined-card')
  ], MdOutlinedCard);

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
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Re-dispatches an event from the provided element.
   *
   * This function is useful for forwarding non-composed events, such as `change`
   * events.
   *
   * @example
   * class MyInput extends LitElement {
   *   render() {
   *     return html`<input @change=${this.redispatchEvent}>`;
   *   }
   *
   *   protected redispatchEvent(event: Event) {
   *     redispatchEvent(this, event);
   *   }
   * }
   *
   * @param element The element to dispatch the event from.
   * @param event The event to re-dispatch.
   * @return Whether or not the event was dispatched (if cancelable).
   */
  function redispatchEvent(element, event) {
      // For bubbling events in SSR light DOM (or composed), stop their propagation
      // and dispatch the copy.
      if (event.bubbles && (!element.shadowRoot || event.composed)) {
          event.stopPropagation();
      }
      const copy = Reflect.construct(event.constructor, [event.type, event]);
      const dispatched = element.dispatchEvent(copy);
      if (!dispatched) {
          event.preventDefault();
      }
      return dispatched;
  }
  /**
   * Dispatches a click event to the given element that triggers a native action,
   * but is not composed and therefore is not seen outside the element.
   *
   * This is useful for responding to an external click event on the host element
   * that should trigger an internal action like a button click.
   *
   * Note, a helper is provided because setting this up correctly is a bit tricky.
   * In particular, calling `click` on an element creates a composed event, which
   * is not desirable, and a manually dispatched event must specifically be a
   * `MouseEvent` to trigger a native action.
   *
   * @example
   * hostClickListener = (event: MouseEvent) {
   *   if (isActivationClick(event)) {
   *     this.dispatchActivationClick(this.buttonElement);
   *   }
   * }
   *
   */
  function dispatchActivationClick(element) {
      const event = new MouseEvent('click', { bubbles: true });
      element.dispatchEvent(event);
      return event;
  }
  /**
   * Returns true if the click event should trigger an activation behavior. The
   * behavior is defined by the element and is whatever it should do when
   * clicked.
   *
   * Typically when an element needs to handle a click, the click is generated
   * from within the element and an event listener within the element implements
   * the needed behavior; however, it's possible to fire a click directly
   * at the element that the element should handle. This method helps
   * distinguish these "external" clicks.
   *
   * An "external" click can be triggered in a number of ways: via a click
   * on an associated label for a form  associated element, calling
   * `element.click()`, or calling
   * `element.dispatchEvent(new MouseEvent('click', ...))`.
   *
   * Also works around Firefox issue
   * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
   * events for a microtask after called.
   *
   * @example
   * hostClickListener = (event: MouseEvent) {
   *   if (isActivationClick(event)) {
   *     this.dispatchActivationClick(this.buttonElement);
   *   }
   * }
   *
   */
  function isActivationClick(event) {
      // Event must start at the event target.
      if (event.currentTarget !== event.target) {
          return false;
      }
      // Event must not be retargeted from shadowRoot.
      if (event.composedPath()[0] !== event.target) {
          return false;
      }
      // Target must not be disabled; this should only occur for a synthetically
      // dispatched click.
      if (event.target.disabled) {
          return false;
      }
      // This is an activation if the event should not be squelched.
      return !squelchEvent(event);
  }
  // TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
  //  Remove when Firefox bug is addressed.
  function squelchEvent(event) {
      const squelched = isSquelchingEvents;
      if (squelched) {
          event.preventDefault();
          event.stopImmediatePropagation();
      }
      squelchEventsForMicrotask();
      return squelched;
  }
  // Ignore events for one microtask only.
  let isSquelchingEvents = false;
  async function squelchEventsForMicrotask() {
      isSquelchingEvents = true;
      // Need to pause for just one microtask.
      // tslint:disable-next-line
      await null;
      isSquelchingEvents = false;
  }

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$7;
  /**
   * A checkbox component.
   */
  class Checkbox extends s$2 {
      /**
       * The HTML name to use in form submission.
       */
      get name() {
          return this.getAttribute('name') ?? '';
      }
      set name(name) {
          this.setAttribute('name', name);
      }
      /**
       * The associated form element with which this element's value will submit.
       */
      get form() {
          return this.internals.form;
      }
      /**
       * The labels this element is associated with.
       */
      get labels() {
          return this.internals.labels;
      }
      constructor() {
          super();
          /**
           * Whether or not the checkbox is selected.
           */
          this.checked = false;
          /**
           * Whether or not the checkbox is disabled.
           */
          this.disabled = false;
          /**
           * Whether or not the checkbox is invalid.
           */
          this.error = false;
          /**
           * Whether or not the checkbox is indeterminate.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
           */
          this.indeterminate = false;
          /**
           * The value of the checkbox that is submitted with a form when selected.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
           */
          this.value = 'on';
          this.prevChecked = false;
          this.prevDisabled = false;
          this.prevIndeterminate = false;
          this.internals = this /* needed for closure */.attachInternals();
          {
              this.addEventListener('click', (event) => {
                  if (!isActivationClick(event)) {
                      return;
                  }
                  this.focus();
                  dispatchActivationClick(this.input);
              });
          }
      }
      focus() {
          this.input?.focus();
      }
      update(changed) {
          if (changed.has('checked') || changed.has('disabled') ||
              changed.has('indeterminate')) {
              this.prevChecked = changed.get('checked') ?? this.checked;
              this.prevDisabled = changed.get('disabled') ?? this.disabled;
              this.prevIndeterminate =
                  changed.get('indeterminate') ?? this.indeterminate;
          }
          const shouldAddFormValue = this.checked && !this.indeterminate;
          const state = String(this.checked);
          this.internals.setFormValue(shouldAddFormValue ? this.value : null, state);
          super.update(changed);
      }
      render() {
          const prevNone = !this.prevChecked && !this.prevIndeterminate;
          const prevChecked = this.prevChecked && !this.prevIndeterminate;
          const prevIndeterminate = this.prevIndeterminate;
          const isChecked = this.checked && !this.indeterminate;
          const isIndeterminate = this.indeterminate;
          const containerClasses = o$1({
              'selected': isChecked || isIndeterminate,
              'unselected': !isChecked && !isIndeterminate,
              'checked': isChecked,
              'indeterminate': isIndeterminate,
              'error': this.error && !this.disabled,
              'prev-unselected': prevNone,
              'prev-checked': prevChecked,
              'prev-indeterminate': prevIndeterminate,
              'prev-disabled': this.prevDisabled,
          });
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `
      <div class="container ${containerClasses}">
        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
      <input type="checkbox"
        id="input"
        aria-checked=${isIndeterminate ? 'mixed' : A}
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        .indeterminate=${this.indeterminate}
        .checked=${this.checked}
        @change=${this.handleChange}
      >
    `;
      }
      handleChange(event) {
          const target = event.target;
          this.checked = target.checked;
          this.indeterminate = target.indeterminate;
          redispatchEvent(this, event);
      }
      /** @private */
      formResetCallback() {
          // The checked property does not reflect, so the original attribute set by
          // the user is used to determine the default value.
          this.checked = this.hasAttribute('checked');
      }
      /** @private */
      formStateRestoreCallback(state) {
          this.checked = state === 'true';
      }
  }
  _a$7 = Checkbox;
  (() => {
      requestUpdateOnAriaChange(_a$7);
  })();
  /** @nocollapse */
  Checkbox.formAssociated = true;
  __decorate([
      n$7({ type: Boolean })
  ], Checkbox.prototype, "checked", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], Checkbox.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Checkbox.prototype, "error", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Checkbox.prototype, "indeterminate", void 0);
  __decorate([
      n$7()
  ], Checkbox.prototype, "value", void 0);
  __decorate([
      t$3()
  ], Checkbox.prototype, "prevChecked", void 0);
  __decorate([
      t$3()
  ], Checkbox.prototype, "prevDisabled", void 0);
  __decorate([
      t$3()
  ], Checkbox.prototype, "prevIndeterminate", void 0);
  __decorate([
      i$5('input')
  ], Checkbox.prototype, "input", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$s = i$4 `:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_error-hover-state-layer-color: var(--md-checkbox-error-hover-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-hover-state-layer-opacity: var(--md-checkbox-error-hover-state-layer-opacity, 0.08);--_error-pressed-state-layer-color: var(--md-checkbox-error-pressed-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-pressed-state-layer-opacity: var(--md-checkbox-error-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-error-container-color: var(--md-checkbox-selected-error-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-container-color: var(--md-checkbox-selected-error-focus-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-icon-color: var(--md-checkbox-selected-error-focus-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-hover-container-color: var(--md-checkbox-selected-error-hover-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-hover-icon-color: var(--md-checkbox-selected-error-hover-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-icon-color: var(--md-checkbox-selected-error-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-pressed-container-color: var(--md-checkbox-selected-error-pressed-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-pressed-icon-color: var(--md-checkbox-selected-error-pressed-icon-color, var(--md-sys-color-on-error, #fff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_unselected-disabled-container-opacity: var(--md-checkbox-unselected-disabled-container-opacity, 0.38);--_unselected-disabled-outline-color: var(--md-checkbox-unselected-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-disabled-outline-width: var(--md-checkbox-unselected-disabled-outline-width, 2px);--_unselected-error-focus-outline-color: var(--md-checkbox-unselected-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-hover-outline-color: var(--md-checkbox-unselected-error-hover-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-outline-color: var(--md-checkbox-unselected-error-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-pressed-outline-color: var(--md-checkbox-unselected-error-pressed-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-focus-outline-color: var(--md-checkbox-unselected-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-focus-outline-width: var(--md-checkbox-unselected-focus-outline-width, 2px);--_unselected-hover-outline-color: var(--md-checkbox-unselected-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-outline-width: var(--md-checkbox-unselected-hover-outline-width, 2px);--_unselected-hover-state-layer-color: var(--md-checkbox-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-opacity: var(--md-checkbox-unselected-hover-state-layer-opacity, 0.08);--_unselected-outline-color: var(--md-checkbox-unselected-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-width: var(--md-checkbox-unselected-outline-width, 2px);--_unselected-pressed-outline-color: var(--md-checkbox-unselected-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-outline-width: var(--md-checkbox-unselected-pressed-outline-width, 2px);--_unselected-pressed-state-layer-color: var(--md-checkbox-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-pressed-state-layer-opacity: var(--md-checkbox-unselected-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:48px;position:relative;vertical-align:top;width:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-focus-ring-outward-offset: -2px}input{appearance:none;inset:0;margin:0;outline:none;position:absolute;opacity:0;block-size:100%;inline-size:100%}.container{border-radius:inherit;height:100%;position:relative;width:100%}.outline,.background,md-ripple,.icon{inset:0;margin:auto;position:absolute}.outline,.background{border-radius:inherit;height:var(--_container-size);width:var(--_container-size)}.outline{border-color:var(--_unselected-outline-color);border-style:solid;border-width:var(--_unselected-outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}.selected .background,.selected .icon{opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.error md-ripple{--md-ripple-hover-color: var(--_error-hover-state-layer-color);--md-ripple-hover-opacity: var(--_error-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_error-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_error-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}.error .outline{border-color:var(--_unselected-error-outline-color)}.error .background{background:var(--_selected-error-container-color)}.error .icon{fill:var(--_selected-error-icon-color)}:host(:hover) .outline{border-color:var(--_unselected-hover-outline-color);border-width:var(--_unselected-hover-outline-width)}:host(:hover) .background{background:var(--_selected-hover-container-color)}:host(:hover) .icon{fill:var(--_selected-hover-icon-color)}:host(:hover) .error .outline{border-color:var(--_unselected-error-hover-outline-color)}:host(:hover) .error .background{background:var(--_selected-error-hover-container-color)}:host(:hover) .error .icon{fill:var(--_selected-error-hover-icon-color)}:host(:focus-within) .outline{border-color:var(--_unselected-focus-outline-color);border-width:var(--_unselected-focus-outline-width)}:host(:focus-within) .background{background:var(--_selected-focus-container-color)}:host(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:host(:focus-within) .error .outline{border-color:var(--_unselected-error-focus-outline-color)}:host(:focus-within) .error .background{background:var(--_selected-error-focus-container-color)}:host(:focus-within) .error .icon{fill:var(--_selected-error-focus-icon-color)}:host(:active) .outline{border-color:var(--_unselected-pressed-outline-color);border-width:var(--_unselected-pressed-outline-width)}:host(:active) .background{background:var(--_selected-pressed-container-color)}:host(:active) .icon{fill:var(--_selected-pressed-icon-color)}:host(:active) .error .outline{border-color:var(--_unselected-error-pressed-outline-color)}:host(:active) .error .background{background:var(--_selected-error-pressed-container-color)}:host(:active) .error .icon{fill:var(--_selected-error-pressed-icon-color)}:host([disabled]) .background,:host([disabled]) .icon,:host([disabled]) .mark,.prev-disabled .background,.prev-disabled .icon,.prev-disabled .mark{animation-duration:0s;transition-duration:0s}:host([disabled]) .outline{border-color:var(--_unselected-disabled-outline-color);border-width:var(--_unselected-disabled-outline-width);opacity:var(--_unselected-disabled-container-opacity)}:host([disabled]) .selected .outline{visibility:hidden}:host([disabled]) .selected .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:host([disabled]) .icon{fill:var(--_selected-disabled-icon-color)}/*# sourceMappingURL=checkbox-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$r = i$4 `@media(forced-colors: active){:host{--md-checkbox-selected-container-color: CanvasText;--md-checkbox-selected-disabled-container-color: GrayText;--md-checkbox-selected-disabled-container-opacity: 1;--md-checkbox-selected-disabled-icon-color: Canvas;--md-checkbox-selected-error-container-color: CanvasText;--md-checkbox-selected-error-focus-container-color: CanvasText;--md-checkbox-selected-error-focus-icon-color: Canvas;--md-checkbox-selected-error-hover-container-color: CanvasText;--md-checkbox-selected-error-hover-icon-color: Canvas;--md-checkbox-selected-error-icon-color: Canvas;--md-checkbox-selected-error-pressed-container-color: CanvasText;--md-checkbox-selected-error-pressed-icon-color: Canvas;--md-checkbox-selected-focus-container-color: CanvasText;--md-checkbox-selected-focus-icon-color: Canvas;--md-checkbox-selected-hover-container-color: CanvasText;--md-checkbox-selected-hover-icon-color: Canvas;--md-checkbox-selected-icon-color: Canvas;--md-checkbox-selected-pressed-container-color: CanvasText;--md-checkbox-selected-pressed-icon-color: Canvas;--md-checkbox-unselected-disabled-container-opacity: 1;--md-checkbox-unselected-disabled-outline-color: GrayText;--md-checkbox-unselected-error-focus-outline-color: CanvasText;--md-checkbox-unselected-error-hover-outline-color: CanvasText;--md-checkbox-unselected-error-outline-color: CanvasText;--md-checkbox-unselected-error-pressed-outline-color: CanvasText;--md-checkbox-unselected-focus-outline-color: CanvasText;--md-checkbox-unselected-hover-outline-color: CanvasText;--md-checkbox-unselected-outline-color: CanvasText;--md-checkbox-unselected-pressed-outline-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Checkboxes allow users to select one or more items from a set.
   * Checkboxes can turn an option on or off.
   *
   * @description
   * Use checkboxes to:
   * - Select one or more options from a list
   * - Present a list containing sub-selections
   * - Turn an item on or off in a desktop environment
   *
   * @final
   * @suppress {visibility}
   */
  let MdCheckbox = class MdCheckbox extends Checkbox {
  };
  MdCheckbox.styles = [styles$s, styles$r];
  MdCheckbox = __decorate([
      e$9('md-checkbox')
  ], MdCheckbox);

  class DataTableCell extends s$2 {
      constructor() {
          super(...arguments);
          this.onCheckboxClicked = (e) => {
              const checkbox = e.target;
              /**
               * Event emitted when the cell checkbox has been checked or unchecked.
               *
               * Event detail: `CellCheckedEventDetail`.
               */
              this.dispatchEvent(new CustomEvent('checked', {
                  detail: {
                      checked: checkbox.checked
                  }
              }));
          };
      }
      connectedCallback() {
          super.connectedCallback();
          this.role = 'cell';
      }
      /** @internal */
      get checkbox() {
          return this.checkboxSlotElements?.[0];
      }
      render() {
          return x `
      <slot @slotchange=${this.onSlotChanged}>${this.renderCheckbox()}</slot>
    `;
      }
      renderCheckbox() {
          if (this.type === 'checkbox') {
              return x `<md-checkbox class="mdc-data-table__row-checkbox" @change=${this.onCheckboxClicked}></md-checkbox>`;
          }
          return '';
      }
      onSlotChanged() {
          this.requestUpdate();
          this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
          this.checkbox?.addEventListener('change', this.onCheckboxClicked);
      }
  }
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTableCell.prototype, "type", void 0);
  __decorate([
      l$5({ selector: 'md-checkbox', flatten: true })
  ], DataTableCell.prototype, "checkboxSlotElements", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$q = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell,.mdc-data-table__row:last-child :host{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell,:host{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox,:host([type=checkbox]){padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,[dir=rtl] :host([type=checkbox]),.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,[dir=rtl] :host,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric,:host([type=numeric]){text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,[dir=rtl] :host([type=numeric]),.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox,:host([type=checkbox]){width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-cell;vertical-align:inherit;color:var(--_row-item-label-text-color);font-family:var(--_row-item-label-text-font);font-size:var(--_row-item-label-text-size);line-height:var(--_row-item-label-text-line-height);font-weight:var(--_row-item-label-text-weight);letter-spacing:var(--_row-item-label-text-tracking);border-bottom:var(--_row-item-outline-width) solid var(--_row-item-outline-color)}:host([type=checkbox]){padding:0 6px}/*# sourceMappingURL=data-table-cell.css.map */
`;

  let MdDataTableCell = class MdDataTableCell extends DataTableCell {
  };
  MdDataTableCell.styles = [styles$q];
  MdDataTableCell = __decorate([
      e$9('md-data-table-cell')
  ], MdDataTableCell);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A field component.
   */
  class Field extends s$2 {
      constructor() {
          super(...arguments);
          this.disabled = false;
          this.error = false;
          this.focused = false;
          this.populated = false;
          this.resizable = false;
          this.required = false;
          /**
           * Whether or not the field has leading content.
           */
          this.hasStart = false;
          /**
           * Whether or not the field has trailing content.
           */
          this.hasEnd = false;
          this.isAnimating = false;
      }
      update(props) {
          // Client-side property updates
          // When disabling, remove focus styles if focused.
          if (this.disabled && this.focused) {
              props.set('focused', true);
              this.focused = false;
          }
          // Animate if focused or populated change.
          this.animateLabelIfNeeded({
              wasFocused: props.get('focused'),
              wasPopulated: props.get('populated')
          });
          super.update(props);
      }
      render() {
          const floatingLabel = this.renderLabel(/*isFloating*/ true);
          const restingLabel = this.renderLabel(/*isFloating*/ false);
          const outline = this.renderOutline?.(floatingLabel);
          const classes = {
              'disabled': this.disabled,
              'error': this.error && !this.disabled,
              'focused': this.focused,
              'with-start': this.hasStart,
              'with-end': this.hasEnd,
              'populated': this.populated,
              'resizable': this.resizable,
              'required': this.required,
              'no-label': !this.label,
          };
          return x `
      <div class="field ${o$1(classes)}">
        <div class="container-overflow">
          ${outline}
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              ${restingLabel}
              ${outline ? A : floatingLabel}
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>

        <div class="supporting-text">
          <div class="supporting-text-start">
            <slot name="supporting-text"></slot>
          </div>
          <div class="supporting-text-end">
            <slot name="supporting-text-end"></slot>
          </div>
        </div>
      </div>
    `;
      }
      renderLabel(isFloating) {
          let visible;
          if (isFloating) {
              // Floating label is visible when focused/populated or when animating.
              visible = this.focused || this.populated || this.isAnimating;
          }
          else {
              // Resting label is visible when unfocused. It is never visible while
              // animating.
              visible = !this.focused && !this.populated && !this.isAnimating;
          }
          const classes = {
              'hidden': !visible,
              'floating': isFloating,
              'resting': !isFloating,
          };
          let labelText = this.label ?? '';
          // Add '*' if a label is present and the field is required
          labelText += this.required && labelText ? '*' : '';
          return x `
      <span class="label ${o$1(classes)}"
        aria-hidden=${!visible}
      >${labelText}</span>
    `;
      }
      animateLabelIfNeeded({ wasFocused, wasPopulated }) {
          if (!this.label) {
              return;
          }
          wasFocused ?? (wasFocused = this.focused);
          wasPopulated ?? (wasPopulated = this.populated);
          const wasFloating = wasFocused || wasPopulated;
          const shouldBeFloating = this.focused || this.populated;
          if (wasFloating === shouldBeFloating) {
              return;
          }
          this.isAnimating = true;
          this.labelAnimation?.cancel();
          // Only one label is visible at a time for clearer text rendering.
          // The floating label is visible and used during animation. At the end of
          // the animation, it will either remain visible (if floating) or hide and
          // the resting label will be shown.
          //
          // We don't use forward filling because if the dimensions of the text field
          // change (leading icon removed, density changes, etc), then the animation
          // will be inaccurate.
          //
          // Re-calculating the animation each time will prevent any visual glitches
          // from appearing.
          // TODO(b/241113345): use animation tokens
          this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
          this.labelAnimation?.addEventListener('finish', () => {
              // At the end of the animation, update the visible label.
              this.isAnimating = false;
          });
      }
      getLabelKeyframes() {
          const { floatingLabelEl, restingLabelEl } = this;
          if (!floatingLabelEl || !restingLabelEl) {
              return [];
          }
          const { x: floatingX, y: floatingY, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
          const { x: restingX, y: restingY, height: restingHeight } = restingLabelEl.getBoundingClientRect();
          const floatingScrollWidth = floatingLabelEl.scrollWidth;
          const restingScrollWidth = restingLabelEl.scrollWidth;
          // Scale by width ratio instead of font size since letter-spacing will scale
          // incorrectly. Using the width we can better approximate the adjusted
          // scale and compensate for tracking and overflow.
          // (use scrollWidth instead of width to account for clipped labels)
          const scale = restingScrollWidth / floatingScrollWidth;
          const xDelta = restingX - floatingX;
          // The line-height of the resting and floating label are different. When
          // we move the floating label down to the resting label's position, it won't
          // exactly match because of this. We need to adjust by half of what the
          // final scaled floating label's height will be.
          const yDelta = restingY - floatingY +
              Math.round((restingHeight - floatingHeight * scale) / 2);
          // Create the two transforms: floating to resting (using the calculations
          // above), and resting to floating (re-setting the transform to initial
          // values).
          const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
          const floatTransform = `translateX(0) translateY(0) scale(1)`;
          // Constrain the floating labels width to a scaled percentage of the
          // resting label's width. This will prevent long clipped labels from
          // overflowing the container.
          const restingClientWidth = restingLabelEl.clientWidth;
          const isRestingClipped = restingScrollWidth > restingClientWidth;
          const width = isRestingClipped ? `${restingClientWidth / scale}px` : '';
          if (this.focused || this.populated) {
              return [
                  { transform: restTransform, width }, { transform: floatTransform, width }
              ];
          }
          return [
              { transform: floatTransform, width }, { transform: restTransform, width }
          ];
      }
      getSurfacePositionClientRect() {
          return this.containerEl.getBoundingClientRect();
      }
  }
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "error", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "focused", void 0);
  __decorate([
      n$7()
  ], Field.prototype, "label", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "populated", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "resizable", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "required", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "hasStart", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Field.prototype, "hasEnd", void 0);
  __decorate([
      t$3()
  ], Field.prototype, "isAnimating", void 0);
  __decorate([
      i$5('.label.floating')
  ], Field.prototype, "floatingLabelEl", void 0);
  __decorate([
      i$5('.label.resting')
  ], Field.prototype, "restingLabelEl", void 0);
  __decorate([
      i$5('.container')
  ], Field.prototype, "containerEl", void 0);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * An outlined field component.
   */
  class OutlinedField extends Field {
      renderOutline(floatingLabel) {
          return x `
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$p = i$4 `:host{--_container-padding-horizontal: var(--md-outlined-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-field-container-padding-vertical, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-type: var(--md-outlined-field-content-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-outlined-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-padding: var(--md-outlined-field-supporting-text-padding, 16px);--_supporting-text-padding-top: var(--md-outlined-field-supporting-text-padding-top, 4px);--_supporting-text-type: var(--md-outlined-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - 2*var(--_container-padding-horizontal));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .start{padding-inline-start:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .end{padding-inline-end:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$o = i$4 `:host{display:inline-flex}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;min-width:min-content;overflow:hidden;padding-top:var(--_container-padding-vertical);padding-bottom:var(--_container-padding-vertical);position:relative}.resizable .container{resize:both}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;font:var(--_content-type);opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{color:var(--_label-text-color);overflow:hidden;max-width:100%;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;z-index:1;font:var(--_label-text-type)}.label.resting{position:absolute;top:50%;transform:translateY(-50%)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;justify-content:space-between;padding:0 var(--_supporting-text-padding);font:var(--_supporting-text-type)}.supporting-text-start,.supporting-text-end{display:flex}.supporting-text-start ::slotted(:not(:empty)),.supporting-text-end ::slotted(:not(:empty)){padding-top:var(--_supporting-text-padding-top)}.supporting-text-end ::slotted(:not(:empty)){padding-inline-start:var(--_supporting-text-padding)}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/228525797): add docs
   * @final
   * @suppress {visibility}
   */
  let MdOutlinedField = class MdOutlinedField extends OutlinedField {
  };
  MdOutlinedField.styles = [styles$o, styles$p];
  MdOutlinedField = __decorate([
      e$9('md-outlined-field')
  ], MdOutlinedField);

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$1=Symbol.for(""),l$1=t=>{if((null==t?void 0:t.r)===e$1)return null==t?void 0:t._$litStatic$},i$1=(t,...r)=>({_$litStatic$:r.reduce(((r,e,l)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[l+1]),t[0]),r:e$1}),s$1=new Map,a=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l$1(a));)c+=i+r[++$],f=!0;$!==o&&u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s$1.get(t))&&(n.raw=n,s$1.set(t,r=n)),e=u;}return t(r,...e)},n$1=a(x);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$n = i$4 `@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$m = i$4 `:host{--_container-padding-horizontal: var(--md-outlined-text-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-text-field-container-padding-vertical, 16px);--_input-text-prefix-padding: var(--md-outlined-text-field-input-text-prefix-padding, 2px);--_input-text-suffix-padding: var(--md-outlined-text-field-input-text-suffix-padding, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-type: var(--md-outlined-text-field-input-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-outlined-text-field-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-outlined-text-field-supporting-text-type, var(--md-sys-typescale-body-small, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-container-padding-horizontal: var(--_container-padding-horizontal);--md-outlined-field-container-padding-vertical: var(--_container-padding-vertical);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-type: var(--_input-text-type);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-type: var(--_label-text-type);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-type: var(--_supporting-text-type);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=o=>void 0===o.strings,f={},s=(o,l=f)=>o._$AH=l;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const l=e$2(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===A)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return s(i),t$1}});

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i="important",n=" !"+i,o=e$2(class extends i$2{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(n);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  const stringConverter = {
      fromAttribute(value) {
          return value ?? '';
      },
      toAttribute(value) {
          return value || null;
      }
  };

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$6;
  /**
   * A text field component.
   */
  class TextField extends s$2 {
      /**
       * The associated form element with which this element's value will submit.
       */
      get form() {
          return this.internals.form;
      }
      /**
       * The labels this element is associated with.
       */
      get labels() {
          return this.internals.labels;
      }
      /**
       * The HTML name to use in form submission.
       */
      get name() {
          return this.getAttribute('name') ?? '';
      }
      set name(name) {
          this.setAttribute('name', name);
      }
      /**
       * Gets or sets the direction in which selection occurred.
       */
      get selectionDirection() {
          return this.getInput().selectionDirection;
      }
      set selectionDirection(value) {
          this.getInput().selectionDirection = value;
      }
      /**
       * Gets or sets the end position or offset of a text selection.
       */
      get selectionEnd() {
          return this.getInput().selectionEnd;
      }
      set selectionEnd(value) {
          this.getInput().selectionEnd = value;
      }
      /**
       * Gets or sets the starting position or offset of a text selection.
       */
      get selectionStart() {
          return this.getInput().selectionStart;
      }
      set selectionStart(value) {
          this.getInput().selectionStart = value;
      }
      /**
       * Returns the native validation error message that would be displayed upon
       * calling `reportValidity()`.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
       */
      get validationMessage() {
          return this.getInput().validationMessage;
      }
      /**
       * Returns a ValidityState object that represents the validity states of the
       * text field.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
       */
      get validity() {
          return this.getInput().validity;
      }
      /**
       * The text field's value as a number.
       */
      get valueAsNumber() {
          return this.getInput().valueAsNumber;
      }
      set valueAsNumber(value) {
          this.getInput().valueAsNumber = value;
          this.value = this.getInput().value;
      }
      /**
       * The text field's value as a Date.
       */
      get valueAsDate() {
          return this.getInput().valueAsDate;
      }
      set valueAsDate(value) {
          this.getInput().valueAsDate = value;
          this.value = this.getInput().value;
      }
      /**
       * Returns whether an element will successfully validate based on forms
       * validation rules and constraints.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate
       */
      get willValidate() {
          return this.getInput().willValidate;
      }
      get hasError() {
          return this.error || this.nativeError;
      }
      constructor() {
          super();
          this.disabled = false;
          /**
           * Gets or sets whether or not the text field is in a visually invalid state.
           *
           * Calling `reportValidity()` will automatically update `error`.
           */
          this.error = false;
          /**
           * The error message that replaces supporting text when `error` is true. If
           * `errorText` is an empty string, then the supporting text will continue to
           * show.
           *
           * Calling `reportValidity()` will automatically update `errorText` to the
           * native `validationMessage`.
           */
          this.errorText = '';
          this.required = false;
          /**
           * The current value of the text field. It is always a string.
           */
          this.value = '';
          /**
           * An optional prefix to display before the input value.
           */
          this.prefixText = '';
          /**
           * An optional suffix to display after the input value.
           */
          this.suffixText = '';
          /**
           * Whether or not the text field has a leading icon. Used for SSR.
           */
          this.hasLeadingIcon = false;
          /**
           * Whether or not the text field has a trailing icon. Used for SSR.
           */
          this.hasTrailingIcon = false;
          /**
           * Conveys additional information below the text field, such as how it should
           * be used.
           */
          this.supportingText = '';
          /**
           * Override the input text CSS `direction`. Useful for RTL languages that use
           * LTR notation for fractions.
           */
          this.textDirection = '';
          // <input> properties
          /**
           * Defines the greatest value in the range of permitted values.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
           */
          this.max = '';
          /**
           * The maximum number of characters a user can enter into the text field. Set
           * to -1 for none.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
           */
          this.maxLength = -1;
          /**
           * Defines the most negative value in the range of permitted values.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
           */
          this.min = '';
          /**
           * The minimum number of characters a user can enter into the text field. Set
           * to -1 for none.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
           */
          this.minLength = -1;
          /**
           * A regular expression that the text field's value must match to pass
           * constraint validation.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
           */
          this.pattern = '';
          this.placeholder = '';
          /**
           * Indicates whether or not a user should be able to edit the text field's
           * value.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
           */
          this.readOnly = false;
          /**
           * Returns or sets the element's step attribute, which works with min and max
           * to limit the increments at which a numeric or date-time value can be set.
           *
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
           */
          this.step = '';
          this.type = 'text';
          /**
           * Returns true when the text field has been interacted with. Native
           * validation errors only display in response to user interactions.
           */
          this.dirty = false;
          this.focused = false;
          /**
           * When set to true, the error text's `role="alert"` will be removed, then
           * re-added after an animation frame. This will re-announce an error message
           * to screen readers.
           */
          this.refreshErrorAlert = false;
          /**
           * Whether or not a native error has been reported via `reportValidity()`.
           */
          this.nativeError = false;
          /**
           * The validation message displayed from a native error via
           * `reportValidity()`.
           */
          this.nativeErrorText = '';
          this.internals = this /* needed for closure */.attachInternals();
          {
              this.addEventListener('click', this.focus);
              this.addEventListener('focusin', this.handleFocusin);
              this.addEventListener('focusout', this.handleFocusout);
          }
      }
      /**
       * Checks the text field's native validation and returns whether or not the
       * element is valid.
       *
       * If invalid, this method will dispatch the `invalid` event.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
       *
       * @return true if the text field is valid, or false if not.
       */
      checkValidity() {
          const { valid } = this.checkValidityAndDispatch();
          return valid;
      }
      /**
       * Focuses the text field's input text.
       */
      focus() {
          if (this.disabled || this.matches(':focus-within')) {
              // Don't shift focus from an element within the text field, like an icon
              // button, to the input when focus is requested.
              return;
          }
          super.focus();
      }
      /**
       * Checks the text field's native validation and returns whether or not the
       * element is valid.
       *
       * If invalid, this method will dispatch the `invalid` event.
       *
       * This method will display or clear an error text message equal to the text
       * field's `validationMessage`, unless the invalid event is canceled.
       *
       * Use `setCustomValidity()` to customize the `validationMessage`.
       *
       * This method can also be used to re-announce error messages to screen
       * readers.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
       *
       * @return true if the text field is valid, or false if not.
       */
      reportValidity() {
          const { valid, canceled } = this.checkValidityAndDispatch();
          if (!canceled) {
              const prevMessage = this.getErrorText();
              this.nativeError = !valid;
              this.nativeErrorText = this.validationMessage;
              const needsRefresh = this.shouldErrorAnnounce() && prevMessage === this.getErrorText();
              if (needsRefresh) {
                  this.refreshErrorAlert = true;
              }
          }
          return valid;
      }
      /**
       * Selects all the text in the text field.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
       */
      select() {
          this.getInput().select();
      }
      /**
       * Sets the text field's native validation error message. This is used to
       * customize `validationMessage`.
       *
       * When the error is not an empty string, the text field is considered invalid
       * and `validity.customError` will be true.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
       *
       * @param error The error message to display.
       */
      setCustomValidity(error) {
          this.getInput().setCustomValidity(error);
      }
      setRangeText(...args) {
          // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
          // Use spread syntax and type casting to ensure correct usage.
          this.getInput().setRangeText(...args);
          this.value = this.getInput().value;
      }
      /**
       * Sets the start and end positions of a selection in the text field.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
       *
       * @param start The offset into the text field for the start of the selection.
       * @param end The offset into the text field for the end of the selection.
       * @param direction The direction in which the selection is performed.
       */
      setSelectionRange(start, end, direction) {
          this.getInput().setSelectionRange(start, end, direction);
      }
      /**
       * Decrements the value of a numeric type text field by `step` or `n` `step`
       * number of times.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
       *
       * @param stepDecrement The number of steps to decrement, defaults to 1.
       */
      stepDown(stepDecrement) {
          const input = this.getInput();
          input.stepDown(stepDecrement);
          this.value = input.value;
      }
      /**
       * Increments the value of a numeric type text field by `step` or `n` `step`
       * number of times.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
       *
       * @param stepIncrement The number of steps to increment, defaults to 1.
       */
      stepUp(stepIncrement) {
          const input = this.getInput();
          input.stepUp(stepIncrement);
          this.value = input.value;
      }
      /**
       * Reset the text field to its default value.
       */
      reset() {
          this.dirty = false;
          this.value = this.getAttribute('value') ?? '';
          this.nativeError = false;
          this.nativeErrorText = '';
      }
      attributeChangedCallback(attribute, newValue, oldValue) {
          if (attribute === 'value' && this.dirty) {
              // After user input, changing the value attribute no longer updates the
              // text field's value (until reset). This matches native <input> behavior.
              return;
          }
          super.attributeChangedCallback(attribute, newValue, oldValue);
      }
      render() {
          const classes = {
              'disabled': this.disabled,
              'error': !this.disabled && this.hasError,
          };
          return x `
       <span class="text-field ${o$1(classes)}">
         ${this.renderField()}
       </span>
     `;
      }
      updated(changedProperties) {
          // Keep changedProperties arg so that subclasses may call it
          // If a property such as `type` changes and causes the internal <input>
          // value to change without dispatching an event, re-sync it.
          const value = this.getInput().value;
          this.internals.setFormValue(value);
          if (this.value !== value) {
              // Note this is typically inefficient in updated() since it schedules
              // another update. However, it is needed for the <input> to fully render
              // before checking its value.
              this.value = value;
          }
          if (this.refreshErrorAlert) {
              // The past render cycle removed the role="alert" from the error message.
              // Re-add it after an animation frame to re-announce the error.
              requestAnimationFrame(() => {
                  this.refreshErrorAlert = false;
              });
          }
      }
      renderField() {
          const prefix = this.renderPrefix();
          const suffix = this.renderSuffix();
          const input = this.renderInput();
          return n$1 `<${this.fieldTag}
      class="field"
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      ?focused=${this.focused}
      ?hasEnd=${this.hasTrailingIcon}
      ?hasStart=${this.hasLeadingIcon}
      .label=${this.label}
      ?populated=${!!this.value}
      ?required=${this.required}
    >
      ${this.renderLeadingIcon()}
      ${prefix}${input}${suffix}
      ${this.renderTrailingIcon()}
      ${this.renderSupportingText()}
      ${this.renderCounter()}
    </${this.fieldTag}>`;
      }
      renderLeadingIcon() {
          return x `
       <span class="icon leading" slot="start">
         <slot name="leadingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
      }
      renderTrailingIcon() {
          return x `
       <span class="icon trailing" slot="end">
         <slot name="trailingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
      }
      renderInput() {
          const style = { direction: this.textDirection };
          // TODO(b/243805848): remove `as unknown as number` once lit analyzer is
          // fixed
          return x `<input
       style=${o(style)}
       aria-autocomplete=${this.ariaAutoComplete || A}
       aria-describedby=${this.getAriaDescribedBy() || A}
       aria-expanded=${this.ariaExpanded || A}
       aria-invalid=${this.hasError}
       aria-label=${this.ariaLabel || this.label || A}
       ?disabled=${this.disabled}
       max=${(this.max || A)}
       maxlength=${this.maxLength > -1 ? this.maxLength : A}
       min=${(this.min || A)}
       minlength=${this.minLength > -1 ? this.minLength : A}
       pattern=${this.pattern || A}
       placeholder=${this.placeholder || A}
       ?readonly=${this.readOnly}
       ?required=${this.required}
       step=${(this.step || A)}
       type=${this.type}
       .value=${l(this.value)}
       @change=${this.redispatchEvent}
       @input=${this.handleInput}
       @select=${this.redispatchEvent}
     >`;
      }
      getAriaDescribedBy() {
          const ids = [];
          if (this.getSupportingText()) {
              ids.push('support');
          }
          if (this.getCounterText()) {
              ids.push('counter');
          }
          return ids.join(' ');
      }
      renderPrefix() {
          return this.renderAffix(this.prefixText, /* isSuffix */ false);
      }
      renderSuffix() {
          return this.renderAffix(this.suffixText, /* isSuffix */ true);
      }
      renderAffix(text, isSuffix) {
          if (!text) {
              return A;
          }
          const classes = {
              'suffix': isSuffix,
              'prefix': !isSuffix,
          };
          return x `<span class="${o$1(classes)}">${text}</span>`;
      }
      renderSupportingText() {
          const text = this.getSupportingText();
          if (!text) {
              return A;
          }
          return x `<span id="support"
      slot="supporting-text"
      role=${this.shouldErrorAnnounce() ? 'alert' : A}>${text}</span>`;
      }
      getSupportingText() {
          const errorText = this.getErrorText();
          return this.hasError && errorText ? errorText : this.supportingText;
      }
      getErrorText() {
          return this.error ? this.errorText : this.nativeErrorText;
      }
      shouldErrorAnnounce() {
          // Announce if there is an error and error text visible.
          // If refreshErrorAlert is true, do not announce. This will remove the
          // role="alert" attribute. Another render cycle will happen after an
          // animation frame to re-add the role.
          return this.hasError && !!this.getErrorText() && !this.refreshErrorAlert;
      }
      renderCounter() {
          const text = this.getCounterText();
          if (!text) {
              return A;
          }
          // TODO(b/244473435): add aria-label and announcements
          return x `<span id="counter"
       class="counter"
       slot="supporting-text-end">${text}</span>`;
      }
      getCounterText() {
          return this.maxLength > -1 ? `${this.value.length} / ${this.maxLength}` :
              '';
      }
      handleFocusin() {
          this.focused = true;
      }
      handleFocusout() {
          if (this.matches(':focus-within')) {
              // Changing focus to another child within the text field, like a button
              return;
          }
          this.focused = false;
      }
      handleInput(event) {
          this.dirty = true;
          this.value = event.target.value;
          this.redispatchEvent(event);
      }
      redispatchEvent(event) {
          redispatchEvent(this, event);
      }
      getInput() {
          if (!this.input) {
              // If the input is not yet defined, synchronously render.
              // e.g.
              // const textField = document.createElement('md-outlined-text-field');
              // document.body.appendChild(textField);
              // textField.focus(); // synchronously render
              this.connectedCallback();
              this.scheduleUpdate();
          }
          if (this.isUpdatePending) {
              // If there are pending updates, synchronously perform them. This ensures
              // that constraint validation properties (like `required`) are synced
              // before interacting with input APIs that depend on them.
              this.scheduleUpdate();
          }
          return this.input;
      }
      checkValidityAndDispatch() {
          const valid = this.getInput().checkValidity();
          let canceled = false;
          if (!valid) {
              canceled = !this.dispatchEvent(new Event('invalid', { cancelable: true }));
          }
          return { valid, canceled };
      }
      handleIconChange() {
          this.hasLeadingIcon = this.leadingIcons.length > 0;
          this.hasTrailingIcon = this.trailingIcons.length > 0;
      }
      /** @private */
      formResetCallback() {
          this.reset();
      }
      /** @private */
      formStateRestoreCallback(state) {
          this.value = state;
      }
  }
  _a$6 = TextField;
  (() => {
      requestUpdateOnAriaChange(_a$6);
  })();
  /** @nocollapse */
  TextField.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
  /** @nocollapse  */
  TextField.formAssociated = true;
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], TextField.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], TextField.prototype, "error", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "errorText", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "label", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], TextField.prototype, "required", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "value", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "prefixText", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "suffixText", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], TextField.prototype, "hasLeadingIcon", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], TextField.prototype, "hasTrailingIcon", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "supportingText", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "textDirection", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "max", void 0);
  __decorate([
      n$7({ type: Number })
  ], TextField.prototype, "maxLength", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "min", void 0);
  __decorate([
      n$7({ type: Number })
  ], TextField.prototype, "minLength", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "pattern", void 0);
  __decorate([
      n$7({ reflect: true, converter: stringConverter })
  ], TextField.prototype, "placeholder", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], TextField.prototype, "readOnly", void 0);
  __decorate([
      n$7()
  ], TextField.prototype, "step", void 0);
  __decorate([
      n$7({ reflect: true })
  ], TextField.prototype, "type", void 0);
  __decorate([
      t$3()
  ], TextField.prototype, "dirty", void 0);
  __decorate([
      t$3()
  ], TextField.prototype, "focused", void 0);
  __decorate([
      t$3()
  ], TextField.prototype, "refreshErrorAlert", void 0);
  __decorate([
      t$3()
  ], TextField.prototype, "nativeError", void 0);
  __decorate([
      t$3()
  ], TextField.prototype, "nativeErrorText", void 0);
  __decorate([
      i$5('input')
  ], TextField.prototype, "input", void 0);
  __decorate([
      l$5({ slot: 'leadingicon' })
  ], TextField.prototype, "leadingIcons", void 0);
  __decorate([
      l$5({ slot: 'trailingicon' })
  ], TextField.prototype, "trailingIcons", void 0);

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * An outlined text field component
   */
  class OutlinedTextField extends TextField {
      constructor() {
          super(...arguments);
          this.fieldTag = i$1 `md-outlined-field`;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$l = i$4 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field{display:inline-flex;flex:1}.field{cursor:text;flex:1}.disabled .field{cursor:default}.counter{white-space:nowrap}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}input{appearance:none;background:none;border:none;caret-color:var(--_caret-color);color:currentColor;font:inherit;outline:none;padding:0;text-align:inherit;width:100%}input::placeholder{color:currentColor;opacity:1}input::-webkit-calendar-picker-indicator{display:none}@media(forced-colors: active){input{background-color:Field}}:focus-within input{caret-color:var(--_focus-caret-color)}.error:focus-within input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) input::placeholder{color:var(--_input-text-placeholder-color)}.prefix{padding-inline-end:var(--_input-text-prefix-padding)}.suffix{padding-inline-start:var(--_input-text-suffix-padding)}/*# sourceMappingURL=shared-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/228525797): Add docs
   * @final
   * @suppress {visibility}
   */
  let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
      constructor() {
          super(...arguments);
          this.fieldTag = i$1 `md-outlined-field`;
      }
  };
  MdOutlinedTextField.styles = [styles$l, styles$m, styles$n];
  MdOutlinedTextField = __decorate([
      e$9('md-outlined-text-field')
  ], MdOutlinedTextField);

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
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$5;
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class IconButton extends s$2 {
      constructor() {
          super(...arguments);
          /**
           * Disables the icon button and makes it non-interactive.
           */
          this.disabled = false;
          /**
           * Flips the icon if it is in an RTL context at startup.
           */
          this.flipIconInRtl = false;
          /**
           * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
           */
          this.href = '';
          /**
           * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
           */
          this.target = '';
          /**
           * When true, the button will toggle between selected and unselected
           * states
           */
          this.toggle = false;
          /**
           * Sets the selected state. When false, displays the default icon. When true,
           * displays the `selectedIcon`, or the default icon If no `selectedIcon` is
           * provided.
           */
          this.selected = false;
          this.flipIcon = isRtl(this, this.flipIconInRtl);
      }
      /**
       * Link buttons cannot be disabled.
       */
      willUpdate() {
          if (this.href) {
              this.disabled = false;
          }
      }
      render() {
          const tag = this.href ? i$1 `div` : i$1 `button`;
          // Needed for closure conformance
          const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
          const hasToggledAriaLabel = ariaLabel && this.selectedAriaLabel;
          const ariaPressedValue = hasToggledAriaLabel ? A : this.selected;
          let ariaLabelValue = A;
          if (!this.href) {
              ariaLabelValue = (hasToggledAriaLabel && this.selected) ?
                  this.selectedAriaLabel :
                  ariaLabel;
          }
          return n$1 `<${tag}
        class="icon-button ${o$1(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
      }
      renderLink() {
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
      ></a>
    `;
      }
      getRenderClasses() {
          return {
              'flip-icon': this.flipIcon,
              'selected': this.toggle && this.selected,
          };
      }
      renderIcon() {
          return x `<span class="icon"><slot></slot></span>`;
      }
      renderSelectedIcon() {
          // Use default slot as fallback to not require specifying multiple icons
          return x `<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`;
      }
      renderTouchTarget() {
          return x `<span class="touch"></span>`;
      }
      renderFocusRing() {
          return x `<md-focus-ring for=${this.href ? 'link' : 'button'}></md-focus-ring>`;
      }
      renderRipple() {
          return x `<md-ripple
      for=${this.href ? 'link' : A}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
      }
      connectedCallback() {
          this.flipIcon = isRtl(this, this.flipIconInRtl);
          super.connectedCallback();
      }
      handleClick() {
          if (!this.toggle || this.disabled) {
              return;
          }
          this.selected = !this.selected;
          this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
          // Bubbles but does not compose to mimic native browser <input> & <select>
          // Additionally, native change event is not an InputEvent.
          this.dispatchEvent(new Event('change', { bubbles: true }));
      }
  }
  _a$5 = IconButton;
  (() => {
      requestUpdateOnAriaChange(_a$5);
  })();
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], IconButton.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], IconButton.prototype, "flipIconInRtl", void 0);
  __decorate([
      n$7()
  ], IconButton.prototype, "href", void 0);
  __decorate([
      n$7()
  ], IconButton.prototype, "target", void 0);
  __decorate([
      n$7({ attribute: 'selected-aria-label', reflect: true })
  ], IconButton.prototype, "selectedAriaLabel", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], IconButton.prototype, "toggle", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], IconButton.prototype, "selected", void 0);
  __decorate([
      t$3()
  ], IconButton.prototype, "flipIcon", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$k = i$4 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$j = i$4 `:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Icon buttons help people take supplementary actions with a single
   * tap.
   *
   * @description
   * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
   * least amount of prominence.
   *
   * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
   * are used for optional supplementary actions such as "Bookmark" or "Star."
   *
   * __Example usages:__
   * - Add to Favorites
   * - Print
   */
  let MdStandardIconButton = class MdStandardIconButton extends IconButton {
      getRenderClasses() {
          return {
              ...super.getRenderClasses(),
              'standard': true,
          };
      }
  };
  MdStandardIconButton.styles = [styles$k, styles$j];
  MdStandardIconButton = __decorate([
      e$9('md-standard-icon-button')
  ], MdStandardIconButton);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * TODO(b/265336902): add docs
   */
  class Icon extends s$2 {
      render() {
          return x `<span><slot></slot></span>`;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$i = i$4 `:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @final
   * @suppress {visibility}
   */
  let MdIcon = class MdIcon extends Icon {
  };
  /** @nocollapse */
  MdIcon.styles = [styles$i];
  MdIcon = __decorate([
      e$9('md-icon')
  ], MdIcon);

  class DataTableColumn extends s$2 {
      connectedCallback() {
          super.connectedCallback();
          this.role = 'column-header';
          this.slot = 'header-cell';
      }
      /** @internal */
      get checkbox() {
          return this.checkboxSlotElements?.[0];
      }
      constructor() {
          super();
          /**
           * Column type. If `checkbox`, the checkbox inside the column will be also created if not supplied via the default slot.
           * If `numeric`, the column label will be aligned to the right.
           */
          this.type = '';
          /**
           * Whether the column can be sorted.
           */
          this.sortable = false;
          /**
           * Whether the column is sorted.
           */
          this.sorted = false;
          /**
           * Whether the column is sorted descending.
           */
          this.sortedDescending = false;
          /**
           * Whether the column is displaying a sort button.
           */
          this.withSortButton = false;
          /**
           * Whether the column is using a custom sorting function.
           */
          this.customSorting = false;
          /**
           * Whether the column can be filtered.
           */
          this.filterable = false;
          /**
           * Label to show on the filter textfield.
           */
          this.filterTextFieldLabel = 'Filter';
          /**
           * Sets the filtering to be case-sensitive.
           */
          this.filterCaseSensitive = false;
          /**
           * Whether the column is using a custom filtering function.
           */
          this.customFiltering = false;
          this.addEventListener('click', () => {
              this.withSortButton = !this.withSortButton;
          });
      }
      render() {
          return x `
        ${this.renderCheckbox()}
        ${this.renderSlot()}
    `;
      }
      renderCheckbox() {
          if (this.type === 'checkbox') {
              return x `
          <slot name="checkbox" @slotchange=${this.onCheckboxSlotChanged}>
              <md-checkbox
                      class="mdc-data-table__header-row-checkbox"
                      @change=${this.onCheckboxClicked}
                      aria-label="Toggle all rows"></md-checkbox>
          </slot>
      `;
          }
          return '';
      }
      renderFilterTextField() {
          if (this.filterable && this.type !== 'checkbox') {
              return x `
          <slot name="filter-textfield" class="mdc-data-table__filter-textfield">
              <md-outlined-text-field
                      label="${this.filterTextFieldLabel}"
                      style="--_container-padding-vertical: var(--_pagination-outlined-select-field-container-padding-vertical);"
                      @input=${this.onFilterTextFieldInput}
                      @keydown=${this.onFilterTextFieldKeyDown}
                      @click="${(e) => e.stopPropagation()}"
              />
          </slot>
      `;
          }
          return A;
      }
      renderSlot() {
          return x `
        <div class="mdc-data-table__header-cell-filter-wrapper">
            ${this.sortable ? this.renderSortButton() : x `
                <slot class="mdc-data-table__header-cell-label"></slot>`}
            ${this.renderFilterTextField()}
        </div>
    `;
      }
      renderSortButton() {
          return x `
        <div class="mdc-data-table__header-cell-wrapper">
            <md-standard-icon-button ?selected=${this.sortedDescending}
                                     toggle
                                     @change=${this.onSortButtonClicked}
                                     @click="${(e) => e.stopPropagation()}"
                                     aria-hidden="${this.withSortButton ? 'false' : 'true'}"
                                     ?hidden="${!this.withSortButton}">
                <slot name="sort-icon-on" slot="selectedIcon">
                    <md-icon>arrow_downward</md-icon>
                </slot>
                <slot name="sort-icon-off">
                    <md-icon>arrow_upward</md-icon>
                </slot>
            </md-standard-icon-button>
            &nbsp;
            <slot class="mdc-data-table__header-cell-label"></slot>
        </div>
    `;
      }
      /** @internal */
      onCheckboxClicked(e) {
          const checkbox = e.target;
          /**
           * Event emitted when the column checkbox has been checked or unchecked.
           *
           * Event detail: `CellCheckedEventDetail`;
           */
          this.dispatchEvent(new CustomEvent('checked', {
              detail: {
                  checked: checkbox.checked ?? false
              }
          }));
      }
      onCheckboxSlotChanged() {
          this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
          this.checkbox?.addEventListener('change', this.onCheckboxClicked);
      }
      /** @internal */
      onFilterTextFieldInput(e) {
          const textfield = e.target;
          /**
           * Event emitted when the user has typed in column filter textfield.
           *
           * Event detail: `FilterTextFieldInputEventDetail`;
           */
          this.dispatchEvent(new CustomEvent('filter', {
              detail: {
                  field: textfield,
                  text: textfield.value,
                  column: this,
                  caseSensitive: this.filterCaseSensitive,
                  customFiltering: this.customFiltering
              }
          }));
      }
      /** @internal */
      onFilterTextFieldKeyDown(e) {
          const textfield = e.target;
          /**
           * Event emitted when the user has typed in column filter textfield.
           *
           * Event detail: `FilterTextFieldKeyDownEventDetail`;
           */
          this.dispatchEvent(new CustomEvent('keydown', {
              detail: {
                  field: textfield,
                  key: e.key,
                  column: this,
              }
          }));
      }
      /** @internal */
      onSortButtonClicked(e) {
          this.sortedDescending = this.sortButton.selected;
          /**
           * Event emitted when the user has typed in column filter textfield.
           *
           * Event detail: `SortButtonClickedEventDetail`;
           */
          this.dispatchEvent(new CustomEvent('sort', {
              detail: {
                  column: this,
                  isDescending: this.sortedDescending,
                  customSorting: this.customSorting
              }
          }));
      }
      updated(_changedProperties) {
          if (_changedProperties.has('sorted')) {
              this.withSortButton = this.sortable && this.sorted;
          }
          super.updated(_changedProperties);
      }
  }
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTableColumn.prototype, "type", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTableColumn.prototype, "sortable", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTableColumn.prototype, "sorted", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true, attribute: 'sorted-descending' })
  ], DataTableColumn.prototype, "sortedDescending", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true, attribute: 'with-sort-button' })
  ], DataTableColumn.prototype, "withSortButton", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'custom-sorting' })
  ], DataTableColumn.prototype, "customSorting", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTableColumn.prototype, "filterable", void 0);
  __decorate([
      n$7({ type: String })
  ], DataTableColumn.prototype, "filterTextFieldLabel", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTableColumn.prototype, "filterCaseSensitive", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'custom-filtering' })
  ], DataTableColumn.prototype, "customFiltering", void 0);
  __decorate([
      i$5('md-standard-icon-button')
  ], DataTableColumn.prototype, "sortButton", void 0);
  __decorate([
      l$5({ slot: 'checkbox', flatten: true })
  ], DataTableColumn.prototype, "checkboxSlotElements", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$h = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell,:host{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell,:host{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,:host([type=checkbox]),.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] :host([type=checkbox]),[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,[dir=rtl] :host,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox,:host([type=checkbox]){width:1px}.mdc-data-table__header-cell--numeric,:host([type=numeric]){text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,[dir=rtl] :host([type=numeric]),.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,:host([type=numeric]) .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,[dir=rtl] :host([type=numeric]) .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl],:host([type=numeric]) .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button,:host([sortedDescending]) .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button,:host([sorted]) .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort,:host([sortable]){cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell,.mdc-data-table--sticky-header :host{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button,:host([sorted]) .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-cell;vertical-align:inherit;background-color:var(--_header-container-color);height:var(--_header-container-height);color:var(--_header-headline-color);font-family:var(--_header-headline-font);line-height:var(--_header-headline-line-height);font-size:var(--_header-headline-size);letter-spacing:var(--_header-headline-tracking);font-weight:var(--_header-headline-weight);border-bottom:var(--_row-item-outline-width) solid var(--_row-item-outline-color)}:host(:first-of-type){border-top-left-radius:var(--_container-shape)}:host(:last-of-type){border-top-right-radius:var(--_container-shape)}:host(:hover){color:var(--_header-headline-hover-color)}:host([type=checkbox]){padding:0 6px}:host([sortable]) md-standard-icon-button:hover{--md-icon-button-unselected-icon-color: var(--_header-hover-sorting-icon-button-color)}:host([sortable]) md-standard-icon-button[hidden]{display:none}:host([filterable]):not([type=checkbox]){padding:8px 16px}:host([filterable]) .mdc-data-table__header-cell-filter-wrapper{flex-direction:column;display:flex;align-items:center;padding:8px 0}:host([filterable]) .mdc-data-table__header-cell-label{white-space:nowrap}:host([filterable]) .mdc-data-table__header-cell-filter-textfield{width:fit-content}/*# sourceMappingURL=data-table-column.css.map */
`;

  let MdDataTableColumn = class MdDataTableColumn extends DataTableColumn {
  };
  MdDataTableColumn.styles = [styles$h];
  MdDataTableColumn = __decorate([
      e$9('md-data-table-column')
  ], MdDataTableColumn);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$g = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination,:host{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination,:host{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination,:host{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-footer-group;vertical-align:inherit;background-color:var(--_footer-container-color);height:var(--_footer-container-height);color:var(--_footer-supporting-text-color);font-family:var(--_footer-supporting-text-font);line-height:var(--_footer-supporting-text-line-height);font-size:var(--_footer-supporting-text-size);letter-spacing:var(--_footer-supporting-text-tracking);font-weight:var(--_footer-supporting-text-weight);--md-icon-color: var(--md-sys-color-on-surface-variant, inherit);padding:0 16px;border-top:var(--_row-item-outline-width) solid var(--_row-item-outline-color);border-bottom-left-radius:var(--_container-shape);border-bottom-right-radius:var(--_container-shape)}/*# sourceMappingURL=data-table-footer.css.map */
`;

  class DataTableFooter extends s$2 {
      connectedCallback() {
          super.connectedCallback();
          this.role = 'rowgroup';
          this.slot = 'footer';
      }
      render() {
          return x `
      <slot></slot>
    `;
      }
  }

  let MdDataTableFooter = class MdDataTableFooter extends DataTableFooter {
  };
  MdDataTableFooter.styles = [styles$g];
  MdDataTableFooter = __decorate([
      e$9('md-data-table-footer')
  ], MdDataTableFooter);

  class DataTableRow extends s$2 {
      constructor() {
          super(...arguments);
          /**
           * Whether the row is selected.
           */
          this.selected = false;
          /** @internal */
          this.onCheckboxClicked = (e) => {
              const event = e;
              this.selected = event.detail.checked;
              /**
               * Event emitted when a row has been selected or unselected.
               *
               * Event detail: `RowCheckedEventData`.
               */
              this.dispatchEvent(new CustomEvent('selected', {
                  detail: {
                      selected: event.detail.checked
                  }
              }));
          };
      }
      connectedCallback() {
          super.connectedCallback();
          this.role = 'row';
          this.slot = 'row';
      }
      /** @internal */
      get checkboxCell() {
          return this.checkboxCells?.[0];
      }
      render() {
          return x `
      <slot @slotchange="${this.requestUpdate}"></slot>`;
      }
      updated(_changedProperties) {
          super.updated(_changedProperties);
          const checkboxCell = this.checkboxCell;
          if (!checkboxCell && this.checkboxCells.length === 0) {
              // Wait for the checkbox cell to be created
              for (const cell of this.cells) {
                  cell.updateComplete.then(() => {
                      if (cell.type === 'checkbox' && !this.isUpdatePending) {
                          this.requestUpdate();
                      }
                  });
              }
          }
          if (checkboxCell) {
              checkboxCell.removeEventListener('checked', this.onCheckboxClicked);
              checkboxCell.addEventListener('checked', this.onCheckboxClicked);
              const checkbox = checkboxCell.checkbox;
              if (checkbox) {
                  checkbox.checked = this.selected;
              }
          }
      }
  }
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTableRow.prototype, "selected", void 0);
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTableRow.prototype, "density", void 0);
  __decorate([
      l$5({ selector: 'md-data-table-cell' })
  ], DataTableRow.prototype, "cells", void 0);
  __decorate([
      l$5({ selector: 'md-data-table-cell[type="checkbox"]' })
  ], DataTableRow.prototype, "checkboxCells", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$f = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row,:host{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected,:host([selected]){background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row,:host{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host([density=tight]){height:48px}:host([density=comfortable]){height:44px}:host([density=dense]){height:40px}:host([density=compact]){height:36px}:host{display:table-row;vertical-align:inherit;border-radius:var(--_container-shape);background-color:var(--_row-item-unselected-container-color);height:var(--_row-item-container-height)}:host:has(::slotted(md-data-table-cell[type=checkbox])){background-color:var(--_row-item-unselected-container-color)}:host(.without-bottom-border) ::slotted(md-data-table-cell),:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell){border-bottom:none}:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell:first-of-type){border-bottom-left-radius:var(--_container-shape)}:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell:last-of-type){border-bottom-right-radius:var(--_container-shape)}:host([selected]){background-color:var(--_row-item-selected-container-color)}:host([selected]:hover) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-selected-hover-state-layer-color), var(--_row-item-selected-hover-state-layer-opacity))}:host(:not([selected]):hover) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-unselected-hover-state-layer-color), var(--_row-item-unselected-hover-state-layer-opacity))}:host(:disabled) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-disabled-label-text-color), var(row-item-disabled-label-text-opacity))}:host([hidden]){display:none}slot{vertical-align:inherit}/*# sourceMappingURL=data-table-row.css.map */
`;

  let MdDataTableRow = class MdDataTableRow extends DataTableRow {
  };
  MdDataTableRow.styles = [styles$f];
  MdDataTableRow = __decorate([
      e$9('md-data-table-row')
  ], MdDataTableRow);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$e = i$4 `:host{--_container-shape: var(--md-data-table-container-shape, 4px);--_footer-container-color: var(--md-data-table-footer-container-color, var(--md-sys-color-surface, #fef7ff));--_footer-container-height: var(--md-data-table-footer-container-height, 52px);--_footer-supporting-text-color: var(--md-data-table-footer-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_footer-supporting-text-font: var(--md-data-table-footer-supporting-text-font, var(--md-ref-typeface-plain, Roboto));--_footer-supporting-text-line-height: var(--md-data-table-footer-supporting-text-line-height, 1.25rem);--_footer-supporting-text-size: var(--md-data-table-footer-supporting-text-size, 0.875rem);--_footer-supporting-text-tracking: var(--md-data-table-footer-supporting-text-tracking, 0.016rem);--_footer-supporting-text-weight: var(--md-data-table-footer-supporting-text-weight, 400);--_header-container-color: var(--md-data-table-header-container-color, var(--md-sys-color-surface, #fef7ff));--_header-container-height: var(--md-data-table-header-container-height, 56px);--_header-headline-color: var(--md-data-table-header-headline-color, var(--md-sys-color-on-surface-variant, #49454f));--_header-headline-font: var(--md-data-table-header-headline-font, var(--md-ref-typeface-plain, Roboto));--_header-headline-line-height: var(--md-data-table-header-headline-line-height, 1.25rem);--_header-headline-size: var(--md-data-table-header-headline-size, 0.875rem);--_header-headline-tracking: var(--md-data-table-header-headline-tracking, 0.006rem);--_header-headline-weight: var(--md-data-table-header-headline-weight, 500);--_header-hover-headline-color: var(--md-data-table-header-hover-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_header-hover-sorting-icon-button-color: var(--md-data-table-header-hover-sorting-icon-button-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-data-table-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_outline-width: var(--md-data-table-outline-width, 1px);--_row-item-container-height: var(--md-data-table-row-item-container-height, 52px);--_row-item-disabled-label-text-color: var(--md-data-table-row-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-disabled-label-text-opacity: var(--md-data-table-row-item-disabled-label-text-opacity, 0.38);--_row-item-label-text-color: var(--md-data-table-row-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-label-text-font: var(--md-data-table-row-item-label-text-font, var(--md-ref-typeface-plain, Roboto));--_row-item-label-text-line-height: var(--md-data-table-row-item-label-text-line-height, 1.25rem);--_row-item-label-text-size: var(--md-data-table-row-item-label-text-size, 0.875rem);--_row-item-label-text-tracking: var(--md-data-table-row-item-label-text-tracking, 0.016rem);--_row-item-label-text-weight: var(--md-data-table-row-item-label-text-weight, 400);--_row-item-outline-color: var(--md-data-table-row-item-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_row-item-outline-width: var(--md-data-table-row-item-outline-width, 1px);--_row-item-selected-container-color: var(--md-data-table-row-item-selected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_row-item-selected-hover-state-layer-color: var(--md-data-table-row-item-selected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-selected-hover-state-layer-opacity: var(--md-data-table-row-item-selected-hover-state-layer-opacity, 0.08);--_row-item-unselected-container-color: var(--md-data-table-row-item-unselected-container-color, var(--md-sys-color-surface, #fef7ff));--_row-item-unselected-hover-state-layer-color: var(--md-data-table-row-item-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-unselected-hover-state-layer-opacity: var(--md-data-table-row-item-unselected-hover-state-layer-opacity, 0.08);--_pagination-outlined-select-field-container-padding-vertical: var(--md-data-table-pagination-outlined-select-field-container-padding-vertical, 6px)}.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);border-radius:var(--_container-shape);border:var(--_outline-width) solid var(--_outline-color)}.mdc-data-table .mdc-data-table__table{display:table;width:var(--mdc-data-table-width);height:var(--mdc-data-table-height)}.mdc-data-table .mdc-data-table__head{display:table-header-group;vertical-align:middle;border-color:inherit}.mdc-data-table .mdc-data-table__header-row{display:table-row;vertical-align:inherit;border-color:inherit}.mdc-data-table .mdc-data-table__content{display:table-row-group;vertical-align:middle;border-color:inherit}.mdc-data-table slot{vertical-align:inherit}.mdc-data-table .mdc-data-table__pagination-trailing{margin:0}.mdc-data-table .mdc-data-table__pagination-rows-per-page-select{--md-outlined-field-container-padding-vertical: var(--_pagination-outlined-select-field-container-padding-vertical)}.mdc-data-table .mdc-data-table__pagination-total,.mdc-data-table .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table .mdc-data-table__cell{font:var(--_footer-supporting-text-font);line-height:var(--_footer-supporting-text-line-height);font-size:var(--_footer-supporting-text-size);font-weight:var(--_footer-supporting-text-weight);color:var(--_footer-supporting-text-color)}.mdc-data-table__pagination{min-height:48px}.mdc-data-table__pagination{min-height:44px}.mdc-data-table__pagination{min-height:40px}.mdc-data-table__pagination{min-height:36px}:host([density=tight]) .mdc-data-table__header-row{height:52px}:host([density=comfortable]) .mdc-data-table__header-row{height:48px}:host([density=dense]) .mdc-data-table__header-row{height:44px}:host([density=compact]) .mdc-data-table__header-row{height:40px}/*# sourceMappingURL=data-table.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$4;
  /**
   * A linear progress component.
   */
  class LinearProgress extends s$2 {
      constructor() {
          super(...arguments);
          /**
           * Whether or not to render indeterminate progress in an animated state.
           */
          this.indeterminate = false;
          /**
           * Progress to display, a fraction between 0 and 1.
           */
          this.progress = 0;
          /**
           * Buffer amount to display, a fraction between 0 and 1.
           */
          this.buffer = 1;
          /**
           * Whether or not to render indeterminate mode using 4 colors instead of one.
           *
           */
          this.fourColor = false;
          this.animationReady = true;
          this.resizeObserver = null;
      }
      // Note, the indeterminate animation is rendered with transform %'s
      // Previously, this was optimized to use px calculated with the resizeObserver
      // due to a now fixed Chrome bug: crbug.com/389359.
      render() {
          const rootClasses = {
              'indeterminate': this.indeterminate,
              'animation-ready': this.animationReady,
              'four-color': this.fourColor
          };
          const progressStyles = {
              transform: `scaleX(${(this.indeterminate ? 1 : this.progress) * 100}%)`
          };
          const bufferStyles = {
              transform: `scaleX(${(this.indeterminate ? 1 : this.buffer) * 100}%)`
          };
          // Needed for closure conformance
          const { ariaLabel } = this;
          return x `
      <div
          role="progressbar"
          class="linear-progress ${o$1(rootClasses)}"
          aria-label="${ariaLabel || A}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${this.indeterminate ? A : this.progress}">
        <div class="track"></div>
        <div class="buffer-bar" style=${o(bufferStyles)}></div>
        <div class="bar primary-bar" style=${o(progressStyles)}>
          <div class="bar-inner"></div>
        </div>
        <div class="bar secondary-bar">
          <div class="bar-inner"></div>
        </div>
      </div>`;
      }
      async connectedCallback() {
          super.connectedCallback();
          // wait for rendering.
          await this.updateComplete;
          if (this.resizeObserver) {
              return;
          }
          this.resizeObserver = new ResizeObserver(() => {
              if (this.indeterminate) {
                  this.restartAnimation();
              }
          });
          this.resizeObserver.observe(this.rootEl);
      }
      disconnectedCallback() {
          if (this.resizeObserver) {
              this.resizeObserver.disconnect();
              this.resizeObserver = null;
          }
          super.disconnectedCallback();
      }
      // When size changes, restart the animation
      // to avoid jank.
      async restartAnimation() {
          await this.updateComplete;
          this.animationReady = false;
          await new Promise(requestAnimationFrame);
          this.animationReady = true;
          await this.updateComplete;
      }
  }
  _a$4 = LinearProgress;
  (() => {
      requestUpdateOnAriaChange(_a$4);
  })();
  __decorate([
      n$7({ type: Boolean })
  ], LinearProgress.prototype, "indeterminate", void 0);
  __decorate([
      n$7({ type: Number })
  ], LinearProgress.prototype, "progress", void 0);
  __decorate([
      n$7({ type: Number })
  ], LinearProgress.prototype, "buffer", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'four-color' })
  ], LinearProgress.prototype, "fourColor", void 0);
  __decorate([
      i$5('.linear-progress')
  ], LinearProgress.prototype, "rootEl", void 0);
  __decorate([
      t$3()
  ], LinearProgress.prototype, "animationReady", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$d = i$4 `:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, 0px);display:block;position:relative;min-inline-size:80px;block-size:var(--_track-height);content-visibility:auto;contain:strict}.linear-progress,.track,.buffer-bar,.bar,.bar-inner{position:absolute}.linear-progress{inset:0;outline:rgba(0,0,0,0) solid 1px;border-radius:var(--_track-shape);overflow:hidden;display:flex;align-items:center}.bar{animation:none;inline-size:100%;block-size:var(--_active-indicator-height);transform-origin:left center;will-change:transform;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.buffer-bar{background:var(--_track-color);inset:0;will-change:transform;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.track{inset:0;will-change:transform;animation:linear infinite 250ms;animation-name:buffering;background:0/calc(var(--_track-height) / 2 * 5) 100% radial-gradient(circle at calc(var(--_track-height) / 2 * 2), var(--_track-color) 0, var(--_track-color) calc(var(--_track-height) / 2), transparent calc(var(--_track-height) / 2))}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .track{display:none}.indeterminate.animation-ready .primary-bar{will-change:transform;animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate.animation-ready .primary-bar>.bar-inner{will-change:transform;animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.animation-ready.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate.animation-ready .secondary-bar{will-change:transform;animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate.animation-ready .secondary-bar>.bar-inner{will-change:transform;animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.animation-ready.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host-context([dir=rtl]) .linear-progress .bar{transform-origin:right center}:host-context([dir=rtl]) .linear-progress .buffer-bar{transform-origin:right center}:host-context([dir=rtl]) .linear-progress .track{animation-name:buffering-rtl}:host-context([dir=rtl]) .linear-progress.indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host-context([dir=rtl]) .linear-progress.indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}:host([dir=rtl]) .linear-progress .bar{transform-origin:right center}:host([dir=rtl]) .linear-progress .buffer-bar{transform-origin:right center}:host([dir=rtl]) .linear-progress .track{animation-name:buffering-rtl}:host([dir=rtl]) .linear-progress.indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host([dir=rtl]) .linear-progress.indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}.linear-progress:dir(rtl) .bar{transform-origin:right center}.linear-progress:dir(rtl) .buffer-bar{transform-origin:right center}.linear-progress:dir(rtl) .track{animation-name:buffering-rtl}.linear-progress:dir(rtl).indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}.linear-progress:dir(rtl).indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(1 * calc(var(--_track-height) / 2 * 5)))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(1 * 83.6714%))}100%{transform:translateX(calc(1 * 200.611%))}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(calc(1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(calc(1 * 84.3862%))}100%{transform:translateX(calc(1 * 160.278%))}}@keyframes buffering-rtl{0%{transform:translateX(calc(-1 * calc(var(--_track-height) / 2 * 5)))}}@keyframes primary-indeterminate-translate-rtl{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-1 * 83.6714%))}100%{transform:translateX(calc(-1 * 200.611%))}}@keyframes secondary-indeterminate-translate-rtl{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(calc(-1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(calc(-1 * 84.3862%))}100%{transform:translateX(calc(-1 * 160.278%))}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media screen and (forced-colors: active){.linear-progress{--_active-indicator-color: canvastext;--_track-color: graytext;border:1px solid canvastext}.indeterminate.linear-progress{--_track-color: canvas}}/*# sourceMappingURL=linear-progress-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Linear progress indicators display progress by animating along the
   * length of a fixed, visible track.
   *
   * @description
   * Progress indicators inform users about the status of ongoing processes.
   * - Determinate indicators display how long a process will take.
   * - Indeterminate indicators express an unspecified amount of wait time.
   */
  let MdLinearProgress = class MdLinearProgress extends LinearProgress {
  };
  MdLinearProgress.styles = [styles$d];
  MdLinearProgress = __decorate([
      e$9('md-linear-progress')
  ], MdLinearProgress);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$c = i$4 `:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-unselected-focus-icon-color: var(--md-filled-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-icon-color: var(--md-filled-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-state-layer-color: var(--md-filled-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-icon-color: var(--md-filled-icon-button-toggle-unselected-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-icon-color: var(--md-filled-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary Icon buttons help people take supplementary actions with a single
   * tap.
   *
   * @description
   * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
   * least amount of prominence.
   *
   * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
   * are used for optional supplementary actions such as "Bookmark" or "Star."
   *
   * __Example usages:__
   * - Add to Favorites
   * - Print
   */
  let MdFilledIconButton = class MdFilledIconButton extends IconButton {
      getRenderClasses() {
          return {
              ...super.getRenderClasses(),
              'filled': true,
              'toggle-filled': this.toggle,
          };
      }
  };
  MdFilledIconButton.styles = [styles$k, styles$c];
  MdFilledIconButton = __decorate([
      e$9('md-filled-icon-button')
  ], MdFilledIconButton);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$b = i$4 `@media(forced-colors: active){:host{--md-outlined-select-text-field-disabled-input-text-color: GrayText;--md-outlined-select-text-field-disabled-input-text-opacity: 1;--md-outlined-select-text-field-disabled-label-text-color: GrayText;--md-outlined-select-text-field-disabled-label-text-opacity: 1;--md-outlined-select-text-field-disabled-leading-icon-color: GrayText;--md-outlined-select-text-field-disabled-leading-icon-opacity: 1;--md-outlined-select-text-field-disabled-outline-color: GrayText;--md-outlined-select-text-field-disabled-outline-opacity: 1;--md-outlined-select-text-field-disabled-supporting-text-color: GrayText;--md-outlined-select-text-field-disabled-supporting-text-opacity: 1;--md-outlined-select-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$a = i$4 `@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$3;
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
  class List extends s$2 {
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
                  if (activeItemRecord) {
                      const next = List.getNextItem(items, activeItemRecord.index);
                      if (next)
                          next.active = true;
                  }
                  else {
                      List.activateFirstItem(items);
                  }
                  break;
              // Activate the previous item
              case NAVIGABLE_KEYS.ArrowUp:
                  if (activeItemRecord) {
                      const prev = List.getPrevItem(items, activeItemRecord.index);
                      if (prev)
                          prev.active = true;
                  }
                  else {
                      items[items.length - 1].active = true;
                  }
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
          return null;
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
          return null;
      }
  }
  _a$3 = List;
  (() => {
      requestUpdateOnAriaChange(_a$3);
  })();
  /** @nocollapse */
  List.shadowRootOptions = { mode: 'open', delegatesFocus: true };
  __decorate([
      n$7()
  ], List.prototype, "type", void 0);
  __decorate([
      n$7({ type: Number })
  ], List.prototype, "listTabIndex", void 0);
  __decorate([
      i$5('.md3-list')
  ], List.prototype, "listRoot", void 0);
  __decorate([
      l$5({ flatten: true, selector: '[md-list-item]' })
  ], List.prototype, "items", void 0);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$9 = i$4 `:host{--_container-color: var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset}.md3-list{background-color:var(--_container-color);border-radius:inherit;display:block;list-style-type:none;margin:0;min-width:inherit;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
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
  MdList.styles = [styles$9];
  MdList = __decorate([
      e$9('md-list')
  ], MdList);

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A component for elevation.
   */
  class Elevation extends s$2 {
      render() {
          return x `<span class="shadow"></span>`;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$8 = i$4 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
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
  MdElevation.styles = [styles$8];
  MdElevation = __decorate([
      e$9('md-elevation')
  ], MdElevation);

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
   * The default close menu event used by md-menu. To create your own `close-menu`
   * event, you should subclass the `CloseMenuEvent` instead.
   */
  // tslint:disable-next-line
  const DefaultCloseMenuEvent = (CloseMenuEvent);
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
   * Determines whether the given key code is a key code that should select a menu
   * item.
   *
   * @param code They KeyboardEvent code to check.
   * @return Whether or not the key code is in the predetermined list to select a
   * menu item.
   */
  function isSelectableKey(code) {
      return Object.values(SELECTION_KEY).some(value => (value === code));
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
  var _a$2;
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
  class Menu extends s$2 {
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
          this.typeaheadBufferTime = DEFAULT_TYPEAHEAD_BUFFER_TIME;
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
                  typeaheadBufferTime: this.typeaheadBufferTime,
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
  }
  _a$2 = Menu;
  (() => {
      requestUpdateOnAriaChange(_a$2);
  })();
  __decorate([
      i$5('md-list')
  ], Menu.prototype, "listElement", void 0);
  __decorate([
      i$5('.menu')
  ], Menu.prototype, "surfaceEl", void 0);
  __decorate([
      i$5('slot')
  ], Menu.prototype, "slotEl", void 0);
  __decorate([
      n$7({ attribute: false })
  ], Menu.prototype, "anchor", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Menu.prototype, "fixed", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Menu.prototype, "quick", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'has-overflow' })
  ], Menu.prototype, "hasOverflow", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], Menu.prototype, "open", void 0);
  __decorate([
      n$7({ type: Number, attribute: 'x-offset' })
  ], Menu.prototype, "xOffset", void 0);
  __decorate([
      n$7({ type: Number, attribute: 'y-offset' })
  ], Menu.prototype, "yOffset", void 0);
  __decorate([
      n$7({ type: Number, attribute: 'list-tab-index' })
  ], Menu.prototype, "listTabIndex", void 0);
  __decorate([
      n$7()
  ], Menu.prototype, "type", void 0);
  __decorate([
      n$7({ type: Number, attribute: 'typeahead-delay' })
  ], Menu.prototype, "typeaheadBufferTime", void 0);
  __decorate([
      n$7({ attribute: 'anchor-corner' })
  ], Menu.prototype, "anchorCorner", void 0);
  __decorate([
      n$7({ attribute: 'menu-corner' })
  ], Menu.prototype, "menuCorner", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'stay-open-on-outside-click' })
  ], Menu.prototype, "stayOpenOnOutsideClick", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'stay-open-on-focusout' })
  ], Menu.prototype, "stayOpenOnFocusout", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'skip-restore-focus' })
  ], Menu.prototype, "skipRestoreFocus", void 0);
  __decorate([
      n$7({ attribute: 'default-focus' })
  ], Menu.prototype, "defaultFocus", void 0);
  __decorate([
      t$3()
  ], Menu.prototype, "typeaheadActive", void 0);
  __decorate([
      e$7({ capture: true })
  ], Menu.prototype, "handleListKeydown", null);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$7 = i$4 `:host{--_container-color: var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-menu-container-elevation, 2);--_container-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-menu-container-shape, 4px);--md-list-container-color: var(--_container-color);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-focus-ring-shape: var(--_container-shape);min-width:300px}.menu{border-radius:var(--_container-shape);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit}.menu.fixed{position:fixed}.menu md-list{height:inherit;max-height:inherit;display:block;overflow:auto;min-width:inherit;border-radius:inherit}.menu.has-overflow md-list{overflow:visible}.menu.animating md-list{pointer-events:none;overflow:hidden}.menu.animating ::slotted(.hidden){opacity:0}.menu slot{display:block;height:inherit;max-height:inherit}/*# sourceMappingURL=menu-styles.css.map */
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
  MdMenu.styles = [styles$7, styles$a];
  MdMenu = __decorate([
      e$9('md-menu')
  ], MdMenu);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Given a list of select options, this function will return an array of
   * SelectOptionRecords that are selected.
   *
   * @return An array of SelectOptionRecords describing the options that are
   * selected.
   */
  function getSelectedItems(items) {
      const selectedItemRecords = [];
      for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.selected) {
              selectedItemRecords.push([item, i]);
          }
      }
      return selectedItemRecords;
  }
  /**
   * An event fired by a SelectOption to request selection from md-select.
   * Typically fired after `selected` changes from `false` to `true`.
   */
  class RequestSelectionEvent extends Event {
      constructor() {
          super('request-selection', { bubbles: true, composed: true });
      }
  }
  /**
   * An event fired by a SelectOption to request deselection from md-select.
   * Typically fired after `selected` changes from `true` to `false`.
   */
  class RequestDeselectionEvent extends Event {
      constructor() {
          super('request-deselection', { bubbles: true, composed: true });
      }
  }

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a$1;
  const VALUE = Symbol('value');
  /**
   * @fires input Fired when a selection is made by the user via mouse or keyboard
   * interaction.
   * @fires change Fired when a selection is made by the user via mouse or
   * keyboard interaction.
   */
  class Select extends s$2 {
      constructor() {
          super(...arguments);
          /**
           * Opens the menu synchronously with no animation.
           */
          this.quick = false;
          /**
           * Whether or not the select is required.
           */
          this.required = false;
          /**
           * Disables the select.
           */
          this.disabled = false;
          /**
           * The error message that replaces supporting text when `error` is true. If
           * `errorText` is an empty string, then the supporting text will continue to
           * show.
           *
           * Calling `reportValidity()` will automatically update `errorText` to the
           * native `validationMessage`.
           */
          this.errorText = '';
          /**
           * The floating label for the field.
           */
          this.label = '';
          /**
           * Conveys additional information below the text field, such as how it should
           * be used.
           */
          this.supportingText = '';
          /**
           * Gets or sets whether or not the text field is in a visually invalid state.
           *
           * Calling `reportValidity()` will automatically update `error`.
           */
          this.error = false;
          /**
           * Whether or not the underlying md-menu should be position: fixed to display
           * in a top-level manner.
           */
          this.menuFixed = false;
          /**
           * The max time between the keystrokes of the typeahead select / menu behavior
           * before it clears the typeahead buffer.
           */
          this.typeaheadBufferTime = DEFAULT_TYPEAHEAD_BUFFER_TIME;
          /**
           * Whether or not the text field has a leading icon. Used for SSR.
           */
          this.hasLeadingIcon = false;
          /**
           * Whether or not the text field has a trailing icon. Used for SSR.
           */
          this.hasTrailingIcon = false;
          /**
           * Text to display in the field. Only set for SSR.
           */
          this.displayText = '';
          /**
           * When set to true, the error text's `role="alert"` will be removed, then
           * re-added after an animation frame. This will re-announce an error message
           * to screen readers.
           */
          this.refreshErrorAlert = false;
          this.focused = false;
          this.open = false;
          this[_a$1] = '';
          /**
           * Used for initializing select when the user sets the `value` directly.
           */
          this.lastUserSetValue = null;
          /**
           * Used for initializing select when the user sets the `selectedIndex`
           * directly.
           */
          this.lastUserSetSelectedIndex = null;
          /**
           * Used for `input` and `change` event change detection.
           */
          this.lastSelectedOption = null;
          // tslint:disable-next-line:enforce-name-casing
          this.lastSelectedOptionRecords = [];
      }
      /**
       * The value of the currently selected option.
       *
       * Note: For SSR, set `[selected]` on the requested option and `displayText`
       * rather than setting `value` setting `value` will incur a DOM query.
       */
      get value() {
          return this[VALUE];
      }
      set value(value) {
          this.lastUserSetValue = value;
          this.select(value);
      }
      get options() {
          // NOTE: this does a DOM query.
          return (this.menu?.items ?? []);
      }
      /**
       * The index of the currently selected option.
       *
       * Note: For SSR, set `[selected]` on the requested option and `displayText`
       * rather than setting `selectedIndex` setting `selectedIndex` will incur a
       * DOM query.
       */
      get selectedIndex() {
          // tslint:disable-next-line:enforce-name-casing
          const [_option, index] = (this.getSelectedOptions() ?? [])[0] ?? [];
          return index ?? -1;
      }
      set selectedIndex(index) {
          this.lastUserSetSelectedIndex = index;
          this.selectIndex(index);
      }
      /**
       * Returns an array of selected options.
       *
       * NOTE: md-select only suppoprts single selection.
       */
      get selectedOptions() {
          return (this.getSelectedOptions() ?? []).map(([option]) => option);
      }
      render() {
          return x `
      <span
          class="select ${o$1(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `;
      }
      getRenderClasses() {
          return {
              'disabled': this.disabled,
              'error': this.error,
          };
      }
      renderField() {
          return n$1 `
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-expanded=${this.open ? 'true' : 'false'}
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.error}
          .hasStart=${this.hasLeadingIcon}
          .hasEnd=${this.hasTrailingIcon}
          @keydown =${this.handleKeydown}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}>
        ${this.renderFieldContent()}
      </${this.fieldTag}>`;
      }
      renderFieldContent() {
          return [
              this.renderLeadingIcon(),
              this.renderLabel(),
              this.renderTrailingIcon(),
              this.renderSupportingText(),
          ];
      }
      renderLeadingIcon() {
          return x `
      <span class="icon leading" slot="start">
         <slot name="leadingicon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `;
      }
      renderTrailingIcon() {
          return x `
      <span class="icon trailing" slot="end">
         <slot name="trailingicon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `;
      }
      renderLabel() {
          // need to render &nbsp; so that line-height can apply and give it a
          // non-zero height
          return x `<div
        id="label"
        class="label">${this.displayText || x `&nbsp;`}</div>`;
      }
      renderSupportingText() {
          const text = this.getSupportingText();
          if (!text) {
              return A;
          }
          return x `<span id="support"
      slot="supporting-text"
      role=${this.shouldErrorAnnounce() ? 'alert' : A}>${text}</span>`;
      }
      getSupportingText() {
          return this.error && this.errorText ? this.errorText : this.supportingText;
      }
      shouldErrorAnnounce() {
          // Announce if there is an error and error text visible.
          // If refreshErrorAlert is true, do not announce. This will remove the
          // role="alert" attribute. Another render cycle will happen after an
          // animation frame to re-add the role.
          return this.error && !!this.errorText && !this.refreshErrorAlert;
      }
      renderMenu() {
          return x `
      <md-menu
          id="listbox"
          default-focus="NONE"
          listTabIndex="-1"
          type="listbox"
          stay-open-on-focusout
          .anchor=${this.field}
          .open=${this.open}
          .quick=${this.quick}
          .fixed=${this.menuFixed}
          .typeaheadBufferTime=${this.typeaheadBufferTime}
          @opening=${this.handleOpening}
          @closing=${this.handleClosing}
          @close-menu=${this.handleCloseMenu}
          @request-selection=${this.handleRequestSelection}
          @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>`;
      }
      renderMenuContent() {
          return x `<slot></slot>`;
      }
      /**
       * Handles opening the select on keydown and typahead selection when the menu
       * is closed.
       */
      handleKeydown(e) {
          if (this.open || this.disabled || !this.menu) {
              return;
          }
          const typeaheadController = this.menu.typeaheadController;
          const isOpenKey = e.code === 'Space' || e.code === 'ArrowDown' || e.code === 'Enter';
          // Do not open if currently typing ahead because the user may be typing the
          // spacebar to match a word with a space
          if (!typeaheadController.isTypingAhead && isOpenKey) {
              e.preventDefault();
              this.open = true;
              return;
          }
          const isPrintableKey = e.key.length === 1;
          // Handles typing ahead when the menu is closed by delegating the event to
          // the underlying menu's typeaheadController
          if (isPrintableKey) {
              typeaheadController.onKeydown(e);
              e.preventDefault();
              const { lastActiveRecord } = typeaheadController;
              if (!lastActiveRecord) {
                  return;
              }
              const hasChanged = this.selectItem(lastActiveRecord[TYPEAHEAD_RECORD.ITEM]);
              if (hasChanged) {
                  this.dispatchInteractionEvents();
              }
          }
      }
      handleClick() {
          this.open = true;
      }
      handleFocus() {
          this.focused = true;
      }
      handleBlur() {
          this.focused = false;
      }
      /**
       * Handles closing the menu when the focus leaves the select's subtree.
       */
      handleFocusout(e) {
          // Don't close the menu if we are switching focus between menu,
          // select-option, and field
          if (e.relatedTarget && isElementInSubtree(e.relatedTarget, this)) {
              return;
          }
          this.open = false;
      }
      /**
       * Gets a list of all selected select options as a list item record array.
       *
       * @return An array of selected list option records.
       */
      getSelectedOptions() {
          if (!this.menu) {
              this.lastSelectedOptionRecords = [];
              return null;
          }
          const items = this.menu.items;
          this.lastSelectedOptionRecords = getSelectedItems(items);
          return this.lastSelectedOptionRecords;
      }
      async getUpdateComplete() {
          await this.menu?.updateComplete;
          return super.getUpdateComplete();
      }
      /**
       * Gets the selected options from the DOM, and updates the value and display
       * text to the first selected option's value and headline respectively.
       *
       * @return Whether or not the selected option has changed since last update.
       */
      updateValueAndDisplayText() {
          const selectedOptions = this.getSelectedOptions() ?? [];
          // Used to determine whether or not we need to fire an input / change event
          // which fire whenever the option element changes (value or selectedIndex)
          // on user interaction.
          let hasSelectedOptionChanged = false;
          if (selectedOptions.length) {
              const [firstSelectedOption] = selectedOptions[0];
              hasSelectedOptionChanged =
                  this.lastSelectedOption !== firstSelectedOption;
              this.lastSelectedOption = firstSelectedOption;
              this[VALUE] = firstSelectedOption.value;
              this.displayText = firstSelectedOption.headline;
          }
          else {
              hasSelectedOptionChanged = this.lastSelectedOption !== null;
              this.lastSelectedOption = null;
              this[VALUE] = '';
              this.displayText = '';
          }
          return hasSelectedOptionChanged;
      }
      update(changed) {
          // In SSR the options will be ready to query, so try to figure out what
          // the value and display text should be.
          if (!this.hasUpdated) {
              this.initUserSelection();
          }
          super.update(changed);
      }
      async firstUpdated(changed) {
          await this.menu?.updateComplete;
          // If this has been handled on update already due to SSR, try again.
          if (!this.lastSelectedOptionRecords.length) {
              this.initUserSelection();
          }
          super.firstUpdated(changed);
      }
      updated(changedProperties) {
          // Keep changedProperties arg so that subclasses may call it
          if (this.refreshErrorAlert) {
              // The past render cycle removed the role="alert" from the error message.
              // Re-add it after an animation frame to re-announce the error.
              requestAnimationFrame(() => {
                  this.refreshErrorAlert = false;
              });
          }
      }
      /**
       * Focuses and activates the last selected item upon opening, and resets other
       * active items.
       */
      async handleOpening() {
          const items = this.menu.items;
          const activeItem = List.getActiveItem(items)?.item;
          const [selectedItem] = this.lastSelectedOptionRecords[0] ?? [null];
          // This is true if the user keys through the list but clicks out of the menu
          // thus no close-menu event is fired by an item and we can't clean up in
          // handleCloseMenu.
          if (activeItem && activeItem !== selectedItem) {
              activeItem.active = false;
          }
          if (selectedItem) {
              selectedItem.active = true;
              selectedItem.focus();
          }
      }
      handleClosing() {
          this.open = false;
      }
      /**
       * Determines the reason for closing, and updates the UI accordingly.
       */
      handleCloseMenu(e) {
          const reason = e.reason;
          const item = e.itemPath[0];
          this.open = false;
          let hasChanged = false;
          if (reason.kind === 'CLICK_SELECTION') {
              hasChanged = this.selectItem(item);
          }
          else if (reason.kind === 'KEYDOWN' && isSelectableKey(reason.key)) {
              hasChanged = this.selectItem(item);
          }
          else {
              // This can happen on ESC being pressed
              item.active = false;
              item.blur();
          }
          // Dispatch interaction events since selection has been made via keyboard
          // or mouse.
          if (hasChanged) {
              this.dispatchInteractionEvents();
          }
      }
      /**
       * Selects a given option, deselects other options, and updates the UI.
       *
       * @return Whether the last selected option has changed.
       */
      selectItem(item) {
          this.lastSelectedOptionRecords.forEach(([option]) => {
              if (item !== option) {
                  option.selected = false;
              }
          });
          item.selected = true;
          return this.updateValueAndDisplayText();
      }
      /**
       * Handles updating selection when an option element requests selection via
       * property / attribute change.
       */
      handleRequestSelection(e) {
          const requestingOptionEl = e.target;
          // No-op if this item is already selected.
          if (this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
              return;
          }
          this.selectItem(requestingOptionEl);
      }
      /**
       * Handles updating selection when an option element requests deselection via
       * property / attribute change.
       */
      handleRequestDeselection(e) {
          const requestingOptionEl = e.target;
          // No-op if this item is not even in the list of tracked selected items.
          if (!this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
              return;
          }
          this.updateValueAndDisplayText();
      }
      /**
       * Selects an option given the value of the option, and updates MdSelect's
       * value.
       */
      select(value) {
          const optionToSelect = this.options.find(option => option.value === value);
          if (optionToSelect) {
              this.selectItem(optionToSelect);
          }
      }
      /**
       * Selects an option given the index of the option, and updates MdSelect's
       * value.
       */
      selectIndex(index) {
          const optionToSelect = this.options[index];
          if (optionToSelect) {
              this.selectItem(optionToSelect);
          }
      }
      /**
       * Attempts to initialize the selected option from user-settable values like
       * SSR, setting `value`, or `selectedIndex` at startup.
       */
      initUserSelection() {
          // User has set `.value` directly, but internals have not yet booted up.
          if (this.lastUserSetValue && !this.lastSelectedOptionRecords.length) {
              this.select(this.lastUserSetValue);
              // User has set `.selectedIndex` directly, but internals have not yet
              // booted up.
          }
          else if (this.lastUserSetSelectedIndex !== null &&
              !this.lastSelectedOptionRecords.length) {
              this.selectIndex(this.lastUserSetSelectedIndex);
              // Regular boot up!
          }
          else {
              this.updateValueAndDisplayText();
          }
      }
      handleIconChange() {
          this.hasLeadingIcon = this.leadingIcons.length > 0;
          this.hasTrailingIcon = this.trailingIcons.length > 0;
      }
      /**
       * Dispatches the `input` and `change` events.
       */
      dispatchInteractionEvents() {
          this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
          this.dispatchEvent(new Event('change', { bubbles: true }));
      }
  }
  _a$1 = VALUE;
  __decorate([
      n$7({ type: Boolean })
  ], Select.prototype, "quick", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Select.prototype, "required", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], Select.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: String })
  ], Select.prototype, "errorText", void 0);
  __decorate([
      n$7()
  ], Select.prototype, "label", void 0);
  __decorate([
      n$7({ type: String })
  ], Select.prototype, "supportingText", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], Select.prototype, "error", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Select.prototype, "menuFixed", void 0);
  __decorate([
      n$7({ type: Number })
  ], Select.prototype, "typeaheadBufferTime", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Select.prototype, "hasLeadingIcon", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], Select.prototype, "hasTrailingIcon", void 0);
  __decorate([
      n$7()
  ], Select.prototype, "displayText", void 0);
  __decorate([
      t$3()
  ], Select.prototype, "refreshErrorAlert", void 0);
  __decorate([
      t$3()
  ], Select.prototype, "focused", void 0);
  __decorate([
      t$3()
  ], Select.prototype, "open", void 0);
  __decorate([
      i$5('.field')
  ], Select.prototype, "field", void 0);
  __decorate([
      i$5('md-menu')
  ], Select.prototype, "menu", void 0);
  __decorate([
      l$5({ slot: 'leadingicon', flatten: true })
  ], Select.prototype, "leadingIcons", void 0);
  __decorate([
      l$5({ slot: 'trailingicon', flatten: true })
  ], Select.prototype, "trailingIcons", void 0);
  __decorate([
      n$7()
  ], Select.prototype, "value", null);
  __decorate([
      n$7({ type: Number })
  ], Select.prototype, "selectedIndex", null);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class OutlinedSelect extends Select {
      constructor() {
          super(...arguments);
          this.fieldTag = i$1 `md-outlined-field`;
      }
  }

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$6 = i$4 `:host{--_text-field-container-shape: var(--md-outlined-select-text-field-container-shape, 4px);--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 2px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-type: var(--md-outlined-select-text-field-input-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, 1rem);--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, 0.75rem);--_text-field-label-text-type: var(--md-outlined-select-text-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-type: var(--md-outlined-select-text-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var( --md-outlined-select-text-field-container-shape-start-start, var(--_text-field-container-shape) );--_text-field-container-shape-start-end: var( --md-outlined-select-text-field-container-shape-start-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-end: var( --md-outlined-select-text-field-container-shape-end-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-start: var( --md-outlined-select-text-field-container-shape-end-start, var(--_text-field-container-shape) );--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-type: var(--_text-field-input-text-type);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-type: var(--_text-field-label-text-type);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-type: var(--_text-field-supporting-text-type);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[hasstart] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=outlined-select-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$5 = i$4 `:host{color:unset;min-width:210px}.field{cursor:default;outline:none}.select{position:relative}.field,.select,md-menu{min-width:100%;max-width:inherit}.field,.select{width:100%}:host{display:inline-flex}.label{width:100%}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary
   * Select menus display a list of choices on temporary surfaces and display the
   * currently selected menu item above the menu.
   *
   * @description
   * The select component allows users to choose a value from a fixed list of
   * available options. Composed of an interactive anchor button and a menu, it is
   * analogous to the native HTML `<select>` element. This is the "outlined"
   * variant.
   *
   * @example
   * ```html
   * <md-outlined-select label="fruits">
   *   <!-- An empty selected option will give select an "un-filled" state -->
   *   <md-select-option selected></md-select-option>
   *   <md-select-option value="apple" headline="Apple"></md-select-option>
   *   <md-select-option value="banana" headline="Banana"></md-select-option>
   *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
   *   <md-select-option value="orange" headline="Orange"></md-select-option>
   *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
   * </md-outlined-select>
   * ```
   *
   * @final
   * @suppress {visibility}
   */
  let MdOutlinedSelect = class MdOutlinedSelect extends OutlinedSelect {
  };
  MdOutlinedSelect.styles = [styles$5, styles$6, styles$b];
  MdOutlinedSelect = __decorate([
      e$9('md-outlined-select')
  ], MdOutlinedSelect);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$4 = i$4 `@media(forced-colors: active){:host{--md-list-item-list-item-disabled-label-text-color: GrayText;--md-list-item-list-item-disabled-label-text-opacity: 1;--md-list-item-list-item-disabled-leading-icon-color: GrayText;--md-list-item-list-item-disabled-leading-icon-opacity: 1;--md-list-item-list-item-disabled-trailing-icon-color: GrayText;--md-list-item-list-item-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$3 = i$4 `:host{--_list-item-container-color: var(--md-list-item-list-item-container-color, var(--md-sys-color-surface, #fef7ff));--_list-item-container-shape: var(--md-list-item-list-item-container-shape, 0px);--_list-item-disabled-label-text-color: var(--md-list-item-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-label-text-opacity: var(--md-list-item-list-item-disabled-label-text-opacity, 0.3);--_list-item-disabled-leading-icon-color: var(--md-list-item-list-item-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-leading-icon-opacity: var(--md-list-item-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-item-list-item-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-trailing-icon-opacity: var(--md-list-item-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-list-item-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-leading-icon-icon-color: var(--md-list-item-list-item-focus-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-focus-trailing-icon-icon-color: var(--md-list-item-list-item-focus-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-label-text-color: var(--md-list-item-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-leading-icon-icon-color: var(--md-list-item-list-item-hover-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-state-layer-color: var(--md-list-item-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-state-layer-opacity: var(--md-list-item-list-item-hover-state-layer-opacity, 0.08);--_list-item-hover-trailing-icon-icon-color: var(--md-list-item-list-item-hover-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-label-text-color: var(--md-list-item-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-label-text-line-height: var(--md-list-item-list-item-label-text-line-height, 1.5rem);--_list-item-label-text-type: var(--md-list-item-list-item-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-large-leading-video-height: var(--md-list-item-list-item-large-leading-video-height, 69px);--_list-item-leading-avatar-label-color: var(--md-list-item-list-item-leading-avatar-label-color, var(--md-sys-color-on-primary-container, #21005d));--_list-item-leading-avatar-label-type: var(--md-list-item-list-item-leading-avatar-label-type, var(--md-sys-typescale-title-medium, 500 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-leading-avatar-color: var(--md-list-item-list-item-leading-avatar-color, var(--md-sys-color-primary-container, #eaddff));--_list-item-leading-avatar-shape: var(--md-list-item-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-item-list-item-leading-avatar-size, 40px);--_list-item-leading-icon-color: var(--md-list-item-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-leading-icon-size: var(--md-list-item-list-item-leading-icon-size, 18px);--_list-item-leading-image-height: var(--md-list-item-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-item-list-item-leading-image-shape, 0px);--_list-item-leading-image-width: var(--md-list-item-list-item-leading-image-width, 56px);--_list-item-leading-video-shape: var(--md-list-item-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-item-list-item-leading-video-width, 100px);--_list-item-one-line-container-height: var(--md-list-item-list-item-one-line-container-height, 56px);--_list-item-pressed-label-text-color: var(--md-list-item-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-leading-icon-icon-color: var(--md-list-item-list-item-pressed-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-pressed-state-layer-color: var(--md-list-item-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-state-layer-opacity: var(--md-list-item-list-item-pressed-state-layer-opacity, 0.12);--_list-item-pressed-trailing-icon-icon-color: var(--md-list-item-list-item-pressed-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-small-leading-video-height: var(--md-list-item-list-item-small-leading-video-height, 56px);--_list-item-supporting-text-color: var(--md-list-item-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-supporting-text-type: var(--md-list-item-list-item-supporting-text-type, var(--md-sys-typescale-body-medium, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_list-item-three-line-container-height: var(--md-list-item-list-item-three-line-container-height, 88px);--_list-item-trailing-icon-color: var(--md-list-item-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-icon-size: var(--md-list-item-list-item-trailing-icon-size, 24px);--_list-item-trailing-supporting-text-color: var(--md-list-item-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-supporting-text-line-height: var(--md-list-item-list-item-trailing-supporting-text-line-height, 1rem);--_list-item-trailing-supporting-text-type: var(--md-list-item-list-item-trailing-supporting-text-type, var(--md-sys-typescale-label-small, 500 0.688rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_list-item-two-line-container-height: var(--md-list-item-list-item-two-line-container-height, 72px);--_list-item-leading-element-leading-space: var(--md-list-item-list-item-leading-element-leading-space, 16px);--_list-item-leading-space: var(--md-list-item-list-item-leading-space, 16px);--_list-item-leading-video-leading-space: var(--md-list-item-list-item-leading-video-leading-space, 0px);--_list-item-trailing-element-headline-trailing-element-space: var(--md-list-item-list-item-trailing-element-headline-trailing-element-space, 16px);--_list-item-trailing-space: var(--md-list-item-list-item-trailing-space, 16px)}:host{color:unset;--md-focus-ring-shape: 8px;--md-ripple-hover-color: var(--_list-item-hover-state-layer-color);--md-ripple-hover-opacity: var(--_list-item-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_list-item-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_list-item-pressed-state-layer-opacity)}.list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;text-decoration:none;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape);-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled):not(.noninteractive){cursor:pointer}.list-item.disabled{pointer-events:none}.content-wrapper{display:flex;width:100%;border-radius:inherit}md-ripple{border-radius:inherit}.with-one-line{min-height:var(--_list-item-one-line-container-height)}.with-two-line{min-height:var(--_list-item-two-line-container-height)}.with-three-line{min-height:var(--_list-item-three-line-container-height)}.start{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 auto;z-index:1}.with-three-line .start{justify-content:start}slot[name=start]::slotted([data-variant=icon]),slot[name=start]::slotted([data-variant=image]),slot[name=start]::slotted([data-variant=avatar]){margin-inline-start:var(--_list-item-leading-element-leading-space)}.body{display:inline-flex;justify-content:center;flex-direction:column;box-sizing:border-box;flex:1 0 0;padding-inline-start:var(--_list-item-leading-space);padding-inline-end:var(--_list-item-trailing-space);z-index:1}.end{display:inline-flex;flex-direction:column;justify-content:center;flex:0 0 auto;z-index:1}.with-three-line .end{justify-content:start}slot[name=end]::slotted(*),.trailing-supporting-text{margin-inline-end:var(--_list-item-trailing-element-headline-trailing-element-space)}.label-text{display:flex;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;color:var(--_list-item-label-text-color);font:var(--_list-item-label-text-type)}:hover .label-text{color:var(--_list-item-hover-label-text-color)}:focus .label-text{color:var(--_list-item-focus-label-text-color)}:active .label-text{color:var(--_list-item-pressed-label-text-color)}.disabled .label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text{text-overflow:ellipsis;white-space:normal;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font:var(--_list-item-supporting-text-type);-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.disabled .supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text--multi-line{-webkit-line-clamp:2}.trailing-supporting-text{padding-inline-start:16px;font:var(--_list-item-trailing-supporting-text-type)}.list-item:not(.disabled) .trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.disabled .trailing-supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.with-three-line .trailing-supporting-text{padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-supporting-text-line-height))/2)}.focus-ring{z-index:1}::slotted([data-variant=image]){display:inline-flex;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape);padding-block:calc((var(--_list-item-two-line-container-height) - var(--_list-item-leading-image-height))/2)}.with-three-line ::slotted([data-variant=image]){padding-block:0}slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-leading-icon-color);--md-icon-size:var(--_list-item-leading-icon-size)}.with-three-line slot[name=start]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-leading-icon-size))/2)}slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-trailing-icon-color);--md-icon-size:var(--_list-item-trailing-icon-size)}.with-three-line slot[name=end]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-icon-size))/2)}:hover slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-leading-icon-icon-color)}:hover slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-trailing-icon-icon-color)}:focus slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-leading-icon-icon-color)}:focus slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-trailing-icon-icon-color)}:active slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-leading-icon-icon-color)}:active slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-trailing-icon-icon-color)}.disabled slot[name=start]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-leading-icon-opacity);--md-icon-color:var(--_list-item-disabled-leading-icon-color)}.disabled slot[name=end]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-trailing-icon-opacity);--md-icon-color:var(--_list-item-disabled-trailing-icon-color)}::slotted([data-variant=avatar]){display:inline-flex;justify-content:center;align-items:center;background-color:var(--_list-item-leading-avatar-color);height:var(--_list-item-leading-avatar-size);width:var(--_list-item-leading-avatar-size);border-radius:var(--_list-item-leading-avatar-shape);color:var(--_list-item-leading-avatar-label-color);font:var(--_list-item-leading-avatar-label-type)}::slotted([data-variant=video]),::slotted([data-variant=video-large]){display:inline-flex;object-fit:cover;height:var(--_list-item-small-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape);margin-inline-start:var(--_list-item-leading-video-leading-space);padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-small-leading-video-height))/2)}.with-three-line ::slotted([data-variant=video]),.with-three-line ::slotted([data-variant=video-large]){padding-block:0}::slotted([data-variant=video-large]){padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-large-leading-video-height))/2);height:var(--_list-item-large-leading-video-height)}/*# sourceMappingURL=list-item-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$2 = i$4 `@media(forced-colors: active){.list-item{position:relative}:host([selected]) .list-item:not(:has(.focus-ring[visible]))::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles$1 = i$4 `:host{--_list-item-selected-container-color: var(--md-menu-item-list-item-selected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_list-item-container-color: var(--md-menu-item-list-item-container-color, var(--md-sys-color-surface-container, #f3edf7));--md-list-item-list-item-container-color: var(--_list-item-container-color)}:host([selected]) .list-item{background-color:var(--_list-item-selected-container-color)}.list-item:has(.submenu:hover){--md-ripple-hover-opacity: 0}/*# sourceMappingURL=menu-item-styles.css.map */
`;

  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  var _a;
  // tslint:disable-next-line:enforce-comments-on-exported-symbols
  class ListItemEl extends s$2 {
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
  _a = ListItemEl;
  (() => {
      requestUpdateOnAriaChange(_a);
  })();
  __decorate([
      n$7()
  ], ListItemEl.prototype, "headline", void 0);
  __decorate([
      n$7()
  ], ListItemEl.prototype, "supportingText", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], ListItemEl.prototype, "multiLineSupportingText", void 0);
  __decorate([
      n$7()
  ], ListItemEl.prototype, "trailingSupportingText", void 0);
  __decorate([
      n$7({ type: Boolean })
  ], ListItemEl.prototype, "disabled", void 0);
  __decorate([
      n$7({ type: Number })
  ], ListItemEl.prototype, "itemTabIndex", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], ListItemEl.prototype, "active", void 0);
  __decorate([
      n$7()
  ], ListItemEl.prototype, "type", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'md-list-item', reflect: true })
  ], ListItemEl.prototype, "isListItem", void 0);
  __decorate([
      i$5('.list-item')
  ], ListItemEl.prototype, "listItemRoot", void 0);

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
      n$7({ type: Boolean, attribute: 'md-menu-item', reflect: true })
  ], MenuItemEl.prototype, "isMenuItem", void 0);
  __decorate([
      n$7({ type: Boolean, attribute: 'keep-open' })
  ], MenuItemEl.prototype, "keepOpen", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @fires close-menu {CloseMenuEvent} Closes the encapsulating menu on
   * @fires request-selection {RequestSelectionEvent} Requests the parent
   * md-select to select this element (and deselect others if single-selection)
   * when `selected` changed to `true`.
   * @fires request-deselection {RequestDeselectionEvent} Requests the parent
   * md-select to deselect this element when `selected` changed to `false`.
   */
  class SelectOptionEl extends MenuItemEl {
      constructor() {
          super(...arguments);
          /**
           * Form value of the option.
           */
          this.value = '';
          /**
           * Whether or not this option is selected.
           */
          this.selected = false;
          this.type = 'option';
      }
      willUpdate(changed) {
          if (changed.has('selected')) {
              // Synchronize selected -> active but not the other way around because
              // active is used for keyboard navigation and doesn't mean the option
              // should be selected if active.
              this.active = this.selected;
              this.ariaSelected = this.selected ? 'true' : 'false';
              // By default active = true focuses the element. We want to prevent that
              // in this case because we set active = this.selected and that may mess
              // around with menu's restore focus function once the menu closes.
              this.focusOnActivation = false;
          }
          super.willUpdate(changed);
      }
      updated(changed) {
          super.updated(changed);
          // Restore the active = true focusing behavior which happens in
          // super.updated() if it was turned off.
          this.focusOnActivation = true;
          // Do not dispatch event on first update / boot-up.
          if (changed.has('selected') && changed.get('selected') !== undefined) {
              // This section is really useful for when the user sets selected on the
              // option programmatically. Most other cases (click and keyboard) are
              // handled by md-select because it needs to coordinate the
              // single-selection behavior.
              if (this.selected) {
                  this.dispatchEvent(new RequestSelectionEvent());
              }
              else {
                  this.dispatchEvent(new RequestDeselectionEvent());
              }
          }
      }
  }
  __decorate([
      n$7()
  ], SelectOptionEl.prototype, "value", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], SelectOptionEl.prototype, "selected", void 0);

  /**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @summary
   * Select menus display a list of choices on temporary surfaces and display the
   * currently selected menu item above the menu.
   *
   * @description
   * The select component allows users to choose a value from a fixed list of
   * available options. Composed of an interactive anchor button and a menu, it is
   * analogous to the native HTML `<select>` element. This is the option that
   * can be placed inside of an md-select.
   *
   * This component is a subclass of `md-menu-item` and can accept the same slots,
   * properties, and events as `md-menu-item`.
   *
   * @example
   * ```html
   * <md-outlined-select label="fruits">
   *   <!-- An empty selected option will give select an "un-filled" state -->
   *   <md-select-option selected></md-select-option>
   *   <md-select-option value="apple" headline="Apple"></md-select-option>
   *   <md-select-option value="banana" headline="Banana"></md-select-option>
   *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
   *   <md-select-option value="orange" headline="Orange"></md-select-option>
   *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
   * </md-outlined-select>
   * ```
   *
   * @final
   * @suppress {visibility}
   */
  let MdSelectOption = class MdSelectOption extends SelectOptionEl {
  };
  MdSelectOption.styles = [styles$3, styles$1, styles$4, styles$2];
  MdSelectOption = __decorate([
      e$9('md-select-option')
  ], MdSelectOption);

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFoundation = /** @class */ (function () {
      function MDCFoundation(adapter) {
          if (adapter === void 0) { adapter = {}; }
          this.adapter = adapter;
      }
      Object.defineProperty(MDCFoundation, "cssClasses", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "strings", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "numbers", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "defaultAdapter", {
          get: function () {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
          },
          enumerable: false,
          configurable: true
      });
      MDCFoundation.prototype.init = function () {
          // Subclasses should override this method to perform initialization routines (registering events, etc.)
      };
      MDCFoundation.prototype.destroy = function () {
          // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
      };
      return MDCFoundation;
  }());

  /**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * CSS class names used in component.
   */
  var cssClasses = {
      CELL: 'mdc-data-table__cell',
      CELL_NUMERIC: 'mdc-data-table__cell--numeric',
      CONTENT: 'mdc-data-table__content',
      HEADER_CELL: 'mdc-data-table__header-cell',
      HEADER_CELL_LABEL: 'mdc-data-table__header-cell-label',
      HEADER_CELL_SORTED: 'mdc-data-table__header-cell--sorted',
      HEADER_CELL_SORTED_DESCENDING: 'mdc-data-table__header-cell--sorted-descending',
      HEADER_CELL_WITH_SORT: 'mdc-data-table__header-cell--with-sort',
      HEADER_CELL_WRAPPER: 'mdc-data-table__header-cell-wrapper',
      HEADER_ROW: 'mdc-data-table__header-row',
      HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
      IN_PROGRESS: 'mdc-data-table--in-progress',
      LINEAR_PROGRESS: 'mdc-data-table__linear-progress',
      PAGINATION_ROWS_PER_PAGE_LABEL: 'mdc-data-table__pagination-rows-per-page-label',
      PAGINATION_ROWS_PER_PAGE_SELECT: 'mdc-data-table__pagination-rows-per-page-select',
      PROGRESS_INDICATOR: 'mdc-data-table__progress-indicator',
      ROOT: 'mdc-data-table',
      ROW: 'mdc-data-table__row',
      ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
      ROW_SELECTED: 'mdc-data-table__row--selected',
      SORT_ICON_BUTTON: 'mdc-data-table__sort-icon-button',
      SORT_STATUS_LABEL: 'mdc-data-table__sort-status-label',
      TABLE_CONTAINER: 'mdc-data-table__table-container',
  };
  /**
   * DOM attributes used in component.
   */
  var attributes = {
      ARIA_SELECTED: 'aria-selected',
      ARIA_SORT: 'aria-sort',
  };
  /**
   * List of data attributes used in component.
   */
  var dataAttributes = {
      COLUMN_ID: 'data-column-id',
      ROW_ID: 'data-row-id',
  };
  /**
   * CSS selectors used in component.
   */
  var selectors = {
      CONTENT: "." + cssClasses.CONTENT,
      HEADER_CELL: "." + cssClasses.HEADER_CELL,
      HEADER_CELL_WITH_SORT: "." + cssClasses.HEADER_CELL_WITH_SORT,
      HEADER_ROW: "." + cssClasses.HEADER_ROW,
      HEADER_ROW_CHECKBOX: "." + cssClasses.HEADER_ROW_CHECKBOX,
      PROGRESS_INDICATOR: "." + cssClasses.PROGRESS_INDICATOR,
      ROW: "." + cssClasses.ROW,
      ROW_CHECKBOX: "." + cssClasses.ROW_CHECKBOX,
      ROW_SELECTED: "." + cssClasses.ROW_SELECTED,
      SORT_ICON_BUTTON: "." + cssClasses.SORT_ICON_BUTTON,
      SORT_STATUS_LABEL: "." + cssClasses.SORT_STATUS_LABEL,
  };
  /**
   * Messages used in component.
   */
  var messages = {
      SORTED_IN_DESCENDING: 'Sorted in descending order',
      SORTED_IN_ASCENDING: 'Sorted in ascending order',
  };
  /**
   * Attributes and selectors used in component.
   * @deprecated Use `attributes`, `dataAttributes` and `selectors` instead.
   */
  var strings = {
      ARIA_SELECTED: attributes.ARIA_SELECTED,
      ARIA_SORT: attributes.ARIA_SORT,
      DATA_ROW_ID_ATTR: dataAttributes.ROW_ID,
      HEADER_ROW_CHECKBOX_SELECTOR: selectors.HEADER_ROW_CHECKBOX,
      ROW_CHECKBOX_SELECTOR: selectors.ROW_CHECKBOX,
      ROW_SELECTED_SELECTOR: selectors.ROW_SELECTED,
      ROW_SELECTOR: selectors.ROW,
  };
  /**
   * Sort values defined by ARIA.
   * See https://www.w3.org/WAI/PF/aria/states_and_properties#aria-sort
   */
  var SortValue;
  (function (SortValue) {
      // Items are sorted in ascending order by this column.
      SortValue["ASCENDING"] = "ascending";
      // Items are sorted in descending order by this column.
      SortValue["DESCENDING"] = "descending";
      // There is no defined sort applied to the column.
      SortValue["NONE"] = "none";
      // A sort algorithm other than ascending or descending has been applied.
      SortValue["OTHER"] = "other";
  })(SortValue || (SortValue = {}));

  /**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * The Foundation of data table component containing pure business logic, any
   * logic requiring DOM manipulation are delegated to adapter methods.
   */
  var MDCDataTableFoundation = /** @class */ (function (_super) {
      __extends(MDCDataTableFoundation, _super);
      function MDCDataTableFoundation(adapter) {
          return _super.call(this, __assign(__assign({}, MDCDataTableFoundation.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addClass: function () { return undefined; },
                  addClassAtRowIndex: function () { return undefined; },
                  getAttributeByHeaderCellIndex: function () { return ''; },
                  getHeaderCellCount: function () { return 0; },
                  getHeaderCellElements: function () { return []; },
                  getRowCount: function () { return 0; },
                  getRowElements: function () { return []; },
                  getRowIdAtIndex: function () { return ''; },
                  getRowIndexByChildElement: function () { return 0; },
                  getSelectedRowCount: function () { return 0; },
                  getTableContainerHeight: function () { return 0; },
                  getTableHeaderHeight: function () { return 0; },
                  isCheckboxAtRowIndexChecked: function () { return false; },
                  isHeaderRowCheckboxChecked: function () { return false; },
                  isRowsSelectable: function () { return false; },
                  notifyRowSelectionChanged: function () { return undefined; },
                  notifySelectedAll: function () { return undefined; },
                  notifySortAction: function () { return undefined; },
                  notifyUnselectedAll: function () { return undefined; },
                  notifyRowClick: function () { return undefined; },
                  registerHeaderRowCheckbox: function () { return undefined; },
                  registerRowCheckboxes: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  removeClassAtRowIndex: function () { return undefined; },
                  removeClassNameByHeaderCellIndex: function () { return undefined; },
                  setAttributeAtRowIndex: function () { return undefined; },
                  setAttributeByHeaderCellIndex: function () { return undefined; },
                  setClassNameByHeaderCellIndex: function () { return undefined; },
                  setHeaderRowCheckboxChecked: function () { return undefined; },
                  setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                  setProgressIndicatorStyles: function () { return undefined; },
                  setRowCheckboxCheckedAtIndex: function () { return undefined; },
                  setSortStatusLabelByHeaderCellIndex: function () { return undefined; },
              };
          },
          enumerable: false,
          configurable: true
      });
      /**
       * Re-initializes header row checkbox and row checkboxes when selectable rows
       * are added or removed from table. Use this if registering checkbox is
       * synchronous.
       */
      MDCDataTableFoundation.prototype.layout = function () {
          if (this.adapter.isRowsSelectable()) {
              this.adapter.registerHeaderRowCheckbox();
              this.adapter.registerRowCheckboxes();
              this.setHeaderRowCheckboxState();
          }
      };
      /**
       * Re-initializes header row checkbox and row checkboxes when selectable rows
       * are added or removed from table. Use this if registering checkbox is
       * asynchronous.
       */
      MDCDataTableFoundation.prototype.layoutAsync = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!this.adapter.isRowsSelectable()) return [3 /*break*/, 3];
                          return [4 /*yield*/, this.adapter.registerHeaderRowCheckbox()];
                      case 1:
                          _a.sent();
                          return [4 /*yield*/, this.adapter.registerRowCheckboxes()];
                      case 2:
                          _a.sent();
                          this.setHeaderRowCheckboxState();
                          _a.label = 3;
                      case 3: return [2 /*return*/];
                  }
              });
          });
      };
      /**
       * @return Returns array of row elements.
       */
      MDCDataTableFoundation.prototype.getRows = function () {
          return this.adapter.getRowElements();
      };
      /**
       * @return Array of header cell elements.
       */
      MDCDataTableFoundation.prototype.getHeaderCells = function () {
          return this.adapter.getHeaderCellElements();
      };
      /**
       * Sets selected row ids. Overwrites previously selected rows.
       * @param rowIds Array of row ids that needs to be selected.
       */
      MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
          for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
              var rowId = this.adapter.getRowIdAtIndex(rowIndex);
              var isSelected = false;
              if (rowId && rowIds.indexOf(rowId) >= 0) {
                  isSelected = true;
              }
              this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
              this.selectRowAtIndex(rowIndex, isSelected);
          }
          this.setHeaderRowCheckboxState();
      };
      /**
       * @return Returns array of all row ids.
       */
      MDCDataTableFoundation.prototype.getRowIds = function () {
          var rowIds = [];
          for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
              rowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
          }
          return rowIds;
      };
      /**
       * @return Returns array of selected row ids.
       */
      MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
          var selectedRowIds = [];
          for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
              if (this.adapter.isCheckboxAtRowIndexChecked(rowIndex)) {
                  selectedRowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
              }
          }
          return selectedRowIds;
      };
      /**
       * Handles header row checkbox change event.
       */
      MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
          var isHeaderChecked = this.adapter.isHeaderRowCheckboxChecked();
          for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
              this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
              this.selectRowAtIndex(rowIndex, isHeaderChecked);
          }
          if (isHeaderChecked) {
              this.adapter.notifySelectedAll();
          }
          else {
              this.adapter.notifyUnselectedAll();
          }
      };
      /**
       * Handles change event originated from row checkboxes.
       */
      MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
          var rowIndex = this.adapter.getRowIndexByChildElement(event.target);
          if (rowIndex === -1) {
              return;
          }
          var selected = this.adapter.isCheckboxAtRowIndexChecked(rowIndex);
          this.selectRowAtIndex(rowIndex, selected);
          this.setHeaderRowCheckboxState();
          var rowId = this.adapter.getRowIdAtIndex(rowIndex);
          this.adapter.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
      };
      /**
       * Handles sort action on sortable header cell.
       */
      MDCDataTableFoundation.prototype.handleSortAction = function (eventData) {
          var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
          // Reset sort attributes / classes on other header cells.
          for (var index = 0; index < this.adapter.getHeaderCellCount(); index++) {
              if (index === columnIndex) {
                  continue;
              }
              this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED);
              this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED_DESCENDING);
              this.adapter.setAttributeByHeaderCellIndex(index, strings.ARIA_SORT, SortValue.NONE);
              this.adapter.setSortStatusLabelByHeaderCellIndex(index, SortValue.NONE);
          }
          // Set appropriate sort attributes / classes on target header cell.
          this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED);
          var currentSortValue = this.adapter.getAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT);
          var sortValue = SortValue.NONE;
          // Set to descending if sorted on ascending order.
          if (currentSortValue === SortValue.ASCENDING) {
              this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
              this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.DESCENDING);
              sortValue = SortValue.DESCENDING;
              // Set to ascending if sorted on descending order.
          }
          else if (currentSortValue === SortValue.DESCENDING) {
              this.adapter.removeClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
              this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
              sortValue = SortValue.ASCENDING;
          }
          else {
              // Set to ascending by default when not sorted.
              this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
              sortValue = SortValue.ASCENDING;
          }
          this.adapter.setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue);
          this.adapter.notifySortAction({
              columnId: columnId,
              columnIndex: columnIndex,
              headerCell: headerCell,
              sortValue: sortValue,
          });
      };
      /**
       * Handles data table row click event.
       */
      MDCDataTableFoundation.prototype.handleRowClick = function (_a) {
          var rowId = _a.rowId, row = _a.row;
          this.adapter.notifyRowClick({
              rowId: rowId,
              row: row,
          });
      };
      /**
       * Shows progress indicator blocking only the table body content when in
       * loading state.
       */
      MDCDataTableFoundation.prototype.showProgress = function () {
          var tableHeaderHeight = this.adapter.getTableHeaderHeight();
          // Calculate the height of table content (Not scroll content) excluding
          // header row height.
          var height = this.adapter.getTableContainerHeight() - tableHeaderHeight;
          var top = tableHeaderHeight;
          this.adapter.setProgressIndicatorStyles({
              height: height + "px",
              top: top + "px",
          });
          this.adapter.addClass(cssClasses.IN_PROGRESS);
      };
      /**
       * Hides progress indicator when data table is finished loading.
       */
      MDCDataTableFoundation.prototype.hideProgress = function () {
          this.adapter.removeClass(cssClasses.IN_PROGRESS);
      };
      /**
       * Updates header row checkbox state based on number of rows selected.
       */
      MDCDataTableFoundation.prototype.setHeaderRowCheckboxState = function () {
          if (this.adapter.getSelectedRowCount() === 0) {
              this.adapter.setHeaderRowCheckboxChecked(false);
              this.adapter.setHeaderRowCheckboxIndeterminate(false);
          }
          else if (this.adapter.getSelectedRowCount() === this.adapter.getRowCount()) {
              this.adapter.setHeaderRowCheckboxChecked(true);
              this.adapter.setHeaderRowCheckboxIndeterminate(false);
          }
          else {
              this.adapter.setHeaderRowCheckboxIndeterminate(true);
              this.adapter.setHeaderRowCheckboxChecked(false);
          }
      };
      /**
       * Sets the attributes of row element based on selection state.
       */
      MDCDataTableFoundation.prototype.selectRowAtIndex = function (rowIndex, selected) {
          if (selected) {
              this.adapter.addClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
              this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'true');
          }
          else {
              this.adapter.removeClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
              this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'false');
          }
      };
      return MDCDataTableFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  // Style preference for leading underscores.
  // tslint:disable:strip-private-property-underscore
  /**
   * Determines whether a node is an element.
   *
   * @param node Node to check
   */
  const fn = () => { };
  const optionsBlock = {
      get passive() {
          return false;
      }
  };
  document.addEventListener('x', fn, optionsBlock);
  document.removeEventListener('x', fn);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */
  /** @soyCompatible */
  class BaseElement extends s$2 {
      click() {
          if (this.mdcRoot) {
              this.mdcRoot.focus();
              this.mdcRoot.click();
              return;
          }
          super.click();
      }
      /**
       * Create and attach the MDC Foundation to the instance
       */
      createFoundation() {
          if (this.mdcFoundation !== undefined) {
              this.mdcFoundation.destroy();
          }
          if (this.mdcFoundationClass) {
              this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
              this.mdcFoundation.init();
          }
      }
      firstUpdated() {
          this.createFoundation();
      }
  }

  class DataTable extends BaseElement {
      constructor() {
          super(...arguments);
          /**
           * Enable/disable pagination.
           */
          this.paginated = false;
          /**
           * JSON array with the page sizes to be used in the pagination and shown as page size select options.
           */
          this.pageSizes = '[10, 25, 100]';
          /**
           * Label to show before the page size select.
           */
          this.pageSizesLabel = 'Rows per page:';
          /**
           * Index of the first row to be shown on the current page.
           */
          this.firstRowOfPage = 1;
          /** @internal */
          this.pageSizesArray = JSON.parse(this.pageSizes);
          /**
           * Size of the current page.
           */
          this.currentPageSize = this.pageSizesArray[0];
          /**
           * Index of the last row to be shown on the current page.
           */
          this.lastRowOfPage = this.currentPageSize;
          /**
           * Label pattern to show after the page size select that indicates the current rows shown in the page.
           * It should contain the following parameters: `:firstRow`, `:lastRow`, `:totalRows`
           */
          this.paginationTotalLabel = ':firstRow-:lastRow of :totalRows';
          /**
           * Whether the loading indicator is active.
           */
          this.inProgress = false;
          /** @internal */
          this.mdcRoot = this.tableElement;
          /** @internal */
          // @ts-ignore (TypeScript bug)
          this.mdcFoundationClass = MDCDataTableFoundation;
          this.columnFilters = new Map();
          /** @internal */
          this.rowCallback = (e) => this.mdcFoundation.handleRowCheckboxChange(e);
          /** @internal */
          this.headerRowCallback = () => this.mdcFoundation.handleHeaderRowCheckboxChange();
          /** @internal */
          this.filterColumnCallback = (e) => {
              const event = e;
              // Don't filter if the column is using custom filtering
              if (event.detail.customFiltering) {
                  return;
              }
              const { text, column } = event.detail;
              if (text === '') {
                  this.columnFilters.delete(column);
              }
              else {
                  this.columnFilters.set(column, text);
              }
              for (const row of this.rows) {
                  row.hidden = true;
              }
              let rowsToShow = this.rows;
              for (let [column, filterText] of this.columnFilters) {
                  rowsToShow = this.rows.filter((row) => {
                      const index = this.columns.indexOf(column);
                      let cellText = row.cells[index].textContent ?? '';
                      if (!event.detail.caseSensitive) {
                          cellText = cellText.toLowerCase();
                          filterText = filterText.toLowerCase();
                      }
                      return cellText.search(filterText) !== -1;
                  });
              }
              this.showRows(rowsToShow);
              /**
               * Event emitted when the data table has been filtered.
               *
               * Event detail: `FilteredDetail`;
               */
              this.dispatchEvent(new CustomEvent('filtered', {
                  detail: {
                      column: event.detail.column,
                      text,
                      caseSensitive: event.detail.caseSensitive,
                      columnIndex: this.columns.indexOf(column)
                  }
              }));
          };
          this.sortColumnCallback = (e) => {
              const event = e;
              const { column, isDescending } = event.detail;
              // Don't sort if the column is using custom sorting
              if (!event.detail.customSorting) {
                  this.inProgress = true;
                  for (const col of this.columns.filter((col) => col !== column && col.sortable)) {
                      col.sorted = false;
                      col.sortedDescending = false;
                  }
                  const cells = this.rows.map((row) => row.cells[this.columns.indexOf(column)]);
                  cells.sort((a, b) => {
                      let aValue = a.textContent;
                      let bValue = b.textContent;
                      if (column.type === 'numeric') {
                          aValue = Number.parseFloat(aValue);
                          bValue = Number.parseFloat(bValue);
                      }
                      if (!isDescending) {
                          const temporary = aValue;
                          aValue = bValue;
                          bValue = temporary;
                      }
                      if (typeof aValue === 'string' && typeof bValue === 'string') {
                          return aValue.localeCompare(bValue);
                      }
                      return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
                  });
                  // this.rows = cells.map((cell) => cell.parentElement as DataTableRow);
                  for (const cell of cells) {
                      const row = cell.parentElement;
                      row.parentElement.append(row);
                  }
                  this.inProgress = false;
                  column.sorted = true;
              }
              column.withSortButton = true;
              /**
               * Event emitted when the data table has been filtered.
               *
               * Event detail: `FilteredDetail`;
               */
              this.dispatchEvent(new CustomEvent('sorted', {
                  detail: {
                      column: event.detail.column,
                      isDescending,
                  }
              }));
          };
      }
      /** @internal */
      get headerCheckboxRow() {
          return this.columns.filter((column) => column.checkbox !== undefined)[0];
      }
      /** @internal */
      get headerCheckbox() {
          return this.headerCheckboxRow?.checkbox;
      }
      render() {
          return x `
      <div class="mdc-data-table">
        <div class="mdc-data-table__table-container">
          <div class="mdc-data-table__table" aria-label="${this.ariaLabel}" role="table">
            <div class="mdc-data-table__head" role="rowgroup">
              <div class="mdc-data-table__header-row" role="row">
                <slot name="header-cell" @slotchange=${this.onHeaderCellSlotChange}></slot>
              </div>
            </div>
            <div class="mdc-data-table__content" role="rowgroup">
              <slot name="row" @slotchange=${() => this.requestUpdate()}></slot>
            </div>
          </div>
        </div>

        ${this.renderPagination()}

        <slot name="footer"></slot>

        <div class="mdc-data-table__progress-indicator">
          <div class="mdc-data-table__scrim"></div>
          <md-linear-progress indeterminate class="mdc-data-table__linear-progress" role="progressbar"
                               aria-label="Data is being loaded..."></md-linear-progress>
        </div>
      </div>
    `;
      }
      onHeaderCellSlotChange() {
          this.requestUpdate();
          const sortColumn = this.columns.find((column) => column.sortable && column.sorted);
          if (sortColumn) {
              sortColumn.onSortButtonClicked(new CustomEvent('icon-button-toggle-change', { detail: { selected: !sortColumn.sortedDescending } }));
          }
      }
      renderPagination() {
          if (this.paginated) {
              const initialPageLabel = this.firstRowOfPage < 1 ? 1 : this.firstRowOfPage;
              const lastPageLabel = this.lastRowOfPage > this.rows.length ? this.rows.length : this.lastRowOfPage;
              return x `
        <md-data-table-footer>
          <div class="mdc-data-table__pagination-trailing">
            <div class="mdc-data-table__pagination-rows-per-page">
              <div class="mdc-data-table__pagination-rows-per-page-label">
                ${this.pageSizesLabel}
              </div>
              
              <md-outlined-select
                  type="number"
                  class="mdc-data-table__pagination-rows-per-page-select"
                  value="${this.currentPageSize}"
                  @input=${this.onPageSizeSelected}>
                  ${this.pageSizesArray.map((size) => x `
                  <md-select-option value="${size}" headline="${size}">${size}</md-select-option>
                  `)}
              </md-outlined-select>
            </div>

            <div class="mdc-data-table__pagination-navigation">
              <div class="mdc-data-table__pagination-total">
                ${this.renderTemplate(this.paginationTotalLabel, {
                'firstRow': initialPageLabel,
                'lastRow': lastPageLabel,
                'totalRows': this.rows.length,
            })}
              </div>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="first"
                               ?disabled=${this.firstRowOfPage <= 1}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-first-button-icon">
                  <md-icon slot="icon">first_page</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="previous"
                               ?disabled=${this.firstRowOfPage <= 1}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-previous-button-icon">
                  <md-icon>chevron_left</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="next"
                               ?disabled=${this.lastRowOfPage >= this.rows.length}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-next-button-icon">
                  <md-icon>chevron_right</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="last"
                               ?disabled=${this.lastRowOfPage >= this.rows.length}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-last-button-icon">
                  <md-icon>last_page</md-icon>
                </slot>
              </md-filled-icon-button>
            </div>
          </div>
        </div>
      `;
          }
          return '';
      }
      onPageSizeSelected(e) {
          // const select = e.target as Autocomplete;
          this.currentPageSize = Number.parseInt(e.target.value);
          this.paginate('first');
      }
      onPaginationButtonClicked(event) {
          let button = event.target;
          if (!(button instanceof IconButton)) {
              button = button.closest('.mdc-data-table__pagination-button');
          }
          const action = button.dataset['page'];
          this.paginate(action);
      }
      paginate(action = 'current') {
          this.pageSizesArray = JSON.parse(this.pageSizes);
          if (!this.pageSizesArray.includes(this.currentPageSize)) {
              this.currentPageSize = this.pageSizesArray[0];
          }
          if (this.paginated) {
              this.hideRows();
              switch (action) {
                  case 'first':
                      this.firstRowOfPage = 1;
                      this.lastRowOfPage = this.currentPageSize;
                      break;
                  case 'previous':
                      this.firstRowOfPage -= this.currentPageSize;
                      this.lastRowOfPage -= this.currentPageSize;
                      break;
                  case 'next':
                      this.firstRowOfPage += this.currentPageSize;
                      this.lastRowOfPage += this.currentPageSize;
                      break;
                  case 'last':
                      this.firstRowOfPage = this.rows.length - this.currentPageSize + 1;
                      this.lastRowOfPage = this.rows.length;
                      break;
              }
              const rowsToShow = this.rows.slice(this.firstRowOfPage - 1, this.lastRowOfPage);
              this.showRows(rowsToShow);
          }
      }
      firstUpdated() {
          super.firstUpdated();
          this.paginate('first');
      }
      updated(_changedProperties) {
          super.updated(_changedProperties);
          for (const row of this.rows) {
              row.removeEventListener('selected', this.rowCallback);
              row.addEventListener('selected', this.rowCallback);
              row.setAttribute('density', this.density);
          }
          for (const column of this.columns) {
              column.removeEventListener('filter', this.filterColumnCallback);
              column.addEventListener('filter', this.filterColumnCallback);
              column.removeEventListener('sort', this.sortColumnCallback);
              column.addEventListener('sort', this.sortColumnCallback);
              column.setAttribute('density', this.density);
          }
          this.headerCheckboxRow?.removeEventListener('checked', this.headerRowCallback);
          this.headerCheckboxRow?.addEventListener('checked', this.headerRowCallback);
          this.paginate();
          if (this.inProgress) {
              this.mdcFoundation?.showProgress();
          }
          else {
              this.mdcFoundation?.hideProgress();
          }
          this.mdcFoundation?.layout();
      }
      createAdapter() {
          return {
              addClass: (className) => {
                  if (className === cssClasses.IN_PROGRESS) {
                      this.tableElement.classList.add(cssClasses.IN_PROGRESS);
                  }
              },
              removeClass: (className) => {
                  if (className === cssClasses.IN_PROGRESS) {
                      this.tableElement.classList.remove(cssClasses.IN_PROGRESS);
                  }
              },
              addClassAtRowIndex: (rowIndex, className) => {
                  if (className === cssClasses.ROW_SELECTED) {
                      this.rows[rowIndex].selected = true;
                  }
              },
              getRowCount: () => this.rows.length,
              getRowElements: () => this.rows,
              getRowIdAtIndex: (rowIndex) => this.rows?.[rowIndex].id ?? null,
              getRowIndexByChildElement: (el) => this.rows.findIndex((row) => row.contains(el)),
              getSelectedRowCount: () => this.rows.filter((row) => row.selected).length,
              isCheckboxAtRowIndexChecked: (rowIndex) => this.rows[rowIndex].selected,
              isHeaderRowCheckboxChecked: () => this.headerCheckbox?.checked ?? false,
              isRowsSelectable: () => this.headerCheckbox !== undefined ||
                  this.rows.filter((row) => row.checkboxCell !== undefined).length > 0,
              notifyRowSelectionChanged: (data) => {
                  /**
                   * Event emitted when row checkbox is checked or unchecked.
                   *
                   * Event detail: `RowSelectionChangedDetail`.
                   */
                  this.dispatchEvent(new CustomEvent('rowSelectionChanged', {
                      detail: {
                          row: this.rows[data.rowIndex],
                          rowIndex: data.rowIndex,
                          selected: data.selected,
                      }
                  }));
              },
              notifySelectedAll: () => {
                  /**
                   * Event emitted when header row checkbox is checked.
                   */
                  this.dispatchEvent(new CustomEvent('selectedAll'));
              },
              notifyUnselectedAll: () => {
                  /**
                   * Event emitted when header row checkbox is unchecked.
                   */
                  this.dispatchEvent(new CustomEvent('unselectedAll'));
              },
              notifyRowClick: (detail) => {
                  /**
                   * Event emitted when a row has been checked or unchecked.
                   *
                   * Event detail: `RowClickEventData`.
                   */
                  this.dispatchEvent(new CustomEvent('rowClick', { detail }));
              },
              registerHeaderRowCheckbox: () => {
              },
              registerRowCheckboxes: () => {
              },
              removeClassAtRowIndex: (rowIndex, className) => {
                  if (className === cssClasses.ROW_SELECTED) {
                      this.rows[rowIndex].selected = false;
                  }
              },
              setAttributeAtRowIndex: (rowIndex, attr, value) => {
                  const row = this.rows[rowIndex];
                  if (row) {
                      row.setAttribute(attr, value);
                      if (attr === attributes.ARIA_SELECTED) {
                          row.selected = value === 'true';
                      }
                  }
              },
              setHeaderRowCheckboxChecked: (checked) => {
                  if (this.headerCheckbox) {
                      this.headerCheckbox.checked = checked;
                  }
              },
              setHeaderRowCheckboxIndeterminate: (indeterminate) => {
                  if (this.headerCheckbox) {
                      this.headerCheckbox.indeterminate = indeterminate;
                  }
              },
              setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
                  const row = this.rows[rowIndex];
                  if (row) {
                      row.selected = checked;
                  }
              },
              getHeaderCellCount: () => this.columns.length,
              getHeaderCellElements: () => this.columns,
              getAttributeByHeaderCellIndex: (columnIndex, attribute) => this.columns[columnIndex].getAttribute(attribute),
              setAttributeByHeaderCellIndex: (columnIndex, attribute, value) => {
                  this.columns[columnIndex].setAttribute(attribute, value);
              },
              setClassNameByHeaderCellIndex: (columnIndex, className) => {
                  const attributesMapping = {
                      [cssClasses.HEADER_CELL_SORTED]: 'sorted',
                      [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
                  };
                  this.columns[columnIndex].toggleAttribute(attributesMapping[className], true);
              },
              removeClassNameByHeaderCellIndex: (columnIndex, className) => {
                  const attributesMapping = {
                      [cssClasses.HEADER_CELL_SORTED]: 'sorted',
                      [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
                  };
                  this.columns[columnIndex].toggleAttribute(attributesMapping[className], false);
              },
              notifySortAction: (data) => {
                  /**
                   * Event emitted when a column has been sorted.
                   *
                   * Event detail: `SortActionEventDetail`.
                   */
                  this.dispatchEvent(new CustomEvent('sorted', { detail: data }));
              },
              getTableContainerHeight: () => this.tableContainerElement.getBoundingClientRect().height,
              getTableHeaderHeight: () => this.headerRowElement.getBoundingClientRect().height,
              setProgressIndicatorStyles: (styles) => {
                  this.progressIndicator.style.top = styles.top;
                  this.progressIndicator.style.height = styles.height;
              },
              setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
                  const column = this.columns[columnIndex];
                  if (column.sortable) {
                      const mappings = {
                          [SortValue.ASCENDING]: messages.SORTED_IN_ASCENDING,
                          [SortValue.DESCENDING]: messages.SORTED_IN_DESCENDING,
                      };
                      // @ts-ignore
                      column.sortButton.ariaLabel = mappings[sortValue];
                  }
              }
          };
      }
      renderTemplate(template, params) {
          for (const [key, value] of Object.entries(params)) {
              template = template.replace(`:${key}`, value);
          }
          return template;
      }
      hideRows(rows = this.rows) {
          for (const row of rows) {
              row.hidden = true;
              row.classList.remove('without-bottom-border');
          }
      }
      showRows(rows = this.rows) {
          for (const row of rows) {
              row.hidden = false;
          }
          // Add bottom border to the last row
          rows.slice(-1)[0]?.classList.add('without-bottom-border');
      }
  }
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTable.prototype, "paginated", void 0);
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTable.prototype, "pageSizes", void 0);
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTable.prototype, "pageSizesLabel", void 0);
  __decorate([
      n$7({ type: Number, reflect: true })
  ], DataTable.prototype, "firstRowOfPage", void 0);
  __decorate([
      n$7({ type: Number, reflect: true })
  ], DataTable.prototype, "currentPageSize", void 0);
  __decorate([
      n$7({ type: Number, reflect: true })
  ], DataTable.prototype, "lastRowOfPage", void 0);
  __decorate([
      n$7({ type: String })
  ], DataTable.prototype, "paginationTotalLabel", void 0);
  __decorate([
      n$7({ type: Boolean, reflect: true })
  ], DataTable.prototype, "inProgress", void 0);
  __decorate([
      n$7({ type: String, reflect: true })
  ], DataTable.prototype, "density", void 0);
  __decorate([
      l$5({ slot: 'header-cell', selector: 'md-data-table-column' })
  ], DataTable.prototype, "columns", void 0);
  __decorate([
      l$5({ slot: 'row', selector: 'md-data-table-row' })
  ], DataTable.prototype, "rows", void 0);
  __decorate([
      i$5('.mdc-data-table')
  ], DataTable.prototype, "tableElement", void 0);
  __decorate([
      i$5('.mdc-data-table__table-container')
  ], DataTable.prototype, "tableContainerElement", void 0);
  __decorate([
      i$5('.mdc-data-table__header-row')
  ], DataTable.prototype, "headerRowElement", void 0);
  __decorate([
      i$5('.mdc-data-table__progress-indicator')
  ], DataTable.prototype, "progressIndicator", void 0);

  let MdDataTable = class MdDataTable extends DataTable {
  };
  MdDataTable.styles = [styles$e];
  MdDataTable = __decorate([
      e$9('md-data-table')
  ], MdDataTable);

  /**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    */
  const styles = i$4 `:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media(min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media(max-width: 599px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media(min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12, minmax(0, 1fr))}}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8, minmax(0, 1fr))}}}@media(max-width: 599px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4, minmax(0, 1fr))}}}@media(min-width: 840px){.mdc-layout-grid__cell,::slotted(*){width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid__cell,::slotted(*){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media(max-width: 599px){.mdc-layout-grid__cell,::slotted(*){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports(display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports(display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media(min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc(
    var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +
      var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +
      var(--mdc-layout-grid-margin-desktop, 24px) * 2
  )}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc(
    var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +
      var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +
      var(--mdc-layout-grid-margin-tablet, 16px) * 2
  )}}@media(max-width: 599px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc(
    var(--mdc-layout-grid-column-width-phone, 72px) * 4 +
      var(--mdc-layout-grid-gutter-phone, 16px) * 3 +
      var(--mdc-layout-grid-margin-phone, 16px) * 2
  )}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}div.mdc-layout-grid{background:inherit;border:inherit}div.mdc-layout-grid,div.mdc-layout-grid__inner{max-width:inherit;width:inherit;min-width:inherit;height:inherit;max-height:inherit;min-height:inherit}@media(min-width: 840px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-desktop="1"]){width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-desktop="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-desktop="2"]){width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-desktop="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-desktop="3"]){width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-desktop="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-desktop="4"]){width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-desktop="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-desktop="5"]){width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-desktop="5"]){width:auto;grid-column-end:span 5}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-desktop="6"]){width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-desktop="6"]){width:auto;grid-column-end:span 6}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-desktop="7"]){width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-desktop="7"]){width:auto;grid-column-end:span 7}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-desktop="8"]){width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-desktop="8"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-desktop="9"]){width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-desktop="9"]){width:auto;grid-column-end:span 9}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-desktop="10"]){width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-desktop="10"]){width:auto;grid-column-end:span 10}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-desktop="11"]){width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-desktop="11"]){width:auto;grid-column-end:span 11}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-desktop="12"]){width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-desktop="12"]){width:auto;grid-column-end:span 12}}}@media(min-width: 600px)and (max-width: 839px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-tablet="1"]){width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-tablet="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-tablet="2"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-tablet="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-tablet="3"]){width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-tablet="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-tablet="4"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-tablet="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-tablet="5"]){width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-tablet="5"]){width:auto;grid-column-end:span 5}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-tablet="6"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-tablet="6"]){width:auto;grid-column-end:span 6}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-tablet="7"]){width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-tablet="7"]){width:auto;grid-column-end:span 7}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-tablet="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-tablet="8"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-tablet="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-tablet="9"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-tablet="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-tablet="10"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-tablet="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-tablet="11"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-tablet="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-tablet="12"]){width:auto;grid-column-end:span 8}}}@media(max-width: 599px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-phone="1"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-phone="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-phone="2"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-phone="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-phone="3"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-phone="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-phone="4"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-phone="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-phone="5"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-phone="5"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-phone="6"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-phone="6"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-phone="7"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-phone="7"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-phone="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-phone="8"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-phone="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-phone="9"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-phone="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-phone="10"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-phone="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-phone="11"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-phone="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-phone="12"]){width:auto;grid-column-end:span 4}}}::slotted(*[grid-order="1"]){order:1}::slotted(*[grid-order="2"]){order:2}::slotted(*[grid-order="3"]){order:3}::slotted(*[grid-order="4"]){order:4}::slotted(*[grid-order="5"]){order:5}::slotted(*[grid-order="6"]){order:6}::slotted(*[grid-order="7"]){order:7}::slotted(*[grid-order="8"]){order:8}::slotted(*[grid-order="9"]){order:9}::slotted(*[grid-order="10"]){order:10}::slotted(*[grid-order="11"]){order:11}::slotted(*[grid-order="12"]){order:12}::slotted(*[grid-align=top]){align-self:flex-start}@supports(display: grid){::slotted(*[grid-align=top]){align-self:start}}::slotted(*[grid-align=middle]){align-self:center}::slotted(*[grid-align=bottom]){align-self:flex-end}@supports(display: grid){::slotted(*[grid-align=bottom]){align-self:end}}/*# sourceMappingURL=layout-grid.css.map */
`;

  class LayoutGrid extends s$2 {
      constructor() {
          super(...arguments);
          /**
           * You can designate each column to have a certain width. The column width can be specified through the CSS custom property `--mdc-layout-grid-column-width-{screen_size}`. The column width is set to 72px on all devices by default.
           */
          this.fixedColumnWidth = false;
          /**
           * The grid is by default center aligned. You can set this attribute to `left` or `right` to change this behavior. Note, these modifiers will have no effect when the grid already fills its container.
           */
          this.align = 'center';
      }
      getRenderClasses() {
          return {
              'mdc-layout-grid': true,
              'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
              'mdc-layout-grid--align-left': this.align === 'left',
              'mdc-layout-grid--align-right': this.align === 'right',
          };
      }
      render() {
          return x `
            <div class="${o$1(this.getRenderClasses())}">
                ${this.renderSlot()}
            </div>
        `;
      }
      renderSlot() {
          return x `
            <md-layout-grid-inner>
                <slot></slot>
            </md-layout-grid-inner>
        `;
      }
  }
  __decorate([
      n$7({ type: Boolean })
  ], LayoutGrid.prototype, "fixedColumnWidth", void 0);
  __decorate([
      n$7({ type: String })
  ], LayoutGrid.prototype, "align", void 0);

  class LayoutGridInner extends LayoutGrid {
      getRenderClasses() {
          const classes = super.getRenderClasses();
          delete classes['mdc-layout-grid'];
          classes['mdc-layout-grid__inner'] = true;
          return classes;
      }
      renderSlot() {
          return x `
            <slot></slot>`;
      }
  }

  let MdLayoutGridInner = class MdLayoutGridInner extends LayoutGridInner {
  };
  MdLayoutGridInner.styles = [styles];
  MdLayoutGridInner = __decorate([
      e$9('md-layout-grid-inner')
  ], MdLayoutGridInner);

  let MdLayoutGrid = class MdLayoutGrid extends LayoutGrid {
  };
  MdLayoutGrid.styles = [styles];
  MdLayoutGrid = __decorate([
      e$9('md-layout-grid')
  ], MdLayoutGrid);

})();
