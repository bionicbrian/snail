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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35753_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35753_SHARP_));
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
var seq__35754 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35755 = null;
var count__35756 = (0);
var i__35757 = (0);
while(true){
if((i__35757 < count__35756)){
var n = cljs.core._nth.call(null,chunk__35755,i__35757);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35758 = seq__35754;
var G__35759 = chunk__35755;
var G__35760 = count__35756;
var G__35761 = (i__35757 + (1));
seq__35754 = G__35758;
chunk__35755 = G__35759;
count__35756 = G__35760;
i__35757 = G__35761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35754);
if(temp__4657__auto__){
var seq__35754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35754__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35754__$1);
var G__35762 = cljs.core.chunk_rest.call(null,seq__35754__$1);
var G__35763 = c__29125__auto__;
var G__35764 = cljs.core.count.call(null,c__29125__auto__);
var G__35765 = (0);
seq__35754 = G__35762;
chunk__35755 = G__35763;
count__35756 = G__35764;
i__35757 = G__35765;
continue;
} else {
var n = cljs.core.first.call(null,seq__35754__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35766 = cljs.core.next.call(null,seq__35754__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__35754 = G__35766;
chunk__35755 = G__35767;
count__35756 = G__35768;
i__35757 = G__35769;
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

var seq__35779_35787 = cljs.core.seq.call(null,deps);
var chunk__35780_35788 = null;
var count__35781_35789 = (0);
var i__35782_35790 = (0);
while(true){
if((i__35782_35790 < count__35781_35789)){
var dep_35791 = cljs.core._nth.call(null,chunk__35780_35788,i__35782_35790);
topo_sort_helper_STAR_.call(null,dep_35791,(depth + (1)),state);

var G__35792 = seq__35779_35787;
var G__35793 = chunk__35780_35788;
var G__35794 = count__35781_35789;
var G__35795 = (i__35782_35790 + (1));
seq__35779_35787 = G__35792;
chunk__35780_35788 = G__35793;
count__35781_35789 = G__35794;
i__35782_35790 = G__35795;
continue;
} else {
var temp__4657__auto___35796 = cljs.core.seq.call(null,seq__35779_35787);
if(temp__4657__auto___35796){
var seq__35779_35797__$1 = temp__4657__auto___35796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35779_35797__$1)){
var c__29125__auto___35798 = cljs.core.chunk_first.call(null,seq__35779_35797__$1);
var G__35799 = cljs.core.chunk_rest.call(null,seq__35779_35797__$1);
var G__35800 = c__29125__auto___35798;
var G__35801 = cljs.core.count.call(null,c__29125__auto___35798);
var G__35802 = (0);
seq__35779_35787 = G__35799;
chunk__35780_35788 = G__35800;
count__35781_35789 = G__35801;
i__35782_35790 = G__35802;
continue;
} else {
var dep_35803 = cljs.core.first.call(null,seq__35779_35797__$1);
topo_sort_helper_STAR_.call(null,dep_35803,(depth + (1)),state);

var G__35804 = cljs.core.next.call(null,seq__35779_35797__$1);
var G__35805 = null;
var G__35806 = (0);
var G__35807 = (0);
seq__35779_35787 = G__35804;
chunk__35780_35788 = G__35805;
count__35781_35789 = G__35806;
i__35782_35790 = G__35807;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35783){
var vec__35784 = p__35783;
var seq__35785 = cljs.core.seq.call(null,vec__35784);
var first__35786 = cljs.core.first.call(null,seq__35785);
var seq__35785__$1 = cljs.core.next.call(null,seq__35785);
var x = first__35786;
var xs = seq__35785__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35784,seq__35785,first__35786,seq__35785__$1,x,xs,get_deps__$1){
return (function (p1__35770_SHARP_){
return clojure.set.difference.call(null,p1__35770_SHARP_,x);
});})(vec__35784,seq__35785,first__35786,seq__35785__$1,x,xs,get_deps__$1))
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
var seq__35808 = cljs.core.seq.call(null,provides);
var chunk__35809 = null;
var count__35810 = (0);
var i__35811 = (0);
while(true){
if((i__35811 < count__35810)){
var prov = cljs.core._nth.call(null,chunk__35809,i__35811);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35812_35820 = cljs.core.seq.call(null,requires);
var chunk__35813_35821 = null;
var count__35814_35822 = (0);
var i__35815_35823 = (0);
while(true){
if((i__35815_35823 < count__35814_35822)){
var req_35824 = cljs.core._nth.call(null,chunk__35813_35821,i__35815_35823);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35824,prov);

var G__35825 = seq__35812_35820;
var G__35826 = chunk__35813_35821;
var G__35827 = count__35814_35822;
var G__35828 = (i__35815_35823 + (1));
seq__35812_35820 = G__35825;
chunk__35813_35821 = G__35826;
count__35814_35822 = G__35827;
i__35815_35823 = G__35828;
continue;
} else {
var temp__4657__auto___35829 = cljs.core.seq.call(null,seq__35812_35820);
if(temp__4657__auto___35829){
var seq__35812_35830__$1 = temp__4657__auto___35829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35812_35830__$1)){
var c__29125__auto___35831 = cljs.core.chunk_first.call(null,seq__35812_35830__$1);
var G__35832 = cljs.core.chunk_rest.call(null,seq__35812_35830__$1);
var G__35833 = c__29125__auto___35831;
var G__35834 = cljs.core.count.call(null,c__29125__auto___35831);
var G__35835 = (0);
seq__35812_35820 = G__35832;
chunk__35813_35821 = G__35833;
count__35814_35822 = G__35834;
i__35815_35823 = G__35835;
continue;
} else {
var req_35836 = cljs.core.first.call(null,seq__35812_35830__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35836,prov);

var G__35837 = cljs.core.next.call(null,seq__35812_35830__$1);
var G__35838 = null;
var G__35839 = (0);
var G__35840 = (0);
seq__35812_35820 = G__35837;
chunk__35813_35821 = G__35838;
count__35814_35822 = G__35839;
i__35815_35823 = G__35840;
continue;
}
} else {
}
}
break;
}

var G__35841 = seq__35808;
var G__35842 = chunk__35809;
var G__35843 = count__35810;
var G__35844 = (i__35811 + (1));
seq__35808 = G__35841;
chunk__35809 = G__35842;
count__35810 = G__35843;
i__35811 = G__35844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35808);
if(temp__4657__auto__){
var seq__35808__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35808__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35808__$1);
var G__35845 = cljs.core.chunk_rest.call(null,seq__35808__$1);
var G__35846 = c__29125__auto__;
var G__35847 = cljs.core.count.call(null,c__29125__auto__);
var G__35848 = (0);
seq__35808 = G__35845;
chunk__35809 = G__35846;
count__35810 = G__35847;
i__35811 = G__35848;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35808__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35816_35849 = cljs.core.seq.call(null,requires);
var chunk__35817_35850 = null;
var count__35818_35851 = (0);
var i__35819_35852 = (0);
while(true){
if((i__35819_35852 < count__35818_35851)){
var req_35853 = cljs.core._nth.call(null,chunk__35817_35850,i__35819_35852);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35853,prov);

var G__35854 = seq__35816_35849;
var G__35855 = chunk__35817_35850;
var G__35856 = count__35818_35851;
var G__35857 = (i__35819_35852 + (1));
seq__35816_35849 = G__35854;
chunk__35817_35850 = G__35855;
count__35818_35851 = G__35856;
i__35819_35852 = G__35857;
continue;
} else {
var temp__4657__auto___35858__$1 = cljs.core.seq.call(null,seq__35816_35849);
if(temp__4657__auto___35858__$1){
var seq__35816_35859__$1 = temp__4657__auto___35858__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35816_35859__$1)){
var c__29125__auto___35860 = cljs.core.chunk_first.call(null,seq__35816_35859__$1);
var G__35861 = cljs.core.chunk_rest.call(null,seq__35816_35859__$1);
var G__35862 = c__29125__auto___35860;
var G__35863 = cljs.core.count.call(null,c__29125__auto___35860);
var G__35864 = (0);
seq__35816_35849 = G__35861;
chunk__35817_35850 = G__35862;
count__35818_35851 = G__35863;
i__35819_35852 = G__35864;
continue;
} else {
var req_35865 = cljs.core.first.call(null,seq__35816_35859__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35865,prov);

var G__35866 = cljs.core.next.call(null,seq__35816_35859__$1);
var G__35867 = null;
var G__35868 = (0);
var G__35869 = (0);
seq__35816_35849 = G__35866;
chunk__35817_35850 = G__35867;
count__35818_35851 = G__35868;
i__35819_35852 = G__35869;
continue;
}
} else {
}
}
break;
}

var G__35870 = cljs.core.next.call(null,seq__35808__$1);
var G__35871 = null;
var G__35872 = (0);
var G__35873 = (0);
seq__35808 = G__35870;
chunk__35809 = G__35871;
count__35810 = G__35872;
i__35811 = G__35873;
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
var seq__35874_35878 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35875_35879 = null;
var count__35876_35880 = (0);
var i__35877_35881 = (0);
while(true){
if((i__35877_35881 < count__35876_35880)){
var ns_35882 = cljs.core._nth.call(null,chunk__35875_35879,i__35877_35881);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35882);

var G__35883 = seq__35874_35878;
var G__35884 = chunk__35875_35879;
var G__35885 = count__35876_35880;
var G__35886 = (i__35877_35881 + (1));
seq__35874_35878 = G__35883;
chunk__35875_35879 = G__35884;
count__35876_35880 = G__35885;
i__35877_35881 = G__35886;
continue;
} else {
var temp__4657__auto___35887 = cljs.core.seq.call(null,seq__35874_35878);
if(temp__4657__auto___35887){
var seq__35874_35888__$1 = temp__4657__auto___35887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35874_35888__$1)){
var c__29125__auto___35889 = cljs.core.chunk_first.call(null,seq__35874_35888__$1);
var G__35890 = cljs.core.chunk_rest.call(null,seq__35874_35888__$1);
var G__35891 = c__29125__auto___35889;
var G__35892 = cljs.core.count.call(null,c__29125__auto___35889);
var G__35893 = (0);
seq__35874_35878 = G__35890;
chunk__35875_35879 = G__35891;
count__35876_35880 = G__35892;
i__35877_35881 = G__35893;
continue;
} else {
var ns_35894 = cljs.core.first.call(null,seq__35874_35888__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35894);

var G__35895 = cljs.core.next.call(null,seq__35874_35888__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35874_35878 = G__35895;
chunk__35875_35879 = G__35896;
count__35876_35880 = G__35897;
i__35877_35881 = G__35898;
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
var G__35899__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35900__i = 0, G__35900__a = new Array(arguments.length -  0);
while (G__35900__i < G__35900__a.length) {G__35900__a[G__35900__i] = arguments[G__35900__i + 0]; ++G__35900__i;}
  args = new cljs.core.IndexedSeq(G__35900__a,0,null);
} 
return G__35899__delegate.call(this,args);};
G__35899.cljs$lang$maxFixedArity = 0;
G__35899.cljs$lang$applyTo = (function (arglist__35901){
var args = cljs.core.seq(arglist__35901);
return G__35899__delegate(args);
});
G__35899.cljs$core$IFn$_invoke$arity$variadic = G__35899__delegate;
return G__35899;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35902_SHARP_,p2__35903_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35902_SHARP_)].join('')),p2__35903_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35904_SHARP_,p2__35905_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35904_SHARP_)].join(''),p2__35905_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35906 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35906.addCallback(((function (G__35906){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35906))
);

G__35906.addErrback(((function (G__35906){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35906))
);

return G__35906;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35907 = cljs.core._EQ_;
var expr__35908 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35907.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35908))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35907,expr__35908){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35907,expr__35908))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35907,expr__35908){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35910){if((e35910 instanceof Error)){
var e = e35910;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35910;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35907,expr__35908))
} else {
if(cljs.core.truth_(pred__35907.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35908))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35907.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35908))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35907.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35908))){
return ((function (pred__35907,expr__35908){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35911){if((e35911 instanceof Error)){
var e = e35911;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35911;

}
}})());
});
;})(pred__35907,expr__35908))
} else {
return ((function (pred__35907,expr__35908){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35907,expr__35908))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35912,callback){
var map__35913 = p__35912;
var map__35913__$1 = ((((!((map__35913 == null)))?((((map__35913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35913):map__35913);
var file_msg = map__35913__$1;
var request_url = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35913,map__35913__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35913,map__35913__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__){
return (function (state_35937){
var state_val_35938 = (state_35937[(1)]);
if((state_val_35938 === (7))){
var inst_35933 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35939_35956 = state_35937__$1;
(statearr_35939_35956[(2)] = inst_35933);

(statearr_35939_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (1))){
var state_35937__$1 = state_35937;
var statearr_35940_35957 = state_35937__$1;
(statearr_35940_35957[(2)] = null);

(statearr_35940_35957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (4))){
var inst_35917 = (state_35937[(7)]);
var inst_35917__$1 = (state_35937[(2)]);
var state_35937__$1 = (function (){var statearr_35941 = state_35937;
(statearr_35941[(7)] = inst_35917__$1);

return statearr_35941;
})();
if(cljs.core.truth_(inst_35917__$1)){
var statearr_35942_35958 = state_35937__$1;
(statearr_35942_35958[(1)] = (5));

} else {
var statearr_35943_35959 = state_35937__$1;
(statearr_35943_35959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (6))){
var state_35937__$1 = state_35937;
var statearr_35944_35960 = state_35937__$1;
(statearr_35944_35960[(2)] = null);

(statearr_35944_35960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (3))){
var inst_35935 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35937__$1,inst_35935);
} else {
if((state_val_35938 === (2))){
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35937__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35938 === (11))){
var inst_35929 = (state_35937[(2)]);
var state_35937__$1 = (function (){var statearr_35945 = state_35937;
(statearr_35945[(8)] = inst_35929);

return statearr_35945;
})();
var statearr_35946_35961 = state_35937__$1;
(statearr_35946_35961[(2)] = null);

(statearr_35946_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (9))){
var inst_35921 = (state_35937[(9)]);
var inst_35923 = (state_35937[(10)]);
var inst_35925 = inst_35923.call(null,inst_35921);
var state_35937__$1 = state_35937;
var statearr_35947_35962 = state_35937__$1;
(statearr_35947_35962[(2)] = inst_35925);

(statearr_35947_35962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (5))){
var inst_35917 = (state_35937[(7)]);
var inst_35919 = figwheel.client.file_reloading.blocking_load.call(null,inst_35917);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35937__$1,(8),inst_35919);
} else {
if((state_val_35938 === (10))){
var inst_35921 = (state_35937[(9)]);
var inst_35927 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35921);
var state_35937__$1 = state_35937;
var statearr_35948_35963 = state_35937__$1;
(statearr_35948_35963[(2)] = inst_35927);

(statearr_35948_35963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (8))){
var inst_35917 = (state_35937[(7)]);
var inst_35923 = (state_35937[(10)]);
var inst_35921 = (state_35937[(2)]);
var inst_35922 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35923__$1 = cljs.core.get.call(null,inst_35922,inst_35917);
var state_35937__$1 = (function (){var statearr_35949 = state_35937;
(statearr_35949[(9)] = inst_35921);

(statearr_35949[(10)] = inst_35923__$1);

return statearr_35949;
})();
if(cljs.core.truth_(inst_35923__$1)){
var statearr_35950_35964 = state_35937__$1;
(statearr_35950_35964[(1)] = (9));

} else {
var statearr_35951_35965 = state_35937__$1;
(statearr_35951_35965[(1)] = (10));

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
});})(c__32583__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32496__auto__ = null;
var figwheel$client$file_reloading$state_machine__32496__auto____0 = (function (){
var statearr_35952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35952[(0)] = figwheel$client$file_reloading$state_machine__32496__auto__);

(statearr_35952[(1)] = (1));

return statearr_35952;
});
var figwheel$client$file_reloading$state_machine__32496__auto____1 = (function (state_35937){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_35937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e35953){if((e35953 instanceof Object)){
var ex__32499__auto__ = e35953;
var statearr_35954_35966 = state_35937;
(statearr_35954_35966[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35967 = state_35937;
state_35937 = G__35967;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32496__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32496__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32496__auto____0;
figwheel$client$file_reloading$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32496__auto____1;
return figwheel$client$file_reloading$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__))
})();
var state__32585__auto__ = (function (){var statearr_35955 = f__32584__auto__.call(null);
(statearr_35955[(6)] = c__32583__auto__);

return statearr_35955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__))
);

return c__32583__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35968,callback){
var map__35969 = p__35968;
var map__35969__$1 = ((((!((map__35969 == null)))?((((map__35969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35969):map__35969);
var file_msg = map__35969__$1;
var namespace = cljs.core.get.call(null,map__35969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35969,map__35969__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35969,map__35969__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35971){
var map__35972 = p__35971;
var map__35972__$1 = ((((!((map__35972 == null)))?((((map__35972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35972):map__35972);
var file_msg = map__35972__$1;
var namespace = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35974){
var map__35975 = p__35974;
var map__35975__$1 = ((((!((map__35975 == null)))?((((map__35975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35975):map__35975);
var file_msg = map__35975__$1;
var namespace = cljs.core.get.call(null,map__35975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35977,callback){
var map__35978 = p__35977;
var map__35978__$1 = ((((!((map__35978 == null)))?((((map__35978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35978):map__35978);
var file_msg = map__35978__$1;
var request_url = cljs.core.get.call(null,map__35978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32583__auto___36028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___36028,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___36028,out){
return (function (state_36013){
var state_val_36014 = (state_36013[(1)]);
if((state_val_36014 === (1))){
var inst_35987 = cljs.core.seq.call(null,files);
var inst_35988 = cljs.core.first.call(null,inst_35987);
var inst_35989 = cljs.core.next.call(null,inst_35987);
var inst_35990 = files;
var state_36013__$1 = (function (){var statearr_36015 = state_36013;
(statearr_36015[(7)] = inst_35989);

(statearr_36015[(8)] = inst_35988);

(statearr_36015[(9)] = inst_35990);

return statearr_36015;
})();
var statearr_36016_36029 = state_36013__$1;
(statearr_36016_36029[(2)] = null);

(statearr_36016_36029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (2))){
var inst_35996 = (state_36013[(10)]);
var inst_35990 = (state_36013[(9)]);
var inst_35995 = cljs.core.seq.call(null,inst_35990);
var inst_35996__$1 = cljs.core.first.call(null,inst_35995);
var inst_35997 = cljs.core.next.call(null,inst_35995);
var inst_35998 = (inst_35996__$1 == null);
var inst_35999 = cljs.core.not.call(null,inst_35998);
var state_36013__$1 = (function (){var statearr_36017 = state_36013;
(statearr_36017[(11)] = inst_35997);

(statearr_36017[(10)] = inst_35996__$1);

return statearr_36017;
})();
if(inst_35999){
var statearr_36018_36030 = state_36013__$1;
(statearr_36018_36030[(1)] = (4));

} else {
var statearr_36019_36031 = state_36013__$1;
(statearr_36019_36031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (3))){
var inst_36011 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36013__$1,inst_36011);
} else {
if((state_val_36014 === (4))){
var inst_35996 = (state_36013[(10)]);
var inst_36001 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35996);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36013__$1,(7),inst_36001);
} else {
if((state_val_36014 === (5))){
var inst_36007 = cljs.core.async.close_BANG_.call(null,out);
var state_36013__$1 = state_36013;
var statearr_36020_36032 = state_36013__$1;
(statearr_36020_36032[(2)] = inst_36007);

(statearr_36020_36032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (6))){
var inst_36009 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36021_36033 = state_36013__$1;
(statearr_36021_36033[(2)] = inst_36009);

(statearr_36021_36033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (7))){
var inst_35997 = (state_36013[(11)]);
var inst_36003 = (state_36013[(2)]);
var inst_36004 = cljs.core.async.put_BANG_.call(null,out,inst_36003);
var inst_35990 = inst_35997;
var state_36013__$1 = (function (){var statearr_36022 = state_36013;
(statearr_36022[(12)] = inst_36004);

(statearr_36022[(9)] = inst_35990);

return statearr_36022;
})();
var statearr_36023_36034 = state_36013__$1;
(statearr_36023_36034[(2)] = null);

(statearr_36023_36034[(1)] = (2));


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
});})(c__32583__auto___36028,out))
;
return ((function (switch__32495__auto__,c__32583__auto___36028,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____0 = (function (){
var statearr_36024 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36024[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__);

(statearr_36024[(1)] = (1));

return statearr_36024;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____1 = (function (state_36013){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_36013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e36025){if((e36025 instanceof Object)){
var ex__32499__auto__ = e36025;
var statearr_36026_36035 = state_36013;
(statearr_36026_36035[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_36013;
state_36013 = G__36036;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__ = function(state_36013){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____1.call(this,state_36013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___36028,out))
})();
var state__32585__auto__ = (function (){var statearr_36027 = f__32584__auto__.call(null);
(statearr_36027[(6)] = c__32583__auto___36028);

return statearr_36027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___36028,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36037,opts){
var map__36038 = p__36037;
var map__36038__$1 = ((((!((map__36038 == null)))?((((map__36038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36038):map__36038);
var eval_body = cljs.core.get.call(null,map__36038__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36040){var e = e36040;
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
return (function (p1__36041_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36041_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36042){
var vec__36043 = p__36042;
var k = cljs.core.nth.call(null,vec__36043,(0),null);
var v = cljs.core.nth.call(null,vec__36043,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36046){
var vec__36047 = p__36046;
var k = cljs.core.nth.call(null,vec__36047,(0),null);
var v = cljs.core.nth.call(null,vec__36047,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36053,p__36054){
var map__36055 = p__36053;
var map__36055__$1 = ((((!((map__36055 == null)))?((((map__36055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36055):map__36055);
var opts = map__36055__$1;
var before_jsload = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36056 = p__36054;
var map__36056__$1 = ((((!((map__36056 == null)))?((((map__36056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36056):map__36056);
var msg = map__36056__$1;
var files = cljs.core.get.call(null,map__36056__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36056__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36056__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36210){
var state_val_36211 = (state_36210[(1)]);
if((state_val_36211 === (7))){
var inst_36070 = (state_36210[(7)]);
var inst_36073 = (state_36210[(8)]);
var inst_36071 = (state_36210[(9)]);
var inst_36072 = (state_36210[(10)]);
var inst_36078 = cljs.core._nth.call(null,inst_36071,inst_36073);
var inst_36079 = figwheel.client.file_reloading.eval_body.call(null,inst_36078,opts);
var inst_36080 = (inst_36073 + (1));
var tmp36212 = inst_36070;
var tmp36213 = inst_36071;
var tmp36214 = inst_36072;
var inst_36070__$1 = tmp36212;
var inst_36071__$1 = tmp36213;
var inst_36072__$1 = tmp36214;
var inst_36073__$1 = inst_36080;
var state_36210__$1 = (function (){var statearr_36215 = state_36210;
(statearr_36215[(7)] = inst_36070__$1);

(statearr_36215[(11)] = inst_36079);

(statearr_36215[(8)] = inst_36073__$1);

(statearr_36215[(9)] = inst_36071__$1);

(statearr_36215[(10)] = inst_36072__$1);

return statearr_36215;
})();
var statearr_36216_36299 = state_36210__$1;
(statearr_36216_36299[(2)] = null);

(statearr_36216_36299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (20))){
var inst_36113 = (state_36210[(12)]);
var inst_36121 = figwheel.client.file_reloading.sort_files.call(null,inst_36113);
var state_36210__$1 = state_36210;
var statearr_36217_36300 = state_36210__$1;
(statearr_36217_36300[(2)] = inst_36121);

(statearr_36217_36300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (27))){
var state_36210__$1 = state_36210;
var statearr_36218_36301 = state_36210__$1;
(statearr_36218_36301[(2)] = null);

(statearr_36218_36301[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (1))){
var inst_36062 = (state_36210[(13)]);
var inst_36059 = before_jsload.call(null,files);
var inst_36060 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36061 = (function (){return ((function (inst_36062,inst_36059,inst_36060,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36050_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36050_SHARP_);
});
;})(inst_36062,inst_36059,inst_36060,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36062__$1 = cljs.core.filter.call(null,inst_36061,files);
var inst_36063 = cljs.core.not_empty.call(null,inst_36062__$1);
var state_36210__$1 = (function (){var statearr_36219 = state_36210;
(statearr_36219[(14)] = inst_36059);

(statearr_36219[(13)] = inst_36062__$1);

(statearr_36219[(15)] = inst_36060);

return statearr_36219;
})();
if(cljs.core.truth_(inst_36063)){
var statearr_36220_36302 = state_36210__$1;
(statearr_36220_36302[(1)] = (2));

} else {
var statearr_36221_36303 = state_36210__$1;
(statearr_36221_36303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (24))){
var state_36210__$1 = state_36210;
var statearr_36222_36304 = state_36210__$1;
(statearr_36222_36304[(2)] = null);

(statearr_36222_36304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (39))){
var inst_36163 = (state_36210[(16)]);
var state_36210__$1 = state_36210;
var statearr_36223_36305 = state_36210__$1;
(statearr_36223_36305[(2)] = inst_36163);

(statearr_36223_36305[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (46))){
var inst_36205 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36224_36306 = state_36210__$1;
(statearr_36224_36306[(2)] = inst_36205);

(statearr_36224_36306[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (4))){
var inst_36107 = (state_36210[(2)]);
var inst_36108 = cljs.core.List.EMPTY;
var inst_36109 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36108);
var inst_36110 = (function (){return ((function (inst_36107,inst_36108,inst_36109,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36051_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36051_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36051_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36051_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36107,inst_36108,inst_36109,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36111 = cljs.core.filter.call(null,inst_36110,files);
var inst_36112 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36113 = cljs.core.concat.call(null,inst_36111,inst_36112);
var state_36210__$1 = (function (){var statearr_36225 = state_36210;
(statearr_36225[(17)] = inst_36109);

(statearr_36225[(12)] = inst_36113);

(statearr_36225[(18)] = inst_36107);

return statearr_36225;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36226_36307 = state_36210__$1;
(statearr_36226_36307[(1)] = (16));

} else {
var statearr_36227_36308 = state_36210__$1;
(statearr_36227_36308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (15))){
var inst_36097 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36228_36309 = state_36210__$1;
(statearr_36228_36309[(2)] = inst_36097);

(statearr_36228_36309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (21))){
var inst_36123 = (state_36210[(19)]);
var inst_36123__$1 = (state_36210[(2)]);
var inst_36124 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36123__$1);
var state_36210__$1 = (function (){var statearr_36229 = state_36210;
(statearr_36229[(19)] = inst_36123__$1);

return statearr_36229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36210__$1,(22),inst_36124);
} else {
if((state_val_36211 === (31))){
var inst_36208 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36210__$1,inst_36208);
} else {
if((state_val_36211 === (32))){
var inst_36163 = (state_36210[(16)]);
var inst_36168 = inst_36163.cljs$lang$protocol_mask$partition0$;
var inst_36169 = (inst_36168 & (64));
var inst_36170 = inst_36163.cljs$core$ISeq$;
var inst_36171 = (cljs.core.PROTOCOL_SENTINEL === inst_36170);
var inst_36172 = (inst_36169) || (inst_36171);
var state_36210__$1 = state_36210;
if(cljs.core.truth_(inst_36172)){
var statearr_36230_36310 = state_36210__$1;
(statearr_36230_36310[(1)] = (35));

} else {
var statearr_36231_36311 = state_36210__$1;
(statearr_36231_36311[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (40))){
var inst_36185 = (state_36210[(20)]);
var inst_36184 = (state_36210[(2)]);
var inst_36185__$1 = cljs.core.get.call(null,inst_36184,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36186 = cljs.core.get.call(null,inst_36184,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36187 = cljs.core.not_empty.call(null,inst_36185__$1);
var state_36210__$1 = (function (){var statearr_36232 = state_36210;
(statearr_36232[(20)] = inst_36185__$1);

(statearr_36232[(21)] = inst_36186);

return statearr_36232;
})();
if(cljs.core.truth_(inst_36187)){
var statearr_36233_36312 = state_36210__$1;
(statearr_36233_36312[(1)] = (41));

} else {
var statearr_36234_36313 = state_36210__$1;
(statearr_36234_36313[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (33))){
var state_36210__$1 = state_36210;
var statearr_36235_36314 = state_36210__$1;
(statearr_36235_36314[(2)] = false);

(statearr_36235_36314[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (13))){
var inst_36083 = (state_36210[(22)]);
var inst_36087 = cljs.core.chunk_first.call(null,inst_36083);
var inst_36088 = cljs.core.chunk_rest.call(null,inst_36083);
var inst_36089 = cljs.core.count.call(null,inst_36087);
var inst_36070 = inst_36088;
var inst_36071 = inst_36087;
var inst_36072 = inst_36089;
var inst_36073 = (0);
var state_36210__$1 = (function (){var statearr_36236 = state_36210;
(statearr_36236[(7)] = inst_36070);

(statearr_36236[(8)] = inst_36073);

(statearr_36236[(9)] = inst_36071);

(statearr_36236[(10)] = inst_36072);

return statearr_36236;
})();
var statearr_36237_36315 = state_36210__$1;
(statearr_36237_36315[(2)] = null);

(statearr_36237_36315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (22))){
var inst_36126 = (state_36210[(23)]);
var inst_36131 = (state_36210[(24)]);
var inst_36127 = (state_36210[(25)]);
var inst_36123 = (state_36210[(19)]);
var inst_36126__$1 = (state_36210[(2)]);
var inst_36127__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36126__$1);
var inst_36128 = (function (){var all_files = inst_36123;
var res_SINGLEQUOTE_ = inst_36126__$1;
var res = inst_36127__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36126,inst_36131,inst_36127,inst_36123,inst_36126__$1,inst_36127__$1,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36052_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36052_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36126,inst_36131,inst_36127,inst_36123,inst_36126__$1,inst_36127__$1,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36129 = cljs.core.filter.call(null,inst_36128,inst_36126__$1);
var inst_36130 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36131__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36130);
var inst_36132 = cljs.core.not_empty.call(null,inst_36131__$1);
var state_36210__$1 = (function (){var statearr_36238 = state_36210;
(statearr_36238[(23)] = inst_36126__$1);

(statearr_36238[(26)] = inst_36129);

(statearr_36238[(24)] = inst_36131__$1);

(statearr_36238[(25)] = inst_36127__$1);

return statearr_36238;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36239_36316 = state_36210__$1;
(statearr_36239_36316[(1)] = (23));

} else {
var statearr_36240_36317 = state_36210__$1;
(statearr_36240_36317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (36))){
var state_36210__$1 = state_36210;
var statearr_36241_36318 = state_36210__$1;
(statearr_36241_36318[(2)] = false);

(statearr_36241_36318[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (41))){
var inst_36185 = (state_36210[(20)]);
var inst_36189 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36190 = cljs.core.map.call(null,inst_36189,inst_36185);
var inst_36191 = cljs.core.pr_str.call(null,inst_36190);
var inst_36192 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36191)].join('');
var inst_36193 = figwheel.client.utils.log.call(null,inst_36192);
var state_36210__$1 = state_36210;
var statearr_36242_36319 = state_36210__$1;
(statearr_36242_36319[(2)] = inst_36193);

(statearr_36242_36319[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (43))){
var inst_36186 = (state_36210[(21)]);
var inst_36196 = (state_36210[(2)]);
var inst_36197 = cljs.core.not_empty.call(null,inst_36186);
var state_36210__$1 = (function (){var statearr_36243 = state_36210;
(statearr_36243[(27)] = inst_36196);

return statearr_36243;
})();
if(cljs.core.truth_(inst_36197)){
var statearr_36244_36320 = state_36210__$1;
(statearr_36244_36320[(1)] = (44));

} else {
var statearr_36245_36321 = state_36210__$1;
(statearr_36245_36321[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (29))){
var inst_36126 = (state_36210[(23)]);
var inst_36129 = (state_36210[(26)]);
var inst_36163 = (state_36210[(16)]);
var inst_36131 = (state_36210[(24)]);
var inst_36127 = (state_36210[(25)]);
var inst_36123 = (state_36210[(19)]);
var inst_36159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36162 = (function (){var all_files = inst_36123;
var res_SINGLEQUOTE_ = inst_36126;
var res = inst_36127;
var files_not_loaded = inst_36129;
var dependencies_that_loaded = inst_36131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36163,inst_36131,inst_36127,inst_36123,inst_36159,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36161){
var map__36246 = p__36161;
var map__36246__$1 = ((((!((map__36246 == null)))?((((map__36246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36246):map__36246);
var namespace = cljs.core.get.call(null,map__36246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36163,inst_36131,inst_36127,inst_36123,inst_36159,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36163__$1 = cljs.core.group_by.call(null,inst_36162,inst_36129);
var inst_36165 = (inst_36163__$1 == null);
var inst_36166 = cljs.core.not.call(null,inst_36165);
var state_36210__$1 = (function (){var statearr_36248 = state_36210;
(statearr_36248[(28)] = inst_36159);

(statearr_36248[(16)] = inst_36163__$1);

return statearr_36248;
})();
if(inst_36166){
var statearr_36249_36322 = state_36210__$1;
(statearr_36249_36322[(1)] = (32));

} else {
var statearr_36250_36323 = state_36210__$1;
(statearr_36250_36323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (44))){
var inst_36186 = (state_36210[(21)]);
var inst_36199 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36186);
var inst_36200 = cljs.core.pr_str.call(null,inst_36199);
var inst_36201 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36200)].join('');
var inst_36202 = figwheel.client.utils.log.call(null,inst_36201);
var state_36210__$1 = state_36210;
var statearr_36251_36324 = state_36210__$1;
(statearr_36251_36324[(2)] = inst_36202);

(statearr_36251_36324[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (6))){
var inst_36104 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36252_36325 = state_36210__$1;
(statearr_36252_36325[(2)] = inst_36104);

(statearr_36252_36325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (28))){
var inst_36129 = (state_36210[(26)]);
var inst_36156 = (state_36210[(2)]);
var inst_36157 = cljs.core.not_empty.call(null,inst_36129);
var state_36210__$1 = (function (){var statearr_36253 = state_36210;
(statearr_36253[(29)] = inst_36156);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36157)){
var statearr_36254_36326 = state_36210__$1;
(statearr_36254_36326[(1)] = (29));

} else {
var statearr_36255_36327 = state_36210__$1;
(statearr_36255_36327[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (25))){
var inst_36127 = (state_36210[(25)]);
var inst_36143 = (state_36210[(2)]);
var inst_36144 = cljs.core.not_empty.call(null,inst_36127);
var state_36210__$1 = (function (){var statearr_36256 = state_36210;
(statearr_36256[(30)] = inst_36143);

return statearr_36256;
})();
if(cljs.core.truth_(inst_36144)){
var statearr_36257_36328 = state_36210__$1;
(statearr_36257_36328[(1)] = (26));

} else {
var statearr_36258_36329 = state_36210__$1;
(statearr_36258_36329[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (34))){
var inst_36179 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
if(cljs.core.truth_(inst_36179)){
var statearr_36259_36330 = state_36210__$1;
(statearr_36259_36330[(1)] = (38));

} else {
var statearr_36260_36331 = state_36210__$1;
(statearr_36260_36331[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (17))){
var state_36210__$1 = state_36210;
var statearr_36261_36332 = state_36210__$1;
(statearr_36261_36332[(2)] = recompile_dependents);

(statearr_36261_36332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (3))){
var state_36210__$1 = state_36210;
var statearr_36262_36333 = state_36210__$1;
(statearr_36262_36333[(2)] = null);

(statearr_36262_36333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (12))){
var inst_36100 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36263_36334 = state_36210__$1;
(statearr_36263_36334[(2)] = inst_36100);

(statearr_36263_36334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (2))){
var inst_36062 = (state_36210[(13)]);
var inst_36069 = cljs.core.seq.call(null,inst_36062);
var inst_36070 = inst_36069;
var inst_36071 = null;
var inst_36072 = (0);
var inst_36073 = (0);
var state_36210__$1 = (function (){var statearr_36264 = state_36210;
(statearr_36264[(7)] = inst_36070);

(statearr_36264[(8)] = inst_36073);

(statearr_36264[(9)] = inst_36071);

(statearr_36264[(10)] = inst_36072);

return statearr_36264;
})();
var statearr_36265_36335 = state_36210__$1;
(statearr_36265_36335[(2)] = null);

(statearr_36265_36335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (23))){
var inst_36126 = (state_36210[(23)]);
var inst_36129 = (state_36210[(26)]);
var inst_36131 = (state_36210[(24)]);
var inst_36127 = (state_36210[(25)]);
var inst_36123 = (state_36210[(19)]);
var inst_36134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36136 = (function (){var all_files = inst_36123;
var res_SINGLEQUOTE_ = inst_36126;
var res = inst_36127;
var files_not_loaded = inst_36129;
var dependencies_that_loaded = inst_36131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36134,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36135){
var map__36266 = p__36135;
var map__36266__$1 = ((((!((map__36266 == null)))?((((map__36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36266):map__36266);
var request_url = cljs.core.get.call(null,map__36266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36134,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36137 = cljs.core.reverse.call(null,inst_36131);
var inst_36138 = cljs.core.map.call(null,inst_36136,inst_36137);
var inst_36139 = cljs.core.pr_str.call(null,inst_36138);
var inst_36140 = figwheel.client.utils.log.call(null,inst_36139);
var state_36210__$1 = (function (){var statearr_36268 = state_36210;
(statearr_36268[(31)] = inst_36134);

return statearr_36268;
})();
var statearr_36269_36336 = state_36210__$1;
(statearr_36269_36336[(2)] = inst_36140);

(statearr_36269_36336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (35))){
var state_36210__$1 = state_36210;
var statearr_36270_36337 = state_36210__$1;
(statearr_36270_36337[(2)] = true);

(statearr_36270_36337[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (19))){
var inst_36113 = (state_36210[(12)]);
var inst_36119 = figwheel.client.file_reloading.expand_files.call(null,inst_36113);
var state_36210__$1 = state_36210;
var statearr_36271_36338 = state_36210__$1;
(statearr_36271_36338[(2)] = inst_36119);

(statearr_36271_36338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (11))){
var state_36210__$1 = state_36210;
var statearr_36272_36339 = state_36210__$1;
(statearr_36272_36339[(2)] = null);

(statearr_36272_36339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (9))){
var inst_36102 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36273_36340 = state_36210__$1;
(statearr_36273_36340[(2)] = inst_36102);

(statearr_36273_36340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (5))){
var inst_36073 = (state_36210[(8)]);
var inst_36072 = (state_36210[(10)]);
var inst_36075 = (inst_36073 < inst_36072);
var inst_36076 = inst_36075;
var state_36210__$1 = state_36210;
if(cljs.core.truth_(inst_36076)){
var statearr_36274_36341 = state_36210__$1;
(statearr_36274_36341[(1)] = (7));

} else {
var statearr_36275_36342 = state_36210__$1;
(statearr_36275_36342[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (14))){
var inst_36083 = (state_36210[(22)]);
var inst_36092 = cljs.core.first.call(null,inst_36083);
var inst_36093 = figwheel.client.file_reloading.eval_body.call(null,inst_36092,opts);
var inst_36094 = cljs.core.next.call(null,inst_36083);
var inst_36070 = inst_36094;
var inst_36071 = null;
var inst_36072 = (0);
var inst_36073 = (0);
var state_36210__$1 = (function (){var statearr_36276 = state_36210;
(statearr_36276[(7)] = inst_36070);

(statearr_36276[(8)] = inst_36073);

(statearr_36276[(9)] = inst_36071);

(statearr_36276[(32)] = inst_36093);

(statearr_36276[(10)] = inst_36072);

return statearr_36276;
})();
var statearr_36277_36343 = state_36210__$1;
(statearr_36277_36343[(2)] = null);

(statearr_36277_36343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (45))){
var state_36210__$1 = state_36210;
var statearr_36278_36344 = state_36210__$1;
(statearr_36278_36344[(2)] = null);

(statearr_36278_36344[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (26))){
var inst_36126 = (state_36210[(23)]);
var inst_36129 = (state_36210[(26)]);
var inst_36131 = (state_36210[(24)]);
var inst_36127 = (state_36210[(25)]);
var inst_36123 = (state_36210[(19)]);
var inst_36146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36148 = (function (){var all_files = inst_36123;
var res_SINGLEQUOTE_ = inst_36126;
var res = inst_36127;
var files_not_loaded = inst_36129;
var dependencies_that_loaded = inst_36131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36146,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36147){
var map__36279 = p__36147;
var map__36279__$1 = ((((!((map__36279 == null)))?((((map__36279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36279):map__36279);
var namespace = cljs.core.get.call(null,map__36279__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36146,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36149 = cljs.core.map.call(null,inst_36148,inst_36127);
var inst_36150 = cljs.core.pr_str.call(null,inst_36149);
var inst_36151 = figwheel.client.utils.log.call(null,inst_36150);
var inst_36152 = (function (){var all_files = inst_36123;
var res_SINGLEQUOTE_ = inst_36126;
var res = inst_36127;
var files_not_loaded = inst_36129;
var dependencies_that_loaded = inst_36131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36146,inst_36148,inst_36149,inst_36150,inst_36151,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36126,inst_36129,inst_36131,inst_36127,inst_36123,inst_36146,inst_36148,inst_36149,inst_36150,inst_36151,state_val_36211,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36153 = setTimeout(inst_36152,(10));
var state_36210__$1 = (function (){var statearr_36281 = state_36210;
(statearr_36281[(33)] = inst_36146);

(statearr_36281[(34)] = inst_36151);

return statearr_36281;
})();
var statearr_36282_36345 = state_36210__$1;
(statearr_36282_36345[(2)] = inst_36153);

(statearr_36282_36345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (16))){
var state_36210__$1 = state_36210;
var statearr_36283_36346 = state_36210__$1;
(statearr_36283_36346[(2)] = reload_dependents);

(statearr_36283_36346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (38))){
var inst_36163 = (state_36210[(16)]);
var inst_36181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36163);
var state_36210__$1 = state_36210;
var statearr_36284_36347 = state_36210__$1;
(statearr_36284_36347[(2)] = inst_36181);

(statearr_36284_36347[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (30))){
var state_36210__$1 = state_36210;
var statearr_36285_36348 = state_36210__$1;
(statearr_36285_36348[(2)] = null);

(statearr_36285_36348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (10))){
var inst_36083 = (state_36210[(22)]);
var inst_36085 = cljs.core.chunked_seq_QMARK_.call(null,inst_36083);
var state_36210__$1 = state_36210;
if(inst_36085){
var statearr_36286_36349 = state_36210__$1;
(statearr_36286_36349[(1)] = (13));

} else {
var statearr_36287_36350 = state_36210__$1;
(statearr_36287_36350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (18))){
var inst_36117 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
if(cljs.core.truth_(inst_36117)){
var statearr_36288_36351 = state_36210__$1;
(statearr_36288_36351[(1)] = (19));

} else {
var statearr_36289_36352 = state_36210__$1;
(statearr_36289_36352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (42))){
var state_36210__$1 = state_36210;
var statearr_36290_36353 = state_36210__$1;
(statearr_36290_36353[(2)] = null);

(statearr_36290_36353[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (37))){
var inst_36176 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36291_36354 = state_36210__$1;
(statearr_36291_36354[(2)] = inst_36176);

(statearr_36291_36354[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (8))){
var inst_36070 = (state_36210[(7)]);
var inst_36083 = (state_36210[(22)]);
var inst_36083__$1 = cljs.core.seq.call(null,inst_36070);
var state_36210__$1 = (function (){var statearr_36292 = state_36210;
(statearr_36292[(22)] = inst_36083__$1);

return statearr_36292;
})();
if(inst_36083__$1){
var statearr_36293_36355 = state_36210__$1;
(statearr_36293_36355[(1)] = (10));

} else {
var statearr_36294_36356 = state_36210__$1;
(statearr_36294_36356[(1)] = (11));

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
});})(c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32495__auto__,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____0 = (function (){
var statearr_36295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36295[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__);

(statearr_36295[(1)] = (1));

return statearr_36295;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____1 = (function (state_36210){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_36210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e36296){if((e36296 instanceof Object)){
var ex__32499__auto__ = e36296;
var statearr_36297_36357 = state_36210;
(statearr_36297_36357[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36358 = state_36210;
state_36210 = G__36358;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__ = function(state_36210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____1.call(this,state_36210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32585__auto__ = (function (){var statearr_36298 = f__32584__auto__.call(null);
(statearr_36298[(6)] = c__32583__auto__);

return statearr_36298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__,map__36055,map__36055__$1,opts,before_jsload,on_jsload,reload_dependents,map__36056,map__36056__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32583__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36361,link){
var map__36362 = p__36361;
var map__36362__$1 = ((((!((map__36362 == null)))?((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36362):map__36362);
var file = cljs.core.get.call(null,map__36362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36362,map__36362__$1,file){
return (function (p1__36359_SHARP_,p2__36360_SHARP_){
if(cljs.core._EQ_.call(null,p1__36359_SHARP_,p2__36360_SHARP_)){
return p1__36359_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36362,map__36362__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36365){
var map__36366 = p__36365;
var map__36366__$1 = ((((!((map__36366 == null)))?((((map__36366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36366):map__36366);
var match_length = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36364_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36364_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36368_SHARP_,p2__36369_SHARP_){
return cljs.core.assoc.call(null,p1__36368_SHARP_,cljs.core.get.call(null,p2__36369_SHARP_,key),p2__36369_SHARP_);
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
var loaded_f_datas_36370 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36370);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36370);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36371,p__36372){
var map__36373 = p__36371;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var on_cssload = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36374 = p__36372;
var map__36374__$1 = ((((!((map__36374 == null)))?((((map__36374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36374):map__36374);
var files_msg = map__36374__$1;
var files = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1509580229983
