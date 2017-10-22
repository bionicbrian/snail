// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('snail.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31785__delegate = function (x){
if(cljs.core.truth_(snail.core.mount_root)){
return cljs.core.apply.call(null,snail.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'snail.core/mount-root' is missing");
}
};
var G__31785 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31786__i = 0, G__31786__a = new Array(arguments.length -  0);
while (G__31786__i < G__31786__a.length) {G__31786__a[G__31786__i] = arguments[G__31786__i + 0]; ++G__31786__i;}
  x = new cljs.core.IndexedSeq(G__31786__a,0,null);
} 
return G__31785__delegate.call(this,x);};
G__31785.cljs$lang$maxFixedArity = 0;
G__31785.cljs$lang$applyTo = (function (arglist__31787){
var x = cljs.core.seq(arglist__31787);
return G__31785__delegate(x);
});
G__31785.cljs$core$IFn$_invoke$arity$variadic = G__31785__delegate;
return G__31785;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1508710473687
