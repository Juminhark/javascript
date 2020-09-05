//* Array 생성

let arr = new Array(3);
arr[0] = 0;
arr[1] = 1;
console.log(arr);

arr = Array(2).fill(0);
console.log(arr);

arr = Array.from(Array(5), () => Array(3).fill(0));
console.log(arr);

//* array 최대값, 최소값

arr = [0, 77, 33, 11, 99, 88, 55];

console.log(Math.max.apply(null, arr)); // 99
console.log(Math.min.apply(null, arr)); // 0

//* str.split([separator[, limit]])

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.split('')[8]); // "k"
console.log(str.split('', 5)); // [ 'T', 'h', 'e', ' ', 'q' ]
console.log(str.split()); // ["The quick brown fox jumps over the lazy dog."]

//* array.slice()

//* arr.join() , arr.toString() : Array 합치기

let arr = ['aaa', 'bbb', 'ccc', 'ddd'];

console.log(arr.toString());
console.log(arr.join());

//* for in : key

const obj = { a: 1, b: 2, c: 3 };

for (const k in obj) {
	console.log(`${k} : ${obj[k]}`);
}

//* for of : value

arr = [1, 2, 3];

for (const v of arr) {
	console.log(v);
}
