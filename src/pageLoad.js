import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'

export default function pageLoad() {
    createHome();
    createMenu();
    createContact();
}