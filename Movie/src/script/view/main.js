import "../component/movie-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (result) => {
    clubListElement.movies = result;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
