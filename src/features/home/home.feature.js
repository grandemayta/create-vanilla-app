import { html, render } from 'lit-html';
import { querystringToObject } from '../../services';

export default class Home extends HTMLElement {
    constructor() {
        super();
        this.id = '';
    }

    connectedCallback() {
        let qs = querystringToObject(location.search);
        this.id = qs.username || 'grandemayta';
        render(this.template(), this);
    }

    template() {
        return html`
            <div>
                <app-header></app-header>
                <div style="padding-top: 20px;" class="mui-container">
                    <app-profile data-id=${this.id}></app-profile>
                    <app-repositories></app-repositories>
                    <app-followers></app-followers>
                </div>
            </div>
        `;
    }
}