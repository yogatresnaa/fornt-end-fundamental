class judulUtama extends HTMLElement {
  constructor() {
    super();
    console.log("hai");
  }

  connectedCallback() {}

  set judul(judul) {
    this._judul = judul;
    this.render();
  }

  render() {
    this.innerHTML = `<h2>${this._judul}</h2>

      <style>
      h2 {
        color: red;
        margin-bottom:20px;
      }

      img{
        width:500px;
      }
    </style>`;
  }
}

customElements.define("judul-utama", judulUtama);
