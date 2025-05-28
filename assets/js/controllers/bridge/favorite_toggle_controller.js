import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"

	connect() {
		super.connect()

		var episode_url
		if (this.bridgeElement) {
			episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		} else {
			episode_url = "nil for now"
		}
		const episode_duration = this.bridgeElement.bridgeAttribute("episode_duration")
		this.send("connect", {episode_url, episode_duration}, () => {
		})

		setFavorite() //the native-bridge will only respond to events it has already received a message from
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!", this)
		this.send("toggle", {episode_url}, () => {
			this.bridgeElement.click()
		})
	}
	setFavorite() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

			console.log("setFavorite!", this.jsonData)
		// this.send("setFavorite", {episode_url}, () => {
		// })
	}
}