# Javascript

- [모던 JavaScript 튜토리얼](https://ko.javascript.info/hello-world)

## 버젼

- ES3 (1999) : 우리가 흔히 말하는 자바스크립트.
- ES5 (2009) :
  - 1. 배열에 forEach, map, filter, reduce, some, every와 같은 메소드 지원
  - 2. Object에 대한 getter / setter 지원
  - 3. 자바스크립트 strict 모드 지원
  - 4. JSON 지원 ( 과거에는 XML을 사용하다가, json이 뜨면서 지원하게 됨 )
- ES2015 (ES6) :
  - 1. let, const 키워드 추가
  - 2. arrow 문법 지원
  - 3. iterator / generator 추가
  - 4. module import / export 추가
  - 5. Promise 도입
- ES8 (ECMA2017)
  - 1. async / await

### tutorial 순서

- 1. helloWorld
- 2. variables
- 3. concatenation
- 4. dataTypes
- 5. prompt, confirm
- 6. conversion
- 7. operators

## require vs import (CommonJs와 ES6)

- ES6

```ts
// 모듈 전체를 export, 파일내 한번만 사용가능하다.
var module = {};
export default module

// 모든 속성을 export
export *;

// 함수를 직접 export
export function moduleFunc() {};
var property = "some property";
export {property};


// 모듈 전체를 import
import module
import module as myModule


// 모든 속성 import
import * from module


// 특정 멤버(함수 등)만 import
import {moduleFunc, moduleFunc2} from module
```

- CommonJS

```ts
// 모듈 전체를 export
module.exports = module;

// 함수를 직접 export
exports.moduleFunc = function () {};

// 모듈 전체를 import
var module = require('./someModule.js');

// 모든 속성 import
// (위의 module 객체에 모든 속성이 담아져 온다.)

// 특정 멤버(함수 등)만 import, 위의 module을 이용한다.
module.moduleFunc;
```

- **왠만하면 CommonJS 사용.**

```ts
// Do this.
import * as example from 'example';
example.fn();

// Don't do this.
// import { fn } from 'example';
// fn();
```
