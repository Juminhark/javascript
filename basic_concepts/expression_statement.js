//? 7. Expression vs Statement

//? Expression : value

console.log(5 + 1);

function add(a, b) {
	return a + b;
}

const how = add(6, 5);
console.log(how);
//* add() 는 어떠한 value 를 return하기 때문에 expression
//* undefined을 return하는 함수도 expression

//? Statement : 명령, 지시

if (true) {
	//* return하는것이 없기 때문에 statement
}

//! error : statement는 variable로 저장할수 없다.
// const thing = if (true) {
// }s

//* if, else, Else if, for, while 등

//? declaration vs expression

//* 자바스크립트는 모든 declaration 을 상단으로 가져온다 : hoisting

const awesome = add1(1, 5);

function add1(a, b) {
	return a + b;
}
console.log(awesome);

//! error : expression
// const awesome1 = add2(5, 6);

// const add2 = (a, b) => {
// 	return a + b;
// };
