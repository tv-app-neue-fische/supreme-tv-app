import './app.scss';
import { title } from './components/header';
import { createElement } from './lib/dom';
import Logo from './assets/logotv.svg';
import { searchBar } from './components/search';
//import { shows } from './components/momvies';

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main');
  const titleElement = title('Movie-Maze');
  const logo = createElement('img', { className: 'logo', src: Logo });
  const searchElement = searchBar();

  header.appendChild(logo);
  header.appendChild(titleElement);
  main.appendChild(searchElement);
  return [header, main];
}
