# Assigning to properties : 속성 할당

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
