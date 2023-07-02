/* eslint-disable import/extensions */
import API from './api.js';

export default class PhotographerAPI extends API {
	async getAllPhotographers() {
		try {
			const { photographers } = await super.fetch();
			return photographers;
		} catch (error) {
			console.error(error);
			throw new Error(`Erreur ${error.status}, aucun photographe trouvé`);
		}
	}

	/**
	 * @param {number} userId
	 */
	async getPhotographerById(userId) {
		try {
			const { photographers } = await super.fetch();
			const photographer = photographers.filter((user) => user.id === userId)[0];

			if (!photographer) {
				window.location.href = 'index.html';
			}

			return photographer;
		} catch (error) {
			console.error(error);
			throw new Error(`Erreur ${error.status}, le profil du photographe n'est pas disponible`);
		}
	}
}
