import template from './header.html';

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.title = '';
  }

  connectedCallback() {
    this.innerHTML = template;
  }
}
