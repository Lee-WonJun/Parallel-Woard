goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34985 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34985(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34986 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34986(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33708 = coll;
var G__33709 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33708,G__33709) : shadow.dom.lazy_native_coll_seq.call(null,G__33708,G__33709));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33729 = arguments.length;
switch (G__33729) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33740 = arguments.length;
switch (G__33740) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33745 = arguments.length;
switch (G__33745) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33757 = arguments.length;
switch (G__33757) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33788 = arguments.length;
switch (G__33788) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33800 = arguments.length;
switch (G__33800) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33812){if((e33812 instanceof Object)){
var e = e33812;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33812;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33824 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33825 = null;
var count__33826 = (0);
var i__33827 = (0);
while(true){
if((i__33827 < count__33826)){
var el = chunk__33825.cljs$core$IIndexed$_nth$arity$2(null,i__33827);
var handler_34997__$1 = ((function (seq__33824,chunk__33825,count__33826,i__33827,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33824,chunk__33825,count__33826,i__33827,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34997__$1);


var G__34999 = seq__33824;
var G__35000 = chunk__33825;
var G__35001 = count__33826;
var G__35002 = (i__33827 + (1));
seq__33824 = G__34999;
chunk__33825 = G__35000;
count__33826 = G__35001;
i__33827 = G__35002;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33824);
if(temp__5753__auto__){
var seq__33824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33824__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33824__$1);
var G__35003 = cljs.core.chunk_rest(seq__33824__$1);
var G__35004 = c__4679__auto__;
var G__35005 = cljs.core.count(c__4679__auto__);
var G__35006 = (0);
seq__33824 = G__35003;
chunk__33825 = G__35004;
count__33826 = G__35005;
i__33827 = G__35006;
continue;
} else {
var el = cljs.core.first(seq__33824__$1);
var handler_35007__$1 = ((function (seq__33824,chunk__33825,count__33826,i__33827,el,seq__33824__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33824,chunk__33825,count__33826,i__33827,el,seq__33824__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35007__$1);


var G__35009 = cljs.core.next(seq__33824__$1);
var G__35010 = null;
var G__35011 = (0);
var G__35012 = (0);
seq__33824 = G__35009;
chunk__33825 = G__35010;
count__33826 = G__35011;
i__33827 = G__35012;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33860 = arguments.length;
switch (G__33860) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33892 = cljs.core.seq(events);
var chunk__33893 = null;
var count__33894 = (0);
var i__33895 = (0);
while(true){
if((i__33895 < count__33894)){
var vec__33912 = chunk__33893.cljs$core$IIndexed$_nth$arity$2(null,i__33895);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33912,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35014 = seq__33892;
var G__35015 = chunk__33893;
var G__35016 = count__33894;
var G__35017 = (i__33895 + (1));
seq__33892 = G__35014;
chunk__33893 = G__35015;
count__33894 = G__35016;
i__33895 = G__35017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33892);
if(temp__5753__auto__){
var seq__33892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33892__$1);
var G__35018 = cljs.core.chunk_rest(seq__33892__$1);
var G__35019 = c__4679__auto__;
var G__35020 = cljs.core.count(c__4679__auto__);
var G__35021 = (0);
seq__33892 = G__35018;
chunk__33893 = G__35019;
count__33894 = G__35020;
i__33895 = G__35021;
continue;
} else {
var vec__33922 = cljs.core.first(seq__33892__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33922,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35022 = cljs.core.next(seq__33892__$1);
var G__35023 = null;
var G__35024 = (0);
var G__35025 = (0);
seq__33892 = G__35022;
chunk__33893 = G__35023;
count__33894 = G__35024;
i__33895 = G__35025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33931 = cljs.core.seq(styles);
var chunk__33932 = null;
var count__33933 = (0);
var i__33934 = (0);
while(true){
if((i__33934 < count__33933)){
var vec__33953 = chunk__33932.cljs$core$IIndexed$_nth$arity$2(null,i__33934);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33953,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35027 = seq__33931;
var G__35028 = chunk__33932;
var G__35029 = count__33933;
var G__35030 = (i__33934 + (1));
seq__33931 = G__35027;
chunk__33932 = G__35028;
count__33933 = G__35029;
i__33934 = G__35030;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33931);
if(temp__5753__auto__){
var seq__33931__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33931__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33931__$1);
var G__35031 = cljs.core.chunk_rest(seq__33931__$1);
var G__35032 = c__4679__auto__;
var G__35033 = cljs.core.count(c__4679__auto__);
var G__35034 = (0);
seq__33931 = G__35031;
chunk__33932 = G__35032;
count__33933 = G__35033;
i__33934 = G__35034;
continue;
} else {
var vec__33958 = cljs.core.first(seq__33931__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35035 = cljs.core.next(seq__33931__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__33931 = G__35035;
chunk__33932 = G__35036;
count__33933 = G__35037;
i__33934 = G__35038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33984_35039 = key;
var G__33984_35040__$1 = (((G__33984_35039 instanceof cljs.core.Keyword))?G__33984_35039.fqn:null);
switch (G__33984_35040__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35045 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35045,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35045,"aria-");
}
})())){
el.setAttribute(ks_35045,value);
} else {
(el[ks_35045] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34098){
var map__34099 = p__34098;
var map__34099__$1 = cljs.core.__destructure_map(map__34099);
var props = map__34099__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34099__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34104 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34112 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34112,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34112;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34118 = arguments.length;
switch (G__34118) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34139){
var vec__34141 = p__34139;
var seq__34142 = cljs.core.seq(vec__34141);
var first__34143 = cljs.core.first(seq__34142);
var seq__34142__$1 = cljs.core.next(seq__34142);
var nn = first__34143;
var first__34143__$1 = cljs.core.first(seq__34142__$1);
var seq__34142__$2 = cljs.core.next(seq__34142__$1);
var np = first__34143__$1;
var nc = seq__34142__$2;
var node = vec__34141;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34151 = nn;
var G__34152 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34151,G__34152) : create_fn.call(null,G__34151,G__34152));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34157 = nn;
var G__34158 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34157,G__34158) : create_fn.call(null,G__34157,G__34158));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34171 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34171,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34171,(1),null);
var seq__34174_35054 = cljs.core.seq(node_children);
var chunk__34175_35055 = null;
var count__34176_35056 = (0);
var i__34177_35057 = (0);
while(true){
if((i__34177_35057 < count__34176_35056)){
var child_struct_35058 = chunk__34175_35055.cljs$core$IIndexed$_nth$arity$2(null,i__34177_35057);
var children_35059 = shadow.dom.dom_node(child_struct_35058);
if(cljs.core.seq_QMARK_(children_35059)){
var seq__34291_35061 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35059));
var chunk__34293_35062 = null;
var count__34294_35063 = (0);
var i__34295_35064 = (0);
while(true){
if((i__34295_35064 < count__34294_35063)){
var child_35065 = chunk__34293_35062.cljs$core$IIndexed$_nth$arity$2(null,i__34295_35064);
if(cljs.core.truth_(child_35065)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35065);


var G__35066 = seq__34291_35061;
var G__35067 = chunk__34293_35062;
var G__35068 = count__34294_35063;
var G__35069 = (i__34295_35064 + (1));
seq__34291_35061 = G__35066;
chunk__34293_35062 = G__35067;
count__34294_35063 = G__35068;
i__34295_35064 = G__35069;
continue;
} else {
var G__35070 = seq__34291_35061;
var G__35071 = chunk__34293_35062;
var G__35072 = count__34294_35063;
var G__35073 = (i__34295_35064 + (1));
seq__34291_35061 = G__35070;
chunk__34293_35062 = G__35071;
count__34294_35063 = G__35072;
i__34295_35064 = G__35073;
continue;
}
} else {
var temp__5753__auto___35074 = cljs.core.seq(seq__34291_35061);
if(temp__5753__auto___35074){
var seq__34291_35075__$1 = temp__5753__auto___35074;
if(cljs.core.chunked_seq_QMARK_(seq__34291_35075__$1)){
var c__4679__auto___35076 = cljs.core.chunk_first(seq__34291_35075__$1);
var G__35077 = cljs.core.chunk_rest(seq__34291_35075__$1);
var G__35078 = c__4679__auto___35076;
var G__35079 = cljs.core.count(c__4679__auto___35076);
var G__35080 = (0);
seq__34291_35061 = G__35077;
chunk__34293_35062 = G__35078;
count__34294_35063 = G__35079;
i__34295_35064 = G__35080;
continue;
} else {
var child_35081 = cljs.core.first(seq__34291_35075__$1);
if(cljs.core.truth_(child_35081)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35081);


var G__35082 = cljs.core.next(seq__34291_35075__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__34291_35061 = G__35082;
chunk__34293_35062 = G__35083;
count__34294_35063 = G__35084;
i__34295_35064 = G__35085;
continue;
} else {
var G__35086 = cljs.core.next(seq__34291_35075__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__34291_35061 = G__35086;
chunk__34293_35062 = G__35087;
count__34294_35063 = G__35088;
i__34295_35064 = G__35089;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35059);
}


var G__35090 = seq__34174_35054;
var G__35091 = chunk__34175_35055;
var G__35092 = count__34176_35056;
var G__35093 = (i__34177_35057 + (1));
seq__34174_35054 = G__35090;
chunk__34175_35055 = G__35091;
count__34176_35056 = G__35092;
i__34177_35057 = G__35093;
continue;
} else {
var temp__5753__auto___35094 = cljs.core.seq(seq__34174_35054);
if(temp__5753__auto___35094){
var seq__34174_35095__$1 = temp__5753__auto___35094;
if(cljs.core.chunked_seq_QMARK_(seq__34174_35095__$1)){
var c__4679__auto___35096 = cljs.core.chunk_first(seq__34174_35095__$1);
var G__35097 = cljs.core.chunk_rest(seq__34174_35095__$1);
var G__35098 = c__4679__auto___35096;
var G__35099 = cljs.core.count(c__4679__auto___35096);
var G__35100 = (0);
seq__34174_35054 = G__35097;
chunk__34175_35055 = G__35098;
count__34176_35056 = G__35099;
i__34177_35057 = G__35100;
continue;
} else {
var child_struct_35101 = cljs.core.first(seq__34174_35095__$1);
var children_35102 = shadow.dom.dom_node(child_struct_35101);
if(cljs.core.seq_QMARK_(children_35102)){
var seq__34343_35103 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35102));
var chunk__34348_35104 = null;
var count__34349_35105 = (0);
var i__34350_35106 = (0);
while(true){
if((i__34350_35106 < count__34349_35105)){
var child_35107 = chunk__34348_35104.cljs$core$IIndexed$_nth$arity$2(null,i__34350_35106);
if(cljs.core.truth_(child_35107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35107);


var G__35108 = seq__34343_35103;
var G__35109 = chunk__34348_35104;
var G__35110 = count__34349_35105;
var G__35111 = (i__34350_35106 + (1));
seq__34343_35103 = G__35108;
chunk__34348_35104 = G__35109;
count__34349_35105 = G__35110;
i__34350_35106 = G__35111;
continue;
} else {
var G__35113 = seq__34343_35103;
var G__35114 = chunk__34348_35104;
var G__35115 = count__34349_35105;
var G__35116 = (i__34350_35106 + (1));
seq__34343_35103 = G__35113;
chunk__34348_35104 = G__35114;
count__34349_35105 = G__35115;
i__34350_35106 = G__35116;
continue;
}
} else {
var temp__5753__auto___35117__$1 = cljs.core.seq(seq__34343_35103);
if(temp__5753__auto___35117__$1){
var seq__34343_35118__$1 = temp__5753__auto___35117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34343_35118__$1)){
var c__4679__auto___35119 = cljs.core.chunk_first(seq__34343_35118__$1);
var G__35120 = cljs.core.chunk_rest(seq__34343_35118__$1);
var G__35121 = c__4679__auto___35119;
var G__35122 = cljs.core.count(c__4679__auto___35119);
var G__35123 = (0);
seq__34343_35103 = G__35120;
chunk__34348_35104 = G__35121;
count__34349_35105 = G__35122;
i__34350_35106 = G__35123;
continue;
} else {
var child_35124 = cljs.core.first(seq__34343_35118__$1);
if(cljs.core.truth_(child_35124)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35124);


var G__35125 = cljs.core.next(seq__34343_35118__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__34343_35103 = G__35125;
chunk__34348_35104 = G__35126;
count__34349_35105 = G__35127;
i__34350_35106 = G__35128;
continue;
} else {
var G__35129 = cljs.core.next(seq__34343_35118__$1);
var G__35130 = null;
var G__35131 = (0);
var G__35132 = (0);
seq__34343_35103 = G__35129;
chunk__34348_35104 = G__35130;
count__34349_35105 = G__35131;
i__34350_35106 = G__35132;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35102);
}


var G__35133 = cljs.core.next(seq__34174_35095__$1);
var G__35134 = null;
var G__35135 = (0);
var G__35136 = (0);
seq__34174_35054 = G__35133;
chunk__34175_35055 = G__35134;
count__34176_35056 = G__35135;
i__34177_35057 = G__35136;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34410 = cljs.core.seq(node);
var chunk__34411 = null;
var count__34412 = (0);
var i__34413 = (0);
while(true){
if((i__34413 < count__34412)){
var n = chunk__34411.cljs$core$IIndexed$_nth$arity$2(null,i__34413);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35143 = seq__34410;
var G__35144 = chunk__34411;
var G__35145 = count__34412;
var G__35146 = (i__34413 + (1));
seq__34410 = G__35143;
chunk__34411 = G__35144;
count__34412 = G__35145;
i__34413 = G__35146;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34410);
if(temp__5753__auto__){
var seq__34410__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34410__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34410__$1);
var G__35147 = cljs.core.chunk_rest(seq__34410__$1);
var G__35148 = c__4679__auto__;
var G__35149 = cljs.core.count(c__4679__auto__);
var G__35150 = (0);
seq__34410 = G__35147;
chunk__34411 = G__35148;
count__34412 = G__35149;
i__34413 = G__35150;
continue;
} else {
var n = cljs.core.first(seq__34410__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35151 = cljs.core.next(seq__34410__$1);
var G__35152 = null;
var G__35153 = (0);
var G__35154 = (0);
seq__34410 = G__35151;
chunk__34411 = G__35152;
count__34412 = G__35153;
i__34413 = G__35154;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34446 = arguments.length;
switch (G__34446) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34485 = arguments.length;
switch (G__34485) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35161 = arguments.length;
var i__4865__auto___35162 = (0);
while(true){
if((i__4865__auto___35162 < len__4864__auto___35161)){
args__4870__auto__.push((arguments[i__4865__auto___35162]));

var G__35164 = (i__4865__auto___35162 + (1));
i__4865__auto___35162 = G__35164;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34537_35167 = cljs.core.seq(nodes);
var chunk__34538_35168 = null;
var count__34539_35169 = (0);
var i__34540_35170 = (0);
while(true){
if((i__34540_35170 < count__34539_35169)){
var node_35172 = chunk__34538_35168.cljs$core$IIndexed$_nth$arity$2(null,i__34540_35170);
fragment.appendChild(shadow.dom._to_dom(node_35172));


var G__35174 = seq__34537_35167;
var G__35175 = chunk__34538_35168;
var G__35176 = count__34539_35169;
var G__35177 = (i__34540_35170 + (1));
seq__34537_35167 = G__35174;
chunk__34538_35168 = G__35175;
count__34539_35169 = G__35176;
i__34540_35170 = G__35177;
continue;
} else {
var temp__5753__auto___35178 = cljs.core.seq(seq__34537_35167);
if(temp__5753__auto___35178){
var seq__34537_35179__$1 = temp__5753__auto___35178;
if(cljs.core.chunked_seq_QMARK_(seq__34537_35179__$1)){
var c__4679__auto___35180 = cljs.core.chunk_first(seq__34537_35179__$1);
var G__35182 = cljs.core.chunk_rest(seq__34537_35179__$1);
var G__35183 = c__4679__auto___35180;
var G__35184 = cljs.core.count(c__4679__auto___35180);
var G__35185 = (0);
seq__34537_35167 = G__35182;
chunk__34538_35168 = G__35183;
count__34539_35169 = G__35184;
i__34540_35170 = G__35185;
continue;
} else {
var node_35187 = cljs.core.first(seq__34537_35179__$1);
fragment.appendChild(shadow.dom._to_dom(node_35187));


var G__35188 = cljs.core.next(seq__34537_35179__$1);
var G__35189 = null;
var G__35190 = (0);
var G__35191 = (0);
seq__34537_35167 = G__35188;
chunk__34538_35168 = G__35189;
count__34539_35169 = G__35190;
i__34540_35170 = G__35191;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34519){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34519));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34550_35194 = cljs.core.seq(scripts);
var chunk__34551_35195 = null;
var count__34552_35196 = (0);
var i__34553_35197 = (0);
while(true){
if((i__34553_35197 < count__34552_35196)){
var vec__34564_35198 = chunk__34551_35195.cljs$core$IIndexed$_nth$arity$2(null,i__34553_35197);
var script_tag_35199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34564_35198,(0),null);
var script_body_35200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34564_35198,(1),null);
eval(script_body_35200);


var G__35202 = seq__34550_35194;
var G__35203 = chunk__34551_35195;
var G__35204 = count__34552_35196;
var G__35205 = (i__34553_35197 + (1));
seq__34550_35194 = G__35202;
chunk__34551_35195 = G__35203;
count__34552_35196 = G__35204;
i__34553_35197 = G__35205;
continue;
} else {
var temp__5753__auto___35207 = cljs.core.seq(seq__34550_35194);
if(temp__5753__auto___35207){
var seq__34550_35208__$1 = temp__5753__auto___35207;
if(cljs.core.chunked_seq_QMARK_(seq__34550_35208__$1)){
var c__4679__auto___35210 = cljs.core.chunk_first(seq__34550_35208__$1);
var G__35211 = cljs.core.chunk_rest(seq__34550_35208__$1);
var G__35212 = c__4679__auto___35210;
var G__35213 = cljs.core.count(c__4679__auto___35210);
var G__35214 = (0);
seq__34550_35194 = G__35211;
chunk__34551_35195 = G__35212;
count__34552_35196 = G__35213;
i__34553_35197 = G__35214;
continue;
} else {
var vec__34573_35215 = cljs.core.first(seq__34550_35208__$1);
var script_tag_35216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573_35215,(0),null);
var script_body_35217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573_35215,(1),null);
eval(script_body_35217);


var G__35219 = cljs.core.next(seq__34550_35208__$1);
var G__35220 = null;
var G__35221 = (0);
var G__35222 = (0);
seq__34550_35194 = G__35219;
chunk__34551_35195 = G__35220;
count__34552_35196 = G__35221;
i__34553_35197 = G__35222;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34584){
var vec__34585 = p__34584;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34600 = arguments.length;
switch (G__34600) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34629 = cljs.core.seq(style_keys);
var chunk__34630 = null;
var count__34631 = (0);
var i__34632 = (0);
while(true){
if((i__34632 < count__34631)){
var it = chunk__34630.cljs$core$IIndexed$_nth$arity$2(null,i__34632);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35230 = seq__34629;
var G__35231 = chunk__34630;
var G__35232 = count__34631;
var G__35233 = (i__34632 + (1));
seq__34629 = G__35230;
chunk__34630 = G__35231;
count__34631 = G__35232;
i__34632 = G__35233;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34629);
if(temp__5753__auto__){
var seq__34629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34629__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34629__$1);
var G__35234 = cljs.core.chunk_rest(seq__34629__$1);
var G__35235 = c__4679__auto__;
var G__35236 = cljs.core.count(c__4679__auto__);
var G__35237 = (0);
seq__34629 = G__35234;
chunk__34630 = G__35235;
count__34631 = G__35236;
i__34632 = G__35237;
continue;
} else {
var it = cljs.core.first(seq__34629__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35238 = cljs.core.next(seq__34629__$1);
var G__35239 = null;
var G__35240 = (0);
var G__35241 = (0);
seq__34629 = G__35238;
chunk__34630 = G__35239;
count__34631 = G__35240;
i__34632 = G__35241;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34643,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34656 = k34643;
var G__34656__$1 = (((G__34656 instanceof cljs.core.Keyword))?G__34656.fqn:null);
switch (G__34656__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34643,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34663){
var vec__34664 = p__34663;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34664,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34642){
var self__ = this;
var G__34642__$1 = this;
return (new cljs.core.RecordIter((0),G__34642__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34644,other34645){
var self__ = this;
var this34644__$1 = this;
return (((!((other34645 == null)))) && ((((this34644__$1.constructor === other34645.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34644__$1.x,other34645.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34644__$1.y,other34645.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34644__$1.__extmap,other34645.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34643){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34705 = k34643;
var G__34705__$1 = (((G__34705 instanceof cljs.core.Keyword))?G__34705.fqn:null);
switch (G__34705__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34643);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34642){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34711 = cljs.core.keyword_identical_QMARK_;
var expr__34712 = k__4511__auto__;
if(cljs.core.truth_((pred__34711.cljs$core$IFn$_invoke$arity$2 ? pred__34711.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34712) : pred__34711.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34712)))){
return (new shadow.dom.Coordinate(G__34642,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34711.cljs$core$IFn$_invoke$arity$2 ? pred__34711.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34712) : pred__34711.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34712)))){
return (new shadow.dom.Coordinate(self__.x,G__34642,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34642),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34642){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34642,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34648){
var extmap__4542__auto__ = (function (){var G__34738 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34648,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34738);
} else {
return G__34738;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34648),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34648),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34748,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34757 = k34748;
var G__34757__$1 = (((G__34757 instanceof cljs.core.Keyword))?G__34757.fqn:null);
switch (G__34757__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34748,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34765){
var vec__34766 = p__34765;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34747){
var self__ = this;
var G__34747__$1 = this;
return (new cljs.core.RecordIter((0),G__34747__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34749,other34750){
var self__ = this;
var this34749__$1 = this;
return (((!((other34750 == null)))) && ((((this34749__$1.constructor === other34750.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34749__$1.w,other34750.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34749__$1.h,other34750.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34749__$1.__extmap,other34750.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34748){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34779 = k34748;
var G__34779__$1 = (((G__34779 instanceof cljs.core.Keyword))?G__34779.fqn:null);
switch (G__34779__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34748);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34747){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34782 = cljs.core.keyword_identical_QMARK_;
var expr__34783 = k__4511__auto__;
if(cljs.core.truth_((pred__34782.cljs$core$IFn$_invoke$arity$2 ? pred__34782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34783) : pred__34782.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34783)))){
return (new shadow.dom.Size(G__34747,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34782.cljs$core$IFn$_invoke$arity$2 ? pred__34782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34783) : pred__34782.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34783)))){
return (new shadow.dom.Size(self__.w,G__34747,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34747),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34747){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34747,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34751){
var extmap__4542__auto__ = (function (){var G__34793 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34751,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34793);
} else {
return G__34793;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34751),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34751),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__35274 = (i + (1));
var G__35275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35274;
ret = G__35275;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34841){
var vec__34842 = p__34841;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34854 = arguments.length;
switch (G__34854) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35280 = ps;
var G__35281 = (i + (1));
el__$1 = G__35280;
i = G__35281;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34875 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34878_35285 = cljs.core.seq(props);
var chunk__34879_35286 = null;
var count__34880_35287 = (0);
var i__34881_35288 = (0);
while(true){
if((i__34881_35288 < count__34880_35287)){
var vec__34888_35289 = chunk__34879_35286.cljs$core$IIndexed$_nth$arity$2(null,i__34881_35288);
var k_35290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888_35289,(0),null);
var v_35291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888_35289,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35290);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35290),v_35291);


var G__35292 = seq__34878_35285;
var G__35293 = chunk__34879_35286;
var G__35294 = count__34880_35287;
var G__35295 = (i__34881_35288 + (1));
seq__34878_35285 = G__35292;
chunk__34879_35286 = G__35293;
count__34880_35287 = G__35294;
i__34881_35288 = G__35295;
continue;
} else {
var temp__5753__auto___35296 = cljs.core.seq(seq__34878_35285);
if(temp__5753__auto___35296){
var seq__34878_35297__$1 = temp__5753__auto___35296;
if(cljs.core.chunked_seq_QMARK_(seq__34878_35297__$1)){
var c__4679__auto___35298 = cljs.core.chunk_first(seq__34878_35297__$1);
var G__35299 = cljs.core.chunk_rest(seq__34878_35297__$1);
var G__35300 = c__4679__auto___35298;
var G__35301 = cljs.core.count(c__4679__auto___35298);
var G__35302 = (0);
seq__34878_35285 = G__35299;
chunk__34879_35286 = G__35300;
count__34880_35287 = G__35301;
i__34881_35288 = G__35302;
continue;
} else {
var vec__34891_35303 = cljs.core.first(seq__34878_35297__$1);
var k_35304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891_35303,(0),null);
var v_35305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891_35303,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35304);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35304),v_35305);


var G__35306 = cljs.core.next(seq__34878_35297__$1);
var G__35307 = null;
var G__35308 = (0);
var G__35309 = (0);
seq__34878_35285 = G__35306;
chunk__34879_35286 = G__35307;
count__34880_35287 = G__35308;
i__34881_35288 = G__35309;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34895 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895,(1),null);
var seq__34898_35313 = cljs.core.seq(node_children);
var chunk__34900_35314 = null;
var count__34901_35315 = (0);
var i__34902_35316 = (0);
while(true){
if((i__34902_35316 < count__34901_35315)){
var child_struct_35317 = chunk__34900_35314.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35316);
if((!((child_struct_35317 == null)))){
if(typeof child_struct_35317 === 'string'){
var text_35318 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35318),child_struct_35317].join(''));
} else {
var children_35319 = shadow.dom.svg_node(child_struct_35317);
if(cljs.core.seq_QMARK_(children_35319)){
var seq__34923_35320 = cljs.core.seq(children_35319);
var chunk__34925_35321 = null;
var count__34926_35322 = (0);
var i__34927_35323 = (0);
while(true){
if((i__34927_35323 < count__34926_35322)){
var child_35325 = chunk__34925_35321.cljs$core$IIndexed$_nth$arity$2(null,i__34927_35323);
if(cljs.core.truth_(child_35325)){
node.appendChild(child_35325);


var G__35326 = seq__34923_35320;
var G__35327 = chunk__34925_35321;
var G__35328 = count__34926_35322;
var G__35329 = (i__34927_35323 + (1));
seq__34923_35320 = G__35326;
chunk__34925_35321 = G__35327;
count__34926_35322 = G__35328;
i__34927_35323 = G__35329;
continue;
} else {
var G__35330 = seq__34923_35320;
var G__35331 = chunk__34925_35321;
var G__35332 = count__34926_35322;
var G__35333 = (i__34927_35323 + (1));
seq__34923_35320 = G__35330;
chunk__34925_35321 = G__35331;
count__34926_35322 = G__35332;
i__34927_35323 = G__35333;
continue;
}
} else {
var temp__5753__auto___35334 = cljs.core.seq(seq__34923_35320);
if(temp__5753__auto___35334){
var seq__34923_35335__$1 = temp__5753__auto___35334;
if(cljs.core.chunked_seq_QMARK_(seq__34923_35335__$1)){
var c__4679__auto___35336 = cljs.core.chunk_first(seq__34923_35335__$1);
var G__35337 = cljs.core.chunk_rest(seq__34923_35335__$1);
var G__35338 = c__4679__auto___35336;
var G__35339 = cljs.core.count(c__4679__auto___35336);
var G__35340 = (0);
seq__34923_35320 = G__35337;
chunk__34925_35321 = G__35338;
count__34926_35322 = G__35339;
i__34927_35323 = G__35340;
continue;
} else {
var child_35341 = cljs.core.first(seq__34923_35335__$1);
if(cljs.core.truth_(child_35341)){
node.appendChild(child_35341);


var G__35342 = cljs.core.next(seq__34923_35335__$1);
var G__35343 = null;
var G__35344 = (0);
var G__35345 = (0);
seq__34923_35320 = G__35342;
chunk__34925_35321 = G__35343;
count__34926_35322 = G__35344;
i__34927_35323 = G__35345;
continue;
} else {
var G__35346 = cljs.core.next(seq__34923_35335__$1);
var G__35347 = null;
var G__35348 = (0);
var G__35349 = (0);
seq__34923_35320 = G__35346;
chunk__34925_35321 = G__35347;
count__34926_35322 = G__35348;
i__34927_35323 = G__35349;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35319);
}
}


var G__35350 = seq__34898_35313;
var G__35351 = chunk__34900_35314;
var G__35352 = count__34901_35315;
var G__35353 = (i__34902_35316 + (1));
seq__34898_35313 = G__35350;
chunk__34900_35314 = G__35351;
count__34901_35315 = G__35352;
i__34902_35316 = G__35353;
continue;
} else {
var G__35354 = seq__34898_35313;
var G__35355 = chunk__34900_35314;
var G__35356 = count__34901_35315;
var G__35357 = (i__34902_35316 + (1));
seq__34898_35313 = G__35354;
chunk__34900_35314 = G__35355;
count__34901_35315 = G__35356;
i__34902_35316 = G__35357;
continue;
}
} else {
var temp__5753__auto___35358 = cljs.core.seq(seq__34898_35313);
if(temp__5753__auto___35358){
var seq__34898_35359__$1 = temp__5753__auto___35358;
if(cljs.core.chunked_seq_QMARK_(seq__34898_35359__$1)){
var c__4679__auto___35360 = cljs.core.chunk_first(seq__34898_35359__$1);
var G__35361 = cljs.core.chunk_rest(seq__34898_35359__$1);
var G__35362 = c__4679__auto___35360;
var G__35363 = cljs.core.count(c__4679__auto___35360);
var G__35364 = (0);
seq__34898_35313 = G__35361;
chunk__34900_35314 = G__35362;
count__34901_35315 = G__35363;
i__34902_35316 = G__35364;
continue;
} else {
var child_struct_35365 = cljs.core.first(seq__34898_35359__$1);
if((!((child_struct_35365 == null)))){
if(typeof child_struct_35365 === 'string'){
var text_35366 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35366),child_struct_35365].join(''));
} else {
var children_35367 = shadow.dom.svg_node(child_struct_35365);
if(cljs.core.seq_QMARK_(children_35367)){
var seq__34932_35368 = cljs.core.seq(children_35367);
var chunk__34934_35369 = null;
var count__34935_35370 = (0);
var i__34936_35371 = (0);
while(true){
if((i__34936_35371 < count__34935_35370)){
var child_35372 = chunk__34934_35369.cljs$core$IIndexed$_nth$arity$2(null,i__34936_35371);
if(cljs.core.truth_(child_35372)){
node.appendChild(child_35372);


var G__35373 = seq__34932_35368;
var G__35374 = chunk__34934_35369;
var G__35375 = count__34935_35370;
var G__35376 = (i__34936_35371 + (1));
seq__34932_35368 = G__35373;
chunk__34934_35369 = G__35374;
count__34935_35370 = G__35375;
i__34936_35371 = G__35376;
continue;
} else {
var G__35377 = seq__34932_35368;
var G__35378 = chunk__34934_35369;
var G__35379 = count__34935_35370;
var G__35380 = (i__34936_35371 + (1));
seq__34932_35368 = G__35377;
chunk__34934_35369 = G__35378;
count__34935_35370 = G__35379;
i__34936_35371 = G__35380;
continue;
}
} else {
var temp__5753__auto___35381__$1 = cljs.core.seq(seq__34932_35368);
if(temp__5753__auto___35381__$1){
var seq__34932_35382__$1 = temp__5753__auto___35381__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34932_35382__$1)){
var c__4679__auto___35383 = cljs.core.chunk_first(seq__34932_35382__$1);
var G__35384 = cljs.core.chunk_rest(seq__34932_35382__$1);
var G__35385 = c__4679__auto___35383;
var G__35386 = cljs.core.count(c__4679__auto___35383);
var G__35387 = (0);
seq__34932_35368 = G__35384;
chunk__34934_35369 = G__35385;
count__34935_35370 = G__35386;
i__34936_35371 = G__35387;
continue;
} else {
var child_35388 = cljs.core.first(seq__34932_35382__$1);
if(cljs.core.truth_(child_35388)){
node.appendChild(child_35388);


var G__35389 = cljs.core.next(seq__34932_35382__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__34932_35368 = G__35389;
chunk__34934_35369 = G__35390;
count__34935_35370 = G__35391;
i__34936_35371 = G__35392;
continue;
} else {
var G__35393 = cljs.core.next(seq__34932_35382__$1);
var G__35394 = null;
var G__35395 = (0);
var G__35396 = (0);
seq__34932_35368 = G__35393;
chunk__34934_35369 = G__35394;
count__34935_35370 = G__35395;
i__34936_35371 = G__35396;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35367);
}
}


var G__35397 = cljs.core.next(seq__34898_35359__$1);
var G__35398 = null;
var G__35399 = (0);
var G__35400 = (0);
seq__34898_35313 = G__35397;
chunk__34900_35314 = G__35398;
count__34901_35315 = G__35399;
i__34902_35316 = G__35400;
continue;
} else {
var G__35401 = cljs.core.next(seq__34898_35359__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__34898_35313 = G__35401;
chunk__34900_35314 = G__35402;
count__34901_35315 = G__35403;
i__34902_35316 = G__35404;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35405 = arguments.length;
var i__4865__auto___35406 = (0);
while(true){
if((i__4865__auto___35406 < len__4864__auto___35405)){
args__4870__auto__.push((arguments[i__4865__auto___35406]));

var G__35407 = (i__4865__auto___35406 + (1));
i__4865__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34953){
var G__34954 = cljs.core.first(seq34953);
var seq34953__$1 = cljs.core.next(seq34953);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34954,seq34953__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34964 = arguments.length;
switch (G__34964) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29742__auto___35411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29743__auto__ = (function (){var switch__29174__auto__ = (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (1))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(2),once_or_cleanup);
} else {
if((state_val_34972 === (2))){
var inst_34968 = (state_34971[(2)]);
var inst_34969 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34971__$1 = (function (){var statearr_34973 = state_34971;
(statearr_34973[(7)] = inst_34968);

return statearr_34973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34971__$1,inst_34969);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29175__auto__ = null;
var shadow$dom$state_machine__29175__auto____0 = (function (){
var statearr_34974 = [null,null,null,null,null,null,null,null];
(statearr_34974[(0)] = shadow$dom$state_machine__29175__auto__);

(statearr_34974[(1)] = (1));

return statearr_34974;
});
var shadow$dom$state_machine__29175__auto____1 = (function (state_34971){
while(true){
var ret_value__29176__auto__ = (function (){try{while(true){
var result__29177__auto__ = switch__29174__auto__(state_34971);
if(cljs.core.keyword_identical_QMARK_(result__29177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29177__auto__;
}
break;
}
}catch (e34976){var ex__29178__auto__ = e34976;
var statearr_34977_35414 = state_34971;
(statearr_34977_35414[(2)] = ex__29178__auto__);


if(cljs.core.seq((state_34971[(4)]))){
var statearr_34978_35415 = state_34971;
(statearr_34978_35415[(1)] = cljs.core.first((state_34971[(4)])));

} else {
throw ex__29178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35416 = state_34971;
state_34971 = G__35416;
continue;
} else {
return ret_value__29176__auto__;
}
break;
}
});
shadow$dom$state_machine__29175__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29175__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29175__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29175__auto____0;
shadow$dom$state_machine__29175__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29175__auto____1;
return shadow$dom$state_machine__29175__auto__;
})()
})();
var state__29744__auto__ = (function (){var statearr_34979 = f__29743__auto__();
(statearr_34979[(6)] = c__29742__auto___35411);

return statearr_34979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29744__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
