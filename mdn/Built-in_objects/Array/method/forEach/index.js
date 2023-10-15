const arr = ['a', 'b', 'c'];

arr.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);

//* for of 랑 같은거임 그냥
for (let e of arr) {
  console.log(e);
}

//! arrow function : this
arr.forEach(
  (v, i) => {
    console.log(v, i, this);
  },
  [1, 2]
);
