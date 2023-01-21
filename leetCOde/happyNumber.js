var isHappy = function (n) {
  let result;
  const map = {};
  while (!result) {
    let digits = n.toString().split("");
    n = digits.reduce((acc, el) => acc + el ** 2, 0);
    if (map[n]) result = n;
    map[n] = true;
  }
  return result === 1;
};
