//* https://developer.mozilla.org/ko/docs/Web/API/Document

//* document.getElementById()
const changeColor = (newColor) => {
	const colorEl = document.getElementById('para');
	colorEl.style.color = newColor;
};

//* document.querySelector()
console.log('#foo\bar'); // "#fooar" ('\b'는 백스페이스 컨트롤 문자)
// document.querySelector('#foo\bar'); // 일치하는 요소 없음

console.log('#foo\\bar'); // "#foo\bar"
console.log('#foo\\\\bar'); // "#foo\\bar"
const fooBar1 = document.querySelector('#foo\\bar'); // 첫 번째 <div>
console.log(fooBar1);

// document.querySelector('#foo:bar'); // 일치하는 요소 없음
const fooBar2 = document.querySelector('#foo\\:bar'); // 두 번째 <div>
console.log(fooBar2);

let el = document.querySelector('div.querySelector #foo\\:bar');
console.log(el);
el = document.querySelector('.querySelector');
console.log(el);
