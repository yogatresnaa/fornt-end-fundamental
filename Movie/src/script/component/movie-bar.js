class MovieBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
 * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
    
    :host {
  width:80%;
  height: 500px;
  display: block;
  background-image: url(./src/asset/3.jpeg);
  background-size: cover;
  padding: 16px;
  margin: auto;

  color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(4, 150, 187, 0.2);
}

:host{
  position:relative;
  left:10%;
  top:-30%;
}

h1{
  color:maroon;
  padding:30px;
  font-weight:bold;
  background-color:white;
}
h3{
  color:maroon;
  padding:30px;
  margin-top:-60px;
  font-size:12px;

}


</style>
    
<h1>MOVIESINEMA</h1>
<h3>Kumpulan Film Terbaik Ada Disni</h3>

`;
  }
}
customElements.define("mov-bar", MovieBar);
