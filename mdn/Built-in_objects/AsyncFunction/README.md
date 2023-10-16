# AsyncFunction

AsyncFunction 생성자는 새로운 async function 객체를 만든다. 자바스크립트에서 모든 비동기 함수는 사실상 AsyncFunction 객체이다.

## 상세설명

AsyncFunction 생성자를 통해 만들어진 asyc function 객체는 함수가 만들어질때 분석된다. 이 방법에서는 코드가 실행되지 않을 떄도 작동하기 때문에 async function expression으로 비동기 함수를 정의하고 해당 코드에서 호출할 때보다 비효율적이다.

함수에 전달된 모든 인수들은 전달된 순서대로 함수내에서 인수이름으로 식별자가 생성된 것처럼 다루어진다.

## reference

- [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
