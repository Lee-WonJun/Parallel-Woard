goog.provide('com.app.move');
com.app.move.change = (function com$app$move$change(board,pos,type){
var logical_pos__GT_assoc_arg = (function (p1__28439_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.reverse(p1__28439_SHARP_));
});
var changed = cljs.core.assoc_in(board,logical_pos__GT_assoc_arg(pos),type);
return changed;
});
com.app.move.calc_next_candidate_pos = (function com$app$move$calc_next_candidate_pos(player_pos,direction){
var vec__28440 = player_pos;
var player_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28440,(0),null);
var player_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28440,(1),null);
var next = (function (){var G__28443 = direction;
var G__28443__$1 = (((G__28443 instanceof cljs.core.Keyword))?G__28443.fqn:null);
switch (G__28443__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28443__$1)].join('')));

}
})();
return next;
});
com.app.move.get_type_in_pos = (function com$app$move$get_type_in_pos(board,pos){
var vec__28444 = pos;
var pos_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28444,(0),null);
var pos_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28444,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos_y + (1)),(pos_x + (1))], null));
});
com.app.move.movable_QMARK_ = (function com$app$move$movable_QMARK_(board,pos){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wall","wall",-787661558),com.app.move.get_type_in_pos(board,pos));
});
com.app.move.calc_next_pos = (function com$app$move$calc_next_pos(board,player_pos,direction){
var candidate_pos = com.app.move.calc_next_candidate_pos(player_pos,direction);
var movable = com.app.move.movable_QMARK_(board,candidate_pos);
if(movable){
return candidate_pos;
} else {
return player_pos;
}
});
com.app.move.move = (function com$app$move$move(board,first_pos,arrow_history){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28447_SHARP_,p2__28448_SHARP_){
return com.app.move.calc_next_pos(board,p1__28447_SHARP_,p2__28448_SHARP_);
}),first_pos,arrow_history);
});
com.app.move.display = (function com$app$move$display(board,player_pos,goal_pos){
var display_player = com.app.move.change(board,player_pos,new cljs.core.Keyword(null,"player","player",-97687400));
var display_goal = com.app.move.change(display_player,goal_pos,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var goalin_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_pos,goal_pos);
var display_final = ((goalin_QMARK_)?com.app.move.change(board,player_pos,new cljs.core.Keyword(null,"goalin","goalin",745245309)):display_goal);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),display_final,new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626),goalin_QMARK_], null);
});
com.app.move.calc_next_board_state = (function com$app$move$calc_next_board_state(board_state,arrow_history){
var first_map = (board_state.cljs$core$IFn$_invoke$arity$1 ? board_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first-map","first-map",831363786)) : board_state.call(null,new cljs.core.Keyword(null,"first-map","first-map",831363786)));
var first_pos = (board_state.cljs$core$IFn$_invoke$arity$1 ? board_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first-player-pos","first-player-pos",-27586082)) : board_state.call(null,new cljs.core.Keyword(null,"first-player-pos","first-player-pos",-27586082)));
var goal_pos = (board_state.cljs$core$IFn$_invoke$arity$1 ? board_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454)) : board_state.call(null,new cljs.core.Keyword(null,"goal-pos","goal-pos",-2138665454)));
var final_player_pos = com.app.move.move(first_map,first_pos,arrow_history);
var result = com.app.move.display(first_map,final_player_pos,goal_pos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board_state,new cljs.core.Keyword(null,"display-board","display-board",2049877948),(result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display","display",242065432)) : result.call(null,new cljs.core.Keyword(null,"display","display",242065432)))),new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626),(result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626)) : result.call(null,new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626))));
});
com.app.move.calc_next_boards_state = (function com$app$move$calc_next_boards_state(boards_state,arrow_history){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28449_SHARP_){
return com.app.move.calc_next_board_state(p1__28449_SHARP_,arrow_history);
}),boards_state);
});
com.app.move.calc_next_game_state = (function com$app$move$calc_next_game_state(game_state,arrow_history){
var boards = (game_state.cljs$core$IFn$_invoke$arity$1 ? game_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boards","boards",1912049694)) : game_state.call(null,new cljs.core.Keyword(null,"boards","boards",1912049694)));
var next_boards = com.app.move.calc_next_boards_state(boards,arrow_history);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"boards","boards",1912049694),next_boards);
});

//# sourceMappingURL=com.app.move.js.map
