import { customElement, html, LitElement, property } from 'lit-element';

@customElement('app-greetings')
class Greetings extends LitElement {
  @property()
  private fullname: string = '';

  public render() {
    return html`
      <h1>Hello ${this.fullname}</h1>
    `;
  }
}

export { Greetings };
