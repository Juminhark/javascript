//? forEach()

//? 주어진 함수를 배열 요소 각각에 실행합니다

const arr = ['a', 'b', 'c'];

arr.forEach((e) => console.log(e));

// a
// b
// c

//* for of 랑 같은거임 그냥
for (let e of arr) {
  console.log(e);
}
