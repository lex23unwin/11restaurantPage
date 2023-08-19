export default function createFooter() {
    const content = document.querySelector("#content")
    const footer = document.createElement("div");
    footer.classList.add("footer")
    footer.textContent = "Alexander Unwin -- The Odin Project -- Summer 2023";
    content.appendChild(footer)
}
