export class Greetings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get fullname() {
    return this.getAttribute('fullname');
  }

  public render() {
    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: blue;
        }
      </style>
      <h1>Hello ${this.fullname}</h1>
    `;
  }
}

customElements.define('app-greetings', Greetings);
