//? 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(roots); // [ 1, 2, 3 ]

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'anna', age: 25, position: 'designer' },
	{ name: 'peter', age: 30, position: 'the boss' },
	{ name: 'john', age: 26, position: 'intern' },
];

const ages = people.map((person) => person.age);

console.log(ages);
