export default class Media {
	#id;

	#photographerId;

	#title;

	#likes;

	#price;

	#date;

	#liked;

	constructor(data) {
		this.#id = data.id;
		this.#photographerId = data.photographerId;
		this.#title = data.title;
		this.#likes = data.likes;
		this.#price = data.price;
		this.#date = data.date;
		this.#liked = false;
	}

	get id() {
		return this.#id;
	}

	get photographerId() {
		return this.#photographerId;
	}

	get title() {
		return this.#title;
	}

	get date() {
		return this.#date;
	}

	get price() {
		return this.#price;
	}

	get likes() {
		return this.#likes;
	}

	get liked() {
		return this.#liked;
	}

	/**
     * @param {number} likes
     */
	set setLikes(likes) {
		this.#likes = likes;
	}

	/**
     * @param {boolean} value
     */
	set setLiked(value) {
		this.#liked = value;
	}
}
