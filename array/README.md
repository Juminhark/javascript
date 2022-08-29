## [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

## [Array.slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- 배열안에 원시형값만 있으면 깊은 복사, 참조형이 있으며 얕은복사

## [Array.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Array.sort()

- callback함수 정의 없으면 문자 기준 정렬

```js
let arr = [123, 121, 110, 151, 144, 99];
console.log(arr.sort()); // [ 110, 121, 123, 144, 151, 99 ]
console.log(arr.sort((a, b) => a - b)); // [ 99, 110, 121, 123, 144, 151 ]
```
