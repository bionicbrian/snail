// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.db');
goog.require('cljs.core');
snail.db.unravel_matrix = cljs.core.comp.call(null,(function (p1__32270_SHARP_){
return cljs.core.assoc.call(null,p1__32270_SHARP_,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.rest.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__32270_SHARP_)));
}),(function (db){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"unraveled","unraveled",694178713),(function (p1__32271_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.conj,p1__32271_SHARP_),cljs.core.first.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db)));
}));
}));
snail.db.create_matrix = (function snail$db$create_matrix(n){
return cljs.core.partition.call(null,n,cljs.core.range.call(null,(1),((1) + (n * n))));
});
snail.db.default_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),snail.db.create_matrix.call(null,(0)),new cljs.core.Keyword(null,"unraveled","unraveled",694178713),cljs.core.PersistentVector.EMPTY], null);

//# sourceMappingURL=db.js.map?rel=1508514532294
