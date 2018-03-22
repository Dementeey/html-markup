const btn = document.querySelector(".btn");
// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
const container = document.querySelector(".container");


const toggleBG = () => {
  const newStyle = document.createElement('style');
  newStyle.type = 'text/css';
  newStyle.appendChild(document.createTextNode('\
      .container::before {\
          background-color: #666;\
      }\
      .container::after {\
          background-color: #000;\
      }\
  '));
  document.head.appendChild(newStyle);
}

const toggleBG__2 = () => {
  if (container.classList.contains('Index') === true) {
    container.classList.remove("Index")
    container.classList.add("About");
  } 

}