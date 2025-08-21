(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[628558],{

/***/ 261104:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);__web_req__(777820);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var e6d=async function(a){if(!a.started)for(a.started=!0;;){const b=await a.tQn.rDg(new __c.$5d);a6d(async()=>{const c=b.eventType==="PENDING";b6d(a.UBi,d=>d(c));if(b.eventType==="SUBMITTED"){const d=await c6d(b);a6d(()=>{b6d(a.M6f,e=>e([d]))})}if(b.eventType==="SUBMITTED_V2"){const d=await d6d(b.files);b6d(a.M6f,e=>e(d))}})}},b6d=function(a,b){let c=!1;a.forEach(d=>{c||(c=b(d))})},c6d=async function(a){const b=a.filename||`${(new Date).toLocaleString()}.${__c.Kf(a.mimeType)}`,c=await fetch(a.url).then(d=>
d.blob());return new File([c],b,{type:a.mimeType})},d6d=async function(a){a=a.map(c=>c6d(c));a=await Promise.allSettled(a);const b=[];for(const c of a)c.status!=="rejected"&&b.push(c.value);return b},a6d=__webpack_require__(400770).runInAction;var f6d;f6d=class{mJm(a){const b=this.counter++;this.M6f.set(b,a);e6d(this)}CJm(a){const b=this.counter++;this.UBi.set(b,a);e6d(this)}removeListener(a){this.M6f.delete(a);this.UBi.delete(a)}constructor(a){this.tQn=a;this.counter=1;this.M6f=new Map;this.UBi=new Map;this.started=!1}};__c.Bja={};__c.Bja.L5g=f6d;
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=sourcemaps/e2e3c082f1b3a8d4.js.map