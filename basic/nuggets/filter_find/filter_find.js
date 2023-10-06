//? Filter
//? returns a new array, can manipulate the size of array(unlike map),
//? returns based on condition
//? if no match - [] empty array

//? Find
//? returns single instance
//? returns first match, if no match - undefined

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'jerkin', age: 30, position: 'the boss' },
	{ name: 'anna', age: 35, position: 'intern' },
];

const fruits = ['orange', 'pear', 'lemon'];

//* filter
const youngPeople = people.filter((person) => {
	return person.age < 30;
});

// console.log(youngPeople);
// console.log(people);

const developers = people.filter((person) => {
	return person.position === 'developer';
});

// console.log(developers);
// console.log(people);

//* no match
const seniorDev = people.filter((person) => {
	return person.position === 'senior dev';
});

// console.log(seniorDev); // []

//* find
const peter = people.find((person) => person.name === 'peter');
// console.log(peter);
const fruit = fruits.find((fruit) => fruit === 'lemon');
// console.log(fruit);

//* no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson); // undefined

//* multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); // { name: 'bob', age: 20, position: 'developer' }

const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position); // designer
console.log(anna[0].position); // intern
