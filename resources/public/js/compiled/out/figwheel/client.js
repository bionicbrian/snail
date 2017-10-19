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
}catch (e37445){if((e37445 instanceof Error)){
var e = e37445;
return "Error: Unable to stringify";
} else {
throw e37445;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37448 = arguments.length;
switch (G__37448) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37446_SHARP_){
if(typeof p1__37446_SHARP_ === 'string'){
return p1__37446_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37446_SHARP_);
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
var len__29455__auto___37451 = arguments.length;
var i__29456__auto___37452 = (0);
while(true){
if((i__29456__auto___37452 < len__29455__auto___37451)){
args__29462__auto__.push((arguments[i__29456__auto___37452]));

var G__37453 = (i__29456__auto___37452 + (1));
i__29456__auto___37452 = G__37453;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37450){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37450));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37455 = arguments.length;
var i__29456__auto___37456 = (0);
while(true){
if((i__29456__auto___37456 < len__29455__auto___37455)){
args__29462__auto__.push((arguments[i__29456__auto___37456]));

var G__37457 = (i__29456__auto___37456 + (1));
i__29456__auto___37456 = G__37457;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37454){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37454));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37458){
var map__37459 = p__37458;
var map__37459__$1 = ((((!((map__37459 == null)))?((((map__37459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37459):map__37459);
var message = cljs.core.get.call(null,map__37459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37459__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32565__auto___37538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___37538,ch){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___37538,ch){
return (function (state_37510){
var state_val_37511 = (state_37510[(1)]);
if((state_val_37511 === (7))){
var inst_37506 = (state_37510[(2)]);
var state_37510__$1 = state_37510;
var statearr_37512_37539 = state_37510__$1;
(statearr_37512_37539[(2)] = inst_37506);

(statearr_37512_37539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (1))){
var state_37510__$1 = state_37510;
var statearr_37513_37540 = state_37510__$1;
(statearr_37513_37540[(2)] = null);

(statearr_37513_37540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (4))){
var inst_37463 = (state_37510[(7)]);
var inst_37463__$1 = (state_37510[(2)]);
var state_37510__$1 = (function (){var statearr_37514 = state_37510;
(statearr_37514[(7)] = inst_37463__$1);

return statearr_37514;
})();
if(cljs.core.truth_(inst_37463__$1)){
var statearr_37515_37541 = state_37510__$1;
(statearr_37515_37541[(1)] = (5));

} else {
var statearr_37516_37542 = state_37510__$1;
(statearr_37516_37542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (15))){
var inst_37470 = (state_37510[(8)]);
var inst_37485 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37470);
var inst_37486 = cljs.core.first.call(null,inst_37485);
var inst_37487 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37486);
var inst_37488 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37487)].join('');
var inst_37489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37488);
var state_37510__$1 = state_37510;
var statearr_37517_37543 = state_37510__$1;
(statearr_37517_37543[(2)] = inst_37489);

(statearr_37517_37543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (13))){
var inst_37494 = (state_37510[(2)]);
var state_37510__$1 = state_37510;
var statearr_37518_37544 = state_37510__$1;
(statearr_37518_37544[(2)] = inst_37494);

(statearr_37518_37544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (6))){
var state_37510__$1 = state_37510;
var statearr_37519_37545 = state_37510__$1;
(statearr_37519_37545[(2)] = null);

(statearr_37519_37545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (17))){
var inst_37492 = (state_37510[(2)]);
var state_37510__$1 = state_37510;
var statearr_37520_37546 = state_37510__$1;
(statearr_37520_37546[(2)] = inst_37492);

(statearr_37520_37546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (3))){
var inst_37508 = (state_37510[(2)]);
var state_37510__$1 = state_37510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37510__$1,inst_37508);
} else {
if((state_val_37511 === (12))){
var inst_37469 = (state_37510[(9)]);
var inst_37483 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37469,opts);
var state_37510__$1 = state_37510;
if(cljs.core.truth_(inst_37483)){
var statearr_37521_37547 = state_37510__$1;
(statearr_37521_37547[(1)] = (15));

} else {
var statearr_37522_37548 = state_37510__$1;
(statearr_37522_37548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (2))){
var state_37510__$1 = state_37510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37510__$1,(4),ch);
} else {
if((state_val_37511 === (11))){
var inst_37470 = (state_37510[(8)]);
var inst_37475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37476 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37470);
var inst_37477 = cljs.core.async.timeout.call(null,(1000));
var inst_37478 = [inst_37476,inst_37477];
var inst_37479 = (new cljs.core.PersistentVector(null,2,(5),inst_37475,inst_37478,null));
var state_37510__$1 = state_37510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37510__$1,(14),inst_37479);
} else {
if((state_val_37511 === (9))){
var inst_37470 = (state_37510[(8)]);
var inst_37496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37470);
var inst_37498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37497);
var inst_37499 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37498)].join('');
var inst_37500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37499);
var state_37510__$1 = (function (){var statearr_37523 = state_37510;
(statearr_37523[(10)] = inst_37496);

return statearr_37523;
})();
var statearr_37524_37549 = state_37510__$1;
(statearr_37524_37549[(2)] = inst_37500);

(statearr_37524_37549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (5))){
var inst_37463 = (state_37510[(7)]);
var inst_37465 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37466 = (new cljs.core.PersistentArrayMap(null,2,inst_37465,null));
var inst_37467 = (new cljs.core.PersistentHashSet(null,inst_37466,null));
var inst_37468 = figwheel.client.focus_msgs.call(null,inst_37467,inst_37463);
var inst_37469 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37468);
var inst_37470 = cljs.core.first.call(null,inst_37468);
var inst_37471 = figwheel.client.autoload_QMARK_.call(null);
var state_37510__$1 = (function (){var statearr_37525 = state_37510;
(statearr_37525[(9)] = inst_37469);

(statearr_37525[(8)] = inst_37470);

return statearr_37525;
})();
if(cljs.core.truth_(inst_37471)){
var statearr_37526_37550 = state_37510__$1;
(statearr_37526_37550[(1)] = (8));

} else {
var statearr_37527_37551 = state_37510__$1;
(statearr_37527_37551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (14))){
var inst_37481 = (state_37510[(2)]);
var state_37510__$1 = state_37510;
var statearr_37528_37552 = state_37510__$1;
(statearr_37528_37552[(2)] = inst_37481);

(statearr_37528_37552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (16))){
var state_37510__$1 = state_37510;
var statearr_37529_37553 = state_37510__$1;
(statearr_37529_37553[(2)] = null);

(statearr_37529_37553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (10))){
var inst_37502 = (state_37510[(2)]);
var state_37510__$1 = (function (){var statearr_37530 = state_37510;
(statearr_37530[(11)] = inst_37502);

return statearr_37530;
})();
var statearr_37531_37554 = state_37510__$1;
(statearr_37531_37554[(2)] = null);

(statearr_37531_37554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37511 === (8))){
var inst_37469 = (state_37510[(9)]);
var inst_37473 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37469,opts);
var state_37510__$1 = state_37510;
if(cljs.core.truth_(inst_37473)){
var statearr_37532_37555 = state_37510__$1;
(statearr_37532_37555[(1)] = (11));

} else {
var statearr_37533_37556 = state_37510__$1;
(statearr_37533_37556[(1)] = (12));

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
});})(c__32565__auto___37538,ch))
;
return ((function (switch__32477__auto__,c__32565__auto___37538,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____0 = (function (){
var statearr_37534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37534[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__);

(statearr_37534[(1)] = (1));

return statearr_37534;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____1 = (function (state_37510){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_37510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e37535){if((e37535 instanceof Object)){
var ex__32481__auto__ = e37535;
var statearr_37536_37557 = state_37510;
(statearr_37536_37557[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37558 = state_37510;
state_37510 = G__37558;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__ = function(state_37510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____1.call(this,state_37510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32478__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___37538,ch))
})();
var state__32567__auto__ = (function (){var statearr_37537 = f__32566__auto__.call(null);
(statearr_37537[(6)] = c__32565__auto___37538);

return statearr_37537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___37538,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37559_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37559_SHARP_));
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
var base_path_37561 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37561){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37560){if((e37560 instanceof Error)){
var e = e37560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37561], null));
} else {
var e = e37560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37561))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37562){
var map__37563 = p__37562;
var map__37563__$1 = ((((!((map__37563 == null)))?((((map__37563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37563):map__37563);
var opts = map__37563__$1;
var build_id = cljs.core.get.call(null,map__37563__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37563,map__37563__$1,opts,build_id){
return (function (p__37565){
var vec__37566 = p__37565;
var seq__37567 = cljs.core.seq.call(null,vec__37566);
var first__37568 = cljs.core.first.call(null,seq__37567);
var seq__37567__$1 = cljs.core.next.call(null,seq__37567);
var map__37569 = first__37568;
var map__37569__$1 = ((((!((map__37569 == null)))?((((map__37569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37569):map__37569);
var msg = map__37569__$1;
var msg_name = cljs.core.get.call(null,map__37569__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37567__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37566,seq__37567,first__37568,seq__37567__$1,map__37569,map__37569__$1,msg,msg_name,_,map__37563,map__37563__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37566,seq__37567,first__37568,seq__37567__$1,map__37569,map__37569__$1,msg,msg_name,_,map__37563,map__37563__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37563,map__37563__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37571){
var vec__37572 = p__37571;
var seq__37573 = cljs.core.seq.call(null,vec__37572);
var first__37574 = cljs.core.first.call(null,seq__37573);
var seq__37573__$1 = cljs.core.next.call(null,seq__37573);
var map__37575 = first__37574;
var map__37575__$1 = ((((!((map__37575 == null)))?((((map__37575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37575):map__37575);
var msg = map__37575__$1;
var msg_name = cljs.core.get.call(null,map__37575__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37573__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37577){
var map__37578 = p__37577;
var map__37578__$1 = ((((!((map__37578 == null)))?((((map__37578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37578):map__37578);
var on_compile_warning = cljs.core.get.call(null,map__37578__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37578__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37578,map__37578__$1,on_compile_warning,on_compile_fail){
return (function (p__37580){
var vec__37581 = p__37580;
var seq__37582 = cljs.core.seq.call(null,vec__37581);
var first__37583 = cljs.core.first.call(null,seq__37582);
var seq__37582__$1 = cljs.core.next.call(null,seq__37582);
var map__37584 = first__37583;
var map__37584__$1 = ((((!((map__37584 == null)))?((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37584):map__37584);
var msg = map__37584__$1;
var msg_name = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37582__$1;
var pred__37586 = cljs.core._EQ_;
var expr__37587 = msg_name;
if(cljs.core.truth_(pred__37586.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37587))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37586.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37587))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37578,map__37578__$1,on_compile_warning,on_compile_fail))
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__,msg_hist,msg_names,msg){
return (function (state_37676){
var state_val_37677 = (state_37676[(1)]);
if((state_val_37677 === (7))){
var inst_37596 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37596)){
var statearr_37678_37725 = state_37676__$1;
(statearr_37678_37725[(1)] = (8));

} else {
var statearr_37679_37726 = state_37676__$1;
(statearr_37679_37726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (20))){
var inst_37670 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37680_37727 = state_37676__$1;
(statearr_37680_37727[(2)] = inst_37670);

(statearr_37680_37727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (27))){
var inst_37666 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37681_37728 = state_37676__$1;
(statearr_37681_37728[(2)] = inst_37666);

(statearr_37681_37728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (1))){
var inst_37589 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37589)){
var statearr_37682_37729 = state_37676__$1;
(statearr_37682_37729[(1)] = (2));

} else {
var statearr_37683_37730 = state_37676__$1;
(statearr_37683_37730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (24))){
var inst_37668 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37684_37731 = state_37676__$1;
(statearr_37684_37731[(2)] = inst_37668);

(statearr_37684_37731[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (4))){
var inst_37674 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37676__$1,inst_37674);
} else {
if((state_val_37677 === (15))){
var inst_37672 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37685_37732 = state_37676__$1;
(statearr_37685_37732[(2)] = inst_37672);

(statearr_37685_37732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (21))){
var inst_37625 = (state_37676[(2)]);
var inst_37626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37627 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37626);
var state_37676__$1 = (function (){var statearr_37686 = state_37676;
(statearr_37686[(7)] = inst_37625);

return statearr_37686;
})();
var statearr_37687_37733 = state_37676__$1;
(statearr_37687_37733[(2)] = inst_37627);

(statearr_37687_37733[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (31))){
var inst_37655 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37655)){
var statearr_37688_37734 = state_37676__$1;
(statearr_37688_37734[(1)] = (34));

} else {
var statearr_37689_37735 = state_37676__$1;
(statearr_37689_37735[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (32))){
var inst_37664 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37690_37736 = state_37676__$1;
(statearr_37690_37736[(2)] = inst_37664);

(statearr_37690_37736[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (33))){
var inst_37651 = (state_37676[(2)]);
var inst_37652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37653 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37652);
var state_37676__$1 = (function (){var statearr_37691 = state_37676;
(statearr_37691[(8)] = inst_37651);

return statearr_37691;
})();
var statearr_37692_37737 = state_37676__$1;
(statearr_37692_37737[(2)] = inst_37653);

(statearr_37692_37737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (13))){
var inst_37610 = figwheel.client.heads_up.clear.call(null);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(16),inst_37610);
} else {
if((state_val_37677 === (22))){
var inst_37631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37632 = figwheel.client.heads_up.append_warning_message.call(null,inst_37631);
var state_37676__$1 = state_37676;
var statearr_37693_37738 = state_37676__$1;
(statearr_37693_37738[(2)] = inst_37632);

(statearr_37693_37738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (36))){
var inst_37662 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37694_37739 = state_37676__$1;
(statearr_37694_37739[(2)] = inst_37662);

(statearr_37694_37739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (29))){
var inst_37642 = (state_37676[(2)]);
var inst_37643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37644 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37643);
var state_37676__$1 = (function (){var statearr_37695 = state_37676;
(statearr_37695[(9)] = inst_37642);

return statearr_37695;
})();
var statearr_37696_37740 = state_37676__$1;
(statearr_37696_37740[(2)] = inst_37644);

(statearr_37696_37740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (6))){
var inst_37591 = (state_37676[(10)]);
var state_37676__$1 = state_37676;
var statearr_37697_37741 = state_37676__$1;
(statearr_37697_37741[(2)] = inst_37591);

(statearr_37697_37741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (28))){
var inst_37638 = (state_37676[(2)]);
var inst_37639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37640 = figwheel.client.heads_up.display_warning.call(null,inst_37639);
var state_37676__$1 = (function (){var statearr_37698 = state_37676;
(statearr_37698[(11)] = inst_37638);

return statearr_37698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(29),inst_37640);
} else {
if((state_val_37677 === (25))){
var inst_37636 = figwheel.client.heads_up.clear.call(null);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(28),inst_37636);
} else {
if((state_val_37677 === (34))){
var inst_37657 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(37),inst_37657);
} else {
if((state_val_37677 === (17))){
var inst_37616 = (state_37676[(2)]);
var inst_37617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37618 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37617);
var state_37676__$1 = (function (){var statearr_37699 = state_37676;
(statearr_37699[(12)] = inst_37616);

return statearr_37699;
})();
var statearr_37700_37742 = state_37676__$1;
(statearr_37700_37742[(2)] = inst_37618);

(statearr_37700_37742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (3))){
var inst_37608 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37608)){
var statearr_37701_37743 = state_37676__$1;
(statearr_37701_37743[(1)] = (13));

} else {
var statearr_37702_37744 = state_37676__$1;
(statearr_37702_37744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (12))){
var inst_37604 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37703_37745 = state_37676__$1;
(statearr_37703_37745[(2)] = inst_37604);

(statearr_37703_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (2))){
var inst_37591 = (state_37676[(10)]);
var inst_37591__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37676__$1 = (function (){var statearr_37704 = state_37676;
(statearr_37704[(10)] = inst_37591__$1);

return statearr_37704;
})();
if(cljs.core.truth_(inst_37591__$1)){
var statearr_37705_37746 = state_37676__$1;
(statearr_37705_37746[(1)] = (5));

} else {
var statearr_37706_37747 = state_37676__$1;
(statearr_37706_37747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (23))){
var inst_37634 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37634)){
var statearr_37707_37748 = state_37676__$1;
(statearr_37707_37748[(1)] = (25));

} else {
var statearr_37708_37749 = state_37676__$1;
(statearr_37708_37749[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (35))){
var state_37676__$1 = state_37676;
var statearr_37709_37750 = state_37676__$1;
(statearr_37709_37750[(2)] = null);

(statearr_37709_37750[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (19))){
var inst_37629 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37629)){
var statearr_37710_37751 = state_37676__$1;
(statearr_37710_37751[(1)] = (22));

} else {
var statearr_37711_37752 = state_37676__$1;
(statearr_37711_37752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (11))){
var inst_37600 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37712_37753 = state_37676__$1;
(statearr_37712_37753[(2)] = inst_37600);

(statearr_37712_37753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (9))){
var inst_37602 = figwheel.client.heads_up.clear.call(null);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(12),inst_37602);
} else {
if((state_val_37677 === (5))){
var inst_37593 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37676__$1 = state_37676;
var statearr_37713_37754 = state_37676__$1;
(statearr_37713_37754[(2)] = inst_37593);

(statearr_37713_37754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (14))){
var inst_37620 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37620)){
var statearr_37714_37755 = state_37676__$1;
(statearr_37714_37755[(1)] = (18));

} else {
var statearr_37715_37756 = state_37676__$1;
(statearr_37715_37756[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (26))){
var inst_37646 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37676__$1 = state_37676;
if(cljs.core.truth_(inst_37646)){
var statearr_37716_37757 = state_37676__$1;
(statearr_37716_37757[(1)] = (30));

} else {
var statearr_37717_37758 = state_37676__$1;
(statearr_37717_37758[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (16))){
var inst_37612 = (state_37676[(2)]);
var inst_37613 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37614 = figwheel.client.heads_up.display_exception.call(null,inst_37613);
var state_37676__$1 = (function (){var statearr_37718 = state_37676;
(statearr_37718[(13)] = inst_37612);

return statearr_37718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(17),inst_37614);
} else {
if((state_val_37677 === (30))){
var inst_37648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37649 = figwheel.client.heads_up.display_warning.call(null,inst_37648);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(33),inst_37649);
} else {
if((state_val_37677 === (10))){
var inst_37606 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37719_37759 = state_37676__$1;
(statearr_37719_37759[(2)] = inst_37606);

(statearr_37719_37759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (18))){
var inst_37622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37623 = figwheel.client.heads_up.display_exception.call(null,inst_37622);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(21),inst_37623);
} else {
if((state_val_37677 === (37))){
var inst_37659 = (state_37676[(2)]);
var state_37676__$1 = state_37676;
var statearr_37720_37760 = state_37676__$1;
(statearr_37720_37760[(2)] = inst_37659);

(statearr_37720_37760[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37677 === (8))){
var inst_37598 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37676__$1 = state_37676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37676__$1,(11),inst_37598);
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
});})(c__32565__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32477__auto__,c__32565__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____0 = (function (){
var statearr_37721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37721[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__);

(statearr_37721[(1)] = (1));

return statearr_37721;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____1 = (function (state_37676){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_37676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e37722){if((e37722 instanceof Object)){
var ex__32481__auto__ = e37722;
var statearr_37723_37761 = state_37676;
(statearr_37723_37761[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37762 = state_37676;
state_37676 = G__37762;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__ = function(state_37676){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____1.call(this,state_37676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__,msg_hist,msg_names,msg))
})();
var state__32567__auto__ = (function (){var statearr_37724 = f__32566__auto__.call(null);
(statearr_37724[(6)] = c__32565__auto__);

return statearr_37724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__,msg_hist,msg_names,msg))
);

return c__32565__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32565__auto___37791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto___37791,ch){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto___37791,ch){
return (function (state_37777){
var state_val_37778 = (state_37777[(1)]);
if((state_val_37778 === (1))){
var state_37777__$1 = state_37777;
var statearr_37779_37792 = state_37777__$1;
(statearr_37779_37792[(2)] = null);

(statearr_37779_37792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37778 === (2))){
var state_37777__$1 = state_37777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37777__$1,(4),ch);
} else {
if((state_val_37778 === (3))){
var inst_37775 = (state_37777[(2)]);
var state_37777__$1 = state_37777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37777__$1,inst_37775);
} else {
if((state_val_37778 === (4))){
var inst_37765 = (state_37777[(7)]);
var inst_37765__$1 = (state_37777[(2)]);
var state_37777__$1 = (function (){var statearr_37780 = state_37777;
(statearr_37780[(7)] = inst_37765__$1);

return statearr_37780;
})();
if(cljs.core.truth_(inst_37765__$1)){
var statearr_37781_37793 = state_37777__$1;
(statearr_37781_37793[(1)] = (5));

} else {
var statearr_37782_37794 = state_37777__$1;
(statearr_37782_37794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37778 === (5))){
var inst_37765 = (state_37777[(7)]);
var inst_37767 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37765);
var state_37777__$1 = state_37777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37777__$1,(8),inst_37767);
} else {
if((state_val_37778 === (6))){
var state_37777__$1 = state_37777;
var statearr_37783_37795 = state_37777__$1;
(statearr_37783_37795[(2)] = null);

(statearr_37783_37795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37778 === (7))){
var inst_37773 = (state_37777[(2)]);
var state_37777__$1 = state_37777;
var statearr_37784_37796 = state_37777__$1;
(statearr_37784_37796[(2)] = inst_37773);

(statearr_37784_37796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37778 === (8))){
var inst_37769 = (state_37777[(2)]);
var state_37777__$1 = (function (){var statearr_37785 = state_37777;
(statearr_37785[(8)] = inst_37769);

return statearr_37785;
})();
var statearr_37786_37797 = state_37777__$1;
(statearr_37786_37797[(2)] = null);

(statearr_37786_37797[(1)] = (2));


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
});})(c__32565__auto___37791,ch))
;
return ((function (switch__32477__auto__,c__32565__auto___37791,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32478__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32478__auto____0 = (function (){
var statearr_37787 = [null,null,null,null,null,null,null,null,null];
(statearr_37787[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32478__auto__);

(statearr_37787[(1)] = (1));

return statearr_37787;
});
var figwheel$client$heads_up_plugin_$_state_machine__32478__auto____1 = (function (state_37777){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_37777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e37788){if((e37788 instanceof Object)){
var ex__32481__auto__ = e37788;
var statearr_37789_37798 = state_37777;
(statearr_37789_37798[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37799 = state_37777;
state_37777 = G__37799;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32478__auto__ = function(state_37777){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32478__auto____1.call(this,state_37777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32478__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32478__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto___37791,ch))
})();
var state__32567__auto__ = (function (){var statearr_37790 = f__32566__auto__.call(null);
(statearr_37790[(6)] = c__32565__auto___37791);

return statearr_37790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto___37791,ch))
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__){
return (function (state_37805){
var state_val_37806 = (state_37805[(1)]);
if((state_val_37806 === (1))){
var inst_37800 = cljs.core.async.timeout.call(null,(3000));
var state_37805__$1 = state_37805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37805__$1,(2),inst_37800);
} else {
if((state_val_37806 === (2))){
var inst_37802 = (state_37805[(2)]);
var inst_37803 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37805__$1 = (function (){var statearr_37807 = state_37805;
(statearr_37807[(7)] = inst_37802);

return statearr_37807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37805__$1,inst_37803);
} else {
return null;
}
}
});})(c__32565__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____0 = (function (){
var statearr_37808 = [null,null,null,null,null,null,null,null];
(statearr_37808[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__);

(statearr_37808[(1)] = (1));

return statearr_37808;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____1 = (function (state_37805){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_37805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e37809){if((e37809 instanceof Object)){
var ex__32481__auto__ = e37809;
var statearr_37810_37812 = state_37805;
(statearr_37810_37812[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37813 = state_37805;
state_37805 = G__37813;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__ = function(state_37805){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____1.call(this,state_37805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32478__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__))
})();
var state__32567__auto__ = (function (){var statearr_37811 = f__32566__auto__.call(null);
(statearr_37811[(6)] = c__32565__auto__);

return statearr_37811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__))
);

return c__32565__auto__;
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
var c__32565__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32565__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32566__auto__ = (function (){var switch__32477__auto__ = ((function (c__32565__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37820){
var state_val_37821 = (state_37820[(1)]);
if((state_val_37821 === (1))){
var inst_37814 = cljs.core.async.timeout.call(null,(2000));
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37820__$1,(2),inst_37814);
} else {
if((state_val_37821 === (2))){
var inst_37816 = (state_37820[(2)]);
var inst_37817 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37818 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37817);
var state_37820__$1 = (function (){var statearr_37822 = state_37820;
(statearr_37822[(7)] = inst_37816);

return statearr_37822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37820__$1,inst_37818);
} else {
return null;
}
}
});})(c__32565__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32477__auto__,c__32565__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____1 = (function (state_37820){
while(true){
var ret_value__32479__auto__ = (function (){try{while(true){
var result__32480__auto__ = switch__32477__auto__.call(null,state_37820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32480__auto__;
}
break;
}
}catch (e37824){if((e37824 instanceof Object)){
var ex__32481__auto__ = e37824;
var statearr_37825_37827 = state_37820;
(statearr_37825_37827[(5)] = ex__32481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37828 = state_37820;
state_37820 = G__37828;
continue;
} else {
return ret_value__32479__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__ = function(state_37820){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____1.call(this,state_37820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32478__auto__;
})()
;})(switch__32477__auto__,c__32565__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32567__auto__ = (function (){var statearr_37826 = f__32566__auto__.call(null);
(statearr_37826[(6)] = c__32565__auto__);

return statearr_37826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32567__auto__);
});})(c__32565__auto__,figwheel_version,temp__4657__auto__))
);

return c__32565__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37829){
var map__37830 = p__37829;
var map__37830__$1 = ((((!((map__37830 == null)))?((((map__37830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37830):map__37830);
var file = cljs.core.get.call(null,map__37830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37830__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37830__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37832 = "";
var G__37832__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37832),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37832);
var G__37832__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37832__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37832__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37832__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37832__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37833){
var map__37834 = p__37833;
var map__37834__$1 = ((((!((map__37834 == null)))?((((map__37834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37834):map__37834);
var ed = map__37834__$1;
var formatted_exception = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37836_37840 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37837_37841 = null;
var count__37838_37842 = (0);
var i__37839_37843 = (0);
while(true){
if((i__37839_37843 < count__37838_37842)){
var msg_37844 = cljs.core._nth.call(null,chunk__37837_37841,i__37839_37843);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37844);

var G__37845 = seq__37836_37840;
var G__37846 = chunk__37837_37841;
var G__37847 = count__37838_37842;
var G__37848 = (i__37839_37843 + (1));
seq__37836_37840 = G__37845;
chunk__37837_37841 = G__37846;
count__37838_37842 = G__37847;
i__37839_37843 = G__37848;
continue;
} else {
var temp__4657__auto___37849 = cljs.core.seq.call(null,seq__37836_37840);
if(temp__4657__auto___37849){
var seq__37836_37850__$1 = temp__4657__auto___37849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37836_37850__$1)){
var c__29125__auto___37851 = cljs.core.chunk_first.call(null,seq__37836_37850__$1);
var G__37852 = cljs.core.chunk_rest.call(null,seq__37836_37850__$1);
var G__37853 = c__29125__auto___37851;
var G__37854 = cljs.core.count.call(null,c__29125__auto___37851);
var G__37855 = (0);
seq__37836_37840 = G__37852;
chunk__37837_37841 = G__37853;
count__37838_37842 = G__37854;
i__37839_37843 = G__37855;
continue;
} else {
var msg_37856 = cljs.core.first.call(null,seq__37836_37850__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37856);

var G__37857 = cljs.core.next.call(null,seq__37836_37850__$1);
var G__37858 = null;
var G__37859 = (0);
var G__37860 = (0);
seq__37836_37840 = G__37857;
chunk__37837_37841 = G__37858;
count__37838_37842 = G__37859;
i__37839_37843 = G__37860;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37861){
var map__37862 = p__37861;
var map__37862__$1 = ((((!((map__37862 == null)))?((((map__37862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37862):map__37862);
var w = map__37862__$1;
var message = cljs.core.get.call(null,map__37862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37864 = cljs.core.seq.call(null,plugins);
var chunk__37865 = null;
var count__37866 = (0);
var i__37867 = (0);
while(true){
if((i__37867 < count__37866)){
var vec__37868 = cljs.core._nth.call(null,chunk__37865,i__37867);
var k = cljs.core.nth.call(null,vec__37868,(0),null);
var plugin = cljs.core.nth.call(null,vec__37868,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37874 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37864,chunk__37865,count__37866,i__37867,pl_37874,vec__37868,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37874.call(null,msg_hist);
});})(seq__37864,chunk__37865,count__37866,i__37867,pl_37874,vec__37868,k,plugin))
);
} else {
}

var G__37875 = seq__37864;
var G__37876 = chunk__37865;
var G__37877 = count__37866;
var G__37878 = (i__37867 + (1));
seq__37864 = G__37875;
chunk__37865 = G__37876;
count__37866 = G__37877;
i__37867 = G__37878;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37864);
if(temp__4657__auto__){
var seq__37864__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37864__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37864__$1);
var G__37879 = cljs.core.chunk_rest.call(null,seq__37864__$1);
var G__37880 = c__29125__auto__;
var G__37881 = cljs.core.count.call(null,c__29125__auto__);
var G__37882 = (0);
seq__37864 = G__37879;
chunk__37865 = G__37880;
count__37866 = G__37881;
i__37867 = G__37882;
continue;
} else {
var vec__37871 = cljs.core.first.call(null,seq__37864__$1);
var k = cljs.core.nth.call(null,vec__37871,(0),null);
var plugin = cljs.core.nth.call(null,vec__37871,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37883 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37864,chunk__37865,count__37866,i__37867,pl_37883,vec__37871,k,plugin,seq__37864__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37883.call(null,msg_hist);
});})(seq__37864,chunk__37865,count__37866,i__37867,pl_37883,vec__37871,k,plugin,seq__37864__$1,temp__4657__auto__))
);
} else {
}

var G__37884 = cljs.core.next.call(null,seq__37864__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37864 = G__37884;
chunk__37865 = G__37885;
count__37866 = G__37886;
i__37867 = G__37887;
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
var G__37889 = arguments.length;
switch (G__37889) {
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

var seq__37890_37895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37891_37896 = null;
var count__37892_37897 = (0);
var i__37893_37898 = (0);
while(true){
if((i__37893_37898 < count__37892_37897)){
var msg_37899 = cljs.core._nth.call(null,chunk__37891_37896,i__37893_37898);
figwheel.client.socket.handle_incoming_message.call(null,msg_37899);

var G__37900 = seq__37890_37895;
var G__37901 = chunk__37891_37896;
var G__37902 = count__37892_37897;
var G__37903 = (i__37893_37898 + (1));
seq__37890_37895 = G__37900;
chunk__37891_37896 = G__37901;
count__37892_37897 = G__37902;
i__37893_37898 = G__37903;
continue;
} else {
var temp__4657__auto___37904 = cljs.core.seq.call(null,seq__37890_37895);
if(temp__4657__auto___37904){
var seq__37890_37905__$1 = temp__4657__auto___37904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37890_37905__$1)){
var c__29125__auto___37906 = cljs.core.chunk_first.call(null,seq__37890_37905__$1);
var G__37907 = cljs.core.chunk_rest.call(null,seq__37890_37905__$1);
var G__37908 = c__29125__auto___37906;
var G__37909 = cljs.core.count.call(null,c__29125__auto___37906);
var G__37910 = (0);
seq__37890_37895 = G__37907;
chunk__37891_37896 = G__37908;
count__37892_37897 = G__37909;
i__37893_37898 = G__37910;
continue;
} else {
var msg_37911 = cljs.core.first.call(null,seq__37890_37905__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37911);

var G__37912 = cljs.core.next.call(null,seq__37890_37905__$1);
var G__37913 = null;
var G__37914 = (0);
var G__37915 = (0);
seq__37890_37895 = G__37912;
chunk__37891_37896 = G__37913;
count__37892_37897 = G__37914;
i__37893_37898 = G__37915;
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
var len__29455__auto___37920 = arguments.length;
var i__29456__auto___37921 = (0);
while(true){
if((i__29456__auto___37921 < len__29455__auto___37920)){
args__29462__auto__.push((arguments[i__29456__auto___37921]));

var G__37922 = (i__29456__auto___37921 + (1));
i__29456__auto___37921 = G__37922;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37917){
var map__37918 = p__37917;
var map__37918__$1 = ((((!((map__37918 == null)))?((((map__37918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37918):map__37918);
var opts = map__37918__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37916){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37916));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37923){if((e37923 instanceof Error)){
var e = e37923;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37923;

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
return (function (p__37924){
var map__37925 = p__37924;
var map__37925__$1 = ((((!((map__37925 == null)))?((((map__37925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37925):map__37925);
var msg_name = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1508424084146
