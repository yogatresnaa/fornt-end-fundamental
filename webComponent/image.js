// class ImageFigure extends HTMLElement {
//   constructor() {
//     super();
//     console.log("constructed!");
//   }

//   connectedCallback() {
//     console.log("connected!");
//   }
//   disconnectedCallback() {
//     console.log("disconnected!");
//   }

//   adoptedCallback() {
//     console.log("adopted!");
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(`Attribute : ${name} changed!`);
//   }
//   static get observedAttributes() {
//     return ["caption"];
//   }
// }

// customElements.define("image-figure", ImageFigure);

// ====================================

class ImageFigure extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.src = this.getAttribute("src");
    this.alt = this.getAttribute("alt");
    this.caption = this.getAttribute("caption");
    // this.s = this.getAttribute("s");
    // this.a = this.getAttribute("a");
    // this.c = this.getAttribute("c");
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `

         <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
 
        figure > img {
          max-width: 220px;
        }
 
        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>

      
      <figure>
       <img src="${this.src}"
           alt="${this.alt}">
       <figcaption>${this.caption}</figcaption>
       </figure>

       


    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
