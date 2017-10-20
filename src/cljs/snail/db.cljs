(ns snail.db)

(defn rotate [matrix]
  (reverse (apply map list matrix)))

(def unravel-matrix
   (comp
     #(assoc % :items (rest (:items %)))
     (fn [db] (update db :unraveled #(apply (partial conj %) (first (:items db)))))))

(defn create-matrix [n] (partition n (range 1 (+ 1 (* n n)))))

(def default-db
  {:items (create-matrix 0)
   :unraveled []})
