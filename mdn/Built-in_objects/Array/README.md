# Array

- array object
- - 여러 항복의 컬렉션을 단일 변수이름 아래 저장
- - 일반적인 배열 연산을 수행하기 위한 멤버가 존재

- 크기를 조정이 가능하고, 다양한 데이터 형식을 혼합하여 저장할수 있다

- 연관 배열이 아니므로, 임의의 문자열을 인덱스로 사용하여 배열 요소에 접근할 수 없다. 음수가 아닌 정수를 인덱스로 사용하여 접근해야한다

- 배열의 첫 번째 요소는 인덱스 0, 마지막 요소는 배열의 length - 1

- 복사연산은 얕은 복사본을 생성
- - javascript 객체의 모든 표준 내장 복사 연산은 얕은 복사본을 생성

## method

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

## 깊은 복사 vs 얕은 복사

- 원시값은 기본적으로 깊은 복사
- 참조값만 얕은 복사가 가능

## 두 배열 비교

## Reference

- [8 Must Know JavaScript Array Methods - Web Dev Simplified](https://youtu.be/R8rmfD9Y5-c)
