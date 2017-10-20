// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37691){
var map__37692 = p__37691;
var map__37692__$1 = ((((!((map__37692 == null)))?((((map__37692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);
var m = map__37692__$1;
var n = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37694_37716 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37695_37717 = null;
var count__37696_37718 = (0);
var i__37697_37719 = (0);
while(true){
if((i__37697_37719 < count__37696_37718)){
var f_37720 = cljs.core._nth.call(null,chunk__37695_37717,i__37697_37719);
cljs.core.println.call(null,"  ",f_37720);

var G__37721 = seq__37694_37716;
var G__37722 = chunk__37695_37717;
var G__37723 = count__37696_37718;
var G__37724 = (i__37697_37719 + (1));
seq__37694_37716 = G__37721;
chunk__37695_37717 = G__37722;
count__37696_37718 = G__37723;
i__37697_37719 = G__37724;
continue;
} else {
var temp__4657__auto___37725 = cljs.core.seq.call(null,seq__37694_37716);
if(temp__4657__auto___37725){
var seq__37694_37726__$1 = temp__4657__auto___37725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37694_37726__$1)){
var c__29125__auto___37727 = cljs.core.chunk_first.call(null,seq__37694_37726__$1);
var G__37728 = cljs.core.chunk_rest.call(null,seq__37694_37726__$1);
var G__37729 = c__29125__auto___37727;
var G__37730 = cljs.core.count.call(null,c__29125__auto___37727);
var G__37731 = (0);
seq__37694_37716 = G__37728;
chunk__37695_37717 = G__37729;
count__37696_37718 = G__37730;
i__37697_37719 = G__37731;
continue;
} else {
var f_37732 = cljs.core.first.call(null,seq__37694_37726__$1);
cljs.core.println.call(null,"  ",f_37732);

var G__37733 = cljs.core.next.call(null,seq__37694_37726__$1);
var G__37734 = null;
var G__37735 = (0);
var G__37736 = (0);
seq__37694_37716 = G__37733;
chunk__37695_37717 = G__37734;
count__37696_37718 = G__37735;
i__37697_37719 = G__37736;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37737 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37737);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37737)))?cljs.core.second.call(null,arglists_37737):arglists_37737));
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
var seq__37698_37738 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37699_37739 = null;
var count__37700_37740 = (0);
var i__37701_37741 = (0);
while(true){
if((i__37701_37741 < count__37700_37740)){
var vec__37702_37742 = cljs.core._nth.call(null,chunk__37699_37739,i__37701_37741);
var name_37743 = cljs.core.nth.call(null,vec__37702_37742,(0),null);
var map__37705_37744 = cljs.core.nth.call(null,vec__37702_37742,(1),null);
var map__37705_37745__$1 = ((((!((map__37705_37744 == null)))?((((map__37705_37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37705_37744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37705_37744):map__37705_37744);
var doc_37746 = cljs.core.get.call(null,map__37705_37745__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37747 = cljs.core.get.call(null,map__37705_37745__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37743);

cljs.core.println.call(null," ",arglists_37747);

if(cljs.core.truth_(doc_37746)){
cljs.core.println.call(null," ",doc_37746);
} else {
}

var G__37748 = seq__37698_37738;
var G__37749 = chunk__37699_37739;
var G__37750 = count__37700_37740;
var G__37751 = (i__37701_37741 + (1));
seq__37698_37738 = G__37748;
chunk__37699_37739 = G__37749;
count__37700_37740 = G__37750;
i__37701_37741 = G__37751;
continue;
} else {
var temp__4657__auto___37752 = cljs.core.seq.call(null,seq__37698_37738);
if(temp__4657__auto___37752){
var seq__37698_37753__$1 = temp__4657__auto___37752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37698_37753__$1)){
var c__29125__auto___37754 = cljs.core.chunk_first.call(null,seq__37698_37753__$1);
var G__37755 = cljs.core.chunk_rest.call(null,seq__37698_37753__$1);
var G__37756 = c__29125__auto___37754;
var G__37757 = cljs.core.count.call(null,c__29125__auto___37754);
var G__37758 = (0);
seq__37698_37738 = G__37755;
chunk__37699_37739 = G__37756;
count__37700_37740 = G__37757;
i__37701_37741 = G__37758;
continue;
} else {
var vec__37707_37759 = cljs.core.first.call(null,seq__37698_37753__$1);
var name_37760 = cljs.core.nth.call(null,vec__37707_37759,(0),null);
var map__37710_37761 = cljs.core.nth.call(null,vec__37707_37759,(1),null);
var map__37710_37762__$1 = ((((!((map__37710_37761 == null)))?((((map__37710_37761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37710_37761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37710_37761):map__37710_37761);
var doc_37763 = cljs.core.get.call(null,map__37710_37762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37764 = cljs.core.get.call(null,map__37710_37762__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37760);

cljs.core.println.call(null," ",arglists_37764);

if(cljs.core.truth_(doc_37763)){
cljs.core.println.call(null," ",doc_37763);
} else {
}

var G__37765 = cljs.core.next.call(null,seq__37698_37753__$1);
var G__37766 = null;
var G__37767 = (0);
var G__37768 = (0);
seq__37698_37738 = G__37765;
chunk__37699_37739 = G__37766;
count__37700_37740 = G__37767;
i__37701_37741 = G__37768;
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

var seq__37712 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37713 = null;
var count__37714 = (0);
var i__37715 = (0);
while(true){
if((i__37715 < count__37714)){
var role = cljs.core._nth.call(null,chunk__37713,i__37715);
var temp__4657__auto___37769__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37769__$1)){
var spec_37770 = temp__4657__auto___37769__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37770));
} else {
}

var G__37771 = seq__37712;
var G__37772 = chunk__37713;
var G__37773 = count__37714;
var G__37774 = (i__37715 + (1));
seq__37712 = G__37771;
chunk__37713 = G__37772;
count__37714 = G__37773;
i__37715 = G__37774;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37712);
if(temp__4657__auto____$1){
var seq__37712__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37712__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37712__$1);
var G__37775 = cljs.core.chunk_rest.call(null,seq__37712__$1);
var G__37776 = c__29125__auto__;
var G__37777 = cljs.core.count.call(null,c__29125__auto__);
var G__37778 = (0);
seq__37712 = G__37775;
chunk__37713 = G__37776;
count__37714 = G__37777;
i__37715 = G__37778;
continue;
} else {
var role = cljs.core.first.call(null,seq__37712__$1);
var temp__4657__auto___37779__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37779__$2)){
var spec_37780 = temp__4657__auto___37779__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37780));
} else {
}

var G__37781 = cljs.core.next.call(null,seq__37712__$1);
var G__37782 = null;
var G__37783 = (0);
var G__37784 = (0);
seq__37712 = G__37781;
chunk__37713 = G__37782;
count__37714 = G__37783;
i__37715 = G__37784;
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

//# sourceMappingURL=repl.js.map?rel=1508541448323
