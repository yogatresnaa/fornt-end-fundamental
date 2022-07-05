import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");

  const clubListElement = document.querySelector("club-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  //   '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' + '<div class="club-info">\n' + "<h2>" + name + "</h2>\n" + "<p>" + description + "</p>" + "</div>";

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

// '<h2 class="placeholder">' + message + "</h2>"
