// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37175){
var map__37176 = p__37175;
var map__37176__$1 = ((((!((map__37176 == null)))?((((map__37176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37176):map__37176);
var m = map__37176__$1;
var n = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37178_37200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37179_37201 = null;
var count__37180_37202 = (0);
var i__37181_37203 = (0);
while(true){
if((i__37181_37203 < count__37180_37202)){
var f_37204 = cljs.core._nth.call(null,chunk__37179_37201,i__37181_37203);
cljs.core.println.call(null,"  ",f_37204);

var G__37205 = seq__37178_37200;
var G__37206 = chunk__37179_37201;
var G__37207 = count__37180_37202;
var G__37208 = (i__37181_37203 + (1));
seq__37178_37200 = G__37205;
chunk__37179_37201 = G__37206;
count__37180_37202 = G__37207;
i__37181_37203 = G__37208;
continue;
} else {
var temp__4657__auto___37209 = cljs.core.seq.call(null,seq__37178_37200);
if(temp__4657__auto___37209){
var seq__37178_37210__$1 = temp__4657__auto___37209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37178_37210__$1)){
var c__29125__auto___37211 = cljs.core.chunk_first.call(null,seq__37178_37210__$1);
var G__37212 = cljs.core.chunk_rest.call(null,seq__37178_37210__$1);
var G__37213 = c__29125__auto___37211;
var G__37214 = cljs.core.count.call(null,c__29125__auto___37211);
var G__37215 = (0);
seq__37178_37200 = G__37212;
chunk__37179_37201 = G__37213;
count__37180_37202 = G__37214;
i__37181_37203 = G__37215;
continue;
} else {
var f_37216 = cljs.core.first.call(null,seq__37178_37210__$1);
cljs.core.println.call(null,"  ",f_37216);

var G__37217 = cljs.core.next.call(null,seq__37178_37210__$1);
var G__37218 = null;
var G__37219 = (0);
var G__37220 = (0);
seq__37178_37200 = G__37217;
chunk__37179_37201 = G__37218;
count__37180_37202 = G__37219;
i__37181_37203 = G__37220;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37221 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37221);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37221)))?cljs.core.second.call(null,arglists_37221):arglists_37221));
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
var seq__37182_37222 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37183_37223 = null;
var count__37184_37224 = (0);
var i__37185_37225 = (0);
while(true){
if((i__37185_37225 < count__37184_37224)){
var vec__37186_37226 = cljs.core._nth.call(null,chunk__37183_37223,i__37185_37225);
var name_37227 = cljs.core.nth.call(null,vec__37186_37226,(0),null);
var map__37189_37228 = cljs.core.nth.call(null,vec__37186_37226,(1),null);
var map__37189_37229__$1 = ((((!((map__37189_37228 == null)))?((((map__37189_37228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37189_37228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189_37228):map__37189_37228);
var doc_37230 = cljs.core.get.call(null,map__37189_37229__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37231 = cljs.core.get.call(null,map__37189_37229__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37227);

cljs.core.println.call(null," ",arglists_37231);

if(cljs.core.truth_(doc_37230)){
cljs.core.println.call(null," ",doc_37230);
} else {
}

var G__37232 = seq__37182_37222;
var G__37233 = chunk__37183_37223;
var G__37234 = count__37184_37224;
var G__37235 = (i__37185_37225 + (1));
seq__37182_37222 = G__37232;
chunk__37183_37223 = G__37233;
count__37184_37224 = G__37234;
i__37185_37225 = G__37235;
continue;
} else {
var temp__4657__auto___37236 = cljs.core.seq.call(null,seq__37182_37222);
if(temp__4657__auto___37236){
var seq__37182_37237__$1 = temp__4657__auto___37236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37182_37237__$1)){
var c__29125__auto___37238 = cljs.core.chunk_first.call(null,seq__37182_37237__$1);
var G__37239 = cljs.core.chunk_rest.call(null,seq__37182_37237__$1);
var G__37240 = c__29125__auto___37238;
var G__37241 = cljs.core.count.call(null,c__29125__auto___37238);
var G__37242 = (0);
seq__37182_37222 = G__37239;
chunk__37183_37223 = G__37240;
count__37184_37224 = G__37241;
i__37185_37225 = G__37242;
continue;
} else {
var vec__37191_37243 = cljs.core.first.call(null,seq__37182_37237__$1);
var name_37244 = cljs.core.nth.call(null,vec__37191_37243,(0),null);
var map__37194_37245 = cljs.core.nth.call(null,vec__37191_37243,(1),null);
var map__37194_37246__$1 = ((((!((map__37194_37245 == null)))?((((map__37194_37245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37194_37245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37194_37245):map__37194_37245);
var doc_37247 = cljs.core.get.call(null,map__37194_37246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37248 = cljs.core.get.call(null,map__37194_37246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37244);

cljs.core.println.call(null," ",arglists_37248);

if(cljs.core.truth_(doc_37247)){
cljs.core.println.call(null," ",doc_37247);
} else {
}

var G__37249 = cljs.core.next.call(null,seq__37182_37237__$1);
var G__37250 = null;
var G__37251 = (0);
var G__37252 = (0);
seq__37182_37222 = G__37249;
chunk__37183_37223 = G__37250;
count__37184_37224 = G__37251;
i__37185_37225 = G__37252;
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

var seq__37196 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37197 = null;
var count__37198 = (0);
var i__37199 = (0);
while(true){
if((i__37199 < count__37198)){
var role = cljs.core._nth.call(null,chunk__37197,i__37199);
var temp__4657__auto___37253__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37253__$1)){
var spec_37254 = temp__4657__auto___37253__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37254));
} else {
}

var G__37255 = seq__37196;
var G__37256 = chunk__37197;
var G__37257 = count__37198;
var G__37258 = (i__37199 + (1));
seq__37196 = G__37255;
chunk__37197 = G__37256;
count__37198 = G__37257;
i__37199 = G__37258;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37196);
if(temp__4657__auto____$1){
var seq__37196__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37196__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37196__$1);
var G__37259 = cljs.core.chunk_rest.call(null,seq__37196__$1);
var G__37260 = c__29125__auto__;
var G__37261 = cljs.core.count.call(null,c__29125__auto__);
var G__37262 = (0);
seq__37196 = G__37259;
chunk__37197 = G__37260;
count__37198 = G__37261;
i__37199 = G__37262;
continue;
} else {
var role = cljs.core.first.call(null,seq__37196__$1);
var temp__4657__auto___37263__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37263__$2)){
var spec_37264 = temp__4657__auto___37263__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37264));
} else {
}

var G__37265 = cljs.core.next.call(null,seq__37196__$1);
var G__37266 = null;
var G__37267 = (0);
var G__37268 = (0);
seq__37196 = G__37265;
chunk__37197 = G__37266;
count__37198 = G__37267;
i__37199 = G__37268;
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

//# sourceMappingURL=repl.js.map?rel=1509580231308
