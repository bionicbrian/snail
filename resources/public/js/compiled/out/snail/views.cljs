(ns snail.views
  (:require [re-frame.core :as re-frame]))

(defn main-panel []
  (let [items (re-frame/subscribe [:items])]
    [:div
      [:h2 "These are the items"]
      [:button
         {:on-click #(re-frame/dispatch [:rotate])}
         "Rotate the matrix!"]
      (for [row @items]
        [:div {:style {:font-family "Courier"}}
          [:h2 (str row)]])]))
