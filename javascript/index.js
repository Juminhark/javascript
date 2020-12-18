//? 1. Use strict
// Whole-script strict mode syntax
// added in ECMAScript 5
// use this for Vanilla JS
'use strict';

// JavaScript is very flexible
// flexible === dangerous
// strict 선언 하지 않고 a = 6; 할 경우 선언되지 않은 a 를 사용하여 error

// let a;
// a = 6;

//? 2. Variable
// let (added in ES6)

let globalName = 'global name';
{
	let name = 'Ellie';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}
// console.log(name); //error
console.log(globalName);

//! var (don`t ever use this!);
//! var hoisting (move declaration from bottom to top)
//! 어디서 선언 하였느냐와 상관없이 제일 위로 올린다
//! has no block scope : scope를 무시한다.

{
	console.log(age);
	age = 4;
	console.log(age);
	var age;
}
console.log(age);
