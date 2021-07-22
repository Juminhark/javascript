//? Callback Hell

// after 1s first red;
// after 3s second blue;
// after 2s third green;
// in sequence !!

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	setTimeout(() => {
		first.style.color = 'red';

		setTimeout(() => {
			second.style.color = 'blue';

			setTimeout(() => {
				third.style.color = 'green';
			}, 2000);
		}, 3000);
	}, 5000);
});

//? 이런식으로 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 깊어지는 현상

//? 2019년 Promise가 js에 표준처럼 사용되며 이를 이용한 async/await패턴을 사용하며 해소됨
