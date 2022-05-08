import "../scss/main.scss";
import createTemplate from "./createTemplate";
import Key from "./key";
import { ARR_KEYS } from "./dataKey";

const keybord = document.querySelector(".keybord_area");
function initKeys() {
    let out = "";
    for (let i = 0; i < ARR_KEYS.length; i++) {
        if (i == 14 || i == 28 || i == 41 || i == 54 || i == 63) {
            out += '<div class="clearfix"></div>';
        }
        let elem = new Key(
            ARR_KEYS[i].engText,
            ARR_KEYS[i].class,
            ARR_KEYS[i].code,
            ARR_KEYS[i].text,
            ARR_KEYS[i].anotherText,
            ARR_KEYS[i].shiftEng
        );
        out += elem.createKey(ARR_KEYS[i]);
    }
    keybord.innerHTML = out;
}

function initShiftKeys() {
    let out = "";
    for (let i = 0; i < ARR_KEYS.length; i++) {
        if (i == 14 || i == 28 || i == 41 || i == 54 || i == 63) {
            out += '<div class="clearfix"></div>';
        }
        let elem = new Key(
            ARR_KEYS[i].engText,
            ARR_KEYS[i].class,
            ARR_KEYS[i].code,
            ARR_KEYS[i].text,
            ARR_KEYS[i].anotherText,
            ARR_KEYS[i].shiftEng
        );
        out += elem.createShiftKey(ARR_KEYS[i]);
    }
    keybord.innerHTML = out;
}
const TEXTAREA = document.querySelector(".text_area");
let capslock = "off";
let shift = "off";
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
            // let curKey = document.querySelectorAll(".key-letters");
            // let curKeySymbol = document.querySelectorAll(".key-symbol");
            // curKey.forEach((el) => {
            //     let curText = el.textContent;
            //     el.textContent = curText.toUpperCase();
            // });
            // curKeySymbol.forEach((el) => {
            //     el.textContent = el.getAttribute("data-shiftEng");
            // });
        }
    }
    curKey.forEach((el) => {
        if (el.getAttribute("data") === e.code) {
            el.classList.add("active");
            if (
                el.className.includes("key-letters") ||
                el.className.includes("key-space") ||
                el.className.includes("key-number")
            ) {
                if (shift === "on") {
                    let curKey = document.querySelectorAll(".key-letters");
                    curKey.forEach((el) => {
                        let curText = el.textContent;
                        el.textContent = curText.toUpperCase();
                        el.textContent = el.getAttribute("data-textEng");
                    });
                }
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
            console.log(shift);
            initKeys();
            // let curKey = document.querySelectorAll(".key-letters");
            // let curKeySymbol = document.querySelectorAll(".key-symbol");
            // let curKey = document.querySelectorAll(".keybord-key");
            // curKey.forEach((el) => {
            //     let curText = el.getAttribute("data-textEng");
            //     el.textContent = curText;
            // });
            // curKeySymbol.forEach((el) => {
            //     console.log("s");
            //     let curText = el.getAttribute("data-textEng");
            //     // el.textContent = curText;
            // });
        }
    });
});
initKeys();
