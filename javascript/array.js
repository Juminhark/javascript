'use strict';

//? Array🎉

//? 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//? 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();

//? 3. Looping over an array
//* print all fruits
//* a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

//* b. for of
for (let fruit of fruits) {
	console.log(fruit);
}

//* c. forEach
fruits.forEach((fruit) => console.log(fruit));

//? 4. Addition, deletion, copy
//* push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

//* pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

//* unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

//* shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//? note!! shift, unshift are slower than pop, push
//* splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

//* combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//? 5. Searching
//* indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

//* includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//* lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));

//? 6. sorting : array.sort();
const numberSort = [4, 2, 5, 1, 3];

console.log(numberSort.slice().sort());
console.log(
	numberSort.slice().sort((a, b) => {
		return b - a;
	})
);
console.log(numberSort);

const items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 },
];

//* value 기준으로 정렬
const valueItems = items.slice().sort(function (a, b) {
	if (a.value > b.value) {
		return 1;
	}
	if (a.value < b.value) {
		return -1;
	}
	// a must be equal to b
	return 0;
});
console.log(valueItems);

//* name 기준으로 정렬
const nameItems = items.slice().sort(function (a, b) {
	var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// 이름이 같을 경우
	return 0;
});
console.log(nameItems);
