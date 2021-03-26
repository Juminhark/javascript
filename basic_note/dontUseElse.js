//? [Guard Clauses](https://blog.fakecoding.com/archives/guard-clause/)

//! 👎 : Single return  is bad
function canDrink(person) {
	if (person?.age != null) {
		if (person.age < 18) {
			console.log('Nope !');
		} else if (person.age < 21) {
			console.log('not in us !');
		} else {
			console.log('yes !');
		}
	} else {
		console.log('You are not a person');
	}

	return 1;
}

const p = {
	age: 22,
};

canDrink(p);

//? 👍
function canDrinkBetter(person) {
	if (person?.age == null) {
		console.log('You are not a person');
		return;
	}

	if (person.age < 18) {
		console.log('Nope !');
		return;
	}

	if (person.age < 21) {
		console.log('not in us !');

		return;
	}

	console.log('yes !');
}

canDrinkBetter(p);

//? 👍👍 : ExtractFunction
function canDrinkBest(person) {
	if (person?.age == null) {
		console.log('You are not a person');
		return;
	}

	let result = canDrinkResponse(person.age);

	console.log(result);
}

function canDrinkResponse(age) {
	if (age < 18) return 'Nope !';
	if (age < 21) return 'not in us !';
	return 'yes !';
}

canDrinkBest(p);
