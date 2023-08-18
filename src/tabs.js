import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'

export default function createTabs() {
    const content = document.querySelector("#content")
    
    const tabsRow = document.createElement("div");
    tabsRow.classList.add("tabsRow")

    const homeTab = document.createElement("div");
    homeTab.classList.add("tab")
    homeTab.textContent = "homeTab"
    homeTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createHome();
    })


    const menuTab = document.createElement("div");
    menuTab.classList.add("tab")
    menuTab.textContent = "menuTab"
    menuTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createMenu();
    })


    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.textContent = "contactTab";
    contactTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createContact();
    })

    tabsRow.appendChild(homeTab);
    tabsRow.appendChild(menuTab);
    tabsRow.appendChild(contactTab);

    content.appendChild(tabsRow)
}


