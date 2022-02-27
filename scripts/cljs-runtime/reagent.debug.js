goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26739__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26740__i = 0, G__26740__a = new Array(arguments.length -  0);
while (G__26740__i < G__26740__a.length) {G__26740__a[G__26740__i] = arguments[G__26740__i + 0]; ++G__26740__i;}
  args = new cljs.core.IndexedSeq(G__26740__a,0,null);
} 
return G__26739__delegate.call(this,args);};
G__26739.cljs$lang$maxFixedArity = 0;
G__26739.cljs$lang$applyTo = (function (arglist__26741){
var args = cljs.core.seq(arglist__26741);
return G__26739__delegate(args);
});
G__26739.cljs$core$IFn$_invoke$arity$variadic = G__26739__delegate;
return G__26739;
})()
);

(o.error = (function() { 
var G__26743__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26745__i = 0, G__26745__a = new Array(arguments.length -  0);
while (G__26745__i < G__26745__a.length) {G__26745__a[G__26745__i] = arguments[G__26745__i + 0]; ++G__26745__i;}
  args = new cljs.core.IndexedSeq(G__26745__a,0,null);
} 
return G__26743__delegate.call(this,args);};
G__26743.cljs$lang$maxFixedArity = 0;
G__26743.cljs$lang$applyTo = (function (arglist__26746){
var args = cljs.core.seq(arglist__26746);
return G__26743__delegate(args);
});
G__26743.cljs$core$IFn$_invoke$arity$variadic = G__26743__delegate;
return G__26743;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
