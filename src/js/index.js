import "../scss/main.scss";
import createTemplate from "./createTemplate";
import initShiftKeys from "./initShiftKeys";
import initKeys from "./initKeys";

createTemplate();

export const keybord = document.querySelector(".keybord_area");
const TEXTAREA = document.querySelector(".text_area");
let lastLanguage = localStorage.getItem("app_lang") || "EN";
// localStorage.setItem('app_lang', selectValue);
let capslock = "off";
let shift = "off";
let cntrl = "off";
let alt = "off";

initKeys();

document.addEventListener("keydown", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    if (e.key === "CapsLock") {
        if (capslock === "on") {
            capslock = "off";
            let curKey = document.querySelectorAll(".key-letters");
            curKey.forEach((el) => {
                let curText = el.textContent;
                el.textContent = curText.toLowerCase();
            });
        } else if ((capslock = "off")) {
            capslock = "on";
            let curKey = document.querySelectorAll(".key-letters");
            curKey.forEach((el) => {
                let curText = el.textContent;
                el.textContent = curText.toUpperCase();
            });
        }
    }
    if (e.key === "Shift") {
        shift = "on";
        console.log(shift);
        if (shift === "on") {
            initShiftKeys();
        }
    }
    // if (e.key === "Shift") {
    //     shift = "on";
    //     console.log(shift);
    //     if (shift === "on") {
    //         initShiftKeys();
    //     }
    // }
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code) {
            el.classList.add("active");
            if (
                el.className.includes("key-letters") ||
                el.className.includes("key-space") ||
                el.className.includes("key-number") ||
                el.className.includes("key-symbol")
            ) {
                TEXTAREA.textContent += el.textContent;
            }
        }
    });
});

document.addEventListener("keyup", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code) {
            el.classList.remove("active");
        }
        if (e.key === "Shift") {
            shift = "off";
            initKeys();
        }
    });
});
