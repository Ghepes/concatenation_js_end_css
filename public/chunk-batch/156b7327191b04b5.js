;// __FILE_CONTENT_FOR__:156b7327191b04b5.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[750228],{

/***/ 627304:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var wci,xci,yci,zci,Aci;__c.vci=function(a,b,c){return a.ieg(b)===c};wci=__webpack_require__(400770);xci=wci.action;yci=wci.computed;zci=wci.observable;Aci=wci.when;var Bci=__webpack_require__(206928).Sx;var Dci;
Dci=class{static G(a){__c.Q(a,{resource:zci.ref,loading:yci,Zb:yci,error:yci,drg:xci})}get loading(){return this.resource!=null&&this.resource.state==="pending"}get Zb(){var a;return((a=this.va)===null||a===void 0?void 0:a.status)===__c.db.$d}get error(){var a;return(a=this.resource)===null||a===void 0?void 0:a.case({fulfilled:()=>{},rejected:b=>b,pending:()=>this.V_i})}drg(){if(this.Zb){if(!(this.error instanceof __c.Cci)){var a=this.resource=Bci.reject(new __c.Cci);Aci(()=>!this.Zb,()=>a===this.resource&&
this.drg())}}else this.V_i=this.error,this.resource=Bci(this.Ake(this.store).then(b=>this.W_i=b),this.resource)}Un(){this.resource!=null&&this.error==null||this.drg()}constructor(a,b,c){this.va=a;this.Ake=b;this.resource=(Dci.G(this),void 0);c!=null&&(this.resource=Bci.resolve(this.W_i=c))}};
__c.Eci=class extends Dci{static G(a){__c.Q(a,{invalid:yci})}get invalid(){return this.resource!=null&&this.resource.case({pending:a=>a!=null,fulfilled:()=>!1,rejected:()=>!0})}Ox(){this.loading||this.drg()}constructor(...a){super(...a);__c.Eci.G(this)}};__c.Cci=class extends Error{constructor(){super("Client is offline");Object.setPrototypeOf(this,__c.Cci.prototype)}};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/11_sourcemaps/156b7327191b04b5.js.map