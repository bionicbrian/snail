// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32629 = arguments.length;
switch (G__32629) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32630 = (function (f,blockable,meta32631){
this.f = f;
this.blockable = blockable;
this.meta32631 = meta32631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32632,meta32631__$1){
var self__ = this;
var _32632__$1 = this;
return (new cljs.core.async.t_cljs$core$async32630(self__.f,self__.blockable,meta32631__$1));
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32632){
var self__ = this;
var _32632__$1 = this;
return self__.meta32631;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32631","meta32631",1542743918,null)], null);
});

cljs.core.async.t_cljs$core$async32630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32630";

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32630");
});

cljs.core.async.__GT_t_cljs$core$async32630 = (function cljs$core$async$__GT_t_cljs$core$async32630(f__$1,blockable__$1,meta32631){
return (new cljs.core.async.t_cljs$core$async32630(f__$1,blockable__$1,meta32631));
});

}

return (new cljs.core.async.t_cljs$core$async32630(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32639 = arguments.length;
switch (G__32639) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32642 = arguments.length;
switch (G__32642) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32644 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32644);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32644,ret){
return (function (){
return fn1.call(null,val_32644);
});})(val_32644,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32646 = arguments.length;
switch (G__32646) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29231__auto___32648 = n;
var x_32649 = (0);
while(true){
if((x_32649 < n__29231__auto___32648)){
(a[x_32649] = (0));

var G__32650 = (x_32649 + (1));
x_32649 = G__32650;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32651 = (i + (1));
i = G__32651;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32652 = (function (flag,meta32653){
this.flag = flag;
this.meta32653 = meta32653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32654,meta32653__$1){
var self__ = this;
var _32654__$1 = this;
return (new cljs.core.async.t_cljs$core$async32652(self__.flag,meta32653__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32654){
var self__ = this;
var _32654__$1 = this;
return self__.meta32653;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32653","meta32653",-1561772565,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32652";

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32652");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32652 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32652(flag__$1,meta32653){
return (new cljs.core.async.t_cljs$core$async32652(flag__$1,meta32653));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32652(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32655 = (function (flag,cb,meta32656){
this.flag = flag;
this.cb = cb;
this.meta32656 = meta32656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32657,meta32656__$1){
var self__ = this;
var _32657__$1 = this;
return (new cljs.core.async.t_cljs$core$async32655(self__.flag,self__.cb,meta32656__$1));
});

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32657){
var self__ = this;
var _32657__$1 = this;
return self__.meta32656;
});

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32656","meta32656",1517046880,null)], null);
});

cljs.core.async.t_cljs$core$async32655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32655";

cljs.core.async.t_cljs$core$async32655.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32655");
});

cljs.core.async.__GT_t_cljs$core$async32655 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32655(flag__$1,cb__$1,meta32656){
return (new cljs.core.async.t_cljs$core$async32655(flag__$1,cb__$1,meta32656));
});

}

return (new cljs.core.async.t_cljs$core$async32655(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32658_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32659_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32660 = (i + (1));
i = G__32660;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___32666 = arguments.length;
var i__29456__auto___32667 = (0);
while(true){
if((i__29456__auto___32667 < len__29455__auto___32666)){
args__29462__auto__.push((arguments[i__29456__auto___32667]));

var G__32668 = (i__29456__auto___32667 + (1));
i__29456__auto___32667 = G__32668;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32663){
var map__32664 = p__32663;
var map__32664__$1 = ((((!((map__32664 == null)))?((((map__32664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32664):map__32664);
var opts = map__32664__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32661){
var G__32662 = cljs.core.first.call(null,seq32661);
var seq32661__$1 = cljs.core.next.call(null,seq32661);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32662,seq32661__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32670 = arguments.length;
switch (G__32670) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32583__auto___32716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___32716){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___32716){
return (function (state_32694){
var state_val_32695 = (state_32694[(1)]);
if((state_val_32695 === (7))){
var inst_32690 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32696_32717 = state_32694__$1;
(statearr_32696_32717[(2)] = inst_32690);

(statearr_32696_32717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (1))){
var state_32694__$1 = state_32694;
var statearr_32697_32718 = state_32694__$1;
(statearr_32697_32718[(2)] = null);

(statearr_32697_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (4))){
var inst_32673 = (state_32694[(7)]);
var inst_32673__$1 = (state_32694[(2)]);
var inst_32674 = (inst_32673__$1 == null);
var state_32694__$1 = (function (){var statearr_32698 = state_32694;
(statearr_32698[(7)] = inst_32673__$1);

return statearr_32698;
})();
if(cljs.core.truth_(inst_32674)){
var statearr_32699_32719 = state_32694__$1;
(statearr_32699_32719[(1)] = (5));

} else {
var statearr_32700_32720 = state_32694__$1;
(statearr_32700_32720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (13))){
var state_32694__$1 = state_32694;
var statearr_32701_32721 = state_32694__$1;
(statearr_32701_32721[(2)] = null);

(statearr_32701_32721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (6))){
var inst_32673 = (state_32694[(7)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32694__$1,(11),to,inst_32673);
} else {
if((state_val_32695 === (3))){
var inst_32692 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32694__$1,inst_32692);
} else {
if((state_val_32695 === (12))){
var state_32694__$1 = state_32694;
var statearr_32702_32722 = state_32694__$1;
(statearr_32702_32722[(2)] = null);

(statearr_32702_32722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (2))){
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32694__$1,(4),from);
} else {
if((state_val_32695 === (11))){
var inst_32683 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
if(cljs.core.truth_(inst_32683)){
var statearr_32703_32723 = state_32694__$1;
(statearr_32703_32723[(1)] = (12));

} else {
var statearr_32704_32724 = state_32694__$1;
(statearr_32704_32724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (9))){
var state_32694__$1 = state_32694;
var statearr_32705_32725 = state_32694__$1;
(statearr_32705_32725[(2)] = null);

(statearr_32705_32725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (5))){
var state_32694__$1 = state_32694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32706_32726 = state_32694__$1;
(statearr_32706_32726[(1)] = (8));

} else {
var statearr_32707_32727 = state_32694__$1;
(statearr_32707_32727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (14))){
var inst_32688 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32708_32728 = state_32694__$1;
(statearr_32708_32728[(2)] = inst_32688);

(statearr_32708_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (10))){
var inst_32680 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32709_32729 = state_32694__$1;
(statearr_32709_32729[(2)] = inst_32680);

(statearr_32709_32729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (8))){
var inst_32677 = cljs.core.async.close_BANG_.call(null,to);
var state_32694__$1 = state_32694;
var statearr_32710_32730 = state_32694__$1;
(statearr_32710_32730[(2)] = inst_32677);

(statearr_32710_32730[(1)] = (10));


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
});})(c__32583__auto___32716))
;
return ((function (switch__32495__auto__,c__32583__auto___32716){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_32711 = [null,null,null,null,null,null,null,null];
(statearr_32711[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_32711[(1)] = (1));

return statearr_32711;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_32694){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32712){if((e32712 instanceof Object)){
var ex__32499__auto__ = e32712;
var statearr_32713_32731 = state_32694;
(statearr_32713_32731[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_32694;
state_32694 = G__32732;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___32716))
})();
var state__32585__auto__ = (function (){var statearr_32714 = f__32584__auto__.call(null);
(statearr_32714[(6)] = c__32583__auto___32716);

return statearr_32714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___32716))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32733){
var vec__32734 = p__32733;
var v = cljs.core.nth.call(null,vec__32734,(0),null);
var p = cljs.core.nth.call(null,vec__32734,(1),null);
var job = vec__32734;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32583__auto___32905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results){
return (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (1))){
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32741__$1,(2),res,v);
} else {
if((state_val_32742 === (2))){
var inst_32738 = (state_32741[(2)]);
var inst_32739 = cljs.core.async.close_BANG_.call(null,res);
var state_32741__$1 = (function (){var statearr_32743 = state_32741;
(statearr_32743[(7)] = inst_32738);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32741__$1,inst_32739);
} else {
return null;
}
}
});})(c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results))
;
return ((function (switch__32495__auto__,c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1 = (function (state_32741){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32745){if((e32745 instanceof Object)){
var ex__32499__auto__ = e32745;
var statearr_32746_32906 = state_32741;
(statearr_32746_32906[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32907 = state_32741;
state_32741 = G__32907;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results))
})();
var state__32585__auto__ = (function (){var statearr_32747 = f__32584__auto__.call(null);
(statearr_32747[(6)] = c__32583__auto___32905);

return statearr_32747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___32905,res,vec__32734,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32748){
var vec__32749 = p__32748;
var v = cljs.core.nth.call(null,vec__32749,(0),null);
var p = cljs.core.nth.call(null,vec__32749,(1),null);
var job = vec__32749;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29231__auto___32908 = n;
var __32909 = (0);
while(true){
if((__32909 < n__29231__auto___32908)){
var G__32752_32910 = type;
var G__32752_32911__$1 = (((G__32752_32910 instanceof cljs.core.Keyword))?G__32752_32910.fqn:null);
switch (G__32752_32911__$1) {
case "compute":
var c__32583__auto___32913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32909,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (__32909,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function (state_32765){
var state_val_32766 = (state_32765[(1)]);
if((state_val_32766 === (1))){
var state_32765__$1 = state_32765;
var statearr_32767_32914 = state_32765__$1;
(statearr_32767_32914[(2)] = null);

(statearr_32767_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (2))){
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32765__$1,(4),jobs);
} else {
if((state_val_32766 === (3))){
var inst_32763 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32765__$1,inst_32763);
} else {
if((state_val_32766 === (4))){
var inst_32755 = (state_32765[(2)]);
var inst_32756 = process.call(null,inst_32755);
var state_32765__$1 = state_32765;
if(cljs.core.truth_(inst_32756)){
var statearr_32768_32915 = state_32765__$1;
(statearr_32768_32915[(1)] = (5));

} else {
var statearr_32769_32916 = state_32765__$1;
(statearr_32769_32916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (5))){
var state_32765__$1 = state_32765;
var statearr_32770_32917 = state_32765__$1;
(statearr_32770_32917[(2)] = null);

(statearr_32770_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (6))){
var state_32765__$1 = state_32765;
var statearr_32771_32918 = state_32765__$1;
(statearr_32771_32918[(2)] = null);

(statearr_32771_32918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (7))){
var inst_32761 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32772_32919 = state_32765__$1;
(statearr_32772_32919[(2)] = inst_32761);

(statearr_32772_32919[(1)] = (3));


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
});})(__32909,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
;
return ((function (__32909,switch__32495__auto__,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_32773 = [null,null,null,null,null,null,null];
(statearr_32773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__);

(statearr_32773[(1)] = (1));

return statearr_32773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1 = (function (state_32765){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32774){if((e32774 instanceof Object)){
var ex__32499__auto__ = e32774;
var statearr_32775_32920 = state_32765;
(statearr_32775_32920[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_32765;
state_32765 = G__32921;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = function(state_32765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1.call(this,state_32765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__;
})()
;})(__32909,switch__32495__auto__,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
})();
var state__32585__auto__ = (function (){var statearr_32776 = f__32584__auto__.call(null);
(statearr_32776[(6)] = c__32583__auto___32913);

return statearr_32776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(__32909,c__32583__auto___32913,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
);


break;
case "async":
var c__32583__auto___32922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32909,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (__32909,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function (state_32789){
var state_val_32790 = (state_32789[(1)]);
if((state_val_32790 === (1))){
var state_32789__$1 = state_32789;
var statearr_32791_32923 = state_32789__$1;
(statearr_32791_32923[(2)] = null);

(statearr_32791_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (2))){
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32789__$1,(4),jobs);
} else {
if((state_val_32790 === (3))){
var inst_32787 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32789__$1,inst_32787);
} else {
if((state_val_32790 === (4))){
var inst_32779 = (state_32789[(2)]);
var inst_32780 = async.call(null,inst_32779);
var state_32789__$1 = state_32789;
if(cljs.core.truth_(inst_32780)){
var statearr_32792_32924 = state_32789__$1;
(statearr_32792_32924[(1)] = (5));

} else {
var statearr_32793_32925 = state_32789__$1;
(statearr_32793_32925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (5))){
var state_32789__$1 = state_32789;
var statearr_32794_32926 = state_32789__$1;
(statearr_32794_32926[(2)] = null);

(statearr_32794_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (6))){
var state_32789__$1 = state_32789;
var statearr_32795_32927 = state_32789__$1;
(statearr_32795_32927[(2)] = null);

(statearr_32795_32927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (7))){
var inst_32785 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32796_32928 = state_32789__$1;
(statearr_32796_32928[(2)] = inst_32785);

(statearr_32796_32928[(1)] = (3));


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
});})(__32909,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
;
return ((function (__32909,switch__32495__auto__,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_32797 = [null,null,null,null,null,null,null];
(statearr_32797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__);

(statearr_32797[(1)] = (1));

return statearr_32797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1 = (function (state_32789){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32798){if((e32798 instanceof Object)){
var ex__32499__auto__ = e32798;
var statearr_32799_32929 = state_32789;
(statearr_32799_32929[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_32789;
state_32789 = G__32930;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = function(state_32789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1.call(this,state_32789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__;
})()
;})(__32909,switch__32495__auto__,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
})();
var state__32585__auto__ = (function (){var statearr_32800 = f__32584__auto__.call(null);
(statearr_32800[(6)] = c__32583__auto___32922);

return statearr_32800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(__32909,c__32583__auto___32922,G__32752_32910,G__32752_32911__$1,n__29231__auto___32908,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32752_32911__$1)].join('')));

}

var G__32931 = (__32909 + (1));
__32909 = G__32931;
continue;
} else {
}
break;
}

var c__32583__auto___32932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___32932,jobs,results,process,async){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___32932,jobs,results,process,async){
return (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32824_32933 = state_32822__$1;
(statearr_32824_32933[(2)] = null);

(statearr_32824_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32822__$1,(4),from);
} else {
if((state_val_32823 === (3))){
var inst_32820 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32822__$1,inst_32820);
} else {
if((state_val_32823 === (4))){
var inst_32803 = (state_32822[(7)]);
var inst_32803__$1 = (state_32822[(2)]);
var inst_32804 = (inst_32803__$1 == null);
var state_32822__$1 = (function (){var statearr_32825 = state_32822;
(statearr_32825[(7)] = inst_32803__$1);

return statearr_32825;
})();
if(cljs.core.truth_(inst_32804)){
var statearr_32826_32934 = state_32822__$1;
(statearr_32826_32934[(1)] = (5));

} else {
var statearr_32827_32935 = state_32822__$1;
(statearr_32827_32935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var inst_32806 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32822__$1 = state_32822;
var statearr_32828_32936 = state_32822__$1;
(statearr_32828_32936[(2)] = inst_32806);

(statearr_32828_32936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32803 = (state_32822[(7)]);
var inst_32808 = (state_32822[(8)]);
var inst_32808__$1 = cljs.core.async.chan.call(null,(1));
var inst_32809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32810 = [inst_32803,inst_32808__$1];
var inst_32811 = (new cljs.core.PersistentVector(null,2,(5),inst_32809,inst_32810,null));
var state_32822__$1 = (function (){var statearr_32829 = state_32822;
(statearr_32829[(8)] = inst_32808__$1);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32822__$1,(8),jobs,inst_32811);
} else {
if((state_val_32823 === (7))){
var inst_32818 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32830_32937 = state_32822__$1;
(statearr_32830_32937[(2)] = inst_32818);

(statearr_32830_32937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (8))){
var inst_32808 = (state_32822[(8)]);
var inst_32813 = (state_32822[(2)]);
var state_32822__$1 = (function (){var statearr_32831 = state_32822;
(statearr_32831[(9)] = inst_32813);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32822__$1,(9),results,inst_32808);
} else {
if((state_val_32823 === (9))){
var inst_32815 = (state_32822[(2)]);
var state_32822__$1 = (function (){var statearr_32832 = state_32822;
(statearr_32832[(10)] = inst_32815);

return statearr_32832;
})();
var statearr_32833_32938 = state_32822__$1;
(statearr_32833_32938[(2)] = null);

(statearr_32833_32938[(1)] = (2));


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
});})(c__32583__auto___32932,jobs,results,process,async))
;
return ((function (switch__32495__auto__,c__32583__auto___32932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_32834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__);

(statearr_32834[(1)] = (1));

return statearr_32834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1 = (function (state_32822){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object)){
var ex__32499__auto__ = e32835;
var statearr_32836_32939 = state_32822;
(statearr_32836_32939[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32940 = state_32822;
state_32822 = G__32940;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___32932,jobs,results,process,async))
})();
var state__32585__auto__ = (function (){var statearr_32837 = f__32584__auto__.call(null);
(statearr_32837[(6)] = c__32583__auto___32932);

return statearr_32837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___32932,jobs,results,process,async))
);


var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__,jobs,results,process,async){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__,jobs,results,process,async){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32877_32941 = state_32875__$1;
(statearr_32877_32941[(2)] = inst_32871);

(statearr_32877_32941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (20))){
var state_32875__$1 = state_32875;
var statearr_32878_32942 = state_32875__$1;
(statearr_32878_32942[(2)] = null);

(statearr_32878_32942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var state_32875__$1 = state_32875;
var statearr_32879_32943 = state_32875__$1;
(statearr_32879_32943[(2)] = null);

(statearr_32879_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var inst_32840 = (state_32875[(7)]);
var inst_32840__$1 = (state_32875[(2)]);
var inst_32841 = (inst_32840__$1 == null);
var state_32875__$1 = (function (){var statearr_32880 = state_32875;
(statearr_32880[(7)] = inst_32840__$1);

return statearr_32880;
})();
if(cljs.core.truth_(inst_32841)){
var statearr_32881_32944 = state_32875__$1;
(statearr_32881_32944[(1)] = (5));

} else {
var statearr_32882_32945 = state_32875__$1;
(statearr_32882_32945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (15))){
var inst_32853 = (state_32875[(8)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32875__$1,(18),to,inst_32853);
} else {
if((state_val_32876 === (21))){
var inst_32866 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32883_32946 = state_32875__$1;
(statearr_32883_32946[(2)] = inst_32866);

(statearr_32883_32946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (13))){
var inst_32868 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32884 = state_32875;
(statearr_32884[(9)] = inst_32868);

return statearr_32884;
})();
var statearr_32885_32947 = state_32875__$1;
(statearr_32885_32947[(2)] = null);

(statearr_32885_32947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (6))){
var inst_32840 = (state_32875[(7)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(11),inst_32840);
} else {
if((state_val_32876 === (17))){
var inst_32861 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32861)){
var statearr_32886_32948 = state_32875__$1;
(statearr_32886_32948[(1)] = (19));

} else {
var statearr_32887_32949 = state_32875__$1;
(statearr_32887_32949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32850 = (state_32875[(10)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(14),inst_32850);
} else {
if((state_val_32876 === (2))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(4),results);
} else {
if((state_val_32876 === (19))){
var state_32875__$1 = state_32875;
var statearr_32888_32950 = state_32875__$1;
(statearr_32888_32950[(2)] = null);

(statearr_32888_32950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (11))){
var inst_32850 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32889 = state_32875;
(statearr_32889[(10)] = inst_32850);

return statearr_32889;
})();
var statearr_32890_32951 = state_32875__$1;
(statearr_32890_32951[(2)] = null);

(statearr_32890_32951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (9))){
var state_32875__$1 = state_32875;
var statearr_32891_32952 = state_32875__$1;
(statearr_32891_32952[(2)] = null);

(statearr_32891_32952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (5))){
var state_32875__$1 = state_32875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32892_32953 = state_32875__$1;
(statearr_32892_32953[(1)] = (8));

} else {
var statearr_32893_32954 = state_32875__$1;
(statearr_32893_32954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (14))){
var inst_32853 = (state_32875[(8)]);
var inst_32855 = (state_32875[(11)]);
var inst_32853__$1 = (state_32875[(2)]);
var inst_32854 = (inst_32853__$1 == null);
var inst_32855__$1 = cljs.core.not.call(null,inst_32854);
var state_32875__$1 = (function (){var statearr_32894 = state_32875;
(statearr_32894[(8)] = inst_32853__$1);

(statearr_32894[(11)] = inst_32855__$1);

return statearr_32894;
})();
if(inst_32855__$1){
var statearr_32895_32955 = state_32875__$1;
(statearr_32895_32955[(1)] = (15));

} else {
var statearr_32896_32956 = state_32875__$1;
(statearr_32896_32956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (16))){
var inst_32855 = (state_32875[(11)]);
var state_32875__$1 = state_32875;
var statearr_32897_32957 = state_32875__$1;
(statearr_32897_32957[(2)] = inst_32855);

(statearr_32897_32957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32847 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32898_32958 = state_32875__$1;
(statearr_32898_32958[(2)] = inst_32847);

(statearr_32898_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (18))){
var inst_32858 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32899_32959 = state_32875__$1;
(statearr_32899_32959[(2)] = inst_32858);

(statearr_32899_32959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32844 = cljs.core.async.close_BANG_.call(null,to);
var state_32875__$1 = state_32875;
var statearr_32900_32960 = state_32875__$1;
(statearr_32900_32960[(2)] = inst_32844);

(statearr_32900_32960[(1)] = (10));


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
});})(c__32583__auto__,jobs,results,process,async))
;
return ((function (switch__32495__auto__,c__32583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1 = (function (state_32875){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__32499__auto__ = e32902;
var statearr_32903_32961 = state_32875;
(statearr_32903_32961[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32962 = state_32875;
state_32875 = G__32962;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__,jobs,results,process,async))
})();
var state__32585__auto__ = (function (){var statearr_32904 = f__32584__auto__.call(null);
(statearr_32904[(6)] = c__32583__auto__);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__,jobs,results,process,async))
);

return c__32583__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32964 = arguments.length;
switch (G__32964) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32967 = arguments.length;
switch (G__32967) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32583__auto___33019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33019,tc,fc){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33019,tc,fc){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_33020 = state_32996__$1;
(statearr_32998_33020[(2)] = inst_32992);

(statearr_32998_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_32999_33021 = state_32996__$1;
(statearr_32999_33021[(2)] = null);

(statearr_32999_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32973 = (state_32996[(7)]);
var inst_32973__$1 = (state_32996[(2)]);
var inst_32974 = (inst_32973__$1 == null);
var state_32996__$1 = (function (){var statearr_33000 = state_32996;
(statearr_33000[(7)] = inst_32973__$1);

return statearr_33000;
})();
if(cljs.core.truth_(inst_32974)){
var statearr_33001_33022 = state_32996__$1;
(statearr_33001_33022[(1)] = (5));

} else {
var statearr_33002_33023 = state_32996__$1;
(statearr_33002_33023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var state_32996__$1 = state_32996;
var statearr_33003_33024 = state_32996__$1;
(statearr_33003_33024[(2)] = null);

(statearr_33003_33024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32973 = (state_32996[(7)]);
var inst_32979 = p.call(null,inst_32973);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32979)){
var statearr_33004_33025 = state_32996__$1;
(statearr_33004_33025[(1)] = (9));

} else {
var statearr_33005_33026 = state_32996__$1;
(statearr_33005_33026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var state_32996__$1 = state_32996;
var statearr_33006_33027 = state_32996__$1;
(statearr_33006_33027[(2)] = null);

(statearr_33006_33027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(4),ch);
} else {
if((state_val_32997 === (11))){
var inst_32973 = (state_32996[(7)]);
var inst_32983 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(8),inst_32983,inst_32973);
} else {
if((state_val_32997 === (9))){
var state_32996__$1 = state_32996;
var statearr_33007_33028 = state_32996__$1;
(statearr_33007_33028[(2)] = tc);

(statearr_33007_33028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32976 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32977 = cljs.core.async.close_BANG_.call(null,fc);
var state_32996__$1 = (function (){var statearr_33008 = state_32996;
(statearr_33008[(8)] = inst_32976);

return statearr_33008;
})();
var statearr_33009_33029 = state_32996__$1;
(statearr_33009_33029[(2)] = inst_32977);

(statearr_33009_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var inst_32990 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33010_33030 = state_32996__$1;
(statearr_33010_33030[(2)] = inst_32990);

(statearr_33010_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var state_32996__$1 = state_32996;
var statearr_33011_33031 = state_32996__$1;
(statearr_33011_33031[(2)] = fc);

(statearr_33011_33031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32985 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32985)){
var statearr_33012_33032 = state_32996__$1;
(statearr_33012_33032[(1)] = (12));

} else {
var statearr_33013_33033 = state_32996__$1;
(statearr_33013_33033[(1)] = (13));

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
});})(c__32583__auto___33019,tc,fc))
;
return ((function (switch__32495__auto__,c__32583__auto___33019,tc,fc){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_33014 = [null,null,null,null,null,null,null,null,null];
(statearr_33014[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_33014[(1)] = (1));

return statearr_33014;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_32996){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33015){if((e33015 instanceof Object)){
var ex__32499__auto__ = e33015;
var statearr_33016_33034 = state_32996;
(statearr_33016_33034[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33035 = state_32996;
state_32996 = G__33035;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33019,tc,fc))
})();
var state__32585__auto__ = (function (){var statearr_33017 = f__32584__auto__.call(null);
(statearr_33017[(6)] = c__32583__auto___33019);

return statearr_33017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33019,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__){
return (function (state_33056){
var state_val_33057 = (state_33056[(1)]);
if((state_val_33057 === (7))){
var inst_33052 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33058_33076 = state_33056__$1;
(statearr_33058_33076[(2)] = inst_33052);

(statearr_33058_33076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (1))){
var inst_33036 = init;
var state_33056__$1 = (function (){var statearr_33059 = state_33056;
(statearr_33059[(7)] = inst_33036);

return statearr_33059;
})();
var statearr_33060_33077 = state_33056__$1;
(statearr_33060_33077[(2)] = null);

(statearr_33060_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (4))){
var inst_33039 = (state_33056[(8)]);
var inst_33039__$1 = (state_33056[(2)]);
var inst_33040 = (inst_33039__$1 == null);
var state_33056__$1 = (function (){var statearr_33061 = state_33056;
(statearr_33061[(8)] = inst_33039__$1);

return statearr_33061;
})();
if(cljs.core.truth_(inst_33040)){
var statearr_33062_33078 = state_33056__$1;
(statearr_33062_33078[(1)] = (5));

} else {
var statearr_33063_33079 = state_33056__$1;
(statearr_33063_33079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (6))){
var inst_33036 = (state_33056[(7)]);
var inst_33039 = (state_33056[(8)]);
var inst_33043 = (state_33056[(9)]);
var inst_33043__$1 = f.call(null,inst_33036,inst_33039);
var inst_33044 = cljs.core.reduced_QMARK_.call(null,inst_33043__$1);
var state_33056__$1 = (function (){var statearr_33064 = state_33056;
(statearr_33064[(9)] = inst_33043__$1);

return statearr_33064;
})();
if(inst_33044){
var statearr_33065_33080 = state_33056__$1;
(statearr_33065_33080[(1)] = (8));

} else {
var statearr_33066_33081 = state_33056__$1;
(statearr_33066_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (3))){
var inst_33054 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33056__$1,inst_33054);
} else {
if((state_val_33057 === (2))){
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33056__$1,(4),ch);
} else {
if((state_val_33057 === (9))){
var inst_33043 = (state_33056[(9)]);
var inst_33036 = inst_33043;
var state_33056__$1 = (function (){var statearr_33067 = state_33056;
(statearr_33067[(7)] = inst_33036);

return statearr_33067;
})();
var statearr_33068_33082 = state_33056__$1;
(statearr_33068_33082[(2)] = null);

(statearr_33068_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (5))){
var inst_33036 = (state_33056[(7)]);
var state_33056__$1 = state_33056;
var statearr_33069_33083 = state_33056__$1;
(statearr_33069_33083[(2)] = inst_33036);

(statearr_33069_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (10))){
var inst_33050 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33070_33084 = state_33056__$1;
(statearr_33070_33084[(2)] = inst_33050);

(statearr_33070_33084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (8))){
var inst_33043 = (state_33056[(9)]);
var inst_33046 = cljs.core.deref.call(null,inst_33043);
var state_33056__$1 = state_33056;
var statearr_33071_33085 = state_33056__$1;
(statearr_33071_33085[(2)] = inst_33046);

(statearr_33071_33085[(1)] = (10));


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
});})(c__32583__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32496__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32496__auto____0 = (function (){
var statearr_33072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33072[(0)] = cljs$core$async$reduce_$_state_machine__32496__auto__);

(statearr_33072[(1)] = (1));

return statearr_33072;
});
var cljs$core$async$reduce_$_state_machine__32496__auto____1 = (function (state_33056){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33073){if((e33073 instanceof Object)){
var ex__32499__auto__ = e33073;
var statearr_33074_33086 = state_33056;
(statearr_33074_33086[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33087 = state_33056;
state_33056 = G__33087;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32496__auto__ = function(state_33056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32496__auto____1.call(this,state_33056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32496__auto____0;
cljs$core$async$reduce_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32496__auto____1;
return cljs$core$async$reduce_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__))
})();
var state__32585__auto__ = (function (){var statearr_33075 = f__32584__auto__.call(null);
(statearr_33075[(6)] = c__32583__auto__);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__))
);

return c__32583__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__,f__$1){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__,f__$1){
return (function (state_33093){
var state_val_33094 = (state_33093[(1)]);
if((state_val_33094 === (1))){
var inst_33088 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33093__$1,(2),inst_33088);
} else {
if((state_val_33094 === (2))){
var inst_33090 = (state_33093[(2)]);
var inst_33091 = f__$1.call(null,inst_33090);
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33093__$1,inst_33091);
} else {
return null;
}
}
});})(c__32583__auto__,f__$1))
;
return ((function (switch__32495__auto__,c__32583__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32496__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32496__auto____0 = (function (){
var statearr_33095 = [null,null,null,null,null,null,null];
(statearr_33095[(0)] = cljs$core$async$transduce_$_state_machine__32496__auto__);

(statearr_33095[(1)] = (1));

return statearr_33095;
});
var cljs$core$async$transduce_$_state_machine__32496__auto____1 = (function (state_33093){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33096){if((e33096 instanceof Object)){
var ex__32499__auto__ = e33096;
var statearr_33097_33099 = state_33093;
(statearr_33097_33099[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33093;
state_33093 = G__33100;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32496__auto__ = function(state_33093){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32496__auto____1.call(this,state_33093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32496__auto____0;
cljs$core$async$transduce_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32496__auto____1;
return cljs$core$async$transduce_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__,f__$1))
})();
var state__32585__auto__ = (function (){var statearr_33098 = f__32584__auto__.call(null);
(statearr_33098[(6)] = c__32583__auto__);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__,f__$1))
);

return c__32583__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33102 = arguments.length;
switch (G__33102) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__){
return (function (state_33127){
var state_val_33128 = (state_33127[(1)]);
if((state_val_33128 === (7))){
var inst_33109 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
var statearr_33129_33150 = state_33127__$1;
(statearr_33129_33150[(2)] = inst_33109);

(statearr_33129_33150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (1))){
var inst_33103 = cljs.core.seq.call(null,coll);
var inst_33104 = inst_33103;
var state_33127__$1 = (function (){var statearr_33130 = state_33127;
(statearr_33130[(7)] = inst_33104);

return statearr_33130;
})();
var statearr_33131_33151 = state_33127__$1;
(statearr_33131_33151[(2)] = null);

(statearr_33131_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (4))){
var inst_33104 = (state_33127[(7)]);
var inst_33107 = cljs.core.first.call(null,inst_33104);
var state_33127__$1 = state_33127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33127__$1,(7),ch,inst_33107);
} else {
if((state_val_33128 === (13))){
var inst_33121 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
var statearr_33132_33152 = state_33127__$1;
(statearr_33132_33152[(2)] = inst_33121);

(statearr_33132_33152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (6))){
var inst_33112 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
if(cljs.core.truth_(inst_33112)){
var statearr_33133_33153 = state_33127__$1;
(statearr_33133_33153[(1)] = (8));

} else {
var statearr_33134_33154 = state_33127__$1;
(statearr_33134_33154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (3))){
var inst_33125 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33127__$1,inst_33125);
} else {
if((state_val_33128 === (12))){
var state_33127__$1 = state_33127;
var statearr_33135_33155 = state_33127__$1;
(statearr_33135_33155[(2)] = null);

(statearr_33135_33155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (2))){
var inst_33104 = (state_33127[(7)]);
var state_33127__$1 = state_33127;
if(cljs.core.truth_(inst_33104)){
var statearr_33136_33156 = state_33127__$1;
(statearr_33136_33156[(1)] = (4));

} else {
var statearr_33137_33157 = state_33127__$1;
(statearr_33137_33157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (11))){
var inst_33118 = cljs.core.async.close_BANG_.call(null,ch);
var state_33127__$1 = state_33127;
var statearr_33138_33158 = state_33127__$1;
(statearr_33138_33158[(2)] = inst_33118);

(statearr_33138_33158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (9))){
var state_33127__$1 = state_33127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33139_33159 = state_33127__$1;
(statearr_33139_33159[(1)] = (11));

} else {
var statearr_33140_33160 = state_33127__$1;
(statearr_33140_33160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (5))){
var inst_33104 = (state_33127[(7)]);
var state_33127__$1 = state_33127;
var statearr_33141_33161 = state_33127__$1;
(statearr_33141_33161[(2)] = inst_33104);

(statearr_33141_33161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (10))){
var inst_33123 = (state_33127[(2)]);
var state_33127__$1 = state_33127;
var statearr_33142_33162 = state_33127__$1;
(statearr_33142_33162[(2)] = inst_33123);

(statearr_33142_33162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33128 === (8))){
var inst_33104 = (state_33127[(7)]);
var inst_33114 = cljs.core.next.call(null,inst_33104);
var inst_33104__$1 = inst_33114;
var state_33127__$1 = (function (){var statearr_33143 = state_33127;
(statearr_33143[(7)] = inst_33104__$1);

return statearr_33143;
})();
var statearr_33144_33163 = state_33127__$1;
(statearr_33144_33163[(2)] = null);

(statearr_33144_33163[(1)] = (2));


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
});})(c__32583__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_33145 = [null,null,null,null,null,null,null,null];
(statearr_33145[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_33145[(1)] = (1));

return statearr_33145;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_33127){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33146){if((e33146 instanceof Object)){
var ex__32499__auto__ = e33146;
var statearr_33147_33164 = state_33127;
(statearr_33147_33164[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_33127;
state_33127 = G__33165;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_33127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_33127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__))
})();
var state__32585__auto__ = (function (){var statearr_33148 = f__32584__auto__.call(null);
(statearr_33148[(6)] = c__32583__auto__);

return statearr_33148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__))
);

return c__32583__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28969__auto__ = (((_ == null))?null:_);
var m__28970__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,_);
} else {
var m__28970__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33166 = (function (ch,cs,meta33167){
this.ch = ch;
this.cs = cs;
this.meta33167 = meta33167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33168,meta33167__$1){
var self__ = this;
var _33168__$1 = this;
return (new cljs.core.async.t_cljs$core$async33166(self__.ch,self__.cs,meta33167__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33168){
var self__ = this;
var _33168__$1 = this;
return self__.meta33167;
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33167","meta33167",668392753,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33166";

cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33166");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33166 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33166(ch__$1,cs__$1,meta33167){
return (new cljs.core.async.t_cljs$core$async33166(ch__$1,cs__$1,meta33167));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33166(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32583__auto___33388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33388,cs,m,dchan,dctr,done){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33388,cs,m,dchan,dctr,done){
return (function (state_33303){
var state_val_33304 = (state_33303[(1)]);
if((state_val_33304 === (7))){
var inst_33299 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33305_33389 = state_33303__$1;
(statearr_33305_33389[(2)] = inst_33299);

(statearr_33305_33389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (20))){
var inst_33202 = (state_33303[(7)]);
var inst_33214 = cljs.core.first.call(null,inst_33202);
var inst_33215 = cljs.core.nth.call(null,inst_33214,(0),null);
var inst_33216 = cljs.core.nth.call(null,inst_33214,(1),null);
var state_33303__$1 = (function (){var statearr_33306 = state_33303;
(statearr_33306[(8)] = inst_33215);

return statearr_33306;
})();
if(cljs.core.truth_(inst_33216)){
var statearr_33307_33390 = state_33303__$1;
(statearr_33307_33390[(1)] = (22));

} else {
var statearr_33308_33391 = state_33303__$1;
(statearr_33308_33391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (27))){
var inst_33251 = (state_33303[(9)]);
var inst_33171 = (state_33303[(10)]);
var inst_33246 = (state_33303[(11)]);
var inst_33244 = (state_33303[(12)]);
var inst_33251__$1 = cljs.core._nth.call(null,inst_33244,inst_33246);
var inst_33252 = cljs.core.async.put_BANG_.call(null,inst_33251__$1,inst_33171,done);
var state_33303__$1 = (function (){var statearr_33309 = state_33303;
(statearr_33309[(9)] = inst_33251__$1);

return statearr_33309;
})();
if(cljs.core.truth_(inst_33252)){
var statearr_33310_33392 = state_33303__$1;
(statearr_33310_33392[(1)] = (30));

} else {
var statearr_33311_33393 = state_33303__$1;
(statearr_33311_33393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (1))){
var state_33303__$1 = state_33303;
var statearr_33312_33394 = state_33303__$1;
(statearr_33312_33394[(2)] = null);

(statearr_33312_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (24))){
var inst_33202 = (state_33303[(7)]);
var inst_33221 = (state_33303[(2)]);
var inst_33222 = cljs.core.next.call(null,inst_33202);
var inst_33180 = inst_33222;
var inst_33181 = null;
var inst_33182 = (0);
var inst_33183 = (0);
var state_33303__$1 = (function (){var statearr_33313 = state_33303;
(statearr_33313[(13)] = inst_33183);

(statearr_33313[(14)] = inst_33221);

(statearr_33313[(15)] = inst_33182);

(statearr_33313[(16)] = inst_33181);

(statearr_33313[(17)] = inst_33180);

return statearr_33313;
})();
var statearr_33314_33395 = state_33303__$1;
(statearr_33314_33395[(2)] = null);

(statearr_33314_33395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (39))){
var state_33303__$1 = state_33303;
var statearr_33318_33396 = state_33303__$1;
(statearr_33318_33396[(2)] = null);

(statearr_33318_33396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (4))){
var inst_33171 = (state_33303[(10)]);
var inst_33171__$1 = (state_33303[(2)]);
var inst_33172 = (inst_33171__$1 == null);
var state_33303__$1 = (function (){var statearr_33319 = state_33303;
(statearr_33319[(10)] = inst_33171__$1);

return statearr_33319;
})();
if(cljs.core.truth_(inst_33172)){
var statearr_33320_33397 = state_33303__$1;
(statearr_33320_33397[(1)] = (5));

} else {
var statearr_33321_33398 = state_33303__$1;
(statearr_33321_33398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (15))){
var inst_33183 = (state_33303[(13)]);
var inst_33182 = (state_33303[(15)]);
var inst_33181 = (state_33303[(16)]);
var inst_33180 = (state_33303[(17)]);
var inst_33198 = (state_33303[(2)]);
var inst_33199 = (inst_33183 + (1));
var tmp33315 = inst_33182;
var tmp33316 = inst_33181;
var tmp33317 = inst_33180;
var inst_33180__$1 = tmp33317;
var inst_33181__$1 = tmp33316;
var inst_33182__$1 = tmp33315;
var inst_33183__$1 = inst_33199;
var state_33303__$1 = (function (){var statearr_33322 = state_33303;
(statearr_33322[(13)] = inst_33183__$1);

(statearr_33322[(18)] = inst_33198);

(statearr_33322[(15)] = inst_33182__$1);

(statearr_33322[(16)] = inst_33181__$1);

(statearr_33322[(17)] = inst_33180__$1);

return statearr_33322;
})();
var statearr_33323_33399 = state_33303__$1;
(statearr_33323_33399[(2)] = null);

(statearr_33323_33399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (21))){
var inst_33225 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33327_33400 = state_33303__$1;
(statearr_33327_33400[(2)] = inst_33225);

(statearr_33327_33400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (31))){
var inst_33251 = (state_33303[(9)]);
var inst_33255 = done.call(null,null);
var inst_33256 = cljs.core.async.untap_STAR_.call(null,m,inst_33251);
var state_33303__$1 = (function (){var statearr_33328 = state_33303;
(statearr_33328[(19)] = inst_33255);

return statearr_33328;
})();
var statearr_33329_33401 = state_33303__$1;
(statearr_33329_33401[(2)] = inst_33256);

(statearr_33329_33401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (32))){
var inst_33246 = (state_33303[(11)]);
var inst_33243 = (state_33303[(20)]);
var inst_33245 = (state_33303[(21)]);
var inst_33244 = (state_33303[(12)]);
var inst_33258 = (state_33303[(2)]);
var inst_33259 = (inst_33246 + (1));
var tmp33324 = inst_33243;
var tmp33325 = inst_33245;
var tmp33326 = inst_33244;
var inst_33243__$1 = tmp33324;
var inst_33244__$1 = tmp33326;
var inst_33245__$1 = tmp33325;
var inst_33246__$1 = inst_33259;
var state_33303__$1 = (function (){var statearr_33330 = state_33303;
(statearr_33330[(11)] = inst_33246__$1);

(statearr_33330[(22)] = inst_33258);

(statearr_33330[(20)] = inst_33243__$1);

(statearr_33330[(21)] = inst_33245__$1);

(statearr_33330[(12)] = inst_33244__$1);

return statearr_33330;
})();
var statearr_33331_33402 = state_33303__$1;
(statearr_33331_33402[(2)] = null);

(statearr_33331_33402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (40))){
var inst_33271 = (state_33303[(23)]);
var inst_33275 = done.call(null,null);
var inst_33276 = cljs.core.async.untap_STAR_.call(null,m,inst_33271);
var state_33303__$1 = (function (){var statearr_33332 = state_33303;
(statearr_33332[(24)] = inst_33275);

return statearr_33332;
})();
var statearr_33333_33403 = state_33303__$1;
(statearr_33333_33403[(2)] = inst_33276);

(statearr_33333_33403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (33))){
var inst_33262 = (state_33303[(25)]);
var inst_33264 = cljs.core.chunked_seq_QMARK_.call(null,inst_33262);
var state_33303__$1 = state_33303;
if(inst_33264){
var statearr_33334_33404 = state_33303__$1;
(statearr_33334_33404[(1)] = (36));

} else {
var statearr_33335_33405 = state_33303__$1;
(statearr_33335_33405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (13))){
var inst_33192 = (state_33303[(26)]);
var inst_33195 = cljs.core.async.close_BANG_.call(null,inst_33192);
var state_33303__$1 = state_33303;
var statearr_33336_33406 = state_33303__$1;
(statearr_33336_33406[(2)] = inst_33195);

(statearr_33336_33406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (22))){
var inst_33215 = (state_33303[(8)]);
var inst_33218 = cljs.core.async.close_BANG_.call(null,inst_33215);
var state_33303__$1 = state_33303;
var statearr_33337_33407 = state_33303__$1;
(statearr_33337_33407[(2)] = inst_33218);

(statearr_33337_33407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (36))){
var inst_33262 = (state_33303[(25)]);
var inst_33266 = cljs.core.chunk_first.call(null,inst_33262);
var inst_33267 = cljs.core.chunk_rest.call(null,inst_33262);
var inst_33268 = cljs.core.count.call(null,inst_33266);
var inst_33243 = inst_33267;
var inst_33244 = inst_33266;
var inst_33245 = inst_33268;
var inst_33246 = (0);
var state_33303__$1 = (function (){var statearr_33338 = state_33303;
(statearr_33338[(11)] = inst_33246);

(statearr_33338[(20)] = inst_33243);

(statearr_33338[(21)] = inst_33245);

(statearr_33338[(12)] = inst_33244);

return statearr_33338;
})();
var statearr_33339_33408 = state_33303__$1;
(statearr_33339_33408[(2)] = null);

(statearr_33339_33408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (41))){
var inst_33262 = (state_33303[(25)]);
var inst_33278 = (state_33303[(2)]);
var inst_33279 = cljs.core.next.call(null,inst_33262);
var inst_33243 = inst_33279;
var inst_33244 = null;
var inst_33245 = (0);
var inst_33246 = (0);
var state_33303__$1 = (function (){var statearr_33340 = state_33303;
(statearr_33340[(11)] = inst_33246);

(statearr_33340[(27)] = inst_33278);

(statearr_33340[(20)] = inst_33243);

(statearr_33340[(21)] = inst_33245);

(statearr_33340[(12)] = inst_33244);

return statearr_33340;
})();
var statearr_33341_33409 = state_33303__$1;
(statearr_33341_33409[(2)] = null);

(statearr_33341_33409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (43))){
var state_33303__$1 = state_33303;
var statearr_33342_33410 = state_33303__$1;
(statearr_33342_33410[(2)] = null);

(statearr_33342_33410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (29))){
var inst_33287 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33343_33411 = state_33303__$1;
(statearr_33343_33411[(2)] = inst_33287);

(statearr_33343_33411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (44))){
var inst_33296 = (state_33303[(2)]);
var state_33303__$1 = (function (){var statearr_33344 = state_33303;
(statearr_33344[(28)] = inst_33296);

return statearr_33344;
})();
var statearr_33345_33412 = state_33303__$1;
(statearr_33345_33412[(2)] = null);

(statearr_33345_33412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (6))){
var inst_33235 = (state_33303[(29)]);
var inst_33234 = cljs.core.deref.call(null,cs);
var inst_33235__$1 = cljs.core.keys.call(null,inst_33234);
var inst_33236 = cljs.core.count.call(null,inst_33235__$1);
var inst_33237 = cljs.core.reset_BANG_.call(null,dctr,inst_33236);
var inst_33242 = cljs.core.seq.call(null,inst_33235__$1);
var inst_33243 = inst_33242;
var inst_33244 = null;
var inst_33245 = (0);
var inst_33246 = (0);
var state_33303__$1 = (function (){var statearr_33346 = state_33303;
(statearr_33346[(11)] = inst_33246);

(statearr_33346[(30)] = inst_33237);

(statearr_33346[(20)] = inst_33243);

(statearr_33346[(29)] = inst_33235__$1);

(statearr_33346[(21)] = inst_33245);

(statearr_33346[(12)] = inst_33244);

return statearr_33346;
})();
var statearr_33347_33413 = state_33303__$1;
(statearr_33347_33413[(2)] = null);

(statearr_33347_33413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (28))){
var inst_33262 = (state_33303[(25)]);
var inst_33243 = (state_33303[(20)]);
var inst_33262__$1 = cljs.core.seq.call(null,inst_33243);
var state_33303__$1 = (function (){var statearr_33348 = state_33303;
(statearr_33348[(25)] = inst_33262__$1);

return statearr_33348;
})();
if(inst_33262__$1){
var statearr_33349_33414 = state_33303__$1;
(statearr_33349_33414[(1)] = (33));

} else {
var statearr_33350_33415 = state_33303__$1;
(statearr_33350_33415[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (25))){
var inst_33246 = (state_33303[(11)]);
var inst_33245 = (state_33303[(21)]);
var inst_33248 = (inst_33246 < inst_33245);
var inst_33249 = inst_33248;
var state_33303__$1 = state_33303;
if(cljs.core.truth_(inst_33249)){
var statearr_33351_33416 = state_33303__$1;
(statearr_33351_33416[(1)] = (27));

} else {
var statearr_33352_33417 = state_33303__$1;
(statearr_33352_33417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (34))){
var state_33303__$1 = state_33303;
var statearr_33353_33418 = state_33303__$1;
(statearr_33353_33418[(2)] = null);

(statearr_33353_33418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (17))){
var state_33303__$1 = state_33303;
var statearr_33354_33419 = state_33303__$1;
(statearr_33354_33419[(2)] = null);

(statearr_33354_33419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (3))){
var inst_33301 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33303__$1,inst_33301);
} else {
if((state_val_33304 === (12))){
var inst_33230 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33355_33420 = state_33303__$1;
(statearr_33355_33420[(2)] = inst_33230);

(statearr_33355_33420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (2))){
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33303__$1,(4),ch);
} else {
if((state_val_33304 === (23))){
var state_33303__$1 = state_33303;
var statearr_33356_33421 = state_33303__$1;
(statearr_33356_33421[(2)] = null);

(statearr_33356_33421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (35))){
var inst_33285 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33357_33422 = state_33303__$1;
(statearr_33357_33422[(2)] = inst_33285);

(statearr_33357_33422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (19))){
var inst_33202 = (state_33303[(7)]);
var inst_33206 = cljs.core.chunk_first.call(null,inst_33202);
var inst_33207 = cljs.core.chunk_rest.call(null,inst_33202);
var inst_33208 = cljs.core.count.call(null,inst_33206);
var inst_33180 = inst_33207;
var inst_33181 = inst_33206;
var inst_33182 = inst_33208;
var inst_33183 = (0);
var state_33303__$1 = (function (){var statearr_33358 = state_33303;
(statearr_33358[(13)] = inst_33183);

(statearr_33358[(15)] = inst_33182);

(statearr_33358[(16)] = inst_33181);

(statearr_33358[(17)] = inst_33180);

return statearr_33358;
})();
var statearr_33359_33423 = state_33303__$1;
(statearr_33359_33423[(2)] = null);

(statearr_33359_33423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (11))){
var inst_33202 = (state_33303[(7)]);
var inst_33180 = (state_33303[(17)]);
var inst_33202__$1 = cljs.core.seq.call(null,inst_33180);
var state_33303__$1 = (function (){var statearr_33360 = state_33303;
(statearr_33360[(7)] = inst_33202__$1);

return statearr_33360;
})();
if(inst_33202__$1){
var statearr_33361_33424 = state_33303__$1;
(statearr_33361_33424[(1)] = (16));

} else {
var statearr_33362_33425 = state_33303__$1;
(statearr_33362_33425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (9))){
var inst_33232 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33363_33426 = state_33303__$1;
(statearr_33363_33426[(2)] = inst_33232);

(statearr_33363_33426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (5))){
var inst_33178 = cljs.core.deref.call(null,cs);
var inst_33179 = cljs.core.seq.call(null,inst_33178);
var inst_33180 = inst_33179;
var inst_33181 = null;
var inst_33182 = (0);
var inst_33183 = (0);
var state_33303__$1 = (function (){var statearr_33364 = state_33303;
(statearr_33364[(13)] = inst_33183);

(statearr_33364[(15)] = inst_33182);

(statearr_33364[(16)] = inst_33181);

(statearr_33364[(17)] = inst_33180);

return statearr_33364;
})();
var statearr_33365_33427 = state_33303__$1;
(statearr_33365_33427[(2)] = null);

(statearr_33365_33427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (14))){
var state_33303__$1 = state_33303;
var statearr_33366_33428 = state_33303__$1;
(statearr_33366_33428[(2)] = null);

(statearr_33366_33428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (45))){
var inst_33293 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33367_33429 = state_33303__$1;
(statearr_33367_33429[(2)] = inst_33293);

(statearr_33367_33429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (26))){
var inst_33235 = (state_33303[(29)]);
var inst_33289 = (state_33303[(2)]);
var inst_33290 = cljs.core.seq.call(null,inst_33235);
var state_33303__$1 = (function (){var statearr_33368 = state_33303;
(statearr_33368[(31)] = inst_33289);

return statearr_33368;
})();
if(inst_33290){
var statearr_33369_33430 = state_33303__$1;
(statearr_33369_33430[(1)] = (42));

} else {
var statearr_33370_33431 = state_33303__$1;
(statearr_33370_33431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (16))){
var inst_33202 = (state_33303[(7)]);
var inst_33204 = cljs.core.chunked_seq_QMARK_.call(null,inst_33202);
var state_33303__$1 = state_33303;
if(inst_33204){
var statearr_33371_33432 = state_33303__$1;
(statearr_33371_33432[(1)] = (19));

} else {
var statearr_33372_33433 = state_33303__$1;
(statearr_33372_33433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (38))){
var inst_33282 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33373_33434 = state_33303__$1;
(statearr_33373_33434[(2)] = inst_33282);

(statearr_33373_33434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (30))){
var state_33303__$1 = state_33303;
var statearr_33374_33435 = state_33303__$1;
(statearr_33374_33435[(2)] = null);

(statearr_33374_33435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (10))){
var inst_33183 = (state_33303[(13)]);
var inst_33181 = (state_33303[(16)]);
var inst_33191 = cljs.core._nth.call(null,inst_33181,inst_33183);
var inst_33192 = cljs.core.nth.call(null,inst_33191,(0),null);
var inst_33193 = cljs.core.nth.call(null,inst_33191,(1),null);
var state_33303__$1 = (function (){var statearr_33375 = state_33303;
(statearr_33375[(26)] = inst_33192);

return statearr_33375;
})();
if(cljs.core.truth_(inst_33193)){
var statearr_33376_33436 = state_33303__$1;
(statearr_33376_33436[(1)] = (13));

} else {
var statearr_33377_33437 = state_33303__$1;
(statearr_33377_33437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (18))){
var inst_33228 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33378_33438 = state_33303__$1;
(statearr_33378_33438[(2)] = inst_33228);

(statearr_33378_33438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (42))){
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33303__$1,(45),dchan);
} else {
if((state_val_33304 === (37))){
var inst_33271 = (state_33303[(23)]);
var inst_33171 = (state_33303[(10)]);
var inst_33262 = (state_33303[(25)]);
var inst_33271__$1 = cljs.core.first.call(null,inst_33262);
var inst_33272 = cljs.core.async.put_BANG_.call(null,inst_33271__$1,inst_33171,done);
var state_33303__$1 = (function (){var statearr_33379 = state_33303;
(statearr_33379[(23)] = inst_33271__$1);

return statearr_33379;
})();
if(cljs.core.truth_(inst_33272)){
var statearr_33380_33439 = state_33303__$1;
(statearr_33380_33439[(1)] = (39));

} else {
var statearr_33381_33440 = state_33303__$1;
(statearr_33381_33440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (8))){
var inst_33183 = (state_33303[(13)]);
var inst_33182 = (state_33303[(15)]);
var inst_33185 = (inst_33183 < inst_33182);
var inst_33186 = inst_33185;
var state_33303__$1 = state_33303;
if(cljs.core.truth_(inst_33186)){
var statearr_33382_33441 = state_33303__$1;
(statearr_33382_33441[(1)] = (10));

} else {
var statearr_33383_33442 = state_33303__$1;
(statearr_33383_33442[(1)] = (11));

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
});})(c__32583__auto___33388,cs,m,dchan,dctr,done))
;
return ((function (switch__32495__auto__,c__32583__auto___33388,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32496__auto__ = null;
var cljs$core$async$mult_$_state_machine__32496__auto____0 = (function (){
var statearr_33384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33384[(0)] = cljs$core$async$mult_$_state_machine__32496__auto__);

(statearr_33384[(1)] = (1));

return statearr_33384;
});
var cljs$core$async$mult_$_state_machine__32496__auto____1 = (function (state_33303){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33385){if((e33385 instanceof Object)){
var ex__32499__auto__ = e33385;
var statearr_33386_33443 = state_33303;
(statearr_33386_33443[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_33303;
state_33303 = G__33444;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32496__auto__ = function(state_33303){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32496__auto____1.call(this,state_33303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32496__auto____0;
cljs$core$async$mult_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32496__auto____1;
return cljs$core$async$mult_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33388,cs,m,dchan,dctr,done))
})();
var state__32585__auto__ = (function (){var statearr_33387 = f__32584__auto__.call(null);
(statearr_33387[(6)] = c__32583__auto___33388);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33388,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33446 = arguments.length;
switch (G__33446) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,state_map);
} else {
var m__28970__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,mode);
} else {
var m__28970__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___33458 = arguments.length;
var i__29456__auto___33459 = (0);
while(true){
if((i__29456__auto___33459 < len__29455__auto___33458)){
args__29462__auto__.push((arguments[i__29456__auto___33459]));

var G__33460 = (i__29456__auto___33459 + (1));
i__29456__auto___33459 = G__33460;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33452){
var map__33453 = p__33452;
var map__33453__$1 = ((((!((map__33453 == null)))?((((map__33453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33453):map__33453);
var opts = map__33453__$1;
var statearr_33455_33461 = state;
(statearr_33455_33461[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33453,map__33453__$1,opts){
return (function (val){
var statearr_33456_33462 = state;
(statearr_33456_33462[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33453,map__33453__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33457_33463 = state;
(statearr_33457_33463[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33448){
var G__33449 = cljs.core.first.call(null,seq33448);
var seq33448__$1 = cljs.core.next.call(null,seq33448);
var G__33450 = cljs.core.first.call(null,seq33448__$1);
var seq33448__$2 = cljs.core.next.call(null,seq33448__$1);
var G__33451 = cljs.core.first.call(null,seq33448__$2);
var seq33448__$3 = cljs.core.next.call(null,seq33448__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33449,G__33450,G__33451,seq33448__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33464 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33465){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33465 = meta33465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33466,meta33465__$1){
var self__ = this;
var _33466__$1 = this;
return (new cljs.core.async.t_cljs$core$async33464(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33465__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33466){
var self__ = this;
var _33466__$1 = this;
return self__.meta33465;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33465","meta33465",872409545,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33464";

cljs.core.async.t_cljs$core$async33464.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33464");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33464 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33464(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33465){
return (new cljs.core.async.t_cljs$core$async33464(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33465));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33464(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32583__auto___33628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33568){
var state_val_33569 = (state_33568[(1)]);
if((state_val_33569 === (7))){
var inst_33483 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33570_33629 = state_33568__$1;
(statearr_33570_33629[(2)] = inst_33483);

(statearr_33570_33629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (20))){
var inst_33495 = (state_33568[(7)]);
var state_33568__$1 = state_33568;
var statearr_33571_33630 = state_33568__$1;
(statearr_33571_33630[(2)] = inst_33495);

(statearr_33571_33630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (27))){
var state_33568__$1 = state_33568;
var statearr_33572_33631 = state_33568__$1;
(statearr_33572_33631[(2)] = null);

(statearr_33572_33631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (1))){
var inst_33470 = (state_33568[(8)]);
var inst_33470__$1 = calc_state.call(null);
var inst_33472 = (inst_33470__$1 == null);
var inst_33473 = cljs.core.not.call(null,inst_33472);
var state_33568__$1 = (function (){var statearr_33573 = state_33568;
(statearr_33573[(8)] = inst_33470__$1);

return statearr_33573;
})();
if(inst_33473){
var statearr_33574_33632 = state_33568__$1;
(statearr_33574_33632[(1)] = (2));

} else {
var statearr_33575_33633 = state_33568__$1;
(statearr_33575_33633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (24))){
var inst_33519 = (state_33568[(9)]);
var inst_33528 = (state_33568[(10)]);
var inst_33542 = (state_33568[(11)]);
var inst_33542__$1 = inst_33519.call(null,inst_33528);
var state_33568__$1 = (function (){var statearr_33576 = state_33568;
(statearr_33576[(11)] = inst_33542__$1);

return statearr_33576;
})();
if(cljs.core.truth_(inst_33542__$1)){
var statearr_33577_33634 = state_33568__$1;
(statearr_33577_33634[(1)] = (29));

} else {
var statearr_33578_33635 = state_33568__$1;
(statearr_33578_33635[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (4))){
var inst_33486 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33486)){
var statearr_33579_33636 = state_33568__$1;
(statearr_33579_33636[(1)] = (8));

} else {
var statearr_33580_33637 = state_33568__$1;
(statearr_33580_33637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (15))){
var inst_33513 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33513)){
var statearr_33581_33638 = state_33568__$1;
(statearr_33581_33638[(1)] = (19));

} else {
var statearr_33582_33639 = state_33568__$1;
(statearr_33582_33639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (21))){
var inst_33518 = (state_33568[(12)]);
var inst_33518__$1 = (state_33568[(2)]);
var inst_33519 = cljs.core.get.call(null,inst_33518__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33520 = cljs.core.get.call(null,inst_33518__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33521 = cljs.core.get.call(null,inst_33518__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33568__$1 = (function (){var statearr_33583 = state_33568;
(statearr_33583[(12)] = inst_33518__$1);

(statearr_33583[(9)] = inst_33519);

(statearr_33583[(13)] = inst_33520);

return statearr_33583;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33568__$1,(22),inst_33521);
} else {
if((state_val_33569 === (31))){
var inst_33550 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33550)){
var statearr_33584_33640 = state_33568__$1;
(statearr_33584_33640[(1)] = (32));

} else {
var statearr_33585_33641 = state_33568__$1;
(statearr_33585_33641[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (32))){
var inst_33527 = (state_33568[(14)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33568__$1,(35),out,inst_33527);
} else {
if((state_val_33569 === (33))){
var inst_33518 = (state_33568[(12)]);
var inst_33495 = inst_33518;
var state_33568__$1 = (function (){var statearr_33586 = state_33568;
(statearr_33586[(7)] = inst_33495);

return statearr_33586;
})();
var statearr_33587_33642 = state_33568__$1;
(statearr_33587_33642[(2)] = null);

(statearr_33587_33642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (13))){
var inst_33495 = (state_33568[(7)]);
var inst_33502 = inst_33495.cljs$lang$protocol_mask$partition0$;
var inst_33503 = (inst_33502 & (64));
var inst_33504 = inst_33495.cljs$core$ISeq$;
var inst_33505 = (cljs.core.PROTOCOL_SENTINEL === inst_33504);
var inst_33506 = (inst_33503) || (inst_33505);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33506)){
var statearr_33588_33643 = state_33568__$1;
(statearr_33588_33643[(1)] = (16));

} else {
var statearr_33589_33644 = state_33568__$1;
(statearr_33589_33644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (22))){
var inst_33527 = (state_33568[(14)]);
var inst_33528 = (state_33568[(10)]);
var inst_33526 = (state_33568[(2)]);
var inst_33527__$1 = cljs.core.nth.call(null,inst_33526,(0),null);
var inst_33528__$1 = cljs.core.nth.call(null,inst_33526,(1),null);
var inst_33529 = (inst_33527__$1 == null);
var inst_33530 = cljs.core._EQ_.call(null,inst_33528__$1,change);
var inst_33531 = (inst_33529) || (inst_33530);
var state_33568__$1 = (function (){var statearr_33590 = state_33568;
(statearr_33590[(14)] = inst_33527__$1);

(statearr_33590[(10)] = inst_33528__$1);

return statearr_33590;
})();
if(cljs.core.truth_(inst_33531)){
var statearr_33591_33645 = state_33568__$1;
(statearr_33591_33645[(1)] = (23));

} else {
var statearr_33592_33646 = state_33568__$1;
(statearr_33592_33646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (36))){
var inst_33518 = (state_33568[(12)]);
var inst_33495 = inst_33518;
var state_33568__$1 = (function (){var statearr_33593 = state_33568;
(statearr_33593[(7)] = inst_33495);

return statearr_33593;
})();
var statearr_33594_33647 = state_33568__$1;
(statearr_33594_33647[(2)] = null);

(statearr_33594_33647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (29))){
var inst_33542 = (state_33568[(11)]);
var state_33568__$1 = state_33568;
var statearr_33595_33648 = state_33568__$1;
(statearr_33595_33648[(2)] = inst_33542);

(statearr_33595_33648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (6))){
var state_33568__$1 = state_33568;
var statearr_33596_33649 = state_33568__$1;
(statearr_33596_33649[(2)] = false);

(statearr_33596_33649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (28))){
var inst_33538 = (state_33568[(2)]);
var inst_33539 = calc_state.call(null);
var inst_33495 = inst_33539;
var state_33568__$1 = (function (){var statearr_33597 = state_33568;
(statearr_33597[(15)] = inst_33538);

(statearr_33597[(7)] = inst_33495);

return statearr_33597;
})();
var statearr_33598_33650 = state_33568__$1;
(statearr_33598_33650[(2)] = null);

(statearr_33598_33650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (25))){
var inst_33564 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33599_33651 = state_33568__$1;
(statearr_33599_33651[(2)] = inst_33564);

(statearr_33599_33651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (34))){
var inst_33562 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33600_33652 = state_33568__$1;
(statearr_33600_33652[(2)] = inst_33562);

(statearr_33600_33652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (17))){
var state_33568__$1 = state_33568;
var statearr_33601_33653 = state_33568__$1;
(statearr_33601_33653[(2)] = false);

(statearr_33601_33653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (3))){
var state_33568__$1 = state_33568;
var statearr_33602_33654 = state_33568__$1;
(statearr_33602_33654[(2)] = false);

(statearr_33602_33654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (12))){
var inst_33566 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33568__$1,inst_33566);
} else {
if((state_val_33569 === (2))){
var inst_33470 = (state_33568[(8)]);
var inst_33475 = inst_33470.cljs$lang$protocol_mask$partition0$;
var inst_33476 = (inst_33475 & (64));
var inst_33477 = inst_33470.cljs$core$ISeq$;
var inst_33478 = (cljs.core.PROTOCOL_SENTINEL === inst_33477);
var inst_33479 = (inst_33476) || (inst_33478);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33479)){
var statearr_33603_33655 = state_33568__$1;
(statearr_33603_33655[(1)] = (5));

} else {
var statearr_33604_33656 = state_33568__$1;
(statearr_33604_33656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (23))){
var inst_33527 = (state_33568[(14)]);
var inst_33533 = (inst_33527 == null);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33533)){
var statearr_33605_33657 = state_33568__$1;
(statearr_33605_33657[(1)] = (26));

} else {
var statearr_33606_33658 = state_33568__$1;
(statearr_33606_33658[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (35))){
var inst_33553 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33553)){
var statearr_33607_33659 = state_33568__$1;
(statearr_33607_33659[(1)] = (36));

} else {
var statearr_33608_33660 = state_33568__$1;
(statearr_33608_33660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (19))){
var inst_33495 = (state_33568[(7)]);
var inst_33515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33495);
var state_33568__$1 = state_33568;
var statearr_33609_33661 = state_33568__$1;
(statearr_33609_33661[(2)] = inst_33515);

(statearr_33609_33661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (11))){
var inst_33495 = (state_33568[(7)]);
var inst_33499 = (inst_33495 == null);
var inst_33500 = cljs.core.not.call(null,inst_33499);
var state_33568__$1 = state_33568;
if(inst_33500){
var statearr_33610_33662 = state_33568__$1;
(statearr_33610_33662[(1)] = (13));

} else {
var statearr_33611_33663 = state_33568__$1;
(statearr_33611_33663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (9))){
var inst_33470 = (state_33568[(8)]);
var state_33568__$1 = state_33568;
var statearr_33612_33664 = state_33568__$1;
(statearr_33612_33664[(2)] = inst_33470);

(statearr_33612_33664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (5))){
var state_33568__$1 = state_33568;
var statearr_33613_33665 = state_33568__$1;
(statearr_33613_33665[(2)] = true);

(statearr_33613_33665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (14))){
var state_33568__$1 = state_33568;
var statearr_33614_33666 = state_33568__$1;
(statearr_33614_33666[(2)] = false);

(statearr_33614_33666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (26))){
var inst_33528 = (state_33568[(10)]);
var inst_33535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33528);
var state_33568__$1 = state_33568;
var statearr_33615_33667 = state_33568__$1;
(statearr_33615_33667[(2)] = inst_33535);

(statearr_33615_33667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (16))){
var state_33568__$1 = state_33568;
var statearr_33616_33668 = state_33568__$1;
(statearr_33616_33668[(2)] = true);

(statearr_33616_33668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (38))){
var inst_33558 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33617_33669 = state_33568__$1;
(statearr_33617_33669[(2)] = inst_33558);

(statearr_33617_33669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (30))){
var inst_33519 = (state_33568[(9)]);
var inst_33528 = (state_33568[(10)]);
var inst_33520 = (state_33568[(13)]);
var inst_33545 = cljs.core.empty_QMARK_.call(null,inst_33519);
var inst_33546 = inst_33520.call(null,inst_33528);
var inst_33547 = cljs.core.not.call(null,inst_33546);
var inst_33548 = (inst_33545) && (inst_33547);
var state_33568__$1 = state_33568;
var statearr_33618_33670 = state_33568__$1;
(statearr_33618_33670[(2)] = inst_33548);

(statearr_33618_33670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (10))){
var inst_33470 = (state_33568[(8)]);
var inst_33491 = (state_33568[(2)]);
var inst_33492 = cljs.core.get.call(null,inst_33491,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33493 = cljs.core.get.call(null,inst_33491,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33494 = cljs.core.get.call(null,inst_33491,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33495 = inst_33470;
var state_33568__$1 = (function (){var statearr_33619 = state_33568;
(statearr_33619[(16)] = inst_33492);

(statearr_33619[(7)] = inst_33495);

(statearr_33619[(17)] = inst_33494);

(statearr_33619[(18)] = inst_33493);

return statearr_33619;
})();
var statearr_33620_33671 = state_33568__$1;
(statearr_33620_33671[(2)] = null);

(statearr_33620_33671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (18))){
var inst_33510 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33621_33672 = state_33568__$1;
(statearr_33621_33672[(2)] = inst_33510);

(statearr_33621_33672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (37))){
var state_33568__$1 = state_33568;
var statearr_33622_33673 = state_33568__$1;
(statearr_33622_33673[(2)] = null);

(statearr_33622_33673[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (8))){
var inst_33470 = (state_33568[(8)]);
var inst_33488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33470);
var state_33568__$1 = state_33568;
var statearr_33623_33674 = state_33568__$1;
(statearr_33623_33674[(2)] = inst_33488);

(statearr_33623_33674[(1)] = (10));


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
});})(c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32495__auto__,c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32496__auto__ = null;
var cljs$core$async$mix_$_state_machine__32496__auto____0 = (function (){
var statearr_33624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33624[(0)] = cljs$core$async$mix_$_state_machine__32496__auto__);

(statearr_33624[(1)] = (1));

return statearr_33624;
});
var cljs$core$async$mix_$_state_machine__32496__auto____1 = (function (state_33568){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33625){if((e33625 instanceof Object)){
var ex__32499__auto__ = e33625;
var statearr_33626_33675 = state_33568;
(statearr_33626_33675[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33676 = state_33568;
state_33568 = G__33676;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32496__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32496__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32496__auto____0;
cljs$core$async$mix_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32496__auto____1;
return cljs$core$async$mix_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32585__auto__ = (function (){var statearr_33627 = f__32584__auto__.call(null);
(statearr_33627[(6)] = c__32583__auto___33628);

return statearr_33627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33682 = arguments.length;
switch (G__33682) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__33680_SHARP_){
if(cljs.core.truth_(p1__33680_SHARP_.call(null,topic))){
return p1__33680_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33680_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33683 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33684){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33684 = meta33684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33685,meta33684__$1){
var self__ = this;
var _33685__$1 = this;
return (new cljs.core.async.t_cljs$core$async33683(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33684__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33685){
var self__ = this;
var _33685__$1 = this;
return self__.meta33684;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33684","meta33684",-1607608484,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33683";

cljs.core.async.t_cljs$core$async33683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33683");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33683 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33684){
return (new cljs.core.async.t_cljs$core$async33683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33684));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33683(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32583__auto___33803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33803,mults,ensure_mult,p){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33803,mults,ensure_mult,p){
return (function (state_33757){
var state_val_33758 = (state_33757[(1)]);
if((state_val_33758 === (7))){
var inst_33753 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33759_33804 = state_33757__$1;
(statearr_33759_33804[(2)] = inst_33753);

(statearr_33759_33804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (20))){
var state_33757__$1 = state_33757;
var statearr_33760_33805 = state_33757__$1;
(statearr_33760_33805[(2)] = null);

(statearr_33760_33805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (1))){
var state_33757__$1 = state_33757;
var statearr_33761_33806 = state_33757__$1;
(statearr_33761_33806[(2)] = null);

(statearr_33761_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (24))){
var inst_33736 = (state_33757[(7)]);
var inst_33745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33736);
var state_33757__$1 = state_33757;
var statearr_33762_33807 = state_33757__$1;
(statearr_33762_33807[(2)] = inst_33745);

(statearr_33762_33807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (4))){
var inst_33688 = (state_33757[(8)]);
var inst_33688__$1 = (state_33757[(2)]);
var inst_33689 = (inst_33688__$1 == null);
var state_33757__$1 = (function (){var statearr_33763 = state_33757;
(statearr_33763[(8)] = inst_33688__$1);

return statearr_33763;
})();
if(cljs.core.truth_(inst_33689)){
var statearr_33764_33808 = state_33757__$1;
(statearr_33764_33808[(1)] = (5));

} else {
var statearr_33765_33809 = state_33757__$1;
(statearr_33765_33809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (15))){
var inst_33730 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33766_33810 = state_33757__$1;
(statearr_33766_33810[(2)] = inst_33730);

(statearr_33766_33810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (21))){
var inst_33750 = (state_33757[(2)]);
var state_33757__$1 = (function (){var statearr_33767 = state_33757;
(statearr_33767[(9)] = inst_33750);

return statearr_33767;
})();
var statearr_33768_33811 = state_33757__$1;
(statearr_33768_33811[(2)] = null);

(statearr_33768_33811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (13))){
var inst_33712 = (state_33757[(10)]);
var inst_33714 = cljs.core.chunked_seq_QMARK_.call(null,inst_33712);
var state_33757__$1 = state_33757;
if(inst_33714){
var statearr_33769_33812 = state_33757__$1;
(statearr_33769_33812[(1)] = (16));

} else {
var statearr_33770_33813 = state_33757__$1;
(statearr_33770_33813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (22))){
var inst_33742 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
if(cljs.core.truth_(inst_33742)){
var statearr_33771_33814 = state_33757__$1;
(statearr_33771_33814[(1)] = (23));

} else {
var statearr_33772_33815 = state_33757__$1;
(statearr_33772_33815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (6))){
var inst_33688 = (state_33757[(8)]);
var inst_33738 = (state_33757[(11)]);
var inst_33736 = (state_33757[(7)]);
var inst_33736__$1 = topic_fn.call(null,inst_33688);
var inst_33737 = cljs.core.deref.call(null,mults);
var inst_33738__$1 = cljs.core.get.call(null,inst_33737,inst_33736__$1);
var state_33757__$1 = (function (){var statearr_33773 = state_33757;
(statearr_33773[(11)] = inst_33738__$1);

(statearr_33773[(7)] = inst_33736__$1);

return statearr_33773;
})();
if(cljs.core.truth_(inst_33738__$1)){
var statearr_33774_33816 = state_33757__$1;
(statearr_33774_33816[(1)] = (19));

} else {
var statearr_33775_33817 = state_33757__$1;
(statearr_33775_33817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (25))){
var inst_33747 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33776_33818 = state_33757__$1;
(statearr_33776_33818[(2)] = inst_33747);

(statearr_33776_33818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (17))){
var inst_33712 = (state_33757[(10)]);
var inst_33721 = cljs.core.first.call(null,inst_33712);
var inst_33722 = cljs.core.async.muxch_STAR_.call(null,inst_33721);
var inst_33723 = cljs.core.async.close_BANG_.call(null,inst_33722);
var inst_33724 = cljs.core.next.call(null,inst_33712);
var inst_33698 = inst_33724;
var inst_33699 = null;
var inst_33700 = (0);
var inst_33701 = (0);
var state_33757__$1 = (function (){var statearr_33777 = state_33757;
(statearr_33777[(12)] = inst_33723);

(statearr_33777[(13)] = inst_33700);

(statearr_33777[(14)] = inst_33699);

(statearr_33777[(15)] = inst_33698);

(statearr_33777[(16)] = inst_33701);

return statearr_33777;
})();
var statearr_33778_33819 = state_33757__$1;
(statearr_33778_33819[(2)] = null);

(statearr_33778_33819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (3))){
var inst_33755 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33757__$1,inst_33755);
} else {
if((state_val_33758 === (12))){
var inst_33732 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33779_33820 = state_33757__$1;
(statearr_33779_33820[(2)] = inst_33732);

(statearr_33779_33820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (2))){
var state_33757__$1 = state_33757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33757__$1,(4),ch);
} else {
if((state_val_33758 === (23))){
var state_33757__$1 = state_33757;
var statearr_33780_33821 = state_33757__$1;
(statearr_33780_33821[(2)] = null);

(statearr_33780_33821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (19))){
var inst_33688 = (state_33757[(8)]);
var inst_33738 = (state_33757[(11)]);
var inst_33740 = cljs.core.async.muxch_STAR_.call(null,inst_33738);
var state_33757__$1 = state_33757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33757__$1,(22),inst_33740,inst_33688);
} else {
if((state_val_33758 === (11))){
var inst_33712 = (state_33757[(10)]);
var inst_33698 = (state_33757[(15)]);
var inst_33712__$1 = cljs.core.seq.call(null,inst_33698);
var state_33757__$1 = (function (){var statearr_33781 = state_33757;
(statearr_33781[(10)] = inst_33712__$1);

return statearr_33781;
})();
if(inst_33712__$1){
var statearr_33782_33822 = state_33757__$1;
(statearr_33782_33822[(1)] = (13));

} else {
var statearr_33783_33823 = state_33757__$1;
(statearr_33783_33823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (9))){
var inst_33734 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33784_33824 = state_33757__$1;
(statearr_33784_33824[(2)] = inst_33734);

(statearr_33784_33824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (5))){
var inst_33695 = cljs.core.deref.call(null,mults);
var inst_33696 = cljs.core.vals.call(null,inst_33695);
var inst_33697 = cljs.core.seq.call(null,inst_33696);
var inst_33698 = inst_33697;
var inst_33699 = null;
var inst_33700 = (0);
var inst_33701 = (0);
var state_33757__$1 = (function (){var statearr_33785 = state_33757;
(statearr_33785[(13)] = inst_33700);

(statearr_33785[(14)] = inst_33699);

(statearr_33785[(15)] = inst_33698);

(statearr_33785[(16)] = inst_33701);

return statearr_33785;
})();
var statearr_33786_33825 = state_33757__$1;
(statearr_33786_33825[(2)] = null);

(statearr_33786_33825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (14))){
var state_33757__$1 = state_33757;
var statearr_33790_33826 = state_33757__$1;
(statearr_33790_33826[(2)] = null);

(statearr_33790_33826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (16))){
var inst_33712 = (state_33757[(10)]);
var inst_33716 = cljs.core.chunk_first.call(null,inst_33712);
var inst_33717 = cljs.core.chunk_rest.call(null,inst_33712);
var inst_33718 = cljs.core.count.call(null,inst_33716);
var inst_33698 = inst_33717;
var inst_33699 = inst_33716;
var inst_33700 = inst_33718;
var inst_33701 = (0);
var state_33757__$1 = (function (){var statearr_33791 = state_33757;
(statearr_33791[(13)] = inst_33700);

(statearr_33791[(14)] = inst_33699);

(statearr_33791[(15)] = inst_33698);

(statearr_33791[(16)] = inst_33701);

return statearr_33791;
})();
var statearr_33792_33827 = state_33757__$1;
(statearr_33792_33827[(2)] = null);

(statearr_33792_33827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (10))){
var inst_33700 = (state_33757[(13)]);
var inst_33699 = (state_33757[(14)]);
var inst_33698 = (state_33757[(15)]);
var inst_33701 = (state_33757[(16)]);
var inst_33706 = cljs.core._nth.call(null,inst_33699,inst_33701);
var inst_33707 = cljs.core.async.muxch_STAR_.call(null,inst_33706);
var inst_33708 = cljs.core.async.close_BANG_.call(null,inst_33707);
var inst_33709 = (inst_33701 + (1));
var tmp33787 = inst_33700;
var tmp33788 = inst_33699;
var tmp33789 = inst_33698;
var inst_33698__$1 = tmp33789;
var inst_33699__$1 = tmp33788;
var inst_33700__$1 = tmp33787;
var inst_33701__$1 = inst_33709;
var state_33757__$1 = (function (){var statearr_33793 = state_33757;
(statearr_33793[(17)] = inst_33708);

(statearr_33793[(13)] = inst_33700__$1);

(statearr_33793[(14)] = inst_33699__$1);

(statearr_33793[(15)] = inst_33698__$1);

(statearr_33793[(16)] = inst_33701__$1);

return statearr_33793;
})();
var statearr_33794_33828 = state_33757__$1;
(statearr_33794_33828[(2)] = null);

(statearr_33794_33828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (18))){
var inst_33727 = (state_33757[(2)]);
var state_33757__$1 = state_33757;
var statearr_33795_33829 = state_33757__$1;
(statearr_33795_33829[(2)] = inst_33727);

(statearr_33795_33829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33758 === (8))){
var inst_33700 = (state_33757[(13)]);
var inst_33701 = (state_33757[(16)]);
var inst_33703 = (inst_33701 < inst_33700);
var inst_33704 = inst_33703;
var state_33757__$1 = state_33757;
if(cljs.core.truth_(inst_33704)){
var statearr_33796_33830 = state_33757__$1;
(statearr_33796_33830[(1)] = (10));

} else {
var statearr_33797_33831 = state_33757__$1;
(statearr_33797_33831[(1)] = (11));

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
});})(c__32583__auto___33803,mults,ensure_mult,p))
;
return ((function (switch__32495__auto__,c__32583__auto___33803,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_33798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33798[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_33798[(1)] = (1));

return statearr_33798;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_33757){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33799){if((e33799 instanceof Object)){
var ex__32499__auto__ = e33799;
var statearr_33800_33832 = state_33757;
(statearr_33800_33832[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33833 = state_33757;
state_33757 = G__33833;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_33757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_33757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33803,mults,ensure_mult,p))
})();
var state__32585__auto__ = (function (){var statearr_33801 = f__32584__auto__.call(null);
(statearr_33801[(6)] = c__32583__auto___33803);

return statearr_33801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33803,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33835 = arguments.length;
switch (G__33835) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33838 = arguments.length;
switch (G__33838) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32583__auto___33908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33880){
var state_val_33881 = (state_33880[(1)]);
if((state_val_33881 === (7))){
var state_33880__$1 = state_33880;
var statearr_33882_33909 = state_33880__$1;
(statearr_33882_33909[(2)] = null);

(statearr_33882_33909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (1))){
var state_33880__$1 = state_33880;
var statearr_33883_33910 = state_33880__$1;
(statearr_33883_33910[(2)] = null);

(statearr_33883_33910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (4))){
var inst_33844 = (state_33880[(7)]);
var inst_33846 = (inst_33844 < cnt);
var state_33880__$1 = state_33880;
if(cljs.core.truth_(inst_33846)){
var statearr_33884_33911 = state_33880__$1;
(statearr_33884_33911[(1)] = (6));

} else {
var statearr_33885_33912 = state_33880__$1;
(statearr_33885_33912[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (15))){
var inst_33876 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
var statearr_33886_33913 = state_33880__$1;
(statearr_33886_33913[(2)] = inst_33876);

(statearr_33886_33913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (13))){
var inst_33869 = cljs.core.async.close_BANG_.call(null,out);
var state_33880__$1 = state_33880;
var statearr_33887_33914 = state_33880__$1;
(statearr_33887_33914[(2)] = inst_33869);

(statearr_33887_33914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (6))){
var state_33880__$1 = state_33880;
var statearr_33888_33915 = state_33880__$1;
(statearr_33888_33915[(2)] = null);

(statearr_33888_33915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (3))){
var inst_33878 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33880__$1,inst_33878);
} else {
if((state_val_33881 === (12))){
var inst_33866 = (state_33880[(8)]);
var inst_33866__$1 = (state_33880[(2)]);
var inst_33867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33866__$1);
var state_33880__$1 = (function (){var statearr_33889 = state_33880;
(statearr_33889[(8)] = inst_33866__$1);

return statearr_33889;
})();
if(cljs.core.truth_(inst_33867)){
var statearr_33890_33916 = state_33880__$1;
(statearr_33890_33916[(1)] = (13));

} else {
var statearr_33891_33917 = state_33880__$1;
(statearr_33891_33917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (2))){
var inst_33843 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33844 = (0);
var state_33880__$1 = (function (){var statearr_33892 = state_33880;
(statearr_33892[(7)] = inst_33844);

(statearr_33892[(9)] = inst_33843);

return statearr_33892;
})();
var statearr_33893_33918 = state_33880__$1;
(statearr_33893_33918[(2)] = null);

(statearr_33893_33918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (11))){
var inst_33844 = (state_33880[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33880,(10),Object,null,(9));
var inst_33853 = chs__$1.call(null,inst_33844);
var inst_33854 = done.call(null,inst_33844);
var inst_33855 = cljs.core.async.take_BANG_.call(null,inst_33853,inst_33854);
var state_33880__$1 = state_33880;
var statearr_33894_33919 = state_33880__$1;
(statearr_33894_33919[(2)] = inst_33855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (9))){
var inst_33844 = (state_33880[(7)]);
var inst_33857 = (state_33880[(2)]);
var inst_33858 = (inst_33844 + (1));
var inst_33844__$1 = inst_33858;
var state_33880__$1 = (function (){var statearr_33895 = state_33880;
(statearr_33895[(10)] = inst_33857);

(statearr_33895[(7)] = inst_33844__$1);

return statearr_33895;
})();
var statearr_33896_33920 = state_33880__$1;
(statearr_33896_33920[(2)] = null);

(statearr_33896_33920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (5))){
var inst_33864 = (state_33880[(2)]);
var state_33880__$1 = (function (){var statearr_33897 = state_33880;
(statearr_33897[(11)] = inst_33864);

return statearr_33897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33880__$1,(12),dchan);
} else {
if((state_val_33881 === (14))){
var inst_33866 = (state_33880[(8)]);
var inst_33871 = cljs.core.apply.call(null,f,inst_33866);
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33880__$1,(16),out,inst_33871);
} else {
if((state_val_33881 === (16))){
var inst_33873 = (state_33880[(2)]);
var state_33880__$1 = (function (){var statearr_33898 = state_33880;
(statearr_33898[(12)] = inst_33873);

return statearr_33898;
})();
var statearr_33899_33921 = state_33880__$1;
(statearr_33899_33921[(2)] = null);

(statearr_33899_33921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (10))){
var inst_33848 = (state_33880[(2)]);
var inst_33849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33880__$1 = (function (){var statearr_33900 = state_33880;
(statearr_33900[(13)] = inst_33848);

return statearr_33900;
})();
var statearr_33901_33922 = state_33880__$1;
(statearr_33901_33922[(2)] = inst_33849);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33880__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (8))){
var inst_33862 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
var statearr_33902_33923 = state_33880__$1;
(statearr_33902_33923[(2)] = inst_33862);

(statearr_33902_33923[(1)] = (5));


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
});})(c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32495__auto__,c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_33903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33903[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_33903[(1)] = (1));

return statearr_33903;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_33880){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33904){if((e33904 instanceof Object)){
var ex__32499__auto__ = e33904;
var statearr_33905_33924 = state_33880;
(statearr_33905_33924[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33925 = state_33880;
state_33880 = G__33925;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_33880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_33880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32585__auto__ = (function (){var statearr_33906 = f__32584__auto__.call(null);
(statearr_33906[(6)] = c__32583__auto___33908);

return statearr_33906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33908,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33928 = arguments.length;
switch (G__33928) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___33982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___33982,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___33982,out){
return (function (state_33960){
var state_val_33961 = (state_33960[(1)]);
if((state_val_33961 === (7))){
var inst_33940 = (state_33960[(7)]);
var inst_33939 = (state_33960[(8)]);
var inst_33939__$1 = (state_33960[(2)]);
var inst_33940__$1 = cljs.core.nth.call(null,inst_33939__$1,(0),null);
var inst_33941 = cljs.core.nth.call(null,inst_33939__$1,(1),null);
var inst_33942 = (inst_33940__$1 == null);
var state_33960__$1 = (function (){var statearr_33962 = state_33960;
(statearr_33962[(9)] = inst_33941);

(statearr_33962[(7)] = inst_33940__$1);

(statearr_33962[(8)] = inst_33939__$1);

return statearr_33962;
})();
if(cljs.core.truth_(inst_33942)){
var statearr_33963_33983 = state_33960__$1;
(statearr_33963_33983[(1)] = (8));

} else {
var statearr_33964_33984 = state_33960__$1;
(statearr_33964_33984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (1))){
var inst_33929 = cljs.core.vec.call(null,chs);
var inst_33930 = inst_33929;
var state_33960__$1 = (function (){var statearr_33965 = state_33960;
(statearr_33965[(10)] = inst_33930);

return statearr_33965;
})();
var statearr_33966_33985 = state_33960__$1;
(statearr_33966_33985[(2)] = null);

(statearr_33966_33985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (4))){
var inst_33930 = (state_33960[(10)]);
var state_33960__$1 = state_33960;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33960__$1,(7),inst_33930);
} else {
if((state_val_33961 === (6))){
var inst_33956 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33967_33986 = state_33960__$1;
(statearr_33967_33986[(2)] = inst_33956);

(statearr_33967_33986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (3))){
var inst_33958 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33960__$1,inst_33958);
} else {
if((state_val_33961 === (2))){
var inst_33930 = (state_33960[(10)]);
var inst_33932 = cljs.core.count.call(null,inst_33930);
var inst_33933 = (inst_33932 > (0));
var state_33960__$1 = state_33960;
if(cljs.core.truth_(inst_33933)){
var statearr_33969_33987 = state_33960__$1;
(statearr_33969_33987[(1)] = (4));

} else {
var statearr_33970_33988 = state_33960__$1;
(statearr_33970_33988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (11))){
var inst_33930 = (state_33960[(10)]);
var inst_33949 = (state_33960[(2)]);
var tmp33968 = inst_33930;
var inst_33930__$1 = tmp33968;
var state_33960__$1 = (function (){var statearr_33971 = state_33960;
(statearr_33971[(10)] = inst_33930__$1);

(statearr_33971[(11)] = inst_33949);

return statearr_33971;
})();
var statearr_33972_33989 = state_33960__$1;
(statearr_33972_33989[(2)] = null);

(statearr_33972_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (9))){
var inst_33940 = (state_33960[(7)]);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33960__$1,(11),out,inst_33940);
} else {
if((state_val_33961 === (5))){
var inst_33954 = cljs.core.async.close_BANG_.call(null,out);
var state_33960__$1 = state_33960;
var statearr_33973_33990 = state_33960__$1;
(statearr_33973_33990[(2)] = inst_33954);

(statearr_33973_33990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (10))){
var inst_33952 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33974_33991 = state_33960__$1;
(statearr_33974_33991[(2)] = inst_33952);

(statearr_33974_33991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (8))){
var inst_33930 = (state_33960[(10)]);
var inst_33941 = (state_33960[(9)]);
var inst_33940 = (state_33960[(7)]);
var inst_33939 = (state_33960[(8)]);
var inst_33944 = (function (){var cs = inst_33930;
var vec__33935 = inst_33939;
var v = inst_33940;
var c = inst_33941;
return ((function (cs,vec__33935,v,c,inst_33930,inst_33941,inst_33940,inst_33939,state_val_33961,c__32583__auto___33982,out){
return (function (p1__33926_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33926_SHARP_);
});
;})(cs,vec__33935,v,c,inst_33930,inst_33941,inst_33940,inst_33939,state_val_33961,c__32583__auto___33982,out))
})();
var inst_33945 = cljs.core.filterv.call(null,inst_33944,inst_33930);
var inst_33930__$1 = inst_33945;
var state_33960__$1 = (function (){var statearr_33975 = state_33960;
(statearr_33975[(10)] = inst_33930__$1);

return statearr_33975;
})();
var statearr_33976_33992 = state_33960__$1;
(statearr_33976_33992[(2)] = null);

(statearr_33976_33992[(1)] = (2));


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
});})(c__32583__auto___33982,out))
;
return ((function (switch__32495__auto__,c__32583__auto___33982,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_33977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33977[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_33977[(1)] = (1));

return statearr_33977;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_33960){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_33960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e33978){if((e33978 instanceof Object)){
var ex__32499__auto__ = e33978;
var statearr_33979_33993 = state_33960;
(statearr_33979_33993[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33994 = state_33960;
state_33960 = G__33994;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_33960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_33960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___33982,out))
})();
var state__32585__auto__ = (function (){var statearr_33980 = f__32584__auto__.call(null);
(statearr_33980[(6)] = c__32583__auto___33982);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___33982,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33996 = arguments.length;
switch (G__33996) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___34041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___34041,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___34041,out){
return (function (state_34020){
var state_val_34021 = (state_34020[(1)]);
if((state_val_34021 === (7))){
var inst_34002 = (state_34020[(7)]);
var inst_34002__$1 = (state_34020[(2)]);
var inst_34003 = (inst_34002__$1 == null);
var inst_34004 = cljs.core.not.call(null,inst_34003);
var state_34020__$1 = (function (){var statearr_34022 = state_34020;
(statearr_34022[(7)] = inst_34002__$1);

return statearr_34022;
})();
if(inst_34004){
var statearr_34023_34042 = state_34020__$1;
(statearr_34023_34042[(1)] = (8));

} else {
var statearr_34024_34043 = state_34020__$1;
(statearr_34024_34043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (1))){
var inst_33997 = (0);
var state_34020__$1 = (function (){var statearr_34025 = state_34020;
(statearr_34025[(8)] = inst_33997);

return statearr_34025;
})();
var statearr_34026_34044 = state_34020__$1;
(statearr_34026_34044[(2)] = null);

(statearr_34026_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (4))){
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34020__$1,(7),ch);
} else {
if((state_val_34021 === (6))){
var inst_34015 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34027_34045 = state_34020__$1;
(statearr_34027_34045[(2)] = inst_34015);

(statearr_34027_34045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (3))){
var inst_34017 = (state_34020[(2)]);
var inst_34018 = cljs.core.async.close_BANG_.call(null,out);
var state_34020__$1 = (function (){var statearr_34028 = state_34020;
(statearr_34028[(9)] = inst_34017);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34020__$1,inst_34018);
} else {
if((state_val_34021 === (2))){
var inst_33997 = (state_34020[(8)]);
var inst_33999 = (inst_33997 < n);
var state_34020__$1 = state_34020;
if(cljs.core.truth_(inst_33999)){
var statearr_34029_34046 = state_34020__$1;
(statearr_34029_34046[(1)] = (4));

} else {
var statearr_34030_34047 = state_34020__$1;
(statearr_34030_34047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (11))){
var inst_33997 = (state_34020[(8)]);
var inst_34007 = (state_34020[(2)]);
var inst_34008 = (inst_33997 + (1));
var inst_33997__$1 = inst_34008;
var state_34020__$1 = (function (){var statearr_34031 = state_34020;
(statearr_34031[(10)] = inst_34007);

(statearr_34031[(8)] = inst_33997__$1);

return statearr_34031;
})();
var statearr_34032_34048 = state_34020__$1;
(statearr_34032_34048[(2)] = null);

(statearr_34032_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (9))){
var state_34020__$1 = state_34020;
var statearr_34033_34049 = state_34020__$1;
(statearr_34033_34049[(2)] = null);

(statearr_34033_34049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (5))){
var state_34020__$1 = state_34020;
var statearr_34034_34050 = state_34020__$1;
(statearr_34034_34050[(2)] = null);

(statearr_34034_34050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (10))){
var inst_34012 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34035_34051 = state_34020__$1;
(statearr_34035_34051[(2)] = inst_34012);

(statearr_34035_34051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (8))){
var inst_34002 = (state_34020[(7)]);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34020__$1,(11),out,inst_34002);
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
});})(c__32583__auto___34041,out))
;
return ((function (switch__32495__auto__,c__32583__auto___34041,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_34036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34036[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_34036[(1)] = (1));

return statearr_34036;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_34020){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34037){if((e34037 instanceof Object)){
var ex__32499__auto__ = e34037;
var statearr_34038_34052 = state_34020;
(statearr_34038_34052[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34053 = state_34020;
state_34020 = G__34053;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_34020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_34020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___34041,out))
})();
var state__32585__auto__ = (function (){var statearr_34039 = f__32584__auto__.call(null);
(statearr_34039[(6)] = c__32583__auto___34041);

return statearr_34039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___34041,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34055 = (function (f,ch,meta34056){
this.f = f;
this.ch = ch;
this.meta34056 = meta34056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34057,meta34056__$1){
var self__ = this;
var _34057__$1 = this;
return (new cljs.core.async.t_cljs$core$async34055(self__.f,self__.ch,meta34056__$1));
});

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34057){
var self__ = this;
var _34057__$1 = this;
return self__.meta34056;
});

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34058 = (function (f,ch,meta34056,_,fn1,meta34059){
this.f = f;
this.ch = ch;
this.meta34056 = meta34056;
this._ = _;
this.fn1 = fn1;
this.meta34059 = meta34059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34060,meta34059__$1){
var self__ = this;
var _34060__$1 = this;
return (new cljs.core.async.t_cljs$core$async34058(self__.f,self__.ch,self__.meta34056,self__._,self__.fn1,meta34059__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34060){
var self__ = this;
var _34060__$1 = this;
return self__.meta34059;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34054_SHARP_){
return f1.call(null,(((p1__34054_SHARP_ == null))?null:self__.f.call(null,p1__34054_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34056","meta34056",-383622783,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34055","cljs.core.async/t_cljs$core$async34055",-107382917,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34059","meta34059",-984334678,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34058";

cljs.core.async.t_cljs$core$async34058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34058");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34058(f__$1,ch__$1,meta34056__$1,___$2,fn1__$1,meta34059){
return (new cljs.core.async.t_cljs$core$async34058(f__$1,ch__$1,meta34056__$1,___$2,fn1__$1,meta34059));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34058(self__.f,self__.ch,self__.meta34056,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34056","meta34056",-383622783,null)], null);
});

cljs.core.async.t_cljs$core$async34055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34055";

cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34055");
});

cljs.core.async.__GT_t_cljs$core$async34055 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34055(f__$1,ch__$1,meta34056){
return (new cljs.core.async.t_cljs$core$async34055(f__$1,ch__$1,meta34056));
});

}

return (new cljs.core.async.t_cljs$core$async34055(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34061 = (function (f,ch,meta34062){
this.f = f;
this.ch = ch;
this.meta34062 = meta34062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34063,meta34062__$1){
var self__ = this;
var _34063__$1 = this;
return (new cljs.core.async.t_cljs$core$async34061(self__.f,self__.ch,meta34062__$1));
});

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34063){
var self__ = this;
var _34063__$1 = this;
return self__.meta34062;
});

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34062","meta34062",-1973607525,null)], null);
});

cljs.core.async.t_cljs$core$async34061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34061";

cljs.core.async.t_cljs$core$async34061.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34061");
});

cljs.core.async.__GT_t_cljs$core$async34061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34061(f__$1,ch__$1,meta34062){
return (new cljs.core.async.t_cljs$core$async34061(f__$1,ch__$1,meta34062));
});

}

return (new cljs.core.async.t_cljs$core$async34061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34064 = (function (p,ch,meta34065){
this.p = p;
this.ch = ch;
this.meta34065 = meta34065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34066,meta34065__$1){
var self__ = this;
var _34066__$1 = this;
return (new cljs.core.async.t_cljs$core$async34064(self__.p,self__.ch,meta34065__$1));
});

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34066){
var self__ = this;
var _34066__$1 = this;
return self__.meta34065;
});

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34065","meta34065",-1819630747,null)], null);
});

cljs.core.async.t_cljs$core$async34064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34064";

cljs.core.async.t_cljs$core$async34064.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34064");
});

cljs.core.async.__GT_t_cljs$core$async34064 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34064(p__$1,ch__$1,meta34065){
return (new cljs.core.async.t_cljs$core$async34064(p__$1,ch__$1,meta34065));
});

}

return (new cljs.core.async.t_cljs$core$async34064(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34068 = arguments.length;
switch (G__34068) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___34108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___34108,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___34108,out){
return (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var inst_34085 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34091_34109 = state_34089__$1;
(statearr_34091_34109[(2)] = inst_34085);

(statearr_34091_34109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (1))){
var state_34089__$1 = state_34089;
var statearr_34092_34110 = state_34089__$1;
(statearr_34092_34110[(2)] = null);

(statearr_34092_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34071 = (state_34089[(7)]);
var inst_34071__$1 = (state_34089[(2)]);
var inst_34072 = (inst_34071__$1 == null);
var state_34089__$1 = (function (){var statearr_34093 = state_34089;
(statearr_34093[(7)] = inst_34071__$1);

return statearr_34093;
})();
if(cljs.core.truth_(inst_34072)){
var statearr_34094_34111 = state_34089__$1;
(statearr_34094_34111[(1)] = (5));

} else {
var statearr_34095_34112 = state_34089__$1;
(statearr_34095_34112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (6))){
var inst_34071 = (state_34089[(7)]);
var inst_34076 = p.call(null,inst_34071);
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34076)){
var statearr_34096_34113 = state_34089__$1;
(statearr_34096_34113[(1)] = (8));

} else {
var statearr_34097_34114 = state_34089__$1;
(statearr_34097_34114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34087 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34089__$1,inst_34087);
} else {
if((state_val_34090 === (2))){
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34089__$1,(4),ch);
} else {
if((state_val_34090 === (11))){
var inst_34079 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34098_34115 = state_34089__$1;
(statearr_34098_34115[(2)] = inst_34079);

(statearr_34098_34115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (9))){
var state_34089__$1 = state_34089;
var statearr_34099_34116 = state_34089__$1;
(statearr_34099_34116[(2)] = null);

(statearr_34099_34116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (5))){
var inst_34074 = cljs.core.async.close_BANG_.call(null,out);
var state_34089__$1 = state_34089;
var statearr_34100_34117 = state_34089__$1;
(statearr_34100_34117[(2)] = inst_34074);

(statearr_34100_34117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (10))){
var inst_34082 = (state_34089[(2)]);
var state_34089__$1 = (function (){var statearr_34101 = state_34089;
(statearr_34101[(8)] = inst_34082);

return statearr_34101;
})();
var statearr_34102_34118 = state_34089__$1;
(statearr_34102_34118[(2)] = null);

(statearr_34102_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (8))){
var inst_34071 = (state_34089[(7)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34089__$1,(11),out,inst_34071);
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
});})(c__32583__auto___34108,out))
;
return ((function (switch__32495__auto__,c__32583__auto___34108,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_34103 = [null,null,null,null,null,null,null,null,null];
(statearr_34103[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_34103[(1)] = (1));

return statearr_34103;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_34089){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34104){if((e34104 instanceof Object)){
var ex__32499__auto__ = e34104;
var statearr_34105_34119 = state_34089;
(statearr_34105_34119[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_34089;
state_34089 = G__34120;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___34108,out))
})();
var state__32585__auto__ = (function (){var statearr_34106 = f__32584__auto__.call(null);
(statearr_34106[(6)] = c__32583__auto___34108);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___34108,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34122 = arguments.length;
switch (G__34122) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__){
return (function (state_34185){
var state_val_34186 = (state_34185[(1)]);
if((state_val_34186 === (7))){
var inst_34181 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34187_34225 = state_34185__$1;
(statearr_34187_34225[(2)] = inst_34181);

(statearr_34187_34225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (20))){
var inst_34151 = (state_34185[(7)]);
var inst_34162 = (state_34185[(2)]);
var inst_34163 = cljs.core.next.call(null,inst_34151);
var inst_34137 = inst_34163;
var inst_34138 = null;
var inst_34139 = (0);
var inst_34140 = (0);
var state_34185__$1 = (function (){var statearr_34188 = state_34185;
(statearr_34188[(8)] = inst_34139);

(statearr_34188[(9)] = inst_34140);

(statearr_34188[(10)] = inst_34137);

(statearr_34188[(11)] = inst_34162);

(statearr_34188[(12)] = inst_34138);

return statearr_34188;
})();
var statearr_34189_34226 = state_34185__$1;
(statearr_34189_34226[(2)] = null);

(statearr_34189_34226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (1))){
var state_34185__$1 = state_34185;
var statearr_34190_34227 = state_34185__$1;
(statearr_34190_34227[(2)] = null);

(statearr_34190_34227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (4))){
var inst_34126 = (state_34185[(13)]);
var inst_34126__$1 = (state_34185[(2)]);
var inst_34127 = (inst_34126__$1 == null);
var state_34185__$1 = (function (){var statearr_34191 = state_34185;
(statearr_34191[(13)] = inst_34126__$1);

return statearr_34191;
})();
if(cljs.core.truth_(inst_34127)){
var statearr_34192_34228 = state_34185__$1;
(statearr_34192_34228[(1)] = (5));

} else {
var statearr_34193_34229 = state_34185__$1;
(statearr_34193_34229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (15))){
var state_34185__$1 = state_34185;
var statearr_34197_34230 = state_34185__$1;
(statearr_34197_34230[(2)] = null);

(statearr_34197_34230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (21))){
var state_34185__$1 = state_34185;
var statearr_34198_34231 = state_34185__$1;
(statearr_34198_34231[(2)] = null);

(statearr_34198_34231[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (13))){
var inst_34139 = (state_34185[(8)]);
var inst_34140 = (state_34185[(9)]);
var inst_34137 = (state_34185[(10)]);
var inst_34138 = (state_34185[(12)]);
var inst_34147 = (state_34185[(2)]);
var inst_34148 = (inst_34140 + (1));
var tmp34194 = inst_34139;
var tmp34195 = inst_34137;
var tmp34196 = inst_34138;
var inst_34137__$1 = tmp34195;
var inst_34138__$1 = tmp34196;
var inst_34139__$1 = tmp34194;
var inst_34140__$1 = inst_34148;
var state_34185__$1 = (function (){var statearr_34199 = state_34185;
(statearr_34199[(14)] = inst_34147);

(statearr_34199[(8)] = inst_34139__$1);

(statearr_34199[(9)] = inst_34140__$1);

(statearr_34199[(10)] = inst_34137__$1);

(statearr_34199[(12)] = inst_34138__$1);

return statearr_34199;
})();
var statearr_34200_34232 = state_34185__$1;
(statearr_34200_34232[(2)] = null);

(statearr_34200_34232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (22))){
var state_34185__$1 = state_34185;
var statearr_34201_34233 = state_34185__$1;
(statearr_34201_34233[(2)] = null);

(statearr_34201_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (6))){
var inst_34126 = (state_34185[(13)]);
var inst_34135 = f.call(null,inst_34126);
var inst_34136 = cljs.core.seq.call(null,inst_34135);
var inst_34137 = inst_34136;
var inst_34138 = null;
var inst_34139 = (0);
var inst_34140 = (0);
var state_34185__$1 = (function (){var statearr_34202 = state_34185;
(statearr_34202[(8)] = inst_34139);

(statearr_34202[(9)] = inst_34140);

(statearr_34202[(10)] = inst_34137);

(statearr_34202[(12)] = inst_34138);

return statearr_34202;
})();
var statearr_34203_34234 = state_34185__$1;
(statearr_34203_34234[(2)] = null);

(statearr_34203_34234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (17))){
var inst_34151 = (state_34185[(7)]);
var inst_34155 = cljs.core.chunk_first.call(null,inst_34151);
var inst_34156 = cljs.core.chunk_rest.call(null,inst_34151);
var inst_34157 = cljs.core.count.call(null,inst_34155);
var inst_34137 = inst_34156;
var inst_34138 = inst_34155;
var inst_34139 = inst_34157;
var inst_34140 = (0);
var state_34185__$1 = (function (){var statearr_34204 = state_34185;
(statearr_34204[(8)] = inst_34139);

(statearr_34204[(9)] = inst_34140);

(statearr_34204[(10)] = inst_34137);

(statearr_34204[(12)] = inst_34138);

return statearr_34204;
})();
var statearr_34205_34235 = state_34185__$1;
(statearr_34205_34235[(2)] = null);

(statearr_34205_34235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (3))){
var inst_34183 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34185__$1,inst_34183);
} else {
if((state_val_34186 === (12))){
var inst_34171 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34206_34236 = state_34185__$1;
(statearr_34206_34236[(2)] = inst_34171);

(statearr_34206_34236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (2))){
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34185__$1,(4),in$);
} else {
if((state_val_34186 === (23))){
var inst_34179 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34207_34237 = state_34185__$1;
(statearr_34207_34237[(2)] = inst_34179);

(statearr_34207_34237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (19))){
var inst_34166 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34208_34238 = state_34185__$1;
(statearr_34208_34238[(2)] = inst_34166);

(statearr_34208_34238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (11))){
var inst_34151 = (state_34185[(7)]);
var inst_34137 = (state_34185[(10)]);
var inst_34151__$1 = cljs.core.seq.call(null,inst_34137);
var state_34185__$1 = (function (){var statearr_34209 = state_34185;
(statearr_34209[(7)] = inst_34151__$1);

return statearr_34209;
})();
if(inst_34151__$1){
var statearr_34210_34239 = state_34185__$1;
(statearr_34210_34239[(1)] = (14));

} else {
var statearr_34211_34240 = state_34185__$1;
(statearr_34211_34240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (9))){
var inst_34173 = (state_34185[(2)]);
var inst_34174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34185__$1 = (function (){var statearr_34212 = state_34185;
(statearr_34212[(15)] = inst_34173);

return statearr_34212;
})();
if(cljs.core.truth_(inst_34174)){
var statearr_34213_34241 = state_34185__$1;
(statearr_34213_34241[(1)] = (21));

} else {
var statearr_34214_34242 = state_34185__$1;
(statearr_34214_34242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (5))){
var inst_34129 = cljs.core.async.close_BANG_.call(null,out);
var state_34185__$1 = state_34185;
var statearr_34215_34243 = state_34185__$1;
(statearr_34215_34243[(2)] = inst_34129);

(statearr_34215_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (14))){
var inst_34151 = (state_34185[(7)]);
var inst_34153 = cljs.core.chunked_seq_QMARK_.call(null,inst_34151);
var state_34185__$1 = state_34185;
if(inst_34153){
var statearr_34216_34244 = state_34185__$1;
(statearr_34216_34244[(1)] = (17));

} else {
var statearr_34217_34245 = state_34185__$1;
(statearr_34217_34245[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (16))){
var inst_34169 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34218_34246 = state_34185__$1;
(statearr_34218_34246[(2)] = inst_34169);

(statearr_34218_34246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (10))){
var inst_34140 = (state_34185[(9)]);
var inst_34138 = (state_34185[(12)]);
var inst_34145 = cljs.core._nth.call(null,inst_34138,inst_34140);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34185__$1,(13),out,inst_34145);
} else {
if((state_val_34186 === (18))){
var inst_34151 = (state_34185[(7)]);
var inst_34160 = cljs.core.first.call(null,inst_34151);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34185__$1,(20),out,inst_34160);
} else {
if((state_val_34186 === (8))){
var inst_34139 = (state_34185[(8)]);
var inst_34140 = (state_34185[(9)]);
var inst_34142 = (inst_34140 < inst_34139);
var inst_34143 = inst_34142;
var state_34185__$1 = state_34185;
if(cljs.core.truth_(inst_34143)){
var statearr_34219_34247 = state_34185__$1;
(statearr_34219_34247[(1)] = (10));

} else {
var statearr_34220_34248 = state_34185__$1;
(statearr_34220_34248[(1)] = (11));

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
});})(c__32583__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____0 = (function (){
var statearr_34221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__);

(statearr_34221[(1)] = (1));

return statearr_34221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____1 = (function (state_34185){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34222){if((e34222 instanceof Object)){
var ex__32499__auto__ = e34222;
var statearr_34223_34249 = state_34185;
(statearr_34223_34249[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34250 = state_34185;
state_34185 = G__34250;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__ = function(state_34185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____1.call(this,state_34185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32496__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__))
})();
var state__32585__auto__ = (function (){var statearr_34224 = f__32584__auto__.call(null);
(statearr_34224[(6)] = c__32583__auto__);

return statearr_34224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__))
);

return c__32583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34252 = arguments.length;
switch (G__34252) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34255 = arguments.length;
switch (G__34255) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34258 = arguments.length;
switch (G__34258) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___34305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___34305,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___34305,out){
return (function (state_34282){
var state_val_34283 = (state_34282[(1)]);
if((state_val_34283 === (7))){
var inst_34277 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34284_34306 = state_34282__$1;
(statearr_34284_34306[(2)] = inst_34277);

(statearr_34284_34306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (1))){
var inst_34259 = null;
var state_34282__$1 = (function (){var statearr_34285 = state_34282;
(statearr_34285[(7)] = inst_34259);

return statearr_34285;
})();
var statearr_34286_34307 = state_34282__$1;
(statearr_34286_34307[(2)] = null);

(statearr_34286_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (4))){
var inst_34262 = (state_34282[(8)]);
var inst_34262__$1 = (state_34282[(2)]);
var inst_34263 = (inst_34262__$1 == null);
var inst_34264 = cljs.core.not.call(null,inst_34263);
var state_34282__$1 = (function (){var statearr_34287 = state_34282;
(statearr_34287[(8)] = inst_34262__$1);

return statearr_34287;
})();
if(inst_34264){
var statearr_34288_34308 = state_34282__$1;
(statearr_34288_34308[(1)] = (5));

} else {
var statearr_34289_34309 = state_34282__$1;
(statearr_34289_34309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (6))){
var state_34282__$1 = state_34282;
var statearr_34290_34310 = state_34282__$1;
(statearr_34290_34310[(2)] = null);

(statearr_34290_34310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (3))){
var inst_34279 = (state_34282[(2)]);
var inst_34280 = cljs.core.async.close_BANG_.call(null,out);
var state_34282__$1 = (function (){var statearr_34291 = state_34282;
(statearr_34291[(9)] = inst_34279);

return statearr_34291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34282__$1,inst_34280);
} else {
if((state_val_34283 === (2))){
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34282__$1,(4),ch);
} else {
if((state_val_34283 === (11))){
var inst_34262 = (state_34282[(8)]);
var inst_34271 = (state_34282[(2)]);
var inst_34259 = inst_34262;
var state_34282__$1 = (function (){var statearr_34292 = state_34282;
(statearr_34292[(7)] = inst_34259);

(statearr_34292[(10)] = inst_34271);

return statearr_34292;
})();
var statearr_34293_34311 = state_34282__$1;
(statearr_34293_34311[(2)] = null);

(statearr_34293_34311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (9))){
var inst_34262 = (state_34282[(8)]);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34282__$1,(11),out,inst_34262);
} else {
if((state_val_34283 === (5))){
var inst_34259 = (state_34282[(7)]);
var inst_34262 = (state_34282[(8)]);
var inst_34266 = cljs.core._EQ_.call(null,inst_34262,inst_34259);
var state_34282__$1 = state_34282;
if(inst_34266){
var statearr_34295_34312 = state_34282__$1;
(statearr_34295_34312[(1)] = (8));

} else {
var statearr_34296_34313 = state_34282__$1;
(statearr_34296_34313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (10))){
var inst_34274 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34297_34314 = state_34282__$1;
(statearr_34297_34314[(2)] = inst_34274);

(statearr_34297_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (8))){
var inst_34259 = (state_34282[(7)]);
var tmp34294 = inst_34259;
var inst_34259__$1 = tmp34294;
var state_34282__$1 = (function (){var statearr_34298 = state_34282;
(statearr_34298[(7)] = inst_34259__$1);

return statearr_34298;
})();
var statearr_34299_34315 = state_34282__$1;
(statearr_34299_34315[(2)] = null);

(statearr_34299_34315[(1)] = (2));


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
});})(c__32583__auto___34305,out))
;
return ((function (switch__32495__auto__,c__32583__auto___34305,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_34282){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__32499__auto__ = e34301;
var statearr_34302_34316 = state_34282;
(statearr_34302_34316[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34317 = state_34282;
state_34282 = G__34317;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_34282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_34282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___34305,out))
})();
var state__32585__auto__ = (function (){var statearr_34303 = f__32584__auto__.call(null);
(statearr_34303[(6)] = c__32583__auto___34305);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___34305,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34319 = arguments.length;
switch (G__34319) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___34385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___34385,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___34385,out){
return (function (state_34357){
var state_val_34358 = (state_34357[(1)]);
if((state_val_34358 === (7))){
var inst_34353 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
var statearr_34359_34386 = state_34357__$1;
(statearr_34359_34386[(2)] = inst_34353);

(statearr_34359_34386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (1))){
var inst_34320 = (new Array(n));
var inst_34321 = inst_34320;
var inst_34322 = (0);
var state_34357__$1 = (function (){var statearr_34360 = state_34357;
(statearr_34360[(7)] = inst_34321);

(statearr_34360[(8)] = inst_34322);

return statearr_34360;
})();
var statearr_34361_34387 = state_34357__$1;
(statearr_34361_34387[(2)] = null);

(statearr_34361_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (4))){
var inst_34325 = (state_34357[(9)]);
var inst_34325__$1 = (state_34357[(2)]);
var inst_34326 = (inst_34325__$1 == null);
var inst_34327 = cljs.core.not.call(null,inst_34326);
var state_34357__$1 = (function (){var statearr_34362 = state_34357;
(statearr_34362[(9)] = inst_34325__$1);

return statearr_34362;
})();
if(inst_34327){
var statearr_34363_34388 = state_34357__$1;
(statearr_34363_34388[(1)] = (5));

} else {
var statearr_34364_34389 = state_34357__$1;
(statearr_34364_34389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (15))){
var inst_34347 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
var statearr_34365_34390 = state_34357__$1;
(statearr_34365_34390[(2)] = inst_34347);

(statearr_34365_34390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (13))){
var state_34357__$1 = state_34357;
var statearr_34366_34391 = state_34357__$1;
(statearr_34366_34391[(2)] = null);

(statearr_34366_34391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (6))){
var inst_34322 = (state_34357[(8)]);
var inst_34343 = (inst_34322 > (0));
var state_34357__$1 = state_34357;
if(cljs.core.truth_(inst_34343)){
var statearr_34367_34392 = state_34357__$1;
(statearr_34367_34392[(1)] = (12));

} else {
var statearr_34368_34393 = state_34357__$1;
(statearr_34368_34393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (3))){
var inst_34355 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34357__$1,inst_34355);
} else {
if((state_val_34358 === (12))){
var inst_34321 = (state_34357[(7)]);
var inst_34345 = cljs.core.vec.call(null,inst_34321);
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34357__$1,(15),out,inst_34345);
} else {
if((state_val_34358 === (2))){
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34357__$1,(4),ch);
} else {
if((state_val_34358 === (11))){
var inst_34337 = (state_34357[(2)]);
var inst_34338 = (new Array(n));
var inst_34321 = inst_34338;
var inst_34322 = (0);
var state_34357__$1 = (function (){var statearr_34369 = state_34357;
(statearr_34369[(10)] = inst_34337);

(statearr_34369[(7)] = inst_34321);

(statearr_34369[(8)] = inst_34322);

return statearr_34369;
})();
var statearr_34370_34394 = state_34357__$1;
(statearr_34370_34394[(2)] = null);

(statearr_34370_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (9))){
var inst_34321 = (state_34357[(7)]);
var inst_34335 = cljs.core.vec.call(null,inst_34321);
var state_34357__$1 = state_34357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34357__$1,(11),out,inst_34335);
} else {
if((state_val_34358 === (5))){
var inst_34325 = (state_34357[(9)]);
var inst_34321 = (state_34357[(7)]);
var inst_34330 = (state_34357[(11)]);
var inst_34322 = (state_34357[(8)]);
var inst_34329 = (inst_34321[inst_34322] = inst_34325);
var inst_34330__$1 = (inst_34322 + (1));
var inst_34331 = (inst_34330__$1 < n);
var state_34357__$1 = (function (){var statearr_34371 = state_34357;
(statearr_34371[(11)] = inst_34330__$1);

(statearr_34371[(12)] = inst_34329);

return statearr_34371;
})();
if(cljs.core.truth_(inst_34331)){
var statearr_34372_34395 = state_34357__$1;
(statearr_34372_34395[(1)] = (8));

} else {
var statearr_34373_34396 = state_34357__$1;
(statearr_34373_34396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (14))){
var inst_34350 = (state_34357[(2)]);
var inst_34351 = cljs.core.async.close_BANG_.call(null,out);
var state_34357__$1 = (function (){var statearr_34375 = state_34357;
(statearr_34375[(13)] = inst_34350);

return statearr_34375;
})();
var statearr_34376_34397 = state_34357__$1;
(statearr_34376_34397[(2)] = inst_34351);

(statearr_34376_34397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (10))){
var inst_34341 = (state_34357[(2)]);
var state_34357__$1 = state_34357;
var statearr_34377_34398 = state_34357__$1;
(statearr_34377_34398[(2)] = inst_34341);

(statearr_34377_34398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34358 === (8))){
var inst_34321 = (state_34357[(7)]);
var inst_34330 = (state_34357[(11)]);
var tmp34374 = inst_34321;
var inst_34321__$1 = tmp34374;
var inst_34322 = inst_34330;
var state_34357__$1 = (function (){var statearr_34378 = state_34357;
(statearr_34378[(7)] = inst_34321__$1);

(statearr_34378[(8)] = inst_34322);

return statearr_34378;
})();
var statearr_34379_34399 = state_34357__$1;
(statearr_34379_34399[(2)] = null);

(statearr_34379_34399[(1)] = (2));


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
});})(c__32583__auto___34385,out))
;
return ((function (switch__32495__auto__,c__32583__auto___34385,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_34357){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object)){
var ex__32499__auto__ = e34381;
var statearr_34382_34400 = state_34357;
(statearr_34382_34400[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34401 = state_34357;
state_34357 = G__34401;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_34357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_34357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___34385,out))
})();
var state__32585__auto__ = (function (){var statearr_34383 = f__32584__auto__.call(null);
(statearr_34383[(6)] = c__32583__auto___34385);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___34385,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34403 = arguments.length;
switch (G__34403) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32583__auto___34473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___34473,out){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___34473,out){
return (function (state_34445){
var state_val_34446 = (state_34445[(1)]);
if((state_val_34446 === (7))){
var inst_34441 = (state_34445[(2)]);
var state_34445__$1 = state_34445;
var statearr_34447_34474 = state_34445__$1;
(statearr_34447_34474[(2)] = inst_34441);

(statearr_34447_34474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (1))){
var inst_34404 = [];
var inst_34405 = inst_34404;
var inst_34406 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34445__$1 = (function (){var statearr_34448 = state_34445;
(statearr_34448[(7)] = inst_34405);

(statearr_34448[(8)] = inst_34406);

return statearr_34448;
})();
var statearr_34449_34475 = state_34445__$1;
(statearr_34449_34475[(2)] = null);

(statearr_34449_34475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (4))){
var inst_34409 = (state_34445[(9)]);
var inst_34409__$1 = (state_34445[(2)]);
var inst_34410 = (inst_34409__$1 == null);
var inst_34411 = cljs.core.not.call(null,inst_34410);
var state_34445__$1 = (function (){var statearr_34450 = state_34445;
(statearr_34450[(9)] = inst_34409__$1);

return statearr_34450;
})();
if(inst_34411){
var statearr_34451_34476 = state_34445__$1;
(statearr_34451_34476[(1)] = (5));

} else {
var statearr_34452_34477 = state_34445__$1;
(statearr_34452_34477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (15))){
var inst_34435 = (state_34445[(2)]);
var state_34445__$1 = state_34445;
var statearr_34453_34478 = state_34445__$1;
(statearr_34453_34478[(2)] = inst_34435);

(statearr_34453_34478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (13))){
var state_34445__$1 = state_34445;
var statearr_34454_34479 = state_34445__$1;
(statearr_34454_34479[(2)] = null);

(statearr_34454_34479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (6))){
var inst_34405 = (state_34445[(7)]);
var inst_34430 = inst_34405.length;
var inst_34431 = (inst_34430 > (0));
var state_34445__$1 = state_34445;
if(cljs.core.truth_(inst_34431)){
var statearr_34455_34480 = state_34445__$1;
(statearr_34455_34480[(1)] = (12));

} else {
var statearr_34456_34481 = state_34445__$1;
(statearr_34456_34481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (3))){
var inst_34443 = (state_34445[(2)]);
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34445__$1,inst_34443);
} else {
if((state_val_34446 === (12))){
var inst_34405 = (state_34445[(7)]);
var inst_34433 = cljs.core.vec.call(null,inst_34405);
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34445__$1,(15),out,inst_34433);
} else {
if((state_val_34446 === (2))){
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34445__$1,(4),ch);
} else {
if((state_val_34446 === (11))){
var inst_34409 = (state_34445[(9)]);
var inst_34413 = (state_34445[(10)]);
var inst_34423 = (state_34445[(2)]);
var inst_34424 = [];
var inst_34425 = inst_34424.push(inst_34409);
var inst_34405 = inst_34424;
var inst_34406 = inst_34413;
var state_34445__$1 = (function (){var statearr_34457 = state_34445;
(statearr_34457[(7)] = inst_34405);

(statearr_34457[(11)] = inst_34425);

(statearr_34457[(12)] = inst_34423);

(statearr_34457[(8)] = inst_34406);

return statearr_34457;
})();
var statearr_34458_34482 = state_34445__$1;
(statearr_34458_34482[(2)] = null);

(statearr_34458_34482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (9))){
var inst_34405 = (state_34445[(7)]);
var inst_34421 = cljs.core.vec.call(null,inst_34405);
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34445__$1,(11),out,inst_34421);
} else {
if((state_val_34446 === (5))){
var inst_34409 = (state_34445[(9)]);
var inst_34413 = (state_34445[(10)]);
var inst_34406 = (state_34445[(8)]);
var inst_34413__$1 = f.call(null,inst_34409);
var inst_34414 = cljs.core._EQ_.call(null,inst_34413__$1,inst_34406);
var inst_34415 = cljs.core.keyword_identical_QMARK_.call(null,inst_34406,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34416 = (inst_34414) || (inst_34415);
var state_34445__$1 = (function (){var statearr_34459 = state_34445;
(statearr_34459[(10)] = inst_34413__$1);

return statearr_34459;
})();
if(cljs.core.truth_(inst_34416)){
var statearr_34460_34483 = state_34445__$1;
(statearr_34460_34483[(1)] = (8));

} else {
var statearr_34461_34484 = state_34445__$1;
(statearr_34461_34484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (14))){
var inst_34438 = (state_34445[(2)]);
var inst_34439 = cljs.core.async.close_BANG_.call(null,out);
var state_34445__$1 = (function (){var statearr_34463 = state_34445;
(statearr_34463[(13)] = inst_34438);

return statearr_34463;
})();
var statearr_34464_34485 = state_34445__$1;
(statearr_34464_34485[(2)] = inst_34439);

(statearr_34464_34485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (10))){
var inst_34428 = (state_34445[(2)]);
var state_34445__$1 = state_34445;
var statearr_34465_34486 = state_34445__$1;
(statearr_34465_34486[(2)] = inst_34428);

(statearr_34465_34486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (8))){
var inst_34409 = (state_34445[(9)]);
var inst_34405 = (state_34445[(7)]);
var inst_34413 = (state_34445[(10)]);
var inst_34418 = inst_34405.push(inst_34409);
var tmp34462 = inst_34405;
var inst_34405__$1 = tmp34462;
var inst_34406 = inst_34413;
var state_34445__$1 = (function (){var statearr_34466 = state_34445;
(statearr_34466[(7)] = inst_34405__$1);

(statearr_34466[(14)] = inst_34418);

(statearr_34466[(8)] = inst_34406);

return statearr_34466;
})();
var statearr_34467_34487 = state_34445__$1;
(statearr_34467_34487[(2)] = null);

(statearr_34467_34487[(1)] = (2));


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
});})(c__32583__auto___34473,out))
;
return ((function (switch__32495__auto__,c__32583__auto___34473,out){
return (function() {
var cljs$core$async$state_machine__32496__auto__ = null;
var cljs$core$async$state_machine__32496__auto____0 = (function (){
var statearr_34468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34468[(0)] = cljs$core$async$state_machine__32496__auto__);

(statearr_34468[(1)] = (1));

return statearr_34468;
});
var cljs$core$async$state_machine__32496__auto____1 = (function (state_34445){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_34445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e34469){if((e34469 instanceof Object)){
var ex__32499__auto__ = e34469;
var statearr_34470_34488 = state_34445;
(statearr_34470_34488[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34489 = state_34445;
state_34445 = G__34489;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
cljs$core$async$state_machine__32496__auto__ = function(state_34445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32496__auto____1.call(this,state_34445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32496__auto____0;
cljs$core$async$state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32496__auto____1;
return cljs$core$async$state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___34473,out))
})();
var state__32585__auto__ = (function (){var statearr_34471 = f__32584__auto__.call(null);
(statearr_34471[(6)] = c__32583__auto___34473);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___34473,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509580227877
