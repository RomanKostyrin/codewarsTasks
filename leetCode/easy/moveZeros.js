var moveZeroes = function (nums) {
  return nums.sort((a, b) => (b === 0 ? -1 : 0));
};
