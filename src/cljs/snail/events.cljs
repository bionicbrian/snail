(ns snail.events
  (:require [re-frame.core :as re-frame]
            [snail.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :rotate
 (fn  [db _]
   (update db :items db/rotate)))

(re-frame/reg-event-db
 :create-matrix
 (fn [db [_ num]]
   (-> db
       (assoc :unraveled [])
       (assoc :items (db/create-matrix num)))))

(re-frame/reg-event-db
 :unravel-matrix
 (fn [db [_ _]]
   (db/unravel-matrix db)))

(re-frame/reg-event-db
 :rotating
 (fn [db [_ is-rotating]]
   (assoc db :rotating is-rotating)))

(re-frame/reg-event-fx
 :tick-unravel
 (fn [cofx _]
   (assoc cofx :unravel-interval [(:items (:db cofx))])))

(def unravel-wait 500)
(def rotate-wait 1000)
(def tick-wait 1500)

;; This is probably not the right way to do this.
;; Read the docs again
(re-frame/reg-fx
  :unravel-interval
  (fn [[items]]
    (if (> (count items) 0) ; If we have a row to unravel:
        (do
          (re-frame/dispatch [:rotating true])
          (.setTimeout js/window #(re-frame/dispatch [:unravel-matrix]) unravel-wait)
          (if (> (count items) 1) ; If there are more rows to unravel:
            (do
              (.setTimeout js/window #(re-frame/dispatch [:rotate]) rotate-wait)
              (.setTimeout js/window #(re-frame/dispatch [:tick-unravel]) tick-wait)))))))
