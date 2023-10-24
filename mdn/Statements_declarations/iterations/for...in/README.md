# for...in

## array, object의 property, value 접근

```js
// https://school.programmers.co.kr/learn/courses/30/lessons/120899

let array = [1, 8, 3];

for (const index in array) {
  console.log(`${index} : ${array[index]}`);
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property} : ${object[property]}`);
}
```
