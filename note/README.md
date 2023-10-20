# [자바스크립트 기초 강의 (ES5+) - 드림코딩](https://youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&si=7-Cvw5V9HyG4PP1N)

- script async와 defer의 차이점
- data types, let vs var, hoisting
- operator, if, for loop
- arrow function, 함수의 선언과 표현
- class vs object
- array 개념과 apis 정리
- json
- callback
- promise
- async await

## Guard Clauses

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
//? Guard Clauses

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

## [script async / defer](https://www.youtube.com/watch?v=tJieVCgGzhs)

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="main.js"></script>
</head>
<body>

</body>
</html>
```

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>

</head>
<body>
  <div></div>
  <script src="main.js"></script>
</body>
</html>
```

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script asyn src="main.js"></script>
</head>
<body>

</body>
</html>
```

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script defer src="main.js"></script>
</head>
<body>

</body>
</html>
```
