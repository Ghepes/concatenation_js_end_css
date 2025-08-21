(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[413526],{

/***/ 992347:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var Ywj;Ywj=()=>new FormData;__c.Zwj=class extends Error{constructor(a,b){super(a);this.httpStatusCode=b}};
__c.$wj=class{async upload(a){var b=a.file;const c=a.qx,d=a.hMi,e=a.BZ;a=a.url;const f=this.Kcn();c.forEach((g,h)=>f.append(h,g));f.append("file",b.content);b=await this.Iu.x_a({method:"POST",url:a,body:f,BZ:e});if(b.status<200||b.status>=400)throw new __c.Zwj(b.body,b.status);return this.getResponseHeader(b,d)}async cdj(a){const b=a.hMi;a=await this.Iu.x_a({method:"PUT",url:a.url,body:a.file.content,BZ:a.BZ});if(a.status<200||a.status>=400)throw new __c.Zwj(a.body,a.status);return this.getResponseHeader(a,
b)}getResponseHeader(a,b){if(b){a=a.getResponseHeader(b);if(!a)throw Error(`${b} not found`);return a}}constructor(a,b=Ywj){this.Iu=a;this.Kcn=b}};__c.Fia={};__c.Fia.KCq=__c.Zwj;__c.Fia.Xtm=__c.$wj;__c.Fia.n5q=Ywj;
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=sourcemaps/a9286bf8462bb49e.js.map