function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

// toString()으로 객체 클래스 검사
console.log(dog1.toString()); // [object Object]

// 메서드를 재정의하며 사용
Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString()); // Gabby

// 10진수를 2진수로
let num = 10;
console.log(num.toString(2)); // 1010
