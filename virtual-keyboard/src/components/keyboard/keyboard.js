import { createElement } from '../../assets/js/helpers';
import chars from '../../assets/js/chars';

const keyboard = createElement('div', ['main__keyboard', 'keyboard']);

function createButton(btn) {
  const button = createElement('div', ['btn', 'keyboard__btn']);
  button.textContent = btn.char;

  if (btn.width) button.classList.add(btn.width);
  if (btn.alt) {
    const alt = createElement('p', ['alt-value']);
    alt.textContent = btn.alt;
    button.append(alt);
  }

  keyboard.append(button);
}

chars.en.forEach((char) => createButton(char));

export default keyboard;
