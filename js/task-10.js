const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const controls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = controls.firstElementChild.value;
  createBoxes(amount);
  controls.firstElementChild.value = '';
  
  }
 
function createBoxes(amount) {
  let basicSize = 30;
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1) {
    
    const div = document.createElement("div");
    
    div.style.width = `${basicSize}px`;
    div.style.height = `${basicSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    // basicSize += 10;
    boxArr.push(div);
    divBoxes.append(...boxArr);
    if (div.previousSibling != null) {
      div.style.width = `${Number.parseInt(div.previousSibling.style.width) + 10}px`;
      div.style.height = `${Number.parseInt(div.previousSibling.style.height) + 10}px`;
    }
  }
  
 
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  controls.firstElementChild.value = '';
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

