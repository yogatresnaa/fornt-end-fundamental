// Shadow host : Merupakan komponen/node yang terdapat pada regular DOM di mana shadow DOM terlampir pada komponen/node ini.
// Shadow tree : DOM Tree di dalam shadow DOM.
// Shadow boundary : Batas dari shadow DOM dengan regular DOM.

// Shadow root : Root node dari shadow tree.

// =============================================

// Shadow Host atau Node yang berada di dalam DOM Reguler

const divElement = document.createElement("div");

// Element yang berada di dalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "ini merupakan konten di dalam Shadow DOM";

const element = document.createElement("h2");
element.innerHTML = "ini konten kedua yang memekai Shadom dom";

//melampirkan shdow Root pada shadow Host
// mengatur mode shadow dengan nilai Open
const shadowRoot = divElement.attachShadow({ mode: "open" });

shadowRoot.innerHTML += `
<style>
   h1 {
     color: green;
   }

   h2{
     color:blue;
   }
 </style>
`;

// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);
shadowRoot.appendChild(element);

// memesukan element shadow host ke reguler DOM

document.body.appendChild(divElement);
