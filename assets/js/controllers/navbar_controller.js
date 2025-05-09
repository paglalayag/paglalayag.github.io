import { Controller } from "@hotwired/stimulus";
export default class NavbarController extends Controller {
	connect() {
		let agentIsNative = document.getElementById('UserAgent').value = navigator.userAgent.match(/(Turbo|Hotwire) Native/)

	}
}