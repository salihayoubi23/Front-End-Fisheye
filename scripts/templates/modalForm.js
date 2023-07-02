/* eslint-disable class-methods-use-this */
export default class FormModal {
	#photographerName;

	/**
     * @param {string} photographerName
     * @param {HTMLButtonElement} btn
     */
	constructor(photographerName, btn) {
		this.#photographerName = photographerName;
		this.element = null;
		this.btn = btn;
		this.render();
		this.initEvent();
	}

	initEvent() {
		this.btn.addEventListener('click', () => this.open());
	}

	open() {
		this.element.style.setProperty('display', 'block');
		this.element.setAttribute('aria-modal', true);
		this.btn.setAttribute('aria-expanded', true);

		/* Récupère les éléments quoi doivent être masqués pour les outils
        d'accessibilité quand la modale est ouverte */
		const elHide = document.querySelectorAll('[data-hidden]');
		elHide.forEach((el) => el.setAttribute('aria-hidden', true));
	}

	close() {
		this.element.style.setProperty('display', 'none');
		this.element.setAttribute('aria-modal', false);
		this.btn.setAttribute('aria-expanded', false);

		const elHide = document.querySelectorAll('[data-hidden]');
		elHide.forEach((el) => el.removeAttribute('aria-hidden'));
	}

	/**
     * @param {SubmitEvent} e
     */
	submit(e) {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		// eslint-disable-next-line no-console
		[...formData.entries()].forEach((entrie) => console.log(entrie));

		form.reset();
		this.close();
	}

	render() {
		const template = document.getElementById('template-formModal');
		const modal = document.importNode(template.content, true);
		modal.querySelector('h2').innerHTML = `Contactez-moi <br> ${this.#photographerName}`;

		modal.querySelector('.modal__close').addEventListener('click', () => this.close());
		modal.querySelector('form').addEventListener('submit', (e) => this.submit(e));

		const overlay = document.createElement('div');
		overlay.classList.add('modal-overlay');
		overlay.setAttribute('role', 'dialog');
		overlay.setAttribute('aria-modal', false);
		overlay.setAttribute('aria-labelledby', 'open-form');
		overlay.append(modal);
		document.getElementById('profile').append(overlay);

		this.element = document.querySelector('.modal-overlay');
	}
}
