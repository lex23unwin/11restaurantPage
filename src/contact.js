export default function createContact() {
    const content = document.querySelector("#content")

    const contactContent = document.createElement("div")

    contactContent.textContent = "contact"

    content.appendChild(contactContent)
}