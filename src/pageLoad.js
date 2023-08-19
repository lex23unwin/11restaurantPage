import createHome from './home.js'
import createTabs from './tabs.js'
import createFooter from './footer.js'

export default function pageLoad() {
    createTabs();
    createHome();
    createFooter();
}