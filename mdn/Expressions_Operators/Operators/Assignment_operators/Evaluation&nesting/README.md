# Evaluation and nesting : 반환 값과 체이닝

- ! 할당을 체이닝하거나 중첩하는걸 지양 : 연결된 변수 할당이 전역 변수를 생성

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = (b = c = 1);
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
})();

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

## reference

- [don`t chain variable assignments](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment)
