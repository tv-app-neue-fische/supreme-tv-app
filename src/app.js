import './app.scss';
import { title } from './components/header';
import { createElement } from './lib/dom';
import Logo from './assets/logotv.svg';

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main');
  const titleElement = title('Movie-Maze');
  const logo = createElement('img', { className: 'logo', src: Logo });

  header.appendChild(logo);
  header.appendChild(titleElement);
  return [header, main];
}
