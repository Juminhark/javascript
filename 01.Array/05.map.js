//? map()

//? 배열 모든 요소에 주어진 함수를 실행하여 새로운 배열로 반환

const arr = [1, 4, 9, 16];

const map = arr.map((x) => x * 2);

console.log(map); // [ 2, 8, 18, 32 ]
