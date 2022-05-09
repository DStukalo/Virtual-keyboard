import { ARR_KEYS } from "./dataKey";
import Key from "./key";
import { keybord } from "./index";
export default function initKeys(lang) {
    let out = "";
    for (let i = 0; i < ARR_KEYS.length; i++) {
        if (i == 14 || i == 28 || i == 41 || i == 54 || i == 63) {
            out += '<div class="clearfix"></div>';
        }
        let elem = new Key(
            ARR_KEYS[i].engText,
            ARR_KEYS[i].class,
            ARR_KEYS[i].code,
            ARR_KEYS[i].uaText,
            ARR_KEYS[i].shiftEng,
            ARR_KEYS[i].shiftUA
        );
        // out += elem.createENGKey(ARR_KEYS[i]);
        if (lang == "EN") {
            out += elem.createENGKey(ARR_KEYS[i]);
        } else if (lang == "UA") {
            console.log(elem);
            out += elem.createUAKey(ARR_KEYS[i]);
        }
    }
    keybord.innerHTML = out;
}
