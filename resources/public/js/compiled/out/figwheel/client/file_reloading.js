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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35735_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35735_SHARP_));
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
var seq__35736 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35737 = null;
var count__35738 = (0);
var i__35739 = (0);
while(true){
if((i__35739 < count__35738)){
var n = cljs.core._nth.call(null,chunk__35737,i__35739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35740 = seq__35736;
var G__35741 = chunk__35737;
var G__35742 = count__35738;
var G__35743 = (i__35739 + (1));
seq__35736 = G__35740;
chunk__35737 = G__35741;
count__35738 = G__35742;
i__35739 = G__35743;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35736);
if(temp__4657__auto__){
var seq__35736__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35736__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35736__$1);
var G__35744 = cljs.core.chunk_rest.call(null,seq__35736__$1);
var G__35745 = c__29125__auto__;
var G__35746 = cljs.core.count.call(null,c__29125__auto__);
var G__35747 = (0);
seq__35736 = G__35744;
chunk__35737 = G__35745;
count__35738 = G__35746;
i__35739 = G__35747;
continue;
} else {
var n = cljs.core.first.call(null,seq__35736__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35748 = cljs.core.next.call(null,seq__35736__$1);
var G__35749 = null;
var G__35750 = (0);
var G__35751 = (0);
seq__35736 = G__35748;
chunk__35737 = G__35749;
count__35738 = G__35750;
i__35739 = G__35751;
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

var seq__35761_35769 = cljs.core.seq.call(null,deps);
var chunk__35762_35770 = null;
var count__35763_35771 = (0);
var i__35764_35772 = (0);
while(true){
if((i__35764_35772 < count__35763_35771)){
var dep_35773 = cljs.core._nth.call(null,chunk__35762_35770,i__35764_35772);
topo_sort_helper_STAR_.call(null,dep_35773,(depth + (1)),state);

var G__35774 = seq__35761_35769;
var G__35775 = chunk__35762_35770;
var G__35776 = count__35763_35771;
var G__35777 = (i__35764_35772 + (1));
seq__35761_35769 = G__35774;
chunk__35762_35770 = G__35775;
count__35763_35771 = G__35776;
i__35764_35772 = G__35777;
continue;
} else {
var temp__4657__auto___35778 = cljs.core.seq.call(null,seq__35761_35769);
if(temp__4657__auto___35778){
var seq__35761_35779__$1 = temp__4657__auto___35778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35761_35779__$1)){
var c__29125__auto___35780 = cljs.core.chunk_first.call(null,seq__35761_35779__$1);
var G__35781 = cljs.core.chunk_rest.call(null,seq__35761_35779__$1);
var G__35782 = c__29125__auto___35780;
var G__35783 = cljs.core.count.call(null,c__29125__auto___35780);
var G__35784 = (0);
seq__35761_35769 = G__35781;
chunk__35762_35770 = G__35782;
count__35763_35771 = G__35783;
i__35764_35772 = G__35784;
continue;
} else {
var dep_35785 = cljs.core.first.call(null,seq__35761_35779__$1);
topo_sort_helper_STAR_.call(null,dep_35785,(depth + (1)),state);

var G__35786 = cljs.core.next.call(null,seq__35761_35779__$1);
var G__35787 = null;
var G__35788 = (0);
var G__35789 = (0);
seq__35761_35769 = G__35786;
chunk__35762_35770 = G__35787;
count__35763_35771 = G__35788;
i__35764_35772 = G__35789;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35765){
var vec__35766 = p__35765;
var seq__35767 = cljs.core.seq.call(null,vec__35766);
var first__35768 = cljs.core.first.call(null,seq__35767);
var seq__35767__$1 = cljs.core.next.call(null,seq__35767);
var x = first__35768;
var xs = seq__35767__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35766,seq__35767,first__35768,seq__35767__$1,x,xs,get_deps__$1){
return (function (p1__35752_SHARP_){
return clojure.set.difference.call(null,p1__35752_SHARP_,x);
});})(vec__35766,seq__35767,first__35768,seq__35767__$1,x,xs,get_deps__$1))
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
var seq__35790 = cljs.core.seq.call(null,provides);
var chunk__35791 = null;
var count__35792 = (0);
var i__35793 = (0);
while(true){
if((i__35793 < count__35792)){
var prov = cljs.core._nth.call(null,chunk__35791,i__35793);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35794_35802 = cljs.core.seq.call(null,requires);
var chunk__35795_35803 = null;
var count__35796_35804 = (0);
var i__35797_35805 = (0);
while(true){
if((i__35797_35805 < count__35796_35804)){
var req_35806 = cljs.core._nth.call(null,chunk__35795_35803,i__35797_35805);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35806,prov);

var G__35807 = seq__35794_35802;
var G__35808 = chunk__35795_35803;
var G__35809 = count__35796_35804;
var G__35810 = (i__35797_35805 + (1));
seq__35794_35802 = G__35807;
chunk__35795_35803 = G__35808;
count__35796_35804 = G__35809;
i__35797_35805 = G__35810;
continue;
} else {
var temp__4657__auto___35811 = cljs.core.seq.call(null,seq__35794_35802);
if(temp__4657__auto___35811){
var seq__35794_35812__$1 = temp__4657__auto___35811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35794_35812__$1)){
var c__29125__auto___35813 = cljs.core.chunk_first.call(null,seq__35794_35812__$1);
var G__35814 = cljs.core.chunk_rest.call(null,seq__35794_35812__$1);
var G__35815 = c__29125__auto___35813;
var G__35816 = cljs.core.count.call(null,c__29125__auto___35813);
var G__35817 = (0);
seq__35794_35802 = G__35814;
chunk__35795_35803 = G__35815;
count__35796_35804 = G__35816;
i__35797_35805 = G__35817;
continue;
} else {
var req_35818 = cljs.core.first.call(null,seq__35794_35812__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35818,prov);

var G__35819 = cljs.core.next.call(null,seq__35794_35812__$1);
var G__35820 = null;
var G__35821 = (0);
var G__35822 = (0);
seq__35794_35802 = G__35819;
chunk__35795_35803 = G__35820;
count__35796_35804 = G__35821;
i__35797_35805 = G__35822;
continue;
}
} else {
}
}
break;
}

var G__35823 = seq__35790;
var G__35824 = chunk__35791;
var G__35825 = count__35792;
var G__35826 = (i__35793 + (1));
seq__35790 = G__35823;
chunk__35791 = G__35824;
count__35792 = G__35825;
i__35793 = G__35826;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35790);
if(temp__4657__auto__){
var seq__35790__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35790__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35790__$1);
var G__35827 = cljs.core.chunk_rest.call(null,seq__35790__$1);
var G__35828 = c__29125__auto__;
var G__35829 = cljs.core.count.call(null,c__29125__auto__);
var G__35830 = (0);
seq__35790 = G__35827;
chunk__35791 = G__35828;
count__35792 = G__35829;
i__35793 = G__35830;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35790__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35798_35831 = cljs.core.seq.call(null,requires);
var chunk__35799_35832 = null;
var count__35800_35833 = (0);
var i__35801_35834 = (0);
while(true){
if((i__35801_35834 < count__35800_35833)){
var req_35835 = cljs.core._nth.call(null,chunk__35799_35832,i__35801_35834);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35835,prov);

var G__35836 = seq__35798_35831;
var G__35837 = chunk__35799_35832;
var G__35838 = count__35800_35833;
var G__35839 = (i__35801_35834 + (1));
seq__35798_35831 = G__35836;
chunk__35799_35832 = G__35837;
count__35800_35833 = G__35838;
i__35801_35834 = G__35839;
continue;
} else {
var temp__4657__auto___35840__$1 = cljs.core.seq.call(null,seq__35798_35831);
if(temp__4657__auto___35840__$1){
var seq__35798_35841__$1 = temp__4657__auto___35840__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35798_35841__$1)){
var c__29125__auto___35842 = cljs.core.chunk_first.call(null,seq__35798_35841__$1);
var G__35843 = cljs.core.chunk_rest.call(null,seq__35798_35841__$1);
var G__35844 = c__29125__auto___35842;
var G__35845 = cljs.core.count.call(null,c__29125__auto___35842);
var G__35846 = (0);
seq__35798_35831 = G__35843;
chunk__35799_35832 = G__35844;
count__35800_35833 = G__35845;
i__35801_35834 = G__35846;
continue;
} else {
var req_35847 = cljs.core.first.call(null,seq__35798_35841__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35847,prov);

var G__35848 = cljs.core.next.call(null,seq__35798_35841__$1);
var G__35849 = null;
var G__35850 = (0);
var G__35851 = (0);
seq__35798_35831 = G__35848;
chunk__35799_35832 = G__35849;
count__35800_35833 = G__35850;
i__35801_35834 = G__35851;
continue;
}
} else {
}
}
break;
}

var G__35852 = cljs.core.next.call(null,seq__35790__$1);
var G__35853 = null;
var G__35854 = (0);
var G__35855 = (0);
seq__35790 = G__35852;
chunk__35791 = G__35853;
count__35792 = G__35854;
i__35793 = G__35855;
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
var seq__35856_35860 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35857_35861 = null;
var count__35858_35862 = (0);
var i__35859_35863 = (0);
while(true){
if((i__35859_35863 < count__35858_35862)){
var ns_35864 = cljs.core._nth.call(null,chunk__35857_35861,i__35859_35863);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35864);

var G__35865 = seq__35856_35860;
var G__35866 = chunk__35857_35861;
var G__35867 = count__35858_35862;
var G__35868 = (i__35859_35863 + (1));
seq__35856_35860 = G__35865;
chunk__35857_35861 = G__35866;
count__35858_35862 = G__35867;
i__35859_35863 = G__35868;
continue;
} else {
var temp__4657__auto___35869 = cljs.core.seq.call(null,seq__35856_35860);
if(temp__4657__auto___35869){
var seq__35856_35870__$1 = temp__4657__auto___35869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35856_35870__$1)){
var c__29125__auto___35871 = cljs.core.chunk_first.call(null,seq__35856_35870__$1);
var G__35872 = cljs.core.chunk_rest.call(null,seq__35856_35870__$1);
var G__35873 = c__29125__auto___35871;
var G__35874 = cljs.core.count.call(null,c__29125__auto___35871);
var G__35875 = (0);
seq__35856_35860 = G__35872;
chunk__35857_35861 = G__35873;
count__35858_35862 = G__35874;
i__35859_35863 = G__35875;
continue;
} else {
var ns_35876 = cljs.core.first.call(null,seq__35856_35870__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35876);

var G__35877 = cljs.core.next.call(null,seq__35856_35870__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35856_35860 = G__35877;
chunk__35857_35861 = G__35878;
count__35858_35862 = G__35879;
i__35859_35863 = G__35880;
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
var G__35881__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35882__i = 0, G__35882__a = new Array(arguments.length -  0);
while (G__35882__i < G__35882__a.length) {G__35882__a[G__35882__i] = arguments[G__35882__i + 0]; ++G__35882__i;}
  args = new cljs.core.IndexedSeq(G__35882__a,0,null);
} 
return G__35881__delegate.call(this,args);};
G__35881.cljs$lang$maxFixedArity = 0;
G__35881.cljs$lang$applyTo = (function (arglist__35883){
var args = cljs.core.seq(arglist__35883);
return G__35881__delegate(args);
});
G__35881.cljs$core$IFn$_invoke$arity$variadic = G__35881__delegate;
return G__35881;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35884_SHARP_,p2__35885_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35884_SHARP_)].join('')),p2__35885_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35886_SHARP_,p2__35887_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35886_SHARP_)].join(''),p2__35887_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35888 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35888.addCallback(((function (G__35888){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35888))
);

G__35888.addErrback(((function (G__35888){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35888))
);

return G__35888;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35889 = cljs.core._EQ_;
var expr__35890 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35889.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35890))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35889,expr__35890){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35889,expr__35890))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35889,expr__35890){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35892){if((e35892 instanceof Error)){
var e = e35892;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35892;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35889,expr__35890))
} else {
if(cljs.core.truth_(pred__35889.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35890))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35889.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35890))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35889.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35890))){
return ((function (pred__35889,expr__35890){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35893){if((e35893 instanceof Error)){
var e = e35893;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35893;

}
}})());
});
;})(pred__35889,expr__35890))
} else {
return ((function (pred__35889,expr__35890){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35889,expr__35890))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35894,callback){
var map__35895 = p__35894;
var map__35895__$1 = ((((!((map__35895 == null)))?((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35895):map__35895);
var file_msg = map__35895__$1;
var request_url = cljs.core.get.call(null,map__35895__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35895,map__35895__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35895,map__35895__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__){
return (function (state_35919){
var state_val_35920 = (state_35919[(1)]);
if((state_val_35920 === (7))){
var inst_35915 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35921_35938 = state_35919__$1;
(statearr_35921_35938[(2)] = inst_35915);

(statearr_35921_35938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (1))){
var state_35919__$1 = state_35919;
var statearr_35922_35939 = state_35919__$1;
(statearr_35922_35939[(2)] = null);

(statearr_35922_35939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (4))){
var inst_35899 = (state_35919[(7)]);
var inst_35899__$1 = (state_35919[(2)]);
var state_35919__$1 = (function (){var statearr_35923 = state_35919;
(statearr_35923[(7)] = inst_35899__$1);

return statearr_35923;
})();
if(cljs.core.truth_(inst_35899__$1)){
var statearr_35924_35940 = state_35919__$1;
(statearr_35924_35940[(1)] = (5));

} else {
var statearr_35925_35941 = state_35919__$1;
(statearr_35925_35941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (6))){
var state_35919__$1 = state_35919;
var statearr_35926_35942 = state_35919__$1;
(statearr_35926_35942[(2)] = null);

(statearr_35926_35942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (3))){
var inst_35917 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35919__$1,inst_35917);
} else {
if((state_val_35920 === (2))){
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35919__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35920 === (11))){
var inst_35911 = (state_35919[(2)]);
var state_35919__$1 = (function (){var statearr_35927 = state_35919;
(statearr_35927[(8)] = inst_35911);

return statearr_35927;
})();
var statearr_35928_35943 = state_35919__$1;
(statearr_35928_35943[(2)] = null);

(statearr_35928_35943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (9))){
var inst_35903 = (state_35919[(9)]);
var inst_35905 = (state_35919[(10)]);
var inst_35907 = inst_35905.call(null,inst_35903);
var state_35919__$1 = state_35919;
var statearr_35929_35944 = state_35919__$1;
(statearr_35929_35944[(2)] = inst_35907);

(statearr_35929_35944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (5))){
var inst_35899 = (state_35919[(7)]);
var inst_35901 = figwheel.client.file_reloading.blocking_load.call(null,inst_35899);
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35919__$1,(8),inst_35901);
} else {
if((state_val_35920 === (10))){
var inst_35903 = (state_35919[(9)]);
var inst_35909 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35903);
var state_35919__$1 = state_35919;
var statearr_35930_35945 = state_35919__$1;
(statearr_35930_35945[(2)] = inst_35909);

(statearr_35930_35945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35920 === (8))){
var inst_35905 = (state_35919[(10)]);
var inst_35899 = (state_35919[(7)]);
var inst_35903 = (state_35919[(2)]);
var inst_35904 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35905__$1 = cljs.core.get.call(null,inst_35904,inst_35899);
var state_35919__$1 = (function (){var statearr_35931 = state_35919;
(statearr_35931[(9)] = inst_35903);

(statearr_35931[(10)] = inst_35905__$1);

return statearr_35931;
})();
if(cljs.core.truth_(inst_35905__$1)){
var statearr_35932_35946 = state_35919__$1;
(statearr_35932_35946[(1)] = (9));

} else {
var statearr_35933_35947 = state_35919__$1;
(statearr_35933_35947[(1)] = (10));

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
});})(c__32565__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32478__auto__ = null;
var figwheel$client$file_reloading$state_machine__32478__auto____0 = (function (){
var statearr_35934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35934[(0)] = figwheel$client$file_reloading$state_machine__32478__auto__);

(statearr_35934[(1)] = (1));

return statearr_35934;
});
var figwheel$client$file_reloading$state_machine__32478__auto____1 = (function (state_35919){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_35919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e35935){if((e35935 instanceof Object)){
var ex__32481__auto__ = e35935;
var statearr_35936_35948 = state_35919;
(statearr_35936_35948[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35949 = state_35919;
state_35919 = G__35949;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32478__auto__ = function(state_35919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32478__auto____1.call(this,state_35919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32478__auto____0;
figwheel$client$file_reloading$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32478__auto____1;
return figwheel$client$file_reloading$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__))
})();
var state__32567__auto__ = (function (){var statearr_35937 = f__32566__auto__.call(null);
(statearr_35937[(6)] = c__32565__auto__);

return statearr_35937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__))
);

return c__32565__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35950,callback){
var map__35951 = p__35950;
var map__35951__$1 = ((((!((map__35951 == null)))?((((map__35951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35951):map__35951);
var file_msg = map__35951__$1;
var namespace = cljs.core.get.call(null,map__35951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35951,map__35951__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35951,map__35951__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35953){
var map__35954 = p__35953;
var map__35954__$1 = ((((!((map__35954 == null)))?((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35954):map__35954);
var file_msg = map__35954__$1;
var namespace = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35956){
var map__35957 = p__35956;
var map__35957__$1 = ((((!((map__35957 == null)))?((((map__35957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35957):map__35957);
var file_msg = map__35957__$1;
var namespace = cljs.core.get.call(null,map__35957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35959,callback){
var map__35960 = p__35959;
var map__35960__$1 = ((((!((map__35960 == null)))?((((map__35960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35960):map__35960);
var file_msg = map__35960__$1;
var request_url = cljs.core.get.call(null,map__35960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32565__auto___36010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___36010,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___36010,out){
return (function (state_35995){
var state_val_35996 = (state_35995[(1)]);
if((state_val_35996 === (1))){
var inst_35969 = cljs.core.seq.call(null,files);
var inst_35970 = cljs.core.first.call(null,inst_35969);
var inst_35971 = cljs.core.next.call(null,inst_35969);
var inst_35972 = files;
var state_35995__$1 = (function (){var statearr_35997 = state_35995;
(statearr_35997[(7)] = inst_35972);

(statearr_35997[(8)] = inst_35970);

(statearr_35997[(9)] = inst_35971);

return statearr_35997;
})();
var statearr_35998_36011 = state_35995__$1;
(statearr_35998_36011[(2)] = null);

(statearr_35998_36011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (2))){
var inst_35978 = (state_35995[(10)]);
var inst_35972 = (state_35995[(7)]);
var inst_35977 = cljs.core.seq.call(null,inst_35972);
var inst_35978__$1 = cljs.core.first.call(null,inst_35977);
var inst_35979 = cljs.core.next.call(null,inst_35977);
var inst_35980 = (inst_35978__$1 == null);
var inst_35981 = cljs.core.not.call(null,inst_35980);
var state_35995__$1 = (function (){var statearr_35999 = state_35995;
(statearr_35999[(10)] = inst_35978__$1);

(statearr_35999[(11)] = inst_35979);

return statearr_35999;
})();
if(inst_35981){
var statearr_36000_36012 = state_35995__$1;
(statearr_36000_36012[(1)] = (4));

} else {
var statearr_36001_36013 = state_35995__$1;
(statearr_36001_36013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (3))){
var inst_35993 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35995__$1,inst_35993);
} else {
if((state_val_35996 === (4))){
var inst_35978 = (state_35995[(10)]);
var inst_35983 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35978);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35995__$1,(7),inst_35983);
} else {
if((state_val_35996 === (5))){
var inst_35989 = cljs.core.async.close_BANG_.call(null,out);
var state_35995__$1 = state_35995;
var statearr_36002_36014 = state_35995__$1;
(statearr_36002_36014[(2)] = inst_35989);

(statearr_36002_36014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (6))){
var inst_35991 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36003_36015 = state_35995__$1;
(statearr_36003_36015[(2)] = inst_35991);

(statearr_36003_36015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (7))){
var inst_35979 = (state_35995[(11)]);
var inst_35985 = (state_35995[(2)]);
var inst_35986 = cljs.core.async.put_BANG_.call(null,out,inst_35985);
var inst_35972 = inst_35979;
var state_35995__$1 = (function (){var statearr_36004 = state_35995;
(statearr_36004[(7)] = inst_35972);

(statearr_36004[(12)] = inst_35986);

return statearr_36004;
})();
var statearr_36005_36016 = state_35995__$1;
(statearr_36005_36016[(2)] = null);

(statearr_36005_36016[(1)] = (2));


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
});})(c__32565__auto___36010,out))
;
return ((function (switch__32477__auto__,c__32565__auto___36010,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____0 = (function (){
var statearr_36006 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36006[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__);

(statearr_36006[(1)] = (1));

return statearr_36006;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____1 = (function (state_35995){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_35995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e36007){if((e36007 instanceof Object)){
var ex__32481__auto__ = e36007;
var statearr_36008_36017 = state_35995;
(statearr_36008_36017[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36018 = state_35995;
state_35995 = G__36018;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__ = function(state_35995){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____1.call(this,state_35995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___36010,out))
})();
var state__32567__auto__ = (function (){var statearr_36009 = f__32566__auto__.call(null);
(statearr_36009[(6)] = c__32565__auto___36010);

return statearr_36009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___36010,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36019,opts){
var map__36020 = p__36019;
var map__36020__$1 = ((((!((map__36020 == null)))?((((map__36020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36020):map__36020);
var eval_body = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36022){var e = e36022;
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
return (function (p1__36023_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36023_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36024){
var vec__36025 = p__36024;
var k = cljs.core.nth.call(null,vec__36025,(0),null);
var v = cljs.core.nth.call(null,vec__36025,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36028){
var vec__36029 = p__36028;
var k = cljs.core.nth.call(null,vec__36029,(0),null);
var v = cljs.core.nth.call(null,vec__36029,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36035,p__36036){
var map__36037 = p__36035;
var map__36037__$1 = ((((!((map__36037 == null)))?((((map__36037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36037):map__36037);
var opts = map__36037__$1;
var before_jsload = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36038 = p__36036;
var map__36038__$1 = ((((!((map__36038 == null)))?((((map__36038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36038):map__36038);
var msg = map__36038__$1;
var files = cljs.core.get.call(null,map__36038__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36038__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36038__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36192){
var state_val_36193 = (state_36192[(1)]);
if((state_val_36193 === (7))){
var inst_36055 = (state_36192[(7)]);
var inst_36054 = (state_36192[(8)]);
var inst_36052 = (state_36192[(9)]);
var inst_36053 = (state_36192[(10)]);
var inst_36060 = cljs.core._nth.call(null,inst_36053,inst_36055);
var inst_36061 = figwheel.client.file_reloading.eval_body.call(null,inst_36060,opts);
var inst_36062 = (inst_36055 + (1));
var tmp36194 = inst_36054;
var tmp36195 = inst_36052;
var tmp36196 = inst_36053;
var inst_36052__$1 = tmp36195;
var inst_36053__$1 = tmp36196;
var inst_36054__$1 = tmp36194;
var inst_36055__$1 = inst_36062;
var state_36192__$1 = (function (){var statearr_36197 = state_36192;
(statearr_36197[(7)] = inst_36055__$1);

(statearr_36197[(11)] = inst_36061);

(statearr_36197[(8)] = inst_36054__$1);

(statearr_36197[(9)] = inst_36052__$1);

(statearr_36197[(10)] = inst_36053__$1);

return statearr_36197;
})();
var statearr_36198_36281 = state_36192__$1;
(statearr_36198_36281[(2)] = null);

(statearr_36198_36281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (20))){
var inst_36095 = (state_36192[(12)]);
var inst_36103 = figwheel.client.file_reloading.sort_files.call(null,inst_36095);
var state_36192__$1 = state_36192;
var statearr_36199_36282 = state_36192__$1;
(statearr_36199_36282[(2)] = inst_36103);

(statearr_36199_36282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (27))){
var state_36192__$1 = state_36192;
var statearr_36200_36283 = state_36192__$1;
(statearr_36200_36283[(2)] = null);

(statearr_36200_36283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (1))){
var inst_36044 = (state_36192[(13)]);
var inst_36041 = before_jsload.call(null,files);
var inst_36042 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36043 = (function (){return ((function (inst_36044,inst_36041,inst_36042,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36032_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36032_SHARP_);
});
;})(inst_36044,inst_36041,inst_36042,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36044__$1 = cljs.core.filter.call(null,inst_36043,files);
var inst_36045 = cljs.core.not_empty.call(null,inst_36044__$1);
var state_36192__$1 = (function (){var statearr_36201 = state_36192;
(statearr_36201[(13)] = inst_36044__$1);

(statearr_36201[(14)] = inst_36042);

(statearr_36201[(15)] = inst_36041);

return statearr_36201;
})();
if(cljs.core.truth_(inst_36045)){
var statearr_36202_36284 = state_36192__$1;
(statearr_36202_36284[(1)] = (2));

} else {
var statearr_36203_36285 = state_36192__$1;
(statearr_36203_36285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (24))){
var state_36192__$1 = state_36192;
var statearr_36204_36286 = state_36192__$1;
(statearr_36204_36286[(2)] = null);

(statearr_36204_36286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (39))){
var inst_36145 = (state_36192[(16)]);
var state_36192__$1 = state_36192;
var statearr_36205_36287 = state_36192__$1;
(statearr_36205_36287[(2)] = inst_36145);

(statearr_36205_36287[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (46))){
var inst_36187 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36206_36288 = state_36192__$1;
(statearr_36206_36288[(2)] = inst_36187);

(statearr_36206_36288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (4))){
var inst_36089 = (state_36192[(2)]);
var inst_36090 = cljs.core.List.EMPTY;
var inst_36091 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36090);
var inst_36092 = (function (){return ((function (inst_36089,inst_36090,inst_36091,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36033_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36033_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36033_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36033_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36089,inst_36090,inst_36091,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36093 = cljs.core.filter.call(null,inst_36092,files);
var inst_36094 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36095 = cljs.core.concat.call(null,inst_36093,inst_36094);
var state_36192__$1 = (function (){var statearr_36207 = state_36192;
(statearr_36207[(17)] = inst_36091);

(statearr_36207[(12)] = inst_36095);

(statearr_36207[(18)] = inst_36089);

return statearr_36207;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36208_36289 = state_36192__$1;
(statearr_36208_36289[(1)] = (16));

} else {
var statearr_36209_36290 = state_36192__$1;
(statearr_36209_36290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (15))){
var inst_36079 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36210_36291 = state_36192__$1;
(statearr_36210_36291[(2)] = inst_36079);

(statearr_36210_36291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (21))){
var inst_36105 = (state_36192[(19)]);
var inst_36105__$1 = (state_36192[(2)]);
var inst_36106 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36105__$1);
var state_36192__$1 = (function (){var statearr_36211 = state_36192;
(statearr_36211[(19)] = inst_36105__$1);

return statearr_36211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36192__$1,(22),inst_36106);
} else {
if((state_val_36193 === (31))){
var inst_36190 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36192__$1,inst_36190);
} else {
if((state_val_36193 === (32))){
var inst_36145 = (state_36192[(16)]);
var inst_36150 = inst_36145.cljs$lang$protocol_mask$partition0$;
var inst_36151 = (inst_36150 & (64));
var inst_36152 = inst_36145.cljs$core$ISeq$;
var inst_36153 = (cljs.core.PROTOCOL_SENTINEL === inst_36152);
var inst_36154 = (inst_36151) || (inst_36153);
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36154)){
var statearr_36212_36292 = state_36192__$1;
(statearr_36212_36292[(1)] = (35));

} else {
var statearr_36213_36293 = state_36192__$1;
(statearr_36213_36293[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (40))){
var inst_36167 = (state_36192[(20)]);
var inst_36166 = (state_36192[(2)]);
var inst_36167__$1 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36168 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36169 = cljs.core.not_empty.call(null,inst_36167__$1);
var state_36192__$1 = (function (){var statearr_36214 = state_36192;
(statearr_36214[(20)] = inst_36167__$1);

(statearr_36214[(21)] = inst_36168);

return statearr_36214;
})();
if(cljs.core.truth_(inst_36169)){
var statearr_36215_36294 = state_36192__$1;
(statearr_36215_36294[(1)] = (41));

} else {
var statearr_36216_36295 = state_36192__$1;
(statearr_36216_36295[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (33))){
var state_36192__$1 = state_36192;
var statearr_36217_36296 = state_36192__$1;
(statearr_36217_36296[(2)] = false);

(statearr_36217_36296[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (13))){
var inst_36065 = (state_36192[(22)]);
var inst_36069 = cljs.core.chunk_first.call(null,inst_36065);
var inst_36070 = cljs.core.chunk_rest.call(null,inst_36065);
var inst_36071 = cljs.core.count.call(null,inst_36069);
var inst_36052 = inst_36070;
var inst_36053 = inst_36069;
var inst_36054 = inst_36071;
var inst_36055 = (0);
var state_36192__$1 = (function (){var statearr_36218 = state_36192;
(statearr_36218[(7)] = inst_36055);

(statearr_36218[(8)] = inst_36054);

(statearr_36218[(9)] = inst_36052);

(statearr_36218[(10)] = inst_36053);

return statearr_36218;
})();
var statearr_36219_36297 = state_36192__$1;
(statearr_36219_36297[(2)] = null);

(statearr_36219_36297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (22))){
var inst_36109 = (state_36192[(23)]);
var inst_36113 = (state_36192[(24)]);
var inst_36105 = (state_36192[(19)]);
var inst_36108 = (state_36192[(25)]);
var inst_36108__$1 = (state_36192[(2)]);
var inst_36109__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36108__$1);
var inst_36110 = (function (){var all_files = inst_36105;
var res_SINGLEQUOTE_ = inst_36108__$1;
var res = inst_36109__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36109,inst_36113,inst_36105,inst_36108,inst_36108__$1,inst_36109__$1,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36034_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36034_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36109,inst_36113,inst_36105,inst_36108,inst_36108__$1,inst_36109__$1,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36111 = cljs.core.filter.call(null,inst_36110,inst_36108__$1);
var inst_36112 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36112);
var inst_36114 = cljs.core.not_empty.call(null,inst_36113__$1);
var state_36192__$1 = (function (){var statearr_36220 = state_36192;
(statearr_36220[(23)] = inst_36109__$1);

(statearr_36220[(24)] = inst_36113__$1);

(statearr_36220[(26)] = inst_36111);

(statearr_36220[(25)] = inst_36108__$1);

return statearr_36220;
})();
if(cljs.core.truth_(inst_36114)){
var statearr_36221_36298 = state_36192__$1;
(statearr_36221_36298[(1)] = (23));

} else {
var statearr_36222_36299 = state_36192__$1;
(statearr_36222_36299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (36))){
var state_36192__$1 = state_36192;
var statearr_36223_36300 = state_36192__$1;
(statearr_36223_36300[(2)] = false);

(statearr_36223_36300[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (41))){
var inst_36167 = (state_36192[(20)]);
var inst_36171 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36172 = cljs.core.map.call(null,inst_36171,inst_36167);
var inst_36173 = cljs.core.pr_str.call(null,inst_36172);
var inst_36174 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36173)].join('');
var inst_36175 = figwheel.client.utils.log.call(null,inst_36174);
var state_36192__$1 = state_36192;
var statearr_36224_36301 = state_36192__$1;
(statearr_36224_36301[(2)] = inst_36175);

(statearr_36224_36301[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (43))){
var inst_36168 = (state_36192[(21)]);
var inst_36178 = (state_36192[(2)]);
var inst_36179 = cljs.core.not_empty.call(null,inst_36168);
var state_36192__$1 = (function (){var statearr_36225 = state_36192;
(statearr_36225[(27)] = inst_36178);

return statearr_36225;
})();
if(cljs.core.truth_(inst_36179)){
var statearr_36226_36302 = state_36192__$1;
(statearr_36226_36302[(1)] = (44));

} else {
var statearr_36227_36303 = state_36192__$1;
(statearr_36227_36303[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (29))){
var inst_36109 = (state_36192[(23)]);
var inst_36113 = (state_36192[(24)]);
var inst_36105 = (state_36192[(19)]);
var inst_36145 = (state_36192[(16)]);
var inst_36111 = (state_36192[(26)]);
var inst_36108 = (state_36192[(25)]);
var inst_36141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36144 = (function (){var all_files = inst_36105;
var res_SINGLEQUOTE_ = inst_36108;
var res = inst_36109;
var files_not_loaded = inst_36111;
var dependencies_that_loaded = inst_36113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36145,inst_36111,inst_36108,inst_36141,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36143){
var map__36228 = p__36143;
var map__36228__$1 = ((((!((map__36228 == null)))?((((map__36228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36228):map__36228);
var namespace = cljs.core.get.call(null,map__36228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36145,inst_36111,inst_36108,inst_36141,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36145__$1 = cljs.core.group_by.call(null,inst_36144,inst_36111);
var inst_36147 = (inst_36145__$1 == null);
var inst_36148 = cljs.core.not.call(null,inst_36147);
var state_36192__$1 = (function (){var statearr_36230 = state_36192;
(statearr_36230[(28)] = inst_36141);

(statearr_36230[(16)] = inst_36145__$1);

return statearr_36230;
})();
if(inst_36148){
var statearr_36231_36304 = state_36192__$1;
(statearr_36231_36304[(1)] = (32));

} else {
var statearr_36232_36305 = state_36192__$1;
(statearr_36232_36305[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (44))){
var inst_36168 = (state_36192[(21)]);
var inst_36181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36168);
var inst_36182 = cljs.core.pr_str.call(null,inst_36181);
var inst_36183 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36182)].join('');
var inst_36184 = figwheel.client.utils.log.call(null,inst_36183);
var state_36192__$1 = state_36192;
var statearr_36233_36306 = state_36192__$1;
(statearr_36233_36306[(2)] = inst_36184);

(statearr_36233_36306[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (6))){
var inst_36086 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36234_36307 = state_36192__$1;
(statearr_36234_36307[(2)] = inst_36086);

(statearr_36234_36307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (28))){
var inst_36111 = (state_36192[(26)]);
var inst_36138 = (state_36192[(2)]);
var inst_36139 = cljs.core.not_empty.call(null,inst_36111);
var state_36192__$1 = (function (){var statearr_36235 = state_36192;
(statearr_36235[(29)] = inst_36138);

return statearr_36235;
})();
if(cljs.core.truth_(inst_36139)){
var statearr_36236_36308 = state_36192__$1;
(statearr_36236_36308[(1)] = (29));

} else {
var statearr_36237_36309 = state_36192__$1;
(statearr_36237_36309[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (25))){
var inst_36109 = (state_36192[(23)]);
var inst_36125 = (state_36192[(2)]);
var inst_36126 = cljs.core.not_empty.call(null,inst_36109);
var state_36192__$1 = (function (){var statearr_36238 = state_36192;
(statearr_36238[(30)] = inst_36125);

return statearr_36238;
})();
if(cljs.core.truth_(inst_36126)){
var statearr_36239_36310 = state_36192__$1;
(statearr_36239_36310[(1)] = (26));

} else {
var statearr_36240_36311 = state_36192__$1;
(statearr_36240_36311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (34))){
var inst_36161 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36161)){
var statearr_36241_36312 = state_36192__$1;
(statearr_36241_36312[(1)] = (38));

} else {
var statearr_36242_36313 = state_36192__$1;
(statearr_36242_36313[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (17))){
var state_36192__$1 = state_36192;
var statearr_36243_36314 = state_36192__$1;
(statearr_36243_36314[(2)] = recompile_dependents);

(statearr_36243_36314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (3))){
var state_36192__$1 = state_36192;
var statearr_36244_36315 = state_36192__$1;
(statearr_36244_36315[(2)] = null);

(statearr_36244_36315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (12))){
var inst_36082 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36245_36316 = state_36192__$1;
(statearr_36245_36316[(2)] = inst_36082);

(statearr_36245_36316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (2))){
var inst_36044 = (state_36192[(13)]);
var inst_36051 = cljs.core.seq.call(null,inst_36044);
var inst_36052 = inst_36051;
var inst_36053 = null;
var inst_36054 = (0);
var inst_36055 = (0);
var state_36192__$1 = (function (){var statearr_36246 = state_36192;
(statearr_36246[(7)] = inst_36055);

(statearr_36246[(8)] = inst_36054);

(statearr_36246[(9)] = inst_36052);

(statearr_36246[(10)] = inst_36053);

return statearr_36246;
})();
var statearr_36247_36317 = state_36192__$1;
(statearr_36247_36317[(2)] = null);

(statearr_36247_36317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (23))){
var inst_36109 = (state_36192[(23)]);
var inst_36113 = (state_36192[(24)]);
var inst_36105 = (state_36192[(19)]);
var inst_36111 = (state_36192[(26)]);
var inst_36108 = (state_36192[(25)]);
var inst_36116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36118 = (function (){var all_files = inst_36105;
var res_SINGLEQUOTE_ = inst_36108;
var res = inst_36109;
var files_not_loaded = inst_36111;
var dependencies_that_loaded = inst_36113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36116,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36117){
var map__36248 = p__36117;
var map__36248__$1 = ((((!((map__36248 == null)))?((((map__36248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36248):map__36248);
var request_url = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36116,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36119 = cljs.core.reverse.call(null,inst_36113);
var inst_36120 = cljs.core.map.call(null,inst_36118,inst_36119);
var inst_36121 = cljs.core.pr_str.call(null,inst_36120);
var inst_36122 = figwheel.client.utils.log.call(null,inst_36121);
var state_36192__$1 = (function (){var statearr_36250 = state_36192;
(statearr_36250[(31)] = inst_36116);

return statearr_36250;
})();
var statearr_36251_36318 = state_36192__$1;
(statearr_36251_36318[(2)] = inst_36122);

(statearr_36251_36318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (35))){
var state_36192__$1 = state_36192;
var statearr_36252_36319 = state_36192__$1;
(statearr_36252_36319[(2)] = true);

(statearr_36252_36319[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (19))){
var inst_36095 = (state_36192[(12)]);
var inst_36101 = figwheel.client.file_reloading.expand_files.call(null,inst_36095);
var state_36192__$1 = state_36192;
var statearr_36253_36320 = state_36192__$1;
(statearr_36253_36320[(2)] = inst_36101);

(statearr_36253_36320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (11))){
var state_36192__$1 = state_36192;
var statearr_36254_36321 = state_36192__$1;
(statearr_36254_36321[(2)] = null);

(statearr_36254_36321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (9))){
var inst_36084 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36255_36322 = state_36192__$1;
(statearr_36255_36322[(2)] = inst_36084);

(statearr_36255_36322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (5))){
var inst_36055 = (state_36192[(7)]);
var inst_36054 = (state_36192[(8)]);
var inst_36057 = (inst_36055 < inst_36054);
var inst_36058 = inst_36057;
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36058)){
var statearr_36256_36323 = state_36192__$1;
(statearr_36256_36323[(1)] = (7));

} else {
var statearr_36257_36324 = state_36192__$1;
(statearr_36257_36324[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (14))){
var inst_36065 = (state_36192[(22)]);
var inst_36074 = cljs.core.first.call(null,inst_36065);
var inst_36075 = figwheel.client.file_reloading.eval_body.call(null,inst_36074,opts);
var inst_36076 = cljs.core.next.call(null,inst_36065);
var inst_36052 = inst_36076;
var inst_36053 = null;
var inst_36054 = (0);
var inst_36055 = (0);
var state_36192__$1 = (function (){var statearr_36258 = state_36192;
(statearr_36258[(7)] = inst_36055);

(statearr_36258[(32)] = inst_36075);

(statearr_36258[(8)] = inst_36054);

(statearr_36258[(9)] = inst_36052);

(statearr_36258[(10)] = inst_36053);

return statearr_36258;
})();
var statearr_36259_36325 = state_36192__$1;
(statearr_36259_36325[(2)] = null);

(statearr_36259_36325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (45))){
var state_36192__$1 = state_36192;
var statearr_36260_36326 = state_36192__$1;
(statearr_36260_36326[(2)] = null);

(statearr_36260_36326[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (26))){
var inst_36109 = (state_36192[(23)]);
var inst_36113 = (state_36192[(24)]);
var inst_36105 = (state_36192[(19)]);
var inst_36111 = (state_36192[(26)]);
var inst_36108 = (state_36192[(25)]);
var inst_36128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36130 = (function (){var all_files = inst_36105;
var res_SINGLEQUOTE_ = inst_36108;
var res = inst_36109;
var files_not_loaded = inst_36111;
var dependencies_that_loaded = inst_36113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36128,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36129){
var map__36261 = p__36129;
var map__36261__$1 = ((((!((map__36261 == null)))?((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36261):map__36261);
var namespace = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36128,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36131 = cljs.core.map.call(null,inst_36130,inst_36109);
var inst_36132 = cljs.core.pr_str.call(null,inst_36131);
var inst_36133 = figwheel.client.utils.log.call(null,inst_36132);
var inst_36134 = (function (){var all_files = inst_36105;
var res_SINGLEQUOTE_ = inst_36108;
var res = inst_36109;
var files_not_loaded = inst_36111;
var dependencies_that_loaded = inst_36113;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36128,inst_36130,inst_36131,inst_36132,inst_36133,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36109,inst_36113,inst_36105,inst_36111,inst_36108,inst_36128,inst_36130,inst_36131,inst_36132,inst_36133,state_val_36193,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36135 = setTimeout(inst_36134,(10));
var state_36192__$1 = (function (){var statearr_36263 = state_36192;
(statearr_36263[(33)] = inst_36133);

(statearr_36263[(34)] = inst_36128);

return statearr_36263;
})();
var statearr_36264_36327 = state_36192__$1;
(statearr_36264_36327[(2)] = inst_36135);

(statearr_36264_36327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (16))){
var state_36192__$1 = state_36192;
var statearr_36265_36328 = state_36192__$1;
(statearr_36265_36328[(2)] = reload_dependents);

(statearr_36265_36328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (38))){
var inst_36145 = (state_36192[(16)]);
var inst_36163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36145);
var state_36192__$1 = state_36192;
var statearr_36266_36329 = state_36192__$1;
(statearr_36266_36329[(2)] = inst_36163);

(statearr_36266_36329[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (30))){
var state_36192__$1 = state_36192;
var statearr_36267_36330 = state_36192__$1;
(statearr_36267_36330[(2)] = null);

(statearr_36267_36330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (10))){
var inst_36065 = (state_36192[(22)]);
var inst_36067 = cljs.core.chunked_seq_QMARK_.call(null,inst_36065);
var state_36192__$1 = state_36192;
if(inst_36067){
var statearr_36268_36331 = state_36192__$1;
(statearr_36268_36331[(1)] = (13));

} else {
var statearr_36269_36332 = state_36192__$1;
(statearr_36269_36332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (18))){
var inst_36099 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36099)){
var statearr_36270_36333 = state_36192__$1;
(statearr_36270_36333[(1)] = (19));

} else {
var statearr_36271_36334 = state_36192__$1;
(statearr_36271_36334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (42))){
var state_36192__$1 = state_36192;
var statearr_36272_36335 = state_36192__$1;
(statearr_36272_36335[(2)] = null);

(statearr_36272_36335[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (37))){
var inst_36158 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36273_36336 = state_36192__$1;
(statearr_36273_36336[(2)] = inst_36158);

(statearr_36273_36336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (8))){
var inst_36052 = (state_36192[(9)]);
var inst_36065 = (state_36192[(22)]);
var inst_36065__$1 = cljs.core.seq.call(null,inst_36052);
var state_36192__$1 = (function (){var statearr_36274 = state_36192;
(statearr_36274[(22)] = inst_36065__$1);

return statearr_36274;
})();
if(inst_36065__$1){
var statearr_36275_36337 = state_36192__$1;
(statearr_36275_36337[(1)] = (10));

} else {
var statearr_36276_36338 = state_36192__$1;
(statearr_36276_36338[(1)] = (11));

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
});})(c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32477__auto__,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____0 = (function (){
var statearr_36277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36277[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__);

(statearr_36277[(1)] = (1));

return statearr_36277;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____1 = (function (state_36192){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_36192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e36278){if((e36278 instanceof Object)){
var ex__32481__auto__ = e36278;
var statearr_36279_36339 = state_36192;
(statearr_36279_36339[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36340 = state_36192;
state_36192 = G__36340;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__ = function(state_36192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____1.call(this,state_36192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32567__auto__ = (function (){var statearr_36280 = f__32566__auto__.call(null);
(statearr_36280[(6)] = c__32565__auto__);

return statearr_36280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__,map__36037,map__36037__$1,opts,before_jsload,on_jsload,reload_dependents,map__36038,map__36038__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32565__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36343,link){
var map__36344 = p__36343;
var map__36344__$1 = ((((!((map__36344 == null)))?((((map__36344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36344):map__36344);
var file = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36344,map__36344__$1,file){
return (function (p1__36341_SHARP_,p2__36342_SHARP_){
if(cljs.core._EQ_.call(null,p1__36341_SHARP_,p2__36342_SHARP_)){
return p1__36341_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36344,map__36344__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36347){
var map__36348 = p__36347;
var map__36348__$1 = ((((!((map__36348 == null)))?((((map__36348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348):map__36348);
var match_length = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36346_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36346_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36350_SHARP_,p2__36351_SHARP_){
return cljs.core.assoc.call(null,p1__36350_SHARP_,cljs.core.get.call(null,p2__36351_SHARP_,key),p2__36351_SHARP_);
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
var loaded_f_datas_36352 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36352);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36352);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36353,p__36354){
var map__36355 = p__36353;
var map__36355__$1 = ((((!((map__36355 == null)))?((((map__36355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36355):map__36355);
var on_cssload = cljs.core.get.call(null,map__36355__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36356 = p__36354;
var map__36356__$1 = ((((!((map__36356 == null)))?((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36356):map__36356);
var files_msg = map__36356__$1;
var files = cljs.core.get.call(null,map__36356__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1508424082263
