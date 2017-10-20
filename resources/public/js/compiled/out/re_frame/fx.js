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
var seq__31190 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31191 = null;
var count__31192 = (0);
var i__31193 = (0);
while(true){
if((i__31193 < count__31192)){
var vec__31194 = cljs.core._nth.call(null,chunk__31191,i__31193);
var effect_key = cljs.core.nth.call(null,vec__31194,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31194,(1),null);
var temp__4655__auto___31200 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31200)){
var effect_fn_31201 = temp__4655__auto___31200;
effect_fn_31201.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31202 = seq__31190;
var G__31203 = chunk__31191;
var G__31204 = count__31192;
var G__31205 = (i__31193 + (1));
seq__31190 = G__31202;
chunk__31191 = G__31203;
count__31192 = G__31204;
i__31193 = G__31205;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31190);
if(temp__4657__auto__){
var seq__31190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31190__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31190__$1);
var G__31206 = cljs.core.chunk_rest.call(null,seq__31190__$1);
var G__31207 = c__29125__auto__;
var G__31208 = cljs.core.count.call(null,c__29125__auto__);
var G__31209 = (0);
seq__31190 = G__31206;
chunk__31191 = G__31207;
count__31192 = G__31208;
i__31193 = G__31209;
continue;
} else {
var vec__31197 = cljs.core.first.call(null,seq__31190__$1);
var effect_key = cljs.core.nth.call(null,vec__31197,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31197,(1),null);
var temp__4655__auto___31210 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31210)){
var effect_fn_31211 = temp__4655__auto___31210;
effect_fn_31211.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31212 = cljs.core.next.call(null,seq__31190__$1);
var G__31213 = null;
var G__31214 = (0);
var G__31215 = (0);
seq__31190 = G__31212;
chunk__31191 = G__31213;
count__31192 = G__31214;
i__31193 = G__31215;
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
var seq__31216 = cljs.core.seq.call(null,value);
var chunk__31217 = null;
var count__31218 = (0);
var i__31219 = (0);
while(true){
if((i__31219 < count__31218)){
var map__31220 = cljs.core._nth.call(null,chunk__31217,i__31219);
var map__31220__$1 = ((((!((map__31220 == null)))?((((map__31220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);
var effect = map__31220__$1;
var ms = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31216,chunk__31217,count__31218,i__31219,map__31220,map__31220__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31216,chunk__31217,count__31218,i__31219,map__31220,map__31220__$1,effect,ms,dispatch))
,ms);
}

var G__31224 = seq__31216;
var G__31225 = chunk__31217;
var G__31226 = count__31218;
var G__31227 = (i__31219 + (1));
seq__31216 = G__31224;
chunk__31217 = G__31225;
count__31218 = G__31226;
i__31219 = G__31227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31216);
if(temp__4657__auto__){
var seq__31216__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31216__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31216__$1);
var G__31228 = cljs.core.chunk_rest.call(null,seq__31216__$1);
var G__31229 = c__29125__auto__;
var G__31230 = cljs.core.count.call(null,c__29125__auto__);
var G__31231 = (0);
seq__31216 = G__31228;
chunk__31217 = G__31229;
count__31218 = G__31230;
i__31219 = G__31231;
continue;
} else {
var map__31222 = cljs.core.first.call(null,seq__31216__$1);
var map__31222__$1 = ((((!((map__31222 == null)))?((((map__31222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31222):map__31222);
var effect = map__31222__$1;
var ms = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31216,chunk__31217,count__31218,i__31219,map__31222,map__31222__$1,effect,ms,dispatch,seq__31216__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31216,chunk__31217,count__31218,i__31219,map__31222,map__31222__$1,effect,ms,dispatch,seq__31216__$1,temp__4657__auto__))
,ms);
}

var G__31232 = cljs.core.next.call(null,seq__31216__$1);
var G__31233 = null;
var G__31234 = (0);
var G__31235 = (0);
seq__31216 = G__31232;
chunk__31217 = G__31233;
count__31218 = G__31234;
i__31219 = G__31235;
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
var seq__31236 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31237 = null;
var count__31238 = (0);
var i__31239 = (0);
while(true){
if((i__31239 < count__31238)){
var event = cljs.core._nth.call(null,chunk__31237,i__31239);
re_frame.router.dispatch.call(null,event);

var G__31240 = seq__31236;
var G__31241 = chunk__31237;
var G__31242 = count__31238;
var G__31243 = (i__31239 + (1));
seq__31236 = G__31240;
chunk__31237 = G__31241;
count__31238 = G__31242;
i__31239 = G__31243;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31236);
if(temp__4657__auto__){
var seq__31236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31236__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31236__$1);
var G__31244 = cljs.core.chunk_rest.call(null,seq__31236__$1);
var G__31245 = c__29125__auto__;
var G__31246 = cljs.core.count.call(null,c__29125__auto__);
var G__31247 = (0);
seq__31236 = G__31244;
chunk__31237 = G__31245;
count__31238 = G__31246;
i__31239 = G__31247;
continue;
} else {
var event = cljs.core.first.call(null,seq__31236__$1);
re_frame.router.dispatch.call(null,event);

var G__31248 = cljs.core.next.call(null,seq__31236__$1);
var G__31249 = null;
var G__31250 = (0);
var G__31251 = (0);
seq__31236 = G__31248;
chunk__31237 = G__31249;
count__31238 = G__31250;
i__31239 = G__31251;
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
var seq__31252 = cljs.core.seq.call(null,value);
var chunk__31253 = null;
var count__31254 = (0);
var i__31255 = (0);
while(true){
if((i__31255 < count__31254)){
var event = cljs.core._nth.call(null,chunk__31253,i__31255);
clear_event.call(null,event);

var G__31256 = seq__31252;
var G__31257 = chunk__31253;
var G__31258 = count__31254;
var G__31259 = (i__31255 + (1));
seq__31252 = G__31256;
chunk__31253 = G__31257;
count__31254 = G__31258;
i__31255 = G__31259;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31252);
if(temp__4657__auto__){
var seq__31252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31252__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31252__$1);
var G__31260 = cljs.core.chunk_rest.call(null,seq__31252__$1);
var G__31261 = c__29125__auto__;
var G__31262 = cljs.core.count.call(null,c__29125__auto__);
var G__31263 = (0);
seq__31252 = G__31260;
chunk__31253 = G__31261;
count__31254 = G__31262;
i__31255 = G__31263;
continue;
} else {
var event = cljs.core.first.call(null,seq__31252__$1);
clear_event.call(null,event);

var G__31264 = cljs.core.next.call(null,seq__31252__$1);
var G__31265 = null;
var G__31266 = (0);
var G__31267 = (0);
seq__31252 = G__31264;
chunk__31253 = G__31265;
count__31254 = G__31266;
i__31255 = G__31267;
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

//# sourceMappingURL=fx.js.map?rel=1508541442422
