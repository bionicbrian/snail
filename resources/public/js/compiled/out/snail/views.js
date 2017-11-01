// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
snail.views.number_steez = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.5,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier New",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid white",new cljs.core.Keyword(null,"width","width",-384071477),"3rem"], null);
snail.views.number_item = (function snail$views$number_item(color,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,snail.views.number_steez,new cljs.core.Keyword(null,"background-color","background-color",570434026),color)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
snail.views.main_panel = (function snail$views$main_panel(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var unraveled_items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unravel-items","unravel-items",-461717224)], null));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid salmon"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Behold! The unraveling snail!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"row-count"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,unraveled_items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-matrix","create-matrix",-267625253),window.parseInt(document.querySelector("#row-count").value)], null));
});})(items,unraveled_items))
], null),"Create the snail!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,unraveled_items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick-unravel","tick-unravel",-482315631)], null));
});})(items,unraveled_items))
], null),"Unravel the snail!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornsilk"),cljs.core.deref.call(null,unraveled_items))], null)], null),(function (){var iter__29094__auto__ = ((function (items,unraveled_items){
return (function snail$views$main_panel_$_iter__37947(s__37948){
return (new cljs.core.LazySeq(null,((function (items,unraveled_items){
return (function (){
var s__37948__$1 = s__37948;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37948__$1);
if(temp__4657__auto__){
var s__37948__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37948__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__37948__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__37950 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__37949 = (0);
while(true){
if((i__37949 < size__29093__auto__)){
var row = cljs.core._nth.call(null,c__29092__auto__,i__37949);
cljs.core.chunk_append.call(null,b__37950,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornflowerblue"),row)], null)], null));

var G__37951 = (i__37949 + (1));
i__37949 = G__37951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37950),snail$views$main_panel_$_iter__37947.call(null,cljs.core.chunk_rest.call(null,s__37948__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37950),null);
}
} else {
var row = cljs.core.first.call(null,s__37948__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Courier"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,snail.views.number_item,"cornflowerblue"),row)], null)], null),snail$views$main_panel_$_iter__37947.call(null,cljs.core.rest.call(null,s__37948__$2)));
}
} else {
return null;
}
break;
}
});})(items,unraveled_items))
,null,null));
});})(items,unraveled_items))
;
return iter__29094__auto__.call(null,cljs.core.deref.call(null,items));
})()], null);
});

//# sourceMappingURL=views.js.map?rel=1509580231911
