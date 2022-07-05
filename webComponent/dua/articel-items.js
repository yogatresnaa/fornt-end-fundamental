class ArticleItem extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!");
  }

  connectedCallback() {
    console.log("connected!");
  }

  set artike(artice) {
    this._article = artice;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="feature-image" src=" ${this._article.featuredImage}">
      <div class = "article-info">
      <h2><a href="${this._article.id}"> ${this._article.title}</a></h2>
      <p>${this._article.description}</p>
      </div>

      <style>
      img{
        width:100%;
      }
      </style>
      `;
  }
}

customElements.define("article-item", ArticleItem);
