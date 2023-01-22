var plusOne = function (dgs) {
  let lastIndex = -1;
  for (let i = dgs.length - 1; i >= 0; i--) {
    if (dgs[i] !== 9) {
      lastIndex = i;
      break;
    }
  }
  const arr = lastIndex === -1 ? [0] : dgs.slice(0, lastIndex + 1);
  arr[arr.length - 1]++;

  return [...arr, ...Array(dgs.length - lastIndex - 1).fill(0)];
};
