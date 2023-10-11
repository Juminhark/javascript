# Keyed Collections : 키 기반 컬렉션

- Map, Set 등 순회 가능한 콜렉션은 요소를 삽입 순서대로 순회할수 있다
- key를 사용하는 콜렉션

## Maps

- Map object
- Object와 Map 비교
- WeakMap 객체

## Sets

- Set object
- 배열과 Set의 상호 변환
- 배열과 Set 비교
- WeakSet 객체
- Map과 Set의 키와 값의 동치성

## 정량화 하기

```js
let data = ['a', 'b', 'c', 'b', 'c', 'b', 'c', 'a'];

let hash = data.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? ++acc[cur] : 1;
  return acc;
}, {});

console.log(hash); // { a: 2, b: 3, c: 3 }

let numbers = [1, 2, 3, 3, 3, 4];

//! 이건 안된다
let obj = numbers.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur]++ : 1;
  return acc;
}, {});
console.log(obj); // { '1': 1, '2': 1, '3': 1, '4': 1 }

//?  ++acc[cur] 으로 해야하는 이유?
```

## Reference

- [맵과 셋 - 코어자바스크립트](https://ko.javascript.info/map-set)