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
var G__32611 = arguments.length;
switch (G__32611) {
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
if(typeof cljs.core.async.t_cljs$core$async32612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32612 = (function (f,blockable,meta32613){
this.f = f;
this.blockable = blockable;
this.meta32613 = meta32613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32614,meta32613__$1){
var self__ = this;
var _32614__$1 = this;
return (new cljs.core.async.t_cljs$core$async32612(self__.f,self__.blockable,meta32613__$1));
});

cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32614){
var self__ = this;
var _32614__$1 = this;
return self__.meta32613;
});

cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32613","meta32613",-134700374,null)], null);
});

cljs.core.async.t_cljs$core$async32612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32612";

cljs.core.async.t_cljs$core$async32612.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32612");
});

cljs.core.async.__GT_t_cljs$core$async32612 = (function cljs$core$async$__GT_t_cljs$core$async32612(f__$1,blockable__$1,meta32613){
return (new cljs.core.async.t_cljs$core$async32612(f__$1,blockable__$1,meta32613));
});

}

return (new cljs.core.async.t_cljs$core$async32612(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32618 = arguments.length;
switch (G__32618) {
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
var G__32621 = arguments.length;
switch (G__32621) {
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
var G__32624 = arguments.length;
switch (G__32624) {
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
var val_32626 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32626);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32626,ret){
return (function (){
return fn1.call(null,val_32626);
});})(val_32626,ret))
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
var G__32628 = arguments.length;
switch (G__32628) {
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
var n__29231__auto___32630 = n;
var x_32631 = (0);
while(true){
if((x_32631 < n__29231__auto___32630)){
(a[x_32631] = (0));

var G__32632 = (x_32631 + (1));
x_32631 = G__32632;
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

var G__32633 = (i + (1));
i = G__32633;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32634 = (function (flag,meta32635){
this.flag = flag;
this.meta32635 = meta32635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32636,meta32635__$1){
var self__ = this;
var _32636__$1 = this;
return (new cljs.core.async.t_cljs$core$async32634(self__.flag,meta32635__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32636){
var self__ = this;
var _32636__$1 = this;
return self__.meta32635;
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32635","meta32635",-1420870163,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32634";

cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32634");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32634 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32634(flag__$1,meta32635){
return (new cljs.core.async.t_cljs$core$async32634(flag__$1,meta32635));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32634(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32637 = (function (flag,cb,meta32638){
this.flag = flag;
this.cb = cb;
this.meta32638 = meta32638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32639,meta32638__$1){
var self__ = this;
var _32639__$1 = this;
return (new cljs.core.async.t_cljs$core$async32637(self__.flag,self__.cb,meta32638__$1));
});

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32639){
var self__ = this;
var _32639__$1 = this;
return self__.meta32638;
});

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32638","meta32638",-1033984365,null)], null);
});

cljs.core.async.t_cljs$core$async32637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32637";

cljs.core.async.t_cljs$core$async32637.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32637");
});

cljs.core.async.__GT_t_cljs$core$async32637 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32637(flag__$1,cb__$1,meta32638){
return (new cljs.core.async.t_cljs$core$async32637(flag__$1,cb__$1,meta32638));
});

}

return (new cljs.core.async.t_cljs$core$async32637(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32640_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32640_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32641_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32641_SHARP_,port], null));
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
var G__32642 = (i + (1));
i = G__32642;
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
var len__29455__auto___32648 = arguments.length;
var i__29456__auto___32649 = (0);
while(true){
if((i__29456__auto___32649 < len__29455__auto___32648)){
args__29462__auto__.push((arguments[i__29456__auto___32649]));

var G__32650 = (i__29456__auto___32649 + (1));
i__29456__auto___32649 = G__32650;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32645){
var map__32646 = p__32645;
var map__32646__$1 = ((((!((map__32646 == null)))?((((map__32646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32646):map__32646);
var opts = map__32646__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32643){
var G__32644 = cljs.core.first.call(null,seq32643);
var seq32643__$1 = cljs.core.next.call(null,seq32643);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32644,seq32643__$1);
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
var G__32652 = arguments.length;
switch (G__32652) {
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
var c__32565__auto___32698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___32698){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___32698){
return (function (state_32676){
var state_val_32677 = (state_32676[(1)]);
if((state_val_32677 === (7))){
var inst_32672 = (state_32676[(2)]);
var state_32676__$1 = state_32676;
var statearr_32678_32699 = state_32676__$1;
(statearr_32678_32699[(2)] = inst_32672);

(statearr_32678_32699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (1))){
var state_32676__$1 = state_32676;
var statearr_32679_32700 = state_32676__$1;
(statearr_32679_32700[(2)] = null);

(statearr_32679_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (4))){
var inst_32655 = (state_32676[(7)]);
var inst_32655__$1 = (state_32676[(2)]);
var inst_32656 = (inst_32655__$1 == null);
var state_32676__$1 = (function (){var statearr_32680 = state_32676;
(statearr_32680[(7)] = inst_32655__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32656)){
var statearr_32681_32701 = state_32676__$1;
(statearr_32681_32701[(1)] = (5));

} else {
var statearr_32682_32702 = state_32676__$1;
(statearr_32682_32702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (13))){
var state_32676__$1 = state_32676;
var statearr_32683_32703 = state_32676__$1;
(statearr_32683_32703[(2)] = null);

(statearr_32683_32703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (6))){
var inst_32655 = (state_32676[(7)]);
var state_32676__$1 = state_32676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32676__$1,(11),to,inst_32655);
} else {
if((state_val_32677 === (3))){
var inst_32674 = (state_32676[(2)]);
var state_32676__$1 = state_32676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32676__$1,inst_32674);
} else {
if((state_val_32677 === (12))){
var state_32676__$1 = state_32676;
var statearr_32684_32704 = state_32676__$1;
(statearr_32684_32704[(2)] = null);

(statearr_32684_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (2))){
var state_32676__$1 = state_32676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32676__$1,(4),from);
} else {
if((state_val_32677 === (11))){
var inst_32665 = (state_32676[(2)]);
var state_32676__$1 = state_32676;
if(cljs.core.truth_(inst_32665)){
var statearr_32685_32705 = state_32676__$1;
(statearr_32685_32705[(1)] = (12));

} else {
var statearr_32686_32706 = state_32676__$1;
(statearr_32686_32706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (9))){
var state_32676__$1 = state_32676;
var statearr_32687_32707 = state_32676__$1;
(statearr_32687_32707[(2)] = null);

(statearr_32687_32707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (5))){
var state_32676__$1 = state_32676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32688_32708 = state_32676__$1;
(statearr_32688_32708[(1)] = (8));

} else {
var statearr_32689_32709 = state_32676__$1;
(statearr_32689_32709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (14))){
var inst_32670 = (state_32676[(2)]);
var state_32676__$1 = state_32676;
var statearr_32690_32710 = state_32676__$1;
(statearr_32690_32710[(2)] = inst_32670);

(statearr_32690_32710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (10))){
var inst_32662 = (state_32676[(2)]);
var state_32676__$1 = state_32676;
var statearr_32691_32711 = state_32676__$1;
(statearr_32691_32711[(2)] = inst_32662);

(statearr_32691_32711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32677 === (8))){
var inst_32659 = cljs.core.async.close_BANG_.call(null,to);
var state_32676__$1 = state_32676;
var statearr_32692_32712 = state_32676__$1;
(statearr_32692_32712[(2)] = inst_32659);

(statearr_32692_32712[(1)] = (10));


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
});})(c__32565__auto___32698))
;
return ((function (switch__32477__auto__,c__32565__auto___32698){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_32693 = [null,null,null,null,null,null,null,null];
(statearr_32693[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_32693[(1)] = (1));

return statearr_32693;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_32676){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32694){if((e32694 instanceof Object)){
var ex__32481__auto__ = e32694;
var statearr_32695_32713 = state_32676;
(statearr_32695_32713[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32714 = state_32676;
state_32676 = G__32714;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_32676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_32676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___32698))
})();
var state__32567__auto__ = (function (){var statearr_32696 = f__32566__auto__.call(null);
(statearr_32696[(6)] = c__32565__auto___32698);

return statearr_32696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___32698))
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
return (function (p__32715){
var vec__32716 = p__32715;
var v = cljs.core.nth.call(null,vec__32716,(0),null);
var p = cljs.core.nth.call(null,vec__32716,(1),null);
var job = vec__32716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32565__auto___32887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results){
return (function (state_32723){
var state_val_32724 = (state_32723[(1)]);
if((state_val_32724 === (1))){
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32723__$1,(2),res,v);
} else {
if((state_val_32724 === (2))){
var inst_32720 = (state_32723[(2)]);
var inst_32721 = cljs.core.async.close_BANG_.call(null,res);
var state_32723__$1 = (function (){var statearr_32725 = state_32723;
(statearr_32725[(7)] = inst_32720);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32723__$1,inst_32721);
} else {
return null;
}
}
});})(c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results))
;
return ((function (switch__32477__auto__,c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_32726 = [null,null,null,null,null,null,null,null];
(statearr_32726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__);

(statearr_32726[(1)] = (1));

return statearr_32726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1 = (function (state_32723){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32727){if((e32727 instanceof Object)){
var ex__32481__auto__ = e32727;
var statearr_32728_32888 = state_32723;
(statearr_32728_32888[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32723;
state_32723 = G__32889;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = function(state_32723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1.call(this,state_32723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results))
})();
var state__32567__auto__ = (function (){var statearr_32729 = f__32566__auto__.call(null);
(statearr_32729[(6)] = c__32565__auto___32887);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___32887,res,vec__32716,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32730){
var vec__32731 = p__32730;
var v = cljs.core.nth.call(null,vec__32731,(0),null);
var p = cljs.core.nth.call(null,vec__32731,(1),null);
var job = vec__32731;
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
var n__29231__auto___32890 = n;
var __32891 = (0);
while(true){
if((__32891 < n__29231__auto___32890)){
var G__32734_32892 = type;
var G__32734_32893__$1 = (((G__32734_32892 instanceof cljs.core.Keyword))?G__32734_32892.fqn:null);
switch (G__32734_32893__$1) {
case "compute":
var c__32565__auto___32895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32891,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (__32891,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function (state_32747){
var state_val_32748 = (state_32747[(1)]);
if((state_val_32748 === (1))){
var state_32747__$1 = state_32747;
var statearr_32749_32896 = state_32747__$1;
(statearr_32749_32896[(2)] = null);

(statearr_32749_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (2))){
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32747__$1,(4),jobs);
} else {
if((state_val_32748 === (3))){
var inst_32745 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32747__$1,inst_32745);
} else {
if((state_val_32748 === (4))){
var inst_32737 = (state_32747[(2)]);
var inst_32738 = process.call(null,inst_32737);
var state_32747__$1 = state_32747;
if(cljs.core.truth_(inst_32738)){
var statearr_32750_32897 = state_32747__$1;
(statearr_32750_32897[(1)] = (5));

} else {
var statearr_32751_32898 = state_32747__$1;
(statearr_32751_32898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (5))){
var state_32747__$1 = state_32747;
var statearr_32752_32899 = state_32747__$1;
(statearr_32752_32899[(2)] = null);

(statearr_32752_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (6))){
var state_32747__$1 = state_32747;
var statearr_32753_32900 = state_32747__$1;
(statearr_32753_32900[(2)] = null);

(statearr_32753_32900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (7))){
var inst_32743 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
var statearr_32754_32901 = state_32747__$1;
(statearr_32754_32901[(2)] = inst_32743);

(statearr_32754_32901[(1)] = (3));


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
});})(__32891,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
;
return ((function (__32891,switch__32477__auto__,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_32755 = [null,null,null,null,null,null,null];
(statearr_32755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__);

(statearr_32755[(1)] = (1));

return statearr_32755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1 = (function (state_32747){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32756){if((e32756 instanceof Object)){
var ex__32481__auto__ = e32756;
var statearr_32757_32902 = state_32747;
(statearr_32757_32902[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32903 = state_32747;
state_32747 = G__32903;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = function(state_32747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1.call(this,state_32747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__;
})()
;})(__32891,switch__32477__auto__,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
})();
var state__32567__auto__ = (function (){var statearr_32758 = f__32566__auto__.call(null);
(statearr_32758[(6)] = c__32565__auto___32895);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(__32891,c__32565__auto___32895,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
);


break;
case "async":
var c__32565__auto___32904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32891,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (__32891,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function (state_32771){
var state_val_32772 = (state_32771[(1)]);
if((state_val_32772 === (1))){
var state_32771__$1 = state_32771;
var statearr_32773_32905 = state_32771__$1;
(statearr_32773_32905[(2)] = null);

(statearr_32773_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (2))){
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32771__$1,(4),jobs);
} else {
if((state_val_32772 === (3))){
var inst_32769 = (state_32771[(2)]);
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32771__$1,inst_32769);
} else {
if((state_val_32772 === (4))){
var inst_32761 = (state_32771[(2)]);
var inst_32762 = async.call(null,inst_32761);
var state_32771__$1 = state_32771;
if(cljs.core.truth_(inst_32762)){
var statearr_32774_32906 = state_32771__$1;
(statearr_32774_32906[(1)] = (5));

} else {
var statearr_32775_32907 = state_32771__$1;
(statearr_32775_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (5))){
var state_32771__$1 = state_32771;
var statearr_32776_32908 = state_32771__$1;
(statearr_32776_32908[(2)] = null);

(statearr_32776_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (6))){
var state_32771__$1 = state_32771;
var statearr_32777_32909 = state_32771__$1;
(statearr_32777_32909[(2)] = null);

(statearr_32777_32909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32772 === (7))){
var inst_32767 = (state_32771[(2)]);
var state_32771__$1 = state_32771;
var statearr_32778_32910 = state_32771__$1;
(statearr_32778_32910[(2)] = inst_32767);

(statearr_32778_32910[(1)] = (3));


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
});})(__32891,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
;
return ((function (__32891,switch__32477__auto__,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_32779 = [null,null,null,null,null,null,null];
(statearr_32779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__);

(statearr_32779[(1)] = (1));

return statearr_32779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1 = (function (state_32771){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32780){if((e32780 instanceof Object)){
var ex__32481__auto__ = e32780;
var statearr_32781_32911 = state_32771;
(statearr_32781_32911[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_32771;
state_32771 = G__32912;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = function(state_32771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1.call(this,state_32771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__;
})()
;})(__32891,switch__32477__auto__,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
})();
var state__32567__auto__ = (function (){var statearr_32782 = f__32566__auto__.call(null);
(statearr_32782[(6)] = c__32565__auto___32904);

return statearr_32782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(__32891,c__32565__auto___32904,G__32734_32892,G__32734_32893__$1,n__29231__auto___32890,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32734_32893__$1)].join('')));

}

var G__32913 = (__32891 + (1));
__32891 = G__32913;
continue;
} else {
}
break;
}

var c__32565__auto___32914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___32914,jobs,results,process,async){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___32914,jobs,results,process,async){
return (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32806_32915 = state_32804__$1;
(statearr_32806_32915[(2)] = null);

(statearr_32806_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32804__$1,(4),from);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (4))){
var inst_32785 = (state_32804[(7)]);
var inst_32785__$1 = (state_32804[(2)]);
var inst_32786 = (inst_32785__$1 == null);
var state_32804__$1 = (function (){var statearr_32807 = state_32804;
(statearr_32807[(7)] = inst_32785__$1);

return statearr_32807;
})();
if(cljs.core.truth_(inst_32786)){
var statearr_32808_32916 = state_32804__$1;
(statearr_32808_32916[(1)] = (5));

} else {
var statearr_32809_32917 = state_32804__$1;
(statearr_32809_32917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var inst_32788 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32804__$1 = state_32804;
var statearr_32810_32918 = state_32804__$1;
(statearr_32810_32918[(2)] = inst_32788);

(statearr_32810_32918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32790 = (state_32804[(8)]);
var inst_32785 = (state_32804[(7)]);
var inst_32790__$1 = cljs.core.async.chan.call(null,(1));
var inst_32791 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32792 = [inst_32785,inst_32790__$1];
var inst_32793 = (new cljs.core.PersistentVector(null,2,(5),inst_32791,inst_32792,null));
var state_32804__$1 = (function (){var statearr_32811 = state_32804;
(statearr_32811[(8)] = inst_32790__$1);

return statearr_32811;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32804__$1,(8),jobs,inst_32793);
} else {
if((state_val_32805 === (7))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32812_32919 = state_32804__$1;
(statearr_32812_32919[(2)] = inst_32800);

(statearr_32812_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32790 = (state_32804[(8)]);
var inst_32795 = (state_32804[(2)]);
var state_32804__$1 = (function (){var statearr_32813 = state_32804;
(statearr_32813[(9)] = inst_32795);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32804__$1,(9),results,inst_32790);
} else {
if((state_val_32805 === (9))){
var inst_32797 = (state_32804[(2)]);
var state_32804__$1 = (function (){var statearr_32814 = state_32804;
(statearr_32814[(10)] = inst_32797);

return statearr_32814;
})();
var statearr_32815_32920 = state_32804__$1;
(statearr_32815_32920[(2)] = null);

(statearr_32815_32920[(1)] = (2));


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
});})(c__32565__auto___32914,jobs,results,process,async))
;
return ((function (switch__32477__auto__,c__32565__auto___32914,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_32816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__);

(statearr_32816[(1)] = (1));

return statearr_32816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1 = (function (state_32804){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32817){if((e32817 instanceof Object)){
var ex__32481__auto__ = e32817;
var statearr_32818_32921 = state_32804;
(statearr_32818_32921[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32922 = state_32804;
state_32804 = G__32922;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___32914,jobs,results,process,async))
})();
var state__32567__auto__ = (function (){var statearr_32819 = f__32566__auto__.call(null);
(statearr_32819[(6)] = c__32565__auto___32914);

return statearr_32819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___32914,jobs,results,process,async))
);


var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__,jobs,results,process,async){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__,jobs,results,process,async){
return (function (state_32857){
var state_val_32858 = (state_32857[(1)]);
if((state_val_32858 === (7))){
var inst_32853 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32859_32923 = state_32857__$1;
(statearr_32859_32923[(2)] = inst_32853);

(statearr_32859_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (20))){
var state_32857__$1 = state_32857;
var statearr_32860_32924 = state_32857__$1;
(statearr_32860_32924[(2)] = null);

(statearr_32860_32924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (1))){
var state_32857__$1 = state_32857;
var statearr_32861_32925 = state_32857__$1;
(statearr_32861_32925[(2)] = null);

(statearr_32861_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (4))){
var inst_32822 = (state_32857[(7)]);
var inst_32822__$1 = (state_32857[(2)]);
var inst_32823 = (inst_32822__$1 == null);
var state_32857__$1 = (function (){var statearr_32862 = state_32857;
(statearr_32862[(7)] = inst_32822__$1);

return statearr_32862;
})();
if(cljs.core.truth_(inst_32823)){
var statearr_32863_32926 = state_32857__$1;
(statearr_32863_32926[(1)] = (5));

} else {
var statearr_32864_32927 = state_32857__$1;
(statearr_32864_32927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (15))){
var inst_32835 = (state_32857[(8)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32857__$1,(18),to,inst_32835);
} else {
if((state_val_32858 === (21))){
var inst_32848 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32865_32928 = state_32857__$1;
(statearr_32865_32928[(2)] = inst_32848);

(statearr_32865_32928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (13))){
var inst_32850 = (state_32857[(2)]);
var state_32857__$1 = (function (){var statearr_32866 = state_32857;
(statearr_32866[(9)] = inst_32850);

return statearr_32866;
})();
var statearr_32867_32929 = state_32857__$1;
(statearr_32867_32929[(2)] = null);

(statearr_32867_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (6))){
var inst_32822 = (state_32857[(7)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,(11),inst_32822);
} else {
if((state_val_32858 === (17))){
var inst_32843 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
if(cljs.core.truth_(inst_32843)){
var statearr_32868_32930 = state_32857__$1;
(statearr_32868_32930[(1)] = (19));

} else {
var statearr_32869_32931 = state_32857__$1;
(statearr_32869_32931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (3))){
var inst_32855 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32857__$1,inst_32855);
} else {
if((state_val_32858 === (12))){
var inst_32832 = (state_32857[(10)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,(14),inst_32832);
} else {
if((state_val_32858 === (2))){
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,(4),results);
} else {
if((state_val_32858 === (19))){
var state_32857__$1 = state_32857;
var statearr_32870_32932 = state_32857__$1;
(statearr_32870_32932[(2)] = null);

(statearr_32870_32932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (11))){
var inst_32832 = (state_32857[(2)]);
var state_32857__$1 = (function (){var statearr_32871 = state_32857;
(statearr_32871[(10)] = inst_32832);

return statearr_32871;
})();
var statearr_32872_32933 = state_32857__$1;
(statearr_32872_32933[(2)] = null);

(statearr_32872_32933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (9))){
var state_32857__$1 = state_32857;
var statearr_32873_32934 = state_32857__$1;
(statearr_32873_32934[(2)] = null);

(statearr_32873_32934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (5))){
var state_32857__$1 = state_32857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32874_32935 = state_32857__$1;
(statearr_32874_32935[(1)] = (8));

} else {
var statearr_32875_32936 = state_32857__$1;
(statearr_32875_32936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (14))){
var inst_32835 = (state_32857[(8)]);
var inst_32837 = (state_32857[(11)]);
var inst_32835__$1 = (state_32857[(2)]);
var inst_32836 = (inst_32835__$1 == null);
var inst_32837__$1 = cljs.core.not.call(null,inst_32836);
var state_32857__$1 = (function (){var statearr_32876 = state_32857;
(statearr_32876[(8)] = inst_32835__$1);

(statearr_32876[(11)] = inst_32837__$1);

return statearr_32876;
})();
if(inst_32837__$1){
var statearr_32877_32937 = state_32857__$1;
(statearr_32877_32937[(1)] = (15));

} else {
var statearr_32878_32938 = state_32857__$1;
(statearr_32878_32938[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (16))){
var inst_32837 = (state_32857[(11)]);
var state_32857__$1 = state_32857;
var statearr_32879_32939 = state_32857__$1;
(statearr_32879_32939[(2)] = inst_32837);

(statearr_32879_32939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (10))){
var inst_32829 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32880_32940 = state_32857__$1;
(statearr_32880_32940[(2)] = inst_32829);

(statearr_32880_32940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (18))){
var inst_32840 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32881_32941 = state_32857__$1;
(statearr_32881_32941[(2)] = inst_32840);

(statearr_32881_32941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (8))){
var inst_32826 = cljs.core.async.close_BANG_.call(null,to);
var state_32857__$1 = state_32857;
var statearr_32882_32942 = state_32857__$1;
(statearr_32882_32942[(2)] = inst_32826);

(statearr_32882_32942[(1)] = (10));


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
});})(c__32565__auto__,jobs,results,process,async))
;
return ((function (switch__32477__auto__,c__32565__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1 = (function (state_32857){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32884){if((e32884 instanceof Object)){
var ex__32481__auto__ = e32884;
var statearr_32885_32943 = state_32857;
(statearr_32885_32943[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32944 = state_32857;
state_32857 = G__32944;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__,jobs,results,process,async))
})();
var state__32567__auto__ = (function (){var statearr_32886 = f__32566__auto__.call(null);
(statearr_32886[(6)] = c__32565__auto__);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__,jobs,results,process,async))
);

return c__32565__auto__;
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
var G__32946 = arguments.length;
switch (G__32946) {
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
var G__32949 = arguments.length;
switch (G__32949) {
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
var G__32952 = arguments.length;
switch (G__32952) {
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
var c__32565__auto___33001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33001,tc,fc){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33001,tc,fc){
return (function (state_32978){
var state_val_32979 = (state_32978[(1)]);
if((state_val_32979 === (7))){
var inst_32974 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32980_33002 = state_32978__$1;
(statearr_32980_33002[(2)] = inst_32974);

(statearr_32980_33002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (1))){
var state_32978__$1 = state_32978;
var statearr_32981_33003 = state_32978__$1;
(statearr_32981_33003[(2)] = null);

(statearr_32981_33003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (4))){
var inst_32955 = (state_32978[(7)]);
var inst_32955__$1 = (state_32978[(2)]);
var inst_32956 = (inst_32955__$1 == null);
var state_32978__$1 = (function (){var statearr_32982 = state_32978;
(statearr_32982[(7)] = inst_32955__$1);

return statearr_32982;
})();
if(cljs.core.truth_(inst_32956)){
var statearr_32983_33004 = state_32978__$1;
(statearr_32983_33004[(1)] = (5));

} else {
var statearr_32984_33005 = state_32978__$1;
(statearr_32984_33005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (13))){
var state_32978__$1 = state_32978;
var statearr_32985_33006 = state_32978__$1;
(statearr_32985_33006[(2)] = null);

(statearr_32985_33006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (6))){
var inst_32955 = (state_32978[(7)]);
var inst_32961 = p.call(null,inst_32955);
var state_32978__$1 = state_32978;
if(cljs.core.truth_(inst_32961)){
var statearr_32986_33007 = state_32978__$1;
(statearr_32986_33007[(1)] = (9));

} else {
var statearr_32987_33008 = state_32978__$1;
(statearr_32987_33008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (3))){
var inst_32976 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32978__$1,inst_32976);
} else {
if((state_val_32979 === (12))){
var state_32978__$1 = state_32978;
var statearr_32988_33009 = state_32978__$1;
(statearr_32988_33009[(2)] = null);

(statearr_32988_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (2))){
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32978__$1,(4),ch);
} else {
if((state_val_32979 === (11))){
var inst_32955 = (state_32978[(7)]);
var inst_32965 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32978__$1,(8),inst_32965,inst_32955);
} else {
if((state_val_32979 === (9))){
var state_32978__$1 = state_32978;
var statearr_32989_33010 = state_32978__$1;
(statearr_32989_33010[(2)] = tc);

(statearr_32989_33010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (5))){
var inst_32958 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32959 = cljs.core.async.close_BANG_.call(null,fc);
var state_32978__$1 = (function (){var statearr_32990 = state_32978;
(statearr_32990[(8)] = inst_32958);

return statearr_32990;
})();
var statearr_32991_33011 = state_32978__$1;
(statearr_32991_33011[(2)] = inst_32959);

(statearr_32991_33011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (14))){
var inst_32972 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32992_33012 = state_32978__$1;
(statearr_32992_33012[(2)] = inst_32972);

(statearr_32992_33012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (10))){
var state_32978__$1 = state_32978;
var statearr_32993_33013 = state_32978__$1;
(statearr_32993_33013[(2)] = fc);

(statearr_32993_33013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (8))){
var inst_32967 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
if(cljs.core.truth_(inst_32967)){
var statearr_32994_33014 = state_32978__$1;
(statearr_32994_33014[(1)] = (12));

} else {
var statearr_32995_33015 = state_32978__$1;
(statearr_32995_33015[(1)] = (13));

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
});})(c__32565__auto___33001,tc,fc))
;
return ((function (switch__32477__auto__,c__32565__auto___33001,tc,fc){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_32996 = [null,null,null,null,null,null,null,null,null];
(statearr_32996[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_32996[(1)] = (1));

return statearr_32996;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_32978){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_32978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e32997){if((e32997 instanceof Object)){
var ex__32481__auto__ = e32997;
var statearr_32998_33016 = state_32978;
(statearr_32998_33016[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33017 = state_32978;
state_32978 = G__33017;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_32978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_32978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33001,tc,fc))
})();
var state__32567__auto__ = (function (){var statearr_32999 = f__32566__auto__.call(null);
(statearr_32999[(6)] = c__32565__auto___33001);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33001,tc,fc))
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__){
return (function (state_33038){
var state_val_33039 = (state_33038[(1)]);
if((state_val_33039 === (7))){
var inst_33034 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33040_33058 = state_33038__$1;
(statearr_33040_33058[(2)] = inst_33034);

(statearr_33040_33058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (1))){
var inst_33018 = init;
var state_33038__$1 = (function (){var statearr_33041 = state_33038;
(statearr_33041[(7)] = inst_33018);

return statearr_33041;
})();
var statearr_33042_33059 = state_33038__$1;
(statearr_33042_33059[(2)] = null);

(statearr_33042_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (4))){
var inst_33021 = (state_33038[(8)]);
var inst_33021__$1 = (state_33038[(2)]);
var inst_33022 = (inst_33021__$1 == null);
var state_33038__$1 = (function (){var statearr_33043 = state_33038;
(statearr_33043[(8)] = inst_33021__$1);

return statearr_33043;
})();
if(cljs.core.truth_(inst_33022)){
var statearr_33044_33060 = state_33038__$1;
(statearr_33044_33060[(1)] = (5));

} else {
var statearr_33045_33061 = state_33038__$1;
(statearr_33045_33061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (6))){
var inst_33025 = (state_33038[(9)]);
var inst_33021 = (state_33038[(8)]);
var inst_33018 = (state_33038[(7)]);
var inst_33025__$1 = f.call(null,inst_33018,inst_33021);
var inst_33026 = cljs.core.reduced_QMARK_.call(null,inst_33025__$1);
var state_33038__$1 = (function (){var statearr_33046 = state_33038;
(statearr_33046[(9)] = inst_33025__$1);

return statearr_33046;
})();
if(inst_33026){
var statearr_33047_33062 = state_33038__$1;
(statearr_33047_33062[(1)] = (8));

} else {
var statearr_33048_33063 = state_33038__$1;
(statearr_33048_33063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (3))){
var inst_33036 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33038__$1,inst_33036);
} else {
if((state_val_33039 === (2))){
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33038__$1,(4),ch);
} else {
if((state_val_33039 === (9))){
var inst_33025 = (state_33038[(9)]);
var inst_33018 = inst_33025;
var state_33038__$1 = (function (){var statearr_33049 = state_33038;
(statearr_33049[(7)] = inst_33018);

return statearr_33049;
})();
var statearr_33050_33064 = state_33038__$1;
(statearr_33050_33064[(2)] = null);

(statearr_33050_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (5))){
var inst_33018 = (state_33038[(7)]);
var state_33038__$1 = state_33038;
var statearr_33051_33065 = state_33038__$1;
(statearr_33051_33065[(2)] = inst_33018);

(statearr_33051_33065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (10))){
var inst_33032 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33052_33066 = state_33038__$1;
(statearr_33052_33066[(2)] = inst_33032);

(statearr_33052_33066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (8))){
var inst_33025 = (state_33038[(9)]);
var inst_33028 = cljs.core.deref.call(null,inst_33025);
var state_33038__$1 = state_33038;
var statearr_33053_33067 = state_33038__$1;
(statearr_33053_33067[(2)] = inst_33028);

(statearr_33053_33067[(1)] = (10));


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
});})(c__32565__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32478__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32478__auto____0 = (function (){
var statearr_33054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33054[(0)] = cljs$core$async$reduce_$_state_machine__32478__auto__);

(statearr_33054[(1)] = (1));

return statearr_33054;
});
var cljs$core$async$reduce_$_state_machine__32478__auto____1 = (function (state_33038){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33055){if((e33055 instanceof Object)){
var ex__32481__auto__ = e33055;
var statearr_33056_33068 = state_33038;
(statearr_33056_33068[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33069 = state_33038;
state_33038 = G__33069;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32478__auto__ = function(state_33038){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32478__auto____1.call(this,state_33038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32478__auto____0;
cljs$core$async$reduce_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32478__auto____1;
return cljs$core$async$reduce_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__))
})();
var state__32567__auto__ = (function (){var statearr_33057 = f__32566__auto__.call(null);
(statearr_33057[(6)] = c__32565__auto__);

return statearr_33057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__))
);

return c__32565__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__,f__$1){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__,f__$1){
return (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (1))){
var inst_33070 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33075__$1,(2),inst_33070);
} else {
if((state_val_33076 === (2))){
var inst_33072 = (state_33075[(2)]);
var inst_33073 = f__$1.call(null,inst_33072);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33075__$1,inst_33073);
} else {
return null;
}
}
});})(c__32565__auto__,f__$1))
;
return ((function (switch__32477__auto__,c__32565__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32478__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32478__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null];
(statearr_33077[(0)] = cljs$core$async$transduce_$_state_machine__32478__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var cljs$core$async$transduce_$_state_machine__32478__auto____1 = (function (state_33075){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33078){if((e33078 instanceof Object)){
var ex__32481__auto__ = e33078;
var statearr_33079_33081 = state_33075;
(statearr_33079_33081[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33082 = state_33075;
state_33075 = G__33082;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32478__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32478__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32478__auto____0;
cljs$core$async$transduce_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32478__auto____1;
return cljs$core$async$transduce_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__,f__$1))
})();
var state__32567__auto__ = (function (){var statearr_33080 = f__32566__auto__.call(null);
(statearr_33080[(6)] = c__32565__auto__);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__,f__$1))
);

return c__32565__auto__;
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
var G__33084 = arguments.length;
switch (G__33084) {
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__){
return (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var inst_33091 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33111_33132 = state_33109__$1;
(statearr_33111_33132[(2)] = inst_33091);

(statearr_33111_33132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var inst_33085 = cljs.core.seq.call(null,coll);
var inst_33086 = inst_33085;
var state_33109__$1 = (function (){var statearr_33112 = state_33109;
(statearr_33112[(7)] = inst_33086);

return statearr_33112;
})();
var statearr_33113_33133 = state_33109__$1;
(statearr_33113_33133[(2)] = null);

(statearr_33113_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33086 = (state_33109[(7)]);
var inst_33089 = cljs.core.first.call(null,inst_33086);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33109__$1,(7),ch,inst_33089);
} else {
if((state_val_33110 === (13))){
var inst_33103 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33114_33134 = state_33109__$1;
(statearr_33114_33134[(2)] = inst_33103);

(statearr_33114_33134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var inst_33094 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33094)){
var statearr_33115_33135 = state_33109__$1;
(statearr_33115_33135[(1)] = (8));

} else {
var statearr_33116_33136 = state_33109__$1;
(statearr_33116_33136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var state_33109__$1 = state_33109;
var statearr_33117_33137 = state_33109__$1;
(statearr_33117_33137[(2)] = null);

(statearr_33117_33137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (2))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33086)){
var statearr_33118_33138 = state_33109__$1;
(statearr_33118_33138[(1)] = (4));

} else {
var statearr_33119_33139 = state_33109__$1;
(statearr_33119_33139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (11))){
var inst_33100 = cljs.core.async.close_BANG_.call(null,ch);
var state_33109__$1 = state_33109;
var statearr_33120_33140 = state_33109__$1;
(statearr_33120_33140[(2)] = inst_33100);

(statearr_33120_33140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var state_33109__$1 = state_33109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33121_33141 = state_33109__$1;
(statearr_33121_33141[(1)] = (11));

} else {
var statearr_33122_33142 = state_33109__$1;
(statearr_33122_33142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (5))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
var statearr_33123_33143 = state_33109__$1;
(statearr_33123_33143[(2)] = inst_33086);

(statearr_33123_33143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33124_33144 = state_33109__$1;
(statearr_33124_33144[(2)] = inst_33105);

(statearr_33124_33144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33086 = (state_33109[(7)]);
var inst_33096 = cljs.core.next.call(null,inst_33086);
var inst_33086__$1 = inst_33096;
var state_33109__$1 = (function (){var statearr_33125 = state_33109;
(statearr_33125[(7)] = inst_33086__$1);

return statearr_33125;
})();
var statearr_33126_33145 = state_33109__$1;
(statearr_33126_33145[(2)] = null);

(statearr_33126_33145[(1)] = (2));


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
});})(c__32565__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_33127 = [null,null,null,null,null,null,null,null];
(statearr_33127[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_33127[(1)] = (1));

return statearr_33127;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_33109){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33128){if((e33128 instanceof Object)){
var ex__32481__auto__ = e33128;
var statearr_33129_33146 = state_33109;
(statearr_33129_33146[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33147 = state_33109;
state_33109 = G__33147;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__))
})();
var state__32567__auto__ = (function (){var statearr_33130 = f__32566__auto__.call(null);
(statearr_33130[(6)] = c__32565__auto__);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__))
);

return c__32565__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33148 = (function (ch,cs,meta33149){
this.ch = ch;
this.cs = cs;
this.meta33149 = meta33149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33150,meta33149__$1){
var self__ = this;
var _33150__$1 = this;
return (new cljs.core.async.t_cljs$core$async33148(self__.ch,self__.cs,meta33149__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33150){
var self__ = this;
var _33150__$1 = this;
return self__.meta33149;
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33149","meta33149",-649213972,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33148";

cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33148");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33148 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33148(ch__$1,cs__$1,meta33149){
return (new cljs.core.async.t_cljs$core$async33148(ch__$1,cs__$1,meta33149));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32565__auto___33370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33370,cs,m,dchan,dctr,done){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33370,cs,m,dchan,dctr,done){
return (function (state_33285){
var state_val_33286 = (state_33285[(1)]);
if((state_val_33286 === (7))){
var inst_33281 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33287_33371 = state_33285__$1;
(statearr_33287_33371[(2)] = inst_33281);

(statearr_33287_33371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (20))){
var inst_33184 = (state_33285[(7)]);
var inst_33196 = cljs.core.first.call(null,inst_33184);
var inst_33197 = cljs.core.nth.call(null,inst_33196,(0),null);
var inst_33198 = cljs.core.nth.call(null,inst_33196,(1),null);
var state_33285__$1 = (function (){var statearr_33288 = state_33285;
(statearr_33288[(8)] = inst_33197);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33198)){
var statearr_33289_33372 = state_33285__$1;
(statearr_33289_33372[(1)] = (22));

} else {
var statearr_33290_33373 = state_33285__$1;
(statearr_33290_33373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (27))){
var inst_33153 = (state_33285[(9)]);
var inst_33228 = (state_33285[(10)]);
var inst_33226 = (state_33285[(11)]);
var inst_33233 = (state_33285[(12)]);
var inst_33233__$1 = cljs.core._nth.call(null,inst_33226,inst_33228);
var inst_33234 = cljs.core.async.put_BANG_.call(null,inst_33233__$1,inst_33153,done);
var state_33285__$1 = (function (){var statearr_33291 = state_33285;
(statearr_33291[(12)] = inst_33233__$1);

return statearr_33291;
})();
if(cljs.core.truth_(inst_33234)){
var statearr_33292_33374 = state_33285__$1;
(statearr_33292_33374[(1)] = (30));

} else {
var statearr_33293_33375 = state_33285__$1;
(statearr_33293_33375[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (1))){
var state_33285__$1 = state_33285;
var statearr_33294_33376 = state_33285__$1;
(statearr_33294_33376[(2)] = null);

(statearr_33294_33376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (24))){
var inst_33184 = (state_33285[(7)]);
var inst_33203 = (state_33285[(2)]);
var inst_33204 = cljs.core.next.call(null,inst_33184);
var inst_33162 = inst_33204;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33295 = state_33285;
(statearr_33295[(13)] = inst_33165);

(statearr_33295[(14)] = inst_33164);

(statearr_33295[(15)] = inst_33203);

(statearr_33295[(16)] = inst_33163);

(statearr_33295[(17)] = inst_33162);

return statearr_33295;
})();
var statearr_33296_33377 = state_33285__$1;
(statearr_33296_33377[(2)] = null);

(statearr_33296_33377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (39))){
var state_33285__$1 = state_33285;
var statearr_33300_33378 = state_33285__$1;
(statearr_33300_33378[(2)] = null);

(statearr_33300_33378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (4))){
var inst_33153 = (state_33285[(9)]);
var inst_33153__$1 = (state_33285[(2)]);
var inst_33154 = (inst_33153__$1 == null);
var state_33285__$1 = (function (){var statearr_33301 = state_33285;
(statearr_33301[(9)] = inst_33153__$1);

return statearr_33301;
})();
if(cljs.core.truth_(inst_33154)){
var statearr_33302_33379 = state_33285__$1;
(statearr_33302_33379[(1)] = (5));

} else {
var statearr_33303_33380 = state_33285__$1;
(statearr_33303_33380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (15))){
var inst_33165 = (state_33285[(13)]);
var inst_33164 = (state_33285[(14)]);
var inst_33163 = (state_33285[(16)]);
var inst_33162 = (state_33285[(17)]);
var inst_33180 = (state_33285[(2)]);
var inst_33181 = (inst_33165 + (1));
var tmp33297 = inst_33164;
var tmp33298 = inst_33163;
var tmp33299 = inst_33162;
var inst_33162__$1 = tmp33299;
var inst_33163__$1 = tmp33298;
var inst_33164__$1 = tmp33297;
var inst_33165__$1 = inst_33181;
var state_33285__$1 = (function (){var statearr_33304 = state_33285;
(statearr_33304[(13)] = inst_33165__$1);

(statearr_33304[(14)] = inst_33164__$1);

(statearr_33304[(16)] = inst_33163__$1);

(statearr_33304[(18)] = inst_33180);

(statearr_33304[(17)] = inst_33162__$1);

return statearr_33304;
})();
var statearr_33305_33381 = state_33285__$1;
(statearr_33305_33381[(2)] = null);

(statearr_33305_33381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (21))){
var inst_33207 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33309_33382 = state_33285__$1;
(statearr_33309_33382[(2)] = inst_33207);

(statearr_33309_33382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (31))){
var inst_33233 = (state_33285[(12)]);
var inst_33237 = done.call(null,null);
var inst_33238 = cljs.core.async.untap_STAR_.call(null,m,inst_33233);
var state_33285__$1 = (function (){var statearr_33310 = state_33285;
(statearr_33310[(19)] = inst_33237);

return statearr_33310;
})();
var statearr_33311_33383 = state_33285__$1;
(statearr_33311_33383[(2)] = inst_33238);

(statearr_33311_33383[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (32))){
var inst_33225 = (state_33285[(20)]);
var inst_33227 = (state_33285[(21)]);
var inst_33228 = (state_33285[(10)]);
var inst_33226 = (state_33285[(11)]);
var inst_33240 = (state_33285[(2)]);
var inst_33241 = (inst_33228 + (1));
var tmp33306 = inst_33225;
var tmp33307 = inst_33227;
var tmp33308 = inst_33226;
var inst_33225__$1 = tmp33306;
var inst_33226__$1 = tmp33308;
var inst_33227__$1 = tmp33307;
var inst_33228__$1 = inst_33241;
var state_33285__$1 = (function (){var statearr_33312 = state_33285;
(statearr_33312[(20)] = inst_33225__$1);

(statearr_33312[(21)] = inst_33227__$1);

(statearr_33312[(10)] = inst_33228__$1);

(statearr_33312[(11)] = inst_33226__$1);

(statearr_33312[(22)] = inst_33240);

return statearr_33312;
})();
var statearr_33313_33384 = state_33285__$1;
(statearr_33313_33384[(2)] = null);

(statearr_33313_33384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (40))){
var inst_33253 = (state_33285[(23)]);
var inst_33257 = done.call(null,null);
var inst_33258 = cljs.core.async.untap_STAR_.call(null,m,inst_33253);
var state_33285__$1 = (function (){var statearr_33314 = state_33285;
(statearr_33314[(24)] = inst_33257);

return statearr_33314;
})();
var statearr_33315_33385 = state_33285__$1;
(statearr_33315_33385[(2)] = inst_33258);

(statearr_33315_33385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (33))){
var inst_33244 = (state_33285[(25)]);
var inst_33246 = cljs.core.chunked_seq_QMARK_.call(null,inst_33244);
var state_33285__$1 = state_33285;
if(inst_33246){
var statearr_33316_33386 = state_33285__$1;
(statearr_33316_33386[(1)] = (36));

} else {
var statearr_33317_33387 = state_33285__$1;
(statearr_33317_33387[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (13))){
var inst_33174 = (state_33285[(26)]);
var inst_33177 = cljs.core.async.close_BANG_.call(null,inst_33174);
var state_33285__$1 = state_33285;
var statearr_33318_33388 = state_33285__$1;
(statearr_33318_33388[(2)] = inst_33177);

(statearr_33318_33388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (22))){
var inst_33197 = (state_33285[(8)]);
var inst_33200 = cljs.core.async.close_BANG_.call(null,inst_33197);
var state_33285__$1 = state_33285;
var statearr_33319_33389 = state_33285__$1;
(statearr_33319_33389[(2)] = inst_33200);

(statearr_33319_33389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (36))){
var inst_33244 = (state_33285[(25)]);
var inst_33248 = cljs.core.chunk_first.call(null,inst_33244);
var inst_33249 = cljs.core.chunk_rest.call(null,inst_33244);
var inst_33250 = cljs.core.count.call(null,inst_33248);
var inst_33225 = inst_33249;
var inst_33226 = inst_33248;
var inst_33227 = inst_33250;
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33320 = state_33285;
(statearr_33320[(20)] = inst_33225);

(statearr_33320[(21)] = inst_33227);

(statearr_33320[(10)] = inst_33228);

(statearr_33320[(11)] = inst_33226);

return statearr_33320;
})();
var statearr_33321_33390 = state_33285__$1;
(statearr_33321_33390[(2)] = null);

(statearr_33321_33390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (41))){
var inst_33244 = (state_33285[(25)]);
var inst_33260 = (state_33285[(2)]);
var inst_33261 = cljs.core.next.call(null,inst_33244);
var inst_33225 = inst_33261;
var inst_33226 = null;
var inst_33227 = (0);
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33322 = state_33285;
(statearr_33322[(20)] = inst_33225);

(statearr_33322[(21)] = inst_33227);

(statearr_33322[(10)] = inst_33228);

(statearr_33322[(11)] = inst_33226);

(statearr_33322[(27)] = inst_33260);

return statearr_33322;
})();
var statearr_33323_33391 = state_33285__$1;
(statearr_33323_33391[(2)] = null);

(statearr_33323_33391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (43))){
var state_33285__$1 = state_33285;
var statearr_33324_33392 = state_33285__$1;
(statearr_33324_33392[(2)] = null);

(statearr_33324_33392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (29))){
var inst_33269 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33325_33393 = state_33285__$1;
(statearr_33325_33393[(2)] = inst_33269);

(statearr_33325_33393[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (44))){
var inst_33278 = (state_33285[(2)]);
var state_33285__$1 = (function (){var statearr_33326 = state_33285;
(statearr_33326[(28)] = inst_33278);

return statearr_33326;
})();
var statearr_33327_33394 = state_33285__$1;
(statearr_33327_33394[(2)] = null);

(statearr_33327_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (6))){
var inst_33217 = (state_33285[(29)]);
var inst_33216 = cljs.core.deref.call(null,cs);
var inst_33217__$1 = cljs.core.keys.call(null,inst_33216);
var inst_33218 = cljs.core.count.call(null,inst_33217__$1);
var inst_33219 = cljs.core.reset_BANG_.call(null,dctr,inst_33218);
var inst_33224 = cljs.core.seq.call(null,inst_33217__$1);
var inst_33225 = inst_33224;
var inst_33226 = null;
var inst_33227 = (0);
var inst_33228 = (0);
var state_33285__$1 = (function (){var statearr_33328 = state_33285;
(statearr_33328[(20)] = inst_33225);

(statearr_33328[(21)] = inst_33227);

(statearr_33328[(10)] = inst_33228);

(statearr_33328[(29)] = inst_33217__$1);

(statearr_33328[(11)] = inst_33226);

(statearr_33328[(30)] = inst_33219);

return statearr_33328;
})();
var statearr_33329_33395 = state_33285__$1;
(statearr_33329_33395[(2)] = null);

(statearr_33329_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (28))){
var inst_33225 = (state_33285[(20)]);
var inst_33244 = (state_33285[(25)]);
var inst_33244__$1 = cljs.core.seq.call(null,inst_33225);
var state_33285__$1 = (function (){var statearr_33330 = state_33285;
(statearr_33330[(25)] = inst_33244__$1);

return statearr_33330;
})();
if(inst_33244__$1){
var statearr_33331_33396 = state_33285__$1;
(statearr_33331_33396[(1)] = (33));

} else {
var statearr_33332_33397 = state_33285__$1;
(statearr_33332_33397[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (25))){
var inst_33227 = (state_33285[(21)]);
var inst_33228 = (state_33285[(10)]);
var inst_33230 = (inst_33228 < inst_33227);
var inst_33231 = inst_33230;
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33231)){
var statearr_33333_33398 = state_33285__$1;
(statearr_33333_33398[(1)] = (27));

} else {
var statearr_33334_33399 = state_33285__$1;
(statearr_33334_33399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (34))){
var state_33285__$1 = state_33285;
var statearr_33335_33400 = state_33285__$1;
(statearr_33335_33400[(2)] = null);

(statearr_33335_33400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (17))){
var state_33285__$1 = state_33285;
var statearr_33336_33401 = state_33285__$1;
(statearr_33336_33401[(2)] = null);

(statearr_33336_33401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (3))){
var inst_33283 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33285__$1,inst_33283);
} else {
if((state_val_33286 === (12))){
var inst_33212 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33337_33402 = state_33285__$1;
(statearr_33337_33402[(2)] = inst_33212);

(statearr_33337_33402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (2))){
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33285__$1,(4),ch);
} else {
if((state_val_33286 === (23))){
var state_33285__$1 = state_33285;
var statearr_33338_33403 = state_33285__$1;
(statearr_33338_33403[(2)] = null);

(statearr_33338_33403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (35))){
var inst_33267 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33339_33404 = state_33285__$1;
(statearr_33339_33404[(2)] = inst_33267);

(statearr_33339_33404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (19))){
var inst_33184 = (state_33285[(7)]);
var inst_33188 = cljs.core.chunk_first.call(null,inst_33184);
var inst_33189 = cljs.core.chunk_rest.call(null,inst_33184);
var inst_33190 = cljs.core.count.call(null,inst_33188);
var inst_33162 = inst_33189;
var inst_33163 = inst_33188;
var inst_33164 = inst_33190;
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33340 = state_33285;
(statearr_33340[(13)] = inst_33165);

(statearr_33340[(14)] = inst_33164);

(statearr_33340[(16)] = inst_33163);

(statearr_33340[(17)] = inst_33162);

return statearr_33340;
})();
var statearr_33341_33405 = state_33285__$1;
(statearr_33341_33405[(2)] = null);

(statearr_33341_33405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (11))){
var inst_33184 = (state_33285[(7)]);
var inst_33162 = (state_33285[(17)]);
var inst_33184__$1 = cljs.core.seq.call(null,inst_33162);
var state_33285__$1 = (function (){var statearr_33342 = state_33285;
(statearr_33342[(7)] = inst_33184__$1);

return statearr_33342;
})();
if(inst_33184__$1){
var statearr_33343_33406 = state_33285__$1;
(statearr_33343_33406[(1)] = (16));

} else {
var statearr_33344_33407 = state_33285__$1;
(statearr_33344_33407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (9))){
var inst_33214 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33345_33408 = state_33285__$1;
(statearr_33345_33408[(2)] = inst_33214);

(statearr_33345_33408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (5))){
var inst_33160 = cljs.core.deref.call(null,cs);
var inst_33161 = cljs.core.seq.call(null,inst_33160);
var inst_33162 = inst_33161;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33285__$1 = (function (){var statearr_33346 = state_33285;
(statearr_33346[(13)] = inst_33165);

(statearr_33346[(14)] = inst_33164);

(statearr_33346[(16)] = inst_33163);

(statearr_33346[(17)] = inst_33162);

return statearr_33346;
})();
var statearr_33347_33409 = state_33285__$1;
(statearr_33347_33409[(2)] = null);

(statearr_33347_33409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (14))){
var state_33285__$1 = state_33285;
var statearr_33348_33410 = state_33285__$1;
(statearr_33348_33410[(2)] = null);

(statearr_33348_33410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (45))){
var inst_33275 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33349_33411 = state_33285__$1;
(statearr_33349_33411[(2)] = inst_33275);

(statearr_33349_33411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (26))){
var inst_33217 = (state_33285[(29)]);
var inst_33271 = (state_33285[(2)]);
var inst_33272 = cljs.core.seq.call(null,inst_33217);
var state_33285__$1 = (function (){var statearr_33350 = state_33285;
(statearr_33350[(31)] = inst_33271);

return statearr_33350;
})();
if(inst_33272){
var statearr_33351_33412 = state_33285__$1;
(statearr_33351_33412[(1)] = (42));

} else {
var statearr_33352_33413 = state_33285__$1;
(statearr_33352_33413[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (16))){
var inst_33184 = (state_33285[(7)]);
var inst_33186 = cljs.core.chunked_seq_QMARK_.call(null,inst_33184);
var state_33285__$1 = state_33285;
if(inst_33186){
var statearr_33353_33414 = state_33285__$1;
(statearr_33353_33414[(1)] = (19));

} else {
var statearr_33354_33415 = state_33285__$1;
(statearr_33354_33415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (38))){
var inst_33264 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33355_33416 = state_33285__$1;
(statearr_33355_33416[(2)] = inst_33264);

(statearr_33355_33416[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (30))){
var state_33285__$1 = state_33285;
var statearr_33356_33417 = state_33285__$1;
(statearr_33356_33417[(2)] = null);

(statearr_33356_33417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (10))){
var inst_33165 = (state_33285[(13)]);
var inst_33163 = (state_33285[(16)]);
var inst_33173 = cljs.core._nth.call(null,inst_33163,inst_33165);
var inst_33174 = cljs.core.nth.call(null,inst_33173,(0),null);
var inst_33175 = cljs.core.nth.call(null,inst_33173,(1),null);
var state_33285__$1 = (function (){var statearr_33357 = state_33285;
(statearr_33357[(26)] = inst_33174);

return statearr_33357;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33358_33418 = state_33285__$1;
(statearr_33358_33418[(1)] = (13));

} else {
var statearr_33359_33419 = state_33285__$1;
(statearr_33359_33419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (18))){
var inst_33210 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33360_33420 = state_33285__$1;
(statearr_33360_33420[(2)] = inst_33210);

(statearr_33360_33420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (42))){
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33285__$1,(45),dchan);
} else {
if((state_val_33286 === (37))){
var inst_33153 = (state_33285[(9)]);
var inst_33253 = (state_33285[(23)]);
var inst_33244 = (state_33285[(25)]);
var inst_33253__$1 = cljs.core.first.call(null,inst_33244);
var inst_33254 = cljs.core.async.put_BANG_.call(null,inst_33253__$1,inst_33153,done);
var state_33285__$1 = (function (){var statearr_33361 = state_33285;
(statearr_33361[(23)] = inst_33253__$1);

return statearr_33361;
})();
if(cljs.core.truth_(inst_33254)){
var statearr_33362_33421 = state_33285__$1;
(statearr_33362_33421[(1)] = (39));

} else {
var statearr_33363_33422 = state_33285__$1;
(statearr_33363_33422[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (8))){
var inst_33165 = (state_33285[(13)]);
var inst_33164 = (state_33285[(14)]);
var inst_33167 = (inst_33165 < inst_33164);
var inst_33168 = inst_33167;
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33168)){
var statearr_33364_33423 = state_33285__$1;
(statearr_33364_33423[(1)] = (10));

} else {
var statearr_33365_33424 = state_33285__$1;
(statearr_33365_33424[(1)] = (11));

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
});})(c__32565__auto___33370,cs,m,dchan,dctr,done))
;
return ((function (switch__32477__auto__,c__32565__auto___33370,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32478__auto__ = null;
var cljs$core$async$mult_$_state_machine__32478__auto____0 = (function (){
var statearr_33366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33366[(0)] = cljs$core$async$mult_$_state_machine__32478__auto__);

(statearr_33366[(1)] = (1));

return statearr_33366;
});
var cljs$core$async$mult_$_state_machine__32478__auto____1 = (function (state_33285){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33367){if((e33367 instanceof Object)){
var ex__32481__auto__ = e33367;
var statearr_33368_33425 = state_33285;
(statearr_33368_33425[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33426 = state_33285;
state_33285 = G__33426;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32478__auto__ = function(state_33285){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32478__auto____1.call(this,state_33285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32478__auto____0;
cljs$core$async$mult_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32478__auto____1;
return cljs$core$async$mult_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33370,cs,m,dchan,dctr,done))
})();
var state__32567__auto__ = (function (){var statearr_33369 = f__32566__auto__.call(null);
(statearr_33369[(6)] = c__32565__auto___33370);

return statearr_33369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33370,cs,m,dchan,dctr,done))
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
var G__33428 = arguments.length;
switch (G__33428) {
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
var len__29455__auto___33440 = arguments.length;
var i__29456__auto___33441 = (0);
while(true){
if((i__29456__auto___33441 < len__29455__auto___33440)){
args__29462__auto__.push((arguments[i__29456__auto___33441]));

var G__33442 = (i__29456__auto___33441 + (1));
i__29456__auto___33441 = G__33442;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33434){
var map__33435 = p__33434;
var map__33435__$1 = ((((!((map__33435 == null)))?((((map__33435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33435):map__33435);
var opts = map__33435__$1;
var statearr_33437_33443 = state;
(statearr_33437_33443[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33435,map__33435__$1,opts){
return (function (val){
var statearr_33438_33444 = state;
(statearr_33438_33444[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33435,map__33435__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33439_33445 = state;
(statearr_33439_33445[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33430){
var G__33431 = cljs.core.first.call(null,seq33430);
var seq33430__$1 = cljs.core.next.call(null,seq33430);
var G__33432 = cljs.core.first.call(null,seq33430__$1);
var seq33430__$2 = cljs.core.next.call(null,seq33430__$1);
var G__33433 = cljs.core.first.call(null,seq33430__$2);
var seq33430__$3 = cljs.core.next.call(null,seq33430__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33431,G__33432,G__33433,seq33430__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33446 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33447){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33447 = meta33447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33448,meta33447__$1){
var self__ = this;
var _33448__$1 = this;
return (new cljs.core.async.t_cljs$core$async33446(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33447__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33448){
var self__ = this;
var _33448__$1 = this;
return self__.meta33447;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33446.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33447","meta33447",891865666,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33446";

cljs.core.async.t_cljs$core$async33446.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33446");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33446 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33446(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33447){
return (new cljs.core.async.t_cljs$core$async33446(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33447));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33446(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32565__auto___33610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33550){
var state_val_33551 = (state_33550[(1)]);
if((state_val_33551 === (7))){
var inst_33465 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33552_33611 = state_33550__$1;
(statearr_33552_33611[(2)] = inst_33465);

(statearr_33552_33611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (20))){
var inst_33477 = (state_33550[(7)]);
var state_33550__$1 = state_33550;
var statearr_33553_33612 = state_33550__$1;
(statearr_33553_33612[(2)] = inst_33477);

(statearr_33553_33612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (27))){
var state_33550__$1 = state_33550;
var statearr_33554_33613 = state_33550__$1;
(statearr_33554_33613[(2)] = null);

(statearr_33554_33613[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (1))){
var inst_33452 = (state_33550[(8)]);
var inst_33452__$1 = calc_state.call(null);
var inst_33454 = (inst_33452__$1 == null);
var inst_33455 = cljs.core.not.call(null,inst_33454);
var state_33550__$1 = (function (){var statearr_33555 = state_33550;
(statearr_33555[(8)] = inst_33452__$1);

return statearr_33555;
})();
if(inst_33455){
var statearr_33556_33614 = state_33550__$1;
(statearr_33556_33614[(1)] = (2));

} else {
var statearr_33557_33615 = state_33550__$1;
(statearr_33557_33615[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (24))){
var inst_33524 = (state_33550[(9)]);
var inst_33510 = (state_33550[(10)]);
var inst_33501 = (state_33550[(11)]);
var inst_33524__$1 = inst_33501.call(null,inst_33510);
var state_33550__$1 = (function (){var statearr_33558 = state_33550;
(statearr_33558[(9)] = inst_33524__$1);

return statearr_33558;
})();
if(cljs.core.truth_(inst_33524__$1)){
var statearr_33559_33616 = state_33550__$1;
(statearr_33559_33616[(1)] = (29));

} else {
var statearr_33560_33617 = state_33550__$1;
(statearr_33560_33617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (4))){
var inst_33468 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33468)){
var statearr_33561_33618 = state_33550__$1;
(statearr_33561_33618[(1)] = (8));

} else {
var statearr_33562_33619 = state_33550__$1;
(statearr_33562_33619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (15))){
var inst_33495 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33495)){
var statearr_33563_33620 = state_33550__$1;
(statearr_33563_33620[(1)] = (19));

} else {
var statearr_33564_33621 = state_33550__$1;
(statearr_33564_33621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (21))){
var inst_33500 = (state_33550[(12)]);
var inst_33500__$1 = (state_33550[(2)]);
var inst_33501 = cljs.core.get.call(null,inst_33500__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33502 = cljs.core.get.call(null,inst_33500__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33503 = cljs.core.get.call(null,inst_33500__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33550__$1 = (function (){var statearr_33565 = state_33550;
(statearr_33565[(13)] = inst_33502);

(statearr_33565[(12)] = inst_33500__$1);

(statearr_33565[(11)] = inst_33501);

return statearr_33565;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33550__$1,(22),inst_33503);
} else {
if((state_val_33551 === (31))){
var inst_33532 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33532)){
var statearr_33566_33622 = state_33550__$1;
(statearr_33566_33622[(1)] = (32));

} else {
var statearr_33567_33623 = state_33550__$1;
(statearr_33567_33623[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (32))){
var inst_33509 = (state_33550[(14)]);
var state_33550__$1 = state_33550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33550__$1,(35),out,inst_33509);
} else {
if((state_val_33551 === (33))){
var inst_33500 = (state_33550[(12)]);
var inst_33477 = inst_33500;
var state_33550__$1 = (function (){var statearr_33568 = state_33550;
(statearr_33568[(7)] = inst_33477);

return statearr_33568;
})();
var statearr_33569_33624 = state_33550__$1;
(statearr_33569_33624[(2)] = null);

(statearr_33569_33624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (13))){
var inst_33477 = (state_33550[(7)]);
var inst_33484 = inst_33477.cljs$lang$protocol_mask$partition0$;
var inst_33485 = (inst_33484 & (64));
var inst_33486 = inst_33477.cljs$core$ISeq$;
var inst_33487 = (cljs.core.PROTOCOL_SENTINEL === inst_33486);
var inst_33488 = (inst_33485) || (inst_33487);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33488)){
var statearr_33570_33625 = state_33550__$1;
(statearr_33570_33625[(1)] = (16));

} else {
var statearr_33571_33626 = state_33550__$1;
(statearr_33571_33626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (22))){
var inst_33510 = (state_33550[(10)]);
var inst_33509 = (state_33550[(14)]);
var inst_33508 = (state_33550[(2)]);
var inst_33509__$1 = cljs.core.nth.call(null,inst_33508,(0),null);
var inst_33510__$1 = cljs.core.nth.call(null,inst_33508,(1),null);
var inst_33511 = (inst_33509__$1 == null);
var inst_33512 = cljs.core._EQ_.call(null,inst_33510__$1,change);
var inst_33513 = (inst_33511) || (inst_33512);
var state_33550__$1 = (function (){var statearr_33572 = state_33550;
(statearr_33572[(10)] = inst_33510__$1);

(statearr_33572[(14)] = inst_33509__$1);

return statearr_33572;
})();
if(cljs.core.truth_(inst_33513)){
var statearr_33573_33627 = state_33550__$1;
(statearr_33573_33627[(1)] = (23));

} else {
var statearr_33574_33628 = state_33550__$1;
(statearr_33574_33628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (36))){
var inst_33500 = (state_33550[(12)]);
var inst_33477 = inst_33500;
var state_33550__$1 = (function (){var statearr_33575 = state_33550;
(statearr_33575[(7)] = inst_33477);

return statearr_33575;
})();
var statearr_33576_33629 = state_33550__$1;
(statearr_33576_33629[(2)] = null);

(statearr_33576_33629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (29))){
var inst_33524 = (state_33550[(9)]);
var state_33550__$1 = state_33550;
var statearr_33577_33630 = state_33550__$1;
(statearr_33577_33630[(2)] = inst_33524);

(statearr_33577_33630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (6))){
var state_33550__$1 = state_33550;
var statearr_33578_33631 = state_33550__$1;
(statearr_33578_33631[(2)] = false);

(statearr_33578_33631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (28))){
var inst_33520 = (state_33550[(2)]);
var inst_33521 = calc_state.call(null);
var inst_33477 = inst_33521;
var state_33550__$1 = (function (){var statearr_33579 = state_33550;
(statearr_33579[(7)] = inst_33477);

(statearr_33579[(15)] = inst_33520);

return statearr_33579;
})();
var statearr_33580_33632 = state_33550__$1;
(statearr_33580_33632[(2)] = null);

(statearr_33580_33632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (25))){
var inst_33546 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33581_33633 = state_33550__$1;
(statearr_33581_33633[(2)] = inst_33546);

(statearr_33581_33633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (34))){
var inst_33544 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33582_33634 = state_33550__$1;
(statearr_33582_33634[(2)] = inst_33544);

(statearr_33582_33634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (17))){
var state_33550__$1 = state_33550;
var statearr_33583_33635 = state_33550__$1;
(statearr_33583_33635[(2)] = false);

(statearr_33583_33635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (3))){
var state_33550__$1 = state_33550;
var statearr_33584_33636 = state_33550__$1;
(statearr_33584_33636[(2)] = false);

(statearr_33584_33636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (12))){
var inst_33548 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33550__$1,inst_33548);
} else {
if((state_val_33551 === (2))){
var inst_33452 = (state_33550[(8)]);
var inst_33457 = inst_33452.cljs$lang$protocol_mask$partition0$;
var inst_33458 = (inst_33457 & (64));
var inst_33459 = inst_33452.cljs$core$ISeq$;
var inst_33460 = (cljs.core.PROTOCOL_SENTINEL === inst_33459);
var inst_33461 = (inst_33458) || (inst_33460);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33461)){
var statearr_33585_33637 = state_33550__$1;
(statearr_33585_33637[(1)] = (5));

} else {
var statearr_33586_33638 = state_33550__$1;
(statearr_33586_33638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (23))){
var inst_33509 = (state_33550[(14)]);
var inst_33515 = (inst_33509 == null);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33515)){
var statearr_33587_33639 = state_33550__$1;
(statearr_33587_33639[(1)] = (26));

} else {
var statearr_33588_33640 = state_33550__$1;
(statearr_33588_33640[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (35))){
var inst_33535 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33535)){
var statearr_33589_33641 = state_33550__$1;
(statearr_33589_33641[(1)] = (36));

} else {
var statearr_33590_33642 = state_33550__$1;
(statearr_33590_33642[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (19))){
var inst_33477 = (state_33550[(7)]);
var inst_33497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33477);
var state_33550__$1 = state_33550;
var statearr_33591_33643 = state_33550__$1;
(statearr_33591_33643[(2)] = inst_33497);

(statearr_33591_33643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (11))){
var inst_33477 = (state_33550[(7)]);
var inst_33481 = (inst_33477 == null);
var inst_33482 = cljs.core.not.call(null,inst_33481);
var state_33550__$1 = state_33550;
if(inst_33482){
var statearr_33592_33644 = state_33550__$1;
(statearr_33592_33644[(1)] = (13));

} else {
var statearr_33593_33645 = state_33550__$1;
(statearr_33593_33645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (9))){
var inst_33452 = (state_33550[(8)]);
var state_33550__$1 = state_33550;
var statearr_33594_33646 = state_33550__$1;
(statearr_33594_33646[(2)] = inst_33452);

(statearr_33594_33646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (5))){
var state_33550__$1 = state_33550;
var statearr_33595_33647 = state_33550__$1;
(statearr_33595_33647[(2)] = true);

(statearr_33595_33647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (14))){
var state_33550__$1 = state_33550;
var statearr_33596_33648 = state_33550__$1;
(statearr_33596_33648[(2)] = false);

(statearr_33596_33648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (26))){
var inst_33510 = (state_33550[(10)]);
var inst_33517 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33510);
var state_33550__$1 = state_33550;
var statearr_33597_33649 = state_33550__$1;
(statearr_33597_33649[(2)] = inst_33517);

(statearr_33597_33649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (16))){
var state_33550__$1 = state_33550;
var statearr_33598_33650 = state_33550__$1;
(statearr_33598_33650[(2)] = true);

(statearr_33598_33650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (38))){
var inst_33540 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33599_33651 = state_33550__$1;
(statearr_33599_33651[(2)] = inst_33540);

(statearr_33599_33651[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (30))){
var inst_33502 = (state_33550[(13)]);
var inst_33510 = (state_33550[(10)]);
var inst_33501 = (state_33550[(11)]);
var inst_33527 = cljs.core.empty_QMARK_.call(null,inst_33501);
var inst_33528 = inst_33502.call(null,inst_33510);
var inst_33529 = cljs.core.not.call(null,inst_33528);
var inst_33530 = (inst_33527) && (inst_33529);
var state_33550__$1 = state_33550;
var statearr_33600_33652 = state_33550__$1;
(statearr_33600_33652[(2)] = inst_33530);

(statearr_33600_33652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (10))){
var inst_33452 = (state_33550[(8)]);
var inst_33473 = (state_33550[(2)]);
var inst_33474 = cljs.core.get.call(null,inst_33473,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33475 = cljs.core.get.call(null,inst_33473,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33476 = cljs.core.get.call(null,inst_33473,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33477 = inst_33452;
var state_33550__$1 = (function (){var statearr_33601 = state_33550;
(statearr_33601[(16)] = inst_33474);

(statearr_33601[(17)] = inst_33475);

(statearr_33601[(7)] = inst_33477);

(statearr_33601[(18)] = inst_33476);

return statearr_33601;
})();
var statearr_33602_33653 = state_33550__$1;
(statearr_33602_33653[(2)] = null);

(statearr_33602_33653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (18))){
var inst_33492 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33603_33654 = state_33550__$1;
(statearr_33603_33654[(2)] = inst_33492);

(statearr_33603_33654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (37))){
var state_33550__$1 = state_33550;
var statearr_33604_33655 = state_33550__$1;
(statearr_33604_33655[(2)] = null);

(statearr_33604_33655[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (8))){
var inst_33452 = (state_33550[(8)]);
var inst_33470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33452);
var state_33550__$1 = state_33550;
var statearr_33605_33656 = state_33550__$1;
(statearr_33605_33656[(2)] = inst_33470);

(statearr_33605_33656[(1)] = (10));


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
});})(c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32477__auto__,c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32478__auto__ = null;
var cljs$core$async$mix_$_state_machine__32478__auto____0 = (function (){
var statearr_33606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33606[(0)] = cljs$core$async$mix_$_state_machine__32478__auto__);

(statearr_33606[(1)] = (1));

return statearr_33606;
});
var cljs$core$async$mix_$_state_machine__32478__auto____1 = (function (state_33550){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33607){if((e33607 instanceof Object)){
var ex__32481__auto__ = e33607;
var statearr_33608_33657 = state_33550;
(statearr_33608_33657[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33658 = state_33550;
state_33550 = G__33658;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32478__auto__ = function(state_33550){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32478__auto____1.call(this,state_33550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32478__auto____0;
cljs$core$async$mix_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32478__auto____1;
return cljs$core$async$mix_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32567__auto__ = (function (){var statearr_33609 = f__32566__auto__.call(null);
(statearr_33609[(6)] = c__32565__auto___33610);

return statearr_33609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__33660 = arguments.length;
switch (G__33660) {
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
var G__33664 = arguments.length;
switch (G__33664) {
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
return (function (p1__33662_SHARP_){
if(cljs.core.truth_(p1__33662_SHARP_.call(null,topic))){
return p1__33662_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33662_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33666 = meta33666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33667,meta33666__$1){
var self__ = this;
var _33667__$1 = this;
return (new cljs.core.async.t_cljs$core$async33665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33666__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33667){
var self__ = this;
var _33667__$1 = this;
return self__.meta33666;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33666","meta33666",-1122295282,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33665";

cljs.core.async.t_cljs$core$async33665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33665");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33665 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33666){
return (new cljs.core.async.t_cljs$core$async33665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33666));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32565__auto___33785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33785,mults,ensure_mult,p){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33785,mults,ensure_mult,p){
return (function (state_33739){
var state_val_33740 = (state_33739[(1)]);
if((state_val_33740 === (7))){
var inst_33735 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33741_33786 = state_33739__$1;
(statearr_33741_33786[(2)] = inst_33735);

(statearr_33741_33786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (20))){
var state_33739__$1 = state_33739;
var statearr_33742_33787 = state_33739__$1;
(statearr_33742_33787[(2)] = null);

(statearr_33742_33787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (1))){
var state_33739__$1 = state_33739;
var statearr_33743_33788 = state_33739__$1;
(statearr_33743_33788[(2)] = null);

(statearr_33743_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (24))){
var inst_33718 = (state_33739[(7)]);
var inst_33727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33718);
var state_33739__$1 = state_33739;
var statearr_33744_33789 = state_33739__$1;
(statearr_33744_33789[(2)] = inst_33727);

(statearr_33744_33789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (4))){
var inst_33670 = (state_33739[(8)]);
var inst_33670__$1 = (state_33739[(2)]);
var inst_33671 = (inst_33670__$1 == null);
var state_33739__$1 = (function (){var statearr_33745 = state_33739;
(statearr_33745[(8)] = inst_33670__$1);

return statearr_33745;
})();
if(cljs.core.truth_(inst_33671)){
var statearr_33746_33790 = state_33739__$1;
(statearr_33746_33790[(1)] = (5));

} else {
var statearr_33747_33791 = state_33739__$1;
(statearr_33747_33791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (15))){
var inst_33712 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33748_33792 = state_33739__$1;
(statearr_33748_33792[(2)] = inst_33712);

(statearr_33748_33792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (21))){
var inst_33732 = (state_33739[(2)]);
var state_33739__$1 = (function (){var statearr_33749 = state_33739;
(statearr_33749[(9)] = inst_33732);

return statearr_33749;
})();
var statearr_33750_33793 = state_33739__$1;
(statearr_33750_33793[(2)] = null);

(statearr_33750_33793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (13))){
var inst_33694 = (state_33739[(10)]);
var inst_33696 = cljs.core.chunked_seq_QMARK_.call(null,inst_33694);
var state_33739__$1 = state_33739;
if(inst_33696){
var statearr_33751_33794 = state_33739__$1;
(statearr_33751_33794[(1)] = (16));

} else {
var statearr_33752_33795 = state_33739__$1;
(statearr_33752_33795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (22))){
var inst_33724 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
if(cljs.core.truth_(inst_33724)){
var statearr_33753_33796 = state_33739__$1;
(statearr_33753_33796[(1)] = (23));

} else {
var statearr_33754_33797 = state_33739__$1;
(statearr_33754_33797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (6))){
var inst_33670 = (state_33739[(8)]);
var inst_33720 = (state_33739[(11)]);
var inst_33718 = (state_33739[(7)]);
var inst_33718__$1 = topic_fn.call(null,inst_33670);
var inst_33719 = cljs.core.deref.call(null,mults);
var inst_33720__$1 = cljs.core.get.call(null,inst_33719,inst_33718__$1);
var state_33739__$1 = (function (){var statearr_33755 = state_33739;
(statearr_33755[(11)] = inst_33720__$1);

(statearr_33755[(7)] = inst_33718__$1);

return statearr_33755;
})();
if(cljs.core.truth_(inst_33720__$1)){
var statearr_33756_33798 = state_33739__$1;
(statearr_33756_33798[(1)] = (19));

} else {
var statearr_33757_33799 = state_33739__$1;
(statearr_33757_33799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (25))){
var inst_33729 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33758_33800 = state_33739__$1;
(statearr_33758_33800[(2)] = inst_33729);

(statearr_33758_33800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (17))){
var inst_33694 = (state_33739[(10)]);
var inst_33703 = cljs.core.first.call(null,inst_33694);
var inst_33704 = cljs.core.async.muxch_STAR_.call(null,inst_33703);
var inst_33705 = cljs.core.async.close_BANG_.call(null,inst_33704);
var inst_33706 = cljs.core.next.call(null,inst_33694);
var inst_33680 = inst_33706;
var inst_33681 = null;
var inst_33682 = (0);
var inst_33683 = (0);
var state_33739__$1 = (function (){var statearr_33759 = state_33739;
(statearr_33759[(12)] = inst_33681);

(statearr_33759[(13)] = inst_33682);

(statearr_33759[(14)] = inst_33705);

(statearr_33759[(15)] = inst_33680);

(statearr_33759[(16)] = inst_33683);

return statearr_33759;
})();
var statearr_33760_33801 = state_33739__$1;
(statearr_33760_33801[(2)] = null);

(statearr_33760_33801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (3))){
var inst_33737 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33739__$1,inst_33737);
} else {
if((state_val_33740 === (12))){
var inst_33714 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33761_33802 = state_33739__$1;
(statearr_33761_33802[(2)] = inst_33714);

(statearr_33761_33802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (2))){
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33739__$1,(4),ch);
} else {
if((state_val_33740 === (23))){
var state_33739__$1 = state_33739;
var statearr_33762_33803 = state_33739__$1;
(statearr_33762_33803[(2)] = null);

(statearr_33762_33803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (19))){
var inst_33670 = (state_33739[(8)]);
var inst_33720 = (state_33739[(11)]);
var inst_33722 = cljs.core.async.muxch_STAR_.call(null,inst_33720);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33739__$1,(22),inst_33722,inst_33670);
} else {
if((state_val_33740 === (11))){
var inst_33680 = (state_33739[(15)]);
var inst_33694 = (state_33739[(10)]);
var inst_33694__$1 = cljs.core.seq.call(null,inst_33680);
var state_33739__$1 = (function (){var statearr_33763 = state_33739;
(statearr_33763[(10)] = inst_33694__$1);

return statearr_33763;
})();
if(inst_33694__$1){
var statearr_33764_33804 = state_33739__$1;
(statearr_33764_33804[(1)] = (13));

} else {
var statearr_33765_33805 = state_33739__$1;
(statearr_33765_33805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (9))){
var inst_33716 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33766_33806 = state_33739__$1;
(statearr_33766_33806[(2)] = inst_33716);

(statearr_33766_33806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (5))){
var inst_33677 = cljs.core.deref.call(null,mults);
var inst_33678 = cljs.core.vals.call(null,inst_33677);
var inst_33679 = cljs.core.seq.call(null,inst_33678);
var inst_33680 = inst_33679;
var inst_33681 = null;
var inst_33682 = (0);
var inst_33683 = (0);
var state_33739__$1 = (function (){var statearr_33767 = state_33739;
(statearr_33767[(12)] = inst_33681);

(statearr_33767[(13)] = inst_33682);

(statearr_33767[(15)] = inst_33680);

(statearr_33767[(16)] = inst_33683);

return statearr_33767;
})();
var statearr_33768_33807 = state_33739__$1;
(statearr_33768_33807[(2)] = null);

(statearr_33768_33807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (14))){
var state_33739__$1 = state_33739;
var statearr_33772_33808 = state_33739__$1;
(statearr_33772_33808[(2)] = null);

(statearr_33772_33808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (16))){
var inst_33694 = (state_33739[(10)]);
var inst_33698 = cljs.core.chunk_first.call(null,inst_33694);
var inst_33699 = cljs.core.chunk_rest.call(null,inst_33694);
var inst_33700 = cljs.core.count.call(null,inst_33698);
var inst_33680 = inst_33699;
var inst_33681 = inst_33698;
var inst_33682 = inst_33700;
var inst_33683 = (0);
var state_33739__$1 = (function (){var statearr_33773 = state_33739;
(statearr_33773[(12)] = inst_33681);

(statearr_33773[(13)] = inst_33682);

(statearr_33773[(15)] = inst_33680);

(statearr_33773[(16)] = inst_33683);

return statearr_33773;
})();
var statearr_33774_33809 = state_33739__$1;
(statearr_33774_33809[(2)] = null);

(statearr_33774_33809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (10))){
var inst_33681 = (state_33739[(12)]);
var inst_33682 = (state_33739[(13)]);
var inst_33680 = (state_33739[(15)]);
var inst_33683 = (state_33739[(16)]);
var inst_33688 = cljs.core._nth.call(null,inst_33681,inst_33683);
var inst_33689 = cljs.core.async.muxch_STAR_.call(null,inst_33688);
var inst_33690 = cljs.core.async.close_BANG_.call(null,inst_33689);
var inst_33691 = (inst_33683 + (1));
var tmp33769 = inst_33681;
var tmp33770 = inst_33682;
var tmp33771 = inst_33680;
var inst_33680__$1 = tmp33771;
var inst_33681__$1 = tmp33769;
var inst_33682__$1 = tmp33770;
var inst_33683__$1 = inst_33691;
var state_33739__$1 = (function (){var statearr_33775 = state_33739;
(statearr_33775[(12)] = inst_33681__$1);

(statearr_33775[(13)] = inst_33682__$1);

(statearr_33775[(17)] = inst_33690);

(statearr_33775[(15)] = inst_33680__$1);

(statearr_33775[(16)] = inst_33683__$1);

return statearr_33775;
})();
var statearr_33776_33810 = state_33739__$1;
(statearr_33776_33810[(2)] = null);

(statearr_33776_33810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (18))){
var inst_33709 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33777_33811 = state_33739__$1;
(statearr_33777_33811[(2)] = inst_33709);

(statearr_33777_33811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33740 === (8))){
var inst_33682 = (state_33739[(13)]);
var inst_33683 = (state_33739[(16)]);
var inst_33685 = (inst_33683 < inst_33682);
var inst_33686 = inst_33685;
var state_33739__$1 = state_33739;
if(cljs.core.truth_(inst_33686)){
var statearr_33778_33812 = state_33739__$1;
(statearr_33778_33812[(1)] = (10));

} else {
var statearr_33779_33813 = state_33739__$1;
(statearr_33779_33813[(1)] = (11));

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
});})(c__32565__auto___33785,mults,ensure_mult,p))
;
return ((function (switch__32477__auto__,c__32565__auto___33785,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_33780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33780[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_33780[(1)] = (1));

return statearr_33780;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_33739){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33781){if((e33781 instanceof Object)){
var ex__32481__auto__ = e33781;
var statearr_33782_33814 = state_33739;
(statearr_33782_33814[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33815 = state_33739;
state_33739 = G__33815;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_33739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_33739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33785,mults,ensure_mult,p))
})();
var state__32567__auto__ = (function (){var statearr_33783 = f__32566__auto__.call(null);
(statearr_33783[(6)] = c__32565__auto___33785);

return statearr_33783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33785,mults,ensure_mult,p))
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
var G__33817 = arguments.length;
switch (G__33817) {
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
var G__33820 = arguments.length;
switch (G__33820) {
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
var G__33823 = arguments.length;
switch (G__33823) {
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
var c__32565__auto___33890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33862){
var state_val_33863 = (state_33862[(1)]);
if((state_val_33863 === (7))){
var state_33862__$1 = state_33862;
var statearr_33864_33891 = state_33862__$1;
(statearr_33864_33891[(2)] = null);

(statearr_33864_33891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (1))){
var state_33862__$1 = state_33862;
var statearr_33865_33892 = state_33862__$1;
(statearr_33865_33892[(2)] = null);

(statearr_33865_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (4))){
var inst_33826 = (state_33862[(7)]);
var inst_33828 = (inst_33826 < cnt);
var state_33862__$1 = state_33862;
if(cljs.core.truth_(inst_33828)){
var statearr_33866_33893 = state_33862__$1;
(statearr_33866_33893[(1)] = (6));

} else {
var statearr_33867_33894 = state_33862__$1;
(statearr_33867_33894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (15))){
var inst_33858 = (state_33862[(2)]);
var state_33862__$1 = state_33862;
var statearr_33868_33895 = state_33862__$1;
(statearr_33868_33895[(2)] = inst_33858);

(statearr_33868_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (13))){
var inst_33851 = cljs.core.async.close_BANG_.call(null,out);
var state_33862__$1 = state_33862;
var statearr_33869_33896 = state_33862__$1;
(statearr_33869_33896[(2)] = inst_33851);

(statearr_33869_33896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (6))){
var state_33862__$1 = state_33862;
var statearr_33870_33897 = state_33862__$1;
(statearr_33870_33897[(2)] = null);

(statearr_33870_33897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (3))){
var inst_33860 = (state_33862[(2)]);
var state_33862__$1 = state_33862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33862__$1,inst_33860);
} else {
if((state_val_33863 === (12))){
var inst_33848 = (state_33862[(8)]);
var inst_33848__$1 = (state_33862[(2)]);
var inst_33849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33848__$1);
var state_33862__$1 = (function (){var statearr_33871 = state_33862;
(statearr_33871[(8)] = inst_33848__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33849)){
var statearr_33872_33898 = state_33862__$1;
(statearr_33872_33898[(1)] = (13));

} else {
var statearr_33873_33899 = state_33862__$1;
(statearr_33873_33899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (2))){
var inst_33825 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33826 = (0);
var state_33862__$1 = (function (){var statearr_33874 = state_33862;
(statearr_33874[(7)] = inst_33826);

(statearr_33874[(9)] = inst_33825);

return statearr_33874;
})();
var statearr_33875_33900 = state_33862__$1;
(statearr_33875_33900[(2)] = null);

(statearr_33875_33900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (11))){
var inst_33826 = (state_33862[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33862,(10),Object,null,(9));
var inst_33835 = chs__$1.call(null,inst_33826);
var inst_33836 = done.call(null,inst_33826);
var inst_33837 = cljs.core.async.take_BANG_.call(null,inst_33835,inst_33836);
var state_33862__$1 = state_33862;
var statearr_33876_33901 = state_33862__$1;
(statearr_33876_33901[(2)] = inst_33837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (9))){
var inst_33826 = (state_33862[(7)]);
var inst_33839 = (state_33862[(2)]);
var inst_33840 = (inst_33826 + (1));
var inst_33826__$1 = inst_33840;
var state_33862__$1 = (function (){var statearr_33877 = state_33862;
(statearr_33877[(10)] = inst_33839);

(statearr_33877[(7)] = inst_33826__$1);

return statearr_33877;
})();
var statearr_33878_33902 = state_33862__$1;
(statearr_33878_33902[(2)] = null);

(statearr_33878_33902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (5))){
var inst_33846 = (state_33862[(2)]);
var state_33862__$1 = (function (){var statearr_33879 = state_33862;
(statearr_33879[(11)] = inst_33846);

return statearr_33879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33862__$1,(12),dchan);
} else {
if((state_val_33863 === (14))){
var inst_33848 = (state_33862[(8)]);
var inst_33853 = cljs.core.apply.call(null,f,inst_33848);
var state_33862__$1 = state_33862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33862__$1,(16),out,inst_33853);
} else {
if((state_val_33863 === (16))){
var inst_33855 = (state_33862[(2)]);
var state_33862__$1 = (function (){var statearr_33880 = state_33862;
(statearr_33880[(12)] = inst_33855);

return statearr_33880;
})();
var statearr_33881_33903 = state_33862__$1;
(statearr_33881_33903[(2)] = null);

(statearr_33881_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (10))){
var inst_33830 = (state_33862[(2)]);
var inst_33831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33862__$1 = (function (){var statearr_33882 = state_33862;
(statearr_33882[(13)] = inst_33830);

return statearr_33882;
})();
var statearr_33883_33904 = state_33862__$1;
(statearr_33883_33904[(2)] = inst_33831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33863 === (8))){
var inst_33844 = (state_33862[(2)]);
var state_33862__$1 = state_33862;
var statearr_33884_33905 = state_33862__$1;
(statearr_33884_33905[(2)] = inst_33844);

(statearr_33884_33905[(1)] = (5));


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
});})(c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32477__auto__,c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_33885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33885[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_33885[(1)] = (1));

return statearr_33885;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_33862){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33886){if((e33886 instanceof Object)){
var ex__32481__auto__ = e33886;
var statearr_33887_33906 = state_33862;
(statearr_33887_33906[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_33862;
state_33862 = G__33907;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_33862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_33862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32567__auto__ = (function (){var statearr_33888 = f__32566__auto__.call(null);
(statearr_33888[(6)] = c__32565__auto___33890);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33890,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33910 = arguments.length;
switch (G__33910) {
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
var c__32565__auto___33964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___33964,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___33964,out){
return (function (state_33942){
var state_val_33943 = (state_33942[(1)]);
if((state_val_33943 === (7))){
var inst_33921 = (state_33942[(7)]);
var inst_33922 = (state_33942[(8)]);
var inst_33921__$1 = (state_33942[(2)]);
var inst_33922__$1 = cljs.core.nth.call(null,inst_33921__$1,(0),null);
var inst_33923 = cljs.core.nth.call(null,inst_33921__$1,(1),null);
var inst_33924 = (inst_33922__$1 == null);
var state_33942__$1 = (function (){var statearr_33944 = state_33942;
(statearr_33944[(7)] = inst_33921__$1);

(statearr_33944[(9)] = inst_33923);

(statearr_33944[(8)] = inst_33922__$1);

return statearr_33944;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33945_33965 = state_33942__$1;
(statearr_33945_33965[(1)] = (8));

} else {
var statearr_33946_33966 = state_33942__$1;
(statearr_33946_33966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (1))){
var inst_33911 = cljs.core.vec.call(null,chs);
var inst_33912 = inst_33911;
var state_33942__$1 = (function (){var statearr_33947 = state_33942;
(statearr_33947[(10)] = inst_33912);

return statearr_33947;
})();
var statearr_33948_33967 = state_33942__$1;
(statearr_33948_33967[(2)] = null);

(statearr_33948_33967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (4))){
var inst_33912 = (state_33942[(10)]);
var state_33942__$1 = state_33942;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33942__$1,(7),inst_33912);
} else {
if((state_val_33943 === (6))){
var inst_33938 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33949_33968 = state_33942__$1;
(statearr_33949_33968[(2)] = inst_33938);

(statearr_33949_33968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (3))){
var inst_33940 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33942__$1,inst_33940);
} else {
if((state_val_33943 === (2))){
var inst_33912 = (state_33942[(10)]);
var inst_33914 = cljs.core.count.call(null,inst_33912);
var inst_33915 = (inst_33914 > (0));
var state_33942__$1 = state_33942;
if(cljs.core.truth_(inst_33915)){
var statearr_33951_33969 = state_33942__$1;
(statearr_33951_33969[(1)] = (4));

} else {
var statearr_33952_33970 = state_33942__$1;
(statearr_33952_33970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (11))){
var inst_33912 = (state_33942[(10)]);
var inst_33931 = (state_33942[(2)]);
var tmp33950 = inst_33912;
var inst_33912__$1 = tmp33950;
var state_33942__$1 = (function (){var statearr_33953 = state_33942;
(statearr_33953[(11)] = inst_33931);

(statearr_33953[(10)] = inst_33912__$1);

return statearr_33953;
})();
var statearr_33954_33971 = state_33942__$1;
(statearr_33954_33971[(2)] = null);

(statearr_33954_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (9))){
var inst_33922 = (state_33942[(8)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33942__$1,(11),out,inst_33922);
} else {
if((state_val_33943 === (5))){
var inst_33936 = cljs.core.async.close_BANG_.call(null,out);
var state_33942__$1 = state_33942;
var statearr_33955_33972 = state_33942__$1;
(statearr_33955_33972[(2)] = inst_33936);

(statearr_33955_33972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (10))){
var inst_33934 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33956_33973 = state_33942__$1;
(statearr_33956_33973[(2)] = inst_33934);

(statearr_33956_33973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (8))){
var inst_33921 = (state_33942[(7)]);
var inst_33923 = (state_33942[(9)]);
var inst_33922 = (state_33942[(8)]);
var inst_33912 = (state_33942[(10)]);
var inst_33926 = (function (){var cs = inst_33912;
var vec__33917 = inst_33921;
var v = inst_33922;
var c = inst_33923;
return ((function (cs,vec__33917,v,c,inst_33921,inst_33923,inst_33922,inst_33912,state_val_33943,c__32565__auto___33964,out){
return (function (p1__33908_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33908_SHARP_);
});
;})(cs,vec__33917,v,c,inst_33921,inst_33923,inst_33922,inst_33912,state_val_33943,c__32565__auto___33964,out))
})();
var inst_33927 = cljs.core.filterv.call(null,inst_33926,inst_33912);
var inst_33912__$1 = inst_33927;
var state_33942__$1 = (function (){var statearr_33957 = state_33942;
(statearr_33957[(10)] = inst_33912__$1);

return statearr_33957;
})();
var statearr_33958_33974 = state_33942__$1;
(statearr_33958_33974[(2)] = null);

(statearr_33958_33974[(1)] = (2));


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
});})(c__32565__auto___33964,out))
;
return ((function (switch__32477__auto__,c__32565__auto___33964,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_33959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33959[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_33959[(1)] = (1));

return statearr_33959;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_33942){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_33942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e33960){if((e33960 instanceof Object)){
var ex__32481__auto__ = e33960;
var statearr_33961_33975 = state_33942;
(statearr_33961_33975[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33976 = state_33942;
state_33942 = G__33976;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_33942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_33942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___33964,out))
})();
var state__32567__auto__ = (function (){var statearr_33962 = f__32566__auto__.call(null);
(statearr_33962[(6)] = c__32565__auto___33964);

return statearr_33962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___33964,out))
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
var G__33978 = arguments.length;
switch (G__33978) {
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
var c__32565__auto___34023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___34023,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___34023,out){
return (function (state_34002){
var state_val_34003 = (state_34002[(1)]);
if((state_val_34003 === (7))){
var inst_33984 = (state_34002[(7)]);
var inst_33984__$1 = (state_34002[(2)]);
var inst_33985 = (inst_33984__$1 == null);
var inst_33986 = cljs.core.not.call(null,inst_33985);
var state_34002__$1 = (function (){var statearr_34004 = state_34002;
(statearr_34004[(7)] = inst_33984__$1);

return statearr_34004;
})();
if(inst_33986){
var statearr_34005_34024 = state_34002__$1;
(statearr_34005_34024[(1)] = (8));

} else {
var statearr_34006_34025 = state_34002__$1;
(statearr_34006_34025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (1))){
var inst_33979 = (0);
var state_34002__$1 = (function (){var statearr_34007 = state_34002;
(statearr_34007[(8)] = inst_33979);

return statearr_34007;
})();
var statearr_34008_34026 = state_34002__$1;
(statearr_34008_34026[(2)] = null);

(statearr_34008_34026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (4))){
var state_34002__$1 = state_34002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34002__$1,(7),ch);
} else {
if((state_val_34003 === (6))){
var inst_33997 = (state_34002[(2)]);
var state_34002__$1 = state_34002;
var statearr_34009_34027 = state_34002__$1;
(statearr_34009_34027[(2)] = inst_33997);

(statearr_34009_34027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (3))){
var inst_33999 = (state_34002[(2)]);
var inst_34000 = cljs.core.async.close_BANG_.call(null,out);
var state_34002__$1 = (function (){var statearr_34010 = state_34002;
(statearr_34010[(9)] = inst_33999);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34002__$1,inst_34000);
} else {
if((state_val_34003 === (2))){
var inst_33979 = (state_34002[(8)]);
var inst_33981 = (inst_33979 < n);
var state_34002__$1 = state_34002;
if(cljs.core.truth_(inst_33981)){
var statearr_34011_34028 = state_34002__$1;
(statearr_34011_34028[(1)] = (4));

} else {
var statearr_34012_34029 = state_34002__$1;
(statearr_34012_34029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (11))){
var inst_33979 = (state_34002[(8)]);
var inst_33989 = (state_34002[(2)]);
var inst_33990 = (inst_33979 + (1));
var inst_33979__$1 = inst_33990;
var state_34002__$1 = (function (){var statearr_34013 = state_34002;
(statearr_34013[(10)] = inst_33989);

(statearr_34013[(8)] = inst_33979__$1);

return statearr_34013;
})();
var statearr_34014_34030 = state_34002__$1;
(statearr_34014_34030[(2)] = null);

(statearr_34014_34030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (9))){
var state_34002__$1 = state_34002;
var statearr_34015_34031 = state_34002__$1;
(statearr_34015_34031[(2)] = null);

(statearr_34015_34031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (5))){
var state_34002__$1 = state_34002;
var statearr_34016_34032 = state_34002__$1;
(statearr_34016_34032[(2)] = null);

(statearr_34016_34032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (10))){
var inst_33994 = (state_34002[(2)]);
var state_34002__$1 = state_34002;
var statearr_34017_34033 = state_34002__$1;
(statearr_34017_34033[(2)] = inst_33994);

(statearr_34017_34033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34003 === (8))){
var inst_33984 = (state_34002[(7)]);
var state_34002__$1 = state_34002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34002__$1,(11),out,inst_33984);
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
});})(c__32565__auto___34023,out))
;
return ((function (switch__32477__auto__,c__32565__auto___34023,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_34018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34018[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_34018[(1)] = (1));

return statearr_34018;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_34002){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34019){if((e34019 instanceof Object)){
var ex__32481__auto__ = e34019;
var statearr_34020_34034 = state_34002;
(statearr_34020_34034[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_34002;
state_34002 = G__34035;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_34002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_34002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___34023,out))
})();
var state__32567__auto__ = (function (){var statearr_34021 = f__32566__auto__.call(null);
(statearr_34021[(6)] = c__32565__auto___34023);

return statearr_34021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___34023,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34037 = (function (f,ch,meta34038){
this.f = f;
this.ch = ch;
this.meta34038 = meta34038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34039,meta34038__$1){
var self__ = this;
var _34039__$1 = this;
return (new cljs.core.async.t_cljs$core$async34037(self__.f,self__.ch,meta34038__$1));
});

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34039){
var self__ = this;
var _34039__$1 = this;
return self__.meta34038;
});

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34040 = (function (f,ch,meta34038,_,fn1,meta34041){
this.f = f;
this.ch = ch;
this.meta34038 = meta34038;
this._ = _;
this.fn1 = fn1;
this.meta34041 = meta34041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34042,meta34041__$1){
var self__ = this;
var _34042__$1 = this;
return (new cljs.core.async.t_cljs$core$async34040(self__.f,self__.ch,self__.meta34038,self__._,self__.fn1,meta34041__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34042){
var self__ = this;
var _34042__$1 = this;
return self__.meta34041;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34036_SHARP_){
return f1.call(null,(((p1__34036_SHARP_ == null))?null:self__.f.call(null,p1__34036_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34038","meta34038",1755654017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34037","cljs.core.async/t_cljs$core$async34037",-138149930,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34041","meta34041",-1984561289,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34040";

cljs.core.async.t_cljs$core$async34040.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34040");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34040 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34040(f__$1,ch__$1,meta34038__$1,___$2,fn1__$1,meta34041){
return (new cljs.core.async.t_cljs$core$async34040(f__$1,ch__$1,meta34038__$1,___$2,fn1__$1,meta34041));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34040(self__.f,self__.ch,self__.meta34038,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34038","meta34038",1755654017,null)], null);
});

cljs.core.async.t_cljs$core$async34037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34037";

cljs.core.async.t_cljs$core$async34037.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34037");
});

cljs.core.async.__GT_t_cljs$core$async34037 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34037(f__$1,ch__$1,meta34038){
return (new cljs.core.async.t_cljs$core$async34037(f__$1,ch__$1,meta34038));
});

}

return (new cljs.core.async.t_cljs$core$async34037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34043 = (function (f,ch,meta34044){
this.f = f;
this.ch = ch;
this.meta34044 = meta34044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34045,meta34044__$1){
var self__ = this;
var _34045__$1 = this;
return (new cljs.core.async.t_cljs$core$async34043(self__.f,self__.ch,meta34044__$1));
});

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34045){
var self__ = this;
var _34045__$1 = this;
return self__.meta34044;
});

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34044","meta34044",1472187434,null)], null);
});

cljs.core.async.t_cljs$core$async34043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34043";

cljs.core.async.t_cljs$core$async34043.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34043");
});

cljs.core.async.__GT_t_cljs$core$async34043 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34043(f__$1,ch__$1,meta34044){
return (new cljs.core.async.t_cljs$core$async34043(f__$1,ch__$1,meta34044));
});

}

return (new cljs.core.async.t_cljs$core$async34043(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34046 = (function (p,ch,meta34047){
this.p = p;
this.ch = ch;
this.meta34047 = meta34047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34048,meta34047__$1){
var self__ = this;
var _34048__$1 = this;
return (new cljs.core.async.t_cljs$core$async34046(self__.p,self__.ch,meta34047__$1));
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34048){
var self__ = this;
var _34048__$1 = this;
return self__.meta34047;
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34047","meta34047",648671043,null)], null);
});

cljs.core.async.t_cljs$core$async34046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34046";

cljs.core.async.t_cljs$core$async34046.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34046");
});

cljs.core.async.__GT_t_cljs$core$async34046 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34046(p__$1,ch__$1,meta34047){
return (new cljs.core.async.t_cljs$core$async34046(p__$1,ch__$1,meta34047));
});

}

return (new cljs.core.async.t_cljs$core$async34046(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34050 = arguments.length;
switch (G__34050) {
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
var c__32565__auto___34090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___34090,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___34090,out){
return (function (state_34071){
var state_val_34072 = (state_34071[(1)]);
if((state_val_34072 === (7))){
var inst_34067 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34073_34091 = state_34071__$1;
(statearr_34073_34091[(2)] = inst_34067);

(statearr_34073_34091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (1))){
var state_34071__$1 = state_34071;
var statearr_34074_34092 = state_34071__$1;
(statearr_34074_34092[(2)] = null);

(statearr_34074_34092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (4))){
var inst_34053 = (state_34071[(7)]);
var inst_34053__$1 = (state_34071[(2)]);
var inst_34054 = (inst_34053__$1 == null);
var state_34071__$1 = (function (){var statearr_34075 = state_34071;
(statearr_34075[(7)] = inst_34053__$1);

return statearr_34075;
})();
if(cljs.core.truth_(inst_34054)){
var statearr_34076_34093 = state_34071__$1;
(statearr_34076_34093[(1)] = (5));

} else {
var statearr_34077_34094 = state_34071__$1;
(statearr_34077_34094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (6))){
var inst_34053 = (state_34071[(7)]);
var inst_34058 = p.call(null,inst_34053);
var state_34071__$1 = state_34071;
if(cljs.core.truth_(inst_34058)){
var statearr_34078_34095 = state_34071__$1;
(statearr_34078_34095[(1)] = (8));

} else {
var statearr_34079_34096 = state_34071__$1;
(statearr_34079_34096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (3))){
var inst_34069 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34071__$1,inst_34069);
} else {
if((state_val_34072 === (2))){
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34071__$1,(4),ch);
} else {
if((state_val_34072 === (11))){
var inst_34061 = (state_34071[(2)]);
var state_34071__$1 = state_34071;
var statearr_34080_34097 = state_34071__$1;
(statearr_34080_34097[(2)] = inst_34061);

(statearr_34080_34097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (9))){
var state_34071__$1 = state_34071;
var statearr_34081_34098 = state_34071__$1;
(statearr_34081_34098[(2)] = null);

(statearr_34081_34098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (5))){
var inst_34056 = cljs.core.async.close_BANG_.call(null,out);
var state_34071__$1 = state_34071;
var statearr_34082_34099 = state_34071__$1;
(statearr_34082_34099[(2)] = inst_34056);

(statearr_34082_34099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (10))){
var inst_34064 = (state_34071[(2)]);
var state_34071__$1 = (function (){var statearr_34083 = state_34071;
(statearr_34083[(8)] = inst_34064);

return statearr_34083;
})();
var statearr_34084_34100 = state_34071__$1;
(statearr_34084_34100[(2)] = null);

(statearr_34084_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34072 === (8))){
var inst_34053 = (state_34071[(7)]);
var state_34071__$1 = state_34071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34071__$1,(11),out,inst_34053);
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
});})(c__32565__auto___34090,out))
;
return ((function (switch__32477__auto__,c__32565__auto___34090,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_34085 = [null,null,null,null,null,null,null,null,null];
(statearr_34085[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_34085[(1)] = (1));

return statearr_34085;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_34071){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34086){if((e34086 instanceof Object)){
var ex__32481__auto__ = e34086;
var statearr_34087_34101 = state_34071;
(statearr_34087_34101[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34102 = state_34071;
state_34071 = G__34102;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_34071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_34071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___34090,out))
})();
var state__32567__auto__ = (function (){var statearr_34088 = f__32566__auto__.call(null);
(statearr_34088[(6)] = c__32565__auto___34090);

return statearr_34088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___34090,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34104 = arguments.length;
switch (G__34104) {
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__){
return (function (state_34167){
var state_val_34168 = (state_34167[(1)]);
if((state_val_34168 === (7))){
var inst_34163 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34169_34207 = state_34167__$1;
(statearr_34169_34207[(2)] = inst_34163);

(statearr_34169_34207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (20))){
var inst_34133 = (state_34167[(7)]);
var inst_34144 = (state_34167[(2)]);
var inst_34145 = cljs.core.next.call(null,inst_34133);
var inst_34119 = inst_34145;
var inst_34120 = null;
var inst_34121 = (0);
var inst_34122 = (0);
var state_34167__$1 = (function (){var statearr_34170 = state_34167;
(statearr_34170[(8)] = inst_34122);

(statearr_34170[(9)] = inst_34121);

(statearr_34170[(10)] = inst_34144);

(statearr_34170[(11)] = inst_34119);

(statearr_34170[(12)] = inst_34120);

return statearr_34170;
})();
var statearr_34171_34208 = state_34167__$1;
(statearr_34171_34208[(2)] = null);

(statearr_34171_34208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (1))){
var state_34167__$1 = state_34167;
var statearr_34172_34209 = state_34167__$1;
(statearr_34172_34209[(2)] = null);

(statearr_34172_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (4))){
var inst_34108 = (state_34167[(13)]);
var inst_34108__$1 = (state_34167[(2)]);
var inst_34109 = (inst_34108__$1 == null);
var state_34167__$1 = (function (){var statearr_34173 = state_34167;
(statearr_34173[(13)] = inst_34108__$1);

return statearr_34173;
})();
if(cljs.core.truth_(inst_34109)){
var statearr_34174_34210 = state_34167__$1;
(statearr_34174_34210[(1)] = (5));

} else {
var statearr_34175_34211 = state_34167__$1;
(statearr_34175_34211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (15))){
var state_34167__$1 = state_34167;
var statearr_34179_34212 = state_34167__$1;
(statearr_34179_34212[(2)] = null);

(statearr_34179_34212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (21))){
var state_34167__$1 = state_34167;
var statearr_34180_34213 = state_34167__$1;
(statearr_34180_34213[(2)] = null);

(statearr_34180_34213[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (13))){
var inst_34122 = (state_34167[(8)]);
var inst_34121 = (state_34167[(9)]);
var inst_34119 = (state_34167[(11)]);
var inst_34120 = (state_34167[(12)]);
var inst_34129 = (state_34167[(2)]);
var inst_34130 = (inst_34122 + (1));
var tmp34176 = inst_34121;
var tmp34177 = inst_34119;
var tmp34178 = inst_34120;
var inst_34119__$1 = tmp34177;
var inst_34120__$1 = tmp34178;
var inst_34121__$1 = tmp34176;
var inst_34122__$1 = inst_34130;
var state_34167__$1 = (function (){var statearr_34181 = state_34167;
(statearr_34181[(8)] = inst_34122__$1);

(statearr_34181[(9)] = inst_34121__$1);

(statearr_34181[(11)] = inst_34119__$1);

(statearr_34181[(14)] = inst_34129);

(statearr_34181[(12)] = inst_34120__$1);

return statearr_34181;
})();
var statearr_34182_34214 = state_34167__$1;
(statearr_34182_34214[(2)] = null);

(statearr_34182_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (22))){
var state_34167__$1 = state_34167;
var statearr_34183_34215 = state_34167__$1;
(statearr_34183_34215[(2)] = null);

(statearr_34183_34215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (6))){
var inst_34108 = (state_34167[(13)]);
var inst_34117 = f.call(null,inst_34108);
var inst_34118 = cljs.core.seq.call(null,inst_34117);
var inst_34119 = inst_34118;
var inst_34120 = null;
var inst_34121 = (0);
var inst_34122 = (0);
var state_34167__$1 = (function (){var statearr_34184 = state_34167;
(statearr_34184[(8)] = inst_34122);

(statearr_34184[(9)] = inst_34121);

(statearr_34184[(11)] = inst_34119);

(statearr_34184[(12)] = inst_34120);

return statearr_34184;
})();
var statearr_34185_34216 = state_34167__$1;
(statearr_34185_34216[(2)] = null);

(statearr_34185_34216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (17))){
var inst_34133 = (state_34167[(7)]);
var inst_34137 = cljs.core.chunk_first.call(null,inst_34133);
var inst_34138 = cljs.core.chunk_rest.call(null,inst_34133);
var inst_34139 = cljs.core.count.call(null,inst_34137);
var inst_34119 = inst_34138;
var inst_34120 = inst_34137;
var inst_34121 = inst_34139;
var inst_34122 = (0);
var state_34167__$1 = (function (){var statearr_34186 = state_34167;
(statearr_34186[(8)] = inst_34122);

(statearr_34186[(9)] = inst_34121);

(statearr_34186[(11)] = inst_34119);

(statearr_34186[(12)] = inst_34120);

return statearr_34186;
})();
var statearr_34187_34217 = state_34167__$1;
(statearr_34187_34217[(2)] = null);

(statearr_34187_34217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (3))){
var inst_34165 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34167__$1,inst_34165);
} else {
if((state_val_34168 === (12))){
var inst_34153 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34188_34218 = state_34167__$1;
(statearr_34188_34218[(2)] = inst_34153);

(statearr_34188_34218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (2))){
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34167__$1,(4),in$);
} else {
if((state_val_34168 === (23))){
var inst_34161 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34189_34219 = state_34167__$1;
(statearr_34189_34219[(2)] = inst_34161);

(statearr_34189_34219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (19))){
var inst_34148 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34190_34220 = state_34167__$1;
(statearr_34190_34220[(2)] = inst_34148);

(statearr_34190_34220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (11))){
var inst_34133 = (state_34167[(7)]);
var inst_34119 = (state_34167[(11)]);
var inst_34133__$1 = cljs.core.seq.call(null,inst_34119);
var state_34167__$1 = (function (){var statearr_34191 = state_34167;
(statearr_34191[(7)] = inst_34133__$1);

return statearr_34191;
})();
if(inst_34133__$1){
var statearr_34192_34221 = state_34167__$1;
(statearr_34192_34221[(1)] = (14));

} else {
var statearr_34193_34222 = state_34167__$1;
(statearr_34193_34222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (9))){
var inst_34155 = (state_34167[(2)]);
var inst_34156 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34167__$1 = (function (){var statearr_34194 = state_34167;
(statearr_34194[(15)] = inst_34155);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34156)){
var statearr_34195_34223 = state_34167__$1;
(statearr_34195_34223[(1)] = (21));

} else {
var statearr_34196_34224 = state_34167__$1;
(statearr_34196_34224[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (5))){
var inst_34111 = cljs.core.async.close_BANG_.call(null,out);
var state_34167__$1 = state_34167;
var statearr_34197_34225 = state_34167__$1;
(statearr_34197_34225[(2)] = inst_34111);

(statearr_34197_34225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (14))){
var inst_34133 = (state_34167[(7)]);
var inst_34135 = cljs.core.chunked_seq_QMARK_.call(null,inst_34133);
var state_34167__$1 = state_34167;
if(inst_34135){
var statearr_34198_34226 = state_34167__$1;
(statearr_34198_34226[(1)] = (17));

} else {
var statearr_34199_34227 = state_34167__$1;
(statearr_34199_34227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (16))){
var inst_34151 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34200_34228 = state_34167__$1;
(statearr_34200_34228[(2)] = inst_34151);

(statearr_34200_34228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (10))){
var inst_34122 = (state_34167[(8)]);
var inst_34120 = (state_34167[(12)]);
var inst_34127 = cljs.core._nth.call(null,inst_34120,inst_34122);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34167__$1,(13),out,inst_34127);
} else {
if((state_val_34168 === (18))){
var inst_34133 = (state_34167[(7)]);
var inst_34142 = cljs.core.first.call(null,inst_34133);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34167__$1,(20),out,inst_34142);
} else {
if((state_val_34168 === (8))){
var inst_34122 = (state_34167[(8)]);
var inst_34121 = (state_34167[(9)]);
var inst_34124 = (inst_34122 < inst_34121);
var inst_34125 = inst_34124;
var state_34167__$1 = state_34167;
if(cljs.core.truth_(inst_34125)){
var statearr_34201_34229 = state_34167__$1;
(statearr_34201_34229[(1)] = (10));

} else {
var statearr_34202_34230 = state_34167__$1;
(statearr_34202_34230[(1)] = (11));

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
});})(c__32565__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____1 = (function (state_34167){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__32481__auto__ = e34204;
var statearr_34205_34231 = state_34167;
(statearr_34205_34231[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34232 = state_34167;
state_34167 = G__34232;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__ = function(state_34167){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____1.call(this,state_34167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32478__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__))
})();
var state__32567__auto__ = (function (){var statearr_34206 = f__32566__auto__.call(null);
(statearr_34206[(6)] = c__32565__auto__);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__))
);

return c__32565__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34234 = arguments.length;
switch (G__34234) {
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
var G__34237 = arguments.length;
switch (G__34237) {
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
var G__34240 = arguments.length;
switch (G__34240) {
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
var c__32565__auto___34287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___34287,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___34287,out){
return (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34259 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34288 = state_34264__$1;
(statearr_34266_34288[(2)] = inst_34259);

(statearr_34266_34288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var inst_34241 = null;
var state_34264__$1 = (function (){var statearr_34267 = state_34264;
(statearr_34267[(7)] = inst_34241);

return statearr_34267;
})();
var statearr_34268_34289 = state_34264__$1;
(statearr_34268_34289[(2)] = null);

(statearr_34268_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34244 = (state_34264[(8)]);
var inst_34244__$1 = (state_34264[(2)]);
var inst_34245 = (inst_34244__$1 == null);
var inst_34246 = cljs.core.not.call(null,inst_34245);
var state_34264__$1 = (function (){var statearr_34269 = state_34264;
(statearr_34269[(8)] = inst_34244__$1);

return statearr_34269;
})();
if(inst_34246){
var statearr_34270_34290 = state_34264__$1;
(statearr_34270_34290[(1)] = (5));

} else {
var statearr_34271_34291 = state_34264__$1;
(statearr_34271_34291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var state_34264__$1 = state_34264;
var statearr_34272_34292 = state_34264__$1;
(statearr_34272_34292[(2)] = null);

(statearr_34272_34292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (3))){
var inst_34261 = (state_34264[(2)]);
var inst_34262 = cljs.core.async.close_BANG_.call(null,out);
var state_34264__$1 = (function (){var statearr_34273 = state_34264;
(statearr_34273[(9)] = inst_34261);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),ch);
} else {
if((state_val_34265 === (11))){
var inst_34244 = (state_34264[(8)]);
var inst_34253 = (state_34264[(2)]);
var inst_34241 = inst_34244;
var state_34264__$1 = (function (){var statearr_34274 = state_34264;
(statearr_34274[(7)] = inst_34241);

(statearr_34274[(10)] = inst_34253);

return statearr_34274;
})();
var statearr_34275_34293 = state_34264__$1;
(statearr_34275_34293[(2)] = null);

(statearr_34275_34293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var inst_34244 = (state_34264[(8)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(11),out,inst_34244);
} else {
if((state_val_34265 === (5))){
var inst_34241 = (state_34264[(7)]);
var inst_34244 = (state_34264[(8)]);
var inst_34248 = cljs.core._EQ_.call(null,inst_34244,inst_34241);
var state_34264__$1 = state_34264;
if(inst_34248){
var statearr_34277_34294 = state_34264__$1;
(statearr_34277_34294[(1)] = (8));

} else {
var statearr_34278_34295 = state_34264__$1;
(statearr_34278_34295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34256 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34279_34296 = state_34264__$1;
(statearr_34279_34296[(2)] = inst_34256);

(statearr_34279_34296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (8))){
var inst_34241 = (state_34264[(7)]);
var tmp34276 = inst_34241;
var inst_34241__$1 = tmp34276;
var state_34264__$1 = (function (){var statearr_34280 = state_34264;
(statearr_34280[(7)] = inst_34241__$1);

return statearr_34280;
})();
var statearr_34281_34297 = state_34264__$1;
(statearr_34281_34297[(2)] = null);

(statearr_34281_34297[(1)] = (2));


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
});})(c__32565__auto___34287,out))
;
return ((function (switch__32477__auto__,c__32565__auto___34287,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_34282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34282[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_34282[(1)] = (1));

return statearr_34282;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_34264){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34283){if((e34283 instanceof Object)){
var ex__32481__auto__ = e34283;
var statearr_34284_34298 = state_34264;
(statearr_34284_34298[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34299 = state_34264;
state_34264 = G__34299;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___34287,out))
})();
var state__32567__auto__ = (function (){var statearr_34285 = f__32566__auto__.call(null);
(statearr_34285[(6)] = c__32565__auto___34287);

return statearr_34285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___34287,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34301 = arguments.length;
switch (G__34301) {
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
var c__32565__auto___34367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___34367,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___34367,out){
return (function (state_34339){
var state_val_34340 = (state_34339[(1)]);
if((state_val_34340 === (7))){
var inst_34335 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34341_34368 = state_34339__$1;
(statearr_34341_34368[(2)] = inst_34335);

(statearr_34341_34368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (1))){
var inst_34302 = (new Array(n));
var inst_34303 = inst_34302;
var inst_34304 = (0);
var state_34339__$1 = (function (){var statearr_34342 = state_34339;
(statearr_34342[(7)] = inst_34303);

(statearr_34342[(8)] = inst_34304);

return statearr_34342;
})();
var statearr_34343_34369 = state_34339__$1;
(statearr_34343_34369[(2)] = null);

(statearr_34343_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (4))){
var inst_34307 = (state_34339[(9)]);
var inst_34307__$1 = (state_34339[(2)]);
var inst_34308 = (inst_34307__$1 == null);
var inst_34309 = cljs.core.not.call(null,inst_34308);
var state_34339__$1 = (function (){var statearr_34344 = state_34339;
(statearr_34344[(9)] = inst_34307__$1);

return statearr_34344;
})();
if(inst_34309){
var statearr_34345_34370 = state_34339__$1;
(statearr_34345_34370[(1)] = (5));

} else {
var statearr_34346_34371 = state_34339__$1;
(statearr_34346_34371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (15))){
var inst_34329 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34347_34372 = state_34339__$1;
(statearr_34347_34372[(2)] = inst_34329);

(statearr_34347_34372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (13))){
var state_34339__$1 = state_34339;
var statearr_34348_34373 = state_34339__$1;
(statearr_34348_34373[(2)] = null);

(statearr_34348_34373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (6))){
var inst_34304 = (state_34339[(8)]);
var inst_34325 = (inst_34304 > (0));
var state_34339__$1 = state_34339;
if(cljs.core.truth_(inst_34325)){
var statearr_34349_34374 = state_34339__$1;
(statearr_34349_34374[(1)] = (12));

} else {
var statearr_34350_34375 = state_34339__$1;
(statearr_34350_34375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (3))){
var inst_34337 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34339__$1,inst_34337);
} else {
if((state_val_34340 === (12))){
var inst_34303 = (state_34339[(7)]);
var inst_34327 = cljs.core.vec.call(null,inst_34303);
var state_34339__$1 = state_34339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34339__$1,(15),out,inst_34327);
} else {
if((state_val_34340 === (2))){
var state_34339__$1 = state_34339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34339__$1,(4),ch);
} else {
if((state_val_34340 === (11))){
var inst_34319 = (state_34339[(2)]);
var inst_34320 = (new Array(n));
var inst_34303 = inst_34320;
var inst_34304 = (0);
var state_34339__$1 = (function (){var statearr_34351 = state_34339;
(statearr_34351[(10)] = inst_34319);

(statearr_34351[(7)] = inst_34303);

(statearr_34351[(8)] = inst_34304);

return statearr_34351;
})();
var statearr_34352_34376 = state_34339__$1;
(statearr_34352_34376[(2)] = null);

(statearr_34352_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (9))){
var inst_34303 = (state_34339[(7)]);
var inst_34317 = cljs.core.vec.call(null,inst_34303);
var state_34339__$1 = state_34339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34339__$1,(11),out,inst_34317);
} else {
if((state_val_34340 === (5))){
var inst_34307 = (state_34339[(9)]);
var inst_34312 = (state_34339[(11)]);
var inst_34303 = (state_34339[(7)]);
var inst_34304 = (state_34339[(8)]);
var inst_34311 = (inst_34303[inst_34304] = inst_34307);
var inst_34312__$1 = (inst_34304 + (1));
var inst_34313 = (inst_34312__$1 < n);
var state_34339__$1 = (function (){var statearr_34353 = state_34339;
(statearr_34353[(12)] = inst_34311);

(statearr_34353[(11)] = inst_34312__$1);

return statearr_34353;
})();
if(cljs.core.truth_(inst_34313)){
var statearr_34354_34377 = state_34339__$1;
(statearr_34354_34377[(1)] = (8));

} else {
var statearr_34355_34378 = state_34339__$1;
(statearr_34355_34378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (14))){
var inst_34332 = (state_34339[(2)]);
var inst_34333 = cljs.core.async.close_BANG_.call(null,out);
var state_34339__$1 = (function (){var statearr_34357 = state_34339;
(statearr_34357[(13)] = inst_34332);

return statearr_34357;
})();
var statearr_34358_34379 = state_34339__$1;
(statearr_34358_34379[(2)] = inst_34333);

(statearr_34358_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (10))){
var inst_34323 = (state_34339[(2)]);
var state_34339__$1 = state_34339;
var statearr_34359_34380 = state_34339__$1;
(statearr_34359_34380[(2)] = inst_34323);

(statearr_34359_34380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34340 === (8))){
var inst_34312 = (state_34339[(11)]);
var inst_34303 = (state_34339[(7)]);
var tmp34356 = inst_34303;
var inst_34303__$1 = tmp34356;
var inst_34304 = inst_34312;
var state_34339__$1 = (function (){var statearr_34360 = state_34339;
(statearr_34360[(7)] = inst_34303__$1);

(statearr_34360[(8)] = inst_34304);

return statearr_34360;
})();
var statearr_34361_34381 = state_34339__$1;
(statearr_34361_34381[(2)] = null);

(statearr_34361_34381[(1)] = (2));


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
});})(c__32565__auto___34367,out))
;
return ((function (switch__32477__auto__,c__32565__auto___34367,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_34339){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34363){if((e34363 instanceof Object)){
var ex__32481__auto__ = e34363;
var statearr_34364_34382 = state_34339;
(statearr_34364_34382[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_34339;
state_34339 = G__34383;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_34339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_34339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___34367,out))
})();
var state__32567__auto__ = (function (){var statearr_34365 = f__32566__auto__.call(null);
(statearr_34365[(6)] = c__32565__auto___34367);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___34367,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34385 = arguments.length;
switch (G__34385) {
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
var c__32565__auto___34455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___34455,out){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___34455,out){
return (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (7))){
var inst_34423 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34429_34456 = state_34427__$1;
(statearr_34429_34456[(2)] = inst_34423);

(statearr_34429_34456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (1))){
var inst_34386 = [];
var inst_34387 = inst_34386;
var inst_34388 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34427__$1 = (function (){var statearr_34430 = state_34427;
(statearr_34430[(7)] = inst_34388);

(statearr_34430[(8)] = inst_34387);

return statearr_34430;
})();
var statearr_34431_34457 = state_34427__$1;
(statearr_34431_34457[(2)] = null);

(statearr_34431_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (4))){
var inst_34391 = (state_34427[(9)]);
var inst_34391__$1 = (state_34427[(2)]);
var inst_34392 = (inst_34391__$1 == null);
var inst_34393 = cljs.core.not.call(null,inst_34392);
var state_34427__$1 = (function (){var statearr_34432 = state_34427;
(statearr_34432[(9)] = inst_34391__$1);

return statearr_34432;
})();
if(inst_34393){
var statearr_34433_34458 = state_34427__$1;
(statearr_34433_34458[(1)] = (5));

} else {
var statearr_34434_34459 = state_34427__$1;
(statearr_34434_34459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (15))){
var inst_34417 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34435_34460 = state_34427__$1;
(statearr_34435_34460[(2)] = inst_34417);

(statearr_34435_34460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (13))){
var state_34427__$1 = state_34427;
var statearr_34436_34461 = state_34427__$1;
(statearr_34436_34461[(2)] = null);

(statearr_34436_34461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (6))){
var inst_34387 = (state_34427[(8)]);
var inst_34412 = inst_34387.length;
var inst_34413 = (inst_34412 > (0));
var state_34427__$1 = state_34427;
if(cljs.core.truth_(inst_34413)){
var statearr_34437_34462 = state_34427__$1;
(statearr_34437_34462[(1)] = (12));

} else {
var statearr_34438_34463 = state_34427__$1;
(statearr_34438_34463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (3))){
var inst_34425 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34427__$1,inst_34425);
} else {
if((state_val_34428 === (12))){
var inst_34387 = (state_34427[(8)]);
var inst_34415 = cljs.core.vec.call(null,inst_34387);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34427__$1,(15),out,inst_34415);
} else {
if((state_val_34428 === (2))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34427__$1,(4),ch);
} else {
if((state_val_34428 === (11))){
var inst_34391 = (state_34427[(9)]);
var inst_34395 = (state_34427[(10)]);
var inst_34405 = (state_34427[(2)]);
var inst_34406 = [];
var inst_34407 = inst_34406.push(inst_34391);
var inst_34387 = inst_34406;
var inst_34388 = inst_34395;
var state_34427__$1 = (function (){var statearr_34439 = state_34427;
(statearr_34439[(11)] = inst_34407);

(statearr_34439[(7)] = inst_34388);

(statearr_34439[(12)] = inst_34405);

(statearr_34439[(8)] = inst_34387);

return statearr_34439;
})();
var statearr_34440_34464 = state_34427__$1;
(statearr_34440_34464[(2)] = null);

(statearr_34440_34464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (9))){
var inst_34387 = (state_34427[(8)]);
var inst_34403 = cljs.core.vec.call(null,inst_34387);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34427__$1,(11),out,inst_34403);
} else {
if((state_val_34428 === (5))){
var inst_34391 = (state_34427[(9)]);
var inst_34395 = (state_34427[(10)]);
var inst_34388 = (state_34427[(7)]);
var inst_34395__$1 = f.call(null,inst_34391);
var inst_34396 = cljs.core._EQ_.call(null,inst_34395__$1,inst_34388);
var inst_34397 = cljs.core.keyword_identical_QMARK_.call(null,inst_34388,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34398 = (inst_34396) || (inst_34397);
var state_34427__$1 = (function (){var statearr_34441 = state_34427;
(statearr_34441[(10)] = inst_34395__$1);

return statearr_34441;
})();
if(cljs.core.truth_(inst_34398)){
var statearr_34442_34465 = state_34427__$1;
(statearr_34442_34465[(1)] = (8));

} else {
var statearr_34443_34466 = state_34427__$1;
(statearr_34443_34466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (14))){
var inst_34420 = (state_34427[(2)]);
var inst_34421 = cljs.core.async.close_BANG_.call(null,out);
var state_34427__$1 = (function (){var statearr_34445 = state_34427;
(statearr_34445[(13)] = inst_34420);

return statearr_34445;
})();
var statearr_34446_34467 = state_34427__$1;
(statearr_34446_34467[(2)] = inst_34421);

(statearr_34446_34467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (10))){
var inst_34410 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34447_34468 = state_34427__$1;
(statearr_34447_34468[(2)] = inst_34410);

(statearr_34447_34468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (8))){
var inst_34391 = (state_34427[(9)]);
var inst_34395 = (state_34427[(10)]);
var inst_34387 = (state_34427[(8)]);
var inst_34400 = inst_34387.push(inst_34391);
var tmp34444 = inst_34387;
var inst_34387__$1 = tmp34444;
var inst_34388 = inst_34395;
var state_34427__$1 = (function (){var statearr_34448 = state_34427;
(statearr_34448[(14)] = inst_34400);

(statearr_34448[(7)] = inst_34388);

(statearr_34448[(8)] = inst_34387__$1);

return statearr_34448;
})();
var statearr_34449_34469 = state_34427__$1;
(statearr_34449_34469[(2)] = null);

(statearr_34449_34469[(1)] = (2));


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
});})(c__32565__auto___34455,out))
;
return ((function (switch__32477__auto__,c__32565__auto___34455,out){
return (function() {
var cljs$core$async$state_machine__32478__auto__ = null;
var cljs$core$async$state_machine__32478__auto____0 = (function (){
var statearr_34450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34450[(0)] = cljs$core$async$state_machine__32478__auto__);

(statearr_34450[(1)] = (1));

return statearr_34450;
});
var cljs$core$async$state_machine__32478__auto____1 = (function (state_34427){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_34427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e34451){if((e34451 instanceof Object)){
var ex__32481__auto__ = e34451;
var statearr_34452_34470 = state_34427;
(statearr_34452_34470[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_34427;
state_34427 = G__34471;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
cljs$core$async$state_machine__32478__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32478__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32478__auto____0;
cljs$core$async$state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32478__auto____1;
return cljs$core$async$state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___34455,out))
})();
var state__32567__auto__ = (function (){var statearr_34453 = f__32566__auto__.call(null);
(statearr_34453[(6)] = c__32565__auto___34455);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___34455,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1508424080108
