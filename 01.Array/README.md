# Array Method

- arr.from()
- arr.filter(): callback 후 새로운 배열 생성
- arr.find()
- arr.includes()
- arr.join()
- arr.slice()
- arr.splice()

## Array.sort()

```js
let arr = [123, 121, 110, 151, 144, 99];

//? callback함수 정의 없으면 문자 기준 정렬
console.log(arr.sort()); // [ 110, 121, 123, 144, 151, 99 ]
console.log(arr.sort((a, b) => a - b)); // [ 99, 110, 121, 123, 144, 151 ]

//? 오름차순
arr.sort(function (a, b) {
  return a - b;
}

//? 내림차순
arr.sort(function (a, b) {
  return b - a;
}
```

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

## forEach vs map vs filter vs reduce

```js
let arr = [123, 121, 110, 151, 144, 99];

//? map : 모든 배열 요소에 주어진 함수를 실행하여 새로운 배열로 반환
let arrMap = arr.map((a) => a * 2);
console.log(arrMap);
console.log(arr);

//? filter : 주어진 테스트를 통과한 요소를 새로운 배열로 반환
let arrFilter = arr.filter((a) => a > 110);
console.log(arrFilter);
console.log(arr);

//? reduce : 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
console.log(arr.reduce((pre, cur) => pre + cur));

//? forEach : 주어진 함수를 요소 각각에 실행
arr.forEach((a) => console.log(a));
```
