/* eslint-disable import/extensions */
import ImageModel from './models/image.js';
import VideoModel from './models/video.js';

export default class MediaFactory {
	static createMedia(data) {
		if (data.image) {
			return new ImageModel(data);
		}
		if (data.video) {
			return new VideoModel(data);
		}

		return new Error('Seules les images et les vidéos sont prises en charge');
	}
}
