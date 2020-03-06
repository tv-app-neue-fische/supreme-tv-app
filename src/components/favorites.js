import './favorites.scss';
import { createElement } from '../lib/dom';

export function favorites(items) {
  const favoritesContainer = createElement('div', {
    className: 'favouriteShows'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innertext: item,
      className: 'favoriteTvShows'
    });
    favoritesContainer.appendChild(element);
  });
  return favoritesContainer;
}
