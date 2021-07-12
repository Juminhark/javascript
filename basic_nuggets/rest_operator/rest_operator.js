//? Rest Operator
// gathers/collects items
// destructuring functions
// placement important, careful with same name
// rest when declare function, spread when invoke the function

//* arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfArray] = fruits;

// console.log(first, second); // apple orange
// console.log(restOfArray); // [ 'lemon', 'banana', 'pear' ]

const lemon = restOfArray.find((fruit) => fruit === 'lemon');
// console.log(lemon); // lemon

const copy = [...fruits];
// console.log(copy === fruits);
// console.log(fruits); //! 원본 영향 x

//* objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...restOfObject } = person;
// console.log(job, restOfObject); // developer { name: 'john', lastName: 'smith' }

// console.log(person); //! 원본 영향 x

//* functions
const getAverage = (name, ...scores) => {
	console.log(name); // john

	console.log(scores); // [ 89, 79, 21, 100 ]
	const average =
		scores.reduce((total, item) => {
			return (total += item);
		}, 0) / scores.length;
	console.log(average);
};

getAverage(person.name, 89, 79, 21, 100);

const testScores = [23, 45, 67, 89];
getAverage('jain', ...testScores); //? gathering. collecting : 배열의 item을 풀어서
