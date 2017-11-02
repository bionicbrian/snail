// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
snail.views.number_item = (function snail$views$number_item(color,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
snail.views.main_panel = (function snail$views$main_panel(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var unraveled_items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unravel-items","unravel-items",-461717224)], null));
var rotating = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotating","rotating",1057948094)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"main"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Behold! The unraveling snail!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"row-count"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,unraveled_items,rotating){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),window.parseInt(document.querySelector("#row-count").value)], null));
});})(items,unraveled_items,rotating))
], null),"Create the snail!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,unraveled_items,rotating){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631)], null));
});})(items,unraveled_items,rotating))
], null),"Unravel the snail!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"unraveled-stage"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"unraveled-items"], null),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornsilk"),cljs.core.deref.call(null,unraveled_items))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"matrix-stage"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),["matrix",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,rotating),true))?" rotating":null))].join('')], null),(function (){var iter__29094__auto__ = ((function (items,unraveled_items,rotating){
return (function snail$views$main_panel_$_iter__42626(s__42627){
return (new cljs.core.LazySeq(null,((function (items,unraveled_items,rotating){
return (function (){
var s__42627__$1 = s__42627;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42627__$1);
if(temp__4657__auto__){
var s__42627__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42627__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__42627__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__42629 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__42628 = (0);
while(true){
if((i__42628 < size__29093__auto__)){
var row = cljs.core._nth.call(null,c__29092__auto__,i__42628);
cljs.core.chunk_append.call(null,b__42629,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"row"], null),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornflowerblue"),row)], null));

var G__42630 = (i__42628 + (1));
i__42628 = G__42630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42629),snail$views$main_panel_$_iter__42626.call(null,cljs.core.chunk_rest.call(null,s__42627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42629),null);
}
} else {
var row = cljs.core.first.call(null,s__42627__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"row"], null),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornflowerblue"),row)], null),snail$views$main_panel_$_iter__42626.call(null,cljs.core.rest.call(null,s__42627__$2)));
}
} else {
return null;
}
break;
}
});})(items,unraveled_items,rotating))
,null,null));
});})(items,unraveled_items,rotating))
;
return iter__29094__auto__.call(null,cljs.core.deref.call(null,items));
})()], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1509590203522
