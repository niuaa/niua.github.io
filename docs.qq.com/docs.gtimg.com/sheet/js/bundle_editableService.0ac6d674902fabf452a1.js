self.window=self,window.jsExecStartTimeStamp=Date.now(),(self.webpackChunk_tencent_alloy_builder=self.webpackChunk_tencent_alloy_builder||[]).push([["bundle_editableService"],{"../spread-sheet/src/flow/browser/phase/services/editableService.ts":function(e,t,n){n.r(t),n("../node_modules/regenerator-runtime/runtime.js"),n("../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),n("../node_modules/core-js/modules/esnext.reflect.metadata.js"),n("../node_modules/core-js/modules/es.object.to-string.js"),n("../node_modules/core-js/modules/es.promise.js");var i,o,r,a,s=n("../packages/report/src/index.ts"),c=n("../spread-sheet/src/core/app/SpreadsheetApp.interface.ts"),d=n("../spread-sheet/src/ServiceCollection/index.ts"),u=n("../packages/undoRedoStack/src/index.ts"),p=n("../node_modules/@tencent/containerized/build/main/index.js"),f=n("../spread-sheet/src/core/behavior/api.interface.ts"),l=n("../spread-sheet/src/flow/browser/phase/services/sheetLifecyle.interface.ts"),h=n("../spread-sheet/src/external/view/workbench/service/create-new-doc.ts"),m=n("../spread-sheet/src/base/config/report.ts"),v=n("../spread-sheet/src/core/app/dataCallCore.ts"),S=n("../spread-sheet/src/base/event/event.ts"),w=n("../spread-sheet/src/base/event/eventName.ts"),b=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},E=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(e,t){return function(n,i){t(n,i,e)}},y=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(t){r(t)}}function s(e){try{c(i.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))},j=function(){function e(e,t,n,i){var o=this;this.app=e,this.instantiationService=t,this.sheetLifeService=n,this.dynamicApi=i,this.updateUndoRedoStatus=function(){o.app.sheetStatus.workbookStatus.status.setCanUndo(o.app.undoredoStack.canUndo()),o.app.sheetStatus.workbookStatus.status.setCanRedo(o.app.undoredoStack.canRedo()),S.ZP.spreadsheetEvent.trigger(w.W1.DATA_CHANGE,{type:"syncndoredoStack"})}}var t=e.prototype;return t.initEditable=function(){var e,t;return y(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return null===(e=n.g.log)||void 0===e||e.info("flow EditableService initEditable()"),this.initUndoRedoStack(),i.next=4,this.dynamicApi.getInstance();case 4:return o=i.sent,this.app.initRequestApi(o),this.initServiceCollection(),this.app.setDidEditable(!0),i.next=10,this.app.offlineEdit.syncOfflineData();case 10:return i.next=12,null===(t=this.app.offlineOpen)||void 0===t?void 0:t.syncOfflineData();case 12:this.app.emitter.emit(this.app.EVENT.SPREAD_SHEET_REQUEST_API_READY),this.sheetLifeService.phase=l.P.SPREAD_SHEET_REQUEST_API_READY;case 14:case"end":return i.stop()}}),i,this)})))},t.initServiceCollection=function(){var e;null===(e=n.g.log)||void 0===e||e.info("flow","EditableService initServiceCollection()");var t=new d.yk;return this.app.initServiceCollection(t),t},t.initUndoRedoStack=function(){var e,t=this;null===(e=n.g.log)||void 0===e||e.info("flow","EditableService initUndoRedoStack()"),this.instantiationService.invokeFunction((function(e){var n=e.get(u.vT);n.registerDocType(h.Jz[h.$e.sheet],{follow:function(e,n,i){return t.app.mutationBehavior.followRequestMutations(e,n,i)},runMutation:function(e){t.app.mutationBehavior.applyMutation(e,{isLocal:!0},t.app.spreadsheet)},invertMutation:function(e){return e.invert(t.app.spreadsheet)},afterRedo:function(e){return t.commitRedoMutation(e)},afterUndo:function(e){return t.commitUndoMutation(e)},onUndoRedoStackChange:function(){return t.updateUndoRedoStatus()}}),t.app.initUndoRedoStack(n)}))},t.commitUndoMutation=function(e){s.ZP.run(m.CONFIG.APPLY_BEHAVIOR_UNDO,[e&&e.sheetId]),s.ZP.monitor(33686605),this.commitMutation(e)},t.commitRedoMutation=function(e){s.ZP.run(m.CONFIG.APPLY_BEHAVIOR_REDO,[e&&e.sheetId]),s.ZP.monitor(33686606),this.commitMutation(e)},t.commitMutation=function(e){(0,v.oh)(this.app,e.sheetId,e.undoMutations,-1,{},e.fromMultiSheetRequest)},e}();j=b([R(0,c.m),R(1,p.TG),R(2,l.n),R(3,f.V),E("design:paramtypes",["function"===typeof(i="undefined"!==typeof c.m&&c.m)?i:Object,"function"===typeof(o="undefined"!==typeof p.TG&&p.TG)?o:Object,"function"===typeof(r="undefined"!==typeof l.n&&l.n)?r:Object,"function"===typeof(a="undefined"!==typeof p.RU&&p.RU)?a:Object])],j),t.default=j}}]),window.jsExecEndTimeStamp=Date.now(),window.cachedPerformanceEntries||(window.cachedPerformanceEntries=[]),window.cachedPerformanceEntries.push({name:"jsExec: js/bundle_editableService.0ac6d674902fabf452a1.js",entryType:"jsExec",startTime:window.jsExecStartTimeStamp,endTime:window.jsExecEndTimeStamp});
//# sourceMappingURL=bundle_editableService.0ac6d674902fabf452a1.js.map