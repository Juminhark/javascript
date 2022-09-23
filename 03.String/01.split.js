//? String.prototype.split()

//? String 객체를 지정한 구분자를 이용하여 나눈 새로운 문자열 반환

const str = 'your dog loves you';
const words = str.split(' ');
console.log(words, words[3]);

const chars = str.split('');
console.log(chars, chars[3]);

// 배열안에 담기
const strCopy = str.split();
console.log(strCopy); // [ 'your dog loves you' ]

//? split()
//? split(separator)
//? split(separator, limit)

const limit = str.split(' ', 2);
console.log(limit); // [ 'your', 'dog' ]
