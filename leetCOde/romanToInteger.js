var romanToInt = function (s) {
  const map = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      ans += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      ans += map[s[i]];
    }
  }

  return ans;
};
