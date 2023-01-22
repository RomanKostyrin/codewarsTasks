var isHappy = function (n) {
  let result;
  const map = {};
  while (!result) {
    const digits = n.toString().split("");
    const n = digits.reduce((acc, el) => acc + el ** 2, 0);
    if (map[n]) result = n;
    map[n] = true;
  }
  return result === 1;
};
