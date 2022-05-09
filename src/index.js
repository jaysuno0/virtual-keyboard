// SASS
import './index.scss';

// COMPONENTS
import container from './components/container/container';
import header from './components/header/header';
import main from './components/main/main';
import textarea from './components/textarea/textarea';
import keyboard from './components/keyboard/keyboard';

container.append(header);
container.append(main);
main.append(textarea);
main.append(keyboard);

document.querySelector('body').append(container);
