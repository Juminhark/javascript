//* str.split([separator[, limit]])

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.split(' ')[3]); // "fox"
console.log(str.split('')[8]); // "k"
console.log(str.split('', 5)); // [ 'T', 'h', 'e', ' ', 'q' ]
console.log(str.split()); // ["The quick brown fox jumps over the lazy dog."]

// TODO: array.slice()
