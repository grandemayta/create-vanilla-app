import { LitElement, html } from '@polymer/lit-element';

export default class Home extends LitElement {
  constructor() {
    super();
    this.title = 'Web Components scaffolding is ready!';
  }

  render() {
    return html`
      <app-header title="I'm another component"></app-header>
      <h1>${this.title}</h1>
    `;
  }
}
