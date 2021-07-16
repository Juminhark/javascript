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

//? Pagination 에서 유용하게 사용
// 1page에 14개를 노출하게 된다면, pages만큼의 page가 필요

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
	const start = index * itemsPerPage;
	const tempItems = items.slice(start, start + itemsPerPage);

	return tempItems;
});

console.log(newItems);
