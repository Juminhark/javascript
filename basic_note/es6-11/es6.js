//! [참조영상](https://www.youtube.com/watch?v=36HrZHzPeuY)

//? ~ ES6 (2015)

//* Shorthand property names
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer

{
	const ellie1 = {
		name: 'Ellie',
		age: '18',
	};

	const name = 'Ellie';
	const age = '18';

	//! 👎
	const ellie2 = {
		name: name,
		age: age,
	};

	//? 👍
	const ellie3 = {
		name,
		age,
	};

	console.log(ellie1, ellie2, ellie3);
	console.clear();
}

//* Destructuring Assignment(구조 분해 할당)
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

{
	// object
	const student = {
		name: 'Anna',
		level: 1,
	};

	//! 👎
	{
		const name = student.name;
		const level = student.level;
		console.log(name, level);
	}

	//? 👍
	{
		const { name, level } = student;
		console.log(name, level);

		const { name: studentName, level: studentLevel } = student;
		console.log(studentName, studentLevel);
	}

	// array
	const animals = ['🙉', '🐻'];

	//! 👎
	{
		const first = animals[0];
		const second = animals[1];
		console.log(first, second);
	}

	//? 👍
	{
		const [first, second] = animals;
		console.log(first, second);
	}

	console.clear();
}

//* Spread Syntax(전개 구문)
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

{
	const obj1 = { key: 'key1' };
	const obj2 = { key: 'key2' };
	const array = [obj1, obj2];

	// array copy
	const arrayCopy = [...array];
	console.log(array, arrayCopy);

	const arrayCopy2 = [...array, { key: 'key3' }];
	//! obj1은 참조중. array로 구성된 구조체는 원래값의 변동에 영향을 받는다.
	obj1.key = 'newKey';
	console.log(array, arrayCopy, arrayCopy2);

	// object copy
	const obj3 = { ...obj1 };
	console.log(obj3);

	// array concatenation
	const fruits1 = ['🍇', '🍈'];
	const fruits2 = ['🍉', '🥝'];
	const fruits = [...fruits1, ...fruits2];
	console.log(fruits);

	// object merge
	const dog1 = { dog1: 'dog1' };
	const dog2 = { dog2: 'dog2' };
	const dog = { ...dog1, ...dog2 };
	console.log(dog);

	{
		// 동일한 참조값이 들어온다면 나중에 들어온 참조값으로 data를 참고한다.
		const dog1 = { dog: 'dog1' };
		const dog2 = { dog: 'dog2' };
		const dog = { ...dog1, ...dog2 };
		console.log(dog);
	}
	console.clear();
}

//* Default parameters(기본값 매개변수)
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

{
	//! 👎
	{
		function printMessage(message) {
			if (message == null) {
				console.log('default message');
			} else {
				console.log(message);
			}
		}

		printMessage('hello');
		printMessage();
	}

	//? 👍
	{
		function printMessage(message = 'default message') {
			console.log(message);
		}

		printMessage('hello');
		printMessage();
	}
	console.clear();
}

//? console
{
	const arr = [
		['name', 'id', 'parent'],
		['Sob', '1', 'yes'],
		['Jon', '2', 'no'],
	];

	console.table(arr);

	console.error('error');
	console.warn('warn');
	console.clear();
}

//* Ternary Operator
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

{
	const isCat = true;

	//! 👎
	{
		let component;
		if (isCat) {
			component = '🐱';
		} else {
			component = '🐴';
		}
		console.log(component);
	}

	//? 👍
	{
		let component = isCat ? '🐱' : '🐴';
		console.log(component);
		console.log(isCat ? '🐱' : '🐴');
	}
	console.clear();
}

//* Template Literals
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals

{
	const weather = '⛅';
	const temperature = '16°C';

	//! 👎
	console.log(
		'Today weather is ' + weather + ' and temperature is ' + temperature
	);

	//? 👍
	console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}
