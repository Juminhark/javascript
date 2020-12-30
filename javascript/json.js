//? HTTP(HyperText Transfer Protocol)

//? Client - request -> Server
//? Server - response -> Client

//? AJAX(Asynchronous Javascript And XML)

//? XHR(XMLHttpRequest) : AJAX 요청을 생성하는 JavaScript API

//? JSON(JavaScript Object Notation)
//* simplest dta interchange format
//* lightweight text-based structure
//* easy to read
//* key - value pairs
//* used for serialization and transmission of data between the network the network connection
//* independent programming language and platform

//* object - serialize -> string
//* string - deserialize -> object

//? 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// symbol: Symbol('id'),
	jump: function () {
		console.log(`${this.name} can jump!`);
	},

	//! Symbol, function 은 json stringify 되지않음.
};

json = JSON.stringify(rabbit);
console.log(json);

//* 원하는 properties만 담을수도 있다.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

//* key, value를 세밀하게 다룰수도 있다.
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return value;
});
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

console.clear();

//? 2. JSON to Object
//* parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump(); //! error

//! json으로 stringify될때 function은 담기지 않는다.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //!error
console.log(typeof obj.birthDate);

//! parse의 reviver 함수를 사용하여 원래 Object를 복구
const objReviver = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});
console.log(objReviver.birthDate.getDate());
