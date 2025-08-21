(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[71674],{

/***/ 716392:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._456c437108d2d2713799e19380be528d = self._456c437108d2d2713799e19380be528d || {};(function(__c) {var Fgk,Hgk,Ggk;Fgk=function({name:a}){var b=indexedDB;return new Promise((c,d)=>{const e=__c.fpb("idb_database delete error"),f=b.deleteDatabase(a);f.addEventListener("blocked",()=>d(Error("operation blocked due to open connections")));f.addEventListener("error",()=>{d(e(f.error))});f.addEventListener("success",()=>c())})};__c.Igk=async function(a){const b=await Ggk(a);b!=null&&(await Hgk(b),b.close(),await Promise.race([Fgk({name:a}),__c.ma(500)]))};
Hgk=async function(a){const b=Array.from(a.objectStoreNames);if(b.length>0){const c=a.transaction(b,"readwrite");await Promise.all(b.map(d=>c.objectStore(d).clear()));await c.Wcb}};Ggk=async function(a){if(self.indexedDB!=null){if("databases"in self.indexedDB)try{if(!(await self.indexedDB.databases()).some(({name:d})=>d===a))return}catch(d){}var b=!1,c=await __c.lpb({name:a,zEd:()=>{b=!0},eod:{type:1,Jpd:!0,Kpd:!0}});if(b)await Fgk({name:a});else return c}};
}).call(self, self._456c437108d2d2713799e19380be528d);}

}])
//# sourceMappingURL=sourcemaps/c156bfdcbdbf37c0.js.map