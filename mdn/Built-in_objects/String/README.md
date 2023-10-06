# String Method

- String.split()
- String.replace()
- String.substring()
- String.toLowerCase()
- String.toUpperCase()
- String.match()
- String.repeat()

## String is iterable

```js
//* 문자열은 iterable

let test = ['ASD', 123];

for (let i of test) {
  const [a, b, c] = i;
  console.log(a, b, c);
}

// A S D
// 123 => ERROR

// str 
let my_string = 'abcdefg'

for(let i of my_string){
    console.log(i)
}

// a
// b
// c
// d
// e
// f
// g


```


## 특정문제 제거
