let mySet = new Set();

mySet.add(1);

let o = { a: 1, b: 2 };
mySet.add(o);

mySet.add(1);

mySet.has(1);

mySet.size; // 5

mySet.delete(1);
