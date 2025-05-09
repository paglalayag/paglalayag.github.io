import { application } from "./application.js";

import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

import Bridge__FavoriteToggleController from "./bridge/favorite_toggle_controller.js"
application.register("bridge--favorite-toggle", Bridge__FavoriteToggleController)

import NativeCssController from "./native_css_controller.js"
application.register("native-css-controller", NativeCssController)
