function findEvenIndex(arr) {
  for (let i = 0; i <= arr.length; i++) {
    const reduce1 = arr.slice(0, i).reduce((acc, el) => acc + el, 0);
    const reduce2 = arr
      .slice(i + 1, arr.length)
      .reduce((acc, el) => acc + el, 0);
    if (reduce1 === reduce2) return i;
  }
  return -1;
}
