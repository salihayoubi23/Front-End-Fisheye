/* eslint-disable import/extensions */
import Media from '../MediaModel.js';

/**
 * @typedef {{ id: number; photographerId: number; title: string;
 * video: string; likes: number; date: Date; price: number }} DataVideo
 */

export default class VideoModel extends Media {
	#videoPath;

	#type;

	/**
	 * @param {DataVideo} data
	 */
	constructor(data) {
		super(data);
		this.#videoPath = data.video;
		this.#type = 'video';
	}

	get path() {
		return `assets/portfolio/${super.photographerId}/${this.#videoPath}`;
	}

	get type() {
		return this.#type;
	}

	createHTML() {
		const video = document.createElement('video');
		video.src = this.path;
		video.classList.add('media-thumbnail__video');
		return video;
	}
}
