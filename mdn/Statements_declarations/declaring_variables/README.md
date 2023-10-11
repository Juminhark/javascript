# 선언

- `var`
- `let`
- `const`

## var 대신 let, const를 사용해야하는 이유

- hoisting

```js
console.log(a); // undefined
var a = 1;
console.log(a); // 1
```

- 나중에 선언된 변수 사용

```js
console.log(a); // undefined
a = 1;
var a;
console.log(a); // 1
```

- 전역변수와 지역변수 개념이 확실치 않다

```js
for (var i = 1; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

- 중복 변수 허용

```js
var a = 1;
console.log(a);

var a = 2;
console.log(a);
```

## TDZ(Temporal Death Zone)

- let,const도 hoisting이 되긴 하지만 선언문이 나오기 전까지 접근할수 없다

```js
console.log(a);

let a = 1; // ReferenceError: Cannot access 'a' before initialization
```

## reference

- [let var 차이](https://www.youtube.com/watch?v=fETYLCU2YYc)
- [TDZ](https://ui.toast.com/weekly-pick/ko_20191014)
