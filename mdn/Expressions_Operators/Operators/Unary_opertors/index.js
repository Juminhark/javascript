// Unary operators : 단항 연산자

//? delete

//? void

//? typeof

//? + : 단항 더하기 : 피연산자가 숫자가 아니면 숫자로 변환
let x = 1;
let y = -1;

console.log(+x); // 1
console.log(+y); // -1
console.log(+''); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+'hello'); // NaN

//? -

//? ~ : 비트 NOT
const a = 5; // 00000000000000000000000000000101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

//? !

//? await
