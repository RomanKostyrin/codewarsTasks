var removeElement = function (nums, val) {
  let n = 0;
  for (let i = n - 1; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1, "_");
      n++;
    }
  }
  nums.sort((a) => (a === "_" ? 1 : -1));
  return nums.length - n;
};
