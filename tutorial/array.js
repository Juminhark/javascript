//* Array 생성
let arr = new Array(3);
console.log(arr); // [ <3 empty items> ]
console.log(Array.isArray(arr)); // true

let fruits = ['사과', '바나나', '배', '수박'];

//* index로 array의 원소에 접근
console.log(fruits[0]); // 사과
let last = fruits[fruits.length - 1];
console.log(last); // 수박

//* array 앞의 원소 제거
let first = fruits.shift();
console.log(first); // 사과

//* array 맨 앞의 원소 추가
fruits.unshift('멜론');
console.log(fruits); // [ '멜론', '바나나', '배', '수박' ]

//* array 맨 뒤의 원소 제거
last = fruits.pop();
console.log(last); // 수박

//* array 맨 뒤의 원소 추가
fruits.push('망고');
console.log(fruits); // [ '멜론', '바나나', '배', '망고' ]

//* index 찾기
let position = fruits.indexOf('배');
console.log(position); // 2

//* array 안에서 특정값 1개을 찾아 제거
if (fruits.includes('배')) {
	fruits.splice(fruits.indexOf('배'), 1);
}
console.log(fruits);

//* array 채우기 : 특정 값으로 모든 원소를 초기화
console.log(arr.fill(0));
arr = Array(5).fill(0);
console.log(arr);

//* 2중 array
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

//* arr.slice([beginIndex[, endIndexBefore]])
// 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
//! 원본 배열은 바뀌지 않는다 => 복사본을 만들때 사용.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]

//* arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//  배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // index 1에 0개를 지우고 item 추가
console.log(months); // ['Jan','Feb','March', 'April', 'June']
months.splice(4, 1, 'May'); // index 4에 1개 지우고 item 추가
console.log(months); //['Jan','Feb','March', 'April', 'May']

//* arr.join([separator = ',']) : Array 합치기
arr = ['aaa', 'bbb', 'ccc', 'ddd'];
console.log(arr.join()); // aaa,bbb,ccc,ddd
console.log(arr.join('')); // aaabbbcccddd

//* arr.toString() : 지정된 배열 및 그 요소를 나타내는 문자열을 반환
//! Number.toString([radix]) : 숫자를 radix 진수로 표현
console.log(arr.toString()); // aaa,bbb,ccc,ddd
console.log((21).toString(2));

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

//* arr.filter()
//! 원본배열을 훼손하지않는다 => filter() condition 값이 true 인값을 모아 새로운 배열을 만든다.
const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 },
];

const filteredItems = items.filter((item) => {
	return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

//* arr.map()
//! 원본배열을 훼손하지않는다 => filter() condition 값이 true 인값을 모아 새로운 배열을 만든다.
const itemNames = items.map((item) => {
	return item.name;
});

console.log(items);
console.log(itemNames);

//* arr.find() : 조건에 만족한 1번째 요소를 return
const foundItem = items.find((item) => {
	return item.name == 'Book';
});
console.log(foundItem);

//* arr.forEach() : 각 원소에 접근을 해볼때
items.forEach((item) => {
	console.log(item.name);
});

//* arr.some() : 조건을 만족하는것이 1개 이상 존재할때
const hasInexpensiveItems = items.some((item) => {
	return item.price >= 800;
});
console.log(hasInexpensiveItems);

//* arr.every() : 조건을 모든 원소가 만족할때
const allItems = items.every((item) => {
	return item.price <= 100;
});
console.log(allItems);

//* arr.reduce()
const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, 0);

const totalObject = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, {});

// currentTotal: 누산기, 초기값 = 0
// console.log(total);

//* arr.includes(valueToFind[, fromIndex]) : 포함 여부
const numbers = [1, 2, 3, 4, 5];
const includesTwo = numbers.includes(2);
console.log(includesTwo); // true
console.log(numbers.includes(2, 2)); // false
console.log([1, 2, NaN].includes(NaN)); // true

//! array의 경계를 넘어간다면, js 엔진은 array를 update
numbers[9] = 9;
console.log(numbers); // [ 1, 2, 3, 4, 5, <4 empty items>, 9 ]
console.log(Object.keys(numbers)); // [ '0', '1', '2', '3', '4', '9' ]
