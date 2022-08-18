# ES6

- ES 2015
- ECMAScript 2015

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

- [JavaScript - ECMA 2015 (ES6)에 대해 알아보자](https://velog.io/@surim014/2020-01-02-1901-%EC%9E%91%EC%84%B1%EB%90%A8)
