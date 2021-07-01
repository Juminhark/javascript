const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'anna', age: 25, position: 'designer' },
	{ name: 'peter', age: 30, position: 'the boss' },
	{ name: 'john', age: 26, position: 'intern' },
];

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
