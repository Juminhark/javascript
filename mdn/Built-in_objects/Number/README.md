# Number

## Description

## Number encoding

- Number 타입은 double-precision 64-bit binary format(2진수) IEEE 754 값이다

- 64비트 구성
- - s : 부호 : sign 1bit : 음수(1), 양수(0)
- - e : 지수 : exponent 11bit
- - m : 가수 : fraction 52bit

```js
// +-|1 + m| * 2^(e - 1023)

// 50.625
// 1. 2진수로 변환 => 110010.101
// 2. 부동소수점 방식으로 변환 => 1.10010101 * 2^5
// m : 10010101
// e : 1028

// ? 분수 2진수로 바꾸는 방법
// ? 지수, 가수 구하는 방법
```

- Number는 소수점 이하 17자리 정도만 유지하며 산술은 반올림의 대상이 된다
- Number가 가질수 있는 가장 큰 값은 1.8E308 이보다 큰수는 상수 Infinity로 대체 => BigInt

## Number coercion

## Static properties

- Number.MAX_SAFE_INTEGER
- Number.MIN_SAFE_INTEGER

## Static methods

- Number.isInteger()

## reference

- [mdn/Built-in-objects/number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [혀니2코딩 - 부동소수점](https://youtu.be/DtAQ_lxcPck?si=iwCGixeNq3s86Je1)
