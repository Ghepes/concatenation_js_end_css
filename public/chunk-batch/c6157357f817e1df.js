(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[80137],{

/***/ 162551:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);self._456c437108d2d2713799e19380be528d = self._456c437108d2d2713799e19380be528d || {};(function(__c) {var EKa,CKa,DKa,BKa;
__c.mv=class{static create(a,b,c,d){return new __c.mv(a,b,c,d)}async track(a){if(this.active){var b;if(b=typeof URLSearchParams==="undefined"?null:(new URLSearchParams(this.global.location.search)).get("ovid")){a=a.event;var c=BKa.get(a);c&&(b={account_id:this.config.lF,project_id:this.config.projectId,client_name:CKa,client_version:DKa,anonymize_ip:!0,enrich_decisions:!0,visitors:[{visitor_id:b,snapshots:[{decisions:[],events:[{timestamp:this.gd.now(),uuid:this.fpa(),key:a,entity_id:c,tags:[]}]}]}]},
this.sendEvent(b))}}}async reset(){}sendEvent(a){a={url:EKa,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};return this.Lca.RM(a).then(()=>{}).catch(()=>{})}Ni(a){this.active=a.VW}constructor(a,b,c,d,e=__c.He,f=__c.Ze){this.config=a;this.global=c;this.Lca=d;this.fpa=e;this.gd=f;this.active=b.VW}};EKa="https://logx.optimizely.com/v1/events";CKa="canva/optimizely-analytics-plugin";DKa="0.0.1";
BKa=new Map([["signup_submitted","17936623469"],["signup_completed","17963771082"],["login_submitted","17924893243"],["login_success","17971061254"],["password_changed","17929437843"],["authenticating_item_clicked","17971740897"],["homepage_visit","17953652549"],["pre_signup_step_clicked","17904425976"]]);
}).call(self, self._456c437108d2d2713799e19380be528d);}

}])
//# sourceMappingURL=sourcemaps/c6157357f817e1df.js.map