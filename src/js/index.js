import '../scss/main.scss';
import createTemplate from './createTemplate';
import ARR_KEYS from './dataKey';
import Key from './key';

createTemplate();

const keybord = document.querySelector('.keybord_area');
const TEXTAREA = document.querySelector('.text_area');
let lastLanguage = localStorage.getItem('app_lang') || 'EN';
let capslock = 'off';
let shift = 'off';
let cntrl = 'off';
let alt = 'off';

function initKeys(lang) {
  let out = '';
  for (let i = 0; i < ARR_KEYS.length; i += 1) {
    if (i === 14 || i === 28 || i === 41 || i === 54 || i === 63) {
      out += '<div class="clearfix"></div>';
    }
    const elem = new Key(
      ARR_KEYS[i].engText,
      ARR_KEYS[i].class,
      ARR_KEYS[i].code,
      ARR_KEYS[i].uaText,
      ARR_KEYS[i].shiftEng,
      ARR_KEYS[i].shiftUA,
    );
    // out += elem.createENGKey(ARR_KEYS[i]);
    if (lang === 'EN') {
      out += elem.createENGKey(ARR_KEYS[i]);
    } else if (lang === 'UA') {
      out += elem.createUAKey(ARR_KEYS[i]);
    }
  }
  keybord.innerHTML = out;
}

function initShiftKeys(lang) {
  let out = '';
  for (let i = 0; i < ARR_KEYS.length; i += 1) {
    if (i === 14 || i === 28 || i === 41 || i === 54 || i === 63) {
      out += '<div class="clearfix"></div>';
    }
    const elem = new Key(
      ARR_KEYS[i].engText,
      ARR_KEYS[i].class,
      ARR_KEYS[i].code,
      ARR_KEYS[i].uaText,
      ARR_KEYS[i].shiftEng,
      ARR_KEYS[i].shiftUA,
    );
    if (lang === 'EN') {
      out += elem.createENGShiftKey(ARR_KEYS[i]);
    } else if (lang === 'UA') {
      out += elem.createUAShiftKey(ARR_KEYS[i]);
    }
  }
  keybord.innerHTML = out;
}

initKeys(lastLanguage);

function press(e) {
  const curKey = document.querySelectorAll('.keybord-key');
  curKey.forEach((el) => {
    if (el.getAttribute('data') === e.code || el === e.target) {
      if (el === e.target) {
        el.classList.remove('hover');
      }
      el.classList.add('active');
      if (
        el.className.includes('key-letters')
                || el.className.includes('key-space')
                || el.className.includes('key-number')
                || el.className.includes('key-symbol')
      ) {
        let currentValue = [...TEXTAREA.value];
        currentValue.push(el.textContent);
        currentValue = currentValue.join('');
        TEXTAREA.value = currentValue;
      }
      if (el.getAttribute('data') === 'CapsLock') {
        const curKeyCaps = document.querySelectorAll('.key-letters');
        if (capslock === 'on') {
          capslock = 'off';
          curKeyCaps.forEach((elem) => {
            const curText = elem.textContent;
            elem.textContent = curText.toLowerCase();
          });
        } else if (capslock === 'off') {
          capslock = 'on';
          curKeyCaps.forEach((element) => {
            const curText = element.textContent;
            element.textContent = curText.toUpperCase();
          });
        }
      }
      if (el.getAttribute('data') === 'Enter') {
        TEXTAREA.value += '\n';
      }
      if (el.getAttribute('data') === 'ShiftLeft') {
        shift = 'on';
        if (shift === 'on') {
          initShiftKeys(lastLanguage);
        }
      }
      if (el.getAttribute('data') === 'ControlLeft') {
        cntrl = 'on';
        if (alt === 'on') {
          let curLang = lastLanguage;
          if (lastLanguage === 'EN') {
            curLang = 'UA';
            lastLanguage = curLang;
            localStorage.setItem('app_lang', curLang);
            initKeys(lastLanguage);
          } else {
            curLang = 'EN';
            lastLanguage = curLang;
            localStorage.setItem('app_lang', curLang);
            initKeys(lastLanguage);
          }
        }
      }
      if (el.getAttribute('data') === 'AltLeft') {
        alt = 'on';
        e.preventDefault();
        if (cntrl === 'on') {
          let curLang = lastLanguage;
          if (lastLanguage === 'EN') {
            curLang = 'UA';
            lastLanguage = curLang;
            localStorage.setItem('app_lang', curLang);
            initKeys(lastLanguage);
          } else {
            curLang = 'EN';
            lastLanguage = curLang;
            localStorage.setItem('app_lang', curLang);
            initKeys(lastLanguage);
          }
        }
      }
      if (el.getAttribute('data') === 'Tab') {
        e.preventDefault();
      }
      if (el.getAttribute('data') === 'Backspace') {
        let currentValue = [...TEXTAREA.value];
        currentValue.pop();
        currentValue = currentValue.join('');
        TEXTAREA.value = currentValue;
      }
    }
  });
}

document.addEventListener('keydown', (e) => press(e));

document.addEventListener('click', (e) => press(e));

document.addEventListener('keyup', (e) => {
  const curKey = document.querySelectorAll('.keybord-key');
  curKey.forEach((el) => {
    if (el.getAttribute('data') === e.code) {
      el.classList.remove('active');
    }
    if (e.key === 'Shift') {
      shift = 'off';
      initKeys(lastLanguage);
    }
    if (e.key === 'Control') {
      cntrl = 'off';
    }
    if (e.key === 'Alt') {
      alt = 'off';
    }
  });
});

document.addEventListener('mouseover', (e) => {
  const curKey = document.querySelectorAll('.keybord-key');
  curKey.forEach((el) => {
    if (el === e.target) {
      el.classList.add('hover');
    }
  });
});

document.addEventListener('mouseout', (e) => {
  const curKey = document.querySelectorAll('.keybord-key');
  curKey.forEach((el) => {
    if (el.getAttribute('data') === e.code || el === e.target) {
      el.classList.remove('active');
      el.classList.remove('hover');
    }
    if (el.getAttribute('data') === 'ShiftLeft') {
      shift = 'off';
      initKeys(lastLanguage);
    }
    if (el.getAttribute('data') === 'ControlLeft') {
      cntrl = 'off';
    }
    if (el.getAttribute('data') === 'AltLeft') {
      alt = 'off';
    }
  });
});
