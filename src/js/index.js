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

initKeys(lastLanguage);

document.addEventListener("keydown", (e) => press(e));

document.addEventListener("click", (e) => press(e));

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

document.addEventListener("mouseover", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el === e.target) {
            el.classList.add("hover");
        }
    });
});

document.addEventListener("mouseout", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code || el === e.target) {
            el.classList.remove("active");
            el.classList.remove("hover");
        }
        if (el.getAttribute("data") === "ShiftLeft") {
            shift = "off";
            initKeys(lastLanguage);
        }
        if (el.getAttribute("data") === "ControlLeft") {
            cntrl = "off";
        }
        if (el.getAttribute("data") === "AltLeft") {
            alt = "off";
        }
    });
});

function press(e) {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code || el === e.target) {
            if (el === e.target) {
                el.classList.remove("hover");
            }
            el.classList.add("active");
            if (
                el.className.includes("key-letters") ||
                el.className.includes("key-space") ||
                el.className.includes("key-number") ||
                el.className.includes("key-symbol")
            ) {
                let currentValue = [...TEXTAREA.value];
                currentValue.push(el.textContent);
                currentValue = currentValue.join("");
                TEXTAREA.value = currentValue;
            }
            if (el.getAttribute("data") === "CapsLock") {
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
            if (el.getAttribute("data") === "ShiftLeft") {
                shift = "on";
                el.classList.add("active");
                if (shift === "on") {
                    initShiftKeys(lastLanguage);
                }
            }
            if (el.getAttribute("data") === "ControlLeft") {
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
            if (el.getAttribute("data") === "AltLeft") {
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
            if (el.getAttribute("data") === "Tab") {
                e.preventDefault();
            }
            if (el.getAttribute("data") === "Backspace") {
                let currentValue = [...TEXTAREA.value];
                console.log(currentValue);
                currentValue.pop();
                currentValue = currentValue.join("");
                TEXTAREA.value = currentValue;
            }
        }
    });
}
