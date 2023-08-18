export default function createHome() {
    const content = document.querySelector("#content")

    const homeContent = document.createElement("div")

    homeContent.textContent = "home"

    content.appendChild(homeContent)
}