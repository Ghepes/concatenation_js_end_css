(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[954047],{

/***/ 178954:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var BdA,DdA,EdA;__c.CdA=async(a,b)=>{let c=[];if(a==null)return b;const d=[];for(const e of a)d.push(e.webkitGetAsEntry());for(const e of d)e&&(a=await BdA(e),c=c.concat(a));return c.length===0?b:c};BdA=async(a,b="")=>{const c=[];let d=[];if(a.isFile)a=await DdA(a),c.push({file:a,webkitRelativePath:b+a.name});else if(a.isDirectory){const e=a.createReader();let f=[],g;do g=await EdA(e),f=f.concat(g);while(g.length!==0);for(const h of f)d=d.concat(await BdA(h,b+a.name+"/"))}return c.concat(d)};
DdA=a=>new Promise(b=>a.file(c=>b(c)));EdA=a=>new Promise(b=>a.readEntries(c=>b(c)));__c.Vta={jwf:__c.CdA};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=sourcemaps/426b2ca2a3bfe67d.js.map