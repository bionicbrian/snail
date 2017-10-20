(ns snail.events
  (:require [re-frame.core :as re-frame]
            [snail.db :as db]))

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
   (assoc db :items (db/create-matrix num))))

(re-frame/reg-event-db
 :unravel-matrix
 standard-interceptors
 (fn [db [_ _]]
   (db/unravel-matrix db)))

(re-frame/reg-event-fx
 :tick-unravel
 (fn [{:keys [db unravel] :as cofx} [_ _]]
   (if ((count (:items db)))
       (assoc-in cofx [:unravel :step] true)
       cofx)))

