export default function createMenu() {
    const content = document.querySelector("#content")

    const menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")
    
    const menuTitle = document.createElement("div")
    menuTitle.textContent = "Menu Title"
    menuTitle.classList.add("menuTitle")
    menuContent.appendChild(menuTitle)
    
    const menuItem1 = document.createElement("div")
    menuItem1.classList.add("menuItem")
    const menuItemImage = document.createElement("img")
    menuItemImage.src = "./images/pb&j.jpeg"
    menuItemImage.alt = "PB&J sandwhich"
    menuItemImage.classList.add("image")
    const menuItemDescription = document.createElement("div")
    menuItemDescription.textContent = "Description of the menu item to buyyyy"
    menuItem1.appendChild(menuItemImage)
    menuItem1.appendChild(menuItemDescription)
    menuContent.appendChild(menuItem1)

    const menuItem2 = document.createElement("div")
    menuItem2.classList.add("menuItem")
    const menuItemImage2 = document.createElement("img")
    menuItemImage2.src = "./images/pb&j.jpeg"
    menuItemImage2.alt = "PB&J sandwhich"
    menuItemImage2.classList.add("image")
    const menuItemDescription2 = document.createElement("div")
    menuItemDescription2.textContent = "Description of the menu item to buyyyy"
    menuItem2.appendChild(menuItemImage2)
    menuItem2.appendChild(menuItemDescription2)
    menuContent.appendChild(menuItem2)

    const menuItem3 = document.createElement("div")
    menuItem3.classList.add("menuItem")
    const menuItemImage3 = document.createElement("img")
    menuItemImage3.src = "./images/pb&j.jpeg"
    menuItemImage3.alt = "PB&J sandwhich"
    menuItemImage3.classList.add("image")
    const menuItemDescription3 = document.createElement("div")
    menuItemDescription3.textContent = "Description of the menu item to buyyyy"
    menuItem3.appendChild(menuItemImage3)
    menuItem3.appendChild(menuItemDescription3)
    menuContent.appendChild(menuItem3)

    content.appendChild(menuContent)
}