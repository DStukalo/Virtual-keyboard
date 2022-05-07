class KeyNumbers {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return (
            '<div class="keybord-key"data="' +
            el["code"] +
            '">' +
            el["key"] +
            "</div>"
        );
    }
}

class KeyLetters {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return (
            '<div class="keybord-key key-letters" data="' +
            el["code"] +
            '">' +
            el["eng"] +
            "</div>"
        );
    }
}

class KeySpecial {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return (
            '<div class="keybord-key key-spacial"data="' +
            el["code"] +
            '">' +
            el["btn"] +
            "</div>"
        );
    }
}

class KeySpace {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return (
            '<div class="keybord-key key-space"data="' +
            el["code"] +
            '">' +
            el["key"] +
            "</div>"
        );
    }
}
class KeyShift {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return (
            '<div class="keybord-key key-shift"data="' +
            el["code"] +
            '">' +
            el["key"] +
            "</div>"
        );
    }
}

export { KeyLetters, KeyNumbers, KeySpecial, KeySpace, KeyShift };
