const decrementButton = document.querySelector ('[data-action="decrement"]');
const incrementButton = document.querySelector ('[data-action="increment"]');
const valueEl = document.querySelector ('#value');


let curentValueEl = 0; 

decrementButton.addEventListener('click', () => {
    curentValueEl -= 1; 
    valueEl.textContent = curentValueEl;
})

incrementButton.addEventListener('click', () => {
    curentValueEl += 1; 
    valueEl.textContent = curentValueEl;
})