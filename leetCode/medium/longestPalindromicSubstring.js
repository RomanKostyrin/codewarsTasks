var longestPalindrome = function (s) {
  const reverted = s.split("").reverse().join("");
  let string = "";
  let maxString = "";
  for (let i = 0; i < s.length; i++) {
    string = string + s[i];
    if (reverted.includes(string)) {
      if (string === string.split("").reverse().join("")) {
        maxString = maxString.length > string.length ? maxString : string;
      }
    } else {
      i = i - string.length + 1;
      string = "";
    }
  }
  return maxString;
};
