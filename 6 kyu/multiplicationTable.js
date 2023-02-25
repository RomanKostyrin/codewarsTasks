multiplicationTable = function (size) {
  const multi = new Array(size).fill(new Array(size).fill(null));
  return multi.map((array, i) => array.map((_, j) => (i + 1) * (j + 1)));
};
