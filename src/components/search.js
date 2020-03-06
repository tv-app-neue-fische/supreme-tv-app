import './search.scss';
import { createElement, appendContent } from '../lib/dom';

export function searchBar() {
  const container = createElement('div', { className: 'searchBarContainer' });
  const element = createElement('input', {
    className: 'searchBar',
    placeholder: 'Enter TV Show',
    type: 'search'
  });
  appendContent(container, element);

  return container;
}
