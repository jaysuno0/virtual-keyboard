import { createElement } from '../../assets/js/helpers';

const wrapper = createElement('div', ['main__textarea-wrapper']);
const langInfo = createElement('p', ['textarea__lang-info']);
const textarea = createElement('textarea', ['main__textarea', 'textarea']);

langInfo.textContent = '(Windows) english ⇄ русский: "ALT + CTRL" | "⇄"';

wrapper.append(langInfo);
wrapper.append(textarea);

export default wrapper;
