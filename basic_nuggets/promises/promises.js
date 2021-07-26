//? Javascript Nuggets - Promises
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

//? async / await
//? consume / use promises

//? Pending(대기), Rejected(거부), FulFilled(이행)

const value = 2;

const promise = new Promise((resolve, reject) => {
	const random = Math.floor(Math.random() * 3);

	console.log(random);

	if (random === value) {
		resolve('you guessed correctly'); // then
	} else {
		reject('wrong number'); // error;
	}
});

console.log(promise);

promise.then((data) => console.log(data)).catch((error) => console.log(error));

//? 미리 대기자를 만들어 놓고 비동기 연산이 종료된 이후에
//? 결과값이나 실패 이유를 처리하기 위한 장치
