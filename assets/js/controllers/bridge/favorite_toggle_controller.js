import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class FavoriteToggleController extends BridgeComponent {
	static component = "favoriteToggle"
	static targets = ["favoriteIcon"]
	static values = { isFavorite: Boolean }

	connect() {
		super.connect()
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")
		const episode_duration = this.bridgeElement.bridgeAttribute("episode_duration")
		this.send("connect", {episode_url, episode_duration}, message => {
			console.log("setFavorite received! ", message.data.is_favorite)
			this.isFavoriteValue = message.data.is_favorite

			this.hideIcon("fa-spinner")
			this.setFavoriteIcon()
		})
	}

	toggle() {
		const episode_url = this.bridgeElement.bridgeAttribute("episode_url")

		console.log("toggle!", this)
		this.send("toggle", {episode_url}, () => {
			this.toggleFavoriteIcon()
			this.bridgeElement.click()
		})
	}

	hideIcon(iconClass) {
		if(this.favoriteIconTarget.classList.contains("fa-spinner")) {
			this.favoriteIconTarget.classList.remove("fa-spinner")
		}
	}

	showIcon(iconClass) {
		if(!this.favoriteIconTarget.classList.contains(iconClass)) {
			this.favoriteIconTarget.classList.add(iconClass)
		}
	}

	setFavoriteIcon() {
		if (this.isFavoriteValue) {
			this.hideIcon("fa-cloud-download-alt")
			this.showIcon("fa-trash-alt")
		} else {
			this.hideIcon("fa-trash-alt")
			this.showIcon("fa-cloud-download-alt")
		}
	}

	toggleFavoriteIcon() {
		console.log("inside toggleFavoriteIcon with", this.isFavoriteValue, !this.isFavoriteValue)
		this.isFavoriteValue = !this.isFavoriteValue
		this.setFavoriteIcon()
	}
}