/**
 * @typedef {{id: number; name: string; tagline: string; country: string; city: string;
 * price: number; portrait: string;}} Profile
 */

/**
 * @typedef {{ id: number; photographerId: number; title: string; image: string;
 * likes: number; price: number; price: number; date: string; }[]} Portfolio
 */

export default class PhotographerModel {
	#profile;

	#portfolio;

	/**
     * @param {{ profile: Profile, portfolio: Portfolio }}
     */
	constructor({ profile, portfolio = [] }) {
		this.#profile = profile;
		this.#portfolio = portfolio;
	}

	get id() {
		return this.#profile.id;
	}

	get name() {
		return this.#profile.name;
	}

	get tagline() {
		return this.#profile.tagline;
	}

	get country() {
		return this.#profile.country;
	}

	get city() {
		return this.#profile.city;
	}

	get price() {
		return this.#profile.price;
	}

	get portrait() {
		return `assets/photographers/${this.#profile.portrait}`;
	}

	get portfolio() {
		return this.#portfolio;
	}

	/**
     * @param {Portfolio} portfolio
     */
	set setPortfolio(portfolio) {
		this.#portfolio = portfolio;
	}
}
