var combinationSum = function (candidates, target) {
  const map = [candidates.map((el) => ({ rest: target - el, arr: [el] }))];
  for (let i = 1; i < target / Math.min(...candidates); i++) {
    map[i - 1].forEach((el) => {
      candidates.forEach((cand) => {
        if (el.rest - cand >= 0) {
          if (!map[i]) map[i] = [];
          map[i].push({ rest: el.rest - cand, arr: [...el.arr, cand] });
        }
      });
    });
  }
  const result = map
    .flat()
    .reduce(
      (acc, el) =>
        el.arr.reduce((acc, el) => acc + el) === target
          ? [...acc, JSON.stringify(el.arr.sort())]
          : acc,
      []
    );
  return [...new Set(result)].map((el) => JSON.parse(el));
};
