import clubs from "./clubs.js";

// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// DataSource.prototypec.searhClub = function (keyword) {
//   const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not Found`);
//   }
// };

// class DataSource {
//   constructor(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//   }

//   searchClub(keyword) {
//     const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));
//     if (filteredClubs.length) {
//       this.onSuccess(filteredClubs);
//     } else {
//       this.onFailed(`${keyword} is not Found`);
//     }
//   }
// }

class DataSource {
  static searchClub(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=1b25ec02&s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
