(ns snail.views
  (:require [re-frame.core :as re-frame]))

(defn number-item [n]
  [:div
    {:style {:display "inline-block" :border "1px solid white" :width "3rem" :background-color (if (:visited n) "cornflowerblue" "white")}}
    (str " " (:num n))])

(defn main-panel []
  (let [items (re-frame/subscribe [:items])]
    [:div
      [:h2 "Behold! The rotating matrix!"]
      [:button
         {:on-click #(re-frame/dispatch [:rotate])}
         "Rotate the matrix!"]
        [:input
          {:type "number"
           :default-value 5
           :id "row-count"}]
        [:button
           {:on-click #(re-frame/dispatch
                         [:create-matrix
                          (.parseInt js/window (-> (.querySelector js/document "#row-count") .-value))])} "Create the matrix!"]
      (for [row @items]
        [:div {:style {:font-family "Courier"}}
          [:h2
            (map number-item row)]])]))
