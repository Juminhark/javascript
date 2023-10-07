// Type Conversion: 형 변환

// String 으로 변환
let value = true;
console.log(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); // string

// Number 으로 변환
console.log('6' / '2'); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행됩니다.

let str = '123';
console.log(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.
console.log(typeof num); // number

let age = Number('임의의 문자열 123');
console.log(age); // NaN, 형 변환이 실패합니다.

console.log(Number('   123   ')); // 123
console.log(Number('123z')); // NaN ("z"를 숫자로 변환하는 데 실패함)
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// boolean 으로 변환
console.log(Boolean(1)); // 숫자 1(true)
console.log(Boolean(0)); // 숫자 0(false)

console.log(Boolean('hello')); // 문자열(true)
console.log(Boolean('')); // 빈 문자열(false)

// > node conversion.js
