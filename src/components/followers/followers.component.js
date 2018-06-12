import template from './followers.template.html';

export default class Followers extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.requestAnimationFrame(() => {
            this.innerHTML = template;
        });
    }
}