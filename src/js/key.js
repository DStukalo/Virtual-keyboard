class KeyNumbers {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return '<div class="keybord-key">' + el["key"] + "</div>";
    }
}

class KeyLetters {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return '<div class="keybord-key key-letters">' + el["eng"] + "</div>";
    }
}

class KeySpecial {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return '<div class="keybord-key key-spacial">' + el["btn"] + "</div>";
    }
}

class KeySpace {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return '<div class="keybord-key key-space">' + el["key"] + "</div>";
    }
}
class KeyShift {
    constructor(name, functional) {
        this.name = name;
        this.functional = functional;
    }
    createKey(el) {
        return '<div class="keybord-key key-shift">' + el["key"] + "</div>";
    }
}

export { KeyLetters, KeyNumbers, KeySpecial, KeySpace, KeyShift };
