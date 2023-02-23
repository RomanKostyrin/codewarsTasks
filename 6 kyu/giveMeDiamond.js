function diamond(n) {
  if (n < 1 || n % 2 === 0) return null;
  const res = [];
  for (let i = 1; i <= n * 2; i += 2) {
    const stars = Math.min(i, n * 2 - i);
    res.push(" ".repeat((n - stars) / 2) + "*".repeat(stars) + "\n");
  }
  return res.join("");
}
