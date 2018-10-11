import { LitElement, html } from '@polymer/lit-element';
import Header from './components/header/header';

export default class MyComponent extends LitElement {
  constructor() {
    super();
    this.title = 'Web Components scaffolding is ready!';
    this.header = new Header();
  }

  style() {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.style()}
      <div class="container">
        ${this.header.render()}
      </div>
      <h1>${this.title}</h1>
    `;
  }
}

customElements.define('app-my-component', MyComponent);
