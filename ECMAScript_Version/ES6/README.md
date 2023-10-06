# New Features in ES6

- The let keyword
- The const keyword
- Arrow Functions
- The ... Operator
- For/of
- Map Objects
- Set Objects
- Classes
- Promises
- Symbol
- Default Parameters
- Function Rest Parameter
- String.includes()
- String.startsWith()
- String.endsWith()
- Array.from()
- Array keys()
- Array find()
- Array findIndex()
- New Math Methods
- New Number Properties
- New Number Methods
- New Global Methods
- Object entries
- JavaScript Modules

## let

- let을 이용한 변수선언은 Block Scope 내에 변수를 선언한다

```js
function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // same variable
    console.log(x); // 71
  }

  console.log(x); //71
}

varTest();

function letTest() {
  let x = 31;

  if (true) {
    let x = 71; // different variable
    console.log(x); // 71
  }

  console.log(x); //31
}

letTest();
```

## const

- let과 유사하지만 재할당(수정)이 불가능

```js
const number = 31;

if (true) {
  const number = 71;
}

//! TypeError: Assignment to constant variable.
// number = 71;

//! SyntaxError: Identifier 'number' has already been declared
// const number = 71;
```

## [Destructuring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

- 구조 분해 할당

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a, b); // 10 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [ 30, 40, 50 ]

[a, b] = [b, a];
console.log(a, b); // 20 10
```

## Default Parameter

- 함수에 전달된 Arguments가 undefined 이거나 값이 없을 때, 초기화 설정된 Parameter

```js
function logName(name = 'ju') {
  console.log(name);
}

logName(); // ju
logName('kim'); // kim

function logNumber(num = 1991) {
  console.log(num);
}

logNumber(); // 1991
logNumber(2010); // 2010
logNumber(0); // 0

function getString() {
  console.log('getting string');
  return 'empty string';
}

function logString(str = getString()) {
  console.log(str);
}

logString(); // getting string empty string
logString(undefined); // getting string empty string
logString(null); // null
logString(false); // false
logString('hello world'); // hello world
```

## Rest Parameter

## Spread Operator

## Arrow Function

## Class

## Template String

- ` ` (backtick) 문자열 템플릿 : 줄바꿈과 변수사용이 가능

```js
//! SyntaxError: Invalid or unexpected toke
console.log('string text line 1
string text line 2');

// OK
console.log(`string text line 1
string text line 2`); // OK

let name = "Taesu Hyeon";
console.log("My name is " + name); // My name is Taesu Hyeon

let name = "Taesu Hyeon";
console.log(`My name is ${name}`); // My name is Taesu Hyeon
```

## import

## export

## Promise

## Async Await

# Reference

- [w3schools - es6](https://www.w3schools.com/js/js_es6.asp)
- [JavaScript - ECMA 2015 (ES6)에 대해 알아보자](https://velog.io/@surim014/2020-01-02-1901-%EC%9E%91%EC%84%B1%EB%90%A8)
