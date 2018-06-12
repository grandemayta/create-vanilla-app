import { html, render } from 'lit-html';

export default class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    render(this.template(), this);
  }

  template() {
    return html`
      <div class="mui-appbar">
        <table width="100%">
            <tr style="vertical-align:middle;">
                <td class="mui--appbar-height">
                    <div class="mui--text-body2">
                        Github Profile
                    </div>
                </td>
            </tr>
        </table>
      </div>
    `;
  }
}