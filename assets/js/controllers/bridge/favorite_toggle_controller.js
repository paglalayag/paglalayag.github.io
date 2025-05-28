import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"

	setFavorite(episode_url_from_connect) {
		var episode_url

		if (this.bridgeElement.bridgeAttribute("episode_url")) {
			episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		} else {
			episode_url = episode_url_from_connect
		}
			console.log("setFavorite!", this.jsonData)
		// this.send("setFavorite", {episode_url}, () => {
		// })
	}
	
	connect() {
		super.connect()

		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		const episode_duration = this.bridgeElement.bridgeAttribute("episode_duration")
		this.send("connect", {episode_url, episode_duration}, () => {
		})

		setFavorite(episode_url) //the native-bridge will only respond to events it has already received a message from
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!", this)
		this.send("toggle", {episode_url}, () => {
			this.bridgeElement.click()
		})
	}
}