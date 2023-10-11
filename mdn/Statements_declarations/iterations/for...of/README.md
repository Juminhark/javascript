# for...of

`for...of 명령문`은 반복가능한 객체 (Array, Map, Set (en-US), String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

## 구문

```js
for (variable of iterable) {
  statement;
}
```

`variable` : 각 반복에 서로 다른 속성값이 variable에 할당
`iterable` : 반복되는 열거가능(enumerable)한 속성이 있는 객체.

## `for...of`와 `for...in`의 차이

for...in 루프는 객체의 모든 열거가능한 속성에 대해 반복

for...of 구문은 컬렉션 전용. 모든 객체보다는, [Symbol.iterator] 속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

## reference

- [mdn - for...of](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
