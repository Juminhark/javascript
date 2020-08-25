// 한줄 주석 comment

/*
  여러줄
  주석
*/

// * 변수와 상수 *

// 변하는 값 : 변수 : let
let inbox1 = 100;

console.log('inbox1 : ' + inbox1);
inbox1 = 200;
console.log('inbox1 : ' + inbox1);

// 변하지않는 값 : 상수 : const
const inbox3 = 30;

try {
	inbox3 = 300;
} catch (error) {
	console.log('const error : 값이 정해진 상수는 값을 바꿀수없다');
}

// 문자열 , 숫자
let inbox2 = '문자열';
let allEmails = inbox1 + inbox2;
console.log('allEmails : ' + allEmails);

// * 변수 명명 규칙 *

// camel Case
let yourVideos = 20;
// Pascal Case
let YourVideos = 20;
// Underscore
let your_videos = 20;

// > node variables.js
