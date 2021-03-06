// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__30820_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__30820_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___30821 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___30821)){
var not_i_30822 = temp__4657__auto___30821;
if(cljs.core.fn_QMARK_.call(null,not_i_30822)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_30822);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_30822);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_30823 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_30824 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30768__auto___30837 = re_frame.interop.now.call(null);
var duration__30769__auto___30838 = (end__30768__auto___30837 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30825_30839 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30826_30840 = null;
var count__30827_30841 = (0);
var i__30828_30842 = (0);
while(true){
if((i__30828_30842 < count__30827_30841)){
var vec__30829_30843 = cljs.core._nth.call(null,chunk__30826_30840,i__30828_30842);
var k__30770__auto___30844 = cljs.core.nth.call(null,vec__30829_30843,(0),null);
var cb__30771__auto___30845 = cljs.core.nth.call(null,vec__30829_30843,(1),null);
try{cb__30771__auto___30845.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30769__auto___30838,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30832){if((e30832 instanceof java.lang.Exception)){
var e__30772__auto___30846 = e30832;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30770__auto___30844,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30772__auto___30846);
} else {
throw e30832;

}
}
var G__30847 = seq__30825_30839;
var G__30848 = chunk__30826_30840;
var G__30849 = count__30827_30841;
var G__30850 = (i__30828_30842 + (1));
seq__30825_30839 = G__30847;
chunk__30826_30840 = G__30848;
count__30827_30841 = G__30849;
i__30828_30842 = G__30850;
continue;
} else {
var temp__4657__auto___30851 = cljs.core.seq.call(null,seq__30825_30839);
if(temp__4657__auto___30851){
var seq__30825_30852__$1 = temp__4657__auto___30851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30825_30852__$1)){
var c__29125__auto___30853 = cljs.core.chunk_first.call(null,seq__30825_30852__$1);
var G__30854 = cljs.core.chunk_rest.call(null,seq__30825_30852__$1);
var G__30855 = c__29125__auto___30853;
var G__30856 = cljs.core.count.call(null,c__29125__auto___30853);
var G__30857 = (0);
seq__30825_30839 = G__30854;
chunk__30826_30840 = G__30855;
count__30827_30841 = G__30856;
i__30828_30842 = G__30857;
continue;
} else {
var vec__30833_30858 = cljs.core.first.call(null,seq__30825_30852__$1);
var k__30770__auto___30859 = cljs.core.nth.call(null,vec__30833_30858,(0),null);
var cb__30771__auto___30860 = cljs.core.nth.call(null,vec__30833_30858,(1),null);
try{cb__30771__auto___30860.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30769__auto___30838,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30836){if((e30836 instanceof java.lang.Exception)){
var e__30772__auto___30861 = e30836;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30770__auto___30859,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30772__auto___30861);
} else {
throw e30836;

}
}
var G__30862 = cljs.core.next.call(null,seq__30825_30852__$1);
var G__30863 = null;
var G__30864 = (0);
var G__30865 = (0);
seq__30825_30839 = G__30862;
chunk__30826_30840 = G__30863;
count__30827_30841 = G__30864;
i__30828_30842 = G__30865;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30824;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_30823;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1509580225495
