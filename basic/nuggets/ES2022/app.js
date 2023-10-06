//? Javascript Nuggets
//? ECMAScript 2022
//? at() - takes integer and returns items at that index - string, array or object

//? Top Level Await - Basic example
// https://v8.dev/features/top-level-await
import fetchTabs from './fetchTabs.js';
const tabs = await fetchTabs();
console.log(tabs);

const scores = [99, 90, 100];

const oldLast = scores[scores.length - 1];

console.log(oldLast);

//? at()
//? -1, -2 ... = get item from end
//? 0, 1, 2 ... = get item from start

const newLast = scores.at(-2);
console.log(newLast);

//? 배열말고도 사용가능하다

const channel = 'zillow';
console.log(channel.at(1));

// const fetchData = async () => {
// 	const resp = await fetch('https://www.course-api.com/react-tabs-project');
// 	const data = await resp.json();

// 	console.log(data);
// };
// fetchData();

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);
