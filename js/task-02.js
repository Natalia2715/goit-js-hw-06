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
ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.setAttribute("class", "item");
  listarr.push(item);
})

list.append(...listarr);

