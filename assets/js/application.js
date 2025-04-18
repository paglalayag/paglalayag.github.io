import "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import "@hotwired/hotwire-native-bridge"
import "./controllers/index.js"

// Start Stimulus
window.Stimulus = Application.start()
