function stairs(n) {
  const pattern = [];
  return [...Array(n)]
    .reduce((acc, el, i) => {
      pattern.push((i + 1) % 10);
      acc.push(
        [
          ...Array((n - i - 1) * 2).fill(" "),
          ...pattern,
          ...[...pattern].reverse(),
        ].join(" ")
      );
      return acc;
    }, [])
    .join("\n");
}
