// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.views');
goog.require('cljs.core');
goog.require('re_frame.core');
snail.views.main_panel = (function snail$views$main_panel(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"These are the items"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015)], null));
});})(items))
], null),"Rotate the matrix!"], null),(function (){var iter__29094__auto__ = ((function (items){
return (function snail$views$main_panel_$_iter__31959(s__31960){
return (new cljs.core.LazySeq(null,((function (items){
return (function (){
var s__31960__$1 = s__31960;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31960__$1);
if(temp__4657__auto__){
var s__31960__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31960__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__31960__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__31962 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__31961 = (0);
while(true){
if((i__31961 < size__29093__auto__)){
var row = cljs.core._nth.call(null,c__29092__auto__,i__31961);
cljs.core.chunk_append.call(null,b__31962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)], null));

var G__31963 = (i__31961 + (1));
i__31961 = G__31963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31962),snail$views$main_panel_$_iter__31959.call(null,cljs.core.chunk_rest.call(null,s__31960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31962),null);
}
} else {
var row = cljs.core.first.call(null,s__31960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)], null),snail$views$main_panel_$_iter__31959.call(null,cljs.core.rest.call(null,s__31960__$2)));
}
} else {
return null;
}
break;
}
});})(items))
,null,null));
});})(items))
;
return iter__29094__auto__.call(null,cljs.core.deref.call(null,items));
})()], null);
});

//# sourceMappingURL=views.js.map?rel=1508448991754
