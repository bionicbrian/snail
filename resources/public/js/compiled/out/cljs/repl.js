// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37173){
var map__37174 = p__37173;
var map__37174__$1 = ((((!((map__37174 == null)))?((((map__37174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37174):map__37174);
var m = map__37174__$1;
var n = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37176_37198 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37177_37199 = null;
var count__37178_37200 = (0);
var i__37179_37201 = (0);
while(true){
if((i__37179_37201 < count__37178_37200)){
var f_37202 = cljs.core._nth.call(null,chunk__37177_37199,i__37179_37201);
cljs.core.println.call(null,"  ",f_37202);

var G__37203 = seq__37176_37198;
var G__37204 = chunk__37177_37199;
var G__37205 = count__37178_37200;
var G__37206 = (i__37179_37201 + (1));
seq__37176_37198 = G__37203;
chunk__37177_37199 = G__37204;
count__37178_37200 = G__37205;
i__37179_37201 = G__37206;
continue;
} else {
var temp__4657__auto___37207 = cljs.core.seq.call(null,seq__37176_37198);
if(temp__4657__auto___37207){
var seq__37176_37208__$1 = temp__4657__auto___37207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37176_37208__$1)){
var c__29125__auto___37209 = cljs.core.chunk_first.call(null,seq__37176_37208__$1);
var G__37210 = cljs.core.chunk_rest.call(null,seq__37176_37208__$1);
var G__37211 = c__29125__auto___37209;
var G__37212 = cljs.core.count.call(null,c__29125__auto___37209);
var G__37213 = (0);
seq__37176_37198 = G__37210;
chunk__37177_37199 = G__37211;
count__37178_37200 = G__37212;
i__37179_37201 = G__37213;
continue;
} else {
var f_37214 = cljs.core.first.call(null,seq__37176_37208__$1);
cljs.core.println.call(null,"  ",f_37214);

var G__37215 = cljs.core.next.call(null,seq__37176_37208__$1);
var G__37216 = null;
var G__37217 = (0);
var G__37218 = (0);
seq__37176_37198 = G__37215;
chunk__37177_37199 = G__37216;
count__37178_37200 = G__37217;
i__37179_37201 = G__37218;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37219 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37219);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37219)))?cljs.core.second.call(null,arglists_37219):arglists_37219));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37180_37220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37181_37221 = null;
var count__37182_37222 = (0);
var i__37183_37223 = (0);
while(true){
if((i__37183_37223 < count__37182_37222)){
var vec__37184_37224 = cljs.core._nth.call(null,chunk__37181_37221,i__37183_37223);
var name_37225 = cljs.core.nth.call(null,vec__37184_37224,(0),null);
var map__37187_37226 = cljs.core.nth.call(null,vec__37184_37224,(1),null);
var map__37187_37227__$1 = ((((!((map__37187_37226 == null)))?((((map__37187_37226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37187_37226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37187_37226):map__37187_37226);
var doc_37228 = cljs.core.get.call(null,map__37187_37227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37229 = cljs.core.get.call(null,map__37187_37227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37225);

cljs.core.println.call(null," ",arglists_37229);

if(cljs.core.truth_(doc_37228)){
cljs.core.println.call(null," ",doc_37228);
} else {
}

var G__37230 = seq__37180_37220;
var G__37231 = chunk__37181_37221;
var G__37232 = count__37182_37222;
var G__37233 = (i__37183_37223 + (1));
seq__37180_37220 = G__37230;
chunk__37181_37221 = G__37231;
count__37182_37222 = G__37232;
i__37183_37223 = G__37233;
continue;
} else {
var temp__4657__auto___37234 = cljs.core.seq.call(null,seq__37180_37220);
if(temp__4657__auto___37234){
var seq__37180_37235__$1 = temp__4657__auto___37234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37180_37235__$1)){
var c__29125__auto___37236 = cljs.core.chunk_first.call(null,seq__37180_37235__$1);
var G__37237 = cljs.core.chunk_rest.call(null,seq__37180_37235__$1);
var G__37238 = c__29125__auto___37236;
var G__37239 = cljs.core.count.call(null,c__29125__auto___37236);
var G__37240 = (0);
seq__37180_37220 = G__37237;
chunk__37181_37221 = G__37238;
count__37182_37222 = G__37239;
i__37183_37223 = G__37240;
continue;
} else {
var vec__37189_37241 = cljs.core.first.call(null,seq__37180_37235__$1);
var name_37242 = cljs.core.nth.call(null,vec__37189_37241,(0),null);
var map__37192_37243 = cljs.core.nth.call(null,vec__37189_37241,(1),null);
var map__37192_37244__$1 = ((((!((map__37192_37243 == null)))?((((map__37192_37243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37192_37243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37192_37243):map__37192_37243);
var doc_37245 = cljs.core.get.call(null,map__37192_37244__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37246 = cljs.core.get.call(null,map__37192_37244__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37242);

cljs.core.println.call(null," ",arglists_37246);

if(cljs.core.truth_(doc_37245)){
cljs.core.println.call(null," ",doc_37245);
} else {
}

var G__37247 = cljs.core.next.call(null,seq__37180_37235__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37180_37220 = G__37247;
chunk__37181_37221 = G__37248;
count__37182_37222 = G__37249;
i__37183_37223 = G__37250;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37194 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37195 = null;
var count__37196 = (0);
var i__37197 = (0);
while(true){
if((i__37197 < count__37196)){
var role = cljs.core._nth.call(null,chunk__37195,i__37197);
var temp__4657__auto___37251__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37251__$1)){
var spec_37252 = temp__4657__auto___37251__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37252));
} else {
}

var G__37253 = seq__37194;
var G__37254 = chunk__37195;
var G__37255 = count__37196;
var G__37256 = (i__37197 + (1));
seq__37194 = G__37253;
chunk__37195 = G__37254;
count__37196 = G__37255;
i__37197 = G__37256;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37194);
if(temp__4657__auto____$1){
var seq__37194__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37194__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37194__$1);
var G__37257 = cljs.core.chunk_rest.call(null,seq__37194__$1);
var G__37258 = c__29125__auto__;
var G__37259 = cljs.core.count.call(null,c__29125__auto__);
var G__37260 = (0);
seq__37194 = G__37257;
chunk__37195 = G__37258;
count__37196 = G__37259;
i__37197 = G__37260;
continue;
} else {
var role = cljs.core.first.call(null,seq__37194__$1);
var temp__4657__auto___37261__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37261__$2)){
var spec_37262 = temp__4657__auto___37261__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37262));
} else {
}

var G__37263 = cljs.core.next.call(null,seq__37194__$1);
var G__37264 = null;
var G__37265 = (0);
var G__37266 = (0);
seq__37194 = G__37263;
chunk__37195 = G__37264;
count__37196 = G__37265;
i__37197 = G__37266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1508696625229
