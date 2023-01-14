var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      nums.splice(nums.indexOf(nums[i]), 1);
      i--;
    }
  }

  return nums.length;
};
