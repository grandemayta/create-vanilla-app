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

  @property({ type: String }) private fullname;

  public render() {
    return html`
      <h1>Hello ${this.fullname}</h1>
    `;
  }
}

export default Greetings;
