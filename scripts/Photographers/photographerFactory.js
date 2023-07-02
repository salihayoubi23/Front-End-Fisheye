/* eslint-disable import/extensions */
import PhotographerTemplate from './photographerTemplate.js';

export default class PhotographerFactory {
	static createPhotographer(data, type) {
		if (type === 'card') {
			return new PhotographerTemplate(data).createPhotographerCard();
		}
		if (type === 'header') {
			return new PhotographerTemplate(data).createPhotographerHeader();
		}

		return new Error('Type inconnu');
	}
}
