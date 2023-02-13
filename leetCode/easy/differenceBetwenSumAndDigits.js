var differenceOfSum = function (nums) {
  const summ = nums.reduce((acc, el) => acc + el);
  const digitSumm = nums
    .join("")
    .split("")
    .reduce((acc, el) => +acc + +el);
  return summ - digitSumm;
};
