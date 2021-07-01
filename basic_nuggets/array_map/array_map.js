//? Array.prototype.map()

//? return a new array
//? does not change the size of original array (unlike filter)
//? uses values from original array when making new one

//? 원본 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열을 리턴
//? 원본 배열은 바뀌기 않는다

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

// console.log(roots); // [ 1, 2, 3 ]

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'anna', age: 25, position: 'designer' },
	{ name: 'peter', age: 30, position: 'the boss' },
	{ name: 'john', age: 26, position: 'intern' },
];

const getAges = (person) => person.age;
const ages = people.map(getAges);

// console.log(ages); // [ 20, 25, 30, 26 ]

const newPeople = people.map((item) => {
	return {
		firstName: item.name.toUpperCase(),
		oldAge: item.age + 20,
	};
});

// console.log(newPeople);

// map.html
const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
