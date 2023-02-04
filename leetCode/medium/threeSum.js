var threeSum = function (nums) {
  const arr = new Set();
  nums.forEach((el, i) => {
    for (let ind = i + 1; ind < nums.length; ind++) {
      const res = el + nums[ind];
      const lastIndex = nums.indexOf(-res);
      if (nums[ind] !== undefined && lastIndex !== -1) {
        if (![i, ind].includes(lastIndex)) {
          const summ = [el, nums[ind], nums[lastIndex]].sort();
          arr.add(JSON.stringify(summ));
        }
      }
    }
  });
  return [...arr].map((el) => JSON.parse(el));
}; // bad performance
