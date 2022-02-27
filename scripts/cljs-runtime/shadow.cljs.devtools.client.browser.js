goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36298 = arguments.length;
var i__4865__auto___36299 = (0);
while(true){
if((i__4865__auto___36299 < len__4864__auto___36298)){
args__4870__auto__.push((arguments[i__4865__auto___36299]));

var G__36300 = (i__4865__auto___36299 + (1));
i__4865__auto___36299 = G__36300;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36016){
var G__36017 = cljs.core.first(seq36016);
var seq36016__$1 = cljs.core.next(seq36016);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36017,seq36016__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36018 = cljs.core.seq(sources);
var chunk__36019 = null;
var count__36020 = (0);
var i__36021 = (0);
while(true){
if((i__36021 < count__36020)){
var map__36028 = chunk__36019.cljs$core$IIndexed$_nth$arity$2(null,i__36021);
var map__36028__$1 = cljs.core.__destructure_map(map__36028);
var src = map__36028__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36029){var e_36301 = e36029;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36301);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36301.message)].join('')));
}

var G__36302 = seq__36018;
var G__36303 = chunk__36019;
var G__36304 = count__36020;
var G__36305 = (i__36021 + (1));
seq__36018 = G__36302;
chunk__36019 = G__36303;
count__36020 = G__36304;
i__36021 = G__36305;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36018);
if(temp__5753__auto__){
var seq__36018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36018__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36018__$1);
var G__36306 = cljs.core.chunk_rest(seq__36018__$1);
var G__36307 = c__4679__auto__;
var G__36308 = cljs.core.count(c__4679__auto__);
var G__36309 = (0);
seq__36018 = G__36306;
chunk__36019 = G__36307;
count__36020 = G__36308;
i__36021 = G__36309;
continue;
} else {
var map__36030 = cljs.core.first(seq__36018__$1);
var map__36030__$1 = cljs.core.__destructure_map(map__36030);
var src = map__36030__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36031){var e_36310 = e36031;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36310);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36310.message)].join('')));
}

var G__36311 = cljs.core.next(seq__36018__$1);
var G__36312 = null;
var G__36313 = (0);
var G__36314 = (0);
seq__36018 = G__36311;
chunk__36019 = G__36312;
count__36020 = G__36313;
i__36021 = G__36314;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36032 = cljs.core.seq(js_requires);
var chunk__36033 = null;
var count__36034 = (0);
var i__36035 = (0);
while(true){
if((i__36035 < count__36034)){
var js_ns = chunk__36033.cljs$core$IIndexed$_nth$arity$2(null,i__36035);
var require_str_36315 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36315);


var G__36316 = seq__36032;
var G__36317 = chunk__36033;
var G__36318 = count__36034;
var G__36319 = (i__36035 + (1));
seq__36032 = G__36316;
chunk__36033 = G__36317;
count__36034 = G__36318;
i__36035 = G__36319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36032);
if(temp__5753__auto__){
var seq__36032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36032__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36032__$1);
var G__36320 = cljs.core.chunk_rest(seq__36032__$1);
var G__36321 = c__4679__auto__;
var G__36322 = cljs.core.count(c__4679__auto__);
var G__36323 = (0);
seq__36032 = G__36320;
chunk__36033 = G__36321;
count__36034 = G__36322;
i__36035 = G__36323;
continue;
} else {
var js_ns = cljs.core.first(seq__36032__$1);
var require_str_36324 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36324);


var G__36325 = cljs.core.next(seq__36032__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36032 = G__36325;
chunk__36033 = G__36326;
count__36034 = G__36327;
i__36035 = G__36328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36037){
var map__36038 = p__36037;
var map__36038__$1 = cljs.core.__destructure_map(map__36038);
var msg = map__36038__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36039(s__36040){
return (new cljs.core.LazySeq(null,(function (){
var s__36040__$1 = s__36040;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36040__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36045 = cljs.core.first(xs__6308__auto__);
var map__36045__$1 = cljs.core.__destructure_map(map__36045);
var src = map__36045__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36045__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36040__$1,map__36045,map__36045__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36038,map__36038__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36039_$_iter__36041(s__36042){
return (new cljs.core.LazySeq(null,((function (s__36040__$1,map__36045,map__36045__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36038,map__36038__$1,msg,info,reload_info){
return (function (){
var s__36042__$1 = s__36042;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36042__$1);
if(temp__5753__auto____$1){
var s__36042__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36042__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36042__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36044 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36043 = (0);
while(true){
if((i__36043 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36043);
cljs.core.chunk_append(b__36044,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36329 = (i__36043 + (1));
i__36043 = G__36329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36044),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36039_$_iter__36041(cljs.core.chunk_rest(s__36042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36044),null);
}
} else {
var warning = cljs.core.first(s__36042__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36039_$_iter__36041(cljs.core.rest(s__36042__$2)));
}
} else {
return null;
}
break;
}
});})(s__36040__$1,map__36045,map__36045__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36038,map__36038__$1,msg,info,reload_info))
,null,null));
});})(s__36040__$1,map__36045,map__36045__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36038,map__36038__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36039(cljs.core.rest(s__36040__$1)));
} else {
var G__36330 = cljs.core.rest(s__36040__$1);
s__36040__$1 = G__36330;
continue;
}
} else {
var G__36331 = cljs.core.rest(s__36040__$1);
s__36040__$1 = G__36331;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36046_36332 = cljs.core.seq(warnings);
var chunk__36047_36333 = null;
var count__36048_36334 = (0);
var i__36049_36335 = (0);
while(true){
if((i__36049_36335 < count__36048_36334)){
var map__36052_36336 = chunk__36047_36333.cljs$core$IIndexed$_nth$arity$2(null,i__36049_36335);
var map__36052_36337__$1 = cljs.core.__destructure_map(map__36052_36336);
var w_36338 = map__36052_36337__$1;
var msg_36339__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36337__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36342)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36340),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36341),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36339__$1)].join(''));


var G__36343 = seq__36046_36332;
var G__36344 = chunk__36047_36333;
var G__36345 = count__36048_36334;
var G__36346 = (i__36049_36335 + (1));
seq__36046_36332 = G__36343;
chunk__36047_36333 = G__36344;
count__36048_36334 = G__36345;
i__36049_36335 = G__36346;
continue;
} else {
var temp__5753__auto___36347 = cljs.core.seq(seq__36046_36332);
if(temp__5753__auto___36347){
var seq__36046_36348__$1 = temp__5753__auto___36347;
if(cljs.core.chunked_seq_QMARK_(seq__36046_36348__$1)){
var c__4679__auto___36349 = cljs.core.chunk_first(seq__36046_36348__$1);
var G__36350 = cljs.core.chunk_rest(seq__36046_36348__$1);
var G__36351 = c__4679__auto___36349;
var G__36352 = cljs.core.count(c__4679__auto___36349);
var G__36353 = (0);
seq__36046_36332 = G__36350;
chunk__36047_36333 = G__36351;
count__36048_36334 = G__36352;
i__36049_36335 = G__36353;
continue;
} else {
var map__36053_36354 = cljs.core.first(seq__36046_36348__$1);
var map__36053_36355__$1 = cljs.core.__destructure_map(map__36053_36354);
var w_36356 = map__36053_36355__$1;
var msg_36357__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053_36355__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053_36355__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053_36355__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053_36355__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36360)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36358),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36359),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36357__$1)].join(''));


var G__36361 = cljs.core.next(seq__36046_36348__$1);
var G__36362 = null;
var G__36363 = (0);
var G__36364 = (0);
seq__36046_36332 = G__36361;
chunk__36047_36333 = G__36362;
count__36048_36334 = G__36363;
i__36049_36335 = G__36364;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36036_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36036_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36054){
var map__36055 = p__36054;
var map__36055__$1 = cljs.core.__destructure_map(map__36055);
var msg = map__36055__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36056 = cljs.core.seq(updates);
var chunk__36058 = null;
var count__36059 = (0);
var i__36060 = (0);
while(true){
if((i__36060 < count__36059)){
var path = chunk__36058.cljs$core$IIndexed$_nth$arity$2(null,i__36060);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36170_36365 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36174_36366 = null;
var count__36175_36367 = (0);
var i__36176_36368 = (0);
while(true){
if((i__36176_36368 < count__36175_36367)){
var node_36369 = chunk__36174_36366.cljs$core$IIndexed$_nth$arity$2(null,i__36176_36368);
if(cljs.core.not(node_36369.shadow$old)){
var path_match_36370 = shadow.cljs.devtools.client.browser.match_paths(node_36369.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36370)){
var new_link_36371 = (function (){var G__36202 = node_36369.cloneNode(true);
G__36202.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36370),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36202;
})();
(node_36369.shadow$old = true);

(new_link_36371.onload = ((function (seq__36170_36365,chunk__36174_36366,count__36175_36367,i__36176_36368,seq__36056,chunk__36058,count__36059,i__36060,new_link_36371,path_match_36370,node_36369,path,map__36055,map__36055__$1,msg,updates,reload_info){
return (function (e){
var seq__36203_36372 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36205_36373 = null;
var count__36206_36374 = (0);
var i__36207_36375 = (0);
while(true){
if((i__36207_36375 < count__36206_36374)){
var map__36211_36376 = chunk__36205_36373.cljs$core$IIndexed$_nth$arity$2(null,i__36207_36375);
var map__36211_36377__$1 = cljs.core.__destructure_map(map__36211_36376);
var task_36378 = map__36211_36377__$1;
var fn_str_36379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211_36377__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211_36377__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36381 = goog.getObjectByName(fn_str_36379,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36380)].join(''));

(fn_obj_36381.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36381.cljs$core$IFn$_invoke$arity$2(path,new_link_36371) : fn_obj_36381.call(null,path,new_link_36371));


var G__36382 = seq__36203_36372;
var G__36383 = chunk__36205_36373;
var G__36384 = count__36206_36374;
var G__36385 = (i__36207_36375 + (1));
seq__36203_36372 = G__36382;
chunk__36205_36373 = G__36383;
count__36206_36374 = G__36384;
i__36207_36375 = G__36385;
continue;
} else {
var temp__5753__auto___36386 = cljs.core.seq(seq__36203_36372);
if(temp__5753__auto___36386){
var seq__36203_36387__$1 = temp__5753__auto___36386;
if(cljs.core.chunked_seq_QMARK_(seq__36203_36387__$1)){
var c__4679__auto___36388 = cljs.core.chunk_first(seq__36203_36387__$1);
var G__36389 = cljs.core.chunk_rest(seq__36203_36387__$1);
var G__36390 = c__4679__auto___36388;
var G__36391 = cljs.core.count(c__4679__auto___36388);
var G__36392 = (0);
seq__36203_36372 = G__36389;
chunk__36205_36373 = G__36390;
count__36206_36374 = G__36391;
i__36207_36375 = G__36392;
continue;
} else {
var map__36212_36393 = cljs.core.first(seq__36203_36387__$1);
var map__36212_36394__$1 = cljs.core.__destructure_map(map__36212_36393);
var task_36395 = map__36212_36394__$1;
var fn_str_36396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36212_36394__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36212_36394__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36398 = goog.getObjectByName(fn_str_36396,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36397)].join(''));

(fn_obj_36398.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36398.cljs$core$IFn$_invoke$arity$2(path,new_link_36371) : fn_obj_36398.call(null,path,new_link_36371));


var G__36399 = cljs.core.next(seq__36203_36387__$1);
var G__36400 = null;
var G__36401 = (0);
var G__36402 = (0);
seq__36203_36372 = G__36399;
chunk__36205_36373 = G__36400;
count__36206_36374 = G__36401;
i__36207_36375 = G__36402;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36369);
});})(seq__36170_36365,chunk__36174_36366,count__36175_36367,i__36176_36368,seq__36056,chunk__36058,count__36059,i__36060,new_link_36371,path_match_36370,node_36369,path,map__36055,map__36055__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36370], 0));

goog.dom.insertSiblingAfter(new_link_36371,node_36369);


var G__36403 = seq__36170_36365;
var G__36404 = chunk__36174_36366;
var G__36405 = count__36175_36367;
var G__36406 = (i__36176_36368 + (1));
seq__36170_36365 = G__36403;
chunk__36174_36366 = G__36404;
count__36175_36367 = G__36405;
i__36176_36368 = G__36406;
continue;
} else {
var G__36407 = seq__36170_36365;
var G__36408 = chunk__36174_36366;
var G__36409 = count__36175_36367;
var G__36410 = (i__36176_36368 + (1));
seq__36170_36365 = G__36407;
chunk__36174_36366 = G__36408;
count__36175_36367 = G__36409;
i__36176_36368 = G__36410;
continue;
}
} else {
var G__36411 = seq__36170_36365;
var G__36412 = chunk__36174_36366;
var G__36413 = count__36175_36367;
var G__36414 = (i__36176_36368 + (1));
seq__36170_36365 = G__36411;
chunk__36174_36366 = G__36412;
count__36175_36367 = G__36413;
i__36176_36368 = G__36414;
continue;
}
} else {
var temp__5753__auto___36415 = cljs.core.seq(seq__36170_36365);
if(temp__5753__auto___36415){
var seq__36170_36416__$1 = temp__5753__auto___36415;
if(cljs.core.chunked_seq_QMARK_(seq__36170_36416__$1)){
var c__4679__auto___36417 = cljs.core.chunk_first(seq__36170_36416__$1);
var G__36418 = cljs.core.chunk_rest(seq__36170_36416__$1);
var G__36419 = c__4679__auto___36417;
var G__36420 = cljs.core.count(c__4679__auto___36417);
var G__36421 = (0);
seq__36170_36365 = G__36418;
chunk__36174_36366 = G__36419;
count__36175_36367 = G__36420;
i__36176_36368 = G__36421;
continue;
} else {
var node_36422 = cljs.core.first(seq__36170_36416__$1);
if(cljs.core.not(node_36422.shadow$old)){
var path_match_36423 = shadow.cljs.devtools.client.browser.match_paths(node_36422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36423)){
var new_link_36424 = (function (){var G__36213 = node_36422.cloneNode(true);
G__36213.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36213;
})();
(node_36422.shadow$old = true);

(new_link_36424.onload = ((function (seq__36170_36365,chunk__36174_36366,count__36175_36367,i__36176_36368,seq__36056,chunk__36058,count__36059,i__36060,new_link_36424,path_match_36423,node_36422,seq__36170_36416__$1,temp__5753__auto___36415,path,map__36055,map__36055__$1,msg,updates,reload_info){
return (function (e){
var seq__36214_36425 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36216_36426 = null;
var count__36217_36427 = (0);
var i__36218_36428 = (0);
while(true){
if((i__36218_36428 < count__36217_36427)){
var map__36222_36429 = chunk__36216_36426.cljs$core$IIndexed$_nth$arity$2(null,i__36218_36428);
var map__36222_36430__$1 = cljs.core.__destructure_map(map__36222_36429);
var task_36431 = map__36222_36430__$1;
var fn_str_36432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222_36430__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222_36430__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36434 = goog.getObjectByName(fn_str_36432,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36433)].join(''));

(fn_obj_36434.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36434.cljs$core$IFn$_invoke$arity$2(path,new_link_36424) : fn_obj_36434.call(null,path,new_link_36424));


var G__36435 = seq__36214_36425;
var G__36436 = chunk__36216_36426;
var G__36437 = count__36217_36427;
var G__36438 = (i__36218_36428 + (1));
seq__36214_36425 = G__36435;
chunk__36216_36426 = G__36436;
count__36217_36427 = G__36437;
i__36218_36428 = G__36438;
continue;
} else {
var temp__5753__auto___36439__$1 = cljs.core.seq(seq__36214_36425);
if(temp__5753__auto___36439__$1){
var seq__36214_36440__$1 = temp__5753__auto___36439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36214_36440__$1)){
var c__4679__auto___36441 = cljs.core.chunk_first(seq__36214_36440__$1);
var G__36442 = cljs.core.chunk_rest(seq__36214_36440__$1);
var G__36443 = c__4679__auto___36441;
var G__36444 = cljs.core.count(c__4679__auto___36441);
var G__36445 = (0);
seq__36214_36425 = G__36442;
chunk__36216_36426 = G__36443;
count__36217_36427 = G__36444;
i__36218_36428 = G__36445;
continue;
} else {
var map__36223_36446 = cljs.core.first(seq__36214_36440__$1);
var map__36223_36447__$1 = cljs.core.__destructure_map(map__36223_36446);
var task_36448 = map__36223_36447__$1;
var fn_str_36449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36447__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36447__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36451 = goog.getObjectByName(fn_str_36449,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36450)].join(''));

(fn_obj_36451.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36451.cljs$core$IFn$_invoke$arity$2(path,new_link_36424) : fn_obj_36451.call(null,path,new_link_36424));


var G__36452 = cljs.core.next(seq__36214_36440__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__36214_36425 = G__36452;
chunk__36216_36426 = G__36453;
count__36217_36427 = G__36454;
i__36218_36428 = G__36455;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36422);
});})(seq__36170_36365,chunk__36174_36366,count__36175_36367,i__36176_36368,seq__36056,chunk__36058,count__36059,i__36060,new_link_36424,path_match_36423,node_36422,seq__36170_36416__$1,temp__5753__auto___36415,path,map__36055,map__36055__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36423], 0));

goog.dom.insertSiblingAfter(new_link_36424,node_36422);


var G__36456 = cljs.core.next(seq__36170_36416__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__36170_36365 = G__36456;
chunk__36174_36366 = G__36457;
count__36175_36367 = G__36458;
i__36176_36368 = G__36459;
continue;
} else {
var G__36460 = cljs.core.next(seq__36170_36416__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__36170_36365 = G__36460;
chunk__36174_36366 = G__36461;
count__36175_36367 = G__36462;
i__36176_36368 = G__36463;
continue;
}
} else {
var G__36464 = cljs.core.next(seq__36170_36416__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__36170_36365 = G__36464;
chunk__36174_36366 = G__36465;
count__36175_36367 = G__36466;
i__36176_36368 = G__36467;
continue;
}
}
} else {
}
}
break;
}


var G__36468 = seq__36056;
var G__36469 = chunk__36058;
var G__36470 = count__36059;
var G__36471 = (i__36060 + (1));
seq__36056 = G__36468;
chunk__36058 = G__36469;
count__36059 = G__36470;
i__36060 = G__36471;
continue;
} else {
var G__36472 = seq__36056;
var G__36473 = chunk__36058;
var G__36474 = count__36059;
var G__36475 = (i__36060 + (1));
seq__36056 = G__36472;
chunk__36058 = G__36473;
count__36059 = G__36474;
i__36060 = G__36475;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36056);
if(temp__5753__auto__){
var seq__36056__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36056__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36056__$1);
var G__36476 = cljs.core.chunk_rest(seq__36056__$1);
var G__36477 = c__4679__auto__;
var G__36478 = cljs.core.count(c__4679__auto__);
var G__36479 = (0);
seq__36056 = G__36476;
chunk__36058 = G__36477;
count__36059 = G__36478;
i__36060 = G__36479;
continue;
} else {
var path = cljs.core.first(seq__36056__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36224_36480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36228_36481 = null;
var count__36229_36482 = (0);
var i__36230_36483 = (0);
while(true){
if((i__36230_36483 < count__36229_36482)){
var node_36484 = chunk__36228_36481.cljs$core$IIndexed$_nth$arity$2(null,i__36230_36483);
if(cljs.core.not(node_36484.shadow$old)){
var path_match_36485 = shadow.cljs.devtools.client.browser.match_paths(node_36484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36485)){
var new_link_36486 = (function (){var G__36256 = node_36484.cloneNode(true);
G__36256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36256;
})();
(node_36484.shadow$old = true);

(new_link_36486.onload = ((function (seq__36224_36480,chunk__36228_36481,count__36229_36482,i__36230_36483,seq__36056,chunk__36058,count__36059,i__36060,new_link_36486,path_match_36485,node_36484,path,seq__36056__$1,temp__5753__auto__,map__36055,map__36055__$1,msg,updates,reload_info){
return (function (e){
var seq__36257_36487 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36259_36488 = null;
var count__36260_36489 = (0);
var i__36261_36490 = (0);
while(true){
if((i__36261_36490 < count__36260_36489)){
var map__36265_36491 = chunk__36259_36488.cljs$core$IIndexed$_nth$arity$2(null,i__36261_36490);
var map__36265_36492__$1 = cljs.core.__destructure_map(map__36265_36491);
var task_36493 = map__36265_36492__$1;
var fn_str_36494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265_36492__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265_36492__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36496 = goog.getObjectByName(fn_str_36494,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36495)].join(''));

(fn_obj_36496.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36496.cljs$core$IFn$_invoke$arity$2(path,new_link_36486) : fn_obj_36496.call(null,path,new_link_36486));


var G__36497 = seq__36257_36487;
var G__36498 = chunk__36259_36488;
var G__36499 = count__36260_36489;
var G__36500 = (i__36261_36490 + (1));
seq__36257_36487 = G__36497;
chunk__36259_36488 = G__36498;
count__36260_36489 = G__36499;
i__36261_36490 = G__36500;
continue;
} else {
var temp__5753__auto___36501__$1 = cljs.core.seq(seq__36257_36487);
if(temp__5753__auto___36501__$1){
var seq__36257_36502__$1 = temp__5753__auto___36501__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36257_36502__$1)){
var c__4679__auto___36503 = cljs.core.chunk_first(seq__36257_36502__$1);
var G__36504 = cljs.core.chunk_rest(seq__36257_36502__$1);
var G__36505 = c__4679__auto___36503;
var G__36506 = cljs.core.count(c__4679__auto___36503);
var G__36507 = (0);
seq__36257_36487 = G__36504;
chunk__36259_36488 = G__36505;
count__36260_36489 = G__36506;
i__36261_36490 = G__36507;
continue;
} else {
var map__36266_36508 = cljs.core.first(seq__36257_36502__$1);
var map__36266_36509__$1 = cljs.core.__destructure_map(map__36266_36508);
var task_36510 = map__36266_36509__$1;
var fn_str_36511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266_36509__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266_36509__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36513 = goog.getObjectByName(fn_str_36511,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36512)].join(''));

(fn_obj_36513.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36513.cljs$core$IFn$_invoke$arity$2(path,new_link_36486) : fn_obj_36513.call(null,path,new_link_36486));


var G__36514 = cljs.core.next(seq__36257_36502__$1);
var G__36515 = null;
var G__36516 = (0);
var G__36517 = (0);
seq__36257_36487 = G__36514;
chunk__36259_36488 = G__36515;
count__36260_36489 = G__36516;
i__36261_36490 = G__36517;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36484);
});})(seq__36224_36480,chunk__36228_36481,count__36229_36482,i__36230_36483,seq__36056,chunk__36058,count__36059,i__36060,new_link_36486,path_match_36485,node_36484,path,seq__36056__$1,temp__5753__auto__,map__36055,map__36055__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36485], 0));

goog.dom.insertSiblingAfter(new_link_36486,node_36484);


var G__36518 = seq__36224_36480;
var G__36519 = chunk__36228_36481;
var G__36520 = count__36229_36482;
var G__36521 = (i__36230_36483 + (1));
seq__36224_36480 = G__36518;
chunk__36228_36481 = G__36519;
count__36229_36482 = G__36520;
i__36230_36483 = G__36521;
continue;
} else {
var G__36522 = seq__36224_36480;
var G__36523 = chunk__36228_36481;
var G__36524 = count__36229_36482;
var G__36525 = (i__36230_36483 + (1));
seq__36224_36480 = G__36522;
chunk__36228_36481 = G__36523;
count__36229_36482 = G__36524;
i__36230_36483 = G__36525;
continue;
}
} else {
var G__36526 = seq__36224_36480;
var G__36527 = chunk__36228_36481;
var G__36528 = count__36229_36482;
var G__36529 = (i__36230_36483 + (1));
seq__36224_36480 = G__36526;
chunk__36228_36481 = G__36527;
count__36229_36482 = G__36528;
i__36230_36483 = G__36529;
continue;
}
} else {
var temp__5753__auto___36530__$1 = cljs.core.seq(seq__36224_36480);
if(temp__5753__auto___36530__$1){
var seq__36224_36531__$1 = temp__5753__auto___36530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36224_36531__$1)){
var c__4679__auto___36532 = cljs.core.chunk_first(seq__36224_36531__$1);
var G__36533 = cljs.core.chunk_rest(seq__36224_36531__$1);
var G__36534 = c__4679__auto___36532;
var G__36535 = cljs.core.count(c__4679__auto___36532);
var G__36536 = (0);
seq__36224_36480 = G__36533;
chunk__36228_36481 = G__36534;
count__36229_36482 = G__36535;
i__36230_36483 = G__36536;
continue;
} else {
var node_36537 = cljs.core.first(seq__36224_36531__$1);
if(cljs.core.not(node_36537.shadow$old)){
var path_match_36538 = shadow.cljs.devtools.client.browser.match_paths(node_36537.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36538)){
var new_link_36539 = (function (){var G__36267 = node_36537.cloneNode(true);
G__36267.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36538),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36267;
})();
(node_36537.shadow$old = true);

(new_link_36539.onload = ((function (seq__36224_36480,chunk__36228_36481,count__36229_36482,i__36230_36483,seq__36056,chunk__36058,count__36059,i__36060,new_link_36539,path_match_36538,node_36537,seq__36224_36531__$1,temp__5753__auto___36530__$1,path,seq__36056__$1,temp__5753__auto__,map__36055,map__36055__$1,msg,updates,reload_info){
return (function (e){
var seq__36268_36540 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36270_36541 = null;
var count__36271_36542 = (0);
var i__36272_36543 = (0);
while(true){
if((i__36272_36543 < count__36271_36542)){
var map__36276_36544 = chunk__36270_36541.cljs$core$IIndexed$_nth$arity$2(null,i__36272_36543);
var map__36276_36545__$1 = cljs.core.__destructure_map(map__36276_36544);
var task_36546 = map__36276_36545__$1;
var fn_str_36547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276_36545__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276_36545__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36549 = goog.getObjectByName(fn_str_36547,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36548)].join(''));

(fn_obj_36549.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36549.cljs$core$IFn$_invoke$arity$2(path,new_link_36539) : fn_obj_36549.call(null,path,new_link_36539));


var G__36550 = seq__36268_36540;
var G__36551 = chunk__36270_36541;
var G__36552 = count__36271_36542;
var G__36553 = (i__36272_36543 + (1));
seq__36268_36540 = G__36550;
chunk__36270_36541 = G__36551;
count__36271_36542 = G__36552;
i__36272_36543 = G__36553;
continue;
} else {
var temp__5753__auto___36554__$2 = cljs.core.seq(seq__36268_36540);
if(temp__5753__auto___36554__$2){
var seq__36268_36555__$1 = temp__5753__auto___36554__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36268_36555__$1)){
var c__4679__auto___36556 = cljs.core.chunk_first(seq__36268_36555__$1);
var G__36557 = cljs.core.chunk_rest(seq__36268_36555__$1);
var G__36558 = c__4679__auto___36556;
var G__36559 = cljs.core.count(c__4679__auto___36556);
var G__36560 = (0);
seq__36268_36540 = G__36557;
chunk__36270_36541 = G__36558;
count__36271_36542 = G__36559;
i__36272_36543 = G__36560;
continue;
} else {
var map__36277_36561 = cljs.core.first(seq__36268_36555__$1);
var map__36277_36562__$1 = cljs.core.__destructure_map(map__36277_36561);
var task_36563 = map__36277_36562__$1;
var fn_str_36564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277_36562__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277_36562__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36566 = goog.getObjectByName(fn_str_36564,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36565)].join(''));

(fn_obj_36566.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36566.cljs$core$IFn$_invoke$arity$2(path,new_link_36539) : fn_obj_36566.call(null,path,new_link_36539));


var G__36567 = cljs.core.next(seq__36268_36555__$1);
var G__36568 = null;
var G__36569 = (0);
var G__36570 = (0);
seq__36268_36540 = G__36567;
chunk__36270_36541 = G__36568;
count__36271_36542 = G__36569;
i__36272_36543 = G__36570;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36537);
});})(seq__36224_36480,chunk__36228_36481,count__36229_36482,i__36230_36483,seq__36056,chunk__36058,count__36059,i__36060,new_link_36539,path_match_36538,node_36537,seq__36224_36531__$1,temp__5753__auto___36530__$1,path,seq__36056__$1,temp__5753__auto__,map__36055,map__36055__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36538], 0));

goog.dom.insertSiblingAfter(new_link_36539,node_36537);


var G__36571 = cljs.core.next(seq__36224_36531__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36224_36480 = G__36571;
chunk__36228_36481 = G__36572;
count__36229_36482 = G__36573;
i__36230_36483 = G__36574;
continue;
} else {
var G__36575 = cljs.core.next(seq__36224_36531__$1);
var G__36576 = null;
var G__36577 = (0);
var G__36578 = (0);
seq__36224_36480 = G__36575;
chunk__36228_36481 = G__36576;
count__36229_36482 = G__36577;
i__36230_36483 = G__36578;
continue;
}
} else {
var G__36579 = cljs.core.next(seq__36224_36531__$1);
var G__36580 = null;
var G__36581 = (0);
var G__36582 = (0);
seq__36224_36480 = G__36579;
chunk__36228_36481 = G__36580;
count__36229_36482 = G__36581;
i__36230_36483 = G__36582;
continue;
}
}
} else {
}
}
break;
}


var G__36583 = cljs.core.next(seq__36056__$1);
var G__36584 = null;
var G__36585 = (0);
var G__36586 = (0);
seq__36056 = G__36583;
chunk__36058 = G__36584;
count__36059 = G__36585;
i__36060 = G__36586;
continue;
} else {
var G__36587 = cljs.core.next(seq__36056__$1);
var G__36588 = null;
var G__36589 = (0);
var G__36590 = (0);
seq__36056 = G__36587;
chunk__36058 = G__36588;
count__36059 = G__36589;
i__36060 = G__36590;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36278){
var map__36279 = p__36278;
var map__36279__$1 = cljs.core.__destructure_map(map__36279);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36280){
var map__36281 = p__36280;
var map__36281__$1 = cljs.core.__destructure_map(map__36281);
var _ = map__36281__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36281__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36282,done,error){
var map__36283 = p__36282;
var map__36283__$1 = cljs.core.__destructure_map(map__36283);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36283__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36284,done,error){
var map__36285 = p__36284;
var map__36285__$1 = cljs.core.__destructure_map(map__36285);
var msg = map__36285__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36285__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36285__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36285__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36286){
var map__36287 = p__36286;
var map__36287__$1 = cljs.core.__destructure_map(map__36287);
var src = map__36287__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36287__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36288 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36288) : done.call(null,G__36288));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36289){
var map__36290 = p__36289;
var map__36290__$1 = cljs.core.__destructure_map(map__36290);
var msg__$1 = map__36290__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36290__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36291){var ex = e36291;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36292){
var map__36293 = p__36292;
var map__36293__$1 = cljs.core.__destructure_map(map__36293);
var env = map__36293__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36293__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36294){
var map__36295 = p__36294;
var map__36295__$1 = cljs.core.__destructure_map(map__36295);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36295__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36295__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36296){
var map__36297 = p__36296;
var map__36297__$1 = cljs.core.__destructure_map(map__36297);
var svc = map__36297__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
