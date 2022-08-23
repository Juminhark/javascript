## Array.slice()

- 배열안에 다른 배열이 존재하면 얕은 복사가 되지만 다른배열이 없을경우 깊은 복사가 된다

## Array.sort()

- callback함수 정의 없으면 문자 기준 정렬

```js
let arr = [123, 121, 110, 151, 144, 99];
console.log(arr.sort()); // [ 110, 121, 123, 144, 151, 99 ]
console.log(arr.sort((a, b) => a - b)); // [ 99, 110, 121, 123, 144, 151 ]
```
