(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[80137],{

/***/ 162551:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._ebd5e19490e9b70e7436d6c497657170 = self._ebd5e19490e9b70e7436d6c497657170 || {};(function(__c) {var aBb,ZAb,$Ab,YAb;
__c.EPa=class{static create(a,b,c,d){return new __c.EPa(a,b,c,d)}async track(a){if(this.active){var b;if(b=typeof URLSearchParams==="undefined"?null:(new URLSearchParams(this.global.location.search)).get("ovid")){a=a.event;var c=YAb.get(a);c&&(b={account_id:this.config.accountId,project_id:this.config.projectId,client_name:ZAb,client_version:$Ab,anonymize_ip:!0,enrich_decisions:!0,visitors:[{visitor_id:b,snapshots:[{decisions:[],events:[{timestamp:this.qb.now(),uuid:this.DIa(),key:a,entity_id:c,tags:[]}]}]}]},
this.sendEvent(b))}}}async reset(){}sendEvent(a){a={url:aBb,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};return this.Iu.x_a(a).then(()=>{}).catch(()=>{})}zUa(a){this.active=a.iVk}constructor(a,b,c,d,e=__c.Wa,f=__c.cb){this.config=a;this.global=c;this.Iu=d;this.DIa=e;this.qb=f;this.active=b.iVk}};aBb="https://logx.optimizely.com/v1/events";ZAb="canva/optimizely-analytics-plugin";$Ab="0.0.1";
YAb=new Map([["signup_submitted","17936623469"],["signup_completed","17963771082"],["login_submitted","17924893243"],["login_success","17971061254"],["password_changed","17929437843"],["authenticating_item_clicked","17971740897"],["homepage_visit","17953652549"],["pre_signup_step_clicked","17904425976"]]);
}).call(self, self._ebd5e19490e9b70e7436d6c497657170);}

}])
//# sourceMappingURL=sourcemaps/1449813d3263d884.js.map