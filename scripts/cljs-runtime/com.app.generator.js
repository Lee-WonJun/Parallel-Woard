goog.provide('com.app.generator');
com.app.generator.blocks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"goalin","goalin",745245309)], null);
com.app.generator.make_board = (function com$app$generator$make_board(width,height){
var add_wall_into_line = (function (p1__28347_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wall","wall",-787661558)], null),p1__28347_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wall","wall",-787661558)], null)], 0)));
});
var upper_walls = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((2) + width),new cljs.core.Keyword(null,"wall","wall",-787661558)));
var inner = cljs.core.vec((function (){var iter__4652__auto__ = (function com$app$generator$make_board_$_iter__28349(s__28350){
return (new cljs.core.LazySeq(null,(function (){
var s__28350__$1 = s__28350;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28350__$1);
if(temp__5753__auto__){
var s__28350__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28350__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28350__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28352 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28351 = (0);
while(true){
if((i__28351 < size__4651__auto__)){
var _ = cljs.core._nth(c__4650__auto__,i__28351);
cljs.core.chunk_append(b__28352,add_wall_into_line(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width,new cljs.core.Keyword(null,"empty","empty",767870958))));

var G__28368 = (i__28351 + (1));
i__28351 = G__28368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28352),com$app$generator$make_board_$_iter__28349(cljs.core.chunk_rest(s__28350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28352),null);
}
} else {
var _ = cljs.core.first(s__28350__$2);
return cljs.core.cons(add_wall_into_line(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width,new cljs.core.Keyword(null,"empty","empty",767870958))),com$app$generator$make_board_$_iter__28349(cljs.core.rest(s__28350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
})());
var board = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_walls], null),inner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_walls], null)], 0)));
var block_number = (((width * height) * 0.2) | (0));
var rand_width = (function (){
return (cljs.core.rand_int(width) + (1));
});
var rand_height = (function (){
return (cljs.core.rand_int(height) + (1));
});
return cljs.core.assoc_in(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.iterate((function (p1__28348_SHARP_){
return cljs.core.assoc_in(p1__28348_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rand_height(),rand_width()], null),new cljs.core.Keyword(null,"wall","wall",-787661558));
}),board),block_number,board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rand_height(),rand_width()], null),new cljs.core.Keyword(null,"player","player",-97687400));
});
com.app.generator.get_item_pos = (function com$app$generator$get_item_pos(item,board){

var player = item;
var n = cljs.core.count(cljs.core.first(board));
var i = cljs.core.flatten(board).indexOf(player);
if((i > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(new cljs.core.List(null,cljs.core.mod(i,n),(new cljs.core.List(null,cljs.core.quot(i,n),null,(1),null)),(2),null)));
} else {
return null;
}
});
com.app.generator.get_player_pos = (function com$app$generator$get_player_pos(board){
return com.app.generator.get_item_pos(new cljs.core.Keyword(null,"player","player",-97687400),board);
});
com.app.generator.get_ingoal_pos = (function com$app$generator$get_ingoal_pos(board){
return com.app.generator.get_item_pos(new cljs.core.Keyword(null,"goalin","goalin",745245309),board);
});
com.app.generator.get_type_in_pos = (function com$app$generator$get_type_in_pos(board,x,y){

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + (1)),(x + (1))], null));
});
com.app.generator.calc_next_candidate_pos = (function com$app$generator$calc_next_candidate_pos(player_pos,direction){
var vec__28353 = player_pos;
var player_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(0),null);
var player_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(1),null);
var next = (function (){var G__28356 = direction;
var G__28356__$1 = (((G__28356 instanceof cljs.core.Keyword))?G__28356.fqn:null);
switch (G__28356__$1) {
case "up":
return (new cljs.core.List(null,player_x,(new cljs.core.List(null,(player_y - (1)),null,(1),null)),(2),null));

break;
case "down":
return (new cljs.core.List(null,player_x,(new cljs.core.List(null,(player_y + (1)),null,(1),null)),(2),null));

break;
case "right":
return (new cljs.core.List(null,(player_x + (1)),(new cljs.core.List(null,player_y,null,(1),null)),(2),null));

break;
case "left":
return (new cljs.core.List(null,(player_x - (1)),(new cljs.core.List(null,player_y,null,(1),null)),(2),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28356__$1)].join('')));

}
})();
return next;
});
com.app.generator.move_once_in_no_goal_board = (function com$app$generator$move_once_in_no_goal_board(board,direction){

var player_pos = com.app.generator.get_player_pos(board);
var vec__28358 = com.app.generator.calc_next_candidate_pos(player_pos,direction);
var candiated_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var candiated_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
var candiated_pos = vec__28358;
var present_type_in_candidate_pos = com.app.generator.get_type_in_pos(board,candiated_x,candiated_y);
var possible_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),present_type_in_candidate_pos);
var next_pos = ((possible_QMARK_)?candiated_pos:player_pos);
var logical_pos__GT_assoc_arg = (function (p1__28357_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.reverse(p1__28357_SHARP_));
});
return cljs.core.assoc_in(cljs.core.assoc_in(board,logical_pos__GT_assoc_arg(player_pos),new cljs.core.Keyword(null,"empty","empty",767870958)),logical_pos__GT_assoc_arg(next_pos),new cljs.core.Keyword(null,"player","player",-97687400));
});
com.app.generator.create_rand_move = (function com$app$generator$create_rand_move(var_args){
var G__28364 = arguments.length;
switch (G__28364) {
case 1:
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1 = (function (count){
var bias = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null));
return com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2(count,bias);
}));

(com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$2 = (function (count,bias_direction){
var rand_move = (function (p1__28361_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(p1__28361_SHARP_));
});
var first_moves = rand_move(count);
var sec_moves = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28362_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bias_direction,p1__28362_SHARP_)){
return p1__28362_SHARP_;
} else {
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null));
}
}),first_moves);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sec_moves], 0));
return sec_moves;
}));

(com.app.generator.create_rand_move.cljs$lang$maxFixedArity = 2);

com.app.generator.calc_one_board = (function com$app$generator$calc_one_board(first_status_board,arrow_history){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28365_SHARP_,p2__28366_SHARP_){
return com.app.generator.move_once_in_no_goal_board(p1__28365_SHARP_,p2__28366_SHARP_);
}),first_status_board,arrow_history);
});
com.app.generator.init_boards = (function com$app$generator$init_boards(answer,board_config){
var answer__$1 = com.app.generator.create_rand_move.cljs$core$IFn$_invoke$arity$1(answer);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (config){
var width = (config.cljs$core$IFn$_invoke$arity$1 ? config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : config.call(null,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (config.cljs$core$IFn$_invoke$arity$1 ? config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : config.call(null,new cljs.core.Keyword(null,"height","height",1025178622)));
var first_board = com.app.generator.make_board(width,height);
var first_player_pos = com.app.generator.get_player_pos(first_board);
var goal_pos = com.app.generator.get_player_pos(com.app.generator.calc_one_board(first_board,answer__$1));
var logical_pos__GT_assoc_arg = (function (p1__28367_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.reverse(p1__28367_SHARP_));
});
var goal_is_same_with_first_player = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goal_pos,first_player_pos);
var board = cljs.core.assoc_in(first_board,logical_pos__GT_assoc_arg(goal_pos),((goal_is_same_with_first_player)?new cljs.core.Keyword(null,"goalin","goalin",745245309):new cljs.core.Keyword(null,"goal","goal",-2073396501)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-map","first-map",831363786),cljs.core.assoc_in(first_board,logical_pos__GT_assoc_arg(first_player_pos),new cljs.core.Keyword(null,"empty","empty",767870958)),new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454),goal_pos,new cljs.core.Keyword(null,"first-player-pos","first-player-pos",-27586082),first_player_pos,new cljs.core.Keyword(null,"display-board","display-board",2049877948),board,new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626),goal_is_same_with_first_player], null);
}),board_config),new cljs.core.Keyword(null,"answer","answer",-742633163),answer__$1], null);
});
com.app.generator.test_maps = com.app.generator.init_boards((15),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5)], null)], null));

//# sourceMappingURL=com.app.generator.js.map
