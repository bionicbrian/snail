(ns snail.views
  (:require [re-frame.core :as re-frame]
            [cljs.pprint :refer [pprint]]))

(defn number-item [n]
  [:div
    {:style {:display "inline-block" :border "1px solid white" :width "3rem" :background-color "cornflowerblue"}}
    (str " " n)])

(defn main-panel []
  (let [items (re-frame/subscribe [:items])
        unraveled-items (re-frame/subscribe [:unravel])]
    [:div
      ; Show log of the db at the top of the page:
      ; [:pre
      ;   {:style {:background-color "cornsilk" :color "cornflowerblue" :padding "10px"}}
      ;   (with-out-str (pprint @re-frame.db/app-db))]
      [:h2 "Behold! The rotating matrix!"]
      [:input
        {:type "number"
         :default-value 5
         :id "row-count"}]
      [:button
         {:on-click #(re-frame/dispatch
                       [:create-matrix
                        (.parseInt js/window (-> (.querySelector js/document "#row-count") .-value))])} "Create the matrix!"]
      [:button
         {:on-click #(re-frame/dispatch [:rotate])}
         "Rotate the matrix!"]
      [:button
         {:on-click #(re-frame/dispatch [:unravel-matrix])} "Unravel the matrix!"]
      [:button
         {:on-click #(re-frame/dispatch [:tick-unravel])} "Start the unraveling!"]
      [:div
        [:h2 (str "The unraveled items " @unraveled-items)]]
      (for [row @items]
        [:div {:style {:font-family "Courier"}}
          [:h2
            (map number-item row)]])]))
