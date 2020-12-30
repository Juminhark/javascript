'use strict';

//? JavaScript is synchronous.
//* Execute the code block in order after hoisting.
//* hoisting: var, function declaration
console.log('1');
setTimeout(() => {
	console.log('2');
}, 1000);
console.log('3');

//* 나중에 다시 부르는 함수를 callback function 이라한다.

//? Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately(() => console.log('hello'));

//? Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//! callback chain의 문제점
//! 1. 가독성이 구리다
//! 2. 비지니스 로직 파악이 힘들다.
//! 3. 디버깅, 유지보수 어렵다
