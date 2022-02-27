goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34791,p__34792){
var map__34794 = p__34791;
var map__34794__$1 = cljs.core.__destructure_map(map__34794);
var svc = map__34794__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34795 = p__34792;
var map__34795__$1 = cljs.core.__destructure_map(map__34795);
var msg = map__34795__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34795__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34795__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34795__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34795__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34799,p__34800){
var map__34803 = p__34799;
var map__34803__$1 = cljs.core.__destructure_map(map__34803);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34803__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34804 = p__34800;
var map__34804__$1 = cljs.core.__destructure_map(map__34804);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34809,p__34810){
var map__34811 = p__34809;
var map__34811__$1 = cljs.core.__destructure_map(map__34811);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34811__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34811__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34812 = p__34810;
var map__34812__$1 = cljs.core.__destructure_map(map__34812);
var msg = map__34812__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34812__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34815,tid){
var map__34817 = p__34815;
var map__34817__$1 = cljs.core.__destructure_map(map__34817);
var svc = map__34817__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34817__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34822 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34823 = null;
var count__34824 = (0);
var i__34825 = (0);
while(true){
if((i__34825 < count__34824)){
var vec__34845 = chunk__34823.cljs$core$IIndexed$_nth$arity$2(null,i__34825);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34863 = seq__34822;
var G__34864 = chunk__34823;
var G__34865 = count__34824;
var G__34866 = (i__34825 + (1));
seq__34822 = G__34863;
chunk__34823 = G__34864;
count__34824 = G__34865;
i__34825 = G__34866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34822);
if(temp__5753__auto__){
var seq__34822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34822__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34822__$1);
var G__34867 = cljs.core.chunk_rest(seq__34822__$1);
var G__34868 = c__4679__auto__;
var G__34869 = cljs.core.count(c__4679__auto__);
var G__34870 = (0);
seq__34822 = G__34867;
chunk__34823 = G__34868;
count__34824 = G__34869;
i__34825 = G__34870;
continue;
} else {
var vec__34851 = cljs.core.first(seq__34822__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34871 = cljs.core.next(seq__34822__$1);
var G__34872 = null;
var G__34873 = (0);
var G__34874 = (0);
seq__34822 = G__34871;
chunk__34823 = G__34872;
count__34824 = G__34873;
i__34825 = G__34874;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34818_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34818_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34819_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34819_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34820_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34820_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34821_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34821_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34857){
var map__34858 = p__34857;
var map__34858__$1 = cljs.core.__destructure_map(map__34858);
var svc = map__34858__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
