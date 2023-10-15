## String Method

- String.split()
- String.replace()
- String.substring()
- String.toLowerCase()
- String.toUpperCase()
- String.match()
- String.repeat()
- String.replaceAll()

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
let my_string = 'abcdefg';

for (let i of my_string) {
  console.log(i);
}

// a
// b
// c
// d
// e
// f
// g
```

## Error : replaceAll() is not a function

브라우저 버전에 따라 메소드가 구현/지원이 되지 않는 경우가 있다.
지원하지 않는 버전에서는 string.replace() 함수는 사용하되 정규표현식으로 대체해서 사용.

- [node es2015 support](https://node.green/)
  15.14.0 이상의 버전부터 String.prototype.replaceAll을 지원
