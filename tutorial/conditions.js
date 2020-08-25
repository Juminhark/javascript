// * condition : 상태 *

// == Equal to
console.log(5 == 5); // true
console.log(5 == 4); // false

// Not equal
console.log(4 != 3); //  true
console.log(4 != 4); //  false

console.log(5 > 10); //  false
console.log(10 > 6); //  true
console.log(10 >= 10); //  true
console.log(20 <= 20); //  true

// double equals : 값을 비교 => 잘 사용안함
// triple equals : 상태 비교

console.log(10 == '10'); //  true
console.log(10 === '10'); //  false

// && : and
// || : or

const access = true;
const age = 20;

if (access && age >= 18) {
	console.log('hi');
} else {
	console.log('don`t have access');
}

// false , 0 , ""

const name = '';

if (name) {
	console.log('value truthy');
} else {
	console.log('value falsely');
}

// 과제 : 대문자 상수 올바로 사용하기
// const birthday = '18.04.1982';
// const ageCalculator = (day) => { }
// const age = someCode(birthday);

// > node conditions.js
