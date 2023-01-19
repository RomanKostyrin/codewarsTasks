var majorityElement = function (nums) {
  const map = {};
  nums.forEach((el) => (map[el] ? map[el]++ : (map[el] = 1)));
  let max = Math.max(...Object.values(map));
  return Object.keys(map).find((k) => map[k] === max);
};
