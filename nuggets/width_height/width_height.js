//? Javascript Nuggets
//? Width / Height - window, any element
//? innerHeight - window
//? innerWidth - window
//? getBoundingClientRect() - any element

console.log('height', window.innerHeight);
console.log('height', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

// .box {
// 	width: 150px;
// 	height: 150px;
// 	background: grey;
// 	margin: 0 auto;
// 	margin-top: 4rem;
// 	/* margin-left: -1rem */
// }

// bottom: 336.5;
// height: 150;
// left: 56.5;
// right: 206.5;
// top: 186.5;
// width: 150;
// x: 56.5;
// y: 186.5;

// .box {
// 	width: 150px;
// 	height: 150px;
// 	background: grey;
// 	/* margin: 0 auto; */
// 	margin-top: 4rem;
// 	margin-left: -1rem;
// }

// bottom: 336.5;
// height: 150;
// left: -6;
// right: 144;
// top: 186.5;
// width: 150;
// x: -6;
// y: 186.5;

//? 위 2개의 css상태에 대한 dimensions 정보를 비교해볼수있는것이
//? vanilla_js 나 react로 client단위를 할때 유용하게 사용된다

btn.addEventListener('click', () => {
	const dimensions = box.getBoundingClientRect();
	console.log(dimensions);
});
