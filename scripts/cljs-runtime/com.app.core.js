goog.provide('com.app.core');
var module$node_modules$react_adfit_web_component$dist$react_adfit_web_component=shadow.js.require("module$node_modules$react_adfit_web_component$dist$react_adfit_web_component", {});
com.app.core.level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
com.app.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
com.app.core.input = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
com.app.core.reset_stage = (function com$app$core$reset_stage(){
cljs.core.reset_BANG_(com.app.core.input,cljs.core.PersistentVector.EMPTY);

var curr = (function (){var G__33522 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__33522) : com.app.stage.stages.call(null,G__33522));
})();
return cljs.core.reset_BANG_(com.app.core.game_state,com.app.generator.init_boards((curr.cljs$core$IFn$_invoke$arity$1 ? curr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"answer","answer",-742633163)) : curr.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163))),(curr.cljs$core$IFn$_invoke$arity$1 ? curr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"maps","maps",-1711561134)) : curr.call(null,new cljs.core.Keyword(null,"maps","maps",-1711561134)))));
});
com.app.core.clear_stage_QMARK_ = (function com$app$core$clear_stage_QMARK_(){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"is_goalin","is_goalin",-1291824626),(function (){var fexpr__33523 = cljs.core.deref(com.app.core.game_state);
return (fexpr__33523.cljs$core$IFn$_invoke$arity$1 ? fexpr__33523.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boards","boards",1912049694)) : fexpr__33523.call(null,new cljs.core.Keyword(null,"boards","boards",1912049694)));
})());
});
com.app.core.pre_fixed_pos = (function com$app$core$pre_fixed_pos(boards,board_count){
var G__33524 = board_count;
switch (G__33524) {
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33525 = (function (){var fexpr__33528 = cljs.core.first(boards);
return (fexpr__33528.cljs$core$IFn$_invoke$arity$1 ? fexpr__33528.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33528.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33526 = (70);
var G__33527 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33525,G__33526,G__33527) : com.app.core.Grid.call(null,G__33525,G__33526,G__33527));
})()], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33529 = (function (){var fexpr__33532 = cljs.core.first(boards);
return (fexpr__33532.cljs$core$IFn$_invoke$arity$1 ? fexpr__33532.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33532.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33530 = (70);
var G__33531 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33529,G__33530,G__33531) : com.app.core.Grid.call(null,G__33529,G__33530,G__33531));
})(),(function (){var G__33533 = (function (){var fexpr__33536 = cljs.core.second(boards);
return (fexpr__33536.cljs$core$IFn$_invoke$arity$1 ? fexpr__33536.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33536.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33534 = (70);
var G__33535 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33533,G__33534,G__33535) : com.app.core.Grid.call(null,G__33533,G__33534,G__33535));
})()], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33537 = (function (){var fexpr__33540 = cljs.core.first(boards);
return (fexpr__33540.cljs$core$IFn$_invoke$arity$1 ? fexpr__33540.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33540.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33538 = (70);
var G__33539 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33537,G__33538,G__33539) : com.app.core.Grid.call(null,G__33537,G__33538,G__33539));
})(),(function (){var G__33541 = (function (){var fexpr__33544 = cljs.core.second(boards);
return (fexpr__33544.cljs$core$IFn$_invoke$arity$1 ? fexpr__33544.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33544.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33542 = (70);
var G__33543 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33541,G__33542,G__33543) : com.app.core.Grid.call(null,G__33541,G__33542,G__33543));
})(),(function (){var G__33545 = (function (){var fexpr__33548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__33548.cljs$core$IFn$_invoke$arity$1 ? fexpr__33548.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33548.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33546 = (70);
var G__33547 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33545,G__33546,G__33547) : com.app.core.Grid.call(null,G__33545,G__33546,G__33547));
})()], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33549 = (function (){var fexpr__33552 = cljs.core.first(boards);
return (fexpr__33552.cljs$core$IFn$_invoke$arity$1 ? fexpr__33552.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33552.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33550 = (70);
var G__33551 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33549,G__33550,G__33551) : com.app.core.Grid.call(null,G__33549,G__33550,G__33551));
})(),(function (){var G__33553 = (function (){var fexpr__33556 = cljs.core.second(boards);
return (fexpr__33556.cljs$core$IFn$_invoke$arity$1 ? fexpr__33556.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33556.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33554 = (70);
var G__33555 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33553,G__33554,G__33555) : com.app.core.Grid.call(null,G__33553,G__33554,G__33555));
})(),(function (){var G__33557 = (function (){var fexpr__33560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__33560.cljs$core$IFn$_invoke$arity$1 ? fexpr__33560.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33560.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33558 = (270);
var G__33559 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33557,G__33558,G__33559) : com.app.core.Grid.call(null,G__33557,G__33558,G__33559));
})(),(function (){var G__33561 = (function (){var fexpr__33564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__33564.cljs$core$IFn$_invoke$arity$1 ? fexpr__33564.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33564.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33562 = (270);
var G__33563 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33561,G__33562,G__33563) : com.app.core.Grid.call(null,G__33561,G__33562,G__33563));
})()], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33565 = (function (){var fexpr__33568 = cljs.core.first(boards);
return (fexpr__33568.cljs$core$IFn$_invoke$arity$1 ? fexpr__33568.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33568.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33566 = (70);
var G__33567 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33565,G__33566,G__33567) : com.app.core.Grid.call(null,G__33565,G__33566,G__33567));
})(),(function (){var G__33569 = (function (){var fexpr__33572 = cljs.core.second(boards);
return (fexpr__33572.cljs$core$IFn$_invoke$arity$1 ? fexpr__33572.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33572.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33570 = (70);
var G__33571 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33569,G__33570,G__33571) : com.app.core.Grid.call(null,G__33569,G__33570,G__33571));
})(),(function (){var G__33573 = (function (){var fexpr__33576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__33576.cljs$core$IFn$_invoke$arity$1 ? fexpr__33576.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33576.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33574 = (70);
var G__33575 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33573,G__33574,G__33575) : com.app.core.Grid.call(null,G__33573,G__33574,G__33575));
})(),(function (){var G__33577 = (function (){var fexpr__33580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__33580.cljs$core$IFn$_invoke$arity$1 ? fexpr__33580.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33580.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33578 = (270);
var G__33579 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33577,G__33578,G__33579) : com.app.core.Grid.call(null,G__33577,G__33578,G__33579));
})(),(function (){var G__33581 = (function (){var fexpr__33584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(4));
return (fexpr__33584.cljs$core$IFn$_invoke$arity$1 ? fexpr__33584.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33584.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33582 = (270);
var G__33583 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33581,G__33582,G__33583) : com.app.core.Grid.call(null,G__33581,G__33582,G__33583));
})()], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33585 = (function (){var fexpr__33588 = cljs.core.first(boards);
return (fexpr__33588.cljs$core$IFn$_invoke$arity$1 ? fexpr__33588.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33588.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33586 = (70);
var G__33587 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33585,G__33586,G__33587) : com.app.core.Grid.call(null,G__33585,G__33586,G__33587));
})(),(function (){var G__33589 = (function (){var fexpr__33592 = cljs.core.second(boards);
return (fexpr__33592.cljs$core$IFn$_invoke$arity$1 ? fexpr__33592.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33592.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33590 = (70);
var G__33591 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33589,G__33590,G__33591) : com.app.core.Grid.call(null,G__33589,G__33590,G__33591));
})(),(function (){var G__33593 = (function (){var fexpr__33596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(2));
return (fexpr__33596.cljs$core$IFn$_invoke$arity$1 ? fexpr__33596.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33596.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33594 = (70);
var G__33595 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33593,G__33594,G__33595) : com.app.core.Grid.call(null,G__33593,G__33594,G__33595));
})(),(function (){var G__33597 = (function (){var fexpr__33600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(3));
return (fexpr__33600.cljs$core$IFn$_invoke$arity$1 ? fexpr__33600.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33600.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33598 = (270);
var G__33599 = (10);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33597,G__33598,G__33599) : com.app.core.Grid.call(null,G__33597,G__33598,G__33599));
})(),(function (){var G__33601 = (function (){var fexpr__33604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(4));
return (fexpr__33604.cljs$core$IFn$_invoke$arity$1 ? fexpr__33604.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33604.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33602 = (270);
var G__33603 = (210);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33601,G__33602,G__33603) : com.app.core.Grid.call(null,G__33601,G__33602,G__33603));
})(),(function (){var G__33605 = (function (){var fexpr__33608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(boards,(5));
return (fexpr__33608.cljs$core$IFn$_invoke$arity$1 ? fexpr__33608.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-board","display-board",2049877948)) : fexpr__33608.call(null,new cljs.core.Keyword(null,"display-board","display-board",2049877948)));
})();
var G__33606 = (270);
var G__33607 = (410);
return (com.app.core.Grid.cljs$core$IFn$_invoke$arity$3 ? com.app.core.Grid.cljs$core$IFn$_invoke$arity$3(G__33605,G__33606,G__33607) : com.app.core.Grid.call(null,G__33605,G__33606,G__33607));
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33524)].join('')));

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
var boards = (function (){var fexpr__33609 = cljs.core.deref(com.app.core.game_state);
return (fexpr__33609.cljs$core$IFn$_invoke$arity$1 ? fexpr__33609.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boards","boards",1912049694)) : fexpr__33609.call(null,new cljs.core.Keyword(null,"boards","boards",1912049694)));
})();
var div = com.app.core.pre_fixed_pos(boards,cljs.core.count((function (){var fexpr__33611 = (function (){var G__33612 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__33612) : com.app.stage.stages.call(null,G__33612));
})();
return (fexpr__33611.cljs$core$IFn$_invoke$arity$1 ? fexpr__33611.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"maps","maps",-1711561134)) : fexpr__33611.call(null,new cljs.core.Keyword(null,"maps","maps",-1711561134)));
})()));
return div;
});
com.app.core.Title = (function com$app$core$Title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#474787"], null)], null),"PARALLEL WOARD    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#474787",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null),new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Lee-WonJun/Parallel-Woard"], null),"How to play"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#474787",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"500px","500px",-177572505),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"10px","10px",-859606082)], null)], null),["Your Answer : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.input))].join('')], null)], null);
});
com.app.core.Adfit = (function com$app$core$Adfit(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ad","div.ad",-1663717993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"0px","0px",-576744978),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_adfit_web_component$dist$react_adfit_web_component.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"adUnit","adUnit",144069371),"DAN-Ju5YcfYb9l021EIO"], null)], null)], null);
});
com.app.core.Game_screen = (function com$app$core$Game_screen(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),com.app.core.Title(),com.app.core.All_Board(),com.app.core.Adfit()], null);
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

if(cljs.core.truth_((function (){var G__33613 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__33613) : com.app.stage.stages.call(null,G__33613));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.core.input,(function (p1__33614_SHARP_){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),p1__33614_SHARP_);
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
}),goog.events.KeyCodes.N,(function (){
alert(["Pass ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.app.core.level))].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.core.level,cljs.core.inc);

if(cljs.core.truth_((function (){var G__33615 = cljs.core.deref(com.app.core.level);
return (com.app.stage.stages.cljs$core$IFn$_invoke$arity$1 ? com.app.stage.stages.cljs$core$IFn$_invoke$arity$1(G__33615) : com.app.stage.stages.call(null,G__33615));
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
