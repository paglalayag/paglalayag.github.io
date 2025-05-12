import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"

	connect() {
		super.connect()

		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		this.send("connect", {episode_url}, () => {    
			console.log("connected!")
		    this.bridgeElement.click()
		})
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		this.send("connect", {episode_url}, () => {    
	}
}