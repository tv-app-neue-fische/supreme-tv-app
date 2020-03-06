import './search.scss';
import { createElement } from '../lib/dom';

export function searchBar() {
  const container = createElement('div', { className: 'searchBarContainer' });
  const element = createElement('input', {
    className: 'searchBar',
    placeholder: 'Enter TV Show',
    type: 'search'
  });
  container.appendChild(element);

  return container;
}
