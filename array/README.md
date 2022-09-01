# Array Method

## [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

## [Array.slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- 배열안에 원시형값만 있으면 깊은 복사, 참조형이 있으며 얕은복사
- 복사본 반환

## [Array.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

- 배열 요소 삭제, 교체, 새 요소 추가

## [Array.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- callback함수 정의 없으면 문자 기준 정렬

```js
let arr = [123, 121, 110, 151, 144, 99];
console.log(arr.sort()); // [ 110, 121, 123, 144, 151, 99 ]
console.log(arr.sort((a, b) => a - b)); // [ 99, 110, 121, 123, 144, 151 ]

// - 오름차순
answerMap.sort(function (a, b) {
  return a - b;
}

- 내림차순
answerMap.sort(function (a, b) {
  return b - a;
}
```

## [arr.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## [arr.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) : callback 후 새로운 배열 생성

## [arr.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

## [arr.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## [arr.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## for...in

```ts
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## Stack / Queue

- arr.push() : 뒤에 넣기
- arr.pop() : 뒤에 빼기
- arr.shift() : 앞에 넣기
- arr.unshift() : 앞에 빼기
