//All categories
const allLinksEl = categories.querySelectorAll('.item');
console.log('Number of categories:', allLinksEl.length);

//First element

const firstEl = categories.firstElementChild;
console.log("Category:", firstEl.firstElementChild.textContent);

const firstNumEl = firstEl.lastElementChild;
console.log("Elements:", firstNumEl.children.length);


//Second element
const secondEl = firstEl.nextElementSibling ;
console.log("Category:", secondEl.firstElementChild.textContent);

const secondNumEl = secondEl.lastElementChild;
console.log("Elements:", secondNumEl.children.length);


//Last element

const lastEl = categories.lastElementChild;
console.log("Category:", lastEl.firstElementChild.textContent);

const lastNumEl = lastEl.lastElementChild;
console.log("Elements:", lastNumEl.children.length);
