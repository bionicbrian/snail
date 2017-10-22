// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29942__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29943__i = 0, G__29943__a = new Array(arguments.length -  0);
while (G__29943__i < G__29943__a.length) {G__29943__a[G__29943__i] = arguments[G__29943__i + 0]; ++G__29943__i;}
  args = new cljs.core.IndexedSeq(G__29943__a,0,null);
} 
return G__29942__delegate.call(this,args);};
G__29942.cljs$lang$maxFixedArity = 0;
G__29942.cljs$lang$applyTo = (function (arglist__29944){
var args = cljs.core.seq(arglist__29944);
return G__29942__delegate(args);
});
G__29942.cljs$core$IFn$_invoke$arity$variadic = G__29942__delegate;
return G__29942;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29945__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29946__i = 0, G__29946__a = new Array(arguments.length -  0);
while (G__29946__i < G__29946__a.length) {G__29946__a[G__29946__i] = arguments[G__29946__i + 0]; ++G__29946__i;}
  args = new cljs.core.IndexedSeq(G__29946__a,0,null);
} 
return G__29945__delegate.call(this,args);};
G__29945.cljs$lang$maxFixedArity = 0;
G__29945.cljs$lang$applyTo = (function (arglist__29947){
var args = cljs.core.seq(arglist__29947);
return G__29945__delegate(args);
});
G__29945.cljs$core$IFn$_invoke$arity$variadic = G__29945__delegate;
return G__29945;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1508696617552
