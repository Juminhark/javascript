# Promise

## synchronous asynchronous

## fetch()

어떤 함수의 리턴값이 Promise일 경우, 그 함수는 비동기 일 가능성이 높다

- A Promise that resolves to a Response object

## then, catch

## neted & chaining

```js
const job1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('job1 ok');
    }, 2000);
  });
};

const job2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('job2 ok');
    }, 2000);
  });
};

// nested promise
// job1().then((data) => {
//   console.log('data1', data);
//   job2().then((data) => {
//     console.log('data2', data);
//   });
// });

// promise chaining
job1()
  .then((data) => {
    console.log('data1', data);
    return job2();
  })
  .then((data) => {
    console.log('data2', data);
  });
```

## all & race

## reference

- [mdn - promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [생활코딩 - promise](https://youtube.com/playlist?list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI&si=YDJM9QKyrVW3SJtt)
