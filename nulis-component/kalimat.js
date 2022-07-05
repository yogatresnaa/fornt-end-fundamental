class BikinKalimat extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

        <style>
        .sebuah{
            width:200px;
            border: 1px solid red;
            padding:20px;
            margin:auto;

        }  
        </style>
        
        <div class="sebuah">
        <h2> INI ADALAH JUDUL </h2>
        <p> ini adalah kumpulan kalimat bermakna </p>
        </div>
        `;
  }
  attributeChangedCallback() {}
  static get observedAttributes() {}
}

customElements.define('kalimat-baru', BikinKalimat);
