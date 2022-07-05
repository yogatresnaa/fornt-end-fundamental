import "./club-item.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "open" });
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  renderError(message) {
    this._shadowDOM.innerHTML = `
    <style>
  .placeholder {
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
    
    `;
    this._shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  }
  render() {
    this._shadowDOM.innerHTML = "";
    this._clubs.forEach((club) => {
      const clubItemelement = document.createElement("club-item");
      clubItemelement.club = club;
      this._shadowDOM.appendChild(clubItemelement);
    });
  }
}

customElements.define("club-list", ClubList);
