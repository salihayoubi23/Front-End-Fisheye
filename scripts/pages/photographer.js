// eslint-disable-next-line import/extensions
import PhotographerAPI from '../services/photographer.js'
// eslint-disable-next-line import/extensions
import PortfolioAPI from '../services/portfolio.js'
// eslint-disable-next-line import/extensions
import PhotographerModel from '../Photographers/photographerModel.js'
// eslint-disable-next-line import/extensions
import PhotographerFactory from '../Photographers/photographerFactory.js'
// eslint-disable-next-line import/extensions
import FormModal from '../templates/modalForm.js'
// eslint-disable-next-line import/extensions
import DropdownFilter from '../templates/filter.js'
// eslint-disable-next-line import/extensions
import MediaFactory from '../Media/MediaFactory.js'

async function init() {
	const url = new URLSearchParams(window.location.search)
	const userId = Number(url.get('id'))
	let medias = []

	try {
		const photographe = await new PhotographerAPI().getPhotographerById(userId)
		const portfolio = await new PortfolioAPI().getPortfolioPhotographer(userId)

		const photographeModel = new PhotographerModel({ profile: photographe, portfolio })
		const card = PhotographerFactory.createPhotographer(photographeModel, 'header')
		document.getElementById('profile').appendChild(card)

		const btnOpenModal = document.querySelector('button')
		// eslint-disable-next-line no-new
		new FormModal(photographe.name, btnOpenModal)

		portfolio.forEach((media) => {
			const mediaModel = MediaFactory.createMedia(media)
			medias.push(mediaModel)
		})

		const mediaSort = new DropdownFilter(medias, photographeModel, 'popularity')
		medias = mediaSort.sortPortfolio
	} catch (error) {
		console.error(error)
	}
}

init()
