import { Controller } from "@hotwired/stimulus";
export default class NativeCssController extends Controller {
	connect() {
		let agentIsNative = navigator.userAgent.match(/(Turbo|Hotwire) Native/)
    if(agentIsNative) {
  		document.getElementById('native-sheet').innerHTML =
      `<link rel="stylesheet" href="assets/css/native.css">`;
    }
	}
}