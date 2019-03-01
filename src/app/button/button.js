import { LitElement, html } from 'lit-element';

export default class Button extends LitElement {
  static get properties() {
    return {
      label: { type: String }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          min-width: 100px;
          text-align: center;
          background: #d0d0d0; 
          border-radius: 3px;
          cursor: pointer;
        }
      </style>
      ${this.label}
    `;
  }
}

customElements.define('app-button', Button);
