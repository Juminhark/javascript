// Primitive Data Types : 자료형

// Numbers : 숫자형
const day = 5;
console.log(day); // 5
console.log(1 / 0); // Infinity : 무한대
console.log('문자' / 2); // NaN : 계산 에러

// Strings : 문자형
const name = 'john';
console.log(`my name is ${name}`); // 변수를 문자열에 삽입

// Booleans : 논리형
const result = false;

// undefined : 할당되지않은 값
let date;
console.log(date);

// null : 비어있는값
let minute = null;
console.log(minute);

// typeof 연산자
console.log(typeof day);
console.log(typeof 235);
console.log(typeof name);
console.log(typeof 'asd');
console.log(typeof result);
console.log(typeof true);
console.log(typeof null);
console.log(typeof console.log);

// Symbol && OBJECT

// 과제 : 다음을 예측
let testName = 'john';
console.log(`hello ${1}`); // ?
console.log(`hello ${'testName'}`); // ?
console.log(`hello ${testName}`); // ?

// > node dataTypes.js
