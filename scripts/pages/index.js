/* eslint-disable import/extensions */
import PhotographerAPI from '../services/photographer.js'
import PhotographerFactory from '../Photographers/photographerFactory.js'
import PhotographerModel from '../Photographers/photographerModel.js'

async function init() {
	try {
		const photographers = await new PhotographerAPI().getAllPhotographers()
		console.log(photographers)

		const photographersSection = document.querySelector('section.photographer_section')
		// affichages dynamique du template
		photographers.forEach((photographer) => {
			const photographeModel = new PhotographerModel({ profile: photographer })
			const card = PhotographerFactory.createPhotographer(photographeModel, 'card')
			photographersSection.appendChild(card)
		})
	} catch (error) {
		console.error(error)
	}
}

init()
