//? 예약어를 사용하지 않는다.

//! Bad
let class;
let enum;
let extends;
let super;
let const;
let export;
let import;

//? 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용.
const SYMBOLIC_CONSTANTS;

//? 생성자는 대문자 카멜 케이스를 사용.
class ContructorName {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
}

//? 변수, 함수에는 카멜 케이스를 사용.
// 숫자, 문자, 불린
let dog;
let variableName;

// 배열 - 배열은 복수형 이름을 사용
const dogs = [];

// 정규표현식 - 정규표현식은 'r'로 시작
const rDedc =  /.*/;

// 함수
function getPropertyName() {

}

// 이벤트 핸들러 - 이벤트 핸들러는 'on'으로 시작
const onClick = () => {};
const onKeyDown = () => {};

// 불린 반환 함수 - 반환 값이 불린인 함수는 'is'로 시작
let isAvailable = false;

//? 지역 변수 or private 변수명은 '_'로 시작.
let _privateVariableName;
let _privateFunctionName;

// 객체일 경우
const customObjectName = {};
customObjectName.propertyName;
customObjectName._privatePropertyName;
_privateCustomObjectName;
_privateCustomObjectName._privatePropertyName;

//? URL, HTML 같은 범용적인 대문자 약어는 대문자 그래도 사용.
parseHTML
parseXML