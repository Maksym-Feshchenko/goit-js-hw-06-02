const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const setListEL = ingredients.map (el => {
  const listEL = document.createElement('li');
  listEL.classList.add('item');
  listEL.textContent = el;

  return listEL;
});



const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...setListEL); 

console.log(setListEL);
  
console.log(ingredients);



