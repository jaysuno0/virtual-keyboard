// SASS
import './index.scss';

// COMPONENTS
import header from './components/header/header';
import container from './components/container/container';

container.append(header);
document.querySelector('body').append(container);
