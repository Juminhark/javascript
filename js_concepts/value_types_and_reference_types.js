//? 3. Value Types and Reference Types

console.log([10] === [10]);
console.log({ a: 20 } === { a: 20 });

let a = 50;
let b = 50;

console.log(a == b);
console.log(a === b);

//* value : string, number, boolean, NaN, undefined, null
let c = 10;
let d = c;

c = 50;
console.log(d);

//* reference : array, object, function
// array
const e = ['a', 'b'];
const f = e;

e.push('c');
console.log(f);

f.push('d');
console.log(e);

// object
const x = {
	g: 'hello',
};
const y = x;

y.g = 'lala';
console.log(x);

//! object 면 reference 타입이니까 null도 ref ??
console.log(typeof null);

//? In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.
//? There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol.
//? There also is null, which is seemingly primitive,
//? but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.
