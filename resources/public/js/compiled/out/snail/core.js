// Compiled by ClojureScript 1.9.908 {}
goog.provide('snail.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('snail.events');
goog.require('snail.subs');
goog.require('snail.views');
goog.require('snail.config');
snail.core.dev_setup = (function snail$core$dev_setup(){
if(snail.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
snail.core.mount_root = (function snail$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snail.views.main_panel], null),document.getElementById("app"));
});
snail.core.init = (function snail$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

snail.core.dev_setup.call(null);

return snail.core.mount_root.call(null);
});
goog.exportSymbol('snail.core.init', snail.core.init);

//# sourceMappingURL=core.js.map?rel=1508542765364
