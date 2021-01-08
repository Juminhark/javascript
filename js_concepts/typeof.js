//? 5. typeof , instanceof

console.log(typeof 123123);
console.log(typeof '123123');
console.log(typeof true);
console.log(typeof function () {});
console.log(typeof undefined);

console.log(typeof {});
//* array, null 도 object로 표시
console.log(typeof null);
console.log(typeof []);

//? instanceof :  array와 object의 구분과 같이 primitive가 아닌 경우
console.log([] instanceof Array);
console.log({} instanceof Array);

console.log([] instanceof Object);
console.log({} instanceof Object);

//! typeof null : object
//! [] instanceof object : true
