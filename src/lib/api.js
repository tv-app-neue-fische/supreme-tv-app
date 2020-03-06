export async function getTvShows(searchInputValue) {
  const apiKey = '78551e14d7b7b41877a5147de7433017';
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${searchInputValue}`
  );
  const data = await response.json();
  return data.results;
}
