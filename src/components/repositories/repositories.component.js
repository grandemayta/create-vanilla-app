import { html, render } from 'lit-html';

export default class Repositories extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <h2 class="mui--text-left" style="margin-bottom: 30px;">Repositories</h2>
                <button class="mui-btn mui-btn--flat">angularjs-tutorials</button>
                <div class="mui-divider"></div>
                <button class="mui-btn mui-btn--flat">backbone</button>
                <div class="mui-divider"></div>
                <button class="mui-btn mui-btn--flat">browserify-bundler</button>
            </div>
        `;
    }
}