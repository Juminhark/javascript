const timer = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(time), time);
  });
};

// Promise 기본 사용
// console.log('start');
// timer(1000)
//   .then((time) => {
//     console.log('time' + time);
//     return timer(time + 1000);
//   })
//   .then((time) => {
//     console.log('time' + time);
//     return timer(time + 1000);
//   })
//   .then((time) => {
//     console.log('time' + time);
//     console.log('end');
//   });

const run = async () => {
  console.log('start');
  let time = await timer(1000);
  console.log('time' + time);
  time = await timer(time + 1000);
  console.log('time' + time);
  time = await timer(time + 1000);
  console.log('time' + time);
  console.log('end');
};

console.log(run());
// Promise { <pending> } : async 는 promise를 return한다
