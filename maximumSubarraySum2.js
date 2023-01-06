function findSubarrMaxSum(arr) {
  if (arr.length === 0) return [[], 0];
  let max = 0;
  arr.reduce((acc, el) => {
    max = Math.max(max, acc + el);
    return acc < 1 ? el : acc + el;
  });
  let key = 0;
  const map = { [key]: [], max: [Math.max(arr)] };

  arr.reduce((acc, el, ind) => {
    if (acc < 1 || acc === max) {
      key += 1;
      map[key] = [el];
      return el;
    } else {
      if (acc > 0) map[key].push(el);
      return acc + el;
    }
  }, 0);

  const result = Object.values(map).filter(
    (arr) => arr.length && arr.reduce((a, b) => a + b) === max
  );
  const flat = result.length === 1 ? result : [result];

  return [...flat, max];
}
