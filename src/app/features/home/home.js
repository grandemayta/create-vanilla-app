import { LitElement, html } from '@polymer/lit-element';

class Home extends LitElement {
  constructor() {
    super();
    this.title = 'Webcomponents project is ready!';
  }

  render() {
    return html`
        <div>
            <app-header></app-header>
            <h1>${this.title}</h1>
        </div>
    `;
  }
}

export default Home;
