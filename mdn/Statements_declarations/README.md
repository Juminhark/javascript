# Statements and declarations : 문 과 선언

- JavaScript 응용 프로그램은 적절한 구문을 갖는 문으로 구성
- 한 문이 여러줄에 걸칠 수 있다
- 여러 문은 각 문이 세미콜론으로 구분된 경우 한 줄에 나올수 있다. 이는 키워드 하나가 아니라, 키워드 그룹이다

## 문(statement)과 표현식

- Statement(문)은 자바스크립트 엔진에게 내리는 명령이다.

```js
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo () {}

// 조건문
if (x > 5) { … }

// 반복문
for (var i = 0; i < 10; i++) { … }
```

- 자바스크립트의 모든 코드는 문 또는 표현식이다
- 표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없다.
- 문은 var, let, const, function, class와 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 한다

```js
// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.

// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.
```

- 위에서의 선언문은 표현식이 아닌 문이기 떄문에 값처럼 사용할수 없다
- 크롬 DevTools에서 표현식이 아닌 문은 언제나 undefined를 반환하고, 표현식인 문은 언제나 값을 반환한다.

## 세미콜런

- 문의 끝에는 반드시 ;(세미콜런)을 붙여야 하는가?
  - 자바스크립트 엔진이 스크립트를 해석할 때, 자바스크립트 엔진에는 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여주는 세미콜론 자동 삽입 기능(ASI, automatic semicolon insertion)이 있기 때문에 반드시 붙일 필요는 없다. 하지만 세미콜론 자동 삽입 기능의 예측과 개발자의 예측과 다른 경우가 간혹 있다.
  - ESLint와 같은 정적 분석 도구에서도 세미콜론 사용을 기본으로 설정하고 있고 TC39(ECMAScript 기술 위원회)도 세미콜론 사용을 권장한다

## category

### 흐름 제어

- block : {...}
- break
- continue
- empty
- if ... else
- switch
- throw
- try ... catch

### 선언

- var
- let
- const

### 함수 및 클래스

- function
- function\*
- return
- class

### 반복

- do ... while
- for
- for ... in
- for ... of
- while

### 기타

- debugger
- export
- import
- label

## reference

- [Statements](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements)
