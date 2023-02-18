function count(string) {
  const chars = {};
  string.split("").map((el) => {
    if (chars[el]) {
      chars[el] += 1;
    } else {
      chars[el] = 1;
    }
  });
  return chars;
}
