import "@babel/polyfill";

import './style.scss';

import codeURL from "./img.jpg";

const img = document.createElement("img");
img.src = codeURL;
img.style = "background: #2B3A42; padding: 20px";
img.width = 100;
document.body.appendChild(img);


let txt = document.getElementById("txts");
const string = 'es8'.padStart(14, 'wow');
txt.innerText = string;
console.log(txt);

// dynamic import
const button = document.createElement("button");
button.textContent = 'Open new chunk...';
document.body.appendChild(button);

button.onclick = () => {
  import(/* webpackChunkName: "newFile" */ "./newFile").then(file => {
    file.init
  });
};
