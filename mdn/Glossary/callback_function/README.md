# 콜백 함수

## 일급 객체

- 무명의 리처럴로 생성할 수 있다
- 변수나 자료구조(배열의 요소나 객체의 속성값)에 할당 할 수 있다.
- 다른 함수의 인자로 전달될 수 있다
- 다른함수의 결과로서 리턴될수 있다
  위의 조건을 만족하는 객체를 일급 객체라고 한다

함수는 위 조건을 만족하므로 일급 객체이다

## 고차 함수와 콜백 함수

- 고차함수는 함수를 인자로 받을 수 있고, 함수 형태로 리턴할수 있는 함수이다.

다른 함수(caller)의 인자로 전달되는 함수를 콜백함수라고 한다.

## ? : Array.filter()를 콜백함수를 포함하여 구현해보기

```js
const arr = [1, 2, 3, 4, 5, 6];

function myFilter(origin, callback) {
  let result = [];
  for (let i of origin) {
    if (callback(i)) result.push(i);
  }
  return result;
}

console.log(myFilter(arr, (e) => e > 3));
```

## reference

- [고차함수와 콜백-일급객체란?](https://hanamon.kr/javascript-%EA%B3%A0%EC%B0%A8%ED%95%A8%EC%88%98%EC%99%80-%EC%BD%9C%EB%B0%B1-%EC%9D%BC%EA%B8%89%EA%B0%9D%EC%B2%B4%EB%9E%80/)
