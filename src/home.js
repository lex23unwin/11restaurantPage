export default function createHome() {
    const content = document.querySelector("#content")

    const homeContent = document.createElement("div")
    homeContent.classList.add("homeContent")

    const cta = document.createElement("div")
    cta.textContent = "Come on down for the finest food in College Station!"
    cta.classList.add("cta")
    homeContent.appendChild(cta)

    const cta2 = document.createElement("div")
    cta2.textContent = "Scrumptious and affordable!"
    cta2.classList.add("cta2")
    homeContent.appendChild(cta2)

    const orderNowButton = document.createElement("button")
    orderNowButton.textContent = "Order Now"
    orderNowButton.classList.add("orderNowButton")
    homeContent.appendChild(orderNowButton)

    const informationBelow = document.createElement("div")
    informationBelow.classList.add("informationBelow")
    informationBelow.textContent = "1234 Restaurant Ave. "
    informationBelow.textContent += "Bryan-College Station, TX, 77840"
    homeContent.appendChild(informationBelow)


    content.appendChild(homeContent)
}