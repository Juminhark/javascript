//? Javascript Nuggets
//? Timestamps
console.log(new Date()); // 2021-10-27T06:08:58.569Z

//? Unix Timestamps
//? January 1, 1970
//? 1s = 1000ms

// Date.now()
console.log(Date.now()); // 1635314890357

// new Date().getTime()
console.log(new Date().getTime()); // 1635314890357

// new Date().valueOf()
console.log(new Date().valueOf()); // 1635314890357

setTimeout(() => {
	console.log(Date.now());
}, 1000);

//? create id`s in learning apps
let people = [];
people = [...people, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
	people = [...people, { id: Date.now(), name: 'john' }];
	console.log(people);
}, 1000);

//? create/get dates
console.log(new Date(1635314939584));
const now = Date.now();
const futureDate = new Date(now + 1000 * 6);

console.log(futureDate);
console.log(new Date());

// 사용하는곳 예.
// cookie의 기한 : expires
// const oneDay = 1000 * 60 * 60 * 24;
// expires: new Date(date.now() + oneDay)

//? difference between dates
const firstDate = new Date();
const secondDate = new Date(2021, 10, 27);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;

console.log(timeDifference);
const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);
