import './movies.scss';
import { createElement } from '../lib/dom';

export function shows(items) {
  const showContainer = createElement('div', {
    className: 'shows'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innertext: item,
      className: 'tvShow'
    });
    showContainer.appendChild(element);
  });
  return showContainer;
}
