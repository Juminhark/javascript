const sum = (x, y, z) => {
  return x + y + z;
};

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6
