// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__34009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34010 = null;
var count__34011 = (0);
var i__34012 = (0);
while(true){
if((i__34012 < count__34011)){
var vec__34013 = cljs.core._nth.call(null,chunk__34010,i__34012);
var effect_key = cljs.core.nth.call(null,vec__34013,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34013,(1),null);
var temp__4655__auto___34019 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34019)){
var effect_fn_34020 = temp__4655__auto___34019;
effect_fn_34020.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34021 = seq__34009;
var G__34022 = chunk__34010;
var G__34023 = count__34011;
var G__34024 = (i__34012 + (1));
seq__34009 = G__34021;
chunk__34010 = G__34022;
count__34011 = G__34023;
i__34012 = G__34024;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34009);
if(temp__4657__auto__){
var seq__34009__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34009__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34009__$1);
var G__34025 = cljs.core.chunk_rest.call(null,seq__34009__$1);
var G__34026 = c__29125__auto__;
var G__34027 = cljs.core.count.call(null,c__29125__auto__);
var G__34028 = (0);
seq__34009 = G__34025;
chunk__34010 = G__34026;
count__34011 = G__34027;
i__34012 = G__34028;
continue;
} else {
var vec__34016 = cljs.core.first.call(null,seq__34009__$1);
var effect_key = cljs.core.nth.call(null,vec__34016,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34016,(1),null);
var temp__4655__auto___34029 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34029)){
var effect_fn_34030 = temp__4655__auto___34029;
effect_fn_34030.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34031 = cljs.core.next.call(null,seq__34009__$1);
var G__34032 = null;
var G__34033 = (0);
var G__34034 = (0);
seq__34009 = G__34031;
chunk__34010 = G__34032;
count__34011 = G__34033;
i__34012 = G__34034;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34035 = cljs.core.seq.call(null,value);
var chunk__34036 = null;
var count__34037 = (0);
var i__34038 = (0);
while(true){
if((i__34038 < count__34037)){
var map__34039 = cljs.core._nth.call(null,chunk__34036,i__34038);
var map__34039__$1 = ((((!((map__34039 == null)))?((((map__34039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34039):map__34039);
var effect = map__34039__$1;
var ms = cljs.core.get.call(null,map__34039__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34039__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34035,chunk__34036,count__34037,i__34038,map__34039,map__34039__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34035,chunk__34036,count__34037,i__34038,map__34039,map__34039__$1,effect,ms,dispatch))
,ms);
}

var G__34043 = seq__34035;
var G__34044 = chunk__34036;
var G__34045 = count__34037;
var G__34046 = (i__34038 + (1));
seq__34035 = G__34043;
chunk__34036 = G__34044;
count__34037 = G__34045;
i__34038 = G__34046;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34035);
if(temp__4657__auto__){
var seq__34035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34035__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34035__$1);
var G__34047 = cljs.core.chunk_rest.call(null,seq__34035__$1);
var G__34048 = c__29125__auto__;
var G__34049 = cljs.core.count.call(null,c__29125__auto__);
var G__34050 = (0);
seq__34035 = G__34047;
chunk__34036 = G__34048;
count__34037 = G__34049;
i__34038 = G__34050;
continue;
} else {
var map__34041 = cljs.core.first.call(null,seq__34035__$1);
var map__34041__$1 = ((((!((map__34041 == null)))?((((map__34041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34041):map__34041);
var effect = map__34041__$1;
var ms = cljs.core.get.call(null,map__34041__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34041__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34035,chunk__34036,count__34037,i__34038,map__34041,map__34041__$1,effect,ms,dispatch,seq__34035__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34035,chunk__34036,count__34037,i__34038,map__34041,map__34041__$1,effect,ms,dispatch,seq__34035__$1,temp__4657__auto__))
,ms);
}

var G__34051 = cljs.core.next.call(null,seq__34035__$1);
var G__34052 = null;
var G__34053 = (0);
var G__34054 = (0);
seq__34035 = G__34051;
chunk__34036 = G__34052;
count__34037 = G__34053;
i__34038 = G__34054;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__34055 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34056 = null;
var count__34057 = (0);
var i__34058 = (0);
while(true){
if((i__34058 < count__34057)){
var event = cljs.core._nth.call(null,chunk__34056,i__34058);
re_frame.router.dispatch.call(null,event);

var G__34059 = seq__34055;
var G__34060 = chunk__34056;
var G__34061 = count__34057;
var G__34062 = (i__34058 + (1));
seq__34055 = G__34059;
chunk__34056 = G__34060;
count__34057 = G__34061;
i__34058 = G__34062;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34055);
if(temp__4657__auto__){
var seq__34055__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34055__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34055__$1);
var G__34063 = cljs.core.chunk_rest.call(null,seq__34055__$1);
var G__34064 = c__29125__auto__;
var G__34065 = cljs.core.count.call(null,c__29125__auto__);
var G__34066 = (0);
seq__34055 = G__34063;
chunk__34056 = G__34064;
count__34057 = G__34065;
i__34058 = G__34066;
continue;
} else {
var event = cljs.core.first.call(null,seq__34055__$1);
re_frame.router.dispatch.call(null,event);

var G__34067 = cljs.core.next.call(null,seq__34055__$1);
var G__34068 = null;
var G__34069 = (0);
var G__34070 = (0);
seq__34055 = G__34067;
chunk__34056 = G__34068;
count__34057 = G__34069;
i__34058 = G__34070;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__34071 = cljs.core.seq.call(null,value);
var chunk__34072 = null;
var count__34073 = (0);
var i__34074 = (0);
while(true){
if((i__34074 < count__34073)){
var event = cljs.core._nth.call(null,chunk__34072,i__34074);
clear_event.call(null,event);

var G__34075 = seq__34071;
var G__34076 = chunk__34072;
var G__34077 = count__34073;
var G__34078 = (i__34074 + (1));
seq__34071 = G__34075;
chunk__34072 = G__34076;
count__34073 = G__34077;
i__34074 = G__34078;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34071);
if(temp__4657__auto__){
var seq__34071__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34071__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34071__$1);
var G__34079 = cljs.core.chunk_rest.call(null,seq__34071__$1);
var G__34080 = c__29125__auto__;
var G__34081 = cljs.core.count.call(null,c__29125__auto__);
var G__34082 = (0);
seq__34071 = G__34079;
chunk__34072 = G__34080;
count__34073 = G__34081;
i__34074 = G__34082;
continue;
} else {
var event = cljs.core.first.call(null,seq__34071__$1);
clear_event.call(null,event);

var G__34083 = cljs.core.next.call(null,seq__34071__$1);
var G__34084 = null;
var G__34085 = (0);
var G__34086 = (0);
seq__34071 = G__34083;
chunk__34072 = G__34084;
count__34073 = G__34085;
i__34074 = G__34086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1508696621635
