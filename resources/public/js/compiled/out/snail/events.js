// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('snail.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return snail.db.default_db;
}));
snail.events.rotate = (function snail$events$rotate(matrix){
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.list,matrix));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),snail.events.rotate);
}));

//# sourceMappingURL=events.js.map?rel=1508448938755
