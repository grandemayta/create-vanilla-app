import { LitElement, html } from 'lit-element';
import styles from './greetings.css';

export default class Greetings extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  render() {
    return html`
      <style>${styles}</style>
      <h2>Hello ${this.name}</h2>
    `;
  }
}

customElements.define('app-greetings', Greetings);
