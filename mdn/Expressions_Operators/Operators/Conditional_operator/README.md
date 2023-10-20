# 조건 (삼항) 연산자

조건문 ? (truthy 일경우 실행할 표현식) : (falsy 일 경우 실행할 표현식)

if...else 문의 대체재로 빈번하게 사용됨

## 구문

```js
confition ? exprIfTrue : exprIfFalse;
```

## falsy

```js

```

## null 값 처리하기

- null 일 수 있는 값을 처리할 때 사용

```js
const greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

## 연결된 조건문 처리하기
