//? Array.from()

//? 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체 생성

//? Array.from(arrayLike[, mapFn[, thisArg]])
//? arrayLike : 배열로 변환하고자 하는 유사 배열 개개체나 반복가능한 객체.
//? mapFn : 배열의 모든 요소에 대해 호출할 맵핑 함수
//? thisArg : mapFn 실행시에 this로 사용할 값.
//? return value : 새로운 Array 인스턴스

console.log(Array.from('foo')); // [ 'f', 'o', 'o']

console.log(Array.from([1, 2, 3], (x) => x + x)); // [ 2, 4, 6 ]

console.log(Array.from({ length: 5 }, () => 0)); // [ 0, 0, 0, 0, 0 ]
