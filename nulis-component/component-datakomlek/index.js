import './article-item.js';
import articles from './article.js';

const containerElement = document.querySelector('.container');

const articleItemElement = document.createElement('article-item');
articleItemElement.articl = articles;

containerElement.appendChild(articleItemElement);
