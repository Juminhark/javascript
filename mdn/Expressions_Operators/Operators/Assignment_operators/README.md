## Assignment_operators(할당 연산자)

- 할당 연산자는 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당
- 아래 표에서 볼수 있듯, 연산과 할당을 동시에 수행하는 복합 할당 연산자도 존재

| name                            | shorthand operator | meaning          |
| ------------------------------- | ------------------ | ---------------- |
| Assignment                      | x = f()            | x = f()          |
| Addition assignment             | x += f()           | x = x + f()      |
| Subtraction assignment          | x -= f()           | x = x - f()      |
| Multiplication assignment       | x \*= f()          | x = x \* f()     |
| Division assignment             | x /= f()           | x = x / f()      |
| Remainder assignment            | x %= f()           | x = x % f()      |
| Exponentiation assignment       | x \*\*= f()        | x = x \*\* f()   |
| Left shift assignment           | x <<= f()          | x = x << f()     |
| Right shift assignment          | x >>= f()          | x = x >> f()     |
| Unsigned right shift assignment | x >>>= f()         | x = x >>> f()    |
| Bitwise AND assignment          | x &= f()           | x = x & f()      |
| Bitwise XOR assignment          | x ^= f()           | x = x ^ f()      |
| Bitwise OR assignment           | x \|= f()          | x = x \| f()     |
| Logical AND assignment          | x &&= f()          | x && (x = f())   |
| Logical OR assignment           | x \|\|= f()        | x \|\| (x = f()) |
| Nullish coalescing assignment   | x ??= f()          | x ?? (x = f())   |

## Assigning to properties : 속성 할당

- 어떤 표현식이 객체로 평가된다면, 할당 표현식의 좌항은 객체로 평가되는 표현식의 속성에 할당할수 있다

```js
let obj = {};

obj.x = 3;
console.log(obj.x); // 3
console.log(obj); // {x : 3}

const key = 'y';
obj[key] = 5;
console.log(obj[key]); // 5
console.log(obj); // {x : 3, y : 5}
```

- 어떤 표현식이 객체로 평가되지 않으면, 그 표현식의 속성에 대한 할당 표현식은 실제로는 할당하지 않는다

```js
let val = 0;

console.log((val.x = 3)); // 3
console.log(val.x); // undefined
console.log(val); // 0
```

## Destructuring assignment : 구조 분해 할당

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

## Evaluation and nesting : 반환 값과 체이닝

- ! 할당을 체이닝하거나 중첩하는걸 지양 : 연결된 변수 할당이 전역 변수를 생성

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = (b = c = 1);
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
})();

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

### reference

- [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [don`t chain variable assignments](https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment)
