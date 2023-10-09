//? 6. Scope

//* Global Scope
const outside = 'outside';

if (true) {
	const inside1 = 'inside1';
	console.log(inside1, outside);
}

console.log(outside);
// console.log(inside1); //! error

{
	// console.log(inside1); //! error
	console.log(outside);
}

function outsideFunction() {
	console.log(outside);
	const inside2 = 'inside2';
}

outsideFunction();
// console.log(inside2); //! error

//! var를 사용하면 안되는 이유.
if (true) {
	var a = 'a';
}
console.log(a);

//* let, const : block scope

//* 여러 scope에서 변수를 다뤄야하는경유 => global scope
// if (true) {
// 	const hello = 'hello';
// }
// console.log(hello);

let hello;
if (true) {
	hello = 'hello';
}
console.log(hello);
