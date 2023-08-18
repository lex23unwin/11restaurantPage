export default function createMenu() {
    const content = document.querySelector("#content")

    const menuContent = document.createElement("div")

    menuContent.textContent = "menu"

    content.appendChild(menuContent)
}