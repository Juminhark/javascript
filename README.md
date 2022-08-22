# Javascript

## web 역사

- 1993 : Mosaic Web Browser
- 1994 : Netscape Navigator (Mosaic 개발팀을 이끌던 Marc Andreessen이 Netscape 설립)
  - html, css로 만든 web을 link로 이동. ui요소로 정리된 정적인 web.
- Dom 요소를 조작하는 Scripting 언어를 추가하여 동적인 web idea.
- 1994.10 : Mocha로 불렸던 LiveScript
  - (Netscape Navigator안에는 LiveScript를 이해하고 실행하는 LiveScript Engine : InterPreter포함)
  - 당시 인기있었던 java의 이름을 배껴 LiveScript -> JavaScript로 변경.
- 1995 : Microsoft에서 JavaScript를 Reverse engineering(binary code를 분석하여 source code를 복원) : JScript 언어를 만듬.
- 1995 : Microsoft : Internet Explorer 출시
- 1996 : Netscape Navigator(Javascript), Internet Explorer(JScript) 두 browser에서 잘 작동하도록 만들어야했다.
- 1997 : Netscape JavaScript를 ECMA International를 통해 표준화.

## 버젼

- ECMAScript 1 (1997)
- ECMAScript 2 (1998)
- ECMAScript 3 (1999)
  - 1. error handling
  - 2. three equal operator (===)
- ECMAScript 4 (2000) : 95% user가 Internet Explorer 사용 => ES발전을 차용할 엔진의 개발을 멈춤

  - 1. optional type annotation
  - 2. Enterprise scale

- Netscape Navigator(Netscape), Internet Explorer(Microsoft), Firefox(mozilla) 의 공존으로 표준화가 진행되지않음.
- 2004 : AJAX(Asynchronous JavaScript and XML, Jesse James Garrett)

  - [웹페이지를 리로드하지 않고 server에서 데이터를 불러오는 방식.](https://coding-factory.tistory.com/143)

- jQuery : APIs (다양한 browser을 대응하기 위한 수단.)

- ECMAScript 5 (2009) : chrome-JIT(just-in-time compilation)엔진 등장으로 브라우저의 성능개선. => 표준화 필요
  - 1. 배열에 forEach, map, filter, reduce, some, every와 같은 메소드 지원
  - 2. Object에 대한 getter / setter 지원
  - 3. 자바스크립트 strict 모드 지원
  - 4. JSON 지원 ( 과거에는 XML을 사용하다가, json이 뜨면서 지원하게 됨 )
- ECMAScript 6 (2015) : 우리가 흔히 말하는 자바스크립트.
  - 1. class
  - 2. let, const 키워드 추가
  - 3. arrow function문법 지원
  - 4. iterator / generator 추가
  - 5. module import / export 추가
  - 6. Promise 도입
  - 7. default parameter
- ECMAScript 7 (2016)
- ECMAScript 8 (2017)
  - 1. async / await
- ECMAScript 9 (2018)
- ECMAScript 10 (2019)

- 다양한 엔진 Chrome(V8), Firefox(SpiderMonkey), Safari(JSCore), MS Edge(Chakra) 등.
- Chrome(V8)은 nodeJS, electron 에서도 이용.

- TypeScript

## 개발 환경

- 최신 ES 환경을 사용하고 싶은 개발자들을 위해 BABEL 등장
- BABEL : TypeScript, 최신 ES => ES5, ES6로 변환(Javascript transcompiler)

## 최근 동향

- SPA(Single Page Application) : 1개의 페이지 안에서 데이터를 받아와 필요한 정보만 업데이트
- SPA를 쉽게 하기 위해 React, Angular, Vue 와 같은 라이브러리, 프레임워크를 사용.

## 이용 분야

- back-end : node.js => deno 작년.
- javascript => web => server (ES => server 표준화 => CommonJS)
- mobile : react-native
- desktop application : electron

## 뜨고 있는 기술

- web assembly : 브라우저에서 동작가능한 유일한 언어 javascript의 대체재. 네이티브에 가까운 저수준 어셈블리 언어. C/C++, Rust 등과 같은 언어의 컴파일 타겟. JavaScript와 함께 실행되며 서로를 보완할 수 있도록 설계.

## tutorial 순서

- 1. helloWorld
- 2. variables
- 3. concatenation
- 4. dataTypes
- 5. prompt, confirm
- 6. conversion
- 7. operators

## require vs import (CommonJs와 ES6)

- ES6는 Javascript 표준화. CommonJS는 서버사이드에서 범용화를 위한 표준화.

- ES6

```ts
// 모듈 전체를 export, 파일내 한번만 사용가능하다.
var module = {

};
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

## [Guard Clauses](https://blog.fakecoding.com/archives/guard-clause/)

- 변수의 선언 및 할당, 파라미터의 유효성, 참조하는 객체의 올바른 생성 등 조건을 체크하는 경우
- 보편적으로 if.. else.. 조건문이나 switch case 조건문등을 활용해서 처리
- 조건문의 중첩이 깊어질수록 가독성이 떨어지고 점차 추후 유지보수에 큰 걸림돌이 된다
- 중첩된 조건문을 사용할 필요가없는 경우 guard clause로 처리하는것이 좋다

- Guard Clauses란? 사전 조건이 다음 단계로 진행하기 위한 올바른 실행 조건이 아니라면) 예외처리를 하여 더이상 다음 단계가 실행되지 않도록 하는것

```js
// if.. else
function doUserCoinMinus(user) {
  if (user != null) {
    if (user?.grant == null) {
      if (user?.coin < 100) {
        user.coin -= 1000;
        return true;
      } else {
        throw new Exception('보유한 적립금이 부족합니다.');
      }
    } else {
      throw new Exception('해당 권한이 없습니다.');
    }
  } else {
    throw new Exception('로그인이 필요합니다.');
  }
}

// guard
function doUserCoinMinus(user) {
  if (user == null) {
    throw new Exception('로그인이 필요합니다.');
  }
  if (user?.grant == null) {
    throw new Exception('해당 권한이 없습니다.');
  }
  if (user?.coin < 1000) {
    throw new Exception('보유한 적립금이 부족합니다.');
  }

  user.coin -= 1000;
}
```

- Why I Don't Use Else When Programming

```js
//? [Guard Clauses](https://blog.fakecoding.com/archives/guard-clause/)

//! 👎 : Single return  is bad
function canDrink(person) {
  if (person?.age != null) {
    if (person.age < 18) {
      console.log('Nope !');
    } else if (person.age < 21) {
      console.log('not in us !');
    } else {
      console.log('yes !');
    }
  } else {
    console.log('You are not a person');
  }

  return 1;
}

const p = {
  age: 22,
};

canDrink(p);

//? 👍
function canDrinkBetter(person) {
  if (person?.age == null) {
    console.log('You are not a person');
    return;
  }

  if (person.age < 18) {
    console.log('Nope !');
    return;
  }

  if (person.age < 21) {
    console.log('not in us !');

    return;
  }

  console.log('yes !');
}

canDrinkBetter(p);

//? 👍👍 : ExtractFunction
function canDrinkBest(person) {
  if (person?.age == null) {
    console.log('You are not a person');
    return;
  }

  let result = canDrinkResponse(person.age);

  console.log(result);
}

function canDrinkResponse(age) {
  if (age < 18) return 'Nope !';
  if (age < 21) return 'not in us !';
  return 'yes !';
}

canDrinkBest(p);
```

## [Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
positionMatch.bind(null, position))

// .bind() 의 첫번째 인자에 값을 대입하며 진행

```

## don`t write long functions : 가독성의 문제

```js
const axios = require("axios")

const apiInstance = axios.create({
  baseURL: 'https://locallhost:5000'
  headers: {"api-key": process.env.SEND_IN_BLUE_API_KEY}
})

//! 👎 : #region Original
async function linkContactAndItem(email, {listId}) {
  // 1. Get Contact
  // 2.1. if contact exists then update
  // 2.2 I no contact then create
  const contact = await apiInstance
    .get(`contacts/${emailOrId}`)
    .then(res => res.data)
    .catch(e => {
      if(e.response.status === 404) return null
      throw e
    })

    if(contact == null) {
      return apiInstance.post("contacts", {
        email,
        listIds : [listId],
      })
    } else {
      return apiInstance.put(`contacts/${emailOrId}`, {
        listIds: [newListId],
      })
    }
}
// #endregion


//? 👍👍 #region small functions
async function linkContactAndItem(email, {listId}) {
  const contact = await getContact(email)

  if(contact == null) {
    return createContact(email, listId)
  }
  return updateContact(contact.id, listId)
}


function createContact(email, listId) {
  return apiInstance.post("contacts", {
    email,
    listIds : [listId],
  })
}

function updateContact(emailOrId, newListId) {
  return apiInstance.put(`contacts/${emailOrId}`, {
    listIds: [newListId],
  })
}

function getContact(emailOrId) {
  return apiInstance
    .get(`contacts/${emailOrId}`)
    .then(res => res.data)
    .catch(e => {
      if(e.response.status === 404) return null
      throw e
    })
}
// #endregion
```

## [function.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## [Optional chaining](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## [function.ceil()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

# Reference

- [JavaScript 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
- [코어 자바스크립트](https://ko.javascript.info/js)
- [드림코딩 by 엘리 - 자바스크립트 기초 강의](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=1)
- [js_server-nodeJS](https://nodejs.org/docs/latest-v13.x/api/console.html)

- [드림코딩 by 엘리 JS 강의](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=1)

- [드림코딩 by 엘리 JS 강의 정리](https://www.notion.so/07dfed016e914c3a8612fc76dd1542f0?v=c6feaeb5b46e4fdeb1e756113cb529c1)
