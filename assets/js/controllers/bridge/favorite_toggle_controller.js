import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"

	connect() {
		super.connect()

		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		const episode_duration = this.bridgeElement.bridgeAttribute("episode_duration")
		this.send("connect", {episode_url, episode_duration}, () => {
		})
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!")
		this.send("toggle", {episode_url}, () => {
			console.log("toggle response!", this)
			this.bridgeElement.click()
		})
	}

	setFavorite() {
		console.log("setFavorite!!", this)
	}
}