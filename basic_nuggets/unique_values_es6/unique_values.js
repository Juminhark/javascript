//? Unique Values array
//? 1. map - get all instances
//? 2. new Set - narrow down
//? 3. ['all', ...] - turn it back to array

const menu = [
	{
		name: 'pancakes',
		category: 'breakfast',
	},
	{
		name: 'burger',
		category: 'lunch',
	},
	{
		name: 'steak',
		category: 'dinner',
	},
	{
		name: 'bacon',
		category: 'breakfast',
	},
	{
		name: 'eggs',
		category: 'breakfast',
	},
	{
		name: 'pasta',
		category: 'dinner',
	},
];

// 1.
// const categoryArray = menu.map((item) => item.category);
// console.log(categoryArray);

// 2.
// const categorySet = new Set(categoryArray);
// console.log(categorySet);

// 3.
const categoryUniqueArray = [
	'all',
	...new Set(menu.map((item) => item.category)),
];
console.log(categoryUniqueArray);

const result = document.querySelector('.result');
result.innerHTML = categoryUniqueArray
	.map((category) => {
		return `<button>${category}</button>`;
	})
	.join('');
