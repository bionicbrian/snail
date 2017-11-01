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
var o38011 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38011["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38012 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38012["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38013 = temp__4655__auto____$2;
return (o38013["make_template"]);
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
var o38014 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38014["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38015 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38015["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38016 = temp__4655__auto____$2;
return (o38016["make_group"]);
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
var o38017 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38017["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38018 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38018["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38019 = temp__4655__auto____$2;
return (o38019["make_reference"]);
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
var o38020 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38020["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38021 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38021["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38022 = temp__4655__auto____$2;
return (o38022["make_surrogate"]);
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
var o38023 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38023["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38024 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38024["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38025 = temp__4655__auto____$2;
return (o38025["render_markup"]);
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
var o38026 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38026["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38027 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38027["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38028 = temp__4655__auto____$2;
return (o38028["_LT_header_GT_"]);
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
var o38029 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38029["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38030 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38030["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38031 = temp__4655__auto____$2;
return (o38031["_LT_standard_body_GT_"]);
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
var len__29455__auto___38033 = arguments.length;
var i__29456__auto___38034 = (0);
while(true){
if((i__29456__auto___38034 < len__29455__auto___38033)){
args__29462__auto__.push((arguments[i__29456__auto___38034]));

var G__38035 = (i__29456__auto___38034 + (1));
i__29456__auto___38034 = G__38035;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38032){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38032));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38037 = arguments.length;
var i__29456__auto___38038 = (0);
while(true){
if((i__29456__auto___38038 < len__29455__auto___38037)){
args__29462__auto__.push((arguments[i__29456__auto___38038]));

var G__38039 = (i__29456__auto___38038 + (1));
i__29456__auto___38038 = G__38039;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq38036){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38036));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38041 = arguments.length;
var i__29456__auto___38042 = (0);
while(true){
if((i__29456__auto___38042 < len__29455__auto___38041)){
args__29462__auto__.push((arguments[i__29456__auto___38042]));

var G__38043 = (i__29456__auto___38042 + (1));
i__29456__auto___38042 = G__38043;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq38040){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38040));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38045 = arguments.length;
var i__29456__auto___38046 = (0);
while(true){
if((i__29456__auto___38046 < len__29455__auto___38045)){
args__29462__auto__.push((arguments[i__29456__auto___38046]));

var G__38047 = (i__29456__auto___38046 + (1));
i__29456__auto___38046 = G__38047;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38044){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38044));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38049 = arguments.length;
var i__29456__auto___38050 = (0);
while(true){
if((i__29456__auto___38050 < len__29455__auto___38049)){
args__29462__auto__.push((arguments[i__29456__auto___38050]));

var G__38051 = (i__29456__auto___38050 + (1));
i__29456__auto___38050 = G__38051;
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

devtools.format.template.cljs$lang$applyTo = (function (seq38048){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38048));
});

devtools.format.group = (function devtools$format$group(var_args){
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

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38052){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38052));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38057 = arguments.length;
var i__29456__auto___38058 = (0);
while(true){
if((i__29456__auto___38058 < len__29455__auto___38057)){
args__29462__auto__.push((arguments[i__29456__auto___38058]));

var G__38059 = (i__29456__auto___38058 + (1));
i__29456__auto___38058 = G__38059;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38056){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38056));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38067 = arguments.length;
var i__29456__auto___38068 = (0);
while(true){
if((i__29456__auto___38068 < len__29455__auto___38067)){
args__29462__auto__.push((arguments[i__29456__auto___38068]));

var G__38069 = (i__29456__auto___38068 + (1));
i__29456__auto___38068 = G__38069;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38063){
var vec__38064 = p__38063;
var state_override = cljs.core.nth.call(null,vec__38064,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38064,state_override){
return (function (p1__38060_SHARP_){
return cljs.core.merge.call(null,p1__38060_SHARP_,state_override);
});})(vec__38064,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38061){
var G__38062 = cljs.core.first.call(null,seq38061);
var seq38061__$1 = cljs.core.next.call(null,seq38061);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38062,seq38061__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38071 = arguments.length;
var i__29456__auto___38072 = (0);
while(true){
if((i__29456__auto___38072 < len__29455__auto___38071)){
args__29462__auto__.push((arguments[i__29456__auto___38072]));

var G__38073 = (i__29456__auto___38072 + (1));
i__29456__auto___38072 = G__38073;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq38070){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38070));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___38076 = arguments.length;
var i__29456__auto___38077 = (0);
while(true){
if((i__29456__auto___38077 < len__29455__auto___38076)){
args__29462__auto__.push((arguments[i__29456__auto___38077]));

var G__38078 = (i__29456__auto___38077 + (1));
i__29456__auto___38077 = G__38078;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38074){
var G__38075 = cljs.core.first.call(null,seq38074);
var seq38074__$1 = cljs.core.next.call(null,seq38074);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38075,seq38074__$1);
});


//# sourceMappingURL=format.js.map?rel=1509580232318
