// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._header[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._header["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._has_body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37988 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37988["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37989 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37989["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37990 = temp__4655__auto____$2;
return (o37990["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37991 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37991["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37992 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37992["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37993 = temp__4655__auto____$2;
return (o37993["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37994 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37994["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37995 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37995["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37996 = temp__4655__auto____$2;
return (o37996["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37997 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37997["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37998 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37998["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37999 = temp__4655__auto____$2;
return (o37999["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38000 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38000["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38001 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38001["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38002 = temp__4655__auto____$2;
return (o38002["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38003 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38003["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38004 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38004["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38005 = temp__4655__auto____$2;
return (o38005["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38006 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38006["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38007 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38007["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38008 = temp__4655__auto____$2;
return (o38008["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38010 = arguments.length;
var i__29456__auto___38011 = (0);
while(true){
if((i__29456__auto___38011 < len__29455__auto___38010)){
args__29462__auto__.push((arguments[i__29456__auto___38011]));

var G__38012 = (i__29456__auto___38011 + (1));
i__29456__auto___38011 = G__38012;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38009){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38009));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38014 = arguments.length;
var i__29456__auto___38015 = (0);
while(true){
if((i__29456__auto___38015 < len__29455__auto___38014)){
args__29462__auto__.push((arguments[i__29456__auto___38015]));

var G__38016 = (i__29456__auto___38015 + (1));
i__29456__auto___38015 = G__38016;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38013){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38013));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38018 = arguments.length;
var i__29456__auto___38019 = (0);
while(true){
if((i__29456__auto___38019 < len__29455__auto___38018)){
args__29462__auto__.push((arguments[i__29456__auto___38019]));

var G__38020 = (i__29456__auto___38019 + (1));
i__29456__auto___38019 = G__38020;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38017){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38017));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38022 = arguments.length;
var i__29456__auto___38023 = (0);
while(true){
if((i__29456__auto___38023 < len__29455__auto___38022)){
args__29462__auto__.push((arguments[i__29456__auto___38023]));

var G__38024 = (i__29456__auto___38023 + (1));
i__29456__auto___38023 = G__38024;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38021){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38021));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38026 = arguments.length;
var i__29456__auto___38027 = (0);
while(true){
if((i__29456__auto___38027 < len__29455__auto___38026)){
args__29462__auto__.push((arguments[i__29456__auto___38027]));

var G__38028 = (i__29456__auto___38027 + (1));
i__29456__auto___38027 = G__38028;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38025){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38025));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38030 = arguments.length;
var i__29456__auto___38031 = (0);
while(true){
if((i__29456__auto___38031 < len__29455__auto___38030)){
args__29462__auto__.push((arguments[i__29456__auto___38031]));

var G__38032 = (i__29456__auto___38031 + (1));
i__29456__auto___38031 = G__38032;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38029){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38029));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38034 = arguments.length;
var i__29456__auto___38035 = (0);
while(true){
if((i__29456__auto___38035 < len__29455__auto___38034)){
args__29462__auto__.push((arguments[i__29456__auto___38035]));

var G__38036 = (i__29456__auto___38035 + (1));
i__29456__auto___38035 = G__38036;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38033){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38033));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38044 = arguments.length;
var i__29456__auto___38045 = (0);
while(true){
if((i__29456__auto___38045 < len__29455__auto___38044)){
args__29462__auto__.push((arguments[i__29456__auto___38045]));

var G__38046 = (i__29456__auto___38045 + (1));
i__29456__auto___38045 = G__38046;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38040){
var vec__38041 = p__38040;
var state_override = cljs.core.nth.call(null,vec__38041,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38041,state_override){
return (function (p1__38037_SHARP_){
return cljs.core.merge.call(null,p1__38037_SHARP_,state_override);
});})(vec__38041,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38038){
var G__38039 = cljs.core.first.call(null,seq38038);
var seq38038__$1 = cljs.core.next.call(null,seq38038);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38039,seq38038__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38048 = arguments.length;
var i__29456__auto___38049 = (0);
while(true){
if((i__29456__auto___38049 < len__29455__auto___38048)){
args__29462__auto__.push((arguments[i__29456__auto___38049]));

var G__38050 = (i__29456__auto___38049 + (1));
i__29456__auto___38049 = G__38050;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38047){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38047));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38053 = arguments.length;
var i__29456__auto___38054 = (0);
while(true){
if((i__29456__auto___38054 < len__29455__auto___38053)){
args__29462__auto__.push((arguments[i__29456__auto___38054]));

var G__38055 = (i__29456__auto___38054 + (1));
i__29456__auto___38054 = G__38055;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38051){
var G__38052 = cljs.core.first.call(null,seq38051);
var seq38051__$1 = cljs.core.next.call(null,seq38051);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38052,seq38051__$1);
});


//# sourceMappingURL=format.js.map?rel=1508424084445
