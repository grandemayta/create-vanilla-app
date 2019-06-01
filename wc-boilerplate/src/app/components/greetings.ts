import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('app-greetings')
class Greetings extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: blue;
      }
    `;
  }

  @property()
  private fullname: string;

  public render() {
    return html`
      <h1>Hello ${this.fullname}</h1>
    `;
  }
}

export { Greetings };
