//? Array.prototype.slice()

//? 어떤 배열의 begin 부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
//? 원본 배열은 바뀌지 않는다

//? arr.slice([begin[, end]])

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); //  Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); //  Array ["camel", "duck"]
console.log(animals.slice(1, 5)); //  Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); //  Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); //  Array ["camel", "duck"]
console.log(animals.slice()); //  Array ["ant", "bison", "camel", "duck", "elephant"]

//? 배열안에 원시형값만 있을경우 깊은복사, 참조형이 있을경우 얕은복사
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
let newCar = myCar.slice(0, 2);

console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);
