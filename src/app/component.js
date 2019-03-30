import { LitElement, html } from 'lit-element';

export default class Greetings extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  render() {
    return html`
      <style>
        :host {
            display: block;
        }
        h1 {
            text-transform: uppercase;
        }
      </style>
      <h1>Hello ${this.name}</h1>
    `;
  }
}

customElements.define('app-greetings', Greetings);
