## 3. type

- Number
- String
- Boolean
- Symbol
- Object
- Object - 함수 (Funtion)
- Object - 배열 (Array)
- Object - 날짜 (Date)
- Object - 정규식 (RegExp)
- null
- undefined

## 부동소수점

- 정규화 : 가수부(m) \* 10^지수부(e)

```js
console.log(0.1 + 0.2); // 0.30000000000000004

// ex) 50.625
// 1. 2진수로 변환 => 110010.101
// 0.625를 2진수로 변환하는 방법
// 0.625 * 2 = 1.250
// 0.250 * 2 = 0.500
// 0.500 * 2 = 1.000
// 0.101
// 2. 부동 소수점 방식으로 변환 => 1.10010101 * 2^5
```

### reference

- [실수표현방법 - 고정/부동 소수점](https://www.youtube.com/watch?v=DtAQ_lxcPck)
