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
			this.setFavoriteIcon()
		})
	}

	setFavoriteIcon() {
		console.log("inside setFavoriteIcon: ", this.isFavoriteValue)
		this.iconIsLoadingTarget.classList.toggle("hidden")
		if (this.isFavoriteValue) {
			console.log("NotFavorite! classList beforeToggle", this.iconNotFavoriteTarget.classList.toString())
			this.iconNotFavoriteTarget.classList.toggle("hidden")
			console.log("NotFavorite! classList afterToggle", this.iconNotFavoriteTarget.classList.toString())
		} else {
			console.log("IsFavorite! classList beforeToggle", this.iconIsFavoriteTarget.classList.toString())
			this.iconIsFavoriteTarget.classList.toggle("hidden")
			console.log("IsFavorite! classList afterToggle", this.iconIsFavoriteTarget.classList.toString())
		}
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!", this)
		this.send("toggle", {episode_url}, () => {
			this.bridgeElement.click()
		})
	}
}