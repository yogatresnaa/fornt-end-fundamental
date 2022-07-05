import clubs from "./movie.js";

class DataSource {
  static searchMovie(keyword) {
    // return new Promise((resolve, reject) => {
    //   const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

    //   if (filteredClubs.length) {
    //     resolve(filteredClubs);
    //   } else {
    //     reject(`${keyword} is not found`);
    //   }
    // });
    return fetch(`http://www.omdbapi.com/?apikey=1b25ec02&s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((reponseJson) => {
        if (reponseJson.Search) {
          return Promise.resolve(reponseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
