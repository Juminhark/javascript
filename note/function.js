//? Function
//* - fundamental building block in the program
//* - subprogram can be used multiple times
//* - performs a task or calculates a value

//? 1. Function declaration
//* function name(param1, param2) { body... return; }
//* one function === one thing
//* naming: doSomething, command, verb
//* e.g. createCardAndPoint -> createCard, createPoint
//* function is object in JS

function printHello() {
	console.log('Hello');
}
printHello();

function log(message) {
	console.log(message);
}
log('Hello@');
log(1234);

//? 2. Parameters
//* primitive parameters: passed by value
//* object parameters: passed by reference
function changeName(obj) {
	obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//? 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//? 4. Rest parameters (added in ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//! not using
const printAll2 = (args) => {
	args.forEach((arg) => console.log(`${arg}2`));
};
printAll2(['dream', 'coding', 'ellie']);

//? 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello';
	}
	// console.log(childMessage); //error
}
printMessage();

//? 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

//? 7. Early return, early exit
//! 👎
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

//? 👍 : 조건을 만족하지 않는 경우는 빠르게 return
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

//? First-class function
//* functions are treated like any other variable
//* can be assigned as a value to variable
//* can be passed as an argument to other functions.
//* can be returned by another function

//? 1. Function expression
//* a function declaration can be called earlier than it is defined. (hoisted)
//* a function expression is created when the execution reaches it.
const print = function () {
	// anonymous function
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//? 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
//? anonymous function
const printYes = function () {
	console.log('yes!');
};

//? named function
//* better debugging in debugger`s stack traces
//* recursions
const printNo = function print() {
	console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//? Arrow function : always anonymous
const simplePrint = function () {
	console.log('simplePrint!');
};

const simplePrintArrow = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
	// do something more
	return a * b;
};

//! 함수 이름, this, arguments 가 없다.
let myObj = {
	count: 3,
	setCounter: function () {
		console.log(this.count);
	},
};
myObj.setCounter(); // 3

myObj = {
	count: 3,
	setCounter: () => {
		console.log(this.count);
	},
};

myObj.setCounter(); // undefined

// button 추가
const button = document.createElement('button');
button.innerText = 'press';
document.body.append(button);

// myObj = {
// 	count: 0,
// 	setCounter: function () {
// 		console.log(this.count);
// 		button.addEventListener(
// 			'click',
// 			function () {
// 				console.log(this);
// 			}.bind(this)
// 		);
// 	},
// };

// myObj.setCounter();

myObj = {
	count: 0,
	setCounter: function () {
		console.log(this.count);
		button.addEventListener('click', () => {
			console.log(this.count++);
		});
	},
};
myObj.setCounter();

//! prototype 이 존재하지않음
// const MyClass = () => {};
// new MyClass(); //! error : MyClass is not a constructor

//! arguments
const myFun = function () {
	console.log(arguments);
};
myFun(1, 2, 3, 4);

// const MyFun2 = () => {
// 	console.log(arguments);
// };
// myFun2(1, 2, 3, 4); //! error

//* 위 error 의 해법
const myFun2 = (...args) => {
	console.log(args);
};
myFun2(1, 2, 3, 4);

function outer() {
	const myFun2 = () => {
		console.log(arguments);
	};
	myFun2();
	//* arrow function에서 arguments 가 없기 때문에 myFun2가 실행되는 scope를 참조한다.
	//! scope chain
}
outer(1, 2, 3, 4);

//? IIFE: Immediately Invoked Function Expression
(function hello() {
	console.log('IIFE');
})();

//? Fun quiz time❤️
//* function calculate(command, a, b)
//* command: add, subtract, divide, multiply, remainder

const calculate = (command, a, b) => {
	switch (command) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
		default:
			return '올바른 command를 입력 하세요. / command : add, subtract, divide, multiply, remainder';
	}
};

console.log(calculate('add', 2, 3));
console.log(calculate('subtract', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('multiply', 2, 3));
console.log(calculate('remainder', 2, 3));
console.log(calculate('slice', 2, 3));

//! Functional Programming vs Object Oriented Programming

//! Procedural Programming

//!  anonymous function vs named function(디버깅과 재귀)

//! function hoisted

printHoist();

function printHoist() {
	// anonymous function
	console.log('print');
}
