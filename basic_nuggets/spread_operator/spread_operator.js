//? Spread Operator
//? Allows and iterable to spread/expand individually inside receiver
//? Split into single items and COPY them

const premium = 'premium';
const letters = [...premium];
console.log(letters); // ['p', 'r', 'e','m', 'i', 'u','m']

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];

console.log(friends); // [ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

//? copy
// const newFriends = friends; //! 원본 훼손
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends); // [ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(newFriends); // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

//? ES2018 - ES8 Objects
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'seoul', name: 'peter' };
console.log(person); // { name: 'john', job: 'developer' }
console.log(newPerson); // { name: 'peter', job: 'developer', city: 'seoul' }
