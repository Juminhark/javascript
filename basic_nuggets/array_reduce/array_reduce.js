// Reduce(줄임)
// iterates(반복), callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - accumulator : total of all calculations
// 2nd parameter ('curr') - , currentValue : current iteration/value

//? 배열의 각 요소에 대해 주어진 reducer function을 실행하고, 하나의 결과값을 반환
//? array.reduce( (accumulator, currentValue) => callback_function , initialValue )

const staff = [
	{ name: 'bob', age: 20, position: 'developer', salary: 100 },
	{ name: 'peter', age: 25, position: 'designer', salary: 300 },
	{ name: 'susy', age: 30, position: 'the boss', salary: 400 },
	{ name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
	total += person.salary;
	return total;
}, 0);

console.log(dailyTotal); // 810

//? 임금이 200 이하인 staff의 position 명단

// const resultSum = staff.reduce((acc, cur) => {
// 	if (cur.salary <= 200) acc.push(cur.position);
// }, []);

//! 이거 안됨 acc가 array상태를 유지하지 않음

const resultSum = staff.reduce((acc, cur) => {
	if (cur.salary <= 200) return [...acc, cur.position];
	return [...acc];
}, []);
