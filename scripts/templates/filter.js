/* eslint-disable import/extensions */
import MediaTemplate from '../Media/MediaTemplate.js';
import Ligthbox from './lightbox.js';

export default class DropdownFilter {
	/**
	 * @param {"popularity" | "date" | "title} sort
	 */
	constructor(portfolio, photographer, sort = 'popularity') {
		this.sortPortfolio = portfolio;
		this.photographer = photographer;
		this.value = sort;
		this.render();
		this.sortMedia();
		this.renderPortfolio();
	}

	renderPortfolio() {
		new MediaTemplate(this.sortPortfolio, this.photographer).createPortfolio();
		Ligthbox.init(this.sortPortfolio);
	}

	/**
	 * @param {Event} e
	 */
	handleChange(e) {
		this.value = e.target.value;
		this.sortMedia();
		this.renderPortfolio();
	}

	sortMedia() {
		switch (this.value) {
		case 'popularity':
			return this.sortPortfolio.sort((a, b) => b.likes - a.likes);

		case 'date':
			return this.sortPortfolio.sort((a, b) => new Date(b.date) - new Date(a.date));

		case 'title':
			return this.sortPortfolio.sort((a, b) => {
				if (b.title > a.title) return -1;
				if (a.title > b.title) return 1;

				return 0;
			});

		default:
			return this.portfolio;
		}
	}

	render() {
		const template = document.getElementById('template-filter');
		const dropdown = document.importNode(template.content, true);
		const select = dropdown.querySelector('.filter-section__select');

		select.value = this.value;
		select.addEventListener('change', (e) => this.handleChange(e));

		document.getElementById('filter').appendChild(dropdown);
	}
}
