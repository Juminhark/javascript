# Math

- 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체

- 함수 객체가 아니다

- Number 자료형만 지원하며, BigInt와는 사용할 수 없다

## description

- 다른 전역 객체와 달리 Math는 생성자가 아니다
- Math의 모든 속성과 메서드는 정적이다
- 파이 상수는 Math.PI로 참조할 수 있다
- 사인 함수는 매개변수 x에 대해 Math.sin(x)와 같이 호출할수 있다
- ? 상수는 JavaScript에서 가능한 최대 실수 정밀도로 정의되어있다

## Static properties : 속성

- Math.E
- Math.LN2
- Math.LN10
- Math.LOG2E
- Math.LOG10E
- Math.PI
- Math.SORT1_2
- Math.SORT2

## Static methods : 메소드

- Math.abs(x) : 절대값
- Math.ceil(x) : 올림
- Math.floor(x) : 내림
- Math.round(x) : 반올림
- Math.sqrt(x) : 제곱근
- Math.pow(x, y) : x의 y제곱근

```js
// 사용 예시 : 약수 구하기
let b = 22;
let bb = [];

for (let i = 1; i < Math.sqrt(b); i++) {
  if (b % i === 0) {
    bb.push(i);
    bb.push(b / i);
  }
}
console.log(bb.sort((a, b) => a - b)); // [ 1, 2, 11, 22 ]
```
