;// __FILE_CONTENT_FOR__:47cad433688e909f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[516229],{

/***/ 75816:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);__web_req__(816661);__web_req__(251201);__web_req__(679653);__web_req__(757515);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var SFt=function(a){window.addEventListener("pagehide",()=>{!a.subscription&&a.vob&&a.vob.load({span:void 0}).then(b=>{var c;a.subscription=b===null||b===void 0?void 0:(c=b.VKk)===null||c===void 0?void 0:c.subscribe({next:d=>{d.type==="EDITOR_TO_HOME_NAVIGATED"&&d.mXj&&a.B4k()},error:d=>{a.errorService.error(d,"Error subscribing to navigation notification controller")}})})})},TFt=__webpack_require__(400770),UFt=TFt.action,VFt=TFt.computed,WFt=TFt.runInAction;var XFt;
XFt=class{static G(a){__c.Q(a,{pig:VFt})}get pig(){return!this.kLb.isEmpty}async B4k(){const a=(await this.Jf.MT(new __c.Baj({brand:this.Lb.X,user:this.Lb.userId,limit:20,Lj:__c.kF.ANY}))).items.map(UFt(b=>{var c;return b.type!==1?(this.errorService.error("Unexpected non-design item type when fetching recent designs",__c.BNc.serialize(b.type)),null):this.Yl.Xva({summary:__c.m(b.document),access:__c.m(b.eq),category:b.category,kn:b.kn,B1:(c=b.XWc)===null||c===void 0?void 0:c.id})})).filter(__c.Ua);WFt(()=>
{a.forEach(b=>this.kLb.removeItem(b.id));this.kLb.Ob.results.unshift(...a)})}constructor(a,b,c,d,e,f){this.Lb=a;this.Yl=b;this.kLb=c;this.Jf=d;this.vob=e;this.errorService=(XFt.G(this),void 0);this.errorService=f.gf("quick_access_controller");SFt(this)}};__c.Xna={};__c.Xna.Erm=XFt;
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/10_sourcemaps/47cad433688e909f.js.map