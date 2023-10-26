// 0.181930

const solution = (a, b, c) => {
  let result = new Set([a, b, c]);

  switch (result.size) {
    case 1:
      return (
        (a + b + c) *
        (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
        (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
      );
    case 2:
      return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    case 3:
    case 1:
      return a + b + c;
  }
};

solution([3, 6, 1]);
solution([3, 3, 3]);
