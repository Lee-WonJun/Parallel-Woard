goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33829){
var map__33830 = p__33829;
var map__33830__$1 = cljs.core.__destructure_map(map__33830);
var m = map__33830__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33830__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33830__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33833_34241 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33834_34242 = null;
var count__33835_34243 = (0);
var i__33836_34244 = (0);
while(true){
if((i__33836_34244 < count__33835_34243)){
var f_34245 = chunk__33834_34242.cljs$core$IIndexed$_nth$arity$2(null,i__33836_34244);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34245], 0));


var G__34246 = seq__33833_34241;
var G__34247 = chunk__33834_34242;
var G__34248 = count__33835_34243;
var G__34249 = (i__33836_34244 + (1));
seq__33833_34241 = G__34246;
chunk__33834_34242 = G__34247;
count__33835_34243 = G__34248;
i__33836_34244 = G__34249;
continue;
} else {
var temp__5753__auto___34250 = cljs.core.seq(seq__33833_34241);
if(temp__5753__auto___34250){
var seq__33833_34251__$1 = temp__5753__auto___34250;
if(cljs.core.chunked_seq_QMARK_(seq__33833_34251__$1)){
var c__4679__auto___34252 = cljs.core.chunk_first(seq__33833_34251__$1);
var G__34253 = cljs.core.chunk_rest(seq__33833_34251__$1);
var G__34254 = c__4679__auto___34252;
var G__34255 = cljs.core.count(c__4679__auto___34252);
var G__34256 = (0);
seq__33833_34241 = G__34253;
chunk__33834_34242 = G__34254;
count__33835_34243 = G__34255;
i__33836_34244 = G__34256;
continue;
} else {
var f_34257 = cljs.core.first(seq__33833_34251__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34257], 0));


var G__34258 = cljs.core.next(seq__33833_34251__$1);
var G__34259 = null;
var G__34260 = (0);
var G__34261 = (0);
seq__33833_34241 = G__34258;
chunk__33834_34242 = G__34259;
count__33835_34243 = G__34260;
i__33836_34244 = G__34261;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34262 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34262], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34262)))?cljs.core.second(arglists_34262):arglists_34262)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33861_34264 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33862_34265 = null;
var count__33863_34266 = (0);
var i__33864_34267 = (0);
while(true){
if((i__33864_34267 < count__33863_34266)){
var vec__33887_34268 = chunk__33862_34265.cljs$core$IIndexed$_nth$arity$2(null,i__33864_34267);
var name_34269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33887_34268,(0),null);
var map__33890_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33887_34268,(1),null);
var map__33890_34271__$1 = cljs.core.__destructure_map(map__33890_34270);
var doc_34272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33890_34271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33890_34271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34269], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34273], 0));

if(cljs.core.truth_(doc_34272)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34272], 0));
} else {
}


var G__34274 = seq__33861_34264;
var G__34275 = chunk__33862_34265;
var G__34276 = count__33863_34266;
var G__34277 = (i__33864_34267 + (1));
seq__33861_34264 = G__34274;
chunk__33862_34265 = G__34275;
count__33863_34266 = G__34276;
i__33864_34267 = G__34277;
continue;
} else {
var temp__5753__auto___34278 = cljs.core.seq(seq__33861_34264);
if(temp__5753__auto___34278){
var seq__33861_34279__$1 = temp__5753__auto___34278;
if(cljs.core.chunked_seq_QMARK_(seq__33861_34279__$1)){
var c__4679__auto___34280 = cljs.core.chunk_first(seq__33861_34279__$1);
var G__34281 = cljs.core.chunk_rest(seq__33861_34279__$1);
var G__34282 = c__4679__auto___34280;
var G__34283 = cljs.core.count(c__4679__auto___34280);
var G__34284 = (0);
seq__33861_34264 = G__34281;
chunk__33862_34265 = G__34282;
count__33863_34266 = G__34283;
i__33864_34267 = G__34284;
continue;
} else {
var vec__33900_34285 = cljs.core.first(seq__33861_34279__$1);
var name_34286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33900_34285,(0),null);
var map__33903_34287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33900_34285,(1),null);
var map__33903_34288__$1 = cljs.core.__destructure_map(map__33903_34287);
var doc_34289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33903_34288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33903_34288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34286], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34290], 0));

if(cljs.core.truth_(doc_34289)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34289], 0));
} else {
}


var G__34297 = cljs.core.next(seq__33861_34279__$1);
var G__34298 = null;
var G__34299 = (0);
var G__34300 = (0);
seq__33861_34264 = G__34297;
chunk__33862_34265 = G__34298;
count__33863_34266 = G__34299;
i__33864_34267 = G__34300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__33916 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33917 = null;
var count__33918 = (0);
var i__33919 = (0);
while(true){
if((i__33919 < count__33918)){
var role = chunk__33917.cljs$core$IIndexed$_nth$arity$2(null,i__33919);
var temp__5753__auto___34301__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34301__$1)){
var spec_34302 = temp__5753__auto___34301__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34302)], 0));
} else {
}


var G__34303 = seq__33916;
var G__34304 = chunk__33917;
var G__34305 = count__33918;
var G__34306 = (i__33919 + (1));
seq__33916 = G__34303;
chunk__33917 = G__34304;
count__33918 = G__34305;
i__33919 = G__34306;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__33916);
if(temp__5753__auto____$1){
var seq__33916__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33916__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33916__$1);
var G__34309 = cljs.core.chunk_rest(seq__33916__$1);
var G__34310 = c__4679__auto__;
var G__34311 = cljs.core.count(c__4679__auto__);
var G__34312 = (0);
seq__33916 = G__34309;
chunk__33917 = G__34310;
count__33918 = G__34311;
i__33919 = G__34312;
continue;
} else {
var role = cljs.core.first(seq__33916__$1);
var temp__5753__auto___34315__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34315__$2)){
var spec_34316 = temp__5753__auto___34315__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34316)], 0));
} else {
}


var G__34317 = cljs.core.next(seq__33916__$1);
var G__34318 = null;
var G__34319 = (0);
var G__34320 = (0);
seq__33916 = G__34317;
chunk__33917 = G__34318;
count__33918 = G__34319;
i__33919 = G__34320;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34325 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34326 = cljs.core.ex_cause(t);
via = G__34325;
t = G__34326;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34031 = datafied_throwable;
var map__34031__$1 = cljs.core.__destructure_map(map__34031);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34031__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34031__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34031__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34032 = cljs.core.last(via);
var map__34032__$1 = cljs.core.__destructure_map(map__34032);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34032__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34032__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34033 = data;
var map__34033__$1 = cljs.core.__destructure_map(map__34033);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34033__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34033__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34033__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34034 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34034__$1 = cljs.core.__destructure_map(map__34034);
var top_data = map__34034__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34047 = phase;
var G__34047__$1 = (((G__34047 instanceof cljs.core.Keyword))?G__34047.fqn:null);
switch (G__34047__$1) {
case "read-source":
var map__34061 = data;
var map__34061__$1 = cljs.core.__destructure_map(map__34061);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34061__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34061__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34067 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34067__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34067,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34067);
var G__34067__$2 = (cljs.core.truth_((function (){var fexpr__34068 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34068.cljs$core$IFn$_invoke$arity$1 ? fexpr__34068.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34068.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34067__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34067__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34067__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34079 = top_data;
var G__34079__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34079,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34079);
var G__34079__$2 = (cljs.core.truth_((function (){var fexpr__34081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34081.cljs$core$IFn$_invoke$arity$1 ? fexpr__34081.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34081.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34079__$1);
var G__34079__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34079__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34079__$2);
var G__34079__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34079__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34079__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34079__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34079__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34088 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(3),null);
var G__34093 = top_data;
var G__34093__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34093,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34093);
var G__34093__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34093__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34093__$1);
var G__34093__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34093__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34093__$2);
var G__34093__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34093__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34093__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34093__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34093__$4;
}

break;
case "execution":
var vec__34100 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34015_SHARP_){
var or__4253__auto__ = (p1__34015_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34109 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34109.cljs$core$IFn$_invoke$arity$1 ? fexpr__34109.cljs$core$IFn$_invoke$arity$1(p1__34015_SHARP_) : fexpr__34109.call(null,p1__34015_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34113 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34113__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34113,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34113);
var G__34113__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34113__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34113__$1);
var G__34113__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34113__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34113__$2);
var G__34113__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34113__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34113__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34113__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34113__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34047__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34130){
var map__34131 = p__34130;
var map__34131__$1 = cljs.core.__destructure_map(map__34131);
var triage_data = map__34131__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34131__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34153 = phase;
var G__34153__$1 = (((G__34153 instanceof cljs.core.Keyword))?G__34153.fqn:null);
switch (G__34153__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34159 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34161 = loc;
var G__34162 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34165_34383 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34166_34384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34167_34385 = true;
var _STAR_print_fn_STAR__temp_val__34168_34386 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34167_34385);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34168_34386);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34125_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34125_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34166_34384);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34165_34383);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34159,G__34160,G__34161,G__34162) : format.call(null,G__34159,G__34160,G__34161,G__34162));

break;
case "macroexpansion":
var G__34187 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34188 = cause_type;
var G__34189 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34190 = loc;
var G__34191 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34187,G__34188,G__34189,G__34190,G__34191) : format.call(null,G__34187,G__34188,G__34189,G__34190,G__34191));

break;
case "compile-syntax-check":
var G__34193 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34194 = cause_type;
var G__34195 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34196 = loc;
var G__34197 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34193,G__34194,G__34195,G__34196,G__34197) : format.call(null,G__34193,G__34194,G__34195,G__34196,G__34197));

break;
case "compilation":
var G__34202 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34203 = cause_type;
var G__34204 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34205 = loc;
var G__34206 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34202,G__34203,G__34204,G__34205,G__34206) : format.call(null,G__34202,G__34203,G__34204,G__34205,G__34206));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34208 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34211 = symbol;
var G__34212 = loc;
var G__34213 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34216_34392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34217_34393 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34218_34394 = true;
var _STAR_print_fn_STAR__temp_val__34219_34395 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34218_34394);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34219_34395);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34128_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34128_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34217_34393);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34216_34392);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34208,G__34211,G__34212,G__34213) : format.call(null,G__34208,G__34211,G__34212,G__34213));
} else {
var G__34222 = "Execution error%s at %s(%s).\n%s\n";
var G__34223 = cause_type;
var G__34224 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34225 = loc;
var G__34226 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34222,G__34223,G__34224,G__34225,G__34226) : format.call(null,G__34222,G__34223,G__34224,G__34225,G__34226));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34153__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
