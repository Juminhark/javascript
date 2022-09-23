//? reduce()

//? 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고,
//? 하나의 결과값을 반환

const arr = [1, 2, 3, 4];

const init = 0;
const sum = arr.reduce((pre, cur) => pre + cur, init);

console.log(sum); // 10

//? reduce((acc, cur, curIndex, arr) => acc + cur, init)
