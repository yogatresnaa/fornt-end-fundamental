class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
  max-width: 600px;
  box-shadow: 0 4px 8px 0 rgba(4, 150, 187, 0.2);
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: row-reverse;
  top: 10px;
  background-color: white;
  margin: auto;
}

.search-container > input {
  width: 75%;
  padding: 16px;
  font-weight: bold;
}

.search-container > input:focus::placeholder {
  font-weight: bold;
}

.search-container > input::placeholder {
  color: cornflowerblue;
  font-weight: normal;
}

.search-container > button {
  width: 23%;
  cursor: pointer;
  margin-right: auto;
  padding: 16px;
  background-color: black;
  color: white;
  border: 0;
  border-radius: 10px;
  text-transform: uppercase;
}

 button(:hover) {
  cursor: pointer;
  background-color: grey;
}

@media screen and (max-width: 550px) {
  .search-container {
    flex-direction: column;
    position: static;
  }

  .search-container > input {
    width: 100%;
    margin-bottom: 12px;
  }

  .search-container > button {
    width: 100%;
  }
}

    </style>
    
    
    <div id="search-container" class="search-container">
        <input placeholder="Cari Film" id="searchElement" type="search" />
        <button id="searchButtonElement" type="submit">Cari Film</button>
      </div>`;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
