(ns snail.db)

(defn rotate [matrix]
  (reverse (apply map list matrix)))

(defn unravel-matrix [db]
  (-> db
      (update :unraveled #(apply (partial conj %) (first (:items db))))
      (assoc :items (rest (:items db)))))

(defn create-matrix [n] (partition n (range 1 (+ 1 (* n n)))))

(def default-db
  {:items (create-matrix 0)
   :unraveled []
   :rotating false})
