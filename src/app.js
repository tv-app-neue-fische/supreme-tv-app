import './app.scss';
import { title } from './components/header';
import { createElement, appendContent } from './lib/dom';
import Logo from './assets/logotv.svg';
import { searchBar } from './components/search';
import { getTvShows } from './lib/api';
import { createShows } from './components/movies';

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main');
  const titleElement = title('Movie-Maze');
  const logo = createElement('img', { className: 'logo', src: Logo });
  const searchElement = searchBar({
    value: sessionStorage.getItem('searchValue')
  });

  appendContent(header, [logo, titleElement]);
  appendContent(main, searchElement);

  let searchResults = null;
  async function setSearchResults() {
    const filteredShows = await getTvShows(searchElement.value);
    searchResults = createShows({ items: filteredShows });
    appendContent(main, searchResults);
  }

  setSearchResults();
  searchElement.addEventListener('input', event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
