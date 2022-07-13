var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function m(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let w;function b(t){w=t}function I(){const t=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,r)}))}}}const E=[],T=[],S=[],D=[],x=Promise.resolve();let C=!1;function A(t){S.push(t)}const _=new Set;let N=0;function k(){const t=w;do{for(;N<E.length;){const t=E[N];N++,b(t),M(t.$$)}for(b(null),E.length=0,N=0;T.length;)T.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];_.has(e)||(_.add(e),e())}S.length=0}while(E.length);for(;D.length;)D.pop()();C=!1,_.clear(),b(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const R=new Set;let L;function O(t,e){t&&t.i&&(R.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(R.has(t))return;R.add(t),L.c.push((()=>{R.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function P(t,e){V(t,1,1,(()=>{e.delete(t.key)}))}function F(t){t&&t.c()}function B(t,e,s,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(e,s),o||A((()=>{const e=c.map(n).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),h.forEach(A)}function U(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(E.push(t),C||(C=!0,x.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,n,i,o,a,c,u,h=[-1]){const d=w;b(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let g=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),g&&q(e,t)),n})):[],f.update(),g=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(l)}else f.fragment&&f.fragment.c();n.intro&&O(e.$$.fragment),B(e,n.target,n.anchor,n.customElement),k()}b(d)}class ${$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var K=["#992C46","#7D4577","#326562","#AE8547","#4C5496","#4F8A97","#779255","#99564D","#535660","#36373E","#222328","#4D3771"];
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const G=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},z={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw Error();const c=r<<2|i>>4;if(s.push(c),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},H=function(t){return function(t){const e=G(t);return z.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class W{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Q(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X(){return"object"==typeof indexedDB}class J extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Z.prototype.create)}}class Z{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(tt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new J(s,o,n)}}const tt=/\{\$([^}]+)}/g;function et(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(nt(n)&&nt(i)){if(!et(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function nt(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function st(t){return t&&t._delegate?t._delegate:t}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rt(t,e){return new Promise(((n,s)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;s(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class it{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new ot(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new at(this._db.createObjectStore(t,e))}close(){this._db.close()}}class ot{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new at(this._transaction.objectStore(t))}}class at{constructor(t){this._store=t}index(t){return new ct(this._store.index(t))}createIndex(t,e,n){return new ct(this._store.createIndex(t,e,n))}get(t){return rt(this._store.get(t),"Error reading from IndexedDB")}put(t,e){return rt(this._store.put(t,e),"Error writing to IndexedDB")}delete(t){return rt(this._store.delete(t),"Error deleting from IndexedDB")}clear(){return rt(this._store.clear(),"Error clearing IndexedDB object store")}}class ct{constructor(t){this._index=t}get(t){return rt(this._index.get(t),"Error reading from IndexedDB")}}class ut{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ht="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new W;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:ht})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===ht?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:ht:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class dt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new lt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ft;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(ft||(ft={}));const gt={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},pt=ft.INFO,mt={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},yt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=mt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class vt{constructor(t){this.name=t,this._logLevel=pt,this._logHandler=yt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?gt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const bt="@firebase/app",It="0.7.21",Et=new vt("@firebase/app"),Tt="[DEFAULT]",St={[bt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Dt=new Map,xt=new Map;function Ct(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(xt.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;xt.set(e,t);for(const e of Dt.values())Ct(e,t);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const _t=new Z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Nt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ut("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function kt(t,e,n){var s;let r=null!==(s=St[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Et.warn(t.join(" "))}At(new ut(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mt="firebase-heartbeat-store";let Rt=null;function Lt(){var t,e,n;return Rt||(Rt=(t="firebase-heartbeat-database",e=1,n=(t,e)=>{0===e&&t.createObjectStore(Mt)},new Promise(((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=t=>{s(new it(t.target.result))},i.onerror=t=>{var e;r(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},i.onupgradeneeded=t=>{n(new it(i.result),t.oldVersion,t.newVersion,new ot(i.transaction))}}catch(t){r(`Error opening indexedDB: ${t.message}`)}}))).catch((t=>{throw _t.create("storage-open",{originalErrorMessage:t.message})}))),Rt}async function Ot(t,e){try{const n=(await Lt()).transaction(Mt,"readwrite"),s=n.objectStore(Mt);return await s.put(e,Vt(t)),n.complete}catch(t){throw _t.create("storage-set",{originalErrorMessage:t.message})}}function Vt(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ft(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ut(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=H(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ft(){return(new Date).toISOString().substring(0,10)}class Bt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!X()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await Lt()).transaction(Mt).objectStore(Mt).get(Vt(t))}catch(t){throw _t.create("storage-get",{originalErrorMessage:t.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return H(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qt;qt="",At(new ut("platform-logger",(t=>new wt(t)),"PRIVATE")),At(new ut("heartbeat",(t=>new Pt(t)),"PRIVATE")),kt(bt,It,qt),kt(bt,It,"esm2017"),kt("fire-js","");var jt,$t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Kt=Kt||{},Gt=$t||self;function zt(){}function Ht(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Wt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Qt="closure_uid_"+(1e9*Math.random()>>>0),Yt=0;function Xt(t,e,n){return t.call.apply(t.bind,arguments)}function Jt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Zt(t,e,n){return(Zt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xt:Jt).apply(null,arguments)}function te(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ee(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function ne(){this.s=this.s,this.o=this.o}var se={};ne.prototype.s=!1,ne.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Qt)&&t[Qt]||(t[Qt]=++Yt)}(this);delete se[t]}},ne.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const re=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ie=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function oe(t){return Array.prototype.concat.apply([],arguments)}function ae(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ce(t){return/^[\s\xa0]*$/.test(t)}var ue,he=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function le(t,e){return-1!=t.indexOf(e)}function de(t,e){return t<e?-1:t>e?1:0}t:{var fe=Gt.navigator;if(fe){var ge=fe.userAgent;if(ge){ue=ge;break t}}ue=""}function pe(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function me(t){const e={};for(const n in t)e[n]=t[n];return e}var ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<ye.length;e++)n=ye[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function we(t){return we[" "](t),t}we[" "]=zt;var be,Ie,Ee=le(ue,"Opera"),Te=le(ue,"Trident")||le(ue,"MSIE"),Se=le(ue,"Edge"),De=Se||Te,xe=le(ue,"Gecko")&&!(le(ue.toLowerCase(),"webkit")&&!le(ue,"Edge"))&&!(le(ue,"Trident")||le(ue,"MSIE"))&&!le(ue,"Edge"),Ce=le(ue.toLowerCase(),"webkit")&&!le(ue,"Edge");function Ae(){var t=Gt.document;return t?t.documentMode:void 0}t:{var _e="",Ne=(Ie=ue,xe?/rv:([^\);]+)(\)|;)/.exec(Ie):Se?/Edge\/([\d\.]+)/.exec(Ie):Te?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ie):Ce?/WebKit\/(\S+)/.exec(Ie):Ee?/(?:Version)[ \/]?(\S+)/.exec(Ie):void 0);if(Ne&&(_e=Ne?Ne[1]:""),Te){var ke=Ae();if(null!=ke&&ke>parseFloat(_e)){be=String(ke);break t}}be=_e}var Me,Re={};function Le(){return function(t){var e=Re;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=he(String(be)).split("."),n=he("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=de(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||de(0==r[2].length,0==i[2].length)||de(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(Gt.document&&Te){var Oe=Ae();Me=Oe||(parseInt(be,10)||void 0)}else Me=void 0;var Ve=Me,Pe=function(){if(!Gt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Gt.addEventListener("test",zt,e),Gt.removeEventListener("test",zt,e)}catch(t){}return t}();function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Be(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xe){t:{try{we(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ue[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Be.Z.h.call(this)}}Fe.prototype.h=function(){this.defaultPrevented=!0},ee(Be,Fe);var Ue={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),je=0;function $e(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++je,this.ca=this.fa=!1}function Ke(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ge(t){this.src=t,this.g={},this.h=0}function ze(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=re(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ke(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function He(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}Ge.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=He(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new $e(e,this.src,i,!!s,r)).fa=n,t.push(e)),e};var We="closure_lm_"+(1e6*Math.random()|0),Qe={};function Ye(t,e,n,s,r){if(s&&s.once)return Je(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ye(t,e[i],n,s,r);return null}return n=on(n),t&&t[qe]?t.N(e,n,Wt(s)?!!s.capture:!!s,r):Xe(t,e,n,!1,s,r)}function Xe(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Wt(r)?!!r.capture:!!r,a=sn(t);if(a||(t[We]=a=new Ge(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=nn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Pe||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(en(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Je(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Je(t,e[i],n,s,r);return null}return n=on(n),t&&t[qe]?t.O(e,n,Wt(s)?!!s.capture:!!s,r):Xe(t,e,n,!0,s,r)}function Ze(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ze(t,e[i],n,s,r);else s=Wt(s)?!!s.capture:!!s,n=on(n),t&&t[qe]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=He(i=t.g[e],n,s,r))&&(Ke(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=sn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=He(e,n,s,r)),(n=-1<t?e[t]:null)&&tn(n))}function tn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[qe])ze(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(en(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=sn(e))?(ze(n,t),0==n.h&&(n.src=null,e[We]=null)):Ke(t)}}}function en(t){return t in Qe?Qe[t]:Qe[t]="on"+t}function nn(t,e){if(t.ca)t=!0;else{e=new Be(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&tn(t),t=n.call(s,e)}return t}function sn(t){return(t=t[We])instanceof Ge?t:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function on(t){return"function"==typeof t?t:(t[rn]||(t[rn]=function(e){return t.handleEvent(e)}),t[rn])}function an(){ne.call(this),this.i=new Ge(this),this.P=this,this.I=null}function cn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var r=e;ve(e=new Fe(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=un(o,s,!0,e)&&r}if(r=un(o=e.g=t,s,!0,e)&&r,r=un(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=un(o=e.g=n[i],s,!1,e)&&r}function un(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ze(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}ee(an,ne),an.prototype[qe]=!0,an.prototype.removeEventListener=function(t,e,n,s){Ze(this,t,e,n,s)},an.prototype.M=function(){if(an.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ke(n[s]);delete e.g[t],e.h--}}this.I=null},an.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},an.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var hn=Gt.JSON.stringify;function ln(){var t=vn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var dn,fn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new gn),(t=>t.reset()));class gn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pn(t){Gt.setTimeout((()=>{throw t}),0)}function mn(t,e){dn||function(){var t=Gt.Promise.resolve(void 0);dn=function(){t.then(wn)}}(),yn||(dn(),yn=!0),vn.add(t,e)}var yn=!1,vn=new class{constructor(){this.h=this.g=null}add(t,e){const n=fn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function wn(){for(var t;t=ln();){try{t.h.call(t.g)}catch(t){pn(t)}var e=fn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yn=!1}function bn(t,e){an.call(this),this.h=t||1,this.g=e||Gt,this.j=Zt(this.kb,this),this.l=Date.now()}function In(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function En(t,e,n){if("function"==typeof t)n&&(t=Zt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Zt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Gt.setTimeout(t,e||0)}function Tn(t){t.g=En((()=>{t.g=null,t.i&&(t.i=!1,Tn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ee(bn,an),(jt=bn.prototype).da=!1,jt.S=null,jt.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),cn(this,"tick"),this.da&&(In(this),this.start()))}},jt.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},jt.M=function(){bn.Z.M.call(this),In(this),delete this.g};class Sn extends ne{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tn(this)}M(){super.M(),this.g&&(Gt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(t){ne.call(this),this.h=t,this.g={}}ee(Dn,ne);var xn=[];function Cn(t,e,n,s){Array.isArray(n)||(n&&(xn[0]=n.toString()),n=xn);for(var r=0;r<n.length;r++){var i=Ye(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function An(t){pe(t.g,(function(t,e){this.g.hasOwnProperty(e)&&tn(t)}),t),t.g={}}function _n(){this.g=!0}function Nn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return hn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Dn.prototype.M=function(){Dn.Z.M.call(this),An(this)},Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_n.prototype.Aa=function(){this.g=!1},_n.prototype.info=function(){};var kn={},Mn=null;function Rn(){return Mn=Mn||new an}function Ln(t){Fe.call(this,kn.Ma,t)}function On(t){const e=Rn();cn(e,new Ln(e,t))}function Vn(t,e){Fe.call(this,kn.STAT_EVENT,t),this.stat=e}function Pn(t){const e=Rn();cn(e,new Vn(e,t))}function Fn(t,e){Fe.call(this,kn.Na,t),this.size=e}function Bn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Gt.setTimeout((function(){t()}),e)}kn.Ma="serverreachability",ee(Ln,Fe),kn.STAT_EVENT="statevent",ee(Vn,Fe),kn.Na="timingevent",ee(Fn,Fe);var Un={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function jn(){}function $n(t){return t.h||(t.h=t.i())}function Kn(){}jn.prototype.h=null;var Gn,zn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Hn(){Fe.call(this,"d")}function Wn(){Fe.call(this,"c")}function Qn(){}function Yn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Dn(this),this.P=Jn,t=De?125:void 0,this.W=new bn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Xn}function Xn(){this.i=null,this.g="",this.h=!1}ee(Hn,Fe),ee(Wn,Fe),ee(Qn,jn),Qn.prototype.g=function(){return new XMLHttpRequest},Qn.prototype.i=function(){return{}},Gn=new Qn;var Jn=45e3,Zn={},ts={};function es(t,e,n){t.K=1,t.v=Ss(vs(e)),t.s=n,t.U=!0,ns(t,null)}function ns(t,e){t.F=Date.now(),os(t),t.A=vs(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ps(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Xn,t.g=Pr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Sn(Zt(t.Ia,t,t.g),t.O)),Cn(t.V,t.g,"readystatechange",t.gb),e=t.H?me(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),On(1),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ss(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function rs(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=is(t,n),s==ts){4==e&&(t.o=4,Pn(14),r=!1),Nn(t.j,t.m,null,"[Incomplete Response]");break}if(s==Zn){t.o=4,Pn(15),Nn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Nn(t.j,t.m,s,null),ls(t,s)}ss(t)&&s!=ts&&s!=Zn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Pn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),_r(e),e.L=!0,Pn(11))):(Nn(t.j,t.m,n,"[Invalid Chunked Response]"),hs(t),us(t))}function is(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ts:(n=Number(e.substring(n,s)),isNaN(n)?Zn:(s+=1)+n>e.length?ts:(e=e.substr(s,n),t.C=s+n,e))}function os(t){t.Y=Date.now()+t.P,as(t,t.P)}function as(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Bn(Zt(t.eb,t),e)}function cs(t){t.B&&(Gt.clearTimeout(t.B),t.B=null)}function us(t){0==t.l.G||t.I||Mr(t.l,t)}function hs(t){cs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,In(t.W),An(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ls(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||$s(n.i,t)))if(n.I=t.N,!t.J&&$s(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;kr(n),br(n)}Ar(n),Pn(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Bn(Zt(n.ab,n),6e3));if(1>=js(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Lr(n,11)}else if((t.J||n.g==t)&&kr(n),!ce(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;!i.g&&(le(t,"spdy")||le(t,"quic")||le(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ks(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Ts(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Vr(s,s.H?s.la:null,s.W),o.J){Gs(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(cs(a),os(a)),s.g=o}else Cr(s);0<n.l.length&&Tr(n)}else"stop"!=u[0]&&"close"!=u[0]||Lr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Lr(n,7):wr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}On(4)}catch(t){}}function ds(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ht(t)||"string"==typeof t)ie(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Ht(t)||"string"==typeof t){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Ht(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function fs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof fs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function gs(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ps(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)ps(r,s=t.g[e])||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}function ps(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(jt=Yn.prototype).setTimeout=function(t){this.P=t},jt.gb=function(t){t=t.target;const e=this.L;e&&3==gr(t)?e.l():this.Ia(t)},jt.Ia=function(t){try{if(t==this.g)t:{const h=gr(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||De||this.g&&(this.h.h||this.g.ga()||pr(this.g)))){this.I||4!=h||7==e||On(8==e||0>=l?3:2),cs(this);var n=this.g.ba();this.N=n;e:if(ss(this)){var s=pr(this.g);t="";var r=s.length,i=4==gr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){hs(this),us(this);var o="";break e}this.h.i=new Gt.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Pn(12),hs(this),us(this);break t}Nn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ls(this,n)}this.U?(rs(this,h,o),De&&this.i&&3==h&&(Cn(this.V,this.W,"tick",this.fb),this.W.start())):(Nn(this.j,this.m,o,null),ls(this,o)),4==h&&hs(this),this.i&&!this.I&&(4==h?Mr(this.l,this):(this.i=!1,os(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Pn(12)):(this.o=0,Pn(13)),hs(this),us(this)}}}catch(t){}},jt.fb=function(){if(this.g){var t=gr(this.g),e=this.g.ga();this.C<e.length&&(cs(this),rs(this,t,e),this.i&&4!=t&&os(this))}},jt.cancel=function(){this.I=!0,hs(this)},jt.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(On(3),Pn(17)),hs(this),this.o=2,us(this)):as(this,this.Y-t)},(jt=fs.prototype).R=function(){gs(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},jt.T=function(){return gs(this),this.g.concat()},jt.get=function(t,e){return ps(this.h,t)?this.h[t]:e},jt.set=function(t,e){ps(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},jt.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};var ms=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ys(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ys){this.g=void 0!==e?e:t.g,ws(this,t.j),this.s=t.s,bs(this,t.i),Is(this,t.m),this.l=t.l,e=t.h;var n=new Rs;n.i=e.i,e.g&&(n.g=new fs(e.g),n.h=e.h),Es(this,n),this.o=t.o}else t&&(n=String(t).match(ms))?(this.g=!!e,ws(this,n[1]||"",!0),this.s=Ds(n[2]||""),bs(this,n[3]||"",!0),Is(this,n[4]),this.l=Ds(n[5]||"",!0),Es(this,n[6]||"",!0),this.o=Ds(n[7]||"")):(this.g=!!e,this.h=new Rs(null,this.g))}function vs(t){return new ys(t)}function ws(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bs(t,e,n){t.i=n?Ds(e,!0):e}function Is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Es(t,e,n){e instanceof Rs?(t.h=e,function(t,e){e&&!t.j&&(Ls(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Os(this,e),Ps(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=xs(e,ks)),t.h=new Rs(e,t.g))}function Ts(t,e,n){t.h.set(e,n)}function Ss(t){return Ts(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Cs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Cs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ys.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xs(e,As,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(xs(e,As,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(xs(n,"/"==n.charAt(0)?Ns:_s,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xs(n,Ms)),t.join("")};var As=/[#\/\?@]/g,_s=/[#\?:]/g,Ns=/[#\?]/g,ks=/[#\?@]/g,Ms=/#/g;function Rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ls(t){t.g||(t.g=new fs,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Os(t,e){Ls(t),e=Fs(t,e),ps(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ps((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&gs(t)))}function Vs(t,e){return Ls(t),e=Fs(t,e),ps(t.g.h,e)}function Ps(t,e,n){Os(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),ae(n)),t.h+=n.length)}function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(jt=Rs.prototype).add=function(t,e){Ls(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},jt.forEach=function(t,e){Ls(this),this.g.forEach((function(n,s){ie(n,(function(n){t.call(e,n,s,this)}),this)}),this)},jt.T=function(){Ls(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n},jt.R=function(t){Ls(this);var e=[];if("string"==typeof t)Vs(this,t)&&(e=oe(e,this.g.get(Fs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=oe(e,t[n])}return e},jt.set=function(t,e){return Ls(this),this.i=null,Vs(this,t=Fs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},jt.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},jt.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Bs(t){this.l=t||Us,Gt.PerformanceNavigationTiming?t=0<(t=Gt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Gt.g&&Gt.g.Ea&&Gt.g.Ea()&&Gt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Us=10;function qs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function js(t){return t.h?1:t.g?t.g.size:0}function $s(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ks(t,e){t.g?t.g.add(e):t.h=e}function Gs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function zs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ae(t.i)}function Hs(){}function Ws(){this.g=new Hs}function Qs(t,e,n){const s=n||"";try{ds(t,(function(t,n){let r=t;Wt(t)&&(r=hn(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Ys(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function Xs(t){this.l=t.$b||null,this.j=t.ib||!1}function Js(t,e){an.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bs.prototype.cancel=function(){if(this.i=zs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Hs.prototype.stringify=function(t){return Gt.JSON.stringify(t,void 0)},Hs.prototype.parse=function(t){return Gt.JSON.parse(t,void 0)},ee(Xs,jn),Xs.prototype.g=function(){return new Js(this.l,this.j)},Xs.prototype.i=function(t){return function(){return t}}({}),ee(Js,an);var Zs=0;function tr(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function er(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nr(t)}function nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(jt=Js.prototype).open=function(t,e){if(this.readyState!=Zs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nr(this)},jt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Gt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},jt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,er(this)),this.readyState=Zs},jt.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Gt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tr(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},jt.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?er(this):nr(this),3==this.readyState&&tr(this)}},jt.Ua=function(t){this.g&&(this.response=this.responseText=t,er(this))},jt.Ta=function(t){this.g&&(this.response=t,er(this))},jt.ha=function(){this.g&&er(this)},jt.setRequestHeader=function(t,e){this.v.append(t,e)},jt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},jt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Js.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var sr=Gt.JSON.parse;function rr(t){an.call(this),this.headers=new fs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ir,this.K=this.L=!1}ee(rr,an);var ir="",or=/^https?$/i,ar=["POST","PUT"];function cr(t){return"content-type"==t.toLowerCase()}function ur(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hr(t),dr(t)}function hr(t){t.D||(t.D=!0,cn(t,"complete"),cn(t,"error"))}function lr(t){if(t.h&&void 0!==Kt&&(!t.C[1]||4!=gr(t)||2!=t.ba()))if(t.v&&4==gr(t))En(t.Fa,0,t);else if(cn(t,"readystatechange"),4==gr(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.H).match(ms)[1]||null;if(!r&&Gt.self&&Gt.self.location){var i=Gt.self.location.protocol;r=i.substr(0,i.length-1)}s=!or.test(r?r.toLowerCase():"")}n=s}if(n)cn(t,"complete"),cn(t,"success");else{t.m=6;try{var o=2<gr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",hr(t)}}finally{dr(t)}}}function dr(t,e){if(t.g){fr(t);const n=t.g,s=t.C[0]?zt:null;t.g=null,t.C=null,e||cn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function fr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Gt.clearTimeout(t.A),t.A=null)}function gr(t){return t.g?t.g.readyState:0}function pr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ir:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function mr(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return pe(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ts(t,e,n))}function yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vr(t){this.za=0,this.l=[],this.h=new _n,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=yr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=yr("baseRetryDelayMs",5e3,t),this.$a=yr("retryDelaySeedMs",1e4,t),this.Ya=yr("forwardChannelMaxRetries",2,t),this.ra=yr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Bs(t&&t.concurrentRequestLimit),this.Ca=new Ws,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function wr(t){if(Ir(t),3==t.G){var e=t.V++,n=vs(t.F);Ts(n,"SID",t.J),Ts(n,"RID",e),Ts(n,"TYPE","terminate"),Dr(t,n),(e=new Yn(t,t.h,e,void 0)).K=2,e.v=Ss(vs(n)),n=!1,Gt.navigator&&Gt.navigator.sendBeacon&&(n=Gt.navigator.sendBeacon(e.v.toString(),"")),!n&&Gt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Pr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),os(e)}Or(t)}function br(t){t.g&&(_r(t),t.g.cancel(),t.g=null)}function Ir(t){br(t),t.u&&(Gt.clearTimeout(t.u),t.u=null),kr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Gt.clearTimeout(t.m),t.m=null)}function Er(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Tr(t)}function Tr(t){qs(t.i)||t.m||(t.m=!0,mn(t.Ha,t),t.C=0)}function Sr(t,e){var n;n=e?e.m:t.V++;const s=vs(t.F);Ts(s,"SID",t.J),Ts(s,"RID",n),Ts(s,"AID",t.U),Dr(t,s),t.o&&t.s&&mr(s,t.o,t.s),n=new Yn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ks(t.i,n),es(n,s,e)}function Dr(t,e){t.j&&ds({},(function(t,n){Ts(e,n,t)}))}function xr(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Zt(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Qs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Cr(t){t.g||t.u||(t.Y=1,mn(t.Ga,t),t.A=0)}function Ar(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Bn(Zt(t.Ga,t),Rr(t,t.A)),t.A++,!0)}function _r(t){null!=t.B&&(Gt.clearTimeout(t.B),t.B=null)}function Nr(t){t.g=new Yn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=vs(t.oa);Ts(e,"RID","rpc"),Ts(e,"SID",t.J),Ts(e,"CI",t.N?"0":"1"),Ts(e,"AID",t.U),Dr(t,e),Ts(e,"TYPE","xmlhttp"),t.o&&t.s&&mr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ss(vs(e)),n.s=null,n.U=!0,ns(n,t)}function kr(t){null!=t.v&&(Gt.clearTimeout(t.v),t.v=null)}function Mr(t,e){var n=null;if(t.g==e){kr(t),_r(t),t.g=null;var s=2}else{if(!$s(t.i,e))return;n=e.D,Gs(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;cn(s=Rn(),new Fn(s,n,e,r)),Tr(t)}else Cr(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==s&&function(t,e){return!(js(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Bn(Zt(t.Ha,t,e),Rr(t,t.C)),t.C++,0)))}(t,e)||2==s&&Ar(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Lr(t,5);break;case 4:Lr(t,10);break;case 3:Lr(t,6);break;default:Lr(t,2)}}function Rr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Lr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Zt(t.jb,t);n||(n=new ys("//www.google.com/images/cleardot.gif"),Gt.location&&"http"==Gt.location.protocol||ws(n,"https"),Ss(n)),function(t,e){const n=new _n;if(Gt.Image){const s=new Image;s.onload=te(Ys,n,s,"TestLoadImage: loaded",!0,e),s.onerror=te(Ys,n,s,"TestLoadImage: error",!1,e),s.onabort=te(Ys,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=te(Ys,n,s,"TestLoadImage: timeout",!1,e),Gt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Pn(2);t.G=0,t.j&&t.j.va(e),Or(t),Ir(t)}function Or(t){t.G=0,t.I=-1,t.j&&(0==zs(t.i).length&&0==t.l.length||(t.i.i.length=0,ae(t.l),t.l.length=0),t.j.ua())}function Vr(t,e,n){let s=function(t){return t instanceof ys?vs(t):new ys(t,void 0)}(n);if(""!=s.i)e&&bs(s,e+"."+s.i),Is(s,s.m);else{const t=Gt.location;s=function(t,e,n,s){var r=new ys(null,void 0);return t&&ws(r,t),e&&bs(r,e),n&&Is(r,n),s&&(r.l=s),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&pe(t.aa,(function(t,e){Ts(s,e,t)})),e=t.D,n=t.sa,e&&n&&Ts(s,e,n),Ts(s,"VER",t.ma),Dr(t,s),s}function Pr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new rr(new Xs({ib:!0})):new rr(t.qa)).L=t.H,e}function Fr(){}function Br(){if(Te&&!(10<=Number(Ve)))throw Error("Environmental error: no available transport.")}function Ur(t,e){an.call(this),this.g=new vr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ce(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ce(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new $r(this)}function qr(t){Hn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jr(){Wn.call(this),this.status=1}function $r(t){this.g=t}(jt=rr.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gn.g(),this.C=this.u?$n(this.u):$n(Gn),this.g.onreadystatechange=Zt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ur(this,t)}t=n||"";const r=new fs(this.headers);s&&ds(s,(function(t,e){r.set(e,t)})),s=function(t){t:{var e=cr;const n=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=Gt.FormData&&t instanceof Gt.FormData,!(0<=re(ar,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fr(this),0<this.B&&((this.K=function(t){return Te&&Le()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zt(this.pa,this)):this.A=En(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ur(this,t)}},jt.pa=function(){void 0!==Kt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,cn(this,"timeout"),this.abort(8))},jt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,cn(this,"complete"),cn(this,"abort"),dr(this))},jt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dr(this,!0)),rr.Z.M.call(this)},jt.Fa=function(){this.s||(this.F||this.v||this.l?lr(this):this.cb())},jt.cb=function(){lr(this)},jt.ba=function(){try{return 2<gr(this)?this.g.status:-1}catch(t){return-1}},jt.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},jt.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),sr(e)}},jt.Da=function(){return this.m},jt.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(jt=vr.prototype).ma=8,jt.G=1,jt.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},jt.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Yn(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=me(i),ve(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xr(this,r,e),Ts(n=vs(this.F),"RID",t),Ts(n,"CVER",22),this.D&&Ts(n,"X-HTTP-Session-Id",this.D),Dr(this,n),this.o&&i&&mr(n,this.o,i),Ks(this.i,r),this.Ra&&Ts(n,"TYPE","init"),this.ja?(Ts(n,"$req",e),Ts(n,"SID","null"),r.$=!0,es(r,n,null)):es(r,n,e),this.G=2}}else 3==this.G&&(t?Sr(this,t):0==this.l.length||qs(this.i)||Sr(this))},jt.Ga=function(){if(this.u=null,Nr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Bn(Zt(this.bb,this),t)}},jt.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pn(10),br(this),Nr(this))},jt.ab=function(){null!=this.v&&(this.v=null,br(this),Ar(this),Pn(19))},jt.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pn(2)):(this.h.info("Failed to ping google.com"),Pn(1))},(jt=Fr.prototype).xa=function(){},jt.wa=function(){},jt.va=function(){},jt.ua=function(){},jt.Oa=function(){},Br.prototype.g=function(t,e){return new Ur(t,e)},ee(Ur,an),Ur.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),mn(Zt(t.hb,t,e))),Pn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Vr(t,null,t.W),Tr(t)},Ur.prototype.close=function(){wr(this.g)},Ur.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Er(this.g,e)}else this.v?((e={}).__data__=hn(t),Er(this.g,e)):Er(this.g,t)},Ur.prototype.M=function(){this.g.j=null,delete this.j,wr(this.g),delete this.g,Ur.Z.M.call(this)},ee(qr,Hn),ee(jr,Wn),ee($r,Fr),$r.prototype.xa=function(){cn(this.g,"a")},$r.prototype.wa=function(t){cn(this.g,new qr(t))},$r.prototype.va=function(t){cn(this.g,new jr(t))},$r.prototype.ua=function(){cn(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Ur.prototype.send=Ur.prototype.u,Ur.prototype.open=Ur.prototype.m,Ur.prototype.close=Ur.prototype.close,Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,qn.COMPLETE="complete",Kn.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",an.prototype.listen=an.prototype.N,rr.prototype.listenOnce=rr.prototype.O,rr.prototype.getLastError=rr.prototype.La,rr.prototype.getLastErrorCode=rr.prototype.Da,rr.prototype.getStatus=rr.prototype.ba,rr.prototype.getResponseJson=rr.prototype.Qa,rr.prototype.getResponseText=rr.prototype.ga,rr.prototype.send=rr.prototype.ea;var Kr=Un,Gr=qn,zr=kn,Hr=10,Wr=11,Qr=Xs,Yr=Kn,Xr=rr;const Jr="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Zr.UNAUTHENTICATED=new Zr(null),Zr.GOOGLE_CREDENTIALS=new Zr("google-credentials-uid"),Zr.FIRST_PARTY=new Zr("first-party-uid"),Zr.MOCK_USER=new Zr("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ti="9.6.11";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ei=new vt("@firebase/firestore");function ni(){return ei.logLevel}function si(t,...e){if(ei.logLevel<=ft.DEBUG){const n=e.map(oi);ei.debug(`Firestore (${ti}): ${t}`,...n)}}function ri(t,...e){if(ei.logLevel<=ft.ERROR){const n=e.map(oi);ei.error(`Firestore (${ti}): ${t}`,...n)}}function ii(t,...e){if(ei.logLevel<=ft.WARN){const n=e.map(oi);ei.warn(`Firestore (${ti}): ${t}`,...n)}}function oi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ai(t="Unexpected state"){const e=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+t;throw ri(e),new Error(e)}function ci(t,e){t||ai()}function ui(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends J{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class di{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Zr.UNAUTHENTICATED)))}shutdown(){}}class pi{constructor(t){this.t=t,this.currentUser=Zr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new di;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new di,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{si("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(si("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new di)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(si("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ci("string"==typeof e.accessToken),new fi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ci(null===t||"string"==typeof t),new Zr(t)}}class mi{constructor(t,e,n){this.type="FirstParty",this.user=Zr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class yi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new mi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Zr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&si("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,si("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{si("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):si("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ci("string"==typeof t.token),this.p=t.token,new vi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ii(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */bi.A=-1;class Ei{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ii(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function Ti(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}function Di(t){return t+"\0"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new li(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new li(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new li(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new li(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return xi.fromMillis(Date.now())}static fromDate(t){return xi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new xi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ti(this.nanoseconds,t.nanoseconds):Ti(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ci{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ci(t)}static min(){return new Ci(new xi(0,0))}static max(){return new Ci(new xi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ai(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ki{constructor(t,e,n){void 0===e?e=0:e>t.length&&ai(),void 0===n?n=t.length-e:n>t.length-e&&ai(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ki.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ki?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Mi extends ki{construct(t,e,n){return new Mi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new li(hi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Mi(e)}static emptyPath(){return new Mi([])}}const Ri=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Li extends ki{construct(t,e,n){return new Li(t,e,n)}static isValidIdentifier(t){return Ri.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Li.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Li(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new li(hi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new li(hi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new li(hi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new li(hi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Li(e)}static emptyPath(){return new Li([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oi{constructor(t){this.fields=t,t.sort(Li.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Si(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Vi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Vi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ti(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vi.EMPTY_BYTE_STRING=new Vi("");const Pi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(t){if(ci(!!t),"string"==typeof t){let e=0;const n=Pi.exec(t);if(ci(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Bi(t.seconds),nanos:Bi(t.nanos)}}function Bi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ui(t){return"string"==typeof t?Vi.fromBase64String(t):Vi.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ji(t){const e=t.mapValue.fields.__previous_value__;return qi(e)?ji(e):e}function $i(t){const e=Fi(t.mapValue.fields.__local_write_time__.timestampValue);return new xi(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ki{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Gi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Gi&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zi(t){return null==t}function Hi(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wi{constructor(t){this.path=t}static fromPath(t){return new Wi(Mi.fromString(t))}static fromName(t){return new Wi(Mi.fromString(t).popFirst(5))}static empty(){return new Wi(Mi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Mi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Mi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Wi(new Mi(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yi={nullValue:"NULL_VALUE"};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:lo(t)?9:10:ai()}function Ji(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $i(t).isEqual($i(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fi(t.timestampValue),s=Fi(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ui(t.bytesValue).isEqual(Ui(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Bi(t.geoPointValue.latitude)===Bi(e.geoPointValue.latitude)&&Bi(t.geoPointValue.longitude)===Bi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Bi(t.integerValue)===Bi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Bi(t.doubleValue),s=Bi(e.doubleValue);return n===s?Hi(n)===Hi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ai(n)!==Ai(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Ji(n[t],s[t])))return!1;return!0}(t,e);default:return ai()}}function Zi(t,e){return void 0!==(t.values||[]).find((t=>Ji(t,e)))}function to(t,e){if(t===e)return 0;const n=Xi(t),s=Xi(e);if(n!==s)return Ti(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ti(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Bi(t.integerValue||t.doubleValue),s=Bi(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return eo(t.timestampValue,e.timestampValue);case 4:return eo($i(t),$i(e));case 5:return Ti(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ui(t),s=Ui(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Ti(n[t],s[t]);if(0!==e)return e}return Ti(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ti(Bi(t.latitude),Bi(e.latitude));return 0!==n?n:Ti(Bi(t.longitude),Bi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=to(n[t],s[t]);if(e)return e}return Ti(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=Ti(s[t],i[t]);if(0!==e)return e;const o=to(n[s[t]],r[i[t]]);if(0!==o)return o}return Ti(s.length,i.length)}(t.mapValue,e.mapValue);default:throw ai()}}function eo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ti(t,e);const n=Fi(t),s=Fi(e),r=Ti(n.seconds,s.seconds);return 0!==r?r:Ti(n.nanos,s.nanos)}function no(t){return so(t)}function so(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Wi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=so(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${so(t.fields[r])}`;return n+"}"}(t.mapValue):ai();var e,n}function ro(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function io(t){return!!t&&"integerValue"in t}function oo(t){return!!t&&"arrayValue"in t}function ao(t){return!!t&&"nullValue"in t}function co(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uo(t){return!!t&&"mapValue"in t}function ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ho(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function fo(t){return"nullValue"in t?Yi:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ro(Gi.empty(),Wi.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:ai()}function go(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ro(Gi.empty(),Wi.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Qi:ai()}function po(t,e){return void 0===t?e:void 0===e||to(t,e)>0?t:e}function mo(t,e){return void 0===t?e:void 0===e||to(t,e)<0?t:e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yo{constructor(t){this.value=t}static empty(){return new yo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!uo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ho(e)}setAll(t){let e=Li.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=ho(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());uo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ji(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){_i(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new yo(ho(this.value))}}function vo(t){const e=[];return _i(t.fields,((t,n)=>{const s=new Li([t]);if(uo(n)){const t=vo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Oi(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class wo{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new wo(t,0,Ci.min(),Ci.min(),yo.empty(),0)}static newFoundDocument(t,e,n){return new wo(t,1,e,Ci.min(),n,0)}static newNoDocument(t,e){return new wo(t,2,e,Ci.min(),yo.empty(),0)}static newUnknownDocument(t,e){return new wo(t,3,e,Ci.min(),yo.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof wo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class bo{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Io(t){return t.fields.find((t=>2===t.kind))}function Eo(t){return t.fields.filter((t=>2!==t.kind))}bo.UNKNOWN_ID=-1;class To{constructor(t,e){this.fieldPath=t,this.kind=e}}class So{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new So(0,xo.min())}}function Do(t){return new xo(t.readTime,t.key,-1)}class xo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xo(Ci.min(),Wi.empty(),-1)}static max(){return new xo(Ci.max(),Wi.empty(),-1)}}function Co(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Wi.comparator(t.documentKey,e.documentKey),0!==n?n:Ti(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ao{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.P=null}}function _o(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ao(t,e,n,s,r,i,o)}function No(t){const e=ui(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+no(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>no(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>no(t))).join(",")),e.P=t}return e.P}function ko(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ho(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ji(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qo(t.startAt,e.startAt)&&Qo(t.endAt,e.endAt)}function Mo(t){return Wi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Ro(t,e){return t.filters.filter((t=>t instanceof Vo&&t.field.isEqual(e)))}function Lo(t,e,n){let s,r=!0;for(const n of Ro(t,e)){let t,e=!0;switch(n.op){case"<":case"<=":t=fo(n.value);break;case"==":case"in":case">=":t=n.value;break;case">":t=n.value,e=!1;break;case"!=":case"not-in":t=Yi}po(s,t)===t&&(s=t,r=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];po(s,t)===t&&(s=t,r=n.inclusive);break}return{value:s,inclusive:r}}function Oo(t,e,n){let s,r=!0;for(const n of Ro(t,e)){let t,e=!0;switch(n.op){case">=":case">":t=go(n.value),e=!1;break;case"==":case"in":case"<=":t=n.value;break;case"<":t=n.value,e=!1;break;case"!=":case"not-in":t=Qi}mo(s,t)===t&&(s=t,r=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];mo(s,t)===t&&(s=t,r=n.inclusive);break}return{value:s,inclusive:r}}class Vo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Po(t,e,n):"array-contains"===e?new qo(t,n):"in"===e?new jo(t,n):"not-in"===e?new $o(t,n):"array-contains-any"===e?new Ko(t,n):new Vo(t,e,n)}static V(t,e,n){return"in"===e?new Fo(t,n):new Bo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(to(e,this.value)):null!==e&&Xi(this.value)===Xi(e)&&this.v(to(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ai()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Po extends Vo{constructor(t,e,n){super(t,e,n),this.key=Wi.fromName(n.referenceValue)}matches(t){const e=Wi.comparator(t.key,this.key);return this.v(e)}}class Fo extends Vo{constructor(t,e){super(t,"in",e),this.keys=Uo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Bo extends Vo{constructor(t,e){super(t,"not-in",e),this.keys=Uo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Uo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Wi.fromName(t.referenceValue)))}class qo extends Vo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oo(e)&&Zi(e.arrayValue,this.value)}}class jo extends Vo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zi(this.value.arrayValue,e)}}class $o extends Vo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zi(this.value.arrayValue,e)}}class Ko extends Vo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zi(this.value.arrayValue,t)))}}class Go{constructor(t,e){this.position=t,this.inclusive=e}}class zo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ho(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wo(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Wi.comparator(Wi.fromName(o.referenceValue),n.key):to(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Qo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ji(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yo{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Xo(t){return new Yo(t)}function Jo(t){return!zi(t.limit)&&"F"===t.limitType}function Zo(t){return!zi(t.limit)&&"L"===t.limitType}function ta(t){const e=ui(t);if(null===e.D){e.D=[];const t=function(t){for(const e of t.filters)if(e.S())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new zo(t)),e.D.push(new zo(Li.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new zo(Li.keyField(),t))}}}return e.D}function ea(t){const e=ui(t);if(!e.C)if("F"===e.limitType)e.C=_o(e.path,e.collectionGroup,ta(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ta(e)){const e="desc"===n.dir?"asc":"desc";t.push(new zo(n.field,e))}const n=e.endAt?new Go(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Go(e.startAt.position,!e.startAt.inclusive):null;e.C=_o(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function na(t,e){return ko(ea(t),ea(e))&&t.limitType===e.limitType}function sa(t){return`${No(ea(t))}|lt:${t.limitType}`}function ra(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${no(e.value)}`;var e})).join(", ")}]`),zi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>no(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>no(t))).join(",")),`Target(${e})`}(ea(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Wi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Wo(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ta(t),e))&&!(t.endAt&&!function(t,e,n){const s=Wo(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ta(t),e))}(t,e)}function oa(t){return(e,n)=>{let s=!1;for(const r of ta(t)){const t=aa(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function aa(t,e,n){const s=t.field.isKeyField()?Wi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?to(s,r):ai()}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ai()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ca(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function ua(t){return{integerValue:""+t}}function ha(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Hi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ua(e):ca(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class la{constructor(){this._=void 0}}function da(t,e,n){return t instanceof pa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ma?ya(t,e):t instanceof va?wa(t,e):function(t,e){const n=ga(t,e),s=Ia(n)+Ia(t.k);return io(n)&&io(t.k)?ua(s):ca(t.M,s)}(t,e)}function fa(t,e,n){return t instanceof ma?ya(t,e):t instanceof va?wa(t,e):n}function ga(t,e){return t instanceof ba?io(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class pa extends la{}class ma extends la{constructor(t){super(),this.elements=t}}function ya(t,e){const n=Ea(e);for(const e of t.elements)n.some((t=>Ji(t,e)))||n.push(e);return{arrayValue:{values:n}}}class va extends la{constructor(t){super(),this.elements=t}}function wa(t,e){let n=Ea(e);for(const e of t.elements)n=n.filter((t=>!Ji(t,e)));return{arrayValue:{values:n}}}class ba extends la{constructor(t,e){super(),this.M=t,this.k=e}}function Ia(t){return Bi(t.integerValue||t.doubleValue)}function Ea(t){return oo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ta{constructor(t,e){this.field=t,this.transform=e}}class Sa{constructor(t,e){this.version=t,this.transformResults=e}}class Da{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Da}static exists(t){return new Da(void 0,t)}static updateTime(t){return new Da(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ca{}function Aa(t,e,n){t instanceof Ra?function(t,e,n){const s=t.value.clone(),r=Va(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof La?function(t,e,n){if(!xa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Va(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Oa(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n){t instanceof Ra?function(t,e,n){if(!xa(t.precondition,e))return;const s=t.value.clone(),r=Pa(t.fieldTransforms,n,e);s.setAll(r),e.convertToFoundDocument(Ma(e),s).setHasLocalMutations()}(t,e,n):t instanceof La?function(t,e,n){if(!xa(t.precondition,e))return;const s=Pa(t.fieldTransforms,n,e),r=e.data;r.setAll(Oa(t)),r.setAll(s),e.convertToFoundDocument(Ma(e),r).setHasLocalMutations()}(t,e,n):function(t,e){xa(t.precondition,e)&&e.convertToNoDocument(Ci.min())}(t,e)}function Na(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=ga(s.transform,t||null);null!=r&&(null==n&&(n=yo.empty()),n.set(s.field,r))}return n||null}function ka(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Si(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ma&&e instanceof ma||t instanceof va&&e instanceof va?Si(t.elements,e.elements,Ji):t instanceof ba&&e instanceof ba?Ji(t.k,e.k):t instanceof pa&&e instanceof pa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ma(t){return t.isFoundDocument()?t.version:Ci.min()}class Ra extends Ca{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class La extends Ca{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Oa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Va(t,e,n){const s=new Map;ci(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,fa(o,a,n[r]))}return s}function Pa(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,da(t,i,e))}return s}class Fa extends Ca{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ba extends Ca{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qa,ja;function $a(t){if(void 0===t)return ri("GRPC error has no .code"),hi.UNKNOWN;switch(t){case qa.OK:return hi.OK;case qa.CANCELLED:return hi.CANCELLED;case qa.UNKNOWN:return hi.UNKNOWN;case qa.DEADLINE_EXCEEDED:return hi.DEADLINE_EXCEEDED;case qa.RESOURCE_EXHAUSTED:return hi.RESOURCE_EXHAUSTED;case qa.INTERNAL:return hi.INTERNAL;case qa.UNAVAILABLE:return hi.UNAVAILABLE;case qa.UNAUTHENTICATED:return hi.UNAUTHENTICATED;case qa.INVALID_ARGUMENT:return hi.INVALID_ARGUMENT;case qa.NOT_FOUND:return hi.NOT_FOUND;case qa.ALREADY_EXISTS:return hi.ALREADY_EXISTS;case qa.PERMISSION_DENIED:return hi.PERMISSION_DENIED;case qa.FAILED_PRECONDITION:return hi.FAILED_PRECONDITION;case qa.ABORTED:return hi.ABORTED;case qa.OUT_OF_RANGE:return hi.OUT_OF_RANGE;case qa.UNIMPLEMENTED:return hi.UNIMPLEMENTED;case qa.DATA_LOSS:return hi.DATA_LOSS;default:return ai()}}(ja=qa||(qa={}))[ja.OK=0]="OK",ja[ja.CANCELLED=1]="CANCELLED",ja[ja.UNKNOWN=2]="UNKNOWN",ja[ja.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ja[ja.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ja[ja.NOT_FOUND=5]="NOT_FOUND",ja[ja.ALREADY_EXISTS=6]="ALREADY_EXISTS",ja[ja.PERMISSION_DENIED=7]="PERMISSION_DENIED",ja[ja.UNAUTHENTICATED=16]="UNAUTHENTICATED",ja[ja.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ja[ja.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ja[ja.ABORTED=10]="ABORTED",ja[ja.OUT_OF_RANGE=11]="OUT_OF_RANGE",ja[ja.UNIMPLEMENTED=12]="UNIMPLEMENTED",ja[ja.INTERNAL=13]="INTERNAL",ja[ja.UNAVAILABLE=14]="UNAVAILABLE",ja[ja.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ka{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_i(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Ni(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ga{constructor(t,e){this.comparator=t,this.root=e||Ha.EMPTY}insert(t,e){return new Ga(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ha.BLACK,null,null))}remove(t){return new Ga(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ha.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new za(this.root,t,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new za(this.root,t,this.comparator,!0)}}class za{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ha{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Ha.RED,this.left=null!=s?s:Ha.EMPTY,this.right=null!=r?r:Ha.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Ha(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ha.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ha.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ha.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ha.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ai();if(this.right.isRed())throw ai();const t=this.left.check();if(t!==this.right.check())throw ai();return t+(this.isRed()?0:1)}}Ha.EMPTY=null,Ha.RED=!0,Ha.BLACK=!1,Ha.EMPTY=new class{constructor(){this.size=0}get key(){throw ai()}get value(){throw ai()}get color(){throw ai()}get left(){throw ai()}get right(){throw ai()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ha(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wa{constructor(t){this.comparator=t,this.data=new Ga(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qa(this.data.getIterator())}getIteratorFrom(t){return new Qa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Wa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Wa(this.comparator);return e.data=t,e}}class Qa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ya(t){return t.hasNext()?t.getNext():void 0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xa=new Ga(Wi.comparator);function Ja(){return Xa}const Za=new Ga(Wi.comparator);function tc(){return Za}function ec(){return new Ka((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nc=new Ga(Wi.comparator),sc=new Wa(Wi.comparator);function rc(...t){let e=sc;for(const n of t)e=e.add(n);return e}const ic=new Wa(Ti);function oc(){return ic}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ac{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,cc.createSynthesizedTargetChangeForCurrentChange(t,e)),new ac(Ci.min(),n,oc(),Ja(),rc())}}class cc{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new cc(Vi.EMPTY_BYTE_STRING,e,rc(),rc(),rc())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uc{constructor(t,e,n,s){this.O=t,this.removedTargetIds=e,this.key=n,this.F=s}}class hc{constructor(t,e){this.targetId=t,this.$=e}}class lc{constructor(t,e,n=Vi.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class dc{constructor(){this.B=0,this.L=pc(),this.U=Vi.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=rc(),e=rc(),n=rc();return this.L.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ai()}})),new cc(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=pc()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class fc{constructor(t){this.nt=t,this.st=new Map,this.it=Ja(),this.rt=gc(),this.ot=new Wa(Ti)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:ai()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,s=this.wt(e);if(s){const t=s.target;if(Mo(t))if(0===n){const n=new Wi(t.path);this.ct(e,n,wo.newNoDocument(n,Ci.min()))}else ci(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const r=this.wt(s);if(r){if(n.current&&Mo(r.target)){const e=new Wi(r.target.path);null!==this.it.get(e)||this.It(s,e)||this.ct(s,e,wo.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=rc();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new ac(t,e,this.ot,this.it,n);return this.it=Ja(),this.rt=gc(),this.ot=new Wa(Ti),s}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new dc,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Wa(Ti),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||si("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new dc),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function gc(){return new Ga(Wi.comparator)}function pc(){return new Ga(Wi.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mc={asc:"ASCENDING",desc:"DESCENDING"},yc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class vc{constructor(t,e){this.databaseId=t,this.N=e}}function wc(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bc(t,e){return t.N?e.toBase64():e.toUint8Array()}function Ic(t,e){return wc(t,e.toTimestamp())}function Ec(t){return ci(!!t),Ci.fromTimestamp(function(t){const e=Fi(t);return new xi(e.seconds,e.nanos)}(t))}function Tc(t,e){return function(t){return new Mi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sc(t){const e=Mi.fromString(t);return ci(Gc(e)),e}function Dc(t,e){return Tc(t.databaseId,e.path)}function xc(t,e){const n=Sc(e);if(n.get(1)!==t.databaseId.projectId)throw new li(hi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new li(hi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Wi(Nc(n))}function Cc(t,e){return Tc(t.databaseId,e)}function Ac(t){const e=Sc(t);return 4===e.length?Mi.emptyPath():Nc(e)}function _c(t){return new Mi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nc(t){return ci(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function kc(t,e,n){return{name:Dc(t,e),fields:n.value.mapValue.fields}}function Mc(t,e){let n;if(e instanceof Ra)n={update:kc(t,e.key,e.value)};else if(e instanceof Fa)n={delete:Dc(t,e.key)};else if(e instanceof La)n={update:kc(t,e.key,e.data),updateMask:Kc(e.fieldMask)};else{if(!(e instanceof Ba))return ai();n={verify:Dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof pa)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ma)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof va)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ba)return{fieldPath:e.field.canonicalString(),increment:n.k};throw ai()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ic(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ai()}(t,e.precondition)),n}function Rc(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Da.updateTime(Ec(t.updateTime)):void 0!==t.exists?Da.exists(t.exists):Da.none()}(e.currentDocument):Da.none(),s=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)ci("REQUEST_TIME"===e.setToServerValue),n=new pa;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ma(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new va(t)}else"increment"in e?n=new ba(t,e.increment):ai();const s=Li.fromServerFormat(e.fieldPath);return new Ta(s,n)}(t,e))):[];if(e.update){e.update.name;const r=xc(t,e.update.name),i=new yo({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new Oi(e.map((t=>Li.fromServerFormat(t))))}(e.updateMask);return new La(r,i,t,n,s)}return new Ra(r,i,n,s)}if(e.delete){const s=xc(t,e.delete);return new Fa(s,n)}if(e.verify){const s=xc(t,e.verify);return new Ba(s,n)}return ai()}function Lc(t,e){return{documents:[Cc(t,e.path)]}}function Oc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Cc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(co(t.value))return{unaryFilter:{field:Uc(t.field),op:"IS_NAN"}};if(ao(t.value))return{unaryFilter:{field:Uc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(co(t.value))return{unaryFilter:{field:Uc(t.field),op:"IS_NOT_NAN"}};if(ao(t.value))return{unaryFilter:{field:Uc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Uc(t.field),op:Bc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Uc(t.field),direction:Fc(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.N||zi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Vc(t){let e=Ac(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ci(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Pc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new zo(qc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,zi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Go(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Go(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new Yo(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",c,u)}function Pc(t){return t?void 0!==t.unaryFilter?[$c(t)]:void 0!==t.fieldFilter?[jc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Pc(t))).reduce(((t,e)=>t.concat(e))):ai():[]}function Fc(t){return mc[t]}function Bc(t){return yc[t]}function Uc(t){return{fieldPath:t.canonicalString()}}function qc(t){return Li.fromServerFormat(t.fieldPath)}function jc(t){return Vo.create(qc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ai()}}(t.fieldFilter.op),t.fieldFilter.value)}function $c(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qc(t.unaryFilter.field);return Vo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qc(t.unaryFilter.field);return Vo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qc(t.unaryFilter.field);return Vo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=qc(t.unaryFilter.field);return Vo.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ai()}}function Kc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zc(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wc(e)),e=Hc(t.get(n),e);return Wc(e)}function Hc(t,e){let n=e;const s=t.length;for(let e=0;e<s;e++){const s=t.charAt(e);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Wc(t){return t+""}function Qc(t){const e=t.length;if(ci(e>=2),2===e)return ci(""===t.charAt(0)&&""===t.charAt(1)),Mi.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&ai(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),s.push(o);break;case"":r+=t.substring(i,e),r+="\0";break;case"":r+=t.substring(i,e+1);break;default:ai()}i=e+2}return new Mi(s)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yc=["userId","batchId"];
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xc(t,e){return[t,zc(e)]}function Jc(t,e,n){return[t,zc(e),n]}const Zc={},tu=["prefixPath","collectionGroup","readTime","documentId"],eu=["prefixPath","collectionGroup","documentId"],nu=["collectionGroup","readTime","prefixPath","documentId"],su=["canonicalId","targetId"],ru=["targetId","path"],iu=["path","targetId"],ou=["collectionId","parent"],au=["indexId","uid"],cu=["uid","sequenceNumber"],uu=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hu=["indexId","uid","orderedDocumentKey"],lu=["userId","collectionPath","documentId"],du=["userId","collectionPath","largestBatchId"],fu=["userId","collectionGroup","largestBatchId"],gu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pu=[...gu,"documentOverlays"],mu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yu=[...mu,"indexConfiguration","indexState","indexEntries"],vu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bu{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ai(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new bu(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof bu?e:bu.resolve(e)}catch(t){return bu.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):bu.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):bu.reject(e)}static resolve(t){return new bu(((e,n)=>{e(t)}))}static reject(t){return new bu(((e,n)=>{n(t)}))}static waitFor(t){return new bu(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=bu.resolve(!1);for(const n of t)e=e.next((t=>t?bu.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.At=new di,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{e.error?this.At.reject(new Su(t,e.error)):this.At.resolve()},this.transaction.onerror=e=>{const n=_u(e.target.error);this.At.reject(new Su(t,n))}}static open(t,e,n,s){try{return new Iu(e,t.transaction(s,n))}catch(t){throw new Su(e,t)}}get Rt(){return this.At.promise}abort(t){t&&this.At.reject(t),this.aborted||(si("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new xu(e)}}class Eu{constructor(t,e,n){this.name=t,this.version=e,this.bt=n,12.2===Eu.Vt(Q())&&ri("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return si("SimpleDb","Removing database:",t),Cu(window.indexedDB.deleteDatabase(t)).toPromise()}static vt(){if(!X())return!1;if(Eu.St())return!0;const t=Q(),e=Eu.Vt(t),n=0<e&&e<10,s=Eu.Dt(t),r=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static St(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.Ct)}static xt(t,e){return t.store(e)}static Vt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(t){return this.db||(si("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=t=>{const n=t.target.result;e(n)},s.onblocked=()=>{n(new Su(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=e=>{const s=e.target.error;"VersionError"===s.name?n(new li(hi.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===s.name?n(new li(hi.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):n(new Su(t,s))},s.onupgradeneeded=t=>{si("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.bt.kt(e,s.transaction,t.oldVersion,this.version).next((()=>{si("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(t){this.Mt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const r="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.Nt(t);const e=Iu.open(this.db,t,r?"readonly":"readwrite",n),i=s(e).next((t=>(e.Pt(),t))).catch((t=>(e.abort(t),bu.reject(t)))).toPromise();return i.catch((()=>{})),await e.Rt,i}catch(t){const e="FirebaseError"!==t.name&&i<3;if(si("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Tu{constructor(t){this.Ft=t,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(t){this.Ft=t}done(){this.$t=!0}Ut(t){this.Bt=t}delete(){return Cu(this.Ft.delete())}}class Su extends li{constructor(t,e){super(hi.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Du(t){return"IndexedDbTransactionError"===t.name}class xu{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(si("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(si("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Cu(n)}add(t){return si("SimpleDb","ADD",this.store.name,t,t),Cu(this.store.add(t))}get(t){return Cu(this.store.get(t)).next((e=>(void 0===e&&(e=null),si("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return si("SimpleDb","DELETE",this.store.name,t),Cu(this.store.delete(t))}count(){return si("SimpleDb","COUNT",this.store.name),Cu(this.store.count())}qt(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.Kt(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new bu(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}Gt(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new bu(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}Qt(t,e){si("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.jt=!1;const s=this.cursor(n);return this.Kt(s,((t,e,n)=>n.delete()))}Wt(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.Kt(s,e)}zt(t){const e=this.cursor({});return new bu(((n,s)=>{e.onerror=t=>{const e=_u(t.target.error);s(e)},e.onsuccess=e=>{const s=e.target.result;s?t(s.primaryKey,s.value).next((t=>{t?s.continue():n()})):n()}}))}Kt(t,e){const n=[];return new bu(((s,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void s();const i=new Tu(r),o=e(r.primaryKey,r.value,i);if(o instanceof bu){const t=o.catch((t=>(i.done(),bu.reject(t))));n.push(t)}i.isDone?s():null===i.Lt?r.continue():r.continue(i.Lt)}})).next((()=>bu.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.jt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Cu(t){return new bu(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=_u(t.target.error);n(e)}}))}let Au=!1;function _u(t){const e=Eu.Vt(Q());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new li("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Au||(Au=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nu extends wu{constructor(t,e){super(),this.Ht=t,this.currentSequenceNumber=e}}function ku(t,e){const n=ui(t);return Eu.xt(n.Ht,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mu{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Aa(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&_a(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&_a(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(Ci.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),rc())}isEqual(t){return this.batchId===t.batchId&&Si(this.mutations,t.mutations,((t,e)=>ka(t,e)))&&Si(this.baseMutations,t.baseMutations,((t,e)=>ka(t,e)))}}class Ru{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ci(t.mutations.length===n.length);let s=nc;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new Ru(t,e,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ou{constructor(t,e,n,s,r=Ci.min(),i=Ci.min(),o=Vi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ou(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ou(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ou(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vu{constructor(t){this.Jt=t}}function Pu(t,e){let n;if(e.document)n=function(t,e,n){const s=xc(t,e.name),r=Ec(e.updateTime),i=new yo({mapValue:{fields:e.fields}}),o=wo.newFoundDocument(s,r,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}(t.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=Wi.fromSegments(e.noDocument.path),s=qu(e.noDocument.readTime);n=wo.newNoDocument(t,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return ai();{const t=Wi.fromSegments(e.unknownDocument.path),s=qu(e.unknownDocument.version);n=wo.newUnknownDocument(t,s)}}return e.readTime&&n.setReadTime(function(t){const e=new xi(t[0],t[1]);return Ci.fromTimestamp(e)}(e.readTime)),n}function Fu(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Bu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(t,e){return{name:Dc(t,e.key),fields:e.data.value.mapValue.fields,updateTime:wc(t,e.version.toTimestamp())}}(t.Jt,e);else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:Uu(e.version)};else{if(!e.isUnknownDocument())return ai();s.unknownDocument={path:n.path.toArray(),version:Uu(e.version)}}return s}function Bu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Uu(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function qu(t){const e=new xi(t.seconds,t.nanoseconds);return Ci.fromTimestamp(e)}function ju(t,e){const n=(e.baseMutations||[]).map((e=>Rc(t.Jt,e)));for(let t=0;t<e.mutations.length-1;++t){const n=e.mutations[t];if(t+1<e.mutations.length&&void 0!==e.mutations[t+1].transform){const s=e.mutations[t+1];n.updateTransforms=s.transform.fieldTransforms,e.mutations.splice(t+1,1),++t}}const s=e.mutations.map((e=>Rc(t.Jt,e))),r=xi.fromMillis(e.localWriteTimeMs);return new Mu(e.batchId,r,n,s)}function $u(t){const e=qu(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?qu(t.lastLimboFreeSnapshotVersion):Ci.min();let s;var r;return void 0!==t.query.documents?(ci(1===(r=t.query).documents.length),s=ea(Xo(Ac(r.documents[0])))):s=function(t){return ea(Vc(t))}(t.query),new Ou(s,t.targetId,0,t.lastListenSequenceNumber,e,n,Vi.fromBase64String(t.resumeToken))}function Ku(t,e){const n=Uu(e.snapshotVersion),s=Uu(e.lastLimboFreeSnapshotVersion);let r;r=Mo(e.target)?Lc(t.Jt,e.target):Oc(t.Jt,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:No(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Gu(t){const e=Vc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}function zu(t,e){return new Lu(e.largestBatchId,Rc(t.Jt,e.overlayMutation))}function Hu(t,e){const n=e.path.lastSegment();return[t,zc(e.path.popLast()),n]}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wu{getBundleMetadata(t,e){return Qu(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:qu(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return Qu(t).put({bundleId:(n=e).id,createTime:Uu(Ec(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Yu(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:Gu(e.bundledQuery),readTime:qu(e.readTime)};var e}))}saveNamedQuery(t,e){return Yu(t).put(function(t){return{name:t.name,readTime:Uu(Ec(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Qu(t){return ku(t,"bundles")}function Yu(t){return ku(t,"namedQueries")}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xu{constructor(t,e){this.M=t,this.userId=e}static Yt(t,e){const n=e.uid||"";return new Xu(t,n)}getOverlay(t,e){return Ju(t).get(Hu(this.userId,e)).next((t=>t?zu(this.M,t):null))}saveOverlays(t,e,n){const s=[];return n.forEach(((n,r)=>{const i=new Lu(e,r);s.push(this.Xt(t,i))})),bu.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((t=>s.add(zc(t.getCollectionPath()))));const r=[];return s.forEach((e=>{const s=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);r.push(Ju(t).Qt("collectionPathOverlayIndex",s))})),bu.waitFor(r)}getOverlaysForCollection(t,e,n){const s=ec(),r=zc(e),i=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Ju(t).qt("collectionPathOverlayIndex",i).next((t=>{for(const e of t){const t=zu(this.M,e);s.set(t.getKey(),t)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const r=ec();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Ju(t).Wt({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=zu(this.M,e);r.size()<s||o.largestBatchId===i?(r.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>r))}Xt(t,e){return Ju(t).put(function(t,e,n){const[s,r,i]=Hu(e,n.mutation.key);return{userId:e,collectionPath:r,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Mc(t.Jt,n.mutation)}}(this.M,this.userId,e))}}function Ju(t){return ku(t,"documentOverlays")}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zu{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Bi(t.integerValue));else if("doubleValue"in t){const n=Bi(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Hi(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Ui(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?lo(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):ai()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const t of Object.keys(n))this.re(t,e),this.te(n[t],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const t of n)this.te(t,e)}ae(t,e){this.ne(e,37),Wi.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}function th(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function eh(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const s=th(255&t[n]);if(e+=s,8!==s)break}return e}(t);return Math.ceil(e/8)}Zu.fe=new Zu;class nh{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this._e(n.value),n=e.next();this.we()}me(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.ge(n.value),n=e.next();this.ye()}pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this._e(t);else if(t<2048)this._e(960|t>>>6),this._e(128|63&t);else if(e<"\ud800"||"\udbff"<e)this._e(480|t>>>12),this._e(128|63&t>>>6),this._e(128|63&t);else{const t=e.codePointAt(0);this._e(240|t>>>18),this._e(128|63&t>>>12),this._e(128|63&t>>>6),this._e(128|63&t)}}this.we()}Ie(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.ge(t);else if(t<2048)this.ge(960|t>>>6),this.ge(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.ge(480|t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t);else{const t=e.codePointAt(0);this.ge(240|t>>>18),this.ge(128|63&t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t)}}this.ye()}Te(t){const e=this.Ee(t),n=eh(e);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=255&e[t]}Re(t){const e=this.Ee(t),n=eh(e);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=~(255&e[t])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(t){this.Ae(t.length),this.buffer.set(t,this.position),this.position+=t.length}Se(){return this.buffer.slice(0,this.position)}Ee(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let t=1;t<e.length;++t)e[t]^=n?255:0;return e}_e(t){const e=255&t;0===e?(this.be(0),this.be(255)):255===e?(this.be(255),this.be(0)):this.be(e)}ge(t){const e=255&t;0===e?(this.ve(0),this.ve(255)):255===e?(this.ve(255),this.ve(0)):this.ve(t)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(t){this.Ae(1),this.buffer[this.position++]=t}ve(t){this.Ae(1),this.buffer[this.position++]=~t}Ae(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class sh{constructor(t){this.De=t}ue(t){this.De.de(t)}ie(t){this.De.pe(t)}se(t){this.De.Te(t)}ee(){this.De.Pe()}}class rh{constructor(t){this.De=t}ue(t){this.De.me(t)}ie(t){this.De.Ie(t)}se(t){this.De.Re(t)}ee(){this.De.Ve()}}class ih{constructor(){this.De=new nh,this.Ce=new sh(this.De),this.xe=new rh(this.De)}seed(t){this.De.seed(t)}Ne(t){return 0===t?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}ke(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new oh(this.indexId,this.documentKey,this.arrayValue,n)}}function ah(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=ch(t.arrayValue,e.arrayValue),0!==n?n:(n=ch(t.directionalValue,e.directionalValue),0!==n?n:Wi.comparator(t.documentKey,e.documentKey)))}function ch(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(0!==s)return s}return t.length-e.length}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uh{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Me=t.orderBy,this.Oe=[];for(const e of t.filters){const t=e;t.S()?this.Fe=t:this.Oe.push(t)}}$e(t){const e=Io(t);if(void 0!==e&&!this.Be(e))return!1;const n=Eo(t);let s=0,r=0;for(;s<n.length&&this.Be(n[s]);++s);if(s===n.length)return!0;if(void 0!==this.Fe){const t=n[s];if(!this.Le(this.Fe,t)||!this.Ue(this.Me[r++],t))return!1;++s}for(;s<n.length;++s){const t=n[s];if(r>=this.Me.length||!this.Ue(this.Me[r++],t))return!1}return!0}Be(t){for(const e of this.Oe)if(this.Le(e,t))return!0;return!1}Le(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}Ue(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hh{constructor(){this.qe=new lh}addToCollectionParentIndex(t,e){return this.qe.add(e),bu.resolve()}getCollectionParents(t,e){return bu.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return bu.resolve()}deleteFieldIndex(t,e){return bu.resolve()}getDocumentsMatchingTarget(t,e){return bu.resolve(null)}getFieldIndex(t,e){return bu.resolve(null)}getFieldIndexes(t,e){return bu.resolve([])}getNextCollectionGroupToUpdate(t){return bu.resolve(null)}updateCollectionGroup(t,e,n){return bu.resolve()}updateIndexEntries(t,e){return bu.resolve()}}class lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Wa(Mi.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Wa(Mi.comparator)).toArray()}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dh=new Uint8Array(0);class fh{constructor(t,e){this.user=t,this.databaseId=e,this.Ke=new lh,this.Ge=new Ka((t=>No(t)),((t,e)=>ko(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Ke.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.Ke.add(e)}));const r={collectionId:n,parent:zc(s)};return gh(t).put(r)}return bu.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Di(e),""],!1,!0);return gh(t).qt(s).next((t=>{for(const s of t){if(s.collectionId!==e)break;n.push(Qc(s.parent))}return n}))}addFieldIndex(t,e){const n=mh(t),s=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);return delete s.indexId,n.add(s).next()}deleteFieldIndex(t,e){const n=mh(t),s=yh(t),r=ph(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=ph(t);let s=!0;const r=new Map;return bu.forEach(this.Qe(e),(e=>this.getFieldIndex(t,e).next((t=>{s&&(s=!!t),r.set(e,t)})))).next((()=>{if(s){let t=rc();const s=[];return bu.forEach(r,((r,i)=>{var o;si("IndexedDbIndexManager",`Using index ${o=r,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${No(e)}`);const a=function(t,e){const n=Io(e);if(void 0===n)return null;for(const e of Ro(t,n.fieldPath))switch(e.op){case"array-contains-any":return e.value.arrayValue.values||[];case"array-contains":return[e.value]}return null}(i,r),c=function(t,e){const n=new Map;for(const s of Eo(e))for(const e of Ro(t,s.fieldPath))switch(e.op){case"==":case"in":n.set(s.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(s.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,r),u=function(t,e){const n=[];let s=!0;for(const r of Eo(e)){const e=0===r.kind?Lo(t,r.fieldPath,t.startAt):Oo(t,r.fieldPath,t.startAt);if(!e.value)return null;n.push(e.value),s&&(s=e.inclusive)}return new Go(n,s)}(i,r),h=function(t,e){const n=[];let s=!0;for(const r of Eo(e)){const e=0===r.kind?Oo(t,r.fieldPath,t.endAt):Lo(t,r.fieldPath,t.endAt);if(!e.value)return null;n.push(e.value),s&&(s=e.inclusive)}return new Go(n,s)}(i,r),l=this.je(r,i,u),d=this.je(r,i,h),f=this.We(r,i,c),g=this.ze(r.indexId,a,l,!!u&&u.inclusive,d,!!h&&h.inclusive,f);return bu.forEach(g,(r=>n.Gt(r,e.limit).next((e=>{e.forEach((e=>{const n=Wi.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),s.push(n))}))}))))})).next((()=>s))}return bu.resolve(null)}))}Qe(t){let e=this.Ge.get(t);return e||(e=[t],this.Ge.set(t,e),e)}ze(t,e,n,s,r,i,o){const a=(null!=e?e.length:1)*Math.max(null!=n?n.length:1,null!=r?r.length:1),c=a/(null!=e?e.length:1),u=[];for(let h=0;h<a;++h){const a=e?this.He(e[h/c]):dh,l=n?this.Je(t,a,n[h%c],s):this.Ye(t),d=r?this.Xe(t,a,r[h%c],i):this.Ye(t+1);u.push(...this.createRange(l,d,o.map((e=>this.Je(t,a,e,!0)))))}return u}Je(t,e,n,s){const r=new oh(t,Wi.empty(),e,n);return s?r:r.ke()}Xe(t,e,n,s){const r=new oh(t,Wi.empty(),e,n);return s?r.ke():r}Ye(t){return new oh(t,Wi.empty(),dh,dh)}getFieldIndex(t,e){const n=new uh(e),s=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((t=>{const e=t.filter((t=>n.$e(t)));return e.sort(((t,e)=>e.fields.length-t.fields.length)),e.length>0?e[0]:null}))}Ze(t,e){const n=new ih;for(const s of Eo(t)){const t=e.data.field(s.fieldPath);if(null==t)return null;const r=n.Ne(s.kind);Zu.fe.Zt(t,r)}return n.Se()}He(t){const e=new ih;return Zu.fe.Zt(t,e.Ne(0)),e.Se()}tn(t,e){const n=new ih;return Zu.fe.Zt(ro(this.databaseId,e),n.Ne(function(t){const e=Eo(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Se()}We(t,e,n){if(null===n)return[];let s=[];s.push(new ih);let r=0;for(const i of Eo(t)){const t=n[r++];for(const n of s)if(this.en(e,i.fieldPath)&&oo(t))s=this.nn(s,i,t);else{const e=n.Ne(i.kind);Zu.fe.Zt(t,e)}}return this.sn(s)}je(t,e,n){return null==n?null:this.We(t,e,n.position)}sn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Se();return e}nn(t,e,n){const s=[...t],r=[];for(const t of n.arrayValue.values||[])for(const n of s){const s=new ih;s.seed(n.Se()),Zu.fe.Zt(t,s.Ne(e.kind)),r.push(s)}return r}en(t,e){return!!t.filters.find((t=>t instanceof Vo&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=mh(t),s=yh(t);return(e?n.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.qt()).next((t=>{const e=[];return bu.forEach(t,(t=>s.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new So(e.sequenceNumber,new xo(qu(e.readTime),new Wi(Qc(e.documentKey)),e.largestBatchId)):So.empty(),s=t.fields.map((([t,e])=>new To(Li.fromServerFormat(t),e)));return new bo(t.indexId,t.collectionGroup,s,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:Ti(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=mh(t),r=yh(t);return this.rn(t).next((t=>s.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>bu.forEach(e,(e=>r.put(function(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Uu(s.readTime),documentKey:zc(s.documentKey.path),largestBatchId:s.largestBatchId}}(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return bu.forEach(e,((e,s)=>{const r=n.get(e.collectionGroup);return(r?bu.resolve(r):this.getFieldIndexes(t,e.collectionGroup)).next((r=>(n.set(e.collectionGroup,r),bu.forEach(r,(n=>this.on(t,e,n).next((e=>{const r=this.un(s,n);return e.isEqual(r)?bu.resolve():this.an(t,s,n,e,r)})))))))}))}cn(t,e,n,s){return ph(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.tn(n,e.key),documentKey:e.key.path.toArray()})}hn(t,e,n,s){return ph(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.tn(n,e.key),e.key.path.toArray()])}on(t,e,n){const s=ph(t);let r=new Wa(ah);return s.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,e)])},((t,s)=>{r=r.add(new oh(n.indexId,e,s.arrayValue,s.directionalValue))})).next((()=>r))}un(t,e){let n=new Wa(ah);const s=this.Ze(e,t);if(null==s)return n;const r=Io(e);if(null!=r){const i=t.data.field(r.fieldPath);if(oo(i))for(const r of i.arrayValue.values||[])n=n.add(new oh(e.indexId,t.key,this.He(r),s))}else n=n.add(new oh(e.indexId,t.key,dh,s));return n}an(t,e,n,s,r){si("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,s,r){const i=t.getIterator(),o=e.getIterator();let a=Ya(i),c=Ya(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const s=n(a,c);s<0?e=!0:s>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(s(c),c=Ya(o)):e?(r(a),a=Ya(i)):(a=Ya(i),c=Ya(o))}}(s,r,ah,(s=>{i.push(this.cn(t,e,n,s))}),(s=>{i.push(this.hn(t,e,n,s))})),bu.waitFor(i)}rn(t){let e=1;return yh(t).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,s)=>{s.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>ah(t,e))).filter(((t,e,n)=>!e||0!==ah(t,n[e-1])));const s=[];s.push(t);for(const r of n){const n=ah(r,t),i=ah(r,e);if(0===n)s[0]=t.ke();else if(n>0&&i<0)s.push(r),s.push(r.ke());else if(i>0)break}s.push(e);const r=[];for(let t=0;t<s.length;t+=2)r.push(IDBKeyRange.bound([s[t].indexId,this.uid,s[t].arrayValue,s[t].directionalValue,dh,[]],[s[t+1].indexId,this.uid,s[t+1].arrayValue,s[t+1].directionalValue,dh,[]]));return r}}function gh(t){return ku(t,"collectionParents")}function ph(t){return ku(t,"indexEntries")}function mh(t){return ku(t,"indexConfiguration")}function yh(t){return ku(t,"indexState")}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wh{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new wh(t,wh.DEFAULT_COLLECTION_PERCENTILE,wh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bh(t,e,n){const s=t.store("mutations"),r=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.Wt({range:o},((t,e,n)=>(a++,n.delete())));i.push(c.next((()=>{ci(1===a)})));const u=[];for(const t of n.mutations){const s=Jc(e,t.key.path,n.batchId);i.push(r.delete(s)),u.push(t.key)}return bu.waitFor(i).next((()=>u))}function Ih(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ai();e=t.noDocument}return JSON.stringify(e).length}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */wh.DEFAULT_COLLECTION_PERCENTILE=10,wh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wh.DEFAULT=new wh(41943040,wh.DEFAULT_COLLECTION_PERCENTILE,wh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wh.DISABLED=new wh(-1,0,0);class Eh{constructor(t,e,n,s){this.userId=t,this.M=e,this.indexManager=n,this.referenceDelegate=s,this.ln={}}static Yt(t,e,n,s){ci(""!==t.uid);const r=t.isAuthenticated()?t.uid:"";return new Eh(r,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sh(t).Wt({index:"userMutationsIndex",range:n},((t,n,s)=>{e=!1,s.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const r=Dh(t),i=Sh(t);return i.add({}).next((o=>{ci("number"==typeof o);const a=new Mu(o,e,n,s),c=function(t,e,n){const s=n.baseMutations.map((e=>Mc(t.Jt,e))),r=n.mutations.map((e=>Mc(t.Jt,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:s,mutations:r}}(this.M,this.userId,a),u=[];let h=new Wa(((t,e)=>Ti(t.canonicalString(),e.canonicalString())));for(const t of s){const e=Jc(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(i.put(c)),u.push(r.put(e,Zc))}return h.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.ln[o]=a.keys()})),bu.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return Sh(t).get(e).next((t=>t?(ci(t.userId===this.userId),ju(this.M,t)):null))}fn(t,e){return this.ln[e]?bu.resolve(this.ln[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.ln[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return Sh(t).Wt({index:"userMutationsIndex",range:s},((t,e,s)=>{e.userId===this.userId&&(ci(e.batchId>=n),r=ju(this.M,e)),s.done()})).next((()=>r))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Sh(t).Wt({index:"userMutationsIndex",range:e,reverse:!0},((t,e,s)=>{n=e.batchId,s.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sh(t).qt("userMutationsIndex",e).next((t=>t.map((t=>ju(this.M,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Xc(this.userId,e.path),s=IDBKeyRange.lowerBound(n),r=[];return Dh(t).Wt({range:s},((n,s,i)=>{const[o,a,c]=n,u=Qc(a);if(o===this.userId&&e.path.isEqual(u))return Sh(t).get(c).next((t=>{if(!t)throw ai();ci(t.userId===this.userId),r.push(ju(this.M,t))}));i.done()})).next((()=>r))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Wa(Ti);const s=[];return e.forEach((e=>{const r=Xc(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=Dh(t).Wt({range:i},((t,s,r)=>{const[i,o,a]=t,c=Qc(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()}));s.push(o)})),bu.waitFor(s).next((()=>this.dn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,r=Xc(this.userId,n),i=IDBKeyRange.lowerBound(r);let o=new Wa(Ti);return Dh(t).Wt({range:i},((t,e,r)=>{const[i,a,c]=t,u=Qc(a);i===this.userId&&n.isPrefixOf(u)?u.length===s&&(o=o.add(c)):r.done()})).next((()=>this.dn(t,o)))}dn(t,e){const n=[],s=[];return e.forEach((e=>{s.push(Sh(t).get(e).next((t=>{if(null===t)throw ai();ci(t.userId===this.userId),n.push(ju(this.M,t))})))})),bu.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return bh(t.Ht,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this._n(e.batchId)})),bu.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}_n(t){delete this.ln[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return bu.resolve();const n=IDBKeyRange.lowerBound([this.userId]),s=[];return Dh(t).Wt({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=Qc(t[1]);s.push(e)}else n.done()})).next((()=>{ci(0===s.length)}))}))}containsKey(t,e){return Th(t,this.userId,e)}wn(t){return xh(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Th(t,e,n){const s=Xc(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Dh(t).Wt({range:i,jt:!0},((t,n,s)=>{const[i,a,c]=t;i===e&&a===r&&(o=!0),s.done()})).next((()=>o))}function Sh(t){return ku(t,"mutations")}function Dh(t){return ku(t,"documentMutations")}function xh(t){return ku(t,"mutationQueues")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Ch(0)}static yn(){return new Ch(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(t,e){this.referenceDelegate=t,this.M=e}allocateTargetId(t){return this.pn(t).next((e=>{const n=new Ch(e.highestTargetId);return e.highestTargetId=n.next(),this.In(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.pn(t).next((t=>Ci.fromTimestamp(new xi(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.pn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.pn(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.In(t,s))))}addTargetData(t,e){return this.Tn(t,e).next((()=>this.pn(t).next((n=>(n.targetCount+=1,this.En(e,n),this.In(t,n))))))}updateTargetData(t,e){return this.Tn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>_h(t).delete(e.targetId))).next((()=>this.pn(t))).next((e=>(ci(e.targetCount>0),e.targetCount-=1,this.In(t,e))))}removeTargets(t,e,n){let s=0;const r=[];return _h(t).Wt(((i,o)=>{const a=$u(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(s++,r.push(this.removeTargetData(t,a)))})).next((()=>bu.waitFor(r))).next((()=>s))}forEachTarget(t,e){return _h(t).Wt(((t,n)=>{const s=$u(n);e(s)}))}pn(t){return Nh(t).get("targetGlobalKey").next((t=>(ci(null!==t),t)))}In(t,e){return Nh(t).put("targetGlobalKey",e)}Tn(t,e){return _h(t).put(Ku(this.M,e))}En(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.pn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=No(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return _h(t).Wt({range:s,index:"queryTargetsIndex"},((t,n,s)=>{const i=$u(n);ko(e,i.target)&&(r=i,s.done())})).next((()=>r))}addMatchingKeys(t,e,n){const s=[],r=kh(t);return e.forEach((e=>{const i=zc(e.path);s.push(r.put({targetId:n,path:i})),s.push(this.referenceDelegate.addReference(t,n,e))})),bu.waitFor(s)}removeMatchingKeys(t,e,n){const s=kh(t);return bu.forEach(e,(e=>{const r=zc(e.path);return bu.waitFor([s.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=kh(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=kh(t);let r=rc();return s.Wt({range:n,jt:!0},((t,e,n)=>{const s=Qc(t[1]),i=new Wi(s);r=r.add(i)})).next((()=>r))}containsKey(t,e){const n=zc(e.path),s=IDBKeyRange.bound([n],[Di(n)],!1,!0);let r=0;return kh(t).Wt({index:"documentTargetsIndex",jt:!0,range:s},(([t,e],n,s)=>{0!==t&&(r++,s.done())})).next((()=>r>0))}Et(t,e){return _h(t).get(e).next((t=>t?$u(t):null))}}function _h(t){return ku(t,"targets")}function Nh(t){return ku(t,"targetGlobal")}function kh(t){return ku(t,"targetDocuments")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Mh(t){if(t.code!==hi.FAILED_PRECONDITION||t.message!==vu)throw t;si("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Rh([t,e],[n,s]){const r=Ti(t,n);return 0===r?Ti(e,s):r}class Lh{constructor(t){this.An=t,this.buffer=new Wa(Rh),this.Rn=0}Pn(){return++this.Rn}bn(t){const e=[t,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Rh(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Oh{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.Vn=!1,this.vn=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(t)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(t){const e=this.Vn?3e5:6e4;si("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.vn=null,this.Vn=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Du(t)?si("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Mh(t)}await this.Sn(t)}))}}class Vh{constructor(t,e){this.Dn=t,this.params=e}calculateTargetCount(t,e){return this.Dn.Cn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return bu.resolve(bi.A);const n=new Lh(e);return this.Dn.forEachTarget(t,(t=>n.bn(t.sequenceNumber))).next((()=>this.Dn.xn(t,(t=>n.bn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Dn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Dn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(si("LruGarbageCollector","Garbage collection skipped; disabled"),bu.resolve(vh)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(si("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vh):this.Nn(t,e)))}getCacheSize(t){return this.Dn.getCacheSize(t)}Nn(t,e){let n,s,r,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(si("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),s=this.params.maximumSequenceNumbersToCollect):s=e,i=Date.now(),this.nthSequenceNumber(t,s)))).next((s=>(n=s,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(r=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),ni()<=ft.DEBUG&&si("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${s} in `+(o-i)+"ms\n"+`\tRemoved ${r} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),bu.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:t}))))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ph{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Vh(t,e)}(this,e)}Cn(t){const e=this.kn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}kn(t){let e=0;return this.xn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}xn(t,e){return this.Mn(t,((t,n)=>e(n)))}addReference(t,e,n){return Fh(t,n)}removeReference(t,e,n){return Fh(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Fh(t,e)}On(t,e){return function(t,e){let n=!1;return xh(t).zt((s=>Th(t,s,e).next((t=>(t&&(n=!0),bu.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.Mn(t,((i,o)=>{if(o<=e){const e=this.On(t,i).next((e=>{if(!e)return r++,n.getEntry(t,i).next((()=>(n.removeEntry(i,Ci.min()),kh(t).delete([0,zc(i.path)]))))}));s.push(e)}})).next((()=>bu.waitFor(s))).next((()=>n.apply(t))).next((()=>r))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Fh(t,e)}Mn(t,e){const n=kh(t);let s,r=bi.A;return n.Wt({index:"documentTargetsIndex"},(([t,n],{path:i,sequenceNumber:o})=>{0===t?(r!==bi.A&&e(new Wi(Qc(s)),r),r=o,s=i):r=bi.A})).next((()=>{r!==bi.A&&e(new Wi(Qc(s)),r)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Fh(t,e){return kh(t).put(function(t,e){return{targetId:0,path:zc(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bh{constructor(){this.changes=new Ka((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?bu.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uh{constructor(t){this.M=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return $h(t).put(n)}removeEntry(t,e,n){return $h(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Bu(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.Fn(t,n))))}getEntry(t,e){let n=wo.newInvalidDocument(e);return $h(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Kh(e))},((t,s)=>{n=this.$n(e,s)})).next((()=>n))}Bn(t,e){let n={size:0,document:wo.newInvalidDocument(e)};return $h(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Kh(e))},((t,s)=>{n={document:this.$n(e,s),size:Ih(s)}})).next((()=>n))}getEntries(t,e){let n=Ja();return this.Ln(t,e,((t,e)=>{const s=this.$n(t,e);n=n.insert(t,s)})).next((()=>n))}Un(t,e){let n=Ja(),s=new Ga(Wi.comparator);return this.Ln(t,e,((t,e)=>{const r=this.$n(t,e);n=n.insert(t,r),s=s.insert(t,Ih(e))})).next((()=>({documents:n,qn:s})))}Ln(t,e,n){if(e.isEmpty())return bu.resolve();let s=new Wa(zh);e.forEach((t=>s=s.add(t)));const r=IDBKeyRange.bound(Kh(s.first()),Kh(s.last())),i=s.getIterator();let o=i.getNext();return $h(t).Wt({index:"documentKeyIndex",range:r},((t,e,s)=>{const r=Wi.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&zh(o,r)<0;)n(o,null),o=i.getNext();o&&o.isEqual(r)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?s.Ut(Kh(o)):s.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(t,e,n){const s=[e.popLast().toArray(),e.lastSegment(),Bu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],r=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $h(t).qt(IDBKeyRange.bound(s,r,!0)).next((t=>{let e=Ja();for(const n of t){const t=this.$n(Wi.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,s){let r=Ja();const i=Gh(e,n),o=Gh(e,xo.max());return $h(t).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((t,e,n)=>{const i=this.$n(Wi.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);r=r.insert(i.key,i),r.size===s&&n.done()})).next((()=>r))}newChangeBuffer(t){return new qh(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return jh(t).get("remoteDocumentGlobalKey").next((t=>(ci(!!t),t)))}Fn(t,e){return jh(t).put("remoteDocumentGlobalKey",e)}$n(t,e){if(e){const t=Pu(this.M,e);if(!t.isNoDocument()||!t.version.isEqual(Ci.min()))return t}return wo.newInvalidDocument(t)}}class qh extends Bh{constructor(t,e){super(),this.Kn=t,this.trackRemovals=e,this.Gn=new Ka((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,s=new Wa(((t,e)=>Ti(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((r,i)=>{const o=this.Gn.get(r);if(e.push(this.Kn.removeEntry(t,r,o.readTime)),i.isValidDocument()){const a=Fu(this.Kn.M,i);s=s.add(r.path.popLast());const c=Ih(a);n+=c-o.size,e.push(this.Kn.addEntry(t,r,a))}else if(n-=o.size,this.trackRemovals){const n=Fu(this.Kn.M,i.convertToNoDocument(Ci.min()));e.push(this.Kn.addEntry(t,r,n))}})),s.forEach((n=>{e.push(this.Kn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.Kn.updateMetadata(t,n)),bu.waitFor(e)}getFromCache(t,e){return this.Kn.Bn(t,e).next((t=>(this.Gn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.Kn.Un(t,e).next((({documents:t,qn:e})=>(e.forEach(((e,n)=>{this.Gn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function jh(t){return ku(t,"remoteDocumentGlobal")}function $h(t){return ku(t,"remoteDocumentsV14")}function Kh(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Gh(t,e){const n=e.documentKey.path.toArray();return[t,Bu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function zh(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let t=0;t<n.length-2&&t<s.length-2;++t)if(r=Ti(n[t],s[t]),r)return r;return r=Ti(n.length,s.length),r||(r=Ti(n[n.length-2],s[s.length-2]),r||Ti(n[n.length-1],s[s.length-1]))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hh{constructor(t){this.M=t}kt(t,e,n,s){const r=new Iu("createOrUpgrade",e);n<1&&s>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yc,{unique:!0}),t.createObjectStore("documentMutations")}(t),Wh(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=bu.resolve();return n<3&&s>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),Wh(t)),i=i.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ci.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(r)))),n<4&&s>=4&&(0!==n&&(i=i.next((()=>function(t,e){return e.store("mutations").qt().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yc,{unique:!0});const s=e.store("mutations"),r=n.map((t=>s.put(t)));return bu.waitFor(r)}))}(t,r)))),i=i.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&s>=5&&(i=i.next((()=>this.Qn(r)))),n<6&&s>=6&&(i=i.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.jn(r))))),n<7&&s>=7&&(i=i.next((()=>this.Wn(r)))),n<8&&s>=8&&(i=i.next((()=>this.zn(t,r)))),n<9&&s>=9&&(i=i.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&s>=10&&(i=i.next((()=>this.Hn(r)))),n<11&&s>=11&&(i=i.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&s>=12&&(i=i.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:lu});e.createIndex("collectionPathOverlayIndex",du,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",fu,{unique:!1})}(t)}))),n<13&&s>=13&&(i=i.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:tu});e.createIndex("documentKeyIndex",eu),e.createIndex("collectionGroupIndex",nu)}(t))).next((()=>this.Jn(t,r))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&s>=14&&(i=i.next((()=>{!function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:au}).createIndex("sequenceNumberIndex",cu,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:uu}).createIndex("documentKeyIndex",hu,{unique:!1})}(t)}))),i}jn(t){let e=0;return t.store("remoteDocuments").Wt(((t,n)=>{e+=Ih(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.qt().next((e=>bu.forEach(e,(e=>{const s=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",s).next((n=>bu.forEach(n,(n=>{ci(n.userId===e.userId);const s=ju(this.M,n);return bh(t,e.userId,s).next((()=>{}))}))))}))))}Wn(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const s=[];return n.Wt(((n,r)=>{const i=new Mi(n),o=function(t){return[0,zc(t)]}(i);s.push(e.get(o).next((n=>n?bu.resolve():(n=>e.put({targetId:0,path:zc(n),sequenceNumber:t.highestListenSequenceNumber}))(i))))})).next((()=>bu.waitFor(s)))}))}zn(t,e){t.createObjectStore("collectionParents",{keyPath:ou});const n=e.store("collectionParents"),s=new lh,r=t=>{if(s.add(t)){const e=t.lastSegment(),s=t.popLast();return n.put({collectionId:e,parent:zc(s)})}};return e.store("remoteDocuments").Wt({jt:!0},((t,e)=>{const n=new Mi(t);return r(n.popLast())})).next((()=>e.store("documentMutations").Wt({jt:!0},(([t,e,n],s)=>{const i=Qc(e);return r(i.popLast())}))))}Hn(t){const e=t.store("targets");return e.Wt(((t,n)=>{const s=$u(n),r=Ku(this.M,s);return e.put(r)}))}Jn(t,e){const n=e.store("remoteDocuments"),s=[];return n.Wt(((t,n)=>{const r=e.store("remoteDocumentsV14"),i=(o=n,o.document?new Wi(Mi.fromString(o.document.name).popFirst(5)):o.noDocument?Wi.fromSegments(o.noDocument.path):o.unknownDocument?Wi.fromSegments(o.unknownDocument.path):ai()).path.toArray();var o;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};s.push(r.put(a))})).next((()=>bu.waitFor(s)))}}function Wh(t){t.createObjectStore("targetDocuments",{keyPath:ru}).createIndex("documentTargetsIndex",iu,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",su,{unique:!0}),t.createObjectStore("targetGlobal")}const Qh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yh{constructor(t,e,n,s,r,i,o,a,c,u,h=13){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Yn=r,this.window=i,this.document=o,this.Xn=c,this.Zn=u,this.ts=h,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=t=>Promise.resolve(),!Yh.vt())throw new li(hi.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ph(this,s),this.hs=e+"main",this.M=new Vu(a),this.ls=new Eu(this.hs,this.ts,new Hh(this.M)),this.fs=new Ah(this.referenceDelegate,this.M),this.ds=function(t){return new Uh(t)}(this.M),this._s=new Wu,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&ri("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new li(hi.FAILED_PRECONDITION,Qh);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.fs.getHighestSequenceNumber(t)))})).then((t=>{this.es=new bi(t,this.Xn)})).then((()=>{this.ns=!0})).catch((t=>(this.ls&&this.ls.close(),Promise.reject(t))))}Ts(t){return this.cs=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ls.Ot((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Jh(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(t).next((t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(t))).next((e=>this.isPrimary&&!e?this.Rs(t).next((()=>!1)):!!e&&this.Ps(t).next((()=>!0)))))).catch((t=>{if(Du(t))return si("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return si("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Yn.enqueueRetryable((()=>this.cs(t))),this.isPrimary=t}))}Es(t){return Xh(t).get("owner").next((t=>bu.resolve(this.bs(t))))}Vs(t){return Jh(t).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=ku(t,"clientMetadata");return e.qt().next((t=>{const n=this.Ds(t,18e5),s=t.filter((t=>-1===n.indexOf(t)));return bu.forEach(s,(t=>e.delete(t.clientId))).next((()=>s))}))})).catch((()=>[]));if(this.ws)for(const e of t)this.ws.removeItem(this.Cs(e.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}bs(t){return!!t&&t.ownerId===this.clientId}As(t){return this.Zn?bu.resolve(!0):Xh(t).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)){if(this.bs(e)&&this.networkEnabled)return!0;if(!this.bs(e)){if(!e.allowTabSynchronization)throw new li(hi.FAILED_PRECONDITION,Qh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jh(t).qt().next((t=>void 0===this.Ds(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,s=this.networkEnabled===t.networkEnabled;if(e||n&&s)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&si("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Nu(t,bi.A);return this.Rs(e).next((()=>this.Vs(e)))})),this.ls.close(),this.Os()}Ds(t,e){return t.filter((t=>this.Ss(t.updateTimeMs,e)&&!this.xs(t.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(t=>Jh(t).qt().next((t=>this.Ds(t,18e5).map((t=>t.clientId))))))}get started(){return this.ns}getMutationQueue(t,e){return Eh.Yt(t,this.M,e,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(t){return new fh(t,this.M.Jt.databaseId)}getDocumentOverlayCache(t){return Xu.Yt(this.M,t)}getBundleCache(){return this._s}runTransaction(t,e,n){si("IndexedDbPersistence","Starting transaction:",t);const s="readonly"===e?"readonly":"readwrite",r=14===(i=this.ts)?yu:13===i?mu:12===i?pu:11===i?gu:void ai();var i;let o;return this.ls.runTransaction(t,s,r,(s=>(o=new Nu(s,this.es?this.es.next():bi.A),"readwrite-primary"===e?this.Es(o).next((t=>!!t||this.As(o))).next((e=>{if(!e)throw ri(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new li(hi.FAILED_PRECONDITION,vu);return n(o)})).next((t=>this.Ps(o).next((()=>t)))):this.$s(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}$s(t){return Xh(t).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.bs(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new li(hi.FAILED_PRECONDITION,Qh)}))}Ps(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xh(t).put("owner",e)}static vt(){return Eu.vt()}Rs(t){const e=Xh(t);return e.get("owner").next((t=>this.bs(t)?(si("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):bu.resolve()))}Ss(t,e){const n=Date.now();return!(t<n-e||t>n&&(ri(`Detected an update time that is in the future: ${t} > ${n}`),1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.ss=()=>{this.Ns(),Y()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(t){var e;try{const n=null!==(null===(e=this.ws)||void 0===e?void 0:e.getItem(this.Cs(t)));return si("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return ri("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(t){ri("Failed to set zombie client id.",t)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(t){}}Cs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Xh(t){return ku(t,"owner")}function Jh(t){return ku(t,"clientMetadata")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Zh{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Wi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Wi(e)).next((t=>{let e=tc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const s=e.collectionGroup;let r=tc();return this.indexManager.getCollectionParents(t,s).next((i=>bu.forEach(i,(i=>{const o=function(t,e){return new Yo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}zs(t,e,n){let s;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(s=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let r=s.get(n);null==r&&(r=wo.newInvalidDocument(n),s=s.insert(n,r)),_a(t,r,e.localWriteTime),r.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{ia(e,n)||(s=s.remove(t))})),s)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tl{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=s}static Ys(t,e){let n=rc(),s=rc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new tl(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class el{Xs(t){this.Zs=t}Qs(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Ci.min())?this.ti(t,e):this.Zs.Ks(t,s).next((r=>{const i=this.ei(e,r);return(Jo(e)||Zo(e))&&this.ni(e.limitType,i,s,n)?this.ti(t,e):(ni()<=ft.DEBUG&&si("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ra(e)),this.Zs.Qs(t,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Ci.fromTimestamp(1e9===s?new xi(n+1,0):new xi(n,s));return new xo(r,Wi.empty(),e)}(n,-1)).next((t=>(i.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Wa(oa(t));return e.forEach(((e,s)=>{ia(t,s)&&(n=n.add(s))})),n}ni(t,e,n,s){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ti(t,e){return ni()<=ft.DEBUG&&si("QueryEngine","Using full collection scan to execute query:",ra(e)),this.Zs.Qs(t,e,xo.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nl{constructor(t,e,n,s){this.persistence=t,this.si=e,this.M=s,this.ii=new Ga(Ti),this.ri=new Ka((t=>No(t)),ko),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new Zh(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function sl(t,e,n,s){return new nl(t,e,n,s)}async function rl(t,e){const n=ui(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.Bs.getAllMutationBatches(t).next((r=>(s=r,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=rc();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function il(t){const e=ui(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function ol(t,e){const n=ui(t),s=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Vi.EMPTY_BYTE_STRING,Ci.min()).withLastLimboFreeSnapshotVersion(Ci.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.fs.updateTargetData(t,u))}));let a=Ja();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=rc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ja();return n.forEach(((n,r)=>{const i=t.get(n);r.isNoDocument()&&r.version.isEqual(Ci.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):si("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)})),s}))}(t,i,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(Ci.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return bu.waitFor(o).next((()=>i.apply(t))).next((()=>n.ci.Gs(t,a))).next((()=>a))})).then((t=>(n.ii=r,t)))}function al(t,e){const n=ui(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}async function cl(t,e,n){const s=ui(t),r=s.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Du(t))throw t;si("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.ii=s.ii.remove(e),s.ri.delete(r.target)}function ul(t,e,n){const s=ui(t);let r=Ci.min(),i=rc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=ui(t),r=s.ri.get(n);return void 0!==r?bu.resolve(s.ii.get(r)):s.fs.getTargetData(e,n)}(s,t,ea(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.si.Qs(t,e,n?r:Ci.min(),n?i:rc()))).next((t=>(function(t,e,n){let s=Ci.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.oi.set(e,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,li:i})))))}class hl{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return bu.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:Ec(n.createTime)}),bu.resolve()}getNamedQuery(t,e){return bu.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:Gu(t.bundledQuery),readTime:Ec(t.readTime)}}(e)),bu.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ll{constructor(){this.overlays=new Ga(Wi.comparator),this.gi=new Map}getOverlay(t,e){return bu.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.Xt(t,e,s)})),bu.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.gi.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),bu.resolve()}getOverlaysForCollection(t,e,n){const s=ec(),r=e.length+1,i=new Wi(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return bu.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Ga(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ec(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ec(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return bu.resolve(o)}Xt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);if(null!==s){const t=this.gi.get(s.largestBatchId).delete(n.key);this.gi.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Lu(e,n));let r=this.gi.get(e);void 0===r&&(r=rc(),this.gi.set(e,r)),this.gi.set(e,r.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dl{constructor(){this.yi=new Wa(fl.pi),this.Ii=new Wa(fl.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new fl(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new fl(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new Wi(new Mi([])),n=new fl(e,t),s=new fl(e,t+1),r=[];return this.Ii.forEachInRange([n,s],(t=>{this.Ai(t),r.push(t.key)})),r}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new Wi(new Mi([])),n=new fl(e,t),s=new fl(e,t+1);let r=rc();return this.Ii.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new fl(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fl{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return Wi.comparator(t.key,e.key)||Ti(t.vi,e.vi)}static Ti(t,e){return Ti(t.vi,e.vi)||Wi.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Wa(fl.pi)}checkEmpty(t){return bu.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,s){const r=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new Mu(r,e,n,s);this.Bs.push(i);for(const e of s)this.Di=this.Di.add(new fl(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return bu.resolve(i)}lookupMutationBatch(t,e){return bu.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.xi(n),r=s<0?0:s;return bu.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return bu.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return bu.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fl(e,0),s=new fl(e,Number.POSITIVE_INFINITY),r=[];return this.Di.forEachInRange([n,s],(t=>{const e=this.Ci(t.vi);r.push(e)})),bu.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Wa(Ti);return e.forEach((t=>{const e=new fl(t,0),s=new fl(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,s],(t=>{n=n.add(t.vi)}))})),bu.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Wi.isDocumentKey(r)||(r=r.child(""));const i=new fl(new Wi(r),0);let o=new Wa(Ti);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.vi)),!0)}),i),bu.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ci(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return bu.forEach(e.mutations,(s=>{const r=new fl(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new fl(e,0),s=this.Di.firstAfterOrEqual(n);return bu.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.Bs.length,bu.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pl{constructor(t){this.Mi=t,this.docs=new Ga(Wi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return bu.resolve(n?n.document.mutableCopy():wo.newInvalidDocument(e))}getEntries(t,e){let n=Ja();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():wo.newInvalidDocument(t))})),bu.resolve(n)}getAllFromCollection(t,e,n){let s=Ja();const r=new Wi(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Co(Do(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return bu.resolve(s)}getAllFromCollectionGroup(t,e,n,s){ai()}Oi(t,e){return bu.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ml(this)}getSize(t){return bu.resolve(this.size)}}class ml extends Bh{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Kn.addEntry(t,s)):this.Kn.removeEntry(n)})),bu.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yl{constructor(t){this.persistence=t,this.Fi=new Ka((t=>No(t)),ko),this.lastRemoteSnapshotVersion=Ci.min(),this.highestTargetId=0,this.$i=0,this.Bi=new dl,this.targetCount=0,this.Li=Ch.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),bu.resolve()}getLastRemoteSnapshotVersion(t){return bu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return bu.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),bu.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),bu.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new Ch(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,bu.resolve()}updateTargetData(t,e){return this.Tn(e),bu.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,bu.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Fi.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),bu.waitFor(r).next((()=>s))}getTargetCount(t){return bu.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return bu.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),bu.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),bu.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),bu.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return bu.resolve(n)}containsKey(t,e){return bu.resolve(this.Bi.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vl{constructor(t,e){this.Ui={},this.overlays={},this.es=new bi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new yl(this),this.indexManager=new hh,this.ds=function(t){return new pl(t)}((t=>this.referenceDelegate.qi(t))),this.M=new Vu(e),this._s=new hl(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ll,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new gl(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){si("MemoryPersistence","Starting transaction:",t);const s=new wl(this.es.next());return this.referenceDelegate.Ki(),n(s).next((t=>this.referenceDelegate.Gi(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Qi(t,e){return bu.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class wl extends wu{constructor(t){super(),this.currentSequenceNumber=t}}class bl{constructor(t){this.persistence=t,this.ji=new dl,this.Wi=null}static zi(t){return new bl(t)}get Hi(){if(this.Wi)return this.Wi;throw ai()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),bu.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),bu.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),bu.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return bu.forEach(this.Hi,(n=>{const s=Wi.fromPath(n);return this.Ji(t,s).next((t=>{t||e.removeEntry(s,Ci.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return bu.or([()=>bu.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}class Il{constructor(){this.activeTargetIds=oc()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class El{constructor(){this.$r=new Il,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Il,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tl{Lr(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sl{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){si("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){si("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xl{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,s,r){const i=this.uo(t,e);si("RestConnection","Sending: ",i,n);const o={};return this.ao(o,s,r),this.co(t,i,o,n).then((t=>(si("RestConnection","Received: ",t),t)),(e=>{throw ii("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ho(t,e,n,s,r){return this.oo(t,e,n,s,r)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ti,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Dl[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((r,i)=>{const o=new Xr;o.listenOnce(Gr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Kr.NO_ERROR:const e=o.getResponseJson();si("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Kr.TIMEOUT:si("Connection",'RPC "'+t+'" timed out'),i(new li(hi.DEADLINE_EXCEEDED,"Request time out"));break;case Kr.HTTP_ERROR:const n=o.getStatus();if(si("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(hi).indexOf(e)>=0?e:hi.UNKNOWN}(t.status);i(new li(e,t.message))}else i(new li(hi.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new li(hi.UNAVAILABLE,"Connection failed."));break;default:ai()}}finally{si("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}lo(t,e,n){const s=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Br,i=Rn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Qr({})),this.ao(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())||"object"==typeof navigator&&"ReactNative"===navigator.product||Q().indexOf("Electron/")>=0||function(){const t=Q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||Q().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");si("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const l=new xl({Wr:t=>{h?si("Connection","Not sending because WebChannel is closed:",t):(u||(si("Connection","Opening WebChannel transport."),c.open(),u=!0),si("Connection","WebChannel sending:",t),c.send(t))},zr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Yr.EventType.OPEN,(()=>{h||si("Connection","WebChannel transport opened.")})),d(c,Yr.EventType.CLOSE,(()=>{h||(h=!0,si("Connection","WebChannel transport closed"),l.no())})),d(c,Yr.EventType.ERROR,(t=>{h||(h=!0,ii("Connection","WebChannel transport errored:",t),l.no(new li(hi.UNAVAILABLE,"The operation could not be completed")))})),d(c,Yr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];ci(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){si("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=qa[t];if(void 0!==e)return $a(e)}(t),n=r.message;void 0===e&&(e=hi.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,l.no(new li(e,n)),c.close()}else si("Connection","WebChannel received:",n),l.so(n)}})),d(i,zr.STAT_EVENT,(t=>{t.stat===Hr?si("Connection","Detected buffering proxy"):t.stat===Wr&&si("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.eo()}),0),l}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Al(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _l(t){return new vc(t,!0)}class Nl{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=s,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),s=Math.max(0,e-n);s>0&&si("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kl{constructor(t,e,n,s,r,i,o,a){this.Yn=t,this.Ro=n,this.Po=s,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Nl(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===hi.RESOURCE_EXHAUSTED?(ri(e.toString()),ri("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===hi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new li(hi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return si("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(si("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ml extends kl{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.M=r}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ai()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.N?(ci(void 0===e||"string"==typeof e),Vi.fromBase64String(e||"")):(ci(void 0===e||e instanceof Uint8Array),Vi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?hi.UNKNOWN:$a(t.code);return new li(e,t.message||"")}(o);n=new lc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xc(t,s.document.name),i=Ec(s.document.updateTime),o=new yo({mapValue:{fields:s.document.fields}}),a=wo.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new uc(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xc(t,s.document),i=s.readTime?Ec(s.readTime):Ci.min(),o=wo.newNoDocument(r,i),a=s.removedTargetIds||[];n=new uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xc(t,s.document),i=s.removedTargetIds||[];n=new uc([],i,r,null)}else{if(!("filter"in e))return ai();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Ua(s),i=t.targetId;n=new hc(i,r)}}return n}(this.M,t),n=function(t){if(!("targetChange"in t))return Ci.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ci.min():e.readTime?Ec(e.readTime):Ci.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=_c(this.M),e.addTarget=function(t,e){let n;const s=e.target;return n=Mo(s)?{documents:Lc(t,s)}:{query:Oc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=bc(t,e.resumeToken):e.snapshotVersion.compareTo(Ci.min())>0&&(n.readTime=wc(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ai()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=_c(this.M),e.removeTarget=t,this.Fo(e)}}class Rl extends kl{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.M=r,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(ci(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=function(t,e){return t&&t.length>0?(ci(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ec(t.updateTime):Ec(e);return n.isEqual(Ci.min())&&(n=Ec(e)),new Sa(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Ec(t.commitTime);return this.listener.Yo(n,e)}return ci(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=_c(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Mc(this.M,t)))};this.Fo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ll extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=s,this.tu=!1}eu(){if(this.tu)throw new li(hi.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.oo(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new li(hi.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.ho(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new li(hi.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class Ol{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(ri(e),this.iu=!1):si("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vl{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=r,this._u.Lr((t=>{n.enqueueAndForget((async()=>{Gl(this)&&(si("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ui(t);e.fu.add(4),await Fl(e),e.wu.set("Unknown"),e.fu.delete(4),await Pl(e)}(this))}))})),this.wu=new Ol(n,s)}}async function Pl(t){if(Gl(t))for(const e of t.du)await e(!0)}async function Fl(t){for(const e of t.du)await e(!1)}function Bl(t,e){const n=ui(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Kl(n)?$l(n):cd(n).xo()&&ql(n,e))}function Ul(t,e){const n=ui(t),s=cd(n);n.lu.delete(e),s.xo()&&jl(n,e),0===n.lu.size&&(s.xo()?s.Mo():Gl(n)&&n.wu.set("Unknown"))}function ql(t,e){t.mu.Z(e.targetId),cd(t).jo(e)}function jl(t,e){t.mu.Z(e),cd(t).Wo(e)}function $l(t){t.mu=new fc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),cd(t).start(),t.wu.ru()}function Kl(t){return Gl(t)&&!cd(t).Co()&&t.lu.size>0}function Gl(t){return 0===ui(t).fu.size}function zl(t){t.mu=void 0}async function Hl(t){t.lu.forEach(((e,n)=>{ql(t,e)}))}async function Wl(t,e){zl(t),Kl(t)?(t.wu.au(e),$l(t)):t.wu.set("Unknown")}async function Ql(t,e,n){if(t.wu.set("Online"),e instanceof lc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.lu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.lu.delete(s),t.mu.removeTarget(s))}(t,e)}catch(n){si("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Yl(t,n)}else if(e instanceof uc?t.mu.ut(e):e instanceof hc?t.mu._t(e):t.mu.ht(e),!n.isEqual(Ci.min()))try{const e=await il(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.lu.get(s);r&&t.lu.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Vi.EMPTY_BYTE_STRING,n.snapshotVersion)),jl(t,e);const s=new Ou(n.target,e,1,n.sequenceNumber);ql(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){si("RemoteStore","Failed to raise snapshot:",e),await Yl(t,e)}}async function Yl(t,e,n){if(!Du(e))throw e;t.fu.add(1),await Fl(t),t.wu.set("Offline"),n||(n=()=>il(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{si("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Pl(t)}))}function Xl(t,e){return e().catch((n=>Yl(t,n,e)))}async function Jl(t){const e=ui(t),n=ud(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Zl(e);)try{const t=await al(e.localStore,s);if(null===t){0===e.hu.length&&n.Mo();break}s=t.batchId,td(e,t)}catch(t){await Yl(e,t)}ed(e)&&nd(e)}function Zl(t){return Gl(t)&&t.hu.length<10}function td(t,e){t.hu.push(e);const n=ud(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ed(t){return Gl(t)&&!ud(t).Co()&&t.hu.length>0}function nd(t){ud(t).start()}async function sd(t){ud(t).Zo()}async function rd(t){const e=ud(t);for(const n of t.hu)e.Jo(n.mutations)}async function id(t,e,n){const s=t.hu.shift(),r=Ru.from(s,e,n);await Xl(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Jl(t)}async function od(t,e){e&&ud(t).Ho&&await async function(t,e){if(function(t){switch(t){default:return ai();case hi.CANCELLED:case hi.UNKNOWN:case hi.DEADLINE_EXCEEDED:case hi.RESOURCE_EXHAUSTED:case hi.INTERNAL:case hi.UNAVAILABLE:case hi.UNAUTHENTICATED:return!1;case hi.INVALID_ARGUMENT:case hi.NOT_FOUND:case hi.ALREADY_EXISTS:case hi.PERMISSION_DENIED:case hi.FAILED_PRECONDITION:case hi.ABORTED:case hi.OUT_OF_RANGE:case hi.UNIMPLEMENTED:case hi.DATA_LOSS:return!0}}(n=e.code)&&n!==hi.ABORTED){const n=t.hu.shift();ud(t).ko(),await Xl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Jl(t)}var n}(t,e),ed(t)&&nd(t)}async function ad(t,e){const n=ui(t);n.asyncQueue.verifyOperationInProgress(),si("RemoteStore","RemoteStore received new credentials");const s=Gl(n);n.fu.add(3),await Fl(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Pl(n)}function cd(t){return t.gu||(t.gu=function(t,e,n){const s=ui(t);return s.eu(),new Ml(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Hr:Hl.bind(null,t),Yr:Wl.bind(null,t),Qo:Ql.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),Kl(t)?$l(t):t.wu.set("Unknown")):(await t.gu.stop(),zl(t))}))),t.gu}function ud(t){return t.yu||(t.yu=function(t,e,n){const s=ui(t);return s.eu(),new Rl(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{Hr:sd.bind(null,t),Yr:od.bind(null,t),Xo:rd.bind(null,t),Yo:id.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await Jl(t)):(await t.yu.stop(),t.hu.length>0&&(si("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class hd{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new hd(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(hi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ld(t,e){if(ri("AsyncQueue",`${e}: ${t}`),Du(t))return new li(hi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dd{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Wi.comparator(e.key,n.key):(t,e)=>Wi.comparator(t.key,e.key),this.keyedMap=tc(),this.sortedSet=new Ga(this.comparator)}static emptySet(t){return new dd(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dd))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new dd;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fd{constructor(){this.pu=new Ga(Wi.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):ai():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class gd{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new gd(t,e,dd.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&na(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pd{constructor(){this.Tu=void 0,this.listeners=[]}}class md{constructor(){this.queries=new Ka((t=>sa(t)),na),this.onlineState="Unknown",this.Eu=new Set}}function yd(t,e){const n=ui(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Ru(t)&&(s=!0);r.Tu=t}}s&&wd(n)}function vd(t,e,n){const s=ui(t),r=s.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);s.queries.delete(e)}function wd(t){t.Eu.forEach((t=>{t.next()}))}class bd{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Cu&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=gd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Id{constructor(t){this.key=t}}class Ed{constructor(t){this.key=t}}class Td{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=rc(),this.mutatedKeys=rc(),this.Uu=oa(t),this.qu=new dd(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new fd,s=e?e.qu:this.qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a=Jo(this.query)&&s.size===this.query.limit?s.last():null,c=Zo(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=ia(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ju(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Uu(h,a)>0||c&&this.Uu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),Jo(this.query)||Zo(this.query))for(;i.size>this.query.limit;){const t=Jo(this.query)?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{qu:i,Qu:n,ni:o,mutatedKeys:r}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const r=t.Qu.Iu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ai()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const i=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==r.length||a?{snapshot:new gd(this.query,t.qu,s,r,t.mutatedKeys,0===o,a,!1),Hu:i}:{Hu:i}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new fd,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=rc(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new Ed(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new Id(n))})),e}Yu(t){this.$u=t.li,this.Lu=rc();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return gd.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Sd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Dd{constructor(t){this.key=t,this.Zu=!1}}class xd{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.ta={},this.ea=new Ka((t=>sa(t)),na),this.na=new Map,this.sa=new Set,this.ia=new Ga(Wi.comparator),this.ra=new Map,this.oa=new dl,this.ua={},this.aa=new Map,this.ca=Ch.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Cd(t,e){const n=function(t){const e=ui(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_d.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$d.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kd.bind(null,e),e.ta.Qo=yd.bind(null,e.eventManager),e.ta.fa=vd.bind(null,e.eventManager),e}(t);let s,r;const i=n.ea.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Xu();else{const t=await function(t,e){const n=ui(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.fs.getTargetData(t,e).next((r=>r?(s=r,bu.resolve(s)):n.fs.allocateTargetId(t).next((r=>(s=new Ou(e,r,0,t.currentSequenceNumber),n.fs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.ii.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}(n.localStore,ea(e));n.isPrimaryClient&&Bl(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await async function(t,e,n,s){t.la=(e,n,s)=>async function(t,e,n,s){let r=e.view.Gu(n);r.ni&&(r=await ul(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Fd(t,e.targetId,o.Hu),o.snapshot}(t,e,n,s);const r=await ul(t.localStore,e,!0),i=new Td(e,r.li),o=i.Gu(r.documents),a=cc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Fd(t,n,c.Hu);const u=new Sd(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}(n,e,s,"current"===i)}return r}async function Ad(t,e){const n=ui(t),s=n.ea.get(e),r=n.na.get(s.targetId);if(r.length>1)return n.na.set(s.targetId,r.filter((t=>!na(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cl(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Ul(n.remoteStore,s.targetId),Vd(n,s.targetId)})).catch(Mh)):(Vd(n,s.targetId),await cl(n.localStore,s.targetId,!0))}async function _d(t,e){const n=ui(t);try{const t=await ol(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ra.get(e);s&&(ci(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Zu=!0:t.modifiedDocuments.size>0?ci(s.Zu):t.removedDocuments.size>0&&(ci(s.Zu),s.Zu=!1))})),await qd(n,t,e)}catch(t){await Mh(t)}}function Nd(t,e,n){const s=ui(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ea.forEach(((n,s)=>{const r=s.view.Au(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=ui(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Au(e)&&(s=!0)})),s&&wd(n)}(s.eventManager,e),t.length&&s.ta.Qo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kd(t,e,n){const s=ui(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ra.get(e),i=r&&r.key;if(i){let t=new Ga(Wi.comparator);t=t.insert(i,wo.newNoDocument(i,Ci.min()));const n=rc().add(i),r=new ac(Ci.min(),new Map,new Wa(Ti),t,n);await _d(s,r),s.ia=s.ia.remove(i),s.ra.delete(e),Ud(s)}else await cl(s.localStore,e,!1).then((()=>Vd(s,e,n))).catch(Mh)}async function Md(t,e){const n=ui(t),s=e.batch.batchId;try{const t=await function(t,e){const n=ui(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=bu.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ci(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,s)))}))}(n.localStore,e);Od(n,s,null),Ld(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qd(n,t)}catch(t){await Mh(t)}}async function Rd(t,e,n){const s=ui(t);try{const t=await function(t,e){const n=ui(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.Bs.lookupMutationBatch(t,e).next((e=>(ci(null!==e),s=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,s)))}))}(s.localStore,e);Od(s,e,n),Ld(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qd(s,t)}catch(n){await Mh(n)}}function Ld(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function Od(t,e,n){const s=ui(t);let r=s.ua[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.ua[s.currentUser.toKey()]=r}}function Vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||Pd(t,e)}))}function Pd(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(Ul(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Ud(t))}function Fd(t,e,n){for(const s of n)s instanceof Id?(t.oa.addReference(s.key,e),Bd(t,s)):s instanceof Ed?(si("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||Pd(t,s.key)):ai()}function Bd(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||(si("SyncEngine","New document in limbo: "+n),t.sa.add(s),Ud(t))}function Ud(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Wi(Mi.fromString(e)),s=t.ca.next();t.ra.set(s,new Dd(n)),t.ia=t.ia.insert(n,s),Bl(t.remoteStore,new Ou(ea(Xo(n.path)),s,2,bi.A))}}async function qd(t,e,n){const s=ui(t),r=[],i=[],o=[];s.ea.isEmpty()||(s.ea.forEach(((t,a)=>{o.push(s.la(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=tl.Ys(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.ta.Qo(r),await async function(t,e){const n=ui(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>bu.forEach(e,(e=>bu.forEach(e.Hs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>bu.forEach(e.Js,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Du(t))throw t;si("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ii.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.ii=n.ii.insert(e,r)}}}(s.localStore,i))}async function jd(t,e){const n=ui(t);if(!n.currentUser.isEqual(e)){si("SyncEngine","User change. New user:",e.toKey());const t=await rl(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new li(hi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.aa.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await qd(n,t.hi)}}function $d(t,e){const n=ui(t),s=n.ra.get(e);if(s&&s.Zu)return rc().add(s.key);{let t=rc();const s=n.na.get(e);if(!s)return t;for(const e of s){const s=n.ea.get(e);t=t.unionWith(s.view.Ku)}return t}}function Kd(t){const e=ui(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Md.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rd.bind(null,e),e}class Gd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=_l(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return sl(this.persistence,new el,t.initialUser,this.M)}wa(t){return new vl(bl.zi,this.M)}_a(t){return new El}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zd extends Gd{constructor(t,e,n){super(),this.ya=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ya.initialize(this,t),await Kd(this.ya.syncEngine),await Jl(this.ya.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ga(t){return sl(this.persistence,new el,t.initialUser,this.M)}ma(t){const e=this.persistence.referenceDelegate.garbageCollector;return new Oh(e,t.asyncQueue)}wa(t){const e=function(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?wh.withCacheSize(this.cacheSizeBytes):wh.DEFAULT;return new Yh(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,"undefined"!=typeof window?window:null,Al(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(t){return new El}}class Hd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=jd.bind(null,this.syncEngine),await async function(t,e){const n=ui(t);e?(n.fu.delete(2),await Pl(n)):e||(n.fu.add(2),await Fl(n),n.wu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new md}createDatastore(t){const e=_l(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Cl(s));var s;return function(t,e,n,s){return new Ll(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Nd(this.syncEngine,t,0),i=Sl.vt()?new Sl:new Tl,new Vl(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new xd(t,e,n,s,r,i);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ui(t);si("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Fl(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qd{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Zr.UNAUTHENTICATED,this.clientId=Ei.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{si("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(si("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(hi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ld(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress(),si("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await rl(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(si("FirestoreClient","Using default OfflineComponentProvider"),await Yd(t,new Gd)),t.offlineComponents}(t);si("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>ad(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ad(e.remoteStore,n))),t.onlineComponents=e}async function Jd(t){return t.onlineComponents||(si("FirestoreClient","Using default OnlineComponentProvider"),await Xd(t,new Hd)),t.onlineComponents}async function Zd(t){const e=await Jd(t),n=e.eventManager;return n.onListen=Cd.bind(null,e.syncEngine),n.onUnlisten=Ad.bind(null,e.syncEngine),n}const tf=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ef(t,e,n){if(!n)throw new li(hi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nf(t){if(!Wi.isDocumentKey(t))throw new li(hi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(Wi.isDocumentKey(t))throw new li(hi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ai()}function of(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new li(hi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rf(t);throw new li(hi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class af{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new li(hi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new li(hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new li(hi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cf{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1,t instanceof Gi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new li(hi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(t.options.projectId)}(t))}get app(){if(!this._app)throw new li(hi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new li(hi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new gi;switch(t.type){case"gapi":const e=t.client;return ci(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new yi(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new li(hi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tf.get(t);e&&(si("ComponentProvider","Removing Datastore"),tf.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new uf(this.firestore,t,this._key)}}class hf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hf(this.firestore,t,this._query)}}class lf extends hf{constructor(t,e,n){super(t,e,Xo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new uf(this.firestore,null,new Wi(t))}withConverter(t){return new lf(this.firestore,t,this._path)}}function df(t,e,...n){if(t=st(t),1===arguments.length&&(e=Ei.R()),ef("doc","path",e),t instanceof cf){const s=Mi.fromString(e,...n);return nf(s),new uf(t,null,new Wi(s))}{if(!(t instanceof uf||t instanceof lf))throw new li(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Mi.fromString(e,...n));return nf(s),new uf(t.firestore,t instanceof lf?t.converter:null,new Wi(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ff{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Nl(this,"async_queue_retry"),this.qa=()=>{const t=Al();t&&si("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Al();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Al();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new di;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!Du(t))throw t;si("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw ri("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const s=hd.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(s),s}Ka(){this.$a&&ai()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}function gf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class pf extends cf{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ff,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yf(this),this._firestoreClient.terminate()}}function mf(t){return t._firestoreClient||yf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yf(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Ki(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Qd(t._authCredentials,t._appCheckCredentials,t._queue,s)}function vf(t,e){!function(t){if(t._initialized||t._terminated)throw new li(hi.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t=of(t,pf));const n=mf(t),s=t._freezeSettings(),r=new Hd;return function(t,e,n){const s=new di;return t.asyncQueue.enqueue((async()=>{try{await Yd(t,n),await Xd(t,e),s.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===hi.FAILED_PRECONDITION||t.code===hi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),s.reject(t)}})).then((()=>s.promise))}(n,r,new zd(r,s.cacheSizeBytes,null==e?void 0:e.forceOwnership))}class wf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new li(hi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Li(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bf(Vi.fromBase64String(t))}catch(t){throw new li(hi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new bf(Vi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ef{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new li(hi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new li(hi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ti(this._lat,t._lat)||Ti(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Tf=/^__.*__$/;class Sf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new La(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ra(t,this.data,e,this.fieldTransforms)}}function Df(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ai()}}class xf{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Ya(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new xf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.nc(t),s}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.Ya(),s}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Pf(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Df(this.Xa)&&Tf.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class Cf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||_l(t)}ac(t,e,n,s=!1){return new xf({Xa:t,methodName:e,uc:n,path:Li.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Af(t){const e=t._freezeSettings(),n=_l(t._databaseId);return new Cf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _f(t,e,n,s,r,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,r);Rf("Data must be an object, but it was:",o,s);const a=kf(s,o);let c,u;if(i.merge)c=new Oi(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Lf(e,s,n);if(!o.contains(r))throw new li(hi.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ff(t,r)||t.push(r)}c=new Oi(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Sf(new yo(a),c,u)}function Nf(t,e){if(Mf(t=st(t)))return Rf("Unsupported field value:",e,t),kf(t,e);if(t instanceof If)return function(t,e){if(!Df(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Nf(r,e.ic(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=st(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ha(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=xi.fromDate(t);return{timestampValue:wc(e.M,n)}}if(t instanceof xi){const n=new xi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wc(e.M,n)}}if(t instanceof Ef)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bf)return{bytesValue:bc(e.M,t._byteString)};if(t instanceof uf){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${rf(t)}`)}(t,e)}function kf(t,e){const n={};return Ni(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,((t,s)=>{const r=Nf(s,e.tc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Mf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof xi||t instanceof Ef||t instanceof bf||t instanceof uf||t instanceof If)}function Rf(t,e,n){if(!Mf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=rf(n);throw"an object"===s?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function Lf(t,e,n){if((e=st(e))instanceof wf)return e._internalPath;if("string"==typeof e)return Vf(t,e);throw Pf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Of=new RegExp("[~\\*/\\[\\]]");function Vf(t,e,n){if(e.search(Of)>=0)throw Pf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wf(...e.split("."))._internalPath}catch(s){throw Pf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pf(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new li(hi.INVALID_ARGUMENT,a+t+c)}function Ff(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bf{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new uf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Uf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qf("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Uf extends Bf{data(){return super.data()}}function qf(t,e){return"string"==typeof e?Vf(t,e):e instanceof wf?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $f extends Bf{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qf("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kf extends $f{data(t={}){return super.data(t)}}class Gf{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new jf(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Kf(this._firestore,this._userDataWriter,n.key,n,new jf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new li(hi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Kf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new jf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Kf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new jf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:zf(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function zf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ai()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hf extends
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class{convertValue(t,e="none"){switch(Xi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ai()}}convertObject(t,e){const n={};return _i(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Ef(Bi(t.latitude),Bi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ji(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp($i(t));default:return null}}convertTimestamp(t){const e=Fi(t);return new xi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Mi.fromString(t);ci(Gc(n));const s=new Gi(n.get(1),n.get(3)),r=new Wi(n.popFirst(5));return s.isEqual(e)||ri(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new bf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new uf(this.firestore,null,e)}}function Wf(t,e,n){t=of(t,uf);const s=of(t.firestore,pf),r=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);return Yf(s,[_f(Af(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Da.none())])}function Qf(t,...e){var n,s,r;t=st(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||gf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(gf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let c,u,h;if(t instanceof uf)u=of(t.firestore,pf),h=Xo(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const s=n.docs.get(e._key),r=new Hf(t);return new $f(t,r,e._key,s,new jf(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=of(t,hf);u=of(n.firestore,pf),h=n._query;const s=new Hf(u);c={next:t=>{e[o]&&e[o](new Gf(u,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Zo(t)&&0===t.explicitOrderBy.length)throw new li(hi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,s){const r=new Wd(s),i=new bd(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=ui(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new pd),r)try{i.Tu=await n.onListen(s)}catch(t){const n=ld(t,`Initialization of query '${ra(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&wd(n)}(await Zd(t),i))),()=>{r.Ia(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=ui(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}(await Zd(t),i)))}}(mf(u),h,a,c)}function Yf(t,e){return function(t,e){const n=new di;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=Kd(t);try{const t=await function(t,e){const n=ui(t),s=xi.now(),r=e.reduce(((t,e)=>t.add(e.key)),rc());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,r).next((r=>{i=r;const o=[];for(const t of e){const e=Na(t,i.get(t.key));null!=e&&o.push(new La(t.key,e,vo(e.value.mapValue),Da.exists(!0)))}return n.Bs.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ua[t.currentUser.toKey()];s||(s=new Ga(Ti)),s=s.insert(e,n),t.ua[t.currentUser.toKey()]=s}(s,t.batchId,n),await qd(s,t.changes),await Jl(s.remoteStore)}catch(t){const e=ld(t,"Failed to persist write");n.reject(e)}}(await function(t){return Jd(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(mf(t),e)}!function(t,e=!0){ti="9.6.11",At(new ut("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=new pf(s,new pi(t.getProvider("auth-internal")),new wi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),kt(Jr,"3.4.8",t),kt(Jr,"3.4.8","esm2017")}();var Xf=1;var Jf,Zf,tg,eg={nextValue:function(){return(Xf=(9301*Xf+49297)%233280)/233280},seed:function(t){Xf=t}},ng="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function sg(){tg=!1}function rg(t){if(t){if(t!==Jf){if(t.length!==ng.length)throw new Error("Custom alphabet for shortid must be "+ng.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+ng.length+" unique characters. These characters were not unique: "+e.join(", "));Jf=t,sg()}}else Jf!==ng&&(Jf=ng,sg())}function ig(){return tg||(tg=function(){Jf||rg(ng);for(var t,e=Jf.split(""),n=[],s=eg.nextValue();e.length>0;)s=eg.nextValue(),t=Math.floor(s*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}var og={get:function(){return Jf||ng},characters:function(t){return rg(t),Jf},seed:function(t){eg.seed(t),Zf!==t&&(sg(),Zf=t)},lookup:function(t){return ig()[t]},shuffled:ig},ag="object"==typeof window&&(window.crypto||window.msCrypto),cg=ag&&ag.getRandomValues?function(t){return ag.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},ug=function(t,e,n){for(var s=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*s*n/e.length),i="";;)for(var o=t(r),a=r;a--;)if((i+=e[o[a]&s]||"").length===+n)return i};var hg,lg,dg=function(t){for(var e,n=0,s="";!e;)s+=ug(cg,og.get(),1),e=t<Math.pow(16,n+1),n++;return s};var fg=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===lg?hg++:(hg=0,lg=n),e+=dg(7),e+=dg(t),hg>0&&(e+=dg(hg)),e+=dg(n)};var gg=function(t){return!(!t||"string"!=typeof t||t.length<6)&&!new RegExp("[^"+og.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)},pg=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t){var e=0;function n(){return fg(e)}t.exports=n,t.exports.generate=n,t.exports.seed=function(e){return og.seed(e),t.exports},t.exports.worker=function(n){return e=n,t.exports},t.exports.characters=function(t){return void 0!==t&&og.characters(t),og.shuffled()},t.exports.isValid=gg})),mg=pg;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
kt("firebase","9.6.11","app");const yg=[];const vg=function(e,n=t){let s;const r=new Set;function i(t){if(o(e,t)&&(e=t,s)){const t=!yg.length;for(const t of r)t[1](),yg.push(t,e);if(t){for(let t=0;t<yg.length;t+=2)yg[t][0](yg[t+1]);yg.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,a=t){const c=[o,a];return r.add(c),1===r.size&&(s=n(i)||t),o(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}([]);!function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw _t.create("bad-app-name",{appName:String(s)});const r=Dt.get(s);if(r){if(et(t,r.options)&&et(n,r.config))return r;throw _t.create("duplicate-app",{appName:s})}const i=new dt(s);for(const t of xt.values())i.addComponent(t);const o=new Nt(t,n,i);Dt.set(s,o)}({apiKey:"AIzaSyCWDfkNcOdd0QUc4BA1F4hl96VAEdYZu5E",authDomain:"linote-ac103.firebaseapp.com",projectId:"linote-ac103",storageBucket:"linote-ac103.appspot.com",messagingSenderId:"374152835753",appId:"1:374152835753:web:39c011cbe5ee016e15efb8"});const wg=function(t=function(t="[DEFAULT]"){const e=Dt.get(t);if(!e)throw _t.create("no-app",{appName:t});return e}()){return function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(t,"firestore").getImmediate()}(),bg=t=>{!function(t){Yf(of(t.firestore,pf),[new Fa(t._key,Da.none())])}(df(wg,"notes",t))};function Ig(e){let n,s,i,o,a,c;return{c(){n=d("div"),s=d("div"),s.textContent="×",i=p(),o=d("div"),y(s,"class","note-controls svelte-1ewksx0"),y(o,"class","note svelte-1ewksx0"),v(o,"background-color",K[e[2]]),y(o,"contenteditable",""),void 0===e[0]&&A((()=>e[5].call(o))),y(n,"class","masonry-element svelte-1ewksx0")},m(t,r){h(t,n,r),u(n,s),u(n,i),u(n,o),void 0!==e[0]&&(o.textContent=e[0]),a||(c=[m(s,"click",e[4]),m(o,"input",e[5]),m(o,"blur",e[3])],a=!0)},p(t,[e]){4&e&&v(o,"background-color",K[t[2]]),1&e&&t[0]!==o.textContent&&(o.textContent=t[0])},i:t,o:t,d(t){t&&l(n),a=!1,r(c)}}}function Eg(t,e,n){let{id:s}=e,{color:r}=e,{text:i}=e;return t.$$set=t=>{"id"in t&&n(1,s=t.id),"color"in t&&n(2,r=t.color),"text"in t&&n(0,i=t.text)},[i,s,r,function(t){((t,e)=>{Wf(df(wg,"notes",t),{text:e},{merge:!0})})(s,t.target.innerText)},()=>bg(s),function(){i=this.textContent,n(0,i)}]}class Tg extends ${constructor(t){super(),j(this,t,Eg,Ig,o,{id:1,color:2,text:0})}}function Sg(t,e,n){const s=t.slice();return s[4]=e[n],s[6]=n,s}function Dg(e){let n,s,r,i;return{c(){n=d("button"),y(n,"class","add-note-color svelte-1djc929"),y(n,"data-color-idx",s=e[6]),v(n,"background-color",e[4])},m(t,s){h(t,n,s),r||(i=m(n,"click",e[1]),r=!0)},p:t,d(t){t&&l(n),r=!1,i()}}}function xg(e){let n,s,r,i,o,a,g,v,w,b,I,E,T,S,D,x=K,C=[];for(let t=0;t<x.length;t+=1)C[t]=Dg(Sg(e,x,t));return{c(){n=d("div"),s=d("div");for(let t=0;t<C.length;t+=1)C[t].c();i=p(),o=d("button"),a=f("svg"),g=f("g"),v=f("rect"),w=f("g"),b=f("g"),I=f("line"),E=f("line"),y(s,"id","add-note-selector"),y(s,"class",r=c(e[0]?"show":"hide")+" svelte-1djc929"),y(v,"width","48"),y(v,"height","48"),y(v,"rx","12"),y(v,"fill","#E7E7E7"),y(I,"x1","-12"),y(I,"y1","0"),y(I,"x2","12"),y(I,"y2","0"),y(E,"x1","0"),y(E,"y1","-12"),y(E,"x2","0"),y(E,"y2","12"),y(b,"id","cross"),y(b,"class","svelte-1djc929"),y(w,"stroke","#4D4D4D"),y(w,"stroke-width","2"),y(w,"transform","translate(24 24)"),y(a,"class",T=e[0]?"active":""),y(a,"width","48"),y(a,"height","48"),y(a,"fill","none"),y(a,"xmlns","http://www.w3.org/2000/svg"),y(o,"id","add-note-btn"),y(o,"class","svelte-1djc929"),y(n,"id","add-note"),y(n,"class","svelte-1djc929")},m(t,r){h(t,n,r),u(n,s);for(let t=0;t<C.length;t+=1)C[t].m(s,null);u(n,i),u(n,o),u(o,a),u(a,g),u(g,v),u(a,w),u(w,b),u(b,I),u(b,E),S||(D=m(o,"click",e[2]),S=!0)},p(t,[e]){if(2&e){let n;for(x=K,n=0;n<x.length;n+=1){const r=Sg(t,x,n);C[n]?C[n].p(r,e):(C[n]=Dg(r),C[n].c(),C[n].m(s,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=x.length}1&e&&r!==(r=c(t[0]?"show":"hide")+" svelte-1djc929")&&y(s,"class",r),1&e&&T!==(T=t[0]?"active":"")&&y(a,"class",T)},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,t),S=!1,D()}}}function Cg(t,e,n){const s=I();let r=!1;return[r,function(t){n(0,r=!1),s("add",{createdAt:Date.now(),color:t.target.attributes["data-color-idx"].value})},()=>n(0,r=!r)]}class Ag extends ${constructor(t){super(),j(this,t,Cg,xg,o,{})}}function _g(t,e,n){const s=t.slice();return s[2]=e[n],s}function Ng(t,n){let s,r,i;const o=[n[2]];let a={};for(let t=0;t<o.length;t+=1)a=e(a,o[t]);return r=new Tg({props:a}),{key:t,first:null,c(){s=g(""),F(r.$$.fragment),this.first=s},m(t,e){h(t,s,e),B(r,t,e),i=!0},p(t,e){n=t;const s=1&e?function(t,e){const n={},s={},r={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const t in o)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in o)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}(o,[(i=n[2],"object"==typeof i&&null!==i?i:{})]):{};var i;r.$set(s)},i(t){i||(O(r.$$.fragment,t),i=!0)},o(t){V(r.$$.fragment,t),i=!1},d(t){t&&l(s),U(r,t)}}}function kg(t){let e,n,s,i,o=[],a=new Map,c=t[0];const u=t=>t[2].id;for(let e=0;e<c.length;e+=1){let n=_g(t,c,e),s=u(n);a.set(s,o[e]=Ng(s,n))}return s=new Ag({}),s.$on("add",t[1]),{c(){e=d("main");for(let t=0;t<o.length;t+=1)o[t].c();n=p(),F(s.$$.fragment),y(e,"class","masonry svelte-1jugjuw")},m(t,r){h(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);h(t,n,r),B(s,t,r),i=!0},p(t,[n]){1&n&&(c=t[0],L={r:0,c:[],p:L},o=function(t,e,n,s,r,i,o,a,c,u,h,l){let d=t.length,f=i.length,g=d;const p={};for(;g--;)p[t[g].key]=g;const m=[],y=new Map,v=new Map;for(g=f;g--;){const t=l(r,i,g),a=n(t);let c=o.get(a);c?s&&c.p(t,e):(c=u(a,t),c.c()),y.set(a,m[g]=c),a in p&&v.set(a,Math.abs(g-p[a]))}const w=new Set,b=new Set;function I(t){O(t,1),t.m(a,h),o.set(t.key,t),h=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],s=e.key,r=n.key;e===n?(h=e.first,d--,f--):y.has(r)?!o.has(s)||w.has(s)?I(e):b.has(r)?d--:v.get(s)>v.get(r)?(b.add(s),I(e)):(w.add(r),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)I(m[f-1]);return m}(o,n,u,1,t,c,a,e,P,Ng,null,_g),L.r||r(L.c),L=L.p)},i(t){if(!i){for(let t=0;t<c.length;t+=1)O(o[t]);O(s.$$.fragment,t),i=!0}},o(t){for(let t=0;t<o.length;t+=1)V(o[t]);V(s.$$.fragment,t),i=!1},d(t){t&&l(e);for(let t=0;t<o.length;t+=1)o[t].d();t&&l(n),U(s,t)}}}function Mg(t,e,n){let s;return a(t,vg,(t=>n(0,s=t))),[s,function(t){((t,e,n="")=>{const s=`${t}-${mg.generate()}`;Wf(df(wg,"notes",s),{color:e,text:n})})(t.detail.createdAt,t.detail.color)}]}vf(wg).catch((t=>{"failed-precondition"==t.code?console.error("Cannot enable Indexed DB data persistence",t):"unimplemented"==t.code&&console.error("Browser does not support Indexed DB data persistence",t)})),Qf(function(t,e,...n){if(t=st(t),ef("collection","path",e),t instanceof cf){const s=Mi.fromString(e,...n);return sf(s),new lf(t,null,s)}{if(!(t instanceof uf||t instanceof lf))throw new li(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Mi.fromString(e,...n));return sf(s),new lf(t.firestore,null,s)}}(wg,"notes"),(t=>{t.docChanges().forEach((t=>{const e=t.doc.id;"added"===t.type&&vg.update((n=>[...n,{id:e,...t.doc.data()}])),"removed"===t.type&&vg.update((t=>t.filter((t=>t.id!==e)))),"modified"===t.type&&vg.update((n=>n.map((n=>n.id!==e?n:{...n,...t.doc.data()}))))}))})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/LiNote/sw.js",{scope:"."}).catch((t=>console.error("Cannot register service worker",t)));return new class extends ${constructor(t){super(),j(this,t,Mg,kg,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
