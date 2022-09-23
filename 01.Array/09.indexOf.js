//? Array.prototype.indexOf()

//? 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환
//? 존재하지 않으면 -1을 반환

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1

// 인덱스 2부터 시작
console.log(beasts.indexOf('bison', 2)); // 4

// 존재하지 않을 떄
console.log(beasts.indexOf('giraffe')); // -1
