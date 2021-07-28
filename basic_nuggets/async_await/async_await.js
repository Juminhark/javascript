//? Async Await
//? async must be present, always returns a promise
//? await waits till promise is settled(안정된)
//? error handling - try / catch block

// const example = async () => {
// 	return 'hello there';
// };

// console.log(example()); // Promise {<fulfilled>: "hello there"}

// async function someFunc() {
// 	const result = await example();
// 	console.log(result);
// 	console.log('hello world');
// }

// someFunc(); // hello there

const users = [
	{ id: 1, name: 'john' },
	{ id: 2, name: 'susan' },
	{ id: 3, name: 'anna' },
];

const articles = [
	{ userId: 1, articles: ['one', 'two', 'three'] },
	{ userId: 2, articles: ['four', 'five'] },
	{ userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

//? 요 아래꺼가 최근 많이 사용하는 문법

const getData = async (name) => {
	try {
		const user = await getUser(name);
		const articles = await getArticles(user.id);
		console.log(articles);
	} catch (error) {
		console.log(error);
	}
};
getData('susan');

// 위랑 같지만 old
// getUser('susan')
// 	.then((user) => getArticles(user.id))
// 	.then((articles) => console.log(articles))
// 	.catch((err) => console.log(err));

function getUser(name) {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.name === name);

		if (user) {
			return resolve(user);
		} else {
			reject(`No such user with name : ${name}`);
		}
	});
}

function getArticles(userId) {
	return new Promise((resolve, reject) => {
		const userArticles = articles.find((user) => user.userId === userId);

		if (userArticles) {
			return resolve(userArticles.articles);
		} else {
			reject(`Wrong ID`);
		}
	});
}
