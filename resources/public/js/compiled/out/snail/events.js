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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),(function (db,p__32292){
var vec__32293 = p__32292;
var _ = cljs.core.nth.call(null,vec__32293,(0),null);
var num = cljs.core.nth.call(null,vec__32293,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,num));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843),(function (db,p__32296){
var vec__32297 = p__32296;
var _ = cljs.core.nth.call(null,vec__32297,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32297,(1),null);
return snail.db.unravel_matrix.call(null,db);
}));

//# sourceMappingURL=events.js.map?rel=1508514564252
