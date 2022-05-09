import { createElement } from '../../assets/js/helpers';

const header = createElement('header', ['header']);
const h1 = createElement('h1', ['header__title']);
const headerDescription = createElement('p', ['header__description']);
const headerLink = createElement('a', ['link', 'header__link']);

h1.textContent = 'virtual keyboard';

headerDescription.textContent = 'project for ';
headerDescription.append(headerLink);

headerLink.textContent = 'Rolling Scopes School';
headerLink.setAttribute('href', 'https://rs.school/');
headerLink.setAttribute('target', 'blank');

header.append(h1);
header.append(headerDescription);

export default header;
