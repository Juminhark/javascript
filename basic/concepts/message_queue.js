//? 파이썬은 blocking 언어, 자바스크립트는 none blocking 언어

//? 9. Message Queue and Event Loop

setTimeout(() => console.log('hi'), 0);
console.log('bye');
console.log('bye2');
console.log('bye3');
setTimeout(() => console.log('hi2'), 0);
console.log('bye4');

//* bye가 hi 보다 먼저 찍히는 이유
//* 1. setTimeout() 은 Web API에 쌓임
//* 2. Browser에 의해 setTimeout() 실행되면 0초후 안의 callback함수를 실행
//* 3. 안에 있는 console.log('hi')가 Queue(Message Queue : Web API에서 온)에 쌓임
//* 4. Stack에 아무것도 없을 경우에만 js는 Message Queue에 있는걸 가져감

//? why ? : nonblocking 이기 때문에
