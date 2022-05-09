export default class Key {
    constructor(engText, name, code, uaText, shiftEng, shiftUA) {
        this.engText = engText;
        this.name = name;
        this.code = code;
        this.uaText = uaText;
        this.shiftEng = shiftEng;
        this.shiftUA = shiftUA;
    }
    createENGKey() {
        return (
            '<div class="keybord-key key-' +
            this.name +
            '" data="' +
            this.code +
            '" data-shiftEng="' +
            this.engText +
            '" data-textEng="' +
            this.shiftEng +
            '">' +
            this.engText +
            "</div>"
        );
    }

    createENGShiftKey() {
        return (
            '<div class="keybord-key key-' +
            this.name +
            '" data="' +
            this.code +
            '" data-shiftEng="' +
            this.engText +
            '" data-textEng="' +
            this.shiftEng +
            '">' +
            this.shiftEng +
            "</div>"
        );
    }

    createUAKey() {
        return (
            '<div class="keybord-key key-' +
            this.name +
            '" data="' +
            this.code +
            '" data-shiftUA="' +
            this.uaText +
            '" data-textUA="' +
            this.shiftUA +
            '">' +
            this.uaText +
            "</div>"
        );
    }

    createUAShiftKey() {
        return (
            '<div class="keybord-key key-' +
            this.name +
            '" data="' +
            this.code +
            '" data-shiftUA="' +
            this.uaText +
            '" data-textUA="' +
            this.shiftUA +
            '">' +
            this.shiftUA +
            "</div>"
        );
    }
}
