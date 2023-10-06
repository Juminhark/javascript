// RegExp.test() : method
console.log(/apple/.test('apple')); // true

console.log(/^\d{4}\.\d{2}\.\d{2}$/.test('2018g01.01')); // true
// ^ : 문장의 시직
// \d{n} : n개 숫자
// \ : 특수문자가 아닌 문자
// . : 어떤글자
