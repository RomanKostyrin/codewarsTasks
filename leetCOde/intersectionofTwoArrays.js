var intersect = function (nums1, nums2) {
  const map = {};
  nums1.forEach((el) => (map[el] ? map[el]++ : (map[el] = 1)));
  const result = nums2.filter((el) => {
    if (map[el] && map[el] > 0) {
      map[el]--;
      return true;
    }
  });
  return result;
};
