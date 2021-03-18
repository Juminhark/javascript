//? 10. setTimeout, setInterval and requestAnimationFrame

//? setTimeout : 지연 실행

//* interval : 함수를 queue에 올리기까지 최소대기시간

const interval = 1000;

setTimeout(() => {
	console.log('timeout');
}, interval);

setTimeout(console.log, interval + 500, 'timeout2');

//* 취소하고 싶을때
const helloT = setTimeout(console.log, 5000, 'timeout3');
clearTimeout(helloT);

//? setInterval : 반복 실행

const helloI = setInterval(console.log, 2000, 'Interval');

setTimeout(clearInterval, 10000, helloI);

//? requestAnimationFrame
//* 기존의 setInterval로 animation을 구현했던것을 대체하기위해

const sayHi = () => {
	console.log('hi');
	requestAnimationFrame(sayHi);
};

// requestAnimationFrame(sayHi);
