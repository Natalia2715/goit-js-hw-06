const changeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBg = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.innerHTML = `${getRandomHexColor()}`;
}

changeBtn.addEventListener("click", setBg);




