(ns snail.events
  (:require [re-frame.core :as re-frame]
            [snail.db :as db]
            [cljs.core.async :refer [chan close!]])
  (:require-macros
    [cljs.core.async.macros :as m :refer [go]]))

(def standard-interceptors  [(when ^boolean goog.DEBUG re-frame/debug)])

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :rotate
 standard-interceptors
 (fn  [db _]
   (update db :items db/rotate)))

(re-frame/reg-event-db
 :create-matrix
 standard-interceptors
 (fn [db [_ num]]
   (-> db
       (assoc :unraveled [])
       (assoc :items (db/create-matrix num)))))

(re-frame/reg-event-db
 :unravel-matrix
 standard-interceptors
 (fn [db [_ _]]
   (db/unravel-matrix db)))

(re-frame/reg-event-fx
 :tick-unravel
 standard-interceptors
 (fn [{:keys [db unravel] :as cofx} [_ _]]
   (if ((count (:items db)))
     (assoc-in cofx [:unravel :step] true)
     cofx)))

; (defn timeout [ms]
;   (let [c (chan)]
;     (js/setTimeout (fn [] (close! c)) ms)
;     c))

; (go
;   (<! (timeout 1000))
;   (.log js/console "Hello")
;   (<! (timeout 1000))
;   (.log js/console "async")
;   (<! (timeout 1000))
;   (.log js/console "world!"))
