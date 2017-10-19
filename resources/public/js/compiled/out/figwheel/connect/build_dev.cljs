(ns figwheel.connect.build-dev (:require [figwheel.client] [snail.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/snail.core.mount-root (apply js/snail.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'snail.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

