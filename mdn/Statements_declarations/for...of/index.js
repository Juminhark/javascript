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
