// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36269_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36269_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36270 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36271 = null;
var count__36272 = (0);
var i__36273 = (0);
while(true){
if((i__36273 < count__36272)){
var n = cljs.core._nth.call(null,chunk__36271,i__36273);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36274 = seq__36270;
var G__36275 = chunk__36271;
var G__36276 = count__36272;
var G__36277 = (i__36273 + (1));
seq__36270 = G__36274;
chunk__36271 = G__36275;
count__36272 = G__36276;
i__36273 = G__36277;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36270);
if(temp__4657__auto__){
var seq__36270__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36270__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36270__$1);
var G__36278 = cljs.core.chunk_rest.call(null,seq__36270__$1);
var G__36279 = c__29125__auto__;
var G__36280 = cljs.core.count.call(null,c__29125__auto__);
var G__36281 = (0);
seq__36270 = G__36278;
chunk__36271 = G__36279;
count__36272 = G__36280;
i__36273 = G__36281;
continue;
} else {
var n = cljs.core.first.call(null,seq__36270__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36282 = cljs.core.next.call(null,seq__36270__$1);
var G__36283 = null;
var G__36284 = (0);
var G__36285 = (0);
seq__36270 = G__36282;
chunk__36271 = G__36283;
count__36272 = G__36284;
i__36273 = G__36285;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36295_36303 = cljs.core.seq.call(null,deps);
var chunk__36296_36304 = null;
var count__36297_36305 = (0);
var i__36298_36306 = (0);
while(true){
if((i__36298_36306 < count__36297_36305)){
var dep_36307 = cljs.core._nth.call(null,chunk__36296_36304,i__36298_36306);
topo_sort_helper_STAR_.call(null,dep_36307,(depth + (1)),state);

var G__36308 = seq__36295_36303;
var G__36309 = chunk__36296_36304;
var G__36310 = count__36297_36305;
var G__36311 = (i__36298_36306 + (1));
seq__36295_36303 = G__36308;
chunk__36296_36304 = G__36309;
count__36297_36305 = G__36310;
i__36298_36306 = G__36311;
continue;
} else {
var temp__4657__auto___36312 = cljs.core.seq.call(null,seq__36295_36303);
if(temp__4657__auto___36312){
var seq__36295_36313__$1 = temp__4657__auto___36312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36295_36313__$1)){
var c__29125__auto___36314 = cljs.core.chunk_first.call(null,seq__36295_36313__$1);
var G__36315 = cljs.core.chunk_rest.call(null,seq__36295_36313__$1);
var G__36316 = c__29125__auto___36314;
var G__36317 = cljs.core.count.call(null,c__29125__auto___36314);
var G__36318 = (0);
seq__36295_36303 = G__36315;
chunk__36296_36304 = G__36316;
count__36297_36305 = G__36317;
i__36298_36306 = G__36318;
continue;
} else {
var dep_36319 = cljs.core.first.call(null,seq__36295_36313__$1);
topo_sort_helper_STAR_.call(null,dep_36319,(depth + (1)),state);

var G__36320 = cljs.core.next.call(null,seq__36295_36313__$1);
var G__36321 = null;
var G__36322 = (0);
var G__36323 = (0);
seq__36295_36303 = G__36320;
chunk__36296_36304 = G__36321;
count__36297_36305 = G__36322;
i__36298_36306 = G__36323;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36299){
var vec__36300 = p__36299;
var seq__36301 = cljs.core.seq.call(null,vec__36300);
var first__36302 = cljs.core.first.call(null,seq__36301);
var seq__36301__$1 = cljs.core.next.call(null,seq__36301);
var x = first__36302;
var xs = seq__36301__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36300,seq__36301,first__36302,seq__36301__$1,x,xs,get_deps__$1){
return (function (p1__36286_SHARP_){
return clojure.set.difference.call(null,p1__36286_SHARP_,x);
});})(vec__36300,seq__36301,first__36302,seq__36301__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36324 = cljs.core.seq.call(null,provides);
var chunk__36325 = null;
var count__36326 = (0);
var i__36327 = (0);
while(true){
if((i__36327 < count__36326)){
var prov = cljs.core._nth.call(null,chunk__36325,i__36327);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36328_36336 = cljs.core.seq.call(null,requires);
var chunk__36329_36337 = null;
var count__36330_36338 = (0);
var i__36331_36339 = (0);
while(true){
if((i__36331_36339 < count__36330_36338)){
var req_36340 = cljs.core._nth.call(null,chunk__36329_36337,i__36331_36339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36340,prov);

var G__36341 = seq__36328_36336;
var G__36342 = chunk__36329_36337;
var G__36343 = count__36330_36338;
var G__36344 = (i__36331_36339 + (1));
seq__36328_36336 = G__36341;
chunk__36329_36337 = G__36342;
count__36330_36338 = G__36343;
i__36331_36339 = G__36344;
continue;
} else {
var temp__4657__auto___36345 = cljs.core.seq.call(null,seq__36328_36336);
if(temp__4657__auto___36345){
var seq__36328_36346__$1 = temp__4657__auto___36345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36328_36346__$1)){
var c__29125__auto___36347 = cljs.core.chunk_first.call(null,seq__36328_36346__$1);
var G__36348 = cljs.core.chunk_rest.call(null,seq__36328_36346__$1);
var G__36349 = c__29125__auto___36347;
var G__36350 = cljs.core.count.call(null,c__29125__auto___36347);
var G__36351 = (0);
seq__36328_36336 = G__36348;
chunk__36329_36337 = G__36349;
count__36330_36338 = G__36350;
i__36331_36339 = G__36351;
continue;
} else {
var req_36352 = cljs.core.first.call(null,seq__36328_36346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36352,prov);

var G__36353 = cljs.core.next.call(null,seq__36328_36346__$1);
var G__36354 = null;
var G__36355 = (0);
var G__36356 = (0);
seq__36328_36336 = G__36353;
chunk__36329_36337 = G__36354;
count__36330_36338 = G__36355;
i__36331_36339 = G__36356;
continue;
}
} else {
}
}
break;
}

var G__36357 = seq__36324;
var G__36358 = chunk__36325;
var G__36359 = count__36326;
var G__36360 = (i__36327 + (1));
seq__36324 = G__36357;
chunk__36325 = G__36358;
count__36326 = G__36359;
i__36327 = G__36360;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36324);
if(temp__4657__auto__){
var seq__36324__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36324__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36324__$1);
var G__36361 = cljs.core.chunk_rest.call(null,seq__36324__$1);
var G__36362 = c__29125__auto__;
var G__36363 = cljs.core.count.call(null,c__29125__auto__);
var G__36364 = (0);
seq__36324 = G__36361;
chunk__36325 = G__36362;
count__36326 = G__36363;
i__36327 = G__36364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36324__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36332_36365 = cljs.core.seq.call(null,requires);
var chunk__36333_36366 = null;
var count__36334_36367 = (0);
var i__36335_36368 = (0);
while(true){
if((i__36335_36368 < count__36334_36367)){
var req_36369 = cljs.core._nth.call(null,chunk__36333_36366,i__36335_36368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36369,prov);

var G__36370 = seq__36332_36365;
var G__36371 = chunk__36333_36366;
var G__36372 = count__36334_36367;
var G__36373 = (i__36335_36368 + (1));
seq__36332_36365 = G__36370;
chunk__36333_36366 = G__36371;
count__36334_36367 = G__36372;
i__36335_36368 = G__36373;
continue;
} else {
var temp__4657__auto___36374__$1 = cljs.core.seq.call(null,seq__36332_36365);
if(temp__4657__auto___36374__$1){
var seq__36332_36375__$1 = temp__4657__auto___36374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36332_36375__$1)){
var c__29125__auto___36376 = cljs.core.chunk_first.call(null,seq__36332_36375__$1);
var G__36377 = cljs.core.chunk_rest.call(null,seq__36332_36375__$1);
var G__36378 = c__29125__auto___36376;
var G__36379 = cljs.core.count.call(null,c__29125__auto___36376);
var G__36380 = (0);
seq__36332_36365 = G__36377;
chunk__36333_36366 = G__36378;
count__36334_36367 = G__36379;
i__36335_36368 = G__36380;
continue;
} else {
var req_36381 = cljs.core.first.call(null,seq__36332_36375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36381,prov);

var G__36382 = cljs.core.next.call(null,seq__36332_36375__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__36332_36365 = G__36382;
chunk__36333_36366 = G__36383;
count__36334_36367 = G__36384;
i__36335_36368 = G__36385;
continue;
}
} else {
}
}
break;
}

var G__36386 = cljs.core.next.call(null,seq__36324__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__36324 = G__36386;
chunk__36325 = G__36387;
count__36326 = G__36388;
i__36327 = G__36389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36390_36394 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36391_36395 = null;
var count__36392_36396 = (0);
var i__36393_36397 = (0);
while(true){
if((i__36393_36397 < count__36392_36396)){
var ns_36398 = cljs.core._nth.call(null,chunk__36391_36395,i__36393_36397);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36398);

var G__36399 = seq__36390_36394;
var G__36400 = chunk__36391_36395;
var G__36401 = count__36392_36396;
var G__36402 = (i__36393_36397 + (1));
seq__36390_36394 = G__36399;
chunk__36391_36395 = G__36400;
count__36392_36396 = G__36401;
i__36393_36397 = G__36402;
continue;
} else {
var temp__4657__auto___36403 = cljs.core.seq.call(null,seq__36390_36394);
if(temp__4657__auto___36403){
var seq__36390_36404__$1 = temp__4657__auto___36403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36390_36404__$1)){
var c__29125__auto___36405 = cljs.core.chunk_first.call(null,seq__36390_36404__$1);
var G__36406 = cljs.core.chunk_rest.call(null,seq__36390_36404__$1);
var G__36407 = c__29125__auto___36405;
var G__36408 = cljs.core.count.call(null,c__29125__auto___36405);
var G__36409 = (0);
seq__36390_36394 = G__36406;
chunk__36391_36395 = G__36407;
count__36392_36396 = G__36408;
i__36393_36397 = G__36409;
continue;
} else {
var ns_36410 = cljs.core.first.call(null,seq__36390_36404__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36410);

var G__36411 = cljs.core.next.call(null,seq__36390_36404__$1);
var G__36412 = null;
var G__36413 = (0);
var G__36414 = (0);
seq__36390_36394 = G__36411;
chunk__36391_36395 = G__36412;
count__36392_36396 = G__36413;
i__36393_36397 = G__36414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36415__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36416__i = 0, G__36416__a = new Array(arguments.length -  0);
while (G__36416__i < G__36416__a.length) {G__36416__a[G__36416__i] = arguments[G__36416__i + 0]; ++G__36416__i;}
  args = new cljs.core.IndexedSeq(G__36416__a,0,null);
} 
return G__36415__delegate.call(this,args);};
G__36415.cljs$lang$maxFixedArity = 0;
G__36415.cljs$lang$applyTo = (function (arglist__36417){
var args = cljs.core.seq(arglist__36417);
return G__36415__delegate(args);
});
G__36415.cljs$core$IFn$_invoke$arity$variadic = G__36415__delegate;
return G__36415;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36418_SHARP_,p2__36419_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36418_SHARP_)].join('')),p2__36419_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36420_SHARP_,p2__36421_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36420_SHARP_)].join(''),p2__36421_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36422 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36422.addCallback(((function (G__36422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36422))
);

G__36422.addErrback(((function (G__36422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36422))
);

return G__36422;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36423 = cljs.core._EQ_;
var expr__36424 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36423.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36424))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36423,expr__36424){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36423,expr__36424))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36423,expr__36424){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36426){if((e36426 instanceof Error)){
var e = e36426;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36426;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36423,expr__36424))
} else {
if(cljs.core.truth_(pred__36423.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36424))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36423.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36424))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36423.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36424))){
return ((function (pred__36423,expr__36424){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36427){if((e36427 instanceof Error)){
var e = e36427;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36427;

}
}})());
});
;})(pred__36423,expr__36424))
} else {
return ((function (pred__36423,expr__36424){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36423,expr__36424))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36428,callback){
var map__36429 = p__36428;
var map__36429__$1 = ((((!((map__36429 == null)))?((((map__36429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36429):map__36429);
var file_msg = map__36429__$1;
var request_url = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36429,map__36429__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36429,map__36429__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__){
return (function (state_36453){
var state_val_36454 = (state_36453[(1)]);
if((state_val_36454 === (7))){
var inst_36449 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36455_36472 = state_36453__$1;
(statearr_36455_36472[(2)] = inst_36449);

(statearr_36455_36472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (1))){
var state_36453__$1 = state_36453;
var statearr_36456_36473 = state_36453__$1;
(statearr_36456_36473[(2)] = null);

(statearr_36456_36473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (4))){
var inst_36433 = (state_36453[(7)]);
var inst_36433__$1 = (state_36453[(2)]);
var state_36453__$1 = (function (){var statearr_36457 = state_36453;
(statearr_36457[(7)] = inst_36433__$1);

return statearr_36457;
})();
if(cljs.core.truth_(inst_36433__$1)){
var statearr_36458_36474 = state_36453__$1;
(statearr_36458_36474[(1)] = (5));

} else {
var statearr_36459_36475 = state_36453__$1;
(statearr_36459_36475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (6))){
var state_36453__$1 = state_36453;
var statearr_36460_36476 = state_36453__$1;
(statearr_36460_36476[(2)] = null);

(statearr_36460_36476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (3))){
var inst_36451 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36453__$1,inst_36451);
} else {
if((state_val_36454 === (2))){
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36453__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36454 === (11))){
var inst_36445 = (state_36453[(2)]);
var state_36453__$1 = (function (){var statearr_36461 = state_36453;
(statearr_36461[(8)] = inst_36445);

return statearr_36461;
})();
var statearr_36462_36477 = state_36453__$1;
(statearr_36462_36477[(2)] = null);

(statearr_36462_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (9))){
var inst_36439 = (state_36453[(9)]);
var inst_36437 = (state_36453[(10)]);
var inst_36441 = inst_36439.call(null,inst_36437);
var state_36453__$1 = state_36453;
var statearr_36463_36478 = state_36453__$1;
(statearr_36463_36478[(2)] = inst_36441);

(statearr_36463_36478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (5))){
var inst_36433 = (state_36453[(7)]);
var inst_36435 = figwheel.client.file_reloading.blocking_load.call(null,inst_36433);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36453__$1,(8),inst_36435);
} else {
if((state_val_36454 === (10))){
var inst_36437 = (state_36453[(10)]);
var inst_36443 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36437);
var state_36453__$1 = state_36453;
var statearr_36464_36479 = state_36453__$1;
(statearr_36464_36479[(2)] = inst_36443);

(statearr_36464_36479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (8))){
var inst_36433 = (state_36453[(7)]);
var inst_36439 = (state_36453[(9)]);
var inst_36437 = (state_36453[(2)]);
var inst_36438 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36439__$1 = cljs.core.get.call(null,inst_36438,inst_36433);
var state_36453__$1 = (function (){var statearr_36465 = state_36453;
(statearr_36465[(9)] = inst_36439__$1);

(statearr_36465[(10)] = inst_36437);

return statearr_36465;
})();
if(cljs.core.truth_(inst_36439__$1)){
var statearr_36466_36480 = state_36453__$1;
(statearr_36466_36480[(1)] = (9));

} else {
var statearr_36467_36481 = state_36453__$1;
(statearr_36467_36481[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33099__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33012__auto__ = null;
var figwheel$client$file_reloading$state_machine__33012__auto____0 = (function (){
var statearr_36468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36468[(0)] = figwheel$client$file_reloading$state_machine__33012__auto__);

(statearr_36468[(1)] = (1));

return statearr_36468;
});
var figwheel$client$file_reloading$state_machine__33012__auto____1 = (function (state_36453){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_36453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e36469){if((e36469 instanceof Object)){
var ex__33015__auto__ = e36469;
var statearr_36470_36482 = state_36453;
(statearr_36470_36482[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36483 = state_36453;
state_36453 = G__36483;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33012__auto__ = function(state_36453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33012__auto____1.call(this,state_36453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33012__auto____0;
figwheel$client$file_reloading$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33012__auto____1;
return figwheel$client$file_reloading$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__))
})();
var state__33101__auto__ = (function (){var statearr_36471 = f__33100__auto__.call(null);
(statearr_36471[(6)] = c__33099__auto__);

return statearr_36471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__))
);

return c__33099__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36484,callback){
var map__36485 = p__36484;
var map__36485__$1 = ((((!((map__36485 == null)))?((((map__36485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36485):map__36485);
var file_msg = map__36485__$1;
var namespace = cljs.core.get.call(null,map__36485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36485,map__36485__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36485,map__36485__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36487){
var map__36488 = p__36487;
var map__36488__$1 = ((((!((map__36488 == null)))?((((map__36488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36488):map__36488);
var file_msg = map__36488__$1;
var namespace = cljs.core.get.call(null,map__36488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36490){
var map__36491 = p__36490;
var map__36491__$1 = ((((!((map__36491 == null)))?((((map__36491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36491):map__36491);
var file_msg = map__36491__$1;
var namespace = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36493,callback){
var map__36494 = p__36493;
var map__36494__$1 = ((((!((map__36494 == null)))?((((map__36494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36494):map__36494);
var file_msg = map__36494__$1;
var request_url = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33099__auto___36544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___36544,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___36544,out){
return (function (state_36529){
var state_val_36530 = (state_36529[(1)]);
if((state_val_36530 === (1))){
var inst_36503 = cljs.core.seq.call(null,files);
var inst_36504 = cljs.core.first.call(null,inst_36503);
var inst_36505 = cljs.core.next.call(null,inst_36503);
var inst_36506 = files;
var state_36529__$1 = (function (){var statearr_36531 = state_36529;
(statearr_36531[(7)] = inst_36505);

(statearr_36531[(8)] = inst_36504);

(statearr_36531[(9)] = inst_36506);

return statearr_36531;
})();
var statearr_36532_36545 = state_36529__$1;
(statearr_36532_36545[(2)] = null);

(statearr_36532_36545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36530 === (2))){
var inst_36506 = (state_36529[(9)]);
var inst_36512 = (state_36529[(10)]);
var inst_36511 = cljs.core.seq.call(null,inst_36506);
var inst_36512__$1 = cljs.core.first.call(null,inst_36511);
var inst_36513 = cljs.core.next.call(null,inst_36511);
var inst_36514 = (inst_36512__$1 == null);
var inst_36515 = cljs.core.not.call(null,inst_36514);
var state_36529__$1 = (function (){var statearr_36533 = state_36529;
(statearr_36533[(10)] = inst_36512__$1);

(statearr_36533[(11)] = inst_36513);

return statearr_36533;
})();
if(inst_36515){
var statearr_36534_36546 = state_36529__$1;
(statearr_36534_36546[(1)] = (4));

} else {
var statearr_36535_36547 = state_36529__$1;
(statearr_36535_36547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36530 === (3))){
var inst_36527 = (state_36529[(2)]);
var state_36529__$1 = state_36529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36529__$1,inst_36527);
} else {
if((state_val_36530 === (4))){
var inst_36512 = (state_36529[(10)]);
var inst_36517 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36512);
var state_36529__$1 = state_36529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36529__$1,(7),inst_36517);
} else {
if((state_val_36530 === (5))){
var inst_36523 = cljs.core.async.close_BANG_.call(null,out);
var state_36529__$1 = state_36529;
var statearr_36536_36548 = state_36529__$1;
(statearr_36536_36548[(2)] = inst_36523);

(statearr_36536_36548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36530 === (6))){
var inst_36525 = (state_36529[(2)]);
var state_36529__$1 = state_36529;
var statearr_36537_36549 = state_36529__$1;
(statearr_36537_36549[(2)] = inst_36525);

(statearr_36537_36549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36530 === (7))){
var inst_36513 = (state_36529[(11)]);
var inst_36519 = (state_36529[(2)]);
var inst_36520 = cljs.core.async.put_BANG_.call(null,out,inst_36519);
var inst_36506 = inst_36513;
var state_36529__$1 = (function (){var statearr_36538 = state_36529;
(statearr_36538[(9)] = inst_36506);

(statearr_36538[(12)] = inst_36520);

return statearr_36538;
})();
var statearr_36539_36550 = state_36529__$1;
(statearr_36539_36550[(2)] = null);

(statearr_36539_36550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33099__auto___36544,out))
;
return ((function (switch__33011__auto__,c__33099__auto___36544,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____0 = (function (){
var statearr_36540 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36540[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__);

(statearr_36540[(1)] = (1));

return statearr_36540;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____1 = (function (state_36529){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_36529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e36541){if((e36541 instanceof Object)){
var ex__33015__auto__ = e36541;
var statearr_36542_36551 = state_36529;
(statearr_36542_36551[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36552 = state_36529;
state_36529 = G__36552;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__ = function(state_36529){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____1.call(this,state_36529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___36544,out))
})();
var state__33101__auto__ = (function (){var statearr_36543 = f__33100__auto__.call(null);
(statearr_36543[(6)] = c__33099__auto___36544);

return statearr_36543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___36544,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36553,opts){
var map__36554 = p__36553;
var map__36554__$1 = ((((!((map__36554 == null)))?((((map__36554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36554):map__36554);
var eval_body = cljs.core.get.call(null,map__36554__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36556){var e = e36556;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36557_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36557_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36558){
var vec__36559 = p__36558;
var k = cljs.core.nth.call(null,vec__36559,(0),null);
var v = cljs.core.nth.call(null,vec__36559,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36562){
var vec__36563 = p__36562;
var k = cljs.core.nth.call(null,vec__36563,(0),null);
var v = cljs.core.nth.call(null,vec__36563,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36569,p__36570){
var map__36571 = p__36569;
var map__36571__$1 = ((((!((map__36571 == null)))?((((map__36571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36571):map__36571);
var opts = map__36571__$1;
var before_jsload = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36572 = p__36570;
var map__36572__$1 = ((((!((map__36572 == null)))?((((map__36572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36572):map__36572);
var msg = map__36572__$1;
var files = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36726){
var state_val_36727 = (state_36726[(1)]);
if((state_val_36727 === (7))){
var inst_36588 = (state_36726[(7)]);
var inst_36586 = (state_36726[(8)]);
var inst_36589 = (state_36726[(9)]);
var inst_36587 = (state_36726[(10)]);
var inst_36594 = cljs.core._nth.call(null,inst_36587,inst_36589);
var inst_36595 = figwheel.client.file_reloading.eval_body.call(null,inst_36594,opts);
var inst_36596 = (inst_36589 + (1));
var tmp36728 = inst_36588;
var tmp36729 = inst_36586;
var tmp36730 = inst_36587;
var inst_36586__$1 = tmp36729;
var inst_36587__$1 = tmp36730;
var inst_36588__$1 = tmp36728;
var inst_36589__$1 = inst_36596;
var state_36726__$1 = (function (){var statearr_36731 = state_36726;
(statearr_36731[(7)] = inst_36588__$1);

(statearr_36731[(8)] = inst_36586__$1);

(statearr_36731[(11)] = inst_36595);

(statearr_36731[(9)] = inst_36589__$1);

(statearr_36731[(10)] = inst_36587__$1);

return statearr_36731;
})();
var statearr_36732_36815 = state_36726__$1;
(statearr_36732_36815[(2)] = null);

(statearr_36732_36815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (20))){
var inst_36629 = (state_36726[(12)]);
var inst_36637 = figwheel.client.file_reloading.sort_files.call(null,inst_36629);
var state_36726__$1 = state_36726;
var statearr_36733_36816 = state_36726__$1;
(statearr_36733_36816[(2)] = inst_36637);

(statearr_36733_36816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (27))){
var state_36726__$1 = state_36726;
var statearr_36734_36817 = state_36726__$1;
(statearr_36734_36817[(2)] = null);

(statearr_36734_36817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (1))){
var inst_36578 = (state_36726[(13)]);
var inst_36575 = before_jsload.call(null,files);
var inst_36576 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36577 = (function (){return ((function (inst_36578,inst_36575,inst_36576,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36566_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36566_SHARP_);
});
;})(inst_36578,inst_36575,inst_36576,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36578__$1 = cljs.core.filter.call(null,inst_36577,files);
var inst_36579 = cljs.core.not_empty.call(null,inst_36578__$1);
var state_36726__$1 = (function (){var statearr_36735 = state_36726;
(statearr_36735[(14)] = inst_36576);

(statearr_36735[(13)] = inst_36578__$1);

(statearr_36735[(15)] = inst_36575);

return statearr_36735;
})();
if(cljs.core.truth_(inst_36579)){
var statearr_36736_36818 = state_36726__$1;
(statearr_36736_36818[(1)] = (2));

} else {
var statearr_36737_36819 = state_36726__$1;
(statearr_36737_36819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (24))){
var state_36726__$1 = state_36726;
var statearr_36738_36820 = state_36726__$1;
(statearr_36738_36820[(2)] = null);

(statearr_36738_36820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (39))){
var inst_36679 = (state_36726[(16)]);
var state_36726__$1 = state_36726;
var statearr_36739_36821 = state_36726__$1;
(statearr_36739_36821[(2)] = inst_36679);

(statearr_36739_36821[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (46))){
var inst_36721 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36740_36822 = state_36726__$1;
(statearr_36740_36822[(2)] = inst_36721);

(statearr_36740_36822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (4))){
var inst_36623 = (state_36726[(2)]);
var inst_36624 = cljs.core.List.EMPTY;
var inst_36625 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36624);
var inst_36626 = (function (){return ((function (inst_36623,inst_36624,inst_36625,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36567_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36567_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36567_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36567_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36623,inst_36624,inst_36625,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36627 = cljs.core.filter.call(null,inst_36626,files);
var inst_36628 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36629 = cljs.core.concat.call(null,inst_36627,inst_36628);
var state_36726__$1 = (function (){var statearr_36741 = state_36726;
(statearr_36741[(17)] = inst_36625);

(statearr_36741[(18)] = inst_36623);

(statearr_36741[(12)] = inst_36629);

return statearr_36741;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36742_36823 = state_36726__$1;
(statearr_36742_36823[(1)] = (16));

} else {
var statearr_36743_36824 = state_36726__$1;
(statearr_36743_36824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (15))){
var inst_36613 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36744_36825 = state_36726__$1;
(statearr_36744_36825[(2)] = inst_36613);

(statearr_36744_36825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (21))){
var inst_36639 = (state_36726[(19)]);
var inst_36639__$1 = (state_36726[(2)]);
var inst_36640 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36639__$1);
var state_36726__$1 = (function (){var statearr_36745 = state_36726;
(statearr_36745[(19)] = inst_36639__$1);

return statearr_36745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36726__$1,(22),inst_36640);
} else {
if((state_val_36727 === (31))){
var inst_36724 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36726__$1,inst_36724);
} else {
if((state_val_36727 === (32))){
var inst_36679 = (state_36726[(16)]);
var inst_36684 = inst_36679.cljs$lang$protocol_mask$partition0$;
var inst_36685 = (inst_36684 & (64));
var inst_36686 = inst_36679.cljs$core$ISeq$;
var inst_36687 = (cljs.core.PROTOCOL_SENTINEL === inst_36686);
var inst_36688 = (inst_36685) || (inst_36687);
var state_36726__$1 = state_36726;
if(cljs.core.truth_(inst_36688)){
var statearr_36746_36826 = state_36726__$1;
(statearr_36746_36826[(1)] = (35));

} else {
var statearr_36747_36827 = state_36726__$1;
(statearr_36747_36827[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (40))){
var inst_36701 = (state_36726[(20)]);
var inst_36700 = (state_36726[(2)]);
var inst_36701__$1 = cljs.core.get.call(null,inst_36700,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36702 = cljs.core.get.call(null,inst_36700,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36703 = cljs.core.not_empty.call(null,inst_36701__$1);
var state_36726__$1 = (function (){var statearr_36748 = state_36726;
(statearr_36748[(20)] = inst_36701__$1);

(statearr_36748[(21)] = inst_36702);

return statearr_36748;
})();
if(cljs.core.truth_(inst_36703)){
var statearr_36749_36828 = state_36726__$1;
(statearr_36749_36828[(1)] = (41));

} else {
var statearr_36750_36829 = state_36726__$1;
(statearr_36750_36829[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (33))){
var state_36726__$1 = state_36726;
var statearr_36751_36830 = state_36726__$1;
(statearr_36751_36830[(2)] = false);

(statearr_36751_36830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (13))){
var inst_36599 = (state_36726[(22)]);
var inst_36603 = cljs.core.chunk_first.call(null,inst_36599);
var inst_36604 = cljs.core.chunk_rest.call(null,inst_36599);
var inst_36605 = cljs.core.count.call(null,inst_36603);
var inst_36586 = inst_36604;
var inst_36587 = inst_36603;
var inst_36588 = inst_36605;
var inst_36589 = (0);
var state_36726__$1 = (function (){var statearr_36752 = state_36726;
(statearr_36752[(7)] = inst_36588);

(statearr_36752[(8)] = inst_36586);

(statearr_36752[(9)] = inst_36589);

(statearr_36752[(10)] = inst_36587);

return statearr_36752;
})();
var statearr_36753_36831 = state_36726__$1;
(statearr_36753_36831[(2)] = null);

(statearr_36753_36831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (22))){
var inst_36639 = (state_36726[(19)]);
var inst_36643 = (state_36726[(23)]);
var inst_36642 = (state_36726[(24)]);
var inst_36647 = (state_36726[(25)]);
var inst_36642__$1 = (state_36726[(2)]);
var inst_36643__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36642__$1);
var inst_36644 = (function (){var all_files = inst_36639;
var res_SINGLEQUOTE_ = inst_36642__$1;
var res = inst_36643__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36639,inst_36643,inst_36642,inst_36647,inst_36642__$1,inst_36643__$1,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36568_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36568_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36639,inst_36643,inst_36642,inst_36647,inst_36642__$1,inst_36643__$1,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36645 = cljs.core.filter.call(null,inst_36644,inst_36642__$1);
var inst_36646 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36647__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36646);
var inst_36648 = cljs.core.not_empty.call(null,inst_36647__$1);
var state_36726__$1 = (function (){var statearr_36754 = state_36726;
(statearr_36754[(26)] = inst_36645);

(statearr_36754[(23)] = inst_36643__$1);

(statearr_36754[(24)] = inst_36642__$1);

(statearr_36754[(25)] = inst_36647__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36648)){
var statearr_36755_36832 = state_36726__$1;
(statearr_36755_36832[(1)] = (23));

} else {
var statearr_36756_36833 = state_36726__$1;
(statearr_36756_36833[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (36))){
var state_36726__$1 = state_36726;
var statearr_36757_36834 = state_36726__$1;
(statearr_36757_36834[(2)] = false);

(statearr_36757_36834[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (41))){
var inst_36701 = (state_36726[(20)]);
var inst_36705 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36706 = cljs.core.map.call(null,inst_36705,inst_36701);
var inst_36707 = cljs.core.pr_str.call(null,inst_36706);
var inst_36708 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36707)].join('');
var inst_36709 = figwheel.client.utils.log.call(null,inst_36708);
var state_36726__$1 = state_36726;
var statearr_36758_36835 = state_36726__$1;
(statearr_36758_36835[(2)] = inst_36709);

(statearr_36758_36835[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (43))){
var inst_36702 = (state_36726[(21)]);
var inst_36712 = (state_36726[(2)]);
var inst_36713 = cljs.core.not_empty.call(null,inst_36702);
var state_36726__$1 = (function (){var statearr_36759 = state_36726;
(statearr_36759[(27)] = inst_36712);

return statearr_36759;
})();
if(cljs.core.truth_(inst_36713)){
var statearr_36760_36836 = state_36726__$1;
(statearr_36760_36836[(1)] = (44));

} else {
var statearr_36761_36837 = state_36726__$1;
(statearr_36761_36837[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (29))){
var inst_36639 = (state_36726[(19)]);
var inst_36645 = (state_36726[(26)]);
var inst_36643 = (state_36726[(23)]);
var inst_36679 = (state_36726[(16)]);
var inst_36642 = (state_36726[(24)]);
var inst_36647 = (state_36726[(25)]);
var inst_36675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36678 = (function (){var all_files = inst_36639;
var res_SINGLEQUOTE_ = inst_36642;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36679,inst_36642,inst_36647,inst_36675,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36677){
var map__36762 = p__36677;
var map__36762__$1 = ((((!((map__36762 == null)))?((((map__36762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36762):map__36762);
var namespace = cljs.core.get.call(null,map__36762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36679,inst_36642,inst_36647,inst_36675,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36679__$1 = cljs.core.group_by.call(null,inst_36678,inst_36645);
var inst_36681 = (inst_36679__$1 == null);
var inst_36682 = cljs.core.not.call(null,inst_36681);
var state_36726__$1 = (function (){var statearr_36764 = state_36726;
(statearr_36764[(16)] = inst_36679__$1);

(statearr_36764[(28)] = inst_36675);

return statearr_36764;
})();
if(inst_36682){
var statearr_36765_36838 = state_36726__$1;
(statearr_36765_36838[(1)] = (32));

} else {
var statearr_36766_36839 = state_36726__$1;
(statearr_36766_36839[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (44))){
var inst_36702 = (state_36726[(21)]);
var inst_36715 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36702);
var inst_36716 = cljs.core.pr_str.call(null,inst_36715);
var inst_36717 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36716)].join('');
var inst_36718 = figwheel.client.utils.log.call(null,inst_36717);
var state_36726__$1 = state_36726;
var statearr_36767_36840 = state_36726__$1;
(statearr_36767_36840[(2)] = inst_36718);

(statearr_36767_36840[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (6))){
var inst_36620 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36768_36841 = state_36726__$1;
(statearr_36768_36841[(2)] = inst_36620);

(statearr_36768_36841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (28))){
var inst_36645 = (state_36726[(26)]);
var inst_36672 = (state_36726[(2)]);
var inst_36673 = cljs.core.not_empty.call(null,inst_36645);
var state_36726__$1 = (function (){var statearr_36769 = state_36726;
(statearr_36769[(29)] = inst_36672);

return statearr_36769;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36770_36842 = state_36726__$1;
(statearr_36770_36842[(1)] = (29));

} else {
var statearr_36771_36843 = state_36726__$1;
(statearr_36771_36843[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (25))){
var inst_36643 = (state_36726[(23)]);
var inst_36659 = (state_36726[(2)]);
var inst_36660 = cljs.core.not_empty.call(null,inst_36643);
var state_36726__$1 = (function (){var statearr_36772 = state_36726;
(statearr_36772[(30)] = inst_36659);

return statearr_36772;
})();
if(cljs.core.truth_(inst_36660)){
var statearr_36773_36844 = state_36726__$1;
(statearr_36773_36844[(1)] = (26));

} else {
var statearr_36774_36845 = state_36726__$1;
(statearr_36774_36845[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (34))){
var inst_36695 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
if(cljs.core.truth_(inst_36695)){
var statearr_36775_36846 = state_36726__$1;
(statearr_36775_36846[(1)] = (38));

} else {
var statearr_36776_36847 = state_36726__$1;
(statearr_36776_36847[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (17))){
var state_36726__$1 = state_36726;
var statearr_36777_36848 = state_36726__$1;
(statearr_36777_36848[(2)] = recompile_dependents);

(statearr_36777_36848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (3))){
var state_36726__$1 = state_36726;
var statearr_36778_36849 = state_36726__$1;
(statearr_36778_36849[(2)] = null);

(statearr_36778_36849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (12))){
var inst_36616 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36779_36850 = state_36726__$1;
(statearr_36779_36850[(2)] = inst_36616);

(statearr_36779_36850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (2))){
var inst_36578 = (state_36726[(13)]);
var inst_36585 = cljs.core.seq.call(null,inst_36578);
var inst_36586 = inst_36585;
var inst_36587 = null;
var inst_36588 = (0);
var inst_36589 = (0);
var state_36726__$1 = (function (){var statearr_36780 = state_36726;
(statearr_36780[(7)] = inst_36588);

(statearr_36780[(8)] = inst_36586);

(statearr_36780[(9)] = inst_36589);

(statearr_36780[(10)] = inst_36587);

return statearr_36780;
})();
var statearr_36781_36851 = state_36726__$1;
(statearr_36781_36851[(2)] = null);

(statearr_36781_36851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (23))){
var inst_36639 = (state_36726[(19)]);
var inst_36645 = (state_36726[(26)]);
var inst_36643 = (state_36726[(23)]);
var inst_36642 = (state_36726[(24)]);
var inst_36647 = (state_36726[(25)]);
var inst_36650 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36652 = (function (){var all_files = inst_36639;
var res_SINGLEQUOTE_ = inst_36642;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36650,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36651){
var map__36782 = p__36651;
var map__36782__$1 = ((((!((map__36782 == null)))?((((map__36782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36782):map__36782);
var request_url = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36650,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36653 = cljs.core.reverse.call(null,inst_36647);
var inst_36654 = cljs.core.map.call(null,inst_36652,inst_36653);
var inst_36655 = cljs.core.pr_str.call(null,inst_36654);
var inst_36656 = figwheel.client.utils.log.call(null,inst_36655);
var state_36726__$1 = (function (){var statearr_36784 = state_36726;
(statearr_36784[(31)] = inst_36650);

return statearr_36784;
})();
var statearr_36785_36852 = state_36726__$1;
(statearr_36785_36852[(2)] = inst_36656);

(statearr_36785_36852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (35))){
var state_36726__$1 = state_36726;
var statearr_36786_36853 = state_36726__$1;
(statearr_36786_36853[(2)] = true);

(statearr_36786_36853[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (19))){
var inst_36629 = (state_36726[(12)]);
var inst_36635 = figwheel.client.file_reloading.expand_files.call(null,inst_36629);
var state_36726__$1 = state_36726;
var statearr_36787_36854 = state_36726__$1;
(statearr_36787_36854[(2)] = inst_36635);

(statearr_36787_36854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (11))){
var state_36726__$1 = state_36726;
var statearr_36788_36855 = state_36726__$1;
(statearr_36788_36855[(2)] = null);

(statearr_36788_36855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (9))){
var inst_36618 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36789_36856 = state_36726__$1;
(statearr_36789_36856[(2)] = inst_36618);

(statearr_36789_36856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (5))){
var inst_36588 = (state_36726[(7)]);
var inst_36589 = (state_36726[(9)]);
var inst_36591 = (inst_36589 < inst_36588);
var inst_36592 = inst_36591;
var state_36726__$1 = state_36726;
if(cljs.core.truth_(inst_36592)){
var statearr_36790_36857 = state_36726__$1;
(statearr_36790_36857[(1)] = (7));

} else {
var statearr_36791_36858 = state_36726__$1;
(statearr_36791_36858[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (14))){
var inst_36599 = (state_36726[(22)]);
var inst_36608 = cljs.core.first.call(null,inst_36599);
var inst_36609 = figwheel.client.file_reloading.eval_body.call(null,inst_36608,opts);
var inst_36610 = cljs.core.next.call(null,inst_36599);
var inst_36586 = inst_36610;
var inst_36587 = null;
var inst_36588 = (0);
var inst_36589 = (0);
var state_36726__$1 = (function (){var statearr_36792 = state_36726;
(statearr_36792[(32)] = inst_36609);

(statearr_36792[(7)] = inst_36588);

(statearr_36792[(8)] = inst_36586);

(statearr_36792[(9)] = inst_36589);

(statearr_36792[(10)] = inst_36587);

return statearr_36792;
})();
var statearr_36793_36859 = state_36726__$1;
(statearr_36793_36859[(2)] = null);

(statearr_36793_36859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (45))){
var state_36726__$1 = state_36726;
var statearr_36794_36860 = state_36726__$1;
(statearr_36794_36860[(2)] = null);

(statearr_36794_36860[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (26))){
var inst_36639 = (state_36726[(19)]);
var inst_36645 = (state_36726[(26)]);
var inst_36643 = (state_36726[(23)]);
var inst_36642 = (state_36726[(24)]);
var inst_36647 = (state_36726[(25)]);
var inst_36662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36664 = (function (){var all_files = inst_36639;
var res_SINGLEQUOTE_ = inst_36642;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36662,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36663){
var map__36795 = p__36663;
var map__36795__$1 = ((((!((map__36795 == null)))?((((map__36795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36795):map__36795);
var namespace = cljs.core.get.call(null,map__36795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36662,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36665 = cljs.core.map.call(null,inst_36664,inst_36643);
var inst_36666 = cljs.core.pr_str.call(null,inst_36665);
var inst_36667 = figwheel.client.utils.log.call(null,inst_36666);
var inst_36668 = (function (){var all_files = inst_36639;
var res_SINGLEQUOTE_ = inst_36642;
var res = inst_36643;
var files_not_loaded = inst_36645;
var dependencies_that_loaded = inst_36647;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36662,inst_36664,inst_36665,inst_36666,inst_36667,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36639,inst_36645,inst_36643,inst_36642,inst_36647,inst_36662,inst_36664,inst_36665,inst_36666,inst_36667,state_val_36727,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36669 = setTimeout(inst_36668,(10));
var state_36726__$1 = (function (){var statearr_36797 = state_36726;
(statearr_36797[(33)] = inst_36662);

(statearr_36797[(34)] = inst_36667);

return statearr_36797;
})();
var statearr_36798_36861 = state_36726__$1;
(statearr_36798_36861[(2)] = inst_36669);

(statearr_36798_36861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (16))){
var state_36726__$1 = state_36726;
var statearr_36799_36862 = state_36726__$1;
(statearr_36799_36862[(2)] = reload_dependents);

(statearr_36799_36862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (38))){
var inst_36679 = (state_36726[(16)]);
var inst_36697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36679);
var state_36726__$1 = state_36726;
var statearr_36800_36863 = state_36726__$1;
(statearr_36800_36863[(2)] = inst_36697);

(statearr_36800_36863[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (30))){
var state_36726__$1 = state_36726;
var statearr_36801_36864 = state_36726__$1;
(statearr_36801_36864[(2)] = null);

(statearr_36801_36864[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (10))){
var inst_36599 = (state_36726[(22)]);
var inst_36601 = cljs.core.chunked_seq_QMARK_.call(null,inst_36599);
var state_36726__$1 = state_36726;
if(inst_36601){
var statearr_36802_36865 = state_36726__$1;
(statearr_36802_36865[(1)] = (13));

} else {
var statearr_36803_36866 = state_36726__$1;
(statearr_36803_36866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (18))){
var inst_36633 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
if(cljs.core.truth_(inst_36633)){
var statearr_36804_36867 = state_36726__$1;
(statearr_36804_36867[(1)] = (19));

} else {
var statearr_36805_36868 = state_36726__$1;
(statearr_36805_36868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (42))){
var state_36726__$1 = state_36726;
var statearr_36806_36869 = state_36726__$1;
(statearr_36806_36869[(2)] = null);

(statearr_36806_36869[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (37))){
var inst_36692 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36807_36870 = state_36726__$1;
(statearr_36807_36870[(2)] = inst_36692);

(statearr_36807_36870[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (8))){
var inst_36586 = (state_36726[(8)]);
var inst_36599 = (state_36726[(22)]);
var inst_36599__$1 = cljs.core.seq.call(null,inst_36586);
var state_36726__$1 = (function (){var statearr_36808 = state_36726;
(statearr_36808[(22)] = inst_36599__$1);

return statearr_36808;
})();
if(inst_36599__$1){
var statearr_36809_36871 = state_36726__$1;
(statearr_36809_36871[(1)] = (10));

} else {
var statearr_36810_36872 = state_36726__$1;
(statearr_36810_36872[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33011__auto__,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____0 = (function (){
var statearr_36811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36811[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__);

(statearr_36811[(1)] = (1));

return statearr_36811;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____1 = (function (state_36726){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_36726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e36812){if((e36812 instanceof Object)){
var ex__33015__auto__ = e36812;
var statearr_36813_36873 = state_36726;
(statearr_36813_36873[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_36726;
state_36726 = G__36874;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__ = function(state_36726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____1.call(this,state_36726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33101__auto__ = (function (){var statearr_36814 = f__33100__auto__.call(null);
(statearr_36814[(6)] = c__33099__auto__);

return statearr_36814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__,map__36571,map__36571__$1,opts,before_jsload,on_jsload,reload_dependents,map__36572,map__36572__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33099__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36877,link){
var map__36878 = p__36877;
var map__36878__$1 = ((((!((map__36878 == null)))?((((map__36878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36878):map__36878);
var file = cljs.core.get.call(null,map__36878__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36878,map__36878__$1,file){
return (function (p1__36875_SHARP_,p2__36876_SHARP_){
if(cljs.core._EQ_.call(null,p1__36875_SHARP_,p2__36876_SHARP_)){
return p1__36875_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36878,map__36878__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36881){
var map__36882 = p__36881;
var map__36882__$1 = ((((!((map__36882 == null)))?((((map__36882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36882):map__36882);
var match_length = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36880_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36880_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36884_SHARP_,p2__36885_SHARP_){
return cljs.core.assoc.call(null,p1__36884_SHARP_,cljs.core.get.call(null,p2__36885_SHARP_,key),p2__36885_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36886 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36886);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36886);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36887,p__36888){
var map__36889 = p__36887;
var map__36889__$1 = ((((!((map__36889 == null)))?((((map__36889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36889):map__36889);
var on_cssload = cljs.core.get.call(null,map__36889__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36890 = p__36888;
var map__36890__$1 = ((((!((map__36890 == null)))?((((map__36890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36890):map__36890);
var files_msg = map__36890__$1;
var files = cljs.core.get.call(null,map__36890__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1508541446995
