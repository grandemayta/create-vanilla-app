import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-greetings')
class Greetings extends LitElement {
  @property()
  fullname: string = '';

  render() {
    return html`
      <h1>Hello ${this.fullname}</h1>
    `;
  }
}

export { Greetings };
