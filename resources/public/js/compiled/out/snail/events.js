// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('snail.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return snail.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (db,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rotating","rotating",1057948094),false),new cljs.core.Keyword(null,"items","items",1031954938),snail.db.rotate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),(function (db,p__30127){
var vec__30128 = p__30127;
var _ = cljs.core.nth.call(null,vec__30128,(0),null);
var num = cljs.core.nth.call(null,vec__30128,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"unraveled","unraveled",694178713),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,num));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843),(function (db,p__30131){
var vec__30132 = p__30131;
var _ = cljs.core.nth.call(null,vec__30132,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30132,(1),null);
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)) > (1))){
return cljs.core.assoc.call(null,snail.db.unravel_matrix.call(null,db),new cljs.core.Keyword(null,"rotating","rotating",1057948094),true);
} else {
return snail.db.unravel_matrix.call(null,db);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rotating","rotating",1057948094),(function (db,p__30135){
var vec__30136 = p__30135;
var _ = cljs.core.nth.call(null,vec__30136,(0),null);
var is_rotating = cljs.core.nth.call(null,vec__30136,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rotating","rotating",1057948094),is_rotating);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"unravel-interval","unravel-interval",-1795042796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null));
}));
snail.events.unravel_wait = (600);
snail.events.rotate_wait = (1200);
snail.events.tick_wait = (1800);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"unravel-interval","unravel-interval",-1795042796),(function (p__30139){
var vec__30140 = p__30139;
var items = cljs.core.nth.call(null,vec__30140,(0),null);
if((cljs.core.count.call(null,items) > (0))){
window.setTimeout(((function (vec__30140,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unravel-matrix","unravel-matrix",1873541843)], null));
});})(vec__30140,items))
,snail.events.unravel_wait);

if((cljs.core.count.call(null,items) > (1))){
window.setTimeout(((function (vec__30140,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015)], null));
});})(vec__30140,items))
,snail.events.rotate_wait);

return window.setTimeout(((function (vec__30140,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631)], null));
});})(vec__30140,items))
,snail.events.tick_wait);
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=events.js.map?rel=1509590927325
