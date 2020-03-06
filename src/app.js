import './app.scss';
import { title } from './components/header';
import { createElement, appendContent } from './lib/dom';
import Logo from './assets/logotv.svg';
import { searchBar } from './components/search';

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main');
  const titleElement = title('Movie-Maze');
  const logo = createElement('img', { className: 'logo', src: Logo });
  const searchElement = searchBar();

  appendContent(header, [logo, titleElement]);
  appendContent(main, searchElement);

  return [header, main];
}
