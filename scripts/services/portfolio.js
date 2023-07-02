/* eslint-disable import/extensions */
import API from './api.js';

export default class PortfolioAPI extends API {
	/**
	 * @param {number} userId
	 */
	async getPortfolioPhotographer(userId) {
		try {
			const { media } = await super.fetch();
			const portfolio = media.filter((user) => user.photographerId === userId);

			return portfolio;
		} catch (error) {
			console.error(error);
			throw new Error(`Erreur ${error.status}, le portfolio du photographe n'est pas disponible`);
		}
	}
}
