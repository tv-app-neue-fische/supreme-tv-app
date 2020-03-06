import './favorites.scss';
import { createElement, appendContent } from '../lib/dom';

export function favorites(items) {
  const favoritesContainer = createElement('div', {
    className: 'favouriteShows'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innertext: item,
      className: 'favoriteTvShows'
    });
    appendContent(favoritesContainer, element);
  });
  return favoritesContainer;
}
