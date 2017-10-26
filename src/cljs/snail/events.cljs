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
 (fn [cofx _]
   (assoc cofx :unravel-interval [(:items (:db cofx))])))

(re-frame/reg-fx
  :unravel-interval
  (fn [[items]]
    (if (> (count items) 0) ; If we have a row to unravel:
        (do
          (.setTimeout js/window #(re-frame/dispatch [:unravel-matrix]) 500)
          (if (> (count items) 1) ; If there are more rows to unravel:
            (do
              (.setTimeout js/window #(re-frame/dispatch [:rotate]) 1000)
              (.setTimeout js/window #(re-frame/dispatch [:tick-unravel]) 1500)))))))

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
