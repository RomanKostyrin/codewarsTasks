var isPowerOfThree = function (n) {
  if (n < 1) return false;
  let value = 0;
  while (Math.pow(3, value) < n) {
    value++;
  }
  return Math.pow(3, value) === n;
};
