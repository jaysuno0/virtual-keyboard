import { createElement } from '../../assets/js/helpers';
import chars from '../../assets/js/chars';

const keyboard = createElement('div', ['main__keyboard', 'keyboard']);
const buttons = {};
const state = {
  shift: false,
  caps: false,
  ctrl: false,
  alt: false,
  cursor: 0,
  lang: 'ru',
  keyboard: false,
};

function createButton(btn) {
  const button = createElement('div', ['btn', 'keyboard__btn']);
  button.textContent = btn.char;

  if (btn.width) button.classList.add(btn.width);
  if (btn.alt) {
    const alt = createElement('p', ['alt-value']);
    alt.textContent = btn.alt;
    button.append(alt);
  }

  if (btn.code.includes('Lang')
      || btn.code.includes('Backspace')
      || btn.code.includes('Enter')
      || btn.code.includes('Shift')
      || btn.code.includes('Alt')
      || btn.code.includes('Control')
      || btn.code.includes('Meta')
      || btn.code.includes('Arrow')
      || btn.code.includes('Arrow')
      || btn.code.includes('Lock')
      || btn.code.includes('Lock')
      || btn.code.includes('Tab')
      || btn.code.includes('Delete')
  ) button.classList.add('functional');

  buttons[btn.code] = {
    code: btn.code,
    char: btn.char,
    alt: btn.alt,
    btn: button,
  };

  keyboard.append(button);
  state.keyboard = true;
}

function changeLanguage(lang) {
  if (state.keyboard) [...document.querySelectorAll('.keyboard__btn')].forEach((btn) => btn.remove());
  chars[lang].forEach((char) => createButton(char));
  if (state.caps) buttons.CapsLock.btn.classList.add('pressed');
  setupKeyboardListeners();
  localStorage.setItem('lang', lang);
  state.lang = lang;
}

function setState(code) {
  if (code.includes('Shift')) state.shift = true;
  else if (code.includes('Alt')) state.alt = true;
  else if (code.includes('Control')) state.ctrl = true;
  else if (code.includes('Caps')) {
    if (state.caps) state.caps = false;
    else state.caps = true;
  }

  if (state.alt && state.ctrl) {
    if (state.lang === 'en') changeLanguage('ru');
    else changeLanguage('en');
  }
}

function pushKey(code) {
  const textarea = document.querySelector('.main__textarea');
  const currentCursor = textarea.selectionStart;
  const btn = buttons[code];
  let leftPart = textarea.textContent.substring(0, currentCursor);
  let rightPart = textarea.textContent.substring(currentCursor, textarea.textContent.length);

  switch (code) {
    case 'Backspace':
    case 'Delete':
      if (textarea.selectionStart !== textarea.selectionEnd) {
        leftPart = textarea.textContent.substring(0, textarea.selectionStart);
        rightPart = textarea
          .textContent.substring(textarea.selectionEnd, textarea.textContent.length);
      } else if (state.cursor > 0 && code === 'Backspace') {
        leftPart = leftPart.substring(0, leftPart.length - 1);
        state.cursor -= 1;
      } else rightPart = rightPart.substring(1, rightPart.length);
      break;
    case 'Space':
      leftPart += ' ';
      state.cursor += 1;
      break;
    case 'Tab':
      leftPart += '   ';
      state.cursor += 3;
      break;
    case 'Enter':
      leftPart += '\n';
      state.cursor = leftPart.length;
      break;
    case 'Lang':
      if (state.lang === 'en') changeLanguage('ru');
      else changeLanguage('en');
      break;
    case 'ArrowLeft':
      state.cursor -= 1;
      break;
    case 'ArrowRight':
      state.cursor += 1;
      break;
    case 'ArrowDown':
    case 'ArrowUp':
      break;
    case 'MetaLeft':
    case 'MetaRight':
    case 'AltRight':
    case 'AltLeft':
    case 'ControlRight':
    case 'ControlLeft':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'CapsLock':
      setState(code);
      break;
    default: {
      if (state.caps && state.shift) {
        leftPart += btn.char;
      } else if (state.caps || state.shift) {
        if (btn.alt) leftPart += btn.alt;
        else leftPart += btn.char.toUpperCase();
      } else leftPart += btn.char;
      state.cursor += 1;
    }
  }

  if (code !== 'CapsLock') btn.btn.classList.add('pressed');
  else btn.btn.classList.toggle('pressed');

  textarea.textContent = leftPart + rightPart;
  textarea.focus();
  textarea.selectionStart = state.cursor;
}

function unsetState(code) {
  if (code.includes('Shift')) state.shift = false;
  else if (code.includes('Alt')) state.alt = false;
  else if (code.includes('Control')) state.ctrl = false;
}

function unpushKey(code) {
  if (!code.includes('Caps')) {
    if (buttons[code].btn.classList.contains('functional')) unsetState(code);
    buttons[code].btn.classList.remove('pressed');
  }
}

function setupKeyboardListeners() {
  Object.keys(buttons).forEach((key) => {
    const btn = buttons[key];

    btn.btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      pushKey(btn.code);
    });
    btn.btn.addEventListener('mouseleave', () => {
      unpushKey(btn.code);
    });
    btn.btn.addEventListener('mouseup', () => {
      unpushKey(btn.code);
    });
  });
}

setTimeout(() => {
  document.querySelector('.main__textarea').addEventListener('click', (event) => {
    state.cursor = event.target.selectionStart;
  });
}, 0);

document.addEventListener('keydown', (event) => {
  if (event.code !== 'F5'
  && event.code !== 'F12'
  && event.code !== 'ArrowUp'
  && event.code !== 'ArrowDown'
  && event.code !== 'ArrowLeft'
  && event.code !== 'ArrowRight') event.preventDefault();

  if (buttons[event.code]) pushKey(event.code);
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (buttons[event.code]) unpushKey(event.code);
});

if (localStorage.getItem('lang')) changeLanguage(localStorage.getItem('lang'));
else changeLanguage('ru');

export default keyboard;
