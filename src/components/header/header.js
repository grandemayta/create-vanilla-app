import { LitElement, html } from '@polymer/lit-element';

export default class Header extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  style() {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 140px;
          background-color: #209cee;
        }
        header h1, header h2 {
          padding-left: 20px;
          color: #fff;
        }
        header h1 a {
          text-decoration: none;
          color: #fff;
          cursor: pointer;
        }
        header h2 {
          padding-top: 10px;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.style()}
      <header>
        <h1>Header</h1>
        <h2>${this.title}</h2>
      </header>
    `;
  }
}
