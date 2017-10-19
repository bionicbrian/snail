(ns snail.db)

(def with-prop (comp (map #(hash-map :num % :visited true))))

(defn with-visited [xs]
  (into [] with-prop xs))

(defn create-matrix [n] (partition n (->> (range 1 (+ 1 (* n n))) with-visited)))

(def default-db
  {:items (create-matrix 0)})
