# Coding Convention - FE개발랩

- 코딩 컨벤션은 읽고, 관리하기 쉬운 코드를 작성하기 위한 일종의 코딩 스타일 규약이다
- 자바스크립트는 다른 언어에 비해 유연한 문법구조(동적 타입, this 바인딩, 네이티브 객체 조작 가능)를 갖기 때문에, 개발자 간 통일된 규약이 없다면 코드의 의도를 파악하거나 오류를 찾기 어렵다
- 코딩 컨벤션을 준수하면 가독성이 좋아지고, 성능에 영향을 주거나 오류를 발생시키는 잠재적 위험요소를 줄인다.
- 규모가 큰 프로젝트일수록 유지보수 비용을 줄이는데 도움이 된다

- 프로그램의 성능을 해치지 않은 범위내에서 가독성과 관리 용이성을 우선하여 작성
- ESLint와 같은 린터를 사용한다는 가정하에 린터로 검출할 수 없는 모호한부분을 가이드한다

## 구성

- [들여쓰기](#들여쓰기--indentation)
- 문장의 종료
- 명명 규칙
- 전역 변수
- 선언과 할당
- - 변수
- - 배열과 객체
- - 함수
- - 화살표 함수
- - Promise Executor 함수
- - Destructuring
- - 템플릿 문자열
- 클래스와 생성자
- 모듈
- 블록 구문
- 데이터형 확인하기
- 조건 확인하기
- 반환하기
- 순회하기
- 콜백 함수의 스코프
- 주석
- 공백

- - ES6를 기준으로 작성. ES5에서 지켜야하는건 (ES5) 태그

## 들여쓰기 : indentation

- space와 tab을 섞어서 사용하지 않는다
- - 개발환경에 따라 탭 또는 스페이스의 들여쓰기가 다르게 보일수 있기 때문에 이를 통일하지 않으면 가독성이 떨어진다
- - 프로젝트 시작 전 공백 문자와 탭 문자 둘중 하나를 선택
- - 공백 문자를 사용할 경우 공백 문자 2개 또는 4개를 사용

## 문장의 종료

- 한 줄에 하나의 문장만 허용하며, 문장 종료 시에는 반드시 세미콜론(;)을 사용한다

## 명명 규칙

- 카멜케이스를 사용한다
- - 변수와 함수의 이름을 정하는것도 코딩 컨벤션의 일부이다

- 예약어를 사용하지 않는다

```js

//! Bad
let class;
let enum;
let extends;
let super;
let const;
let export;
let import;
```

- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용.

```js
const SYMBOLIC_CONSTANTS;
```

- 생성자는 대문자 카멜 케이스를 사용한다.

```js
class ContructorName {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
```

- 변수, 함수에는 카멜 케이스를 사용한다.

```js
// 숫자, 문자, 불린
let dog;
let variableName;

// 배열 - 배열은 복수형 이름을 사용
const dogs = [];

// 정규표현식 - 정규표현식은 'r'로 시작
const rDedc = /.*/;

// 함수
function getPropertyName() {}

// 이벤트 핸들러 - 이벤트 핸들러는 'on'으로 시작
const onClick = () => {};
const onKeyDown = () => {};

// 불린 반환 함수 - 반환 값이 불린인 함수는 'is'로 시작
let isAvailable = false;
```

- 지역 변수 or private 변수명은 '\_'로 시작.

```js
let _privateVariableName;
let _privateFunctionName;

// 객체일 경우
const customObjectName = {};
customObjectName.propertyName;
customObjectName._privatePropertyName;
_privateCustomObjectName;
_privateCustomObjectName._privatePropertyName;
```

- URL, HTML 같은 범용적인 대문자 약어는 대문자 그래도 사용한다.

```js
parseHTML;
parseXML;
```

## 전역 변수

- 전역변수를 사용하지 않는다.
- - 자바스크립트는 전역 변수에 기반을둔다.
- - 모든 컴파일 단위는 하나의 공용 전역 객체(window)에 로딩된다.
- - 전역 변수는 언제든지 프로그램의 모든 부분에서 접근할 수 있기 때문에 편하지만, 바꿔 말하면 프로그램의 모든 부분에서 변경될 수 있고, 그로 인해 프로그램에 치명적인 오류를 발생 시킬 수 있다.

```js
//! Bad
myglobal = 'hello';
```

- 암묵적 전역 변수를 사용하지 않는다.

```js
//! Bad
function sum(x, y) {
  result = x + y;
  return result;
}

//! Bad
function foo() {
  let a = (b = 0); // let a = (b = 0);와 같다. b가 암묵적 전역이 된다.
}

// Good
function sum(x, y) {
  let result = x + y;
  return result;
}

// Good
function foo() {
  let a, b;
  a = b = 0;
}
```

## 선언과 할당

### 변수

- 값이 변하지 않는 변수는 const, 값이 변하는 변수는 let, var는 사용하지 않는다
- - const를 우선하여 선언하면 재할당 되지 않는 변수임을 알려 코드를 읽기 쉽게 하여 유지보수에 도움이 된다
- - let은 블록 범위로 할당되기 때문에 다른 많은 프로그래밍에서와 같은 규칙으로 적용되어 실수를 피하는데 도움이 된다

- const를 let보다 위에 선언한다
- - 코드가 정리되어 가독성이 좋아진다

```js
//! Bad - 그룹화 없음
let foo;
let i = 0;
const len = this._array.length;
let bar;

// Good
const len = this._array.length;
const len2 = this._array2.length;
let i = 0;
let j = 0;
let foo, bar;
```

- const와 let은 사용 시점에 선언 및 할당을 한다
- - const와 let으로 선언한 변수는 블록 스코프이므로 hoisting 되지 않는다

```js

//! Bad - 블록 스코프 밖에서 변수 선언
function foo() {
  const len = this._array.length;
  let i = 0;
  let j = 0;
  let len2, item;

  for (; i < len; i += 1) {
      ...
  }

  len2 = this._array2.length;
  for (j = 0, len2 = this._array2.length; j < len2; j += 1) {
      item = this._array2[j];
      ...
  }
}

// Good
function foo() {
  const len = this._array.length;
  for (let i = 0; i < len; i += 1) {
      ...
  }

  // 사용 시점에 선언 및 할당
  const len2 = this._array2.length;
  for (let j = 0; j < len2; j += 1) {
      const item = this._array2[j];
      ...
  }
}
```

- 외부 모듈과 내부 모듈을 구분하여 사용한다
- - 외부 모듈과 내부 모듈을 변수 참조할 때, 선언 사이에 공백을 두면 가독성이 좋아진다

```js
const lodash = require('lodash');
const $ = require(jquery);
const handlebars = require('handlebars');
const d3 = require('d3');

const pluginFactory from '../../factories/pluginFactory';
const predicate from '../../helpers/predicate';
const raphaelRenderUtil from '../../plugins/raphaelRenderUtil';
```

- ? 자기 참조 할당은 하지 않는다
- - 자기 참조는 효과가 없으며, 불완전한 리팩터링으로 인한 오류일 수 있다

```js
//! Bad
foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({ a, b } = { a, x });

// Good
foo = bar;

let foo = foo;

[foo = 1] = [foo];

// reference
// ESLint - no-self-assign
```

- var 사용 시 반드시 함수 스코프의 시작 지점에서 선언한다. (ES5)
- - JS는 블록 구문을 사용하기는 하지만, 블록 유효 범위를 제공히는 않는다.
- - 블록 내에서 선언되기만 하면 선언된 위치에 상관없이 블록 내 어느 곳이든 사용이 가능하다
- - JS가 컴파일 될때 내부적으로 hoisting이 발생하기 때문인데, 이로 인해 가독성이 떨어지고 오류를 찾기 어려워진다

```js

//! Bad - 스코프의 시작 지점이 아닌 곳에 변수 선언
function foo() {
  ...
  var bar = '';
  var quux = '';
}

// Good
function foo() {
  var bar = '';
  var quux = '';
  ...
}

// reference
// ESLint - vars-on-top
// ESLint - no-inner-declarations
```

- ES5 환경에서는 변수를 var 키워드와 함께 선언되어야 하며 선언과 동시에 할당 되어야 한다 (ES5)
- - 하나의 var로 너무 많은 변수를 선언할 경우 var문을 읽지 못하거나 코드가 쉽게 지저분 해질 수 있다

```js
// Bad - var를 한 번만 사용하여 선언
var foo = '',
  bar = '',
  quux = '';

// Good - 변수 별 var 선언
var foo = '';
var bar = '';
var quux = '';
```

- var 사용 시 블록 스코프 안에서 변수를 선언하지 않는다 (ES5)
- - var로 선언한 변수는 함수 스코프이다.
- - for문이나 if문 블록 내에서 변수를 선언하면 블록 스코프가 적용된다고 착각하여 의도치 않은 실수를 할 수 있다

```js
// Bad
var length = 100;
for (var i = 0; i < length; i += 1) {
 ...
}

// Good
var length = 100;
var i;
for (i = 0; i < length; i += 1) {
 ...
}

// Good
var i = 0;
var length = 100;
for (; i < length; i += 1) {
 ...
}
```

- var의 선언 시점과 사용 시점이 크게 떨어져 가독성이 낮아지는 경우에는 선언과 할당을 분리를 허용한다 (ES5)
- - 할당은 사용 시점에 수행하며, 이 경우에도 선언은 반드시 스코프의 시작 지점에서 수행한다

```js
// Bad
function foo() {
 var i = 0;
 var len = this._array.length;

 for (; i < len; i += 1) {
   ...
 }

 // statement 내에서의 var 사용 제한
 for (var j = 0, len2 = this._array2.length; j < len2; j += 1) {
   // statement 내에서의 var 사용 제한
   var item = this._array2[j];
   ...
 }
}

// Good - 선언과 할당을 분리
function foo() {
 var i;
 var j;
 var len;
 var len2;
 var item;

 i = 0;
 len = this._array.length;
 for (; i < len; i += 1) {
   item = this._array[i];
   ...
 }

 // 선언은 진입부에서 하고, 할당은 사용 시점에 수행
 j = 0;
 len2 = this._array2.length;
 for (; j < len2; j += 1) {
   item = this._array2[j];
   ...
 }
}
```

- 함수 중간에 예외처리가 있을때, 예외 처리 이후에 사용되는 var 변수의 경우 선언만 집입부에서 하고 할당은 사용 시점에 수행한다 (ES5)

```js

  // Bad
function foo(isValid) {
  var i = 0;
  var len = this._array.length;

  if (!isValid) {
    return false;
  }

  for (; i < len; i += 1) {
    ...
  }
}

// Good
function foo(isValid) {
  var i, len;

  if (!isValid) {
    return false;
  }

  // 선언은 진입부에서 하고, 할당은 사용 시점에 수행
  i = 0;
  len = this._array.length;
  for (; i < len; i += 1) {
    ...
  }
}
```

- 선언과 할당의 분리를 허용하는 경우 선언만 하는 변수는 var을 한번만 사용하는 방식을 허용한다 (ES5)

```js
// Bad - 불필요하게 개행
var foo, bar, quux;

// Good - 선언만 하는 변수, 한 줄로 연결
var foo, bar, quux;

// Good
var foo;
var bar;
var quux;
```

- 선언과 동시에 할당을 하는 변수 먼저 선언한다 (ES5)

- - 선언과 할당을 함께하는 변수와 선언만 하는 변수가 함께 사용될 때, 선언과 동시에 할당을 하는 변수를 그룹화하여 먼저 선언하는 것이 가독성에 좋다.

```js
// Bad
var foo;
var bar;
var qux;
var i = 0;
var j = 0;
var len = this._array.length;
var len2 = this._array2.length;
var item;

// Bad
var i = 0,
  length = ary.length,
  j,
  k;

// Good
var i = 0;
var j = 0;
var len = this._array.length;
var len2 = this._array2.length;
var foo, bar, quux, item;
```

### 배열과 객체

### 함수

### 화살표 함수

### Promise Executor 함수

### Destructuring

### 템플릿 문자열

## 클래스와 생성자

## 모듈

## 블록구문

## 데이터형 확인하기

## 조건 확인하기

## 반환하기

## 순회하기

## 콜백함수의 스코프

## 주서

## 공백

## Reference

- [코딩컨벤션 - FE Guide](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION#%EC%A0%84%EC%97%AD-%EB%B3%80%EC%88%98)
