# Expression(표현식)

표현식이란 `어떤 값`으로 이행하는 임의의 유효한 코드 단위를 말한다

모든 표현식은 구문이 유효하다면 어떤 값으로 이행하지만, 개념적으로 두가지 범주로 나뉩니다

- 1.  부수 효과가 있는(변수에 값을 할당 등) 표현식
- 2.  평가하면 어떤 값으로 이행하는 표현식

```js
// 1.
x = 7;

// 2.
3 + 4;
```

표현식은 다음과 같은 범주로 구분 할수 있다

- 산수: 숫자, 예컨대 3.14159로 평가됩니다. 보통 산술 연산자를 사용합니다.
- 문자열: 문자열, 예컨대 "프레디", "234" 등으로 평가됩니다. 보통 문자열 연산자를 사용합니다.
- 논리: 참이나 거짓으로 평가됩니다. 대개 논리 연산자를 포함합니다.
- 일차 표현식: JavaScript의 키워드와 일반 표현식입니다.
- 좌변 표현식: 좌변 값은 할당의 목적지입니다.

## category

Primary expressions

- this
- Literals
- []
- {}
- function
- class
- function\*
- async function
- async function\*
- /ab+c/i
- `string`
- ( )

Left-hand-side expressions : 좌변 식

- Property accessors
- ?.
- new
- new.target
- import.meta
- super
- import()
- ...obj
