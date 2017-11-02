(ns snail.views
  (:require [re-frame.core :as re-frame]
            [cljs.pprint :refer [pprint]]))

(defn number-item [color n]
  [:span (str " " n)])

(defn main-panel []
  (let [items (re-frame/subscribe [:items])
        unraveled-items (re-frame/subscribe [:unravel-items])
        rotating (re-frame/subscribe [:rotating])]
    [:div
      {:class-name "main"}
      ; Show log of the db at the top of the page:
      ; [:pre
      ;   {:style {:background-color "cornsilk" :color "cornflowerblue" :padding "10px"}}
      ;   (with-out-str (pprint @re-frame.db/app-db))]
      [:div {:class-name "controls"}
        [:h2 "Behold! The unraveling snail!"]
        [:input
          {:type "number"
           :default-value 5
           :id "row-count"}]
        [:button
           {:on-click #(re-frame/dispatch
                         [:create-matrix
                          (.parseInt js/window (-> (.querySelector js/document "#row-count") .-value))])} "Create the snail!"]
      ; [:button
      ;    {:on-click #(re-frame/dispatch [:rotate])}
      ;    "Rotate the matrix!"]
      ; [:button
      ;    {:on-click #(re-frame/dispatch [:unravel-matrix])} "Unravel the matrix!"]
        [:button
           {:on-click #(re-frame/dispatch [:tick-unravel])} "Unravel the snail!"]]
      [:div {:class-name "unraveled-stage"}
        [:div {:class-name "unraveled-items"} (map (partial number-item "cornsilk") @unraveled-items)]]
      [:div {:class-name "matrix-stage"}
        [:div
          {:class-name (str "matrix" (if (= @rotating true) " rotating"))}
          (for [row @items]
            [:div {:class-name "row"}
                (map (partial number-item "cornflowerblue") row)])]]]))
