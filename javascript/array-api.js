//! 전제조건 : 원본배열을 훼손하지 않는다.

//? Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join();

	console.log(result);
	console.log(fruits);
}

// console.clear();
//? Q2. make an array out of a string
{
	const fruits = '🍎, 🥝, 🍌, 🍒';
	const result = fruits.split(', ');

	console.log(result);
	console.log(fruits);
}

// console.clear();
//? Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const result = array.slice().reverse();

	console.log(result);
	console.log(array);
	//! reverse() : 원본배열도 반전.
}

// console.clear();
//? Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const result = array.slice(2);

	console.log(result);
	console.log(array);
}

{
	const array = [1, 2, 3, 4, 5];
	array.splice(0, 2);

	console.log(array);
	//! 원본배열 훼손
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

// console.clear();
//? Q5. find a student with the score 90
{
	const result = students.filter((student) => student.score === 90);
	console.log(result);

	//! filter은 조건을 만족하는 배열을 return한다. 따라서 특정 1인을 찾는 find()가 적당.
}

{
	//* 풀이
	const specifier = students.find((student) => student.score === 90);
	console.log(specifier);
}

// console.clear();
//? Q6. make an array of enrolled students
{
	const result = students.filter((student) => student.enrolled === true);
	console.log(result);
}

// console.clear();
//? Q7. make an array containing only the students' scores
//* result should be: [45, 80, 90, 66, 88]
{
	const result = students.reduce((accumulator, student) => {
		return accumulator.concat(student.score);
	}, []);

	console.log(result);
}

{
	//* 풀이
	const result = students.map((student) => student.score);
	console.log(result);
}

// console.clear();
//? Q8. check if there is a student with the score lower than 50
{
	const result = students.filter((student) => student.score < 50);
	console.log(result);

	//! check : boolean => true || false
}

{
	//* 풀이
	const result = students.some((student) => student.score < 50);
	console.log(result);
}

{
	//* 풀이
	const result = !students.every((student) => student.score >= 50);
	console.log(result);
}

// console.clear();
//? Q9. compute students' average score
{
	const result = students.reduce((accumulator, student) => {
		return accumulator + student.score;
	}, 0);

	console.log(result / students.length);
}
//! reduceRight : index reverse

// console.clear();
//? Q10. make a string containing all the scores
//* result should be: '45, 80, 90, 66, 88'
{
	const result = students.reduce((accumulator, student) => {
		return accumulator.concat(student.score);
	}, []);

	console.log(result.join(', '));
}

{
	//* 풀이
	const result = students.map((student) => student.score).join(', ');
	console.log(result);
}

// console.clear();
//? Bonus! do Q10 sorted in ascending order
//* result should be: '45, 66, 80, 88, 90'
{
	const result = students
		.reduce((accumulator, student) => {
			return accumulator.concat(student.score);
		}, [])
		.sort()
		.join(', ');

	console.log(result);
}

{
	//* 풀이
	const result = students
		.map((student) => student.score)
		.sort()
		.join(', ');
	console.log(result);
}
//! descending order : array.sort((a,b) => b-a);
