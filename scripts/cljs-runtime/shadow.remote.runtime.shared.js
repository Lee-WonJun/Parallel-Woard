goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31412,res){
var map__31413 = p__31412;
var map__31413__$1 = cljs.core.__destructure_map(map__31413);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31413__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31413__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31416 = res;
var G__31416__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31416,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31416);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31416__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31416__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31428 = arguments.length;
switch (G__31428) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31437,msg,handlers,timeout_after_ms){
var map__31438 = p__31437;
var map__31438__$1 = cljs.core.__destructure_map(map__31438);
var runtime = map__31438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31703 = arguments.length;
var i__4865__auto___31704 = (0);
while(true){
if((i__4865__auto___31704 < len__4864__auto___31703)){
args__4870__auto__.push((arguments[i__4865__auto___31704]));

var G__31705 = (i__4865__auto___31704 + (1));
i__4865__auto___31704 = G__31705;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31454,ev,args){
var map__31455 = p__31454;
var map__31455__$1 = cljs.core.__destructure_map(map__31455);
var runtime = map__31455__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31455__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31459 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31462 = null;
var count__31463 = (0);
var i__31464 = (0);
while(true){
if((i__31464 < count__31463)){
var ext = chunk__31462.cljs$core$IIndexed$_nth$arity$2(null,i__31464);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31707 = seq__31459;
var G__31708 = chunk__31462;
var G__31709 = count__31463;
var G__31710 = (i__31464 + (1));
seq__31459 = G__31707;
chunk__31462 = G__31708;
count__31463 = G__31709;
i__31464 = G__31710;
continue;
} else {
var G__31711 = seq__31459;
var G__31712 = chunk__31462;
var G__31713 = count__31463;
var G__31714 = (i__31464 + (1));
seq__31459 = G__31711;
chunk__31462 = G__31712;
count__31463 = G__31713;
i__31464 = G__31714;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31459);
if(temp__5753__auto__){
var seq__31459__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31459__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31459__$1);
var G__31719 = cljs.core.chunk_rest(seq__31459__$1);
var G__31720 = c__4679__auto__;
var G__31721 = cljs.core.count(c__4679__auto__);
var G__31722 = (0);
seq__31459 = G__31719;
chunk__31462 = G__31720;
count__31463 = G__31721;
i__31464 = G__31722;
continue;
} else {
var ext = cljs.core.first(seq__31459__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31723 = cljs.core.next(seq__31459__$1);
var G__31724 = null;
var G__31725 = (0);
var G__31726 = (0);
seq__31459 = G__31723;
chunk__31462 = G__31724;
count__31463 = G__31725;
i__31464 = G__31726;
continue;
} else {
var G__31732 = cljs.core.next(seq__31459__$1);
var G__31733 = null;
var G__31734 = (0);
var G__31735 = (0);
seq__31459 = G__31732;
chunk__31462 = G__31733;
count__31463 = G__31734;
i__31464 = G__31735;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31447){
var G__31448 = cljs.core.first(seq31447);
var seq31447__$1 = cljs.core.next(seq31447);
var G__31449 = cljs.core.first(seq31447__$1);
var seq31447__$2 = cljs.core.next(seq31447__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31448,G__31449,seq31447__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31503,p__31504){
var map__31507 = p__31503;
var map__31507__$1 = cljs.core.__destructure_map(map__31507);
var runtime = map__31507__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31507__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31510 = p__31504;
var map__31510__$1 = cljs.core.__destructure_map(map__31510);
var msg = map__31510__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31510__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31516 = cljs.core.deref(state_ref);
var map__31516__$1 = cljs.core.__destructure_map(map__31516);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31516__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31516__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31530){
var map__31531 = p__31530;
var map__31531__$1 = cljs.core.__destructure_map(map__31531);
var runtime = map__31531__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31531__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31545,msg){
var map__31546 = p__31545;
var map__31546__$1 = cljs.core.__destructure_map(map__31546);
var runtime = map__31546__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31546__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31568,key,p__31569){
var map__31571 = p__31568;
var map__31571__$1 = cljs.core.__destructure_map(map__31571);
var state = map__31571__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31571__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31572 = p__31569;
var map__31572__$1 = cljs.core.__destructure_map(map__31572);
var spec = map__31572__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31572__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31589,key,spec){
var map__31590 = p__31589;
var map__31590__$1 = cljs.core.__destructure_map(map__31590);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31590__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31592_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31592_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31594_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31594_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31597_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31597_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31598_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31598_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31599_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31599_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31615,key){
var map__31620 = p__31615;
var map__31620__$1 = cljs.core.__destructure_map(map__31620);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31620__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31629,msg){
var map__31630 = p__31629;
var map__31630__$1 = cljs.core.__destructure_map(map__31630);
var runtime = map__31630__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31638,p__31639){
var map__31640 = p__31638;
var map__31640__$1 = cljs.core.__destructure_map(map__31640);
var runtime = map__31640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31641 = p__31639;
var map__31641__$1 = cljs.core.__destructure_map(map__31641);
var msg = map__31641__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31641__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31660 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31662 = null;
var count__31663 = (0);
var i__31664 = (0);
while(true){
if((i__31664 < count__31663)){
var map__31682 = chunk__31662.cljs$core$IIndexed$_nth$arity$2(null,i__31664);
var map__31682__$1 = cljs.core.__destructure_map(map__31682);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31682__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31783 = seq__31660;
var G__31784 = chunk__31662;
var G__31785 = count__31663;
var G__31786 = (i__31664 + (1));
seq__31660 = G__31783;
chunk__31662 = G__31784;
count__31663 = G__31785;
i__31664 = G__31786;
continue;
} else {
var G__31787 = seq__31660;
var G__31788 = chunk__31662;
var G__31789 = count__31663;
var G__31790 = (i__31664 + (1));
seq__31660 = G__31787;
chunk__31662 = G__31788;
count__31663 = G__31789;
i__31664 = G__31790;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31660);
if(temp__5753__auto__){
var seq__31660__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31660__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31660__$1);
var G__31792 = cljs.core.chunk_rest(seq__31660__$1);
var G__31793 = c__4679__auto__;
var G__31794 = cljs.core.count(c__4679__auto__);
var G__31795 = (0);
seq__31660 = G__31792;
chunk__31662 = G__31793;
count__31663 = G__31794;
i__31664 = G__31795;
continue;
} else {
var map__31684 = cljs.core.first(seq__31660__$1);
var map__31684__$1 = cljs.core.__destructure_map(map__31684);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31684__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31796 = cljs.core.next(seq__31660__$1);
var G__31797 = null;
var G__31798 = (0);
var G__31799 = (0);
seq__31660 = G__31796;
chunk__31662 = G__31797;
count__31663 = G__31798;
i__31664 = G__31799;
continue;
} else {
var G__31800 = cljs.core.next(seq__31660__$1);
var G__31801 = null;
var G__31802 = (0);
var G__31803 = (0);
seq__31660 = G__31800;
chunk__31662 = G__31801;
count__31663 = G__31802;
i__31664 = G__31803;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
