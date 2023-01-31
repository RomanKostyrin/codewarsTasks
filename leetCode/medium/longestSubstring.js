var lengthOfLongestSubstring = function (s) {
  let mem = {};
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]]) {
      const length = Object.keys(mem).length;
      i -= length - 1;
      max = Math.max(max, length);
      mem = {};
    }
    mem[s[i]] = true;
  }
  return Math.max(max, Object.keys(mem).length);
};
