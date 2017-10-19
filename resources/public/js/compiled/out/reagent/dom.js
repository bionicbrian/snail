// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__28286__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_30301 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_30301){
return (function (){
var _STAR_always_update_STAR_30302 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30302;
}});})(_STAR_always_update_STAR_30301))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30301;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__30304 = arguments.length;
switch (G__30304) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__30306_30310 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__30307_30311 = null;
var count__30308_30312 = (0);
var i__30309_30313 = (0);
while(true){
if((i__30309_30313 < count__30308_30312)){
var v_30314 = cljs.core._nth.call(null,chunk__30307_30311,i__30309_30313);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30314);

var G__30315 = seq__30306_30310;
var G__30316 = chunk__30307_30311;
var G__30317 = count__30308_30312;
var G__30318 = (i__30309_30313 + (1));
seq__30306_30310 = G__30315;
chunk__30307_30311 = G__30316;
count__30308_30312 = G__30317;
i__30309_30313 = G__30318;
continue;
} else {
var temp__4657__auto___30319 = cljs.core.seq.call(null,seq__30306_30310);
if(temp__4657__auto___30319){
var seq__30306_30320__$1 = temp__4657__auto___30319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30306_30320__$1)){
var c__29125__auto___30321 = cljs.core.chunk_first.call(null,seq__30306_30320__$1);
var G__30322 = cljs.core.chunk_rest.call(null,seq__30306_30320__$1);
var G__30323 = c__29125__auto___30321;
var G__30324 = cljs.core.count.call(null,c__29125__auto___30321);
var G__30325 = (0);
seq__30306_30310 = G__30322;
chunk__30307_30311 = G__30323;
count__30308_30312 = G__30324;
i__30309_30313 = G__30325;
continue;
} else {
var v_30326 = cljs.core.first.call(null,seq__30306_30320__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30326);

var G__30327 = cljs.core.next.call(null,seq__30306_30320__$1);
var G__30328 = null;
var G__30329 = (0);
var G__30330 = (0);
seq__30306_30310 = G__30327;
chunk__30307_30311 = G__30328;
count__30308_30312 = G__30329;
i__30309_30313 = G__30330;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1508424076731
