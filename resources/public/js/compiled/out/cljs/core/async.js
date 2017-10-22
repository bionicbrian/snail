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
var G__32074 = arguments.length;
switch (G__32074) {
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
if(typeof cljs.core.async.t_cljs$core$async32075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32075 = (function (f,blockable,meta32076){
this.f = f;
this.blockable = blockable;
this.meta32076 = meta32076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32077,meta32076__$1){
var self__ = this;
var _32077__$1 = this;
return (new cljs.core.async.t_cljs$core$async32075(self__.f,self__.blockable,meta32076__$1));
});

cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32077){
var self__ = this;
var _32077__$1 = this;
return self__.meta32076;
});

cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32076","meta32076",1346490476,null)], null);
});

cljs.core.async.t_cljs$core$async32075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32075";

cljs.core.async.t_cljs$core$async32075.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32075");
});

cljs.core.async.__GT_t_cljs$core$async32075 = (function cljs$core$async$__GT_t_cljs$core$async32075(f__$1,blockable__$1,meta32076){
return (new cljs.core.async.t_cljs$core$async32075(f__$1,blockable__$1,meta32076));
});

}

return (new cljs.core.async.t_cljs$core$async32075(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32081 = arguments.length;
switch (G__32081) {
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
var G__32084 = arguments.length;
switch (G__32084) {
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
var G__32087 = arguments.length;
switch (G__32087) {
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
var val_32089 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32089);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32089,ret){
return (function (){
return fn1.call(null,val_32089);
});})(val_32089,ret))
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
var G__32091 = arguments.length;
switch (G__32091) {
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
var n__29231__auto___32093 = n;
var x_32094 = (0);
while(true){
if((x_32094 < n__29231__auto___32093)){
(a[x_32094] = (0));

var G__32095 = (x_32094 + (1));
x_32094 = G__32095;
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

var G__32096 = (i + (1));
i = G__32096;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32097 = (function (flag,meta32098){
this.flag = flag;
this.meta32098 = meta32098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32099,meta32098__$1){
var self__ = this;
var _32099__$1 = this;
return (new cljs.core.async.t_cljs$core$async32097(self__.flag,meta32098__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32099){
var self__ = this;
var _32099__$1 = this;
return self__.meta32098;
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32098","meta32098",-2023072736,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32097";

cljs.core.async.t_cljs$core$async32097.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32097");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32097 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32097(flag__$1,meta32098){
return (new cljs.core.async.t_cljs$core$async32097(flag__$1,meta32098));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32097(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32100 = (function (flag,cb,meta32101){
this.flag = flag;
this.cb = cb;
this.meta32101 = meta32101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32102,meta32101__$1){
var self__ = this;
var _32102__$1 = this;
return (new cljs.core.async.t_cljs$core$async32100(self__.flag,self__.cb,meta32101__$1));
});

cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32102){
var self__ = this;
var _32102__$1 = this;
return self__.meta32101;
});

cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32101","meta32101",-1806764896,null)], null);
});

cljs.core.async.t_cljs$core$async32100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32100";

cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32100");
});

cljs.core.async.__GT_t_cljs$core$async32100 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32100(flag__$1,cb__$1,meta32101){
return (new cljs.core.async.t_cljs$core$async32100(flag__$1,cb__$1,meta32101));
});

}

return (new cljs.core.async.t_cljs$core$async32100(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32103_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32103_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32104_SHARP_,port], null));
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
var G__32105 = (i + (1));
i = G__32105;
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
var len__29455__auto___32111 = arguments.length;
var i__29456__auto___32112 = (0);
while(true){
if((i__29456__auto___32112 < len__29455__auto___32111)){
args__29462__auto__.push((arguments[i__29456__auto___32112]));

var G__32113 = (i__29456__auto___32112 + (1));
i__29456__auto___32112 = G__32113;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32108){
var map__32109 = p__32108;
var map__32109__$1 = ((((!((map__32109 == null)))?((((map__32109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);
var opts = map__32109__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32106){
var G__32107 = cljs.core.first.call(null,seq32106);
var seq32106__$1 = cljs.core.next.call(null,seq32106);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32107,seq32106__$1);
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
var G__32115 = arguments.length;
switch (G__32115) {
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
var c__32028__auto___32161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___32161){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___32161){
return (function (state_32139){
var state_val_32140 = (state_32139[(1)]);
if((state_val_32140 === (7))){
var inst_32135 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32141_32162 = state_32139__$1;
(statearr_32141_32162[(2)] = inst_32135);

(statearr_32141_32162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (1))){
var state_32139__$1 = state_32139;
var statearr_32142_32163 = state_32139__$1;
(statearr_32142_32163[(2)] = null);

(statearr_32142_32163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (4))){
var inst_32118 = (state_32139[(7)]);
var inst_32118__$1 = (state_32139[(2)]);
var inst_32119 = (inst_32118__$1 == null);
var state_32139__$1 = (function (){var statearr_32143 = state_32139;
(statearr_32143[(7)] = inst_32118__$1);

return statearr_32143;
})();
if(cljs.core.truth_(inst_32119)){
var statearr_32144_32164 = state_32139__$1;
(statearr_32144_32164[(1)] = (5));

} else {
var statearr_32145_32165 = state_32139__$1;
(statearr_32145_32165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (13))){
var state_32139__$1 = state_32139;
var statearr_32146_32166 = state_32139__$1;
(statearr_32146_32166[(2)] = null);

(statearr_32146_32166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (6))){
var inst_32118 = (state_32139[(7)]);
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32139__$1,(11),to,inst_32118);
} else {
if((state_val_32140 === (3))){
var inst_32137 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32139__$1,inst_32137);
} else {
if((state_val_32140 === (12))){
var state_32139__$1 = state_32139;
var statearr_32147_32167 = state_32139__$1;
(statearr_32147_32167[(2)] = null);

(statearr_32147_32167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (2))){
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32139__$1,(4),from);
} else {
if((state_val_32140 === (11))){
var inst_32128 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32128)){
var statearr_32148_32168 = state_32139__$1;
(statearr_32148_32168[(1)] = (12));

} else {
var statearr_32149_32169 = state_32139__$1;
(statearr_32149_32169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (9))){
var state_32139__$1 = state_32139;
var statearr_32150_32170 = state_32139__$1;
(statearr_32150_32170[(2)] = null);

(statearr_32150_32170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (5))){
var state_32139__$1 = state_32139;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32151_32171 = state_32139__$1;
(statearr_32151_32171[(1)] = (8));

} else {
var statearr_32152_32172 = state_32139__$1;
(statearr_32152_32172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (14))){
var inst_32133 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32153_32173 = state_32139__$1;
(statearr_32153_32173[(2)] = inst_32133);

(statearr_32153_32173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (10))){
var inst_32125 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32154_32174 = state_32139__$1;
(statearr_32154_32174[(2)] = inst_32125);

(statearr_32154_32174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32140 === (8))){
var inst_32122 = cljs.core.async.close_BANG_.call(null,to);
var state_32139__$1 = state_32139;
var statearr_32155_32175 = state_32139__$1;
(statearr_32155_32175[(2)] = inst_32122);

(statearr_32155_32175[(1)] = (10));


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
});})(c__32028__auto___32161))
;
return ((function (switch__31940__auto__,c__32028__auto___32161){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_32156 = [null,null,null,null,null,null,null,null];
(statearr_32156[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_32156[(1)] = (1));

return statearr_32156;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_32139){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32157){if((e32157 instanceof Object)){
var ex__31944__auto__ = e32157;
var statearr_32158_32176 = state_32139;
(statearr_32158_32176[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32177 = state_32139;
state_32139 = G__32177;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_32139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_32139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___32161))
})();
var state__32030__auto__ = (function (){var statearr_32159 = f__32029__auto__.call(null);
(statearr_32159[(6)] = c__32028__auto___32161);

return statearr_32159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___32161))
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
return (function (p__32178){
var vec__32179 = p__32178;
var v = cljs.core.nth.call(null,vec__32179,(0),null);
var p = cljs.core.nth.call(null,vec__32179,(1),null);
var job = vec__32179;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32028__auto___32350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results){
return (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (1))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32186__$1,(2),res,v);
} else {
if((state_val_32187 === (2))){
var inst_32183 = (state_32186[(2)]);
var inst_32184 = cljs.core.async.close_BANG_.call(null,res);
var state_32186__$1 = (function (){var statearr_32188 = state_32186;
(statearr_32188[(7)] = inst_32183);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else {
return null;
}
}
});})(c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results))
;
return ((function (switch__31940__auto__,c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1 = (function (state_32186){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32190){if((e32190 instanceof Object)){
var ex__31944__auto__ = e32190;
var statearr_32191_32351 = state_32186;
(statearr_32191_32351[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32352 = state_32186;
state_32186 = G__32352;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results))
})();
var state__32030__auto__ = (function (){var statearr_32192 = f__32029__auto__.call(null);
(statearr_32192[(6)] = c__32028__auto___32350);

return statearr_32192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___32350,res,vec__32179,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32193){
var vec__32194 = p__32193;
var v = cljs.core.nth.call(null,vec__32194,(0),null);
var p = cljs.core.nth.call(null,vec__32194,(1),null);
var job = vec__32194;
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
var n__29231__auto___32353 = n;
var __32354 = (0);
while(true){
if((__32354 < n__29231__auto___32353)){
var G__32197_32355 = type;
var G__32197_32356__$1 = (((G__32197_32355 instanceof cljs.core.Keyword))?G__32197_32355.fqn:null);
switch (G__32197_32356__$1) {
case "compute":
var c__32028__auto___32358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32354,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (__32354,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function (state_32210){
var state_val_32211 = (state_32210[(1)]);
if((state_val_32211 === (1))){
var state_32210__$1 = state_32210;
var statearr_32212_32359 = state_32210__$1;
(statearr_32212_32359[(2)] = null);

(statearr_32212_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (2))){
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32210__$1,(4),jobs);
} else {
if((state_val_32211 === (3))){
var inst_32208 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32210__$1,inst_32208);
} else {
if((state_val_32211 === (4))){
var inst_32200 = (state_32210[(2)]);
var inst_32201 = process.call(null,inst_32200);
var state_32210__$1 = state_32210;
if(cljs.core.truth_(inst_32201)){
var statearr_32213_32360 = state_32210__$1;
(statearr_32213_32360[(1)] = (5));

} else {
var statearr_32214_32361 = state_32210__$1;
(statearr_32214_32361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (5))){
var state_32210__$1 = state_32210;
var statearr_32215_32362 = state_32210__$1;
(statearr_32215_32362[(2)] = null);

(statearr_32215_32362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (6))){
var state_32210__$1 = state_32210;
var statearr_32216_32363 = state_32210__$1;
(statearr_32216_32363[(2)] = null);

(statearr_32216_32363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (7))){
var inst_32206 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32217_32364 = state_32210__$1;
(statearr_32217_32364[(2)] = inst_32206);

(statearr_32217_32364[(1)] = (3));


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
});})(__32354,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
;
return ((function (__32354,switch__31940__auto__,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1 = (function (state_32210){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__31944__auto__ = e32219;
var statearr_32220_32365 = state_32210;
(statearr_32220_32365[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32366 = state_32210;
state_32210 = G__32366;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = function(state_32210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1.call(this,state_32210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__;
})()
;})(__32354,switch__31940__auto__,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32221 = f__32029__auto__.call(null);
(statearr_32221[(6)] = c__32028__auto___32358);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(__32354,c__32028__auto___32358,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
);


break;
case "async":
var c__32028__auto___32367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32354,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (__32354,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function (state_32234){
var state_val_32235 = (state_32234[(1)]);
if((state_val_32235 === (1))){
var state_32234__$1 = state_32234;
var statearr_32236_32368 = state_32234__$1;
(statearr_32236_32368[(2)] = null);

(statearr_32236_32368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (2))){
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32234__$1,(4),jobs);
} else {
if((state_val_32235 === (3))){
var inst_32232 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32234__$1,inst_32232);
} else {
if((state_val_32235 === (4))){
var inst_32224 = (state_32234[(2)]);
var inst_32225 = async.call(null,inst_32224);
var state_32234__$1 = state_32234;
if(cljs.core.truth_(inst_32225)){
var statearr_32237_32369 = state_32234__$1;
(statearr_32237_32369[(1)] = (5));

} else {
var statearr_32238_32370 = state_32234__$1;
(statearr_32238_32370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (5))){
var state_32234__$1 = state_32234;
var statearr_32239_32371 = state_32234__$1;
(statearr_32239_32371[(2)] = null);

(statearr_32239_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (6))){
var state_32234__$1 = state_32234;
var statearr_32240_32372 = state_32234__$1;
(statearr_32240_32372[(2)] = null);

(statearr_32240_32372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32235 === (7))){
var inst_32230 = (state_32234[(2)]);
var state_32234__$1 = state_32234;
var statearr_32241_32373 = state_32234__$1;
(statearr_32241_32373[(2)] = inst_32230);

(statearr_32241_32373[(1)] = (3));


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
});})(__32354,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
;
return ((function (__32354,switch__31940__auto__,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_32242 = [null,null,null,null,null,null,null];
(statearr_32242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__);

(statearr_32242[(1)] = (1));

return statearr_32242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1 = (function (state_32234){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32243){if((e32243 instanceof Object)){
var ex__31944__auto__ = e32243;
var statearr_32244_32374 = state_32234;
(statearr_32244_32374[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32375 = state_32234;
state_32234 = G__32375;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = function(state_32234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1.call(this,state_32234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__;
})()
;})(__32354,switch__31940__auto__,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32245 = f__32029__auto__.call(null);
(statearr_32245[(6)] = c__32028__auto___32367);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(__32354,c__32028__auto___32367,G__32197_32355,G__32197_32356__$1,n__29231__auto___32353,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32197_32356__$1)].join('')));

}

var G__32376 = (__32354 + (1));
__32354 = G__32376;
continue;
} else {
}
break;
}

var c__32028__auto___32377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___32377,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___32377,jobs,results,process,async){
return (function (state_32267){
var state_val_32268 = (state_32267[(1)]);
if((state_val_32268 === (1))){
var state_32267__$1 = state_32267;
var statearr_32269_32378 = state_32267__$1;
(statearr_32269_32378[(2)] = null);

(statearr_32269_32378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (2))){
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32267__$1,(4),from);
} else {
if((state_val_32268 === (3))){
var inst_32265 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32267__$1,inst_32265);
} else {
if((state_val_32268 === (4))){
var inst_32248 = (state_32267[(7)]);
var inst_32248__$1 = (state_32267[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var state_32267__$1 = (function (){var statearr_32270 = state_32267;
(statearr_32270[(7)] = inst_32248__$1);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32271_32379 = state_32267__$1;
(statearr_32271_32379[(1)] = (5));

} else {
var statearr_32272_32380 = state_32267__$1;
(statearr_32272_32380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (5))){
var inst_32251 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32267__$1 = state_32267;
var statearr_32273_32381 = state_32267__$1;
(statearr_32273_32381[(2)] = inst_32251);

(statearr_32273_32381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (6))){
var inst_32253 = (state_32267[(8)]);
var inst_32248 = (state_32267[(7)]);
var inst_32253__$1 = cljs.core.async.chan.call(null,(1));
var inst_32254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32255 = [inst_32248,inst_32253__$1];
var inst_32256 = (new cljs.core.PersistentVector(null,2,(5),inst_32254,inst_32255,null));
var state_32267__$1 = (function (){var statearr_32274 = state_32267;
(statearr_32274[(8)] = inst_32253__$1);

return statearr_32274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32267__$1,(8),jobs,inst_32256);
} else {
if((state_val_32268 === (7))){
var inst_32263 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32275_32382 = state_32267__$1;
(statearr_32275_32382[(2)] = inst_32263);

(statearr_32275_32382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (8))){
var inst_32253 = (state_32267[(8)]);
var inst_32258 = (state_32267[(2)]);
var state_32267__$1 = (function (){var statearr_32276 = state_32267;
(statearr_32276[(9)] = inst_32258);

return statearr_32276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32267__$1,(9),results,inst_32253);
} else {
if((state_val_32268 === (9))){
var inst_32260 = (state_32267[(2)]);
var state_32267__$1 = (function (){var statearr_32277 = state_32267;
(statearr_32277[(10)] = inst_32260);

return statearr_32277;
})();
var statearr_32278_32383 = state_32267__$1;
(statearr_32278_32383[(2)] = null);

(statearr_32278_32383[(1)] = (2));


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
});})(c__32028__auto___32377,jobs,results,process,async))
;
return ((function (switch__31940__auto__,c__32028__auto___32377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_32279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__);

(statearr_32279[(1)] = (1));

return statearr_32279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1 = (function (state_32267){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object)){
var ex__31944__auto__ = e32280;
var statearr_32281_32384 = state_32267;
(statearr_32281_32384[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_32267;
state_32267 = G__32385;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = function(state_32267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1.call(this,state_32267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___32377,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32282 = f__32029__auto__.call(null);
(statearr_32282[(6)] = c__32028__auto___32377);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___32377,jobs,results,process,async))
);


var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__,jobs,results,process,async){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__,jobs,results,process,async){
return (function (state_32320){
var state_val_32321 = (state_32320[(1)]);
if((state_val_32321 === (7))){
var inst_32316 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32322_32386 = state_32320__$1;
(statearr_32322_32386[(2)] = inst_32316);

(statearr_32322_32386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (20))){
var state_32320__$1 = state_32320;
var statearr_32323_32387 = state_32320__$1;
(statearr_32323_32387[(2)] = null);

(statearr_32323_32387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (1))){
var state_32320__$1 = state_32320;
var statearr_32324_32388 = state_32320__$1;
(statearr_32324_32388[(2)] = null);

(statearr_32324_32388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (4))){
var inst_32285 = (state_32320[(7)]);
var inst_32285__$1 = (state_32320[(2)]);
var inst_32286 = (inst_32285__$1 == null);
var state_32320__$1 = (function (){var statearr_32325 = state_32320;
(statearr_32325[(7)] = inst_32285__$1);

return statearr_32325;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32326_32389 = state_32320__$1;
(statearr_32326_32389[(1)] = (5));

} else {
var statearr_32327_32390 = state_32320__$1;
(statearr_32327_32390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (15))){
var inst_32298 = (state_32320[(8)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32320__$1,(18),to,inst_32298);
} else {
if((state_val_32321 === (21))){
var inst_32311 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32328_32391 = state_32320__$1;
(statearr_32328_32391[(2)] = inst_32311);

(statearr_32328_32391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (13))){
var inst_32313 = (state_32320[(2)]);
var state_32320__$1 = (function (){var statearr_32329 = state_32320;
(statearr_32329[(9)] = inst_32313);

return statearr_32329;
})();
var statearr_32330_32392 = state_32320__$1;
(statearr_32330_32392[(2)] = null);

(statearr_32330_32392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (6))){
var inst_32285 = (state_32320[(7)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32320__$1,(11),inst_32285);
} else {
if((state_val_32321 === (17))){
var inst_32306 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
if(cljs.core.truth_(inst_32306)){
var statearr_32331_32393 = state_32320__$1;
(statearr_32331_32393[(1)] = (19));

} else {
var statearr_32332_32394 = state_32320__$1;
(statearr_32332_32394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (3))){
var inst_32318 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32320__$1,inst_32318);
} else {
if((state_val_32321 === (12))){
var inst_32295 = (state_32320[(10)]);
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32320__$1,(14),inst_32295);
} else {
if((state_val_32321 === (2))){
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32320__$1,(4),results);
} else {
if((state_val_32321 === (19))){
var state_32320__$1 = state_32320;
var statearr_32333_32395 = state_32320__$1;
(statearr_32333_32395[(2)] = null);

(statearr_32333_32395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (11))){
var inst_32295 = (state_32320[(2)]);
var state_32320__$1 = (function (){var statearr_32334 = state_32320;
(statearr_32334[(10)] = inst_32295);

return statearr_32334;
})();
var statearr_32335_32396 = state_32320__$1;
(statearr_32335_32396[(2)] = null);

(statearr_32335_32396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (9))){
var state_32320__$1 = state_32320;
var statearr_32336_32397 = state_32320__$1;
(statearr_32336_32397[(2)] = null);

(statearr_32336_32397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (5))){
var state_32320__$1 = state_32320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32337_32398 = state_32320__$1;
(statearr_32337_32398[(1)] = (8));

} else {
var statearr_32338_32399 = state_32320__$1;
(statearr_32338_32399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (14))){
var inst_32298 = (state_32320[(8)]);
var inst_32300 = (state_32320[(11)]);
var inst_32298__$1 = (state_32320[(2)]);
var inst_32299 = (inst_32298__$1 == null);
var inst_32300__$1 = cljs.core.not.call(null,inst_32299);
var state_32320__$1 = (function (){var statearr_32339 = state_32320;
(statearr_32339[(8)] = inst_32298__$1);

(statearr_32339[(11)] = inst_32300__$1);

return statearr_32339;
})();
if(inst_32300__$1){
var statearr_32340_32400 = state_32320__$1;
(statearr_32340_32400[(1)] = (15));

} else {
var statearr_32341_32401 = state_32320__$1;
(statearr_32341_32401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (16))){
var inst_32300 = (state_32320[(11)]);
var state_32320__$1 = state_32320;
var statearr_32342_32402 = state_32320__$1;
(statearr_32342_32402[(2)] = inst_32300);

(statearr_32342_32402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (10))){
var inst_32292 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32343_32403 = state_32320__$1;
(statearr_32343_32403[(2)] = inst_32292);

(statearr_32343_32403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (18))){
var inst_32303 = (state_32320[(2)]);
var state_32320__$1 = state_32320;
var statearr_32344_32404 = state_32320__$1;
(statearr_32344_32404[(2)] = inst_32303);

(statearr_32344_32404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32321 === (8))){
var inst_32289 = cljs.core.async.close_BANG_.call(null,to);
var state_32320__$1 = state_32320;
var statearr_32345_32405 = state_32320__$1;
(statearr_32345_32405[(2)] = inst_32289);

(statearr_32345_32405[(1)] = (10));


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
});})(c__32028__auto__,jobs,results,process,async))
;
return ((function (switch__31940__auto__,c__32028__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_32346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__);

(statearr_32346[(1)] = (1));

return statearr_32346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1 = (function (state_32320){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32347){if((e32347 instanceof Object)){
var ex__31944__auto__ = e32347;
var statearr_32348_32406 = state_32320;
(statearr_32348_32406[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32407 = state_32320;
state_32320 = G__32407;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__ = function(state_32320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1.call(this,state_32320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__,jobs,results,process,async))
})();
var state__32030__auto__ = (function (){var statearr_32349 = f__32029__auto__.call(null);
(statearr_32349[(6)] = c__32028__auto__);

return statearr_32349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__,jobs,results,process,async))
);

return c__32028__auto__;
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
var G__32409 = arguments.length;
switch (G__32409) {
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
var G__32412 = arguments.length;
switch (G__32412) {
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
var G__32415 = arguments.length;
switch (G__32415) {
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
var c__32028__auto___32464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___32464,tc,fc){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___32464,tc,fc){
return (function (state_32441){
var state_val_32442 = (state_32441[(1)]);
if((state_val_32442 === (7))){
var inst_32437 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32443_32465 = state_32441__$1;
(statearr_32443_32465[(2)] = inst_32437);

(statearr_32443_32465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (1))){
var state_32441__$1 = state_32441;
var statearr_32444_32466 = state_32441__$1;
(statearr_32444_32466[(2)] = null);

(statearr_32444_32466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (4))){
var inst_32418 = (state_32441[(7)]);
var inst_32418__$1 = (state_32441[(2)]);
var inst_32419 = (inst_32418__$1 == null);
var state_32441__$1 = (function (){var statearr_32445 = state_32441;
(statearr_32445[(7)] = inst_32418__$1);

return statearr_32445;
})();
if(cljs.core.truth_(inst_32419)){
var statearr_32446_32467 = state_32441__$1;
(statearr_32446_32467[(1)] = (5));

} else {
var statearr_32447_32468 = state_32441__$1;
(statearr_32447_32468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (13))){
var state_32441__$1 = state_32441;
var statearr_32448_32469 = state_32441__$1;
(statearr_32448_32469[(2)] = null);

(statearr_32448_32469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (6))){
var inst_32418 = (state_32441[(7)]);
var inst_32424 = p.call(null,inst_32418);
var state_32441__$1 = state_32441;
if(cljs.core.truth_(inst_32424)){
var statearr_32449_32470 = state_32441__$1;
(statearr_32449_32470[(1)] = (9));

} else {
var statearr_32450_32471 = state_32441__$1;
(statearr_32450_32471[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (3))){
var inst_32439 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32441__$1,inst_32439);
} else {
if((state_val_32442 === (12))){
var state_32441__$1 = state_32441;
var statearr_32451_32472 = state_32441__$1;
(statearr_32451_32472[(2)] = null);

(statearr_32451_32472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (2))){
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32441__$1,(4),ch);
} else {
if((state_val_32442 === (11))){
var inst_32418 = (state_32441[(7)]);
var inst_32428 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32441__$1,(8),inst_32428,inst_32418);
} else {
if((state_val_32442 === (9))){
var state_32441__$1 = state_32441;
var statearr_32452_32473 = state_32441__$1;
(statearr_32452_32473[(2)] = tc);

(statearr_32452_32473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (5))){
var inst_32421 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32422 = cljs.core.async.close_BANG_.call(null,fc);
var state_32441__$1 = (function (){var statearr_32453 = state_32441;
(statearr_32453[(8)] = inst_32421);

return statearr_32453;
})();
var statearr_32454_32474 = state_32441__$1;
(statearr_32454_32474[(2)] = inst_32422);

(statearr_32454_32474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (14))){
var inst_32435 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32455_32475 = state_32441__$1;
(statearr_32455_32475[(2)] = inst_32435);

(statearr_32455_32475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (10))){
var state_32441__$1 = state_32441;
var statearr_32456_32476 = state_32441__$1;
(statearr_32456_32476[(2)] = fc);

(statearr_32456_32476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32442 === (8))){
var inst_32430 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
if(cljs.core.truth_(inst_32430)){
var statearr_32457_32477 = state_32441__$1;
(statearr_32457_32477[(1)] = (12));

} else {
var statearr_32458_32478 = state_32441__$1;
(statearr_32458_32478[(1)] = (13));

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
});})(c__32028__auto___32464,tc,fc))
;
return ((function (switch__31940__auto__,c__32028__auto___32464,tc,fc){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_32459 = [null,null,null,null,null,null,null,null,null];
(statearr_32459[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_32459[(1)] = (1));

return statearr_32459;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_32441){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32460){if((e32460 instanceof Object)){
var ex__31944__auto__ = e32460;
var statearr_32461_32479 = state_32441;
(statearr_32461_32479[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32480 = state_32441;
state_32441 = G__32480;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_32441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_32441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___32464,tc,fc))
})();
var state__32030__auto__ = (function (){var statearr_32462 = f__32029__auto__.call(null);
(statearr_32462[(6)] = c__32028__auto___32464);

return statearr_32462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___32464,tc,fc))
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
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__){
return (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (7))){
var inst_32497 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32503_32521 = state_32501__$1;
(statearr_32503_32521[(2)] = inst_32497);

(statearr_32503_32521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (1))){
var inst_32481 = init;
var state_32501__$1 = (function (){var statearr_32504 = state_32501;
(statearr_32504[(7)] = inst_32481);

return statearr_32504;
})();
var statearr_32505_32522 = state_32501__$1;
(statearr_32505_32522[(2)] = null);

(statearr_32505_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (4))){
var inst_32484 = (state_32501[(8)]);
var inst_32484__$1 = (state_32501[(2)]);
var inst_32485 = (inst_32484__$1 == null);
var state_32501__$1 = (function (){var statearr_32506 = state_32501;
(statearr_32506[(8)] = inst_32484__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32485)){
var statearr_32507_32523 = state_32501__$1;
(statearr_32507_32523[(1)] = (5));

} else {
var statearr_32508_32524 = state_32501__$1;
(statearr_32508_32524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (6))){
var inst_32488 = (state_32501[(9)]);
var inst_32484 = (state_32501[(8)]);
var inst_32481 = (state_32501[(7)]);
var inst_32488__$1 = f.call(null,inst_32481,inst_32484);
var inst_32489 = cljs.core.reduced_QMARK_.call(null,inst_32488__$1);
var state_32501__$1 = (function (){var statearr_32509 = state_32501;
(statearr_32509[(9)] = inst_32488__$1);

return statearr_32509;
})();
if(inst_32489){
var statearr_32510_32525 = state_32501__$1;
(statearr_32510_32525[(1)] = (8));

} else {
var statearr_32511_32526 = state_32501__$1;
(statearr_32511_32526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (3))){
var inst_32499 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (2))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,(4),ch);
} else {
if((state_val_32502 === (9))){
var inst_32488 = (state_32501[(9)]);
var inst_32481 = inst_32488;
var state_32501__$1 = (function (){var statearr_32512 = state_32501;
(statearr_32512[(7)] = inst_32481);

return statearr_32512;
})();
var statearr_32513_32527 = state_32501__$1;
(statearr_32513_32527[(2)] = null);

(statearr_32513_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (5))){
var inst_32481 = (state_32501[(7)]);
var state_32501__$1 = state_32501;
var statearr_32514_32528 = state_32501__$1;
(statearr_32514_32528[(2)] = inst_32481);

(statearr_32514_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (10))){
var inst_32495 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32515_32529 = state_32501__$1;
(statearr_32515_32529[(2)] = inst_32495);

(statearr_32515_32529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (8))){
var inst_32488 = (state_32501[(9)]);
var inst_32491 = cljs.core.deref.call(null,inst_32488);
var state_32501__$1 = state_32501;
var statearr_32516_32530 = state_32501__$1;
(statearr_32516_32530[(2)] = inst_32491);

(statearr_32516_32530[(1)] = (10));


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
});})(c__32028__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31941__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31941__auto____0 = (function (){
var statearr_32517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32517[(0)] = cljs$core$async$reduce_$_state_machine__31941__auto__);

(statearr_32517[(1)] = (1));

return statearr_32517;
});
var cljs$core$async$reduce_$_state_machine__31941__auto____1 = (function (state_32501){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32518){if((e32518 instanceof Object)){
var ex__31944__auto__ = e32518;
var statearr_32519_32531 = state_32501;
(statearr_32519_32531[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32532 = state_32501;
state_32501 = G__32532;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31941__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31941__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31941__auto____0;
cljs$core$async$reduce_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31941__auto____1;
return cljs$core$async$reduce_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__))
})();
var state__32030__auto__ = (function (){var statearr_32520 = f__32029__auto__.call(null);
(statearr_32520[(6)] = c__32028__auto__);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__))
);

return c__32028__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__,f__$1){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__,f__$1){
return (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (1))){
var inst_32533 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(2),inst_32533);
} else {
if((state_val_32539 === (2))){
var inst_32535 = (state_32538[(2)]);
var inst_32536 = f__$1.call(null,inst_32535);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else {
return null;
}
}
});})(c__32028__auto__,f__$1))
;
return ((function (switch__31940__auto__,c__32028__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31941__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31941__auto____0 = (function (){
var statearr_32540 = [null,null,null,null,null,null,null];
(statearr_32540[(0)] = cljs$core$async$transduce_$_state_machine__31941__auto__);

(statearr_32540[(1)] = (1));

return statearr_32540;
});
var cljs$core$async$transduce_$_state_machine__31941__auto____1 = (function (state_32538){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32541){if((e32541 instanceof Object)){
var ex__31944__auto__ = e32541;
var statearr_32542_32544 = state_32538;
(statearr_32542_32544[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_32538;
state_32538 = G__32545;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31941__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31941__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31941__auto____0;
cljs$core$async$transduce_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31941__auto____1;
return cljs$core$async$transduce_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__,f__$1))
})();
var state__32030__auto__ = (function (){var statearr_32543 = f__32029__auto__.call(null);
(statearr_32543[(6)] = c__32028__auto__);

return statearr_32543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__,f__$1))
);

return c__32028__auto__;
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
var G__32547 = arguments.length;
switch (G__32547) {
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
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__){
return (function (state_32572){
var state_val_32573 = (state_32572[(1)]);
if((state_val_32573 === (7))){
var inst_32554 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32574_32595 = state_32572__$1;
(statearr_32574_32595[(2)] = inst_32554);

(statearr_32574_32595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (1))){
var inst_32548 = cljs.core.seq.call(null,coll);
var inst_32549 = inst_32548;
var state_32572__$1 = (function (){var statearr_32575 = state_32572;
(statearr_32575[(7)] = inst_32549);

return statearr_32575;
})();
var statearr_32576_32596 = state_32572__$1;
(statearr_32576_32596[(2)] = null);

(statearr_32576_32596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (4))){
var inst_32549 = (state_32572[(7)]);
var inst_32552 = cljs.core.first.call(null,inst_32549);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32572__$1,(7),ch,inst_32552);
} else {
if((state_val_32573 === (13))){
var inst_32566 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32577_32597 = state_32572__$1;
(statearr_32577_32597[(2)] = inst_32566);

(statearr_32577_32597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (6))){
var inst_32557 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32557)){
var statearr_32578_32598 = state_32572__$1;
(statearr_32578_32598[(1)] = (8));

} else {
var statearr_32579_32599 = state_32572__$1;
(statearr_32579_32599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (3))){
var inst_32570 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32572__$1,inst_32570);
} else {
if((state_val_32573 === (12))){
var state_32572__$1 = state_32572;
var statearr_32580_32600 = state_32572__$1;
(statearr_32580_32600[(2)] = null);

(statearr_32580_32600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (2))){
var inst_32549 = (state_32572[(7)]);
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32549)){
var statearr_32581_32601 = state_32572__$1;
(statearr_32581_32601[(1)] = (4));

} else {
var statearr_32582_32602 = state_32572__$1;
(statearr_32582_32602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (11))){
var inst_32563 = cljs.core.async.close_BANG_.call(null,ch);
var state_32572__$1 = state_32572;
var statearr_32583_32603 = state_32572__$1;
(statearr_32583_32603[(2)] = inst_32563);

(statearr_32583_32603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (9))){
var state_32572__$1 = state_32572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32584_32604 = state_32572__$1;
(statearr_32584_32604[(1)] = (11));

} else {
var statearr_32585_32605 = state_32572__$1;
(statearr_32585_32605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (5))){
var inst_32549 = (state_32572[(7)]);
var state_32572__$1 = state_32572;
var statearr_32586_32606 = state_32572__$1;
(statearr_32586_32606[(2)] = inst_32549);

(statearr_32586_32606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (10))){
var inst_32568 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32587_32607 = state_32572__$1;
(statearr_32587_32607[(2)] = inst_32568);

(statearr_32587_32607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (8))){
var inst_32549 = (state_32572[(7)]);
var inst_32559 = cljs.core.next.call(null,inst_32549);
var inst_32549__$1 = inst_32559;
var state_32572__$1 = (function (){var statearr_32588 = state_32572;
(statearr_32588[(7)] = inst_32549__$1);

return statearr_32588;
})();
var statearr_32589_32608 = state_32572__$1;
(statearr_32589_32608[(2)] = null);

(statearr_32589_32608[(1)] = (2));


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
});})(c__32028__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_32572){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32591){if((e32591 instanceof Object)){
var ex__31944__auto__ = e32591;
var statearr_32592_32609 = state_32572;
(statearr_32592_32609[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32610 = state_32572;
state_32572 = G__32610;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_32572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_32572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__))
})();
var state__32030__auto__ = (function (){var statearr_32593 = f__32029__auto__.call(null);
(statearr_32593[(6)] = c__32028__auto__);

return statearr_32593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__))
);

return c__32028__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32611 = (function (ch,cs,meta32612){
this.ch = ch;
this.cs = cs;
this.meta32612 = meta32612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32613,meta32612__$1){
var self__ = this;
var _32613__$1 = this;
return (new cljs.core.async.t_cljs$core$async32611(self__.ch,self__.cs,meta32612__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32613){
var self__ = this;
var _32613__$1 = this;
return self__.meta32612;
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32612","meta32612",-1640530658,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32611";

cljs.core.async.t_cljs$core$async32611.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32611");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32611 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32611(ch__$1,cs__$1,meta32612){
return (new cljs.core.async.t_cljs$core$async32611(ch__$1,cs__$1,meta32612));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32611(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32028__auto___32833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___32833,cs,m,dchan,dctr,done){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___32833,cs,m,dchan,dctr,done){
return (function (state_32748){
var state_val_32749 = (state_32748[(1)]);
if((state_val_32749 === (7))){
var inst_32744 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32750_32834 = state_32748__$1;
(statearr_32750_32834[(2)] = inst_32744);

(statearr_32750_32834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (20))){
var inst_32647 = (state_32748[(7)]);
var inst_32659 = cljs.core.first.call(null,inst_32647);
var inst_32660 = cljs.core.nth.call(null,inst_32659,(0),null);
var inst_32661 = cljs.core.nth.call(null,inst_32659,(1),null);
var state_32748__$1 = (function (){var statearr_32751 = state_32748;
(statearr_32751[(8)] = inst_32660);

return statearr_32751;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32752_32835 = state_32748__$1;
(statearr_32752_32835[(1)] = (22));

} else {
var statearr_32753_32836 = state_32748__$1;
(statearr_32753_32836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (27))){
var inst_32616 = (state_32748[(9)]);
var inst_32691 = (state_32748[(10)]);
var inst_32689 = (state_32748[(11)]);
var inst_32696 = (state_32748[(12)]);
var inst_32696__$1 = cljs.core._nth.call(null,inst_32689,inst_32691);
var inst_32697 = cljs.core.async.put_BANG_.call(null,inst_32696__$1,inst_32616,done);
var state_32748__$1 = (function (){var statearr_32754 = state_32748;
(statearr_32754[(12)] = inst_32696__$1);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32697)){
var statearr_32755_32837 = state_32748__$1;
(statearr_32755_32837[(1)] = (30));

} else {
var statearr_32756_32838 = state_32748__$1;
(statearr_32756_32838[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (1))){
var state_32748__$1 = state_32748;
var statearr_32757_32839 = state_32748__$1;
(statearr_32757_32839[(2)] = null);

(statearr_32757_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (24))){
var inst_32647 = (state_32748[(7)]);
var inst_32666 = (state_32748[(2)]);
var inst_32667 = cljs.core.next.call(null,inst_32647);
var inst_32625 = inst_32667;
var inst_32626 = null;
var inst_32627 = (0);
var inst_32628 = (0);
var state_32748__$1 = (function (){var statearr_32758 = state_32748;
(statearr_32758[(13)] = inst_32627);

(statearr_32758[(14)] = inst_32626);

(statearr_32758[(15)] = inst_32666);

(statearr_32758[(16)] = inst_32625);

(statearr_32758[(17)] = inst_32628);

return statearr_32758;
})();
var statearr_32759_32840 = state_32748__$1;
(statearr_32759_32840[(2)] = null);

(statearr_32759_32840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (39))){
var state_32748__$1 = state_32748;
var statearr_32763_32841 = state_32748__$1;
(statearr_32763_32841[(2)] = null);

(statearr_32763_32841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (4))){
var inst_32616 = (state_32748[(9)]);
var inst_32616__$1 = (state_32748[(2)]);
var inst_32617 = (inst_32616__$1 == null);
var state_32748__$1 = (function (){var statearr_32764 = state_32748;
(statearr_32764[(9)] = inst_32616__$1);

return statearr_32764;
})();
if(cljs.core.truth_(inst_32617)){
var statearr_32765_32842 = state_32748__$1;
(statearr_32765_32842[(1)] = (5));

} else {
var statearr_32766_32843 = state_32748__$1;
(statearr_32766_32843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (15))){
var inst_32627 = (state_32748[(13)]);
var inst_32626 = (state_32748[(14)]);
var inst_32625 = (state_32748[(16)]);
var inst_32628 = (state_32748[(17)]);
var inst_32643 = (state_32748[(2)]);
var inst_32644 = (inst_32628 + (1));
var tmp32760 = inst_32627;
var tmp32761 = inst_32626;
var tmp32762 = inst_32625;
var inst_32625__$1 = tmp32762;
var inst_32626__$1 = tmp32761;
var inst_32627__$1 = tmp32760;
var inst_32628__$1 = inst_32644;
var state_32748__$1 = (function (){var statearr_32767 = state_32748;
(statearr_32767[(13)] = inst_32627__$1);

(statearr_32767[(14)] = inst_32626__$1);

(statearr_32767[(16)] = inst_32625__$1);

(statearr_32767[(18)] = inst_32643);

(statearr_32767[(17)] = inst_32628__$1);

return statearr_32767;
})();
var statearr_32768_32844 = state_32748__$1;
(statearr_32768_32844[(2)] = null);

(statearr_32768_32844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (21))){
var inst_32670 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32772_32845 = state_32748__$1;
(statearr_32772_32845[(2)] = inst_32670);

(statearr_32772_32845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (31))){
var inst_32696 = (state_32748[(12)]);
var inst_32700 = done.call(null,null);
var inst_32701 = cljs.core.async.untap_STAR_.call(null,m,inst_32696);
var state_32748__$1 = (function (){var statearr_32773 = state_32748;
(statearr_32773[(19)] = inst_32700);

return statearr_32773;
})();
var statearr_32774_32846 = state_32748__$1;
(statearr_32774_32846[(2)] = inst_32701);

(statearr_32774_32846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (32))){
var inst_32691 = (state_32748[(10)]);
var inst_32688 = (state_32748[(20)]);
var inst_32689 = (state_32748[(11)]);
var inst_32690 = (state_32748[(21)]);
var inst_32703 = (state_32748[(2)]);
var inst_32704 = (inst_32691 + (1));
var tmp32769 = inst_32688;
var tmp32770 = inst_32689;
var tmp32771 = inst_32690;
var inst_32688__$1 = tmp32769;
var inst_32689__$1 = tmp32770;
var inst_32690__$1 = tmp32771;
var inst_32691__$1 = inst_32704;
var state_32748__$1 = (function (){var statearr_32775 = state_32748;
(statearr_32775[(10)] = inst_32691__$1);

(statearr_32775[(20)] = inst_32688__$1);

(statearr_32775[(11)] = inst_32689__$1);

(statearr_32775[(22)] = inst_32703);

(statearr_32775[(21)] = inst_32690__$1);

return statearr_32775;
})();
var statearr_32776_32847 = state_32748__$1;
(statearr_32776_32847[(2)] = null);

(statearr_32776_32847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (40))){
var inst_32716 = (state_32748[(23)]);
var inst_32720 = done.call(null,null);
var inst_32721 = cljs.core.async.untap_STAR_.call(null,m,inst_32716);
var state_32748__$1 = (function (){var statearr_32777 = state_32748;
(statearr_32777[(24)] = inst_32720);

return statearr_32777;
})();
var statearr_32778_32848 = state_32748__$1;
(statearr_32778_32848[(2)] = inst_32721);

(statearr_32778_32848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (33))){
var inst_32707 = (state_32748[(25)]);
var inst_32709 = cljs.core.chunked_seq_QMARK_.call(null,inst_32707);
var state_32748__$1 = state_32748;
if(inst_32709){
var statearr_32779_32849 = state_32748__$1;
(statearr_32779_32849[(1)] = (36));

} else {
var statearr_32780_32850 = state_32748__$1;
(statearr_32780_32850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (13))){
var inst_32637 = (state_32748[(26)]);
var inst_32640 = cljs.core.async.close_BANG_.call(null,inst_32637);
var state_32748__$1 = state_32748;
var statearr_32781_32851 = state_32748__$1;
(statearr_32781_32851[(2)] = inst_32640);

(statearr_32781_32851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (22))){
var inst_32660 = (state_32748[(8)]);
var inst_32663 = cljs.core.async.close_BANG_.call(null,inst_32660);
var state_32748__$1 = state_32748;
var statearr_32782_32852 = state_32748__$1;
(statearr_32782_32852[(2)] = inst_32663);

(statearr_32782_32852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (36))){
var inst_32707 = (state_32748[(25)]);
var inst_32711 = cljs.core.chunk_first.call(null,inst_32707);
var inst_32712 = cljs.core.chunk_rest.call(null,inst_32707);
var inst_32713 = cljs.core.count.call(null,inst_32711);
var inst_32688 = inst_32712;
var inst_32689 = inst_32711;
var inst_32690 = inst_32713;
var inst_32691 = (0);
var state_32748__$1 = (function (){var statearr_32783 = state_32748;
(statearr_32783[(10)] = inst_32691);

(statearr_32783[(20)] = inst_32688);

(statearr_32783[(11)] = inst_32689);

(statearr_32783[(21)] = inst_32690);

return statearr_32783;
})();
var statearr_32784_32853 = state_32748__$1;
(statearr_32784_32853[(2)] = null);

(statearr_32784_32853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (41))){
var inst_32707 = (state_32748[(25)]);
var inst_32723 = (state_32748[(2)]);
var inst_32724 = cljs.core.next.call(null,inst_32707);
var inst_32688 = inst_32724;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32748__$1 = (function (){var statearr_32785 = state_32748;
(statearr_32785[(10)] = inst_32691);

(statearr_32785[(20)] = inst_32688);

(statearr_32785[(11)] = inst_32689);

(statearr_32785[(27)] = inst_32723);

(statearr_32785[(21)] = inst_32690);

return statearr_32785;
})();
var statearr_32786_32854 = state_32748__$1;
(statearr_32786_32854[(2)] = null);

(statearr_32786_32854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (43))){
var state_32748__$1 = state_32748;
var statearr_32787_32855 = state_32748__$1;
(statearr_32787_32855[(2)] = null);

(statearr_32787_32855[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (29))){
var inst_32732 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32788_32856 = state_32748__$1;
(statearr_32788_32856[(2)] = inst_32732);

(statearr_32788_32856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (44))){
var inst_32741 = (state_32748[(2)]);
var state_32748__$1 = (function (){var statearr_32789 = state_32748;
(statearr_32789[(28)] = inst_32741);

return statearr_32789;
})();
var statearr_32790_32857 = state_32748__$1;
(statearr_32790_32857[(2)] = null);

(statearr_32790_32857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (6))){
var inst_32680 = (state_32748[(29)]);
var inst_32679 = cljs.core.deref.call(null,cs);
var inst_32680__$1 = cljs.core.keys.call(null,inst_32679);
var inst_32681 = cljs.core.count.call(null,inst_32680__$1);
var inst_32682 = cljs.core.reset_BANG_.call(null,dctr,inst_32681);
var inst_32687 = cljs.core.seq.call(null,inst_32680__$1);
var inst_32688 = inst_32687;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32748__$1 = (function (){var statearr_32791 = state_32748;
(statearr_32791[(30)] = inst_32682);

(statearr_32791[(10)] = inst_32691);

(statearr_32791[(20)] = inst_32688);

(statearr_32791[(29)] = inst_32680__$1);

(statearr_32791[(11)] = inst_32689);

(statearr_32791[(21)] = inst_32690);

return statearr_32791;
})();
var statearr_32792_32858 = state_32748__$1;
(statearr_32792_32858[(2)] = null);

(statearr_32792_32858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (28))){
var inst_32707 = (state_32748[(25)]);
var inst_32688 = (state_32748[(20)]);
var inst_32707__$1 = cljs.core.seq.call(null,inst_32688);
var state_32748__$1 = (function (){var statearr_32793 = state_32748;
(statearr_32793[(25)] = inst_32707__$1);

return statearr_32793;
})();
if(inst_32707__$1){
var statearr_32794_32859 = state_32748__$1;
(statearr_32794_32859[(1)] = (33));

} else {
var statearr_32795_32860 = state_32748__$1;
(statearr_32795_32860[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (25))){
var inst_32691 = (state_32748[(10)]);
var inst_32690 = (state_32748[(21)]);
var inst_32693 = (inst_32691 < inst_32690);
var inst_32694 = inst_32693;
var state_32748__$1 = state_32748;
if(cljs.core.truth_(inst_32694)){
var statearr_32796_32861 = state_32748__$1;
(statearr_32796_32861[(1)] = (27));

} else {
var statearr_32797_32862 = state_32748__$1;
(statearr_32797_32862[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (34))){
var state_32748__$1 = state_32748;
var statearr_32798_32863 = state_32748__$1;
(statearr_32798_32863[(2)] = null);

(statearr_32798_32863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (17))){
var state_32748__$1 = state_32748;
var statearr_32799_32864 = state_32748__$1;
(statearr_32799_32864[(2)] = null);

(statearr_32799_32864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (3))){
var inst_32746 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32748__$1,inst_32746);
} else {
if((state_val_32749 === (12))){
var inst_32675 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32800_32865 = state_32748__$1;
(statearr_32800_32865[(2)] = inst_32675);

(statearr_32800_32865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (2))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32748__$1,(4),ch);
} else {
if((state_val_32749 === (23))){
var state_32748__$1 = state_32748;
var statearr_32801_32866 = state_32748__$1;
(statearr_32801_32866[(2)] = null);

(statearr_32801_32866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (35))){
var inst_32730 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32802_32867 = state_32748__$1;
(statearr_32802_32867[(2)] = inst_32730);

(statearr_32802_32867[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (19))){
var inst_32647 = (state_32748[(7)]);
var inst_32651 = cljs.core.chunk_first.call(null,inst_32647);
var inst_32652 = cljs.core.chunk_rest.call(null,inst_32647);
var inst_32653 = cljs.core.count.call(null,inst_32651);
var inst_32625 = inst_32652;
var inst_32626 = inst_32651;
var inst_32627 = inst_32653;
var inst_32628 = (0);
var state_32748__$1 = (function (){var statearr_32803 = state_32748;
(statearr_32803[(13)] = inst_32627);

(statearr_32803[(14)] = inst_32626);

(statearr_32803[(16)] = inst_32625);

(statearr_32803[(17)] = inst_32628);

return statearr_32803;
})();
var statearr_32804_32868 = state_32748__$1;
(statearr_32804_32868[(2)] = null);

(statearr_32804_32868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (11))){
var inst_32647 = (state_32748[(7)]);
var inst_32625 = (state_32748[(16)]);
var inst_32647__$1 = cljs.core.seq.call(null,inst_32625);
var state_32748__$1 = (function (){var statearr_32805 = state_32748;
(statearr_32805[(7)] = inst_32647__$1);

return statearr_32805;
})();
if(inst_32647__$1){
var statearr_32806_32869 = state_32748__$1;
(statearr_32806_32869[(1)] = (16));

} else {
var statearr_32807_32870 = state_32748__$1;
(statearr_32807_32870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (9))){
var inst_32677 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32808_32871 = state_32748__$1;
(statearr_32808_32871[(2)] = inst_32677);

(statearr_32808_32871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (5))){
var inst_32623 = cljs.core.deref.call(null,cs);
var inst_32624 = cljs.core.seq.call(null,inst_32623);
var inst_32625 = inst_32624;
var inst_32626 = null;
var inst_32627 = (0);
var inst_32628 = (0);
var state_32748__$1 = (function (){var statearr_32809 = state_32748;
(statearr_32809[(13)] = inst_32627);

(statearr_32809[(14)] = inst_32626);

(statearr_32809[(16)] = inst_32625);

(statearr_32809[(17)] = inst_32628);

return statearr_32809;
})();
var statearr_32810_32872 = state_32748__$1;
(statearr_32810_32872[(2)] = null);

(statearr_32810_32872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (14))){
var state_32748__$1 = state_32748;
var statearr_32811_32873 = state_32748__$1;
(statearr_32811_32873[(2)] = null);

(statearr_32811_32873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (45))){
var inst_32738 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32812_32874 = state_32748__$1;
(statearr_32812_32874[(2)] = inst_32738);

(statearr_32812_32874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (26))){
var inst_32680 = (state_32748[(29)]);
var inst_32734 = (state_32748[(2)]);
var inst_32735 = cljs.core.seq.call(null,inst_32680);
var state_32748__$1 = (function (){var statearr_32813 = state_32748;
(statearr_32813[(31)] = inst_32734);

return statearr_32813;
})();
if(inst_32735){
var statearr_32814_32875 = state_32748__$1;
(statearr_32814_32875[(1)] = (42));

} else {
var statearr_32815_32876 = state_32748__$1;
(statearr_32815_32876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (16))){
var inst_32647 = (state_32748[(7)]);
var inst_32649 = cljs.core.chunked_seq_QMARK_.call(null,inst_32647);
var state_32748__$1 = state_32748;
if(inst_32649){
var statearr_32816_32877 = state_32748__$1;
(statearr_32816_32877[(1)] = (19));

} else {
var statearr_32817_32878 = state_32748__$1;
(statearr_32817_32878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (38))){
var inst_32727 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32818_32879 = state_32748__$1;
(statearr_32818_32879[(2)] = inst_32727);

(statearr_32818_32879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (30))){
var state_32748__$1 = state_32748;
var statearr_32819_32880 = state_32748__$1;
(statearr_32819_32880[(2)] = null);

(statearr_32819_32880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (10))){
var inst_32626 = (state_32748[(14)]);
var inst_32628 = (state_32748[(17)]);
var inst_32636 = cljs.core._nth.call(null,inst_32626,inst_32628);
var inst_32637 = cljs.core.nth.call(null,inst_32636,(0),null);
var inst_32638 = cljs.core.nth.call(null,inst_32636,(1),null);
var state_32748__$1 = (function (){var statearr_32820 = state_32748;
(statearr_32820[(26)] = inst_32637);

return statearr_32820;
})();
if(cljs.core.truth_(inst_32638)){
var statearr_32821_32881 = state_32748__$1;
(statearr_32821_32881[(1)] = (13));

} else {
var statearr_32822_32882 = state_32748__$1;
(statearr_32822_32882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (18))){
var inst_32673 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32823_32883 = state_32748__$1;
(statearr_32823_32883[(2)] = inst_32673);

(statearr_32823_32883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (42))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32748__$1,(45),dchan);
} else {
if((state_val_32749 === (37))){
var inst_32707 = (state_32748[(25)]);
var inst_32616 = (state_32748[(9)]);
var inst_32716 = (state_32748[(23)]);
var inst_32716__$1 = cljs.core.first.call(null,inst_32707);
var inst_32717 = cljs.core.async.put_BANG_.call(null,inst_32716__$1,inst_32616,done);
var state_32748__$1 = (function (){var statearr_32824 = state_32748;
(statearr_32824[(23)] = inst_32716__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32717)){
var statearr_32825_32884 = state_32748__$1;
(statearr_32825_32884[(1)] = (39));

} else {
var statearr_32826_32885 = state_32748__$1;
(statearr_32826_32885[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (8))){
var inst_32627 = (state_32748[(13)]);
var inst_32628 = (state_32748[(17)]);
var inst_32630 = (inst_32628 < inst_32627);
var inst_32631 = inst_32630;
var state_32748__$1 = state_32748;
if(cljs.core.truth_(inst_32631)){
var statearr_32827_32886 = state_32748__$1;
(statearr_32827_32886[(1)] = (10));

} else {
var statearr_32828_32887 = state_32748__$1;
(statearr_32828_32887[(1)] = (11));

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
});})(c__32028__auto___32833,cs,m,dchan,dctr,done))
;
return ((function (switch__31940__auto__,c__32028__auto___32833,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31941__auto__ = null;
var cljs$core$async$mult_$_state_machine__31941__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$mult_$_state_machine__31941__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$mult_$_state_machine__31941__auto____1 = (function (state_32748){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_32748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__31944__auto__ = e32830;
var statearr_32831_32888 = state_32748;
(statearr_32831_32888[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32748;
state_32748 = G__32889;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31941__auto__ = function(state_32748){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31941__auto____1.call(this,state_32748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31941__auto____0;
cljs$core$async$mult_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31941__auto____1;
return cljs$core$async$mult_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___32833,cs,m,dchan,dctr,done))
})();
var state__32030__auto__ = (function (){var statearr_32832 = f__32029__auto__.call(null);
(statearr_32832[(6)] = c__32028__auto___32833);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___32833,cs,m,dchan,dctr,done))
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
var G__32891 = arguments.length;
switch (G__32891) {
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
var len__29455__auto___32903 = arguments.length;
var i__29456__auto___32904 = (0);
while(true){
if((i__29456__auto___32904 < len__29455__auto___32903)){
args__29462__auto__.push((arguments[i__29456__auto___32904]));

var G__32905 = (i__29456__auto___32904 + (1));
i__29456__auto___32904 = G__32905;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32897){
var map__32898 = p__32897;
var map__32898__$1 = ((((!((map__32898 == null)))?((((map__32898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32898):map__32898);
var opts = map__32898__$1;
var statearr_32900_32906 = state;
(statearr_32900_32906[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32898,map__32898__$1,opts){
return (function (val){
var statearr_32901_32907 = state;
(statearr_32901_32907[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32898,map__32898__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32902_32908 = state;
(statearr_32902_32908[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32893){
var G__32894 = cljs.core.first.call(null,seq32893);
var seq32893__$1 = cljs.core.next.call(null,seq32893);
var G__32895 = cljs.core.first.call(null,seq32893__$1);
var seq32893__$2 = cljs.core.next.call(null,seq32893__$1);
var G__32896 = cljs.core.first.call(null,seq32893__$2);
var seq32893__$3 = cljs.core.next.call(null,seq32893__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32894,G__32895,G__32896,seq32893__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32909 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32910){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32910 = meta32910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32911,meta32910__$1){
var self__ = this;
var _32911__$1 = this;
return (new cljs.core.async.t_cljs$core$async32909(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32910__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32911){
var self__ = this;
var _32911__$1 = this;
return self__.meta32910;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32909.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32910","meta32910",-550998729,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32909";

cljs.core.async.t_cljs$core$async32909.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32909");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32909 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32909(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32910){
return (new cljs.core.async.t_cljs$core$async32909(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32910));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32909(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32028__auto___33073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33013){
var state_val_33014 = (state_33013[(1)]);
if((state_val_33014 === (7))){
var inst_32928 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33015_33074 = state_33013__$1;
(statearr_33015_33074[(2)] = inst_32928);

(statearr_33015_33074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (20))){
var inst_32940 = (state_33013[(7)]);
var state_33013__$1 = state_33013;
var statearr_33016_33075 = state_33013__$1;
(statearr_33016_33075[(2)] = inst_32940);

(statearr_33016_33075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (27))){
var state_33013__$1 = state_33013;
var statearr_33017_33076 = state_33013__$1;
(statearr_33017_33076[(2)] = null);

(statearr_33017_33076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (1))){
var inst_32915 = (state_33013[(8)]);
var inst_32915__$1 = calc_state.call(null);
var inst_32917 = (inst_32915__$1 == null);
var inst_32918 = cljs.core.not.call(null,inst_32917);
var state_33013__$1 = (function (){var statearr_33018 = state_33013;
(statearr_33018[(8)] = inst_32915__$1);

return statearr_33018;
})();
if(inst_32918){
var statearr_33019_33077 = state_33013__$1;
(statearr_33019_33077[(1)] = (2));

} else {
var statearr_33020_33078 = state_33013__$1;
(statearr_33020_33078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (24))){
var inst_32964 = (state_33013[(9)]);
var inst_32987 = (state_33013[(10)]);
var inst_32973 = (state_33013[(11)]);
var inst_32987__$1 = inst_32964.call(null,inst_32973);
var state_33013__$1 = (function (){var statearr_33021 = state_33013;
(statearr_33021[(10)] = inst_32987__$1);

return statearr_33021;
})();
if(cljs.core.truth_(inst_32987__$1)){
var statearr_33022_33079 = state_33013__$1;
(statearr_33022_33079[(1)] = (29));

} else {
var statearr_33023_33080 = state_33013__$1;
(statearr_33023_33080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (4))){
var inst_32931 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32931)){
var statearr_33024_33081 = state_33013__$1;
(statearr_33024_33081[(1)] = (8));

} else {
var statearr_33025_33082 = state_33013__$1;
(statearr_33025_33082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (15))){
var inst_32958 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32958)){
var statearr_33026_33083 = state_33013__$1;
(statearr_33026_33083[(1)] = (19));

} else {
var statearr_33027_33084 = state_33013__$1;
(statearr_33027_33084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (21))){
var inst_32963 = (state_33013[(12)]);
var inst_32963__$1 = (state_33013[(2)]);
var inst_32964 = cljs.core.get.call(null,inst_32963__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32965 = cljs.core.get.call(null,inst_32963__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32966 = cljs.core.get.call(null,inst_32963__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33013__$1 = (function (){var statearr_33028 = state_33013;
(statearr_33028[(9)] = inst_32964);

(statearr_33028[(12)] = inst_32963__$1);

(statearr_33028[(13)] = inst_32965);

return statearr_33028;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33013__$1,(22),inst_32966);
} else {
if((state_val_33014 === (31))){
var inst_32995 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32995)){
var statearr_33029_33085 = state_33013__$1;
(statearr_33029_33085[(1)] = (32));

} else {
var statearr_33030_33086 = state_33013__$1;
(statearr_33030_33086[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (32))){
var inst_32972 = (state_33013[(14)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33013__$1,(35),out,inst_32972);
} else {
if((state_val_33014 === (33))){
var inst_32963 = (state_33013[(12)]);
var inst_32940 = inst_32963;
var state_33013__$1 = (function (){var statearr_33031 = state_33013;
(statearr_33031[(7)] = inst_32940);

return statearr_33031;
})();
var statearr_33032_33087 = state_33013__$1;
(statearr_33032_33087[(2)] = null);

(statearr_33032_33087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (13))){
var inst_32940 = (state_33013[(7)]);
var inst_32947 = inst_32940.cljs$lang$protocol_mask$partition0$;
var inst_32948 = (inst_32947 & (64));
var inst_32949 = inst_32940.cljs$core$ISeq$;
var inst_32950 = (cljs.core.PROTOCOL_SENTINEL === inst_32949);
var inst_32951 = (inst_32948) || (inst_32950);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32951)){
var statearr_33033_33088 = state_33013__$1;
(statearr_33033_33088[(1)] = (16));

} else {
var statearr_33034_33089 = state_33013__$1;
(statearr_33034_33089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (22))){
var inst_32973 = (state_33013[(11)]);
var inst_32972 = (state_33013[(14)]);
var inst_32971 = (state_33013[(2)]);
var inst_32972__$1 = cljs.core.nth.call(null,inst_32971,(0),null);
var inst_32973__$1 = cljs.core.nth.call(null,inst_32971,(1),null);
var inst_32974 = (inst_32972__$1 == null);
var inst_32975 = cljs.core._EQ_.call(null,inst_32973__$1,change);
var inst_32976 = (inst_32974) || (inst_32975);
var state_33013__$1 = (function (){var statearr_33035 = state_33013;
(statearr_33035[(11)] = inst_32973__$1);

(statearr_33035[(14)] = inst_32972__$1);

return statearr_33035;
})();
if(cljs.core.truth_(inst_32976)){
var statearr_33036_33090 = state_33013__$1;
(statearr_33036_33090[(1)] = (23));

} else {
var statearr_33037_33091 = state_33013__$1;
(statearr_33037_33091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (36))){
var inst_32963 = (state_33013[(12)]);
var inst_32940 = inst_32963;
var state_33013__$1 = (function (){var statearr_33038 = state_33013;
(statearr_33038[(7)] = inst_32940);

return statearr_33038;
})();
var statearr_33039_33092 = state_33013__$1;
(statearr_33039_33092[(2)] = null);

(statearr_33039_33092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (29))){
var inst_32987 = (state_33013[(10)]);
var state_33013__$1 = state_33013;
var statearr_33040_33093 = state_33013__$1;
(statearr_33040_33093[(2)] = inst_32987);

(statearr_33040_33093[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (6))){
var state_33013__$1 = state_33013;
var statearr_33041_33094 = state_33013__$1;
(statearr_33041_33094[(2)] = false);

(statearr_33041_33094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (28))){
var inst_32983 = (state_33013[(2)]);
var inst_32984 = calc_state.call(null);
var inst_32940 = inst_32984;
var state_33013__$1 = (function (){var statearr_33042 = state_33013;
(statearr_33042[(7)] = inst_32940);

(statearr_33042[(15)] = inst_32983);

return statearr_33042;
})();
var statearr_33043_33095 = state_33013__$1;
(statearr_33043_33095[(2)] = null);

(statearr_33043_33095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (25))){
var inst_33009 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33044_33096 = state_33013__$1;
(statearr_33044_33096[(2)] = inst_33009);

(statearr_33044_33096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (34))){
var inst_33007 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33045_33097 = state_33013__$1;
(statearr_33045_33097[(2)] = inst_33007);

(statearr_33045_33097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (17))){
var state_33013__$1 = state_33013;
var statearr_33046_33098 = state_33013__$1;
(statearr_33046_33098[(2)] = false);

(statearr_33046_33098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (3))){
var state_33013__$1 = state_33013;
var statearr_33047_33099 = state_33013__$1;
(statearr_33047_33099[(2)] = false);

(statearr_33047_33099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (12))){
var inst_33011 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33013__$1,inst_33011);
} else {
if((state_val_33014 === (2))){
var inst_32915 = (state_33013[(8)]);
var inst_32920 = inst_32915.cljs$lang$protocol_mask$partition0$;
var inst_32921 = (inst_32920 & (64));
var inst_32922 = inst_32915.cljs$core$ISeq$;
var inst_32923 = (cljs.core.PROTOCOL_SENTINEL === inst_32922);
var inst_32924 = (inst_32921) || (inst_32923);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32924)){
var statearr_33048_33100 = state_33013__$1;
(statearr_33048_33100[(1)] = (5));

} else {
var statearr_33049_33101 = state_33013__$1;
(statearr_33049_33101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (23))){
var inst_32972 = (state_33013[(14)]);
var inst_32978 = (inst_32972 == null);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32978)){
var statearr_33050_33102 = state_33013__$1;
(statearr_33050_33102[(1)] = (26));

} else {
var statearr_33051_33103 = state_33013__$1;
(statearr_33051_33103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (35))){
var inst_32998 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
if(cljs.core.truth_(inst_32998)){
var statearr_33052_33104 = state_33013__$1;
(statearr_33052_33104[(1)] = (36));

} else {
var statearr_33053_33105 = state_33013__$1;
(statearr_33053_33105[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (19))){
var inst_32940 = (state_33013[(7)]);
var inst_32960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32940);
var state_33013__$1 = state_33013;
var statearr_33054_33106 = state_33013__$1;
(statearr_33054_33106[(2)] = inst_32960);

(statearr_33054_33106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (11))){
var inst_32940 = (state_33013[(7)]);
var inst_32944 = (inst_32940 == null);
var inst_32945 = cljs.core.not.call(null,inst_32944);
var state_33013__$1 = state_33013;
if(inst_32945){
var statearr_33055_33107 = state_33013__$1;
(statearr_33055_33107[(1)] = (13));

} else {
var statearr_33056_33108 = state_33013__$1;
(statearr_33056_33108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (9))){
var inst_32915 = (state_33013[(8)]);
var state_33013__$1 = state_33013;
var statearr_33057_33109 = state_33013__$1;
(statearr_33057_33109[(2)] = inst_32915);

(statearr_33057_33109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (5))){
var state_33013__$1 = state_33013;
var statearr_33058_33110 = state_33013__$1;
(statearr_33058_33110[(2)] = true);

(statearr_33058_33110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (14))){
var state_33013__$1 = state_33013;
var statearr_33059_33111 = state_33013__$1;
(statearr_33059_33111[(2)] = false);

(statearr_33059_33111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (26))){
var inst_32973 = (state_33013[(11)]);
var inst_32980 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32973);
var state_33013__$1 = state_33013;
var statearr_33060_33112 = state_33013__$1;
(statearr_33060_33112[(2)] = inst_32980);

(statearr_33060_33112[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (16))){
var state_33013__$1 = state_33013;
var statearr_33061_33113 = state_33013__$1;
(statearr_33061_33113[(2)] = true);

(statearr_33061_33113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (38))){
var inst_33003 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33062_33114 = state_33013__$1;
(statearr_33062_33114[(2)] = inst_33003);

(statearr_33062_33114[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (30))){
var inst_32964 = (state_33013[(9)]);
var inst_32973 = (state_33013[(11)]);
var inst_32965 = (state_33013[(13)]);
var inst_32990 = cljs.core.empty_QMARK_.call(null,inst_32964);
var inst_32991 = inst_32965.call(null,inst_32973);
var inst_32992 = cljs.core.not.call(null,inst_32991);
var inst_32993 = (inst_32990) && (inst_32992);
var state_33013__$1 = state_33013;
var statearr_33063_33115 = state_33013__$1;
(statearr_33063_33115[(2)] = inst_32993);

(statearr_33063_33115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (10))){
var inst_32915 = (state_33013[(8)]);
var inst_32936 = (state_33013[(2)]);
var inst_32937 = cljs.core.get.call(null,inst_32936,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32938 = cljs.core.get.call(null,inst_32936,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32939 = cljs.core.get.call(null,inst_32936,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32940 = inst_32915;
var state_33013__$1 = (function (){var statearr_33064 = state_33013;
(statearr_33064[(16)] = inst_32938);

(statearr_33064[(17)] = inst_32937);

(statearr_33064[(18)] = inst_32939);

(statearr_33064[(7)] = inst_32940);

return statearr_33064;
})();
var statearr_33065_33116 = state_33013__$1;
(statearr_33065_33116[(2)] = null);

(statearr_33065_33116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (18))){
var inst_32955 = (state_33013[(2)]);
var state_33013__$1 = state_33013;
var statearr_33066_33117 = state_33013__$1;
(statearr_33066_33117[(2)] = inst_32955);

(statearr_33066_33117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (37))){
var state_33013__$1 = state_33013;
var statearr_33067_33118 = state_33013__$1;
(statearr_33067_33118[(2)] = null);

(statearr_33067_33118[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33014 === (8))){
var inst_32915 = (state_33013[(8)]);
var inst_32933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32915);
var state_33013__$1 = state_33013;
var statearr_33068_33119 = state_33013__$1;
(statearr_33068_33119[(2)] = inst_32933);

(statearr_33068_33119[(1)] = (10));


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
});})(c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31940__auto__,c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31941__auto__ = null;
var cljs$core$async$mix_$_state_machine__31941__auto____0 = (function (){
var statearr_33069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33069[(0)] = cljs$core$async$mix_$_state_machine__31941__auto__);

(statearr_33069[(1)] = (1));

return statearr_33069;
});
var cljs$core$async$mix_$_state_machine__31941__auto____1 = (function (state_33013){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33070){if((e33070 instanceof Object)){
var ex__31944__auto__ = e33070;
var statearr_33071_33120 = state_33013;
(statearr_33071_33120[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33121 = state_33013;
state_33013 = G__33121;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31941__auto__ = function(state_33013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31941__auto____1.call(this,state_33013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31941__auto____0;
cljs$core$async$mix_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31941__auto____1;
return cljs$core$async$mix_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32030__auto__ = (function (){var statearr_33072 = f__32029__auto__.call(null);
(statearr_33072[(6)] = c__32028__auto___33073);

return statearr_33072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33123 = arguments.length;
switch (G__33123) {
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
var G__33127 = arguments.length;
switch (G__33127) {
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
return (function (p1__33125_SHARP_){
if(cljs.core.truth_(p1__33125_SHARP_.call(null,topic))){
return p1__33125_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33125_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33128 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33129){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33129 = meta33129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33130,meta33129__$1){
var self__ = this;
var _33130__$1 = this;
return (new cljs.core.async.t_cljs$core$async33128(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33129__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33130){
var self__ = this;
var _33130__$1 = this;
return self__.meta33129;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33129","meta33129",768710256,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33128";

cljs.core.async.t_cljs$core$async33128.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33128");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33128 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33128(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33129){
return (new cljs.core.async.t_cljs$core$async33128(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33129));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33128(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32028__auto___33248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33248,mults,ensure_mult,p){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33248,mults,ensure_mult,p){
return (function (state_33202){
var state_val_33203 = (state_33202[(1)]);
if((state_val_33203 === (7))){
var inst_33198 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33204_33249 = state_33202__$1;
(statearr_33204_33249[(2)] = inst_33198);

(statearr_33204_33249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (20))){
var state_33202__$1 = state_33202;
var statearr_33205_33250 = state_33202__$1;
(statearr_33205_33250[(2)] = null);

(statearr_33205_33250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (1))){
var state_33202__$1 = state_33202;
var statearr_33206_33251 = state_33202__$1;
(statearr_33206_33251[(2)] = null);

(statearr_33206_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (24))){
var inst_33181 = (state_33202[(7)]);
var inst_33190 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33181);
var state_33202__$1 = state_33202;
var statearr_33207_33252 = state_33202__$1;
(statearr_33207_33252[(2)] = inst_33190);

(statearr_33207_33252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (4))){
var inst_33133 = (state_33202[(8)]);
var inst_33133__$1 = (state_33202[(2)]);
var inst_33134 = (inst_33133__$1 == null);
var state_33202__$1 = (function (){var statearr_33208 = state_33202;
(statearr_33208[(8)] = inst_33133__$1);

return statearr_33208;
})();
if(cljs.core.truth_(inst_33134)){
var statearr_33209_33253 = state_33202__$1;
(statearr_33209_33253[(1)] = (5));

} else {
var statearr_33210_33254 = state_33202__$1;
(statearr_33210_33254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (15))){
var inst_33175 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33211_33255 = state_33202__$1;
(statearr_33211_33255[(2)] = inst_33175);

(statearr_33211_33255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (21))){
var inst_33195 = (state_33202[(2)]);
var state_33202__$1 = (function (){var statearr_33212 = state_33202;
(statearr_33212[(9)] = inst_33195);

return statearr_33212;
})();
var statearr_33213_33256 = state_33202__$1;
(statearr_33213_33256[(2)] = null);

(statearr_33213_33256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (13))){
var inst_33157 = (state_33202[(10)]);
var inst_33159 = cljs.core.chunked_seq_QMARK_.call(null,inst_33157);
var state_33202__$1 = state_33202;
if(inst_33159){
var statearr_33214_33257 = state_33202__$1;
(statearr_33214_33257[(1)] = (16));

} else {
var statearr_33215_33258 = state_33202__$1;
(statearr_33215_33258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (22))){
var inst_33187 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33187)){
var statearr_33216_33259 = state_33202__$1;
(statearr_33216_33259[(1)] = (23));

} else {
var statearr_33217_33260 = state_33202__$1;
(statearr_33217_33260[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (6))){
var inst_33183 = (state_33202[(11)]);
var inst_33133 = (state_33202[(8)]);
var inst_33181 = (state_33202[(7)]);
var inst_33181__$1 = topic_fn.call(null,inst_33133);
var inst_33182 = cljs.core.deref.call(null,mults);
var inst_33183__$1 = cljs.core.get.call(null,inst_33182,inst_33181__$1);
var state_33202__$1 = (function (){var statearr_33218 = state_33202;
(statearr_33218[(11)] = inst_33183__$1);

(statearr_33218[(7)] = inst_33181__$1);

return statearr_33218;
})();
if(cljs.core.truth_(inst_33183__$1)){
var statearr_33219_33261 = state_33202__$1;
(statearr_33219_33261[(1)] = (19));

} else {
var statearr_33220_33262 = state_33202__$1;
(statearr_33220_33262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (25))){
var inst_33192 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33221_33263 = state_33202__$1;
(statearr_33221_33263[(2)] = inst_33192);

(statearr_33221_33263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (17))){
var inst_33157 = (state_33202[(10)]);
var inst_33166 = cljs.core.first.call(null,inst_33157);
var inst_33167 = cljs.core.async.muxch_STAR_.call(null,inst_33166);
var inst_33168 = cljs.core.async.close_BANG_.call(null,inst_33167);
var inst_33169 = cljs.core.next.call(null,inst_33157);
var inst_33143 = inst_33169;
var inst_33144 = null;
var inst_33145 = (0);
var inst_33146 = (0);
var state_33202__$1 = (function (){var statearr_33222 = state_33202;
(statearr_33222[(12)] = inst_33144);

(statearr_33222[(13)] = inst_33146);

(statearr_33222[(14)] = inst_33145);

(statearr_33222[(15)] = inst_33168);

(statearr_33222[(16)] = inst_33143);

return statearr_33222;
})();
var statearr_33223_33264 = state_33202__$1;
(statearr_33223_33264[(2)] = null);

(statearr_33223_33264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (3))){
var inst_33200 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33202__$1,inst_33200);
} else {
if((state_val_33203 === (12))){
var inst_33177 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33224_33265 = state_33202__$1;
(statearr_33224_33265[(2)] = inst_33177);

(statearr_33224_33265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (2))){
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(4),ch);
} else {
if((state_val_33203 === (23))){
var state_33202__$1 = state_33202;
var statearr_33225_33266 = state_33202__$1;
(statearr_33225_33266[(2)] = null);

(statearr_33225_33266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (19))){
var inst_33183 = (state_33202[(11)]);
var inst_33133 = (state_33202[(8)]);
var inst_33185 = cljs.core.async.muxch_STAR_.call(null,inst_33183);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33202__$1,(22),inst_33185,inst_33133);
} else {
if((state_val_33203 === (11))){
var inst_33157 = (state_33202[(10)]);
var inst_33143 = (state_33202[(16)]);
var inst_33157__$1 = cljs.core.seq.call(null,inst_33143);
var state_33202__$1 = (function (){var statearr_33226 = state_33202;
(statearr_33226[(10)] = inst_33157__$1);

return statearr_33226;
})();
if(inst_33157__$1){
var statearr_33227_33267 = state_33202__$1;
(statearr_33227_33267[(1)] = (13));

} else {
var statearr_33228_33268 = state_33202__$1;
(statearr_33228_33268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (9))){
var inst_33179 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33229_33269 = state_33202__$1;
(statearr_33229_33269[(2)] = inst_33179);

(statearr_33229_33269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (5))){
var inst_33140 = cljs.core.deref.call(null,mults);
var inst_33141 = cljs.core.vals.call(null,inst_33140);
var inst_33142 = cljs.core.seq.call(null,inst_33141);
var inst_33143 = inst_33142;
var inst_33144 = null;
var inst_33145 = (0);
var inst_33146 = (0);
var state_33202__$1 = (function (){var statearr_33230 = state_33202;
(statearr_33230[(12)] = inst_33144);

(statearr_33230[(13)] = inst_33146);

(statearr_33230[(14)] = inst_33145);

(statearr_33230[(16)] = inst_33143);

return statearr_33230;
})();
var statearr_33231_33270 = state_33202__$1;
(statearr_33231_33270[(2)] = null);

(statearr_33231_33270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (14))){
var state_33202__$1 = state_33202;
var statearr_33235_33271 = state_33202__$1;
(statearr_33235_33271[(2)] = null);

(statearr_33235_33271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (16))){
var inst_33157 = (state_33202[(10)]);
var inst_33161 = cljs.core.chunk_first.call(null,inst_33157);
var inst_33162 = cljs.core.chunk_rest.call(null,inst_33157);
var inst_33163 = cljs.core.count.call(null,inst_33161);
var inst_33143 = inst_33162;
var inst_33144 = inst_33161;
var inst_33145 = inst_33163;
var inst_33146 = (0);
var state_33202__$1 = (function (){var statearr_33236 = state_33202;
(statearr_33236[(12)] = inst_33144);

(statearr_33236[(13)] = inst_33146);

(statearr_33236[(14)] = inst_33145);

(statearr_33236[(16)] = inst_33143);

return statearr_33236;
})();
var statearr_33237_33272 = state_33202__$1;
(statearr_33237_33272[(2)] = null);

(statearr_33237_33272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (10))){
var inst_33144 = (state_33202[(12)]);
var inst_33146 = (state_33202[(13)]);
var inst_33145 = (state_33202[(14)]);
var inst_33143 = (state_33202[(16)]);
var inst_33151 = cljs.core._nth.call(null,inst_33144,inst_33146);
var inst_33152 = cljs.core.async.muxch_STAR_.call(null,inst_33151);
var inst_33153 = cljs.core.async.close_BANG_.call(null,inst_33152);
var inst_33154 = (inst_33146 + (1));
var tmp33232 = inst_33144;
var tmp33233 = inst_33145;
var tmp33234 = inst_33143;
var inst_33143__$1 = tmp33234;
var inst_33144__$1 = tmp33232;
var inst_33145__$1 = tmp33233;
var inst_33146__$1 = inst_33154;
var state_33202__$1 = (function (){var statearr_33238 = state_33202;
(statearr_33238[(12)] = inst_33144__$1);

(statearr_33238[(17)] = inst_33153);

(statearr_33238[(13)] = inst_33146__$1);

(statearr_33238[(14)] = inst_33145__$1);

(statearr_33238[(16)] = inst_33143__$1);

return statearr_33238;
})();
var statearr_33239_33273 = state_33202__$1;
(statearr_33239_33273[(2)] = null);

(statearr_33239_33273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (18))){
var inst_33172 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33240_33274 = state_33202__$1;
(statearr_33240_33274[(2)] = inst_33172);

(statearr_33240_33274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (8))){
var inst_33146 = (state_33202[(13)]);
var inst_33145 = (state_33202[(14)]);
var inst_33148 = (inst_33146 < inst_33145);
var inst_33149 = inst_33148;
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33149)){
var statearr_33241_33275 = state_33202__$1;
(statearr_33241_33275[(1)] = (10));

} else {
var statearr_33242_33276 = state_33202__$1;
(statearr_33242_33276[(1)] = (11));

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
});})(c__32028__auto___33248,mults,ensure_mult,p))
;
return ((function (switch__31940__auto__,c__32028__auto___33248,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33243[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33243[(1)] = (1));

return statearr_33243;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33202){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33244){if((e33244 instanceof Object)){
var ex__31944__auto__ = e33244;
var statearr_33245_33277 = state_33202;
(statearr_33245_33277[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33278 = state_33202;
state_33202 = G__33278;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33248,mults,ensure_mult,p))
})();
var state__32030__auto__ = (function (){var statearr_33246 = f__32029__auto__.call(null);
(statearr_33246[(6)] = c__32028__auto___33248);

return statearr_33246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33248,mults,ensure_mult,p))
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
var G__33280 = arguments.length;
switch (G__33280) {
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
var G__33283 = arguments.length;
switch (G__33283) {
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
var G__33286 = arguments.length;
switch (G__33286) {
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
var c__32028__auto___33353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33325){
var state_val_33326 = (state_33325[(1)]);
if((state_val_33326 === (7))){
var state_33325__$1 = state_33325;
var statearr_33327_33354 = state_33325__$1;
(statearr_33327_33354[(2)] = null);

(statearr_33327_33354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (1))){
var state_33325__$1 = state_33325;
var statearr_33328_33355 = state_33325__$1;
(statearr_33328_33355[(2)] = null);

(statearr_33328_33355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (4))){
var inst_33289 = (state_33325[(7)]);
var inst_33291 = (inst_33289 < cnt);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33291)){
var statearr_33329_33356 = state_33325__$1;
(statearr_33329_33356[(1)] = (6));

} else {
var statearr_33330_33357 = state_33325__$1;
(statearr_33330_33357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (15))){
var inst_33321 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33331_33358 = state_33325__$1;
(statearr_33331_33358[(2)] = inst_33321);

(statearr_33331_33358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (13))){
var inst_33314 = cljs.core.async.close_BANG_.call(null,out);
var state_33325__$1 = state_33325;
var statearr_33332_33359 = state_33325__$1;
(statearr_33332_33359[(2)] = inst_33314);

(statearr_33332_33359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (6))){
var state_33325__$1 = state_33325;
var statearr_33333_33360 = state_33325__$1;
(statearr_33333_33360[(2)] = null);

(statearr_33333_33360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (3))){
var inst_33323 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33325__$1,inst_33323);
} else {
if((state_val_33326 === (12))){
var inst_33311 = (state_33325[(8)]);
var inst_33311__$1 = (state_33325[(2)]);
var inst_33312 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33311__$1);
var state_33325__$1 = (function (){var statearr_33334 = state_33325;
(statearr_33334[(8)] = inst_33311__$1);

return statearr_33334;
})();
if(cljs.core.truth_(inst_33312)){
var statearr_33335_33361 = state_33325__$1;
(statearr_33335_33361[(1)] = (13));

} else {
var statearr_33336_33362 = state_33325__$1;
(statearr_33336_33362[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (2))){
var inst_33288 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33289 = (0);
var state_33325__$1 = (function (){var statearr_33337 = state_33325;
(statearr_33337[(9)] = inst_33288);

(statearr_33337[(7)] = inst_33289);

return statearr_33337;
})();
var statearr_33338_33363 = state_33325__$1;
(statearr_33338_33363[(2)] = null);

(statearr_33338_33363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (11))){
var inst_33289 = (state_33325[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33325,(10),Object,null,(9));
var inst_33298 = chs__$1.call(null,inst_33289);
var inst_33299 = done.call(null,inst_33289);
var inst_33300 = cljs.core.async.take_BANG_.call(null,inst_33298,inst_33299);
var state_33325__$1 = state_33325;
var statearr_33339_33364 = state_33325__$1;
(statearr_33339_33364[(2)] = inst_33300);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (9))){
var inst_33289 = (state_33325[(7)]);
var inst_33302 = (state_33325[(2)]);
var inst_33303 = (inst_33289 + (1));
var inst_33289__$1 = inst_33303;
var state_33325__$1 = (function (){var statearr_33340 = state_33325;
(statearr_33340[(10)] = inst_33302);

(statearr_33340[(7)] = inst_33289__$1);

return statearr_33340;
})();
var statearr_33341_33365 = state_33325__$1;
(statearr_33341_33365[(2)] = null);

(statearr_33341_33365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (5))){
var inst_33309 = (state_33325[(2)]);
var state_33325__$1 = (function (){var statearr_33342 = state_33325;
(statearr_33342[(11)] = inst_33309);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33325__$1,(12),dchan);
} else {
if((state_val_33326 === (14))){
var inst_33311 = (state_33325[(8)]);
var inst_33316 = cljs.core.apply.call(null,f,inst_33311);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33325__$1,(16),out,inst_33316);
} else {
if((state_val_33326 === (16))){
var inst_33318 = (state_33325[(2)]);
var state_33325__$1 = (function (){var statearr_33343 = state_33325;
(statearr_33343[(12)] = inst_33318);

return statearr_33343;
})();
var statearr_33344_33366 = state_33325__$1;
(statearr_33344_33366[(2)] = null);

(statearr_33344_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (10))){
var inst_33293 = (state_33325[(2)]);
var inst_33294 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33325__$1 = (function (){var statearr_33345 = state_33325;
(statearr_33345[(13)] = inst_33293);

return statearr_33345;
})();
var statearr_33346_33367 = state_33325__$1;
(statearr_33346_33367[(2)] = inst_33294);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33325__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (8))){
var inst_33307 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33347_33368 = state_33325__$1;
(statearr_33347_33368[(2)] = inst_33307);

(statearr_33347_33368[(1)] = (5));


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
});})(c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31940__auto__,c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33348[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33348[(1)] = (1));

return statearr_33348;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33325){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33349){if((e33349 instanceof Object)){
var ex__31944__auto__ = e33349;
var statearr_33350_33369 = state_33325;
(statearr_33350_33369[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33370 = state_33325;
state_33325 = G__33370;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32030__auto__ = (function (){var statearr_33351 = f__32029__auto__.call(null);
(statearr_33351[(6)] = c__32028__auto___33353);

return statearr_33351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33353,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33373 = arguments.length;
switch (G__33373) {
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
var c__32028__auto___33427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33427,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33427,out){
return (function (state_33405){
var state_val_33406 = (state_33405[(1)]);
if((state_val_33406 === (7))){
var inst_33384 = (state_33405[(7)]);
var inst_33385 = (state_33405[(8)]);
var inst_33384__$1 = (state_33405[(2)]);
var inst_33385__$1 = cljs.core.nth.call(null,inst_33384__$1,(0),null);
var inst_33386 = cljs.core.nth.call(null,inst_33384__$1,(1),null);
var inst_33387 = (inst_33385__$1 == null);
var state_33405__$1 = (function (){var statearr_33407 = state_33405;
(statearr_33407[(9)] = inst_33386);

(statearr_33407[(7)] = inst_33384__$1);

(statearr_33407[(8)] = inst_33385__$1);

return statearr_33407;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33408_33428 = state_33405__$1;
(statearr_33408_33428[(1)] = (8));

} else {
var statearr_33409_33429 = state_33405__$1;
(statearr_33409_33429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (1))){
var inst_33374 = cljs.core.vec.call(null,chs);
var inst_33375 = inst_33374;
var state_33405__$1 = (function (){var statearr_33410 = state_33405;
(statearr_33410[(10)] = inst_33375);

return statearr_33410;
})();
var statearr_33411_33430 = state_33405__$1;
(statearr_33411_33430[(2)] = null);

(statearr_33411_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (4))){
var inst_33375 = (state_33405[(10)]);
var state_33405__$1 = state_33405;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33405__$1,(7),inst_33375);
} else {
if((state_val_33406 === (6))){
var inst_33401 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
var statearr_33412_33431 = state_33405__$1;
(statearr_33412_33431[(2)] = inst_33401);

(statearr_33412_33431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (3))){
var inst_33403 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33405__$1,inst_33403);
} else {
if((state_val_33406 === (2))){
var inst_33375 = (state_33405[(10)]);
var inst_33377 = cljs.core.count.call(null,inst_33375);
var inst_33378 = (inst_33377 > (0));
var state_33405__$1 = state_33405;
if(cljs.core.truth_(inst_33378)){
var statearr_33414_33432 = state_33405__$1;
(statearr_33414_33432[(1)] = (4));

} else {
var statearr_33415_33433 = state_33405__$1;
(statearr_33415_33433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (11))){
var inst_33375 = (state_33405[(10)]);
var inst_33394 = (state_33405[(2)]);
var tmp33413 = inst_33375;
var inst_33375__$1 = tmp33413;
var state_33405__$1 = (function (){var statearr_33416 = state_33405;
(statearr_33416[(10)] = inst_33375__$1);

(statearr_33416[(11)] = inst_33394);

return statearr_33416;
})();
var statearr_33417_33434 = state_33405__$1;
(statearr_33417_33434[(2)] = null);

(statearr_33417_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (9))){
var inst_33385 = (state_33405[(8)]);
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33405__$1,(11),out,inst_33385);
} else {
if((state_val_33406 === (5))){
var inst_33399 = cljs.core.async.close_BANG_.call(null,out);
var state_33405__$1 = state_33405;
var statearr_33418_33435 = state_33405__$1;
(statearr_33418_33435[(2)] = inst_33399);

(statearr_33418_33435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (10))){
var inst_33397 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
var statearr_33419_33436 = state_33405__$1;
(statearr_33419_33436[(2)] = inst_33397);

(statearr_33419_33436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (8))){
var inst_33386 = (state_33405[(9)]);
var inst_33375 = (state_33405[(10)]);
var inst_33384 = (state_33405[(7)]);
var inst_33385 = (state_33405[(8)]);
var inst_33389 = (function (){var cs = inst_33375;
var vec__33380 = inst_33384;
var v = inst_33385;
var c = inst_33386;
return ((function (cs,vec__33380,v,c,inst_33386,inst_33375,inst_33384,inst_33385,state_val_33406,c__32028__auto___33427,out){
return (function (p1__33371_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33371_SHARP_);
});
;})(cs,vec__33380,v,c,inst_33386,inst_33375,inst_33384,inst_33385,state_val_33406,c__32028__auto___33427,out))
})();
var inst_33390 = cljs.core.filterv.call(null,inst_33389,inst_33375);
var inst_33375__$1 = inst_33390;
var state_33405__$1 = (function (){var statearr_33420 = state_33405;
(statearr_33420[(10)] = inst_33375__$1);

return statearr_33420;
})();
var statearr_33421_33437 = state_33405__$1;
(statearr_33421_33437[(2)] = null);

(statearr_33421_33437[(1)] = (2));


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
});})(c__32028__auto___33427,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33427,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33422 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33422[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33422[(1)] = (1));

return statearr_33422;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33405){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33423){if((e33423 instanceof Object)){
var ex__31944__auto__ = e33423;
var statearr_33424_33438 = state_33405;
(statearr_33424_33438[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33439 = state_33405;
state_33405 = G__33439;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33427,out))
})();
var state__32030__auto__ = (function (){var statearr_33425 = f__32029__auto__.call(null);
(statearr_33425[(6)] = c__32028__auto___33427);

return statearr_33425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33427,out))
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
var G__33441 = arguments.length;
switch (G__33441) {
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
var c__32028__auto___33486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33486,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33486,out){
return (function (state_33465){
var state_val_33466 = (state_33465[(1)]);
if((state_val_33466 === (7))){
var inst_33447 = (state_33465[(7)]);
var inst_33447__$1 = (state_33465[(2)]);
var inst_33448 = (inst_33447__$1 == null);
var inst_33449 = cljs.core.not.call(null,inst_33448);
var state_33465__$1 = (function (){var statearr_33467 = state_33465;
(statearr_33467[(7)] = inst_33447__$1);

return statearr_33467;
})();
if(inst_33449){
var statearr_33468_33487 = state_33465__$1;
(statearr_33468_33487[(1)] = (8));

} else {
var statearr_33469_33488 = state_33465__$1;
(statearr_33469_33488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (1))){
var inst_33442 = (0);
var state_33465__$1 = (function (){var statearr_33470 = state_33465;
(statearr_33470[(8)] = inst_33442);

return statearr_33470;
})();
var statearr_33471_33489 = state_33465__$1;
(statearr_33471_33489[(2)] = null);

(statearr_33471_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (4))){
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33465__$1,(7),ch);
} else {
if((state_val_33466 === (6))){
var inst_33460 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33472_33490 = state_33465__$1;
(statearr_33472_33490[(2)] = inst_33460);

(statearr_33472_33490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (3))){
var inst_33462 = (state_33465[(2)]);
var inst_33463 = cljs.core.async.close_BANG_.call(null,out);
var state_33465__$1 = (function (){var statearr_33473 = state_33465;
(statearr_33473[(9)] = inst_33462);

return statearr_33473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33465__$1,inst_33463);
} else {
if((state_val_33466 === (2))){
var inst_33442 = (state_33465[(8)]);
var inst_33444 = (inst_33442 < n);
var state_33465__$1 = state_33465;
if(cljs.core.truth_(inst_33444)){
var statearr_33474_33491 = state_33465__$1;
(statearr_33474_33491[(1)] = (4));

} else {
var statearr_33475_33492 = state_33465__$1;
(statearr_33475_33492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (11))){
var inst_33442 = (state_33465[(8)]);
var inst_33452 = (state_33465[(2)]);
var inst_33453 = (inst_33442 + (1));
var inst_33442__$1 = inst_33453;
var state_33465__$1 = (function (){var statearr_33476 = state_33465;
(statearr_33476[(8)] = inst_33442__$1);

(statearr_33476[(10)] = inst_33452);

return statearr_33476;
})();
var statearr_33477_33493 = state_33465__$1;
(statearr_33477_33493[(2)] = null);

(statearr_33477_33493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (9))){
var state_33465__$1 = state_33465;
var statearr_33478_33494 = state_33465__$1;
(statearr_33478_33494[(2)] = null);

(statearr_33478_33494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (5))){
var state_33465__$1 = state_33465;
var statearr_33479_33495 = state_33465__$1;
(statearr_33479_33495[(2)] = null);

(statearr_33479_33495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (10))){
var inst_33457 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33480_33496 = state_33465__$1;
(statearr_33480_33496[(2)] = inst_33457);

(statearr_33480_33496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (8))){
var inst_33447 = (state_33465[(7)]);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33465__$1,(11),out,inst_33447);
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
});})(c__32028__auto___33486,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33486,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33481[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33481[(1)] = (1));

return statearr_33481;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33465){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33482){if((e33482 instanceof Object)){
var ex__31944__auto__ = e33482;
var statearr_33483_33497 = state_33465;
(statearr_33483_33497[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33498 = state_33465;
state_33465 = G__33498;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33486,out))
})();
var state__32030__auto__ = (function (){var statearr_33484 = f__32029__auto__.call(null);
(statearr_33484[(6)] = c__32028__auto___33486);

return statearr_33484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33486,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33500 = (function (f,ch,meta33501){
this.f = f;
this.ch = ch;
this.meta33501 = meta33501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33502,meta33501__$1){
var self__ = this;
var _33502__$1 = this;
return (new cljs.core.async.t_cljs$core$async33500(self__.f,self__.ch,meta33501__$1));
});

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33502){
var self__ = this;
var _33502__$1 = this;
return self__.meta33501;
});

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33503 = (function (f,ch,meta33501,_,fn1,meta33504){
this.f = f;
this.ch = ch;
this.meta33501 = meta33501;
this._ = _;
this.fn1 = fn1;
this.meta33504 = meta33504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33505,meta33504__$1){
var self__ = this;
var _33505__$1 = this;
return (new cljs.core.async.t_cljs$core$async33503(self__.f,self__.ch,self__.meta33501,self__._,self__.fn1,meta33504__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33505){
var self__ = this;
var _33505__$1 = this;
return self__.meta33504;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33499_SHARP_){
return f1.call(null,(((p1__33499_SHARP_ == null))?null:self__.f.call(null,p1__33499_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33501","meta33501",1128355470,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33500","cljs.core.async/t_cljs$core$async33500",811122887,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33504","meta33504",927872549,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33503";

cljs.core.async.t_cljs$core$async33503.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33503");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33503 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33503(f__$1,ch__$1,meta33501__$1,___$2,fn1__$1,meta33504){
return (new cljs.core.async.t_cljs$core$async33503(f__$1,ch__$1,meta33501__$1,___$2,fn1__$1,meta33504));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33503(self__.f,self__.ch,self__.meta33501,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33501","meta33501",1128355470,null)], null);
});

cljs.core.async.t_cljs$core$async33500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33500";

cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33500");
});

cljs.core.async.__GT_t_cljs$core$async33500 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33500(f__$1,ch__$1,meta33501){
return (new cljs.core.async.t_cljs$core$async33500(f__$1,ch__$1,meta33501));
});

}

return (new cljs.core.async.t_cljs$core$async33500(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33506 = (function (f,ch,meta33507){
this.f = f;
this.ch = ch;
this.meta33507 = meta33507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33508,meta33507__$1){
var self__ = this;
var _33508__$1 = this;
return (new cljs.core.async.t_cljs$core$async33506(self__.f,self__.ch,meta33507__$1));
});

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33508){
var self__ = this;
var _33508__$1 = this;
return self__.meta33507;
});

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33507","meta33507",1988839480,null)], null);
});

cljs.core.async.t_cljs$core$async33506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33506";

cljs.core.async.t_cljs$core$async33506.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33506");
});

cljs.core.async.__GT_t_cljs$core$async33506 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33506(f__$1,ch__$1,meta33507){
return (new cljs.core.async.t_cljs$core$async33506(f__$1,ch__$1,meta33507));
});

}

return (new cljs.core.async.t_cljs$core$async33506(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33509 = (function (p,ch,meta33510){
this.p = p;
this.ch = ch;
this.meta33510 = meta33510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33511,meta33510__$1){
var self__ = this;
var _33511__$1 = this;
return (new cljs.core.async.t_cljs$core$async33509(self__.p,self__.ch,meta33510__$1));
});

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33511){
var self__ = this;
var _33511__$1 = this;
return self__.meta33510;
});

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33510","meta33510",-736632437,null)], null);
});

cljs.core.async.t_cljs$core$async33509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33509";

cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33509");
});

cljs.core.async.__GT_t_cljs$core$async33509 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33509(p__$1,ch__$1,meta33510){
return (new cljs.core.async.t_cljs$core$async33509(p__$1,ch__$1,meta33510));
});

}

return (new cljs.core.async.t_cljs$core$async33509(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33513 = arguments.length;
switch (G__33513) {
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
var c__32028__auto___33553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33553,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33553,out){
return (function (state_33534){
var state_val_33535 = (state_33534[(1)]);
if((state_val_33535 === (7))){
var inst_33530 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33536_33554 = state_33534__$1;
(statearr_33536_33554[(2)] = inst_33530);

(statearr_33536_33554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (1))){
var state_33534__$1 = state_33534;
var statearr_33537_33555 = state_33534__$1;
(statearr_33537_33555[(2)] = null);

(statearr_33537_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (4))){
var inst_33516 = (state_33534[(7)]);
var inst_33516__$1 = (state_33534[(2)]);
var inst_33517 = (inst_33516__$1 == null);
var state_33534__$1 = (function (){var statearr_33538 = state_33534;
(statearr_33538[(7)] = inst_33516__$1);

return statearr_33538;
})();
if(cljs.core.truth_(inst_33517)){
var statearr_33539_33556 = state_33534__$1;
(statearr_33539_33556[(1)] = (5));

} else {
var statearr_33540_33557 = state_33534__$1;
(statearr_33540_33557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (6))){
var inst_33516 = (state_33534[(7)]);
var inst_33521 = p.call(null,inst_33516);
var state_33534__$1 = state_33534;
if(cljs.core.truth_(inst_33521)){
var statearr_33541_33558 = state_33534__$1;
(statearr_33541_33558[(1)] = (8));

} else {
var statearr_33542_33559 = state_33534__$1;
(statearr_33542_33559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (3))){
var inst_33532 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33534__$1,inst_33532);
} else {
if((state_val_33535 === (2))){
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33534__$1,(4),ch);
} else {
if((state_val_33535 === (11))){
var inst_33524 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33543_33560 = state_33534__$1;
(statearr_33543_33560[(2)] = inst_33524);

(statearr_33543_33560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (9))){
var state_33534__$1 = state_33534;
var statearr_33544_33561 = state_33534__$1;
(statearr_33544_33561[(2)] = null);

(statearr_33544_33561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (5))){
var inst_33519 = cljs.core.async.close_BANG_.call(null,out);
var state_33534__$1 = state_33534;
var statearr_33545_33562 = state_33534__$1;
(statearr_33545_33562[(2)] = inst_33519);

(statearr_33545_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (10))){
var inst_33527 = (state_33534[(2)]);
var state_33534__$1 = (function (){var statearr_33546 = state_33534;
(statearr_33546[(8)] = inst_33527);

return statearr_33546;
})();
var statearr_33547_33563 = state_33534__$1;
(statearr_33547_33563[(2)] = null);

(statearr_33547_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (8))){
var inst_33516 = (state_33534[(7)]);
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33534__$1,(11),out,inst_33516);
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
});})(c__32028__auto___33553,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33553,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33548 = [null,null,null,null,null,null,null,null,null];
(statearr_33548[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33548[(1)] = (1));

return statearr_33548;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33534){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33549){if((e33549 instanceof Object)){
var ex__31944__auto__ = e33549;
var statearr_33550_33564 = state_33534;
(statearr_33550_33564[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33565 = state_33534;
state_33534 = G__33565;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33553,out))
})();
var state__32030__auto__ = (function (){var statearr_33551 = f__32029__auto__.call(null);
(statearr_33551[(6)] = c__32028__auto___33553);

return statearr_33551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33553,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33567 = arguments.length;
switch (G__33567) {
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
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__){
return (function (state_33630){
var state_val_33631 = (state_33630[(1)]);
if((state_val_33631 === (7))){
var inst_33626 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33632_33670 = state_33630__$1;
(statearr_33632_33670[(2)] = inst_33626);

(statearr_33632_33670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (20))){
var inst_33596 = (state_33630[(7)]);
var inst_33607 = (state_33630[(2)]);
var inst_33608 = cljs.core.next.call(null,inst_33596);
var inst_33582 = inst_33608;
var inst_33583 = null;
var inst_33584 = (0);
var inst_33585 = (0);
var state_33630__$1 = (function (){var statearr_33633 = state_33630;
(statearr_33633[(8)] = inst_33583);

(statearr_33633[(9)] = inst_33582);

(statearr_33633[(10)] = inst_33584);

(statearr_33633[(11)] = inst_33585);

(statearr_33633[(12)] = inst_33607);

return statearr_33633;
})();
var statearr_33634_33671 = state_33630__$1;
(statearr_33634_33671[(2)] = null);

(statearr_33634_33671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (1))){
var state_33630__$1 = state_33630;
var statearr_33635_33672 = state_33630__$1;
(statearr_33635_33672[(2)] = null);

(statearr_33635_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (4))){
var inst_33571 = (state_33630[(13)]);
var inst_33571__$1 = (state_33630[(2)]);
var inst_33572 = (inst_33571__$1 == null);
var state_33630__$1 = (function (){var statearr_33636 = state_33630;
(statearr_33636[(13)] = inst_33571__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33572)){
var statearr_33637_33673 = state_33630__$1;
(statearr_33637_33673[(1)] = (5));

} else {
var statearr_33638_33674 = state_33630__$1;
(statearr_33638_33674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (15))){
var state_33630__$1 = state_33630;
var statearr_33642_33675 = state_33630__$1;
(statearr_33642_33675[(2)] = null);

(statearr_33642_33675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (21))){
var state_33630__$1 = state_33630;
var statearr_33643_33676 = state_33630__$1;
(statearr_33643_33676[(2)] = null);

(statearr_33643_33676[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (13))){
var inst_33583 = (state_33630[(8)]);
var inst_33582 = (state_33630[(9)]);
var inst_33584 = (state_33630[(10)]);
var inst_33585 = (state_33630[(11)]);
var inst_33592 = (state_33630[(2)]);
var inst_33593 = (inst_33585 + (1));
var tmp33639 = inst_33583;
var tmp33640 = inst_33582;
var tmp33641 = inst_33584;
var inst_33582__$1 = tmp33640;
var inst_33583__$1 = tmp33639;
var inst_33584__$1 = tmp33641;
var inst_33585__$1 = inst_33593;
var state_33630__$1 = (function (){var statearr_33644 = state_33630;
(statearr_33644[(8)] = inst_33583__$1);

(statearr_33644[(9)] = inst_33582__$1);

(statearr_33644[(10)] = inst_33584__$1);

(statearr_33644[(14)] = inst_33592);

(statearr_33644[(11)] = inst_33585__$1);

return statearr_33644;
})();
var statearr_33645_33677 = state_33630__$1;
(statearr_33645_33677[(2)] = null);

(statearr_33645_33677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (22))){
var state_33630__$1 = state_33630;
var statearr_33646_33678 = state_33630__$1;
(statearr_33646_33678[(2)] = null);

(statearr_33646_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (6))){
var inst_33571 = (state_33630[(13)]);
var inst_33580 = f.call(null,inst_33571);
var inst_33581 = cljs.core.seq.call(null,inst_33580);
var inst_33582 = inst_33581;
var inst_33583 = null;
var inst_33584 = (0);
var inst_33585 = (0);
var state_33630__$1 = (function (){var statearr_33647 = state_33630;
(statearr_33647[(8)] = inst_33583);

(statearr_33647[(9)] = inst_33582);

(statearr_33647[(10)] = inst_33584);

(statearr_33647[(11)] = inst_33585);

return statearr_33647;
})();
var statearr_33648_33679 = state_33630__$1;
(statearr_33648_33679[(2)] = null);

(statearr_33648_33679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (17))){
var inst_33596 = (state_33630[(7)]);
var inst_33600 = cljs.core.chunk_first.call(null,inst_33596);
var inst_33601 = cljs.core.chunk_rest.call(null,inst_33596);
var inst_33602 = cljs.core.count.call(null,inst_33600);
var inst_33582 = inst_33601;
var inst_33583 = inst_33600;
var inst_33584 = inst_33602;
var inst_33585 = (0);
var state_33630__$1 = (function (){var statearr_33649 = state_33630;
(statearr_33649[(8)] = inst_33583);

(statearr_33649[(9)] = inst_33582);

(statearr_33649[(10)] = inst_33584);

(statearr_33649[(11)] = inst_33585);

return statearr_33649;
})();
var statearr_33650_33680 = state_33630__$1;
(statearr_33650_33680[(2)] = null);

(statearr_33650_33680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (3))){
var inst_33628 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33630__$1,inst_33628);
} else {
if((state_val_33631 === (12))){
var inst_33616 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33651_33681 = state_33630__$1;
(statearr_33651_33681[(2)] = inst_33616);

(statearr_33651_33681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (2))){
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33630__$1,(4),in$);
} else {
if((state_val_33631 === (23))){
var inst_33624 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33652_33682 = state_33630__$1;
(statearr_33652_33682[(2)] = inst_33624);

(statearr_33652_33682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (19))){
var inst_33611 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33653_33683 = state_33630__$1;
(statearr_33653_33683[(2)] = inst_33611);

(statearr_33653_33683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (11))){
var inst_33596 = (state_33630[(7)]);
var inst_33582 = (state_33630[(9)]);
var inst_33596__$1 = cljs.core.seq.call(null,inst_33582);
var state_33630__$1 = (function (){var statearr_33654 = state_33630;
(statearr_33654[(7)] = inst_33596__$1);

return statearr_33654;
})();
if(inst_33596__$1){
var statearr_33655_33684 = state_33630__$1;
(statearr_33655_33684[(1)] = (14));

} else {
var statearr_33656_33685 = state_33630__$1;
(statearr_33656_33685[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (9))){
var inst_33618 = (state_33630[(2)]);
var inst_33619 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33630__$1 = (function (){var statearr_33657 = state_33630;
(statearr_33657[(15)] = inst_33618);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33619)){
var statearr_33658_33686 = state_33630__$1;
(statearr_33658_33686[(1)] = (21));

} else {
var statearr_33659_33687 = state_33630__$1;
(statearr_33659_33687[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (5))){
var inst_33574 = cljs.core.async.close_BANG_.call(null,out);
var state_33630__$1 = state_33630;
var statearr_33660_33688 = state_33630__$1;
(statearr_33660_33688[(2)] = inst_33574);

(statearr_33660_33688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (14))){
var inst_33596 = (state_33630[(7)]);
var inst_33598 = cljs.core.chunked_seq_QMARK_.call(null,inst_33596);
var state_33630__$1 = state_33630;
if(inst_33598){
var statearr_33661_33689 = state_33630__$1;
(statearr_33661_33689[(1)] = (17));

} else {
var statearr_33662_33690 = state_33630__$1;
(statearr_33662_33690[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (16))){
var inst_33614 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33663_33691 = state_33630__$1;
(statearr_33663_33691[(2)] = inst_33614);

(statearr_33663_33691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (10))){
var inst_33583 = (state_33630[(8)]);
var inst_33585 = (state_33630[(11)]);
var inst_33590 = cljs.core._nth.call(null,inst_33583,inst_33585);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33630__$1,(13),out,inst_33590);
} else {
if((state_val_33631 === (18))){
var inst_33596 = (state_33630[(7)]);
var inst_33605 = cljs.core.first.call(null,inst_33596);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33630__$1,(20),out,inst_33605);
} else {
if((state_val_33631 === (8))){
var inst_33584 = (state_33630[(10)]);
var inst_33585 = (state_33630[(11)]);
var inst_33587 = (inst_33585 < inst_33584);
var inst_33588 = inst_33587;
var state_33630__$1 = state_33630;
if(cljs.core.truth_(inst_33588)){
var statearr_33664_33692 = state_33630__$1;
(statearr_33664_33692[(1)] = (10));

} else {
var statearr_33665_33693 = state_33630__$1;
(statearr_33665_33693[(1)] = (11));

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
});})(c__32028__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____0 = (function (){
var statearr_33666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33666[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__);

(statearr_33666[(1)] = (1));

return statearr_33666;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____1 = (function (state_33630){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33667){if((e33667 instanceof Object)){
var ex__31944__auto__ = e33667;
var statearr_33668_33694 = state_33630;
(statearr_33668_33694[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33695 = state_33630;
state_33630 = G__33695;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__ = function(state_33630){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____1.call(this,state_33630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31941__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__))
})();
var state__32030__auto__ = (function (){var statearr_33669 = f__32029__auto__.call(null);
(statearr_33669[(6)] = c__32028__auto__);

return statearr_33669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__))
);

return c__32028__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33697 = arguments.length;
switch (G__33697) {
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
var G__33700 = arguments.length;
switch (G__33700) {
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
var G__33703 = arguments.length;
switch (G__33703) {
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
var c__32028__auto___33750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33750,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33750,out){
return (function (state_33727){
var state_val_33728 = (state_33727[(1)]);
if((state_val_33728 === (7))){
var inst_33722 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33729_33751 = state_33727__$1;
(statearr_33729_33751[(2)] = inst_33722);

(statearr_33729_33751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (1))){
var inst_33704 = null;
var state_33727__$1 = (function (){var statearr_33730 = state_33727;
(statearr_33730[(7)] = inst_33704);

return statearr_33730;
})();
var statearr_33731_33752 = state_33727__$1;
(statearr_33731_33752[(2)] = null);

(statearr_33731_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (4))){
var inst_33707 = (state_33727[(8)]);
var inst_33707__$1 = (state_33727[(2)]);
var inst_33708 = (inst_33707__$1 == null);
var inst_33709 = cljs.core.not.call(null,inst_33708);
var state_33727__$1 = (function (){var statearr_33732 = state_33727;
(statearr_33732[(8)] = inst_33707__$1);

return statearr_33732;
})();
if(inst_33709){
var statearr_33733_33753 = state_33727__$1;
(statearr_33733_33753[(1)] = (5));

} else {
var statearr_33734_33754 = state_33727__$1;
(statearr_33734_33754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (6))){
var state_33727__$1 = state_33727;
var statearr_33735_33755 = state_33727__$1;
(statearr_33735_33755[(2)] = null);

(statearr_33735_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (3))){
var inst_33724 = (state_33727[(2)]);
var inst_33725 = cljs.core.async.close_BANG_.call(null,out);
var state_33727__$1 = (function (){var statearr_33736 = state_33727;
(statearr_33736[(9)] = inst_33724);

return statearr_33736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33727__$1,inst_33725);
} else {
if((state_val_33728 === (2))){
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33727__$1,(4),ch);
} else {
if((state_val_33728 === (11))){
var inst_33707 = (state_33727[(8)]);
var inst_33716 = (state_33727[(2)]);
var inst_33704 = inst_33707;
var state_33727__$1 = (function (){var statearr_33737 = state_33727;
(statearr_33737[(7)] = inst_33704);

(statearr_33737[(10)] = inst_33716);

return statearr_33737;
})();
var statearr_33738_33756 = state_33727__$1;
(statearr_33738_33756[(2)] = null);

(statearr_33738_33756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (9))){
var inst_33707 = (state_33727[(8)]);
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33727__$1,(11),out,inst_33707);
} else {
if((state_val_33728 === (5))){
var inst_33704 = (state_33727[(7)]);
var inst_33707 = (state_33727[(8)]);
var inst_33711 = cljs.core._EQ_.call(null,inst_33707,inst_33704);
var state_33727__$1 = state_33727;
if(inst_33711){
var statearr_33740_33757 = state_33727__$1;
(statearr_33740_33757[(1)] = (8));

} else {
var statearr_33741_33758 = state_33727__$1;
(statearr_33741_33758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (10))){
var inst_33719 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33742_33759 = state_33727__$1;
(statearr_33742_33759[(2)] = inst_33719);

(statearr_33742_33759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (8))){
var inst_33704 = (state_33727[(7)]);
var tmp33739 = inst_33704;
var inst_33704__$1 = tmp33739;
var state_33727__$1 = (function (){var statearr_33743 = state_33727;
(statearr_33743[(7)] = inst_33704__$1);

return statearr_33743;
})();
var statearr_33744_33760 = state_33727__$1;
(statearr_33744_33760[(2)] = null);

(statearr_33744_33760[(1)] = (2));


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
});})(c__32028__auto___33750,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33750,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33727){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object)){
var ex__31944__auto__ = e33746;
var statearr_33747_33761 = state_33727;
(statearr_33747_33761[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_33727;
state_33727 = G__33762;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33750,out))
})();
var state__32030__auto__ = (function (){var statearr_33748 = f__32029__auto__.call(null);
(statearr_33748[(6)] = c__32028__auto___33750);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33750,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33764 = arguments.length;
switch (G__33764) {
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
var c__32028__auto___33830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33830,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33830,out){
return (function (state_33802){
var state_val_33803 = (state_33802[(1)]);
if((state_val_33803 === (7))){
var inst_33798 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33804_33831 = state_33802__$1;
(statearr_33804_33831[(2)] = inst_33798);

(statearr_33804_33831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (1))){
var inst_33765 = (new Array(n));
var inst_33766 = inst_33765;
var inst_33767 = (0);
var state_33802__$1 = (function (){var statearr_33805 = state_33802;
(statearr_33805[(7)] = inst_33767);

(statearr_33805[(8)] = inst_33766);

return statearr_33805;
})();
var statearr_33806_33832 = state_33802__$1;
(statearr_33806_33832[(2)] = null);

(statearr_33806_33832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (4))){
var inst_33770 = (state_33802[(9)]);
var inst_33770__$1 = (state_33802[(2)]);
var inst_33771 = (inst_33770__$1 == null);
var inst_33772 = cljs.core.not.call(null,inst_33771);
var state_33802__$1 = (function (){var statearr_33807 = state_33802;
(statearr_33807[(9)] = inst_33770__$1);

return statearr_33807;
})();
if(inst_33772){
var statearr_33808_33833 = state_33802__$1;
(statearr_33808_33833[(1)] = (5));

} else {
var statearr_33809_33834 = state_33802__$1;
(statearr_33809_33834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (15))){
var inst_33792 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33810_33835 = state_33802__$1;
(statearr_33810_33835[(2)] = inst_33792);

(statearr_33810_33835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (13))){
var state_33802__$1 = state_33802;
var statearr_33811_33836 = state_33802__$1;
(statearr_33811_33836[(2)] = null);

(statearr_33811_33836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (6))){
var inst_33767 = (state_33802[(7)]);
var inst_33788 = (inst_33767 > (0));
var state_33802__$1 = state_33802;
if(cljs.core.truth_(inst_33788)){
var statearr_33812_33837 = state_33802__$1;
(statearr_33812_33837[(1)] = (12));

} else {
var statearr_33813_33838 = state_33802__$1;
(statearr_33813_33838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (3))){
var inst_33800 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33802__$1,inst_33800);
} else {
if((state_val_33803 === (12))){
var inst_33766 = (state_33802[(8)]);
var inst_33790 = cljs.core.vec.call(null,inst_33766);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33802__$1,(15),out,inst_33790);
} else {
if((state_val_33803 === (2))){
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33802__$1,(4),ch);
} else {
if((state_val_33803 === (11))){
var inst_33782 = (state_33802[(2)]);
var inst_33783 = (new Array(n));
var inst_33766 = inst_33783;
var inst_33767 = (0);
var state_33802__$1 = (function (){var statearr_33814 = state_33802;
(statearr_33814[(10)] = inst_33782);

(statearr_33814[(7)] = inst_33767);

(statearr_33814[(8)] = inst_33766);

return statearr_33814;
})();
var statearr_33815_33839 = state_33802__$1;
(statearr_33815_33839[(2)] = null);

(statearr_33815_33839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (9))){
var inst_33766 = (state_33802[(8)]);
var inst_33780 = cljs.core.vec.call(null,inst_33766);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33802__$1,(11),out,inst_33780);
} else {
if((state_val_33803 === (5))){
var inst_33775 = (state_33802[(11)]);
var inst_33770 = (state_33802[(9)]);
var inst_33767 = (state_33802[(7)]);
var inst_33766 = (state_33802[(8)]);
var inst_33774 = (inst_33766[inst_33767] = inst_33770);
var inst_33775__$1 = (inst_33767 + (1));
var inst_33776 = (inst_33775__$1 < n);
var state_33802__$1 = (function (){var statearr_33816 = state_33802;
(statearr_33816[(11)] = inst_33775__$1);

(statearr_33816[(12)] = inst_33774);

return statearr_33816;
})();
if(cljs.core.truth_(inst_33776)){
var statearr_33817_33840 = state_33802__$1;
(statearr_33817_33840[(1)] = (8));

} else {
var statearr_33818_33841 = state_33802__$1;
(statearr_33818_33841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (14))){
var inst_33795 = (state_33802[(2)]);
var inst_33796 = cljs.core.async.close_BANG_.call(null,out);
var state_33802__$1 = (function (){var statearr_33820 = state_33802;
(statearr_33820[(13)] = inst_33795);

return statearr_33820;
})();
var statearr_33821_33842 = state_33802__$1;
(statearr_33821_33842[(2)] = inst_33796);

(statearr_33821_33842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (10))){
var inst_33786 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33822_33843 = state_33802__$1;
(statearr_33822_33843[(2)] = inst_33786);

(statearr_33822_33843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (8))){
var inst_33775 = (state_33802[(11)]);
var inst_33766 = (state_33802[(8)]);
var tmp33819 = inst_33766;
var inst_33766__$1 = tmp33819;
var inst_33767 = inst_33775;
var state_33802__$1 = (function (){var statearr_33823 = state_33802;
(statearr_33823[(7)] = inst_33767);

(statearr_33823[(8)] = inst_33766__$1);

return statearr_33823;
})();
var statearr_33824_33844 = state_33802__$1;
(statearr_33824_33844[(2)] = null);

(statearr_33824_33844[(1)] = (2));


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
});})(c__32028__auto___33830,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33830,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33825[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33802){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33826){if((e33826 instanceof Object)){
var ex__31944__auto__ = e33826;
var statearr_33827_33845 = state_33802;
(statearr_33827_33845[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33846 = state_33802;
state_33802 = G__33846;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33830,out))
})();
var state__32030__auto__ = (function (){var statearr_33828 = f__32029__auto__.call(null);
(statearr_33828[(6)] = c__32028__auto___33830);

return statearr_33828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33830,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33848 = arguments.length;
switch (G__33848) {
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
var c__32028__auto___33918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___33918,out){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___33918,out){
return (function (state_33890){
var state_val_33891 = (state_33890[(1)]);
if((state_val_33891 === (7))){
var inst_33886 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33892_33919 = state_33890__$1;
(statearr_33892_33919[(2)] = inst_33886);

(statearr_33892_33919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (1))){
var inst_33849 = [];
var inst_33850 = inst_33849;
var inst_33851 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33890__$1 = (function (){var statearr_33893 = state_33890;
(statearr_33893[(7)] = inst_33851);

(statearr_33893[(8)] = inst_33850);

return statearr_33893;
})();
var statearr_33894_33920 = state_33890__$1;
(statearr_33894_33920[(2)] = null);

(statearr_33894_33920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (4))){
var inst_33854 = (state_33890[(9)]);
var inst_33854__$1 = (state_33890[(2)]);
var inst_33855 = (inst_33854__$1 == null);
var inst_33856 = cljs.core.not.call(null,inst_33855);
var state_33890__$1 = (function (){var statearr_33895 = state_33890;
(statearr_33895[(9)] = inst_33854__$1);

return statearr_33895;
})();
if(inst_33856){
var statearr_33896_33921 = state_33890__$1;
(statearr_33896_33921[(1)] = (5));

} else {
var statearr_33897_33922 = state_33890__$1;
(statearr_33897_33922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (15))){
var inst_33880 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33898_33923 = state_33890__$1;
(statearr_33898_33923[(2)] = inst_33880);

(statearr_33898_33923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (13))){
var state_33890__$1 = state_33890;
var statearr_33899_33924 = state_33890__$1;
(statearr_33899_33924[(2)] = null);

(statearr_33899_33924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (6))){
var inst_33850 = (state_33890[(8)]);
var inst_33875 = inst_33850.length;
var inst_33876 = (inst_33875 > (0));
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33876)){
var statearr_33900_33925 = state_33890__$1;
(statearr_33900_33925[(1)] = (12));

} else {
var statearr_33901_33926 = state_33890__$1;
(statearr_33901_33926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (3))){
var inst_33888 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33890__$1,inst_33888);
} else {
if((state_val_33891 === (12))){
var inst_33850 = (state_33890[(8)]);
var inst_33878 = cljs.core.vec.call(null,inst_33850);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33890__$1,(15),out,inst_33878);
} else {
if((state_val_33891 === (2))){
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33890__$1,(4),ch);
} else {
if((state_val_33891 === (11))){
var inst_33858 = (state_33890[(10)]);
var inst_33854 = (state_33890[(9)]);
var inst_33868 = (state_33890[(2)]);
var inst_33869 = [];
var inst_33870 = inst_33869.push(inst_33854);
var inst_33850 = inst_33869;
var inst_33851 = inst_33858;
var state_33890__$1 = (function (){var statearr_33902 = state_33890;
(statearr_33902[(7)] = inst_33851);

(statearr_33902[(8)] = inst_33850);

(statearr_33902[(11)] = inst_33868);

(statearr_33902[(12)] = inst_33870);

return statearr_33902;
})();
var statearr_33903_33927 = state_33890__$1;
(statearr_33903_33927[(2)] = null);

(statearr_33903_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (9))){
var inst_33850 = (state_33890[(8)]);
var inst_33866 = cljs.core.vec.call(null,inst_33850);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33890__$1,(11),out,inst_33866);
} else {
if((state_val_33891 === (5))){
var inst_33858 = (state_33890[(10)]);
var inst_33851 = (state_33890[(7)]);
var inst_33854 = (state_33890[(9)]);
var inst_33858__$1 = f.call(null,inst_33854);
var inst_33859 = cljs.core._EQ_.call(null,inst_33858__$1,inst_33851);
var inst_33860 = cljs.core.keyword_identical_QMARK_.call(null,inst_33851,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33861 = (inst_33859) || (inst_33860);
var state_33890__$1 = (function (){var statearr_33904 = state_33890;
(statearr_33904[(10)] = inst_33858__$1);

return statearr_33904;
})();
if(cljs.core.truth_(inst_33861)){
var statearr_33905_33928 = state_33890__$1;
(statearr_33905_33928[(1)] = (8));

} else {
var statearr_33906_33929 = state_33890__$1;
(statearr_33906_33929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (14))){
var inst_33883 = (state_33890[(2)]);
var inst_33884 = cljs.core.async.close_BANG_.call(null,out);
var state_33890__$1 = (function (){var statearr_33908 = state_33890;
(statearr_33908[(13)] = inst_33883);

return statearr_33908;
})();
var statearr_33909_33930 = state_33890__$1;
(statearr_33909_33930[(2)] = inst_33884);

(statearr_33909_33930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (10))){
var inst_33873 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33910_33931 = state_33890__$1;
(statearr_33910_33931[(2)] = inst_33873);

(statearr_33910_33931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (8))){
var inst_33858 = (state_33890[(10)]);
var inst_33850 = (state_33890[(8)]);
var inst_33854 = (state_33890[(9)]);
var inst_33863 = inst_33850.push(inst_33854);
var tmp33907 = inst_33850;
var inst_33850__$1 = tmp33907;
var inst_33851 = inst_33858;
var state_33890__$1 = (function (){var statearr_33911 = state_33890;
(statearr_33911[(7)] = inst_33851);

(statearr_33911[(8)] = inst_33850__$1);

(statearr_33911[(14)] = inst_33863);

return statearr_33911;
})();
var statearr_33912_33932 = state_33890__$1;
(statearr_33912_33932[(2)] = null);

(statearr_33912_33932[(1)] = (2));


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
});})(c__32028__auto___33918,out))
;
return ((function (switch__31940__auto__,c__32028__auto___33918,out){
return (function() {
var cljs$core$async$state_machine__31941__auto__ = null;
var cljs$core$async$state_machine__31941__auto____0 = (function (){
var statearr_33913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33913[(0)] = cljs$core$async$state_machine__31941__auto__);

(statearr_33913[(1)] = (1));

return statearr_33913;
});
var cljs$core$async$state_machine__31941__auto____1 = (function (state_33890){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_33890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e33914){if((e33914 instanceof Object)){
var ex__31944__auto__ = e33914;
var statearr_33915_33933 = state_33890;
(statearr_33915_33933[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33934 = state_33890;
state_33890 = G__33934;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
cljs$core$async$state_machine__31941__auto__ = function(state_33890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31941__auto____1.call(this,state_33890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31941__auto____0;
cljs$core$async$state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31941__auto____1;
return cljs$core$async$state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___33918,out))
})();
var state__32030__auto__ = (function (){var statearr_33916 = f__32029__auto__.call(null);
(statearr_33916[(6)] = c__32028__auto___33918);

return statearr_33916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___33918,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1508696621351
