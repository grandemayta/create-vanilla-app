import template from './home.template.html';

export default class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = template;
    }
    
}