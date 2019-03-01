import { LitElement, html } from 'lit-element';

export default class Teams extends LitElement {
  static get properties() {
    return {
      league: { type: String },
      teams: { type: Array }
    };
  }

  constructor() {
    super();
    this.teams = [];
    this.getTeamsByCompetition();
  }

  getTeamsByCompetition() {
    const URL = `http://api.football-data.org/v2/competitions/SA/teams`;
    const headers = {
      'X-Auth-Token': 'ffd61d87e73740c29dd389ea7619d5e1'
    };

    fetch(URL, { headers })
      .then(response => response.json())
      .then(data => {
        this.teams = data.teams;
      });
  }

  style() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          justify-items: center;
          align-items: center;
          list-style: none;
        }
        li {
          display: inline-block;
        }
        li div {
          display: block;
          width: 80px;
          height: 80px;
          background: #f0f0f0;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }

        li strong {
          display: block;
          margin-top: 10px;
          font-size: 12px;
          text-align: center;
        }
      </style>
    `;
  }

  list(team) {
    return html`
      <li>
        <div style="background-image: url(${team.crestUrl})"></div>
  <strong>${team.shortName}</strong>
      </li>
    `;
  }

  render() {
    return html`
      ${this.style()}
      <ul>${this.teams.map(team => this.list(team))}</ul>
    `;
  }
}

customElements.define('app-teams', Teams);
