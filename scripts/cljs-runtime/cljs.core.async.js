goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29889 = arguments.length;
switch (G__29889) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29891 = (function (f,blockable,meta29892){
this.f = f;
this.blockable = blockable;
this.meta29892 = meta29892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29893,meta29892__$1){
var self__ = this;
var _29893__$1 = this;
return (new cljs.core.async.t_cljs$core$async29891(self__.f,self__.blockable,meta29892__$1));
}));

(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29893){
var self__ = this;
var _29893__$1 = this;
return self__.meta29892;
}));

(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29892","meta29892",-365611961,null)], null);
}));

(cljs.core.async.t_cljs$core$async29891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29891");

(cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29891.
 */
cljs.core.async.__GT_t_cljs$core$async29891 = (function cljs$core$async$__GT_t_cljs$core$async29891(f__$1,blockable__$1,meta29892){
return (new cljs.core.async.t_cljs$core$async29891(f__$1,blockable__$1,meta29892));
});

}

return (new cljs.core.async.t_cljs$core$async29891(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29922 = arguments.length;
switch (G__29922) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29935 = arguments.length;
switch (G__29935) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__29956 = arguments.length;
switch (G__29956) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33703 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33703) : fn1.call(null,val_33703));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33703) : fn1.call(null,val_33703));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29967 = arguments.length;
switch (G__29967) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33710 = n;
var x_33711 = (0);
while(true){
if((x_33711 < n__4741__auto___33710)){
(a[x_33711] = x_33711);

var G__33712 = (x_33711 + (1));
x_33711 = G__33712;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29986 = (function (flag,meta29987){
this.flag = flag;
this.meta29987 = meta29987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29988,meta29987__$1){
var self__ = this;
var _29988__$1 = this;
return (new cljs.core.async.t_cljs$core$async29986(self__.flag,meta29987__$1));
}));

(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29988){
var self__ = this;
var _29988__$1 = this;
return self__.meta29987;
}));

(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29987","meta29987",-1091463321,null)], null);
}));

(cljs.core.async.t_cljs$core$async29986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29986");

(cljs.core.async.t_cljs$core$async29986.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29986.
 */
cljs.core.async.__GT_t_cljs$core$async29986 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29986(flag__$1,meta29987){
return (new cljs.core.async.t_cljs$core$async29986(flag__$1,meta29987));
});

}

return (new cljs.core.async.t_cljs$core$async29986(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30003 = (function (flag,cb,meta30004){
this.flag = flag;
this.cb = cb;
this.meta30004 = meta30004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30005,meta30004__$1){
var self__ = this;
var _30005__$1 = this;
return (new cljs.core.async.t_cljs$core$async30003(self__.flag,self__.cb,meta30004__$1));
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30005){
var self__ = this;
var _30005__$1 = this;
return self__.meta30004;
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30004","meta30004",712511372,null)], null);
}));

(cljs.core.async.t_cljs$core$async30003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30003");

(cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30003.
 */
cljs.core.async.__GT_t_cljs$core$async30003 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30003(flag__$1,cb__$1,meta30004){
return (new cljs.core.async.t_cljs$core$async30003(flag__$1,cb__$1,meta30004));
});

}

return (new cljs.core.async.t_cljs$core$async30003(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30017_SHARP_){
var G__30022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30017_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30022) : fret.call(null,G__30022));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30018_SHARP_){
var G__30027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30018_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30027) : fret.call(null,G__30027));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33713 = (i + (1));
i = G__33713;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___33714 = arguments.length;
var i__4865__auto___33715 = (0);
while(true){
if((i__4865__auto___33715 < len__4864__auto___33714)){
args__4870__auto__.push((arguments[i__4865__auto___33715]));

var G__33716 = (i__4865__auto___33715 + (1));
i__4865__auto___33715 = G__33716;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30047){
var map__30048 = p__30047;
var map__30048__$1 = cljs.core.__destructure_map(map__30048);
var opts = map__30048__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30033){
var G__30034 = cljs.core.first(seq30033);
var seq30033__$1 = cljs.core.next(seq30033);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30034,seq30033__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30071 = arguments.length;
switch (G__30071) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29742__auto___33721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30146){
var state_val_30148 = (state_30146[(1)]);
if((state_val_30148 === (7))){
var inst_30141 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30163_33723 = state_30146__$1;
(statearr_30163_33723[(2)] = inst_30141);

(statearr_30163_33723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (1))){
var state_30146__$1 = state_30146;
var statearr_30164_33724 = state_30146__$1;
(statearr_30164_33724[(2)] = null);

(statearr_30164_33724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (4))){
var inst_30121 = (state_30146[(7)]);
var inst_30121__$1 = (state_30146[(2)]);
var inst_30123 = (inst_30121__$1 == null);
var state_30146__$1 = (function (){var statearr_30169 = state_30146;
(statearr_30169[(7)] = inst_30121__$1);

return statearr_30169;
})();
if(cljs.core.truth_(inst_30123)){
var statearr_30172_33725 = state_30146__$1;
(statearr_30172_33725[(1)] = (5));

} else {
var statearr_30173_33726 = state_30146__$1;
(statearr_30173_33726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (13))){
var state_30146__$1 = state_30146;
var statearr_30178_33727 = state_30146__$1;
(statearr_30178_33727[(2)] = null);

(statearr_30178_33727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (6))){
var inst_30121 = (state_30146[(7)]);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30146__$1,(11),to,inst_30121);
} else {
if((state_val_30148 === (3))){
var inst_30143 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30146__$1,inst_30143);
} else {
if((state_val_30148 === (12))){
var state_30146__$1 = state_30146;
var statearr_30188_33730 = state_30146__$1;
(statearr_30188_33730[(2)] = null);

(statearr_30188_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (2))){
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30146__$1,(4),from);
} else {
if((state_val_30148 === (11))){
var inst_30133 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
if(cljs.core.truth_(inst_30133)){
var statearr_30189_33731 = state_30146__$1;
(statearr_30189_33731[(1)] = (12));

} else {
var statearr_30193_33732 = state_30146__$1;
(statearr_30193_33732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (9))){
var state_30146__$1 = state_30146;
var statearr_30196_33733 = state_30146__$1;
(statearr_30196_33733[(2)] = null);

(statearr_30196_33733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (5))){
var state_30146__$1 = state_30146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30198_33734 = state_30146__$1;
(statearr_30198_33734[(1)] = (8));

} else {
var statearr_30199_33735 = state_30146__$1;
(statearr_30199_33735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (14))){
var inst_30139 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30204_33736 = state_30146__$1;
(statearr_30204_33736[(2)] = inst_30139);

(statearr_30204_33736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (10))){
var inst_30130 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30206_33737 = state_30146__$1;
(statearr_30206_33737[(2)] = inst_30130);

(statearr_30206_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (8))){
var inst_30126 = cljs.core.async.close_BANG_(to);
var state_30146__$1 = state_30146;
var statearr_30207_33739 = state_30146__$1;
(statearr_30207_33739[(2)] = inst_30126);

(statearr_30207_33739[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_30208 = [null,null,null,null,null,null,null,null];
(statearr_30208[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_30208[(1)] = (1));

return statearr_30208;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_30146){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30146);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30210){var ex__29178__auto__ = e30210;
var statearr_30213_33741 = state_30146;
(statearr_30213_33741[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30146[(4)]))){
var statearr_30216_33742 = state_30146;
(statearr_30216_33742[(1)] = cljs.core.first((state_30146[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33743 = state_30146;
state_30146 = G__33743;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_30146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_30146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30218 = f__29743__auto__();
(statearr_30218[(6)] = c__29742__auto___33721);

return statearr_30218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30233){
var vec__30234 = p__30233;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30234,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30234,(1),null);
var job = vec__30234;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29742__auto___33746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30245){
var state_val_30246 = (state_30245[(1)]);
if((state_val_30246 === (1))){
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30245__$1,(2),res,v);
} else {
if((state_val_30246 === (2))){
var inst_30242 = (state_30245[(2)]);
var inst_30243 = cljs.core.async.close_BANG_(res);
var state_30245__$1 = (function (){var statearr_30253 = state_30245;
(statearr_30253[(7)] = inst_30242);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30245__$1,inst_30243);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_30263 = [null,null,null,null,null,null,null,null];
(statearr_30263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__);

(statearr_30263[(1)] = (1));

return statearr_30263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1 = (function (state_30245){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30245);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30267){var ex__29178__auto__ = e30267;
var statearr_30268_33747 = state_30245;
(statearr_30268_33747[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30245[(4)]))){
var statearr_30271_33748 = state_30245;
(statearr_30271_33748[(1)] = cljs.core.first((state_30245[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_30245;
state_30245 = G__33749;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = function(state_30245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1.call(this,state_30245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30279 = f__29743__auto__();
(statearr_30279[(6)] = c__29742__auto___33746);

return statearr_30279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30283){
var vec__30285 = p__30283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(1),null);
var job = vec__30285;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33750 = n;
var __33752 = (0);
while(true){
if((__33752 < n__4741__auto___33750)){
var G__30294_33753 = type;
var G__30294_33754__$1 = (((G__30294_33753 instanceof cljs.core.Keyword))?G__30294_33753.fqn:null);
switch (G__30294_33754__$1) {
case "compute":
var c__29742__auto___33756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33752,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = ((function (__33752,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function (state_30313){
var state_val_30314 = (state_30313[(1)]);
if((state_val_30314 === (1))){
var state_30313__$1 = state_30313;
var statearr_30321_33758 = state_30313__$1;
(statearr_30321_33758[(2)] = null);

(statearr_30321_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (2))){
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30313__$1,(4),jobs);
} else {
if((state_val_30314 === (3))){
var inst_30311 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30313__$1,inst_30311);
} else {
if((state_val_30314 === (4))){
var inst_30301 = (state_30313[(2)]);
var inst_30303 = process(inst_30301);
var state_30313__$1 = state_30313;
if(cljs.core.truth_(inst_30303)){
var statearr_30332_33759 = state_30313__$1;
(statearr_30332_33759[(1)] = (5));

} else {
var statearr_30334_33760 = state_30313__$1;
(statearr_30334_33760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (5))){
var state_30313__$1 = state_30313;
var statearr_30335_33761 = state_30313__$1;
(statearr_30335_33761[(2)] = null);

(statearr_30335_33761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (6))){
var state_30313__$1 = state_30313;
var statearr_30341_33762 = state_30313__$1;
(statearr_30341_33762[(2)] = null);

(statearr_30341_33762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (7))){
var inst_30308 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
var statearr_30342_33763 = state_30313__$1;
(statearr_30342_33763[(2)] = inst_30308);

(statearr_30342_33763[(1)] = (3));


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
});})(__33752,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
;
return ((function (__33752,switch__29174__auto__,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_30347 = [null,null,null,null,null,null,null];
(statearr_30347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__);

(statearr_30347[(1)] = (1));

return statearr_30347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1 = (function (state_30313){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30313);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30349){var ex__29178__auto__ = e30349;
var statearr_30351_33764 = state_30313;
(statearr_30351_33764[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30313[(4)]))){
var statearr_30353_33765 = state_30313;
(statearr_30353_33765[(1)] = cljs.core.first((state_30313[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33766 = state_30313;
state_30313 = G__33766;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = function(state_30313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1.call(this,state_30313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__;
})()
;})(__33752,switch__29174__auto__,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
})();
var state__29744__auto__ = (function (){var statearr_30357 = f__29743__auto__();
(statearr_30357[(6)] = c__29742__auto___33756);

return statearr_30357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
});})(__33752,c__29742__auto___33756,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
);


break;
case "async":
var c__29742__auto___33767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33752,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = ((function (__33752,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function (state_30373){
var state_val_30374 = (state_30373[(1)]);
if((state_val_30374 === (1))){
var state_30373__$1 = state_30373;
var statearr_30381_33768 = state_30373__$1;
(statearr_30381_33768[(2)] = null);

(statearr_30381_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (2))){
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30373__$1,(4),jobs);
} else {
if((state_val_30374 === (3))){
var inst_30371 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30373__$1,inst_30371);
} else {
if((state_val_30374 === (4))){
var inst_30363 = (state_30373[(2)]);
var inst_30364 = async(inst_30363);
var state_30373__$1 = state_30373;
if(cljs.core.truth_(inst_30364)){
var statearr_30385_33769 = state_30373__$1;
(statearr_30385_33769[(1)] = (5));

} else {
var statearr_30387_33770 = state_30373__$1;
(statearr_30387_33770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (5))){
var state_30373__$1 = state_30373;
var statearr_30389_33771 = state_30373__$1;
(statearr_30389_33771[(2)] = null);

(statearr_30389_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (6))){
var state_30373__$1 = state_30373;
var statearr_30390_33772 = state_30373__$1;
(statearr_30390_33772[(2)] = null);

(statearr_30390_33772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (7))){
var inst_30369 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30395_33773 = state_30373__$1;
(statearr_30395_33773[(2)] = inst_30369);

(statearr_30395_33773[(1)] = (3));


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
});})(__33752,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
;
return ((function (__33752,switch__29174__auto__,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_30399 = [null,null,null,null,null,null,null];
(statearr_30399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__);

(statearr_30399[(1)] = (1));

return statearr_30399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1 = (function (state_30373){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30373);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30402){var ex__29178__auto__ = e30402;
var statearr_30404_33778 = state_30373;
(statearr_30404_33778[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30373[(4)]))){
var statearr_30409_33779 = state_30373;
(statearr_30409_33779[(1)] = cljs.core.first((state_30373[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33780 = state_30373;
state_30373 = G__33780;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__;
})()
;})(__33752,switch__29174__auto__,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
})();
var state__29744__auto__ = (function (){var statearr_30414 = f__29743__auto__();
(statearr_30414[(6)] = c__29742__auto___33767);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
});})(__33752,c__29742__auto___33767,G__30294_33753,G__30294_33754__$1,n__4741__auto___33750,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30294_33754__$1)].join('')));

}

var G__33781 = (__33752 + (1));
__33752 = G__33781;
continue;
} else {
}
break;
}

var c__29742__auto___33783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30453){
var state_val_30455 = (state_30453[(1)]);
if((state_val_30455 === (7))){
var inst_30447 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30471_33789 = state_30453__$1;
(statearr_30471_33789[(2)] = inst_30447);

(statearr_30471_33789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (1))){
var state_30453__$1 = state_30453;
var statearr_30474_33790 = state_30453__$1;
(statearr_30474_33790[(2)] = null);

(statearr_30474_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (4))){
var inst_30428 = (state_30453[(7)]);
var inst_30428__$1 = (state_30453[(2)]);
var inst_30429 = (inst_30428__$1 == null);
var state_30453__$1 = (function (){var statearr_30478 = state_30453;
(statearr_30478[(7)] = inst_30428__$1);

return statearr_30478;
})();
if(cljs.core.truth_(inst_30429)){
var statearr_30479_33791 = state_30453__$1;
(statearr_30479_33791[(1)] = (5));

} else {
var statearr_30480_33792 = state_30453__$1;
(statearr_30480_33792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (6))){
var inst_30428 = (state_30453[(7)]);
var inst_30434 = (state_30453[(8)]);
var inst_30434__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30439 = [inst_30428,inst_30434__$1];
var inst_30440 = (new cljs.core.PersistentVector(null,2,(5),inst_30437,inst_30439,null));
var state_30453__$1 = (function (){var statearr_30489 = state_30453;
(statearr_30489[(8)] = inst_30434__$1);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30453__$1,(8),jobs,inst_30440);
} else {
if((state_val_30455 === (3))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30453__$1,inst_30449);
} else {
if((state_val_30455 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30453__$1,(4),from);
} else {
if((state_val_30455 === (9))){
var inst_30444 = (state_30453[(2)]);
var state_30453__$1 = (function (){var statearr_30505 = state_30453;
(statearr_30505[(9)] = inst_30444);

return statearr_30505;
})();
var statearr_30506_33793 = state_30453__$1;
(statearr_30506_33793[(2)] = null);

(statearr_30506_33793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (5))){
var inst_30431 = cljs.core.async.close_BANG_(jobs);
var state_30453__$1 = state_30453;
var statearr_30511_33794 = state_30453__$1;
(statearr_30511_33794[(2)] = inst_30431);

(statearr_30511_33794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (8))){
var inst_30434 = (state_30453[(8)]);
var inst_30442 = (state_30453[(2)]);
var state_30453__$1 = (function (){var statearr_30512 = state_30453;
(statearr_30512[(10)] = inst_30442);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30453__$1,(9),results,inst_30434);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1 = (function (state_30453){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30453);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30523){var ex__29178__auto__ = e30523;
var statearr_30524_33795 = state_30453;
(statearr_30524_33795[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30453[(4)]))){
var statearr_30526_33796 = state_30453;
(statearr_30526_33796[(1)] = cljs.core.first((state_30453[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33797 = state_30453;
state_30453 = G__33797;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30534 = f__29743__auto__();
(statearr_30534[(6)] = c__29742__auto___33783);

return statearr_30534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


var c__29742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30582){
var state_val_30584 = (state_30582[(1)]);
if((state_val_30584 === (7))){
var inst_30576 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30587_33798 = state_30582__$1;
(statearr_30587_33798[(2)] = inst_30576);

(statearr_30587_33798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (20))){
var state_30582__$1 = state_30582;
var statearr_30592_33801 = state_30582__$1;
(statearr_30592_33801[(2)] = null);

(statearr_30592_33801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (1))){
var state_30582__$1 = state_30582;
var statearr_30595_33802 = state_30582__$1;
(statearr_30595_33802[(2)] = null);

(statearr_30595_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (4))){
var inst_30538 = (state_30582[(7)]);
var inst_30538__$1 = (state_30582[(2)]);
var inst_30539 = (inst_30538__$1 == null);
var state_30582__$1 = (function (){var statearr_30600 = state_30582;
(statearr_30600[(7)] = inst_30538__$1);

return statearr_30600;
})();
if(cljs.core.truth_(inst_30539)){
var statearr_30602_33803 = state_30582__$1;
(statearr_30602_33803[(1)] = (5));

} else {
var statearr_30603_33804 = state_30582__$1;
(statearr_30603_33804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (15))){
var inst_30558 = (state_30582[(8)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30582__$1,(18),to,inst_30558);
} else {
if((state_val_30584 === (21))){
var inst_30571 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30605_33805 = state_30582__$1;
(statearr_30605_33805[(2)] = inst_30571);

(statearr_30605_33805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (13))){
var inst_30573 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30609 = state_30582;
(statearr_30609[(9)] = inst_30573);

return statearr_30609;
})();
var statearr_30610_33806 = state_30582__$1;
(statearr_30610_33806[(2)] = null);

(statearr_30610_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var inst_30538 = (state_30582[(7)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(11),inst_30538);
} else {
if((state_val_30584 === (17))){
var inst_30566 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30566)){
var statearr_30618_33807 = state_30582__$1;
(statearr_30618_33807[(1)] = (19));

} else {
var statearr_30619_33808 = state_30582__$1;
(statearr_30619_33808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (3))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30582__$1,inst_30578);
} else {
if((state_val_30584 === (12))){
var inst_30551 = (state_30582[(10)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(14),inst_30551);
} else {
if((state_val_30584 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(4),results);
} else {
if((state_val_30584 === (19))){
var state_30582__$1 = state_30582;
var statearr_30630_33809 = state_30582__$1;
(statearr_30630_33809[(2)] = null);

(statearr_30630_33809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (11))){
var inst_30551 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30631 = state_30582;
(statearr_30631[(10)] = inst_30551);

return statearr_30631;
})();
var statearr_30640_33810 = state_30582__$1;
(statearr_30640_33810[(2)] = null);

(statearr_30640_33810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (9))){
var state_30582__$1 = state_30582;
var statearr_30642_33811 = state_30582__$1;
(statearr_30642_33811[(2)] = null);

(statearr_30642_33811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var state_30582__$1 = state_30582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30644_33813 = state_30582__$1;
(statearr_30644_33813[(1)] = (8));

} else {
var statearr_30645_33814 = state_30582__$1;
(statearr_30645_33814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (14))){
var inst_30560 = (state_30582[(11)]);
var inst_30558 = (state_30582[(8)]);
var inst_30558__$1 = (state_30582[(2)]);
var inst_30559 = (inst_30558__$1 == null);
var inst_30560__$1 = cljs.core.not(inst_30559);
var state_30582__$1 = (function (){var statearr_30649 = state_30582;
(statearr_30649[(11)] = inst_30560__$1);

(statearr_30649[(8)] = inst_30558__$1);

return statearr_30649;
})();
if(inst_30560__$1){
var statearr_30650_33815 = state_30582__$1;
(statearr_30650_33815[(1)] = (15));

} else {
var statearr_30655_33816 = state_30582__$1;
(statearr_30655_33816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (16))){
var inst_30560 = (state_30582[(11)]);
var state_30582__$1 = state_30582;
var statearr_30656_33817 = state_30582__$1;
(statearr_30656_33817[(2)] = inst_30560);

(statearr_30656_33817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (10))){
var inst_30548 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30664_33818 = state_30582__$1;
(statearr_30664_33818[(2)] = inst_30548);

(statearr_30664_33818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (18))){
var inst_30563 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30667_33819 = state_30582__$1;
(statearr_30667_33819[(2)] = inst_30563);

(statearr_30667_33819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (8))){
var inst_30542 = cljs.core.async.close_BANG_(to);
var state_30582__$1 = state_30582;
var statearr_30669_33820 = state_30582__$1;
(statearr_30669_33820[(2)] = inst_30542);

(statearr_30669_33820[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_30678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__);

(statearr_30678[(1)] = (1));

return statearr_30678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1 = (function (state_30582){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30582);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30681){var ex__29178__auto__ = e30681;
var statearr_30684_33821 = state_30582;
(statearr_30684_33821[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30582[(4)]))){
var statearr_30686_33822 = state_30582;
(statearr_30686_33822[(1)] = cljs.core.first((state_30582[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33823 = state_30582;
state_30582 = G__33823;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30688 = f__29743__auto__();
(statearr_30688[(6)] = c__29742__auto__);

return statearr_30688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

return c__29742__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30698 = arguments.length;
switch (G__30698) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30716 = arguments.length;
switch (G__30716) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30743 = arguments.length;
switch (G__30743) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29742__auto___33837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30782){
var state_val_30783 = (state_30782[(1)]);
if((state_val_30783 === (7))){
var inst_30777 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30790_33838 = state_30782__$1;
(statearr_30790_33838[(2)] = inst_30777);

(statearr_30790_33838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (1))){
var state_30782__$1 = state_30782;
var statearr_30791_33839 = state_30782__$1;
(statearr_30791_33839[(2)] = null);

(statearr_30791_33839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (4))){
var inst_30754 = (state_30782[(7)]);
var inst_30754__$1 = (state_30782[(2)]);
var inst_30755 = (inst_30754__$1 == null);
var state_30782__$1 = (function (){var statearr_30795 = state_30782;
(statearr_30795[(7)] = inst_30754__$1);

return statearr_30795;
})();
if(cljs.core.truth_(inst_30755)){
var statearr_30797_33840 = state_30782__$1;
(statearr_30797_33840[(1)] = (5));

} else {
var statearr_30799_33841 = state_30782__$1;
(statearr_30799_33841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (13))){
var state_30782__$1 = state_30782;
var statearr_30800_33842 = state_30782__$1;
(statearr_30800_33842[(2)] = null);

(statearr_30800_33842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (6))){
var inst_30754 = (state_30782[(7)]);
var inst_30763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30754) : p.call(null,inst_30754));
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30763)){
var statearr_30801_33843 = state_30782__$1;
(statearr_30801_33843[(1)] = (9));

} else {
var statearr_30802_33844 = state_30782__$1;
(statearr_30802_33844[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (3))){
var inst_30779 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30782__$1,inst_30779);
} else {
if((state_val_30783 === (12))){
var state_30782__$1 = state_30782;
var statearr_30804_33845 = state_30782__$1;
(statearr_30804_33845[(2)] = null);

(statearr_30804_33845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (2))){
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30782__$1,(4),ch);
} else {
if((state_val_30783 === (11))){
var inst_30754 = (state_30782[(7)]);
var inst_30767 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30782__$1,(8),inst_30767,inst_30754);
} else {
if((state_val_30783 === (9))){
var state_30782__$1 = state_30782;
var statearr_30805_33847 = state_30782__$1;
(statearr_30805_33847[(2)] = tc);

(statearr_30805_33847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (5))){
var inst_30757 = cljs.core.async.close_BANG_(tc);
var inst_30761 = cljs.core.async.close_BANG_(fc);
var state_30782__$1 = (function (){var statearr_30806 = state_30782;
(statearr_30806[(8)] = inst_30757);

return statearr_30806;
})();
var statearr_30811_33848 = state_30782__$1;
(statearr_30811_33848[(2)] = inst_30761);

(statearr_30811_33848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (14))){
var inst_30775 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30815_33849 = state_30782__$1;
(statearr_30815_33849[(2)] = inst_30775);

(statearr_30815_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (10))){
var state_30782__$1 = state_30782;
var statearr_30817_33851 = state_30782__$1;
(statearr_30817_33851[(2)] = fc);

(statearr_30817_33851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (8))){
var inst_30769 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30769)){
var statearr_30818_33852 = state_30782__$1;
(statearr_30818_33852[(1)] = (12));

} else {
var statearr_30819_33853 = state_30782__$1;
(statearr_30819_33853[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_30835 = [null,null,null,null,null,null,null,null,null];
(statearr_30835[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_30835[(1)] = (1));

return statearr_30835;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_30782){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30782);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30837){var ex__29178__auto__ = e30837;
var statearr_30838_33855 = state_30782;
(statearr_30838_33855[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30782[(4)]))){
var statearr_30839_33856 = state_30782;
(statearr_30839_33856[(1)] = cljs.core.first((state_30782[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33857 = state_30782;
state_30782 = G__33857;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_30782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30845 = f__29743__auto__();
(statearr_30845[(6)] = c__29742__auto___33837);

return statearr_30845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30891){
var state_val_30892 = (state_30891[(1)]);
if((state_val_30892 === (7))){
var inst_30887 = (state_30891[(2)]);
var state_30891__$1 = state_30891;
var statearr_30894_33865 = state_30891__$1;
(statearr_30894_33865[(2)] = inst_30887);

(statearr_30894_33865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (1))){
var inst_30861 = init;
var inst_30863 = inst_30861;
var state_30891__$1 = (function (){var statearr_30895 = state_30891;
(statearr_30895[(7)] = inst_30863);

return statearr_30895;
})();
var statearr_30896_33870 = state_30891__$1;
(statearr_30896_33870[(2)] = null);

(statearr_30896_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (4))){
var inst_30866 = (state_30891[(8)]);
var inst_30866__$1 = (state_30891[(2)]);
var inst_30869 = (inst_30866__$1 == null);
var state_30891__$1 = (function (){var statearr_30899 = state_30891;
(statearr_30899[(8)] = inst_30866__$1);

return statearr_30899;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_30900_33872 = state_30891__$1;
(statearr_30900_33872[(1)] = (5));

} else {
var statearr_30902_33873 = state_30891__$1;
(statearr_30902_33873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (6))){
var inst_30866 = (state_30891[(8)]);
var inst_30878 = (state_30891[(9)]);
var inst_30863 = (state_30891[(7)]);
var inst_30878__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30863,inst_30866) : f.call(null,inst_30863,inst_30866));
var inst_30879 = cljs.core.reduced_QMARK_(inst_30878__$1);
var state_30891__$1 = (function (){var statearr_30907 = state_30891;
(statearr_30907[(9)] = inst_30878__$1);

return statearr_30907;
})();
if(inst_30879){
var statearr_30908_33875 = state_30891__$1;
(statearr_30908_33875[(1)] = (8));

} else {
var statearr_30909_33876 = state_30891__$1;
(statearr_30909_33876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (3))){
var inst_30889 = (state_30891[(2)]);
var state_30891__$1 = state_30891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30891__$1,inst_30889);
} else {
if((state_val_30892 === (2))){
var state_30891__$1 = state_30891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30891__$1,(4),ch);
} else {
if((state_val_30892 === (9))){
var inst_30878 = (state_30891[(9)]);
var inst_30863 = inst_30878;
var state_30891__$1 = (function (){var statearr_30914 = state_30891;
(statearr_30914[(7)] = inst_30863);

return statearr_30914;
})();
var statearr_30916_33878 = state_30891__$1;
(statearr_30916_33878[(2)] = null);

(statearr_30916_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (5))){
var inst_30863 = (state_30891[(7)]);
var state_30891__$1 = state_30891;
var statearr_30923_33883 = state_30891__$1;
(statearr_30923_33883[(2)] = inst_30863);

(statearr_30923_33883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (10))){
var inst_30885 = (state_30891[(2)]);
var state_30891__$1 = state_30891;
var statearr_30925_33884 = state_30891__$1;
(statearr_30925_33884[(2)] = inst_30885);

(statearr_30925_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30892 === (8))){
var inst_30878 = (state_30891[(9)]);
var inst_30881 = cljs.core.deref(inst_30878);
var state_30891__$1 = state_30891;
var statearr_30937_33885 = state_30891__$1;
(statearr_30937_33885[(2)] = inst_30881);

(statearr_30937_33885[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29175__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29175__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = cljs$core$async$reduce_$_state_machine__29175__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var cljs$core$async$reduce_$_state_machine__29175__auto____1 = (function (state_30891){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30891);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30952){var ex__29178__auto__ = e30952;
var statearr_30956_33886 = state_30891;
(statearr_30956_33886[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30891[(4)]))){
var statearr_30957_33891 = state_30891;
(statearr_30957_33891[(1)] = cljs.core.first((state_30891[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33896 = state_30891;
state_30891 = G__33896;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29175__auto__ = function(state_30891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29175__auto____1.call(this,state_30891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29175__auto____0;
cljs$core$async$reduce_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29175__auto____1;
return cljs$core$async$reduce_$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_30962 = f__29743__auto__();
(statearr_30962[(6)] = c__29742__auto__);

return statearr_30962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

return c__29742__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_30976){
var state_val_30977 = (state_30976[(1)]);
if((state_val_30977 === (1))){
var inst_30971 = cljs.core.async.reduce(f__$1,init,ch);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30976__$1,(2),inst_30971);
} else {
if((state_val_30977 === (2))){
var inst_30973 = (state_30976[(2)]);
var inst_30974 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30973) : f__$1.call(null,inst_30973));
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30976__$1,inst_30974);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29175__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29175__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null];
(statearr_30988[(0)] = cljs$core$async$transduce_$_state_machine__29175__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var cljs$core$async$transduce_$_state_machine__29175__auto____1 = (function (state_30976){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_30976);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e30989){var ex__29178__auto__ = e30989;
var statearr_30990_33907 = state_30976;
(statearr_30990_33907[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_30976[(4)]))){
var statearr_30991_33910 = state_30976;
(statearr_30991_33910[(1)] = cljs.core.first((state_30976[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33911 = state_30976;
state_30976 = G__33911;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29175__auto__ = function(state_30976){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29175__auto____1.call(this,state_30976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29175__auto____0;
cljs$core$async$transduce_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29175__auto____1;
return cljs$core$async$transduce_$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_31001 = f__29743__auto__();
(statearr_31001[(6)] = c__29742__auto__);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

return c__29742__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31006 = arguments.length;
switch (G__31006) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_31052){
var state_val_31056 = (state_31052[(1)]);
if((state_val_31056 === (7))){
var inst_31028 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31059_33921 = state_31052__$1;
(statearr_31059_33921[(2)] = inst_31028);

(statearr_31059_33921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (1))){
var inst_31021 = cljs.core.seq(coll);
var inst_31022 = inst_31021;
var state_31052__$1 = (function (){var statearr_31062 = state_31052;
(statearr_31062[(7)] = inst_31022);

return statearr_31062;
})();
var statearr_31063_33925 = state_31052__$1;
(statearr_31063_33925[(2)] = null);

(statearr_31063_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (4))){
var inst_31022 = (state_31052[(7)]);
var inst_31026 = cljs.core.first(inst_31022);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31052__$1,(7),ch,inst_31026);
} else {
if((state_val_31056 === (13))){
var inst_31046 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31064_33926 = state_31052__$1;
(statearr_31064_33926[(2)] = inst_31046);

(statearr_31064_33926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (6))){
var inst_31035 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31035)){
var statearr_31069_33927 = state_31052__$1;
(statearr_31069_33927[(1)] = (8));

} else {
var statearr_31070_33928 = state_31052__$1;
(statearr_31070_33928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31052__$1,inst_31050);
} else {
if((state_val_31056 === (12))){
var state_31052__$1 = state_31052;
var statearr_31075_33930 = state_31052__$1;
(statearr_31075_33930[(2)] = null);

(statearr_31075_33930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (2))){
var inst_31022 = (state_31052[(7)]);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31022)){
var statearr_31081_33935 = state_31052__$1;
(statearr_31081_33935[(1)] = (4));

} else {
var statearr_31082_33936 = state_31052__$1;
(statearr_31082_33936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (11))){
var inst_31043 = cljs.core.async.close_BANG_(ch);
var state_31052__$1 = state_31052;
var statearr_31083_33941 = state_31052__$1;
(statearr_31083_33941[(2)] = inst_31043);

(statearr_31083_33941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (9))){
var state_31052__$1 = state_31052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31085_33942 = state_31052__$1;
(statearr_31085_33942[(1)] = (11));

} else {
var statearr_31088_33943 = state_31052__$1;
(statearr_31088_33943[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (5))){
var inst_31022 = (state_31052[(7)]);
var state_31052__$1 = state_31052;
var statearr_31093_33944 = state_31052__$1;
(statearr_31093_33944[(2)] = inst_31022);

(statearr_31093_33944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (10))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31096_33945 = state_31052__$1;
(statearr_31096_33945[(2)] = inst_31048);

(statearr_31096_33945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (8))){
var inst_31022 = (state_31052[(7)]);
var inst_31039 = cljs.core.next(inst_31022);
var inst_31022__$1 = inst_31039;
var state_31052__$1 = (function (){var statearr_31097 = state_31052;
(statearr_31097[(7)] = inst_31022__$1);

return statearr_31097;
})();
var statearr_31098_33946 = state_31052__$1;
(statearr_31098_33946[(2)] = null);

(statearr_31098_33946[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_31102 = [null,null,null,null,null,null,null,null];
(statearr_31102[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_31102[(1)] = (1));

return statearr_31102;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_31052){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_31052);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e31108){var ex__29178__auto__ = e31108;
var statearr_31109_33950 = state_31052;
(statearr_31109_33950[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_31052[(4)]))){
var statearr_31113_33951 = state_31052;
(statearr_31113_33951[(1)] = cljs.core.first((state_31052[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33952 = state_31052;
state_31052 = G__33952;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_31115 = f__29743__auto__();
(statearr_31115[(6)] = c__29742__auto__);

return statearr_31115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

return c__29742__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31127 = arguments.length;
switch (G__31127) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33957 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33957(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33965 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33965(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33979 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33979(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33988 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33988(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31157 = (function (ch,cs,meta31158){
this.ch = ch;
this.cs = cs;
this.meta31158 = meta31158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31159,meta31158__$1){
var self__ = this;
var _31159__$1 = this;
return (new cljs.core.async.t_cljs$core$async31157(self__.ch,self__.cs,meta31158__$1));
}));

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31159){
var self__ = this;
var _31159__$1 = this;
return self__.meta31158;
}));

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31157.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31158","meta31158",689157072,null)], null);
}));

(cljs.core.async.t_cljs$core$async31157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31157");

(cljs.core.async.t_cljs$core$async31157.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31157.
 */
cljs.core.async.__GT_t_cljs$core$async31157 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31157(ch__$1,cs__$1,meta31158){
return (new cljs.core.async.t_cljs$core$async31157(ch__$1,cs__$1,meta31158));
});

}

return (new cljs.core.async.t_cljs$core$async31157(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29742__auto___34029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_31348){
var state_val_31349 = (state_31348[(1)]);
if((state_val_31349 === (7))){
var inst_31341 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31354_34030 = state_31348__$1;
(statearr_31354_34030[(2)] = inst_31341);

(statearr_31354_34030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (20))){
var inst_31233 = (state_31348[(7)]);
var inst_31247 = cljs.core.first(inst_31233);
var inst_31248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31247,(0),null);
var inst_31249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31247,(1),null);
var state_31348__$1 = (function (){var statearr_31357 = state_31348;
(statearr_31357[(8)] = inst_31248);

return statearr_31357;
})();
if(cljs.core.truth_(inst_31249)){
var statearr_31358_34035 = state_31348__$1;
(statearr_31358_34035[(1)] = (22));

} else {
var statearr_31359_34040 = state_31348__$1;
(statearr_31359_34040[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (27))){
var inst_31281 = (state_31348[(9)]);
var inst_31289 = (state_31348[(10)]);
var inst_31283 = (state_31348[(11)]);
var inst_31191 = (state_31348[(12)]);
var inst_31289__$1 = cljs.core._nth(inst_31281,inst_31283);
var inst_31290 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31289__$1,inst_31191,done);
var state_31348__$1 = (function (){var statearr_31363 = state_31348;
(statearr_31363[(10)] = inst_31289__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31364_34044 = state_31348__$1;
(statearr_31364_34044[(1)] = (30));

} else {
var statearr_31366_34045 = state_31348__$1;
(statearr_31366_34045[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (1))){
var state_31348__$1 = state_31348;
var statearr_31369_34046 = state_31348__$1;
(statearr_31369_34046[(2)] = null);

(statearr_31369_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (24))){
var inst_31233 = (state_31348[(7)]);
var inst_31256 = (state_31348[(2)]);
var inst_31257 = cljs.core.next(inst_31233);
var inst_31205 = inst_31257;
var inst_31206 = null;
var inst_31207 = (0);
var inst_31208 = (0);
var state_31348__$1 = (function (){var statearr_31370 = state_31348;
(statearr_31370[(13)] = inst_31207);

(statearr_31370[(14)] = inst_31208);

(statearr_31370[(15)] = inst_31206);

(statearr_31370[(16)] = inst_31256);

(statearr_31370[(17)] = inst_31205);

return statearr_31370;
})();
var statearr_31375_34052 = state_31348__$1;
(statearr_31375_34052[(2)] = null);

(statearr_31375_34052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (39))){
var state_31348__$1 = state_31348;
var statearr_31405_34055 = state_31348__$1;
(statearr_31405_34055[(2)] = null);

(statearr_31405_34055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (4))){
var inst_31191 = (state_31348[(12)]);
var inst_31191__$1 = (state_31348[(2)]);
var inst_31193 = (inst_31191__$1 == null);
var state_31348__$1 = (function (){var statearr_31415 = state_31348;
(statearr_31415[(12)] = inst_31191__$1);

return statearr_31415;
})();
if(cljs.core.truth_(inst_31193)){
var statearr_31417_34065 = state_31348__$1;
(statearr_31417_34065[(1)] = (5));

} else {
var statearr_31418_34066 = state_31348__$1;
(statearr_31418_34066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (15))){
var inst_31207 = (state_31348[(13)]);
var inst_31208 = (state_31348[(14)]);
var inst_31206 = (state_31348[(15)]);
var inst_31205 = (state_31348[(17)]);
var inst_31229 = (state_31348[(2)]);
var inst_31230 = (inst_31208 + (1));
var tmp31389 = inst_31207;
var tmp31390 = inst_31206;
var tmp31391 = inst_31205;
var inst_31205__$1 = tmp31391;
var inst_31206__$1 = tmp31390;
var inst_31207__$1 = tmp31389;
var inst_31208__$1 = inst_31230;
var state_31348__$1 = (function (){var statearr_31427 = state_31348;
(statearr_31427[(13)] = inst_31207__$1);

(statearr_31427[(14)] = inst_31208__$1);

(statearr_31427[(15)] = inst_31206__$1);

(statearr_31427[(18)] = inst_31229);

(statearr_31427[(17)] = inst_31205__$1);

return statearr_31427;
})();
var statearr_31429_34073 = state_31348__$1;
(statearr_31429_34073[(2)] = null);

(statearr_31429_34073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (21))){
var inst_31261 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31436_34078 = state_31348__$1;
(statearr_31436_34078[(2)] = inst_31261);

(statearr_31436_34078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (31))){
var inst_31289 = (state_31348[(10)]);
var inst_31294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31289);
var state_31348__$1 = state_31348;
var statearr_31439_34080 = state_31348__$1;
(statearr_31439_34080[(2)] = inst_31294);

(statearr_31439_34080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (32))){
var inst_31281 = (state_31348[(9)]);
var inst_31280 = (state_31348[(19)]);
var inst_31282 = (state_31348[(20)]);
var inst_31283 = (state_31348[(11)]);
var inst_31296 = (state_31348[(2)]);
var inst_31297 = (inst_31283 + (1));
var tmp31433 = inst_31281;
var tmp31434 = inst_31280;
var tmp31435 = inst_31282;
var inst_31280__$1 = tmp31434;
var inst_31281__$1 = tmp31433;
var inst_31282__$1 = tmp31435;
var inst_31283__$1 = inst_31297;
var state_31348__$1 = (function (){var statearr_31446 = state_31348;
(statearr_31446[(9)] = inst_31281__$1);

(statearr_31446[(21)] = inst_31296);

(statearr_31446[(19)] = inst_31280__$1);

(statearr_31446[(20)] = inst_31282__$1);

(statearr_31446[(11)] = inst_31283__$1);

return statearr_31446;
})();
var statearr_31450_34086 = state_31348__$1;
(statearr_31450_34086[(2)] = null);

(statearr_31450_34086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (40))){
var inst_31314 = (state_31348[(22)]);
var inst_31318 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31314);
var state_31348__$1 = state_31348;
var statearr_31451_34087 = state_31348__$1;
(statearr_31451_34087[(2)] = inst_31318);

(statearr_31451_34087[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (33))){
var inst_31300 = (state_31348[(23)]);
var inst_31304 = cljs.core.chunked_seq_QMARK_(inst_31300);
var state_31348__$1 = state_31348;
if(inst_31304){
var statearr_31458_34091 = state_31348__$1;
(statearr_31458_34091[(1)] = (36));

} else {
var statearr_31467_34092 = state_31348__$1;
(statearr_31467_34092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (13))){
var inst_31217 = (state_31348[(24)]);
var inst_31222 = cljs.core.async.close_BANG_(inst_31217);
var state_31348__$1 = state_31348;
var statearr_31473_34094 = state_31348__$1;
(statearr_31473_34094[(2)] = inst_31222);

(statearr_31473_34094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (22))){
var inst_31248 = (state_31348[(8)]);
var inst_31253 = cljs.core.async.close_BANG_(inst_31248);
var state_31348__$1 = state_31348;
var statearr_31475_34095 = state_31348__$1;
(statearr_31475_34095[(2)] = inst_31253);

(statearr_31475_34095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (36))){
var inst_31300 = (state_31348[(23)]);
var inst_31309 = cljs.core.chunk_first(inst_31300);
var inst_31310 = cljs.core.chunk_rest(inst_31300);
var inst_31311 = cljs.core.count(inst_31309);
var inst_31280 = inst_31310;
var inst_31281 = inst_31309;
var inst_31282 = inst_31311;
var inst_31283 = (0);
var state_31348__$1 = (function (){var statearr_31478 = state_31348;
(statearr_31478[(9)] = inst_31281);

(statearr_31478[(19)] = inst_31280);

(statearr_31478[(20)] = inst_31282);

(statearr_31478[(11)] = inst_31283);

return statearr_31478;
})();
var statearr_31479_34097 = state_31348__$1;
(statearr_31479_34097[(2)] = null);

(statearr_31479_34097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (41))){
var inst_31300 = (state_31348[(23)]);
var inst_31320 = (state_31348[(2)]);
var inst_31321 = cljs.core.next(inst_31300);
var inst_31280 = inst_31321;
var inst_31281 = null;
var inst_31282 = (0);
var inst_31283 = (0);
var state_31348__$1 = (function (){var statearr_31480 = state_31348;
(statearr_31480[(9)] = inst_31281);

(statearr_31480[(25)] = inst_31320);

(statearr_31480[(19)] = inst_31280);

(statearr_31480[(20)] = inst_31282);

(statearr_31480[(11)] = inst_31283);

return statearr_31480;
})();
var statearr_31481_34103 = state_31348__$1;
(statearr_31481_34103[(2)] = null);

(statearr_31481_34103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (43))){
var state_31348__$1 = state_31348;
var statearr_31482_34107 = state_31348__$1;
(statearr_31482_34107[(2)] = null);

(statearr_31482_34107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (29))){
var inst_31329 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31484_34108 = state_31348__$1;
(statearr_31484_34108[(2)] = inst_31329);

(statearr_31484_34108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (44))){
var inst_31338 = (state_31348[(2)]);
var state_31348__$1 = (function (){var statearr_31489 = state_31348;
(statearr_31489[(26)] = inst_31338);

return statearr_31489;
})();
var statearr_31493_34110 = state_31348__$1;
(statearr_31493_34110[(2)] = null);

(statearr_31493_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (6))){
var inst_31271 = (state_31348[(27)]);
var inst_31270 = cljs.core.deref(cs);
var inst_31271__$1 = cljs.core.keys(inst_31270);
var inst_31272 = cljs.core.count(inst_31271__$1);
var inst_31273 = cljs.core.reset_BANG_(dctr,inst_31272);
var inst_31278 = cljs.core.seq(inst_31271__$1);
var inst_31280 = inst_31278;
var inst_31281 = null;
var inst_31282 = (0);
var inst_31283 = (0);
var state_31348__$1 = (function (){var statearr_31500 = state_31348;
(statearr_31500[(9)] = inst_31281);

(statearr_31500[(27)] = inst_31271__$1);

(statearr_31500[(19)] = inst_31280);

(statearr_31500[(20)] = inst_31282);

(statearr_31500[(11)] = inst_31283);

(statearr_31500[(28)] = inst_31273);

return statearr_31500;
})();
var statearr_31505_34114 = state_31348__$1;
(statearr_31505_34114[(2)] = null);

(statearr_31505_34114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (28))){
var inst_31280 = (state_31348[(19)]);
var inst_31300 = (state_31348[(23)]);
var inst_31300__$1 = cljs.core.seq(inst_31280);
var state_31348__$1 = (function (){var statearr_31511 = state_31348;
(statearr_31511[(23)] = inst_31300__$1);

return statearr_31511;
})();
if(inst_31300__$1){
var statearr_31513_34116 = state_31348__$1;
(statearr_31513_34116[(1)] = (33));

} else {
var statearr_31515_34117 = state_31348__$1;
(statearr_31515_34117[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (25))){
var inst_31282 = (state_31348[(20)]);
var inst_31283 = (state_31348[(11)]);
var inst_31286 = (inst_31283 < inst_31282);
var inst_31287 = inst_31286;
var state_31348__$1 = state_31348;
if(cljs.core.truth_(inst_31287)){
var statearr_31519_34119 = state_31348__$1;
(statearr_31519_34119[(1)] = (27));

} else {
var statearr_31520_34120 = state_31348__$1;
(statearr_31520_34120[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (34))){
var state_31348__$1 = state_31348;
var statearr_31521_34121 = state_31348__$1;
(statearr_31521_34121[(2)] = null);

(statearr_31521_34121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (17))){
var state_31348__$1 = state_31348;
var statearr_31522_34122 = state_31348__$1;
(statearr_31522_34122[(2)] = null);

(statearr_31522_34122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (3))){
var inst_31343 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31348__$1,inst_31343);
} else {
if((state_val_31349 === (12))){
var inst_31266 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31532_34123 = state_31348__$1;
(statearr_31532_34123[(2)] = inst_31266);

(statearr_31532_34123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (2))){
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31348__$1,(4),ch);
} else {
if((state_val_31349 === (23))){
var state_31348__$1 = state_31348;
var statearr_31542_34124 = state_31348__$1;
(statearr_31542_34124[(2)] = null);

(statearr_31542_34124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (35))){
var inst_31327 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31543_34126 = state_31348__$1;
(statearr_31543_34126[(2)] = inst_31327);

(statearr_31543_34126[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (19))){
var inst_31233 = (state_31348[(7)]);
var inst_31239 = cljs.core.chunk_first(inst_31233);
var inst_31240 = cljs.core.chunk_rest(inst_31233);
var inst_31241 = cljs.core.count(inst_31239);
var inst_31205 = inst_31240;
var inst_31206 = inst_31239;
var inst_31207 = inst_31241;
var inst_31208 = (0);
var state_31348__$1 = (function (){var statearr_31550 = state_31348;
(statearr_31550[(13)] = inst_31207);

(statearr_31550[(14)] = inst_31208);

(statearr_31550[(15)] = inst_31206);

(statearr_31550[(17)] = inst_31205);

return statearr_31550;
})();
var statearr_31553_34129 = state_31348__$1;
(statearr_31553_34129[(2)] = null);

(statearr_31553_34129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (11))){
var inst_31233 = (state_31348[(7)]);
var inst_31205 = (state_31348[(17)]);
var inst_31233__$1 = cljs.core.seq(inst_31205);
var state_31348__$1 = (function (){var statearr_31557 = state_31348;
(statearr_31557[(7)] = inst_31233__$1);

return statearr_31557;
})();
if(inst_31233__$1){
var statearr_31558_34132 = state_31348__$1;
(statearr_31558_34132[(1)] = (16));

} else {
var statearr_31560_34133 = state_31348__$1;
(statearr_31560_34133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (9))){
var inst_31268 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31566_34135 = state_31348__$1;
(statearr_31566_34135[(2)] = inst_31268);

(statearr_31566_34135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (5))){
var inst_31202 = cljs.core.deref(cs);
var inst_31204 = cljs.core.seq(inst_31202);
var inst_31205 = inst_31204;
var inst_31206 = null;
var inst_31207 = (0);
var inst_31208 = (0);
var state_31348__$1 = (function (){var statearr_31567 = state_31348;
(statearr_31567[(13)] = inst_31207);

(statearr_31567[(14)] = inst_31208);

(statearr_31567[(15)] = inst_31206);

(statearr_31567[(17)] = inst_31205);

return statearr_31567;
})();
var statearr_31570_34136 = state_31348__$1;
(statearr_31570_34136[(2)] = null);

(statearr_31570_34136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (14))){
var state_31348__$1 = state_31348;
var statearr_31574_34138 = state_31348__$1;
(statearr_31574_34138[(2)] = null);

(statearr_31574_34138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (45))){
var inst_31335 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31576_34140 = state_31348__$1;
(statearr_31576_34140[(2)] = inst_31335);

(statearr_31576_34140[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (26))){
var inst_31271 = (state_31348[(27)]);
var inst_31331 = (state_31348[(2)]);
var inst_31332 = cljs.core.seq(inst_31271);
var state_31348__$1 = (function (){var statearr_31579 = state_31348;
(statearr_31579[(29)] = inst_31331);

return statearr_31579;
})();
if(inst_31332){
var statearr_31586_34144 = state_31348__$1;
(statearr_31586_34144[(1)] = (42));

} else {
var statearr_31588_34145 = state_31348__$1;
(statearr_31588_34145[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (16))){
var inst_31233 = (state_31348[(7)]);
var inst_31235 = cljs.core.chunked_seq_QMARK_(inst_31233);
var state_31348__$1 = state_31348;
if(inst_31235){
var statearr_31593_34146 = state_31348__$1;
(statearr_31593_34146[(1)] = (19));

} else {
var statearr_31601_34147 = state_31348__$1;
(statearr_31601_34147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (38))){
var inst_31324 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31604_34148 = state_31348__$1;
(statearr_31604_34148[(2)] = inst_31324);

(statearr_31604_34148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (30))){
var state_31348__$1 = state_31348;
var statearr_31607_34150 = state_31348__$1;
(statearr_31607_34150[(2)] = null);

(statearr_31607_34150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (10))){
var inst_31208 = (state_31348[(14)]);
var inst_31206 = (state_31348[(15)]);
var inst_31216 = cljs.core._nth(inst_31206,inst_31208);
var inst_31217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31216,(0),null);
var inst_31218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31216,(1),null);
var state_31348__$1 = (function (){var statearr_31609 = state_31348;
(statearr_31609[(24)] = inst_31217);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31218)){
var statearr_31610_34154 = state_31348__$1;
(statearr_31610_34154[(1)] = (13));

} else {
var statearr_31611_34155 = state_31348__$1;
(statearr_31611_34155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (18))){
var inst_31264 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31612_34156 = state_31348__$1;
(statearr_31612_34156[(2)] = inst_31264);

(statearr_31612_34156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (42))){
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31348__$1,(45),dchan);
} else {
if((state_val_31349 === (37))){
var inst_31300 = (state_31348[(23)]);
var inst_31191 = (state_31348[(12)]);
var inst_31314 = (state_31348[(22)]);
var inst_31314__$1 = cljs.core.first(inst_31300);
var inst_31315 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31314__$1,inst_31191,done);
var state_31348__$1 = (function (){var statearr_31619 = state_31348;
(statearr_31619[(22)] = inst_31314__$1);

return statearr_31619;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31621_34163 = state_31348__$1;
(statearr_31621_34163[(1)] = (39));

} else {
var statearr_31623_34164 = state_31348__$1;
(statearr_31623_34164[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (8))){
var inst_31207 = (state_31348[(13)]);
var inst_31208 = (state_31348[(14)]);
var inst_31210 = (inst_31208 < inst_31207);
var inst_31211 = inst_31210;
var state_31348__$1 = state_31348;
if(cljs.core.truth_(inst_31211)){
var statearr_31625_34169 = state_31348__$1;
(statearr_31625_34169[(1)] = (10));

} else {
var statearr_31626_34170 = state_31348__$1;
(statearr_31626_34170[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29175__auto__ = null;
var cljs$core$async$mult_$_state_machine__29175__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$mult_$_state_machine__29175__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$mult_$_state_machine__29175__auto____1 = (function (state_31348){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_31348);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e31635){var ex__29178__auto__ = e31635;
var statearr_31636_34178 = state_31348;
(statearr_31636_34178[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_31348[(4)]))){
var statearr_31637_34179 = state_31348;
(statearr_31637_34179[(1)] = cljs.core.first((state_31348[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34180 = state_31348;
state_31348 = G__34180;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29175__auto__ = function(state_31348){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29175__auto____1.call(this,state_31348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29175__auto____0;
cljs$core$async$mult_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29175__auto____1;
return cljs$core$async$mult_$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_31646 = f__29743__auto__();
(statearr_31646[(6)] = c__29742__auto___34029);

return statearr_31646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31657 = arguments.length;
switch (G__31657) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34207 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34207(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34220 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34220(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34221 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34221(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34227 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34227(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34228 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34228(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34235 = arguments.length;
var i__4865__auto___34236 = (0);
while(true){
if((i__4865__auto___34236 < len__4864__auto___34235)){
args__4870__auto__.push((arguments[i__4865__auto___34236]));

var G__34237 = (i__4865__auto___34236 + (1));
i__4865__auto___34236 = G__34237;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31747){
var map__31749 = p__31747;
var map__31749__$1 = cljs.core.__destructure_map(map__31749);
var opts = map__31749__$1;
var statearr_31750_34238 = state;
(statearr_31750_34238[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31751_34239 = state;
(statearr_31751_34239[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31757_34240 = state;
(statearr_31757_34240[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31727){
var G__31729 = cljs.core.first(seq31727);
var seq31727__$1 = cljs.core.next(seq31727);
var G__31730 = cljs.core.first(seq31727__$1);
var seq31727__$2 = cljs.core.next(seq31727__$1);
var G__31731 = cljs.core.first(seq31727__$2);
var seq31727__$3 = cljs.core.next(seq31727__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31729,G__31730,G__31731,seq31727__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31778 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31779){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31779 = meta31779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31780,meta31779__$1){
var self__ = this;
var _31780__$1 = this;
return (new cljs.core.async.t_cljs$core$async31778(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31779__$1));
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31780){
var self__ = this;
var _31780__$1 = this;
return self__.meta31779;
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31779","meta31779",-2142983788,null)], null);
}));

(cljs.core.async.t_cljs$core$async31778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31778");

(cljs.core.async.t_cljs$core$async31778.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31778.
 */
cljs.core.async.__GT_t_cljs$core$async31778 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31778(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31779){
return (new cljs.core.async.t_cljs$core$async31778(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31779));
});

}

return (new cljs.core.async.t_cljs$core$async31778(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29742__auto___34321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (7))){
var inst_31843 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31843)){
var statearr_31894_34323 = state_31888__$1;
(statearr_31894_34323[(1)] = (8));

} else {
var statearr_31895_34324 = state_31888__$1;
(statearr_31895_34324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (20))){
var inst_31836 = (state_31888[(7)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31888__$1,(23),out,inst_31836);
} else {
if((state_val_31889 === (1))){
var inst_31816 = calc_state();
var inst_31817 = cljs.core.__destructure_map(inst_31816);
var inst_31818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31817,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31817,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31817,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31823 = inst_31816;
var state_31888__$1 = (function (){var statearr_31900 = state_31888;
(statearr_31900[(8)] = inst_31823);

(statearr_31900[(9)] = inst_31820);

(statearr_31900[(10)] = inst_31818);

(statearr_31900[(11)] = inst_31821);

return statearr_31900;
})();
var statearr_31902_34328 = state_31888__$1;
(statearr_31902_34328[(2)] = null);

(statearr_31902_34328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (24))){
var inst_31827 = (state_31888[(12)]);
var inst_31823 = inst_31827;
var state_31888__$1 = (function (){var statearr_31907 = state_31888;
(statearr_31907[(8)] = inst_31823);

return statearr_31907;
})();
var statearr_31910_34329 = state_31888__$1;
(statearr_31910_34329[(2)] = null);

(statearr_31910_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (4))){
var inst_31838 = (state_31888[(13)]);
var inst_31836 = (state_31888[(7)]);
var inst_31835 = (state_31888[(2)]);
var inst_31836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31835,(0),null);
var inst_31837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31835,(1),null);
var inst_31838__$1 = (inst_31836__$1 == null);
var state_31888__$1 = (function (){var statearr_31914 = state_31888;
(statearr_31914[(13)] = inst_31838__$1);

(statearr_31914[(7)] = inst_31836__$1);

(statearr_31914[(14)] = inst_31837);

return statearr_31914;
})();
if(cljs.core.truth_(inst_31838__$1)){
var statearr_31915_34330 = state_31888__$1;
(statearr_31915_34330[(1)] = (5));

} else {
var statearr_31917_34331 = state_31888__$1;
(statearr_31917_34331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (15))){
var inst_31828 = (state_31888[(15)]);
var inst_31859 = (state_31888[(16)]);
var inst_31859__$1 = cljs.core.empty_QMARK_(inst_31828);
var state_31888__$1 = (function (){var statearr_31919 = state_31888;
(statearr_31919[(16)] = inst_31859__$1);

return statearr_31919;
})();
if(inst_31859__$1){
var statearr_31920_34332 = state_31888__$1;
(statearr_31920_34332[(1)] = (17));

} else {
var statearr_31922_34333 = state_31888__$1;
(statearr_31922_34333[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (21))){
var inst_31827 = (state_31888[(12)]);
var inst_31823 = inst_31827;
var state_31888__$1 = (function (){var statearr_31923 = state_31888;
(statearr_31923[(8)] = inst_31823);

return statearr_31923;
})();
var statearr_31924_34335 = state_31888__$1;
(statearr_31924_34335[(2)] = null);

(statearr_31924_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (13))){
var inst_31852 = (state_31888[(2)]);
var inst_31853 = calc_state();
var inst_31823 = inst_31853;
var state_31888__$1 = (function (){var statearr_31926 = state_31888;
(statearr_31926[(8)] = inst_31823);

(statearr_31926[(17)] = inst_31852);

return statearr_31926;
})();
var statearr_31927_34336 = state_31888__$1;
(statearr_31927_34336[(2)] = null);

(statearr_31927_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (22))){
var inst_31882 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31928_34337 = state_31888__$1;
(statearr_31928_34337[(2)] = inst_31882);

(statearr_31928_34337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (6))){
var inst_31837 = (state_31888[(14)]);
var inst_31841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31837,change);
var state_31888__$1 = state_31888;
var statearr_31930_34338 = state_31888__$1;
(statearr_31930_34338[(2)] = inst_31841);

(statearr_31930_34338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (25))){
var state_31888__$1 = state_31888;
var statearr_31931_34339 = state_31888__$1;
(statearr_31931_34339[(2)] = null);

(statearr_31931_34339[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (17))){
var inst_31829 = (state_31888[(18)]);
var inst_31837 = (state_31888[(14)]);
var inst_31861 = (inst_31829.cljs$core$IFn$_invoke$arity$1 ? inst_31829.cljs$core$IFn$_invoke$arity$1(inst_31837) : inst_31829.call(null,inst_31837));
var inst_31862 = cljs.core.not(inst_31861);
var state_31888__$1 = state_31888;
var statearr_31932_34342 = state_31888__$1;
(statearr_31932_34342[(2)] = inst_31862);

(statearr_31932_34342[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (3))){
var inst_31886 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31888__$1,inst_31886);
} else {
if((state_val_31889 === (12))){
var state_31888__$1 = state_31888;
var statearr_31942_34352 = state_31888__$1;
(statearr_31942_34352[(2)] = null);

(statearr_31942_34352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (2))){
var inst_31823 = (state_31888[(8)]);
var inst_31827 = (state_31888[(12)]);
var inst_31827__$1 = cljs.core.__destructure_map(inst_31823);
var inst_31828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31827__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31827__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31827__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31888__$1 = (function (){var statearr_31947 = state_31888;
(statearr_31947[(15)] = inst_31828);

(statearr_31947[(18)] = inst_31829);

(statearr_31947[(12)] = inst_31827__$1);

return statearr_31947;
})();
return cljs.core.async.ioc_alts_BANG_(state_31888__$1,(4),inst_31830);
} else {
if((state_val_31889 === (23))){
var inst_31872 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31872)){
var statearr_31948_34353 = state_31888__$1;
(statearr_31948_34353[(1)] = (24));

} else {
var statearr_31949_34354 = state_31888__$1;
(statearr_31949_34354[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (19))){
var inst_31865 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31951_34355 = state_31888__$1;
(statearr_31951_34355[(2)] = inst_31865);

(statearr_31951_34355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (11))){
var inst_31837 = (state_31888[(14)]);
var inst_31849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31837);
var state_31888__$1 = state_31888;
var statearr_31956_34356 = state_31888__$1;
(statearr_31956_34356[(2)] = inst_31849);

(statearr_31956_34356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (9))){
var inst_31828 = (state_31888[(15)]);
var inst_31856 = (state_31888[(19)]);
var inst_31837 = (state_31888[(14)]);
var inst_31856__$1 = (inst_31828.cljs$core$IFn$_invoke$arity$1 ? inst_31828.cljs$core$IFn$_invoke$arity$1(inst_31837) : inst_31828.call(null,inst_31837));
var state_31888__$1 = (function (){var statearr_31957 = state_31888;
(statearr_31957[(19)] = inst_31856__$1);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31856__$1)){
var statearr_31958_34357 = state_31888__$1;
(statearr_31958_34357[(1)] = (14));

} else {
var statearr_31959_34358 = state_31888__$1;
(statearr_31959_34358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (5))){
var inst_31838 = (state_31888[(13)]);
var state_31888__$1 = state_31888;
var statearr_31960_34359 = state_31888__$1;
(statearr_31960_34359[(2)] = inst_31838);

(statearr_31960_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (14))){
var inst_31856 = (state_31888[(19)]);
var state_31888__$1 = state_31888;
var statearr_31962_34360 = state_31888__$1;
(statearr_31962_34360[(2)] = inst_31856);

(statearr_31962_34360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (26))){
var inst_31877 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31969_34361 = state_31888__$1;
(statearr_31969_34361[(2)] = inst_31877);

(statearr_31969_34361[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (16))){
var inst_31868 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31868)){
var statearr_31970_34362 = state_31888__$1;
(statearr_31970_34362[(1)] = (20));

} else {
var statearr_31971_34363 = state_31888__$1;
(statearr_31971_34363[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (10))){
var inst_31884 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31972_34364 = state_31888__$1;
(statearr_31972_34364[(2)] = inst_31884);

(statearr_31972_34364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (18))){
var inst_31859 = (state_31888[(16)]);
var state_31888__$1 = state_31888;
var statearr_31973_34365 = state_31888__$1;
(statearr_31973_34365[(2)] = inst_31859);

(statearr_31973_34365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (8))){
var inst_31836 = (state_31888[(7)]);
var inst_31847 = (inst_31836 == null);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31847)){
var statearr_31978_34366 = state_31888__$1;
(statearr_31978_34366[(1)] = (11));

} else {
var statearr_31979_34368 = state_31888__$1;
(statearr_31979_34368[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29175__auto__ = null;
var cljs$core$async$mix_$_state_machine__29175__auto____0 = (function (){
var statearr_31980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31980[(0)] = cljs$core$async$mix_$_state_machine__29175__auto__);

(statearr_31980[(1)] = (1));

return statearr_31980;
});
var cljs$core$async$mix_$_state_machine__29175__auto____1 = (function (state_31888){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_31888);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e31985){var ex__29178__auto__ = e31985;
var statearr_31986_34369 = state_31888;
(statearr_31986_34369[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_31888[(4)]))){
var statearr_31987_34370 = state_31888;
(statearr_31987_34370[(1)] = cljs.core.first((state_31888[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_31888;
state_31888 = G__34371;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29175__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29175__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29175__auto____0;
cljs$core$async$mix_$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29175__auto____1;
return cljs$core$async$mix_$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_31990 = f__29743__auto__();
(statearr_31990[(6)] = c__29742__auto___34321);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34374 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34374(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34375 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34375(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34378 = (function() {
var G__34379 = null;
var G__34379__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34379__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34379 = function(p,v){
switch(arguments.length){
case 1:
return G__34379__1.call(this,p);
case 2:
return G__34379__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34379.cljs$core$IFn$_invoke$arity$1 = G__34379__1;
G__34379.cljs$core$IFn$_invoke$arity$2 = G__34379__2;
return G__34379;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32064 = arguments.length;
switch (G__32064) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34378(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34378(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__32092 = arguments.length;
switch (G__32092) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32090_SHARP_){
if(cljs.core.truth_((p1__32090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32090_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32090_SHARP_.call(null,topic)))){
return p1__32090_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32090_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32108 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32109){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32109 = meta32109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32110,meta32109__$1){
var self__ = this;
var _32110__$1 = this;
return (new cljs.core.async.t_cljs$core$async32108(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32109__$1));
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32110){
var self__ = this;
var _32110__$1 = this;
return self__.meta32109;
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32109","meta32109",-2050790094,null)], null);
}));

(cljs.core.async.t_cljs$core$async32108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32108");

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32108.
 */
cljs.core.async.__GT_t_cljs$core$async32108 = (function cljs$core$async$__GT_t_cljs$core$async32108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32109){
return (new cljs.core.async.t_cljs$core$async32108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32109));
});

}

return (new cljs.core.async.t_cljs$core$async32108(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29742__auto___34396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_32225){
var state_val_32226 = (state_32225[(1)]);
if((state_val_32226 === (7))){
var inst_32220 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32230_34397 = state_32225__$1;
(statearr_32230_34397[(2)] = inst_32220);

(statearr_32230_34397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (20))){
var state_32225__$1 = state_32225;
var statearr_32231_34398 = state_32225__$1;
(statearr_32231_34398[(2)] = null);

(statearr_32231_34398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (1))){
var state_32225__$1 = state_32225;
var statearr_32235_34399 = state_32225__$1;
(statearr_32235_34399[(2)] = null);

(statearr_32235_34399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (24))){
var inst_32203 = (state_32225[(7)]);
var inst_32212 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32203);
var state_32225__$1 = state_32225;
var statearr_32237_34400 = state_32225__$1;
(statearr_32237_34400[(2)] = inst_32212);

(statearr_32237_34400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (4))){
var inst_32144 = (state_32225[(8)]);
var inst_32144__$1 = (state_32225[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var state_32225__$1 = (function (){var statearr_32241 = state_32225;
(statearr_32241[(8)] = inst_32144__$1);

return statearr_32241;
})();
if(cljs.core.truth_(inst_32145)){
var statearr_32244_34402 = state_32225__$1;
(statearr_32244_34402[(1)] = (5));

} else {
var statearr_32249_34403 = state_32225__$1;
(statearr_32249_34403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (15))){
var inst_32197 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32259_34406 = state_32225__$1;
(statearr_32259_34406[(2)] = inst_32197);

(statearr_32259_34406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (21))){
var inst_32217 = (state_32225[(2)]);
var state_32225__$1 = (function (){var statearr_32261 = state_32225;
(statearr_32261[(9)] = inst_32217);

return statearr_32261;
})();
var statearr_32262_34407 = state_32225__$1;
(statearr_32262_34407[(2)] = null);

(statearr_32262_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (13))){
var inst_32178 = (state_32225[(10)]);
var inst_32180 = cljs.core.chunked_seq_QMARK_(inst_32178);
var state_32225__$1 = state_32225;
if(inst_32180){
var statearr_32266_34408 = state_32225__$1;
(statearr_32266_34408[(1)] = (16));

} else {
var statearr_32267_34409 = state_32225__$1;
(statearr_32267_34409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (22))){
var inst_32209 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
if(cljs.core.truth_(inst_32209)){
var statearr_32268_34414 = state_32225__$1;
(statearr_32268_34414[(1)] = (23));

} else {
var statearr_32270_34415 = state_32225__$1;
(statearr_32270_34415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (6))){
var inst_32144 = (state_32225[(8)]);
var inst_32205 = (state_32225[(11)]);
var inst_32203 = (state_32225[(7)]);
var inst_32203__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32144) : topic_fn.call(null,inst_32144));
var inst_32204 = cljs.core.deref(mults);
var inst_32205__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32204,inst_32203__$1);
var state_32225__$1 = (function (){var statearr_32274 = state_32225;
(statearr_32274[(11)] = inst_32205__$1);

(statearr_32274[(7)] = inst_32203__$1);

return statearr_32274;
})();
if(cljs.core.truth_(inst_32205__$1)){
var statearr_32275_34416 = state_32225__$1;
(statearr_32275_34416[(1)] = (19));

} else {
var statearr_32276_34417 = state_32225__$1;
(statearr_32276_34417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (25))){
var inst_32214 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32277_34418 = state_32225__$1;
(statearr_32277_34418[(2)] = inst_32214);

(statearr_32277_34418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (17))){
var inst_32178 = (state_32225[(10)]);
var inst_32188 = cljs.core.first(inst_32178);
var inst_32189 = cljs.core.async.muxch_STAR_(inst_32188);
var inst_32190 = cljs.core.async.close_BANG_(inst_32189);
var inst_32191 = cljs.core.next(inst_32178);
var inst_32157 = inst_32191;
var inst_32158 = null;
var inst_32159 = (0);
var inst_32160 = (0);
var state_32225__$1 = (function (){var statearr_32278 = state_32225;
(statearr_32278[(12)] = inst_32160);

(statearr_32278[(13)] = inst_32157);

(statearr_32278[(14)] = inst_32159);

(statearr_32278[(15)] = inst_32158);

(statearr_32278[(16)] = inst_32190);

return statearr_32278;
})();
var statearr_32279_34419 = state_32225__$1;
(statearr_32279_34419[(2)] = null);

(statearr_32279_34419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (3))){
var inst_32222 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32225__$1,inst_32222);
} else {
if((state_val_32226 === (12))){
var inst_32199 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32283_34420 = state_32225__$1;
(statearr_32283_34420[(2)] = inst_32199);

(statearr_32283_34420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (2))){
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32225__$1,(4),ch);
} else {
if((state_val_32226 === (23))){
var state_32225__$1 = state_32225;
var statearr_32285_34421 = state_32225__$1;
(statearr_32285_34421[(2)] = null);

(statearr_32285_34421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (19))){
var inst_32144 = (state_32225[(8)]);
var inst_32205 = (state_32225[(11)]);
var inst_32207 = cljs.core.async.muxch_STAR_(inst_32205);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32225__$1,(22),inst_32207,inst_32144);
} else {
if((state_val_32226 === (11))){
var inst_32157 = (state_32225[(13)]);
var inst_32178 = (state_32225[(10)]);
var inst_32178__$1 = cljs.core.seq(inst_32157);
var state_32225__$1 = (function (){var statearr_32287 = state_32225;
(statearr_32287[(10)] = inst_32178__$1);

return statearr_32287;
})();
if(inst_32178__$1){
var statearr_32288_34422 = state_32225__$1;
(statearr_32288_34422[(1)] = (13));

} else {
var statearr_32289_34423 = state_32225__$1;
(statearr_32289_34423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (9))){
var inst_32201 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32290_34424 = state_32225__$1;
(statearr_32290_34424[(2)] = inst_32201);

(statearr_32290_34424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (5))){
var inst_32153 = cljs.core.deref(mults);
var inst_32154 = cljs.core.vals(inst_32153);
var inst_32155 = cljs.core.seq(inst_32154);
var inst_32157 = inst_32155;
var inst_32158 = null;
var inst_32159 = (0);
var inst_32160 = (0);
var state_32225__$1 = (function (){var statearr_32299 = state_32225;
(statearr_32299[(12)] = inst_32160);

(statearr_32299[(13)] = inst_32157);

(statearr_32299[(14)] = inst_32159);

(statearr_32299[(15)] = inst_32158);

return statearr_32299;
})();
var statearr_32300_34425 = state_32225__$1;
(statearr_32300_34425[(2)] = null);

(statearr_32300_34425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (14))){
var state_32225__$1 = state_32225;
var statearr_32305_34426 = state_32225__$1;
(statearr_32305_34426[(2)] = null);

(statearr_32305_34426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (16))){
var inst_32178 = (state_32225[(10)]);
var inst_32182 = cljs.core.chunk_first(inst_32178);
var inst_32183 = cljs.core.chunk_rest(inst_32178);
var inst_32184 = cljs.core.count(inst_32182);
var inst_32157 = inst_32183;
var inst_32158 = inst_32182;
var inst_32159 = inst_32184;
var inst_32160 = (0);
var state_32225__$1 = (function (){var statearr_32306 = state_32225;
(statearr_32306[(12)] = inst_32160);

(statearr_32306[(13)] = inst_32157);

(statearr_32306[(14)] = inst_32159);

(statearr_32306[(15)] = inst_32158);

return statearr_32306;
})();
var statearr_32310_34427 = state_32225__$1;
(statearr_32310_34427[(2)] = null);

(statearr_32310_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (10))){
var inst_32160 = (state_32225[(12)]);
var inst_32157 = (state_32225[(13)]);
var inst_32159 = (state_32225[(14)]);
var inst_32158 = (state_32225[(15)]);
var inst_32169 = cljs.core._nth(inst_32158,inst_32160);
var inst_32170 = cljs.core.async.muxch_STAR_(inst_32169);
var inst_32171 = cljs.core.async.close_BANG_(inst_32170);
var inst_32173 = (inst_32160 + (1));
var tmp32301 = inst_32157;
var tmp32302 = inst_32159;
var tmp32303 = inst_32158;
var inst_32157__$1 = tmp32301;
var inst_32158__$1 = tmp32303;
var inst_32159__$1 = tmp32302;
var inst_32160__$1 = inst_32173;
var state_32225__$1 = (function (){var statearr_32311 = state_32225;
(statearr_32311[(12)] = inst_32160__$1);

(statearr_32311[(13)] = inst_32157__$1);

(statearr_32311[(14)] = inst_32159__$1);

(statearr_32311[(15)] = inst_32158__$1);

(statearr_32311[(17)] = inst_32171);

return statearr_32311;
})();
var statearr_32312_34431 = state_32225__$1;
(statearr_32312_34431[(2)] = null);

(statearr_32312_34431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (18))){
var inst_32194 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32313_34433 = state_32225__$1;
(statearr_32313_34433[(2)] = inst_32194);

(statearr_32313_34433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (8))){
var inst_32160 = (state_32225[(12)]);
var inst_32159 = (state_32225[(14)]);
var inst_32166 = (inst_32160 < inst_32159);
var inst_32167 = inst_32166;
var state_32225__$1 = state_32225;
if(cljs.core.truth_(inst_32167)){
var statearr_32318_34435 = state_32225__$1;
(statearr_32318_34435[(1)] = (10));

} else {
var statearr_32319_34436 = state_32225__$1;
(statearr_32319_34436[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_32322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32322[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_32322[(1)] = (1));

return statearr_32322;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_32225){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_32225);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e32324){var ex__29178__auto__ = e32324;
var statearr_32325_34441 = state_32225;
(statearr_32325_34441[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_32225[(4)]))){
var statearr_32326_34442 = state_32225;
(statearr_32326_34442[(1)] = cljs.core.first((state_32225[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34444 = state_32225;
state_32225 = G__34444;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_32225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_32225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_32329 = f__29743__auto__();
(statearr_32329[(6)] = c__29742__auto___34396);

return statearr_32329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32332 = arguments.length;
switch (G__32332) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32340 = arguments.length;
switch (G__32340) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__32342 = arguments.length;
switch (G__32342) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29742__auto___34456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_32396){
var state_val_32397 = (state_32396[(1)]);
if((state_val_32397 === (7))){
var state_32396__$1 = state_32396;
var statearr_32398_34457 = state_32396__$1;
(statearr_32398_34457[(2)] = null);

(statearr_32398_34457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (1))){
var state_32396__$1 = state_32396;
var statearr_32399_34460 = state_32396__$1;
(statearr_32399_34460[(2)] = null);

(statearr_32399_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (4))){
var inst_32349 = (state_32396[(7)]);
var inst_32348 = (state_32396[(8)]);
var inst_32351 = (inst_32349 < inst_32348);
var state_32396__$1 = state_32396;
if(cljs.core.truth_(inst_32351)){
var statearr_32400_34462 = state_32396__$1;
(statearr_32400_34462[(1)] = (6));

} else {
var statearr_32401_34464 = state_32396__$1;
(statearr_32401_34464[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (15))){
var inst_32380 = (state_32396[(9)]);
var inst_32387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32380);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32396__$1,(17),out,inst_32387);
} else {
if((state_val_32397 === (13))){
var inst_32380 = (state_32396[(9)]);
var inst_32380__$1 = (state_32396[(2)]);
var inst_32381 = cljs.core.some(cljs.core.nil_QMARK_,inst_32380__$1);
var state_32396__$1 = (function (){var statearr_32414 = state_32396;
(statearr_32414[(9)] = inst_32380__$1);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32415_34465 = state_32396__$1;
(statearr_32415_34465[(1)] = (14));

} else {
var statearr_32416_34466 = state_32396__$1;
(statearr_32416_34466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (6))){
var state_32396__$1 = state_32396;
var statearr_32417_34467 = state_32396__$1;
(statearr_32417_34467[(2)] = null);

(statearr_32417_34467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (17))){
var inst_32389 = (state_32396[(2)]);
var state_32396__$1 = (function (){var statearr_32428 = state_32396;
(statearr_32428[(10)] = inst_32389);

return statearr_32428;
})();
var statearr_32434_34468 = state_32396__$1;
(statearr_32434_34468[(2)] = null);

(statearr_32434_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (3))){
var inst_32394 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32396__$1,inst_32394);
} else {
if((state_val_32397 === (12))){
var _ = (function (){var statearr_32441 = state_32396;
(statearr_32441[(4)] = cljs.core.rest((state_32396[(4)])));

return statearr_32441;
})();
var state_32396__$1 = state_32396;
var ex32427 = (state_32396__$1[(2)]);
var statearr_32442_34469 = state_32396__$1;
(statearr_32442_34469[(5)] = ex32427);


if((ex32427 instanceof Object)){
var statearr_32443_34470 = state_32396__$1;
(statearr_32443_34470[(1)] = (11));

(statearr_32443_34470[(5)] = null);

} else {
throw ex32427;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (2))){
var inst_32347 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32348 = cnt;
var inst_32349 = (0);
var state_32396__$1 = (function (){var statearr_32460 = state_32396;
(statearr_32460[(11)] = inst_32347);

(statearr_32460[(7)] = inst_32349);

(statearr_32460[(8)] = inst_32348);

return statearr_32460;
})();
var statearr_32461_34471 = state_32396__$1;
(statearr_32461_34471[(2)] = null);

(statearr_32461_34471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (11))){
var inst_32359 = (state_32396[(2)]);
var inst_32360 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32396__$1 = (function (){var statearr_32467 = state_32396;
(statearr_32467[(12)] = inst_32359);

return statearr_32467;
})();
var statearr_32474_34472 = state_32396__$1;
(statearr_32474_34472[(2)] = inst_32360);

(statearr_32474_34472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (9))){
var inst_32349 = (state_32396[(7)]);
var _ = (function (){var statearr_32476 = state_32396;
(statearr_32476[(4)] = cljs.core.cons((12),(state_32396[(4)])));

return statearr_32476;
})();
var inst_32366 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32349) : chs__$1.call(null,inst_32349));
var inst_32367 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32349) : done.call(null,inst_32349));
var inst_32368 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32366,inst_32367);
var ___$1 = (function (){var statearr_32477 = state_32396;
(statearr_32477[(4)] = cljs.core.rest((state_32396[(4)])));

return statearr_32477;
})();
var state_32396__$1 = state_32396;
var statearr_32479_34473 = state_32396__$1;
(statearr_32479_34473[(2)] = inst_32368);

(statearr_32479_34473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (5))){
var inst_32378 = (state_32396[(2)]);
var state_32396__$1 = (function (){var statearr_32480 = state_32396;
(statearr_32480[(13)] = inst_32378);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32396__$1,(13),dchan);
} else {
if((state_val_32397 === (14))){
var inst_32383 = cljs.core.async.close_BANG_(out);
var state_32396__$1 = state_32396;
var statearr_32483_34474 = state_32396__$1;
(statearr_32483_34474[(2)] = inst_32383);

(statearr_32483_34474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (16))){
var inst_32392 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32484_34475 = state_32396__$1;
(statearr_32484_34475[(2)] = inst_32392);

(statearr_32484_34475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (10))){
var inst_32349 = (state_32396[(7)]);
var inst_32371 = (state_32396[(2)]);
var inst_32372 = (inst_32349 + (1));
var inst_32349__$1 = inst_32372;
var state_32396__$1 = (function (){var statearr_32487 = state_32396;
(statearr_32487[(7)] = inst_32349__$1);

(statearr_32487[(14)] = inst_32371);

return statearr_32487;
})();
var statearr_32488_34476 = state_32396__$1;
(statearr_32488_34476[(2)] = null);

(statearr_32488_34476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (8))){
var inst_32376 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32492_34477 = state_32396__$1;
(statearr_32492_34477[(2)] = inst_32376);

(statearr_32492_34477[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_32494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32494[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_32494[(1)] = (1));

return statearr_32494;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_32396){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_32396);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e32498){var ex__29178__auto__ = e32498;
var statearr_32499_34479 = state_32396;
(statearr_32499_34479[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_32396[(4)]))){
var statearr_32500_34480 = state_32396;
(statearr_32500_34480[(1)] = cljs.core.first((state_32396[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34481 = state_32396;
state_32396 = G__34481;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_32396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_32396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_32501 = f__29743__auto__();
(statearr_32501[(6)] = c__29742__auto___34456);

return statearr_32501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32517 = arguments.length;
switch (G__32517) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_32565){
var state_val_32567 = (state_32565[(1)]);
if((state_val_32567 === (7))){
var inst_32543 = (state_32565[(7)]);
var inst_32541 = (state_32565[(8)]);
var inst_32541__$1 = (state_32565[(2)]);
var inst_32543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32541__$1,(0),null);
var inst_32544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32541__$1,(1),null);
var inst_32545 = (inst_32543__$1 == null);
var state_32565__$1 = (function (){var statearr_32575 = state_32565;
(statearr_32575[(7)] = inst_32543__$1);

(statearr_32575[(9)] = inst_32544);

(statearr_32575[(8)] = inst_32541__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32545)){
var statearr_32579_34487 = state_32565__$1;
(statearr_32579_34487[(1)] = (8));

} else {
var statearr_32580_34488 = state_32565__$1;
(statearr_32580_34488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var inst_32527 = cljs.core.vec(chs);
var inst_32528 = inst_32527;
var state_32565__$1 = (function (){var statearr_32582 = state_32565;
(statearr_32582[(10)] = inst_32528);

return statearr_32582;
})();
var statearr_32584_34489 = state_32565__$1;
(statearr_32584_34489[(2)] = null);

(statearr_32584_34489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32528 = (state_32565[(10)]);
var state_32565__$1 = state_32565;
return cljs.core.async.ioc_alts_BANG_(state_32565__$1,(7),inst_32528);
} else {
if((state_val_32567 === (6))){
var inst_32559 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32590_34490 = state_32565__$1;
(statearr_32590_34490[(2)] = inst_32559);

(statearr_32590_34490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (3))){
var inst_32562 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32565__$1,inst_32562);
} else {
if((state_val_32567 === (2))){
var inst_32528 = (state_32565[(10)]);
var inst_32532 = cljs.core.count(inst_32528);
var inst_32533 = (inst_32532 > (0));
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32533)){
var statearr_32602_34494 = state_32565__$1;
(statearr_32602_34494[(1)] = (4));

} else {
var statearr_32603_34495 = state_32565__$1;
(statearr_32603_34495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (11))){
var inst_32528 = (state_32565[(10)]);
var inst_32552 = (state_32565[(2)]);
var tmp32601 = inst_32528;
var inst_32528__$1 = tmp32601;
var state_32565__$1 = (function (){var statearr_32605 = state_32565;
(statearr_32605[(10)] = inst_32528__$1);

(statearr_32605[(11)] = inst_32552);

return statearr_32605;
})();
var statearr_32606_34496 = state_32565__$1;
(statearr_32606_34496[(2)] = null);

(statearr_32606_34496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (9))){
var inst_32543 = (state_32565[(7)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32565__$1,(11),out,inst_32543);
} else {
if((state_val_32567 === (5))){
var inst_32557 = cljs.core.async.close_BANG_(out);
var state_32565__$1 = state_32565;
var statearr_32608_34499 = state_32565__$1;
(statearr_32608_34499[(2)] = inst_32557);

(statearr_32608_34499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var inst_32555 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32609_34500 = state_32565__$1;
(statearr_32609_34500[(2)] = inst_32555);

(statearr_32609_34500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (8))){
var inst_32528 = (state_32565[(10)]);
var inst_32543 = (state_32565[(7)]);
var inst_32544 = (state_32565[(9)]);
var inst_32541 = (state_32565[(8)]);
var inst_32547 = (function (){var cs = inst_32528;
var vec__32535 = inst_32541;
var v = inst_32543;
var c = inst_32544;
return (function (p1__32506_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32506_SHARP_);
});
})();
var inst_32548 = cljs.core.filterv(inst_32547,inst_32528);
var inst_32528__$1 = inst_32548;
var state_32565__$1 = (function (){var statearr_32623 = state_32565;
(statearr_32623[(10)] = inst_32528__$1);

return statearr_32623;
})();
var statearr_32626_34501 = state_32565__$1;
(statearr_32626_34501[(2)] = null);

(statearr_32626_34501[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_32631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32631[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_32631[(1)] = (1));

return statearr_32631;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_32565){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_32565);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e32659){var ex__29178__auto__ = e32659;
var statearr_32660_34504 = state_32565;
(statearr_32660_34504[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_32565[(4)]))){
var statearr_32661_34505 = state_32565;
(statearr_32661_34505[(1)] = cljs.core.first((state_32565[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34506 = state_32565;
state_32565 = G__34506;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_32565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_32565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_32666 = f__29743__auto__();
(statearr_32666[(6)] = c__29742__auto___34486);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32681 = arguments.length;
switch (G__32681) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_32709){
var state_val_32710 = (state_32709[(1)]);
if((state_val_32710 === (7))){
var inst_32691 = (state_32709[(7)]);
var inst_32691__$1 = (state_32709[(2)]);
var inst_32692 = (inst_32691__$1 == null);
var inst_32693 = cljs.core.not(inst_32692);
var state_32709__$1 = (function (){var statearr_32711 = state_32709;
(statearr_32711[(7)] = inst_32691__$1);

return statearr_32711;
})();
if(inst_32693){
var statearr_32712_34511 = state_32709__$1;
(statearr_32712_34511[(1)] = (8));

} else {
var statearr_32713_34512 = state_32709__$1;
(statearr_32713_34512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (1))){
var inst_32686 = (0);
var state_32709__$1 = (function (){var statearr_32714 = state_32709;
(statearr_32714[(8)] = inst_32686);

return statearr_32714;
})();
var statearr_32715_34513 = state_32709__$1;
(statearr_32715_34513[(2)] = null);

(statearr_32715_34513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (4))){
var state_32709__$1 = state_32709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32709__$1,(7),ch);
} else {
if((state_val_32710 === (6))){
var inst_32704 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32719_34514 = state_32709__$1;
(statearr_32719_34514[(2)] = inst_32704);

(statearr_32719_34514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (3))){
var inst_32706 = (state_32709[(2)]);
var inst_32707 = cljs.core.async.close_BANG_(out);
var state_32709__$1 = (function (){var statearr_32720 = state_32709;
(statearr_32720[(9)] = inst_32706);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32709__$1,inst_32707);
} else {
if((state_val_32710 === (2))){
var inst_32686 = (state_32709[(8)]);
var inst_32688 = (inst_32686 < n);
var state_32709__$1 = state_32709;
if(cljs.core.truth_(inst_32688)){
var statearr_32722_34517 = state_32709__$1;
(statearr_32722_34517[(1)] = (4));

} else {
var statearr_32723_34518 = state_32709__$1;
(statearr_32723_34518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (11))){
var inst_32686 = (state_32709[(8)]);
var inst_32696 = (state_32709[(2)]);
var inst_32697 = (inst_32686 + (1));
var inst_32686__$1 = inst_32697;
var state_32709__$1 = (function (){var statearr_32724 = state_32709;
(statearr_32724[(8)] = inst_32686__$1);

(statearr_32724[(10)] = inst_32696);

return statearr_32724;
})();
var statearr_32725_34522 = state_32709__$1;
(statearr_32725_34522[(2)] = null);

(statearr_32725_34522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (9))){
var state_32709__$1 = state_32709;
var statearr_32726_34526 = state_32709__$1;
(statearr_32726_34526[(2)] = null);

(statearr_32726_34526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (5))){
var state_32709__$1 = state_32709;
var statearr_32727_34527 = state_32709__$1;
(statearr_32727_34527[(2)] = null);

(statearr_32727_34527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (10))){
var inst_32701 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32728_34528 = state_32709__$1;
(statearr_32728_34528[(2)] = inst_32701);

(statearr_32728_34528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (8))){
var inst_32691 = (state_32709[(7)]);
var state_32709__$1 = state_32709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32709__$1,(11),out,inst_32691);
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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_32741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32741[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_32741[(1)] = (1));

return statearr_32741;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_32709){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_32709);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e32751){var ex__29178__auto__ = e32751;
var statearr_32752_34532 = state_32709;
(statearr_32752_34532[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_32709[(4)]))){
var statearr_32756_34533 = state_32709;
(statearr_32756_34533[(1)] = cljs.core.first((state_32709[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34536 = state_32709;
state_32709 = G__34536;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_32709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_32709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_32758 = f__29743__auto__();
(statearr_32758[(6)] = c__29742__auto___34509);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32766 = (function (f,ch,meta32767){
this.f = f;
this.ch = ch;
this.meta32767 = meta32767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32768,meta32767__$1){
var self__ = this;
var _32768__$1 = this;
return (new cljs.core.async.t_cljs$core$async32766(self__.f,self__.ch,meta32767__$1));
}));

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32768){
var self__ = this;
var _32768__$1 = this;
return self__.meta32767;
}));

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32788 = (function (f,ch,meta32767,_,fn1,meta32789){
this.f = f;
this.ch = ch;
this.meta32767 = meta32767;
this._ = _;
this.fn1 = fn1;
this.meta32789 = meta32789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32790,meta32789__$1){
var self__ = this;
var _32790__$1 = this;
return (new cljs.core.async.t_cljs$core$async32788(self__.f,self__.ch,self__.meta32767,self__._,self__.fn1,meta32789__$1));
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32790){
var self__ = this;
var _32790__$1 = this;
return self__.meta32789;
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32764_SHARP_){
var G__32803 = (((p1__32764_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32764_SHARP_) : self__.f.call(null,p1__32764_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32803) : f1.call(null,G__32803));
});
}));

(cljs.core.async.t_cljs$core$async32788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32767","meta32767",-978647819,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32766","cljs.core.async/t_cljs$core$async32766",-854458812,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null)], null);
}));

(cljs.core.async.t_cljs$core$async32788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32788");

(cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32788.
 */
cljs.core.async.__GT_t_cljs$core$async32788 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32788(f__$1,ch__$1,meta32767__$1,___$2,fn1__$1,meta32789){
return (new cljs.core.async.t_cljs$core$async32788(f__$1,ch__$1,meta32767__$1,___$2,fn1__$1,meta32789));
});

}

return (new cljs.core.async.t_cljs$core$async32788(self__.f,self__.ch,self__.meta32767,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32821 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32821) : self__.f.call(null,G__32821));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32767","meta32767",-978647819,null)], null);
}));

(cljs.core.async.t_cljs$core$async32766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32766");

(cljs.core.async.t_cljs$core$async32766.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32766.
 */
cljs.core.async.__GT_t_cljs$core$async32766 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32766(f__$1,ch__$1,meta32767){
return (new cljs.core.async.t_cljs$core$async32766(f__$1,ch__$1,meta32767));
});

}

return (new cljs.core.async.t_cljs$core$async32766(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32823 = (function (f,ch,meta32824){
this.f = f;
this.ch = ch;
this.meta32824 = meta32824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32825,meta32824__$1){
var self__ = this;
var _32825__$1 = this;
return (new cljs.core.async.t_cljs$core$async32823(self__.f,self__.ch,meta32824__$1));
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32825){
var self__ = this;
var _32825__$1 = this;
return self__.meta32824;
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32824","meta32824",-12910507,null)], null);
}));

(cljs.core.async.t_cljs$core$async32823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32823");

(cljs.core.async.t_cljs$core$async32823.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32823.
 */
cljs.core.async.__GT_t_cljs$core$async32823 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32823(f__$1,ch__$1,meta32824){
return (new cljs.core.async.t_cljs$core$async32823(f__$1,ch__$1,meta32824));
});

}

return (new cljs.core.async.t_cljs$core$async32823(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32856 = (function (p,ch,meta32857){
this.p = p;
this.ch = ch;
this.meta32857 = meta32857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32858,meta32857__$1){
var self__ = this;
var _32858__$1 = this;
return (new cljs.core.async.t_cljs$core$async32856(self__.p,self__.ch,meta32857__$1));
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32858){
var self__ = this;
var _32858__$1 = this;
return self__.meta32857;
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32857","meta32857",-733726070,null)], null);
}));

(cljs.core.async.t_cljs$core$async32856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32856");

(cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32856.
 */
cljs.core.async.__GT_t_cljs$core$async32856 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32856(p__$1,ch__$1,meta32857){
return (new cljs.core.async.t_cljs$core$async32856(p__$1,ch__$1,meta32857));
});

}

return (new cljs.core.async.t_cljs$core$async32856(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32880 = arguments.length;
switch (G__32880) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (7))){
var inst_32904 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32917_34569 = state_32908__$1;
(statearr_32917_34569[(2)] = inst_32904);

(statearr_32917_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (1))){
var state_32908__$1 = state_32908;
var statearr_32918_34570 = state_32908__$1;
(statearr_32918_34570[(2)] = null);

(statearr_32918_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (4))){
var inst_32887 = (state_32908[(7)]);
var inst_32887__$1 = (state_32908[(2)]);
var inst_32888 = (inst_32887__$1 == null);
var state_32908__$1 = (function (){var statearr_32919 = state_32908;
(statearr_32919[(7)] = inst_32887__$1);

return statearr_32919;
})();
if(cljs.core.truth_(inst_32888)){
var statearr_32920_34576 = state_32908__$1;
(statearr_32920_34576[(1)] = (5));

} else {
var statearr_32921_34577 = state_32908__$1;
(statearr_32921_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32887 = (state_32908[(7)]);
var inst_32893 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32887) : p.call(null,inst_32887));
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32893)){
var statearr_32923_34578 = state_32908__$1;
(statearr_32923_34578[(1)] = (8));

} else {
var statearr_32924_34580 = state_32908__$1;
(statearr_32924_34580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32906 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (2))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32908__$1,(4),ch);
} else {
if((state_val_32909 === (11))){
var inst_32897 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32932_34588 = state_32908__$1;
(statearr_32932_34588[(2)] = inst_32897);

(statearr_32932_34588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (9))){
var state_32908__$1 = state_32908;
var statearr_32933_34589 = state_32908__$1;
(statearr_32933_34589[(2)] = null);

(statearr_32933_34589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (5))){
var inst_32890 = cljs.core.async.close_BANG_(out);
var state_32908__$1 = state_32908;
var statearr_32934_34590 = state_32908__$1;
(statearr_32934_34590[(2)] = inst_32890);

(statearr_32934_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (10))){
var inst_32901 = (state_32908[(2)]);
var state_32908__$1 = (function (){var statearr_32935 = state_32908;
(statearr_32935[(8)] = inst_32901);

return statearr_32935;
})();
var statearr_32936_34591 = state_32908__$1;
(statearr_32936_34591[(2)] = null);

(statearr_32936_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (8))){
var inst_32887 = (state_32908[(7)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32908__$1,(11),out,inst_32887);
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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_32940 = [null,null,null,null,null,null,null,null,null];
(statearr_32940[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_32940[(1)] = (1));

return statearr_32940;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_32908){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_32908);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e32942){var ex__29178__auto__ = e32942;
var statearr_32943_34592 = state_32908;
(statearr_32943_34592[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_32908[(4)]))){
var statearr_32946_34595 = state_32908;
(statearr_32946_34595[(1)] = cljs.core.first((state_32908[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_32908;
state_32908 = G__34597;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_32949 = f__29743__auto__();
(statearr_32949[(6)] = c__29742__auto___34568);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32953 = arguments.length;
switch (G__32953) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_33023){
var state_val_33024 = (state_33023[(1)]);
if((state_val_33024 === (7))){
var inst_33019 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33028_34601 = state_33023__$1;
(statearr_33028_34601[(2)] = inst_33019);

(statearr_33028_34601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (20))){
var inst_32985 = (state_33023[(7)]);
var inst_33000 = (state_33023[(2)]);
var inst_33001 = cljs.core.next(inst_32985);
var inst_32969 = inst_33001;
var inst_32970 = null;
var inst_32971 = (0);
var inst_32972 = (0);
var state_33023__$1 = (function (){var statearr_33030 = state_33023;
(statearr_33030[(8)] = inst_32970);

(statearr_33030[(9)] = inst_32969);

(statearr_33030[(10)] = inst_32971);

(statearr_33030[(11)] = inst_32972);

(statearr_33030[(12)] = inst_33000);

return statearr_33030;
})();
var statearr_33032_34602 = state_33023__$1;
(statearr_33032_34602[(2)] = null);

(statearr_33032_34602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (1))){
var state_33023__$1 = state_33023;
var statearr_33034_34603 = state_33023__$1;
(statearr_33034_34603[(2)] = null);

(statearr_33034_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (4))){
var inst_32958 = (state_33023[(13)]);
var inst_32958__$1 = (state_33023[(2)]);
var inst_32959 = (inst_32958__$1 == null);
var state_33023__$1 = (function (){var statearr_33041 = state_33023;
(statearr_33041[(13)] = inst_32958__$1);

return statearr_33041;
})();
if(cljs.core.truth_(inst_32959)){
var statearr_33042_34604 = state_33023__$1;
(statearr_33042_34604[(1)] = (5));

} else {
var statearr_33043_34605 = state_33023__$1;
(statearr_33043_34605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (15))){
var state_33023__$1 = state_33023;
var statearr_33051_34606 = state_33023__$1;
(statearr_33051_34606[(2)] = null);

(statearr_33051_34606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (21))){
var state_33023__$1 = state_33023;
var statearr_33052_34607 = state_33023__$1;
(statearr_33052_34607[(2)] = null);

(statearr_33052_34607[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (13))){
var inst_32970 = (state_33023[(8)]);
var inst_32969 = (state_33023[(9)]);
var inst_32971 = (state_33023[(10)]);
var inst_32972 = (state_33023[(11)]);
var inst_32980 = (state_33023[(2)]);
var inst_32982 = (inst_32972 + (1));
var tmp33044 = inst_32970;
var tmp33045 = inst_32969;
var tmp33046 = inst_32971;
var inst_32969__$1 = tmp33045;
var inst_32970__$1 = tmp33044;
var inst_32971__$1 = tmp33046;
var inst_32972__$1 = inst_32982;
var state_33023__$1 = (function (){var statearr_33056 = state_33023;
(statearr_33056[(8)] = inst_32970__$1);

(statearr_33056[(9)] = inst_32969__$1);

(statearr_33056[(14)] = inst_32980);

(statearr_33056[(10)] = inst_32971__$1);

(statearr_33056[(11)] = inst_32972__$1);

return statearr_33056;
})();
var statearr_33057_34608 = state_33023__$1;
(statearr_33057_34608[(2)] = null);

(statearr_33057_34608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (22))){
var state_33023__$1 = state_33023;
var statearr_33063_34609 = state_33023__$1;
(statearr_33063_34609[(2)] = null);

(statearr_33063_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (6))){
var inst_32958 = (state_33023[(13)]);
var inst_32967 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32958) : f.call(null,inst_32958));
var inst_32968 = cljs.core.seq(inst_32967);
var inst_32969 = inst_32968;
var inst_32970 = null;
var inst_32971 = (0);
var inst_32972 = (0);
var state_33023__$1 = (function (){var statearr_33065 = state_33023;
(statearr_33065[(8)] = inst_32970);

(statearr_33065[(9)] = inst_32969);

(statearr_33065[(10)] = inst_32971);

(statearr_33065[(11)] = inst_32972);

return statearr_33065;
})();
var statearr_33066_34611 = state_33023__$1;
(statearr_33066_34611[(2)] = null);

(statearr_33066_34611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (17))){
var inst_32985 = (state_33023[(7)]);
var inst_32989 = cljs.core.chunk_first(inst_32985);
var inst_32990 = cljs.core.chunk_rest(inst_32985);
var inst_32995 = cljs.core.count(inst_32989);
var inst_32969 = inst_32990;
var inst_32970 = inst_32989;
var inst_32971 = inst_32995;
var inst_32972 = (0);
var state_33023__$1 = (function (){var statearr_33068 = state_33023;
(statearr_33068[(8)] = inst_32970);

(statearr_33068[(9)] = inst_32969);

(statearr_33068[(10)] = inst_32971);

(statearr_33068[(11)] = inst_32972);

return statearr_33068;
})();
var statearr_33069_34614 = state_33023__$1;
(statearr_33069_34614[(2)] = null);

(statearr_33069_34614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (3))){
var inst_33021 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33023__$1,inst_33021);
} else {
if((state_val_33024 === (12))){
var inst_33009 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33079_34618 = state_33023__$1;
(statearr_33079_34618[(2)] = inst_33009);

(statearr_33079_34618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (2))){
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33023__$1,(4),in$);
} else {
if((state_val_33024 === (23))){
var inst_33017 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33086_34619 = state_33023__$1;
(statearr_33086_34619[(2)] = inst_33017);

(statearr_33086_34619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (19))){
var inst_33004 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33098_34620 = state_33023__$1;
(statearr_33098_34620[(2)] = inst_33004);

(statearr_33098_34620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (11))){
var inst_32969 = (state_33023[(9)]);
var inst_32985 = (state_33023[(7)]);
var inst_32985__$1 = cljs.core.seq(inst_32969);
var state_33023__$1 = (function (){var statearr_33109 = state_33023;
(statearr_33109[(7)] = inst_32985__$1);

return statearr_33109;
})();
if(inst_32985__$1){
var statearr_33114_34621 = state_33023__$1;
(statearr_33114_34621[(1)] = (14));

} else {
var statearr_33115_34622 = state_33023__$1;
(statearr_33115_34622[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (9))){
var inst_33011 = (state_33023[(2)]);
var inst_33012 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33023__$1 = (function (){var statearr_33126 = state_33023;
(statearr_33126[(15)] = inst_33011);

return statearr_33126;
})();
if(cljs.core.truth_(inst_33012)){
var statearr_33129_34623 = state_33023__$1;
(statearr_33129_34623[(1)] = (21));

} else {
var statearr_33132_34624 = state_33023__$1;
(statearr_33132_34624[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (5))){
var inst_32961 = cljs.core.async.close_BANG_(out);
var state_33023__$1 = state_33023;
var statearr_33142_34625 = state_33023__$1;
(statearr_33142_34625[(2)] = inst_32961);

(statearr_33142_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (14))){
var inst_32985 = (state_33023[(7)]);
var inst_32987 = cljs.core.chunked_seq_QMARK_(inst_32985);
var state_33023__$1 = state_33023;
if(inst_32987){
var statearr_33144_34626 = state_33023__$1;
(statearr_33144_34626[(1)] = (17));

} else {
var statearr_33145_34627 = state_33023__$1;
(statearr_33145_34627[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (16))){
var inst_33007 = (state_33023[(2)]);
var state_33023__$1 = state_33023;
var statearr_33146_34628 = state_33023__$1;
(statearr_33146_34628[(2)] = inst_33007);

(statearr_33146_34628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33024 === (10))){
var inst_32970 = (state_33023[(8)]);
var inst_32972 = (state_33023[(11)]);
var inst_32978 = cljs.core._nth(inst_32970,inst_32972);
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33023__$1,(13),out,inst_32978);
} else {
if((state_val_33024 === (18))){
var inst_32985 = (state_33023[(7)]);
var inst_32998 = cljs.core.first(inst_32985);
var state_33023__$1 = state_33023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33023__$1,(20),out,inst_32998);
} else {
if((state_val_33024 === (8))){
var inst_32971 = (state_33023[(10)]);
var inst_32972 = (state_33023[(11)]);
var inst_32975 = (inst_32972 < inst_32971);
var inst_32976 = inst_32975;
var state_33023__$1 = state_33023;
if(cljs.core.truth_(inst_32976)){
var statearr_33156_34633 = state_33023__$1;
(statearr_33156_34633[(1)] = (10));

} else {
var statearr_33157_34634 = state_33023__$1;
(statearr_33157_34634[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____0 = (function (){
var statearr_33163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__);

(statearr_33163[(1)] = (1));

return statearr_33163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____1 = (function (state_33023){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_33023);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e33164){var ex__29178__auto__ = e33164;
var statearr_33165_34635 = state_33023;
(statearr_33165_34635[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_33023[(4)]))){
var statearr_33166_34636 = state_33023;
(statearr_33166_34636[(1)] = cljs.core.first((state_33023[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34637 = state_33023;
state_33023 = G__34637;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__ = function(state_33023){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____1.call(this,state_33023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29175__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_33169 = f__29743__auto__();
(statearr_33169[(6)] = c__29742__auto__);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

return c__29742__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33179 = arguments.length;
switch (G__33179) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33189 = arguments.length;
switch (G__33189) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33207 = arguments.length;
switch (G__33207) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_33263){
var state_val_33264 = (state_33263[(1)]);
if((state_val_33264 === (7))){
var inst_33256 = (state_33263[(2)]);
var state_33263__$1 = state_33263;
var statearr_33272_34646 = state_33263__$1;
(statearr_33272_34646[(2)] = inst_33256);

(statearr_33272_34646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (1))){
var inst_33227 = null;
var state_33263__$1 = (function (){var statearr_33273 = state_33263;
(statearr_33273[(7)] = inst_33227);

return statearr_33273;
})();
var statearr_33275_34647 = state_33263__$1;
(statearr_33275_34647[(2)] = null);

(statearr_33275_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (4))){
var inst_33233 = (state_33263[(8)]);
var inst_33233__$1 = (state_33263[(2)]);
var inst_33234 = (inst_33233__$1 == null);
var inst_33235 = cljs.core.not(inst_33234);
var state_33263__$1 = (function (){var statearr_33278 = state_33263;
(statearr_33278[(8)] = inst_33233__$1);

return statearr_33278;
})();
if(inst_33235){
var statearr_33279_34649 = state_33263__$1;
(statearr_33279_34649[(1)] = (5));

} else {
var statearr_33280_34650 = state_33263__$1;
(statearr_33280_34650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (6))){
var state_33263__$1 = state_33263;
var statearr_33285_34651 = state_33263__$1;
(statearr_33285_34651[(2)] = null);

(statearr_33285_34651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (3))){
var inst_33258 = (state_33263[(2)]);
var inst_33259 = cljs.core.async.close_BANG_(out);
var state_33263__$1 = (function (){var statearr_33290 = state_33263;
(statearr_33290[(9)] = inst_33258);

return statearr_33290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33263__$1,inst_33259);
} else {
if((state_val_33264 === (2))){
var state_33263__$1 = state_33263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33263__$1,(4),ch);
} else {
if((state_val_33264 === (11))){
var inst_33233 = (state_33263[(8)]);
var inst_33246 = (state_33263[(2)]);
var inst_33227 = inst_33233;
var state_33263__$1 = (function (){var statearr_33294 = state_33263;
(statearr_33294[(7)] = inst_33227);

(statearr_33294[(10)] = inst_33246);

return statearr_33294;
})();
var statearr_33295_34652 = state_33263__$1;
(statearr_33295_34652[(2)] = null);

(statearr_33295_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (9))){
var inst_33233 = (state_33263[(8)]);
var state_33263__$1 = state_33263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33263__$1,(11),out,inst_33233);
} else {
if((state_val_33264 === (5))){
var inst_33227 = (state_33263[(7)]);
var inst_33233 = (state_33263[(8)]);
var inst_33237 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33233,inst_33227);
var state_33263__$1 = state_33263;
if(inst_33237){
var statearr_33298_34653 = state_33263__$1;
(statearr_33298_34653[(1)] = (8));

} else {
var statearr_33299_34654 = state_33263__$1;
(statearr_33299_34654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (10))){
var inst_33253 = (state_33263[(2)]);
var state_33263__$1 = state_33263;
var statearr_33301_34655 = state_33263__$1;
(statearr_33301_34655[(2)] = inst_33253);

(statearr_33301_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33264 === (8))){
var inst_33227 = (state_33263[(7)]);
var tmp33296 = inst_33227;
var inst_33227__$1 = tmp33296;
var state_33263__$1 = (function (){var statearr_33302 = state_33263;
(statearr_33302[(7)] = inst_33227__$1);

return statearr_33302;
})();
var statearr_33303_34657 = state_33263__$1;
(statearr_33303_34657[(2)] = null);

(statearr_33303_34657[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_33312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33312[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_33312[(1)] = (1));

return statearr_33312;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_33263){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_33263);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e33315){var ex__29178__auto__ = e33315;
var statearr_33317_34659 = state_33263;
(statearr_33317_34659[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_33263[(4)]))){
var statearr_33320_34660 = state_33263;
(statearr_33320_34660[(1)] = cljs.core.first((state_33263[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34662 = state_33263;
state_33263 = G__34662;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_33263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_33263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_33331 = f__29743__auto__();
(statearr_33331[(6)] = c__29742__auto___34641);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_33403){
var state_val_33404 = (state_33403[(1)]);
if((state_val_33404 === (7))){
var inst_33397 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33417_34674 = state_33403__$1;
(statearr_33417_34674[(2)] = inst_33397);

(statearr_33417_34674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (1))){
var inst_33358 = (new Array(n));
var inst_33360 = inst_33358;
var inst_33361 = (0);
var state_33403__$1 = (function (){var statearr_33424 = state_33403;
(statearr_33424[(7)] = inst_33360);

(statearr_33424[(8)] = inst_33361);

return statearr_33424;
})();
var statearr_33427_34675 = state_33403__$1;
(statearr_33427_34675[(2)] = null);

(statearr_33427_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (4))){
var inst_33364 = (state_33403[(9)]);
var inst_33364__$1 = (state_33403[(2)]);
var inst_33366 = (inst_33364__$1 == null);
var inst_33367 = cljs.core.not(inst_33366);
var state_33403__$1 = (function (){var statearr_33434 = state_33403;
(statearr_33434[(9)] = inst_33364__$1);

return statearr_33434;
})();
if(inst_33367){
var statearr_33436_34676 = state_33403__$1;
(statearr_33436_34676[(1)] = (5));

} else {
var statearr_33437_34677 = state_33403__$1;
(statearr_33437_34677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (15))){
var inst_33387 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33441_34679 = state_33403__$1;
(statearr_33441_34679[(2)] = inst_33387);

(statearr_33441_34679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (13))){
var state_33403__$1 = state_33403;
var statearr_33442_34680 = state_33403__$1;
(statearr_33442_34680[(2)] = null);

(statearr_33442_34680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (6))){
var inst_33361 = (state_33403[(8)]);
var inst_33383 = (inst_33361 > (0));
var state_33403__$1 = state_33403;
if(cljs.core.truth_(inst_33383)){
var statearr_33446_34681 = state_33403__$1;
(statearr_33446_34681[(1)] = (12));

} else {
var statearr_33451_34682 = state_33403__$1;
(statearr_33451_34682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (3))){
var inst_33399 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33403__$1,inst_33399);
} else {
if((state_val_33404 === (12))){
var inst_33360 = (state_33403[(7)]);
var inst_33385 = cljs.core.vec(inst_33360);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33403__$1,(15),out,inst_33385);
} else {
if((state_val_33404 === (2))){
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33403__$1,(4),ch);
} else {
if((state_val_33404 === (11))){
var inst_33377 = (state_33403[(2)]);
var inst_33378 = (new Array(n));
var inst_33360 = inst_33378;
var inst_33361 = (0);
var state_33403__$1 = (function (){var statearr_33465 = state_33403;
(statearr_33465[(10)] = inst_33377);

(statearr_33465[(7)] = inst_33360);

(statearr_33465[(8)] = inst_33361);

return statearr_33465;
})();
var statearr_33468_34683 = state_33403__$1;
(statearr_33468_34683[(2)] = null);

(statearr_33468_34683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (9))){
var inst_33360 = (state_33403[(7)]);
var inst_33375 = cljs.core.vec(inst_33360);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33403__$1,(11),out,inst_33375);
} else {
if((state_val_33404 === (5))){
var inst_33360 = (state_33403[(7)]);
var inst_33364 = (state_33403[(9)]);
var inst_33361 = (state_33403[(8)]);
var inst_33370 = (state_33403[(11)]);
var inst_33369 = (inst_33360[inst_33361] = inst_33364);
var inst_33370__$1 = (inst_33361 + (1));
var inst_33371 = (inst_33370__$1 < n);
var state_33403__$1 = (function (){var statearr_33475 = state_33403;
(statearr_33475[(11)] = inst_33370__$1);

(statearr_33475[(12)] = inst_33369);

return statearr_33475;
})();
if(cljs.core.truth_(inst_33371)){
var statearr_33480_34684 = state_33403__$1;
(statearr_33480_34684[(1)] = (8));

} else {
var statearr_33481_34685 = state_33403__$1;
(statearr_33481_34685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (14))){
var inst_33394 = (state_33403[(2)]);
var inst_33395 = cljs.core.async.close_BANG_(out);
var state_33403__$1 = (function (){var statearr_33483 = state_33403;
(statearr_33483[(13)] = inst_33394);

return statearr_33483;
})();
var statearr_33485_34686 = state_33403__$1;
(statearr_33485_34686[(2)] = inst_33395);

(statearr_33485_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (10))){
var inst_33381 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33488_34687 = state_33403__$1;
(statearr_33488_34687[(2)] = inst_33381);

(statearr_33488_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (8))){
var inst_33360 = (state_33403[(7)]);
var inst_33370 = (state_33403[(11)]);
var tmp33482 = inst_33360;
var inst_33360__$1 = tmp33482;
var inst_33361 = inst_33370;
var state_33403__$1 = (function (){var statearr_33492 = state_33403;
(statearr_33492[(7)] = inst_33360__$1);

(statearr_33492[(8)] = inst_33361);

return statearr_33492;
})();
var statearr_33494_34688 = state_33403__$1;
(statearr_33494_34688[(2)] = null);

(statearr_33494_34688[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_33403){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_33403);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e33503){var ex__29178__auto__ = e33503;
var statearr_33504_34689 = state_33403;
(statearr_33504_34689[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_33403[(4)]))){
var statearr_33507_34690 = state_33403;
(statearr_33507_34690[(1)] = cljs.core.first((state_33403[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34693 = state_33403;
state_33403 = G__34693;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_33403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_33403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_33512 = f__29743__auto__();
(statearr_33512[(6)] = c__29742__auto___34669);

return statearr_33512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33524 = arguments.length;
switch (G__33524) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29742__auto___34695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_33585){
var state_val_33587 = (state_33585[(1)]);
if((state_val_33587 === (7))){
var inst_33580 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33597_34697 = state_33585__$1;
(statearr_33597_34697[(2)] = inst_33580);

(statearr_33597_34697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (1))){
var inst_33538 = [];
var inst_33539 = inst_33538;
var inst_33540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33585__$1 = (function (){var statearr_33600 = state_33585;
(statearr_33600[(7)] = inst_33539);

(statearr_33600[(8)] = inst_33540);

return statearr_33600;
})();
var statearr_33601_34699 = state_33585__$1;
(statearr_33601_34699[(2)] = null);

(statearr_33601_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (4))){
var inst_33545 = (state_33585[(9)]);
var inst_33545__$1 = (state_33585[(2)]);
var inst_33546 = (inst_33545__$1 == null);
var inst_33547 = cljs.core.not(inst_33546);
var state_33585__$1 = (function (){var statearr_33602 = state_33585;
(statearr_33602[(9)] = inst_33545__$1);

return statearr_33602;
})();
if(inst_33547){
var statearr_33603_34700 = state_33585__$1;
(statearr_33603_34700[(1)] = (5));

} else {
var statearr_33605_34701 = state_33585__$1;
(statearr_33605_34701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (15))){
var inst_33539 = (state_33585[(7)]);
var inst_33572 = cljs.core.vec(inst_33539);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33585__$1,(18),out,inst_33572);
} else {
if((state_val_33587 === (13))){
var inst_33567 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33606_34704 = state_33585__$1;
(statearr_33606_34704[(2)] = inst_33567);

(statearr_33606_34704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (6))){
var inst_33539 = (state_33585[(7)]);
var inst_33569 = inst_33539.length;
var inst_33570 = (inst_33569 > (0));
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33570)){
var statearr_33607_34706 = state_33585__$1;
(statearr_33607_34706[(1)] = (15));

} else {
var statearr_33608_34707 = state_33585__$1;
(statearr_33608_34707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (17))){
var inst_33577 = (state_33585[(2)]);
var inst_33578 = cljs.core.async.close_BANG_(out);
var state_33585__$1 = (function (){var statearr_33609 = state_33585;
(statearr_33609[(10)] = inst_33577);

return statearr_33609;
})();
var statearr_33610_34710 = state_33585__$1;
(statearr_33610_34710[(2)] = inst_33578);

(statearr_33610_34710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (3))){
var inst_33582 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33585__$1,inst_33582);
} else {
if((state_val_33587 === (12))){
var inst_33539 = (state_33585[(7)]);
var inst_33560 = cljs.core.vec(inst_33539);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33585__$1,(14),out,inst_33560);
} else {
if((state_val_33587 === (2))){
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33585__$1,(4),ch);
} else {
if((state_val_33587 === (11))){
var inst_33545 = (state_33585[(9)]);
var inst_33539 = (state_33585[(7)]);
var inst_33549 = (state_33585[(11)]);
var inst_33557 = inst_33539.push(inst_33545);
var tmp33611 = inst_33539;
var inst_33539__$1 = tmp33611;
var inst_33540 = inst_33549;
var state_33585__$1 = (function (){var statearr_33612 = state_33585;
(statearr_33612[(7)] = inst_33539__$1);

(statearr_33612[(8)] = inst_33540);

(statearr_33612[(12)] = inst_33557);

return statearr_33612;
})();
var statearr_33613_34714 = state_33585__$1;
(statearr_33613_34714[(2)] = null);

(statearr_33613_34714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (9))){
var inst_33540 = (state_33585[(8)]);
var inst_33553 = cljs.core.keyword_identical_QMARK_(inst_33540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33585__$1 = state_33585;
var statearr_33614_34715 = state_33585__$1;
(statearr_33614_34715[(2)] = inst_33553);

(statearr_33614_34715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (5))){
var inst_33545 = (state_33585[(9)]);
var inst_33549 = (state_33585[(11)]);
var inst_33540 = (state_33585[(8)]);
var inst_33550 = (state_33585[(13)]);
var inst_33549__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33545) : f.call(null,inst_33545));
var inst_33550__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33549__$1,inst_33540);
var state_33585__$1 = (function (){var statearr_33615 = state_33585;
(statearr_33615[(11)] = inst_33549__$1);

(statearr_33615[(13)] = inst_33550__$1);

return statearr_33615;
})();
if(inst_33550__$1){
var statearr_33617_34716 = state_33585__$1;
(statearr_33617_34716[(1)] = (8));

} else {
var statearr_33618_34718 = state_33585__$1;
(statearr_33618_34718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (14))){
var inst_33545 = (state_33585[(9)]);
var inst_33549 = (state_33585[(11)]);
var inst_33562 = (state_33585[(2)]);
var inst_33563 = [];
var inst_33564 = inst_33563.push(inst_33545);
var inst_33539 = inst_33563;
var inst_33540 = inst_33549;
var state_33585__$1 = (function (){var statearr_33619 = state_33585;
(statearr_33619[(7)] = inst_33539);

(statearr_33619[(8)] = inst_33540);

(statearr_33619[(14)] = inst_33564);

(statearr_33619[(15)] = inst_33562);

return statearr_33619;
})();
var statearr_33620_34720 = state_33585__$1;
(statearr_33620_34720[(2)] = null);

(statearr_33620_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (16))){
var state_33585__$1 = state_33585;
var statearr_33621_34721 = state_33585__$1;
(statearr_33621_34721[(2)] = null);

(statearr_33621_34721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (10))){
var inst_33555 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33555)){
var statearr_33623_34722 = state_33585__$1;
(statearr_33623_34722[(1)] = (11));

} else {
var statearr_33624_34723 = state_33585__$1;
(statearr_33624_34723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (18))){
var inst_33574 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33625_34724 = state_33585__$1;
(statearr_33625_34724[(2)] = inst_33574);

(statearr_33625_34724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (8))){
var inst_33550 = (state_33585[(13)]);
var state_33585__$1 = state_33585;
var statearr_33626_34725 = state_33585__$1;
(statearr_33626_34725[(2)] = inst_33550);

(statearr_33626_34725[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29175__auto__ = null;
var cljs$core$async$state_machine__29175__auto____0 = (function (){
var statearr_33640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33640[(0)] = cljs$core$async$state_machine__29175__auto__);

(statearr_33640[(1)] = (1));

return statearr_33640;
});
var cljs$core$async$state_machine__29175__auto____1 = (function (state_33585){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_33585);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e33641){var ex__29178__auto__ = e33641;
var statearr_33642_34726 = state_33585;
(statearr_33642_34726[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_33585[(4)]))){
var statearr_33643_34729 = state_33585;
(statearr_33643_34729[(1)] = cljs.core.first((state_33585[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34732 = state_33585;
state_33585 = G__34732;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
cljs$core$async$state_machine__29175__auto__ = function(state_33585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29175__auto____1.call(this,state_33585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29175__auto____0;
cljs$core$async$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29175__auto____1;
return cljs$core$async$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_33644 = f__29743__auto__();
(statearr_33644[(6)] = c__29742__auto___34695);

return statearr_33644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
