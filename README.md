# Javascript

- [코어 자바스크립트](https://ko.javascript.info/js)
- [드림코딩 by 엘리 - 자바스크립트 기초 강의](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=1)

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

- back-end : node.js => deno 작년. javascript => web => server (ES => server 표준화 => CommonJS)
- mobile : react-native
- desktop application : electron

## 뜨고 있는 기술

- web assembly : 브라우저에서 동작가능한 유일한 언어 javascript의 대체재. 네이티브에 가까운 저수준 어셈블리 언어. C/C++, Rust 등과 같은 언어의 컴파일 타겟. JavaScript와 함께 실행되며 서로를 보완할 수 있도록 설계.

### tutorial 순서

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

# [Florin Pop - 10 Projects with Vanilla JS](https://www.youtube.com/watch?v=dtKciwk_si4)

- 1.  Countdown Timer
  - Design: https://uidesigndaily.com/posts/sketch-countdown-timer-day-876
  - future date
  - timer
- 2.  Quiz App
  - Design: https://uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924
  - questions from obj
  - select answer
  - at the end show score
- 3.  Recipe App
  - Design: https://uidesigndaily.com/posts/sketch-recipe-app-food-mobile-day-615
  - recipe info on click
  - fav recipe (w/ localStorage)
- 4.  Notes App
  - Design: https://uidesigndaily.com/posts/photoshop-notes-widget-day-65
  - CRUD note
  - markdown
  - localStorage
- 5.  Todo App
  - Design: http://todomvc.com/examples/react/#/
  - CRUD todos
  - localStorage
- 6.  Movies App
  - Design: https://uidesigndaily.com/posts/photoshop-movie-app-mobile-day-193
  - list of movies
  - movie info
  - fav movie
  - actors
- 7.  Github Profiles
  - Design: https://uidesigndaily.com/posts/photoshop-profile-card-user-day-286
  - search for user
  - get and show data
- 8.  Password Generator
  - canvas
  - size
  - color
- 9. Weather App
  - api : https://www.metaweather.com/api/
  - Design: https://uidesigndaily.com/posts/photoshop-weather-prognosis-day-156
  - enter location
  - get weather
  - have some icons?

# [Florin Pop - 10 JavaScript Projects in 1 Hour](https://www.youtube.com/watch?v=8GPPJpiLqHk)

- 1. Hamburger Button
  - button + hamburger icon
  - menu > li > a -> hidden
  - toggle on click
  - animation
- 2. Toast Notification
  - toast container floating
  - toast design
  - button
  - click show random toast message
- 3. Auto Write Text
  - text
  - index
  - show text based on index
  - increment index
- 4. Popup / Modal
  - button
  - click on button to activate popup
  - popup container
  - popup with text
  - close btn popup with click event
- 5. Purple Heart Rain
  - heart css
  - falling animation
  - create heart
  - add class
  - add it to body
  - interval
- 6. Background Changer
  - button w/ click
  - generate color
  - change bg color on click
- 7. Dark mode toggle
  - text
  - css for dark mode
  - toggle
  - toggle event
- 8. Carousel
  - 3/4 images
  - carousel container
  - images container
  - images with fixed width and height
  - index
  - automatic switch index and update container transform property
- 9. Sound Board
  - sounds (HAVE THESE READY SIR)
  - array with names
  - loop over array
  - create buttons w/ text
  - play sound on click
- 10. Zoom effect
  - image
  - track mouse movement
  - set transform origin on hover
