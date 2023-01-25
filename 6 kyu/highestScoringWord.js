function high(x) {
  let longestWord = 0;
  return x.split(" ").reduce((acc, word) => {
    const length = word
      .split("")
      .reduce((acc, el) => acc + el.charCodeAt() - 96, 0);
    if (length > longestWord) {
      longestWord = length;
      acc = word;
    }
    return acc;
  }, 0);
}
