class Greeting extends HTMLElement {
  constructor() {
    super();
    // this.innerText = `Hello, macieju`;

    this.shadow = this.attachShadow({ mode: "open" });
    this.text = document.createElement("p");
    this.text.innerHTML = "text shadow dom";
    this.shadow.appendChild(this.text);
  }
  connectedCallback() {
    const tpl = document.querySelector(".tpl-greeting");

    this.text.innerHTML = `<style> span {color: blue } </style>
    <span>text shadow dom odizolowany stylami</span>`;
    //dodanie template skolonwana
    this.shadow.appendChild(tpl.content.cloneNode(true));
  }
}

window.customElements.define("my-greeting", Greeting);
