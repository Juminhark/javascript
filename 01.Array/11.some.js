//? Array.some()

//? 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
//? 빈 배열이면 false return

const array = [1, 2, 3, 4, 5];

const even = (e) => e % 2 === 0;

console.log(array.some(even)); // true

console.log([].some(even)); // false
