//* getElementById
// const grandparent = document.getElementById('grandparent-id');

// const changeColor = (element, color = '#333') => {
// 	element.style.backgroundColor = color;
// };

const changeColor = (element) => {
	element.style.backgroundColor = '#333';
};

// changeColor(grandparent);

//* getElementsByClassName : return collection
// const parents = Array.from(document.getElementsByClassName('parent'));

// parents.forEach((parent) => {
// 	changeColor(parent);
// });

//* querySelector : 1개만 선택
// const grandparent = document.querySelector('#grandparent-id');
// changeColor(grandparent);

// const parent = document.querySelector('.parent');
// changeColor(parent);

//* querySelectorAll
// const parents = document.querySelectorAll('.parent');

// parents.forEach((parent) => {
// 	changeColor(parent);
// });

//* Selecting Children
// const grandparent = document.querySelector('.grandparent');
// const parents = Array.from(grandparent.children);
// const parentOne = parents[0];
// const children = parentOne.children;

// parents.forEach((parent) => {
// 	changeColor(parent);
// });

// changeColor(children[0], '#383');

//* Selecting Descendants
// const grandparent = document.querySelector('.grandparent');

// const childOne = grandparent.querySelector('.child');
// changeColor(childOne);

// const children = grandparent.querySelectorAll('.child');
// children.forEach(changeColor);

//* div id 로 querySelector 하려며 '#id-name'
//* div class 로 querySelector 하려며 '.class-name'

//* Selecting Parents
// const childOne = document.querySelector('#child-one');
// changeColor(childOne);

// const parent = childOne.parentElement;
// changeColor(parent);

// const grandparent = parent.parentElement;
// changeColor(grandparent);

//* Selecting Ancestors
// const childOne = document.querySelector('#child-one');
// const grandparent = childOne.closest('.grandparent');
// changeColor(grandparent);

//* nextElementSibling
const childOne = document.querySelector('#child-one');
// changeColor(childOne);

const childTwo = childOne.nextElementSibling;
// changeColor(childTwo);

//* previousElementSibling
changeColor(childTwo.previousElementSibling);