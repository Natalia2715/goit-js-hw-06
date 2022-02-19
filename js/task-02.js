const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
const listarr = [];
for (const item of ingredients) {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.setAttribute("class", "item");
  listarr.push(ingredient);
}
list.append(...listarr);

