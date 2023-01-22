var longestCommonPrefix = function (strs) {
  const first = strs[0];
  if (strs.length === 1) return first;
  for (let i = 1; i <= first.length; i++) {
    if (!strs.every((el) => el.startsWith(first.substring(0, i)))) {
      return first.substring(0, i - 1);
    }
  }
  return first;
};
