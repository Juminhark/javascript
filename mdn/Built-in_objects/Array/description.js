//? 생성방법
let myArray1 = new Array('hello', 'world');
let myArray2 = ['hello', 'world'];

//? data 삽입방법
let myArray = [];
myArray.push('hello');
myArray.push('world');
myArray[2] = '!';
console.log(myArray);

//Leaving indices
let myArray = [];
myArray[0] = 'hello';
myArray[1] = 'world';
myArray[3] = '!';
console.log(myArray); // [ "hello", "world", undifined, "!" ];

//Accessing array items by index
let myArray = ['hello', 'world', '!'];
console.log(myArray[2]); //"!"

//[Array Methods and Properties]
//Length of an array
let myArray = ['hello', 'world', '!'];
console.log(myArray.length); //3

let myArray = ['hello', 'world', '!'];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myArray = [2, 3, 4];
let myOtherArray = [4, 5, 6, 7];
let wholeArray = myArray.concat(myOtherArray); // [2, 3, 4, 5, 6, 7]
console.log(wholeArray);
console.log(wholeArray.length); //7

/* 보내는 데이터는 왠만하면 string 타입이다 그렇기 때문에
배열상태로 보는것보다 다 붙여서 string 타입으로 보내는 방법이 있다.
이건 뜯는쪽에서 알아보기 힘들다 앞에 뜯는 자리수가 틀려버리면 다 틀려진다
이건 옜날 스타일이고 그다음은 xml형태로 tag를 붙여서 보낸다
이건 또 데이터 용량이 너무커
요즘에는 제이슨방법   property로 ,로 구분해서 보낸다*/

//Joining elements
let myArray = ['hello', 'world', '!'];
// The default separator is a comma.
console.log(myArray.join()); //"hello, world, !"
console.log(myArray.join().length); //13
// Any string can be used as separator...
console.log(myArray.join(' ')); //"hello world !";
console.log(myArray.join('!!')); //"hello!!world!!!";
// ...including an empty one.
let arr = myArray.join('');
console.log(arr); // "helloworld!"
console.log(arr.length); //11

//Pushing and popping
let myArray = [];
myArray.push(0); //[ 0 ]
myArray.push(2); //[ 0, 2 ]
myArray.push(7); //[ 0, 2, 7]
myArray.pop(); //[ 0, 2 ]
console.log(myArray);

let myArray = ['world', 'hello'];
myArray.reverse(); //[ "hello", "world" ]
console.log(myArray);
/* 배열 순서 거꾸로 */

//Queue with shift() and push()
let myArray = [];
myArray.push(0); //[ 0 ]
myArray.push(2); //[ 0, 2 ]
myArray.push(7); //[ 0, 2, 7]
myArray.shift(); //[ 2, 7 ]
console.log(myArray);
/* index가 바뀐다 */

let myArray = [];
myArray.unshift(0); //[ 0 ]
myArray.unshift(2); //[ 2, 0 ]
myArray.unshift(7); //[ 7, 2, 0 ]
console.log(myArray);

//Slicing
let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = myArray.slice(3);
console.log(myArray); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(newArray); //[ 4, 5, 6, 7, 8 ];
// index 번호부터 잘라서 새로운 배열을 만들어낸다
// 기존의 배열은 없어지지 않는다.

//myArray.splice (index, length, values, ...);
let myArray = [0, 7, 8, 5];
// index 1 부터 length 2 를 value [1,2,3,4]로 치환
myArray.splice(1, 2, 1, 2, 3, 4);
console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]

// Sorting without comparing function.
// 배열 정렬
let myArray = [3, 2, 1];
myArray.sort(); //1, 2 ,3
console.log(myArray);

// 내림차순 정렬
function descending(a, b) {
  return b - a;
}
let myArray = [1, 2, 3];
myArray.sort(descending); // [ 3, 2, 1 ]
console.log(myArray);

//Native.forEach()
function printElement(elem) {
  console.log(elem);
}
function printElementAndIndex(elem, index) {
  console.log('Index' + index + ':' + elem);
}
function negateElement(elem, index, array) {
  array[index] = -elem;
}
myArray = [1, 2, 3, 4, 5];
//Prints all elements to the console
myArray.forEach(printElement);
//Prints "Index 0: 1", "Index 1: 2", "Index 2: 3", ...
myArray.forEach(printElementAndIndex);
//myArray is now [ -1, -2, -3, -4, -5 ]
myArray.forEach(negateElement);
console.log(myArray);
