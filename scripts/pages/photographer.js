
import PhotographerAPI from '../services/photographer.js';
import PortfolioAPI from '../services/portfolio.js';
import PhotographerModel from '../Photographers/photographerModel.js';
import PhotographerFactory from '../Photographers/photographerFactory.js';
import FormModal from '../templates/modalForm.js';
import DropdownFilter from '../templates/filter.js';
import MediaFactory from '../Media/MediaFactory.js';

async function init() {
	const url = new URLSearchParams(window.location.search);
	const userId = Number(url.get('id'));
	let medias = [];

	try {
		const photographe = await new PhotographerAPI().getPhotographerById(userId);
		const portfolio = await new PortfolioAPI().getPortfolioPhotographer(userId);

		const photographeModel = new PhotographerModel({ profile: photographe, portfolio });
		const card = PhotographerFactory.createPhotographer(photographeModel, 'header');
		document.getElementById('profile').appendChild(card);

		const btnOpenModal = document.querySelector('button');
		// eslint-disable-next-line no-new
		new FormModal(photographe.name, btnOpenModal);

		portfolio.forEach((media) => {
			const mediaModel = MediaFactory.createMedia(media);
			medias.push(mediaModel);
		});

		const mediaSort = new DropdownFilter(medias, photographeModel, 'popularity');
		medias = mediaSort.sortPortfolio;
	} catch (error) {
		console.error(error);
	}
}

init();
