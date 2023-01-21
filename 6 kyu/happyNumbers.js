function happyNumbers(x) {
  const result = [];
  let repeat = 0;
  let map = {};
  for (let i = 1; i <= x; i++) {
    let number = i;
    while (!repeat) {
      const digits = number.toString().split("");
      number = digits.reduce((acc, el) => acc + el ** 2, 0);
      if (map[number]) repeat = number;
      map[number] = true;
    }
    if (repeat === 1) result.push(i);
    map = {};
    repeat = 0;
  }

  return result;
}
