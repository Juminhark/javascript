function makeUppercase(value) {
	console.log(value.toUpperCase());
}

function reverseString(value) {
	console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
	const fullName = `${name} smith`;
	cb(fullName);
}

// handleName('peter', makeUppercase);
// handleName('peter', reverseString);

handleName('susan', function (value) {
	console.log(value);
});

handleName('sw', (value) => console.log(value));

// array methods, setTimeout, event listeners etc
