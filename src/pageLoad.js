import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'
import createTabs from './tabs.js'

export default function pageLoad() {
    createTabs();
    createHome();
}