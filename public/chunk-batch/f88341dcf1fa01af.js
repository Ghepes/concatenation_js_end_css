;// __FILE_CONTENT_FOR__:f88341dcf1fa01af.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[822017],{

/***/ 435869:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(905683);__web_req__(157643);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var Ssi,Tsi;Ssi=function(...a){return a.filter(b=>!!b).join(".")};__c.Usi=function(a,b){try{var c;const d=(c=a.localStorage)===null||c===void 0?void 0:c.getItem(Ssi(a.prefix,b));return d!=null?Tsi.deserialize(JSON.parse(d)):void 0}catch(d){}};
Tsi=class{static serialize(a){return{value:__c.Qo("value",a.value),validUntil:__c.Po("validUntil",a.uKf),createdAt:__c.Po("createdAt",a.xe)}}static deserialize(a){return new Tsi({value:__c.ta("value",a),uKf:__c.Kd("validUntil",a),xe:__c.Kd("createdAt",a)})}constructor(a){this.value=a.value;this.uKf=a.uKf;this.xe=a.xe}};
__c.Vsi=class{setItem(a,b,c){b=new Tsi({value:b,uKf:c!=null?c.getTime():Number.MAX_SAFE_INTEGER,xe:this.Y1()});try{var d;(d=this.localStorage)===null||d===void 0||d.setItem(Ssi(this.prefix,a),JSON.stringify(Tsi.serialize(b)))}catch(e){}}getItem(a,b){a=__c.Usi(this,a);if(a!=null&&!(this.Y1()>a.uKf||b!=null&&b.valueOf()>a.xe))return a.value}removeItem(a){try{var b;(b=this.localStorage)===null||b===void 0||b.removeItem(Ssi(this.prefix,a))}catch(c){}}clear(){try{var a;(a=this.localStorage)===null||a===
void 0||a.clear()}catch(b){}}constructor({localStorage:a=__c.He(),Y1:b=Date.now,prefix:c}){this.localStorage=a;this.Y1=b;this.prefix=c}};
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/11_sourcemaps/f88341dcf1fa01af.js.map