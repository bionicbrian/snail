(ns snail.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :total
 (fn [db]
   (:total db)))

(re-frame/reg-sub
 :items
 (fn [db]
   (:items db)))

(re-frame/reg-sub
 :unravel
 (fn [db]
   (:unraveled db)))
