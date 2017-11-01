// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.app_db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('devtools.formatters.core');
goog.require('day8.re_frame.trace.localstorage');
goog.require('day8.re_frame.trace.components');
day8.re_frame.trace.app_db.string__GT_css = (function day8$re_frame$trace$app_db$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__41390){
var vec__41391 = p__41390;
var property = cljs.core.nth.call(null,vec__41391,(0),null);
var value = cljs.core.nth.call(null,vec__41391,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__41389_SHARP_){
return clojure.string.split.call(null,p1__41389_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame.trace.app_db.config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"render-keywords","render-keywords",1200455875),new cljs.core.Keyword(null,"render-symbols","render-symbols",-887705016),new cljs.core.Keyword(null,"render-strings","render-strings",-1497177335),new cljs.core.Keyword(null,"render-functions","render-functions",1273333002),new cljs.core.Keyword(null,"render-bools","render-bools",1793659724),new cljs.core.Keyword(null,"render-types","render-types",-129927851),new cljs.core.Keyword(null,"render-numbers","render-numbers",-1385392009),new cljs.core.Keyword(null,"well-known-types","well-known-types",70638649),new cljs.core.Keyword(null,"render-instances","render-instances",-1803579686)],[false,false,false,false,false,false,false,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["cljs.core/Keyword",null], null), null),false]);
day8.re_frame.trace.app_db.data_structure = (function day8$re_frame$trace$app_db$data_structure(jsonml){
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (expanded_QMARK_){
return (function (jsonml__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),day8.re_frame.trace.app_db.jsonml__GT_hiccup.call(null,(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?devtools.formatters.core.body_api_call.call(null,cljs.core.get.call(null,jsonml__$1,(1)).object,cljs.core.get.call(null,jsonml__$1,(1)).config):devtools.formatters.core.header_api_call.call(null,cljs.core.get.call(null,jsonml__$1,(1)).object,cljs.core.get.call(null,jsonml__$1,(1)).config)))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame.trace.app_db.jsonml__GT_hiccup = (function day8$re_frame$trace$app_db$jsonml__GT_hiccup(jsonml){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__41394 = jsonml;
var seq__41395 = cljs.core.seq.call(null,vec__41394);
var first__41396 = cljs.core.first.call(null,seq__41395);
var seq__41395__$1 = cljs.core.next.call(null,seq__41395);
var head = first__41396;
var args = seq__41395__$1;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,head)){
var vec__41397 = args;
var seq__41398 = cljs.core.seq.call(null,vec__41397);
var first__41399 = cljs.core.first.call(null,seq__41398);
var seq__41398__$1 = cljs.core.next.call(null,seq__41398);
var style = first__41399;
var children = seq__41398__$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,head),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.app_db.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,style),"style"))], null)], null),cljs.core.map.call(null,day8.re_frame.trace.app_db.jsonml__GT_hiccup,children));
} else {
if(cljs.core._EQ_.call(null,head,"object")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.app_db.data_structure,jsonml], null);
} else {
if(cljs.core._EQ_.call(null,jsonml,", ")){
return " ";
} else {
return jsonml;

}
}
}
}
});
day8.re_frame.trace.app_db.subtree = (function day8$re_frame$trace$app_db$subtree(data,title){
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__28286__auto__ = title;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__28274__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number');
} else {
return and__28274__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),data__$1], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame.trace.app_db.jsonml__GT_hiccup.call(null,devtools.formatters.core.header_api_call.call(null,data__$1,day8.re_frame.trace.app_db.config,new cljs.core.Keyword(null,"extra","extra",1612569067))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.app_db.render_state = (function day8$re_frame$trace$app_db$render_state(data){
var subtree_input = reagent.core.atom.call(null,"");
var subtree_paths = reagent.core.atom.call(null,day8.re_frame.trace.localstorage.get.call(null,"subtree-paths",cljs.core.PersistentHashSet.EMPTY));
var input_error = reagent.core.atom.call(null,false);
cljs.core.add_watch.call(null,subtree_paths,new cljs.core.Keyword(null,"update-localstorage","update-localstorage",190199195),((function (subtree_input,subtree_paths,input_error){
return (function (_,___$1,___$2,new_state){
return day8.re_frame.trace.localstorage.save_BANG_.call(null,"subtree-paths",new_state);
});})(subtree_input,subtree_paths,input_error))
);

return ((function (subtree_input,subtree_paths,input_error){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 0 auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-scrollable","div.panel-content-scrollable",-1722397406),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control-input","div.filter-control-input",1831328221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.search_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),":path :into :app-state",new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (subtree_input,subtree_paths,input_error){
return (function (path){
return cljs.core.swap_BANG_.call(null,subtree_paths,((function (subtree_input,subtree_paths,input_error){
return (function (p1__41400_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.reader.read_string.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"]"].join(''))]),p1__41400_SHARP_);
});})(subtree_input,subtree_paths,input_error))
);

});})(subtree_input,subtree_paths,input_error))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (subtree_input,subtree_paths,input_error){
return (function (p1__41401_SHARP_){
return cljs.core.reset_BANG_.call(null,subtree_input,p1__41401_SHARP_.target.value);
});})(subtree_input,subtree_paths,input_error))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtrees","div.subtrees",-1996798150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (subtree_input,subtree_paths,input_error){
return (function (path){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree-wrapper","div.subtree-wrapper",-1759365103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree","div.subtree",2124828570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.app_db.subtree,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.subtree-button","button.subtree-button",-215548438),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (subtree_input,subtree_paths,input_error){
return (function (){
return cljs.core.swap_BANG_.call(null,subtree_paths,cljs.core.disj,path);
});})(subtree_input,subtree_paths,input_error))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.subtree-button-string","span.subtree-button-string",873380387),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null));
});})(subtree_input,subtree_paths,input_error))
,cljs.core.deref.call(null,subtree_paths)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.app_db.subtree,cljs.core.deref.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"app-db"], null)], null)], null)], null);
});
;})(subtree_input,subtree_paths,input_error))
});

//# sourceMappingURL=app_db.js.map?rel=1509580237471
