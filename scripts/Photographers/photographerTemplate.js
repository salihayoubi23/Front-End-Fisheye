export default class PhotographerTemplate {
	constructor(data) {
		this.photographer = data
	}

	createPhotographerCard() {
		const templateCard = document.getElementById('photographer-card')
		const card = document.importNode(templateCard.content, true)

		const link = card.querySelector('a')
		const img = card.querySelector('img')

		link.setAttribute('href', `photographer.html?id=${this.photographer.id}`)
		link.setAttribute('aria-label', `Voir le profil de ${this.photographer.name}`)
		img.setAttribute('src', this.photographer.portrait)
		img.setAttribute('alt', `Photo de profil de ${this.photographer.name}`)

		card.querySelector('.photographer-card__name').textContent = this.photographer.name
		card.querySelector(
			'.photographer-card__location',
		).textContent = `${this.photographer.city}, ${this.photographer.country}`
		card.querySelector('.photographer-card__tagline').textContent = this.photographer.tagline
		card.querySelector('.photographer-card__price').textContent = `${this.photographer.price}€/jour`

		return card
	}

	createPhotographerHeader() {
		const templateCard = document.getElementById('template-photographer-profile')
		const card = document.importNode(templateCard.content, true)

		card.querySelector('.photographer-header').setAttribute('data-hidden', '')
		const img = card.querySelector('img')

		img.setAttribute('src', this.photographer.portrait)
		img.setAttribute('alt', `Photo de profil de ${this.photographer.name}`)

		card.querySelector('.photographer-card__name').textContent = this.photographer.name
		card.querySelector(
			'.photographer-card__location',
		).textContent = `${this.photographer.city}, ${this.photographer.country}`
		card.querySelector('.photographer-card__tagline').textContent = this.photographer.tagline

		return card
	}
}
