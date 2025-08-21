;// __FILE_CONTENT_FOR__:adb9f05d0c6bcc8a.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[696076],{

/***/ 512562:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var a0k,$_k;a0k=async function(a){const b=Date.now(),c=await a.cache.keys();await Promise.all(c.map(async d=>{const e=await a.cache.match(d);e&&$_k(e,b)&&await a.cache.delete(d)}))};$_k=function(a,b){a=a.headers.get("X-Expire");return!!a&&b>=parseInt(a,10)};
__c.b0k=class{static async create(a){try{const b=await a.caches.open("blobs");return new __c.b0k(b,a)}catch(b){}}lHa(a,b,c,d){d=d?Date.now()+d:void 0;const e=new this.window.Headers;c&&e.set("X-Name",encodeURI(c));d&&e.set("X-Expire",d.toString(10));return this.cache.put(`/${encodeURIComponent(a)}`,new this.window.Response(b,{headers:e}))}async getBlob(a){if((a=await this.cache.match(`/${encodeURIComponent(a)}`))&&!$_k(a,Date.now())){var b=a.headers.get("X-Name");b=b?decodeURI(b):void 0;return{blob:await a.blob(),
name:b}}}async oWc(a){await this.cache.delete(`/${encodeURIComponent(a)}`)}constructor(a,b){this.cache=a;this.window=b;this.window.requestIdleCallback?this.window.requestIdleCallback(()=>a0k(this)):setTimeout(()=>a0k(this),6E4)}};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/10_sourcemaps/adb9f05d0c6bcc8a.js.map