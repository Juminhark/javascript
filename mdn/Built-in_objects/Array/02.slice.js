//? Array.prototype.slice()

//? 어떤 배열의 begin 부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
//? 원본 배열은 바뀌지 않는다

// 배열안에 원시형값만 있으면 깊은 복사, 참조형이 있으며 얕은복사
// 복사본 반환

//? arr.slice([begin[, end]])

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); //  Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); //  Array ["camel", "duck"]
console.log(animals.slice(1, 5)); //  Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); //  Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); //  Array ["camel", "duck"]
console.log(animals.slice()); //  Array ["ant", "bison", "camel", "duck", "elephant"]

//? 배열안에 원시형값만 있을경우 깊은복사, 참조형이 있을경우 얕은복사
let myHonda = { color: 'red', engine: { size: 2.2 } };
let myCar = [myHonda, 2, 'cherry condition'];
let newCar = myCar.slice(0, 2); // end는 미포함으로 0, 1 인덱스만 복사

console.log(myCar); // [ { color: 'red', engine: { size: 2.2 } }, 2, 'cherry condition' ]
console.log(newCar); // [ { color: 'red', engine: { size: 2.2 } }, 2 ]

console.log(myCar[0].color); // red
console.log(newCar[0].color); // red

myHonda.color = 'purple';
console.log(myHonda.color); // purple

// 참조하고 있는 두배열 모두 바뀜
console.log(myCar[0].color); // purple
console.log(newCar[0].color); // purple
