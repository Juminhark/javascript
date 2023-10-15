// faster/easier way to access/unpack variables from arrays, objects

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

const 
console.log(fruit1, fruit2, fruit3);

// 순서에 따른 결정
const [notJohn, peter, bob, , kelly, susan] = friends;

console.log(notJohn, peter, bob, kelly, susan); // john peter bob kelly undefined

let first = 'bob';
let second = 'john';

// 일반적 방법
// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second); // john bob