import "../scss/main.scss";
import createTemplate from "./createTemplate";
import { KeyLetters, KeyNumbers, KeySpecial, KeySpace, KeyShift } from "./key";
import { ARR_KEYS } from "./dataKey";

const keybord = document.querySelector(".keybord_area");
function initKeys() {
    let out = "";
    for (let i = 0; i < ARR_KEYS.length; i++) {
        if (i == 14 || i == 28 || i == 41 || i == 54 || i == 63) {
            out += '<div class="clearfix"></div>';
        }
        if (ARR_KEYS[i]["class"] == "letters") {
            let elem = new KeyLetters();
            out += elem.createKey(ARR_KEYS[i]);
        } else if (ARR_KEYS[i]["class"] == "number") {
            let elem = new KeyNumbers();
            out += elem.createKey(ARR_KEYS[i]);
        } else if (ARR_KEYS[i]["class"] == "special") {
            let elem = new KeySpecial();
            out += elem.createKey(ARR_KEYS[i]);
        } else if (ARR_KEYS[i]["class"] == "space") {
            let elem = new KeySpace();
            out += elem.createKey(ARR_KEYS[i]);
        } else {
            let elem = new KeyShift();
            out += elem.createKey(ARR_KEYS[i]);
        }
    }
    keybord.innerHTML = out;
}
const TEXTAREA = document.querySelector(".text_area");
let capslock = "off";
document.addEventListener("keydown", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    if (e.key === "CapsLock") {
        if (capslock === "on") {
            capslock = "off";
        } else {
            capslock = "on";
        }
    }
    curKey.forEach((el) => {
        if (el.textContent.toLowerCase() === e.key.toLowerCase()) {
            el.classList.add("active");
            console.log(e);
            TEXTAREA.textContent += el.textContent;
            if (el.className.includes("key-spacial")) {
            }
        }
    });
    if (capslock === "on") {
        let curKey = document.querySelectorAll(".key-letters");
        curKey.forEach((el) => {
            let curText = el.textContent;
            el.textContent = curText.toUpperCase();
        });
    }
    if (capslock === "off") {
        let curKey = document.querySelectorAll(".key-letters");
        curKey.forEach((el) => {
            let curText = el.textContent;
            el.textContent = curText.toLowerCase();
        });
    }
});

document.addEventListener("keyup", (e) => {
    let curKey = document.querySelectorAll(".keybord-key");
    curKey.forEach((el) => {
        if (el.textContent.toLowerCase() === e.key.toLowerCase()) {
            el.classList.remove("active");
        }
    });
});
initKeys();
