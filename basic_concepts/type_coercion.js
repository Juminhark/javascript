//? 4. Type Coercion === conversion
//* 타입 강제 즉. js가 값을 강제적으로 변환.

console.log(4 + 'hello'); // 4hello
console.log(4 + 4 + 'hello'); // 8hello
console.log('' == true); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(66 + true); // 67

//* false : 0, undefined, null, NaN
//* true => 1

//* number + string => string  : loaded operator

console.log(3 + 4 + +'5');
console.log(0.1 + 0.2 == 0.30000000000000004); // true

console.log(24 + '1'); // 241
console.log(24 - '1'); // 23

console.log('' == 0); // true

//? === 에서는 type coercion이 일어나지 않는다.

//! === 을 써라!
