self.window=self,window.jsExecStartTimeStamp=Date.now(),(self.webpackChunk_tencent_alloy_builder=self.webpackChunk_tencent_alloy_builder||[]).push([["spread-sheet_src_core_view_layout_pcView_ts"],{"../spread-sheet/src/core/view/layout/pcView.ts":function(e,t,r){r.d(t,{Z:function(){return M}});var n=r("../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),a=(r("../node_modules/regenerator-runtime/runtime.js"),r("../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),r("../node_modules/core-js/modules/esnext.reflect.metadata.js"),r("../node_modules/core-js/modules/es.object.to-string.js"),r("../node_modules/core-js/modules/es.promise.js"),r("../node_modules/core-js/modules/es.array.iterator.js"),r("../node_modules/core-js/modules/es.string.iterator.js"),r("../node_modules/core-js/modules/web.dom-collections.iterator.js"),r("../spread-sheet/src/core/app/SpreadsheetApp.interface.ts")),i=r("../spread-sheet/src/core/view/layout/view.ts"),s=r("../node_modules/@babel/runtime/helpers/esm/createClass.js"),o=(r("../node_modules/core-js/modules/esnext.global-this.js"),r("../node_modules/core-js/modules/es.array.filter.js"),r("../node_modules/core-js/modules/es.array.map.js"),r("../spread-sheet/src/core/view/View.level1.pc.ts")),c=r("../spread-sheet/src/core/view/level-2/LazyIndex.pc.ts"),u=r("../node_modules/@tencent/containerized/build/main/index.js"),h=r("../spread-sheet/src/base/util/appConfig.ts"),l=r("../spread-sheet/src/core/feature/relateFormEnt/enterpriseStatus.ts"),d=r("../spread-sheet/src/core/view/level-2/discussion-ent/utils.ts"),p=r("../spread-sheet/src/core/feature/copyPaste/api/copyPasteAPI.common.ts"),f=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function o(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}c((n=n.apply(e,t||[])).next())}))};function v(e){var t,r;return null===(r=null===(t=null===globalThis||void 0===globalThis?void 0:globalThis.aegis)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e),console.error(e),Promise.resolve()}var m,g,_,w,x,R=function(e){function t(){var t;return(t=e.apply(this,arguments)||this)._level2Inited=!1,t}(0,n.Z)(t,e);var r=t.prototype;return r.initLevel2=function(){var t=Object.create(null,{_level1Inited:{get:function(){return e.prototype._level1Inited}},initLevel1:{get:function(){return e.prototype.initLevel1}}});return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._level1Inited){e.next=3;break}return e.next=3,t.initLevel1.call(this);case 3:if(!this._level2Inited){e.next=6;break}return console.info("view.level2 已经初始化"),e.abrupt("return");case 6:return console.info("view.level2 初始化"),r=[c.k.CHART_CENTER,c.k.AREA_OVERLAY,c.k.FILTER_CENTER,c.k.DATE_REMINDER_CENTER].map((function(e){return c.U[e]()})).filter((function(e){return!!e})),e.next=10,Promise.all(r);case 10:return e.next=12,this.initFileUploaderEnt().catch(v);case 12:return e.next=14,this.initPositionApi().catch(v);case 14:if(!this.spreadsheetApp.sheetStatus.workbookStatus.canEdit){e.next=32;break}return e.next=17,this._initFreezePreview().catch(v);case 17:return e.next=19,this._initSmartDrag().catch(v);case 19:return e.next=21,this._initInputSmartSplit().catch(v);case 21:if(!1===h.Z.getConfig("custom.insertDeleteMoveRange")){e.next=24;break}return e.next=24,this.initRangeMove().catch(v);case 24:return e.next=26,this._initChartRangeRenderPlugin().catch(v);case 26:return e.next=28,this._initAreaOverlay().catch(v);case 28:return e.next=30,this._initValidationList().catch(v);case 30:return e.next=32,this._initConditionFormatCenter().catch(v);case 32:return e.next=34,this._initCornerTriangle().catch(v);case 34:return e.next=36,this._initMentionCenter().catch(v);case 36:return e.next=38,this._initChartCenter().catch(v);case 38:return e.next=40,this._initAccessibility().catch(v);case 40:return e.next=42,this._initCollabFilterToast().catch(v);case 42:return e.next=44,this._initFilterViewCenter().catch(v);case 44:return e.next=46,this._initFilterHeader().catch(v);case 46:return e.next=48,this._initTestApi().catch(v);case 48:return e.next=50,this._initDateReminderCenter().catch(v);case 50:return e.next=52,this.initSelectRowColHighlightRenderPlugin().catch(v);case 52:return e.next=54,this._initCanvasProvider().catch(v);case 54:return e.next=56,this.initHistoryReviewCenter().catch(v);case 56:return e.next=58,this._initWedocDiscuss().catch(v);case 58:return e.next=60,this.initCollabCenter().catch(v);case 60:return e.next=62,this.initDiscussion().catch(v);case 62:return e.next=64,this._initTodoCenter().catch(v);case 64:return e.next=66,this._initWeworkComponentCenter().catch(v);case 66:p.f2.checkPermission(),this._level2Inited=!0;case 68:case"end":return e.stop()}}),e,this)})))},r.init=function(t){var r=Object.create(null,{init:{get:function(){return e.prototype.init}}});return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.init.call(this,t),this.initSheetRenderCache(t);case 2:case"end":return e.stop()}}),e,this)})))},r.refresh=function(t){var r=Object.create(null,{refresh:{get:function(){return e.prototype.refresh}}});return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.refresh.call(this,t),this.initSheetRenderCache(t);case 2:case"end":return e.stop()}}),e,this)})))},r.getRangeMove=function(){return this.rangeMove},r.getCanvasProvider=function(){return this.canvasProvider},r.getTablePrintCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.tablePrintCenter){e.next=2;break}return e.abrupt("return",this.tablePrintCenter);case 2:return e.next=4,c.U[c.k.TABLE_PRINT_CENTER]();case 4:return t=e.sent.default,this.tablePrintCenter=new t({app:this.spreadsheetApp,spreadSheet:this.spreadsheet,transformTable:this.transformTable,rowcolAccessor:this.rowcolAccessor,borderAccessor:this.borderAccessor,rowCoverAccessor:this.rowCoverAccessor,paragraphAccessor:this.paragraphAccessor,chartCenter:this.chartCenter,normalSelectData:this.normalSelectData}),e.abrupt("return",this.tablePrintCenter);case 7:case"end":return e.stop()}}),e,this)})))},r.initSheetRenderCache=function(e){var t,r,n,a,i,s,o,c,u;null===(t=this.scrollBar)||void 0===t||t.refresh(),null===(r=this.cardCenter)||void 0===r||r.refresh(e),null===(n=this.chartCenter)||void 0===n||n.refresh(),null===(a=this.addonCenter)||void 0===a||a.refresh(),null===(i=this.dimensionEdit)||void 0===i||i.refresh(),null===(s=this.smartDrag)||void 0===s||s.refresh(),null===(o=this.inputManager)||void 0===o||o.focus(),null===(c=this.dataValidationCenter)||void 0===c||c.refresh(),null===(u=this.errorTip)||void 0===u||u.refresh(e)},r._initSmartDrag=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.SMART_DRAG]();case 2:t=e.sent.default,this.smartDrag=new t({spreadsheetApp:this.spreadsheetApp,mainBoard:this.mainBoard,areaData:this.areaData,selectData:this.normalSelectData,selectionStage:this.normalSelectionStage,autoScroll:this.autoScroll,operateData:this.operateData,modifySmartSelectionBroker:this.modifySmartSelectionBroker,headSize:this.headSize,inputManager:this.inputManager,clientRect:this.clientRect,tableView:this.tableView,rowcolAccessor:this.rowcolAccessor,scale:this.scale});case 4:case"end":return e.stop()}}),e,this)})))},r._initAreaOverlay=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.AREA_OVERLAY]();case 2:t=e.sent.default,this.areaOverlay=new t({areaData:this.areaData,mainBoard:this.mainBoard});case 4:case"end":return e.stop()}}),e,this)})))},r._initFreezePreview=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.FREEZE_PREVIEW]();case 2:t=e.sent.default,this.freezePreview=new t({areaData:this.areaData,mainBoard:this.mainBoard,rowcolAccessor:this.rowcolAccessor,renderApi:this.renderApi});case 4:case"end":return e.stop()}}),e,this)})))},r._initTestApi=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.TEST_API]();case 2:t=e.sent.default,this.testApi=new t({spreadsheet:this.spreadsheet,areaData:this.areaData});case 4:case"end":return e.stop()}}),e,this)})))},r._initFilterHeader=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.FILTER_CENTER]();case 2:t=e.sent.default,this.filterCenter=new t({spreadsheetApp:this.spreadsheetApp,spreadsheet:this.spreadsheet,alloyExcel:this.alloyExcel,rowcolAccessor:this.rowcolAccessor,areaData:this.areaData,headSize:this.headSize,renderApi:this.renderApi,tableView:this.tableView,dataCallView:this.dataCallView,operateData:this.operateData,mouseOperate:this.mouseOperate,touchOperate:this.touchOperate,spreadConfig:this.spreadConfig,scale:this.scale,mainBoard:this.mainBoard});case 4:case"end":return e.stop()}}),e,this)})))},r.initPositionApi=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.POSITION_API]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.positionApi=new r({normalSelectData:this.normalSelectData,scrollApi:this.scrollApi,selectApi:this.selectApi,spreadsheet:this.spreadsheet,sheetStatus:this.spreadsheetApp.sheetStatus,inputManager:this.inputManager}));case 13:case"end":return t.stop()}}),t,this)})))},r.initFileUploaderEnt=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.FILE_UPLOADER]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.iFileUploader=new r({container:this.spreadsheetView.container,spreadsheetApp:this.spreadsheetApp,spreadsheetView:this.spreadsheetView}));case 13:case"end":return t.stop()}}),t,this)})))},r._initValidationList=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.PC_DATA_VALIDATION_CENTER]();case 2:t=e.sent.default,this.dataValidationCenter=new t({spreadsheetApp:this.spreadsheetApp,spreadsheet:this.spreadsheet,alloyExcel:this.alloyExcel,normalSelectData:this.normalSelectData,tableView:this.tableView,rowcolAccessor:this.rowcolAccessor,areaData:this.areaData,headSize:this.headSize,renderApi:this.renderApi,mouseOperate:this.mouseOperate,touchOperate:this.touchOperate,operateData:this.operateData,clientRect:this.clientRect,mainBoard:this.mainBoard,inputManager:this.inputManager,mutexManagement:this.mutexManagement,sheetStatus:this.spreadsheetApp.sheetStatus,spreadsheetView:this.spreadsheetView});case 4:case"end":return e.stop()}}),e,this)})))},r._initCollabFilterToast=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.COLLAB_FILTER_TOAST]();case 2:t=e.sent.default,this.collabFilterToast=this._register(new t({mutationBehavior:this.spreadsheetApp.mutationBehavior,messageCenterAdapter:this.spreadsheetApp.messageCenterAdapter,getActiveSheetId:this.spreadsheet.getActiveSheetId.bind(this.spreadsheet),isFilterSync:function(){return r.spreadsheet.isFilterSync},spreadsheetApp:this.spreadsheetApp}));case 4:case"end":return e.stop()}}),e,this)})))},r._initCornerTriangle=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.CORNER_TRIANGLE_RENDER_PLUGIN]();case 2:new(0,e.sent.default)({alloyExcel:this.alloyExcel,normalSelectData:this.normalSelectData,transformTable:this.transformTable,coverBackgroundCollect:this.renderPluginExtension.coverBackgroundCollect,spreadsheet:this.spreadsheet});case 4:case"end":return e.stop()}}),e,this)})))},r._initMentionCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.MENTION_CENTER]();case 2:new(0,e.sent.default)({spreadsheetApp:this.spreadsheetApp,inputManager:this.inputManager,spreadsheet:this.spreadsheet,rowcolAccessor:this.rowcolAccessor,alloyExcel:this.alloyExcel,mouseOperate:this.mouseOperate,areaData:this.areaData,headSize:this.headSize,renderApi:this.renderApi,tableView:this.tableView,transformTable:this.transformTable,rowCoverAccessor:this.rowCoverAccessor,operateData:this.operateData,scale:this.scale,sheetStatus:this.spreadsheetApp.sheetStatus,paragraphAccessor:this.paragraphAccessor,mentionHighlightCollector:this.renderPluginExtension.highlightAnimateCollector});case 4:case"end":return e.stop()}}),e,this)})))},r._initChartCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.CHART_CENTER]();case 2:t=e.sent.default,this.chartCenter=new t({mainBoard:this.mainBoard,dataCallView:this.dataCallView,spreadsheet:this.spreadsheet,areaData:this.areaData,scale:this.scale,operateData:this.operateData,mutexManagement:this.mutexManagement,spreadsheetApp:this.spreadsheetApp});case 4:case"end":return e.stop()}}),e,this)})))},r._initAccessibility=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.ACCESSIBILITY]();case 2:t=e.sent.default,this.accessibility=new t({board:this.container,spreadsheet:this.spreadsheet,normalSelectData:this.normalSelectData,inputManager:this.inputManager,sheetStatus:this.spreadsheetApp.sheetStatus,rowcolAccessor:this.rowcolAccessor});case 4:case"end":return e.stop()}}),e,this)})))},r._initInputSmartSplit=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.INPUT_SMART_SPLIT]();case 2:new(0,e.sent.default)({spreadsheetApp:this.spreadsheetApp});case 4:case"end":return e.stop()}}),e,this)})))},r._initConditionFormatCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.CONDITION_FORMAT_CENTER]();case 2:t=e.sent.default,this.conditionFormatCenter=new t({spreadsheetApp:this.spreadsheetApp,spreadsheet:this.spreadsheet,tableView:this.tableView,normalSelectData:this.normalSelectData,mainBoard:this.mainBoard,areaData:this.areaData,requestApi:this.spreadsheetApp.requestApi,mutationBehavior:this.spreadsheetApp.mutationBehavior,sheetStatus:this.spreadsheetApp.sheetStatus,alloyExcel:this.alloyExcel,rowcolAccessor:this.rowcolAccessor});case 4:case"end":return e.stop()}}),e,this)})))},r._initChartRangeRenderPlugin=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.CHART_RANGE]();case 2:t=e.sent.default,this.chartRange=new t({alloyExcel:this.alloyExcel,areaData:this.areaData,headSize:this.headSize,renderApi:this.renderApi,spreadsheet:this.spreadsheet,chartRangeCollector:this.renderPluginExtension.rangeBorderRenderCollector});case 4:case"end":return e.stop()}}),e,this)})))},r._initCanvasProvider=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.CANVAS_PROVIDER]();case 2:t=e.sent.default,this.canvasProvider=new t({app:this.spreadsheetApp,renderApi:this.renderApi,chartCenter:this.chartCenter,alloyExcel:this.alloyExcel,shapeStage:this.shapeStage});case 4:case"end":return e.stop()}}),e,this)})))},r._initWedocDiscuss=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,l.n_)()){t.next=15;break}return t.next=4,c.U[c.k.WEDOC_DISCUSS]();case 4:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=8;break}t.t0=void 0===e;case 8:if(!t.t0){t.next=12;break}t.t2=void 0,t.next=13;break;case 12:t.t2=e.default;case 13:(r=t.t2)&&(this.WedocDiscuss=new r);case 15:case"end":return t.stop()}}),t,this)})))},r.initCollabCenter=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.COLLAB]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.collabCenter=new r({spreadSheet:this.spreadsheet}));case 13:case"end":return t.stop()}}),t,this)})))},r.initDiscussion=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,d.e)()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,c.U[c.k.DISCUSSION]();case 4:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=8;break}t.t0=void 0===e;case 8:if(!t.t0){t.next=12;break}t.t2=void 0,t.next=13;break;case 12:t.t2=e.default;case 13:(r=t.t2)&&(this.discussionCenter=new r({spreadsheet:this.spreadsheet,headSize:this.headSize,areaData:this.areaData}));case 15:case"end":return t.stop()}}),t,this)})))},r.initRangeMove=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.RANGE_MOVE]();case 2:t=e.sent.default,this.rangeMove=new t({spreadsheetApp:this.spreadsheetApp,mainBoard:this.mainBoard,autoScroll:this.autoScroll,operateData:this.operateData,areaData:this.areaData,selectData:this.normalSelectData,selectionStage:this.normalSelectionStage,rowcolAccessor:this.rowcolAccessor});case 4:case"end":return e.stop()}}),e,this)})))},r._initDateReminderCenter=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.DATE_REMINDER_CENTER]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.dateReminderCenter=new r({app:this.spreadsheetApp,spreadsheet:this.spreadsheet,spreadsheetView:this.spreadsheetView,alloyExcel:this.alloyExcel,renderApi:this.renderApi,dateReminderHighlightCollector:this.renderPluginExtension.highlightAnimateCollector,inputManager:this.inputManager,normalSelectData:this.normalSelectData,mouseOperate:this.mouseOperate,operateData:this.operateData,sheetStatus:this.spreadsheetApp.sheetStatus,container:this.container}));case 13:case"end":return t.stop()}}),t,this)})))},r.initSelectRowColHighlightRenderPlugin=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.SELECT_ROW_COL_HIGHLIGHT]();case 2:t=e.sent.default,this.selectRowColHighlightRenderPlugin=new t({alloyExcel:this.alloyExcel,renderApi:this.renderApi,selectRowColHighlightCollector:this.renderPluginExtension.selectRowColHighlightCollector,areaData:this.areaData,headSize:this.headSize,rowcolAccessor:this.rowcolAccessor,normalSelectData:this.normalSelectData});case 4:case"end":return e.stop()}}),e,this)})))},r.initHistoryReviewCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.HISTORY_REVIEW_CENTER]();case 2:t=e.sent.default,this.historyReviewCenter=new t({history:this.spreadsheetApp.history,messageCenter:this.spreadsheetApp.messageCenterAdapter,spreadsheet:this.spreadsheet});case 4:case"end":return e.stop()}}),e,this)})))},r._initFilterViewCenter=function(){return f(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.U[c.k.FILTER_VIEW_CENTER]();case 2:t=e.sent.default,this.filterViewCenter=new t({spreadsheet:this.spreadsheet,resize:this.resize,alloyExcel:this.alloyExcel,requestApi:this.spreadsheetApp.requestApi,sheetStatus:this.spreadsheetApp.sheetStatus});case 4:case"end":return e.stop()}}),e,this)})))},r._initTodoCenter=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.TODO_CENTER]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.todoCenter=new r({app:this.spreadsheetApp,spreadsheet:this.spreadsheet,requestApi:this.spreadsheetApp.requestApi,alloyExcel:this.alloyExcel,normalSelectData:this.normalSelectData,rangeBorderCollector:this.renderPluginExtension.rangeBorderRenderCollector,spreadsheetView:this.spreadsheetView,renderApi:this.renderApi,mouseOperate:this.mouseOperate,cardCenter:this.cardCenter,hoverCardCenter:this.hoverCardCenter}));case 13:case"end":return t.stop()}}),t,this)})))},r._initWeworkComponentCenter=function(){var e;return f(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.U[c.k.WEWORK_COMPONENT]();case 2:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===e;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=e.default;case 11:(r=t.t2)&&(this.weworkComponentCenter=new r({app:this.spreadsheetApp,alloyExcel:this.alloyExcel,spreadsheet:this.spreadsheet,spreadsheetView:this.spreadsheetView,renderApi:this.renderApi,hoverCardCenter:this.hoverCardCenter,todoCenter:this.todoCenter,operateData:this.operateData,mouseOperate:this.mouseOperate,cardCenter:this.cardCenter}));case 13:case"end":return t.stop()}}),t,this)})))},(0,s.Z)(t,[{key:"contextMenu",get:function(){var e;return null===(e=this.contextMenuCenter)||void 0===e?void 0:e.contextMenu}},{key:"shapeEdit",get:function(){var e;return null===(e=this.shapeEditCenter)||void 0===e?void 0:e.shapeEdit}},{key:"selectCells",get:function(){var e;return null===(e=this.selectCellsCenter)||void 0===e?void 0:e.selectOperate}},{key:"chartRangeRenderPlugin",get:function(){return this.chartRange}},{key:"fileUploader",get:function(){return this.iFileUploader}}]),t}((0,u.bG)(o.Z)),C=R,A=r("../spread-sheet/src/base/event/eventName.ts"),E=r("../spread-sheet/src/core/view/spreadsheet-view/table-view/utils.ts"),b=r("../spread-sheet/src/base/report/fps.ts"),P=r("../spread-sheet/src/core/view/data-call-view/DataCallView.interface.ts"),S=r("../spread-sheet/src/core/view/lib/mutex-management/MutexManagement.interface.ts"),k=r("../spread-sheet/src/core/view/spreadsheet-view/SpreadsheetView.interface.ts"),D=(r("../spread-sheet/src/base/util/domain-config.ts"),{customFormatPanel:function(){return r.e("bundle_panel_CustomFormatPanel_pc").then(r.bind(r,"../spread-sheet/src/external/view/main/panel/customFormatPanel/CustomFormatPanel.ts"))},dataValidationPanel:function(){return Promise.all([r.e("vendors-node_modules_react-redux_es_index_js"),r.e("vendors-node_modules_react-beautiful-dnd_dist_react-beautiful-dnd_esm_js-node_modules_tencent-b53cee"),r.e("spread-sheet_src_core_feature_dataValidation_api_DataValidationError_ts-spread-sheet_src_core-860e25"),r.e("bundle_panel_dataValidationPanel_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/dataValidationPanelNew/index.tsx"))},sortRangePanel:function(){return Promise.all([r.e("spread-sheet_src_core_feature_dataValidation_api_DataValidationError_ts-spread-sheet_src_core-860e25"),r.e("bundle_panel_SortRangePanel_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/sortRangePanel/index.tsx"))},rangeSelectionPanel:function(){return Promise.all([r.e("spread-sheet_src_core_feature_dataValidation_api_DataValidationError_ts-spread-sheet_src_core-860e25"),r.e("bundle_panel_init_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/rangeSelectionPanel/index.tsx"))},validationErrorPanel:function(){return Promise.all([r.e("spread-sheet_src_core_feature_dataValidation_api_DataValidationError_ts-spread-sheet_src_core-860e25"),r.e("bundle_panel_init_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/validationErrorPanel/index.tsx"))},filterPanel:function(){return Promise.all([r.e("initial_chunk_part_2"),r.e("vendors-node_modules_react-window_dist_index_esm_js"),r.e("spread-sheet_src_core_view_level-2_condition-format-center_ui_utils_dataUtils_ts"),r.e("bundle_panel_FilterPanel_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/FillterPanel/index.tsx"))},formulaEditorPanel:function(){return r.e("bundle_panel_FormulaEditorPanel_pc").then(r.bind(r,"../spread-sheet/src/external/view/main/panel/formulaEditorPanel/formula-edit.ts"))},sidePanelMain:function(){return Promise.all([r.e("spread-sheet_src_core_feature_dataValidation_api_DataValidationError_ts-spread-sheet_src_core-860e25"),r.e("bundle_panel_init_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/sidePanelMain/index.tsx"))},chartPanel:function(){return Promise.all([r.e("initial_chunk_part_2"),r.e("vendors-node_modules_react-redux_es_index_js"),r.e("spread-sheet_src_core_view_level-2_chart_charts_chart-data-api_ts-spread-sheet_src_core_view_-9220ef"),r.e("bundle_panel_ChartPanel_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/chartPanel/index.tsx"))},rangeAuthPanel:function(){return Promise.all([r.e("initial_chunk_part_2"),r.e("vendors-node_modules_react-redux_es_index_js"),r.e("spread-sheet_src_external_view_ui-layer_range-auth_components_range-auth-drawer_tsx"),r.e("bundle_panel_RangeAuthPanel_pc")]).then(r.bind(r,"../spread-sheet/src/external/view/main/panel/rangeAuthPanel/index.tsx"))},errorTipPanel:function(){return r.e("bundle_panel_ErrorTipPanel_pc").then(r.bind(r,"../spread-sheet/src/external/view/main/panel/errorTipPanel/index.tsx"))},listPopoverCenter:function(){return r.e("bundle_panel_ListPopoverCenter_pc").then(r.bind(r,"../spread-sheet/src/external/view/main/list-popover-center/index.tsx"))},dateReminderPanel:function(){return null}}),y=r("../spread-sheet/src/core/view/spreadsheet-view/area-data/AreaData.interface.ts"),T=function(e,t,r,n){var a,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(s=(i<3?a(s):i>3?a(t,r,s):a(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},V=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t){return function(r,n){t(r,n,e)}},O=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function o(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}c((n=n.apply(e,t||[])).next())}))},j=function(e){function t(t,r,n,a,i){var s;return(s=e.call(this,r,r.spreadsheet,D)||this).instantiationService=t,s.app=r,s.dataCallView=n,s.mutexManagement=a,s.spreadsheetView=i,s.plugins={},s}(0,n.Z)(t,e);var a=t.prototype;return a.initCanvas=function(){var e=this;if(this.canvas)throw new Error("视图已经初始化");this.canvas=this._register(new C(this.instantiationService,this.app,this.app.spreadsheet,this.spreadsheetView,this.mutexManagement,this.dataCallView)),this.initI18n(),this.canvas.initLevel1(),this.canvas.normalSelectData.onModifySelectData((function(){return e.onSelectionChangeEmitter.fire()})),this.canvas.normalSelectionStage.onSelectionStageVisiableChange((function(){return e.onSelectionChangeEmitter.fire()})),(0,E.gB)(this.canvas.tableView,0,this.app.spreadsheet.activeSheet.getRowCount()-1,0,this.app.spreadsheet.activeSheet.getColCount()-1),this.canvas.renderApi.renderTable(),this.app.event.init.trigger(A.W1.AFTER_FIRST_RENDER),b.Z.start("fps_init"),this.app.emitter.once(this.app.EVENT.SPREAD_SHEET_PLUGINS_END,(function(){return O(e,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,a,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.startLazy();case 2:return e.next=4,this.canvas.initLevel2();case 4:this.canvas.renderApi.renderNextTick(),this._afterCanvasLoaded(),this.app.event.init.trigger(A.W1.AFTER_ALL_RENDER),this.app.emitter.on(this.app.EVENT.SPREAD_SHEET_PLUGINS_END,(function(){i.app.event.init.trigger(A.W1.AFTER_ALL_RENDER)})),null===(a=null===(n=null===(t=null===r.g||void 0===r.g?void 0:r.g.document)||void 0===t?void 0:t.body)||void 0===n?void 0:n.classList)||void 0===a||a.add("all-ready"),b.Z.end("fps_init");case 10:case"end":return e.stop()}}),e,this)})))}))},a.onRefreshExcelView=function(t,r){void 0===r&&(r=y.oz.SLIENT),r!==y.oz.API&&e.prototype.setSheetScroll.call(this,t),e.prototype.setSelection.call(this,t)},a.getCustomFormatPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("customFormatPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getDataValidationPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("dataValidationPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getRangeSelectionPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("rangeSelectionPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getValidationErrorPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("validationErrorPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getSortRangePanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("sortRangePanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getFilterPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("filterPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getFormulaEditorPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("formulaEditorPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getSidePanelMain=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("sidePanelMain",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getChartPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("chartPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getRangeAuthPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("rangeAuthPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getErrorTipPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("errorTipPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a.getListPopoverCenter=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("listPopoverCenter",{app:this.app}));case 1:case"end":return e.stop()}}),e,this)})))},a.getDateReminderPanel=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPluginInstance("dateReminderPanel",this.app));case 1:case"end":return e.stop()}}),e,this)})))},a._afterCanvasLoaded=function(){e.prototype._afterCanvasLoaded.call(this)},a.initPlugins=function(){return O(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.getSidePanelMain(),this.getRangeSelectionPanel(),this.getValidationErrorPanel()]);case 2:case"end":return e.stop()}}),e,this)})))},t}(i.ZP),M=j=T([I(0,u.TG),I(1,a.m),I(2,P.Z),I(3,S.Z),I(4,k.Z),V("design:paramtypes",["function"===typeof(m="undefined"!==typeof u.TG&&u.TG)?m:Object,"function"===typeof(g="undefined"!==typeof a.m&&a.m)?g:Object,"function"===typeof(_="undefined"!==typeof P.Z&&P.Z)?_:Object,"function"===typeof(w="undefined"!==typeof S.Z&&S.Z)?w:Object,"function"===typeof(x="undefined"!==typeof k.Z&&k.Z)?x:Object])],j)}}]),window.jsExecEndTimeStamp=Date.now(),window.cachedPerformanceEntries||(window.cachedPerformanceEntries=[]),window.cachedPerformanceEntries.push({name:"jsExec: js/spread-sheet_src_core_view_layout_pcView_ts.1aff4e5ad30682749369.js",entryType:"jsExec",startTime:window.jsExecStartTimeStamp,endTime:window.jsExecEndTimeStamp});
//# sourceMappingURL=spread-sheet_src_core_view_layout_pcView_ts.1aff4e5ad30682749369.js.map