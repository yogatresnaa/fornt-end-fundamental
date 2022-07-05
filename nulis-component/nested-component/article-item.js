class ArticleItem extends HTMLElement {
  connectedCallback() {}
  set article(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class = "featured-image" src="${this._articles.featuredImage}" alt="">
     <div class="article-info">
     <h2><a href="${this._articles.id}">${this._articles.title}</a></h2>
     <p>${this._articles.description}</p>
     
     </div>
      `;
  }
}

customElements.define('article-item', ArticleItem);
