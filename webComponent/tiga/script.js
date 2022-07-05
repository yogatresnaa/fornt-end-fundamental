import "./article-list.js";
import articles from "./article.js";

const articleListElement = document.createElement("article-list");
articleListElement.artikel = articles;

document.body.appendChild(articleListElement);
