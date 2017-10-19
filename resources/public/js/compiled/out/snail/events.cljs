(ns snail.events
  (:require [re-frame.core :as re-frame]
            [snail.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(defn rotate [matrix]
  (reverse (apply map list matrix)))

(re-frame/reg-event-db
 :rotate
 (fn  [db _]
   (update db :items rotate)))

(re-frame/reg-event-db
 :create-matrix
 (fn [db [_ num]]
   (assoc db :items (db/create-matrix num))))


; (re-frame/reg-event-db
;  :traverse
;  (fn  [db _]
;    (update db :items traversed)))
