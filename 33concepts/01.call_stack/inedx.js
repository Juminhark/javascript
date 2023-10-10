//? 1. Call Stack

//* javascript가 함수 실행을 control(handle)하는 방법.

function three() {
  console.log('i love js');
  throw Error('omg error');
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
  // throw Error('omg error');
}

zero();

//* debugging 해보면 zero()안의 one()=> two()=>three()=> console.log()  진행 후에
//* zero() 안의 error가 발생한다 : stack 구조로 쌓여 순차적으로 진행.
