import './search.scss';
import { createElement, appendContent } from '../lib/dom';

export function searchBar(props) {
  const container = createElement('div', { className: 'searchBarContainer' });
  const element = createElement('input', {
    className: 'searchBar',
    placeholder: 'Enter TV Show',
    type: 'search',
    value: props.value
  });
  appendContent(container, element);

  return container;
}
