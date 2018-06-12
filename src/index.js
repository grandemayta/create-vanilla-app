import { Header, Profile, Repositories, Followers } from './components';
import { Home } from './features';

/* COMPONENTS */
window.customElements.define('app-header', Header);
window.customElements.define('app-profile', Profile);
window.customElements.define('app-repositories', Repositories);
window.customElements.define('app-followers', Followers);

/* PAGES */
window.customElements.define('app-home', Home);
