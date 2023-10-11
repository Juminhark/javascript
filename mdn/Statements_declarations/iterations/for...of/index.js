const array = ['a', 'b', 'c'];

for (const element of array) {
  console.log(element);
}

// a
// b
// c

//* `Array`에 대해 반복
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}

// 10
// 20
// 30

//* `let` 대신 `const`도 사용할 수 있습니다, 블록 내부 변수를 수정하지 않는 경우.
for (const value of iterable) {
  console.log(value);
}

// 10
// 20
// 30

//* `Map` 에 대해 반복
iterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

for (let entry of iterable) {
  console.log(entry);
}

// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

for (let [key, value] of iterable) {
  console.log(key, value);
}

// a 1
// b 2
// c 3

//* for...in / for...of 차이

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

iterable = [3, 5, 7];
iterable.foo = 'hello';

console.log(iterable);

for (let i in iterable) {
  console.log(i);
}

// 0
// 1
// 2
// "foo"
// "arrCustom"
// "objCustom"

for (let i of iterable) {
  console.log(i);
}

// 3
// 5
// 7
