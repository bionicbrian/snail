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
}catch (e37979){if((e37979 instanceof Error)){
var e = e37979;
return "Error: Unable to stringify";
} else {
throw e37979;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37982 = arguments.length;
switch (G__37982) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37980_SHARP_){
if(typeof p1__37980_SHARP_ === 'string'){
return p1__37980_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37980_SHARP_);
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
var len__29455__auto___37985 = arguments.length;
var i__29456__auto___37986 = (0);
while(true){
if((i__29456__auto___37986 < len__29455__auto___37985)){
args__29462__auto__.push((arguments[i__29456__auto___37986]));

var G__37987 = (i__29456__auto___37986 + (1));
i__29456__auto___37986 = G__37987;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37984){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37984));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37989 = arguments.length;
var i__29456__auto___37990 = (0);
while(true){
if((i__29456__auto___37990 < len__29455__auto___37989)){
args__29462__auto__.push((arguments[i__29456__auto___37990]));

var G__37991 = (i__29456__auto___37990 + (1));
i__29456__auto___37990 = G__37991;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37988){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37988));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37992){
var map__37993 = p__37992;
var map__37993__$1 = ((((!((map__37993 == null)))?((((map__37993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37993):map__37993);
var message = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33099__auto___38072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___38072,ch){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___38072,ch){
return (function (state_38044){
var state_val_38045 = (state_38044[(1)]);
if((state_val_38045 === (7))){
var inst_38040 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38046_38073 = state_38044__$1;
(statearr_38046_38073[(2)] = inst_38040);

(statearr_38046_38073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (1))){
var state_38044__$1 = state_38044;
var statearr_38047_38074 = state_38044__$1;
(statearr_38047_38074[(2)] = null);

(statearr_38047_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (4))){
var inst_37997 = (state_38044[(7)]);
var inst_37997__$1 = (state_38044[(2)]);
var state_38044__$1 = (function (){var statearr_38048 = state_38044;
(statearr_38048[(7)] = inst_37997__$1);

return statearr_38048;
})();
if(cljs.core.truth_(inst_37997__$1)){
var statearr_38049_38075 = state_38044__$1;
(statearr_38049_38075[(1)] = (5));

} else {
var statearr_38050_38076 = state_38044__$1;
(statearr_38050_38076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (15))){
var inst_38004 = (state_38044[(8)]);
var inst_38019 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38004);
var inst_38020 = cljs.core.first.call(null,inst_38019);
var inst_38021 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38020);
var inst_38022 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38021)].join('');
var inst_38023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38022);
var state_38044__$1 = state_38044;
var statearr_38051_38077 = state_38044__$1;
(statearr_38051_38077[(2)] = inst_38023);

(statearr_38051_38077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (13))){
var inst_38028 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38052_38078 = state_38044__$1;
(statearr_38052_38078[(2)] = inst_38028);

(statearr_38052_38078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (6))){
var state_38044__$1 = state_38044;
var statearr_38053_38079 = state_38044__$1;
(statearr_38053_38079[(2)] = null);

(statearr_38053_38079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (17))){
var inst_38026 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38054_38080 = state_38044__$1;
(statearr_38054_38080[(2)] = inst_38026);

(statearr_38054_38080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (3))){
var inst_38042 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38044__$1,inst_38042);
} else {
if((state_val_38045 === (12))){
var inst_38003 = (state_38044[(9)]);
var inst_38017 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38003,opts);
var state_38044__$1 = state_38044;
if(cljs.core.truth_(inst_38017)){
var statearr_38055_38081 = state_38044__$1;
(statearr_38055_38081[(1)] = (15));

} else {
var statearr_38056_38082 = state_38044__$1;
(statearr_38056_38082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (2))){
var state_38044__$1 = state_38044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38044__$1,(4),ch);
} else {
if((state_val_38045 === (11))){
var inst_38004 = (state_38044[(8)]);
var inst_38009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38010 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38004);
var inst_38011 = cljs.core.async.timeout.call(null,(1000));
var inst_38012 = [inst_38010,inst_38011];
var inst_38013 = (new cljs.core.PersistentVector(null,2,(5),inst_38009,inst_38012,null));
var state_38044__$1 = state_38044;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38044__$1,(14),inst_38013);
} else {
if((state_val_38045 === (9))){
var inst_38004 = (state_38044[(8)]);
var inst_38030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38031 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38004);
var inst_38032 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38031);
var inst_38033 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38032)].join('');
var inst_38034 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38033);
var state_38044__$1 = (function (){var statearr_38057 = state_38044;
(statearr_38057[(10)] = inst_38030);

return statearr_38057;
})();
var statearr_38058_38083 = state_38044__$1;
(statearr_38058_38083[(2)] = inst_38034);

(statearr_38058_38083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (5))){
var inst_37997 = (state_38044[(7)]);
var inst_37999 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38000 = (new cljs.core.PersistentArrayMap(null,2,inst_37999,null));
var inst_38001 = (new cljs.core.PersistentHashSet(null,inst_38000,null));
var inst_38002 = figwheel.client.focus_msgs.call(null,inst_38001,inst_37997);
var inst_38003 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38002);
var inst_38004 = cljs.core.first.call(null,inst_38002);
var inst_38005 = figwheel.client.autoload_QMARK_.call(null);
var state_38044__$1 = (function (){var statearr_38059 = state_38044;
(statearr_38059[(9)] = inst_38003);

(statearr_38059[(8)] = inst_38004);

return statearr_38059;
})();
if(cljs.core.truth_(inst_38005)){
var statearr_38060_38084 = state_38044__$1;
(statearr_38060_38084[(1)] = (8));

} else {
var statearr_38061_38085 = state_38044__$1;
(statearr_38061_38085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (14))){
var inst_38015 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38062_38086 = state_38044__$1;
(statearr_38062_38086[(2)] = inst_38015);

(statearr_38062_38086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (16))){
var state_38044__$1 = state_38044;
var statearr_38063_38087 = state_38044__$1;
(statearr_38063_38087[(2)] = null);

(statearr_38063_38087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (10))){
var inst_38036 = (state_38044[(2)]);
var state_38044__$1 = (function (){var statearr_38064 = state_38044;
(statearr_38064[(11)] = inst_38036);

return statearr_38064;
})();
var statearr_38065_38088 = state_38044__$1;
(statearr_38065_38088[(2)] = null);

(statearr_38065_38088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (8))){
var inst_38003 = (state_38044[(9)]);
var inst_38007 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38003,opts);
var state_38044__$1 = state_38044;
if(cljs.core.truth_(inst_38007)){
var statearr_38066_38089 = state_38044__$1;
(statearr_38066_38089[(1)] = (11));

} else {
var statearr_38067_38090 = state_38044__$1;
(statearr_38067_38090[(1)] = (12));

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
});})(c__33099__auto___38072,ch))
;
return ((function (switch__33011__auto__,c__33099__auto___38072,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____0 = (function (){
var statearr_38068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38068[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__);

(statearr_38068[(1)] = (1));

return statearr_38068;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____1 = (function (state_38044){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_38044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e38069){if((e38069 instanceof Object)){
var ex__33015__auto__ = e38069;
var statearr_38070_38091 = state_38044;
(statearr_38070_38091[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38092 = state_38044;
state_38044 = G__38092;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__ = function(state_38044){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____1.call(this,state_38044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33012__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___38072,ch))
})();
var state__33101__auto__ = (function (){var statearr_38071 = f__33100__auto__.call(null);
(statearr_38071[(6)] = c__33099__auto___38072);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___38072,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38093_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38093_SHARP_));
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
var base_path_38095 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38095){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38094){if((e38094 instanceof Error)){
var e = e38094;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38095], null));
} else {
var e = e38094;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38095))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38096){
var map__38097 = p__38096;
var map__38097__$1 = ((((!((map__38097 == null)))?((((map__38097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38097):map__38097);
var opts = map__38097__$1;
var build_id = cljs.core.get.call(null,map__38097__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38097,map__38097__$1,opts,build_id){
return (function (p__38099){
var vec__38100 = p__38099;
var seq__38101 = cljs.core.seq.call(null,vec__38100);
var first__38102 = cljs.core.first.call(null,seq__38101);
var seq__38101__$1 = cljs.core.next.call(null,seq__38101);
var map__38103 = first__38102;
var map__38103__$1 = ((((!((map__38103 == null)))?((((map__38103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38103):map__38103);
var msg = map__38103__$1;
var msg_name = cljs.core.get.call(null,map__38103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38101__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38100,seq__38101,first__38102,seq__38101__$1,map__38103,map__38103__$1,msg,msg_name,_,map__38097,map__38097__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38100,seq__38101,first__38102,seq__38101__$1,map__38103,map__38103__$1,msg,msg_name,_,map__38097,map__38097__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38097,map__38097__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38105){
var vec__38106 = p__38105;
var seq__38107 = cljs.core.seq.call(null,vec__38106);
var first__38108 = cljs.core.first.call(null,seq__38107);
var seq__38107__$1 = cljs.core.next.call(null,seq__38107);
var map__38109 = first__38108;
var map__38109__$1 = ((((!((map__38109 == null)))?((((map__38109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38109):map__38109);
var msg = map__38109__$1;
var msg_name = cljs.core.get.call(null,map__38109__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38107__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38111){
var map__38112 = p__38111;
var map__38112__$1 = ((((!((map__38112 == null)))?((((map__38112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38112):map__38112);
var on_compile_warning = cljs.core.get.call(null,map__38112__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38112__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38112,map__38112__$1,on_compile_warning,on_compile_fail){
return (function (p__38114){
var vec__38115 = p__38114;
var seq__38116 = cljs.core.seq.call(null,vec__38115);
var first__38117 = cljs.core.first.call(null,seq__38116);
var seq__38116__$1 = cljs.core.next.call(null,seq__38116);
var map__38118 = first__38117;
var map__38118__$1 = ((((!((map__38118 == null)))?((((map__38118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38118):map__38118);
var msg = map__38118__$1;
var msg_name = cljs.core.get.call(null,map__38118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38116__$1;
var pred__38120 = cljs.core._EQ_;
var expr__38121 = msg_name;
if(cljs.core.truth_(pred__38120.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38121))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38120.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38121))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38112,map__38112__$1,on_compile_warning,on_compile_fail))
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__,msg_hist,msg_names,msg){
return (function (state_38210){
var state_val_38211 = (state_38210[(1)]);
if((state_val_38211 === (7))){
var inst_38130 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38130)){
var statearr_38212_38259 = state_38210__$1;
(statearr_38212_38259[(1)] = (8));

} else {
var statearr_38213_38260 = state_38210__$1;
(statearr_38213_38260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (20))){
var inst_38204 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38214_38261 = state_38210__$1;
(statearr_38214_38261[(2)] = inst_38204);

(statearr_38214_38261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (27))){
var inst_38200 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38215_38262 = state_38210__$1;
(statearr_38215_38262[(2)] = inst_38200);

(statearr_38215_38262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (1))){
var inst_38123 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38123)){
var statearr_38216_38263 = state_38210__$1;
(statearr_38216_38263[(1)] = (2));

} else {
var statearr_38217_38264 = state_38210__$1;
(statearr_38217_38264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (24))){
var inst_38202 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38218_38265 = state_38210__$1;
(statearr_38218_38265[(2)] = inst_38202);

(statearr_38218_38265[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (4))){
var inst_38208 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38210__$1,inst_38208);
} else {
if((state_val_38211 === (15))){
var inst_38206 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38219_38266 = state_38210__$1;
(statearr_38219_38266[(2)] = inst_38206);

(statearr_38219_38266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (21))){
var inst_38159 = (state_38210[(2)]);
var inst_38160 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38161 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38160);
var state_38210__$1 = (function (){var statearr_38220 = state_38210;
(statearr_38220[(7)] = inst_38159);

return statearr_38220;
})();
var statearr_38221_38267 = state_38210__$1;
(statearr_38221_38267[(2)] = inst_38161);

(statearr_38221_38267[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (31))){
var inst_38189 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38189)){
var statearr_38222_38268 = state_38210__$1;
(statearr_38222_38268[(1)] = (34));

} else {
var statearr_38223_38269 = state_38210__$1;
(statearr_38223_38269[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (32))){
var inst_38198 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38224_38270 = state_38210__$1;
(statearr_38224_38270[(2)] = inst_38198);

(statearr_38224_38270[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (33))){
var inst_38185 = (state_38210[(2)]);
var inst_38186 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38187 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38186);
var state_38210__$1 = (function (){var statearr_38225 = state_38210;
(statearr_38225[(8)] = inst_38185);

return statearr_38225;
})();
var statearr_38226_38271 = state_38210__$1;
(statearr_38226_38271[(2)] = inst_38187);

(statearr_38226_38271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (13))){
var inst_38144 = figwheel.client.heads_up.clear.call(null);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(16),inst_38144);
} else {
if((state_val_38211 === (22))){
var inst_38165 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38166 = figwheel.client.heads_up.append_warning_message.call(null,inst_38165);
var state_38210__$1 = state_38210;
var statearr_38227_38272 = state_38210__$1;
(statearr_38227_38272[(2)] = inst_38166);

(statearr_38227_38272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (36))){
var inst_38196 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38228_38273 = state_38210__$1;
(statearr_38228_38273[(2)] = inst_38196);

(statearr_38228_38273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (29))){
var inst_38176 = (state_38210[(2)]);
var inst_38177 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38178 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38177);
var state_38210__$1 = (function (){var statearr_38229 = state_38210;
(statearr_38229[(9)] = inst_38176);

return statearr_38229;
})();
var statearr_38230_38274 = state_38210__$1;
(statearr_38230_38274[(2)] = inst_38178);

(statearr_38230_38274[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (6))){
var inst_38125 = (state_38210[(10)]);
var state_38210__$1 = state_38210;
var statearr_38231_38275 = state_38210__$1;
(statearr_38231_38275[(2)] = inst_38125);

(statearr_38231_38275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (28))){
var inst_38172 = (state_38210[(2)]);
var inst_38173 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38174 = figwheel.client.heads_up.display_warning.call(null,inst_38173);
var state_38210__$1 = (function (){var statearr_38232 = state_38210;
(statearr_38232[(11)] = inst_38172);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(29),inst_38174);
} else {
if((state_val_38211 === (25))){
var inst_38170 = figwheel.client.heads_up.clear.call(null);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(28),inst_38170);
} else {
if((state_val_38211 === (34))){
var inst_38191 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(37),inst_38191);
} else {
if((state_val_38211 === (17))){
var inst_38150 = (state_38210[(2)]);
var inst_38151 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38152 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38151);
var state_38210__$1 = (function (){var statearr_38233 = state_38210;
(statearr_38233[(12)] = inst_38150);

return statearr_38233;
})();
var statearr_38234_38276 = state_38210__$1;
(statearr_38234_38276[(2)] = inst_38152);

(statearr_38234_38276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (3))){
var inst_38142 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38142)){
var statearr_38235_38277 = state_38210__$1;
(statearr_38235_38277[(1)] = (13));

} else {
var statearr_38236_38278 = state_38210__$1;
(statearr_38236_38278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (12))){
var inst_38138 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38237_38279 = state_38210__$1;
(statearr_38237_38279[(2)] = inst_38138);

(statearr_38237_38279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (2))){
var inst_38125 = (state_38210[(10)]);
var inst_38125__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38210__$1 = (function (){var statearr_38238 = state_38210;
(statearr_38238[(10)] = inst_38125__$1);

return statearr_38238;
})();
if(cljs.core.truth_(inst_38125__$1)){
var statearr_38239_38280 = state_38210__$1;
(statearr_38239_38280[(1)] = (5));

} else {
var statearr_38240_38281 = state_38210__$1;
(statearr_38240_38281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (23))){
var inst_38168 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38168)){
var statearr_38241_38282 = state_38210__$1;
(statearr_38241_38282[(1)] = (25));

} else {
var statearr_38242_38283 = state_38210__$1;
(statearr_38242_38283[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (35))){
var state_38210__$1 = state_38210;
var statearr_38243_38284 = state_38210__$1;
(statearr_38243_38284[(2)] = null);

(statearr_38243_38284[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (19))){
var inst_38163 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38163)){
var statearr_38244_38285 = state_38210__$1;
(statearr_38244_38285[(1)] = (22));

} else {
var statearr_38245_38286 = state_38210__$1;
(statearr_38245_38286[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (11))){
var inst_38134 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38246_38287 = state_38210__$1;
(statearr_38246_38287[(2)] = inst_38134);

(statearr_38246_38287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (9))){
var inst_38136 = figwheel.client.heads_up.clear.call(null);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(12),inst_38136);
} else {
if((state_val_38211 === (5))){
var inst_38127 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38210__$1 = state_38210;
var statearr_38247_38288 = state_38210__$1;
(statearr_38247_38288[(2)] = inst_38127);

(statearr_38247_38288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (14))){
var inst_38154 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38154)){
var statearr_38248_38289 = state_38210__$1;
(statearr_38248_38289[(1)] = (18));

} else {
var statearr_38249_38290 = state_38210__$1;
(statearr_38249_38290[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (26))){
var inst_38180 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38210__$1 = state_38210;
if(cljs.core.truth_(inst_38180)){
var statearr_38250_38291 = state_38210__$1;
(statearr_38250_38291[(1)] = (30));

} else {
var statearr_38251_38292 = state_38210__$1;
(statearr_38251_38292[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (16))){
var inst_38146 = (state_38210[(2)]);
var inst_38147 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38148 = figwheel.client.heads_up.display_exception.call(null,inst_38147);
var state_38210__$1 = (function (){var statearr_38252 = state_38210;
(statearr_38252[(13)] = inst_38146);

return statearr_38252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(17),inst_38148);
} else {
if((state_val_38211 === (30))){
var inst_38182 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38183 = figwheel.client.heads_up.display_warning.call(null,inst_38182);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(33),inst_38183);
} else {
if((state_val_38211 === (10))){
var inst_38140 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38253_38293 = state_38210__$1;
(statearr_38253_38293[(2)] = inst_38140);

(statearr_38253_38293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (18))){
var inst_38156 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38157 = figwheel.client.heads_up.display_exception.call(null,inst_38156);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(21),inst_38157);
} else {
if((state_val_38211 === (37))){
var inst_38193 = (state_38210[(2)]);
var state_38210__$1 = state_38210;
var statearr_38254_38294 = state_38210__$1;
(statearr_38254_38294[(2)] = inst_38193);

(statearr_38254_38294[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38211 === (8))){
var inst_38132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38210__$1 = state_38210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38210__$1,(11),inst_38132);
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
});})(c__33099__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33011__auto__,c__33099__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____0 = (function (){
var statearr_38255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38255[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__);

(statearr_38255[(1)] = (1));

return statearr_38255;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____1 = (function (state_38210){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_38210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e38256){if((e38256 instanceof Object)){
var ex__33015__auto__ = e38256;
var statearr_38257_38295 = state_38210;
(statearr_38257_38295[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38296 = state_38210;
state_38210 = G__38296;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__ = function(state_38210){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____1.call(this,state_38210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__,msg_hist,msg_names,msg))
})();
var state__33101__auto__ = (function (){var statearr_38258 = f__33100__auto__.call(null);
(statearr_38258[(6)] = c__33099__auto__);

return statearr_38258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__,msg_hist,msg_names,msg))
);

return c__33099__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33099__auto___38325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto___38325,ch){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto___38325,ch){
return (function (state_38311){
var state_val_38312 = (state_38311[(1)]);
if((state_val_38312 === (1))){
var state_38311__$1 = state_38311;
var statearr_38313_38326 = state_38311__$1;
(statearr_38313_38326[(2)] = null);

(statearr_38313_38326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38312 === (2))){
var state_38311__$1 = state_38311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38311__$1,(4),ch);
} else {
if((state_val_38312 === (3))){
var inst_38309 = (state_38311[(2)]);
var state_38311__$1 = state_38311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38311__$1,inst_38309);
} else {
if((state_val_38312 === (4))){
var inst_38299 = (state_38311[(7)]);
var inst_38299__$1 = (state_38311[(2)]);
var state_38311__$1 = (function (){var statearr_38314 = state_38311;
(statearr_38314[(7)] = inst_38299__$1);

return statearr_38314;
})();
if(cljs.core.truth_(inst_38299__$1)){
var statearr_38315_38327 = state_38311__$1;
(statearr_38315_38327[(1)] = (5));

} else {
var statearr_38316_38328 = state_38311__$1;
(statearr_38316_38328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38312 === (5))){
var inst_38299 = (state_38311[(7)]);
var inst_38301 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38299);
var state_38311__$1 = state_38311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38311__$1,(8),inst_38301);
} else {
if((state_val_38312 === (6))){
var state_38311__$1 = state_38311;
var statearr_38317_38329 = state_38311__$1;
(statearr_38317_38329[(2)] = null);

(statearr_38317_38329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38312 === (7))){
var inst_38307 = (state_38311[(2)]);
var state_38311__$1 = state_38311;
var statearr_38318_38330 = state_38311__$1;
(statearr_38318_38330[(2)] = inst_38307);

(statearr_38318_38330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38312 === (8))){
var inst_38303 = (state_38311[(2)]);
var state_38311__$1 = (function (){var statearr_38319 = state_38311;
(statearr_38319[(8)] = inst_38303);

return statearr_38319;
})();
var statearr_38320_38331 = state_38311__$1;
(statearr_38320_38331[(2)] = null);

(statearr_38320_38331[(1)] = (2));


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
});})(c__33099__auto___38325,ch))
;
return ((function (switch__33011__auto__,c__33099__auto___38325,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33012__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33012__auto____0 = (function (){
var statearr_38321 = [null,null,null,null,null,null,null,null,null];
(statearr_38321[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33012__auto__);

(statearr_38321[(1)] = (1));

return statearr_38321;
});
var figwheel$client$heads_up_plugin_$_state_machine__33012__auto____1 = (function (state_38311){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_38311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e38322){if((e38322 instanceof Object)){
var ex__33015__auto__ = e38322;
var statearr_38323_38332 = state_38311;
(statearr_38323_38332[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38333 = state_38311;
state_38311 = G__38333;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33012__auto__ = function(state_38311){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33012__auto____1.call(this,state_38311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33012__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33012__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto___38325,ch))
})();
var state__33101__auto__ = (function (){var statearr_38324 = f__33100__auto__.call(null);
(statearr_38324[(6)] = c__33099__auto___38325);

return statearr_38324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto___38325,ch))
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__){
return (function (state_38339){
var state_val_38340 = (state_38339[(1)]);
if((state_val_38340 === (1))){
var inst_38334 = cljs.core.async.timeout.call(null,(3000));
var state_38339__$1 = state_38339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38339__$1,(2),inst_38334);
} else {
if((state_val_38340 === (2))){
var inst_38336 = (state_38339[(2)]);
var inst_38337 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38339__$1 = (function (){var statearr_38341 = state_38339;
(statearr_38341[(7)] = inst_38336);

return statearr_38341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38339__$1,inst_38337);
} else {
return null;
}
}
});})(c__33099__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____0 = (function (){
var statearr_38342 = [null,null,null,null,null,null,null,null];
(statearr_38342[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__);

(statearr_38342[(1)] = (1));

return statearr_38342;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____1 = (function (state_38339){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_38339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e38343){if((e38343 instanceof Object)){
var ex__33015__auto__ = e38343;
var statearr_38344_38346 = state_38339;
(statearr_38344_38346[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38347 = state_38339;
state_38339 = G__38347;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__ = function(state_38339){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____1.call(this,state_38339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33012__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__))
})();
var state__33101__auto__ = (function (){var statearr_38345 = f__33100__auto__.call(null);
(statearr_38345[(6)] = c__33099__auto__);

return statearr_38345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__))
);

return c__33099__auto__;
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
var c__33099__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33099__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33100__auto__ = (function (){var switch__33011__auto__ = ((function (c__33099__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38354){
var state_val_38355 = (state_38354[(1)]);
if((state_val_38355 === (1))){
var inst_38348 = cljs.core.async.timeout.call(null,(2000));
var state_38354__$1 = state_38354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38354__$1,(2),inst_38348);
} else {
if((state_val_38355 === (2))){
var inst_38350 = (state_38354[(2)]);
var inst_38351 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38352 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38351);
var state_38354__$1 = (function (){var statearr_38356 = state_38354;
(statearr_38356[(7)] = inst_38350);

return statearr_38356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38354__$1,inst_38352);
} else {
return null;
}
}
});})(c__33099__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33011__auto__,c__33099__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____0 = (function (){
var statearr_38357 = [null,null,null,null,null,null,null,null];
(statearr_38357[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__);

(statearr_38357[(1)] = (1));

return statearr_38357;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____1 = (function (state_38354){
while(true){
var ret_value__33013__auto__ = (function (){try{while(true){
var result__33014__auto__ = switch__33011__auto__.call(null,state_38354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33014__auto__;
}
break;
}
}catch (e38358){if((e38358 instanceof Object)){
var ex__33015__auto__ = e38358;
var statearr_38359_38361 = state_38354;
(statearr_38359_38361[(5)] = ex__33015__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38362 = state_38354;
state_38354 = G__38362;
continue;
} else {
return ret_value__33013__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__ = function(state_38354){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____1.call(this,state_38354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33012__auto__;
})()
;})(switch__33011__auto__,c__33099__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33101__auto__ = (function (){var statearr_38360 = f__33100__auto__.call(null);
(statearr_38360[(6)] = c__33099__auto__);

return statearr_38360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33101__auto__);
});})(c__33099__auto__,figwheel_version,temp__4657__auto__))
);

return c__33099__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38363){
var map__38364 = p__38363;
var map__38364__$1 = ((((!((map__38364 == null)))?((((map__38364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38364):map__38364);
var file = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38366 = "";
var G__38366__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38366),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38366);
var G__38366__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38366__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38366__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38366__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38366__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38367){
var map__38368 = p__38367;
var map__38368__$1 = ((((!((map__38368 == null)))?((((map__38368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38368):map__38368);
var ed = map__38368__$1;
var formatted_exception = cljs.core.get.call(null,map__38368__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38368__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38368__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38370_38374 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38371_38375 = null;
var count__38372_38376 = (0);
var i__38373_38377 = (0);
while(true){
if((i__38373_38377 < count__38372_38376)){
var msg_38378 = cljs.core._nth.call(null,chunk__38371_38375,i__38373_38377);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38378);

var G__38379 = seq__38370_38374;
var G__38380 = chunk__38371_38375;
var G__38381 = count__38372_38376;
var G__38382 = (i__38373_38377 + (1));
seq__38370_38374 = G__38379;
chunk__38371_38375 = G__38380;
count__38372_38376 = G__38381;
i__38373_38377 = G__38382;
continue;
} else {
var temp__4657__auto___38383 = cljs.core.seq.call(null,seq__38370_38374);
if(temp__4657__auto___38383){
var seq__38370_38384__$1 = temp__4657__auto___38383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38370_38384__$1)){
var c__29125__auto___38385 = cljs.core.chunk_first.call(null,seq__38370_38384__$1);
var G__38386 = cljs.core.chunk_rest.call(null,seq__38370_38384__$1);
var G__38387 = c__29125__auto___38385;
var G__38388 = cljs.core.count.call(null,c__29125__auto___38385);
var G__38389 = (0);
seq__38370_38374 = G__38386;
chunk__38371_38375 = G__38387;
count__38372_38376 = G__38388;
i__38373_38377 = G__38389;
continue;
} else {
var msg_38390 = cljs.core.first.call(null,seq__38370_38384__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38390);

var G__38391 = cljs.core.next.call(null,seq__38370_38384__$1);
var G__38392 = null;
var G__38393 = (0);
var G__38394 = (0);
seq__38370_38374 = G__38391;
chunk__38371_38375 = G__38392;
count__38372_38376 = G__38393;
i__38373_38377 = G__38394;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38395){
var map__38396 = p__38395;
var map__38396__$1 = ((((!((map__38396 == null)))?((((map__38396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38396):map__38396);
var w = map__38396__$1;
var message = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38398 = cljs.core.seq.call(null,plugins);
var chunk__38399 = null;
var count__38400 = (0);
var i__38401 = (0);
while(true){
if((i__38401 < count__38400)){
var vec__38402 = cljs.core._nth.call(null,chunk__38399,i__38401);
var k = cljs.core.nth.call(null,vec__38402,(0),null);
var plugin = cljs.core.nth.call(null,vec__38402,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38408 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38398,chunk__38399,count__38400,i__38401,pl_38408,vec__38402,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38408.call(null,msg_hist);
});})(seq__38398,chunk__38399,count__38400,i__38401,pl_38408,vec__38402,k,plugin))
);
} else {
}

var G__38409 = seq__38398;
var G__38410 = chunk__38399;
var G__38411 = count__38400;
var G__38412 = (i__38401 + (1));
seq__38398 = G__38409;
chunk__38399 = G__38410;
count__38400 = G__38411;
i__38401 = G__38412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38398);
if(temp__4657__auto__){
var seq__38398__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38398__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__38398__$1);
var G__38413 = cljs.core.chunk_rest.call(null,seq__38398__$1);
var G__38414 = c__29125__auto__;
var G__38415 = cljs.core.count.call(null,c__29125__auto__);
var G__38416 = (0);
seq__38398 = G__38413;
chunk__38399 = G__38414;
count__38400 = G__38415;
i__38401 = G__38416;
continue;
} else {
var vec__38405 = cljs.core.first.call(null,seq__38398__$1);
var k = cljs.core.nth.call(null,vec__38405,(0),null);
var plugin = cljs.core.nth.call(null,vec__38405,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38417 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38398,chunk__38399,count__38400,i__38401,pl_38417,vec__38405,k,plugin,seq__38398__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38417.call(null,msg_hist);
});})(seq__38398,chunk__38399,count__38400,i__38401,pl_38417,vec__38405,k,plugin,seq__38398__$1,temp__4657__auto__))
);
} else {
}

var G__38418 = cljs.core.next.call(null,seq__38398__$1);
var G__38419 = null;
var G__38420 = (0);
var G__38421 = (0);
seq__38398 = G__38418;
chunk__38399 = G__38419;
count__38400 = G__38420;
i__38401 = G__38421;
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
var G__38423 = arguments.length;
switch (G__38423) {
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

var seq__38424_38429 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38425_38430 = null;
var count__38426_38431 = (0);
var i__38427_38432 = (0);
while(true){
if((i__38427_38432 < count__38426_38431)){
var msg_38433 = cljs.core._nth.call(null,chunk__38425_38430,i__38427_38432);
figwheel.client.socket.handle_incoming_message.call(null,msg_38433);

var G__38434 = seq__38424_38429;
var G__38435 = chunk__38425_38430;
var G__38436 = count__38426_38431;
var G__38437 = (i__38427_38432 + (1));
seq__38424_38429 = G__38434;
chunk__38425_38430 = G__38435;
count__38426_38431 = G__38436;
i__38427_38432 = G__38437;
continue;
} else {
var temp__4657__auto___38438 = cljs.core.seq.call(null,seq__38424_38429);
if(temp__4657__auto___38438){
var seq__38424_38439__$1 = temp__4657__auto___38438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38424_38439__$1)){
var c__29125__auto___38440 = cljs.core.chunk_first.call(null,seq__38424_38439__$1);
var G__38441 = cljs.core.chunk_rest.call(null,seq__38424_38439__$1);
var G__38442 = c__29125__auto___38440;
var G__38443 = cljs.core.count.call(null,c__29125__auto___38440);
var G__38444 = (0);
seq__38424_38429 = G__38441;
chunk__38425_38430 = G__38442;
count__38426_38431 = G__38443;
i__38427_38432 = G__38444;
continue;
} else {
var msg_38445 = cljs.core.first.call(null,seq__38424_38439__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38445);

var G__38446 = cljs.core.next.call(null,seq__38424_38439__$1);
var G__38447 = null;
var G__38448 = (0);
var G__38449 = (0);
seq__38424_38429 = G__38446;
chunk__38425_38430 = G__38447;
count__38426_38431 = G__38448;
i__38427_38432 = G__38449;
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
var len__29455__auto___38454 = arguments.length;
var i__29456__auto___38455 = (0);
while(true){
if((i__29456__auto___38455 < len__29455__auto___38454)){
args__29462__auto__.push((arguments[i__29456__auto___38455]));

var G__38456 = (i__29456__auto___38455 + (1));
i__29456__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38451){
var map__38452 = p__38451;
var map__38452__$1 = ((((!((map__38452 == null)))?((((map__38452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38452):map__38452);
var opts = map__38452__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38450){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38450));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38457){if((e38457 instanceof Error)){
var e = e38457;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38457;

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
return (function (p__38458){
var map__38459 = p__38458;
var map__38459__$1 = ((((!((map__38459 == null)))?((((map__38459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38459):map__38459);
var msg_name = cljs.core.get.call(null,map__38459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1508541448797
