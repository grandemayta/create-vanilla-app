import template from './header.template.html';

export default class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = template;
  }
}