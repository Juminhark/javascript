'use strict';

//? OOP(Object-Oriented Programming)
//* class: template
//* object: instance of a class

//? JavaScript classes
//*  - introduced in ES6
//*  - syntactical sugar over prototype-based inheritance

//? 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//?? 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		// if (value < 0) {
		//   throw Error('age can not be negative');
		// }
		this._age = value < 0 ? 0 : value;
	}

	//! age 와 _age 의 차이점을 이해.
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//? 3. Fields (public, private)
//* Too soon!
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

//? 4. Static properties and methods
//* Too soon!
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // static field
Article.printPublisher(); // static function

//? 5. Inheritance
//* a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
//! 다형성 / overriding
class Triangle extends Shape {
	draw() {
		super.draw(); // 부모의 method를 호출
		console.log('🔺');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}

	toString() {
		return `Triangle: color: ${this.color}`;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//? 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
console.log(triangle.toLocaleString());

let obj = { value: 5 };
function change(value) {
	value.value = 7;
}
change(obj);
console.log(obj);

//? [class](https://ko.javascript.info/private-protected-properties-methods)

class CoffeeMachine {
	// Data Fields
	//* public: 금부터 선언되는 멤버변수와 함수는 모두 접근 허용.
	constructor(power) {
		this._power = power;
	}

	get power() {
		return this._power;
	}

	//* protected:  지금부터 선언되는 멤버변수와 함수는 자기 클래스와 상속 클래스에서만 접근 허용.
	_waterAmount = 0;

	set waterAmount(value) {
		this._waterAmount = value < 0 ? 0 : value;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	//* private: 지금부터 선언되는 멤버변수와 함수는 자기 클래스에서만 접근 허용.
	#waterLimit = 200;

	#checkWater(value) {
		if (value < 0) throw new Error('물의 양은 음수가 될 수 없습니다.');
		if (value > this.#waterLimit) throw new Error('물이 용량을 초과합니다.');
	}
}

// 객체생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = -10;
console.log(coffeeMachine.waterAmount); // 0

// 읽기전용
console.log(coffeeMachine.power); // 100

// 클래스 외부에서 private에 접근할 수 없음
// coffeeMachine.#checkWater(); //! Error
// coffeeMachine.#waterLimit = 1000; //! Error

//! overriding : 상속관계의 클라스 간에 같은 이름의 메소드를 정의하는것

//! overloading : 같은 메솓드라도 매개변수를 다르게하여 사용.

//! encapsulation(캡슐화) : 사용자가 객체의 field를 직접 조작하는것을 막기 위함.
//! 접근 지정자 : private, protected, public

//! age 와 _age 의 차이점
