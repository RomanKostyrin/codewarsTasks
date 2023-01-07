var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  let max = 0;
  arr.reduce((acc, el) => {
    max = Math.max(max, acc + el);
    return acc < 1 ? el : acc + el;
  });
  return Math.max(max, ...arr);
};
