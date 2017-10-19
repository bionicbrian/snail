// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.db');
goog.require('cljs.core');
snail.db.with_prop = cljs.core.comp.call(null,cljs.core.map.call(null,(function (p1__32131_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"visited","visited",-1610853875)],[p1__32131_SHARP_,true]);
})));
snail.db.with_visited = (function snail$db$with_visited(xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,snail.db.with_prop,xs);
});
snail.db.create_matrix = (function snail$db$create_matrix(n){
return cljs.core.partition.call(null,n,snail.db.with_visited.call(null,cljs.core.range.call(null,(1),((1) + (n * n)))));
});
snail.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,(0))], null);

//# sourceMappingURL=db.js.map?rel=1508453254594
