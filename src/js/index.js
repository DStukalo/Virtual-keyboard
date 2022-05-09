import "../scss/main.scss";
import createTemplate from "./createTemplate";
import initShiftKeys from "./initShiftKeys";
import initKeys from "./initKeys";

createTemplate();

export const keybord = document.querySelector(".keybord_area");
const TEXTAREA = document.querySelector(".text_area");
let lastLanguage = localStorage.getItem("app_lang") || "EN";
let capslock = "off";
let shift = "off";
let cntrl = "off";
let alt = "off";

console.log(lastLanguage);
initKeys(lastLanguage);

document.addEventListener("keydown", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
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
        // let curKey = document.querySelectorAll(".keybord-key");
        // curKey.forEach((el) => {
        //     if (el.getAttribute("data") === e.code) {
        //         el.classList.add("active");
        //     }
        // });
        if (shift === "on") {
            initShiftKeys(lastLanguage);
        }
    }
    if (e.key === "Control") {
        cntrl = "on";
        if (alt === "on") {
            let curLang = lastLanguage;
            if (lastLanguage === "EN") {
                curLang = "UA";
                lastLanguage = curLang;
                localStorage.setItem("app_lang", curLang);
                initKeys(lastLanguage);
            } else {
                curLang = "EN";
                lastLanguage = curLang;
                localStorage.setItem("app_lang", curLang);
                initKeys(lastLanguage);
            }
        }
    }
    if (e.key === "Alt") {
        alt = "on";
        e.preventDefault();
        if (cntrl === "on") {
            let curLang = lastLanguage;
            if (lastLanguage === "EN") {
                curLang = "UA";
                lastLanguage = curLang;
                localStorage.setItem("app_lang", curLang);
                initKeys(lastLanguage);
            } else {
                curLang = "EN";
                lastLanguage = curLang;
                localStorage.setItem("app_lang", curLang);
                initKeys(lastLanguage);
            }
        }
    }
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

document.addEventListener("keyup", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code) {
            el.classList.remove("active");
        }
        if (e.key === "Shift") {
            shift = "off";
            initKeys(lastLanguage);
        }
        if (e.key === "Control") {
            cntrl = "off";
        }
        if (e.key === "Alt") {
            alt = "off";
        }
    });
});
