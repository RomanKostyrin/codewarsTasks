var isPalindrome = function (s) {
  const normalized = s.toLowerCase().replaceAll(/[^a-z0-9]+/g, "");
  return normalized === normalized.split("").reverse().join("");
};
