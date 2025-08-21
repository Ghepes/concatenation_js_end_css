;// __FILE_CONTENT_FOR__:ac51619aed2d61c1.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[891015],{

/***/ 680111:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);__web_req__(75799);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var Aqi,yqi;__c.wqi=function(a){const b=a.find(__c.Au);return b?b:a.reduce((c,d)=>c&&c.Dg>d.Dg?c:d,void 0)};__c.xqi=function(a,b=[3,8,16],c=1){b=__c.Lg([0,...b.map(d=>d+c)],d=>Date.now()>=a+864E5*d?d:Number.NaN);return new Date(a+864E5*(isNaN(b)?0:b))};__c.zqi=function(a){var b=Date.now();b=yqi(b);a=a.filter(__c.tu).filter(__c.uu).filter(b).slice();a.sort((c,d)=>d.xh-c.xh);if(a.length>0)return a[0]};
__c.Bqi=function(a,b){a=a.filter(__c.wu).filter(c=>!__c.n8d(c));if(a.some(__c.Au))return a=a.filter(__c.Au).filter(__c.tu),b||(a=a.filter(__c.uu)),(b=a.find(c=>c.Mca))?(b===null||b===void 0?void 0:b.Xp)===1?void 0:{Pt:"grace",type:"renewal",CRa:__c.xqi(b.xh),dueDate:new Date(b.xh),subscription:b}:(b=a.find(c=>c.aE&&c.aE.status===4))&&b.aE&&b.aE.tra!==2?{type:"rollup",Pt:Aqi(b.aE.tra),CRa:__c.xqi(b.aE.Ef),dueDate:new Date(b.aE.Ef),subscription:b}:void 0;if(b=__c.zqi(a))return{type:"renewal",Pt:"past_grace",
CRa:__c.xqi(b.xh),dueDate:new Date(b.xh),subscription:b}};Aqi=function(a){if(!a)throw Error(`Unexpected status ${a}`);switch(a){case 1:return"grace";case 3:return"past_grace";case 2:throw Error(`Unexpected status ${a}`);default:throw new __c.t(a);}};yqi=function(a){return b=>b.Mca&&b.xh<a&&a-b.xh<2592E6&&b.lp===4&&b.Xp!==1&&b.status===2};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/10_sourcemaps/ac51619aed2d61c1.js.map