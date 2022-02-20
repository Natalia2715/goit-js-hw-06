const changeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBg = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.innerHTML = `${color}`;
}

changeBtn.addEventListener("click", setBg);




