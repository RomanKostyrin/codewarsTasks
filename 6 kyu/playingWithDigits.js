function digPow(n, p) {
  const result =
    n
      .toString()
      .split("")
      .reduce((acc, dig, i) => acc + Math.pow(dig, p + i), 0) / n;
  return Number.isInteger(result) ? result : -1;
}
