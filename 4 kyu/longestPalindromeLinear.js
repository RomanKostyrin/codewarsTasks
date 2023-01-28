const isPalindrome = (s) => s === s.split("").reverse().join("");

const getPalindrome = (s, start, end) => {
  let string = s.substring(start, end);
  for (let i = end; i < s.length; i++) {
    if (!isPalindrome(s.substring(start, i + 1))) return string;
    string = s.substring(start, i + 1);
    start--;
  }
  return string;
};

function longest_palindrome(s) {
  let maxString = "";
  for (let i = 0; i < s.length; i++) {
    if (maxString.length >= s.length) return maxString;
    const odd = isPalindrome(s.substring(i, i + 1))
      ? getPalindrome(s, i, i + 1)
      : "";
    const even = getPalindrome(s, i, i);
    maxString = odd.length > maxString.length ? odd : maxString;
    maxString = even.length > maxString.length ? even : maxString;
  }
  return maxString;
}
