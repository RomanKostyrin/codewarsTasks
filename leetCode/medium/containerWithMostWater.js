var maxArea = function (height) {
  let max = 0;
  let first = 0;
  let second = height.length - 1;

  while (first < second) {
    let firstValue = height[first];
    let secondValue = height[second];
    const length = height.lastIndexOf(secondValue) - height.indexOf(firstValue);
    const summ = Math.min(firstValue, secondValue) * length;
    max = Math.max(summ, max);
    if (firstValue < secondValue) {
      first++;
    } else {
      second--;
    }
  }
  return max;
};
