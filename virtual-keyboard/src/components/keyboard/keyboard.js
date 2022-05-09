import { createElement } from '../../assets/js/helpers';
import chars from '../../assets/js/chars';

const keyboard = createElement('div', ['main__keyboard', 'keyboard']);
const buttons = {};

function createButton(btn) {
  const button = createElement('div', ['btn', 'keyboard__btn']);
  button.textContent = btn.char;

  if (btn.width) button.classList.add(btn.width);
  if (btn.alt) {
    const alt = createElement('p', ['alt-value']);
    alt.textContent = btn.alt;
    button.append(alt);
  }

  if (btn.code.includes('lang')
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
      || btn.code.includes('Del')
  ) button.classList.add('functional');

  keyboard.append(button);

  buttons[btn.code] = {
    char: btn.char,
    alt: btn.alt,
    btn: button,
  };
}

chars.ru.forEach((char) => createButton(char));

document.addEventListener('keydown', (event) => {
  buttons[event.code].btn.classList.add('pressed');
});

document.addEventListener('keyup', (event) => {
  buttons[event.code].btn.classList.remove('pressed');
});

export default keyboard;
