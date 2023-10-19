//? 1. Use strict
// Whole-script strict mode syntax
// added in ECMAScript 5
// use this for Vanilla JS
'use strict';

// JavaScript is very flexible
// flexible === dangerous
// strict 선언 하지 않고 a = 6; 할 경우 선언되지 않은 a 를 사용하여 error

// let a;
// a = 6;

//? 2. Variable, rw(read / write)
// let (added in ES6)

// Global Scope : 여기서 변수가 정의 될 경우 어플리케이션의 시작부터 종류까지 항상 메모리에 남겨질수 있으니 사용에 주의해야한다
let globalName = 'global name';
{
  // Block Scope
  let name = 'Ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
// console.log(name); //error
console.log(globalName);

//! var (don`t ever use this!);
//! var hoisting (move declaration from bottom to top)
//! 어디서 선언 하였느냐와 상관없이 제일 위로 올린다
//! has no block scope : scope를 무시한다.

{
  console.log(age);
  age = 4;
  console.log(age);
  var age;
}
console.log(age);

//? 3. Constant, r(read only) : 상수
// use const whenever possible.
// only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// 가능하면 변경되지 않는 데이터 타입을 사용
// favor immutable data type always for a few reasons:
//  - security : 보안
//  - thread safety : 여러 thread가 접근 가능한 변수가 변동되는것을 방지
//  - reduce human mistakes

//? 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function : 변수 할당 가능 -> 콜백함수

// c 경우 low-level 언어라 memory 관리가 세세하게 가능

//! primitive 변수는 값을 바로 참조, object 변수는 reference 를 참조.
//! java에서는 primitive type은 data가 stack 영역에 생성.
//! reference type은 heap 영역에 data가 생성되고 stack 영역에서 변수로 data를 참조.
//! stack영역에서 참조하지 않는 heap 영역의 data는 주기적으로 gc에 의해 사라진다.

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don`t use it yet)
const bigInt =
  1231234123445643589674986789347568946893457678937459689436798436n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined : 값이 할당되지 않은 변수
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects : 고유한 식별자가 필요한 경우
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

//?? 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //! error

//! 이러한 문제를 해결하기 위해 typescript에서는 변수에 알맞는 data type을 지정.

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
console.log(ellie);

//! const로 지정된 ellie 변수가 참조하고있는 data 공간 자체는 잠겨있어 변경할수 없지만
//! name, age가 가르키고 있는 값은 변경 가능하다.

//? JAVA : data types
// Primitive type
//  - Boolean Type
//  - Numeric Type
//    - Integral Type
//      - Integer Type(short, int, long)
//      - Floating Point Type(float, double)
//    - Character Type(char)
// Reference Type
//  - Class Type
//  - Interface Type
//  - Array Type
//  - Enum Type
//  - etc.

//! Java는 data의 사이즈를 고려하여 변수를 설정해야하지만 JavaScript에서는 숫자는 number
//! 또한 type 자체가 dynamic 하기 때문에 let으로 선언.

//! ** var hoisting
//! ** first-class function
//! Variable(mutable) vs Constant(immutable)
