/* eslint-disable import/extensions */
import Media from '../MediaModel.js';

/**
 * @typedef {{ id: number; photographerId: number; title: string; image: string;
 * likes: number; date: Date; price: number }} DataImage
 */

export default class ImageModel extends Media {
	#imagePath;

	#type;

	/**
	 * @param {DataImage} data
	 */
	constructor(data) {
		super(data);
		this.#imagePath = data.image;
		this.#type = 'image';
	}

	get path() {
		return `assets/portfolio/${super.photographerId}/${this.#imagePath}`;
	}

	get type() {
		return this.#type;
	}

	createHTML() {
		const img = document.createElement('img');
		img.src = this.path;
		img.alt = ` ${this.title}`;
		img.classList.add('media-thumbnail__image');
		return img;
	}
}
