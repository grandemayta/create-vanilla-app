import template from './profile.template.html';

export default class Profile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.requestAnimationFrame(() => {
            this.innerHTML = template;
        });
    }
}