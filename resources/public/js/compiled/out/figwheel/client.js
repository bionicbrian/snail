// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37461){if((e37461 instanceof Error)){
var e = e37461;
return "Error: Unable to stringify";
} else {
throw e37461;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37464 = arguments.length;
switch (G__37464) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37462_SHARP_){
if(typeof p1__37462_SHARP_ === 'string'){
return p1__37462_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37462_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37467 = arguments.length;
var i__29456__auto___37468 = (0);
while(true){
if((i__29456__auto___37468 < len__29455__auto___37467)){
args__29462__auto__.push((arguments[i__29456__auto___37468]));

var G__37469 = (i__29456__auto___37468 + (1));
i__29456__auto___37468 = G__37469;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37466){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37466));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37471 = arguments.length;
var i__29456__auto___37472 = (0);
while(true){
if((i__29456__auto___37472 < len__29455__auto___37471)){
args__29462__auto__.push((arguments[i__29456__auto___37472]));

var G__37473 = (i__29456__auto___37472 + (1));
i__29456__auto___37472 = G__37473;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37470){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37470));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37474){
var map__37475 = p__37474;
var map__37475__$1 = ((((!((map__37475 == null)))?((((map__37475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37475):map__37475);
var message = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32028__auto___37554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___37554,ch){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___37554,ch){
return (function (state_37526){
var state_val_37527 = (state_37526[(1)]);
if((state_val_37527 === (7))){
var inst_37522 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37528_37555 = state_37526__$1;
(statearr_37528_37555[(2)] = inst_37522);

(statearr_37528_37555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (1))){
var state_37526__$1 = state_37526;
var statearr_37529_37556 = state_37526__$1;
(statearr_37529_37556[(2)] = null);

(statearr_37529_37556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (4))){
var inst_37479 = (state_37526[(7)]);
var inst_37479__$1 = (state_37526[(2)]);
var state_37526__$1 = (function (){var statearr_37530 = state_37526;
(statearr_37530[(7)] = inst_37479__$1);

return statearr_37530;
})();
if(cljs.core.truth_(inst_37479__$1)){
var statearr_37531_37557 = state_37526__$1;
(statearr_37531_37557[(1)] = (5));

} else {
var statearr_37532_37558 = state_37526__$1;
(statearr_37532_37558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (15))){
var inst_37486 = (state_37526[(8)]);
var inst_37501 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37486);
var inst_37502 = cljs.core.first.call(null,inst_37501);
var inst_37503 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37502);
var inst_37504 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37503)].join('');
var inst_37505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37504);
var state_37526__$1 = state_37526;
var statearr_37533_37559 = state_37526__$1;
(statearr_37533_37559[(2)] = inst_37505);

(statearr_37533_37559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (13))){
var inst_37510 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37534_37560 = state_37526__$1;
(statearr_37534_37560[(2)] = inst_37510);

(statearr_37534_37560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (6))){
var state_37526__$1 = state_37526;
var statearr_37535_37561 = state_37526__$1;
(statearr_37535_37561[(2)] = null);

(statearr_37535_37561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (17))){
var inst_37508 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37536_37562 = state_37526__$1;
(statearr_37536_37562[(2)] = inst_37508);

(statearr_37536_37562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (3))){
var inst_37524 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37526__$1,inst_37524);
} else {
if((state_val_37527 === (12))){
var inst_37485 = (state_37526[(9)]);
var inst_37499 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37485,opts);
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37499)){
var statearr_37537_37563 = state_37526__$1;
(statearr_37537_37563[(1)] = (15));

} else {
var statearr_37538_37564 = state_37526__$1;
(statearr_37538_37564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (2))){
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37526__$1,(4),ch);
} else {
if((state_val_37527 === (11))){
var inst_37486 = (state_37526[(8)]);
var inst_37491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37492 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37486);
var inst_37493 = cljs.core.async.timeout.call(null,(1000));
var inst_37494 = [inst_37492,inst_37493];
var inst_37495 = (new cljs.core.PersistentVector(null,2,(5),inst_37491,inst_37494,null));
var state_37526__$1 = state_37526;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37526__$1,(14),inst_37495);
} else {
if((state_val_37527 === (9))){
var inst_37486 = (state_37526[(8)]);
var inst_37512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37513 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37486);
var inst_37514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37513);
var inst_37515 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37514)].join('');
var inst_37516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37515);
var state_37526__$1 = (function (){var statearr_37539 = state_37526;
(statearr_37539[(10)] = inst_37512);

return statearr_37539;
})();
var statearr_37540_37565 = state_37526__$1;
(statearr_37540_37565[(2)] = inst_37516);

(statearr_37540_37565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (5))){
var inst_37479 = (state_37526[(7)]);
var inst_37481 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37482 = (new cljs.core.PersistentArrayMap(null,2,inst_37481,null));
var inst_37483 = (new cljs.core.PersistentHashSet(null,inst_37482,null));
var inst_37484 = figwheel.client.focus_msgs.call(null,inst_37483,inst_37479);
var inst_37485 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37484);
var inst_37486 = cljs.core.first.call(null,inst_37484);
var inst_37487 = figwheel.client.autoload_QMARK_.call(null);
var state_37526__$1 = (function (){var statearr_37541 = state_37526;
(statearr_37541[(8)] = inst_37486);

(statearr_37541[(9)] = inst_37485);

return statearr_37541;
})();
if(cljs.core.truth_(inst_37487)){
var statearr_37542_37566 = state_37526__$1;
(statearr_37542_37566[(1)] = (8));

} else {
var statearr_37543_37567 = state_37526__$1;
(statearr_37543_37567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (14))){
var inst_37497 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37544_37568 = state_37526__$1;
(statearr_37544_37568[(2)] = inst_37497);

(statearr_37544_37568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (16))){
var state_37526__$1 = state_37526;
var statearr_37545_37569 = state_37526__$1;
(statearr_37545_37569[(2)] = null);

(statearr_37545_37569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (10))){
var inst_37518 = (state_37526[(2)]);
var state_37526__$1 = (function (){var statearr_37546 = state_37526;
(statearr_37546[(11)] = inst_37518);

return statearr_37546;
})();
var statearr_37547_37570 = state_37526__$1;
(statearr_37547_37570[(2)] = null);

(statearr_37547_37570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (8))){
var inst_37485 = (state_37526[(9)]);
var inst_37489 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37485,opts);
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37489)){
var statearr_37548_37571 = state_37526__$1;
(statearr_37548_37571[(1)] = (11));

} else {
var statearr_37549_37572 = state_37526__$1;
(statearr_37549_37572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32028__auto___37554,ch))
;
return ((function (switch__31940__auto__,c__32028__auto___37554,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____0 = (function (){
var statearr_37550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37550[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__);

(statearr_37550[(1)] = (1));

return statearr_37550;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____1 = (function (state_37526){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_37526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e37551){if((e37551 instanceof Object)){
var ex__31944__auto__ = e37551;
var statearr_37552_37573 = state_37526;
(statearr_37552_37573[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37574 = state_37526;
state_37526 = G__37574;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__ = function(state_37526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____1.call(this,state_37526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31941__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___37554,ch))
})();
var state__32030__auto__ = (function (){var statearr_37553 = f__32029__auto__.call(null);
(statearr_37553[(6)] = c__32028__auto___37554);

return statearr_37553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___37554,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37575_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37575_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37577 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37577){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37576){if((e37576 instanceof Error)){
var e = e37576;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37577], null));
} else {
var e = e37576;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37577))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37578){
var map__37579 = p__37578;
var map__37579__$1 = ((((!((map__37579 == null)))?((((map__37579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37579):map__37579);
var opts = map__37579__$1;
var build_id = cljs.core.get.call(null,map__37579__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37579,map__37579__$1,opts,build_id){
return (function (p__37581){
var vec__37582 = p__37581;
var seq__37583 = cljs.core.seq.call(null,vec__37582);
var first__37584 = cljs.core.first.call(null,seq__37583);
var seq__37583__$1 = cljs.core.next.call(null,seq__37583);
var map__37585 = first__37584;
var map__37585__$1 = ((((!((map__37585 == null)))?((((map__37585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37585):map__37585);
var msg = map__37585__$1;
var msg_name = cljs.core.get.call(null,map__37585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37583__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37582,seq__37583,first__37584,seq__37583__$1,map__37585,map__37585__$1,msg,msg_name,_,map__37579,map__37579__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37582,seq__37583,first__37584,seq__37583__$1,map__37585,map__37585__$1,msg,msg_name,_,map__37579,map__37579__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37579,map__37579__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37587){
var vec__37588 = p__37587;
var seq__37589 = cljs.core.seq.call(null,vec__37588);
var first__37590 = cljs.core.first.call(null,seq__37589);
var seq__37589__$1 = cljs.core.next.call(null,seq__37589);
var map__37591 = first__37590;
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var msg = map__37591__$1;
var msg_name = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37589__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37593){
var map__37594 = p__37593;
var map__37594__$1 = ((((!((map__37594 == null)))?((((map__37594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37594):map__37594);
var on_compile_warning = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37594,map__37594__$1,on_compile_warning,on_compile_fail){
return (function (p__37596){
var vec__37597 = p__37596;
var seq__37598 = cljs.core.seq.call(null,vec__37597);
var first__37599 = cljs.core.first.call(null,seq__37598);
var seq__37598__$1 = cljs.core.next.call(null,seq__37598);
var map__37600 = first__37599;
var map__37600__$1 = ((((!((map__37600 == null)))?((((map__37600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37600):map__37600);
var msg = map__37600__$1;
var msg_name = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37598__$1;
var pred__37602 = cljs.core._EQ_;
var expr__37603 = msg_name;
if(cljs.core.truth_(pred__37602.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37603))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37602.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37603))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37594,map__37594__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__,msg_hist,msg_names,msg){
return (function (state_37692){
var state_val_37693 = (state_37692[(1)]);
if((state_val_37693 === (7))){
var inst_37612 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37612)){
var statearr_37694_37741 = state_37692__$1;
(statearr_37694_37741[(1)] = (8));

} else {
var statearr_37695_37742 = state_37692__$1;
(statearr_37695_37742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (20))){
var inst_37686 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37696_37743 = state_37692__$1;
(statearr_37696_37743[(2)] = inst_37686);

(statearr_37696_37743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (27))){
var inst_37682 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37697_37744 = state_37692__$1;
(statearr_37697_37744[(2)] = inst_37682);

(statearr_37697_37744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (1))){
var inst_37605 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37605)){
var statearr_37698_37745 = state_37692__$1;
(statearr_37698_37745[(1)] = (2));

} else {
var statearr_37699_37746 = state_37692__$1;
(statearr_37699_37746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (24))){
var inst_37684 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37700_37747 = state_37692__$1;
(statearr_37700_37747[(2)] = inst_37684);

(statearr_37700_37747[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (4))){
var inst_37690 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37692__$1,inst_37690);
} else {
if((state_val_37693 === (15))){
var inst_37688 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37701_37748 = state_37692__$1;
(statearr_37701_37748[(2)] = inst_37688);

(statearr_37701_37748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (21))){
var inst_37641 = (state_37692[(2)]);
var inst_37642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37643 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37642);
var state_37692__$1 = (function (){var statearr_37702 = state_37692;
(statearr_37702[(7)] = inst_37641);

return statearr_37702;
})();
var statearr_37703_37749 = state_37692__$1;
(statearr_37703_37749[(2)] = inst_37643);

(statearr_37703_37749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (31))){
var inst_37671 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37671)){
var statearr_37704_37750 = state_37692__$1;
(statearr_37704_37750[(1)] = (34));

} else {
var statearr_37705_37751 = state_37692__$1;
(statearr_37705_37751[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (32))){
var inst_37680 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37706_37752 = state_37692__$1;
(statearr_37706_37752[(2)] = inst_37680);

(statearr_37706_37752[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (33))){
var inst_37667 = (state_37692[(2)]);
var inst_37668 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37669 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37668);
var state_37692__$1 = (function (){var statearr_37707 = state_37692;
(statearr_37707[(8)] = inst_37667);

return statearr_37707;
})();
var statearr_37708_37753 = state_37692__$1;
(statearr_37708_37753[(2)] = inst_37669);

(statearr_37708_37753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (13))){
var inst_37626 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(16),inst_37626);
} else {
if((state_val_37693 === (22))){
var inst_37647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37648 = figwheel.client.heads_up.append_warning_message.call(null,inst_37647);
var state_37692__$1 = state_37692;
var statearr_37709_37754 = state_37692__$1;
(statearr_37709_37754[(2)] = inst_37648);

(statearr_37709_37754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (36))){
var inst_37678 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37710_37755 = state_37692__$1;
(statearr_37710_37755[(2)] = inst_37678);

(statearr_37710_37755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (29))){
var inst_37658 = (state_37692[(2)]);
var inst_37659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37660 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37659);
var state_37692__$1 = (function (){var statearr_37711 = state_37692;
(statearr_37711[(9)] = inst_37658);

return statearr_37711;
})();
var statearr_37712_37756 = state_37692__$1;
(statearr_37712_37756[(2)] = inst_37660);

(statearr_37712_37756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (6))){
var inst_37607 = (state_37692[(10)]);
var state_37692__$1 = state_37692;
var statearr_37713_37757 = state_37692__$1;
(statearr_37713_37757[(2)] = inst_37607);

(statearr_37713_37757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (28))){
var inst_37654 = (state_37692[(2)]);
var inst_37655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37656 = figwheel.client.heads_up.display_warning.call(null,inst_37655);
var state_37692__$1 = (function (){var statearr_37714 = state_37692;
(statearr_37714[(11)] = inst_37654);

return statearr_37714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(29),inst_37656);
} else {
if((state_val_37693 === (25))){
var inst_37652 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(28),inst_37652);
} else {
if((state_val_37693 === (34))){
var inst_37673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(37),inst_37673);
} else {
if((state_val_37693 === (17))){
var inst_37632 = (state_37692[(2)]);
var inst_37633 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37634 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37633);
var state_37692__$1 = (function (){var statearr_37715 = state_37692;
(statearr_37715[(12)] = inst_37632);

return statearr_37715;
})();
var statearr_37716_37758 = state_37692__$1;
(statearr_37716_37758[(2)] = inst_37634);

(statearr_37716_37758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (3))){
var inst_37624 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37624)){
var statearr_37717_37759 = state_37692__$1;
(statearr_37717_37759[(1)] = (13));

} else {
var statearr_37718_37760 = state_37692__$1;
(statearr_37718_37760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (12))){
var inst_37620 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37719_37761 = state_37692__$1;
(statearr_37719_37761[(2)] = inst_37620);

(statearr_37719_37761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (2))){
var inst_37607 = (state_37692[(10)]);
var inst_37607__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37692__$1 = (function (){var statearr_37720 = state_37692;
(statearr_37720[(10)] = inst_37607__$1);

return statearr_37720;
})();
if(cljs.core.truth_(inst_37607__$1)){
var statearr_37721_37762 = state_37692__$1;
(statearr_37721_37762[(1)] = (5));

} else {
var statearr_37722_37763 = state_37692__$1;
(statearr_37722_37763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (23))){
var inst_37650 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37650)){
var statearr_37723_37764 = state_37692__$1;
(statearr_37723_37764[(1)] = (25));

} else {
var statearr_37724_37765 = state_37692__$1;
(statearr_37724_37765[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (35))){
var state_37692__$1 = state_37692;
var statearr_37725_37766 = state_37692__$1;
(statearr_37725_37766[(2)] = null);

(statearr_37725_37766[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (19))){
var inst_37645 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37645)){
var statearr_37726_37767 = state_37692__$1;
(statearr_37726_37767[(1)] = (22));

} else {
var statearr_37727_37768 = state_37692__$1;
(statearr_37727_37768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (11))){
var inst_37616 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37728_37769 = state_37692__$1;
(statearr_37728_37769[(2)] = inst_37616);

(statearr_37728_37769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (9))){
var inst_37618 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(12),inst_37618);
} else {
if((state_val_37693 === (5))){
var inst_37609 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37692__$1 = state_37692;
var statearr_37729_37770 = state_37692__$1;
(statearr_37729_37770[(2)] = inst_37609);

(statearr_37729_37770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (14))){
var inst_37636 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37636)){
var statearr_37730_37771 = state_37692__$1;
(statearr_37730_37771[(1)] = (18));

} else {
var statearr_37731_37772 = state_37692__$1;
(statearr_37731_37772[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (26))){
var inst_37662 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37662)){
var statearr_37732_37773 = state_37692__$1;
(statearr_37732_37773[(1)] = (30));

} else {
var statearr_37733_37774 = state_37692__$1;
(statearr_37733_37774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (16))){
var inst_37628 = (state_37692[(2)]);
var inst_37629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37630 = figwheel.client.heads_up.display_exception.call(null,inst_37629);
var state_37692__$1 = (function (){var statearr_37734 = state_37692;
(statearr_37734[(13)] = inst_37628);

return statearr_37734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(17),inst_37630);
} else {
if((state_val_37693 === (30))){
var inst_37664 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37665 = figwheel.client.heads_up.display_warning.call(null,inst_37664);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(33),inst_37665);
} else {
if((state_val_37693 === (10))){
var inst_37622 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37735_37775 = state_37692__$1;
(statearr_37735_37775[(2)] = inst_37622);

(statearr_37735_37775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (18))){
var inst_37638 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37639 = figwheel.client.heads_up.display_exception.call(null,inst_37638);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(21),inst_37639);
} else {
if((state_val_37693 === (37))){
var inst_37675 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37736_37776 = state_37692__$1;
(statearr_37736_37776[(2)] = inst_37675);

(statearr_37736_37776[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (8))){
var inst_37614 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(11),inst_37614);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32028__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31940__auto__,c__32028__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____0 = (function (){
var statearr_37737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37737[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__);

(statearr_37737[(1)] = (1));

return statearr_37737;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____1 = (function (state_37692){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_37692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e37738){if((e37738 instanceof Object)){
var ex__31944__auto__ = e37738;
var statearr_37739_37777 = state_37692;
(statearr_37739_37777[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37778 = state_37692;
state_37692 = G__37778;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__ = function(state_37692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____1.call(this,state_37692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__,msg_hist,msg_names,msg))
})();
var state__32030__auto__ = (function (){var statearr_37740 = f__32029__auto__.call(null);
(statearr_37740[(6)] = c__32028__auto__);

return statearr_37740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__,msg_hist,msg_names,msg))
);

return c__32028__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32028__auto___37807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto___37807,ch){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto___37807,ch){
return (function (state_37793){
var state_val_37794 = (state_37793[(1)]);
if((state_val_37794 === (1))){
var state_37793__$1 = state_37793;
var statearr_37795_37808 = state_37793__$1;
(statearr_37795_37808[(2)] = null);

(statearr_37795_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (2))){
var state_37793__$1 = state_37793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37793__$1,(4),ch);
} else {
if((state_val_37794 === (3))){
var inst_37791 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37793__$1,inst_37791);
} else {
if((state_val_37794 === (4))){
var inst_37781 = (state_37793[(7)]);
var inst_37781__$1 = (state_37793[(2)]);
var state_37793__$1 = (function (){var statearr_37796 = state_37793;
(statearr_37796[(7)] = inst_37781__$1);

return statearr_37796;
})();
if(cljs.core.truth_(inst_37781__$1)){
var statearr_37797_37809 = state_37793__$1;
(statearr_37797_37809[(1)] = (5));

} else {
var statearr_37798_37810 = state_37793__$1;
(statearr_37798_37810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (5))){
var inst_37781 = (state_37793[(7)]);
var inst_37783 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37781);
var state_37793__$1 = state_37793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37793__$1,(8),inst_37783);
} else {
if((state_val_37794 === (6))){
var state_37793__$1 = state_37793;
var statearr_37799_37811 = state_37793__$1;
(statearr_37799_37811[(2)] = null);

(statearr_37799_37811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (7))){
var inst_37789 = (state_37793[(2)]);
var state_37793__$1 = state_37793;
var statearr_37800_37812 = state_37793__$1;
(statearr_37800_37812[(2)] = inst_37789);

(statearr_37800_37812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37794 === (8))){
var inst_37785 = (state_37793[(2)]);
var state_37793__$1 = (function (){var statearr_37801 = state_37793;
(statearr_37801[(8)] = inst_37785);

return statearr_37801;
})();
var statearr_37802_37813 = state_37793__$1;
(statearr_37802_37813[(2)] = null);

(statearr_37802_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32028__auto___37807,ch))
;
return ((function (switch__31940__auto__,c__32028__auto___37807,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31941__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31941__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null,null,null];
(statearr_37803[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31941__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var figwheel$client$heads_up_plugin_$_state_machine__31941__auto____1 = (function (state_37793){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_37793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__31944__auto__ = e37804;
var statearr_37805_37814 = state_37793;
(statearr_37805_37814[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37815 = state_37793;
state_37793 = G__37815;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31941__auto__ = function(state_37793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31941__auto____1.call(this,state_37793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31941__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31941__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto___37807,ch))
})();
var state__32030__auto__ = (function (){var statearr_37806 = f__32029__auto__.call(null);
(statearr_37806[(6)] = c__32028__auto___37807);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto___37807,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__){
return (function (state_37821){
var state_val_37822 = (state_37821[(1)]);
if((state_val_37822 === (1))){
var inst_37816 = cljs.core.async.timeout.call(null,(3000));
var state_37821__$1 = state_37821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37821__$1,(2),inst_37816);
} else {
if((state_val_37822 === (2))){
var inst_37818 = (state_37821[(2)]);
var inst_37819 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37821__$1 = (function (){var statearr_37823 = state_37821;
(statearr_37823[(7)] = inst_37818);

return statearr_37823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37821__$1,inst_37819);
} else {
return null;
}
}
});})(c__32028__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____0 = (function (){
var statearr_37824 = [null,null,null,null,null,null,null,null];
(statearr_37824[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__);

(statearr_37824[(1)] = (1));

return statearr_37824;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____1 = (function (state_37821){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_37821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e37825){if((e37825 instanceof Object)){
var ex__31944__auto__ = e37825;
var statearr_37826_37828 = state_37821;
(statearr_37826_37828[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37829 = state_37821;
state_37821 = G__37829;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__ = function(state_37821){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____1.call(this,state_37821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31941__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__))
})();
var state__32030__auto__ = (function (){var statearr_37827 = f__32029__auto__.call(null);
(statearr_37827[(6)] = c__32028__auto__);

return statearr_37827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__))
);

return c__32028__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32028__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32028__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32029__auto__ = (function (){var switch__31940__auto__ = ((function (c__32028__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37836){
var state_val_37837 = (state_37836[(1)]);
if((state_val_37837 === (1))){
var inst_37830 = cljs.core.async.timeout.call(null,(2000));
var state_37836__$1 = state_37836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37836__$1,(2),inst_37830);
} else {
if((state_val_37837 === (2))){
var inst_37832 = (state_37836[(2)]);
var inst_37833 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37834 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37833);
var state_37836__$1 = (function (){var statearr_37838 = state_37836;
(statearr_37838[(7)] = inst_37832);

return statearr_37838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37836__$1,inst_37834);
} else {
return null;
}
}
});})(c__32028__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31940__auto__,c__32028__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____0 = (function (){
var statearr_37839 = [null,null,null,null,null,null,null,null];
(statearr_37839[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__);

(statearr_37839[(1)] = (1));

return statearr_37839;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____1 = (function (state_37836){
while(true){
var ret_value__31942__auto__ = (function (){try{while(true){
var result__31943__auto__ = switch__31940__auto__.call(null,state_37836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31943__auto__;
}
break;
}
}catch (e37840){if((e37840 instanceof Object)){
var ex__31944__auto__ = e37840;
var statearr_37841_37843 = state_37836;
(statearr_37841_37843[(5)] = ex__31944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37844 = state_37836;
state_37836 = G__37844;
continue;
} else {
return ret_value__31942__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__ = function(state_37836){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____1.call(this,state_37836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31941__auto__;
})()
;})(switch__31940__auto__,c__32028__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32030__auto__ = (function (){var statearr_37842 = f__32029__auto__.call(null);
(statearr_37842[(6)] = c__32028__auto__);

return statearr_37842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32030__auto__);
});})(c__32028__auto__,figwheel_version,temp__4657__auto__))
);

return c__32028__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37845){
var map__37846 = p__37845;
var map__37846__$1 = ((((!((map__37846 == null)))?((((map__37846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37846):map__37846);
var file = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37848 = "";
var G__37848__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37848),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37848);
var G__37848__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37848__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37848__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37848__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37848__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37849){
var map__37850 = p__37849;
var map__37850__$1 = ((((!((map__37850 == null)))?((((map__37850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37850):map__37850);
var ed = map__37850__$1;
var formatted_exception = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37852_37856 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37853_37857 = null;
var count__37854_37858 = (0);
var i__37855_37859 = (0);
while(true){
if((i__37855_37859 < count__37854_37858)){
var msg_37860 = cljs.core._nth.call(null,chunk__37853_37857,i__37855_37859);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37860);

var G__37861 = seq__37852_37856;
var G__37862 = chunk__37853_37857;
var G__37863 = count__37854_37858;
var G__37864 = (i__37855_37859 + (1));
seq__37852_37856 = G__37861;
chunk__37853_37857 = G__37862;
count__37854_37858 = G__37863;
i__37855_37859 = G__37864;
continue;
} else {
var temp__4657__auto___37865 = cljs.core.seq.call(null,seq__37852_37856);
if(temp__4657__auto___37865){
var seq__37852_37866__$1 = temp__4657__auto___37865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37852_37866__$1)){
var c__29125__auto___37867 = cljs.core.chunk_first.call(null,seq__37852_37866__$1);
var G__37868 = cljs.core.chunk_rest.call(null,seq__37852_37866__$1);
var G__37869 = c__29125__auto___37867;
var G__37870 = cljs.core.count.call(null,c__29125__auto___37867);
var G__37871 = (0);
seq__37852_37856 = G__37868;
chunk__37853_37857 = G__37869;
count__37854_37858 = G__37870;
i__37855_37859 = G__37871;
continue;
} else {
var msg_37872 = cljs.core.first.call(null,seq__37852_37866__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37872);

var G__37873 = cljs.core.next.call(null,seq__37852_37866__$1);
var G__37874 = null;
var G__37875 = (0);
var G__37876 = (0);
seq__37852_37856 = G__37873;
chunk__37853_37857 = G__37874;
count__37854_37858 = G__37875;
i__37855_37859 = G__37876;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37877){
var map__37878 = p__37877;
var map__37878__$1 = ((((!((map__37878 == null)))?((((map__37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37878):map__37878);
var w = map__37878__$1;
var message = cljs.core.get.call(null,map__37878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37880 = cljs.core.seq.call(null,plugins);
var chunk__37881 = null;
var count__37882 = (0);
var i__37883 = (0);
while(true){
if((i__37883 < count__37882)){
var vec__37884 = cljs.core._nth.call(null,chunk__37881,i__37883);
var k = cljs.core.nth.call(null,vec__37884,(0),null);
var plugin = cljs.core.nth.call(null,vec__37884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37880,chunk__37881,count__37882,i__37883,pl_37890,vec__37884,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37890.call(null,msg_hist);
});})(seq__37880,chunk__37881,count__37882,i__37883,pl_37890,vec__37884,k,plugin))
);
} else {
}

var G__37891 = seq__37880;
var G__37892 = chunk__37881;
var G__37893 = count__37882;
var G__37894 = (i__37883 + (1));
seq__37880 = G__37891;
chunk__37881 = G__37892;
count__37882 = G__37893;
i__37883 = G__37894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37880);
if(temp__4657__auto__){
var seq__37880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37880__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37880__$1);
var G__37895 = cljs.core.chunk_rest.call(null,seq__37880__$1);
var G__37896 = c__29125__auto__;
var G__37897 = cljs.core.count.call(null,c__29125__auto__);
var G__37898 = (0);
seq__37880 = G__37895;
chunk__37881 = G__37896;
count__37882 = G__37897;
i__37883 = G__37898;
continue;
} else {
var vec__37887 = cljs.core.first.call(null,seq__37880__$1);
var k = cljs.core.nth.call(null,vec__37887,(0),null);
var plugin = cljs.core.nth.call(null,vec__37887,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37899 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37880,chunk__37881,count__37882,i__37883,pl_37899,vec__37887,k,plugin,seq__37880__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37899.call(null,msg_hist);
});})(seq__37880,chunk__37881,count__37882,i__37883,pl_37899,vec__37887,k,plugin,seq__37880__$1,temp__4657__auto__))
);
} else {
}

var G__37900 = cljs.core.next.call(null,seq__37880__$1);
var G__37901 = null;
var G__37902 = (0);
var G__37903 = (0);
seq__37880 = G__37900;
chunk__37881 = G__37901;
count__37882 = G__37902;
i__37883 = G__37903;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37905 = arguments.length;
switch (G__37905) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37906_37911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37907_37912 = null;
var count__37908_37913 = (0);
var i__37909_37914 = (0);
while(true){
if((i__37909_37914 < count__37908_37913)){
var msg_37915 = cljs.core._nth.call(null,chunk__37907_37912,i__37909_37914);
figwheel.client.socket.handle_incoming_message.call(null,msg_37915);

var G__37916 = seq__37906_37911;
var G__37917 = chunk__37907_37912;
var G__37918 = count__37908_37913;
var G__37919 = (i__37909_37914 + (1));
seq__37906_37911 = G__37916;
chunk__37907_37912 = G__37917;
count__37908_37913 = G__37918;
i__37909_37914 = G__37919;
continue;
} else {
var temp__4657__auto___37920 = cljs.core.seq.call(null,seq__37906_37911);
if(temp__4657__auto___37920){
var seq__37906_37921__$1 = temp__4657__auto___37920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37906_37921__$1)){
var c__29125__auto___37922 = cljs.core.chunk_first.call(null,seq__37906_37921__$1);
var G__37923 = cljs.core.chunk_rest.call(null,seq__37906_37921__$1);
var G__37924 = c__29125__auto___37922;
var G__37925 = cljs.core.count.call(null,c__29125__auto___37922);
var G__37926 = (0);
seq__37906_37911 = G__37923;
chunk__37907_37912 = G__37924;
count__37908_37913 = G__37925;
i__37909_37914 = G__37926;
continue;
} else {
var msg_37927 = cljs.core.first.call(null,seq__37906_37921__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37927);

var G__37928 = cljs.core.next.call(null,seq__37906_37921__$1);
var G__37929 = null;
var G__37930 = (0);
var G__37931 = (0);
seq__37906_37911 = G__37928;
chunk__37907_37912 = G__37929;
count__37908_37913 = G__37930;
i__37909_37914 = G__37931;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37936 = arguments.length;
var i__29456__auto___37937 = (0);
while(true){
if((i__29456__auto___37937 < len__29455__auto___37936)){
args__29462__auto__.push((arguments[i__29456__auto___37937]));

var G__37938 = (i__29456__auto___37937 + (1));
i__29456__auto___37937 = G__37938;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37933){
var map__37934 = p__37933;
var map__37934__$1 = ((((!((map__37934 == null)))?((((map__37934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37934):map__37934);
var opts = map__37934__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37932){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37932));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37939){if((e37939 instanceof Error)){
var e = e37939;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37939;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37940){
var map__37941 = p__37940;
var map__37941__$1 = ((((!((map__37941 == null)))?((((map__37941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37941):map__37941);
var msg_name = cljs.core.get.call(null,map__37941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1508696625712
