class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>

      * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }

  :host{
  width: 30%;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: white;
}

@media screen and (max-width: 900px) {
  movie-list {
    flex-direction: column;
  }

  :host {
    width: 100%;
  }
}

:host(:hover)
{
  border-radius: 10px;
  transition: cubic-bezier(0.215, 0.61, 0.355, 1) ease-in-out;
  background-color: aqua;
  transform: scale(105%);
  -webkit-transform: scale(105%);
  -moz-transform: scale(105%);
  -ms-transform: scale(105%);
  -o-transform: scale(105%);
}


.fan-art-movie {
  width: 100%;
}

h2 {
  color: rgb(4, 107, 114);
  font-family: sans-serif;
  margin-top: 50px;
  text-align: left;
  border-bottom: 1px solid black;
}

h4{
  font size: 12px;
  color: rgb(4, 107, 114);
  font-family: sans-serif;
  margin-top:10px;
  text-align: left;
  border-bottom: 1px solid black;

}

h2:hover{
  color:white;
}

h4:hover{
  color:white;
}

.movie-info {
  padding: 24px;
}

.movie-info > h2 {
  font-weight: lighter;
}

.movie-info > p {
  margin-top: 10px;
  overflow: hidden;
}
    </style>
    
    
    <img class="fan-art-movie" src=" ${this._movie.Poster}" alt="Fan Art">
     <div class="movie-info">
     <h2>Title : ${this._movie.Title}</h2>
     <h4>Year : ${this._movie.Year}</h4>
     <h4>imdbID :${this._movie.Type}</h4>
     <h4>Type : ${this._movie.imdbID}</h4>
     
     </div>`;
  }
}

customElements.define("movie-item", MovieItem);
