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
	symbol: Symbol('id'),
	jump: function () {
		console.log(`${this.name} can jump!`);
	},

	//! Symbol, function 은 json stringify 되지않음.
};

json = JSON.stringify(rabbit);
console.log(json);

//? 2. JSON to Object
// parse(json)
