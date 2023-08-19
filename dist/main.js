/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




function pageLoad() {
    (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
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

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTabs)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);





function createTabs() {
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
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })

    const menuTab = document.createElement("div");
    menuTab.classList.add("tab")
    menuTab.textContent = "Menu"
    menuTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        console.log("here")
        ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })


    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.textContent = "Contact";
    contactTab.addEventListener("click", () => {
        while (content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }
        createTabs();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
    const content = document.querySelector("#content")

    const menuContent = document.createElement("div")
    
    const menuTitle = document.createElement("div")
    menuTitle.textContent = "Menu Title"
    menuContent.appendChild(menuTitle)
    
    const menuItem1 = document.createElement("div")
    const menuItemImage = document.createElement("img")
    const menuItemDescription = document.createElement("div")
    
    menuItemDescription.textContent = "Description of the menu item to buy"
    menuItemImage = url("./dist/images/pb&j.jpg")

    menuItem1.appendChild(menuItemImage)
    menuItem1.appendChild(menuItemDescription)

    menuContent.appendChild(menuItem1)

    content.appendChild(menuContent)
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
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

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
    const content = document.querySelector("#content")
    const footer = document.createElement("div");
    footer.classList.add("footer")
    footer.textContent = "Alexander Unwin - The Odin Project - Summer 2023";
    content.appendChild(footer)
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;