import { html, render } from 'lit-html';
import { httpWrapper } from '../../services';

export default class Profile extends HTMLElement {
    constructor() {
        super();
        this.id = '';
        this.profile = {};
    }

    async connectedCallback() {
        this.id = this.getAttribute('data-id');
        this.profile = await httpWrapper(`https://api.github.com/users/${this.id}`);
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <img style="width: 50%; border-radius: 50%;" src="${this.profile.avatar_url}">
                <div class="mui--text-title">${this.profile.name}</div>
                <div class="mui--text-subhead">${this.profile.company}</div>
                <div class="mui--text-subhead">${this.profile.location}</div>
            </div>
        `;
    }
}