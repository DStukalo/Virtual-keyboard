export default class Key {
    constructor(engText, name, code, text, anotherText, shiftEng) {
        this.engText = engText;
        this.name = name;
        this.code = code;
        this.text = text;
        this.anotherText = anotherText;
        this.shiftEng = shiftEng;
        // this.shiftUA = shiftUA;
    }
    createKey() {
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

    createShiftKey() {
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
            this.shiftUA +
            '">' +
            this.uatext +
            "</div>"
        );
    }
}
