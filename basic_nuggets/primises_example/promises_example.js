//? Javascript Nuggets - Promises Example
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

//? .first - after 1s first red;
//? .second - after 3s second blue; 4s
//? .third - after 2s third green; 6s

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	// addColor(1000, 'first', 'red').then().catch((err) => console.log(err));
	addColor(1000, '.first', 'red', 'hello')
		.then((data) => addColor(3000, '.second', 'blue', data))
		.then((data) => {
			console.log(data + ' third');
			addColor(2000, '.third', 'green');
		})
		.catch((err) => console.log(err));
});

function addColor(time, selector, color, data) {
	const element = document.querySelector(selector);
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve(data); // 이거 없으면 fulfilled가 아님
			}, time);
		} else {
			reject(`There is no such element :  "${selector}"`);
		}
	});
}
