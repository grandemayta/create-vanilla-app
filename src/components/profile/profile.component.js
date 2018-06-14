import { html, render } from 'lit-html';
import { httpWrapper } from '../../services';

export default class Profile extends HTMLElement {
    constructor() {
        super();
        this.id = '';
    }

    connectedCallback() {
        this.id = this.getAttribute('data-id');
        httpWrapper.get(`https://api.github.com/users/${this.id}`, data => {
            render(this.template(data), this);
        });
    }

    template(profile) {
        return html`
            <div class="mui-panel mui--text-center">
                <img style="width: 50%; border-radius: 50%;" src="${profile.avatar_url}">
                <div class="mui--text-title">${profile.name}</div>
                <div class="mui--text-subhead">${profile.company}</div>
                <div class="mui--text-subhead">${profile.location}</div>
            </div>
        `;
    }
}