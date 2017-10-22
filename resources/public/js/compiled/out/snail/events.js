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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),snail.events.standard_interceptors,(function (db,p__42009){
var vec__42010 = p__42009;
var _ = cljs.core.nth.call(null,vec__42010,(0),null);
var num = cljs.core.nth.call(null,vec__42010,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"unraveled","unraveled",694178713),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,num));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843),snail.events.standard_interceptors,(function (db,p__42013){
var vec__42014 = p__42013;
var _ = cljs.core.nth.call(null,vec__42014,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42014,(1),null);
return snail.db.unravel_matrix.call(null,db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631),snail.events.standard_interceptors,(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"unravel-interval","unravel-interval",-1795042796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"unravel-interval","unravel-interval",-1795042796),(function (p__42017){
var vec__42018 = p__42017;
var items = cljs.core.nth.call(null,vec__42018,(0),null);
if((cljs.core.count.call(null,items) > (0))){
window.setTimeout(((function (vec__42018,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843)], null));
});})(vec__42018,items))
,(500));

if((cljs.core.count.call(null,items) > (1))){
window.setTimeout(((function (vec__42018,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015)], null));
});})(vec__42018,items))
,(1000));

return window.setTimeout(((function (vec__42018,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631)], null));
});})(vec__42018,items))
,(1500));
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=events.js.map?rel=1508706510187
