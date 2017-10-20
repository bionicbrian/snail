// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40745_40746 = value;
x40745_40746.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40748_40749 = value;
x40748_40749.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40751_40752 = value;
x40751_40752.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28274__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28274__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40759 = arguments.length;
var i__29456__auto___40760 = (0);
while(true){
if((i__29456__auto___40760 < len__29455__auto___40759)){
args__29462__auto__.push((arguments[i__29456__auto___40760]));

var G__40761 = (i__29456__auto___40760 + (1));
i__29456__auto___40760 = G__40761;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40755_40762 = cljs.core.seq.call(null,items);
var chunk__40756_40763 = null;
var count__40757_40764 = (0);
var i__40758_40765 = (0);
while(true){
if((i__40758_40765 < count__40757_40764)){
var item_40766 = cljs.core._nth.call(null,chunk__40756_40763,i__40758_40765);
if(!((item_40766 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40766)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40766)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40766));
}
} else {
}

var G__40767 = seq__40755_40762;
var G__40768 = chunk__40756_40763;
var G__40769 = count__40757_40764;
var G__40770 = (i__40758_40765 + (1));
seq__40755_40762 = G__40767;
chunk__40756_40763 = G__40768;
count__40757_40764 = G__40769;
i__40758_40765 = G__40770;
continue;
} else {
var temp__4657__auto___40771 = cljs.core.seq.call(null,seq__40755_40762);
if(temp__4657__auto___40771){
var seq__40755_40772__$1 = temp__4657__auto___40771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40755_40772__$1)){
var c__29125__auto___40773 = cljs.core.chunk_first.call(null,seq__40755_40772__$1);
var G__40774 = cljs.core.chunk_rest.call(null,seq__40755_40772__$1);
var G__40775 = c__29125__auto___40773;
var G__40776 = cljs.core.count.call(null,c__29125__auto___40773);
var G__40777 = (0);
seq__40755_40762 = G__40774;
chunk__40756_40763 = G__40775;
count__40757_40764 = G__40776;
i__40758_40765 = G__40777;
continue;
} else {
var item_40778 = cljs.core.first.call(null,seq__40755_40772__$1);
if(!((item_40778 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40778)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40778)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40778));
}
} else {
}

var G__40779 = cljs.core.next.call(null,seq__40755_40772__$1);
var G__40780 = null;
var G__40781 = (0);
var G__40782 = (0);
seq__40755_40762 = G__40779;
chunk__40756_40763 = G__40780;
count__40757_40764 = G__40781;
i__40758_40765 = G__40782;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40754){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40754));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40790 = arguments.length;
var i__29456__auto___40791 = (0);
while(true){
if((i__29456__auto___40791 < len__29455__auto___40790)){
args__29462__auto__.push((arguments[i__29456__auto___40791]));

var G__40792 = (i__29456__auto___40791 + (1));
i__29456__auto___40791 = G__40792;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((2) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29463__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40786_40793 = cljs.core.seq.call(null,children);
var chunk__40787_40794 = null;
var count__40788_40795 = (0);
var i__40789_40796 = (0);
while(true){
if((i__40789_40796 < count__40788_40795)){
var child_40797 = cljs.core._nth.call(null,chunk__40787_40794,i__40789_40796);
if(!((child_40797 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40797)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40797))));
} else {
var temp__4655__auto___40798 = devtools.formatters.helpers.pref.call(null,child_40797);
if(cljs.core.truth_(temp__4655__auto___40798)){
var child_value_40799 = temp__4655__auto___40798;
template.push(child_value_40799);
} else {
}
}
} else {
}

var G__40800 = seq__40786_40793;
var G__40801 = chunk__40787_40794;
var G__40802 = count__40788_40795;
var G__40803 = (i__40789_40796 + (1));
seq__40786_40793 = G__40800;
chunk__40787_40794 = G__40801;
count__40788_40795 = G__40802;
i__40789_40796 = G__40803;
continue;
} else {
var temp__4657__auto___40804 = cljs.core.seq.call(null,seq__40786_40793);
if(temp__4657__auto___40804){
var seq__40786_40805__$1 = temp__4657__auto___40804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40786_40805__$1)){
var c__29125__auto___40806 = cljs.core.chunk_first.call(null,seq__40786_40805__$1);
var G__40807 = cljs.core.chunk_rest.call(null,seq__40786_40805__$1);
var G__40808 = c__29125__auto___40806;
var G__40809 = cljs.core.count.call(null,c__29125__auto___40806);
var G__40810 = (0);
seq__40786_40793 = G__40807;
chunk__40787_40794 = G__40808;
count__40788_40795 = G__40809;
i__40789_40796 = G__40810;
continue;
} else {
var child_40811 = cljs.core.first.call(null,seq__40786_40805__$1);
if(!((child_40811 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40811)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40811))));
} else {
var temp__4655__auto___40812 = devtools.formatters.helpers.pref.call(null,child_40811);
if(cljs.core.truth_(temp__4655__auto___40812)){
var child_value_40813 = temp__4655__auto___40812;
template.push(child_value_40813);
} else {
}
}
} else {
}

var G__40814 = cljs.core.next.call(null,seq__40786_40805__$1);
var G__40815 = null;
var G__40816 = (0);
var G__40817 = (0);
seq__40786_40793 = G__40814;
chunk__40787_40794 = G__40815;
count__40788_40795 = G__40816;
i__40789_40796 = G__40817;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40783){
var G__40784 = cljs.core.first.call(null,seq40783);
var seq40783__$1 = cljs.core.next.call(null,seq40783);
var G__40785 = cljs.core.first.call(null,seq40783__$1);
var seq40783__$2 = cljs.core.next.call(null,seq40783__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40784,G__40785,seq40783__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40820 = arguments.length;
var i__29456__auto___40821 = (0);
while(true){
if((i__29456__auto___40821 < len__29455__auto___40820)){
args__29462__auto__.push((arguments[i__29456__auto___40821]));

var G__40822 = (i__29456__auto___40821 + (1));
i__29456__auto___40821 = G__40822;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40818){
var G__40819 = cljs.core.first.call(null,seq40818);
var seq40818__$1 = cljs.core.next.call(null,seq40818);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40819,seq40818__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40825 = arguments.length;
var i__29456__auto___40826 = (0);
while(true){
if((i__29456__auto___40826 < len__29455__auto___40825)){
args__29462__auto__.push((arguments[i__29456__auto___40826]));

var G__40827 = (i__29456__auto___40826 + (1));
i__29456__auto___40826 = G__40827;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40823){
var G__40824 = cljs.core.first.call(null,seq40823);
var seq40823__$1 = cljs.core.next.call(null,seq40823);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40824,seq40823__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__40829 = arguments.length;
switch (G__40829) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40831 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28286__auto__ = start_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (0);
}
})()};
return obj40831;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40839 = arguments.length;
var i__29456__auto___40840 = (0);
while(true){
if((i__29456__auto___40840 < len__29455__auto___40839)){
args__29462__auto__.push((arguments[i__29456__auto___40840]));

var G__40841 = (i__29456__auto___40840 + (1));
i__29456__auto___40840 = G__40841;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40835){
var vec__40836 = p__40835;
var state_override_fn = cljs.core.nth.call(null,vec__40836,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40833){
var G__40834 = cljs.core.first.call(null,seq40833);
var seq40833__$1 = cljs.core.next.call(null,seq40833);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40834,seq40833__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40842 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40842;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40843 = name;
switch (G__40843) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40845 = tag;
var html_tag = cljs.core.nth.call(null,vec__40845,(0),null);
var style = cljs.core.nth.call(null,vec__40845,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40848 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40848;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40849 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40850 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40850;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40849;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40851 = initial_value;
var G__40852 = value.call(null);
initial_value = G__40851;
value = G__40852;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40853 = initial_value;
var G__40854 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40853;
value = G__40854;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40855 = initial_value;
var G__40856 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40855;
value = G__40856;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1508541451816
