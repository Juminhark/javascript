//? Rest Operator
// gathers/collects items
// destructuring functions
// placement important, careful with same name
// rest when declare function, spread when invoke the function

//* arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfArray] = fruits;

console.log(first, second); // apple orange
console.log(restOfArray); // [ 'lemon', 'banana', 'pear' ]

const lemon = restOfArray.find((fruit) => fruit === 'lemon');
console.log(lemon); // lemon

//* objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...restOfObject } = person;
console.log(job, restOfObject); // developer { name: 'john', lastName: 'smith' }

//* functions

const copy = [...fruits];
console.log(copy);
