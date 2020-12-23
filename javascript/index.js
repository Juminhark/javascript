//! 전제조건 : 원본배열을 훼손하지 않는다.

//? Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join();
	console.log(result);
	console.log(fruits);
}

console.clear();
//? Q2. make an array out of a string
{
	const fruits = '🍎, 🥝, 🍌, 🍒';
	const result = fruits.split(',');
	console.log(result);
	console.log(fruits);
}

console.clear();
//? Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const result = array.slice().reverse();
	console.log(result);
	console.log(array);
}

console.clear();
//? Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const result = array.slice(2);

	console.log(result);
	console.log(array);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

console.clear();
//? Q5. find a student with the score 90
{
	const specifier = students.filter((student) => {
		return student.score === 90;
	});

	console.log(specifier);
}

console.clear();
//? Q6. make an array of enrolled students
{
	const result = students.filter((student) => {
		return student.enrolled === true;
	});

	console.log(result);
}

console.clear();
//? Q7. make an array containing only the students' scores
//* result should be: [45, 80, 90, 66, 88]
{
	const result = students.reduce((accumulator, student) => {
		return accumulator.concat(student.score);
	}, []);

	console.log(result);
}

console.clear();
//? Q8. check if there is a student with the score lower than 50
{
	const result = students.filter((student) => {
		return student.score < 50;
	});

	console.log(result);
}

console.clear();
//? Q9. compute students' average score
{
	const result = students.reduce((accumulator, student) => {
		return accumulator + student.score;
	}, 0);

	console.log(result / students.length);
}

console.clear();
//? Q10. make a string containing all the scores
//* result should be: '45, 80, 90, 66, 88'
{
	const result = students.reduce((accumulator, student) => {
		return accumulator.concat(student.score);
	}, []);

	console.log(result.join(', '));
}

console.clear();
//? Bonus! do Q10 sorted in ascending order
//* result should be: '45, 66, 80, 88, 90'
{
	const result = students.reduce((accumulator, student) => {
		return accumulator.concat(student.score);
	}, []);

	console.log(result.sort().join(', '));
}

//* array.sort();
const numberSort = [4, 2, 5, 1, 3];

console.log(numberSort.slice().sort());
console.log(
	numberSort.slice().sort((a, b) => {
		return b - a;
	})
);
console.log(numberSort);

const items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 },
];

// value 기준으로 정렬
const valueItems = items.slice().sort(function (a, b) {
	if (a.value > b.value) {
		return 1;
	}
	if (a.value < b.value) {
		return -1;
	}
	// a must be equal to b
	return 0;
});
console.log(valueItems);

// name 기준으로 정렬
const nameItems = items.slice().sort(function (a, b) {
	var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// 이름이 같을 경우
	return 0;
});
console.log(nameItems);
