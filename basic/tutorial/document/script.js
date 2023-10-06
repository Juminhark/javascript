//* getElementById
// const grandparent = document.getElementById('grandparent-id');

// const changeColor = (element, color = '#333') => {
// 	element.style.backgroundColor = color;
// };

// const changeColor = (element) => {
// 	element.style.backgroundColor = '#333';
// };

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

//! id : '#id-name'
//! class : '.class-name'

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
// const childOne = document.querySelector('#child-one');
// changeColor(childOne);

// const childTwo = childOne.nextElementSibling;
// changeColor(childTwo);

//* previousElementSibling
// changeColor(childTwo.previousElementSibling);

//* createElement
// const grandparent = document.querySelector('.grandparent');
// const grandparent = document.getElementById('grandparent-id');
// const createParent = document.createElement('div');
// createParent.classList.add('parent');

// createParent.innerHTML = `<div class="child"></div>
// 				<div class="child"></div>`;

// grandparent.appendChild(createParent);

//* Adding Elements
// const childOne = document.querySelector('#child-one');
// childOne.append('Hello');

//* Creating Elements
// const childTwo = childOne.nextElementSibling;
// const div = document.createElement('div');

//* Modifying Element Text
// div.innerText = 'Hello World!';
// div.textContent = 'Hello ';

// childTwo.append(div);

// const divText = document.querySelector('div');

// console.log(divText.textContent);
// console.log(childOne.innerText);
// console.log(childTwo.innerHTML);

// childTwo.innerHTML = '<strong>Hello World Strong</strong>';
// console.log(childTwo.innerHTML);

// const strong = document.createElement('strong');
// strong.innerText = 'Hello World Strong2';

// childTwo.append(strong);

// console.log(childTwo.innerHTML);

//* Removing Elements
// strong.remove();

// console.log(childTwo.innerHTML);

// const divStrong = document.querySelector('strong');

// childTwo.removeChild(divStrong);

//* Modifying Element Attributes
// const childOne = document.querySelector('.child');
// console.log(childOne.getAttribute('id')); // child-one
// childOne.setAttribute('id', 'asdasd');

// const parent = document.querySelector('.parent');
// console.log(parent.innerHTML);

// childOne.id = 'child-one';

// console.log(parent.innerHTML);

// childOne.removeAttribute('id');
// console.log(parent.innerHTML);

//* Modifying Data Attributes
// const childTwo = document.querySelector('#child-two');
// console.log(childTwo.dataset); // DOMStringMap {test: "this is a test", longerName: "asdasd"}
// console.log(childTwo.dataset.test); // this is a test
// console.log(childTwo.dataset.longerName); // asdasd

// childTwo.dataset.newName = 'hi';

// const parent = document.querySelector('.parent');
// console.log(parent.innerHTML);

//* Modifying Element Classes
// const childOne = document.querySelector('#child-one');

// childOne.classList.add('new-class');

// const parent = document.querySelector('.parent');
// console.log(parent.innerHTML);

// childOne.classList.remove('new-class');
// console.log(parent.innerHTML);

// childOne.classList.toggle('h3', true);
// childOne.classList.toggle('h3', false);
// console.log(parent.innerHTML);

//* Modifying Element Style
const childOne = document.querySelector('#child-one');

childOne.innerText = 'hello';

// childOne.style.color = 'red';
childOne.style.background = 'red';
