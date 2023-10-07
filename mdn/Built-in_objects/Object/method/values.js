//? Object.values()

//? 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴
//? 이 배열은 for...in 구문과 동일한 순서를 갖는다
//? for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있다

//? 구문 : Object.values(obj);

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1)); // ["somestring", 42, false]
