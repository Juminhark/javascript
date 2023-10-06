//! [참조영상](https://youtu.be/36HrZHzPeuY)

//* Optional Chaining (ES11)
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining

{
	const person1 = {
		name: 'Ellie',
		job: {
			title: 'S/W Engineer',
			manager: {
				name: 'Bob',
			},
		},
	};

	const person2 = {
		name: 'Bob',
	};

	//! 👎
	{
		function printManager(person) {
			console.log(person.job.manager.name);
		}

		printManager(person1);
		// printManager(person2); //! error
	}
	console.clear();

	//! 👎 : Ternary Operator
	{
		function printManager(person) {
			console.log(
				person.job
					? person.job.manager
						? person.job.manager.name
						: undefined
					: undefined
			);
		}

		printManager(person1);
		printManager(person2);
	}
	console.clear();

	//! 👎 : Logical And Operator
	{
		function printManager(person) {
			console.log(person.job && person.job.manager && person.job.manager.name);
		}

		printManager(person1);
		printManager(person2);
	}
	console.clear();

	//* Ternary Operator, Logical AND Operator 는 이를 표현하는데 code가 반복된다.
	//? 👍 : Optional Chaining => Kotlin, Swift 와 같은 최신언어에서도 차용된 기능
	{
		function printManager(person) {
			console.log(person.job?.manager?.name);
		}

		printManager(person1);
		printManager(person2);
	}
	console.clear();
}

//* Nullish Coalescing Operator (ES11)
//* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

{
	//? Logical OR Operator
	//? false: false, '', 0, null, undefined
	{
		const name = 'Ellie';
		const userName = name || 'Guest';
		console.log(userName);
	}

	{
		const name = null;
		const userName = name || 'Guest';
		console.log(userName);
	}
	console.clear();

	//! 👎 : 빈 문자열, 0의 경우에도 원하는결과 값이 할당되지않음.
	{
		const name = '';
		const userName = name || 'Guest';
		console.log(userName);

		const num = 0;
		const message = num || 'undefined';
		console.log(message);
	}

	//? 👍
	{
		const name = '';
		const userName = name ?? 'Guest';
		console.log(userName);

		const num = 0;
		const message = num ?? 'undefined';
		console.log(message);
	}
}
