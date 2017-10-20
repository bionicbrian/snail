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
var G__33145 = arguments.length;
switch (G__33145) {
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
if(typeof cljs.core.async.t_cljs$core$async33146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33146 = (function (f,blockable,meta33147){
this.f = f;
this.blockable = blockable;
this.meta33147 = meta33147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33148,meta33147__$1){
var self__ = this;
var _33148__$1 = this;
return (new cljs.core.async.t_cljs$core$async33146(self__.f,self__.blockable,meta33147__$1));
});

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33148){
var self__ = this;
var _33148__$1 = this;
return self__.meta33147;
});

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33147","meta33147",1715278262,null)], null);
});

cljs.core.async.t_cljs$core$async33146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33146";

cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33146");
});

cljs.core.async.__GT_t_cljs$core$async33146 = (function cljs$core$async$__GT_t_cljs$core$async33146(f__$1,blockable__$1,meta33147){
return (new cljs.core.async.t_cljs$core$async33146(f__$1,blockable__$1,meta33147));
});

}

return (new cljs.core.async.t_cljs$core$async33146(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33152 = arguments.length;
switch (G__33152) {
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
var G__33155 = arguments.length;
switch (G__33155) {
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
var G__33158 = arguments.length;
switch (G__33158) {
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
var val_33160 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33160);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33160,ret){
return (function (){
return fn1.call(null,val_33160);
});})(val_33160,ret))
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
var G__33162 = arguments.length;
switch (G__33162) {
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
var n__29231__auto___33164 = n;
var x_33165 = (0);
while(true){
if((x_33165 < n__29231__auto___33164)){
(a[x_33165] = (0));

var G__33166 = (x_33165 + (1));
x_33165 = G__33166;
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

var G__33167 = (i + (1));
i = G__33167;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33168 = (function (flag,meta33169){
this.flag = flag;
this.meta33169 = meta33169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33170,meta33169__$1){
var self__ = this;
var _33170__$1 = this;
return (new cljs.core.async.t_cljs$core$async33168(self__.flag,meta33169__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33170){
var self__ = this;
var _33170__$1 = this;
return self__.meta33169;
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33169","meta33169",-589843472,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33168";

cljs.core.async.t_cljs$core$async33168.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33168");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33168 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33168(flag__$1,meta33169){
return (new cljs.core.async.t_cljs$core$async33168(flag__$1,meta33169));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33168(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33171 = (function (flag,cb,meta33172){
this.flag = flag;
this.cb = cb;
this.meta33172 = meta33172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33173,meta33172__$1){
var self__ = this;
var _33173__$1 = this;
return (new cljs.core.async.t_cljs$core$async33171(self__.flag,self__.cb,meta33172__$1));
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33173){
var self__ = this;
var _33173__$1 = this;
return self__.meta33172;
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33172","meta33172",776028568,null)], null);
});

cljs.core.async.t_cljs$core$async33171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33171";

cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33171");
});

cljs.core.async.__GT_t_cljs$core$async33171 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33171(flag__$1,cb__$1,meta33172){
return (new cljs.core.async.t_cljs$core$async33171(flag__$1,cb__$1,meta33172));
});

}

return (new cljs.core.async.t_cljs$core$async33171(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33174_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33174_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33175_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33175_SHARP_,port], null));
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
var G__33176 = (i + (1));
i = G__33176;
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
var len__29455__auto___33182 = arguments.length;
var i__29456__auto___33183 = (0);
while(true){
if((i__29456__auto___33183 < len__29455__auto___33182)){
args__29462__auto__.push((arguments[i__29456__auto___33183]));

var G__33184 = (i__29456__auto___33183 + (1));
i__29456__auto___33183 = G__33184;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33179){
var map__33180 = p__33179;
var map__33180__$1 = ((((!((map__33180 == null)))?((((map__33180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33180):map__33180);
var opts = map__33180__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33177){
var G__33178 = cljs.core.first.call(null,seq33177);
var seq33177__$1 = cljs.core.next.call(null,seq33177);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33178,seq33177__$1);
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
var G__33186 = arguments.length;
switch (G__33186) {
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
var c__33099__auto___33232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___33232){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___33232){
return (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (7))){
var inst_33206 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33212_33233 = state_33210__$1;
(statearr_33212_33233[(2)] = inst_33206);

(statearr_33212_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (1))){
var state_33210__$1 = state_33210;
var statearr_33213_33234 = state_33210__$1;
(statearr_33213_33234[(2)] = null);

(statearr_33213_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (4))){
var inst_33189 = (state_33210[(7)]);
var inst_33189__$1 = (state_33210[(2)]);
var inst_33190 = (inst_33189__$1 == null);
var state_33210__$1 = (function (){var statearr_33214 = state_33210;
(statearr_33214[(7)] = inst_33189__$1);

return statearr_33214;
})();
if(cljs.core.truth_(inst_33190)){
var statearr_33215_33235 = state_33210__$1;
(statearr_33215_33235[(1)] = (5));

} else {
var statearr_33216_33236 = state_33210__$1;
(statearr_33216_33236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (13))){
var state_33210__$1 = state_33210;
var statearr_33217_33237 = state_33210__$1;
(statearr_33217_33237[(2)] = null);

(statearr_33217_33237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (6))){
var inst_33189 = (state_33210[(7)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33210__$1,(11),to,inst_33189);
} else {
if((state_val_33211 === (3))){
var inst_33208 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33210__$1,inst_33208);
} else {
if((state_val_33211 === (12))){
var state_33210__$1 = state_33210;
var statearr_33218_33238 = state_33210__$1;
(statearr_33218_33238[(2)] = null);

(statearr_33218_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (2))){
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33210__$1,(4),from);
} else {
if((state_val_33211 === (11))){
var inst_33199 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
if(cljs.core.truth_(inst_33199)){
var statearr_33219_33239 = state_33210__$1;
(statearr_33219_33239[(1)] = (12));

} else {
var statearr_33220_33240 = state_33210__$1;
(statearr_33220_33240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (9))){
var state_33210__$1 = state_33210;
var statearr_33221_33241 = state_33210__$1;
(statearr_33221_33241[(2)] = null);

(statearr_33221_33241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (5))){
var state_33210__$1 = state_33210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33222_33242 = state_33210__$1;
(statearr_33222_33242[(1)] = (8));

} else {
var statearr_33223_33243 = state_33210__$1;
(statearr_33223_33243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (14))){
var inst_33204 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33224_33244 = state_33210__$1;
(statearr_33224_33244[(2)] = inst_33204);

(statearr_33224_33244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (10))){
var inst_33196 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33225_33245 = state_33210__$1;
(statearr_33225_33245[(2)] = inst_33196);

(statearr_33225_33245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (8))){
var inst_33193 = cljs.core.async.close_BANG_.call(null,to);
var state_33210__$1 = state_33210;
var statearr_33226_33246 = state_33210__$1;
(statearr_33226_33246[(2)] = inst_33193);

(statearr_33226_33246[(1)] = (10));


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
});})(c__33099__auto___33232))
;
return ((function (switch__33011__auto__,c__33099__auto___33232){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_33210){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__33015__auto__ = e33228;
var statearr_33229_33247 = state_33210;
(statearr_33229_33247[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33248 = state_33210;
state_33210 = G__33248;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___33232))
})();
var state__33101__auto__ = (function (){var statearr_33230 = f__33100__auto__.call(null);
(statearr_33230[(6)] = c__33099__auto___33232);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___33232))
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
return (function (p__33249){
var vec__33250 = p__33249;
var v = cljs.core.nth.call(null,vec__33250,(0),null);
var p = cljs.core.nth.call(null,vec__33250,(1),null);
var job = vec__33250;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33099__auto___33421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results){
return (function (state_33257){
var state_val_33258 = (state_33257[(1)]);
if((state_val_33258 === (1))){
var state_33257__$1 = state_33257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33257__$1,(2),res,v);
} else {
if((state_val_33258 === (2))){
var inst_33254 = (state_33257[(2)]);
var inst_33255 = cljs.core.async.close_BANG_.call(null,res);
var state_33257__$1 = (function (){var statearr_33259 = state_33257;
(statearr_33259[(7)] = inst_33254);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33257__$1,inst_33255);
} else {
return null;
}
}
});})(c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results))
;
return ((function (switch__33011__auto__,c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_33260 = [null,null,null,null,null,null,null,null];
(statearr_33260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__);

(statearr_33260[(1)] = (1));

return statearr_33260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1 = (function (state_33257){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33261){if((e33261 instanceof Object)){
var ex__33015__auto__ = e33261;
var statearr_33262_33422 = state_33257;
(statearr_33262_33422[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33423 = state_33257;
state_33257 = G__33423;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = function(state_33257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1.call(this,state_33257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results))
})();
var state__33101__auto__ = (function (){var statearr_33263 = f__33100__auto__.call(null);
(statearr_33263[(6)] = c__33099__auto___33421);

return statearr_33263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___33421,res,vec__33250,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33264){
var vec__33265 = p__33264;
var v = cljs.core.nth.call(null,vec__33265,(0),null);
var p = cljs.core.nth.call(null,vec__33265,(1),null);
var job = vec__33265;
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
var n__29231__auto___33424 = n;
var __33425 = (0);
while(true){
if((__33425 < n__29231__auto___33424)){
var G__33268_33426 = type;
var G__33268_33427__$1 = (((G__33268_33426 instanceof cljs.core.Keyword))?G__33268_33426.fqn:null);
switch (G__33268_33427__$1) {
case "compute":
var c__33099__auto___33429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33425,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (__33425,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function (state_33281){
var state_val_33282 = (state_33281[(1)]);
if((state_val_33282 === (1))){
var state_33281__$1 = state_33281;
var statearr_33283_33430 = state_33281__$1;
(statearr_33283_33430[(2)] = null);

(statearr_33283_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (2))){
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33281__$1,(4),jobs);
} else {
if((state_val_33282 === (3))){
var inst_33279 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33281__$1,inst_33279);
} else {
if((state_val_33282 === (4))){
var inst_33271 = (state_33281[(2)]);
var inst_33272 = process.call(null,inst_33271);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33272)){
var statearr_33284_33431 = state_33281__$1;
(statearr_33284_33431[(1)] = (5));

} else {
var statearr_33285_33432 = state_33281__$1;
(statearr_33285_33432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (5))){
var state_33281__$1 = state_33281;
var statearr_33286_33433 = state_33281__$1;
(statearr_33286_33433[(2)] = null);

(statearr_33286_33433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (6))){
var state_33281__$1 = state_33281;
var statearr_33287_33434 = state_33281__$1;
(statearr_33287_33434[(2)] = null);

(statearr_33287_33434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (7))){
var inst_33277 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33288_33435 = state_33281__$1;
(statearr_33288_33435[(2)] = inst_33277);

(statearr_33288_33435[(1)] = (3));


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
});})(__33425,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
;
return ((function (__33425,switch__33011__auto__,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_33289 = [null,null,null,null,null,null,null];
(statearr_33289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__);

(statearr_33289[(1)] = (1));

return statearr_33289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1 = (function (state_33281){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33290){if((e33290 instanceof Object)){
var ex__33015__auto__ = e33290;
var statearr_33291_33436 = state_33281;
(statearr_33291_33436[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33437 = state_33281;
state_33281 = G__33437;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__;
})()
;})(__33425,switch__33011__auto__,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
})();
var state__33101__auto__ = (function (){var statearr_33292 = f__33100__auto__.call(null);
(statearr_33292[(6)] = c__33099__auto___33429);

return statearr_33292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(__33425,c__33099__auto___33429,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
);


break;
case "async":
var c__33099__auto___33438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33425,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (__33425,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function (state_33305){
var state_val_33306 = (state_33305[(1)]);
if((state_val_33306 === (1))){
var state_33305__$1 = state_33305;
var statearr_33307_33439 = state_33305__$1;
(statearr_33307_33439[(2)] = null);

(statearr_33307_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (2))){
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33305__$1,(4),jobs);
} else {
if((state_val_33306 === (3))){
var inst_33303 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33305__$1,inst_33303);
} else {
if((state_val_33306 === (4))){
var inst_33295 = (state_33305[(2)]);
var inst_33296 = async.call(null,inst_33295);
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33296)){
var statearr_33308_33440 = state_33305__$1;
(statearr_33308_33440[(1)] = (5));

} else {
var statearr_33309_33441 = state_33305__$1;
(statearr_33309_33441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (5))){
var state_33305__$1 = state_33305;
var statearr_33310_33442 = state_33305__$1;
(statearr_33310_33442[(2)] = null);

(statearr_33310_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (6))){
var state_33305__$1 = state_33305;
var statearr_33311_33443 = state_33305__$1;
(statearr_33311_33443[(2)] = null);

(statearr_33311_33443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (7))){
var inst_33301 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33312_33444 = state_33305__$1;
(statearr_33312_33444[(2)] = inst_33301);

(statearr_33312_33444[(1)] = (3));


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
});})(__33425,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
;
return ((function (__33425,switch__33011__auto__,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_33313 = [null,null,null,null,null,null,null];
(statearr_33313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__);

(statearr_33313[(1)] = (1));

return statearr_33313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1 = (function (state_33305){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33314){if((e33314 instanceof Object)){
var ex__33015__auto__ = e33314;
var statearr_33315_33445 = state_33305;
(statearr_33315_33445[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_33305;
state_33305 = G__33446;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = function(state_33305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1.call(this,state_33305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__;
})()
;})(__33425,switch__33011__auto__,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
})();
var state__33101__auto__ = (function (){var statearr_33316 = f__33100__auto__.call(null);
(statearr_33316[(6)] = c__33099__auto___33438);

return statearr_33316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(__33425,c__33099__auto___33438,G__33268_33426,G__33268_33427__$1,n__29231__auto___33424,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33268_33427__$1)].join('')));

}

var G__33447 = (__33425 + (1));
__33425 = G__33447;
continue;
} else {
}
break;
}

var c__33099__auto___33448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___33448,jobs,results,process,async){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___33448,jobs,results,process,async){
return (function (state_33338){
var state_val_33339 = (state_33338[(1)]);
if((state_val_33339 === (1))){
var state_33338__$1 = state_33338;
var statearr_33340_33449 = state_33338__$1;
(statearr_33340_33449[(2)] = null);

(statearr_33340_33449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33339 === (2))){
var state_33338__$1 = state_33338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33338__$1,(4),from);
} else {
if((state_val_33339 === (3))){
var inst_33336 = (state_33338[(2)]);
var state_33338__$1 = state_33338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33338__$1,inst_33336);
} else {
if((state_val_33339 === (4))){
var inst_33319 = (state_33338[(7)]);
var inst_33319__$1 = (state_33338[(2)]);
var inst_33320 = (inst_33319__$1 == null);
var state_33338__$1 = (function (){var statearr_33341 = state_33338;
(statearr_33341[(7)] = inst_33319__$1);

return statearr_33341;
})();
if(cljs.core.truth_(inst_33320)){
var statearr_33342_33450 = state_33338__$1;
(statearr_33342_33450[(1)] = (5));

} else {
var statearr_33343_33451 = state_33338__$1;
(statearr_33343_33451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33339 === (5))){
var inst_33322 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33338__$1 = state_33338;
var statearr_33344_33452 = state_33338__$1;
(statearr_33344_33452[(2)] = inst_33322);

(statearr_33344_33452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33339 === (6))){
var inst_33319 = (state_33338[(7)]);
var inst_33324 = (state_33338[(8)]);
var inst_33324__$1 = cljs.core.async.chan.call(null,(1));
var inst_33325 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33326 = [inst_33319,inst_33324__$1];
var inst_33327 = (new cljs.core.PersistentVector(null,2,(5),inst_33325,inst_33326,null));
var state_33338__$1 = (function (){var statearr_33345 = state_33338;
(statearr_33345[(8)] = inst_33324__$1);

return statearr_33345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33338__$1,(8),jobs,inst_33327);
} else {
if((state_val_33339 === (7))){
var inst_33334 = (state_33338[(2)]);
var state_33338__$1 = state_33338;
var statearr_33346_33453 = state_33338__$1;
(statearr_33346_33453[(2)] = inst_33334);

(statearr_33346_33453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33339 === (8))){
var inst_33324 = (state_33338[(8)]);
var inst_33329 = (state_33338[(2)]);
var state_33338__$1 = (function (){var statearr_33347 = state_33338;
(statearr_33347[(9)] = inst_33329);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33338__$1,(9),results,inst_33324);
} else {
if((state_val_33339 === (9))){
var inst_33331 = (state_33338[(2)]);
var state_33338__$1 = (function (){var statearr_33348 = state_33338;
(statearr_33348[(10)] = inst_33331);

return statearr_33348;
})();
var statearr_33349_33454 = state_33338__$1;
(statearr_33349_33454[(2)] = null);

(statearr_33349_33454[(1)] = (2));


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
});})(c__33099__auto___33448,jobs,results,process,async))
;
return ((function (switch__33011__auto__,c__33099__auto___33448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_33350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__);

(statearr_33350[(1)] = (1));

return statearr_33350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1 = (function (state_33338){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33351){if((e33351 instanceof Object)){
var ex__33015__auto__ = e33351;
var statearr_33352_33455 = state_33338;
(statearr_33352_33455[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33456 = state_33338;
state_33338 = G__33456;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = function(state_33338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1.call(this,state_33338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___33448,jobs,results,process,async))
})();
var state__33101__auto__ = (function (){var statearr_33353 = f__33100__auto__.call(null);
(statearr_33353[(6)] = c__33099__auto___33448);

return statearr_33353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___33448,jobs,results,process,async))
);


var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__,jobs,results,process,async){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__,jobs,results,process,async){
return (function (state_33391){
var state_val_33392 = (state_33391[(1)]);
if((state_val_33392 === (7))){
var inst_33387 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33393_33457 = state_33391__$1;
(statearr_33393_33457[(2)] = inst_33387);

(statearr_33393_33457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (20))){
var state_33391__$1 = state_33391;
var statearr_33394_33458 = state_33391__$1;
(statearr_33394_33458[(2)] = null);

(statearr_33394_33458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (1))){
var state_33391__$1 = state_33391;
var statearr_33395_33459 = state_33391__$1;
(statearr_33395_33459[(2)] = null);

(statearr_33395_33459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (4))){
var inst_33356 = (state_33391[(7)]);
var inst_33356__$1 = (state_33391[(2)]);
var inst_33357 = (inst_33356__$1 == null);
var state_33391__$1 = (function (){var statearr_33396 = state_33391;
(statearr_33396[(7)] = inst_33356__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33357)){
var statearr_33397_33460 = state_33391__$1;
(statearr_33397_33460[(1)] = (5));

} else {
var statearr_33398_33461 = state_33391__$1;
(statearr_33398_33461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (15))){
var inst_33369 = (state_33391[(8)]);
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33391__$1,(18),to,inst_33369);
} else {
if((state_val_33392 === (21))){
var inst_33382 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33399_33462 = state_33391__$1;
(statearr_33399_33462[(2)] = inst_33382);

(statearr_33399_33462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (13))){
var inst_33384 = (state_33391[(2)]);
var state_33391__$1 = (function (){var statearr_33400 = state_33391;
(statearr_33400[(9)] = inst_33384);

return statearr_33400;
})();
var statearr_33401_33463 = state_33391__$1;
(statearr_33401_33463[(2)] = null);

(statearr_33401_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (6))){
var inst_33356 = (state_33391[(7)]);
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33391__$1,(11),inst_33356);
} else {
if((state_val_33392 === (17))){
var inst_33377 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
if(cljs.core.truth_(inst_33377)){
var statearr_33402_33464 = state_33391__$1;
(statearr_33402_33464[(1)] = (19));

} else {
var statearr_33403_33465 = state_33391__$1;
(statearr_33403_33465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (3))){
var inst_33389 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33391__$1,inst_33389);
} else {
if((state_val_33392 === (12))){
var inst_33366 = (state_33391[(10)]);
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33391__$1,(14),inst_33366);
} else {
if((state_val_33392 === (2))){
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33391__$1,(4),results);
} else {
if((state_val_33392 === (19))){
var state_33391__$1 = state_33391;
var statearr_33404_33466 = state_33391__$1;
(statearr_33404_33466[(2)] = null);

(statearr_33404_33466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (11))){
var inst_33366 = (state_33391[(2)]);
var state_33391__$1 = (function (){var statearr_33405 = state_33391;
(statearr_33405[(10)] = inst_33366);

return statearr_33405;
})();
var statearr_33406_33467 = state_33391__$1;
(statearr_33406_33467[(2)] = null);

(statearr_33406_33467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (9))){
var state_33391__$1 = state_33391;
var statearr_33407_33468 = state_33391__$1;
(statearr_33407_33468[(2)] = null);

(statearr_33407_33468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (5))){
var state_33391__$1 = state_33391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33408_33469 = state_33391__$1;
(statearr_33408_33469[(1)] = (8));

} else {
var statearr_33409_33470 = state_33391__$1;
(statearr_33409_33470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (14))){
var inst_33371 = (state_33391[(11)]);
var inst_33369 = (state_33391[(8)]);
var inst_33369__$1 = (state_33391[(2)]);
var inst_33370 = (inst_33369__$1 == null);
var inst_33371__$1 = cljs.core.not.call(null,inst_33370);
var state_33391__$1 = (function (){var statearr_33410 = state_33391;
(statearr_33410[(11)] = inst_33371__$1);

(statearr_33410[(8)] = inst_33369__$1);

return statearr_33410;
})();
if(inst_33371__$1){
var statearr_33411_33471 = state_33391__$1;
(statearr_33411_33471[(1)] = (15));

} else {
var statearr_33412_33472 = state_33391__$1;
(statearr_33412_33472[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (16))){
var inst_33371 = (state_33391[(11)]);
var state_33391__$1 = state_33391;
var statearr_33413_33473 = state_33391__$1;
(statearr_33413_33473[(2)] = inst_33371);

(statearr_33413_33473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (10))){
var inst_33363 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33414_33474 = state_33391__$1;
(statearr_33414_33474[(2)] = inst_33363);

(statearr_33414_33474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (18))){
var inst_33374 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33415_33475 = state_33391__$1;
(statearr_33415_33475[(2)] = inst_33374);

(statearr_33415_33475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (8))){
var inst_33360 = cljs.core.async.close_BANG_.call(null,to);
var state_33391__$1 = state_33391;
var statearr_33416_33476 = state_33391__$1;
(statearr_33416_33476[(2)] = inst_33360);

(statearr_33416_33476[(1)] = (10));


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
});})(c__33099__auto__,jobs,results,process,async))
;
return ((function (switch__33011__auto__,c__33099__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_33417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__);

(statearr_33417[(1)] = (1));

return statearr_33417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1 = (function (state_33391){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33418){if((e33418 instanceof Object)){
var ex__33015__auto__ = e33418;
var statearr_33419_33477 = state_33391;
(statearr_33419_33477[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_33391;
state_33391 = G__33478;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__ = function(state_33391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1.call(this,state_33391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__,jobs,results,process,async))
})();
var state__33101__auto__ = (function (){var statearr_33420 = f__33100__auto__.call(null);
(statearr_33420[(6)] = c__33099__auto__);

return statearr_33420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__,jobs,results,process,async))
);

return c__33099__auto__;
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
var G__33480 = arguments.length;
switch (G__33480) {
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
var G__33483 = arguments.length;
switch (G__33483) {
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
var G__33486 = arguments.length;
switch (G__33486) {
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
var c__33099__auto___33535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___33535,tc,fc){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___33535,tc,fc){
return (function (state_33512){
var state_val_33513 = (state_33512[(1)]);
if((state_val_33513 === (7))){
var inst_33508 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
var statearr_33514_33536 = state_33512__$1;
(statearr_33514_33536[(2)] = inst_33508);

(statearr_33514_33536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (1))){
var state_33512__$1 = state_33512;
var statearr_33515_33537 = state_33512__$1;
(statearr_33515_33537[(2)] = null);

(statearr_33515_33537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (4))){
var inst_33489 = (state_33512[(7)]);
var inst_33489__$1 = (state_33512[(2)]);
var inst_33490 = (inst_33489__$1 == null);
var state_33512__$1 = (function (){var statearr_33516 = state_33512;
(statearr_33516[(7)] = inst_33489__$1);

return statearr_33516;
})();
if(cljs.core.truth_(inst_33490)){
var statearr_33517_33538 = state_33512__$1;
(statearr_33517_33538[(1)] = (5));

} else {
var statearr_33518_33539 = state_33512__$1;
(statearr_33518_33539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (13))){
var state_33512__$1 = state_33512;
var statearr_33519_33540 = state_33512__$1;
(statearr_33519_33540[(2)] = null);

(statearr_33519_33540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (6))){
var inst_33489 = (state_33512[(7)]);
var inst_33495 = p.call(null,inst_33489);
var state_33512__$1 = state_33512;
if(cljs.core.truth_(inst_33495)){
var statearr_33520_33541 = state_33512__$1;
(statearr_33520_33541[(1)] = (9));

} else {
var statearr_33521_33542 = state_33512__$1;
(statearr_33521_33542[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (3))){
var inst_33510 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33512__$1,inst_33510);
} else {
if((state_val_33513 === (12))){
var state_33512__$1 = state_33512;
var statearr_33522_33543 = state_33512__$1;
(statearr_33522_33543[(2)] = null);

(statearr_33522_33543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (2))){
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33512__$1,(4),ch);
} else {
if((state_val_33513 === (11))){
var inst_33489 = (state_33512[(7)]);
var inst_33499 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33512__$1,(8),inst_33499,inst_33489);
} else {
if((state_val_33513 === (9))){
var state_33512__$1 = state_33512;
var statearr_33523_33544 = state_33512__$1;
(statearr_33523_33544[(2)] = tc);

(statearr_33523_33544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (5))){
var inst_33492 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33493 = cljs.core.async.close_BANG_.call(null,fc);
var state_33512__$1 = (function (){var statearr_33524 = state_33512;
(statearr_33524[(8)] = inst_33492);

return statearr_33524;
})();
var statearr_33525_33545 = state_33512__$1;
(statearr_33525_33545[(2)] = inst_33493);

(statearr_33525_33545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (14))){
var inst_33506 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
var statearr_33526_33546 = state_33512__$1;
(statearr_33526_33546[(2)] = inst_33506);

(statearr_33526_33546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (10))){
var state_33512__$1 = state_33512;
var statearr_33527_33547 = state_33512__$1;
(statearr_33527_33547[(2)] = fc);

(statearr_33527_33547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (8))){
var inst_33501 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
if(cljs.core.truth_(inst_33501)){
var statearr_33528_33548 = state_33512__$1;
(statearr_33528_33548[(1)] = (12));

} else {
var statearr_33529_33549 = state_33512__$1;
(statearr_33529_33549[(1)] = (13));

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
});})(c__33099__auto___33535,tc,fc))
;
return ((function (switch__33011__auto__,c__33099__auto___33535,tc,fc){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_33530 = [null,null,null,null,null,null,null,null,null];
(statearr_33530[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_33530[(1)] = (1));

return statearr_33530;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_33512){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33531){if((e33531 instanceof Object)){
var ex__33015__auto__ = e33531;
var statearr_33532_33550 = state_33512;
(statearr_33532_33550[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33512;
state_33512 = G__33551;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_33512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_33512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___33535,tc,fc))
})();
var state__33101__auto__ = (function (){var statearr_33533 = f__33100__auto__.call(null);
(statearr_33533[(6)] = c__33099__auto___33535);

return statearr_33533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___33535,tc,fc))
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__){
return (function (state_33572){
var state_val_33573 = (state_33572[(1)]);
if((state_val_33573 === (7))){
var inst_33568 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
var statearr_33574_33592 = state_33572__$1;
(statearr_33574_33592[(2)] = inst_33568);

(statearr_33574_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (1))){
var inst_33552 = init;
var state_33572__$1 = (function (){var statearr_33575 = state_33572;
(statearr_33575[(7)] = inst_33552);

return statearr_33575;
})();
var statearr_33576_33593 = state_33572__$1;
(statearr_33576_33593[(2)] = null);

(statearr_33576_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (4))){
var inst_33555 = (state_33572[(8)]);
var inst_33555__$1 = (state_33572[(2)]);
var inst_33556 = (inst_33555__$1 == null);
var state_33572__$1 = (function (){var statearr_33577 = state_33572;
(statearr_33577[(8)] = inst_33555__$1);

return statearr_33577;
})();
if(cljs.core.truth_(inst_33556)){
var statearr_33578_33594 = state_33572__$1;
(statearr_33578_33594[(1)] = (5));

} else {
var statearr_33579_33595 = state_33572__$1;
(statearr_33579_33595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (6))){
var inst_33552 = (state_33572[(7)]);
var inst_33559 = (state_33572[(9)]);
var inst_33555 = (state_33572[(8)]);
var inst_33559__$1 = f.call(null,inst_33552,inst_33555);
var inst_33560 = cljs.core.reduced_QMARK_.call(null,inst_33559__$1);
var state_33572__$1 = (function (){var statearr_33580 = state_33572;
(statearr_33580[(9)] = inst_33559__$1);

return statearr_33580;
})();
if(inst_33560){
var statearr_33581_33596 = state_33572__$1;
(statearr_33581_33596[(1)] = (8));

} else {
var statearr_33582_33597 = state_33572__$1;
(statearr_33582_33597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (3))){
var inst_33570 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33572__$1,inst_33570);
} else {
if((state_val_33573 === (2))){
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33572__$1,(4),ch);
} else {
if((state_val_33573 === (9))){
var inst_33559 = (state_33572[(9)]);
var inst_33552 = inst_33559;
var state_33572__$1 = (function (){var statearr_33583 = state_33572;
(statearr_33583[(7)] = inst_33552);

return statearr_33583;
})();
var statearr_33584_33598 = state_33572__$1;
(statearr_33584_33598[(2)] = null);

(statearr_33584_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (5))){
var inst_33552 = (state_33572[(7)]);
var state_33572__$1 = state_33572;
var statearr_33585_33599 = state_33572__$1;
(statearr_33585_33599[(2)] = inst_33552);

(statearr_33585_33599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (10))){
var inst_33566 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
var statearr_33586_33600 = state_33572__$1;
(statearr_33586_33600[(2)] = inst_33566);

(statearr_33586_33600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (8))){
var inst_33559 = (state_33572[(9)]);
var inst_33562 = cljs.core.deref.call(null,inst_33559);
var state_33572__$1 = state_33572;
var statearr_33587_33601 = state_33572__$1;
(statearr_33587_33601[(2)] = inst_33562);

(statearr_33587_33601[(1)] = (10));


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
});})(c__33099__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33012__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33012__auto____0 = (function (){
var statearr_33588 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33588[(0)] = cljs$core$async$reduce_$_state_machine__33012__auto__);

(statearr_33588[(1)] = (1));

return statearr_33588;
});
var cljs$core$async$reduce_$_state_machine__33012__auto____1 = (function (state_33572){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33589){if((e33589 instanceof Object)){
var ex__33015__auto__ = e33589;
var statearr_33590_33602 = state_33572;
(statearr_33590_33602[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33603 = state_33572;
state_33572 = G__33603;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33012__auto__ = function(state_33572){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33012__auto____1.call(this,state_33572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33012__auto____0;
cljs$core$async$reduce_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33012__auto____1;
return cljs$core$async$reduce_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__))
})();
var state__33101__auto__ = (function (){var statearr_33591 = f__33100__auto__.call(null);
(statearr_33591[(6)] = c__33099__auto__);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__))
);

return c__33099__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__,f__$1){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__,f__$1){
return (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (1))){
var inst_33604 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33609__$1,(2),inst_33604);
} else {
if((state_val_33610 === (2))){
var inst_33606 = (state_33609[(2)]);
var inst_33607 = f__$1.call(null,inst_33606);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33609__$1,inst_33607);
} else {
return null;
}
}
});})(c__33099__auto__,f__$1))
;
return ((function (switch__33011__auto__,c__33099__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33012__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33012__auto____0 = (function (){
var statearr_33611 = [null,null,null,null,null,null,null];
(statearr_33611[(0)] = cljs$core$async$transduce_$_state_machine__33012__auto__);

(statearr_33611[(1)] = (1));

return statearr_33611;
});
var cljs$core$async$transduce_$_state_machine__33012__auto____1 = (function (state_33609){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33612){if((e33612 instanceof Object)){
var ex__33015__auto__ = e33612;
var statearr_33613_33615 = state_33609;
(statearr_33613_33615[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33616 = state_33609;
state_33609 = G__33616;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33012__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33012__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33012__auto____0;
cljs$core$async$transduce_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33012__auto____1;
return cljs$core$async$transduce_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__,f__$1))
})();
var state__33101__auto__ = (function (){var statearr_33614 = f__33100__auto__.call(null);
(statearr_33614[(6)] = c__33099__auto__);

return statearr_33614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__,f__$1))
);

return c__33099__auto__;
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
var G__33618 = arguments.length;
switch (G__33618) {
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__){
return (function (state_33643){
var state_val_33644 = (state_33643[(1)]);
if((state_val_33644 === (7))){
var inst_33625 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33645_33666 = state_33643__$1;
(statearr_33645_33666[(2)] = inst_33625);

(statearr_33645_33666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (1))){
var inst_33619 = cljs.core.seq.call(null,coll);
var inst_33620 = inst_33619;
var state_33643__$1 = (function (){var statearr_33646 = state_33643;
(statearr_33646[(7)] = inst_33620);

return statearr_33646;
})();
var statearr_33647_33667 = state_33643__$1;
(statearr_33647_33667[(2)] = null);

(statearr_33647_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (4))){
var inst_33620 = (state_33643[(7)]);
var inst_33623 = cljs.core.first.call(null,inst_33620);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33643__$1,(7),ch,inst_33623);
} else {
if((state_val_33644 === (13))){
var inst_33637 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33648_33668 = state_33643__$1;
(statearr_33648_33668[(2)] = inst_33637);

(statearr_33648_33668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (6))){
var inst_33628 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33628)){
var statearr_33649_33669 = state_33643__$1;
(statearr_33649_33669[(1)] = (8));

} else {
var statearr_33650_33670 = state_33643__$1;
(statearr_33650_33670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (3))){
var inst_33641 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33643__$1,inst_33641);
} else {
if((state_val_33644 === (12))){
var state_33643__$1 = state_33643;
var statearr_33651_33671 = state_33643__$1;
(statearr_33651_33671[(2)] = null);

(statearr_33651_33671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (2))){
var inst_33620 = (state_33643[(7)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33620)){
var statearr_33652_33672 = state_33643__$1;
(statearr_33652_33672[(1)] = (4));

} else {
var statearr_33653_33673 = state_33643__$1;
(statearr_33653_33673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (11))){
var inst_33634 = cljs.core.async.close_BANG_.call(null,ch);
var state_33643__$1 = state_33643;
var statearr_33654_33674 = state_33643__$1;
(statearr_33654_33674[(2)] = inst_33634);

(statearr_33654_33674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (9))){
var state_33643__$1 = state_33643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33655_33675 = state_33643__$1;
(statearr_33655_33675[(1)] = (11));

} else {
var statearr_33656_33676 = state_33643__$1;
(statearr_33656_33676[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (5))){
var inst_33620 = (state_33643[(7)]);
var state_33643__$1 = state_33643;
var statearr_33657_33677 = state_33643__$1;
(statearr_33657_33677[(2)] = inst_33620);

(statearr_33657_33677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (10))){
var inst_33639 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33658_33678 = state_33643__$1;
(statearr_33658_33678[(2)] = inst_33639);

(statearr_33658_33678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (8))){
var inst_33620 = (state_33643[(7)]);
var inst_33630 = cljs.core.next.call(null,inst_33620);
var inst_33620__$1 = inst_33630;
var state_33643__$1 = (function (){var statearr_33659 = state_33643;
(statearr_33659[(7)] = inst_33620__$1);

return statearr_33659;
})();
var statearr_33660_33679 = state_33643__$1;
(statearr_33660_33679[(2)] = null);

(statearr_33660_33679[(1)] = (2));


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
});})(c__33099__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_33661 = [null,null,null,null,null,null,null,null];
(statearr_33661[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_33661[(1)] = (1));

return statearr_33661;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_33643){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object)){
var ex__33015__auto__ = e33662;
var statearr_33663_33680 = state_33643;
(statearr_33663_33680[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33681 = state_33643;
state_33643 = G__33681;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_33643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_33643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__))
})();
var state__33101__auto__ = (function (){var statearr_33664 = f__33100__auto__.call(null);
(statearr_33664[(6)] = c__33099__auto__);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__))
);

return c__33099__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33682 = (function (ch,cs,meta33683){
this.ch = ch;
this.cs = cs;
this.meta33683 = meta33683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33684,meta33683__$1){
var self__ = this;
var _33684__$1 = this;
return (new cljs.core.async.t_cljs$core$async33682(self__.ch,self__.cs,meta33683__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33684){
var self__ = this;
var _33684__$1 = this;
return self__.meta33683;
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33683","meta33683",1392601863,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33682";

cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33682");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33682 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33682(ch__$1,cs__$1,meta33683){
return (new cljs.core.async.t_cljs$core$async33682(ch__$1,cs__$1,meta33683));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33682(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33099__auto___33904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___33904,cs,m,dchan,dctr,done){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___33904,cs,m,dchan,dctr,done){
return (function (state_33819){
var state_val_33820 = (state_33819[(1)]);
if((state_val_33820 === (7))){
var inst_33815 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33821_33905 = state_33819__$1;
(statearr_33821_33905[(2)] = inst_33815);

(statearr_33821_33905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (20))){
var inst_33718 = (state_33819[(7)]);
var inst_33730 = cljs.core.first.call(null,inst_33718);
var inst_33731 = cljs.core.nth.call(null,inst_33730,(0),null);
var inst_33732 = cljs.core.nth.call(null,inst_33730,(1),null);
var state_33819__$1 = (function (){var statearr_33822 = state_33819;
(statearr_33822[(8)] = inst_33731);

return statearr_33822;
})();
if(cljs.core.truth_(inst_33732)){
var statearr_33823_33906 = state_33819__$1;
(statearr_33823_33906[(1)] = (22));

} else {
var statearr_33824_33907 = state_33819__$1;
(statearr_33824_33907[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (27))){
var inst_33687 = (state_33819[(9)]);
var inst_33762 = (state_33819[(10)]);
var inst_33767 = (state_33819[(11)]);
var inst_33760 = (state_33819[(12)]);
var inst_33767__$1 = cljs.core._nth.call(null,inst_33760,inst_33762);
var inst_33768 = cljs.core.async.put_BANG_.call(null,inst_33767__$1,inst_33687,done);
var state_33819__$1 = (function (){var statearr_33825 = state_33819;
(statearr_33825[(11)] = inst_33767__$1);

return statearr_33825;
})();
if(cljs.core.truth_(inst_33768)){
var statearr_33826_33908 = state_33819__$1;
(statearr_33826_33908[(1)] = (30));

} else {
var statearr_33827_33909 = state_33819__$1;
(statearr_33827_33909[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (1))){
var state_33819__$1 = state_33819;
var statearr_33828_33910 = state_33819__$1;
(statearr_33828_33910[(2)] = null);

(statearr_33828_33910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (24))){
var inst_33718 = (state_33819[(7)]);
var inst_33737 = (state_33819[(2)]);
var inst_33738 = cljs.core.next.call(null,inst_33718);
var inst_33696 = inst_33738;
var inst_33697 = null;
var inst_33698 = (0);
var inst_33699 = (0);
var state_33819__$1 = (function (){var statearr_33829 = state_33819;
(statearr_33829[(13)] = inst_33699);

(statearr_33829[(14)] = inst_33696);

(statearr_33829[(15)] = inst_33698);

(statearr_33829[(16)] = inst_33697);

(statearr_33829[(17)] = inst_33737);

return statearr_33829;
})();
var statearr_33830_33911 = state_33819__$1;
(statearr_33830_33911[(2)] = null);

(statearr_33830_33911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (39))){
var state_33819__$1 = state_33819;
var statearr_33834_33912 = state_33819__$1;
(statearr_33834_33912[(2)] = null);

(statearr_33834_33912[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (4))){
var inst_33687 = (state_33819[(9)]);
var inst_33687__$1 = (state_33819[(2)]);
var inst_33688 = (inst_33687__$1 == null);
var state_33819__$1 = (function (){var statearr_33835 = state_33819;
(statearr_33835[(9)] = inst_33687__$1);

return statearr_33835;
})();
if(cljs.core.truth_(inst_33688)){
var statearr_33836_33913 = state_33819__$1;
(statearr_33836_33913[(1)] = (5));

} else {
var statearr_33837_33914 = state_33819__$1;
(statearr_33837_33914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (15))){
var inst_33699 = (state_33819[(13)]);
var inst_33696 = (state_33819[(14)]);
var inst_33698 = (state_33819[(15)]);
var inst_33697 = (state_33819[(16)]);
var inst_33714 = (state_33819[(2)]);
var inst_33715 = (inst_33699 + (1));
var tmp33831 = inst_33696;
var tmp33832 = inst_33698;
var tmp33833 = inst_33697;
var inst_33696__$1 = tmp33831;
var inst_33697__$1 = tmp33833;
var inst_33698__$1 = tmp33832;
var inst_33699__$1 = inst_33715;
var state_33819__$1 = (function (){var statearr_33838 = state_33819;
(statearr_33838[(13)] = inst_33699__$1);

(statearr_33838[(18)] = inst_33714);

(statearr_33838[(14)] = inst_33696__$1);

(statearr_33838[(15)] = inst_33698__$1);

(statearr_33838[(16)] = inst_33697__$1);

return statearr_33838;
})();
var statearr_33839_33915 = state_33819__$1;
(statearr_33839_33915[(2)] = null);

(statearr_33839_33915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (21))){
var inst_33741 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33843_33916 = state_33819__$1;
(statearr_33843_33916[(2)] = inst_33741);

(statearr_33843_33916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (31))){
var inst_33767 = (state_33819[(11)]);
var inst_33771 = done.call(null,null);
var inst_33772 = cljs.core.async.untap_STAR_.call(null,m,inst_33767);
var state_33819__$1 = (function (){var statearr_33844 = state_33819;
(statearr_33844[(19)] = inst_33771);

return statearr_33844;
})();
var statearr_33845_33917 = state_33819__$1;
(statearr_33845_33917[(2)] = inst_33772);

(statearr_33845_33917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (32))){
var inst_33762 = (state_33819[(10)]);
var inst_33760 = (state_33819[(12)]);
var inst_33759 = (state_33819[(20)]);
var inst_33761 = (state_33819[(21)]);
var inst_33774 = (state_33819[(2)]);
var inst_33775 = (inst_33762 + (1));
var tmp33840 = inst_33760;
var tmp33841 = inst_33759;
var tmp33842 = inst_33761;
var inst_33759__$1 = tmp33841;
var inst_33760__$1 = tmp33840;
var inst_33761__$1 = tmp33842;
var inst_33762__$1 = inst_33775;
var state_33819__$1 = (function (){var statearr_33846 = state_33819;
(statearr_33846[(10)] = inst_33762__$1);

(statearr_33846[(12)] = inst_33760__$1);

(statearr_33846[(20)] = inst_33759__$1);

(statearr_33846[(22)] = inst_33774);

(statearr_33846[(21)] = inst_33761__$1);

return statearr_33846;
})();
var statearr_33847_33918 = state_33819__$1;
(statearr_33847_33918[(2)] = null);

(statearr_33847_33918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (40))){
var inst_33787 = (state_33819[(23)]);
var inst_33791 = done.call(null,null);
var inst_33792 = cljs.core.async.untap_STAR_.call(null,m,inst_33787);
var state_33819__$1 = (function (){var statearr_33848 = state_33819;
(statearr_33848[(24)] = inst_33791);

return statearr_33848;
})();
var statearr_33849_33919 = state_33819__$1;
(statearr_33849_33919[(2)] = inst_33792);

(statearr_33849_33919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (33))){
var inst_33778 = (state_33819[(25)]);
var inst_33780 = cljs.core.chunked_seq_QMARK_.call(null,inst_33778);
var state_33819__$1 = state_33819;
if(inst_33780){
var statearr_33850_33920 = state_33819__$1;
(statearr_33850_33920[(1)] = (36));

} else {
var statearr_33851_33921 = state_33819__$1;
(statearr_33851_33921[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (13))){
var inst_33708 = (state_33819[(26)]);
var inst_33711 = cljs.core.async.close_BANG_.call(null,inst_33708);
var state_33819__$1 = state_33819;
var statearr_33852_33922 = state_33819__$1;
(statearr_33852_33922[(2)] = inst_33711);

(statearr_33852_33922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (22))){
var inst_33731 = (state_33819[(8)]);
var inst_33734 = cljs.core.async.close_BANG_.call(null,inst_33731);
var state_33819__$1 = state_33819;
var statearr_33853_33923 = state_33819__$1;
(statearr_33853_33923[(2)] = inst_33734);

(statearr_33853_33923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (36))){
var inst_33778 = (state_33819[(25)]);
var inst_33782 = cljs.core.chunk_first.call(null,inst_33778);
var inst_33783 = cljs.core.chunk_rest.call(null,inst_33778);
var inst_33784 = cljs.core.count.call(null,inst_33782);
var inst_33759 = inst_33783;
var inst_33760 = inst_33782;
var inst_33761 = inst_33784;
var inst_33762 = (0);
var state_33819__$1 = (function (){var statearr_33854 = state_33819;
(statearr_33854[(10)] = inst_33762);

(statearr_33854[(12)] = inst_33760);

(statearr_33854[(20)] = inst_33759);

(statearr_33854[(21)] = inst_33761);

return statearr_33854;
})();
var statearr_33855_33924 = state_33819__$1;
(statearr_33855_33924[(2)] = null);

(statearr_33855_33924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (41))){
var inst_33778 = (state_33819[(25)]);
var inst_33794 = (state_33819[(2)]);
var inst_33795 = cljs.core.next.call(null,inst_33778);
var inst_33759 = inst_33795;
var inst_33760 = null;
var inst_33761 = (0);
var inst_33762 = (0);
var state_33819__$1 = (function (){var statearr_33856 = state_33819;
(statearr_33856[(10)] = inst_33762);

(statearr_33856[(12)] = inst_33760);

(statearr_33856[(20)] = inst_33759);

(statearr_33856[(27)] = inst_33794);

(statearr_33856[(21)] = inst_33761);

return statearr_33856;
})();
var statearr_33857_33925 = state_33819__$1;
(statearr_33857_33925[(2)] = null);

(statearr_33857_33925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (43))){
var state_33819__$1 = state_33819;
var statearr_33858_33926 = state_33819__$1;
(statearr_33858_33926[(2)] = null);

(statearr_33858_33926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (29))){
var inst_33803 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33859_33927 = state_33819__$1;
(statearr_33859_33927[(2)] = inst_33803);

(statearr_33859_33927[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (44))){
var inst_33812 = (state_33819[(2)]);
var state_33819__$1 = (function (){var statearr_33860 = state_33819;
(statearr_33860[(28)] = inst_33812);

return statearr_33860;
})();
var statearr_33861_33928 = state_33819__$1;
(statearr_33861_33928[(2)] = null);

(statearr_33861_33928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (6))){
var inst_33751 = (state_33819[(29)]);
var inst_33750 = cljs.core.deref.call(null,cs);
var inst_33751__$1 = cljs.core.keys.call(null,inst_33750);
var inst_33752 = cljs.core.count.call(null,inst_33751__$1);
var inst_33753 = cljs.core.reset_BANG_.call(null,dctr,inst_33752);
var inst_33758 = cljs.core.seq.call(null,inst_33751__$1);
var inst_33759 = inst_33758;
var inst_33760 = null;
var inst_33761 = (0);
var inst_33762 = (0);
var state_33819__$1 = (function (){var statearr_33862 = state_33819;
(statearr_33862[(29)] = inst_33751__$1);

(statearr_33862[(10)] = inst_33762);

(statearr_33862[(12)] = inst_33760);

(statearr_33862[(20)] = inst_33759);

(statearr_33862[(21)] = inst_33761);

(statearr_33862[(30)] = inst_33753);

return statearr_33862;
})();
var statearr_33863_33929 = state_33819__$1;
(statearr_33863_33929[(2)] = null);

(statearr_33863_33929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (28))){
var inst_33778 = (state_33819[(25)]);
var inst_33759 = (state_33819[(20)]);
var inst_33778__$1 = cljs.core.seq.call(null,inst_33759);
var state_33819__$1 = (function (){var statearr_33864 = state_33819;
(statearr_33864[(25)] = inst_33778__$1);

return statearr_33864;
})();
if(inst_33778__$1){
var statearr_33865_33930 = state_33819__$1;
(statearr_33865_33930[(1)] = (33));

} else {
var statearr_33866_33931 = state_33819__$1;
(statearr_33866_33931[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (25))){
var inst_33762 = (state_33819[(10)]);
var inst_33761 = (state_33819[(21)]);
var inst_33764 = (inst_33762 < inst_33761);
var inst_33765 = inst_33764;
var state_33819__$1 = state_33819;
if(cljs.core.truth_(inst_33765)){
var statearr_33867_33932 = state_33819__$1;
(statearr_33867_33932[(1)] = (27));

} else {
var statearr_33868_33933 = state_33819__$1;
(statearr_33868_33933[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (34))){
var state_33819__$1 = state_33819;
var statearr_33869_33934 = state_33819__$1;
(statearr_33869_33934[(2)] = null);

(statearr_33869_33934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (17))){
var state_33819__$1 = state_33819;
var statearr_33870_33935 = state_33819__$1;
(statearr_33870_33935[(2)] = null);

(statearr_33870_33935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (3))){
var inst_33817 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33819__$1,inst_33817);
} else {
if((state_val_33820 === (12))){
var inst_33746 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33871_33936 = state_33819__$1;
(statearr_33871_33936[(2)] = inst_33746);

(statearr_33871_33936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (2))){
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33819__$1,(4),ch);
} else {
if((state_val_33820 === (23))){
var state_33819__$1 = state_33819;
var statearr_33872_33937 = state_33819__$1;
(statearr_33872_33937[(2)] = null);

(statearr_33872_33937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (35))){
var inst_33801 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33873_33938 = state_33819__$1;
(statearr_33873_33938[(2)] = inst_33801);

(statearr_33873_33938[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (19))){
var inst_33718 = (state_33819[(7)]);
var inst_33722 = cljs.core.chunk_first.call(null,inst_33718);
var inst_33723 = cljs.core.chunk_rest.call(null,inst_33718);
var inst_33724 = cljs.core.count.call(null,inst_33722);
var inst_33696 = inst_33723;
var inst_33697 = inst_33722;
var inst_33698 = inst_33724;
var inst_33699 = (0);
var state_33819__$1 = (function (){var statearr_33874 = state_33819;
(statearr_33874[(13)] = inst_33699);

(statearr_33874[(14)] = inst_33696);

(statearr_33874[(15)] = inst_33698);

(statearr_33874[(16)] = inst_33697);

return statearr_33874;
})();
var statearr_33875_33939 = state_33819__$1;
(statearr_33875_33939[(2)] = null);

(statearr_33875_33939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (11))){
var inst_33696 = (state_33819[(14)]);
var inst_33718 = (state_33819[(7)]);
var inst_33718__$1 = cljs.core.seq.call(null,inst_33696);
var state_33819__$1 = (function (){var statearr_33876 = state_33819;
(statearr_33876[(7)] = inst_33718__$1);

return statearr_33876;
})();
if(inst_33718__$1){
var statearr_33877_33940 = state_33819__$1;
(statearr_33877_33940[(1)] = (16));

} else {
var statearr_33878_33941 = state_33819__$1;
(statearr_33878_33941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (9))){
var inst_33748 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33879_33942 = state_33819__$1;
(statearr_33879_33942[(2)] = inst_33748);

(statearr_33879_33942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (5))){
var inst_33694 = cljs.core.deref.call(null,cs);
var inst_33695 = cljs.core.seq.call(null,inst_33694);
var inst_33696 = inst_33695;
var inst_33697 = null;
var inst_33698 = (0);
var inst_33699 = (0);
var state_33819__$1 = (function (){var statearr_33880 = state_33819;
(statearr_33880[(13)] = inst_33699);

(statearr_33880[(14)] = inst_33696);

(statearr_33880[(15)] = inst_33698);

(statearr_33880[(16)] = inst_33697);

return statearr_33880;
})();
var statearr_33881_33943 = state_33819__$1;
(statearr_33881_33943[(2)] = null);

(statearr_33881_33943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (14))){
var state_33819__$1 = state_33819;
var statearr_33882_33944 = state_33819__$1;
(statearr_33882_33944[(2)] = null);

(statearr_33882_33944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (45))){
var inst_33809 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33883_33945 = state_33819__$1;
(statearr_33883_33945[(2)] = inst_33809);

(statearr_33883_33945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (26))){
var inst_33751 = (state_33819[(29)]);
var inst_33805 = (state_33819[(2)]);
var inst_33806 = cljs.core.seq.call(null,inst_33751);
var state_33819__$1 = (function (){var statearr_33884 = state_33819;
(statearr_33884[(31)] = inst_33805);

return statearr_33884;
})();
if(inst_33806){
var statearr_33885_33946 = state_33819__$1;
(statearr_33885_33946[(1)] = (42));

} else {
var statearr_33886_33947 = state_33819__$1;
(statearr_33886_33947[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (16))){
var inst_33718 = (state_33819[(7)]);
var inst_33720 = cljs.core.chunked_seq_QMARK_.call(null,inst_33718);
var state_33819__$1 = state_33819;
if(inst_33720){
var statearr_33887_33948 = state_33819__$1;
(statearr_33887_33948[(1)] = (19));

} else {
var statearr_33888_33949 = state_33819__$1;
(statearr_33888_33949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (38))){
var inst_33798 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33889_33950 = state_33819__$1;
(statearr_33889_33950[(2)] = inst_33798);

(statearr_33889_33950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (30))){
var state_33819__$1 = state_33819;
var statearr_33890_33951 = state_33819__$1;
(statearr_33890_33951[(2)] = null);

(statearr_33890_33951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (10))){
var inst_33699 = (state_33819[(13)]);
var inst_33697 = (state_33819[(16)]);
var inst_33707 = cljs.core._nth.call(null,inst_33697,inst_33699);
var inst_33708 = cljs.core.nth.call(null,inst_33707,(0),null);
var inst_33709 = cljs.core.nth.call(null,inst_33707,(1),null);
var state_33819__$1 = (function (){var statearr_33891 = state_33819;
(statearr_33891[(26)] = inst_33708);

return statearr_33891;
})();
if(cljs.core.truth_(inst_33709)){
var statearr_33892_33952 = state_33819__$1;
(statearr_33892_33952[(1)] = (13));

} else {
var statearr_33893_33953 = state_33819__$1;
(statearr_33893_33953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (18))){
var inst_33744 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33894_33954 = state_33819__$1;
(statearr_33894_33954[(2)] = inst_33744);

(statearr_33894_33954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (42))){
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33819__$1,(45),dchan);
} else {
if((state_val_33820 === (37))){
var inst_33687 = (state_33819[(9)]);
var inst_33778 = (state_33819[(25)]);
var inst_33787 = (state_33819[(23)]);
var inst_33787__$1 = cljs.core.first.call(null,inst_33778);
var inst_33788 = cljs.core.async.put_BANG_.call(null,inst_33787__$1,inst_33687,done);
var state_33819__$1 = (function (){var statearr_33895 = state_33819;
(statearr_33895[(23)] = inst_33787__$1);

return statearr_33895;
})();
if(cljs.core.truth_(inst_33788)){
var statearr_33896_33955 = state_33819__$1;
(statearr_33896_33955[(1)] = (39));

} else {
var statearr_33897_33956 = state_33819__$1;
(statearr_33897_33956[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (8))){
var inst_33699 = (state_33819[(13)]);
var inst_33698 = (state_33819[(15)]);
var inst_33701 = (inst_33699 < inst_33698);
var inst_33702 = inst_33701;
var state_33819__$1 = state_33819;
if(cljs.core.truth_(inst_33702)){
var statearr_33898_33957 = state_33819__$1;
(statearr_33898_33957[(1)] = (10));

} else {
var statearr_33899_33958 = state_33819__$1;
(statearr_33899_33958[(1)] = (11));

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
});})(c__33099__auto___33904,cs,m,dchan,dctr,done))
;
return ((function (switch__33011__auto__,c__33099__auto___33904,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33012__auto__ = null;
var cljs$core$async$mult_$_state_machine__33012__auto____0 = (function (){
var statearr_33900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33900[(0)] = cljs$core$async$mult_$_state_machine__33012__auto__);

(statearr_33900[(1)] = (1));

return statearr_33900;
});
var cljs$core$async$mult_$_state_machine__33012__auto____1 = (function (state_33819){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_33819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e33901){if((e33901 instanceof Object)){
var ex__33015__auto__ = e33901;
var statearr_33902_33959 = state_33819;
(statearr_33902_33959[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_33819;
state_33819 = G__33960;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33012__auto__ = function(state_33819){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33012__auto____1.call(this,state_33819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33012__auto____0;
cljs$core$async$mult_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33012__auto____1;
return cljs$core$async$mult_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___33904,cs,m,dchan,dctr,done))
})();
var state__33101__auto__ = (function (){var statearr_33903 = f__33100__auto__.call(null);
(statearr_33903[(6)] = c__33099__auto___33904);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___33904,cs,m,dchan,dctr,done))
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
var G__33962 = arguments.length;
switch (G__33962) {
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
var len__29455__auto___33974 = arguments.length;
var i__29456__auto___33975 = (0);
while(true){
if((i__29456__auto___33975 < len__29455__auto___33974)){
args__29462__auto__.push((arguments[i__29456__auto___33975]));

var G__33976 = (i__29456__auto___33975 + (1));
i__29456__auto___33975 = G__33976;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33968){
var map__33969 = p__33968;
var map__33969__$1 = ((((!((map__33969 == null)))?((((map__33969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33969):map__33969);
var opts = map__33969__$1;
var statearr_33971_33977 = state;
(statearr_33971_33977[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33969,map__33969__$1,opts){
return (function (val){
var statearr_33972_33978 = state;
(statearr_33972_33978[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33969,map__33969__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33973_33979 = state;
(statearr_33973_33979[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33964){
var G__33965 = cljs.core.first.call(null,seq33964);
var seq33964__$1 = cljs.core.next.call(null,seq33964);
var G__33966 = cljs.core.first.call(null,seq33964__$1);
var seq33964__$2 = cljs.core.next.call(null,seq33964__$1);
var G__33967 = cljs.core.first.call(null,seq33964__$2);
var seq33964__$3 = cljs.core.next.call(null,seq33964__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33965,G__33966,G__33967,seq33964__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33980 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33981){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33981 = meta33981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33982,meta33981__$1){
var self__ = this;
var _33982__$1 = this;
return (new cljs.core.async.t_cljs$core$async33980(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33981__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33982){
var self__ = this;
var _33982__$1 = this;
return self__.meta33981;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33980.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33981","meta33981",-1409699650,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33980";

cljs.core.async.t_cljs$core$async33980.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async33980");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33980 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33980(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33981){
return (new cljs.core.async.t_cljs$core$async33980(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33981));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33980(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33099__auto___34144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34084){
var state_val_34085 = (state_34084[(1)]);
if((state_val_34085 === (7))){
var inst_33999 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34086_34145 = state_34084__$1;
(statearr_34086_34145[(2)] = inst_33999);

(statearr_34086_34145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (20))){
var inst_34011 = (state_34084[(7)]);
var state_34084__$1 = state_34084;
var statearr_34087_34146 = state_34084__$1;
(statearr_34087_34146[(2)] = inst_34011);

(statearr_34087_34146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (27))){
var state_34084__$1 = state_34084;
var statearr_34088_34147 = state_34084__$1;
(statearr_34088_34147[(2)] = null);

(statearr_34088_34147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (1))){
var inst_33986 = (state_34084[(8)]);
var inst_33986__$1 = calc_state.call(null);
var inst_33988 = (inst_33986__$1 == null);
var inst_33989 = cljs.core.not.call(null,inst_33988);
var state_34084__$1 = (function (){var statearr_34089 = state_34084;
(statearr_34089[(8)] = inst_33986__$1);

return statearr_34089;
})();
if(inst_33989){
var statearr_34090_34148 = state_34084__$1;
(statearr_34090_34148[(1)] = (2));

} else {
var statearr_34091_34149 = state_34084__$1;
(statearr_34091_34149[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (24))){
var inst_34035 = (state_34084[(9)]);
var inst_34044 = (state_34084[(10)]);
var inst_34058 = (state_34084[(11)]);
var inst_34058__$1 = inst_34035.call(null,inst_34044);
var state_34084__$1 = (function (){var statearr_34092 = state_34084;
(statearr_34092[(11)] = inst_34058__$1);

return statearr_34092;
})();
if(cljs.core.truth_(inst_34058__$1)){
var statearr_34093_34150 = state_34084__$1;
(statearr_34093_34150[(1)] = (29));

} else {
var statearr_34094_34151 = state_34084__$1;
(statearr_34094_34151[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (4))){
var inst_34002 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34002)){
var statearr_34095_34152 = state_34084__$1;
(statearr_34095_34152[(1)] = (8));

} else {
var statearr_34096_34153 = state_34084__$1;
(statearr_34096_34153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (15))){
var inst_34029 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34029)){
var statearr_34097_34154 = state_34084__$1;
(statearr_34097_34154[(1)] = (19));

} else {
var statearr_34098_34155 = state_34084__$1;
(statearr_34098_34155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (21))){
var inst_34034 = (state_34084[(12)]);
var inst_34034__$1 = (state_34084[(2)]);
var inst_34035 = cljs.core.get.call(null,inst_34034__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34036 = cljs.core.get.call(null,inst_34034__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34037 = cljs.core.get.call(null,inst_34034__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34084__$1 = (function (){var statearr_34099 = state_34084;
(statearr_34099[(9)] = inst_34035);

(statearr_34099[(13)] = inst_34036);

(statearr_34099[(12)] = inst_34034__$1);

return statearr_34099;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34084__$1,(22),inst_34037);
} else {
if((state_val_34085 === (31))){
var inst_34066 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34066)){
var statearr_34100_34156 = state_34084__$1;
(statearr_34100_34156[(1)] = (32));

} else {
var statearr_34101_34157 = state_34084__$1;
(statearr_34101_34157[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (32))){
var inst_34043 = (state_34084[(14)]);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34084__$1,(35),out,inst_34043);
} else {
if((state_val_34085 === (33))){
var inst_34034 = (state_34084[(12)]);
var inst_34011 = inst_34034;
var state_34084__$1 = (function (){var statearr_34102 = state_34084;
(statearr_34102[(7)] = inst_34011);

return statearr_34102;
})();
var statearr_34103_34158 = state_34084__$1;
(statearr_34103_34158[(2)] = null);

(statearr_34103_34158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (13))){
var inst_34011 = (state_34084[(7)]);
var inst_34018 = inst_34011.cljs$lang$protocol_mask$partition0$;
var inst_34019 = (inst_34018 & (64));
var inst_34020 = inst_34011.cljs$core$ISeq$;
var inst_34021 = (cljs.core.PROTOCOL_SENTINEL === inst_34020);
var inst_34022 = (inst_34019) || (inst_34021);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34022)){
var statearr_34104_34159 = state_34084__$1;
(statearr_34104_34159[(1)] = (16));

} else {
var statearr_34105_34160 = state_34084__$1;
(statearr_34105_34160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (22))){
var inst_34043 = (state_34084[(14)]);
var inst_34044 = (state_34084[(10)]);
var inst_34042 = (state_34084[(2)]);
var inst_34043__$1 = cljs.core.nth.call(null,inst_34042,(0),null);
var inst_34044__$1 = cljs.core.nth.call(null,inst_34042,(1),null);
var inst_34045 = (inst_34043__$1 == null);
var inst_34046 = cljs.core._EQ_.call(null,inst_34044__$1,change);
var inst_34047 = (inst_34045) || (inst_34046);
var state_34084__$1 = (function (){var statearr_34106 = state_34084;
(statearr_34106[(14)] = inst_34043__$1);

(statearr_34106[(10)] = inst_34044__$1);

return statearr_34106;
})();
if(cljs.core.truth_(inst_34047)){
var statearr_34107_34161 = state_34084__$1;
(statearr_34107_34161[(1)] = (23));

} else {
var statearr_34108_34162 = state_34084__$1;
(statearr_34108_34162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (36))){
var inst_34034 = (state_34084[(12)]);
var inst_34011 = inst_34034;
var state_34084__$1 = (function (){var statearr_34109 = state_34084;
(statearr_34109[(7)] = inst_34011);

return statearr_34109;
})();
var statearr_34110_34163 = state_34084__$1;
(statearr_34110_34163[(2)] = null);

(statearr_34110_34163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (29))){
var inst_34058 = (state_34084[(11)]);
var state_34084__$1 = state_34084;
var statearr_34111_34164 = state_34084__$1;
(statearr_34111_34164[(2)] = inst_34058);

(statearr_34111_34164[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (6))){
var state_34084__$1 = state_34084;
var statearr_34112_34165 = state_34084__$1;
(statearr_34112_34165[(2)] = false);

(statearr_34112_34165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (28))){
var inst_34054 = (state_34084[(2)]);
var inst_34055 = calc_state.call(null);
var inst_34011 = inst_34055;
var state_34084__$1 = (function (){var statearr_34113 = state_34084;
(statearr_34113[(15)] = inst_34054);

(statearr_34113[(7)] = inst_34011);

return statearr_34113;
})();
var statearr_34114_34166 = state_34084__$1;
(statearr_34114_34166[(2)] = null);

(statearr_34114_34166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (25))){
var inst_34080 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34115_34167 = state_34084__$1;
(statearr_34115_34167[(2)] = inst_34080);

(statearr_34115_34167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (34))){
var inst_34078 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34116_34168 = state_34084__$1;
(statearr_34116_34168[(2)] = inst_34078);

(statearr_34116_34168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (17))){
var state_34084__$1 = state_34084;
var statearr_34117_34169 = state_34084__$1;
(statearr_34117_34169[(2)] = false);

(statearr_34117_34169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (3))){
var state_34084__$1 = state_34084;
var statearr_34118_34170 = state_34084__$1;
(statearr_34118_34170[(2)] = false);

(statearr_34118_34170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (12))){
var inst_34082 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34084__$1,inst_34082);
} else {
if((state_val_34085 === (2))){
var inst_33986 = (state_34084[(8)]);
var inst_33991 = inst_33986.cljs$lang$protocol_mask$partition0$;
var inst_33992 = (inst_33991 & (64));
var inst_33993 = inst_33986.cljs$core$ISeq$;
var inst_33994 = (cljs.core.PROTOCOL_SENTINEL === inst_33993);
var inst_33995 = (inst_33992) || (inst_33994);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_33995)){
var statearr_34119_34171 = state_34084__$1;
(statearr_34119_34171[(1)] = (5));

} else {
var statearr_34120_34172 = state_34084__$1;
(statearr_34120_34172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (23))){
var inst_34043 = (state_34084[(14)]);
var inst_34049 = (inst_34043 == null);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34049)){
var statearr_34121_34173 = state_34084__$1;
(statearr_34121_34173[(1)] = (26));

} else {
var statearr_34122_34174 = state_34084__$1;
(statearr_34122_34174[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (35))){
var inst_34069 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34069)){
var statearr_34123_34175 = state_34084__$1;
(statearr_34123_34175[(1)] = (36));

} else {
var statearr_34124_34176 = state_34084__$1;
(statearr_34124_34176[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (19))){
var inst_34011 = (state_34084[(7)]);
var inst_34031 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34011);
var state_34084__$1 = state_34084;
var statearr_34125_34177 = state_34084__$1;
(statearr_34125_34177[(2)] = inst_34031);

(statearr_34125_34177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (11))){
var inst_34011 = (state_34084[(7)]);
var inst_34015 = (inst_34011 == null);
var inst_34016 = cljs.core.not.call(null,inst_34015);
var state_34084__$1 = state_34084;
if(inst_34016){
var statearr_34126_34178 = state_34084__$1;
(statearr_34126_34178[(1)] = (13));

} else {
var statearr_34127_34179 = state_34084__$1;
(statearr_34127_34179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (9))){
var inst_33986 = (state_34084[(8)]);
var state_34084__$1 = state_34084;
var statearr_34128_34180 = state_34084__$1;
(statearr_34128_34180[(2)] = inst_33986);

(statearr_34128_34180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (5))){
var state_34084__$1 = state_34084;
var statearr_34129_34181 = state_34084__$1;
(statearr_34129_34181[(2)] = true);

(statearr_34129_34181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (14))){
var state_34084__$1 = state_34084;
var statearr_34130_34182 = state_34084__$1;
(statearr_34130_34182[(2)] = false);

(statearr_34130_34182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (26))){
var inst_34044 = (state_34084[(10)]);
var inst_34051 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34044);
var state_34084__$1 = state_34084;
var statearr_34131_34183 = state_34084__$1;
(statearr_34131_34183[(2)] = inst_34051);

(statearr_34131_34183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (16))){
var state_34084__$1 = state_34084;
var statearr_34132_34184 = state_34084__$1;
(statearr_34132_34184[(2)] = true);

(statearr_34132_34184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (38))){
var inst_34074 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34133_34185 = state_34084__$1;
(statearr_34133_34185[(2)] = inst_34074);

(statearr_34133_34185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (30))){
var inst_34035 = (state_34084[(9)]);
var inst_34036 = (state_34084[(13)]);
var inst_34044 = (state_34084[(10)]);
var inst_34061 = cljs.core.empty_QMARK_.call(null,inst_34035);
var inst_34062 = inst_34036.call(null,inst_34044);
var inst_34063 = cljs.core.not.call(null,inst_34062);
var inst_34064 = (inst_34061) && (inst_34063);
var state_34084__$1 = state_34084;
var statearr_34134_34186 = state_34084__$1;
(statearr_34134_34186[(2)] = inst_34064);

(statearr_34134_34186[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (10))){
var inst_33986 = (state_34084[(8)]);
var inst_34007 = (state_34084[(2)]);
var inst_34008 = cljs.core.get.call(null,inst_34007,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34009 = cljs.core.get.call(null,inst_34007,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34010 = cljs.core.get.call(null,inst_34007,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34011 = inst_33986;
var state_34084__$1 = (function (){var statearr_34135 = state_34084;
(statearr_34135[(16)] = inst_34010);

(statearr_34135[(7)] = inst_34011);

(statearr_34135[(17)] = inst_34008);

(statearr_34135[(18)] = inst_34009);

return statearr_34135;
})();
var statearr_34136_34187 = state_34084__$1;
(statearr_34136_34187[(2)] = null);

(statearr_34136_34187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (18))){
var inst_34026 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34137_34188 = state_34084__$1;
(statearr_34137_34188[(2)] = inst_34026);

(statearr_34137_34188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (37))){
var state_34084__$1 = state_34084;
var statearr_34138_34189 = state_34084__$1;
(statearr_34138_34189[(2)] = null);

(statearr_34138_34189[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (8))){
var inst_33986 = (state_34084[(8)]);
var inst_34004 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33986);
var state_34084__$1 = state_34084;
var statearr_34139_34190 = state_34084__$1;
(statearr_34139_34190[(2)] = inst_34004);

(statearr_34139_34190[(1)] = (10));


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
});})(c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33011__auto__,c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33012__auto__ = null;
var cljs$core$async$mix_$_state_machine__33012__auto____0 = (function (){
var statearr_34140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34140[(0)] = cljs$core$async$mix_$_state_machine__33012__auto__);

(statearr_34140[(1)] = (1));

return statearr_34140;
});
var cljs$core$async$mix_$_state_machine__33012__auto____1 = (function (state_34084){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34141){if((e34141 instanceof Object)){
var ex__33015__auto__ = e34141;
var statearr_34142_34191 = state_34084;
(statearr_34142_34191[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34192 = state_34084;
state_34084 = G__34192;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33012__auto__ = function(state_34084){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33012__auto____1.call(this,state_34084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33012__auto____0;
cljs$core$async$mix_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33012__auto____1;
return cljs$core$async$mix_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33101__auto__ = (function (){var statearr_34143 = f__33100__auto__.call(null);
(statearr_34143[(6)] = c__33099__auto___34144);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34194 = arguments.length;
switch (G__34194) {
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
var G__34198 = arguments.length;
switch (G__34198) {
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
return (function (p1__34196_SHARP_){
if(cljs.core.truth_(p1__34196_SHARP_.call(null,topic))){
return p1__34196_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34196_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34199 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34200){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34200 = meta34200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34201,meta34200__$1){
var self__ = this;
var _34201__$1 = this;
return (new cljs.core.async.t_cljs$core$async34199(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34200__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34201){
var self__ = this;
var _34201__$1 = this;
return self__.meta34200;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34200","meta34200",-1220706268,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34199";

cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34199");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34199 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34199(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34200){
return (new cljs.core.async.t_cljs$core$async34199(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34200));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34199(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33099__auto___34319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34319,mults,ensure_mult,p){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34319,mults,ensure_mult,p){
return (function (state_34273){
var state_val_34274 = (state_34273[(1)]);
if((state_val_34274 === (7))){
var inst_34269 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34275_34320 = state_34273__$1;
(statearr_34275_34320[(2)] = inst_34269);

(statearr_34275_34320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (20))){
var state_34273__$1 = state_34273;
var statearr_34276_34321 = state_34273__$1;
(statearr_34276_34321[(2)] = null);

(statearr_34276_34321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (1))){
var state_34273__$1 = state_34273;
var statearr_34277_34322 = state_34273__$1;
(statearr_34277_34322[(2)] = null);

(statearr_34277_34322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (24))){
var inst_34252 = (state_34273[(7)]);
var inst_34261 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34252);
var state_34273__$1 = state_34273;
var statearr_34278_34323 = state_34273__$1;
(statearr_34278_34323[(2)] = inst_34261);

(statearr_34278_34323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (4))){
var inst_34204 = (state_34273[(8)]);
var inst_34204__$1 = (state_34273[(2)]);
var inst_34205 = (inst_34204__$1 == null);
var state_34273__$1 = (function (){var statearr_34279 = state_34273;
(statearr_34279[(8)] = inst_34204__$1);

return statearr_34279;
})();
if(cljs.core.truth_(inst_34205)){
var statearr_34280_34324 = state_34273__$1;
(statearr_34280_34324[(1)] = (5));

} else {
var statearr_34281_34325 = state_34273__$1;
(statearr_34281_34325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (15))){
var inst_34246 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34282_34326 = state_34273__$1;
(statearr_34282_34326[(2)] = inst_34246);

(statearr_34282_34326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (21))){
var inst_34266 = (state_34273[(2)]);
var state_34273__$1 = (function (){var statearr_34283 = state_34273;
(statearr_34283[(9)] = inst_34266);

return statearr_34283;
})();
var statearr_34284_34327 = state_34273__$1;
(statearr_34284_34327[(2)] = null);

(statearr_34284_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (13))){
var inst_34228 = (state_34273[(10)]);
var inst_34230 = cljs.core.chunked_seq_QMARK_.call(null,inst_34228);
var state_34273__$1 = state_34273;
if(inst_34230){
var statearr_34285_34328 = state_34273__$1;
(statearr_34285_34328[(1)] = (16));

} else {
var statearr_34286_34329 = state_34273__$1;
(statearr_34286_34329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (22))){
var inst_34258 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
if(cljs.core.truth_(inst_34258)){
var statearr_34287_34330 = state_34273__$1;
(statearr_34287_34330[(1)] = (23));

} else {
var statearr_34288_34331 = state_34273__$1;
(statearr_34288_34331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (6))){
var inst_34254 = (state_34273[(11)]);
var inst_34204 = (state_34273[(8)]);
var inst_34252 = (state_34273[(7)]);
var inst_34252__$1 = topic_fn.call(null,inst_34204);
var inst_34253 = cljs.core.deref.call(null,mults);
var inst_34254__$1 = cljs.core.get.call(null,inst_34253,inst_34252__$1);
var state_34273__$1 = (function (){var statearr_34289 = state_34273;
(statearr_34289[(11)] = inst_34254__$1);

(statearr_34289[(7)] = inst_34252__$1);

return statearr_34289;
})();
if(cljs.core.truth_(inst_34254__$1)){
var statearr_34290_34332 = state_34273__$1;
(statearr_34290_34332[(1)] = (19));

} else {
var statearr_34291_34333 = state_34273__$1;
(statearr_34291_34333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (25))){
var inst_34263 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34292_34334 = state_34273__$1;
(statearr_34292_34334[(2)] = inst_34263);

(statearr_34292_34334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (17))){
var inst_34228 = (state_34273[(10)]);
var inst_34237 = cljs.core.first.call(null,inst_34228);
var inst_34238 = cljs.core.async.muxch_STAR_.call(null,inst_34237);
var inst_34239 = cljs.core.async.close_BANG_.call(null,inst_34238);
var inst_34240 = cljs.core.next.call(null,inst_34228);
var inst_34214 = inst_34240;
var inst_34215 = null;
var inst_34216 = (0);
var inst_34217 = (0);
var state_34273__$1 = (function (){var statearr_34293 = state_34273;
(statearr_34293[(12)] = inst_34216);

(statearr_34293[(13)] = inst_34217);

(statearr_34293[(14)] = inst_34239);

(statearr_34293[(15)] = inst_34215);

(statearr_34293[(16)] = inst_34214);

return statearr_34293;
})();
var statearr_34294_34335 = state_34273__$1;
(statearr_34294_34335[(2)] = null);

(statearr_34294_34335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (3))){
var inst_34271 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34273__$1,inst_34271);
} else {
if((state_val_34274 === (12))){
var inst_34248 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34295_34336 = state_34273__$1;
(statearr_34295_34336[(2)] = inst_34248);

(statearr_34295_34336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (2))){
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34273__$1,(4),ch);
} else {
if((state_val_34274 === (23))){
var state_34273__$1 = state_34273;
var statearr_34296_34337 = state_34273__$1;
(statearr_34296_34337[(2)] = null);

(statearr_34296_34337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (19))){
var inst_34254 = (state_34273[(11)]);
var inst_34204 = (state_34273[(8)]);
var inst_34256 = cljs.core.async.muxch_STAR_.call(null,inst_34254);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34273__$1,(22),inst_34256,inst_34204);
} else {
if((state_val_34274 === (11))){
var inst_34228 = (state_34273[(10)]);
var inst_34214 = (state_34273[(16)]);
var inst_34228__$1 = cljs.core.seq.call(null,inst_34214);
var state_34273__$1 = (function (){var statearr_34297 = state_34273;
(statearr_34297[(10)] = inst_34228__$1);

return statearr_34297;
})();
if(inst_34228__$1){
var statearr_34298_34338 = state_34273__$1;
(statearr_34298_34338[(1)] = (13));

} else {
var statearr_34299_34339 = state_34273__$1;
(statearr_34299_34339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (9))){
var inst_34250 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34300_34340 = state_34273__$1;
(statearr_34300_34340[(2)] = inst_34250);

(statearr_34300_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (5))){
var inst_34211 = cljs.core.deref.call(null,mults);
var inst_34212 = cljs.core.vals.call(null,inst_34211);
var inst_34213 = cljs.core.seq.call(null,inst_34212);
var inst_34214 = inst_34213;
var inst_34215 = null;
var inst_34216 = (0);
var inst_34217 = (0);
var state_34273__$1 = (function (){var statearr_34301 = state_34273;
(statearr_34301[(12)] = inst_34216);

(statearr_34301[(13)] = inst_34217);

(statearr_34301[(15)] = inst_34215);

(statearr_34301[(16)] = inst_34214);

return statearr_34301;
})();
var statearr_34302_34341 = state_34273__$1;
(statearr_34302_34341[(2)] = null);

(statearr_34302_34341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (14))){
var state_34273__$1 = state_34273;
var statearr_34306_34342 = state_34273__$1;
(statearr_34306_34342[(2)] = null);

(statearr_34306_34342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (16))){
var inst_34228 = (state_34273[(10)]);
var inst_34232 = cljs.core.chunk_first.call(null,inst_34228);
var inst_34233 = cljs.core.chunk_rest.call(null,inst_34228);
var inst_34234 = cljs.core.count.call(null,inst_34232);
var inst_34214 = inst_34233;
var inst_34215 = inst_34232;
var inst_34216 = inst_34234;
var inst_34217 = (0);
var state_34273__$1 = (function (){var statearr_34307 = state_34273;
(statearr_34307[(12)] = inst_34216);

(statearr_34307[(13)] = inst_34217);

(statearr_34307[(15)] = inst_34215);

(statearr_34307[(16)] = inst_34214);

return statearr_34307;
})();
var statearr_34308_34343 = state_34273__$1;
(statearr_34308_34343[(2)] = null);

(statearr_34308_34343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (10))){
var inst_34216 = (state_34273[(12)]);
var inst_34217 = (state_34273[(13)]);
var inst_34215 = (state_34273[(15)]);
var inst_34214 = (state_34273[(16)]);
var inst_34222 = cljs.core._nth.call(null,inst_34215,inst_34217);
var inst_34223 = cljs.core.async.muxch_STAR_.call(null,inst_34222);
var inst_34224 = cljs.core.async.close_BANG_.call(null,inst_34223);
var inst_34225 = (inst_34217 + (1));
var tmp34303 = inst_34216;
var tmp34304 = inst_34215;
var tmp34305 = inst_34214;
var inst_34214__$1 = tmp34305;
var inst_34215__$1 = tmp34304;
var inst_34216__$1 = tmp34303;
var inst_34217__$1 = inst_34225;
var state_34273__$1 = (function (){var statearr_34309 = state_34273;
(statearr_34309[(12)] = inst_34216__$1);

(statearr_34309[(17)] = inst_34224);

(statearr_34309[(13)] = inst_34217__$1);

(statearr_34309[(15)] = inst_34215__$1);

(statearr_34309[(16)] = inst_34214__$1);

return statearr_34309;
})();
var statearr_34310_34344 = state_34273__$1;
(statearr_34310_34344[(2)] = null);

(statearr_34310_34344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (18))){
var inst_34243 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34311_34345 = state_34273__$1;
(statearr_34311_34345[(2)] = inst_34243);

(statearr_34311_34345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (8))){
var inst_34216 = (state_34273[(12)]);
var inst_34217 = (state_34273[(13)]);
var inst_34219 = (inst_34217 < inst_34216);
var inst_34220 = inst_34219;
var state_34273__$1 = state_34273;
if(cljs.core.truth_(inst_34220)){
var statearr_34312_34346 = state_34273__$1;
(statearr_34312_34346[(1)] = (10));

} else {
var statearr_34313_34347 = state_34273__$1;
(statearr_34313_34347[(1)] = (11));

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
});})(c__33099__auto___34319,mults,ensure_mult,p))
;
return ((function (switch__33011__auto__,c__33099__auto___34319,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34314[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34314[(1)] = (1));

return statearr_34314;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34273){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34315){if((e34315 instanceof Object)){
var ex__33015__auto__ = e34315;
var statearr_34316_34348 = state_34273;
(statearr_34316_34348[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34349 = state_34273;
state_34273 = G__34349;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34319,mults,ensure_mult,p))
})();
var state__33101__auto__ = (function (){var statearr_34317 = f__33100__auto__.call(null);
(statearr_34317[(6)] = c__33099__auto___34319);

return statearr_34317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34319,mults,ensure_mult,p))
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
var G__34351 = arguments.length;
switch (G__34351) {
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
var G__34354 = arguments.length;
switch (G__34354) {
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
var G__34357 = arguments.length;
switch (G__34357) {
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
var c__33099__auto___34424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34396){
var state_val_34397 = (state_34396[(1)]);
if((state_val_34397 === (7))){
var state_34396__$1 = state_34396;
var statearr_34398_34425 = state_34396__$1;
(statearr_34398_34425[(2)] = null);

(statearr_34398_34425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (1))){
var state_34396__$1 = state_34396;
var statearr_34399_34426 = state_34396__$1;
(statearr_34399_34426[(2)] = null);

(statearr_34399_34426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (4))){
var inst_34360 = (state_34396[(7)]);
var inst_34362 = (inst_34360 < cnt);
var state_34396__$1 = state_34396;
if(cljs.core.truth_(inst_34362)){
var statearr_34400_34427 = state_34396__$1;
(statearr_34400_34427[(1)] = (6));

} else {
var statearr_34401_34428 = state_34396__$1;
(statearr_34401_34428[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (15))){
var inst_34392 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34402_34429 = state_34396__$1;
(statearr_34402_34429[(2)] = inst_34392);

(statearr_34402_34429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (13))){
var inst_34385 = cljs.core.async.close_BANG_.call(null,out);
var state_34396__$1 = state_34396;
var statearr_34403_34430 = state_34396__$1;
(statearr_34403_34430[(2)] = inst_34385);

(statearr_34403_34430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (6))){
var state_34396__$1 = state_34396;
var statearr_34404_34431 = state_34396__$1;
(statearr_34404_34431[(2)] = null);

(statearr_34404_34431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (3))){
var inst_34394 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34396__$1,inst_34394);
} else {
if((state_val_34397 === (12))){
var inst_34382 = (state_34396[(8)]);
var inst_34382__$1 = (state_34396[(2)]);
var inst_34383 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34382__$1);
var state_34396__$1 = (function (){var statearr_34405 = state_34396;
(statearr_34405[(8)] = inst_34382__$1);

return statearr_34405;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34406_34432 = state_34396__$1;
(statearr_34406_34432[(1)] = (13));

} else {
var statearr_34407_34433 = state_34396__$1;
(statearr_34407_34433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (2))){
var inst_34359 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34360 = (0);
var state_34396__$1 = (function (){var statearr_34408 = state_34396;
(statearr_34408[(7)] = inst_34360);

(statearr_34408[(9)] = inst_34359);

return statearr_34408;
})();
var statearr_34409_34434 = state_34396__$1;
(statearr_34409_34434[(2)] = null);

(statearr_34409_34434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (11))){
var inst_34360 = (state_34396[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34396,(10),Object,null,(9));
var inst_34369 = chs__$1.call(null,inst_34360);
var inst_34370 = done.call(null,inst_34360);
var inst_34371 = cljs.core.async.take_BANG_.call(null,inst_34369,inst_34370);
var state_34396__$1 = state_34396;
var statearr_34410_34435 = state_34396__$1;
(statearr_34410_34435[(2)] = inst_34371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (9))){
var inst_34360 = (state_34396[(7)]);
var inst_34373 = (state_34396[(2)]);
var inst_34374 = (inst_34360 + (1));
var inst_34360__$1 = inst_34374;
var state_34396__$1 = (function (){var statearr_34411 = state_34396;
(statearr_34411[(7)] = inst_34360__$1);

(statearr_34411[(10)] = inst_34373);

return statearr_34411;
})();
var statearr_34412_34436 = state_34396__$1;
(statearr_34412_34436[(2)] = null);

(statearr_34412_34436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (5))){
var inst_34380 = (state_34396[(2)]);
var state_34396__$1 = (function (){var statearr_34413 = state_34396;
(statearr_34413[(11)] = inst_34380);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34396__$1,(12),dchan);
} else {
if((state_val_34397 === (14))){
var inst_34382 = (state_34396[(8)]);
var inst_34387 = cljs.core.apply.call(null,f,inst_34382);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34396__$1,(16),out,inst_34387);
} else {
if((state_val_34397 === (16))){
var inst_34389 = (state_34396[(2)]);
var state_34396__$1 = (function (){var statearr_34414 = state_34396;
(statearr_34414[(12)] = inst_34389);

return statearr_34414;
})();
var statearr_34415_34437 = state_34396__$1;
(statearr_34415_34437[(2)] = null);

(statearr_34415_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (10))){
var inst_34364 = (state_34396[(2)]);
var inst_34365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34396__$1 = (function (){var statearr_34416 = state_34396;
(statearr_34416[(13)] = inst_34364);

return statearr_34416;
})();
var statearr_34417_34438 = state_34396__$1;
(statearr_34417_34438[(2)] = inst_34365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (8))){
var inst_34378 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34418_34439 = state_34396__$1;
(statearr_34418_34439[(2)] = inst_34378);

(statearr_34418_34439[(1)] = (5));


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
});})(c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33011__auto__,c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34419[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34419[(1)] = (1));

return statearr_34419;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34396){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34420){if((e34420 instanceof Object)){
var ex__33015__auto__ = e34420;
var statearr_34421_34440 = state_34396;
(statearr_34421_34440[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34441 = state_34396;
state_34396 = G__34441;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33101__auto__ = (function (){var statearr_34422 = f__33100__auto__.call(null);
(statearr_34422[(6)] = c__33099__auto___34424);

return statearr_34422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34424,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34444 = arguments.length;
switch (G__34444) {
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
var c__33099__auto___34498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34498,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34498,out){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (7))){
var inst_34455 = (state_34476[(7)]);
var inst_34456 = (state_34476[(8)]);
var inst_34455__$1 = (state_34476[(2)]);
var inst_34456__$1 = cljs.core.nth.call(null,inst_34455__$1,(0),null);
var inst_34457 = cljs.core.nth.call(null,inst_34455__$1,(1),null);
var inst_34458 = (inst_34456__$1 == null);
var state_34476__$1 = (function (){var statearr_34478 = state_34476;
(statearr_34478[(9)] = inst_34457);

(statearr_34478[(7)] = inst_34455__$1);

(statearr_34478[(8)] = inst_34456__$1);

return statearr_34478;
})();
if(cljs.core.truth_(inst_34458)){
var statearr_34479_34499 = state_34476__$1;
(statearr_34479_34499[(1)] = (8));

} else {
var statearr_34480_34500 = state_34476__$1;
(statearr_34480_34500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (1))){
var inst_34445 = cljs.core.vec.call(null,chs);
var inst_34446 = inst_34445;
var state_34476__$1 = (function (){var statearr_34481 = state_34476;
(statearr_34481[(10)] = inst_34446);

return statearr_34481;
})();
var statearr_34482_34501 = state_34476__$1;
(statearr_34482_34501[(2)] = null);

(statearr_34482_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (4))){
var inst_34446 = (state_34476[(10)]);
var state_34476__$1 = state_34476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34476__$1,(7),inst_34446);
} else {
if((state_val_34477 === (6))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_34502 = state_34476__$1;
(statearr_34483_34502[(2)] = inst_34472);

(statearr_34483_34502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (3))){
var inst_34474 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34476__$1,inst_34474);
} else {
if((state_val_34477 === (2))){
var inst_34446 = (state_34476[(10)]);
var inst_34448 = cljs.core.count.call(null,inst_34446);
var inst_34449 = (inst_34448 > (0));
var state_34476__$1 = state_34476;
if(cljs.core.truth_(inst_34449)){
var statearr_34485_34503 = state_34476__$1;
(statearr_34485_34503[(1)] = (4));

} else {
var statearr_34486_34504 = state_34476__$1;
(statearr_34486_34504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (11))){
var inst_34446 = (state_34476[(10)]);
var inst_34465 = (state_34476[(2)]);
var tmp34484 = inst_34446;
var inst_34446__$1 = tmp34484;
var state_34476__$1 = (function (){var statearr_34487 = state_34476;
(statearr_34487[(10)] = inst_34446__$1);

(statearr_34487[(11)] = inst_34465);

return statearr_34487;
})();
var statearr_34488_34505 = state_34476__$1;
(statearr_34488_34505[(2)] = null);

(statearr_34488_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (9))){
var inst_34456 = (state_34476[(8)]);
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34476__$1,(11),out,inst_34456);
} else {
if((state_val_34477 === (5))){
var inst_34470 = cljs.core.async.close_BANG_.call(null,out);
var state_34476__$1 = state_34476;
var statearr_34489_34506 = state_34476__$1;
(statearr_34489_34506[(2)] = inst_34470);

(statearr_34489_34506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (10))){
var inst_34468 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34490_34507 = state_34476__$1;
(statearr_34490_34507[(2)] = inst_34468);

(statearr_34490_34507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (8))){
var inst_34457 = (state_34476[(9)]);
var inst_34455 = (state_34476[(7)]);
var inst_34456 = (state_34476[(8)]);
var inst_34446 = (state_34476[(10)]);
var inst_34460 = (function (){var cs = inst_34446;
var vec__34451 = inst_34455;
var v = inst_34456;
var c = inst_34457;
return ((function (cs,vec__34451,v,c,inst_34457,inst_34455,inst_34456,inst_34446,state_val_34477,c__33099__auto___34498,out){
return (function (p1__34442_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34442_SHARP_);
});
;})(cs,vec__34451,v,c,inst_34457,inst_34455,inst_34456,inst_34446,state_val_34477,c__33099__auto___34498,out))
})();
var inst_34461 = cljs.core.filterv.call(null,inst_34460,inst_34446);
var inst_34446__$1 = inst_34461;
var state_34476__$1 = (function (){var statearr_34491 = state_34476;
(statearr_34491[(10)] = inst_34446__$1);

return statearr_34491;
})();
var statearr_34492_34508 = state_34476__$1;
(statearr_34492_34508[(2)] = null);

(statearr_34492_34508[(1)] = (2));


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
});})(c__33099__auto___34498,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34498,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34493[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34493[(1)] = (1));

return statearr_34493;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34476){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34494){if((e34494 instanceof Object)){
var ex__33015__auto__ = e34494;
var statearr_34495_34509 = state_34476;
(statearr_34495_34509[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34510 = state_34476;
state_34476 = G__34510;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34498,out))
})();
var state__33101__auto__ = (function (){var statearr_34496 = f__33100__auto__.call(null);
(statearr_34496[(6)] = c__33099__auto___34498);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34498,out))
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
var G__34512 = arguments.length;
switch (G__34512) {
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
var c__33099__auto___34557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34557,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34557,out){
return (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (7))){
var inst_34518 = (state_34536[(7)]);
var inst_34518__$1 = (state_34536[(2)]);
var inst_34519 = (inst_34518__$1 == null);
var inst_34520 = cljs.core.not.call(null,inst_34519);
var state_34536__$1 = (function (){var statearr_34538 = state_34536;
(statearr_34538[(7)] = inst_34518__$1);

return statearr_34538;
})();
if(inst_34520){
var statearr_34539_34558 = state_34536__$1;
(statearr_34539_34558[(1)] = (8));

} else {
var statearr_34540_34559 = state_34536__$1;
(statearr_34540_34559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (1))){
var inst_34513 = (0);
var state_34536__$1 = (function (){var statearr_34541 = state_34536;
(statearr_34541[(8)] = inst_34513);

return statearr_34541;
})();
var statearr_34542_34560 = state_34536__$1;
(statearr_34542_34560[(2)] = null);

(statearr_34542_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (4))){
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(7),ch);
} else {
if((state_val_34537 === (6))){
var inst_34531 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34543_34561 = state_34536__$1;
(statearr_34543_34561[(2)] = inst_34531);

(statearr_34543_34561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (3))){
var inst_34533 = (state_34536[(2)]);
var inst_34534 = cljs.core.async.close_BANG_.call(null,out);
var state_34536__$1 = (function (){var statearr_34544 = state_34536;
(statearr_34544[(9)] = inst_34533);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34536__$1,inst_34534);
} else {
if((state_val_34537 === (2))){
var inst_34513 = (state_34536[(8)]);
var inst_34515 = (inst_34513 < n);
var state_34536__$1 = state_34536;
if(cljs.core.truth_(inst_34515)){
var statearr_34545_34562 = state_34536__$1;
(statearr_34545_34562[(1)] = (4));

} else {
var statearr_34546_34563 = state_34536__$1;
(statearr_34546_34563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (11))){
var inst_34513 = (state_34536[(8)]);
var inst_34523 = (state_34536[(2)]);
var inst_34524 = (inst_34513 + (1));
var inst_34513__$1 = inst_34524;
var state_34536__$1 = (function (){var statearr_34547 = state_34536;
(statearr_34547[(8)] = inst_34513__$1);

(statearr_34547[(10)] = inst_34523);

return statearr_34547;
})();
var statearr_34548_34564 = state_34536__$1;
(statearr_34548_34564[(2)] = null);

(statearr_34548_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (9))){
var state_34536__$1 = state_34536;
var statearr_34549_34565 = state_34536__$1;
(statearr_34549_34565[(2)] = null);

(statearr_34549_34565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (5))){
var state_34536__$1 = state_34536;
var statearr_34550_34566 = state_34536__$1;
(statearr_34550_34566[(2)] = null);

(statearr_34550_34566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (10))){
var inst_34528 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34551_34567 = state_34536__$1;
(statearr_34551_34567[(2)] = inst_34528);

(statearr_34551_34567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (8))){
var inst_34518 = (state_34536[(7)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34536__$1,(11),out,inst_34518);
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
});})(c__33099__auto___34557,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34557,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34552[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34552[(1)] = (1));

return statearr_34552;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34536){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34553){if((e34553 instanceof Object)){
var ex__33015__auto__ = e34553;
var statearr_34554_34568 = state_34536;
(statearr_34554_34568[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34569 = state_34536;
state_34536 = G__34569;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34557,out))
})();
var state__33101__auto__ = (function (){var statearr_34555 = f__33100__auto__.call(null);
(statearr_34555[(6)] = c__33099__auto___34557);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34557,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34571 = (function (f,ch,meta34572){
this.f = f;
this.ch = ch;
this.meta34572 = meta34572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34573,meta34572__$1){
var self__ = this;
var _34573__$1 = this;
return (new cljs.core.async.t_cljs$core$async34571(self__.f,self__.ch,meta34572__$1));
});

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34573){
var self__ = this;
var _34573__$1 = this;
return self__.meta34572;
});

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34574 = (function (f,ch,meta34572,_,fn1,meta34575){
this.f = f;
this.ch = ch;
this.meta34572 = meta34572;
this._ = _;
this.fn1 = fn1;
this.meta34575 = meta34575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34576,meta34575__$1){
var self__ = this;
var _34576__$1 = this;
return (new cljs.core.async.t_cljs$core$async34574(self__.f,self__.ch,self__.meta34572,self__._,self__.fn1,meta34575__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34576){
var self__ = this;
var _34576__$1 = this;
return self__.meta34575;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34570_SHARP_){
return f1.call(null,(((p1__34570_SHARP_ == null))?null:self__.f.call(null,p1__34570_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34572","meta34572",-681920889,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34571","cljs.core.async/t_cljs$core$async34571",-1764410169,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34575","meta34575",-705056944,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34574";

cljs.core.async.t_cljs$core$async34574.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34574");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34574 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34574(f__$1,ch__$1,meta34572__$1,___$2,fn1__$1,meta34575){
return (new cljs.core.async.t_cljs$core$async34574(f__$1,ch__$1,meta34572__$1,___$2,fn1__$1,meta34575));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34574(self__.f,self__.ch,self__.meta34572,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34572","meta34572",-681920889,null)], null);
});

cljs.core.async.t_cljs$core$async34571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34571";

cljs.core.async.t_cljs$core$async34571.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34571");
});

cljs.core.async.__GT_t_cljs$core$async34571 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34571(f__$1,ch__$1,meta34572){
return (new cljs.core.async.t_cljs$core$async34571(f__$1,ch__$1,meta34572));
});

}

return (new cljs.core.async.t_cljs$core$async34571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34577 = (function (f,ch,meta34578){
this.f = f;
this.ch = ch;
this.meta34578 = meta34578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34579,meta34578__$1){
var self__ = this;
var _34579__$1 = this;
return (new cljs.core.async.t_cljs$core$async34577(self__.f,self__.ch,meta34578__$1));
});

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34579){
var self__ = this;
var _34579__$1 = this;
return self__.meta34578;
});

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34578","meta34578",1717840538,null)], null);
});

cljs.core.async.t_cljs$core$async34577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34577";

cljs.core.async.t_cljs$core$async34577.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34577");
});

cljs.core.async.__GT_t_cljs$core$async34577 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34577(f__$1,ch__$1,meta34578){
return (new cljs.core.async.t_cljs$core$async34577(f__$1,ch__$1,meta34578));
});

}

return (new cljs.core.async.t_cljs$core$async34577(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34580 = (function (p,ch,meta34581){
this.p = p;
this.ch = ch;
this.meta34581 = meta34581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34582,meta34581__$1){
var self__ = this;
var _34582__$1 = this;
return (new cljs.core.async.t_cljs$core$async34580(self__.p,self__.ch,meta34581__$1));
});

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34582){
var self__ = this;
var _34582__$1 = this;
return self__.meta34581;
});

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34581","meta34581",-1088618197,null)], null);
});

cljs.core.async.t_cljs$core$async34580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34580";

cljs.core.async.t_cljs$core$async34580.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async34580");
});

cljs.core.async.__GT_t_cljs$core$async34580 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34580(p__$1,ch__$1,meta34581){
return (new cljs.core.async.t_cljs$core$async34580(p__$1,ch__$1,meta34581));
});

}

return (new cljs.core.async.t_cljs$core$async34580(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34584 = arguments.length;
switch (G__34584) {
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
var c__33099__auto___34624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34624,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34624,out){
return (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_34625 = state_34605__$1;
(statearr_34607_34625[(2)] = inst_34601);

(statearr_34607_34625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34608_34626 = state_34605__$1;
(statearr_34608_34626[(2)] = null);

(statearr_34608_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34587 = (state_34605[(7)]);
var inst_34587__$1 = (state_34605[(2)]);
var inst_34588 = (inst_34587__$1 == null);
var state_34605__$1 = (function (){var statearr_34609 = state_34605;
(statearr_34609[(7)] = inst_34587__$1);

return statearr_34609;
})();
if(cljs.core.truth_(inst_34588)){
var statearr_34610_34627 = state_34605__$1;
(statearr_34610_34627[(1)] = (5));

} else {
var statearr_34611_34628 = state_34605__$1;
(statearr_34611_34628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34587 = (state_34605[(7)]);
var inst_34592 = p.call(null,inst_34587);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34592)){
var statearr_34612_34629 = state_34605__$1;
(statearr_34612_34629[(1)] = (8));

} else {
var statearr_34613_34630 = state_34605__$1;
(statearr_34613_34630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34605__$1,(4),ch);
} else {
if((state_val_34606 === (11))){
var inst_34595 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34614_34631 = state_34605__$1;
(statearr_34614_34631[(2)] = inst_34595);

(statearr_34614_34631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34615_34632 = state_34605__$1;
(statearr_34615_34632[(2)] = null);

(statearr_34615_34632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var inst_34590 = cljs.core.async.close_BANG_.call(null,out);
var state_34605__$1 = state_34605;
var statearr_34616_34633 = state_34605__$1;
(statearr_34616_34633[(2)] = inst_34590);

(statearr_34616_34633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34617 = state_34605;
(statearr_34617[(8)] = inst_34598);

return statearr_34617;
})();
var statearr_34618_34634 = state_34605__$1;
(statearr_34618_34634[(2)] = null);

(statearr_34618_34634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34587 = (state_34605[(7)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34605__$1,(11),out,inst_34587);
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
});})(c__33099__auto___34624,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34624,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34619 = [null,null,null,null,null,null,null,null,null];
(statearr_34619[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34619[(1)] = (1));

return statearr_34619;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34605){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34620){if((e34620 instanceof Object)){
var ex__33015__auto__ = e34620;
var statearr_34621_34635 = state_34605;
(statearr_34621_34635[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34636 = state_34605;
state_34605 = G__34636;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34624,out))
})();
var state__33101__auto__ = (function (){var statearr_34622 = f__33100__auto__.call(null);
(statearr_34622[(6)] = c__33099__auto___34624);

return statearr_34622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34624,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34638 = arguments.length;
switch (G__34638) {
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__){
return (function (state_34701){
var state_val_34702 = (state_34701[(1)]);
if((state_val_34702 === (7))){
var inst_34697 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34703_34741 = state_34701__$1;
(statearr_34703_34741[(2)] = inst_34697);

(statearr_34703_34741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (20))){
var inst_34667 = (state_34701[(7)]);
var inst_34678 = (state_34701[(2)]);
var inst_34679 = cljs.core.next.call(null,inst_34667);
var inst_34653 = inst_34679;
var inst_34654 = null;
var inst_34655 = (0);
var inst_34656 = (0);
var state_34701__$1 = (function (){var statearr_34704 = state_34701;
(statearr_34704[(8)] = inst_34655);

(statearr_34704[(9)] = inst_34654);

(statearr_34704[(10)] = inst_34678);

(statearr_34704[(11)] = inst_34653);

(statearr_34704[(12)] = inst_34656);

return statearr_34704;
})();
var statearr_34705_34742 = state_34701__$1;
(statearr_34705_34742[(2)] = null);

(statearr_34705_34742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (1))){
var state_34701__$1 = state_34701;
var statearr_34706_34743 = state_34701__$1;
(statearr_34706_34743[(2)] = null);

(statearr_34706_34743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (4))){
var inst_34642 = (state_34701[(13)]);
var inst_34642__$1 = (state_34701[(2)]);
var inst_34643 = (inst_34642__$1 == null);
var state_34701__$1 = (function (){var statearr_34707 = state_34701;
(statearr_34707[(13)] = inst_34642__$1);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34643)){
var statearr_34708_34744 = state_34701__$1;
(statearr_34708_34744[(1)] = (5));

} else {
var statearr_34709_34745 = state_34701__$1;
(statearr_34709_34745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (15))){
var state_34701__$1 = state_34701;
var statearr_34713_34746 = state_34701__$1;
(statearr_34713_34746[(2)] = null);

(statearr_34713_34746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (21))){
var state_34701__$1 = state_34701;
var statearr_34714_34747 = state_34701__$1;
(statearr_34714_34747[(2)] = null);

(statearr_34714_34747[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (13))){
var inst_34655 = (state_34701[(8)]);
var inst_34654 = (state_34701[(9)]);
var inst_34653 = (state_34701[(11)]);
var inst_34656 = (state_34701[(12)]);
var inst_34663 = (state_34701[(2)]);
var inst_34664 = (inst_34656 + (1));
var tmp34710 = inst_34655;
var tmp34711 = inst_34654;
var tmp34712 = inst_34653;
var inst_34653__$1 = tmp34712;
var inst_34654__$1 = tmp34711;
var inst_34655__$1 = tmp34710;
var inst_34656__$1 = inst_34664;
var state_34701__$1 = (function (){var statearr_34715 = state_34701;
(statearr_34715[(8)] = inst_34655__$1);

(statearr_34715[(14)] = inst_34663);

(statearr_34715[(9)] = inst_34654__$1);

(statearr_34715[(11)] = inst_34653__$1);

(statearr_34715[(12)] = inst_34656__$1);

return statearr_34715;
})();
var statearr_34716_34748 = state_34701__$1;
(statearr_34716_34748[(2)] = null);

(statearr_34716_34748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (22))){
var state_34701__$1 = state_34701;
var statearr_34717_34749 = state_34701__$1;
(statearr_34717_34749[(2)] = null);

(statearr_34717_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (6))){
var inst_34642 = (state_34701[(13)]);
var inst_34651 = f.call(null,inst_34642);
var inst_34652 = cljs.core.seq.call(null,inst_34651);
var inst_34653 = inst_34652;
var inst_34654 = null;
var inst_34655 = (0);
var inst_34656 = (0);
var state_34701__$1 = (function (){var statearr_34718 = state_34701;
(statearr_34718[(8)] = inst_34655);

(statearr_34718[(9)] = inst_34654);

(statearr_34718[(11)] = inst_34653);

(statearr_34718[(12)] = inst_34656);

return statearr_34718;
})();
var statearr_34719_34750 = state_34701__$1;
(statearr_34719_34750[(2)] = null);

(statearr_34719_34750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (17))){
var inst_34667 = (state_34701[(7)]);
var inst_34671 = cljs.core.chunk_first.call(null,inst_34667);
var inst_34672 = cljs.core.chunk_rest.call(null,inst_34667);
var inst_34673 = cljs.core.count.call(null,inst_34671);
var inst_34653 = inst_34672;
var inst_34654 = inst_34671;
var inst_34655 = inst_34673;
var inst_34656 = (0);
var state_34701__$1 = (function (){var statearr_34720 = state_34701;
(statearr_34720[(8)] = inst_34655);

(statearr_34720[(9)] = inst_34654);

(statearr_34720[(11)] = inst_34653);

(statearr_34720[(12)] = inst_34656);

return statearr_34720;
})();
var statearr_34721_34751 = state_34701__$1;
(statearr_34721_34751[(2)] = null);

(statearr_34721_34751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (3))){
var inst_34699 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34701__$1,inst_34699);
} else {
if((state_val_34702 === (12))){
var inst_34687 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34722_34752 = state_34701__$1;
(statearr_34722_34752[(2)] = inst_34687);

(statearr_34722_34752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (2))){
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34701__$1,(4),in$);
} else {
if((state_val_34702 === (23))){
var inst_34695 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34723_34753 = state_34701__$1;
(statearr_34723_34753[(2)] = inst_34695);

(statearr_34723_34753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (19))){
var inst_34682 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34724_34754 = state_34701__$1;
(statearr_34724_34754[(2)] = inst_34682);

(statearr_34724_34754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (11))){
var inst_34653 = (state_34701[(11)]);
var inst_34667 = (state_34701[(7)]);
var inst_34667__$1 = cljs.core.seq.call(null,inst_34653);
var state_34701__$1 = (function (){var statearr_34725 = state_34701;
(statearr_34725[(7)] = inst_34667__$1);

return statearr_34725;
})();
if(inst_34667__$1){
var statearr_34726_34755 = state_34701__$1;
(statearr_34726_34755[(1)] = (14));

} else {
var statearr_34727_34756 = state_34701__$1;
(statearr_34727_34756[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (9))){
var inst_34689 = (state_34701[(2)]);
var inst_34690 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34701__$1 = (function (){var statearr_34728 = state_34701;
(statearr_34728[(15)] = inst_34689);

return statearr_34728;
})();
if(cljs.core.truth_(inst_34690)){
var statearr_34729_34757 = state_34701__$1;
(statearr_34729_34757[(1)] = (21));

} else {
var statearr_34730_34758 = state_34701__$1;
(statearr_34730_34758[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (5))){
var inst_34645 = cljs.core.async.close_BANG_.call(null,out);
var state_34701__$1 = state_34701;
var statearr_34731_34759 = state_34701__$1;
(statearr_34731_34759[(2)] = inst_34645);

(statearr_34731_34759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (14))){
var inst_34667 = (state_34701[(7)]);
var inst_34669 = cljs.core.chunked_seq_QMARK_.call(null,inst_34667);
var state_34701__$1 = state_34701;
if(inst_34669){
var statearr_34732_34760 = state_34701__$1;
(statearr_34732_34760[(1)] = (17));

} else {
var statearr_34733_34761 = state_34701__$1;
(statearr_34733_34761[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (16))){
var inst_34685 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34734_34762 = state_34701__$1;
(statearr_34734_34762[(2)] = inst_34685);

(statearr_34734_34762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (10))){
var inst_34654 = (state_34701[(9)]);
var inst_34656 = (state_34701[(12)]);
var inst_34661 = cljs.core._nth.call(null,inst_34654,inst_34656);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34701__$1,(13),out,inst_34661);
} else {
if((state_val_34702 === (18))){
var inst_34667 = (state_34701[(7)]);
var inst_34676 = cljs.core.first.call(null,inst_34667);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34701__$1,(20),out,inst_34676);
} else {
if((state_val_34702 === (8))){
var inst_34655 = (state_34701[(8)]);
var inst_34656 = (state_34701[(12)]);
var inst_34658 = (inst_34656 < inst_34655);
var inst_34659 = inst_34658;
var state_34701__$1 = state_34701;
if(cljs.core.truth_(inst_34659)){
var statearr_34735_34763 = state_34701__$1;
(statearr_34735_34763[(1)] = (10));

} else {
var statearr_34736_34764 = state_34701__$1;
(statearr_34736_34764[(1)] = (11));

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
});})(c__33099__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____0 = (function (){
var statearr_34737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34737[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__);

(statearr_34737[(1)] = (1));

return statearr_34737;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____1 = (function (state_34701){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34738){if((e34738 instanceof Object)){
var ex__33015__auto__ = e34738;
var statearr_34739_34765 = state_34701;
(statearr_34739_34765[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_34701;
state_34701 = G__34766;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__ = function(state_34701){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____1.call(this,state_34701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33012__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__))
})();
var state__33101__auto__ = (function (){var statearr_34740 = f__33100__auto__.call(null);
(statearr_34740[(6)] = c__33099__auto__);

return statearr_34740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__))
);

return c__33099__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34768 = arguments.length;
switch (G__34768) {
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
var G__34771 = arguments.length;
switch (G__34771) {
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
var G__34774 = arguments.length;
switch (G__34774) {
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
var c__33099__auto___34821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34821,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34821,out){
return (function (state_34798){
var state_val_34799 = (state_34798[(1)]);
if((state_val_34799 === (7))){
var inst_34793 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34800_34822 = state_34798__$1;
(statearr_34800_34822[(2)] = inst_34793);

(statearr_34800_34822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (1))){
var inst_34775 = null;
var state_34798__$1 = (function (){var statearr_34801 = state_34798;
(statearr_34801[(7)] = inst_34775);

return statearr_34801;
})();
var statearr_34802_34823 = state_34798__$1;
(statearr_34802_34823[(2)] = null);

(statearr_34802_34823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (4))){
var inst_34778 = (state_34798[(8)]);
var inst_34778__$1 = (state_34798[(2)]);
var inst_34779 = (inst_34778__$1 == null);
var inst_34780 = cljs.core.not.call(null,inst_34779);
var state_34798__$1 = (function (){var statearr_34803 = state_34798;
(statearr_34803[(8)] = inst_34778__$1);

return statearr_34803;
})();
if(inst_34780){
var statearr_34804_34824 = state_34798__$1;
(statearr_34804_34824[(1)] = (5));

} else {
var statearr_34805_34825 = state_34798__$1;
(statearr_34805_34825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (6))){
var state_34798__$1 = state_34798;
var statearr_34806_34826 = state_34798__$1;
(statearr_34806_34826[(2)] = null);

(statearr_34806_34826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (3))){
var inst_34795 = (state_34798[(2)]);
var inst_34796 = cljs.core.async.close_BANG_.call(null,out);
var state_34798__$1 = (function (){var statearr_34807 = state_34798;
(statearr_34807[(9)] = inst_34795);

return statearr_34807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34798__$1,inst_34796);
} else {
if((state_val_34799 === (2))){
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34798__$1,(4),ch);
} else {
if((state_val_34799 === (11))){
var inst_34778 = (state_34798[(8)]);
var inst_34787 = (state_34798[(2)]);
var inst_34775 = inst_34778;
var state_34798__$1 = (function (){var statearr_34808 = state_34798;
(statearr_34808[(7)] = inst_34775);

(statearr_34808[(10)] = inst_34787);

return statearr_34808;
})();
var statearr_34809_34827 = state_34798__$1;
(statearr_34809_34827[(2)] = null);

(statearr_34809_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (9))){
var inst_34778 = (state_34798[(8)]);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34798__$1,(11),out,inst_34778);
} else {
if((state_val_34799 === (5))){
var inst_34775 = (state_34798[(7)]);
var inst_34778 = (state_34798[(8)]);
var inst_34782 = cljs.core._EQ_.call(null,inst_34778,inst_34775);
var state_34798__$1 = state_34798;
if(inst_34782){
var statearr_34811_34828 = state_34798__$1;
(statearr_34811_34828[(1)] = (8));

} else {
var statearr_34812_34829 = state_34798__$1;
(statearr_34812_34829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (10))){
var inst_34790 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34813_34830 = state_34798__$1;
(statearr_34813_34830[(2)] = inst_34790);

(statearr_34813_34830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (8))){
var inst_34775 = (state_34798[(7)]);
var tmp34810 = inst_34775;
var inst_34775__$1 = tmp34810;
var state_34798__$1 = (function (){var statearr_34814 = state_34798;
(statearr_34814[(7)] = inst_34775__$1);

return statearr_34814;
})();
var statearr_34815_34831 = state_34798__$1;
(statearr_34815_34831[(2)] = null);

(statearr_34815_34831[(1)] = (2));


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
});})(c__33099__auto___34821,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34821,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34816[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34816[(1)] = (1));

return statearr_34816;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34798){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34817){if((e34817 instanceof Object)){
var ex__33015__auto__ = e34817;
var statearr_34818_34832 = state_34798;
(statearr_34818_34832[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34833 = state_34798;
state_34798 = G__34833;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34821,out))
})();
var state__33101__auto__ = (function (){var statearr_34819 = f__33100__auto__.call(null);
(statearr_34819[(6)] = c__33099__auto___34821);

return statearr_34819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34821,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34835 = arguments.length;
switch (G__34835) {
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
var c__33099__auto___34901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34901,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34901,out){
return (function (state_34873){
var state_val_34874 = (state_34873[(1)]);
if((state_val_34874 === (7))){
var inst_34869 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34875_34902 = state_34873__$1;
(statearr_34875_34902[(2)] = inst_34869);

(statearr_34875_34902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (1))){
var inst_34836 = (new Array(n));
var inst_34837 = inst_34836;
var inst_34838 = (0);
var state_34873__$1 = (function (){var statearr_34876 = state_34873;
(statearr_34876[(7)] = inst_34837);

(statearr_34876[(8)] = inst_34838);

return statearr_34876;
})();
var statearr_34877_34903 = state_34873__$1;
(statearr_34877_34903[(2)] = null);

(statearr_34877_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (4))){
var inst_34841 = (state_34873[(9)]);
var inst_34841__$1 = (state_34873[(2)]);
var inst_34842 = (inst_34841__$1 == null);
var inst_34843 = cljs.core.not.call(null,inst_34842);
var state_34873__$1 = (function (){var statearr_34878 = state_34873;
(statearr_34878[(9)] = inst_34841__$1);

return statearr_34878;
})();
if(inst_34843){
var statearr_34879_34904 = state_34873__$1;
(statearr_34879_34904[(1)] = (5));

} else {
var statearr_34880_34905 = state_34873__$1;
(statearr_34880_34905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (15))){
var inst_34863 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34881_34906 = state_34873__$1;
(statearr_34881_34906[(2)] = inst_34863);

(statearr_34881_34906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (13))){
var state_34873__$1 = state_34873;
var statearr_34882_34907 = state_34873__$1;
(statearr_34882_34907[(2)] = null);

(statearr_34882_34907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (6))){
var inst_34838 = (state_34873[(8)]);
var inst_34859 = (inst_34838 > (0));
var state_34873__$1 = state_34873;
if(cljs.core.truth_(inst_34859)){
var statearr_34883_34908 = state_34873__$1;
(statearr_34883_34908[(1)] = (12));

} else {
var statearr_34884_34909 = state_34873__$1;
(statearr_34884_34909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (3))){
var inst_34871 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34873__$1,inst_34871);
} else {
if((state_val_34874 === (12))){
var inst_34837 = (state_34873[(7)]);
var inst_34861 = cljs.core.vec.call(null,inst_34837);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34873__$1,(15),out,inst_34861);
} else {
if((state_val_34874 === (2))){
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34873__$1,(4),ch);
} else {
if((state_val_34874 === (11))){
var inst_34853 = (state_34873[(2)]);
var inst_34854 = (new Array(n));
var inst_34837 = inst_34854;
var inst_34838 = (0);
var state_34873__$1 = (function (){var statearr_34885 = state_34873;
(statearr_34885[(7)] = inst_34837);

(statearr_34885[(10)] = inst_34853);

(statearr_34885[(8)] = inst_34838);

return statearr_34885;
})();
var statearr_34886_34910 = state_34873__$1;
(statearr_34886_34910[(2)] = null);

(statearr_34886_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (9))){
var inst_34837 = (state_34873[(7)]);
var inst_34851 = cljs.core.vec.call(null,inst_34837);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34873__$1,(11),out,inst_34851);
} else {
if((state_val_34874 === (5))){
var inst_34846 = (state_34873[(11)]);
var inst_34837 = (state_34873[(7)]);
var inst_34841 = (state_34873[(9)]);
var inst_34838 = (state_34873[(8)]);
var inst_34845 = (inst_34837[inst_34838] = inst_34841);
var inst_34846__$1 = (inst_34838 + (1));
var inst_34847 = (inst_34846__$1 < n);
var state_34873__$1 = (function (){var statearr_34887 = state_34873;
(statearr_34887[(12)] = inst_34845);

(statearr_34887[(11)] = inst_34846__$1);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34888_34911 = state_34873__$1;
(statearr_34888_34911[(1)] = (8));

} else {
var statearr_34889_34912 = state_34873__$1;
(statearr_34889_34912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (14))){
var inst_34866 = (state_34873[(2)]);
var inst_34867 = cljs.core.async.close_BANG_.call(null,out);
var state_34873__$1 = (function (){var statearr_34891 = state_34873;
(statearr_34891[(13)] = inst_34866);

return statearr_34891;
})();
var statearr_34892_34913 = state_34873__$1;
(statearr_34892_34913[(2)] = inst_34867);

(statearr_34892_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (10))){
var inst_34857 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34893_34914 = state_34873__$1;
(statearr_34893_34914[(2)] = inst_34857);

(statearr_34893_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (8))){
var inst_34846 = (state_34873[(11)]);
var inst_34837 = (state_34873[(7)]);
var tmp34890 = inst_34837;
var inst_34837__$1 = tmp34890;
var inst_34838 = inst_34846;
var state_34873__$1 = (function (){var statearr_34894 = state_34873;
(statearr_34894[(7)] = inst_34837__$1);

(statearr_34894[(8)] = inst_34838);

return statearr_34894;
})();
var statearr_34895_34915 = state_34873__$1;
(statearr_34895_34915[(2)] = null);

(statearr_34895_34915[(1)] = (2));


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
});})(c__33099__auto___34901,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34901,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34896[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34896[(1)] = (1));

return statearr_34896;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34873){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34897){if((e34897 instanceof Object)){
var ex__33015__auto__ = e34897;
var statearr_34898_34916 = state_34873;
(statearr_34898_34916[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34917 = state_34873;
state_34873 = G__34917;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34901,out))
})();
var state__33101__auto__ = (function (){var statearr_34899 = f__33100__auto__.call(null);
(statearr_34899[(6)] = c__33099__auto___34901);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34901,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34919 = arguments.length;
switch (G__34919) {
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
var c__33099__auto___34989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___34989,out){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___34989,out){
return (function (state_34961){
var state_val_34962 = (state_34961[(1)]);
if((state_val_34962 === (7))){
var inst_34957 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
var statearr_34963_34990 = state_34961__$1;
(statearr_34963_34990[(2)] = inst_34957);

(statearr_34963_34990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (1))){
var inst_34920 = [];
var inst_34921 = inst_34920;
var inst_34922 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34961__$1 = (function (){var statearr_34964 = state_34961;
(statearr_34964[(7)] = inst_34921);

(statearr_34964[(8)] = inst_34922);

return statearr_34964;
})();
var statearr_34965_34991 = state_34961__$1;
(statearr_34965_34991[(2)] = null);

(statearr_34965_34991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (4))){
var inst_34925 = (state_34961[(9)]);
var inst_34925__$1 = (state_34961[(2)]);
var inst_34926 = (inst_34925__$1 == null);
var inst_34927 = cljs.core.not.call(null,inst_34926);
var state_34961__$1 = (function (){var statearr_34966 = state_34961;
(statearr_34966[(9)] = inst_34925__$1);

return statearr_34966;
})();
if(inst_34927){
var statearr_34967_34992 = state_34961__$1;
(statearr_34967_34992[(1)] = (5));

} else {
var statearr_34968_34993 = state_34961__$1;
(statearr_34968_34993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (15))){
var inst_34951 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
var statearr_34969_34994 = state_34961__$1;
(statearr_34969_34994[(2)] = inst_34951);

(statearr_34969_34994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (13))){
var state_34961__$1 = state_34961;
var statearr_34970_34995 = state_34961__$1;
(statearr_34970_34995[(2)] = null);

(statearr_34970_34995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (6))){
var inst_34921 = (state_34961[(7)]);
var inst_34946 = inst_34921.length;
var inst_34947 = (inst_34946 > (0));
var state_34961__$1 = state_34961;
if(cljs.core.truth_(inst_34947)){
var statearr_34971_34996 = state_34961__$1;
(statearr_34971_34996[(1)] = (12));

} else {
var statearr_34972_34997 = state_34961__$1;
(statearr_34972_34997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (3))){
var inst_34959 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34961__$1,inst_34959);
} else {
if((state_val_34962 === (12))){
var inst_34921 = (state_34961[(7)]);
var inst_34949 = cljs.core.vec.call(null,inst_34921);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34961__$1,(15),out,inst_34949);
} else {
if((state_val_34962 === (2))){
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34961__$1,(4),ch);
} else {
if((state_val_34962 === (11))){
var inst_34929 = (state_34961[(10)]);
var inst_34925 = (state_34961[(9)]);
var inst_34939 = (state_34961[(2)]);
var inst_34940 = [];
var inst_34941 = inst_34940.push(inst_34925);
var inst_34921 = inst_34940;
var inst_34922 = inst_34929;
var state_34961__$1 = (function (){var statearr_34973 = state_34961;
(statearr_34973[(11)] = inst_34941);

(statearr_34973[(7)] = inst_34921);

(statearr_34973[(8)] = inst_34922);

(statearr_34973[(12)] = inst_34939);

return statearr_34973;
})();
var statearr_34974_34998 = state_34961__$1;
(statearr_34974_34998[(2)] = null);

(statearr_34974_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (9))){
var inst_34921 = (state_34961[(7)]);
var inst_34937 = cljs.core.vec.call(null,inst_34921);
var state_34961__$1 = state_34961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34961__$1,(11),out,inst_34937);
} else {
if((state_val_34962 === (5))){
var inst_34929 = (state_34961[(10)]);
var inst_34925 = (state_34961[(9)]);
var inst_34922 = (state_34961[(8)]);
var inst_34929__$1 = f.call(null,inst_34925);
var inst_34930 = cljs.core._EQ_.call(null,inst_34929__$1,inst_34922);
var inst_34931 = cljs.core.keyword_identical_QMARK_.call(null,inst_34922,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34932 = (inst_34930) || (inst_34931);
var state_34961__$1 = (function (){var statearr_34975 = state_34961;
(statearr_34975[(10)] = inst_34929__$1);

return statearr_34975;
})();
if(cljs.core.truth_(inst_34932)){
var statearr_34976_34999 = state_34961__$1;
(statearr_34976_34999[(1)] = (8));

} else {
var statearr_34977_35000 = state_34961__$1;
(statearr_34977_35000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (14))){
var inst_34954 = (state_34961[(2)]);
var inst_34955 = cljs.core.async.close_BANG_.call(null,out);
var state_34961__$1 = (function (){var statearr_34979 = state_34961;
(statearr_34979[(13)] = inst_34954);

return statearr_34979;
})();
var statearr_34980_35001 = state_34961__$1;
(statearr_34980_35001[(2)] = inst_34955);

(statearr_34980_35001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (10))){
var inst_34944 = (state_34961[(2)]);
var state_34961__$1 = state_34961;
var statearr_34981_35002 = state_34961__$1;
(statearr_34981_35002[(2)] = inst_34944);

(statearr_34981_35002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34962 === (8))){
var inst_34929 = (state_34961[(10)]);
var inst_34925 = (state_34961[(9)]);
var inst_34921 = (state_34961[(7)]);
var inst_34934 = inst_34921.push(inst_34925);
var tmp34978 = inst_34921;
var inst_34921__$1 = tmp34978;
var inst_34922 = inst_34929;
var state_34961__$1 = (function (){var statearr_34982 = state_34961;
(statearr_34982[(14)] = inst_34934);

(statearr_34982[(7)] = inst_34921__$1);

(statearr_34982[(8)] = inst_34922);

return statearr_34982;
})();
var statearr_34983_35003 = state_34961__$1;
(statearr_34983_35003[(2)] = null);

(statearr_34983_35003[(1)] = (2));


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
});})(c__33099__auto___34989,out))
;
return ((function (switch__33011__auto__,c__33099__auto___34989,out){
return (function() {
var cljs$core$async$state_machine__33012__auto__ = null;
var cljs$core$async$state_machine__33012__auto____0 = (function (){
var statearr_34984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34984[(0)] = cljs$core$async$state_machine__33012__auto__);

(statearr_34984[(1)] = (1));

return statearr_34984;
});
var cljs$core$async$state_machine__33012__auto____1 = (function (state_34961){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_34961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e34985){if((e34985 instanceof Object)){
var ex__33015__auto__ = e34985;
var statearr_34986_35004 = state_34961;
(statearr_34986_35004[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35005 = state_34961;
state_34961 = G__35005;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
cljs$core$async$state_machine__33012__auto__ = function(state_34961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33012__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33012__auto____1.call(this,state_34961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33012__auto____0;
cljs$core$async$state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33012__auto____1;
return cljs$core$async$state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___34989,out))
})();
var state__33101__auto__ = (function (){var statearr_34987 = f__33100__auto__.call(null);
(statearr_34987[(6)] = c__33099__auto___34989);

return statearr_34987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___34989,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1508541444578
