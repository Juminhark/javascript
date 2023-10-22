# Destructuring assignment : 구조 분해 할당

```js
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

let x = [1, 2, 3, 4, 5];

let [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

## reference

- [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
