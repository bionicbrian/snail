// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37157){
var map__37158 = p__37157;
var map__37158__$1 = ((((!((map__37158 == null)))?((((map__37158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37158):map__37158);
var m = map__37158__$1;
var n = cljs.core.get.call(null,map__37158__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37160_37182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37161_37183 = null;
var count__37162_37184 = (0);
var i__37163_37185 = (0);
while(true){
if((i__37163_37185 < count__37162_37184)){
var f_37186 = cljs.core._nth.call(null,chunk__37161_37183,i__37163_37185);
cljs.core.println.call(null,"  ",f_37186);

var G__37187 = seq__37160_37182;
var G__37188 = chunk__37161_37183;
var G__37189 = count__37162_37184;
var G__37190 = (i__37163_37185 + (1));
seq__37160_37182 = G__37187;
chunk__37161_37183 = G__37188;
count__37162_37184 = G__37189;
i__37163_37185 = G__37190;
continue;
} else {
var temp__4657__auto___37191 = cljs.core.seq.call(null,seq__37160_37182);
if(temp__4657__auto___37191){
var seq__37160_37192__$1 = temp__4657__auto___37191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37160_37192__$1)){
var c__29125__auto___37193 = cljs.core.chunk_first.call(null,seq__37160_37192__$1);
var G__37194 = cljs.core.chunk_rest.call(null,seq__37160_37192__$1);
var G__37195 = c__29125__auto___37193;
var G__37196 = cljs.core.count.call(null,c__29125__auto___37193);
var G__37197 = (0);
seq__37160_37182 = G__37194;
chunk__37161_37183 = G__37195;
count__37162_37184 = G__37196;
i__37163_37185 = G__37197;
continue;
} else {
var f_37198 = cljs.core.first.call(null,seq__37160_37192__$1);
cljs.core.println.call(null,"  ",f_37198);

var G__37199 = cljs.core.next.call(null,seq__37160_37192__$1);
var G__37200 = null;
var G__37201 = (0);
var G__37202 = (0);
seq__37160_37182 = G__37199;
chunk__37161_37183 = G__37200;
count__37162_37184 = G__37201;
i__37163_37185 = G__37202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37203 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37203);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37203)))?cljs.core.second.call(null,arglists_37203):arglists_37203));
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
var seq__37164_37204 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37165_37205 = null;
var count__37166_37206 = (0);
var i__37167_37207 = (0);
while(true){
if((i__37167_37207 < count__37166_37206)){
var vec__37168_37208 = cljs.core._nth.call(null,chunk__37165_37205,i__37167_37207);
var name_37209 = cljs.core.nth.call(null,vec__37168_37208,(0),null);
var map__37171_37210 = cljs.core.nth.call(null,vec__37168_37208,(1),null);
var map__37171_37211__$1 = ((((!((map__37171_37210 == null)))?((((map__37171_37210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37171_37210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37171_37210):map__37171_37210);
var doc_37212 = cljs.core.get.call(null,map__37171_37211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37213 = cljs.core.get.call(null,map__37171_37211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37209);

cljs.core.println.call(null," ",arglists_37213);

if(cljs.core.truth_(doc_37212)){
cljs.core.println.call(null," ",doc_37212);
} else {
}

var G__37214 = seq__37164_37204;
var G__37215 = chunk__37165_37205;
var G__37216 = count__37166_37206;
var G__37217 = (i__37167_37207 + (1));
seq__37164_37204 = G__37214;
chunk__37165_37205 = G__37215;
count__37166_37206 = G__37216;
i__37167_37207 = G__37217;
continue;
} else {
var temp__4657__auto___37218 = cljs.core.seq.call(null,seq__37164_37204);
if(temp__4657__auto___37218){
var seq__37164_37219__$1 = temp__4657__auto___37218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37164_37219__$1)){
var c__29125__auto___37220 = cljs.core.chunk_first.call(null,seq__37164_37219__$1);
var G__37221 = cljs.core.chunk_rest.call(null,seq__37164_37219__$1);
var G__37222 = c__29125__auto___37220;
var G__37223 = cljs.core.count.call(null,c__29125__auto___37220);
var G__37224 = (0);
seq__37164_37204 = G__37221;
chunk__37165_37205 = G__37222;
count__37166_37206 = G__37223;
i__37167_37207 = G__37224;
continue;
} else {
var vec__37173_37225 = cljs.core.first.call(null,seq__37164_37219__$1);
var name_37226 = cljs.core.nth.call(null,vec__37173_37225,(0),null);
var map__37176_37227 = cljs.core.nth.call(null,vec__37173_37225,(1),null);
var map__37176_37228__$1 = ((((!((map__37176_37227 == null)))?((((map__37176_37227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37176_37227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37176_37227):map__37176_37227);
var doc_37229 = cljs.core.get.call(null,map__37176_37228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37230 = cljs.core.get.call(null,map__37176_37228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37226);

cljs.core.println.call(null," ",arglists_37230);

if(cljs.core.truth_(doc_37229)){
cljs.core.println.call(null," ",doc_37229);
} else {
}

var G__37231 = cljs.core.next.call(null,seq__37164_37219__$1);
var G__37232 = null;
var G__37233 = (0);
var G__37234 = (0);
seq__37164_37204 = G__37231;
chunk__37165_37205 = G__37232;
count__37166_37206 = G__37233;
i__37167_37207 = G__37234;
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

var seq__37178 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37179 = null;
var count__37180 = (0);
var i__37181 = (0);
while(true){
if((i__37181 < count__37180)){
var role = cljs.core._nth.call(null,chunk__37179,i__37181);
var temp__4657__auto___37235__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37235__$1)){
var spec_37236 = temp__4657__auto___37235__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37236));
} else {
}

var G__37237 = seq__37178;
var G__37238 = chunk__37179;
var G__37239 = count__37180;
var G__37240 = (i__37181 + (1));
seq__37178 = G__37237;
chunk__37179 = G__37238;
count__37180 = G__37239;
i__37181 = G__37240;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37178);
if(temp__4657__auto____$1){
var seq__37178__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37178__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37178__$1);
var G__37241 = cljs.core.chunk_rest.call(null,seq__37178__$1);
var G__37242 = c__29125__auto__;
var G__37243 = cljs.core.count.call(null,c__29125__auto__);
var G__37244 = (0);
seq__37178 = G__37241;
chunk__37179 = G__37242;
count__37180 = G__37243;
i__37181 = G__37244;
continue;
} else {
var role = cljs.core.first.call(null,seq__37178__$1);
var temp__4657__auto___37245__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37245__$2)){
var spec_37246 = temp__4657__auto___37245__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37246));
} else {
}

var G__37247 = cljs.core.next.call(null,seq__37178__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37178 = G__37247;
chunk__37179 = G__37248;
count__37180 = G__37249;
i__37181 = G__37250;
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

//# sourceMappingURL=repl.js.map?rel=1508424083633
