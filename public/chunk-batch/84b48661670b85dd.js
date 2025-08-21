;// __FILE_CONTENT_FOR__:84b48661670b85dd.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[786927],{

/***/ 356613:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(157643);__web_req__(433259);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var cpj=function(a){const b=new Promise((c,d)=>{setTimeout(()=>d(Error("Promise timed out after 2000ms")),2E3)});return Promise.race([a,b])},dpj=__webpack_require__(400770),epj=dpj.action,fpj=dpj.computed,gpj=dpj.observable,hpj=dpj.runInAction;__c.ipj=class{static G(a){__c.Q(a,{pVa:gpj.ref,active:fpj,enter:epj.bound,exit:epj.bound,onChange:epj.bound})}static create(a){return new __c.ipj(new __c.gni(a))}get active(){return this.pVa}get enabled(){var a;return!((a=this.AQa)===null||a===void 0||!a.fullscreenEnabled)}async enter(a){if(!this.pVa)if(!this.AQa||!this.AQa.fullscreenEnabled||(a===null||a===void 0?0:a.vJl))hpj(()=>{this.pVa=!0});else if(this.fullscreenElement)try{await cpj(this.AQa.requestFullscreen(this.fullscreenElement))}catch(b){}finally{hpj(()=>
{this.pVa=!0})}}async exit(){if(this.AQa&&this.AQa.fullscreenEnabled)try{await cpj(this.AQa.exitFullscreen())}catch(a){}finally{hpj(()=>{this.pVa=!1})}else hpj(()=>{this.pVa=!1})}onChange(){var a;this.pVa=((a=this.AQa)===null||a===void 0?void 0:a.fullscreenElement)!=null}constructor(a){var b,c;this.AQa=a;this.pVa=(__c.ipj.G(this),!1);this.yxe=d=>{this.fullscreenElement=d};this.toggle=()=>{this.pVa?this.exit():this.enter()};this.pVa=((b=this.AQa)===null||b===void 0?void 0:b.fullscreenElement)!=null;
(c=this.AQa)===null||c===void 0||c.addEventListener(this.onChange,!1)}};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/10_sourcemaps/84b48661670b85dd.js.map