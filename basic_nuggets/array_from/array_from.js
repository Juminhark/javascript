// Array.from - NOT ON PROTOTYPE
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const text = document.querySelectorAll('.text');

// . : class

// console.log(text);
const newText = Array.from(text).find((item) => item.textContent === 'person');
console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
	// (value, index)
	return index;
});

const itemsPerPage = 10;
const pages = items.length / itemsPerPage;

console.log(pages);
