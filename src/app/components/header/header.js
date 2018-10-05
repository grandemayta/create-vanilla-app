import { html, render } from 'lit-html';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  template() {
    return html`
      <header>
        <h2>I'm the Header!</h2>
      </header>
    `;
  }

  connectedCallback() {
    render(this.template(), this);
  }
}

export default Header;