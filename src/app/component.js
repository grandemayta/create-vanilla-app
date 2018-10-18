import { render, html } from 'lit-html';

export default class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();
    this.rootEl = this;
    this.placeholder = 'Type your name...';
    this.load();
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== null && oldVal !== newVal) {
      this.load();
    }
  }

  handleKeyUp(value) {
    if (value !== '') {
      this.name = value;
    }
  }

  template() {
    return html`
      <div>
        <h1>I'm a Custom Element</h1>
        <h2>Hi ${this.name}!</h2>
        <input 
          @keyup=${e => this.handleKeyUp(e.target.value)} 
          placeholder=${this.placeholder}
          type="text">
      </div>`;
  }

  load() {
    this.name = this.getAttribute('name');
    render(this.template(), this.rootEl);
  }
}

customElements.define('app-my-component', MyComponent);
