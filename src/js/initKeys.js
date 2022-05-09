import { ARR_KEYS } from "./dataKey";
import Key from "./key";
import { keybord } from "./index";
export default function initKeys() {
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
