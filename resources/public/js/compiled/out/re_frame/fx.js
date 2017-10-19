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
var seq__31131 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31132 = null;
var count__31133 = (0);
var i__31134 = (0);
while(true){
if((i__31134 < count__31133)){
var vec__31135 = cljs.core._nth.call(null,chunk__31132,i__31134);
var effect_key = cljs.core.nth.call(null,vec__31135,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31135,(1),null);
var temp__4655__auto___31141 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31141)){
var effect_fn_31142 = temp__4655__auto___31141;
effect_fn_31142.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31143 = seq__31131;
var G__31144 = chunk__31132;
var G__31145 = count__31133;
var G__31146 = (i__31134 + (1));
seq__31131 = G__31143;
chunk__31132 = G__31144;
count__31133 = G__31145;
i__31134 = G__31146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31131);
if(temp__4657__auto__){
var seq__31131__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31131__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31131__$1);
var G__31147 = cljs.core.chunk_rest.call(null,seq__31131__$1);
var G__31148 = c__29125__auto__;
var G__31149 = cljs.core.count.call(null,c__29125__auto__);
var G__31150 = (0);
seq__31131 = G__31147;
chunk__31132 = G__31148;
count__31133 = G__31149;
i__31134 = G__31150;
continue;
} else {
var vec__31138 = cljs.core.first.call(null,seq__31131__$1);
var effect_key = cljs.core.nth.call(null,vec__31138,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31138,(1),null);
var temp__4655__auto___31151 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31151)){
var effect_fn_31152 = temp__4655__auto___31151;
effect_fn_31152.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31153 = cljs.core.next.call(null,seq__31131__$1);
var G__31154 = null;
var G__31155 = (0);
var G__31156 = (0);
seq__31131 = G__31153;
chunk__31132 = G__31154;
count__31133 = G__31155;
i__31134 = G__31156;
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
var seq__31157 = cljs.core.seq.call(null,value);
var chunk__31158 = null;
var count__31159 = (0);
var i__31160 = (0);
while(true){
if((i__31160 < count__31159)){
var map__31161 = cljs.core._nth.call(null,chunk__31158,i__31160);
var map__31161__$1 = ((((!((map__31161 == null)))?((((map__31161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31161):map__31161);
var effect = map__31161__$1;
var ms = cljs.core.get.call(null,map__31161__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31161__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31157,chunk__31158,count__31159,i__31160,map__31161,map__31161__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31157,chunk__31158,count__31159,i__31160,map__31161,map__31161__$1,effect,ms,dispatch))
,ms);
}

var G__31165 = seq__31157;
var G__31166 = chunk__31158;
var G__31167 = count__31159;
var G__31168 = (i__31160 + (1));
seq__31157 = G__31165;
chunk__31158 = G__31166;
count__31159 = G__31167;
i__31160 = G__31168;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31157);
if(temp__4657__auto__){
var seq__31157__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31157__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31157__$1);
var G__31169 = cljs.core.chunk_rest.call(null,seq__31157__$1);
var G__31170 = c__29125__auto__;
var G__31171 = cljs.core.count.call(null,c__29125__auto__);
var G__31172 = (0);
seq__31157 = G__31169;
chunk__31158 = G__31170;
count__31159 = G__31171;
i__31160 = G__31172;
continue;
} else {
var map__31163 = cljs.core.first.call(null,seq__31157__$1);
var map__31163__$1 = ((((!((map__31163 == null)))?((((map__31163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31163):map__31163);
var effect = map__31163__$1;
var ms = cljs.core.get.call(null,map__31163__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31163__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31157,chunk__31158,count__31159,i__31160,map__31163,map__31163__$1,effect,ms,dispatch,seq__31157__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31157,chunk__31158,count__31159,i__31160,map__31163,map__31163__$1,effect,ms,dispatch,seq__31157__$1,temp__4657__auto__))
,ms);
}

var G__31173 = cljs.core.next.call(null,seq__31157__$1);
var G__31174 = null;
var G__31175 = (0);
var G__31176 = (0);
seq__31157 = G__31173;
chunk__31158 = G__31174;
count__31159 = G__31175;
i__31160 = G__31176;
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
var seq__31177 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31178 = null;
var count__31179 = (0);
var i__31180 = (0);
while(true){
if((i__31180 < count__31179)){
var event = cljs.core._nth.call(null,chunk__31178,i__31180);
re_frame.router.dispatch.call(null,event);

var G__31181 = seq__31177;
var G__31182 = chunk__31178;
var G__31183 = count__31179;
var G__31184 = (i__31180 + (1));
seq__31177 = G__31181;
chunk__31178 = G__31182;
count__31179 = G__31183;
i__31180 = G__31184;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31177);
if(temp__4657__auto__){
var seq__31177__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31177__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31177__$1);
var G__31185 = cljs.core.chunk_rest.call(null,seq__31177__$1);
var G__31186 = c__29125__auto__;
var G__31187 = cljs.core.count.call(null,c__29125__auto__);
var G__31188 = (0);
seq__31177 = G__31185;
chunk__31178 = G__31186;
count__31179 = G__31187;
i__31180 = G__31188;
continue;
} else {
var event = cljs.core.first.call(null,seq__31177__$1);
re_frame.router.dispatch.call(null,event);

var G__31189 = cljs.core.next.call(null,seq__31177__$1);
var G__31190 = null;
var G__31191 = (0);
var G__31192 = (0);
seq__31177 = G__31189;
chunk__31178 = G__31190;
count__31179 = G__31191;
i__31180 = G__31192;
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
var seq__31193 = cljs.core.seq.call(null,value);
var chunk__31194 = null;
var count__31195 = (0);
var i__31196 = (0);
while(true){
if((i__31196 < count__31195)){
var event = cljs.core._nth.call(null,chunk__31194,i__31196);
clear_event.call(null,event);

var G__31197 = seq__31193;
var G__31198 = chunk__31194;
var G__31199 = count__31195;
var G__31200 = (i__31196 + (1));
seq__31193 = G__31197;
chunk__31194 = G__31198;
count__31195 = G__31199;
i__31196 = G__31200;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31193);
if(temp__4657__auto__){
var seq__31193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31193__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31193__$1);
var G__31201 = cljs.core.chunk_rest.call(null,seq__31193__$1);
var G__31202 = c__29125__auto__;
var G__31203 = cljs.core.count.call(null,c__29125__auto__);
var G__31204 = (0);
seq__31193 = G__31201;
chunk__31194 = G__31202;
count__31195 = G__31203;
i__31196 = G__31204;
continue;
} else {
var event = cljs.core.first.call(null,seq__31193__$1);
clear_event.call(null,event);

var G__31205 = cljs.core.next.call(null,seq__31193__$1);
var G__31206 = null;
var G__31207 = (0);
var G__31208 = (0);
seq__31193 = G__31205;
chunk__31194 = G__31206;
count__31195 = G__31207;
i__31196 = G__31208;
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

//# sourceMappingURL=fx.js.map?rel=1508424078269
