import { html, render } from 'lit-html';

export default class Profile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(this.template(), this);
    }

    template() {
        return html`
            <div class="mui-panel mui--text-center">
                <img style="width: 50%; border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/239742?v=4">
                <div class="mui--text-title">Mark Zuckerberg</div>
                <div class="mui--text-subhead">CEO @ Smyte, ex-React team at Facebook</div>
            </div>
        `;
    }
}