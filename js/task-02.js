const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const createIngredList = ingredients => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');

    return listItem;
  });
}
const items = createIngredList(ingredients);
ingredientsList.append(...items);
console.log(ingredients);
console.log(ingredientsList);


