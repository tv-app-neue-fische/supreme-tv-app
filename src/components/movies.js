import './movies.scss';
import { createElement, appendContent } from '../lib/dom';

export function createShows(items) {
  const showContainer = createElement('div', {
    className: 'shows'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innertext: item,
      className: 'tvShow'
    });
    appendContent(showContainer, element);
  });
  return showContainer;
}
