(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[71674],{

/***/ 716392:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._456c437108d2d2713799e19380be528d = self._456c437108d2d2713799e19380be528d || {};(function(__c) {var igk,kgk,jgk;igk=function({name:a}){var b=indexedDB;return new Promise((c,d)=>{const e=__c.hpb("idb_database delete error"),f=b.deleteDatabase(a);f.addEventListener("blocked",()=>d(Error("operation blocked due to open connections")));f.addEventListener("error",()=>{d(e(f.error))});f.addEventListener("success",()=>c())})};__c.lgk=async function(a){const b=await jgk(a);b!=null&&(await kgk(b),b.close(),await Promise.race([igk({name:a}),__c.na(500)]))};
kgk=async function(a){const b=Array.from(a.objectStoreNames);if(b.length>0){const c=a.transaction(b,"readwrite");await Promise.all(b.map(d=>c.objectStore(d).clear()));await c.Fcb}};jgk=async function(a){if(self.indexedDB!=null){if("databases"in self.indexedDB)try{if(!(await self.indexedDB.databases()).some(({name:d})=>d===a))return}catch(d){}var b=!1,c=await __c.npb({name:a,iEd:()=>{b=!0},Ond:{type:1,tpd:!0,upd:!0}});if(b)await igk({name:a});else return c}};
}).call(self, self._456c437108d2d2713799e19380be528d);}

}])
//# sourceMappingURL=sourcemaps/9e5131c96891a2d0.js.map