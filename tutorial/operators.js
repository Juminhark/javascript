// Operators : 연산자

let inbox = 10;
console.log(inbox + 4); // 덧셈 연산자
console.log(inbox - 4); // 뺄셈 연산자
console.log(inbox * 4); // 곱셉 연산자
console.log(inbox / 4); // 나눗셈 연산자
console.log(inbox % 4); // 나머지 연산자
console.log(inbox ** 4); // 거듭제곱 연산자

// 10^3 => 10 ** 3
// 10 % 3 => 3으로 나눈 나머지

inbox++;
console.log(inbox);

++inbox;
console.log(inbox);

inbox--;
console.log(inbox);

inbox += 20;
console.log(inbox);

console.log('' + 1 + 0); // 10
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3');
console.log('2' * '3');
console.log(4 + 5 + 'px');
console.log('$' + 4 + 5);
console.log('4' - 2);
console.log('4px' - 2);
console.log(7 / 0);
console.log('  -9  ' + 5);
console.log('  -9  ' - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(' \t \n' - 2);

// 비교 연산자

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

// > node operators.js
