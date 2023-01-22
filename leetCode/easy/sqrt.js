var mySqrt = function (x) {
  let res = 0;
  while ((res + 1) ** 2 <= x) {
    res++;
  }
  return res;
};
