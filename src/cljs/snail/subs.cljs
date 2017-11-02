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
 :unravel-items
 (fn [db]
   (:unraveled db)))

(re-frame/reg-sub
 :rotating
 (fn [db]
   (:rotating db)))


; (reframe/reg-sub-raw
;   :tick-unravel
;   (fn on-tick-unravel [app-db event]
;     (reaction (get-in @app-db [:unravel :step]))))
