import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"

	connect() {
		super.connect()

		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		this.send("connect", {episode_url}, () => {    
		})
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		this.send("toggle", {episode_url}, () => {
			console.log("toggle!")
			this.bridgeElement.click()
		})
	}
}