//? Object.keys()

//? 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환

//? 구문 : Object.keys(obj)

const object1 = {
  a: 'something',
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); // [ 'a', 'b', 'c' ]

// 단순 배열
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // ['0', '1', '2']

// 배열형 객체
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // ['0', '1', '2']

// 키와 순서가 무작위인 유사 배열 객체
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo 는 열거할 수 없는 속성입니다.
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
