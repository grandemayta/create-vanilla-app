import { html, render } from 'lit-html';

export default class Followers extends HTMLElement {
    constructor() {
        super();
        this.name = 'Pinco';
    }

    connectedCallback() {
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <h2 class="mui--text-left" style="margin-bottom: 30px;">Followers</h2>
                <button class="mui-btn mui-btn--flat">${this.name}</button>
                <div class="mui-divider"></div>
                <button class="mui-btn mui-btn--flat">Pluto</button>
                <div class="mui-divider"></div>
                <button class="mui-btn mui-btn--flat">Paperino</button>
            </div>
        `;
    }
}