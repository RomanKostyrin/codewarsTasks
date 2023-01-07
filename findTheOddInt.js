function findOdd(A) {
  const map = {};
  A.forEach((el) => (map[el] ? (map[el] += 1) : (map[el] = 1)));
  return +Object.keys(map).find((key) => map[key] % 2 !== 0);
}
