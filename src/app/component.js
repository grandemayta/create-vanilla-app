import { LitElement, html } from '@polymer/lit-element';

export default class MyComponent extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.placeholder = 'Type your name...';
  }

  handleKeyUp(value) {
    if (value !== '') {
      this.name = value;
    }
  }

  render() {
    return html`
      <style>
        section, h1, h2, input {
          margin: 0;
          padding: 0 0 20px 0;
        }
        section {
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 3px;
        }
        input {
          padding: 10px;
        }
      </style>
      <section>
        <h1>I'm a Custom Element</h1>
        <h2>Hi ${this.name}!</h2>
        <input 
          @keyup=${e => this.handleKeyUp(e.target.value)} 
          placeholder=${this.placeholder}
          type="text">
      </section>`;
  }
}

customElements.define('app-my-component', MyComponent);
