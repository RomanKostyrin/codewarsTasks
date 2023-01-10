function solution(number) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return number
    .toString()
    .padStart(4, 0)
    .split("")
    .map((el, i) => {
      if (!el) return;
      const key = 10 ** (3 - i);
      const shift = el < 9 ? 5 : 10;
      return el < 4
        ? map[key].repeat(el)
        : map[key].repeat(Math.max(0, shift - el)) +
            map[shift * key] +
            map[key].repeat(Math.max(0, el - shift));
    })
    .filter(Boolean)
    .join("");
}
