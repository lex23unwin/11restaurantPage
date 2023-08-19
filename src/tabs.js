import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'
import createFooter from './footer.js'

export default function createTabs() {
    const content = document.querySelector("#content")
    
    const tabsRow = document.createElement("div");
    tabsRow.classList.add("tabsRow")

    const homeTab = document.createElement("div");
    homeTab.classList.add("tab")
    homeTab.textContent = "Home"
    homeTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createHome();
        createFooter();
    })

    const menuTab = document.createElement("div");
    menuTab.classList.add("tab")
    menuTab.textContent = "Menu"
    menuTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createMenu();
        console.log("here")
        createFooter();
    })


    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.textContent = "Contact";
    contactTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        createContact();
        createFooter();
    })

    const titleTab = document.createElement("div");
    titleTab.classList.add("tab")
    titleTab.setAttribute("id", "titleTab")
    titleTab.textContent = "Restaurant Name"


    tabsRow.appendChild(homeTab);
    tabsRow.appendChild(menuTab);
    tabsRow.appendChild(contactTab);
    tabsRow.appendChild(titleTab);

    content.appendChild(tabsRow)
}


