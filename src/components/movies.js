import './movies.scss';
import { createElement, appendContent } from '../lib/dom';

export function createShows(props) {
  const showContainer = createElement('div', {
    className: 'shows'
  });

  props.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'tvShow'
    });
    appendContent(showContainer, element);
  });
  return showContainer;
}
