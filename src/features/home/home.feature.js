import { html, render } from 'lit-html';

export default class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(this.template(), this);
    }

    template() {
        return html`
            <div>
                <app-header></app-header>
                <div style="padding-top: 20px;" class="mui-container">
                    <app-profile></app-profile>
                    <app-repositories></app-repositories>
                    <app-followers></app-followers>
                </div>
            </div>
        `;
    }
}