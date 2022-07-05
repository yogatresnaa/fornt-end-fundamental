class ClubItem extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "open" });
  }

  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = `
    <style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

   :host {
  display: block;
  margin-bottom: 18px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  background-color:white;
}

.fan-art-club {
  width: 70%;
  object-fit: cover;
  object-position: center;
}
.fan-art-club img{
  width:100%;
}

.club-info {
  padding: 24px;
}

.club-info > h2 {
  font-weight: lighter;
}



.club-info > p {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10; /* number of lines to show */
}
    </style>



    <img class="fan-art-club" src=${this._club.Poster} alt="fan Art">
      <div class="club-info">
      <h2> ${this._club.Title} </h2> 
      <p> ${this._club.Type} </p> 
      </div>`;
  }
}

customElements.define("club-item", ClubItem);
