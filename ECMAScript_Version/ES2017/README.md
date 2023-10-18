# new features in ECMAScript 2017

- String.padding
- Object.entries()
- Object.values()
- async and await
- Object.getOwnPropertyDecsriptors

## String Padding

String mehtod : padStart() and padEnd()

```js
let text = '5';
text = text.padStart(4, '0');

console.log(text); // 0005

text = text.padEnd(8, '0');
console.log(text); // 00050000
```

## Object.entries()

Object.entries() returns an array of the key/value pair in an object

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

let text = Object.entries(person);
console.log(text);

// [
//   [ 'firstName', 'John' ],
//   [ 'lastName', 'Doe' ],
//   [ 'age', 50 ],
//   [ 'eyeColor', 'blue' ]
// ]
```

## Object.values()

Object.values() are similar to Object.entries(), but returns a single dimension array of the object value

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

let text = Object.values(person);
console.log(text); // [ 'John', 'Doe', 50, 'blue' ]
```

## async functions

```js
async function myDisplay() {
  let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve('I love You !!');
    }, 1000);
  });
  let value = await myPromise;
  console.log(value); // I love You !!
}

myDisplay();
```
