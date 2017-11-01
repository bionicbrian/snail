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
var seq__31133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31134 = null;
var count__31135 = (0);
var i__31136 = (0);
while(true){
if((i__31136 < count__31135)){
var vec__31137 = cljs.core._nth.call(null,chunk__31134,i__31136);
var effect_key = cljs.core.nth.call(null,vec__31137,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31137,(1),null);
var temp__4655__auto___31143 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31143)){
var effect_fn_31144 = temp__4655__auto___31143;
effect_fn_31144.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31145 = seq__31133;
var G__31146 = chunk__31134;
var G__31147 = count__31135;
var G__31148 = (i__31136 + (1));
seq__31133 = G__31145;
chunk__31134 = G__31146;
count__31135 = G__31147;
i__31136 = G__31148;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31133);
if(temp__4657__auto__){
var seq__31133__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31133__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31133__$1);
var G__31149 = cljs.core.chunk_rest.call(null,seq__31133__$1);
var G__31150 = c__29125__auto__;
var G__31151 = cljs.core.count.call(null,c__29125__auto__);
var G__31152 = (0);
seq__31133 = G__31149;
chunk__31134 = G__31150;
count__31135 = G__31151;
i__31136 = G__31152;
continue;
} else {
var vec__31140 = cljs.core.first.call(null,seq__31133__$1);
var effect_key = cljs.core.nth.call(null,vec__31140,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31140,(1),null);
var temp__4655__auto___31153 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31153)){
var effect_fn_31154 = temp__4655__auto___31153;
effect_fn_31154.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31155 = cljs.core.next.call(null,seq__31133__$1);
var G__31156 = null;
var G__31157 = (0);
var G__31158 = (0);
seq__31133 = G__31155;
chunk__31134 = G__31156;
count__31135 = G__31157;
i__31136 = G__31158;
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
var seq__31159 = cljs.core.seq.call(null,value);
var chunk__31160 = null;
var count__31161 = (0);
var i__31162 = (0);
while(true){
if((i__31162 < count__31161)){
var map__31163 = cljs.core._nth.call(null,chunk__31160,i__31162);
var map__31163__$1 = ((((!((map__31163 == null)))?((((map__31163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31163):map__31163);
var effect = map__31163__$1;
var ms = cljs.core.get.call(null,map__31163__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31163__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31159,chunk__31160,count__31161,i__31162,map__31163,map__31163__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31159,chunk__31160,count__31161,i__31162,map__31163,map__31163__$1,effect,ms,dispatch))
,ms);
}

var G__31167 = seq__31159;
var G__31168 = chunk__31160;
var G__31169 = count__31161;
var G__31170 = (i__31162 + (1));
seq__31159 = G__31167;
chunk__31160 = G__31168;
count__31161 = G__31169;
i__31162 = G__31170;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31159);
if(temp__4657__auto__){
var seq__31159__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31159__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31159__$1);
var G__31171 = cljs.core.chunk_rest.call(null,seq__31159__$1);
var G__31172 = c__29125__auto__;
var G__31173 = cljs.core.count.call(null,c__29125__auto__);
var G__31174 = (0);
seq__31159 = G__31171;
chunk__31160 = G__31172;
count__31161 = G__31173;
i__31162 = G__31174;
continue;
} else {
var map__31165 = cljs.core.first.call(null,seq__31159__$1);
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var effect = map__31165__$1;
var ms = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31159,chunk__31160,count__31161,i__31162,map__31165,map__31165__$1,effect,ms,dispatch,seq__31159__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31159,chunk__31160,count__31161,i__31162,map__31165,map__31165__$1,effect,ms,dispatch,seq__31159__$1,temp__4657__auto__))
,ms);
}

var G__31175 = cljs.core.next.call(null,seq__31159__$1);
var G__31176 = null;
var G__31177 = (0);
var G__31178 = (0);
seq__31159 = G__31175;
chunk__31160 = G__31176;
count__31161 = G__31177;
i__31162 = G__31178;
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
var seq__31179 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31180 = null;
var count__31181 = (0);
var i__31182 = (0);
while(true){
if((i__31182 < count__31181)){
var event = cljs.core._nth.call(null,chunk__31180,i__31182);
re_frame.router.dispatch.call(null,event);

var G__31183 = seq__31179;
var G__31184 = chunk__31180;
var G__31185 = count__31181;
var G__31186 = (i__31182 + (1));
seq__31179 = G__31183;
chunk__31180 = G__31184;
count__31181 = G__31185;
i__31182 = G__31186;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31179);
if(temp__4657__auto__){
var seq__31179__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31179__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31179__$1);
var G__31187 = cljs.core.chunk_rest.call(null,seq__31179__$1);
var G__31188 = c__29125__auto__;
var G__31189 = cljs.core.count.call(null,c__29125__auto__);
var G__31190 = (0);
seq__31179 = G__31187;
chunk__31180 = G__31188;
count__31181 = G__31189;
i__31182 = G__31190;
continue;
} else {
var event = cljs.core.first.call(null,seq__31179__$1);
re_frame.router.dispatch.call(null,event);

var G__31191 = cljs.core.next.call(null,seq__31179__$1);
var G__31192 = null;
var G__31193 = (0);
var G__31194 = (0);
seq__31179 = G__31191;
chunk__31180 = G__31192;
count__31181 = G__31193;
i__31182 = G__31194;
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
var seq__31195 = cljs.core.seq.call(null,value);
var chunk__31196 = null;
var count__31197 = (0);
var i__31198 = (0);
while(true){
if((i__31198 < count__31197)){
var event = cljs.core._nth.call(null,chunk__31196,i__31198);
clear_event.call(null,event);

var G__31199 = seq__31195;
var G__31200 = chunk__31196;
var G__31201 = count__31197;
var G__31202 = (i__31198 + (1));
seq__31195 = G__31199;
chunk__31196 = G__31200;
count__31197 = G__31201;
i__31198 = G__31202;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31195);
if(temp__4657__auto__){
var seq__31195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31195__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31195__$1);
var G__31203 = cljs.core.chunk_rest.call(null,seq__31195__$1);
var G__31204 = c__29125__auto__;
var G__31205 = cljs.core.count.call(null,c__29125__auto__);
var G__31206 = (0);
seq__31195 = G__31203;
chunk__31196 = G__31204;
count__31197 = G__31205;
i__31198 = G__31206;
continue;
} else {
var event = cljs.core.first.call(null,seq__31195__$1);
clear_event.call(null,event);

var G__31207 = cljs.core.next.call(null,seq__31195__$1);
var G__31208 = null;
var G__31209 = (0);
var G__31210 = (0);
seq__31195 = G__31207;
chunk__31196 = G__31208;
count__31197 = G__31209;
i__31198 = G__31210;
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

//# sourceMappingURL=fx.js.map?rel=1509580226119
