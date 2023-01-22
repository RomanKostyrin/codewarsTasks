var missingNumber = function (nums) {
  const map = {};
  nums.forEach((el) => (map[el] = true));
  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) return i;
  }
};
