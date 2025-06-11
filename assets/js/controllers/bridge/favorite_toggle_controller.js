import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"
	static targets = ["iconIsFavorite","iconIsLoading", "iconNotFavorite"]
	static values = { isFavorite: Boolean }

	connect() {
		super.connect()
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		const episode_duration = this.bridgeElement.bridgeAttribute("episode_duration")
		this.send("connect", {episode_url, episode_duration}, message => {
			console.log("setFavorite received! ", message.data.is_favorite)
			console.log("before setFavoriteIcon: ", this.isFavoriteValue)
			this.isFavoriteValue = message.data.is_favorite
			this.toggleFavoriteIcon()
		})
	}

	hideLoadingIcon() {
		this.iconIsLoadingTarget.classList.toggle("hidden")
	}
	toggleFavoriteIcon() {
		if (this.isFavoriteValue) {
			this.iconIsFavoriteTarget.classList.toggle("hidden")
		} else {
			this.iconNotFavoriteTarget.classList.toggle("hidden")
		}
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!", this)
		this.send("toggle", {episode_url}, () => {
			toggleFavoriteIcon()
			this.bridgeElement.click()
		})
	}
}