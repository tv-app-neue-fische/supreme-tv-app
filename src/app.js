import './app.scss';
import { title } from './components/header';
import { createElement } from './lib/dom';

export function app() {
  const header = createElement('header', { className: 'header' });
  const titleElement = title('Movie-Maze');
  header.appendChild(titleElement);
  return header;
}
