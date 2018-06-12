import template from './repositories.template.html';

export default class Repositories extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.requestAnimationFrame(() => {
            this.innerHTML = template;
        });
    }
}