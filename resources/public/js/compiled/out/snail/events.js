// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('snail.db');
goog.require('cljs.core.async');
snail.events.standard_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((goog.DEBUG)?re_frame.core.debug:null)], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return snail.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),snail.events.standard_interceptors,(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"items","items",1031954938),snail.db.rotate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),snail.events.standard_interceptors,(function (db,p__31943){
var vec__31944 = p__31943;
var _ = cljs.core.nth.call(null,vec__31944,(0),null);
var num = cljs.core.nth.call(null,vec__31944,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"unraveled","unraveled",694178713),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,num));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843),snail.events.standard_interceptors,(function (db,p__31947){
var vec__31948 = p__31947;
var _ = cljs.core.nth.call(null,vec__31948,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31948,(1),null);
return snail.db.unravel_matrix.call(null,db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631),snail.events.standard_interceptors,(function (p__31951,p__31952){
var map__31953 = p__31951;
var map__31953__$1 = ((((!((map__31953 == null)))?((((map__31953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31953):map__31953);
var cofx = map__31953__$1;
var db = cljs.core.get.call(null,map__31953__$1,new cljs.core.Keyword(null,"db","db",993250759));
var unravel = cljs.core.get.call(null,map__31953__$1,new cljs.core.Keyword(null,"unravel","unravel",-320749627));
var vec__31954 = p__31952;
var _ = cljs.core.nth.call(null,vec__31954,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31954,(1),null);
if(cljs.core.truth_(cljs.core.count.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)).call(null))){
return cljs.core.assoc_in.call(null,cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unravel","unravel",-320749627),new cljs.core.Keyword(null,"step","step",1288888124)], null),true);
} else {
return cofx;
}
}));

//# sourceMappingURL=events.js.map?rel=1508594798367
