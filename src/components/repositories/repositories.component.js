import { html, render } from 'lit-html';
import { httpWrapper } from '../../services';

export default class Repositories extends HTMLElement {
    constructor() {
        super();
        this.id = '';
        this.repositories = [];
    }

    async connectedCallback() {
        this.id = this.getAttribute('data-id');
        this.repositories = await httpWrapper(`https://api.github.com/users/${this.id}/repos`);
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <h2 class="mui--text-left" style="margin-bottom: 30px;">Repositories</h2>
                ${this.repositories.map(repository => {
                    return html`
                        <button class="mui-btn mui-btn--flat">${repository.name}</button>
                        <div class="mui-divider"></div>
                    `;
                })}
            </div>
        `;
    }
}