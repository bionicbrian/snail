// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.db');
goog.require('cljs.core');
snail.db.rotate = (function snail$db$rotate(matrix){
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.list,matrix));
});
snail.db.unravel_matrix = (function snail$db$unravel_matrix(db){
return cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"unraveled","unraveled",694178713),(function (p1__41963_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.conj,p1__41963_SHARP_),cljs.core.first.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
})),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.rest.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
});
snail.db.create_matrix = (function snail$db$create_matrix(n){
return cljs.core.partition.call(null,n,cljs.core.range.call(null,(1),((1) + (n * n))));
});
snail.db.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,(0)),new cljs.core.Keyword(null,"unraveled","unraveled",694178713),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=db.js.map?rel=1508706298942
