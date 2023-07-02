export default class API {
	constructor() {
		this.url = 'data/photographers.json';
	}

	async fetch() {
		const res = await fetch(this.url);

		if (!res.ok) {
			throw new Error(res.status);
		}

		const data = await res.json();
		return data;
	}
}
