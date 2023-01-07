function duplicateCount(text) {
  const map = {};
  text
    .toLowerCase()
    .split("")
    .forEach((el) => (map[el] ? (map[el] += 1) : (map[el] = 1)));
  return Object.keys(map).filter((el) => map[el] > 1).length;
}
