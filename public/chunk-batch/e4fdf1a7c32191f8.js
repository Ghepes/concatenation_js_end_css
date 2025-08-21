(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[560111],{

/***/ 47630:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);__web_req__(377174);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {__c.xz=function({Fh:a,Ba:b,errorService:c,V:d,ta:e}){switch(a.type){case "USER":return __c.nOh({actions:[a.action],Ba:b,errorService:c,user:d.user.id,ta:e});case "USER_BRAND":return __c.oOh({actions:[a.action],Ba:b,errorService:c,user:d.user.id,brand:d.Oa.brand.id,ta:e});case "DYNAMIC_USER":return __c.pOh({actions:[{type:a.action,tags:a.tags}],Ba:b,errorService:c,user:d.user.id,ta:e});default:throw new __c.t(a);}};
__c.nOh=async function({actions:a,Ba:b,errorService:c,user:d,ta:e}){if(!(a.length<0))try{await b.rg(new __c.uk({user:d,types:a}))}catch(f){c.Tl(f,{ta:e||"Failed to update USER actions.",extra:new Map([["action",a.map(__c.Kc.serialize)]])})}};__c.oOh=async function({actions:a,Ba:b,errorService:c,user:d,brand:e,ta:f}){if(!(a.length<0))try{await b.rg(new __c.uk({user:d,brand:e,m_:a}))}catch(g){c.Tl(g,{ta:f||"Failed to update USER_BRAND actions.",extra:new Map([["action",a.map(__c.Mc.serialize)]])})}};
__c.pOh=async function({actions:a,Ba:b,errorService:c,user:d,ta:e}){if(!(a.length<0))try{await b.bTa(new __c.Lo({user:d,types:a}))}catch(f){c.Tl(f,{ta:e||"Failed to update DYNAMIC_USER actions.",extra:new Map([["action",a.map(g=>__c.Lc.serialize(g.type))]])})}};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=sourcemaps/e4fdf1a7c32191f8.js.map