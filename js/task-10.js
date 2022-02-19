const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const controls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = controls.firstElementChild.value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxArr.push(div);
  }
  divBoxes.append(...boxArr);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

