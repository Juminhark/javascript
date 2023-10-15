# Built-in objects : 표준 내장 객체

**표준 내장 객체와 전역객체를 헷갈리지 않도록 주의.**

표준 내장 객체는 전역 범위의 여러 객체를 일컫습니다.

전역 객체는 엄격 모드를 사용하지 않을 땐 전역 범위에서 `this`, 지원하는 환경에선 `globalThis`를 사용해 접근할 수 있는 객체입니다. 사실 전역 범위는 전역 객체와 전역 객체가 상속한 속성으로 이루어집니다.

## 항목별 표준 객체

### 값 속성

- Infinity
- NaN
- undefined
- globalThis

### 함수 속성

- isNaN()
- parseInt()

### 기초 객체

- Object
- Function
- Boolean
- Symbol

### 숫자 및 날짜

- Number
- BigInt
- Math
- Date

### 텍스트 처리

- String
- RegExp

### 인덱스 콜렉션

- Array

### 키 콜렉션

- Map

### 구조화된 데이터

- JSON

### 제어 추상화 객체

- Promise

## reference

- [MDN - 표준내장객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)
