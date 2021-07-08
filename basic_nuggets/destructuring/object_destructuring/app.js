// faster/easier way to access/unpack variables from arrays, objects

const bob = {
	first: 'bob',
	last: 'sanders',
	city: 'chicago',
	siblings: {
		sister: 'jane',
	},
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const city = 'some';

//? object 안의 properties의 이름을 같는 값을 지정
const {
	first,
	last,
	city: usa,
	siblings: { sister: sisterName },
} = bob;

console.log(first, last, city, usa, sisterName); // bob sanders some chicago jane
// city, usa 주목

function printPerson({ first, last, city, siblings: { sister } }) {
	console.log(first, last, city, sister);
}

printPerson(bob);
