export default function createContact() {
    const content = document.querySelector("#content")

    const contactContent = document.createElement("div")
    contactContent.classList.add("contactContent")

    const addressContact = document.createElement("div")
    addressContact.textContent = "1234 Restaurant Ave.    "
    addressContact.textContent += "Bryan-College Station, TX, 77840"
    
    const hoursContact = document.createElement("div")
    hoursContact.textContent = "Mon-Thurs: 9am - 9pm"

    const hoursContact2 = document.createElement("div")
    hoursContact2.textContent += "Fri-Sun: 9am - 11pm"

    const phoneContact = document.createElement("div")
    phoneContact.textContent = "123-456-7890"
    
    contactContent.appendChild(addressContact)
    contactContent.appendChild(hoursContact)
    contactContent.appendChild(hoursContact2)
    contactContent.appendChild(phoneContact)

    content.appendChild(contactContent) 
}