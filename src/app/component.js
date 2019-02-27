import { LitElement, html } from 'lit-element';
import './components/greetings';

export default class Bootstrap extends LitElement {
  render() {
    return html`
      <h1>I'm a Web Component</h1>
      <app-greetings name="Gabriel"></app-greetings>
    `;
  }
}
