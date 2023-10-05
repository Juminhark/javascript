// * Assignment (=) : 할당 연산자
// 할당 연산자는 변수에 값을 대입하는데 사용

let x = 2;
const y = 3;
// console.log(x); // 2
// console.log((x = y + 1)); // 4
// console.log((x = x * y)); // 12
// console.log(x); // 12

// * Addition assignment operator (+=) : 더하기 할당 연산자
// 오른쪽 피연산자의 값을 변수에 더한결과를 다시 변수에 할당

let a = 2;
let b = 'hello';
// console.log((a += 3)); // 5
// console.log(a); // 5
// console.log((b += ' world')); // hello world
// console.log(b); // hello world

// * Subtraction assignment operator (-=) : 뺴기 할당 연산자
// 오른쪽 피연산자의 값을 변수에 뺸 결과를 다시 변수에 할당

a = 2;
// console.log((a -= 3)); // -1
// console.log((a -= 'Hello')); // NaN

// * Multiplication assignment operator (*=) : 곱하기 할당 연산자
// 오른쪽 피연산자의 값을 변수에 곱한 결과를 다시 변수에 할당

a = 2;
// console.log((a *= 3)); // 6
// console.log((a *= 'hello')); // NaN

// * Division assignment operator (/=) : 나누기 할당 연산자
// 오른쪽 피연산자의 값을 변수를 나눈 결과를 다시 변수에 할당

a = 3;
// console.log((a /= 2)); // 1.5
// console.log((a /= 0)); // Infinity
// console.log((a /= 'hello')); // NaN

// * Remainder assignment operator (%=) : 나머지 할당 연산자
// 오른쪽 피연산자의 값으로 변수를 나눴을 때의 나머지를 다시 변수에 할당

a = 3;
// console.log((a %= 2)); // 1
// console.log((a %= 0)); // NaN
// console.log((a %= 'hello')); // NaN

// * Exponentiation assignment operator (**=) : 거듭제곱 할당 연산자
// 오른쪽 피연산자의 값으로 변수를 거듭제곱한 결과를 다시 변수에 할당

a = 3;
// console.log((a **= 0)); //  1
// console.log((a **= 2)); //  9
// console.log((a **= 'hello')); //  NaN

// * Left shift assignment operator (<<=) : 왼쪽 시프트 할당 연산자
// 지정된 비트 수 만큼 왼쪽으로 비트를 이동시키고 그 결과를 변수에 반영

a = 5; // 00000000000000000000000000000101
a <<= 2; // 00000000000000000000000000010100
// console.log(a); // 20

// * Right  shift assignment operator (>>=) : 오른쪽 시프트 할당 연산자
// 지정된 비트 수 만큼 왼쪽으로 비트를 이동시키고 그 결과를 변수에 반영

a = 5; // 00000000000000000000000000000101
a >>= 2; // 00000000000000000000000000000001
// console.log(a); // 1

b = -5; //? 11111111111111111111111111111011
b >>= 2; //? 11111111111111111111111111111110
// console.log(b); // -2

let c = 5n;
c >>= 2n;
// console.log(c); // 1n

// ? Unsigned right shift assignment operator (>>>=) : 부호없는 오른쪽 시프트 할당 연산자

a = 5; // 00000000000000000000000000000101
a >>>= 2; // 00000000000000000000000000000001
// console.log(a); // 1

b = -5; // (-00000000000000000000000000000101)
b >>>= 2; //? (00111111111111111111111111111110)
// console.log(b); // 1073741822

// * Bitwise AND assignment (&=) : 비트 AND 할당 연산자 / 논리곱(conjunction)
// 두 피연산자의 이진 표현을 사용하고, 피연산자에 대한 AND 비트 연산 수행 결과를 변수에 할당

a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011
// 0000000000000000000000000000001
// console.log(a);  // 1

// * Bitwise XOR assignment (^=) : 비트 XOR 할당 연산자 / 배타적 논리합(exclusive disjunction)

a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011
// 00000000000000000000000000000110
// console.log(a); // 6

// *  Bitwise OR assignment (|=) : 비트 OR 할당 연산자 / 논리합(disjunction)

a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011
// 00000000000000000000000000000111
// console.log(a); // 7

// ? Logical AND assignment (&&=) : 논리 AND 할당 연산자
// && 논리연산자의 이해사 필요하다
// !  false, null, NaN, 0, 빈문자열, undifined : falsy 이므로 false로 변환

a = 1;
// a &&= 2;
// console.log(a);

// ? Logical OR assignment (||=) : 논리 OR 할당 연산자

const restaurant2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};
// restaurant2.numGuests ||= 10;
// console.log(restaurant2.numGuests);

// ? Nullish coalescing assignment (??=) : 논리 병합 할당

const d = { duration: 50 };
// d.duration ??= 10;
// console.log(d.duration);
