import "./judul2.js";
import "./judul.js";
import "./articel-items.js";
import { articl, judul } from "./articel.js";

const containerElement = document.querySelector(".container");
const articleItemElement = document.createElement("article-item");
const judulElement = document.createElement("judul-utama");
judulElement.judul = judul;
articleItemElement.artike = articl;

containerElement.appendChild(judulElement);
containerElement.appendChild(articleItemElement);
