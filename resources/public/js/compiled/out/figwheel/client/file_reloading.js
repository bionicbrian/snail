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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35751_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35751_SHARP_));
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
var seq__35752 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35753 = null;
var count__35754 = (0);
var i__35755 = (0);
while(true){
if((i__35755 < count__35754)){
var n = cljs.core._nth.call(null,chunk__35753,i__35755);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35756 = seq__35752;
var G__35757 = chunk__35753;
var G__35758 = count__35754;
var G__35759 = (i__35755 + (1));
seq__35752 = G__35756;
chunk__35753 = G__35757;
count__35754 = G__35758;
i__35755 = G__35759;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35752);
if(temp__4657__auto__){
var seq__35752__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35752__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35752__$1);
var G__35760 = cljs.core.chunk_rest.call(null,seq__35752__$1);
var G__35761 = c__29125__auto__;
var G__35762 = cljs.core.count.call(null,c__29125__auto__);
var G__35763 = (0);
seq__35752 = G__35760;
chunk__35753 = G__35761;
count__35754 = G__35762;
i__35755 = G__35763;
continue;
} else {
var n = cljs.core.first.call(null,seq__35752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35764 = cljs.core.next.call(null,seq__35752__$1);
var G__35765 = null;
var G__35766 = (0);
var G__35767 = (0);
seq__35752 = G__35764;
chunk__35753 = G__35765;
count__35754 = G__35766;
i__35755 = G__35767;
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

var seq__35777_35785 = cljs.core.seq.call(null,deps);
var chunk__35778_35786 = null;
var count__35779_35787 = (0);
var i__35780_35788 = (0);
while(true){
if((i__35780_35788 < count__35779_35787)){
var dep_35789 = cljs.core._nth.call(null,chunk__35778_35786,i__35780_35788);
topo_sort_helper_STAR_.call(null,dep_35789,(depth + (1)),state);

var G__35790 = seq__35777_35785;
var G__35791 = chunk__35778_35786;
var G__35792 = count__35779_35787;
var G__35793 = (i__35780_35788 + (1));
seq__35777_35785 = G__35790;
chunk__35778_35786 = G__35791;
count__35779_35787 = G__35792;
i__35780_35788 = G__35793;
continue;
} else {
var temp__4657__auto___35794 = cljs.core.seq.call(null,seq__35777_35785);
if(temp__4657__auto___35794){
var seq__35777_35795__$1 = temp__4657__auto___35794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35777_35795__$1)){
var c__29125__auto___35796 = cljs.core.chunk_first.call(null,seq__35777_35795__$1);
var G__35797 = cljs.core.chunk_rest.call(null,seq__35777_35795__$1);
var G__35798 = c__29125__auto___35796;
var G__35799 = cljs.core.count.call(null,c__29125__auto___35796);
var G__35800 = (0);
seq__35777_35785 = G__35797;
chunk__35778_35786 = G__35798;
count__35779_35787 = G__35799;
i__35780_35788 = G__35800;
continue;
} else {
var dep_35801 = cljs.core.first.call(null,seq__35777_35795__$1);
topo_sort_helper_STAR_.call(null,dep_35801,(depth + (1)),state);

var G__35802 = cljs.core.next.call(null,seq__35777_35795__$1);
var G__35803 = null;
var G__35804 = (0);
var G__35805 = (0);
seq__35777_35785 = G__35802;
chunk__35778_35786 = G__35803;
count__35779_35787 = G__35804;
i__35780_35788 = G__35805;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35781){
var vec__35782 = p__35781;
var seq__35783 = cljs.core.seq.call(null,vec__35782);
var first__35784 = cljs.core.first.call(null,seq__35783);
var seq__35783__$1 = cljs.core.next.call(null,seq__35783);
var x = first__35784;
var xs = seq__35783__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35782,seq__35783,first__35784,seq__35783__$1,x,xs,get_deps__$1){
return (function (p1__35768_SHARP_){
return clojure.set.difference.call(null,p1__35768_SHARP_,x);
});})(vec__35782,seq__35783,first__35784,seq__35783__$1,x,xs,get_deps__$1))
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
var seq__35806 = cljs.core.seq.call(null,provides);
var chunk__35807 = null;
var count__35808 = (0);
var i__35809 = (0);
while(true){
if((i__35809 < count__35808)){
var prov = cljs.core._nth.call(null,chunk__35807,i__35809);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35810_35818 = cljs.core.seq.call(null,requires);
var chunk__35811_35819 = null;
var count__35812_35820 = (0);
var i__35813_35821 = (0);
while(true){
if((i__35813_35821 < count__35812_35820)){
var req_35822 = cljs.core._nth.call(null,chunk__35811_35819,i__35813_35821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35822,prov);

var G__35823 = seq__35810_35818;
var G__35824 = chunk__35811_35819;
var G__35825 = count__35812_35820;
var G__35826 = (i__35813_35821 + (1));
seq__35810_35818 = G__35823;
chunk__35811_35819 = G__35824;
count__35812_35820 = G__35825;
i__35813_35821 = G__35826;
continue;
} else {
var temp__4657__auto___35827 = cljs.core.seq.call(null,seq__35810_35818);
if(temp__4657__auto___35827){
var seq__35810_35828__$1 = temp__4657__auto___35827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35810_35828__$1)){
var c__29125__auto___35829 = cljs.core.chunk_first.call(null,seq__35810_35828__$1);
var G__35830 = cljs.core.chunk_rest.call(null,seq__35810_35828__$1);
var G__35831 = c__29125__auto___35829;
var G__35832 = cljs.core.count.call(null,c__29125__auto___35829);
var G__35833 = (0);
seq__35810_35818 = G__35830;
chunk__35811_35819 = G__35831;
count__35812_35820 = G__35832;
i__35813_35821 = G__35833;
continue;
} else {
var req_35834 = cljs.core.first.call(null,seq__35810_35828__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35834,prov);

var G__35835 = cljs.core.next.call(null,seq__35810_35828__$1);
var G__35836 = null;
var G__35837 = (0);
var G__35838 = (0);
seq__35810_35818 = G__35835;
chunk__35811_35819 = G__35836;
count__35812_35820 = G__35837;
i__35813_35821 = G__35838;
continue;
}
} else {
}
}
break;
}

var G__35839 = seq__35806;
var G__35840 = chunk__35807;
var G__35841 = count__35808;
var G__35842 = (i__35809 + (1));
seq__35806 = G__35839;
chunk__35807 = G__35840;
count__35808 = G__35841;
i__35809 = G__35842;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35806);
if(temp__4657__auto__){
var seq__35806__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35806__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35806__$1);
var G__35843 = cljs.core.chunk_rest.call(null,seq__35806__$1);
var G__35844 = c__29125__auto__;
var G__35845 = cljs.core.count.call(null,c__29125__auto__);
var G__35846 = (0);
seq__35806 = G__35843;
chunk__35807 = G__35844;
count__35808 = G__35845;
i__35809 = G__35846;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35806__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35814_35847 = cljs.core.seq.call(null,requires);
var chunk__35815_35848 = null;
var count__35816_35849 = (0);
var i__35817_35850 = (0);
while(true){
if((i__35817_35850 < count__35816_35849)){
var req_35851 = cljs.core._nth.call(null,chunk__35815_35848,i__35817_35850);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35851,prov);

var G__35852 = seq__35814_35847;
var G__35853 = chunk__35815_35848;
var G__35854 = count__35816_35849;
var G__35855 = (i__35817_35850 + (1));
seq__35814_35847 = G__35852;
chunk__35815_35848 = G__35853;
count__35816_35849 = G__35854;
i__35817_35850 = G__35855;
continue;
} else {
var temp__4657__auto___35856__$1 = cljs.core.seq.call(null,seq__35814_35847);
if(temp__4657__auto___35856__$1){
var seq__35814_35857__$1 = temp__4657__auto___35856__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35814_35857__$1)){
var c__29125__auto___35858 = cljs.core.chunk_first.call(null,seq__35814_35857__$1);
var G__35859 = cljs.core.chunk_rest.call(null,seq__35814_35857__$1);
var G__35860 = c__29125__auto___35858;
var G__35861 = cljs.core.count.call(null,c__29125__auto___35858);
var G__35862 = (0);
seq__35814_35847 = G__35859;
chunk__35815_35848 = G__35860;
count__35816_35849 = G__35861;
i__35817_35850 = G__35862;
continue;
} else {
var req_35863 = cljs.core.first.call(null,seq__35814_35857__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35863,prov);

var G__35864 = cljs.core.next.call(null,seq__35814_35857__$1);
var G__35865 = null;
var G__35866 = (0);
var G__35867 = (0);
seq__35814_35847 = G__35864;
chunk__35815_35848 = G__35865;
count__35816_35849 = G__35866;
i__35817_35850 = G__35867;
continue;
}
} else {
}
}
break;
}

var G__35868 = cljs.core.next.call(null,seq__35806__$1);
var G__35869 = null;
var G__35870 = (0);
var G__35871 = (0);
seq__35806 = G__35868;
chunk__35807 = G__35869;
count__35808 = G__35870;
i__35809 = G__35871;
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
var seq__35872_35876 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35873_35877 = null;
var count__35874_35878 = (0);
var i__35875_35879 = (0);
while(true){
if((i__35875_35879 < count__35874_35878)){
var ns_35880 = cljs.core._nth.call(null,chunk__35873_35877,i__35875_35879);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35880);

var G__35881 = seq__35872_35876;
var G__35882 = chunk__35873_35877;
var G__35883 = count__35874_35878;
var G__35884 = (i__35875_35879 + (1));
seq__35872_35876 = G__35881;
chunk__35873_35877 = G__35882;
count__35874_35878 = G__35883;
i__35875_35879 = G__35884;
continue;
} else {
var temp__4657__auto___35885 = cljs.core.seq.call(null,seq__35872_35876);
if(temp__4657__auto___35885){
var seq__35872_35886__$1 = temp__4657__auto___35885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35872_35886__$1)){
var c__29125__auto___35887 = cljs.core.chunk_first.call(null,seq__35872_35886__$1);
var G__35888 = cljs.core.chunk_rest.call(null,seq__35872_35886__$1);
var G__35889 = c__29125__auto___35887;
var G__35890 = cljs.core.count.call(null,c__29125__auto___35887);
var G__35891 = (0);
seq__35872_35876 = G__35888;
chunk__35873_35877 = G__35889;
count__35874_35878 = G__35890;
i__35875_35879 = G__35891;
continue;
} else {
var ns_35892 = cljs.core.first.call(null,seq__35872_35886__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35892);

var G__35893 = cljs.core.next.call(null,seq__35872_35886__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35872_35876 = G__35893;
chunk__35873_35877 = G__35894;
count__35874_35878 = G__35895;
i__35875_35879 = G__35896;
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
var G__35897__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35898__i = 0, G__35898__a = new Array(arguments.length -  0);
while (G__35898__i < G__35898__a.length) {G__35898__a[G__35898__i] = arguments[G__35898__i + 0]; ++G__35898__i;}
  args = new cljs.core.IndexedSeq(G__35898__a,0,null);
} 
return G__35897__delegate.call(this,args);};
G__35897.cljs$lang$maxFixedArity = 0;
G__35897.cljs$lang$applyTo = (function (arglist__35899){
var args = cljs.core.seq(arglist__35899);
return G__35897__delegate(args);
});
G__35897.cljs$core$IFn$_invoke$arity$variadic = G__35897__delegate;
return G__35897;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35900_SHARP_,p2__35901_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35900_SHARP_)].join('')),p2__35901_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35902_SHARP_,p2__35903_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35902_SHARP_)].join(''),p2__35903_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35904 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35904.addCallback(((function (G__35904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35904))
);

G__35904.addErrback(((function (G__35904){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35904))
);

return G__35904;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35905 = cljs.core._EQ_;
var expr__35906 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35906))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35905,expr__35906){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35905,expr__35906))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35905,expr__35906){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35908){if((e35908 instanceof Error)){
var e = e35908;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35908;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35905,expr__35906))
} else {
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35906))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35906))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35905.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35906))){
return ((function (pred__35905,expr__35906){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35909){if((e35909 instanceof Error)){
var e = e35909;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35909;

}
}})());
});
;})(pred__35905,expr__35906))
} else {
return ((function (pred__35905,expr__35906){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35905,expr__35906))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35910,callback){
var map__35911 = p__35910;
var map__35911__$1 = ((((!((map__35911 == null)))?((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35911):map__35911);
var file_msg = map__35911__$1;
var request_url = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35911,map__35911__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35911,map__35911__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__){
return (function (state_35935){
var state_val_35936 = (state_35935[(1)]);
if((state_val_35936 === (7))){
var inst_35931 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35937_35954 = state_35935__$1;
(statearr_35937_35954[(2)] = inst_35931);

(statearr_35937_35954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (1))){
var state_35935__$1 = state_35935;
var statearr_35938_35955 = state_35935__$1;
(statearr_35938_35955[(2)] = null);

(statearr_35938_35955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (4))){
var inst_35915 = (state_35935[(7)]);
var inst_35915__$1 = (state_35935[(2)]);
var state_35935__$1 = (function (){var statearr_35939 = state_35935;
(statearr_35939[(7)] = inst_35915__$1);

return statearr_35939;
})();
if(cljs.core.truth_(inst_35915__$1)){
var statearr_35940_35956 = state_35935__$1;
(statearr_35940_35956[(1)] = (5));

} else {
var statearr_35941_35957 = state_35935__$1;
(statearr_35941_35957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (6))){
var state_35935__$1 = state_35935;
var statearr_35942_35958 = state_35935__$1;
(statearr_35942_35958[(2)] = null);

(statearr_35942_35958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (3))){
var inst_35933 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35935__$1,inst_35933);
} else {
if((state_val_35936 === (2))){
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35935__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35936 === (11))){
var inst_35927 = (state_35935[(2)]);
var state_35935__$1 = (function (){var statearr_35943 = state_35935;
(statearr_35943[(8)] = inst_35927);

return statearr_35943;
})();
var statearr_35944_35959 = state_35935__$1;
(statearr_35944_35959[(2)] = null);

(statearr_35944_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (9))){
var inst_35921 = (state_35935[(9)]);
var inst_35919 = (state_35935[(10)]);
var inst_35923 = inst_35921.call(null,inst_35919);
var state_35935__$1 = state_35935;
var statearr_35945_35960 = state_35935__$1;
(statearr_35945_35960[(2)] = inst_35923);

(statearr_35945_35960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (5))){
var inst_35915 = (state_35935[(7)]);
var inst_35917 = figwheel.client.file_reloading.blocking_load.call(null,inst_35915);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35935__$1,(8),inst_35917);
} else {
if((state_val_35936 === (10))){
var inst_35919 = (state_35935[(10)]);
var inst_35925 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35919);
var state_35935__$1 = state_35935;
var statearr_35946_35961 = state_35935__$1;
(statearr_35946_35961[(2)] = inst_35925);

(statearr_35946_35961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (8))){
var inst_35921 = (state_35935[(9)]);
var inst_35915 = (state_35935[(7)]);
var inst_35919 = (state_35935[(2)]);
var inst_35920 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35921__$1 = cljs.core.get.call(null,inst_35920,inst_35915);
var state_35935__$1 = (function (){var statearr_35947 = state_35935;
(statearr_35947[(9)] = inst_35921__$1);

(statearr_35947[(10)] = inst_35919);

return statearr_35947;
})();
if(cljs.core.truth_(inst_35921__$1)){
var statearr_35948_35962 = state_35935__$1;
(statearr_35948_35962[(1)] = (9));

} else {
var statearr_35949_35963 = state_35935__$1;
(statearr_35949_35963[(1)] = (10));

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
});})(c__32028__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31941__auto__ = null;
var figwheel$client$file_reloading$state_machine__31941__auto____0 = (function (){
var statearr_35950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35950[(0)] = figwheel$client$file_reloading$state_machine__31941__auto__);

(statearr_35950[(1)] = (1));

return statearr_35950;
});
var figwheel$client$file_reloading$state_machine__31941__auto____1 = (function (state_35935){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_35935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e35951){if((e35951 instanceof Object)){
var ex__31944__auto__ = e35951;
var statearr_35952_35964 = state_35935;
(statearr_35952_35964[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35965 = state_35935;
state_35935 = G__35965;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31941__auto__ = function(state_35935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31941__auto____1.call(this,state_35935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31941__auto____0;
figwheel$client$file_reloading$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31941__auto____1;
return figwheel$client$file_reloading$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__))
})();
var state__32030__auto__ = (function (){var statearr_35953 = f__32029__auto__.call(null);
(statearr_35953[(6)] = c__32028__auto__);

return statearr_35953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__))
);

return c__32028__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35966,callback){
var map__35967 = p__35966;
var map__35967__$1 = ((((!((map__35967 == null)))?((((map__35967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35967):map__35967);
var file_msg = map__35967__$1;
var namespace = cljs.core.get.call(null,map__35967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35967,map__35967__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35967,map__35967__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35969){
var map__35970 = p__35969;
var map__35970__$1 = ((((!((map__35970 == null)))?((((map__35970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35970):map__35970);
var file_msg = map__35970__$1;
var namespace = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35972){
var map__35973 = p__35972;
var map__35973__$1 = ((((!((map__35973 == null)))?((((map__35973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35973):map__35973);
var file_msg = map__35973__$1;
var namespace = cljs.core.get.call(null,map__35973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35975,callback){
var map__35976 = p__35975;
var map__35976__$1 = ((((!((map__35976 == null)))?((((map__35976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35976):map__35976);
var file_msg = map__35976__$1;
var request_url = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32028__auto___36026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___36026,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___36026,out){
return (function (state_36011){
var state_val_36012 = (state_36011[(1)]);
if((state_val_36012 === (1))){
var inst_35985 = cljs.core.seq.call(null,files);
var inst_35986 = cljs.core.first.call(null,inst_35985);
var inst_35987 = cljs.core.next.call(null,inst_35985);
var inst_35988 = files;
var state_36011__$1 = (function (){var statearr_36013 = state_36011;
(statearr_36013[(7)] = inst_35987);

(statearr_36013[(8)] = inst_35988);

(statearr_36013[(9)] = inst_35986);

return statearr_36013;
})();
var statearr_36014_36027 = state_36011__$1;
(statearr_36014_36027[(2)] = null);

(statearr_36014_36027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36012 === (2))){
var inst_35994 = (state_36011[(10)]);
var inst_35988 = (state_36011[(8)]);
var inst_35993 = cljs.core.seq.call(null,inst_35988);
var inst_35994__$1 = cljs.core.first.call(null,inst_35993);
var inst_35995 = cljs.core.next.call(null,inst_35993);
var inst_35996 = (inst_35994__$1 == null);
var inst_35997 = cljs.core.not.call(null,inst_35996);
var state_36011__$1 = (function (){var statearr_36015 = state_36011;
(statearr_36015[(10)] = inst_35994__$1);

(statearr_36015[(11)] = inst_35995);

return statearr_36015;
})();
if(inst_35997){
var statearr_36016_36028 = state_36011__$1;
(statearr_36016_36028[(1)] = (4));

} else {
var statearr_36017_36029 = state_36011__$1;
(statearr_36017_36029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36012 === (3))){
var inst_36009 = (state_36011[(2)]);
var state_36011__$1 = state_36011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36011__$1,inst_36009);
} else {
if((state_val_36012 === (4))){
var inst_35994 = (state_36011[(10)]);
var inst_35999 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35994);
var state_36011__$1 = state_36011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36011__$1,(7),inst_35999);
} else {
if((state_val_36012 === (5))){
var inst_36005 = cljs.core.async.close_BANG_.call(null,out);
var state_36011__$1 = state_36011;
var statearr_36018_36030 = state_36011__$1;
(statearr_36018_36030[(2)] = inst_36005);

(statearr_36018_36030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36012 === (6))){
var inst_36007 = (state_36011[(2)]);
var state_36011__$1 = state_36011;
var statearr_36019_36031 = state_36011__$1;
(statearr_36019_36031[(2)] = inst_36007);

(statearr_36019_36031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36012 === (7))){
var inst_35995 = (state_36011[(11)]);
var inst_36001 = (state_36011[(2)]);
var inst_36002 = cljs.core.async.put_BANG_.call(null,out,inst_36001);
var inst_35988 = inst_35995;
var state_36011__$1 = (function (){var statearr_36020 = state_36011;
(statearr_36020[(12)] = inst_36002);

(statearr_36020[(8)] = inst_35988);

return statearr_36020;
})();
var statearr_36021_36032 = state_36011__$1;
(statearr_36021_36032[(2)] = null);

(statearr_36021_36032[(1)] = (2));


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
});})(c__32028__auto___36026,out))
;
return ((function (switch__31940__auto__,c__32028__auto___36026,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____0 = (function (){
var statearr_36022 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36022[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__);

(statearr_36022[(1)] = (1));

return statearr_36022;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____1 = (function (state_36011){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_36011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e36023){if((e36023 instanceof Object)){
var ex__31944__auto__ = e36023;
var statearr_36024_36033 = state_36011;
(statearr_36024_36033[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36034 = state_36011;
state_36011 = G__36034;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__ = function(state_36011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____1.call(this,state_36011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___36026,out))
})();
var state__32030__auto__ = (function (){var statearr_36025 = f__32029__auto__.call(null);
(statearr_36025[(6)] = c__32028__auto___36026);

return statearr_36025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___36026,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36035,opts){
var map__36036 = p__36035;
var map__36036__$1 = ((((!((map__36036 == null)))?((((map__36036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36036):map__36036);
var eval_body = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36038){var e = e36038;
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
return (function (p1__36039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36039_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36040){
var vec__36041 = p__36040;
var k = cljs.core.nth.call(null,vec__36041,(0),null);
var v = cljs.core.nth.call(null,vec__36041,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36044){
var vec__36045 = p__36044;
var k = cljs.core.nth.call(null,vec__36045,(0),null);
var v = cljs.core.nth.call(null,vec__36045,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36051,p__36052){
var map__36053 = p__36051;
var map__36053__$1 = ((((!((map__36053 == null)))?((((map__36053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36053):map__36053);
var opts = map__36053__$1;
var before_jsload = cljs.core.get.call(null,map__36053__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36053__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36053__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36054 = p__36052;
var map__36054__$1 = ((((!((map__36054 == null)))?((((map__36054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36054):map__36054);
var msg = map__36054__$1;
var files = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36208){
var state_val_36209 = (state_36208[(1)]);
if((state_val_36209 === (7))){
var inst_36070 = (state_36208[(7)]);
var inst_36069 = (state_36208[(8)]);
var inst_36068 = (state_36208[(9)]);
var inst_36071 = (state_36208[(10)]);
var inst_36076 = cljs.core._nth.call(null,inst_36069,inst_36071);
var inst_36077 = figwheel.client.file_reloading.eval_body.call(null,inst_36076,opts);
var inst_36078 = (inst_36071 + (1));
var tmp36210 = inst_36070;
var tmp36211 = inst_36069;
var tmp36212 = inst_36068;
var inst_36068__$1 = tmp36212;
var inst_36069__$1 = tmp36211;
var inst_36070__$1 = tmp36210;
var inst_36071__$1 = inst_36078;
var state_36208__$1 = (function (){var statearr_36213 = state_36208;
(statearr_36213[(7)] = inst_36070__$1);

(statearr_36213[(8)] = inst_36069__$1);

(statearr_36213[(9)] = inst_36068__$1);

(statearr_36213[(10)] = inst_36071__$1);

(statearr_36213[(11)] = inst_36077);

return statearr_36213;
})();
var statearr_36214_36297 = state_36208__$1;
(statearr_36214_36297[(2)] = null);

(statearr_36214_36297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (20))){
var inst_36111 = (state_36208[(12)]);
var inst_36119 = figwheel.client.file_reloading.sort_files.call(null,inst_36111);
var state_36208__$1 = state_36208;
var statearr_36215_36298 = state_36208__$1;
(statearr_36215_36298[(2)] = inst_36119);

(statearr_36215_36298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (27))){
var state_36208__$1 = state_36208;
var statearr_36216_36299 = state_36208__$1;
(statearr_36216_36299[(2)] = null);

(statearr_36216_36299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (1))){
var inst_36060 = (state_36208[(13)]);
var inst_36057 = before_jsload.call(null,files);
var inst_36058 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36059 = (function (){return ((function (inst_36060,inst_36057,inst_36058,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36048_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36048_SHARP_);
});
;})(inst_36060,inst_36057,inst_36058,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36060__$1 = cljs.core.filter.call(null,inst_36059,files);
var inst_36061 = cljs.core.not_empty.call(null,inst_36060__$1);
var state_36208__$1 = (function (){var statearr_36217 = state_36208;
(statearr_36217[(14)] = inst_36058);

(statearr_36217[(15)] = inst_36057);

(statearr_36217[(13)] = inst_36060__$1);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36061)){
var statearr_36218_36300 = state_36208__$1;
(statearr_36218_36300[(1)] = (2));

} else {
var statearr_36219_36301 = state_36208__$1;
(statearr_36219_36301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (24))){
var state_36208__$1 = state_36208;
var statearr_36220_36302 = state_36208__$1;
(statearr_36220_36302[(2)] = null);

(statearr_36220_36302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (39))){
var inst_36161 = (state_36208[(16)]);
var state_36208__$1 = state_36208;
var statearr_36221_36303 = state_36208__$1;
(statearr_36221_36303[(2)] = inst_36161);

(statearr_36221_36303[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (46))){
var inst_36203 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36222_36304 = state_36208__$1;
(statearr_36222_36304[(2)] = inst_36203);

(statearr_36222_36304[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (4))){
var inst_36105 = (state_36208[(2)]);
var inst_36106 = cljs.core.List.EMPTY;
var inst_36107 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36106);
var inst_36108 = (function (){return ((function (inst_36105,inst_36106,inst_36107,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36049_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36049_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36049_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36049_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36105,inst_36106,inst_36107,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36109 = cljs.core.filter.call(null,inst_36108,files);
var inst_36110 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36111 = cljs.core.concat.call(null,inst_36109,inst_36110);
var state_36208__$1 = (function (){var statearr_36223 = state_36208;
(statearr_36223[(17)] = inst_36107);

(statearr_36223[(18)] = inst_36105);

(statearr_36223[(12)] = inst_36111);

return statearr_36223;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36224_36305 = state_36208__$1;
(statearr_36224_36305[(1)] = (16));

} else {
var statearr_36225_36306 = state_36208__$1;
(statearr_36225_36306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (15))){
var inst_36095 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36226_36307 = state_36208__$1;
(statearr_36226_36307[(2)] = inst_36095);

(statearr_36226_36307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (21))){
var inst_36121 = (state_36208[(19)]);
var inst_36121__$1 = (state_36208[(2)]);
var inst_36122 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36121__$1);
var state_36208__$1 = (function (){var statearr_36227 = state_36208;
(statearr_36227[(19)] = inst_36121__$1);

return statearr_36227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36208__$1,(22),inst_36122);
} else {
if((state_val_36209 === (31))){
var inst_36206 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36208__$1,inst_36206);
} else {
if((state_val_36209 === (32))){
var inst_36161 = (state_36208[(16)]);
var inst_36166 = inst_36161.cljs$lang$protocol_mask$partition0$;
var inst_36167 = (inst_36166 & (64));
var inst_36168 = inst_36161.cljs$core$ISeq$;
var inst_36169 = (cljs.core.PROTOCOL_SENTINEL === inst_36168);
var inst_36170 = (inst_36167) || (inst_36169);
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36170)){
var statearr_36228_36308 = state_36208__$1;
(statearr_36228_36308[(1)] = (35));

} else {
var statearr_36229_36309 = state_36208__$1;
(statearr_36229_36309[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (40))){
var inst_36183 = (state_36208[(20)]);
var inst_36182 = (state_36208[(2)]);
var inst_36183__$1 = cljs.core.get.call(null,inst_36182,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36184 = cljs.core.get.call(null,inst_36182,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36185 = cljs.core.not_empty.call(null,inst_36183__$1);
var state_36208__$1 = (function (){var statearr_36230 = state_36208;
(statearr_36230[(21)] = inst_36184);

(statearr_36230[(20)] = inst_36183__$1);

return statearr_36230;
})();
if(cljs.core.truth_(inst_36185)){
var statearr_36231_36310 = state_36208__$1;
(statearr_36231_36310[(1)] = (41));

} else {
var statearr_36232_36311 = state_36208__$1;
(statearr_36232_36311[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (33))){
var state_36208__$1 = state_36208;
var statearr_36233_36312 = state_36208__$1;
(statearr_36233_36312[(2)] = false);

(statearr_36233_36312[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (13))){
var inst_36081 = (state_36208[(22)]);
var inst_36085 = cljs.core.chunk_first.call(null,inst_36081);
var inst_36086 = cljs.core.chunk_rest.call(null,inst_36081);
var inst_36087 = cljs.core.count.call(null,inst_36085);
var inst_36068 = inst_36086;
var inst_36069 = inst_36085;
var inst_36070 = inst_36087;
var inst_36071 = (0);
var state_36208__$1 = (function (){var statearr_36234 = state_36208;
(statearr_36234[(7)] = inst_36070);

(statearr_36234[(8)] = inst_36069);

(statearr_36234[(9)] = inst_36068);

(statearr_36234[(10)] = inst_36071);

return statearr_36234;
})();
var statearr_36235_36313 = state_36208__$1;
(statearr_36235_36313[(2)] = null);

(statearr_36235_36313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (22))){
var inst_36124 = (state_36208[(23)]);
var inst_36129 = (state_36208[(24)]);
var inst_36125 = (state_36208[(25)]);
var inst_36121 = (state_36208[(19)]);
var inst_36124__$1 = (state_36208[(2)]);
var inst_36125__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36124__$1);
var inst_36126 = (function (){var all_files = inst_36121;
var res_SINGLEQUOTE_ = inst_36124__$1;
var res = inst_36125__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36124,inst_36129,inst_36125,inst_36121,inst_36124__$1,inst_36125__$1,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36050_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36050_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36124,inst_36129,inst_36125,inst_36121,inst_36124__$1,inst_36125__$1,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36127 = cljs.core.filter.call(null,inst_36126,inst_36124__$1);
var inst_36128 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36129__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36128);
var inst_36130 = cljs.core.not_empty.call(null,inst_36129__$1);
var state_36208__$1 = (function (){var statearr_36236 = state_36208;
(statearr_36236[(23)] = inst_36124__$1);

(statearr_36236[(24)] = inst_36129__$1);

(statearr_36236[(25)] = inst_36125__$1);

(statearr_36236[(26)] = inst_36127);

return statearr_36236;
})();
if(cljs.core.truth_(inst_36130)){
var statearr_36237_36314 = state_36208__$1;
(statearr_36237_36314[(1)] = (23));

} else {
var statearr_36238_36315 = state_36208__$1;
(statearr_36238_36315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (36))){
var state_36208__$1 = state_36208;
var statearr_36239_36316 = state_36208__$1;
(statearr_36239_36316[(2)] = false);

(statearr_36239_36316[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (41))){
var inst_36183 = (state_36208[(20)]);
var inst_36187 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36188 = cljs.core.map.call(null,inst_36187,inst_36183);
var inst_36189 = cljs.core.pr_str.call(null,inst_36188);
var inst_36190 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36189)].join('');
var inst_36191 = figwheel.client.utils.log.call(null,inst_36190);
var state_36208__$1 = state_36208;
var statearr_36240_36317 = state_36208__$1;
(statearr_36240_36317[(2)] = inst_36191);

(statearr_36240_36317[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (43))){
var inst_36184 = (state_36208[(21)]);
var inst_36194 = (state_36208[(2)]);
var inst_36195 = cljs.core.not_empty.call(null,inst_36184);
var state_36208__$1 = (function (){var statearr_36241 = state_36208;
(statearr_36241[(27)] = inst_36194);

return statearr_36241;
})();
if(cljs.core.truth_(inst_36195)){
var statearr_36242_36318 = state_36208__$1;
(statearr_36242_36318[(1)] = (44));

} else {
var statearr_36243_36319 = state_36208__$1;
(statearr_36243_36319[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (29))){
var inst_36124 = (state_36208[(23)]);
var inst_36129 = (state_36208[(24)]);
var inst_36161 = (state_36208[(16)]);
var inst_36125 = (state_36208[(25)]);
var inst_36121 = (state_36208[(19)]);
var inst_36127 = (state_36208[(26)]);
var inst_36157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36160 = (function (){var all_files = inst_36121;
var res_SINGLEQUOTE_ = inst_36124;
var res = inst_36125;
var files_not_loaded = inst_36127;
var dependencies_that_loaded = inst_36129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36161,inst_36125,inst_36121,inst_36127,inst_36157,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36159){
var map__36244 = p__36159;
var map__36244__$1 = ((((!((map__36244 == null)))?((((map__36244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36244):map__36244);
var namespace = cljs.core.get.call(null,map__36244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36161,inst_36125,inst_36121,inst_36127,inst_36157,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36161__$1 = cljs.core.group_by.call(null,inst_36160,inst_36127);
var inst_36163 = (inst_36161__$1 == null);
var inst_36164 = cljs.core.not.call(null,inst_36163);
var state_36208__$1 = (function (){var statearr_36246 = state_36208;
(statearr_36246[(16)] = inst_36161__$1);

(statearr_36246[(28)] = inst_36157);

return statearr_36246;
})();
if(inst_36164){
var statearr_36247_36320 = state_36208__$1;
(statearr_36247_36320[(1)] = (32));

} else {
var statearr_36248_36321 = state_36208__$1;
(statearr_36248_36321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (44))){
var inst_36184 = (state_36208[(21)]);
var inst_36197 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36184);
var inst_36198 = cljs.core.pr_str.call(null,inst_36197);
var inst_36199 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36198)].join('');
var inst_36200 = figwheel.client.utils.log.call(null,inst_36199);
var state_36208__$1 = state_36208;
var statearr_36249_36322 = state_36208__$1;
(statearr_36249_36322[(2)] = inst_36200);

(statearr_36249_36322[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (6))){
var inst_36102 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36250_36323 = state_36208__$1;
(statearr_36250_36323[(2)] = inst_36102);

(statearr_36250_36323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (28))){
var inst_36127 = (state_36208[(26)]);
var inst_36154 = (state_36208[(2)]);
var inst_36155 = cljs.core.not_empty.call(null,inst_36127);
var state_36208__$1 = (function (){var statearr_36251 = state_36208;
(statearr_36251[(29)] = inst_36154);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36155)){
var statearr_36252_36324 = state_36208__$1;
(statearr_36252_36324[(1)] = (29));

} else {
var statearr_36253_36325 = state_36208__$1;
(statearr_36253_36325[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (25))){
var inst_36125 = (state_36208[(25)]);
var inst_36141 = (state_36208[(2)]);
var inst_36142 = cljs.core.not_empty.call(null,inst_36125);
var state_36208__$1 = (function (){var statearr_36254 = state_36208;
(statearr_36254[(30)] = inst_36141);

return statearr_36254;
})();
if(cljs.core.truth_(inst_36142)){
var statearr_36255_36326 = state_36208__$1;
(statearr_36255_36326[(1)] = (26));

} else {
var statearr_36256_36327 = state_36208__$1;
(statearr_36256_36327[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (34))){
var inst_36177 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36177)){
var statearr_36257_36328 = state_36208__$1;
(statearr_36257_36328[(1)] = (38));

} else {
var statearr_36258_36329 = state_36208__$1;
(statearr_36258_36329[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (17))){
var state_36208__$1 = state_36208;
var statearr_36259_36330 = state_36208__$1;
(statearr_36259_36330[(2)] = recompile_dependents);

(statearr_36259_36330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (3))){
var state_36208__$1 = state_36208;
var statearr_36260_36331 = state_36208__$1;
(statearr_36260_36331[(2)] = null);

(statearr_36260_36331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (12))){
var inst_36098 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36261_36332 = state_36208__$1;
(statearr_36261_36332[(2)] = inst_36098);

(statearr_36261_36332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (2))){
var inst_36060 = (state_36208[(13)]);
var inst_36067 = cljs.core.seq.call(null,inst_36060);
var inst_36068 = inst_36067;
var inst_36069 = null;
var inst_36070 = (0);
var inst_36071 = (0);
var state_36208__$1 = (function (){var statearr_36262 = state_36208;
(statearr_36262[(7)] = inst_36070);

(statearr_36262[(8)] = inst_36069);

(statearr_36262[(9)] = inst_36068);

(statearr_36262[(10)] = inst_36071);

return statearr_36262;
})();
var statearr_36263_36333 = state_36208__$1;
(statearr_36263_36333[(2)] = null);

(statearr_36263_36333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (23))){
var inst_36124 = (state_36208[(23)]);
var inst_36129 = (state_36208[(24)]);
var inst_36125 = (state_36208[(25)]);
var inst_36121 = (state_36208[(19)]);
var inst_36127 = (state_36208[(26)]);
var inst_36132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36134 = (function (){var all_files = inst_36121;
var res_SINGLEQUOTE_ = inst_36124;
var res = inst_36125;
var files_not_loaded = inst_36127;
var dependencies_that_loaded = inst_36129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36132,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36133){
var map__36264 = p__36133;
var map__36264__$1 = ((((!((map__36264 == null)))?((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36264):map__36264);
var request_url = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36132,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36135 = cljs.core.reverse.call(null,inst_36129);
var inst_36136 = cljs.core.map.call(null,inst_36134,inst_36135);
var inst_36137 = cljs.core.pr_str.call(null,inst_36136);
var inst_36138 = figwheel.client.utils.log.call(null,inst_36137);
var state_36208__$1 = (function (){var statearr_36266 = state_36208;
(statearr_36266[(31)] = inst_36132);

return statearr_36266;
})();
var statearr_36267_36334 = state_36208__$1;
(statearr_36267_36334[(2)] = inst_36138);

(statearr_36267_36334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (35))){
var state_36208__$1 = state_36208;
var statearr_36268_36335 = state_36208__$1;
(statearr_36268_36335[(2)] = true);

(statearr_36268_36335[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (19))){
var inst_36111 = (state_36208[(12)]);
var inst_36117 = figwheel.client.file_reloading.expand_files.call(null,inst_36111);
var state_36208__$1 = state_36208;
var statearr_36269_36336 = state_36208__$1;
(statearr_36269_36336[(2)] = inst_36117);

(statearr_36269_36336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (11))){
var state_36208__$1 = state_36208;
var statearr_36270_36337 = state_36208__$1;
(statearr_36270_36337[(2)] = null);

(statearr_36270_36337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (9))){
var inst_36100 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36271_36338 = state_36208__$1;
(statearr_36271_36338[(2)] = inst_36100);

(statearr_36271_36338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (5))){
var inst_36070 = (state_36208[(7)]);
var inst_36071 = (state_36208[(10)]);
var inst_36073 = (inst_36071 < inst_36070);
var inst_36074 = inst_36073;
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36074)){
var statearr_36272_36339 = state_36208__$1;
(statearr_36272_36339[(1)] = (7));

} else {
var statearr_36273_36340 = state_36208__$1;
(statearr_36273_36340[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (14))){
var inst_36081 = (state_36208[(22)]);
var inst_36090 = cljs.core.first.call(null,inst_36081);
var inst_36091 = figwheel.client.file_reloading.eval_body.call(null,inst_36090,opts);
var inst_36092 = cljs.core.next.call(null,inst_36081);
var inst_36068 = inst_36092;
var inst_36069 = null;
var inst_36070 = (0);
var inst_36071 = (0);
var state_36208__$1 = (function (){var statearr_36274 = state_36208;
(statearr_36274[(32)] = inst_36091);

(statearr_36274[(7)] = inst_36070);

(statearr_36274[(8)] = inst_36069);

(statearr_36274[(9)] = inst_36068);

(statearr_36274[(10)] = inst_36071);

return statearr_36274;
})();
var statearr_36275_36341 = state_36208__$1;
(statearr_36275_36341[(2)] = null);

(statearr_36275_36341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (45))){
var state_36208__$1 = state_36208;
var statearr_36276_36342 = state_36208__$1;
(statearr_36276_36342[(2)] = null);

(statearr_36276_36342[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (26))){
var inst_36124 = (state_36208[(23)]);
var inst_36129 = (state_36208[(24)]);
var inst_36125 = (state_36208[(25)]);
var inst_36121 = (state_36208[(19)]);
var inst_36127 = (state_36208[(26)]);
var inst_36144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36146 = (function (){var all_files = inst_36121;
var res_SINGLEQUOTE_ = inst_36124;
var res = inst_36125;
var files_not_loaded = inst_36127;
var dependencies_that_loaded = inst_36129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36144,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36145){
var map__36277 = p__36145;
var map__36277__$1 = ((((!((map__36277 == null)))?((((map__36277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36277):map__36277);
var namespace = cljs.core.get.call(null,map__36277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36144,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36147 = cljs.core.map.call(null,inst_36146,inst_36125);
var inst_36148 = cljs.core.pr_str.call(null,inst_36147);
var inst_36149 = figwheel.client.utils.log.call(null,inst_36148);
var inst_36150 = (function (){var all_files = inst_36121;
var res_SINGLEQUOTE_ = inst_36124;
var res = inst_36125;
var files_not_loaded = inst_36127;
var dependencies_that_loaded = inst_36129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36144,inst_36146,inst_36147,inst_36148,inst_36149,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36124,inst_36129,inst_36125,inst_36121,inst_36127,inst_36144,inst_36146,inst_36147,inst_36148,inst_36149,state_val_36209,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36151 = setTimeout(inst_36150,(10));
var state_36208__$1 = (function (){var statearr_36279 = state_36208;
(statearr_36279[(33)] = inst_36144);

(statearr_36279[(34)] = inst_36149);

return statearr_36279;
})();
var statearr_36280_36343 = state_36208__$1;
(statearr_36280_36343[(2)] = inst_36151);

(statearr_36280_36343[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (16))){
var state_36208__$1 = state_36208;
var statearr_36281_36344 = state_36208__$1;
(statearr_36281_36344[(2)] = reload_dependents);

(statearr_36281_36344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (38))){
var inst_36161 = (state_36208[(16)]);
var inst_36179 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36161);
var state_36208__$1 = state_36208;
var statearr_36282_36345 = state_36208__$1;
(statearr_36282_36345[(2)] = inst_36179);

(statearr_36282_36345[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (30))){
var state_36208__$1 = state_36208;
var statearr_36283_36346 = state_36208__$1;
(statearr_36283_36346[(2)] = null);

(statearr_36283_36346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (10))){
var inst_36081 = (state_36208[(22)]);
var inst_36083 = cljs.core.chunked_seq_QMARK_.call(null,inst_36081);
var state_36208__$1 = state_36208;
if(inst_36083){
var statearr_36284_36347 = state_36208__$1;
(statearr_36284_36347[(1)] = (13));

} else {
var statearr_36285_36348 = state_36208__$1;
(statearr_36285_36348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (18))){
var inst_36115 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36115)){
var statearr_36286_36349 = state_36208__$1;
(statearr_36286_36349[(1)] = (19));

} else {
var statearr_36287_36350 = state_36208__$1;
(statearr_36287_36350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (42))){
var state_36208__$1 = state_36208;
var statearr_36288_36351 = state_36208__$1;
(statearr_36288_36351[(2)] = null);

(statearr_36288_36351[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (37))){
var inst_36174 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36289_36352 = state_36208__$1;
(statearr_36289_36352[(2)] = inst_36174);

(statearr_36289_36352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (8))){
var inst_36068 = (state_36208[(9)]);
var inst_36081 = (state_36208[(22)]);
var inst_36081__$1 = cljs.core.seq.call(null,inst_36068);
var state_36208__$1 = (function (){var statearr_36290 = state_36208;
(statearr_36290[(22)] = inst_36081__$1);

return statearr_36290;
})();
if(inst_36081__$1){
var statearr_36291_36353 = state_36208__$1;
(statearr_36291_36353[(1)] = (10));

} else {
var statearr_36292_36354 = state_36208__$1;
(statearr_36292_36354[(1)] = (11));

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
});})(c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31940__auto__,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____0 = (function (){
var statearr_36293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____1 = (function (state_36208){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_36208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__31944__auto__ = e36294;
var statearr_36295_36355 = state_36208;
(statearr_36295_36355[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36356 = state_36208;
state_36208 = G__36356;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__ = function(state_36208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____1.call(this,state_36208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32030__auto__ = (function (){var statearr_36296 = f__32029__auto__.call(null);
(statearr_36296[(6)] = c__32028__auto__);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__,map__36053,map__36053__$1,opts,before_jsload,on_jsload,reload_dependents,map__36054,map__36054__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32028__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36359,link){
var map__36360 = p__36359;
var map__36360__$1 = ((((!((map__36360 == null)))?((((map__36360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36360):map__36360);
var file = cljs.core.get.call(null,map__36360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36360,map__36360__$1,file){
return (function (p1__36357_SHARP_,p2__36358_SHARP_){
if(cljs.core._EQ_.call(null,p1__36357_SHARP_,p2__36358_SHARP_)){
return p1__36357_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36360,map__36360__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36363){
var map__36364 = p__36363;
var map__36364__$1 = ((((!((map__36364 == null)))?((((map__36364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36364):map__36364);
var match_length = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36362_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36362_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36366_SHARP_,p2__36367_SHARP_){
return cljs.core.assoc.call(null,p1__36366_SHARP_,cljs.core.get.call(null,p2__36367_SHARP_,key),p2__36367_SHARP_);
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
var loaded_f_datas_36368 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36368);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36368);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36369,p__36370){
var map__36371 = p__36369;
var map__36371__$1 = ((((!((map__36371 == null)))?((((map__36371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36371):map__36371);
var on_cssload = cljs.core.get.call(null,map__36371__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36372 = p__36370;
var map__36372__$1 = ((((!((map__36372 == null)))?((((map__36372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36372):map__36372);
var files_msg = map__36372__$1;
var files = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1508696623974
