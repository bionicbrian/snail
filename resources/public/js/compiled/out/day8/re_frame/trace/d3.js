// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__41313__delegate = function (args){
return null;
};
var G__41313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41314__i = 0, G__41314__a = new Array(arguments.length -  0);
while (G__41314__i < G__41314__a.length) {G__41314__a[G__41314__i] = arguments[G__41314__i + 0]; ++G__41314__i;}
  args = new cljs.core.IndexedSeq(G__41314__a,0,null);
} 
return G__41313__delegate.call(this,args);};
G__41313.cljs$lang$maxFixedArity = 0;
G__41313.cljs$lang$applyTo = (function (arglist__41315){
var args = cljs.core.seq(arglist__41315);
return G__41313__delegate(args);
});
G__41313.cljs$core$IFn$_invoke$arity$variadic = G__41313__delegate;
return G__41313;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__41316,ratoms){
var map__41317 = p__41316;
var map__41317__$1 = ((((!((map__41317 == null)))?((((map__41317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41317):map__41317);
var d3_update = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__41319,ratoms){
var map__41320 = p__41319;
var map__41320__$1 = ((((!((map__41320 == null)))?((((map__41320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41320):map__41320);
var lifecycle_fns = map__41320__$1;
var d3_once = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
cljs.core.apply.call(null,d3_once,ratoms);

return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});
/**
 * Creates a bridging component from Reagent to D3. Takes a map of
 *   lifecycle functions, and reactive data sources.
 * 
 *   :render-component - Render the outer Reagent component, and a place for your D3 component to mount to (probably an SVG element)
 *   :d3-once - Function called after the component has been rendered, for you to setup anything you need in D3 (e.g. adding <g> or classes)
 *   :d3-update - Run the D3 general update pattern: https://bl.ocks.org/mbostock/3808218
 *   
 */
day8.re_frame.trace.d3.create_d3 = (function day8$re_frame$trace$d3$create_d3(var_args){
var args__29462__auto__ = [];
var len__29455__auto___41331 = arguments.length;
var i__29456__auto___41332 = (0);
while(true){
if((i__29456__auto___41332 < len__29455__auto___41331)){
args__29462__auto__.push((arguments[i__29456__auto___41332]));

var G__41333 = (i__29456__auto___41332 + (1));
i__29456__auto___41332 = G__41333;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__41324,ratoms){
var map__41325 = p__41324;
var map__41325__$1 = ((((!((map__41325 == null)))?((((map__41325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41325):map__41325);
var render_component = cljs.core.get.call(null,map__41325__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__41325__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__41325__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update){
return (function (){
var seq__41327_41334 = cljs.core.seq.call(null,ratoms);
var chunk__41328_41335 = null;
var count__41329_41336 = (0);
var i__41330_41337 = (0);
while(true){
if((i__41330_41337 < count__41329_41336)){
var r_41338 = cljs.core._nth.call(null,chunk__41328_41335,i__41330_41337);
cljs.core.deref.call(null,r_41338);

var G__41339 = seq__41327_41334;
var G__41340 = chunk__41328_41335;
var G__41341 = count__41329_41336;
var G__41342 = (i__41330_41337 + (1));
seq__41327_41334 = G__41339;
chunk__41328_41335 = G__41340;
count__41329_41336 = G__41341;
i__41330_41337 = G__41342;
continue;
} else {
var temp__4657__auto___41343 = cljs.core.seq.call(null,seq__41327_41334);
if(temp__4657__auto___41343){
var seq__41327_41344__$1 = temp__4657__auto___41343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41327_41344__$1)){
var c__29125__auto___41345 = cljs.core.chunk_first.call(null,seq__41327_41344__$1);
var G__41346 = cljs.core.chunk_rest.call(null,seq__41327_41344__$1);
var G__41347 = c__29125__auto___41345;
var G__41348 = cljs.core.count.call(null,c__29125__auto___41345);
var G__41349 = (0);
seq__41327_41334 = G__41346;
chunk__41328_41335 = G__41347;
count__41329_41336 = G__41348;
i__41330_41337 = G__41349;
continue;
} else {
var r_41350 = cljs.core.first.call(null,seq__41327_41344__$1);
cljs.core.deref.call(null,r_41350);

var G__41351 = cljs.core.next.call(null,seq__41327_41344__$1);
var G__41352 = null;
var G__41353 = (0);
var G__41354 = (0);
seq__41327_41334 = G__41351;
chunk__41328_41335 = G__41352;
count__41329_41336 = G__41353;
i__41330_41337 = G__41354;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__41325,map__41325__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq41322){
var G__41323 = cljs.core.first.call(null,seq41322);
var seq41322__$1 = cljs.core.next.call(null,seq41322);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__41323,seq41322__$1);
});


//# sourceMappingURL=d3.js.map?rel=1509580237315
