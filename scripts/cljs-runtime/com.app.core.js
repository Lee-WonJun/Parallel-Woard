goog.provide('com.app.core');
com.app.core.level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
com.app.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
com.app.core.input = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
com.app.core.reset_stage = (function com$app$core$reset_stage(){
cljs.core.reset_BANG_(com.app.core.input,cljs.core.PersistentVector.EMPTY);

var curr = (function (){var G__32419 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__32419) : com.app.stage.stages.call(null,G__32419));
})();
return cljs.core.reset_BANG_(com.app.core.game_state,com.app.generator.init_boards((curr.cljs$core$IFn$_invoke$arity$1 ? curr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"answer","answer",-742633163)) : curr.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163))),(curr.cljs$core$IFn$_invoke$arity$1 ? curr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"maps","maps",-1711561134)) : curr.call(null,new cljs.core.Keyword(null,"maps","maps",-1711561134)))));
});
com.app.core.clear_stage_QMARK_ = (function com$app$core$clear_stage_QMARK_(){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626),(function (){var fexpr__32420 = cljs.core.deref(com.app.core.game_state);
return (fexpr__32420.cljs$core$IFn$_invoke$arity$1 ? fexpr__32420.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boards","boards",1912049694)) : fexpr__32420.call(null,new cljs.core.Keyword(null,"boards","boards",1912049694)));
})());
});
com.app.core.pre_fixed_pos = (function com$app$core$pre_fixed_pos(boards,board_count){
var G__32421 = board_count;
switch (G__32421) {
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32422 = (function (){var fexpr__32425 = cljs.core.first(boards);
return (fexpr__32425.cljs$core$IFn$_invoke$arity$1 ? fexpr__32425.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32425.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32423 = (70);
var G__32424 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32422,G__32423,G__32424) : com.app.core.Grid.call(null,G__32422,G__32423,G__32424));
})()], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32426 = (function (){var fexpr__32429 = cljs.core.first(boards);
return (fexpr__32429.cljs$core$IFn$_invoke$arity$1 ? fexpr__32429.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32429.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32427 = (70);
var G__32428 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32426,G__32427,G__32428) : com.app.core.Grid.call(null,G__32426,G__32427,G__32428));
})(),(function (){var G__32430 = (function (){var fexpr__32433 = cljs.core.second(boards);
return (fexpr__32433.cljs$core$IFn$_invoke$arity$1 ? fexpr__32433.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32433.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32431 = (70);
var G__32432 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32430,G__32431,G__32432) : com.app.core.Grid.call(null,G__32430,G__32431,G__32432));
})()], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32434 = (function (){var fexpr__32437 = cljs.core.first(boards);
return (fexpr__32437.cljs$core$IFn$_invoke$arity$1 ? fexpr__32437.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32437.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32435 = (70);
var G__32436 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32434,G__32435,G__32436) : com.app.core.Grid.call(null,G__32434,G__32435,G__32436));
})(),(function (){var G__32438 = (function (){var fexpr__32441 = cljs.core.second(boards);
return (fexpr__32441.cljs$core$IFn$_invoke$arity$1 ? fexpr__32441.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32441.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32439 = (70);
var G__32440 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32438,G__32439,G__32440) : com.app.core.Grid.call(null,G__32438,G__32439,G__32440));
})(),(function (){var G__32442 = (function (){var fexpr__32445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__32445.cljs$core$IFn$_invoke$arity$1 ? fexpr__32445.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32445.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32443 = (70);
var G__32444 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32442,G__32443,G__32444) : com.app.core.Grid.call(null,G__32442,G__32443,G__32444));
})()], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32446 = (function (){var fexpr__32449 = cljs.core.first(boards);
return (fexpr__32449.cljs$core$IFn$_invoke$arity$1 ? fexpr__32449.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32449.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32447 = (70);
var G__32448 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32446,G__32447,G__32448) : com.app.core.Grid.call(null,G__32446,G__32447,G__32448));
})(),(function (){var G__32450 = (function (){var fexpr__32453 = cljs.core.second(boards);
return (fexpr__32453.cljs$core$IFn$_invoke$arity$1 ? fexpr__32453.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32453.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32451 = (70);
var G__32452 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32450,G__32451,G__32452) : com.app.core.Grid.call(null,G__32450,G__32451,G__32452));
})(),(function (){var G__32454 = (function (){var fexpr__32457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__32457.cljs$core$IFn$_invoke$arity$1 ? fexpr__32457.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32457.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32455 = (270);
var G__32456 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32454,G__32455,G__32456) : com.app.core.Grid.call(null,G__32454,G__32455,G__32456));
})(),(function (){var G__32458 = (function (){var fexpr__32461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__32461.cljs$core$IFn$_invoke$arity$1 ? fexpr__32461.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32461.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32459 = (270);
var G__32460 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32458,G__32459,G__32460) : com.app.core.Grid.call(null,G__32458,G__32459,G__32460));
})()], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32462 = (function (){var fexpr__32465 = cljs.core.first(boards);
return (fexpr__32465.cljs$core$IFn$_invoke$arity$1 ? fexpr__32465.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32465.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32463 = (70);
var G__32464 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32462,G__32463,G__32464) : com.app.core.Grid.call(null,G__32462,G__32463,G__32464));
})(),(function (){var G__32466 = (function (){var fexpr__32469 = cljs.core.second(boards);
return (fexpr__32469.cljs$core$IFn$_invoke$arity$1 ? fexpr__32469.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32469.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32467 = (70);
var G__32468 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32466,G__32467,G__32468) : com.app.core.Grid.call(null,G__32466,G__32467,G__32468));
})(),(function (){var G__32470 = (function (){var fexpr__32473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__32473.cljs$core$IFn$_invoke$arity$1 ? fexpr__32473.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32473.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32471 = (70);
var G__32472 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32470,G__32471,G__32472) : com.app.core.Grid.call(null,G__32470,G__32471,G__32472));
})(),(function (){var G__32474 = (function (){var fexpr__32477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__32477.cljs$core$IFn$_invoke$arity$1 ? fexpr__32477.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32477.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32475 = (270);
var G__32476 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32474,G__32475,G__32476) : com.app.core.Grid.call(null,G__32474,G__32475,G__32476));
})(),(function (){var G__32478 = (function (){var fexpr__32481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(4));
return (fexpr__32481.cljs$core$IFn$_invoke$arity$1 ? fexpr__32481.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32481.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32479 = (270);
var G__32480 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32478,G__32479,G__32480) : com.app.core.Grid.call(null,G__32478,G__32479,G__32480));
})()], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__32482 = (function (){var fexpr__32485 = cljs.core.first(boards);
return (fexpr__32485.cljs$core$IFn$_invoke$arity$1 ? fexpr__32485.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32485.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32483 = (70);
var G__32484 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32482,G__32483,G__32484) : com.app.core.Grid.call(null,G__32482,G__32483,G__32484));
})(),(function (){var G__32486 = (function (){var fexpr__32489 = cljs.core.second(boards);
return (fexpr__32489.cljs$core$IFn$_invoke$arity$1 ? fexpr__32489.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32489.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32487 = (70);
var G__32488 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32486,G__32487,G__32488) : com.app.core.Grid.call(null,G__32486,G__32487,G__32488));
})(),(function (){var G__32490 = (function (){var fexpr__32493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__32493.cljs$core$IFn$_invoke$arity$1 ? fexpr__32493.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32493.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32491 = (70);
var G__32492 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32490,G__32491,G__32492) : com.app.core.Grid.call(null,G__32490,G__32491,G__32492));
})(),(function (){var G__32494 = (function (){var fexpr__32497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__32497.cljs$core$IFn$_invoke$arity$1 ? fexpr__32497.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32497.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32495 = (270);
var G__32496 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32494,G__32495,G__32496) : com.app.core.Grid.call(null,G__32494,G__32495,G__32496));
})(),(function (){var G__32498 = (function (){var fexpr__32501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(4));
return (fexpr__32501.cljs$core$IFn$_invoke$arity$1 ? fexpr__32501.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32501.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32499 = (270);
var G__32500 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32498,G__32499,G__32500) : com.app.core.Grid.call(null,G__32498,G__32499,G__32500));
})(),(function (){var G__32502 = (function (){var fexpr__32505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(5));
return (fexpr__32505.cljs$core$IFn$_invoke$arity$1 ? fexpr__32505.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__32505.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__32503 = (270);
var G__32504 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__32502,G__32503,G__32504) : com.app.core.Grid.call(null,G__32502,G__32503,G__32504));
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32421)].join('')));

}
});
com.app.core.Cell = (function com$app$core$Cell(cell_data,col,row,start_top_pos,start_left_pos){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-cell","div.grid-cell",332128170),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"32px","32px",-442975450),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"32px","32px",-442975450),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_top_pos + (row * (33)))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_left_pos + (col * (33)))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["resouces/",cljs.core.name(cell_data),"_32.png"].join('')], null)], null)], null);
});
com.app.core.Row = (function com$app$core$Row(rows_data,row,start_top_pos,start_left_pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-row","div.grid-row",-440170234),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (col,item){
return com.app.core.Cell(item,col,row,start_top_pos,start_left_pos);
}),rows_data)], null);
});
com.app.core.Grid = (function com$app$core$Grid(board,start_top_pos,start_left_pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row,item){
return com.app.core.Row(item,row,start_top_pos,start_left_pos);
}),board)], null);
});
com.app.core.All_Board = (function com$app$core$All_Board(){
var boards = (function (){var fexpr__32506 = cljs.core.deref(com.app.core.game_state);
return (fexpr__32506.cljs$core$IFn$_invoke$arity$1 ? fexpr__32506.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boards","boards",1912049694)) : fexpr__32506.call(null,new cljs.core.Keyword(null,"boards","boards",1912049694)));
})();
var div = com.app.core.pre_fixed_pos(boards,cljs.core.count((function (){var fexpr__32508 = (function (){var G__32509 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__32509) : com.app.stage.stages.call(null,G__32509));
})();
return (fexpr__32508.cljs$core$IFn$_invoke$arity$1 ? fexpr__32508.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"maps","maps",-1711561134)) : fexpr__32508.call(null,new cljs.core.Keyword(null,"maps","maps",-1711561134)));
})()));
return div;
});
com.app.core.Title = (function com$app$core$Title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#474787"], null)], null),"PARALLEL WOARD"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#474787",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"500px","500px",-177572505),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"10px","10px",-859606082)], null)], null),["Your Answer : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.input))].join('')], null)], null);
});
com.app.core.Game_screen = (function com$app$core$Game_screen(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),com.app.core.Title(),com.app.core.All_Board()], null);
});
/**
 * Given a `keycode`, execute function `f` 
 */
com.app.core.capture_key = (function com$app$core$capture_key(keycode_map){
var key_handler = (new goog.events.KeyHandler(document));
var press_fn = (function (key_press){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keycode_map,key_press.keyCode);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
return goog.events.listen(key_handler,goog.events.KeyHandler.EventType.KEY,press_fn);
});
com.app.core.update_render = (function com$app$core$update_render(){
while(true){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(com.app.core.input)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.app.core.game_state,com.app.move.calc_next_game_state,cljs.core.deref(com.app.core.input));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.core.Game_screen], null),document.getElementById("app"));

if(com.app.core.clear_stage_QMARK_()){
alert(["Clear:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.level)),"\n Your Answer:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.input))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.core.level,cljs.core.inc);

if(cljs.core.truth_((function (){var G__32510 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__32510) : com.app.stage.stages.call(null,G__32510));
})())){
com.app.core.reset_stage();

continue;
} else {
return alert("Clear All Level");
}
} else {
return null;
}
break;
}
});
com.app.core.user_move = (function com$app$core$user_move(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.app.core.input,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));

return com.app.core.update_render();
});
com.app.core.user_reset = (function com$app$core$user_reset(){
cljs.core.reset_BANG_(com.app.core.input,cljs.core.PersistentVector.EMPTY);

return com.app.core.update_render();
});
com.app.core.user_undo = (function com$app$core$user_undo(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.core.input,(function (p1__32511_SHARP_){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),p1__32511_SHARP_);
}));

return com.app.core.update_render();
});
com.app.core.reagent_content_fn = (function com$app$core$reagent_content_fn(){
return com.app.core.capture_key(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.RIGHT,(function (){
return com.app.core.user_move(new cljs.core.Keyword(null,"right","right",-452581833));
}),goog.events.KeyCodes.LEFT,(function (){
return com.app.core.user_move(new cljs.core.Keyword(null,"left","left",-399115937));
}),goog.events.KeyCodes.UP,(function (){
return com.app.core.user_move(new cljs.core.Keyword(null,"up","up",-269712113));
}),goog.events.KeyCodes.DOWN,(function (){
return com.app.core.user_move(new cljs.core.Keyword(null,"down","down",1565245570));
}),goog.events.KeyCodes.SPACE,(function (){
return com.app.core.user_undo();
}),goog.events.KeyCodes.BACKSPACE,(function (){
return com.app.core.user_reset();
}),goog.events.KeyCodes.A,(function (){
return alert((function (){var fexpr__32512 = cljs.core.deref(com.app.core.game_state);
return (fexpr__32512.cljs$core$IFn$_invoke$arity$1 ? fexpr__32512.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"answer","answer",-742633163)) : fexpr__32512.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163)));
})());
}),goog.events.KeyCodes.N,(function (){
alert(["Pass ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.level))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.core.level,cljs.core.inc);

if(cljs.core.truth_((function (){var G__32513 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__32513) : com.app.stage.stages.call(null,G__32513));
})())){
com.app.core.reset_stage();

return com.app.core.update_render();
} else {
return null;
}
})]));
});
com.app.core.run = (function com$app$core$run(){
com.app.core.reset_stage();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(com.app.core.game_state)], 0));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.core.Game_screen], null),document.getElementById("app"));

return com.app.core.reagent_content_fn();
});
goog.exportSymbol('com.app.core.run', com.app.core.run);

//# sourceMappingURL=com.app.core.js.map
