//? syntactic sugar : 기존 문법에 추가하여 간편하게 사용할수있는 api를 추가하는것.

//* 예를 들면 js에서 class는 prototype을 개조하여 사용하는 syntactic sugar

//? async & await
//* clear style or using promise

//? 1. async
function fetchUser() {
	// do network request in 10 secs...
	return 'ellie';
}

const user = fetchUser(); //! 10초 동안 대기하게된다.
console.log(user);

//* Promise
function fetchUser1() {
	return new Promise((resolve, reject) => {
		// do network request in 10 secs...
		resolve('ellie1');
	});
}

const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);

//* async : 사용하면 자동으로 Promise로 return
async function fetchUser2() {
	// do network request in 10 secs...
	return 'ellie2';
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

//? await
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(1000);
	return '🍎';
}

async function getBanana() {
	await delay(1000);
	return '🍌';
}

//! 위는 아래의 상위호환
// function getBanana() {
// 	return delay(3000).then(() => '🍌');
// }

function pickFruits() {
	return getApple().then((apple) => {
		return getBanana().then((banana) => `${apple} + ${banana}`);
	});
}

pickFruits().then(console.log);
//! 이러면 callback hell 과 비슷한 문제점이 생긴다.

async function pickFruits1() {
	const apple = await getApple();
	const banana = await getBanana();

	return `${apple} + ${banana} + 1`;
}

pickFruits1().then(console.log);

//* 병렬처리 : 요건 잘 사용하지않고 아래 api를 사용.
async function pickFruits2() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;

	return `${apple} + ${banana} + 2`;
}

pickFruits2().then(console.log);

//? 3. useful Promise APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]).then((fruits) =>
		fruits.join(' + ')
	);
}
pickAllFruits().then(console.log);

//* 먼저 받아오는 return 부터 전달
function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
