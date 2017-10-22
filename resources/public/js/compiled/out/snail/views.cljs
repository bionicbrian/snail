(ns snail.views
  (:require [re-frame.core :as re-frame]
            [cljs.pprint :refer [pprint]]))

(def number-steez
    {:display "inline-block" :text-align "center" :line-height 1.5 :font-family "Courier New" :border "1px solid white" :width "3rem"})

(defn number-item [color n]
  [:span
    {:style (assoc number-steez :background-color color)}
    (str " " n)])

(defn main-panel []
  (let [items (re-frame/subscribe [:items])
        unraveled-items (re-frame/subscribe [:unravel-items])]
    [:div
      {:style {:padding "20px" :border-top "2px solid salmon"}}
      ; Show log of the db at the top of the page:
      ; [:pre
      ;   {:style {:background-color "cornsilk" :color "cornflowerblue" :padding "10px"}}
      ;   (with-out-str (pprint @re-frame.db/app-db))]
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
         {:on-click #(re-frame/dispatch [:tick-unravel])} "Unravel the snail!"]
      [:div
        [:p (map (partial number-item "cornsilk") @unraveled-items)]]
      (for [row @items]
        [:div {:style {:font-family "Courier"}}
          [:div {:style {:font-size "24px" :font-weight "bold"}}
            (map (partial number-item "cornflowerblue") row)]])]))
