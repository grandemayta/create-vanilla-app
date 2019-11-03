export class Greetings extends HTMLElement {
  get fullname() {
    return this.getAttribute('fullname');
  }

  public connectedCallback() {
    this.render();
  }

  public render() {
    this.innerHTML = `
      <p>Hello ${this.fullname}</p>
    `;
  }
}

customElements.define('app-greetings', Greetings);
