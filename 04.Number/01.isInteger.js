//? Number.isInteger()

//? 주어진 값이 정수인지 판별

const fits = (x, y) => {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }

  return 'Does NOT fit!';
};

console.llog(fits(5, 10)); // Fits!

console.llog(fits(5, 11)); // Does NOT fit!
