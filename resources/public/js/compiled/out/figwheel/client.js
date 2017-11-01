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
}catch (e37463){if((e37463 instanceof Error)){
var e = e37463;
return "Error: Unable to stringify";
} else {
throw e37463;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37466 = arguments.length;
switch (G__37466) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37464_SHARP_){
if(typeof p1__37464_SHARP_ === 'string'){
return p1__37464_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37464_SHARP_);
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
var len__29455__auto___37469 = arguments.length;
var i__29456__auto___37470 = (0);
while(true){
if((i__29456__auto___37470 < len__29455__auto___37469)){
args__29462__auto__.push((arguments[i__29456__auto___37470]));

var G__37471 = (i__29456__auto___37470 + (1));
i__29456__auto___37470 = G__37471;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37468){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37468));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37473 = arguments.length;
var i__29456__auto___37474 = (0);
while(true){
if((i__29456__auto___37474 < len__29455__auto___37473)){
args__29462__auto__.push((arguments[i__29456__auto___37474]));

var G__37475 = (i__29456__auto___37474 + (1));
i__29456__auto___37474 = G__37475;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37472){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37472));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37476){
var map__37477 = p__37476;
var map__37477__$1 = ((((!((map__37477 == null)))?((((map__37477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37477):map__37477);
var message = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32583__auto___37556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___37556,ch){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___37556,ch){
return (function (state_37528){
var state_val_37529 = (state_37528[(1)]);
if((state_val_37529 === (7))){
var inst_37524 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37530_37557 = state_37528__$1;
(statearr_37530_37557[(2)] = inst_37524);

(statearr_37530_37557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (1))){
var state_37528__$1 = state_37528;
var statearr_37531_37558 = state_37528__$1;
(statearr_37531_37558[(2)] = null);

(statearr_37531_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (4))){
var inst_37481 = (state_37528[(7)]);
var inst_37481__$1 = (state_37528[(2)]);
var state_37528__$1 = (function (){var statearr_37532 = state_37528;
(statearr_37532[(7)] = inst_37481__$1);

return statearr_37532;
})();
if(cljs.core.truth_(inst_37481__$1)){
var statearr_37533_37559 = state_37528__$1;
(statearr_37533_37559[(1)] = (5));

} else {
var statearr_37534_37560 = state_37528__$1;
(statearr_37534_37560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (15))){
var inst_37488 = (state_37528[(8)]);
var inst_37503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37488);
var inst_37504 = cljs.core.first.call(null,inst_37503);
var inst_37505 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37504);
var inst_37506 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37505)].join('');
var inst_37507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37506);
var state_37528__$1 = state_37528;
var statearr_37535_37561 = state_37528__$1;
(statearr_37535_37561[(2)] = inst_37507);

(statearr_37535_37561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (13))){
var inst_37512 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37536_37562 = state_37528__$1;
(statearr_37536_37562[(2)] = inst_37512);

(statearr_37536_37562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (6))){
var state_37528__$1 = state_37528;
var statearr_37537_37563 = state_37528__$1;
(statearr_37537_37563[(2)] = null);

(statearr_37537_37563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (17))){
var inst_37510 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37538_37564 = state_37528__$1;
(statearr_37538_37564[(2)] = inst_37510);

(statearr_37538_37564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (3))){
var inst_37526 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37528__$1,inst_37526);
} else {
if((state_val_37529 === (12))){
var inst_37487 = (state_37528[(9)]);
var inst_37501 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37487,opts);
var state_37528__$1 = state_37528;
if(cljs.core.truth_(inst_37501)){
var statearr_37539_37565 = state_37528__$1;
(statearr_37539_37565[(1)] = (15));

} else {
var statearr_37540_37566 = state_37528__$1;
(statearr_37540_37566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (2))){
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37528__$1,(4),ch);
} else {
if((state_val_37529 === (11))){
var inst_37488 = (state_37528[(8)]);
var inst_37493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37494 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37488);
var inst_37495 = cljs.core.async.timeout.call(null,(1000));
var inst_37496 = [inst_37494,inst_37495];
var inst_37497 = (new cljs.core.PersistentVector(null,2,(5),inst_37493,inst_37496,null));
var state_37528__$1 = state_37528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37528__$1,(14),inst_37497);
} else {
if((state_val_37529 === (9))){
var inst_37488 = (state_37528[(8)]);
var inst_37514 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37515 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37488);
var inst_37516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37515);
var inst_37517 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37516)].join('');
var inst_37518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37517);
var state_37528__$1 = (function (){var statearr_37541 = state_37528;
(statearr_37541[(10)] = inst_37514);

return statearr_37541;
})();
var statearr_37542_37567 = state_37528__$1;
(statearr_37542_37567[(2)] = inst_37518);

(statearr_37542_37567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (5))){
var inst_37481 = (state_37528[(7)]);
var inst_37483 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37484 = (new cljs.core.PersistentArrayMap(null,2,inst_37483,null));
var inst_37485 = (new cljs.core.PersistentHashSet(null,inst_37484,null));
var inst_37486 = figwheel.client.focus_msgs.call(null,inst_37485,inst_37481);
var inst_37487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37486);
var inst_37488 = cljs.core.first.call(null,inst_37486);
var inst_37489 = figwheel.client.autoload_QMARK_.call(null);
var state_37528__$1 = (function (){var statearr_37543 = state_37528;
(statearr_37543[(8)] = inst_37488);

(statearr_37543[(9)] = inst_37487);

return statearr_37543;
})();
if(cljs.core.truth_(inst_37489)){
var statearr_37544_37568 = state_37528__$1;
(statearr_37544_37568[(1)] = (8));

} else {
var statearr_37545_37569 = state_37528__$1;
(statearr_37545_37569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (14))){
var inst_37499 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37546_37570 = state_37528__$1;
(statearr_37546_37570[(2)] = inst_37499);

(statearr_37546_37570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (16))){
var state_37528__$1 = state_37528;
var statearr_37547_37571 = state_37528__$1;
(statearr_37547_37571[(2)] = null);

(statearr_37547_37571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (10))){
var inst_37520 = (state_37528[(2)]);
var state_37528__$1 = (function (){var statearr_37548 = state_37528;
(statearr_37548[(11)] = inst_37520);

return statearr_37548;
})();
var statearr_37549_37572 = state_37528__$1;
(statearr_37549_37572[(2)] = null);

(statearr_37549_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (8))){
var inst_37487 = (state_37528[(9)]);
var inst_37491 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37487,opts);
var state_37528__$1 = state_37528;
if(cljs.core.truth_(inst_37491)){
var statearr_37550_37573 = state_37528__$1;
(statearr_37550_37573[(1)] = (11));

} else {
var statearr_37551_37574 = state_37528__$1;
(statearr_37551_37574[(1)] = (12));

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
});})(c__32583__auto___37556,ch))
;
return ((function (switch__32495__auto__,c__32583__auto___37556,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____0 = (function (){
var statearr_37552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37552[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__);

(statearr_37552[(1)] = (1));

return statearr_37552;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____1 = (function (state_37528){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_37528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e37553){if((e37553 instanceof Object)){
var ex__32499__auto__ = e37553;
var statearr_37554_37575 = state_37528;
(statearr_37554_37575[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37576 = state_37528;
state_37528 = G__37576;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32496__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___37556,ch))
})();
var state__32585__auto__ = (function (){var statearr_37555 = f__32584__auto__.call(null);
(statearr_37555[(6)] = c__32583__auto___37556);

return statearr_37555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___37556,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37577_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37577_SHARP_));
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
var base_path_37579 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37579){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37578){if((e37578 instanceof Error)){
var e = e37578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37579], null));
} else {
var e = e37578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37579))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37580){
var map__37581 = p__37580;
var map__37581__$1 = ((((!((map__37581 == null)))?((((map__37581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37581):map__37581);
var opts = map__37581__$1;
var build_id = cljs.core.get.call(null,map__37581__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37581,map__37581__$1,opts,build_id){
return (function (p__37583){
var vec__37584 = p__37583;
var seq__37585 = cljs.core.seq.call(null,vec__37584);
var first__37586 = cljs.core.first.call(null,seq__37585);
var seq__37585__$1 = cljs.core.next.call(null,seq__37585);
var map__37587 = first__37586;
var map__37587__$1 = ((((!((map__37587 == null)))?((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37587):map__37587);
var msg = map__37587__$1;
var msg_name = cljs.core.get.call(null,map__37587__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37585__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37584,seq__37585,first__37586,seq__37585__$1,map__37587,map__37587__$1,msg,msg_name,_,map__37581,map__37581__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37584,seq__37585,first__37586,seq__37585__$1,map__37587,map__37587__$1,msg,msg_name,_,map__37581,map__37581__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37581,map__37581__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37589){
var vec__37590 = p__37589;
var seq__37591 = cljs.core.seq.call(null,vec__37590);
var first__37592 = cljs.core.first.call(null,seq__37591);
var seq__37591__$1 = cljs.core.next.call(null,seq__37591);
var map__37593 = first__37592;
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var msg = map__37593__$1;
var msg_name = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37591__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37595){
var map__37596 = p__37595;
var map__37596__$1 = ((((!((map__37596 == null)))?((((map__37596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37596):map__37596);
var on_compile_warning = cljs.core.get.call(null,map__37596__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37596__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37596,map__37596__$1,on_compile_warning,on_compile_fail){
return (function (p__37598){
var vec__37599 = p__37598;
var seq__37600 = cljs.core.seq.call(null,vec__37599);
var first__37601 = cljs.core.first.call(null,seq__37600);
var seq__37600__$1 = cljs.core.next.call(null,seq__37600);
var map__37602 = first__37601;
var map__37602__$1 = ((((!((map__37602 == null)))?((((map__37602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37602):map__37602);
var msg = map__37602__$1;
var msg_name = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37600__$1;
var pred__37604 = cljs.core._EQ_;
var expr__37605 = msg_name;
if(cljs.core.truth_(pred__37604.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37605))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37604.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37605))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37596,map__37596__$1,on_compile_warning,on_compile_fail))
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
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__,msg_hist,msg_names,msg){
return (function (state_37694){
var state_val_37695 = (state_37694[(1)]);
if((state_val_37695 === (7))){
var inst_37614 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37614)){
var statearr_37696_37743 = state_37694__$1;
(statearr_37696_37743[(1)] = (8));

} else {
var statearr_37697_37744 = state_37694__$1;
(statearr_37697_37744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (20))){
var inst_37688 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37698_37745 = state_37694__$1;
(statearr_37698_37745[(2)] = inst_37688);

(statearr_37698_37745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (27))){
var inst_37684 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37699_37746 = state_37694__$1;
(statearr_37699_37746[(2)] = inst_37684);

(statearr_37699_37746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (1))){
var inst_37607 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37607)){
var statearr_37700_37747 = state_37694__$1;
(statearr_37700_37747[(1)] = (2));

} else {
var statearr_37701_37748 = state_37694__$1;
(statearr_37701_37748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (24))){
var inst_37686 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37702_37749 = state_37694__$1;
(statearr_37702_37749[(2)] = inst_37686);

(statearr_37702_37749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (4))){
var inst_37692 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37694__$1,inst_37692);
} else {
if((state_val_37695 === (15))){
var inst_37690 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37703_37750 = state_37694__$1;
(statearr_37703_37750[(2)] = inst_37690);

(statearr_37703_37750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (21))){
var inst_37643 = (state_37694[(2)]);
var inst_37644 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37645 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37644);
var state_37694__$1 = (function (){var statearr_37704 = state_37694;
(statearr_37704[(7)] = inst_37643);

return statearr_37704;
})();
var statearr_37705_37751 = state_37694__$1;
(statearr_37705_37751[(2)] = inst_37645);

(statearr_37705_37751[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (31))){
var inst_37673 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37673)){
var statearr_37706_37752 = state_37694__$1;
(statearr_37706_37752[(1)] = (34));

} else {
var statearr_37707_37753 = state_37694__$1;
(statearr_37707_37753[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (32))){
var inst_37682 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37708_37754 = state_37694__$1;
(statearr_37708_37754[(2)] = inst_37682);

(statearr_37708_37754[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (33))){
var inst_37669 = (state_37694[(2)]);
var inst_37670 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37671 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37670);
var state_37694__$1 = (function (){var statearr_37709 = state_37694;
(statearr_37709[(8)] = inst_37669);

return statearr_37709;
})();
var statearr_37710_37755 = state_37694__$1;
(statearr_37710_37755[(2)] = inst_37671);

(statearr_37710_37755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (13))){
var inst_37628 = figwheel.client.heads_up.clear.call(null);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(16),inst_37628);
} else {
if((state_val_37695 === (22))){
var inst_37649 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37650 = figwheel.client.heads_up.append_warning_message.call(null,inst_37649);
var state_37694__$1 = state_37694;
var statearr_37711_37756 = state_37694__$1;
(statearr_37711_37756[(2)] = inst_37650);

(statearr_37711_37756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (36))){
var inst_37680 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37712_37757 = state_37694__$1;
(statearr_37712_37757[(2)] = inst_37680);

(statearr_37712_37757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (29))){
var inst_37660 = (state_37694[(2)]);
var inst_37661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37662 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37661);
var state_37694__$1 = (function (){var statearr_37713 = state_37694;
(statearr_37713[(9)] = inst_37660);

return statearr_37713;
})();
var statearr_37714_37758 = state_37694__$1;
(statearr_37714_37758[(2)] = inst_37662);

(statearr_37714_37758[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (6))){
var inst_37609 = (state_37694[(10)]);
var state_37694__$1 = state_37694;
var statearr_37715_37759 = state_37694__$1;
(statearr_37715_37759[(2)] = inst_37609);

(statearr_37715_37759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (28))){
var inst_37656 = (state_37694[(2)]);
var inst_37657 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37658 = figwheel.client.heads_up.display_warning.call(null,inst_37657);
var state_37694__$1 = (function (){var statearr_37716 = state_37694;
(statearr_37716[(11)] = inst_37656);

return statearr_37716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(29),inst_37658);
} else {
if((state_val_37695 === (25))){
var inst_37654 = figwheel.client.heads_up.clear.call(null);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(28),inst_37654);
} else {
if((state_val_37695 === (34))){
var inst_37675 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(37),inst_37675);
} else {
if((state_val_37695 === (17))){
var inst_37634 = (state_37694[(2)]);
var inst_37635 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37636 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37635);
var state_37694__$1 = (function (){var statearr_37717 = state_37694;
(statearr_37717[(12)] = inst_37634);

return statearr_37717;
})();
var statearr_37718_37760 = state_37694__$1;
(statearr_37718_37760[(2)] = inst_37636);

(statearr_37718_37760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (3))){
var inst_37626 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37626)){
var statearr_37719_37761 = state_37694__$1;
(statearr_37719_37761[(1)] = (13));

} else {
var statearr_37720_37762 = state_37694__$1;
(statearr_37720_37762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (12))){
var inst_37622 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37721_37763 = state_37694__$1;
(statearr_37721_37763[(2)] = inst_37622);

(statearr_37721_37763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (2))){
var inst_37609 = (state_37694[(10)]);
var inst_37609__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37694__$1 = (function (){var statearr_37722 = state_37694;
(statearr_37722[(10)] = inst_37609__$1);

return statearr_37722;
})();
if(cljs.core.truth_(inst_37609__$1)){
var statearr_37723_37764 = state_37694__$1;
(statearr_37723_37764[(1)] = (5));

} else {
var statearr_37724_37765 = state_37694__$1;
(statearr_37724_37765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (23))){
var inst_37652 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37652)){
var statearr_37725_37766 = state_37694__$1;
(statearr_37725_37766[(1)] = (25));

} else {
var statearr_37726_37767 = state_37694__$1;
(statearr_37726_37767[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (35))){
var state_37694__$1 = state_37694;
var statearr_37727_37768 = state_37694__$1;
(statearr_37727_37768[(2)] = null);

(statearr_37727_37768[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (19))){
var inst_37647 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37647)){
var statearr_37728_37769 = state_37694__$1;
(statearr_37728_37769[(1)] = (22));

} else {
var statearr_37729_37770 = state_37694__$1;
(statearr_37729_37770[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (11))){
var inst_37618 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37730_37771 = state_37694__$1;
(statearr_37730_37771[(2)] = inst_37618);

(statearr_37730_37771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (9))){
var inst_37620 = figwheel.client.heads_up.clear.call(null);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(12),inst_37620);
} else {
if((state_val_37695 === (5))){
var inst_37611 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37694__$1 = state_37694;
var statearr_37731_37772 = state_37694__$1;
(statearr_37731_37772[(2)] = inst_37611);

(statearr_37731_37772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (14))){
var inst_37638 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37638)){
var statearr_37732_37773 = state_37694__$1;
(statearr_37732_37773[(1)] = (18));

} else {
var statearr_37733_37774 = state_37694__$1;
(statearr_37733_37774[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (26))){
var inst_37664 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37694__$1 = state_37694;
if(cljs.core.truth_(inst_37664)){
var statearr_37734_37775 = state_37694__$1;
(statearr_37734_37775[(1)] = (30));

} else {
var statearr_37735_37776 = state_37694__$1;
(statearr_37735_37776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (16))){
var inst_37630 = (state_37694[(2)]);
var inst_37631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37632 = figwheel.client.heads_up.display_exception.call(null,inst_37631);
var state_37694__$1 = (function (){var statearr_37736 = state_37694;
(statearr_37736[(13)] = inst_37630);

return statearr_37736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(17),inst_37632);
} else {
if((state_val_37695 === (30))){
var inst_37666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37667 = figwheel.client.heads_up.display_warning.call(null,inst_37666);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(33),inst_37667);
} else {
if((state_val_37695 === (10))){
var inst_37624 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37737_37777 = state_37694__$1;
(statearr_37737_37777[(2)] = inst_37624);

(statearr_37737_37777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (18))){
var inst_37640 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37641 = figwheel.client.heads_up.display_exception.call(null,inst_37640);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(21),inst_37641);
} else {
if((state_val_37695 === (37))){
var inst_37677 = (state_37694[(2)]);
var state_37694__$1 = state_37694;
var statearr_37738_37778 = state_37694__$1;
(statearr_37738_37778[(2)] = inst_37677);

(statearr_37738_37778[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (8))){
var inst_37616 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37694__$1 = state_37694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37694__$1,(11),inst_37616);
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
});})(c__32583__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32495__auto__,c__32583__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____0 = (function (){
var statearr_37739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37739[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__);

(statearr_37739[(1)] = (1));

return statearr_37739;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____1 = (function (state_37694){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_37694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e37740){if((e37740 instanceof Object)){
var ex__32499__auto__ = e37740;
var statearr_37741_37779 = state_37694;
(statearr_37741_37779[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37780 = state_37694;
state_37694 = G__37780;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__ = function(state_37694){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____1.call(this,state_37694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__,msg_hist,msg_names,msg))
})();
var state__32585__auto__ = (function (){var statearr_37742 = f__32584__auto__.call(null);
(statearr_37742[(6)] = c__32583__auto__);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__,msg_hist,msg_names,msg))
);

return c__32583__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32583__auto___37809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto___37809,ch){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto___37809,ch){
return (function (state_37795){
var state_val_37796 = (state_37795[(1)]);
if((state_val_37796 === (1))){
var state_37795__$1 = state_37795;
var statearr_37797_37810 = state_37795__$1;
(statearr_37797_37810[(2)] = null);

(statearr_37797_37810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37796 === (2))){
var state_37795__$1 = state_37795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37795__$1,(4),ch);
} else {
if((state_val_37796 === (3))){
var inst_37793 = (state_37795[(2)]);
var state_37795__$1 = state_37795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37795__$1,inst_37793);
} else {
if((state_val_37796 === (4))){
var inst_37783 = (state_37795[(7)]);
var inst_37783__$1 = (state_37795[(2)]);
var state_37795__$1 = (function (){var statearr_37798 = state_37795;
(statearr_37798[(7)] = inst_37783__$1);

return statearr_37798;
})();
if(cljs.core.truth_(inst_37783__$1)){
var statearr_37799_37811 = state_37795__$1;
(statearr_37799_37811[(1)] = (5));

} else {
var statearr_37800_37812 = state_37795__$1;
(statearr_37800_37812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37796 === (5))){
var inst_37783 = (state_37795[(7)]);
var inst_37785 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37783);
var state_37795__$1 = state_37795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37795__$1,(8),inst_37785);
} else {
if((state_val_37796 === (6))){
var state_37795__$1 = state_37795;
var statearr_37801_37813 = state_37795__$1;
(statearr_37801_37813[(2)] = null);

(statearr_37801_37813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37796 === (7))){
var inst_37791 = (state_37795[(2)]);
var state_37795__$1 = state_37795;
var statearr_37802_37814 = state_37795__$1;
(statearr_37802_37814[(2)] = inst_37791);

(statearr_37802_37814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37796 === (8))){
var inst_37787 = (state_37795[(2)]);
var state_37795__$1 = (function (){var statearr_37803 = state_37795;
(statearr_37803[(8)] = inst_37787);

return statearr_37803;
})();
var statearr_37804_37815 = state_37795__$1;
(statearr_37804_37815[(2)] = null);

(statearr_37804_37815[(1)] = (2));


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
});})(c__32583__auto___37809,ch))
;
return ((function (switch__32495__auto__,c__32583__auto___37809,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32496__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32496__auto____0 = (function (){
var statearr_37805 = [null,null,null,null,null,null,null,null,null];
(statearr_37805[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32496__auto__);

(statearr_37805[(1)] = (1));

return statearr_37805;
});
var figwheel$client$heads_up_plugin_$_state_machine__32496__auto____1 = (function (state_37795){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_37795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e37806){if((e37806 instanceof Object)){
var ex__32499__auto__ = e37806;
var statearr_37807_37816 = state_37795;
(statearr_37807_37816[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37817 = state_37795;
state_37795 = G__37817;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32496__auto__ = function(state_37795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32496__auto____1.call(this,state_37795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32496__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32496__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto___37809,ch))
})();
var state__32585__auto__ = (function (){var statearr_37808 = f__32584__auto__.call(null);
(statearr_37808[(6)] = c__32583__auto___37809);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto___37809,ch))
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
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__){
return (function (state_37823){
var state_val_37824 = (state_37823[(1)]);
if((state_val_37824 === (1))){
var inst_37818 = cljs.core.async.timeout.call(null,(3000));
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37823__$1,(2),inst_37818);
} else {
if((state_val_37824 === (2))){
var inst_37820 = (state_37823[(2)]);
var inst_37821 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37823__$1 = (function (){var statearr_37825 = state_37823;
(statearr_37825[(7)] = inst_37820);

return statearr_37825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37823__$1,inst_37821);
} else {
return null;
}
}
});})(c__32583__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____0 = (function (){
var statearr_37826 = [null,null,null,null,null,null,null,null];
(statearr_37826[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__);

(statearr_37826[(1)] = (1));

return statearr_37826;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____1 = (function (state_37823){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_37823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e37827){if((e37827 instanceof Object)){
var ex__32499__auto__ = e37827;
var statearr_37828_37830 = state_37823;
(statearr_37828_37830[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37831 = state_37823;
state_37823 = G__37831;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__ = function(state_37823){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____1.call(this,state_37823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32496__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__))
})();
var state__32585__auto__ = (function (){var statearr_37829 = f__32584__auto__.call(null);
(statearr_37829[(6)] = c__32583__auto__);

return statearr_37829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__))
);

return c__32583__auto__;
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
var c__32583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32583__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32584__auto__ = (function (){var switch__32495__auto__ = ((function (c__32583__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37838){
var state_val_37839 = (state_37838[(1)]);
if((state_val_37839 === (1))){
var inst_37832 = cljs.core.async.timeout.call(null,(2000));
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37838__$1,(2),inst_37832);
} else {
if((state_val_37839 === (2))){
var inst_37834 = (state_37838[(2)]);
var inst_37835 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37836 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37835);
var state_37838__$1 = (function (){var statearr_37840 = state_37838;
(statearr_37840[(7)] = inst_37834);

return statearr_37840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37838__$1,inst_37836);
} else {
return null;
}
}
});})(c__32583__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32495__auto__,c__32583__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____0 = (function (){
var statearr_37841 = [null,null,null,null,null,null,null,null];
(statearr_37841[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__);

(statearr_37841[(1)] = (1));

return statearr_37841;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____1 = (function (state_37838){
while(true){
var ret_value__32497__auto__ = (function (){try{while(true){
var result__32498__auto__ = switch__32495__auto__.call(null,state_37838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32498__auto__;
}
break;
}
}catch (e37842){if((e37842 instanceof Object)){
var ex__32499__auto__ = e37842;
var statearr_37843_37845 = state_37838;
(statearr_37843_37845[(5)] = ex__32499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37846 = state_37838;
state_37838 = G__37846;
continue;
} else {
return ret_value__32497__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__ = function(state_37838){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____1.call(this,state_37838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32496__auto__;
})()
;})(switch__32495__auto__,c__32583__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32585__auto__ = (function (){var statearr_37844 = f__32584__auto__.call(null);
(statearr_37844[(6)] = c__32583__auto__);

return statearr_37844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32585__auto__);
});})(c__32583__auto__,figwheel_version,temp__4657__auto__))
);

return c__32583__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37847){
var map__37848 = p__37847;
var map__37848__$1 = ((((!((map__37848 == null)))?((((map__37848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37848):map__37848);
var file = cljs.core.get.call(null,map__37848__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37850 = "";
var G__37850__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37850),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37850);
var G__37850__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37850__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37850__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37850__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37850__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37851){
var map__37852 = p__37851;
var map__37852__$1 = ((((!((map__37852 == null)))?((((map__37852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37852):map__37852);
var ed = map__37852__$1;
var formatted_exception = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37854_37858 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37855_37859 = null;
var count__37856_37860 = (0);
var i__37857_37861 = (0);
while(true){
if((i__37857_37861 < count__37856_37860)){
var msg_37862 = cljs.core._nth.call(null,chunk__37855_37859,i__37857_37861);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37862);

var G__37863 = seq__37854_37858;
var G__37864 = chunk__37855_37859;
var G__37865 = count__37856_37860;
var G__37866 = (i__37857_37861 + (1));
seq__37854_37858 = G__37863;
chunk__37855_37859 = G__37864;
count__37856_37860 = G__37865;
i__37857_37861 = G__37866;
continue;
} else {
var temp__4657__auto___37867 = cljs.core.seq.call(null,seq__37854_37858);
if(temp__4657__auto___37867){
var seq__37854_37868__$1 = temp__4657__auto___37867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37854_37868__$1)){
var c__29125__auto___37869 = cljs.core.chunk_first.call(null,seq__37854_37868__$1);
var G__37870 = cljs.core.chunk_rest.call(null,seq__37854_37868__$1);
var G__37871 = c__29125__auto___37869;
var G__37872 = cljs.core.count.call(null,c__29125__auto___37869);
var G__37873 = (0);
seq__37854_37858 = G__37870;
chunk__37855_37859 = G__37871;
count__37856_37860 = G__37872;
i__37857_37861 = G__37873;
continue;
} else {
var msg_37874 = cljs.core.first.call(null,seq__37854_37868__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37874);

var G__37875 = cljs.core.next.call(null,seq__37854_37868__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37854_37858 = G__37875;
chunk__37855_37859 = G__37876;
count__37856_37860 = G__37877;
i__37857_37861 = G__37878;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37879){
var map__37880 = p__37879;
var map__37880__$1 = ((((!((map__37880 == null)))?((((map__37880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37880):map__37880);
var w = map__37880__$1;
var message = cljs.core.get.call(null,map__37880__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37882 = cljs.core.seq.call(null,plugins);
var chunk__37883 = null;
var count__37884 = (0);
var i__37885 = (0);
while(true){
if((i__37885 < count__37884)){
var vec__37886 = cljs.core._nth.call(null,chunk__37883,i__37885);
var k = cljs.core.nth.call(null,vec__37886,(0),null);
var plugin = cljs.core.nth.call(null,vec__37886,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37892 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37882,chunk__37883,count__37884,i__37885,pl_37892,vec__37886,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37892.call(null,msg_hist);
});})(seq__37882,chunk__37883,count__37884,i__37885,pl_37892,vec__37886,k,plugin))
);
} else {
}

var G__37893 = seq__37882;
var G__37894 = chunk__37883;
var G__37895 = count__37884;
var G__37896 = (i__37885 + (1));
seq__37882 = G__37893;
chunk__37883 = G__37894;
count__37884 = G__37895;
i__37885 = G__37896;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37882);
if(temp__4657__auto__){
var seq__37882__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37882__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37882__$1);
var G__37897 = cljs.core.chunk_rest.call(null,seq__37882__$1);
var G__37898 = c__29125__auto__;
var G__37899 = cljs.core.count.call(null,c__29125__auto__);
var G__37900 = (0);
seq__37882 = G__37897;
chunk__37883 = G__37898;
count__37884 = G__37899;
i__37885 = G__37900;
continue;
} else {
var vec__37889 = cljs.core.first.call(null,seq__37882__$1);
var k = cljs.core.nth.call(null,vec__37889,(0),null);
var plugin = cljs.core.nth.call(null,vec__37889,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37901 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37882,chunk__37883,count__37884,i__37885,pl_37901,vec__37889,k,plugin,seq__37882__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37901.call(null,msg_hist);
});})(seq__37882,chunk__37883,count__37884,i__37885,pl_37901,vec__37889,k,plugin,seq__37882__$1,temp__4657__auto__))
);
} else {
}

var G__37902 = cljs.core.next.call(null,seq__37882__$1);
var G__37903 = null;
var G__37904 = (0);
var G__37905 = (0);
seq__37882 = G__37902;
chunk__37883 = G__37903;
count__37884 = G__37904;
i__37885 = G__37905;
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
var G__37907 = arguments.length;
switch (G__37907) {
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

var seq__37908_37913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37909_37914 = null;
var count__37910_37915 = (0);
var i__37911_37916 = (0);
while(true){
if((i__37911_37916 < count__37910_37915)){
var msg_37917 = cljs.core._nth.call(null,chunk__37909_37914,i__37911_37916);
figwheel.client.socket.handle_incoming_message.call(null,msg_37917);

var G__37918 = seq__37908_37913;
var G__37919 = chunk__37909_37914;
var G__37920 = count__37910_37915;
var G__37921 = (i__37911_37916 + (1));
seq__37908_37913 = G__37918;
chunk__37909_37914 = G__37919;
count__37910_37915 = G__37920;
i__37911_37916 = G__37921;
continue;
} else {
var temp__4657__auto___37922 = cljs.core.seq.call(null,seq__37908_37913);
if(temp__4657__auto___37922){
var seq__37908_37923__$1 = temp__4657__auto___37922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37908_37923__$1)){
var c__29125__auto___37924 = cljs.core.chunk_first.call(null,seq__37908_37923__$1);
var G__37925 = cljs.core.chunk_rest.call(null,seq__37908_37923__$1);
var G__37926 = c__29125__auto___37924;
var G__37927 = cljs.core.count.call(null,c__29125__auto___37924);
var G__37928 = (0);
seq__37908_37913 = G__37925;
chunk__37909_37914 = G__37926;
count__37910_37915 = G__37927;
i__37911_37916 = G__37928;
continue;
} else {
var msg_37929 = cljs.core.first.call(null,seq__37908_37923__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37929);

var G__37930 = cljs.core.next.call(null,seq__37908_37923__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37908_37913 = G__37930;
chunk__37909_37914 = G__37931;
count__37910_37915 = G__37932;
i__37911_37916 = G__37933;
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
var len__29455__auto___37938 = arguments.length;
var i__29456__auto___37939 = (0);
while(true){
if((i__29456__auto___37939 < len__29455__auto___37938)){
args__29462__auto__.push((arguments[i__29456__auto___37939]));

var G__37940 = (i__29456__auto___37939 + (1));
i__29456__auto___37939 = G__37940;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37935){
var map__37936 = p__37935;
var map__37936__$1 = ((((!((map__37936 == null)))?((((map__37936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37936):map__37936);
var opts = map__37936__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37934){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37934));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37941){if((e37941 instanceof Error)){
var e = e37941;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37941;

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
return (function (p__37942){
var map__37943 = p__37942;
var map__37943__$1 = ((((!((map__37943 == null)))?((((map__37943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37943):map__37943);
var msg_name = cljs.core.get.call(null,map__37943__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509580231857
