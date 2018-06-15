import { html, render } from 'lit-html';
import { httpWrapper } from '../../services'

export default class Followers extends HTMLElement {
    constructor() {
        super();
        this.followers = [];
    }

    async connectedCallback() {
        this.id = this.getAttribute('data-id');
        this.followers = await httpWrapper(`https://api.github.com/users/${this.id}/followers`);
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <h2 class="mui--text-left" style="margin-bottom: 30px;">Followers</h2>
                ${this.followers.map(follower => {
                    return html`
                        <button class="mui-btn mui-btn--flat">${follower.login}</button>
                        <div class="mui-divider"></div>
                    `;
                })}
            </div>
        `;
    }
}